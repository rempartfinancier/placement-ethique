// Vecteurs calculés à la main en commentaire — `bun test src/lib/simulateur-placements`.

import { describe, expect, test } from "bun:test";
import { calculerFiscaliteSortie, type AssiettesSortie } from "./fiscalite";

const assiettes = (partiel: Partial<AssiettesSortie>): AssiettesSortie => ({
  capitalBrut: 0,
  primesVersees: 0,
  interetsFondsEurosCredites: 0,
  dureeDetentionAnnees: 10,
  ...partiel,
});

describe("assurance-vie — PFO puis régularisation (PFU)", () => {
  test("avant 8 ans : PFO 12,8 %, définitif identique, régularisation nulle", () => {
    // gain 20 000 ; PFO = définitif = 2 560 ; PS = 3 440 ; net = 114 000.
    const r = calculerFiscaliteSortie(
      assiettes({ capitalBrut: 120000, primesVersees: 100000, dureeDetentionAnnees: 5 }),
      { enveloppe: "av" },
    );
    expect(r.gainImposable).toBeCloseTo(20000, 6);
    expect(r.pfo).toBeCloseTo(2560, 6);
    expect(r.impotIRDefinitif).toBeCloseTo(2560, 6);
    expect(r.regularisation).toBeCloseTo(0, 6);
    expect(r.prelevementsSociauxSortie).toBeCloseTo(3440, 6);
    expect(r.capitalNet).toBeCloseTo(114000, 6);
    expect(r.abattementApplique).toBeCloseTo(0, 6);
  });

  test("après 8 ans, primes ≤ 150 k€ : PFO 7,5 % puis restitution après abattement", () => {
    // gain 50 000 ; PFO = 3 750 ; définitif = (50 000 − 4 600) × 7,5 % = 3 405 ;
    // régularisation = −345 (restitution) ; PS = 8 600 ; net = 137 995.
    const r = calculerFiscaliteSortie(
      assiettes({ capitalBrut: 150000, primesVersees: 100000, dureeDetentionAnnees: 10 }),
      { enveloppe: "av" },
    );
    expect(r.pfo).toBeCloseTo(3750, 6);
    expect(r.abattementApplique).toBeCloseTo(4600, 6);
    expect(r.impotIRDefinitif).toBeCloseTo(3405, 6);
    expect(r.regularisation).toBeCloseTo(-345, 6);
    expect(r.prelevementsSociauxSortie).toBeCloseTo(8600, 6);
    expect(r.capitalNet).toBeCloseTo(137995, 6);
    expect(r.alertes.some((a) => a.code === "abattement-av-majorant")).toBe(true);
  });

  test("après 8 ans, couple, primes 400 k€ > seuil 300 k€ : ventilation prorata + alerte seuil", () => {
    // prorata réduit = 300/400 = 0,75 → fractions 75 000 / 25 000 ;
    // abattement 9 200 imputé en priorité sur la fraction à 7,5 % ;
    // IR = 65 800 × 7,5 % + 25 000 × 12,8 % = 4 935 + 3 200 = 8 135 ;
    // PFO = 7 500 ; régularisation = 635.
    const r = calculerFiscaliteSortie(
      assiettes({ capitalBrut: 500000, primesVersees: 400000, dureeDetentionAnnees: 12 }),
      { enveloppe: "av", estCouple: true },
    );
    expect(r.pfo).toBeCloseTo(7500, 6);
    expect(r.impotIRDefinitif).toBeCloseTo(8135, 6);
    expect(r.regularisation).toBeCloseTo(635, 6);
    expect(r.alertes.some((a) => a.code === "seuil-couple-a-valider")).toBe(true);
  });

  test("option barème : TMI sur le gain après abattement, alerte CSG", () => {
    // gain 10 000, TMI 30 % : IR = (10 000 − 4 600) × 30 % = 1 620 ;
    // PFO = 750 ; régularisation = 870.
    const r = calculerFiscaliteSortie(
      assiettes({ capitalBrut: 110000, primesVersees: 100000, dureeDetentionAnnees: 9 }),
      { enveloppe: "av", option: "bareme", tmiPct: 30 },
    );
    expect(r.pfo).toBeCloseTo(750, 6);
    expect(r.impotIRDefinitif).toBeCloseTo(1620, 6);
    expect(r.regularisation).toBeCloseTo(870, 6);
    expect(r.alertes.some((a) => a.code === "bareme-csg-non-modelisee")).toBe(true);
  });

  test("intérêts fonds euros déjà taxés : exclus de l'assiette des PS de sortie", () => {
    // gain 20 000 dont 15 000 d'intérêts fonds euros déjà soumis aux PS
    // annuels : PS sortie = 17,2 % × 5 000 = 860.
    const r = calculerFiscaliteSortie(
      assiettes({
        capitalBrut: 120000,
        primesVersees: 100000,
        interetsFondsEurosCredites: 15000,
        dureeDetentionAnnees: 5,
      }),
      { enveloppe: "av" },
    );
    expect(r.prelevementsSociauxSortie).toBeCloseTo(860, 6);
  });

  test("moins-value : aucun impôt, capital net = capital brut", () => {
    const r = calculerFiscaliteSortie(
      assiettes({ capitalBrut: 90000, primesVersees: 100000, dureeDetentionAnnees: 10 }),
      { enveloppe: "av" },
    );
    expect(r.gainImposable).toBe(0);
    expect(r.totalImpots).toBeCloseTo(0, 6);
    expect(r.capitalNet).toBeCloseTo(90000, 6);
  });

  test("primes avant 27/09/2017 : PFL libératoire 35 % avant 4 ans, 7,5 % après 8 ans", () => {
    const avant4Ans = calculerFiscaliteSortie(
      assiettes({ capitalBrut: 110000, primesVersees: 100000, dureeDetentionAnnees: 3 }),
      { enveloppe: "av", regimePrimesAvant2017: true },
    );
    // gain 10 000 × 35 % = 3 500, libératoire (régularisation nulle).
    expect(avant4Ans.impotIRDefinitif).toBeCloseTo(3500, 6);
    expect(avant4Ans.pfo).toBeCloseTo(3500, 6);
    expect(avant4Ans.regularisation).toBeCloseTo(0, 6);

    const apres8Ans = calculerFiscaliteSortie(
      assiettes({ capitalBrut: 110000, primesVersees: 100000, dureeDetentionAnnees: 10 }),
      { enveloppe: "av", regimePrimesAvant2017: true },
    );
    // (10 000 − 4 600) × 7,5 % = 405.
    expect(apres8Ans.impotIRDefinitif).toBeCloseTo(405, 6);
  });
});

