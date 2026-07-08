import { z } from "zod";
import { Constants } from "@/integrations/supabase/types";
import { CRENEAUX_RAPPEL } from "./allocation";

// Schémas zod de l'espace client — validés côté serveur par les server
// functions (espace.functions.ts). Les tranches remplacent volontairement les
// montants exacts en V1 : on collecte le minimum utile à la préparation de
// l'échange, pas un inventaire patrimonial complet.

export const produitCategorieSchema = z.enum(Constants.public.Enums.produit_categorie);

export const typePieceSchema = z.enum(Constants.public.Enums.type_piece);

export const OBJECTIFS = [
  "Constituer un capital",
  "Préparer ma retraite",
  "Générer des revenus complémentaires",
  "Préparer un achat immobilier",
  "Transmettre à mes proches",
  "Réduire mon imposition",
  "Autre projet",
] as const;

export const HORIZONS = ["Moins de 3 ans", "3 à 7 ans", "7 à 15 ans", "Plus de 15 ans"] as const;

export const MONTANTS = [
  "Moins de 10 000 €",
  "10 000 à 50 000 €",
  "50 000 à 100 000 €",
  "100 000 à 250 000 €",
  "Plus de 250 000 €",
] as const;

export const SITUATIONS_PRO = [
  "Salarié(e)",
  "Indépendant(e) / profession libérale",
  "Chef(fe) d'entreprise",
  "Retraité(e)",
  "Sans activité",
  "Autre",
] as const;

export const REVENUS = [
  "Moins de 30 000 €/an",
  "30 000 à 60 000 €/an",
  "60 000 à 100 000 €/an",
  "Plus de 100 000 €/an",
  "Je préfère en parler de vive voix",
] as const;

export const PATRIMOINES = [
  "Moins de 50 000 €",
  "50 000 à 150 000 €",
  "150 000 à 300 000 €",
  "300 000 € à 1 M€",
  "Plus de 1 M€",
  "Je préfère en parler de vive voix",
] as const;

export const EPARGNES_MENSUELLES = [
  "Moins de 200 €/mois",
  "200 à 500 €/mois",
  "500 à 1 500 €/mois",
  "Plus de 1 500 €/mois",
  "Variable / je ne sais pas",
] as const;

export const EXPERIENCES = [
  "Livrets / épargne bancaire",
  "Assurance vie",
  "Immobilier (direct ou SCPI)",
  "Bourse (actions, ETF)",
  "Aucune expérience d'investissement",
] as const;

export const TOLERANCES = ["Prudent", "Équilibré", "Dynamique", "Je ne sais pas encore"] as const;

export const situationSchema = z.object({
  situationPro: z.enum(SITUATIONS_PRO).optional(),
  revenus: z.enum(REVENUS).optional(),
  patrimoine: z.enum(PATRIMOINES).optional(),
  epargneMensuelle: z.enum(EPARGNES_MENSUELLES).optional(),
  experiences: z.array(z.enum(EXPERIENCES)).max(EXPERIENCES.length).optional(),
  tolerance: z.enum(TOLERANCES).optional(),
  precisions: z.string().trim().max(2000).optional(),
});

export type Situation = z.infer<typeof situationSchema>;

// Esquisse d'allocation : support de discussion, jamais une instruction.
// La cohérence métier (supports proposables, poids ≤ 100) est vérifiée dans
// le handler sauverBrouillon — ici, uniquement la forme.
export const allocationSchema = z.object({
  mode: z.enum(["avec_conseiller", "esquisse"]).optional(),
  enveloppe: z.enum(["av", "per"]).optional().nullable(),
  contratId: z.enum(["pvp", "uaf"]).optional().nullable(),
  lignes: z
    .array(
      z.object({
        isin: z.string().trim().min(5).max(20),
        poidsPct: z.number().min(0).max(100).nullable(),
      }),
    )
    .max(15)
    .default([]),
});

export type AllocationInput = z.infer<typeof allocationSchema>;

// Brouillon : tout est optionnel sauf le titre — un brouillon incomplet est
// un état normal, pas une erreur.
export const brouillonSchema = z.object({
  dossierId: z.string().uuid().optional(),
  titre: z.string().trim().min(1).max(120),
  objectif: z.enum(OBJECTIFS).optional().nullable(),
  horizon: z.enum(HORIZONS).optional().nullable(),
  montantTranche: z.enum(MONTANTS).optional().nullable(),
  situation: situationSchema.default({}),
  produits: z.array(produitCategorieSchema).max(6).default([]),
  allocation: allocationSchema.default({ lignes: [] }),
  creneauRappel: z.enum(CRENEAUX_RAPPEL).optional().nullable(),
});

export type BrouillonInput = z.infer<typeof brouillonSchema>;

// Transmission : les consentements obligatoires doivent être littéralement
// true — un `false` ou un champ absent est une erreur de validation, pas une
// valeur par défaut. C'est le pendant zod du trigger SQL.
export const transmissionSchema = z.object({
  dossierId: z.string().uuid(),
  consentements: z.object({
    donnees_contact: z.literal(true),
    donnees_patrimoniales: z.literal(true),
    partage_conseiller: z.literal(true),
    pieces_justificatives: z.boolean(),
  }),
  // Codes produits dont la mise en garde a été lue et acceptée — le handler
  // vérifie que chaque produit sélectionné qui l'exige y figure.
  misesEnGardeLues: z.array(produitCategorieSchema).default([]),
});

export type TransmissionInput = z.infer<typeof transmissionSchema>;

export const retraitSchema = z.object({
  dossierId: z.string().uuid(),
  motif: z.string().trim().max(1000).optional(),
});

export const profilSchema = z.object({
  prenom: z.string().trim().max(80).optional().nullable(),
  nom: z.string().trim().max(80).optional().nullable(),
  telephone: z.string().trim().max(30).optional().nullable(),
});

export const documentSchema = z.object({
  dossierId: z.string().uuid(),
  typePiece: typePieceSchema,
  storagePath: z.string().min(1).max(500),
  nomFichier: z.string().trim().min(1).max(200),
  tailleOctets: z
    .number()
    .int()
    .nonnegative()
    .max(10 * 1024 * 1024),
});

export const TYPES_PIECES: { code: z.infer<typeof typePieceSchema>; label: string }[] = [
  { code: "piece_identite", label: "Pièce d'identité" },
  { code: "justificatif_domicile", label: "Justificatif de domicile" },
  { code: "avis_imposition", label: "Avis d'imposition" },
  { code: "releve_situation", label: "Relevé de situation (contrats existants)" },
  { code: "autre", label: "Autre document" },
];
