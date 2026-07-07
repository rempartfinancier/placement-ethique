// ============================================================
// État du simulateur de projection — reducer + assemblage de l'entrée
// moteur. Ce module ne contient AUCUN calcul financier (tout est délégué
// à src/lib/simulateur-placements/) : uniquement la forme de l'état, ses
// transitions, et l'assemblage de ProjectionContratInput (pattern
// rempartfinancier/src/components/simulators/placements/state.ts).
// L'état UI EST le type sérialisable de share.ts (alias direct : pas de
// mapping UI ↔ URL).
// ============================================================

import { CONTRATS } from "@/lib/simulateur-placements/contrats";
import type { Enveloppe } from "@/lib/simulateur-placements/fiscalite";
import type {
  FrequenceVersement,
  ProjectionContratInput,
} from "@/lib/simulateur-placements/engine";
import {
  ETAT_PAR_DEFAUT,
  type EtatPartage,
  type PresetFrais,
} from "@/lib/simulateur-placements/share";

export type EtatSimulateur = EtatPartage;

export type ActionSimulateur =
  | { type: "ENVELOPPE"; valeur: Enveloppe }
  | { type: "VERSEMENT_INITIAL"; valeur: number }
  | { type: "VERSEMENT_PERIODIQUE"; valeur: number }
  | { type: "FREQUENCE_VERSEMENT"; valeur: FrequenceVersement }
  | { type: "INDEXATION"; valeur: number }
  | { type: "DUREE"; valeur: number }
  | { type: "REPARTITION_UC"; valeur: number }
  | { type: "TAUX_UC"; valeur: number }
  | { type: "TAUX_FONDS_EUROS"; valeur: number }
  | { type: "APPLIQUER_PRESET_FRAIS"; valeur: PresetFrais }
  | { type: "FRAIS_ENTREE"; valeur: number }
  | { type: "FRAIS_GESTION_UC"; valeur: number }
  | { type: "FRAIS_GESTION_FONDS_EUROS"; valeur: number }
  | { type: "TOGGLE_COUPLE" }
  | { type: "TOGGLE_BAREME" }
  | { type: "TMI"; valeur: number }
  | { type: "TMI_ENTREE"; valeur: number }
  | { type: "TMI_SORTIE"; valeur: number }
  | { type: "TOGGLE_INFLATION" }
  | { type: "INFLATION"; valeur: number }
  | { type: "REINITIALISER" };