describe("PER — sortie en capital (modèle simplifié)", () => {
  test("versements au TMI de sortie, gains au PFU + PS 18,6 %, économie d'entrée à part", () => {
    // primes 50 000, capital 80 000, gain 30 000, TMI 30/30 :
    // économie entrée = 15 000 ; IR = 15 000 + 3 840 = 18 840 ;
    // PS = 5 580 ; net = 55 580.
    const r = calculerFiscaliteSortie(
      assiettes({ capitalBrut: 80000, primesVersees: 50000, dureeDetentionAnnees: 20 }),
      { enveloppe: "per", tmiEntreePct: 30, tmiSortiePct: 30 },
    );
    expect(r.economieImpotEntree).toBeCloseTo(15000, 6);
    expect(r.impotIRDefinitif).toBeCloseTo(18840, 6);
    expect(r.prelevementsSociauxSortie).toBeCloseTo(5580, 6);
    expect(r.capitalNet).toBeCloseTo(55580, 6);
  });

  test("moins-value : la base versements est bornée au capital perçu", () => {
    // capital 40 000 < primes 50 000 : IR = 40 000 × 30 % = 12 000, gain nul.
    const r = calculerFiscaliteSortie(
      assiettes({ capitalBrut: 40000, primesVersees: 50000, dureeDetentionAnnees: 20 }),
      { enveloppe: "per", tmiEntreePct: 30, tmiSortiePct: 30 },
    );
    expect(r.impotIRDefinitif).toBeCloseTo(12000, 6);
    expect(r.capitalNet).toBeCloseTo(28000, 6);
  });

  test("TMI absentes : défaut 30 % + alerte", () => {
    const r = calculerFiscaliteSortie(assiettes({ capitalBrut: 80000, primesVersees: 50000 }), {
      enveloppe: "per",
    });
    expect(r.alertes.some((a) => a.code === "per-tmi-par-defaut")).toBe(true);
    expect(r.economieImpotEntree).toBeCloseTo(15000, 6);
  });
});

describe("épargne libre — aucune fiscalité appliquée", () => {
  test("capital net = capital brut", () => {
    const r = calculerFiscaliteSortie(assiettes({ capitalBrut: 55000, primesVersees: 40000 }), {
      enveloppe: "libre",
    });
    expect(r.totalImpots).toBe(0);
    expect(r.capitalNet).toBeCloseTo(55000, 6);
  });
});

describe("invariants", () => {
  test("capitalNet ≤ capitalBrut sur toutes les enveloppes", () => {
    for (const enveloppe of ["libre", "av", "per"] as const) {
      for (const duree of [3, 8, 15]) {
        const r = calculerFiscaliteSortie(
          assiettes({ capitalBrut: 200000, primesVersees: 120000, dureeDetentionAnnees: duree }),
          { enveloppe, tmiEntreePct: 30, tmiSortiePct: 30 },
        );
        expect(r.capitalNet).toBeLessThan(200000.000001);
      }
    }
  });
});
