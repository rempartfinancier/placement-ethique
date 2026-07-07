// `bun test src/lib/simulateur-placements`.

import { describe, expect, test } from "bun:test";
import { CONTRATS } from "./contrats";
import { deserialiserEtat, serialiserEtat, ETAT_PAR_DEFAUT } from "./share";

describe("sérialisation", () => {
  test("l'état par défaut ne produit que le paramètre de version", () => {
    expect(serialiserEtat(ETAT_PAR_DEFAUT)).toEqual({ v: "1" });
  });

  test("aller-retour sans perte sur un état modifié", () => {
    const etat = {
      ...ETAT_PAR_DEFAUT,
      enveloppe: "per" as const,
      versementInitial: 5000,
      versementPeriodique: 250,
      frequenceVersement: "trimestrielle" as const,
      indexationAnnuellePct: 2,
      dureeAnnees: 25,
      repartitionUcPct: 80,
      tauxUcPct: 6.5,
      presetFrais: "perso" as const,
      fraisEntreePct: 2,
      estCouple: true,
      optionBareme: true,
      tmiPct: 41,
      inflationActivee: true,
      inflationPct: 2.5,
    };
    expect(deserialiserEtat(serialiserEtat(etat))).toEqual(etat);
  });
});

describe("désérialisation défensive", () => {
  test("params absents → état par défaut complet", () => {
    expect(deserialiserEtat({})).toEqual(ETAT_PAR_DEFAUT);
  });

  test("URL forgée : valeurs clampées aux bornes", () => {
    const etat = deserialiserEtat({ txu: "999", d: "999", vi: "-5", uc: "150" });
    expect(etat.tauxUcPct).toBe(15);
    expect(etat.dureeAnnees).toBe(60);
    expect(etat.versementInitial).toBe(0);
    expect(etat.repartitionUcPct).toBe(100);
  });

  test("codes inconnus → défauts ; TMI ramenée à la valeur autorisée la plus proche", () => {
    const etat = deserialiserEtat({ env: "zzz", fv: "x", tmi: "29" });
    expect(etat.enveloppe).toBe(ETAT_PAR_DEFAUT.enveloppe);
    expect(etat.frequenceVersement).toBe(ETAT_PAR_DEFAUT.frequenceVersement);
    expect(etat.tmiPct).toBe(30);
  });

  test("préréglage de frais : contrats connus acceptés, code inconnu → « perso »", () => {
    // ctr=uaf : préréglage valide, frais dérivés de la grille AV du
    // contrat (Version Absolue 2 : 1 %/1,00 %/—).
    const uaf = deserialiserEtat({ ctr: "uaf" });
    expect(uaf.presetFrais).toBe("uaf");
    expect(uaf.fraisGestionUcPct).toBe(CONTRATS.uaf.frais.av!.gestionUcPct);
    expect(deserialiserEtat({ ctr: "pvp" }).presetFrais).toBe("pvp");
    expect(deserialiserEtat({ ctr: "inconnu" }).presetFrais).toBe("perso");
  });

  test("invariant préréglage ↔ frais : des frais forgés divergents cassent le préréglage contrat", () => {
    // ?fe=5 sans ctr : le défaut « pvp » ne doit pas revendiquer des
    // frais qui ne sont pas ceux du contrat.
    const forge = deserialiserEtat({ fe: "5" });
    expect(forge.presetFrais).toBe("perso");
    expect(forge.fraisEntreePct).toBe(5);
    expect(deserialiserEtat({ ctr: "pvp", fe: "3" }).presetFrais).toBe("perso");
    // ?ctr=pvp seul reste cohérent (les défauts SONT les frais PVP).
    expect(deserialiserEtat({ ctr: "pvp" }).presetFrais).toBe("pvp");
  });

  test("dérivation par enveloppe : une URL PER charge la grille PER du contrat", () => {
    expect(CONTRATS.pvp.enveloppes).toEqual(["av", "per"]);
    const per = deserialiserEtat({ env: "per" });
    expect(per.presetFrais).toBe("pvp");
    expect(per.fraisGestionUcPct).toBe(CONTRATS.pvp.frais.per!.gestionUcPct);
    // Frais explicites cohérents avec la grille PER → préréglage conservé.
    expect(deserialiserEtat({ env: "per", fgu: "1" }).presetFrais).toBe("pvp");
    // Frais explicites divergents (ceux de la grille AV) → perso.
    expect(deserialiserEtat({ env: "per", fgu: "1.08" }).presetFrais).toBe("perso");
    // Enveloppe libre : le préréglage contrat n'a pas de sens.
    expect(deserialiserEtat({ env: "l" }).presetFrais).toBe("perso");
  });

  test("fréquence hebdomadaire non représentable dans l'UI : fv=h retombe sur mensuelle", () => {
    expect(deserialiserEtat({ fv: "h" }).frequenceVersement).toBe("mensuelle");
  });

  test("frais « perso » toujours sérialisés explicitement (les défauts PVP peuvent changer)", () => {
    const params = serialiserEtat({ ...ETAT_PAR_DEFAUT, presetFrais: "perso" });
    expect(params.fe).toBe(String(ETAT_PAR_DEFAUT.fraisEntreePct));
    expect(params.fgu).toBe(String(ETAT_PAR_DEFAUT.fraisGestionUcPct));
    expect(params.fgf).toBe(String(ETAT_PAR_DEFAUT.fraisGestionFondsEurosPct));
  });

  test("sérialisation sans perte : une saisie clavier à 3 décimales survit au partage", () => {
    const etat = { ...ETAT_PAR_DEFAUT, presetFrais: "perso" as const, fraisGestionUcPct: 1.234 };
    expect(deserialiserEtat(serialiserEtat(etat)).fraisGestionUcPct).toBe(1.234);
  });

  test("les paramètres inconnus sont ignorés", () => {
    expect(deserialiserEtat({ foo: "bar", v: "1" })).toEqual(ETAT_PAR_DEFAUT);
  });
});
