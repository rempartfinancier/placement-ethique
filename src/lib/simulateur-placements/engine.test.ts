// Vecteurs calculés à la main en commentaire — `bun test src/lib/simulateur-placements`.

import { describe, expect, test } from "bun:test";
import { projeterContrat, type ProjectionContratInput } from "./engine";

const SANS_FRAIS = { entreePct: 0, gestionUcPct: 0, gestionFondsEurosPct: 0 };

const base = (partiel: Partial<ProjectionContratInput>): ProjectionContratInput => ({
  enveloppe: "libre",
  versementInitial: 0,
  versementPeriodique: 0,
  frequenceVersement: "mensuelle",
  indexationAnnuellePct: 0,
  dureeAnnees: 1,
  repartitionUcPct: 100,
  tauxUcPct: 0,
  tauxFondsEurosPct: 0,
  frais: SANS_FRAIS,
  ...partiel,
});

describe("poche UC — capitalisation mensuelle r/12", () => {
  test("12 000 € à 12 %/an sur 1 an : 12 000 × 1,01^12", () => {
    // 1,01^12 = 1,126825… → 13 521,900361…
    const r = projeterContrat(base({ versementInitial: 12000, tauxUcPct: 12 }));
    expect(r.capitalBrutTerme).toBeCloseTo(12000 * Math.pow(1.01, 12), 6);
    expect(r.interetsCumules).toBeCloseTo(12000 * (Math.pow(1.01, 12) - 1), 6);
  });

  test("frais de gestion UC en réduction du taux : 7 % − 1 % = 6 % net", () => {
    const avecFrais = projeterContrat(
      base({
        versementInitial: 10000,
        tauxUcPct: 7,
        frais: { ...SANS_FRAIS, gestionUcPct: 1 },
      }),
    );
    const tauxNetDirect = projeterContrat(base({ versementInitial: 10000, tauxUcPct: 6 }));
    expect(avecFrais.capitalBrutTerme).toBeCloseTo(tauxNetDirect.capitalBrutTerme, 6);
  });
});

describe("poche fonds euros — crédit annuel + PS 17,2 % (assurance-vie)", () => {
  test("10 000 € à 3,5 % − 0,5 % de gestion : produits 300 €, PS 51,60 €", () => {
    const r = projeterContrat(
      base({
        enveloppe: "av",
        versementInitial: 10000,
        repartitionUcPct: 0,
        tauxFondsEurosPct: 3.5,
        frais: { ...SANS_FRAIS, gestionFondsEurosPct: 0.5 },
      }),
    );
    expect(r.lignes[0].produitsFondsEuros).toBeCloseTo(300, 6);
    expect(r.lignes[0].psFondsEuros).toBeCloseTo(51.6, 6);
    expect(r.psAnnuelsPreleves).toBeCloseTo(51.6, 6);
    expect(r.capitalBrutTerme).toBeCloseTo(10248.4, 6);
    // Le gain (248,40) est déjà intégralement issu d'intérêts fonds euros
    // taxés annuellement : aucun PS supplémentaire à la sortie.
    expect(r.fiscal!.prelevementsSociauxSortie).toBeCloseTo(0, 6);
  });

  test("prorata des versements intra-année : 100 €/mois à 2 % → 11 € d'intérêts", () => {
    // Σ 100 × 2 % × (12−m)/12 pour m = 1..12 = 2 × 66/12 = 11.
    const r = projeterContrat(
      base({
        enveloppe: "av",
        versementPeriodique: 100,
        repartitionUcPct: 0,
        tauxFondsEurosPct: 2,
      }),
    );
    expect(r.lignes[0].produitsFondsEuros).toBeCloseTo(11, 6);
    expect(r.lignes[0].psFondsEuros).toBeCloseTo(11 * 0.172, 6);
  });

  test("en PER, pas de PS annuels sur le fonds euros", () => {
    const r = projeterContrat(
      base({
        enveloppe: "per",
        versementInitial: 10000,
        repartitionUcPct: 0,
        tauxFondsEurosPct: 3,
        dureeAnnees: 5,
      }),
    );
    expect(r.psAnnuelsPreleves).toBe(0);
    expect(r.lignes.every((l) => l.psFondsEuros === 0)).toBe(true);
  });
});

