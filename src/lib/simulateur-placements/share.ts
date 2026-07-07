// ============================================================
// Partage par URL — sérialisation/désérialisation de l'état du
// simulateur en search params, avec clamp systématique à la
// désérialisation (une URL forgée `?txu=50` est ramenée dans les
// bornes). Module pur et testé (pattern rempartfinancier/src/lib/
// simulateur-placements/share.ts). Les valeurs par défaut sont omises
// de l'URL ; `v=1` versionne le schéma.
// ============================================================

import {
  BORNES,
  INFLATION,
  RENDEMENTS,
  SCENARIO_PAR_DEFAUT,
  TMI_DISPONIBLES_PCT,
  TMI_PER_PAR_DEFAUT_PCT,
} from "./hypotheses";
import { CONTRATS, type ContratId } from "./contrats";
import type { Enveloppe } from "./fiscalite";
import type { FrequenceVersement } from "./engine";

export const VERSION_SCHEMA_URL = "1";

/** Préréglage de frais appliqué : un contrat réel ou une saisie libre. */
export type PresetFrais = ContratId | "perso";

export interface EtatPartage {
  enveloppe: Enveloppe;
  versementInitial: number;
  versementPeriodique: number;
  frequenceVersement: FrequenceVersement;
  indexationAnnuellePct: number;
  dureeAnnees: number;
  repartitionUcPct: number;
  tauxUcPct: number;
  tauxFondsEurosPct: number;
  presetFrais: PresetFrais;
  fraisEntreePct: number;
  fraisGestionUcPct: number;
  fraisGestionFondsEurosPct: number;
  estCouple: boolean;
  optionBareme: boolean;
  tmiPct: number;
  tmiEntreePct: number;
  tmiSortiePct: number;
  inflationActivee: boolean;
  inflationPct: number;
}

// Tous les défauts chiffrés viennent de hypotheses.ts et contrats.ts —
// aucun chiffre métier en dur ici. Le scénario d'accueil reprend la
// simulation de référence du cabinet (Patrimoine Vie Plus en
// assurance-vie, 2 500 € + 100 €/mois sur 20 ans, 100 % UC).
const FRAIS_PVP = CONTRATS.pvp.frais.av!; // pvp/av est toujours renseigné (cf. contrats.ts)

export const ETAT_PAR_DEFAUT: EtatPartage = {
  enveloppe: "av",
  versementInitial: SCENARIO_PAR_DEFAUT.versementInitial,
  versementPeriodique: SCENARIO_PAR_DEFAUT.versementPeriodique,
  frequenceVersement: "mensuelle",
  indexationAnnuellePct: SCENARIO_PAR_DEFAUT.indexationAnnuellePct,
  dureeAnnees: SCENARIO_PAR_DEFAUT.dureeAnnees,
  repartitionUcPct: SCENARIO_PAR_DEFAUT.repartitionUcPct,
  tauxUcPct: RENDEMENTS.uc.defautPct,
  tauxFondsEurosPct: RENDEMENTS.fondsEuros.defautPct,
  presetFrais: "pvp",
  fraisEntreePct: FRAIS_PVP.entreePct,
  fraisGestionUcPct: FRAIS_PVP.gestionUcPct,
  fraisGestionFondsEurosPct: FRAIS_PVP.gestionFondsEurosPct ?? 0,
  estCouple: false,
  optionBareme: false,
  tmiPct: TMI_PER_PAR_DEFAUT_PCT,
  tmiEntreePct: TMI_PER_PAR_DEFAUT_PCT,
  tmiSortiePct: TMI_PER_PAR_DEFAUT_PCT,
  inflationActivee: false,
  inflationPct: INFLATION.defautPct,
};

// ---- Tables de codes (courts, stables — ne pas renuméroter sans bump de v) ----

const CODE_VERS_ENVELOPPE: Record<string, Enveloppe> = {
  l: "libre",
  av: "av",
  per: "per",
};
const ENVELOPPE_VERS_CODE: Record<Enveloppe, string> = {
  libre: "l",
  av: "av",
  per: "per",
};

// « hebdomadaire » est supporté par le moteur mais pas proposé par l'UI :
// le code « h » n'est pas accepté à la désérialisation (un état chargé
// doit toujours être représentable et éditable à l'écran).
const CODE_VERS_FREQUENCE: Record<string, FrequenceVersement> = {
  m: "mensuelle",
  t: "trimestrielle",
  a: "annuelle",
};
const FREQUENCE_VERS_CODE: Record<FrequenceVersement, string> = {
  hebdomadaire: "h",
  mensuelle: "m",
  trimestrielle: "t",
  annuelle: "a",
};

/**
 * Clés de search params gérées par ce schéma — utilisées par l'UI pour
 * réécrire l'URL sans toucher aux paramètres étrangers (utm_*, gclid…).
 */
