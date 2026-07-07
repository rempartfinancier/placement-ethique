// ============================================================
// REGISTRE DES SUPPORTS HALAL RÉELLEMENT DISPONIBLES — données de fonds
// ------------------------------------------------------------
// Contenu métier (pas de calcul), consommé par la fiche d'allocation.
// AUCUNE donnée de fonds en dur dans l'UI : tout vient d'ici.
//
// Liste des supports et référencements par contrat : transmis par le
// cabinet le 06/07/2026 (statut « Certifié » repris tel quel de cette
// liste — l'organisme/comité de certification reste à préciser pour
// l'affichage public ; le DIC et le prospectus de chaque support font
// foi et priment sur les informations affichées ici).
//
// Règles :
// - chaque fonds est daté/sourcé, avec statut "SOURCÉ" ou "À VALIDER" ;
// - tant que dicUrl est null, l'UI affiche « DIC disponible sur
//   demande auprès du cabinet » ;
// - les performances passées ne préjugent pas des performances
//   futures : mention obligatoire près de tout historique affiché ;
// - mise à jour manuelle à cadence TRIMESTRIELLE (VL, performances,
//   SRI) et à chaque évolution de l'univers halal des contrats —
//   checklist dans docs/donnees-fonds-mise-a-jour.md.
// ============================================================

import type { ContratId } from "./contrats";

/**
 * Date de référence des données. La liste des supports est à jour ;
 * les performances/SRI encore présents viennent d'une fiche Quantalys
 * ANCIENNE (signalé par le cabinet) — à rafraîchir avant toute mise en
 * avant commerciale.
 */
export const DONNEES_FONDS_MAJ =
  "liste des supports : cabinet, 06/07/2026 · performances et SRI : fiche Quantalys ancienne, à rafraîchir";

export type CategorieSupport =
  | "Fonds sukuk"
  | "ETF actions monde"
  | "ETF actions émergentes"
  | "ETF actions Europe"
  | "ETF actions Japon"
  | "ETF foncières cotées"
  | "Or physique"
  | "Fonds actions Europe";

export interface PerfCumulees {
  unMoisPct: number | null;
  unAnPct: number | null;
  troisAnsPct: number | null;
  cinqAnsPct: number | null;
  depuisCreationPct: number | null;
}

export interface PerfCalendaires {
  /** Année en cours à la date d'arrêté (cf. DONNEES_FONDS_MAJ). */
  ytdPct: number | null;
  a2024Pct: number | null;
  a2023Pct: number | null;
  a2022Pct: number | null;
}

export interface FondsHalal {
  isin: string;
  nom: string;
  categorie: CategorieSupport;
  /** Indicateur synthétique de risque du DIC (SRI, 1 à 7) — null tant que non relevé. */
  sri: 1 | 2 | 3 | 4 | 5 | 6 | 7 | null;
  /** Devise de la part — null si non confirmée. */
  devise: "EUR" | "USD" | null;
  /** VL et sa date — null tant que non renseignées. */
  vl: number | null;
  vlDate: string | null;
  /** Lien vers le DIC réglementaire — null = « disponible sur demande ». */
  dicUrl: string | null;
  /**
   * Cadre de conformité affiché. Formulation factuelle uniquement — le
   * site ne revendique aucune autorité religieuse propre (normes
   * AAOIFI, comités des sociétés de gestion).
   */
  conformite: string;
  perfCumulees: PerfCumulees | null;
  perfCalendaires: PerfCalendaires | null;
  /** Contrats sur lesquels le support est référencé (liste cabinet du 06/07/2026). */
  disponibleSur: ContratId[];
  statut: "SOURCÉ" | "À VALIDER";
  source: string;
}

const CERTIFIE =
  "Certifié conforme (liste des supports du cabinet, 06/07/2026). Organisme de certification à préciser pour l'affichage public — le DIC et le prospectus font foi.";
const SOURCE_LISTE = "Liste des supports halal transmise par le cabinet le 06/07/2026.";
const SOURCE_LISTE_ET_QUANTALYS =
  "Liste des supports : cabinet, 06/07/2026. SRI/devise : fiche Quantalys ancienne du portefeuille équilibré — à rafraîchir.";

