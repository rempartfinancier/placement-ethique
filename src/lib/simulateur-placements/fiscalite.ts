// ============================================================
// Fiscalité de sortie — fonctions pures, zéro React.
// Réplique le déroulé réel d'un rachat d'assurance-vie (primes versées
// depuis le 27/09/2017) : PFO retenu par l'assureur au rachat, puis
// imposition définitive (PFU ou barème sur option) avec régularisation
// (complément ou restitution). PER : modèle simplifié « sortie en
// capital » du réseau. Tous les taux et seuils viennent de
// ./hypotheses.ts (aucun chiffre fiscal en dur ici).
// Conventions : jamais d'impôt sur une moins-value ; aucun arrondi dans
// le moteur (l'arrondi se fait à l'affichage).
// ============================================================

import {
  ASSURANCE_VIE,
  ASSURANCE_VIE_PFL_AVANT_2017,
  IR_PFU,
  PS_ASSURANCE_VIE,
  PS_HORS_ASSURANCE_VIE,
  TMI_PER_PAR_DEFAUT_PCT,
} from "./hypotheses";

export type Enveloppe = "libre" | "av" | "per";

export type CodeAlerte =
  | "abattement-av-majorant"
  | "seuil-couple-a-valider"
  | "bareme-csg-non-modelisee"
  | "per-tmi-par-defaut"
  | "frais-a-valider";

export interface AlerteSimulation {
  code: CodeAlerte;
  message: string;
}

export type OptionImposition = "pfu" | "bareme";

export interface ParametresFiscaux {
  enveloppe: Enveloppe;
  /** Abattement 4 600 € (seul) / 9 200 € (couple) et seuil de primes doublé (convention cabinet). */
  estCouple?: boolean;
  /** Imposition définitive des produits : PFU (défaut) ou barème sur option globale. */
  option?: OptionImposition;
  /** TMI (points de %) pour l'option barème en assurance-vie. */
  tmiPct?: number;
  /**
   * Régime des primes versées AVANT le 27/09/2017 (PFL 35 %/15 %/7,5 %).
   * Supporté par la lib pour les contrats existants, NON exposé dans
   * l'UI publique v1 (une projection démarrée aujourd'hui n'en a pas).
   */
  regimePrimesAvant2017?: boolean;
  /** PER : TMI à l'entrée, en points de % (économie d'impôt sur versements). */
  tmiEntreePct?: number;
  /** PER : TMI à la sortie, en points de %. */
  tmiSortiePct?: number;
}

export interface ResultatFiscalSortie {
  /** Gain retenu pour l'imposition : max(0, capital − primes versées brutes). */
  gainImposable: number;
  /** Abattement effectivement imputé (AV ≥ 8 ans uniquement). */
  abattementApplique: number;
  /**
   * Prélèvement forfaitaire obligatoire retenu par l'assureur au rachat
   * (12,8 % avant 8 ans, 7,5 % après). 0 pour le PER et l'épargne libre.
   */
  pfo: number;
  /** IR définitif après abattement/ventilation (PFU ou barème). */
  impotIRDefinitif: number;
  /** impotIRDefinitif − pfo : complément à payer (>0) ou restitution (<0). */
  regularisation: number;
  /** Prélèvements sociaux dus à la sortie (hors PS annuels déjà retenus sur le fonds euros). */
  prelevementsSociauxSortie: number;
  totalImpots: number;
  capitalNet: number;
  /** PER uniquement : économie d'impôt à l'entrée (TMI × versements), affichée à part, non capitalisée. */
  economieImpotEntree: number;
  alertes: AlerteSimulation[];
}

export interface AssiettesSortie {
  capitalBrut: number;
  /** Total brut versé (frais d'entrée inclus — assiette « primes » usuelle). */
  primesVersees: number;
  /**
   * Intérêts du fonds en euros déjà crédités (bruts, avant PS annuels).
   * En assurance-vie ils ont déjà supporté les PS chaque année : ils
   * sont donc exclus de l'assiette des PS à la sortie.
   */
  interetsFondsEurosCredites: number;
  dureeDetentionAnnees: number;
}

/** Le moteur prélève-t-il les PS chaque année sur les intérêts du fonds euros ? */
export function psAnnuelsFondsEurosApplicables(enveloppe: Enveloppe): boolean {
  // En PER assurantiel, les PS ne sont dus qu'à la sortie.
  return enveloppe === "av";
}

const RESULTAT_NEUTRE: Omit<ResultatFiscalSortie, "gainImposable" | "capitalNet"> = {
  abattementApplique: 0,
  pfo: 0,
  impotIRDefinitif: 0,
  regularisation: 0,
  prelevementsSociauxSortie: 0,
  totalImpots: 0,
  economieImpotEntree: 0,
  alertes: [],
};

