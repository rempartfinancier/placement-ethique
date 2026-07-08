import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import {
  Award,
  Landmark,
  HandCoins,
  FileText,
  Layers,
  BadgeCheck,
  Scale,
  Check,
  X,
  Search,
  AlertTriangle,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/outils/decodeur-label")({
  head: () => ({
    meta: [
      {
        title:
          "Décodeur de labels ISR, Greenfin, Finansol, SFDR — que garantissent-ils vraiment ? | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Label ISR, Greenfin, Finansol, SFDR Article 6/8/9, taxonomie verte : ce que chaque référentiel garantit vraiment, ce qu'il ne garantit pas, et comment vérifier qu'un fonds l'a réellement obtenu.",
      },
      {
        property: "og:title",
        content:
          "Décodeur de labels ISR, Greenfin, Finansol, SFDR — que garantissent-ils vraiment ?",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/decodeur-label" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils/decodeur-label" }],
  }),
  component: DecodeurLabelPage,
});

/* ─────────────────────────── Lien externe inline ─────────────────────────── */

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline decoration-dotted underline-offset-2 hover:text-[var(--grenat)]"
    >
      {children}
    </a>
  );
}

/* ─────────────────────────────── Données ─────────────────────────────── */

type Categorie = "label" | "sfdr" | "taxonomie";

type Referentiel = {
  id: string;
  categorie: Categorie;
  icon: LucideIcon;
  nom: string;
  titre: string;
  resume: string;
  garantit: ReactNode[];
  neGarantitPas: ReactNode[];
  quiDelivre: ReactNode[];
  commentVerifier: ReactNode[];
  signaux: ReactNode[];
};

const CATEGORIES: { id: Categorie; label: string }[] = [
  { id: "label", label: "Labels d'État ou associatifs" },
  { id: "sfdr", label: "Classification réglementaire SFDR" },
  { id: "taxonomie", label: "Réglementation européenne" },
];

