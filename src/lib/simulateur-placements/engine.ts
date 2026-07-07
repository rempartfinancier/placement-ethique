// ============================================================
// Moteur de projection de contrat — aucune dépendance React.
// Étend le moteur du réseau (rempartfinancier/src/lib/
// simulateur-placements/engine.ts) au cas bi-compartiment d'un contrat
// d'assurance-vie ou d'un PER : poche unités de compte + poche fonds en
// euros, chacune avec son taux et ses frais de gestion, et restitution
// AN PAR AN façon BIG (versements nets, produits, PS fonds euros,
// capital fin d'année).
//
// Conventions de calcul (héritées du réseau, documentées dans
// docs/simulateur-projection-moteur.md) :
// - grille de temps mensuelle interne, sorties annuelles ;
// - versements crédités EN FIN de période, répartis entre les deux
//   poches selon la répartition choisie (pas de rééquilibrage ensuite) ;
// - poche UC : capitalisation mensuelle, taux mensuel proportionnel r/12 ;
// - poche fonds euros : intérêts simples intra-année crédités au 31/12
//   (fonctionnement réel d'un fonds euros, hors quinzaines) ;
// - frais de gestion annuels modélisés en réduction du taux de chaque
//   poche (peut rendre un taux net négatif — géré) ; frais d'entrée sur
//   chaque versement ;
// - assurance-vie : PS (17,2 %) retenus chaque année sur les intérêts
//   crédités du fonds euros ; en PER, PS dus à la sortie uniquement ;
// - indexation annuelle des versements périodiques : versement × (1+i)^(n−1) ;
// - AUCUN arrondi dans le moteur : l'arrondi se fait à l'affichage.
// ============================================================

import { BORNES, PS_ASSURANCE_VIE } from "./hypotheses";
import {
  calculerFiscaliteSortie,
  psAnnuelsFondsEurosApplicables,
  type AlerteSimulation,
  type Enveloppe,
  type ParametresFiscaux,
  type ResultatFiscalSortie,
} from "./fiscalite";

// ---- Fréquences (mêmes conventions que le moteur du réseau) ----

export type FrequenceVersement = "hebdomadaire" | "mensuelle" | "trimestrielle" | "annuelle";

export const NB_VERSEMENTS_PAR_AN: Record<FrequenceVersement, number> = {
  hebdomadaire: 52,
  mensuelle: 12,
  trimestrielle: 4,
  annuelle: 1,
};

// Montant brut versé au mois `moisDansAnnee` (1..12). Trimestriel : fin
// des mois 3/6/9/12 ; annuel : fin du mois 12 ; hebdomadaire : lissé en
// équivalent mensuel (×52/12, approximation documentée).
function montantVerseAuMois(
  versement: number,
  frequence: FrequenceVersement,
  moisDansAnnee: number,
): number {
  switch (frequence) {
    case "hebdomadaire":
      return (versement * 52) / 12;
    case "mensuelle":
      return versement;
    case "trimestrielle":
      return moisDansAnnee % 3 === 0 ? versement : 0;
    case "annuelle":
      return moisDansAnnee === 12 ? versement : 0;
  }
}

// ---- Entrées / sorties ----

export interface FraisContratInput {
  /** Frais d'entrée, en points de %, sur le versement initial et chaque versement. */
  entreePct: number;
  /** Frais de gestion annuels de la poche UC, en points de %. */
  gestionUcPct: number;
  /** Frais de gestion annuels de la poche fonds euros, en points de %. */
  gestionFondsEurosPct: number;
}

export interface ProjectionContratInput {
  enveloppe: Enveloppe;
  versementInitial: number;
  /** Montant d'un versement périodique, dans la fréquence choisie. */
  versementPeriodique: number;
  frequenceVersement: FrequenceVersement;
  /** Revalorisation annuelle des versements périodiques, en points de % (0 = constants). */
  indexationAnnuellePct: number;
  dureeAnnees: number;
  /** Part des versements affectée aux UC, en % (le reste va au fonds euros). */
  repartitionUcPct: number;
  /**
   * Rendements annuels des supports, en points de %, NETS des frais
   * internes des supports (TER) mais AVANT frais de gestion du contrat
   * (déduits par le moteur) — convention de la simulation BIG.
   */
  tauxUcPct: number;
  tauxFondsEurosPct: number;
  frais: FraisContratInput;
  /** Points de % (ex. 2 = 2 %/an). Absent = pas d'ajustement à l'inflation. */
  inflationPct?: number;
  /** Paramètres d'imposition à la sortie (ignorés si enveloppe "libre"). */
  fiscalite?: Omit<ParametresFiscaux, "enveloppe">;
}