export const CLES_SCHEMA_URL = [
  "v",
  "env",
  "vi",
  "vp",
  "fv",
  "idx",
  "d",
  "uc",
  "txu",
  "txf",
  "ctr",
  "fe",
  "fgu",
  "fgf",
  "cpl",
  "bar",
  "tmi",
  "tme",
  "tms",
  "inf",
  "infpct",
] as const;

// ---- Helpers ----

// Sans perte : une valeur saisie au clavier (ex. 1,234 %) doit se
// recharger à l'identique depuis un lien partagé.
const formatNombre = (n: number): string => String(n);

function lireNombre(brut: string | undefined, defaut: number, min: number, max: number): number {
  if (brut === undefined) return defaut;
  const n = Number.parseFloat(brut);
  if (!Number.isFinite(n)) return defaut;
  return Math.min(max, Math.max(min, n));
}

function lireBooleen(brut: string | undefined, defaut: boolean): boolean {
  if (brut === undefined) return defaut;
  if (brut === "1") return true;
  if (brut === "0") return false;
  return defaut;
}

function lireCode<T>(brut: string | undefined, table: Record<string, T>, defaut: T): T {
  if (brut === undefined) return defaut;
  return table[brut] ?? defaut;
}

// TMI : ramenée à la valeur autorisée la plus proche (barème de l'UI).
function lireTmi(brut: string | undefined, defaut: number): number {
  if (brut === undefined) return defaut;
  const n = Number.parseFloat(brut);
  if (!Number.isFinite(n)) return defaut;
  return TMI_DISPONIBLES_PCT.reduce(
    (plusProche, tmi) => (Math.abs(tmi - n) < Math.abs(plusProche - n) ? tmi : plusProche),
    TMI_DISPONIBLES_PCT[0],
  );
}

// Préréglage de frais : seuls les contrats ayant au moins une enveloppe
// aux frais renseignés sont acceptés — les valeurs de frais explicites
// de l'URL font foi (cohérence fine rétablie en fin de désérialisation).
function lirePresetFrais(brut: string | undefined, defaut: PresetFrais): PresetFrais {
  if (brut === undefined) return defaut;
  if (brut === "perso") return "perso";
  const contrat = (Object.keys(CONTRATS) as ContratId[]).find((id) => id === brut);
  return contrat && Object.keys(CONTRATS[contrat].frais).length > 0 ? contrat : "perso";
}

// ---- Sérialisation ----

/** Produit les search params de partage ; les valeurs par défaut sont omises. */
export function serialiserEtat(etat: EtatPartage): Record<string, string> {
  const d = ETAT_PAR_DEFAUT;
  const params: Record<string, string> = { v: VERSION_SCHEMA_URL };
  if (etat.enveloppe !== d.enveloppe) params.env = ENVELOPPE_VERS_CODE[etat.enveloppe];
  if (etat.versementInitial !== d.versementInitial) params.vi = formatNombre(etat.versementInitial);
  if (etat.versementPeriodique !== d.versementPeriodique)
    params.vp = formatNombre(etat.versementPeriodique);
  if (etat.frequenceVersement !== d.frequenceVersement)
    params.fv = FREQUENCE_VERS_CODE[etat.frequenceVersement];
  if (etat.indexationAnnuellePct !== d.indexationAnnuellePct)
    params.idx = formatNombre(etat.indexationAnnuellePct);
  if (etat.dureeAnnees !== d.dureeAnnees) params.d = formatNombre(etat.dureeAnnees);
  if (etat.repartitionUcPct !== d.repartitionUcPct) params.uc = formatNombre(etat.repartitionUcPct);
  if (etat.tauxUcPct !== d.tauxUcPct) params.txu = formatNombre(etat.tauxUcPct);
  if (etat.tauxFondsEurosPct !== d.tauxFondsEurosPct)
    params.txf = formatNombre(etat.tauxFondsEurosPct);
  if (etat.presetFrais !== d.presetFrais) params.ctr = etat.presetFrais;
  if (etat.presetFrais === "perso") {
    // Frais « perso » : toujours sérialisés explicitement, même égaux aux
    // défauts du moment — les défauts viennent des frais (À VALIDER) du
    // contrat de référence et peuvent changer à la prochaine révision ;
    // un lien « perso » déjà partagé ne doit pas changer de frais pour
    // autant. Un préréglage contrat, lui, reste dérivable du contrat
    // (c'est le sens du lien : « les frais de ce contrat »).
    params.fe = formatNombre(etat.fraisEntreePct);
    params.fgu = formatNombre(etat.fraisGestionUcPct);
    params.fgf = formatNombre(etat.fraisGestionFondsEurosPct);
  }
  if (etat.estCouple !== d.estCouple) params.cpl = etat.estCouple ? "1" : "0";
  if (etat.optionBareme !== d.optionBareme) params.bar = etat.optionBareme ? "1" : "0";
  if (etat.tmiPct !== d.tmiPct) params.tmi = formatNombre(etat.tmiPct);
  if (etat.tmiEntreePct !== d.tmiEntreePct) params.tme = formatNombre(etat.tmiEntreePct);
  if (etat.tmiSortiePct !== d.tmiSortiePct) params.tms = formatNombre(etat.tmiSortiePct);
  if (etat.inflationActivee !== d.inflationActivee) params.inf = etat.inflationActivee ? "1" : "0";
  if (etat.inflationPct !== d.inflationPct) params.infpct = formatNombre(etat.inflationPct);
  return params;
}