/**
 * Fiscalité au dénouement total, selon l'enveloppe et la durée de
 * détention. Aucun arrondi. Invariant : capitalNet ≤ capitalBrut.
 */
export function calculerFiscaliteSortie(
  assiettes: AssiettesSortie,
  params: ParametresFiscaux,
): ResultatFiscalSortie {
  const { capitalBrut, primesVersees, dureeDetentionAnnees } = assiettes;
  const gain = Math.max(0, capitalBrut - primesVersees);

  if (params.enveloppe === "libre") {
    // Épargne « libre » : projection brute, sans enveloppe fiscale —
    // l'UI l'annonce comme telle (aucune fiscalité appliquée).
    return { ...RESULTAT_NEUTRE, gainImposable: gain, capitalNet: capitalBrut };
  }

  if (params.enveloppe === "per") {
    return fiscalitePER(capitalBrut, primesVersees, gain, params);
  }

  return fiscaliteAssuranceVie(assiettes, gain, params);
}

// ---- Assurance-vie ----

function fiscaliteAssuranceVie(
  assiettes: AssiettesSortie,
  gain: number,
  params: ParametresFiscaux,
): ResultatFiscalSortie {
  const { capitalBrut, primesVersees, dureeDetentionAnnees, interetsFondsEurosCredites } =
    assiettes;
  const alertes: AlerteSimulation[] = [];
  const apres8Ans = dureeDetentionAnnees >= ASSURANCE_VIE.dureeAbattementAnnees;
  const abattement = apres8Ans
    ? params.estCouple
      ? ASSURANCE_VIE.abattementAnnuelCouple
      : ASSURANCE_VIE.abattementAnnuelCelibataire
    : 0;

  // PS à la sortie : uniquement sur la part des produits qui n'a pas
  // déjà supporté les PS annuels (les intérêts du fonds euros sont
  // prélevés chaque année lors de leur inscription en compte).
  const assiettePs = Math.max(0, gain - Math.max(0, interetsFondsEurosCredites));
  const prelevementsSociauxSortie = assiettePs * PS_ASSURANCE_VIE;

  let pfo: number;
  let impotIRDefinitif: number;
  let abattementApplique = 0;

  if (params.regimePrimesAvant2017) {
    // PFL sur option (primes avant le 27/09/2017) : libératoire, retenu
    // à la source — pas de régularisation. Abattement après 8 ans.
    const taux =
      dureeDetentionAnnees < 4
        ? ASSURANCE_VIE_PFL_AVANT_2017.tauxAvant4Ans
        : !apres8Ans
          ? ASSURANCE_VIE_PFL_AVANT_2017.tauxEntre4Et8Ans
          : ASSURANCE_VIE_PFL_AVANT_2017.tauxApres8Ans;
    abattementApplique = Math.min(abattement, gain);
    impotIRDefinitif = (gain - abattementApplique) * taux;
    pfo = impotIRDefinitif; // libératoire : retenu au rachat, solde nul
  } else {
    // PFO retenu par l'assureur au rachat : 12,8 % avant 8 ans, 7,5 %
    // après (sur la totalité des produits — la part au-delà du seuil de
    // primes est portée à 12,8 % lors de l'imposition définitive).
    // La dispense de PFO sous conditions de revenu n'est pas modélisée.
    pfo = gain * (apres8Ans ? ASSURANCE_VIE.pfoApres8Ans : ASSURANCE_VIE.pfoAvant8Ans);

    if (params.option === "bareme") {
      // Option barème (globale, tous revenus de capitaux mobiliers).
      // Simplification documentée : la CSG déductible (6,8 % du revenu
      // imposé au barème, déductible l'année suivante) n'est pas
      // modélisée — le net affiché est légèrement minoré.
      const tmi = (params.tmiPct ?? TMI_PER_PAR_DEFAUT_PCT) / 100;
      abattementApplique = Math.min(abattement, gain);
      impotIRDefinitif = (gain - abattementApplique) * tmi;
      if (gain > 0) {
        alertes.push({
          code: "bareme-csg-non-modelisee",
          message:
            "Option barème : la CSG déductible (6,8 % des produits imposés au barème, déductible du revenu de l'année suivante) n'est pas modélisée — le capital net affiché est légèrement sous-estimé.",
        });
      }
    } else if (!apres8Ans) {
      impotIRDefinitif = gain * IR_PFU;
    } else {
      // PFU après 8 ans : ventilation du gain au prorata des primes
      // (part issue des primes ≤ seuil au taux réduit 7,5 %, le reste à
      // 12,8 % — approximation prorata documentée), puis imputation de
      // l'abattement EN PRIORITÉ sur la fraction à 7,5 %
      // (BOI-RPPM-RCM-20-15), le reliquat sur la fraction à 12,8 %.
      const seuil = params.estCouple
        ? ASSURANCE_VIE.seuilPrimesTauxReduitCouple
        : ASSURANCE_VIE.seuilPrimesTauxReduit;
      const prorataTauxReduit =
        primesVersees <= seuil || primesVersees === 0 ? 1 : seuil / primesVersees;
      const fractionTauxReduit = gain * prorataTauxReduit;
      const fractionTauxPlein = gain - fractionTauxReduit;
      const abattementSurTauxReduit = Math.min(abattement, fractionTauxReduit);
      const abattementRestant = abattement - abattementSurTauxReduit;
      abattementApplique = abattementSurTauxReduit + Math.min(abattementRestant, fractionTauxPlein);
      impotIRDefinitif =
        (fractionTauxReduit - abattementSurTauxReduit) * ASSURANCE_VIE.tauxIRReduitApres8Ans +
        Math.max(0, fractionTauxPlein - abattementRestant) * ASSURANCE_VIE.tauxIRPleinApres8Ans;
      if (params.estCouple && primesVersees > ASSURANCE_VIE.seuilPrimesTauxReduit) {
        alertes.push({
          code: "seuil-couple-a-valider",
          message:
            "Le doublement du seuil de 150 000 € de primes à 300 000 € pour un couple suit la convention du document de simulation du cabinet. En droit, le seuil s'apprécie par assuré, tous contrats confondus : ce point est à valider avec le conseiller.",
        });
      }
    }

    if (apres8Ans && gain > 0) {
      alertes.push({
        code: "abattement-av-majorant",
        message: `L'abattement d'assurance-vie (${ASSURANCE_VIE.abattementAnnuelCelibataire.toLocaleString("fr-FR")} € / ${ASSURANCE_VIE.abattementAnnuelCouple.toLocaleString("fr-FR")} €) est annuel, par foyer fiscal et tous contrats confondus : s'il est déjà consommé par d'autres rachats la même année, le capital net réel sera inférieur au montant affiché.`,
      });
    }
  }

  const regularisation = impotIRDefinitif - pfo;
  const totalImpots = impotIRDefinitif + prelevementsSociauxSortie;
  return {
    gainImposable: gain,
    abattementApplique,
    pfo,
    impotIRDefinitif,
    regularisation,
    prelevementsSociauxSortie,
    totalImpots,
    capitalNet: capitalBrut - totalImpots,
    economieImpotEntree: 0,
    alertes,
  };
}

