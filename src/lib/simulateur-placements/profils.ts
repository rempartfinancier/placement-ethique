// ============================================================
// PORTEFEUILLES TYPES DU CABINET — exemples d'allocation par profil
// ------------------------------------------------------------
// RÈGLE PRODUIT NON NÉGOCIABLE : un portefeuille type est TOUJOURS
// présenté comme un « exemple de portefeuille type », JAMAIS comme
// l'allocation personnalisée du visiteur — même si le visiteur a
// répondu à un questionnaire de profil. La recommandation individuelle
// n'existe qu'après validation humaine (rendez-vous conseiller,
// cf. statut `recommandation_transmise` de l'espace client).
// L'UI qui consomme ce fichier doit reprendre le libellé
// AVERTISSEMENT_PROFIL_TYPE tel quel sur chaque écran concerné.
//
// ⚠ ÉTAT ACTUEL : aucune allocation ISR n'a été communiquée par le
// cabinet pour ce site. Les trois profils sont donc affichés « en cours
// de validation » (lignes: null) — on n'invente ni ISIN, ni poids, ni
// indicateurs, ni backtest (règle anti-fabrication du brief).
// ============================================================

import type { PerfCalendaires, PerfCumulees } from "./fonds";

export type ProfilTypeId = "prudent" | "equilibre" | "dynamique";

export interface LigneAllocation {
  isin: string;
  poidsPct: number;
}

export interface IndicateursPortefeuille {
  /** SRI agrégé affiché pour l'allocation (échelle 1-7). */
  sri: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  volatilite3AnsPct: number;
  perteMax3AnsPct: number;
  /** Downside risk (semi-volatilité) 3 ans. */
  dsr3AnsPct: number;
}

export interface ProfilType {
  id: ProfilTypeId;
  libelle: string;
  description: string;
  /** null = allocation non communiquée par le cabinet (profil non publiable). */
  lignes: LigneAllocation[] | null;
  indicateurs: IndicateursPortefeuille | null;
  perfCumulees: PerfCumulees | null;
  perfCalendaires: PerfCalendaires | null;
  statut: "SOURCÉ" | "À VALIDER";
  source: string;
}

/** Libellé d'avertissement à reprendre tel quel sur chaque écran de fiche. */
export const AVERTISSEMENT_PROFIL_TYPE =
  "Exemple de portefeuille type, présenté à titre d'illustration : ce n'est pas une recommandation personnalisée. " +
  "L'allocation adaptée à votre situation ne peut être établie qu'avec un conseiller, après étude de votre profil. " +
  "Performances issues d'un backtest de l'allocation, non contractuelles : les performances passées ne préjugent pas des performances futures. " +
  "Le document d'informations clés (DIC) de chaque support prime sur les informations affichées ici.";

export const PROFILS_TYPES: Record<ProfilTypeId, ProfilType> = {
  prudent: {
    id: "prudent",
    libelle: "Profil prudent",
    description:
      "Dominante obligataire responsable (obligations vertes, fonds en euros), part actions réduite. Composition exacte en attente de communication par le cabinet.",
    // ⚠ PLACEHOLDER — allocation à obtenir du cabinet : ne rien inventer,
    // le profil est affiché « en cours de validation » tant que lignes = null.
    lignes: null,
    indicateurs: null,
    perfCumulees: null,
    perfCalendaires: null,
    statut: "À VALIDER",
    source: "En attente de la fiche d'allocation ISR du cabinet.",
  },
  equilibre: {
    id: "equilibre",
    libelle: "Profil équilibré",
    description:
      "Cœur actions monde filtrées ESG, diversification, poche obligataire responsable pour amortir la volatilité. Composition exacte en attente de communication par le cabinet.",
    // ⚠ PLACEHOLDER — même règle que le profil prudent.
    lignes: null,
    indicateurs: null,
    perfCumulees: null,
    perfCalendaires: null,
    statut: "À VALIDER",
    source: "En attente de la fiche d'allocation ISR du cabinet.",
  },
  dynamique: {
    id: "dynamique",
    libelle: "Profil dynamique",
    description:
      "Dominante actions responsables (monde et émergents), poche obligataire réduite. Composition exacte en attente de communication par le cabinet.",
    // ⚠ PLACEHOLDER — même règle que le profil prudent.
    lignes: null,
    indicateurs: null,
    perfCumulees: null,
    perfCalendaires: null,
    statut: "À VALIDER",
    source: "En attente de la fiche d'allocation ISR du cabinet.",
  },
};

export const ORDRE_PROFILS: ProfilTypeId[] = ["prudent", "equilibre", "dynamique"];

/** Somme de contrôle des poids — un profil publiable doit totaliser 100 %. */
export function poidsTotalPct(profil: ProfilType): number | null {
  if (!profil.lignes) return null;
  return profil.lignes.reduce((somme, ligne) => somme + ligne.poidsPct, 0);
}
