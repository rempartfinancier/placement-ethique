// ============================================================
// REGISTRE DES ARTICLES — un fichier par article dans ./articles/
// ------------------------------------------------------------
// Chaque module exporte `meta` (ArticleMeta) et `Corps` (JSX de
// l'article). Ce registre agrège le tout : liste triée par date
// décroissante pour le hub, map slug → contenu pour la route détail.
// Pour ajouter un article : créer le fichier, l'importer ici.
// ============================================================

import type { ArticleMeta } from "./article-types";
import type { ComponentType } from "react";

import * as investissementEthiqueGuide from "./articles/investissement-ethique-guide-complet-2026";
import * as isrEsgDifferences from "./articles/isr-esg-impact-investing-differences";
import * as etfIsrDebutants from "./articles/etf-isr-debutants";
import * as foncieresImmobilierDurable from "./articles/foncieres-cotees-scpi-immobilier-durable-bourse";
import * as investirPetitBudget from "./articles/investir-ethique-petit-budget";
import * as livretsEpargneSolidaire from "./articles/livrets-epargne-solidaire-alternative-livret-a";
import * as labelIsrGaranties from "./articles/label-isr-que-garantit-il-vraiment";
import * as greenfinVsIsr from "./articles/label-greenfin-vs-label-isr";
import * as sfdrArticle8ou9 from "./articles/sfdr-article-8-ou-9-ce-que-ca-garantit";
import * as repererGreenwashing from "./articles/reperer-greenwashing-fonds-vert-methode";
import * as labelFinansol from "./articles/label-finansol-finance-solidaire";
import * as taxonomieVerte from "./articles/taxonomie-verte-europeenne-epargne";
import * as performanceEthique from "./articles/investir-ethique-performance-chiffres";
import * as obligationsVertes from "./articles/obligations-vertes-vs-obligations-classiques";
import * as engagementVsExclusion from "./articles/engagement-actionnarial-vs-exclusion";
import * as assuranceVieIsrGuide from "./articles/assurance-vie-isr-guide-2026";
import * as assuranceVieLuxembourgeoise from "./articles/assurance-vie-luxembourgeoise-investissement-responsable";
import * as perVsAssuranceVie from "./articles/per-vs-assurance-vie-isr";
import * as perProtectionFamiliale from "./articles/per-protection-familiale";
import * as perEthiqueRetraite from "./articles/per-ethique-optimiser-retraite";
import * as quelleEnveloppe from "./articles/quelle-enveloppe-investissement-ethique";
import * as assuranceVieEnfants from "./articles/assurance-vie-enfants-transmettre-valeurs";
import * as scpiIsrPanorama from "./articles/scpi-isr-environnementales-panorama";
import * as scpiIsrVsClassique from "./articles/scpi-isr-vs-scpi-classique";
import * as immobilierResponsable from "./articles/investissement-immobilier-responsable-commencer";
import * as dispositifsFiscaux from "./articles/dispositifs-fiscaux-demarche-ethique";
import * as preparerRetraite from "./articles/preparer-retraite-epargne-alignee-valeurs";
import * as retraiteCapitalOuRente from "./articles/retraite-capital-ou-rente-per-ethique";
import * as donationTransmission from "./articles/donation-transmission-coherence-valeurs";
import * as patrimoineEngage from "./articles/transmettre-patrimoine-engage-fonds-partage";
import * as bilanPatrimonial from "./articles/bilan-patrimonial-investissement-ethique-rendez-vous";
import * as metauxPrecieux from "./articles/metaux-precieux-investissement-ethique";
import * as empreinteCarboneEpargne from "./articles/empreinte-carbone-epargne-pourquoi-mesurer";

type ArticleModule = {
  meta: ArticleMeta;
  Corps: ComponentType;
};

const modules: ArticleModule[] = [
  investissementEthiqueGuide,
  isrEsgDifferences,
  etfIsrDebutants,
  foncieresImmobilierDurable,
  investirPetitBudget,
  livretsEpargneSolidaire,
  labelIsrGaranties,
  greenfinVsIsr,
  sfdrArticle8ou9,
  repererGreenwashing,
  labelFinansol,
  taxonomieVerte,
  performanceEthique,
  obligationsVertes,
  engagementVsExclusion,
  assuranceVieIsrGuide,
  assuranceVieLuxembourgeoise,
  perVsAssuranceVie,
  perProtectionFamiliale,
  perEthiqueRetraite,
  quelleEnveloppe,
  assuranceVieEnfants,
  scpiIsrPanorama,
  scpiIsrVsClassique,
  immobilierResponsable,
  dispositifsFiscaux,
  preparerRetraite,
  retraiteCapitalOuRente,
  donationTransmission,
  patrimoineEngage,
  bilanPatrimonial,
  metauxPrecieux,
  empreinteCarboneEpargne,
];

/** Tous les articles, triés par date de publication décroissante. */
export const articles: ArticleMeta[] = modules
  .map((m) => m.meta)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

/** Map slug → composant de contenu, consommée par la route détail. */
export const articleContent: Record<string, ComponentType> = Object.fromEntries(
  modules.map((m) => [m.meta.slug, m.Corps]),
);

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}

export type { ArticleMeta } from "./article-types";