const REFERENTIELS: Referentiel[] = [
  {
    id: "label-isr",
    categorie: "label",
    icon: Award,
    nom: "Label ISR",
    titre: "Label ISR (Investissement Socialement Responsable)",
    resume:
      "Label public français attestant qu'un fonds applique une méthodologie ISR structurée et auditée — sans garantir, à lui seul, un niveau d'exigence écologique ou social absolu.",
    garantit: [
      "Une méthodologie ESG documentée et auditée sur six piliers : objectifs ESG définis, méthodologie d'analyse extra-financière, construction et gestion du portefeuille, politique d'engagement actionnarial (vote, dialogue avec les émetteurs), transparence de la stratégie, mesure d'impact.",
      "Un socle d'exclusions obligatoires : au minimum le charbon et les hydrocarbures non conventionnels au-delà d'un seuil de chiffre d'affaires, les armes controversées, le tabac, les violations des droits humains, les manquements en matière de lutte anti-blanchiment et de coopération fiscale.",
      <>
        Une sélectivité minimale renforcée par le référentiel V3 (entré en application le 1
        <sup>er</sup> janvier 2025) : la part de l'univers d'investissement la moins bien notée sur
        le plan ESG à exclure est passée de 20 % à 30 %.
      </>,
      "Un audit indépendant réalisé par un organisme accrédité COFRAC, avec des contrôles intermédiaires pendant les trois années de validité du label.",
    ],
    neGarantitPas: [
      "Une performance financière supérieure ou un niveau d'impact environnemental mesuré : le label porte sur la méthode appliquée, pas sur le résultat écologique réel du portefeuille.",
      "L'absence totale d'entreprises controversées en portefeuille : les exclusions reposent sur des seuils de chiffre d'affaires, pas sur une exclusion à 0 % — une entreprise avec une activité fossile minoritaire peut rester éligible.",
      "Une comparabilité totale entre deux fonds labellisés : deux sociétés de gestion peuvent appliquer la même approche best-in-class avec des portefeuilles très différents.",
      "Le respect automatique de la version la plus récente du référentiel : un fonds labellisé sous une version antérieure applique les règles en vigueur à son dernier contrôle, jusqu'à sa prochaine échéance.",
    ],
    quiDelivre: [
      "Label créé en 2016 à l'initiative du ministère de l'Économie et des Finances, qui en reste le garant public.",
      "Attribution et contrôle assurés en toute indépendance par trois organismes certificateurs accrédités par le COFRAC : Afnor Certification, EY France et Deloitte.",
      "Label valable trois ans, avec des contrôles intermédiaires annuels pendant cette période pour vérifier le maintien de la conformité.",
    ],
    commentVerifier: [
      <>
        La liste officielle des fonds labellisés (fichier exhaustif avec codes ISIN, mis à jour
        régulièrement) sur{" "}
        <Ext href="https://www.lelabelisr.fr/comment-investir/fonds-labellises/">lelabelisr.fr</Ext>
        .
      </>,
      <>
        Le registre trimestriel consolidé par la{" "}
        <Ext href="https://www.banque-france.fr">Banque de France</Ext>, qui regroupe les fonds
        labellisés ISR, Greenfin, Finansol et CIES.
      </>,
      "Le prospectus et le DIC (document d'informations clés) du fonds : la mention du label, sa date d'obtention et la version du référentiel appliquée (V1, V2 ou V3) doivent y figurer.",
      "Le rapport de transparence annuel que tout fonds labellisé doit publier, détaillant la mise en œuvre concrète de sa méthodologie ESG.",
    ],
    signaux: [
      <>
        Un fonds qui se présente comme « ISR » sans figurer sur la liste officielle de{" "}
        <Ext href="https://www.lelabelisr.fr">lelabelisr.fr</Ext>.
      </>,
      "Une communication commerciale qui ne précise jamais le référentiel appliqué (V2 ou V3) ni la date d'obtention du label.",
      "Un inventaire de portefeuille qui révèle des positions dans des groupes énergétiques fossiles ou des activités controversées, alors que la documentation commerciale met en avant un positionnement environnemental.",
      "L'absence de rapport de transparence annuel accessible au public, pourtant obligatoire pour tout fonds labellisé.",
    ],
  },
  {
    id: "label-greenfin",
    categorie: "label",
    icon: Landmark,
    nom: "Label Greenfin",
    titre: "Label Greenfin",
    resume:
      "Label d'État porté par le ministère de la Transition écologique, réservé aux fonds « verts » qui excluent structurellement l'ensemble de la chaîne de valeur des énergies fossiles.",
    garantit: [
      "Un investissement majoritaire dans des activités classées « vertes » par le référentiel officiel, réparties en huit catégories : énergie, bâtiment, gestion des déchets, industrie, transport propre, technologies de l'information vertes, agriculture et forêt, adaptation au changement climatique.",
      "L'exclusion de l'ensemble de la chaîne de valeur des énergies fossiles — extraction, transformation et transport du pétrole, du charbon et du gaz — sans seuil de tolérance.",
      "L'exclusion des entreprises ayant fait l'objet de controverses sociales ou éthiques documentées, au-delà d'un seuil de chiffre d'affaires dans les activités non durables concernées.",
      "Un audit indépendant par un organisme tiers habilité, avec une labellisation réattribuée chaque année.",
    ],
    neGarantitPas: [
      "L'exclusion du nucléaire : le référentiel a été révisé en 2024 pour intégrer les activités nucléaires contribuant à la décarbonation parmi les activités éligibles, aux côtés des énergies renouvelables — un point à connaître pour comprendre la composition réelle d'un fonds Greenfin récent.",
      "Que 100 % du portefeuille soit investi en activités vertes : le référentiel impose une part majoritaire, pas une exclusivité totale.",
      "Un niveau de performance financière donné : comme tout label extra-financier, Greenfin porte sur la composition du portefeuille, pas sur son rendement.",
      "La stabilité du référentiel dans le temps : les catégories éligibles et les règles d'exclusion évoluent (dernière révision au 1er janvier 2025, pour un alignement renforcé avec la taxonomie verte européenne) — un fonds labellisé aujourd'hui n'est pas nécessairement composé comme un fonds labellisé sous une version antérieure.",
    ],
    quiDelivre: [
      "Label propriété du ministère chargé de la Transition écologique, dont les évolutions sont validées par un comité pluripartite associant notamment des représentants d'associations de consommateurs.",
      "Attribution et audit confiés à quatre organismes certificateurs indépendants habilités : EY France, Novethic, Afnor Certification et Bureau Veritas.",
      "Label attribué pour un an, renouvelable après un nouvel audit.",
    ],
    commentVerifier: [
      <>
        Le registre trimestriel consolidé par la{" "}
        <Ext href="https://www.banque-france.fr">Banque de France</Ext>, qui recense l'ensemble des
        fonds labellisés Greenfin (nom, ISIN, encours).
      </>,
      <>
        Les publications officielles du{" "}
        <Ext href="https://www.ecologie.gouv.fr/politiques-publiques/label-greenfin">
          ministère de la Transition écologique
        </Ext>{" "}
        (page dédiée au label Greenfin, référentiel à jour).
      </>,
      "Le prospectus et le DIC du fonds, qui doivent mentionner explicitement le label et la version du référentiel appliquée.",
      "Le rapport annuel de l'organisme certificateur, qui détaille la composition du portefeuille au regard des huit catégories d'éco-activités.",
    ],
    signaux: [
      <>
        Un produit qui utilise le mot « vert » ou « climat » dans son nom commercial sans figurer
        dans le registre officiel de la{" "}
        <Ext href="https://www.banque-france.fr">Banque de France</Ext>.
      </>,
      "Une communication qui affirme une exclusion totale du nucléaire alors que le référentiel en vigueur depuis 2024 l'intègre parmi les activités éligibles — vérifiez toujours la version exacte du référentiel appliqué par le fonds.",
      "L'absence, dans les documents du fonds, de toute mention des catégories d'éco-activités réellement financées.",
      "Un encours en forte croissance sans publication actualisée du rapport d'audit annuel du certificateur.",
    ],
  },
  {
    id: "label-finansol",
    categorie: "label",
    icon: HandCoins,
    nom: "Label Finansol",
    titre: "Label Finansol",
    resume:
      "Label associatif porté par FAIR, qui distingue l'épargne solidaire : des produits qui financent des structures à forte utilité sociale, ou reversent une partie de leurs revenus à des associations.",
    garantit: [
      "Pour les produits d'investissement solidaire : que tout ou partie de l'épargne collectée finance des entreprises ou associations de l'économie sociale et solidaire, sélectionnées pour leur forte utilité sociale ou environnementale.",
      "Pour les produits de partage : qu'au moins 25 % des revenus générés (intérêts, dividendes) sont reversés sous forme de don à des associations à impact social ou environnemental.",
      "Une information claire et vérifiée sur l'utilisation des fonds, le rendement et les risques du produit.",
      "Un contrôle annuel obligatoire par un comité d'experts indépendants de l'association FAIR, sans lequel le label n'est pas renouvelé — la labellisation n'est jamais acquise définitivement.",
    ],
    neGarantitPas: [
      "Un filtrage ESG large du reste du portefeuille : un produit de partage peut être investi dans des supports financiers classiques (non ISR) tant que le mécanisme de reversement des revenus est respecté.",
      "Un niveau de rendement garanti : la dimension solidaire ne modifie ni le risque de perte en capital ni la performance financière du support sous-jacent.",
      "Une taille homogène d'impact : « forte utilité sociale ou environnementale » est un critère qualitatif apprécié par le comité, pas un indicateur d'impact chiffré standardisé.",
      "La labellisation dans la durée par défaut : le contrôle est annuel, un produit peut perdre son label d'une année sur l'autre.",
    ],
    quiDelivre: [
      "Label créé en 1997, aujourd'hui géré par l'association FAIR (Finance à impact social).",
      "Attribution et contrôle annuel assurés par un comité du label composé d'experts indépendants.",
      "Plus de 180 produits labellisés actuellement, tous types d'épargne confondus (livrets bancaires, épargne salariale, assurance vie, actions non cotées).",
    ],
    commentVerifier: [
      <>
        La liste officielle des produits labellisés, publiée et mise à jour sur{" "}
        <Ext href="https://www.finance-fair.org/fr/connaitre-le-label-finansol">
          finance-fair.org
        </Ext>
        .
      </>,
      <>
        Le registre trimestriel consolidé par la{" "}
        <Ext href="https://www.banque-france.fr">Banque de France</Ext>, aux côtés des labels ISR,
        Greenfin et CIES.
      </>,
      "Le règlement et le guide du label Finansol, publiés sur finance-fair.org, qui détaillent les critères exacts appliqués à chaque catégorie de produit.",
      "Le rapport annuel de FAIR sur la finance solidaire, qui publie les montants collectés et les grandes catégories de structures financées.",
    ],
    signaux: [
      <>
        Un produit qui se dit « solidaire » ou « à impact » sans figurer sur la liste officielle de{" "}
        <Ext href="https://www.finance-fair.org">FAIR</Ext>.
      </>,
      "Pour un produit de partage : l'absence, dans la documentation commerciale, du pourcentage exact de revenus reversés (le critère est un plancher de 25 %, pas un objectif vague).",
      "Une communication qui ne nomme jamais les grandes catégories de structures ou d'associations bénéficiaires, ni le montant total des dons versés.",
      "La confusion, fréquente dans les brochures, entre « solidaire » (Finansol) et « responsable » (ISR) — deux logiques différentes qu'un même produit peut, ou non, combiner.",
    ],
  },
  {
    id: "sfdr-6",
    categorie: "sfdr",
    icon: FileText,
    nom: "SFDR Article 6",
    titre: "SFDR — Article 6",
    resume:
      "La catégorie réglementaire européenne la plus large : le fonds documente comment il intègre les risques ESG dans sa décision d'investissement — sans engagement d'exclusion ni objectif de durabilité.",
    garantit: [
      "Que le fonds publie, dans ses documents précontractuels, comment il intègre les risques en matière de durabilité dans sa décision d'investissement — ou explique pourquoi il juge ce risque non pertinent.",
      "L'application des obligations générales de transparence du règlement SFDR (règlement européen 2019/2088) : information sur les risques de durabilité et, le cas échéant, sur la prise en compte des principales incidences négatives de l'investissement.",
      "Un cadre réglementaire commun à toute l'Union européenne, avec des définitions harmonisées.",
    ],
    neGarantitPas: [
      "La moindre caractéristique environnementale ou sociale promue : l'article 6 est la catégorie « par défaut » — un fonds parfaitement classique, sans dimension extra-financière, y est éligible.",
      "Une exclusion sectorielle quelconque (armement, tabac, énergies fossiles) : rien n'est imposé par la seule classification Article 6.",
      "Une vérification indépendante de la classification : contrairement aux labels ISR, Greenfin ou Finansol, le classement Article 6/8/9 est auto-déclaré par la société de gestion elle-même, sans audit de certification préalable.",
    ],
    quiDelivre: [
      "Il ne s'agit pas d'un label : c'est une classification réglementaire définie par le règlement européen (UE) 2019/2088 (SFDR), que chaque société de gestion applique à ses propres fonds sous sa propre responsabilité.",
      "Supervision a posteriori par les régulateurs nationaux — en France, l'Autorité des marchés financiers (AMF) — et par l'Autorité européenne des marchés financiers (ESMA) au niveau de l'Union.",
      "L'AMF a publiquement pointé, dans une prise de position de février 2024, l'absence de critères suffisamment objectifs et vérifiables dans la réglementation actuelle, et a appelé à sa révision.",
    ],
    commentVerifier: [
      "L'annexe SFDR précontractuelle intégrée au DIC (document d'informations clés) ou au prospectus du fonds : la classification Article 6, 8 ou 9 y est explicitement indiquée.",
      "Le rapport périodique annuel du fonds, qui doit documenter la mise en œuvre effective de ce qui a été annoncé en précontractuel.",
      "Il n'existe pas de liste officielle unique des fonds Article 6 : l'information se vérifie fonds par fonds, dans ses propres documents réglementaires.",
    ],
    signaux: [
      "Un nom commercial de fonds évoquant la durabilité (« vert », « durable », « ESG »…) alors que sa classification réglementaire est Article 6 — l'ESMA a publié en 2024 des lignes directrices sur le nommage des fonds ESG, reprises par l'AMF, précisément pour limiter ce décalage.",
      "Une communication commerciale qui laisse entendre qu'Article 6 serait un premier niveau de « label vert » : ce n'est pas un label et cela ne certifie aucune caractéristique extra-financière.",
      "L'absence de toute mention, dans le prospectus, de la manière dont les risques de durabilité sont pris en compte.",
    ],
  },
  {
    id: "sfdr-8",
    categorie: "sfdr",
    icon: Layers,
    nom: "SFDR Article 8",
    titre: "SFDR — Article 8",
    resume:
      "Le fonds promeut des caractéristiques environnementales ou sociales définies — sans que la durabilité soit son objectif d'investissement principal.",
    garantit: [
      "Que le fonds promeut, dans ses documents précontractuels, des caractéristiques environnementales et/ou sociales définies (exclusions, filtrage ESG, engagement actionnarial…), en plus de son objectif financier.",
      "Une obligation de transparence renforcée par rapport à l'article 6 : le prospectus doit décrire la méthodologie utilisée pour évaluer, mesurer et suivre ces caractéristiques.",
      "Un reporting périodique qui doit démontrer, a posteriori, que les caractéristiques promues ont bien été respectées durant l'exercice.",
    ],
    neGarantitPas: [
      "Un objectif d'investissement durable au sens strict du règlement — c'est la différence fondamentale avec l'article 9, qui impose cet objectif explicite.",
      "Un niveau minimal de sélectivité ESG ou de part d'actifs réellement durables : la réglementation ne fixe pas de seuil chiffré, chaque société de gestion définit ses propres critères.",
      "Une exclusion homogène d'un secteur donné : deux fonds Article 8 peuvent avoir des univers d'investissement radicalement différents tout en respectant la même classification.",
      "Un alignement avec la taxonomie verte européenne : un fonds Article 8 peut afficher 0 % d'alignement taxonomique, ce qui est même la situation la plus fréquente en pratique, faute de seuil minimum imposé.",
    ],
    quiDelivre: [
      "Comme pour l'article 6, il ne s'agit pas d'un label mais d'une classification réglementaire auto-déclarée par la société de gestion, sous sa propre responsabilité, en application du règlement SFDR.",
      "Supervision a posteriori par l'AMF en France et par l'ESMA au niveau européen ; l'AMF a plaidé pour l'introduction de critères environnementaux minimaux contraignants pour cette catégorie, non encore adoptés au niveau européen.",
    ],
    commentVerifier: [
      "L'annexe SFDR précontractuelle du DIC ou du prospectus, qui doit détailler précisément les caractéristiques environnementales/sociales promues et leur méthode de suivi.",
      "Le rapport périodique annuel du fonds (annexe SFDR post-contractuelle), qui doit chiffrer la mise en œuvre réelle — notamment le taux d'alignement à la taxonomie verte, quel qu'il soit.",
      "L'inventaire de portefeuille du fonds, disponible sur demande ou dans le rapport annuel complet, pour confronter les lignes détenues aux caractéristiques promises.",
    ],
    signaux: [
      "Une caractéristique ESG « promue » qui reste vague dans le prospectus (« prise en compte de critères extra-financiers ») sans méthodologie précise ni indicateur de suivi chiffré.",
      "Un taux d'alignement à la taxonomie verte européenne à 0 % non expliqué, alors que le fonds se présente comme fortement engagé sur l'environnement.",
      "Un nom de fonds mobilisant des termes comme « durable » ou « vert » sans que les lignes directrices de nommage ESG de l'ESMA, reprises par l'AMF depuis décembre 2024, semblent respectées.",
    ],
  },
  {
    id: "sfdr-9",
    categorie: "sfdr",
    icon: BadgeCheck,
    nom: "SFDR Article 9",
    titre: "SFDR — Article 9",
    resume:
      "La catégorie la plus exigeante du règlement européen : le fonds vise, comme objectif d'investissement principal, un investissement durable mesurable.",
    garantit: [
      "Que l'objectif d'investissement principal du fonds est un investissement durable au sens du règlement SFDR : contribuer à un objectif environnemental et/ou social, tout en respectant le principe de « ne pas causer de préjudice important » (DNSH — Do No Significant Harm) aux autres objectifs de durabilité.",
      "Le respect de garanties minimales de bonne gouvernance des entreprises en portefeuille.",
      "Un reporting d'impact périodique plus détaillé que pour l'article 8, censé démontrer la contribution effective à l'objectif durable annoncé.",
    ],
    neGarantitPas: [
      "Un taux d'alignement minimal avec la taxonomie verte européenne : la réglementation ne fixe aujourd'hui aucun seuil contraignant, et une large majorité des fonds Article 8 et 9 déclarent un alignement de 0 % dans leurs documents précontractuels.",
      "Une définition harmonisée et opposable de ce qu'est un « investissement durable » : le règlement ne fournit pas de définition technique précise, ce qui laisse une marge d'interprétation importante entre sociétés de gestion — un point que l'AMF elle-même a publiquement critiqué.",
      "La stabilité de la classification dans le temps : fin 2022, plusieurs centaines de fonds européens auparavant classés Article 9 ont été reclassés Article 8 par leurs propres sociétés de gestion, après un examen plus strict de leurs pratiques.",
      "Une certification indépendante préalable : comme pour les articles 6 et 8, la classification Article 9 est déclarative.",
    ],
    quiDelivre: [
      "Classification réglementaire du règlement SFDR (UE) 2019/2088, auto-déclarée par la société de gestion : il n'existe aucun organisme certificateur qui « attribue » l'article 9 comme un label.",
      "Supervision a posteriori par l'AMF et l'ESMA ; l'AMF a formellement proposé, dans sa prise de position de février 2024, un seuil minimal d'alignement à la taxonomie verte pour les fonds Article 9 — une proposition non encore intégrée dans le règlement européen à ce jour.",
    ],
    commentVerifier: [
      "L'annexe SFDR précontractuelle du DIC ou du prospectus, qui doit détailler l'objectif d'investissement durable poursuivi et les indicateurs utilisés pour en mesurer l'atteinte.",
      "Le rapport périodique annuel (annexe SFDR post-contractuelle), qui doit chiffrer les résultats réels au regard de l'objectif annoncé, y compris le taux d'alignement à la taxonomie verte.",
      "L'historique de classification du fonds — a-t-il toujours été Article 9, ou reclassé récemment depuis ou vers l'Article 8 ? — disponible dans les rapports périodiques successifs.",
    ],
    signaux: [
      "Un objectif d'investissement durable formulé de façon générale, sans indicateur de mesure précis ni méthodologie DNSH documentée.",
      "Un taux d'alignement taxonomie à 0 % ou non communiqué, en contradiction avec un discours commercial mettant en avant l'ambition « la plus exigeante du marché ».",
      "Un reclassement récent depuis l'Article 9 vers l'Article 8 non expliqué dans la communication aux porteurs de parts.",
      "La confusion, fréquente, entre « Article 9 » et « garantie d'impact mesuré » : le règlement impose un objectif et un reporting, pas un niveau d'impact minimal certifié par un tiers indépendant.",
    ],
  },
  {
    id: "taxonomie",
    categorie: "taxonomie",
    icon: Scale,
    nom: "Taxonomie verte",
    titre: "Taxonomie verte européenne",
    resume:
      "Un système de classification technique européen qui définit, activité par activité, ce qu'est une activité économique « durable sur le plan environnemental » — un langage commun, pas un label de fonds.",
    garantit: [
      "Une définition technique précise et harmonisée, activité économique par activité économique, de ce qui peut être qualifié de « durable sur le plan environnemental », établie par le règlement européen (UE) 2020/852 et ses actes délégués.",
      "Qu'une activité n'est considérée « alignée » que si elle remplit trois conditions cumulatives : une contribution substantielle à l'un des six objectifs environnementaux (atténuation du changement climatique, adaptation, eau, économie circulaire, pollution, biodiversité), l'absence de préjudice important aux cinq autres (principe DNSH), et le respect de garanties sociales minimales.",
      "Une obligation de publication, pour les grandes entreprises soumises au reporting de durabilité, de la part de leur chiffre d'affaires, de leurs investissements (capex) et de leurs dépenses d'exploitation (opex) réellement alignée avec la taxonomie.",
    ],
    neGarantitPas: [
      "Que 100 % d'un fonds « aligné taxonomie » soit vert : le pourcentage affiché porte sur la part alignée du portefeuille, souvent minoritaire — un taux de 10 % ou 20 % est courant, y compris pour des fonds engagés.",
      "Une couverture universelle : la taxonomie ne documente que les secteurs et activités les plus émetteurs de gaz à effet de serre ; de nombreuses activités économiques (notamment hors Union européenne ou chez les petites entreprises non soumises au reporting) restent hors périmètre, ce qui peut mécaniquement limiter le taux d'alignement affiché sans rien dire de la qualité réelle du portefeuille.",
      "La distinction entre « éligible » et « aligné » : une activité peut figurer dans la liste des activités couvertes par la taxonomie (éligible) sans respecter les critères techniques qui la rendraient réellement « alignée » — un amalgame fréquent dans les communications commerciales.",
      "Un objectif d'investissement en tant que tel : la taxonomie est un outil de classification et de reporting, pas une stratégie de gestion.",
    ],
    quiDelivre: [
      "Ce n'est ni un label ni une certification : il s'agit d'un règlement européen (règlement (UE) 2020/852, complété par des actes délégués techniques), qui s'impose directement dans le droit des États membres.",
      "Les données d'entreprise sous-jacentes proviennent de leur reporting de durabilité réglementaire ; les sociétés de gestion calculent ensuite elles-mêmes le taux d'alignement de leurs fonds à partir de ces données, sans certification indépendante spécifique de ce calcul.",
      "Aucun comité ni organisme ne « délivre » la taxonomie à un fonds : elle s'applique par construction, via les obligations de transparence SFDR et de reporting extra-financier des entreprises.",
    ],
    commentVerifier: [
      "L'annexe SFDR précontractuelle et le rapport périodique du fonds, qui doivent afficher le taux d'alignement taxonomique et préciser sur quel indicateur il porte (chiffre d'affaires, capex ou opex — les trois donnent des résultats très différents).",
      "Les déclarations de durabilité publiées par les entreprises elles-mêmes sur leur propre taux d'alignement, disponibles dans leur rapport annuel ou de durabilité.",
      <>
        La documentation technique du règlement et de ses actes délégués, publiée sur{" "}
        <Ext href="https://eur-lex.europa.eu/FR/legal-content/summary/assessing-environmentally-sustainable-investments.html">
          EUR-Lex
        </Ext>
        , pour vérifier les critères exacts appliqués à un secteur donné.
      </>,
    ],
    signaux: [
      "Un pourcentage d'alignement mis en avant sans préciser s'il s'agit du chiffre d'affaires, des capex ou des opex — l'écart entre ces trois indicateurs peut être considérable pour une même entreprise en transition.",
      "La confusion entretenue entre « éligible » et « aligné » dans la documentation commerciale.",
      "Un discours marketing centré sur la taxonomie alors que le taux d'alignement réel du fonds reste proche de 0 %, ce qui est aujourd'hui la situation la plus répandue, y compris pour des fonds classés Article 8 ou 9.",
    ],
  },
];

