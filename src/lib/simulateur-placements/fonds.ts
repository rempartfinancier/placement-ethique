// ============================================================
// REGISTRE DES SUPPORTS ISR/RESPONSABLES RÉELLEMENT DISPONIBLES
// ------------------------------------------------------------
// Contenu métier (pas de calcul), consommé par la fiche d'allocation.
// AUCUNE donnée de fonds en dur dans l'UI : tout vient d'ici.
//
// ⚠ ÉTAT ACTUEL : le cabinet n'a PAS ENCORE communiqué la liste des
// supports ISR/SFDR disponibles dans les contrats distribués
// (Patrimoine Vie Plus, Version Absolue 2). Règle anti-fabrication du
// brief : on n'invente JAMAIS un ISIN, une classification SFDR, un
// label ou une performance plausibles. Le registre reste donc VIDE et
// l'UI affiche « univers en cours de validation » tant que la liste
// n'est pas transmise (cf. docs/donnees-fonds-mise-a-jour.md).
//
// Règles au moment du remplissage :
// - chaque fonds est daté/sourcé, avec statut "SOURCÉ" ou "À VALIDER" ;
// - la classification SFDR et les labels (ISR, Greenfin, Finansol) se
//   relèvent sur les documents réglementaires (DIC, prospectus,
//   reporting SFDR), jamais sur une brochure commerciale ;
// - tant que dicUrl est null, l'UI affiche « DIC disponible sur
//   demande auprès du cabinet » ;
// - les performances passées ne préjugent pas des performances
//   futures : mention obligatoire près de tout historique affiché ;
// - mise à jour manuelle à cadence TRIMESTRIELLE (VL, performances,
//   SRI) et à chaque évolution de l'univers référencé.
// ============================================================

import type { ContratId } from "./contrats";

/** Date de référence des données affichée dans l'UI. */
export const DONNEES_FONDS_MAJ =
  "univers ISR des contrats : en attente de communication par le cabinet (juillet 2026)";

export type CategorieSupport =
  | "Fonds obligations vertes"
  | "Fonds obligataire ISR"
  | "ETF actions monde ISR"
  | "ETF actions émergentes ISR"
  | "ETF actions Europe ISR"
  | "Fonds actions ISR"
  | "Fonds solidaire"
  | "Fonds immobilier durable";

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

export interface FondsIsr {
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
   * Cadre extra-financier affiché : classification SFDR relevée sur le
   * document réglementaire, labels détenus (ISR, Greenfin, Finansol) avec
   * date de vérification. Formulation factuelle uniquement — le site ne
   * certifie rien lui-même, le DIC et le prospectus font foi.
   */
  cadreExtraFinancier: string;
  perfCumulees: PerfCumulees | null;
  perfCalendaires: PerfCalendaires | null;
  /** Contrats sur lesquels le support est référencé. */
  disponibleSur: ContratId[];
  statut: "SOURCÉ" | "À VALIDER";
  source: string;
}

/**
 * ⚠ REGISTRE VIDE — VOULU. La liste des supports ISR référencés sur les
 * contrats n'a pas été transmise par le cabinet. Ne rien ajouter ici
 * sans une liste écrite (email daté), cf. docs/donnees-fonds-mise-a-jour.md.
 */
export const FONDS: Record<string, FondsIsr> = {};

export function fondsParIsin(isin: string): FondsIsr | null {
  return FONDS[isin] ?? null;
}
