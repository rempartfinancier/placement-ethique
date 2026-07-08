// Garde-fous de l'esquisse d'allocation — `bun test src/lib/espace`.
// Ces invariants portent la conformité du parcours : un support ne doit
// jamais être proposable sans sa piste (donc sans sa mise en garde pour les
// SCPI et les métaux précieux), ni hors du contrat pressenti, ni s'il n'est
// pas SOURCÉ.
//
// ⚠ État actuel du registre FONDS (simulateur-placements/fonds.ts) : VIDE,
// l'univers ISR des contrats n'a pas encore été communiqué par le cabinet.
// Les tests ci-dessous vérifient donc explicitement la DÉGRADATION PROPRE de
// cet état — aucune ligne d'esquisse possible tant que le registre est vide —
// plutôt que des ISIN qui n'existent pas encore dans ce repo. Le jour où le
// cabinet transmettra la liste et que fonds.ts sera rempli, ces tests devront
// être complétés avec de vrais ISIN sourcés (cf. docs/donnees-fonds-mise-a-jour.md).

import { describe, expect, test } from "bun:test";
import {
  FONDS_SELECTIONNABLES,
  fondsProposables,
  resumeAllocation,
  totalPoids,
} from "./allocation";

describe("FONDS_SELECTIONNABLES", () => {
  test("est vide tant que l'univers ISR n'est pas communiqué par le cabinet", () => {
    expect(FONDS_SELECTIONNABLES).toEqual([]);
  });
});

describe("fondsProposables", () => {
  test("aucune piste sélectionnée → aucun support proposable", () => {
    expect(fondsProposables([], null)).toEqual([]);
  });

  test("registre vide → aucun support proposable quelles que soient les pistes sélectionnées", () => {
    expect(
      fondsProposables(
        ["actions_etf_isr", "obligations_vertes", "epargne_solidaire", "scpi_immobilier_durable", "metaux_precieux"],
        null,
      ),
    ).toEqual([]);
  });

  test("registre vide → aucun support proposable même avec un contrat pressenti", () => {
    expect(fondsProposables(["actions_etf_isr"], "pvp")).toEqual([]);
    expect(fondsProposables(["actions_etf_isr"], "uaf")).toEqual([]);
  });
});

describe("totalPoids", () => {
  test("ignore les poids null (« à discuter ») et somme le reste", () => {
    expect(
      totalPoids([
        { isin: "A", poidsPct: 40 },
        { isin: "B", poidsPct: null },
        { isin: "C", poidsPct: 25 },
      ]),
    ).toBe(65);
    expect(totalPoids([])).toBe(0);
    expect(totalPoids(undefined)).toBe(0);
  });
});

describe("resumeAllocation", () => {
  test("mode absent → aucune ligne (pas d'esquisse fantôme)", () => {
    expect(resumeAllocation(undefined)).toEqual([]);
    expect(resumeAllocation({ lignes: [{ isin: "LU0000000000", poidsPct: 50 }] })).toEqual([]);
  });

  test("mode avec_conseiller → une seule ligne explicite", () => {
    const lignes = resumeAllocation({ mode: "avec_conseiller" });
    expect(lignes).toHaveLength(1);
    expect(lignes[0]).toContain("conseiller");
  });

  test("esquisse sans support (univers non publié) → entête contrat seule", () => {
    const lignes = resumeAllocation({
      mode: "esquisse",
      enveloppe: "av",
      contratId: "pvp",
      lignes: [],
    });
    expect(lignes).toHaveLength(1);
    expect(lignes[0]).toContain("Patrimoine Vie Plus");
  });

  test("esquisse partielle (lignes formées manuellement) → supports nommés par leur ISIN, solde affiché", () => {
    // Les lignes n'ont pas besoin d'exister dans le registre FONDS pour être
    // résumées : resumeAllocation() formate ce qu'on lui donne, la cohérence
    // avec l'univers proposable est vérifiée côté serveur (sauverBrouillon).
    const lignes = resumeAllocation({
      mode: "esquisse",
      enveloppe: "per",
      contratId: "uaf",
      lignes: [
        { isin: "LU0000000001", poidsPct: 40 },
        { isin: "LU0000000002", poidsPct: null },
      ],
    });
    expect(lignes[0]).toContain("Version Absolue 2");
    expect(lignes.some((l) => l.includes("LU0000000001") && l.includes("40 %"))).toBe(true);
    expect(lignes.some((l) => l.includes("poids à discuter"))).toBe(true);
    expect(lignes.at(-1)).toContain("Solde non affecté : 60 %");
  });
});