export interface LigneAnnuelle {
  annee: number;
  /** Versements bruts de l'année (frais d'entrée inclus). */
  versementsBruts: number;
  /** Versements nets investis (après frais d'entrée). */
  versementsNets: number;
  /** Produits de la poche UC, nets de frais de gestion. */
  produitsUc: number;
  /** Produits crédités par le fonds euros, nets de frais de gestion, AVANT PS. */
  produitsFondsEuros: number;
  /** PS retenus sur les intérêts crédités du fonds euros (AV uniquement). */
  psFondsEuros: number;
  /** Rachats bruts de l'année — 0 en v1 (dénouement au terme uniquement). */
  rachatsBruts: number;
  capitalUc: number;
  capitalFondsEuros: number;
  capitalFinAnnee: number;
  cumulVerseBrut: number;
  /** Capital net de fiscalité si le contrat était dénoué fin d'année. */
  capitalNetSiRachat: number;
  /** Net fiscal déflaté (euros constants), null si inflation non renseignée. */
  pouvoirAchatReel: number | null;
}

export interface ResultatProjectionContrat {
  lignes: LigneAnnuelle[];
  versementsBrutsCumules: number;
  fraisEntreePayes: number;
  /** Intérêts cumulés des deux poches, nets de frais de gestion et de PS annuels. */
  interetsCumules: number;
  /** PS retenus annuellement sur les intérêts du fonds euros. */
  psAnnuelsPreleves: number;
  capitalBrutTerme: number;
  fiscal: ResultatFiscalSortie | null;
  capitalNet: number;
  capitalNetReel: number | null;
  /** Première année où les intérêts cumulés dépassent le total versé brut. */
  anneeBascule: number | null;
  alertes: AlerteSimulation[];
}

// Entrées défensives : NaN/Infinity retombent sur le défaut, les
// montants ne peuvent pas être négatifs. L'UI et share.ts clampent déjà,
// mais le moteur est une API publique et se protège lui-même (pattern
// des moteurs du réseau).
function nombreSain(valeur: number | undefined, defaut: number): number {
  return valeur !== undefined && Number.isFinite(valeur) ? valeur : defaut;
}

