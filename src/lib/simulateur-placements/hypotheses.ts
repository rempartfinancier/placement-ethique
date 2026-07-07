// ============================================================
// HYPOTHÈSES CHIFFRÉES DU SIMULATEUR DE PROJECTION — source de vérité
// ------------------------------------------------------------
// Règle du réseau (cf. rempartfinancier/src/lib/simulateur-placements/
// hypotheses.ts) : aucun taux, seuil ou barème n'est écrit en dur dans le
// moteur (engine.ts, fiscalite.ts) ni dans l'UI. Tout chiffre vient d'ici,
// daté et sourcé. Marqué « À VALIDER » quand la donnée doit être confirmée
// par le cabinet (frais négociés, hypothèses de rendement) avant d'être
// présentée comme définitive.
//
// Unités : les rendements sont exprimés en POINTS DE POURCENTAGE
// (ex. 3.5 = 3,5 %/an). Les taux fiscaux sont exprimés en FRACTIONS
// (ex. 0.128 = 12,8 %) car ils ne sont jamais édités par l'utilisateur.
// Les montants sont en euros.
//
// Ce fichier ne s'importe pas entre sites : les hypothèses communes au
// réseau (PS, PFU, abattements…) sont dupliquées volontairement et les
// fichiers du réseau se révisent ensemble à chaque millésime.
// ============================================================

export const HYPOTHESES_MAJ = "juillet 2026";

// ---- Prélèvements sociaux : DEUX taux distincts depuis la LFSS 2026 ----
// CSG sur les revenus du capital passée de 9,2 % à 10,6 % au 01/01/2026
// (LFSS 2026) : PS = 18,6 % pour le CTO et le PER. L'assurance-vie
// (fonds euros et UC) est restée à 17,2 %. Réf. art. L136-8 CSS ;
// même valeur que rempartfinancier (validée 04/07/2026).
export const PS_ASSURANCE_VIE = 0.172;
export const PS_HORS_ASSURANCE_VIE = 0.186;

// ---- Impôt sur le revenu : assurance-vie (primes versées depuis le 27/09/2017) ----
// Sources : CGI art. 125-0 A et 200 A ; BOI-RPPM-RCM-20-15 ;
// impots.gouv.fr — « L'assurance-vie et le PEA ».
export const IR_PFU = 0.128;

export const ASSURANCE_VIE = {
  dureeAbattementAnnees: 8,
  abattementAnnuelCelibataire: 4600, // € — annuel, PAR FOYER, tous contrats confondus
  abattementAnnuelCouple: 9200, // €
  /**
   * Seuil de primes au-delà duquel le taux réduit 7,5 % laisse place au
   * 12,8 % (rachat après 8 ans). Le doublement à 300 000 € pour un couple
   * suit la convention du document de simulation du cabinet (BIG) —
   * ⚠ À VALIDER : en droit, le seuil de 150 000 € s'apprécie par assuré,
   * tous contrats confondus (BOI-RPPM-RCM-20-15), pas par foyer.
   */
  seuilPrimesTauxReduit: 150000, // €
  seuilPrimesTauxReduitCouple: 300000, // € — convention cabinet, À VALIDER
  tauxIRReduitApres8Ans: 0.075,
  tauxIRPleinApres8Ans: 0.128,
  /**
   * Prélèvement forfaitaire obligatoire (PFO), non libératoire, retenu
   * par l'assureur au rachat : 12,8 % avant 8 ans, 7,5 % après 8 ans
   * (sur la totalité des produits, l'imposition définitive régularise
   * la part au-delà du seuil de primes). La dispense de PFO sous
   * conditions de revenu (RFR) n'est pas modélisée — documenté.
   */
  pfoAvant8Ans: 0.128,
  pfoApres8Ans: 0.075,
  source:
    "CGI art. 125-0 A (II bis) et 200 A ; BOI-RPPM-RCM-20-15. PFO puis régularisation à l'imposition définitive (PFU ou barème sur option globale).",
};

// Primes versées AVANT le 27/09/2017 : prélèvement forfaitaire libératoire
// (PFL) sur option — 35 % avant 4 ans, 15 % entre 4 et 8 ans, 7,5 % après
// 8 ans (après abattement). Encodé pour les contrats existants ; NON exposé
// dans l'UI publique v1 (une projection démarrée aujourd'hui ne peut pas
// contenir de primes antérieures à 2017).
export const ASSURANCE_VIE_PFL_AVANT_2017 = {
  tauxAvant4Ans: 0.35,
  tauxEntre4Et8Ans: 0.15,
  tauxApres8Ans: 0.075,
  source: "CGI art. 125-0 A (régime des primes versées avant le 27/09/2017).",
};