/* ────────────────────────────────── Page ────────────────────────────────── */

function DecodeurLabelPage() {
  const [selected, setSelected] = useState<string>(REFERENTIELS[0].id);
  const current = REFERENTIELS.find((r) => r.id === selected) ?? REFERENTIELS[0];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Décodage des labels"
        title={
          <>
            Ce que chaque label{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              garantit vraiment
            </span>
          </>
        }
        lead="Label ISR, Greenfin, Finansol, SFDR Article 6, 8 ou 9, taxonomie verte européenne : sept tampons, sept promesses différentes. Choisissez un référentiel pour voir ce qu'il garantit, ce qu'il ne garantit pas, qui le contrôle, et comment vérifier vous-même qu'un fonds l'a réellement obtenu."
      >
        <span className="badge-verifie">
          <BadgeCheck size={13} aria-hidden /> Critères vérifiés en juillet 2026 — lelabelisr.fr,
          ecologie.gouv.fr, finance-fair.org, AMF, EUR-Lex
        </span>
      </PageHero>

      <section className="section">
        <div className="container-prose">
          <p className="eyebrow">Choisissez un référentiel</p>
          <h2 className="display-2 mt-4 max-w-2xl">Un tampon n'est jamais une garantie globale</h2>
          <p className="lead mt-4 max-w-2xl">
            Un label ou une classification réglementaire porte toujours sur un point précis — une
            méthodologie, une exclusion, une intention de durabilité. Connaître ce point précis,
            c'est déjà savoir ce qu'il faut vérifier soi-même pour le reste.
          </p>

          {/* Sélecteur */}
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="min-w-[240px]">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {REFERENTIELS.filter((r) => r.categorie === cat.id).map((r) => {
                    const Icon = r.icon;
                    const active = r.id === selected;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSelected(r.id)}
                        className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
                        style={
                          active
                            ? {
                                borderColor: "var(--grenat)",
                                background: "color-mix(in oklch, var(--grenat) 10%, transparent)",
                                color: "var(--foreground)",
                              }
                            : { borderColor: "var(--border)", color: "var(--muted-foreground)" }
                        }
                      >
                        <Icon
                          size={15}
                          aria-hidden
                          style={active ? { color: "var(--grenat)" } : undefined}
                        />
                        {r.nom}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Panneau du référentiel sélectionné */}
          <div className="mt-10 rounded-2xl border border-border bg-card p-7 md:p-10">
            <div className="flex items-start gap-4">
              <span
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
              >
                <current.icon size={22} aria-hidden />
              </span>
              <div>
                <p className="eyebrow" style={{ color: "var(--grenat)" }}>
                  {CATEGORIES.find((c) => c.id === current.categorie)?.label}
                </p>
                <h3 className="font-display text-2xl md:text-3xl mt-1">{current.titre}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{current.resume}</p>
              </div>
            </div>

            <div className="mt-9 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-background/60 p-5 md:p-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/80">
                  <Check size={15} aria-hidden style={{ color: "var(--grenat)" }} /> Ce que ça
                  garantit vraiment
                </p>
                <ul className="mt-4 space-y-3">
                  {current.garantit.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--grenat)" }}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-background/60 p-5 md:p-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/80">
                  <X size={15} aria-hidden className="text-muted-foreground" /> Ce que ça ne
                  garantit PAS
                </p>
                <ul className="mt-4 space-y-3">
                  {current.neGarantitPas.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-background/60 p-5 md:p-6">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/80">
                <Building2 size={15} aria-hidden /> Qui le délivre et le contrôle
              </p>
              <ul className="mt-4 space-y-3">
                {current.quiDelivre.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mt-6 rounded-xl border p-5 md:p-6"
              style={{
                borderColor: "color-mix(in oklch, var(--grenat) 35%, transparent)",
                background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
              }}
            >
              <p
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--grenat)" }}
              >
                <Search size={15} aria-hidden /> Comment vérifier qu'un fonds l'a vraiment
              </p>
              <ul className="mt-4 space-y-3">
                {current.commentVerifier.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--grenat)" }}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-amber-400/60 bg-card p-5 md:p-6">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <AlertTriangle size={15} aria-hidden className="text-amber-600" /> Signaux d'alerte
                greenwashing associés
              </p>
              <ul className="mt-4 space-y-3">
                {current.signaux.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Cet outil décode les référentiels eux-mêmes : il ne vérifie pas un fonds en particulier
            et ne remplace ni le DIC, ni le prospectus, ni le rapport périodique d'un produit donné.
            Pour confronter un support précis de votre contrat à ces critères, le point de départ
            reste toujours ses propres documents officiels — ou un échange avec un conseiller.
          </p>
        </div>
      </section>

      <CTA
        eyebrow="Aller plus loin"
        title="Un fonds précis à décoder dans votre contrat ?"
        text="Cet outil explique les référentiels. Pour vérifier ce qu'un support précis de votre assurance vie ou de votre PER a réellement dans son portefeuille, nous pouvons regarder ses documents avec vous, ligne par ligne."
      />
    </SiteLayout>
  );
}
