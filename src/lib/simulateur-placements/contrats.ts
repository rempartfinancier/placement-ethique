// ============================================================
// CONTRATS RÉELS DISTRIBUÉS PAR LE CABINET — paramètres de frais
// ------------------------------------------------------------
// Contenu métier (pas de calcul). Les frais encodés ici sont ceux de la
// grille publique de la page /tarifs (src/routes/tarifs.tsx), confirmée
// par le cabinet le 06/07/2026 — jamais une moyenne de marché. Les deux
// pages doivent rester synchronisées : toute révision de la grille
// /tarifs se répercute ici (cf. docs/donnees-fonds-mise-a-jour.md).
//
// Limites assumées, à rappeler en disclaimer partout où ces frais
// s'affichent : les frais d'arbitrage et de sortie éventuels des
// contrats NE SONT PAS modélisés, et la grille d'entrée dégressive est
// appliquée par le simulateur comme un taux uniforme éditable.
// ============================================================

export const CONTRATS_MAJ = "juillet 2026";

export type ContratId = "pvp" | "uaf";
export type EnveloppeContrat = "av" | "per";

/**
 * Grille dégressive des frais d'entrée (assurance-vie et PER, identique
 * chez les deux partenaires) — page /tarifs. Le moteur applique un taux
 * uniforme librement éditable : la grille est affichée à titre
 * d'information, pas appliquée tranche par tranche (documenté).
 */
export const GRILLE_FRAIS_ENTREE: { jusquA: number | null; tauxPct: number }[] = [
  { jusquA: 200_000, tauxPct: 1.0 },
  { jusquA: 400_000, tauxPct: 0.5 },
  { jusquA: null, tauxPct: 0 },
];

export interface FraisEnveloppe {
  /** Frais d'entrée, en points de %, sur chaque versement (taux de la première tranche de la grille). */
  entreePct: number;
  /** Frais de gestion annuels du contrat sur les unités de compte, en points de %. */
  gestionUcPct: number;
  /** Frais de gestion annuels sur le fonds en euros, en points de % (null si non renseigné). */
  gestionFondsEurosPct: number | null;
}

export interface ContratAssurance {
  id: ContratId;
  libelle: string;
  assureur: string;
  distribution: string;
  enveloppes: EnveloppeContrat[];
  /** Frais par enveloppe — une enveloppe absente n'est pas simulable comme préréglage. */
  frais: Partial<Record<EnveloppeContrat, FraisEnveloppe>>;
  /** Précisions affichées à côté des frais (grille dégressive, exclusions). */
  notesFrais: string;
  fondsEurosDisponible: boolean;
  modaliteSouscription: string;
  statut: "VALIDÉ CABINET" | "À VALIDER";
  source: string;
}

const NOTES_FRAIS_COMMUNES =
  "Frais d'entrée dégressifs : 1 % jusqu'à 200 000 € versés, 0,50 % de 200 000 à 400 000 €, 0 % au-delà — le simulateur applique uniformément le taux saisi. " +
  "Hors frais d'arbitrage et frais de sortie éventuels (non modélisés).";

export const CONTRATS: Record<ContratId, ContratAssurance> = {
  pvp: {
    id: "pvp",
    libelle: "Patrimoine Vie Plus",
    assureur: "Suravenir (Crédit Mutuel Arkéa)",
    distribution: "Vie Plus",
    enveloppes: ["av", "per"],
    frais: {
      av: {
        entreePct: 1.0,
        gestionUcPct: 1.08,
        // ⚠ Seule donnée non couverte par la grille /tarifs : gestion du
        // fonds en euros reprise de la simulation BIG du cabinet (0,6 %)
        // — à confirmer (le fonds euros classique n'est de toute façon
        // pas conforme charia, répartition par défaut 100 % UC).
        gestionFondsEurosPct: 0.6,
      },
      // PER distribué par Vie Plus (Suravenir) — intitulé commercial
      // exact à confirmer par le cabinet.
      per: {
        entreePct: 1.0,
        gestionUcPct: 1.0,
        gestionFondsEurosPct: null,
      },
    },
    notesFrais: NOTES_FRAIS_COMMUNES,
    fondsEurosDisponible: true,
    modaliteSouscription:
      "Souscription uniquement en rendez-vous avec le cabinet — ce contrat ne peut pas s'ouvrir en ligne.",
    statut: "VALIDÉ CABINET",
    source:
      "Grille publique de la page /tarifs (entrée 1 %/0,5 %/0 % ; gestion AV 1,08 %/an, PER 1,00 %/an), confirmée par le cabinet le 06/07/2026. Gestion fonds euros : simulation BIG, à confirmer.",
  },
  uaf: {
    id: "uaf",
    libelle: "Version Absolue 2",
    assureur: "Spirica (Crédit Agricole)",
    distribution: "UAF Life Patrimoine",
    enveloppes: ["av", "per"],
    frais: {
      av: {
        entreePct: 1.0,
        gestionUcPct: 1.0,
        gestionFondsEurosPct: null,
      },
      per: {
        entreePct: 1.0,
        gestionUcPct: 1.0,
        gestionFondsEurosPct: null,
      },
    },
    notesFrais: NOTES_FRAIS_COMMUNES,
    // Existence d'un fonds euros sur ce contrat non renseignée — sans
    // objet pour l'univers halal (100 % UC), à confirmer si besoin.
    fondsEurosDisponible: false,
    modaliteSouscription:
      "Souscription en rendez-vous avec le cabinet, qui présente les paramètres détaillés du contrat.",
    statut: "VALIDÉ CABINET",
    source:
      "Grille publique de la page /tarifs (entrée 1 %/0,5 %/0 % ; gestion 1,00 %/an AV et PER), confirmée par le cabinet le 06/07/2026.",
  },
};

/** Contrats proposables comme préréglage pour une enveloppe donnée. */
export function contratsSimulables(enveloppe: EnveloppeContrat): ContratAssurance[] {
  return Object.values(CONTRATS).filter((c) => c.frais[enveloppe] !== undefined);
}
