import type { Database } from "@/integrations/supabase/types";

// Machine à états du dossier — miroir TypeScript du trigger SQL
// `enforce_dossier_transition` (supabase/migrations/20260708000001_espace_client.sql).
// La base reste l'arbitre final ; ce module sert l'UI (libellés honnêtes,
// actions proposées) et les server functions (messages d'erreur clairs avant
// même de toucher la base).

export type DossierStatut = Database["public"]["Enums"]["dossier_statut"];

export interface StatutMeta {
  label: string;
  // Ce que le client lit sous le badge : dit honnêtement où il en est,
  // et surtout ce qui N'EST PAS encore engagé.
  description: string;
  // true uniquement pour les statuts qui correspondent à un engagement
  // contractuel réel — jamais atteignables depuis l'espace client.
  engageant: boolean;
  // Position dans le parcours nominal (null pour sans_suite).
  etape: number | null;
}

export const STATUTS: Record<DossierStatut, StatutMeta> = {
  brouillon: {
    label: "Brouillon",
    description:
      "Rien n'a été transmis au cabinet. Vous pouvez modifier ou supprimer ce dossier librement.",
    engageant: false,
    etape: 0,
  },
  transmis: {
    label: "Demande transmise",
    description:
      "Votre demande est arrivée chez votre conseiller. Ce n'est ni une souscription ni un engagement : c'est une demande d'échange, documentée. Vous pouvez la retirer à tout moment.",
    engageant: false,
    etape: 1,
  },
  echange_planifie: {
    label: "Échange conseiller à venir",
    description:
      "Votre conseiller a pris en charge votre dossier : il vous rappelle, ou un rendez-vous est planifié. Rien n'est engagé tant que vous n'avez pas échangé de vive voix.",
    engageant: false,
    etape: 2,
  },
  recommandation_transmise: {
    label: "Recommandation formalisée",
    description:
      "Après votre échange, votre conseiller a formalisé une recommandation individualisée écrite. Vous restez entièrement libre d'y donner suite ou non.",
    engageant: false,
    etape: 3,
  },
  signature_en_cours: {
    label: "Souscription en cours",
    description:
      "Vous avez décidé de donner suite après la recommandation. La signature se fait sur les documents officiels du partenaire (assureur, société de gestion…), jamais dans cet espace.",
    engageant: true,
    etape: 4,
  },
  finalise: {
    label: "Souscription confirmée",
    description:
      "Votre souscription a été confirmée par votre conseiller après signature des documents officiels.",
    engageant: true,
    etape: 5,
  },
  sans_suite: {
    label: "Clos sans suite",
    description:
      "Ce dossier est clos : aucune souscription n'a eu lieu. Vous pouvez en ouvrir un nouveau à tout moment.",
    engageant: false,
    etape: null,
  },
};

// Parcours nominal affiché dans la timeline.
export const PARCOURS: DossierStatut[] = [
  "brouillon",
  "transmis",
  "echange_planifie",
  "recommandation_transmise",
  "signature_en_cours",
  "finalise",
];

// Transitions déclenchables PAR LE CLIENT — tout le reste appartient au
// conseiller. La transmission (brouillon → transmis) est la seule progression
// possible depuis l'espace, et elle est non engageante.
export function transitionsClient(statut: DossierStatut): DossierStatut[] {
  switch (statut) {
    case "brouillon":
      return ["transmis", "sans_suite"];
    case "transmis":
    case "echange_planifie":
    case "recommandation_transmise":
      return ["sans_suite"];
    default:
      return [];
  }
}

export function clientPeutRetirer(statut: DossierStatut): boolean {
  return transitionsClient(statut).includes("sans_suite") && statut !== "brouillon";
}

export function clientPeutModifier(statut: DossierStatut): boolean {
  return statut === "brouillon";
}

// Dépôt de pièces : après transmission (le consentement pièces est recueilli
// à ce moment-là) et avant toute phase de signature.
export function clientPeutDeposerPieces(statut: DossierStatut): boolean {
  return statut === "transmis" || statut === "echange_planifie" || statut === "recommandation_transmise";
}
