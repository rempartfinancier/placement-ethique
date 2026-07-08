import {
  CONTRATS,
  GRILLE_FRAIS_ENTREE,
  type ContratId,
  type EnveloppeContrat,
} from "@/lib/simulateur-placements/contrats";
import { FONDS, type CategorieSupport, type FondsIsr } from "@/lib/simulateur-placements/fonds";
import type { ProduitCategorie } from "./catalogue";

// Esquisse d'allocation de l'espace client — branchée sur la MÊME source de
// vérité que le simulateur (src/lib/simulateur-placements) : contrats réels
// distribués (Patrimoine Vie Plus, Version Absolue 2) et univers de fonds ISR
// du cabinet. Aucune donnée de fonds dupliquée ici.
//
// ⚠ ÉTAT ACTUEL : le registre FONDS (src/lib/simulateur-placements/fonds.ts)
// est VOLONTAIREMENT VIDE — l'univers de supports ISR référencés sur les
// contrats n'a pas encore été communiqué par le cabinet. Toute la logique
// ci-dessous se dégrade automatiquement et proprement dans cet état :
// FONDS_SELECTIONNABLES, fondsProposables() et donc les lignes d'esquisse
// possibles sont vides tant que le registre n'est pas rempli — sans code
// spécial à écrire ni à retirer le jour où le cabinet transmettra la liste.
//
// Cadrage non négociable : une esquisse est un support de discussion pour
// l'échange conseiller — PAS une instruction d'investissement, PAS un ordre,
// PAS une souscription. L'allocation finale est établie avec le conseiller,
// et la souscription suit le parcours complet (recommandation écrite, puis
// signature chez le partenaire).

export type ModeAllocation = "avec_conseiller" | "esquisse";

export interface LigneAllocation {
  isin: string;
  /** Poids indicatif en % — null = « support à discuter, sans poids chiffré ». */
  poidsPct: number | null;
}

export interface AllocationDossier {
  mode?: ModeAllocation;
  enveloppe?: EnveloppeContrat | null;
  /** null = « contrat à définir avec le conseiller ». */
  contratId?: ContratId | null;
  lignes?: LigneAllocation[];
}

export const CRENEAUX_RAPPEL = [
  "Matin (9h – 12h)",
  "Midi (12h – 14h)",
  "Après-midi (14h – 18h)",
  "Début de soirée (18h – 20h)",
  "Peu importe",
] as const;

// Seuls les supports au statut SOURCÉ sont proposables. Tant que le registre
// FONDS n'est pas alimenté par le cabinet, ce tableau est vide — c'est l'état
// attendu, pas un bug (cf. fonds.ts).
export const FONDS_SELECTIONNABLES: FondsIsr[] = Object.values(FONDS).filter(
  (f) => f.statut === "SOURCÉ",
);

// Chaque catégorie de support se rattache à une piste du dossier : un support
// n'est proposable que si la piste correspondante a été sélectionnée (et donc
// sa mise en garde lue, pour les SCPI et les métaux précieux). C'est ce qui
// garantit qu'aucun support n'entre dans l'esquisse sans le cadrage de risque
// de sa catégorie.
export const PISTE_PAR_CATEGORIE_SUPPORT: Record<CategorieSupport, ProduitCategorie> = {
  "Fonds obligations vertes": "obligations_vertes",
  "Fonds obligataire ISR": "obligations_vertes",
  "ETF actions monde ISR": "actions_etf_isr",
  "ETF actions émergentes ISR": "actions_etf_isr",
  "ETF actions Europe ISR": "actions_etf_isr",
  "Fonds actions ISR": "actions_etf_isr",
  "Fonds solidaire": "epargne_solidaire",
  "Fonds immobilier durable": "scpi_immobilier_durable",
};

/** Ordre d'affichage des groupes de supports. */
export const ORDRE_CATEGORIES: CategorieSupport[] = [
  "Fonds obligations vertes",
  "Fonds obligataire ISR",
  "ETF actions monde ISR",
  "ETF actions émergentes ISR",
  "ETF actions Europe ISR",
  "Fonds actions ISR",
  "Fonds solidaire",
  "Fonds immobilier durable",
];

