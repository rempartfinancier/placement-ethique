import type { Database } from "@/integrations/supabase/types";

// Consentements RGPD de l'espace client — un par catégorie de donnée,
// jamais pré-cochés, jamais groupés. Le libellé exact et la version sont
// archivés dans public.consentements au moment du clic : si un libellé
// évolue, incrémenter VERSION_CONSENTEMENTS.

export type ConsentementCategorie = Database["public"]["Enums"]["consentement_categorie"];

export const VERSION_CONSENTEMENTS = "2026-07.1";

export interface ConsentementMeta {
  categorie: ConsentementCategorie;
  obligatoire: boolean;
  titre: string;
  libelle: string;
}

export const CONSENTEMENTS: ConsentementMeta[] = [
  {
    categorie: "donnees_contact",
    obligatoire: true,
    titre: "Coordonnées",
    libelle:
      "J'accepte que Placement-éthique.fr traite mes coordonnées (nom, email, téléphone) pour gérer ma demande et me recontacter à son sujet — et uniquement à son sujet.",
  },
  {
    categorie: "donnees_patrimoniales",
    obligatoire: true,
    titre: "Situation patrimoniale et fiscale",
    libelle:
      "J'accepte que les informations sur ma situation patrimoniale et fiscale saisies dans ce dossier soient traitées pour préparer l'échange avec le conseiller. Elles ne servent à aucun autre usage et ne sont jamais transmises à un tiers commercial.",
  },
  {
    categorie: "partage_conseiller",
    obligatoire: true,
    titre: "Partage avec le conseiller",
    // Volontairement sans nom de réseau : les entités et numéros ORIAS de
    // rattachement sont présentés sur les pages À propos et Tarifs, qui font
    // foi. Un libellé archivé de façon immuable ne doit pas figer un nom
    // susceptible de contredire les mentions réglementaires publiques.
    libelle:
      "J'accepte que mon dossier soit partagé avec le conseiller en charge de ma demande, dans le cadre réglementaire du cabinet et de son réseau d'inscription ORIAS (détaillé sur nos pages À propos et Tarifs), afin qu'il prépare notre échange.",
  },
  {
    categorie: "pieces_justificatives",
    obligatoire: false,
    titre: "Pièces justificatives (optionnel)",
    libelle:
      "J'accepte que les pièces justificatives que je choisirai de déposer (identité, domicile, avis d'imposition…) soient conservées de manière sécurisée pour la constitution de mon dossier. Sans ce consentement, le dépôt de pièces reste simplement désactivé.",
  },
];

export const CONSENTEMENTS_PAR_CATEGORIE = new Map(CONSENTEMENTS.map((c) => [c.categorie, c]));