export function reducerSimulateur(etat: EtatSimulateur, action: ActionSimulateur): EtatSimulateur {
  switch (action.type) {
    case "ENVELOPPE": {
      // L'enveloppe libre n'utilise pas de préréglage contrat (frais
      // d'entrée non appliqués, gestion saisie librement) : bascule sur
      // « perso » pour que l'URL partagée porte des frais explicites.
      if (action.valeur === "libre") {
        return { ...etat, enveloppe: action.valeur, presetFrais: "perso" };
      }
      // Préréglage contrat conservé si le contrat propose la nouvelle
      // enveloppe : sa grille de frais POUR CETTE ENVELOPPE est
      // réappliquée (ex. PVP : 1,08 %/an en AV, 1,00 %/an en PER).
      // Sinon, bascule sur « perso » en conservant les niveaux saisis.
      if (etat.presetFrais !== "perso") {
        const frais = CONTRATS[etat.presetFrais].frais[action.valeur];
        if (!frais) return { ...etat, enveloppe: action.valeur, presetFrais: "perso" };
        return {
          ...etat,
          enveloppe: action.valeur,
          fraisEntreePct: frais.entreePct,
          fraisGestionUcPct: frais.gestionUcPct,
          fraisGestionFondsEurosPct: frais.gestionFondsEurosPct ?? 0,
        };
      }
      return { ...etat, enveloppe: action.valeur };
    }
    case "VERSEMENT_INITIAL":
      return { ...etat, versementInitial: action.valeur };
    case "VERSEMENT_PERIODIQUE":
      return { ...etat, versementPeriodique: action.valeur };
    case "FREQUENCE_VERSEMENT":
      return { ...etat, frequenceVersement: action.valeur };
    case "INDEXATION":
      return { ...etat, indexationAnnuellePct: action.valeur };
    case "DUREE":
      // Arrondie au pas (années entières) dès la saisie : l'état affiché,
      // l'URL partagée et l'état rechargé restent identiques (le moteur
      // et share.ts arrondissent aussi — même convention partout).
      return { ...etat, dureeAnnees: Math.round(action.valeur) };
    case "REPARTITION_UC":
      return { ...etat, repartitionUcPct: action.valeur };
    case "TAUX_UC":
      return { ...etat, tauxUcPct: action.valeur };
    case "TAUX_FONDS_EUROS":
      return { ...etat, tauxFondsEurosPct: action.valeur };
    case "APPLIQUER_PRESET_FRAIS": {
      if (action.valeur === "perso") return { ...etat, presetFrais: "perso" };
      // Grille de frais du contrat pour l'enveloppe simulée. Un contrat
      // sans grille pour cette enveloppe (ou l'enveloppe libre) n'est
      // pas applicable — l'UI ne le propose pas, mais l'état se protège.
      const frais =
        etat.enveloppe === "libre" ? undefined : CONTRATS[action.valeur].frais[etat.enveloppe];
      if (!frais) return { ...etat, presetFrais: "perso" };
      return {
        ...etat,
        presetFrais: action.valeur,
        fraisEntreePct: frais.entreePct,
        fraisGestionUcPct: frais.gestionUcPct,
        fraisGestionFondsEurosPct: frais.gestionFondsEurosPct ?? 0,
      };
    }
    // Toute édition manuelle d'un niveau de frais sort du préréglage
    // contrat : les chiffres affichés ne sont plus ceux du contrat.
    case "FRAIS_ENTREE":
      return { ...etat, presetFrais: "perso", fraisEntreePct: action.valeur };
    case "FRAIS_GESTION_UC":
      return { ...etat, presetFrais: "perso", fraisGestionUcPct: action.valeur };
    case "FRAIS_GESTION_FONDS_EUROS":
      return { ...etat, presetFrais: "perso", fraisGestionFondsEurosPct: action.valeur };
    case "TOGGLE_COUPLE":
      return { ...etat, estCouple: !etat.estCouple };
    case "TOGGLE_BAREME":
      return { ...etat, optionBareme: !etat.optionBareme };
    case "TMI":
      return { ...etat, tmiPct: action.valeur };
    case "TMI_ENTREE":
      return { ...etat, tmiEntreePct: action.valeur };
    case "TMI_SORTIE":
      return { ...etat, tmiSortiePct: action.valeur };
    case "TOGGLE_INFLATION":
      return { ...etat, inflationActivee: !etat.inflationActivee };
    case "INFLATION":
      return { ...etat, inflationPct: action.valeur };
    case "REINITIALISER":
      return { ...ETAT_PAR_DEFAUT };
  }
}

/**
 * Point d'entrée unique vers le moteur : toute lecture de simulation
 * passe par cette fonction pour éviter toute divergence d'assemblage.
 */
export function versEntreeMoteur(etat: EtatSimulateur): ProjectionContratInput {
  return {
    enveloppe: etat.enveloppe,
    versementInitial: etat.versementInitial,
    versementPeriodique: etat.versementPeriodique,
    frequenceVersement: etat.frequenceVersement,
    indexationAnnuellePct: etat.indexationAnnuellePct,
    dureeAnnees: etat.dureeAnnees,
    repartitionUcPct: etat.repartitionUcPct,
    tauxUcPct: etat.tauxUcPct,
    tauxFondsEurosPct: etat.tauxFondsEurosPct,
    frais: {
      // Épargne libre : seul le champ « frais annuels » est exposé à
      // l'écran — les frais d'entrée (hérités d'un préréglage contrat)
      // n'y sont donc jamais appliqués, sinon la projection « libre »
      // serait amputée par un paramètre invisible et inéditable.
      entreePct: etat.enveloppe === "libre" ? 0 : etat.fraisEntreePct,
      gestionUcPct: etat.fraisGestionUcPct,
      gestionFondsEurosPct: etat.fraisGestionFondsEurosPct,
    },
    inflationPct: etat.inflationActivee ? etat.inflationPct : undefined,
    fiscalite:
      etat.enveloppe === "av"
        ? {
            estCouple: etat.estCouple,
            option: etat.optionBareme ? "bareme" : "pfu",
            tmiPct: etat.tmiPct,
          }
        : etat.enveloppe === "per"
          ? { tmiEntreePct: etat.tmiEntreePct, tmiSortiePct: etat.tmiSortiePct }
          : undefined,
  };
}