// ---- Désérialisation ----

/**
 * Reconstruit un état complet depuis des search params partiels ou
 * forgés : chaque valeur est validée et ramenée dans les bornes
 * (BORNES), les codes inconnus retombent sur le défaut, les params
 * inconnus sont ignorés, et la cohérence préréglage de frais ×
 * enveloppe × valeurs de frais est rétablie (pattern « matrice » du
 * share.ts rempartfinancier).
 */
export function deserialiserEtat(params: Record<string, string | undefined>): EtatPartage {
  const d = ETAT_PAR_DEFAUT;
  const etat: EtatPartage = {
    enveloppe: lireCode(params.env, CODE_VERS_ENVELOPPE, d.enveloppe),
    versementInitial: lireNombre(params.vi, d.versementInitial, 0, BORNES.capitalInitialMax),
    versementPeriodique: lireNombre(params.vp, d.versementPeriodique, 0, BORNES.versementMax),
    frequenceVersement: lireCode(params.fv, CODE_VERS_FREQUENCE, d.frequenceVersement),
    indexationAnnuellePct: lireNombre(
      params.idx,
      d.indexationAnnuellePct,
      0,
      BORNES.indexationMaxPct,
    ),
    dureeAnnees: Math.round(
      lireNombre(params.d, d.dureeAnnees, BORNES.dureeMinAnnees, BORNES.dureeMaxAnnees),
    ),
    repartitionUcPct: lireNombre(
      params.uc,
      d.repartitionUcPct,
      BORNES.repartitionUcMinPct,
      BORNES.repartitionUcMaxPct,
    ),
    tauxUcPct: lireNombre(params.txu, d.tauxUcPct, 0, BORNES.tauxAnnuelMaxPct),
    tauxFondsEurosPct: lireNombre(params.txf, d.tauxFondsEurosPct, 0, BORNES.tauxAnnuelMaxPct),
    presetFrais: lirePresetFrais(params.ctr, d.presetFrais),
    fraisEntreePct: lireNombre(params.fe, d.fraisEntreePct, 0, BORNES.fraisEntreeMaxPct),
    fraisGestionUcPct: lireNombre(params.fgu, d.fraisGestionUcPct, 0, BORNES.fraisGestionMaxPct),
    fraisGestionFondsEurosPct: lireNombre(
      params.fgf,
      d.fraisGestionFondsEurosPct,
      0,
      BORNES.fraisGestionMaxPct,
    ),
    estCouple: lireBooleen(params.cpl, d.estCouple),
    optionBareme: lireBooleen(params.bar, d.optionBareme),
    tmiPct: lireTmi(params.tmi, d.tmiPct),
    tmiEntreePct: lireTmi(params.tme, d.tmiEntreePct),
    tmiSortiePct: lireTmi(params.tms, d.tmiSortiePct),
    inflationActivee: lireBooleen(params.inf, d.inflationActivee),
    inflationPct: lireNombre(params.infpct, d.inflationPct, 0, INFLATION.maxSimulablePct),
  };

  // Cohérence du préréglage : la carte d'un contrat ne doit jamais être
  // affichée avec des frais qui ne sont pas les siens pour l'enveloppe
  // simulée (le PDF et l'UI s'appuient sur ce préréglage). Règles :
  // - enveloppe libre : le préréglage contrat n'a pas de sens → perso ;
  // - enveloppe non proposée par le contrat → perso ;
  // - frais explicites de l'URL divergents des frais du contrat → perso
  //   (les valeurs de l'URL font foi) ;
  // - sinon, les frais du contrat POUR CETTE ENVELOPPE remplacent les
  //   défauts (ex. `?env=per` charge la grille PER, pas la grille AV).
  if (etat.presetFrais !== "perso") {
    const fraisContrat =
      etat.enveloppe === "libre" ? undefined : CONTRATS[etat.presetFrais].frais[etat.enveloppe];
    if (fraisContrat === undefined) {
      etat.presetFrais = "perso";
    } else {
      const divergent =
        (params.fe !== undefined && etat.fraisEntreePct !== fraisContrat.entreePct) ||
        (params.fgu !== undefined && etat.fraisGestionUcPct !== fraisContrat.gestionUcPct) ||
        (params.fgf !== undefined &&
          etat.fraisGestionFondsEurosPct !== (fraisContrat.gestionFondsEurosPct ?? 0));
      if (divergent) {
        etat.presetFrais = "perso";
      } else {
        etat.fraisEntreePct = fraisContrat.entreePct;
        etat.fraisGestionUcPct = fraisContrat.gestionUcPct;
        etat.fraisGestionFondsEurosPct = fraisContrat.gestionFondsEurosPct ?? 0;
      }
    }
  }

  return etat;
}