export function projeterContrat(input: ProjectionContratInput): ResultatProjectionContrat {
  const versementInitial = Math.max(0, nombreSain(input.versementInitial, 0));
  const versementBase = Math.max(0, nombreSain(input.versementPeriodique, 0));
  const indexation = Math.max(0, nombreSain(input.indexationAnnuellePct, 0)) / 100;
  const duree = Math.min(
    BORNES.dureeMaxAnnees,
    Math.max(
      BORNES.dureeMinAnnees,
      Math.round(nombreSain(input.dureeAnnees, BORNES.dureeMinAnnees)),
    ),
  );
  // Épargne « libre » : mono-poche, tout est traité comme UC.
  const partUc =
    input.enveloppe === "libre"
      ? 1
      : Math.min(1, Math.max(0, nombreSain(input.repartitionUcPct, 100) / 100));
  const partFe = 1 - partUc;
  const fEntree = Math.min(1, Math.max(0, nombreSain(input.frais.entreePct, 0) / 100));
  // Frais de gestion en réduction du taux de chaque poche (taux net
  // possiblement négatif — géré : le solde décroît, pas de PS).
  const rUc =
    (nombreSain(input.tauxUcPct, 0) - Math.max(0, nombreSain(input.frais.gestionUcPct, 0))) / 100;
  const rFe =
    (nombreSain(input.tauxFondsEurosPct, 0) -
      Math.max(0, nombreSain(input.frais.gestionFondsEurosPct, 0))) /
    100;
  const tauxMensuelUc = rUc / 12;
  const inflation =
    input.inflationPct === undefined || !Number.isFinite(input.inflationPct)
      ? null
      : input.inflationPct / 100;
  const psAnnuelsActifs = psAnnuelsFondsEurosApplicables(input.enveloppe) && partFe > 0;
  const parametresFiscaux: ParametresFiscaux = { enveloppe: input.enveloppe, ...input.fiscalite };

  let soldeUc = versementInitial * (1 - fEntree) * partUc;
  let soldeFe = versementInitial * (1 - fEntree) * partFe;
  let verseBrut = versementInitial;
  let verseNet = versementInitial * (1 - fEntree);
  let psPreleves = 0;
  let interetsFeCredites = 0; // bruts de PS, pour l'assiette PS de sortie

  const lignes: LigneAnnuelle[] = [];
  let anneeBascule: number | null = null;

  const netSiRachat = (annee: number): ResultatFiscalSortie =>
    calculerFiscaliteSortie(
      {
        capitalBrut: soldeUc + soldeFe,
        primesVersees: verseBrut,
        interetsFondsEurosCredites: interetsFeCredites,
        dureeDetentionAnnees: annee,
      },
      parametresFiscaux,
    );

  for (let annee = 1; annee <= duree; annee++) {
    const versementPeriodique = versementBase * Math.pow(1 + indexation, annee - 1);
    const soldeFeDebutAnnee = soldeFe;
    let versesBrutsAnnee = 0;
    let versesNetsAnnee = 0;
    let produitsUcAnnee = 0;
    // Fonds euros : prorata d'intérêts simples des versements de l'année
    // (un versement fin de mois m rapporte (12−m)/12 d'année).
    let prorataVersementsFe = 0;

    for (let mois = 1; mois <= 12; mois++) {
      const interetUcMois = soldeUc * tauxMensuelUc;
      soldeUc += interetUcMois; // intérêts du mois, puis versement fin de mois
      produitsUcAnnee += interetUcMois;

      const verseBrutMois = montantVerseAuMois(versementPeriodique, input.frequenceVersement, mois);
      if (verseBrutMois > 0) {
        const verseNetMois = verseBrutMois * (1 - fEntree);
        soldeUc += verseNetMois * partUc;
        soldeFe += verseNetMois * partFe;
        prorataVersementsFe += verseNetMois * partFe * rFe * ((12 - mois) / 12);
        versesBrutsAnnee += verseBrutMois;
        versesNetsAnnee += verseNetMois;
      }
    }

    // Crédit annuel du fonds euros au 31/12, puis PS sur les intérêts
    // crédités (assurance-vie uniquement, et seulement s'ils sont positifs).
    const produitsFeAnnee = soldeFeDebutAnnee * rFe + prorataVersementsFe;
    soldeFe += produitsFeAnnee;
    let psAnnee = 0;
    if (psAnnuelsActifs && produitsFeAnnee > 0) {
      psAnnee = produitsFeAnnee * PS_ASSURANCE_VIE;
      soldeFe -= psAnnee;
      psPreleves += psAnnee;
    }
    if (produitsFeAnnee > 0) interetsFeCredites += produitsFeAnnee;

    verseBrut += versesBrutsAnnee;
    verseNet += versesNetsAnnee;

    const capitalFinAnnee = soldeUc + soldeFe;
    const interetsCumules = capitalFinAnnee - verseNet;
    if (anneeBascule === null && interetsCumules > verseBrut) anneeBascule = annee;

    const fiscalAnnee = netSiRachat(annee);
    lignes.push({
      annee,
      versementsBruts: versesBrutsAnnee + (annee === 1 ? versementInitial : 0),
      versementsNets: versesNetsAnnee + (annee === 1 ? versementInitial * (1 - fEntree) : 0),
      produitsUc: produitsUcAnnee,
      produitsFondsEuros: produitsFeAnnee,
      psFondsEuros: psAnnee,
      rachatsBruts: 0,
      capitalUc: soldeUc,
      capitalFondsEuros: soldeFe,
      capitalFinAnnee,
      cumulVerseBrut: verseBrut,
      capitalNetSiRachat: fiscalAnnee.capitalNet,
      pouvoirAchatReel:
        inflation === null ? null : fiscalAnnee.capitalNet / Math.pow(1 + inflation, annee),
    });
  }

  const capitalBrutTerme = soldeUc + soldeFe;
  const fiscal = input.enveloppe === "libre" ? null : netSiRachat(duree);
  const capitalNet = fiscal ? fiscal.capitalNet : capitalBrutTerme;

  return {
    lignes,
    versementsBrutsCumules: verseBrut,
    fraisEntreePayes: verseBrut - verseNet,
    interetsCumules: capitalBrutTerme - verseNet,
    psAnnuelsPreleves: psPreleves,
    capitalBrutTerme,
    fiscal,
    capitalNet,
    capitalNetReel: inflation === null ? null : capitalNet / Math.pow(1 + inflation, duree),
    anneeBascule,
    alertes: fiscal ? [...fiscal.alertes] : [],
  };
}