export interface ChoixContrat {
  id: ContratId;
  libelle: string;
  assureur: string;
  distribution: string;
  /** Résumé de frais affiché sur la carte — transparence exigée dans le parcours. */
  resumeFrais: (enveloppe: EnveloppeContrat) => string | null;
  modaliteSouscription: string;
}

export const CHOIX_CONTRATS: ChoixContrat[] = Object.values(CONTRATS).map((c) => ({
  id: c.id,
  libelle: c.libelle,
  assureur: c.assureur,
  distribution: c.distribution,
  resumeFrais: (enveloppe) => {
    const frais = c.frais[enveloppe];
    if (!frais) return null;
    // Grille dégressive dérivée de la source (contrats.ts) — jamais en dur,
    // pour rester synchrone avec la page /tarifs à chaque révision.
    const degressif = GRILLE_FRAIS_ENTREE.slice(1)
      .map((tranche, index) => {
        const seuil = GRILLE_FRAIS_ENTREE[index].jusquA;
        const taux = tranche.tauxPct.toLocaleString("fr-FR", { minimumFractionDigits: tranche.tauxPct % 1 ? 2 : 0 });
        return `${taux} % au-delà de ${((seuil ?? 0) / 1000).toLocaleString("fr-FR")} k€`;
      })
      .join(", ");
    return `Frais d'entrée ${frais.entreePct.toLocaleString("fr-FR")} % (dégressifs : ${degressif}) · gestion ${frais.gestionUcPct.toLocaleString("fr-FR")} %/an sur les unités de compte`;
  },
  modaliteSouscription: c.modaliteSouscription,
}));

/**
 * Supports proposables pour un dossier : filtrés par pistes sélectionnées et,
 * si un contrat est pressenti, par référencement sur ce contrat.
 */
export function fondsProposables(
  pistes: ProduitCategorie[],
  contratId: ContratId | null | undefined,
): FondsIsr[] {
  return FONDS_SELECTIONNABLES.filter((f) => {
    if (!pistes.includes(PISTE_PAR_CATEGORIE_SUPPORT[f.categorie])) return false;
    if (contratId && !f.disponibleSur.includes(contratId)) return false;
    return true;
  });
}

// Les données arrivent parfois d'un JSONB écrit hors serveur (PATCH direct) :
// tout accès aux lignes passe par ce garde plutôt que par un cast confiant.
function lignesValides(lignes: unknown): LigneAllocation[] {
  if (!Array.isArray(lignes)) return [];
  return lignes.filter(
    (l): l is LigneAllocation =>
      typeof l === "object" &&
      l !== null &&
      typeof (l as LigneAllocation).isin === "string" &&
      ((l as LigneAllocation).poidsPct === null ||
        typeof (l as LigneAllocation).poidsPct === "number"),
  );
}

export function totalPoids(lignes: LigneAllocation[] | undefined): number {
  return lignesValides(lignes).reduce(
    (somme, l) => somme + (typeof l.poidsPct === "number" && Number.isFinite(l.poidsPct) ? l.poidsPct : 0),
    0,
  );
}

export function libelleContrat(contratId: ContratId | null | undefined): string {
  if (!contratId) return "Contrat à définir avec le conseiller";
  const c = CONTRATS[contratId];
  return `${c.libelle} — ${c.assureur}`;
}

/** Résumé texte de l'esquisse (récapitulatif, emails conseiller). */
export function resumeAllocation(allocation: AllocationDossier | undefined | null): string[] {
  if (!allocation?.mode) return [];
  if (allocation.mode === "avec_conseiller") {
    return ["Allocation à construire avec le conseiller (choix explicite du client)."];
  }
  const lignes = lignesValides(allocation.lignes);
  const enveloppe = allocation.enveloppe === "per" ? "PER" : "Assurance vie";
  const entete = `${enveloppe} · ${libelleContrat(allocation.contratId)}`;
  const supports = lignes.map((l) => {
    const fonds = FONDS[l.isin];
    const nom = fonds ? `${fonds.nom} (${l.isin})` : l.isin;
    return l.poidsPct != null ? `${nom} — ${l.poidsPct} %` : `${nom} — poids à discuter`;
  });
  const total = totalPoids(lignes);
  const solde =
    total < 100 && lignes.length > 0
      ? [`Solde non affecté : ${100 - total} % — à définir avec le conseiller.`]
      : [];
  return [entete, ...supports, ...solde];
}
