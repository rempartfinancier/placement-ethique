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
// Données : fiche Quantalys du cabinet (« Portefeuille respectueux »).
// Les indicateurs et performances sont ceux du BACKTEST de l'allocation
// (rétropolation) — non contractuels, le DIC de chaque support prime.
// ============================================================

import type { PerfCalendaires, PerfCumulees } from "./fonds";

export type ProfilTypeId = "prudent" | "equilibre" | "dynamique";

export interface LigneAllocation {
  isin: string;
  poidsPct: number;
}

export interface IndicateursPortefeuille {
  /** SRI agrégé affiché par Quantalys pour l'allocation (échelle 1-7). */
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
      "Dominante sukuk (obligataire conforme), part actions réduite. Composition exacte en attente de communication par le cabinet.",
    // ⚠ PLACEHOLDER — allocation à obtenir du cabinet (liste exacte des
    // fonds disponibles demandée) : ne rien inventer, le profil est
    // affiché « en cours de validation » tant que lignes = null.
    lignes: null,
    indicateurs: null,
    perfCumulees: null,
    perfCalendaires: null,
    statut: "À VALIDER",
    source: "En attente de la fiche d'allocation du cabinet.",
  },
  equilibre: {
    id: "equilibre",
    libelle: "Profil équilibré",
    description:
      "Cœur actions monde filtrées, diversification pays émergents, poche sukuk pour amortir la volatilité.",
    lignes: [
      { isin: "LU0806931092", poidsPct: 65 }, // HSBC Islamic Global Equity Index
      { isin: "IE0009BC6K22", poidsPct: 10 }, // HSBC MSCI EM Islamic Screened
      { isin: "LU0923115975", poidsPct: 25 }, // Franklin Global Sukuk
    ],
    indicateurs: {
      sri: 4,
      volatilite3AnsPct: 11.92,
      perteMax3AnsPct: 19.02,
      dsr3AnsPct: 8.8,
    },
    perfCumulees: {
      unMoisPct: 1.63,
      unAnPct: 2.9,
      troisAnsPct: 21.74,
      cinqAnsPct: 43.82,
      depuisCreationPct: 235.58,
    },
    perfCalendaires: {
      ytdPct: -4.15,
      a2024Pct: 22.34,
      a2023Pct: 17.71,
      a2022Pct: -14.89,
    },
    statut: "À VALIDER",
    source:
      "Fiche Quantalys du cabinet « Portefeuille respectueux — profil équilibré » (backtest de l'allocation). ⚠ Fiche ancienne (signalé par le cabinet le 06/07/2026) : indicateurs et performances à rafraîchir avant mise en avant.",
  },
  dynamique: {
    id: "dynamique",
    libelle: "Profil dynamique",
    description:
      "Dominante actions (monde et émergents), poche sukuk réduite. Composition exacte en attente de communication par le cabinet.",
    // ⚠ PLACEHOLDER — même règle que le profil prudent.
    lignes: null,
    indicateurs: null,
    perfCumulees: null,
    perfCalendaires: null,
    statut: "À VALIDER",
    source: "En attente de la fiche d'allocation du cabinet.",
  },
};

export const ORDRE_PROFILS: ProfilTypeId[] = ["prudent", "equilibre", "dynamique"];

/** Somme de contrôle des poids — un profil publiable doit totaliser 100 %. */
export function poidsTotalPct(profil: ProfilType): number | null {
  if (!profil.lignes) return null;
  return profil.lignes.reduce((somme, ligne) => somme + ligne.poidsPct, 0);
}