export const FONDS: Record<string, FondsHalal> = {
  // ---- Référencés Vie Plus / Patrimoine Vie (Suravenir) ----
  LU0923115975: {
    isin: "LU0923115975",
    nom: "Franklin Global Sukuk Fund N (Acc) EUR",
    categorie: "Fonds sukuk",
    sri: 3, // ⚠ fiche Quantalys ancienne — à rafraîchir
    devise: "EUR",
    vl: null, // ⚠ PLACEHOLDER — à renseigner à chaque mise à jour trimestrielle
    vlDate: null,
    dicUrl: null, // ⚠ PLACEHOLDER — lien DIC officiel à renseigner
    conformite: CERTIFIE,
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["pvp"],
    statut: "SOURCÉ",
    source: SOURCE_LISTE_ET_QUANTALYS,
  },
  LU2374587298: {
    isin: "LU2374587298",
    nom: "BNP Paribas Islamic Hilal Income Fund Classic EUR-Cap",
    categorie: "Fonds sukuk",
    sri: null, // à relever sur le DIC
    devise: "EUR",
    vl: null,
    vlDate: null,
    dicUrl: null,
    conformite: CERTIFIE,
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["pvp"],
    statut: "SOURCÉ",
    source: SOURCE_LISTE,
  },
  LU0806931092: {
    isin: "LU0806931092",
    nom: "HSBC Islamic Global Equity Index Fund AC EUR",
    categorie: "ETF actions monde",
    sri: 5, // ⚠ fiche Quantalys ancienne — à rafraîchir
    devise: "EUR",
    vl: null,
    vlDate: null,
    dicUrl: null,
    conformite: CERTIFIE,
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["pvp"],
    statut: "SOURCÉ",
    source: SOURCE_LISTE_ET_QUANTALYS,
  },
  IE0009BC6K22: {
    isin: "IE0009BC6K22",
    nom: "HSBC MSCI Emerging Markets Islamic Screened Capped UCITS ETF",
    categorie: "ETF actions émergentes",
    sri: 4, // ⚠ fiche Quantalys ancienne — à rafraîchir
    devise: "USD", // part relevée sur la fiche Quantalys — à confirmer
    vl: null,
    vlDate: null,
    dicUrl: null,
    conformite: CERTIFIE,
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["pvp"],
    statut: "SOURCÉ",
    source: SOURCE_LISTE_ET_QUANTALYS,
  },
  IE000AGFZM58: {
    isin: "IE000AGFZM58",
    nom: "HSBC MSCI Europe Islamic Screened UCITS ETF",
    categorie: "ETF actions Europe",
    sri: null,
    devise: null,
    vl: null,
    vlDate: null,
    dicUrl: null,
    conformite: CERTIFIE,
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["pvp"],
    statut: "SOURCÉ",
    source: SOURCE_LISTE,
  },
  IE0001XCFC82: {
    isin: "IE0001XCFC82",
    nom: "HSBC MSCI Japan Islamic Screened UCITS ETF",
    categorie: "ETF actions Japon",
    sri: null,
    devise: null,
    vl: null,
    vlDate: null,
    dicUrl: null,
    conformite: CERTIFIE,
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["pvp"],
    statut: "SOURCÉ",
    source: SOURCE_LISTE,
  },
  IE000U679IT9: {
    isin: "IE000U679IT9",
    nom: "HSBC FTSE EPRA NAREIT Developed Islamic UCITS ETF (HIND)",
    categorie: "ETF foncières cotées",
    sri: null,
    devise: null,
    vl: null,
    vlDate: null,
    dicUrl: null,
    conformite: CERTIFIE,
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["pvp"],
    statut: "SOURCÉ",
    source: SOURCE_LISTE,
  },

  // ---- Référencés UAF Life Patrimoine / Spirica (Version Absolue 2) ----
  LU0455842654: {
    isin: "LU0455842654",
    nom: "HSBC Islamic Funds — Global Equity Index Fund AC",
    categorie: "ETF actions monde",
    sri: null,
    devise: null,
    vl: null,
    vlDate: null,
    dicUrl: null,
    conformite:
      CERTIFIE +
      " Même stratégie que la part référencée chez Vie Plus (LU0806931092), part différente.",
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["uaf"],
    statut: "SOURCÉ",
    source: SOURCE_LISTE,
  },
  FR0013416716: {
    isin: "FR0013416716",
    nom: "Amundi Physical Gold ETC (C)",
    categorie: "Or physique",
    sri: null,
    devise: "EUR",
    vl: null,
    vlDate: null,
    dicUrl: null,
    conformite:
      "Or physique alloué et ségrégué — aucune structure de créance, aucune incertitude sur la propriété (liste cabinet, 06/07/2026). Le DIC et le prospectus font foi.",
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["uaf"],
    statut: "SOURCÉ",
    source: SOURCE_LISTE + " Référencé sur Version Absolue 2 et d'autres contrats Spirica.",
  },

  // ---- Référencé sur les deux contrats ----
  IE00B3ZL9H82: {
    isin: "IE00B3ZL9H82",
    nom: "Comgest Growth Europe S USD Acc",
    categorie: "Fonds actions Europe",
    sri: null,
    devise: "USD",
    vl: null,
    vlDate: null,
    dicUrl: null,
    // ⚠ PLACEHOLDER — seul support de la liste transmis SANS mention
    // « Certifié » : ne pas l'afficher dans un portefeuille type tant
    // que le cabinet n'a pas précisé son statut de conformité.
    conformite:
      "Statut de conformité non précisé dans la liste transmise par le cabinet — à confirmer avant toute mise en avant.",
    perfCumulees: null,
    perfCalendaires: null,
    disponibleSur: ["pvp", "uaf"],
    statut: "À VALIDER",
    source: SOURCE_LISTE,
  },
};

export function fondsParIsin(isin: string): FondsHalal | null {
  return FONDS[isin] ?? null;
}
