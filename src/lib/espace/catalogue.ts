import type { Database } from "@/integrations/supabase/types";

// Catalogue produits de l'espace client.
//
// Deux familles, et la frontière est structurelle, pas cosmétique :
//  - CATALOGUE : catégories sélectionnables comme "pistes" dans un dossier de
//    pré-souscription. Chacune documente SA ligne de bascule vers la vraie
//    souscription — elles ne sont pas toutes au même endroit.
//  - CATEGORIES_INFORMATIVES : présentes à l'écran pour l'honnêteté du
//    catalogue, mais non sélectionnables. L'immobilier en direct (financé à
//    crédit, avec travaux et notaire) n'a AUCUN flux structuré comparable :
//    l'enum SQL `produit_categorie` ne contient pas son code, un dossier ne
//    peut donc physiquement pas le référencer.
//
// Les six pistes sélectionnables et l'unique catégorie informative
// correspondent terme à terme aux huit sections de /placements — rien n'est
// ajouté ici qui ne soit déjà documenté et sourcé sur cette page publique.

export type ProduitCategorie = Database["public"]["Enums"]["produit_categorie"];

export interface MiseEnGarde {
  version: string;
  texte: string;
}

export interface ProduitCatalogue {
  code: ProduitCategorie;
  nom: string;
  tag: string;
  description: string;
  risques: string[];
  // Accusé de lecture obligatoire AVANT de pouvoir sélectionner la piste.
  miseEnGarde: MiseEnGarde | null;
  // Où s'arrête la pré-souscription en ligne pour CETTE catégorie, et ce qui
  // doit obligatoirement se passer avant une souscription réelle.
  bascule: string;
}

export const VERSION_MISES_EN_GARDE = "2026-07.1";