describe("frais d'entrée et versements", () => {
  test("100 €/mois à 1 % d'entrée, taux nul : 1 188 € investis sur 1 200 € versés", () => {
    const r = projeterContrat(
      base({ versementPeriodique: 100, frais: { ...SANS_FRAIS, entreePct: 1 } }),
    );
    expect(r.versementsBrutsCumules).toBeCloseTo(1200, 6);
    expect(r.fraisEntreePayes).toBeCloseTo(12, 6);
    expect(r.capitalBrutTerme).toBeCloseTo(1188, 6);
  });

  test("indexation 10 %/an : versements année 2 = 110 €/mois", () => {
    const r = projeterContrat(
      base({ versementPeriodique: 100, indexationAnnuellePct: 10, dureeAnnees: 2 }),
    );
    expect(r.lignes[0].versementsBruts).toBeCloseTo(1200, 6);
    expect(r.lignes[1].versementsBruts).toBeCloseTo(1320, 6);
  });

  test("fréquence annuelle : versement crédité fin d'année (aucun intérêt la 1re année)", () => {
    const r = projeterContrat(
      base({
        enveloppe: "av",
        versementPeriodique: 1200,
        frequenceVersement: "annuelle",
        repartitionUcPct: 0,
        tauxFondsEurosPct: 2,
      }),
    );
    expect(r.lignes[0].produitsFondsEuros).toBeCloseTo(0, 6);
    expect(r.capitalBrutTerme).toBeCloseTo(1200, 6);
  });
});

describe("répartition bi-poche et scénario de référence cabinet", () => {
  test("répartition 60/40 : les versements se ventilent sans rééquilibrage", () => {
    const r = projeterContrat(
      base({
        enveloppe: "av",
        versementInitial: 1000,
        repartitionUcPct: 60,
        tauxUcPct: 0,
        tauxFondsEurosPct: 0,
      }),
    );
    expect(r.lignes[0].capitalUc).toBeCloseTo(600, 6);
    expect(r.lignes[0].capitalFondsEuros).toBeCloseTo(400, 6);
  });

  test("scénario BIG (2 500 € + 100 €/mois, 20 ans, 7 %, frais 1/1) : invariants", () => {
    const r = projeterContrat(
      base({
        enveloppe: "av",
        versementInitial: 2500,
        versementPeriodique: 100,
        dureeAnnees: 20,
        tauxUcPct: 7,
        frais: { entreePct: 1, gestionUcPct: 1, gestionFondsEurosPct: 0.6 },
      }),
    );
    expect(r.lignes.length).toBe(20);
    expect(r.versementsBrutsCumules).toBeCloseTo(2500 + 100 * 12 * 20, 6);
    expect(r.fraisEntreePayes).toBeCloseTo(0.01 * (2500 + 100 * 12 * 20), 6);
    // Invariant au centime : capital = versé net + intérêts cumulés.
    expect(r.capitalBrutTerme).toBeCloseTo(
      r.versementsBrutsCumules - r.fraisEntreePayes + r.interetsCumules,
      2,
    );
    expect(r.fiscal!.capitalNet).toBeLessThan(r.capitalBrutTerme);
    expect(r.capitalNet).toBe(r.fiscal!.capitalNet);
    // Ordre de grandeur : 6 % net de frais de gestion sur 20 ans.
    expect(r.capitalBrutTerme).toBeGreaterThan(50000);
    expect(r.capitalBrutTerme).toBeLessThan(60000);
  });
});

describe("enveloppe libre et garde-fous", () => {
  test("libre : pas de fiscalité, mono-poche même si répartition < 100", () => {
    const r = projeterContrat(
      base({ enveloppe: "libre", versementInitial: 1000, repartitionUcPct: 0, tauxUcPct: 5 }),
    );
    expect(r.fiscal).toBeNull();
    expect(r.capitalNet).toBeCloseTo(r.capitalBrutTerme, 6);
    expect(r.lignes[0].capitalFondsEuros).toBeCloseTo(0, 6);
    expect(r.capitalBrutTerme).toBeGreaterThan(1000);
  });

  test("durée clampée dans [1, 60]", () => {
    expect(projeterContrat(base({ dureeAnnees: 0 })).lignes.length).toBe(1);
    expect(projeterContrat(base({ dureeAnnees: 999 })).lignes.length).toBe(60);
  });

  test("entrées invalides : NaN retombe sur les défauts, montants négatifs à zéro", () => {
    const r = projeterContrat(
      base({ versementInitial: Number.NaN, versementPeriodique: -50, tauxUcPct: 5 }),
    );
    expect(r.capitalBrutTerme).toBe(0);
    expect(r.anneeBascule).toBeNull();
  });

  test("taux net négatif (frais > rendement) : le capital décroît, jamais de PS", () => {
    const r = projeterContrat(
      base({
        enveloppe: "av",
        versementInitial: 10000,
        repartitionUcPct: 0,
        tauxFondsEurosPct: 0.5,
        frais: { ...SANS_FRAIS, gestionFondsEurosPct: 2 },
        dureeAnnees: 5,
      }),
    );
    expect(r.capitalBrutTerme).toBeLessThan(10000);
    expect(r.psAnnuelsPreleves).toBe(0);
    // Pas d'impôt sur une moins-value.
    expect(r.fiscal!.totalImpots).toBeCloseTo(0, 6);
  });

  test("inflation : pouvoir d'achat réel déflaté", () => {
    const r = projeterContrat(
      base({ versementInitial: 10000, tauxUcPct: 0, inflationPct: 2, dureeAnnees: 10 }),
    );
    expect(r.capitalNetReel).toBeCloseTo(10000 / Math.pow(1.02, 10), 6);
  });
});