// ---- PER individuel — modèle volontairement simplifié (sortie en capital) ----
// Versements déductibles du revenu imposable (économie = TMI × versements,
// affichée séparément et NON capitalisée par le moteur) ; sortie en
// capital : part des versements imposée au barème (TMI de sortie), gains
// au PFU (12,8 % + PS 18,6 %). Sortie en rente et plafond de déduction
// (10 % des revenus professionnels) hors périmètre v1 — documenté dans
// docs/simulateur-projection-moteur.md. En PER assurantiel, pas de PS
// annuels sur le fonds euros : PS dus à la sortie.
export const PER_SOURCE =
  "impots.gouv.fr — Plan d'épargne retraite ; CGI art. 163 quatervicies. Modèle simplifié, sortie en capital uniquement.";

// TMI proposées dans l'UI (barème 2026 — tranches marginales usuelles).
export const TMI_DISPONIBLES_PCT = [0, 11, 30, 41, 45];
export const TMI_PER_PAR_DEFAUT_PCT = 30;

// ---- Hypothèses de rendement par défaut (points de %, annuels) ----
// Valeurs par défaut LIBREMENT ÉDITABLES par l'utilisateur — jamais des
// promesses. Alignées sur la simulation de référence du cabinet
// (« Simulation 2500 + 100/mois », BIG Harvest, 2026) : 7,00 %/an net
// pour les unités de compte, 3,50 %/an net pour le fonds en euros.
// Convention d'assiette : le taux saisi représente le rendement des
// supports NET de leurs frais internes (TER) ; les frais de gestion du
// contrat sont déduits séparément par le moteur.
export interface HypotheseRendement {
  defautPct: number;
  minPct: number;
  maxPct: number;
  source: string;
  statut: "SOURCÉ" | "À VALIDER";
}

export const RENDEMENTS: Record<"uc" | "fondsEuros", HypotheseRendement> = {
  uc: {
    defautPct: 7.0,
    minPct: 0,
    maxPct: 12,
    source:
      "Hypothèse de la simulation de référence du cabinet (BIG, 2026) : 7,00 %/an net UC. Hypothèse méthodologique éditable — les performances passées ne préjugent pas des performances futures.",
    statut: "À VALIDER",
  },
  fondsEuros: {
    defautPct: 3.5,
    minPct: 0,
    maxPct: 5,
    source:
      "Hypothèse de la simulation de référence du cabinet (BIG, 2026) : 3,50 %/an net fonds euros. ⚠ Le rendement réellement servi par Suravenir (Patrimoine Vie Plus) est à confirmer chaque année — À VALIDER.",
    statut: "À VALIDER",
  },
};

// Préréglages pédagogiques du curseur de rendement UC — repris des trois
// profils historiques de la page /outils/simulateur (hypothèses
// éditoriales prudentes, librement modifiables, jamais des promesses).
export const PRESETS_TAUX_UC: { id: string; libelle: string; tauxPct: number }[] = [
  { id: "prudent", libelle: "Prudent (dominante obligataire ISR)", tauxPct: 2.5 },
  { id: "equilibre", libelle: "Équilibré (mix actions/obligations ISR)", tauxPct: 5.5 },
  { id: "reference", libelle: "Réf. simulation cabinet", tauxPct: 7 },
  { id: "dynamique", libelle: "Dynamique (actions monde ISR)", tauxPct: 8 },
];

// ---- Inflation ----
export const INFLATION = {
  defautPct: 2.0, // cible BCE (cible symétrique de 2 % à moyen terme)
  maxSimulablePct: 8.0,
  source: "Cible BCE de 2 % (ecb.europa.eu).",
};

// ---- Bornes de saisie de l'UI et du partage URL (share.ts) ----
export const BORNES = {
  capitalInitialMax: 10_000_000, // €
  versementMax: 100_000, // € par période
  tauxAnnuelMaxPct: 15,
  dureeMinAnnees: 1,
  dureeMaxAnnees: 60,
  fraisEntreeMaxPct: 5,
  fraisGestionMaxPct: 4,
  indexationMaxPct: 10,
  repartitionUcMinPct: 0,
  repartitionUcMaxPct: 100,
};

// ---- Scénario d'accueil (état par défaut de l'UI et du partage URL) ----
// Aligné sur la simulation de référence du cabinet (2 500 € + 100 €/mois
// sur 20 ans) — valeurs librement modifiables, sans valeur de conseil.
export const SCENARIO_PAR_DEFAUT = {
  versementInitial: 2500, // €
  versementPeriodique: 100, // € (mensuel par défaut)
  dureeAnnees: 20,
  repartitionUcPct: 100, // 100 % UC par défaut — librement modifiable, le fonds en euros est utilisable sur ce site (cf. contrats.ts)
  indexationAnnuellePct: 0,
};