export const CATALOGUE: ProduitCatalogue[] = [
  {
    code: "actions_etf_isr",
    nom: "Actions & ETF ISR",
    tag: "Marchés cotés",
    description:
      "Fonds actions gérés activement ou ETF appliquant un filtre extra-financier : exclusions sectorielles, sélection best-in-class ou indices ISR dédiés.",
    risques: [
      "Volatilité des marchés actions — horizon minimum 8 à 10 ans recommandé",
      "Aucune garantie en capital",
    ],
    miseEnGarde: null,
    bascule:
      "En ligne : votre profil, vos objectifs et vos pièces. La souscription (instrument financier, cadre MIF2) n'est possible qu'après l'échange avec votre conseiller et la remise d'une recommandation écrite adaptée à votre profil — la signature se fait sur les documents du teneur de compte ou de l'assureur, jamais ici.",
  },
  {
    code: "obligations_vertes",
    nom: "Obligations vertes & obligataire ISR",
    tag: "Obligataire",
    description:
      "Green bonds dont les fonds levés sont fléchés vers des projets environnementaux identifiés, et fonds obligataires appliquant une sélection ISR — la poche de diversification, moins volatile que les actions.",
    risques: [
      "Risque de taux et de crédit",
      "Rendement en général plus modeste que la poche actions",
    ],
    miseEnGarde: null,
    bascule:
      "En ligne : votre profil, vos objectifs et vos pièces. Comme pour les actions et ETF (cadre MIF2), la souscription n'intervient qu'après recommandation écrite du conseiller, généralement via une assurance vie référençant ces fonds — signature sur les documents de l'assureur.",
  },
  {
    code: "epargne_solidaire",
    nom: "Épargne solidaire",
    tag: "Impact social",
    description:
      "Fonds « 90/10 », fonds de partage et livrets solidaires labellisés Finansol — le lien le plus direct et le plus vérifiable entre votre épargne et le projet financé.",
    risques: [
      "Rendement souvent plus modeste — un choix assumé, à connaître avant de souscrire",
      "Liquidité et garantie en capital variables selon le support",
    ],
    miseEnGarde: null,
    bascule:
      "En ligne : votre profil, vos objectifs et vos pièces. Selon le support, la souscription suit soit le cadre MIF2 (recommandation écrite puis signature chez l'assureur ou le teneur de compte), soit l'ouverture directe d'un livret — toujours après l'échange avec votre conseiller.",
  },
  {
    code: "scpi_immobilier_durable",
    nom: "SCPI & immobilier durable",
    tag: "Immobilier collectif",
    description:
      "Parts de SCPI dont la trajectoire énergétique du parc est documentée (Label ISR immobilier), ou fonds immobiliers durables référencés dans une enveloppe.",
    risques: [
      "Liquidité réduite : revente en plusieurs semaines à plusieurs mois",
      "Frais d'entrée élevés selon les véhicules",
      "Aucune garantie en capital, revenus non garantis",
    ],
    miseEnGarde: {
      version: VERSION_MISES_EN_GARDE,
      texte:
        "Mise en garde (obligation légale que nous prenons au sérieux) : une SCPI est un placement illiquide — la revente peut prendre plusieurs semaines à plusieurs mois — et le capital n'est pas garanti. Les performances passées ne préjugent pas des performances futures.",
    },
    bascule:
      "En ligne : la piste, votre situation, vos pièces. Le bulletin de souscription SCPI n'est signé qu'après la recommandation écrite du conseiller intégrant la mise en garde sur l'illiquidité et l'absence de garantie en capital.",
  },
  {
    code: "metaux_precieux",
    nom: "Métaux précieux",
    tag: "Diversification · le débat",
    description:
      "Or et argent détenus en physique (pièces, lingots), en coffre. Ce n'est pas un instrument financier réglementé au sens strict : les vérifications portent sur le titre de propriété, le stockage et les conditions de rachat.",
    risques: [
      "Pas de rendement courant, cours volatil",
      "Frais de stockage récurrents",
      "Conditions de rachat à vérifier contrat en main",
    ],
    miseEnGarde: {
      version: VERSION_MISES_EN_GARDE,
      texte:
        "Les métaux précieux physiques ne sont pas un produit financier régulé MIF2 : la protection vient du contrat lui-même. Titre de propriété individuel, modalités de stockage et conditions de rachat seront passés en revue point par point avec votre conseiller avant tout achat — et le débat sur leur place dans une démarche responsable (empreinte de l'extraction minière, absence de financement d'un projet) mérite d'être posé avant de vous engager.",
    },
    bascule:
      "En ligne : exprimer la piste et transmettre vos pièces. Même sans cadre MIF2, nous appliquons la même barrière : aucun bon de commande ni contrat de stockage n'est signé avant que l'échange avec le conseiller ait vérifié titre de propriété, stockage et clauses de rachat.",
  },
  {
    code: "av_per_enveloppes",
    nom: "Assurance vie, PER & enveloppes",
    tag: "Enveloppes fiscales",
    description:
      "Assurance vie française, PER, contrat de capitalisation — les enveloppes qui portent les supports ISR (actions, obligataire, immobilier durable).",
    risques: [
      "Le risque dépend des supports choisis à l'intérieur de l'enveloppe",
      "Frais d'entrée et de gestion — détaillés sur notre page Tarifs",
    ],
    miseEnGarde: null,
    bascule:
      "C'est la catégorie la plus encadrée (DDA + MIF2) : le devoir de conseil formalisé est une obligation légale. Rien ne peut être souscrit avant l'échange avec le conseiller et la remise du document d'entrée en relation et de la déclaration d'adéquation. La signature se fait chez l'assureur.",
  },
];

export interface CategorieInformative {
  code: string;
  nom: string;
  tag: string;
  description: string;
  pourquoiPasEnLigne: string;
}

export const CATEGORIES_INFORMATIVES: CategorieInformative[] = [
  {
    code: "immobilier_direct",
    nom: "Immobilier direct responsable",
    tag: "Immobilier en direct",
    description:
      "Achat d'un bien à rénover énergétiquement pour le louer — financement dédié (dont l'éco-PTZ) et aides publiques à la rénovation, sous conditions.",
    pourquoiPasEnLigne:
      "Ce placement se construit avec un financement (crédit, aides, devis de travaux) et un passage chez le notaire : il n'a pas de bulletin de souscription et ne suit pas le même parcours que les autres pistes de cette page. Nous en discutons entièrement de vive voix avec votre conseiller, projet par projet.",
  },
];

export const PRODUITS_PAR_CODE = new Map(CATALOGUE.map((p) => [p.code, p]));

export function produitsAvecMiseEnGarde(codes: ProduitCategorie[]): ProduitCatalogue[] {
  return codes
    .map((c) => PRODUITS_PAR_CODE.get(c))
    .filter((p): p is ProduitCatalogue => Boolean(p?.miseEnGarde));
}