// ---- PER (sortie en capital, modèle simplifié du réseau) ----

function fiscalitePER(
  capitalBrut: number,
  primesVersees: number,
  gain: number,
  params: ParametresFiscaux,
): ResultatFiscalSortie {
  const alertes: AlerteSimulation[] = [];
  const tmiEntree = params.tmiEntreePct;
  const tmiSortie = params.tmiSortiePct;
  if (tmiEntree === undefined || tmiSortie === undefined) {
    alertes.push({
      code: "per-tmi-par-defaut",
      message: `Taux marginal d'imposition non renseigné : hypothèse de ${TMI_PER_PAR_DEFAUT_PCT} % appliquée à l'entrée et à la sortie.`,
    });
  }
  const tmiEntreeFraction = (tmiEntree ?? TMI_PER_PAR_DEFAUT_PCT) / 100;
  const tmiSortieFraction = (tmiSortie ?? TMI_PER_PAR_DEFAUT_PCT) / 100;
  const economieImpotEntree = primesVersees * tmiEntreeFraction;
  // Sortie en capital : la part correspondant aux versements déduits est
  // imposée au barème (bornée au capital réellement perçu), les gains au
  // PFU (12,8 % + PS 18,6 % — LFSS 2026).
  const baseVersementsImposable = Math.min(capitalBrut, primesVersees);
  const impotIRDefinitif = baseVersementsImposable * tmiSortieFraction + gain * IR_PFU;
  const prelevementsSociauxSortie = gain * PS_HORS_ASSURANCE_VIE;
  const totalImpots = impotIRDefinitif + prelevementsSociauxSortie;
  return {
    gainImposable: gain,
    abattementApplique: 0,
    pfo: 0,
    impotIRDefinitif,
    regularisation: impotIRDefinitif, // rien n'est retenu à la source dans ce modèle
    prelevementsSociauxSortie,
    totalImpots,
    capitalNet: capitalBrut - totalImpots,
    economieImpotEntree,
    alertes,
  };
}
