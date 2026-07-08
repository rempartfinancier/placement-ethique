import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import {
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Coins,
  Eye,
  FileSignature,
  Handshake,
  HelpCircle,
  Home,
  Landmark,
  LineChart,
  Percent,
  PiggyBank,
  Quote,
  Scale,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      {
        title:
          "Comment est rémunéré un cabinet de gestion de patrimoine spécialisé en investissement responsable ? | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Rétrocessions, honoraires, commissions : la grille de rémunération complète d'un cabinet spécialisé en investissement responsable, publiée chiffre par chiffre.",
      },
      {
        property: "og:title",
        content: "Comment nous sommes rémunérés — le guide complet | Placement-éthique.fr",
      },
      {
        property: "og:description",
        content:
          "Un site qui traque le greenwashing vous doit d'abord la transparence sur son propre modèle économique. Rétrocessions, honoraires, commissions : tout est publié ici, ligne par ligne.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/tarifs" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/tarifs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: TarifsPage,
});

/* ═══════════════════════════════════════════════════════════════════
   DONNÉES
   ═══════════════════════════════════════════════════════════════════ */

const principles = [
  {
    icon: Handshake,
    title: "Premier rendez-vous : offert",
    body: "Un bilan patrimonial complet de 45 à 60 minutes, offert et sans engagement. Vous repartez avec une lecture claire de votre situation et de vos exigences extra-financières, même si nous ne travaillons jamais ensemble.",
  },
  {
    icon: XCircle,
    title: "Zéro honoraires par défaut",
    body: "Par défaut, vous ne réglez aucun honoraire à notre cabinet. Notre rémunération est assurée par nos partenaires (compagnies d'assurance, sociétés de gestion, opérateurs) — comme le fait un courtier en crédit immobilier.",
  },
  {
    icon: FileSignature,
    title: "Exception : lettres de mission",
    body: "Pour des missions très spécifiques (audit de transmission, bilan retraite chiffré, optimisation fiscale complexe), nous proposons une lettre de mission tarifée — uniquement à votre demande, et toujours après devis.",
  },
  {
    icon: Eye,
    title: "Une marge plafonnée, pas maximisée",
    body: "Sur certaines solutions (assurance vie, PER), la marge de manœuvre sur les frais d'entrée nous revient en partie — nous avons choisi de la plafonner à une grille dégressive plutôt que de la maximiser. Sur les autres solutions, le prix est fixé par le partenaire et identique en direct.",
  },
];

const solutions = [
  {
    icon: ShieldCheck,
    title: "Assurance vie & Contrat de capitalisation",
    rows: [
      { label: "Frais d'entrée — jusqu'à 200 000 €", value: "1,00 %" },
      { label: "Frais d'entrée — de 200 000 € à 400 000 €", value: "0,50 %" },
      { label: "Frais d'entrée — au-delà de 400 000 €", value: "0 %" },
      { label: "Frais de gestion — Patrimoine Vie Plus (Suravenir / Crédit Mutuel Arkéa)", value: "1,08 % / an" },
      { label: "Frais de gestion — Version Absolue 2 (Spirica / UAF Life Patrimoine)", value: "1,00 % / an" },
    ],
    note: "Les frais de gestion sont prélevés par la compagnie d'assurance sur l'encours — ils financent la tenue du contrat, l'arbitrage en ligne, le reporting, et notre suivi continu.",
  },
  {
    icon: PiggyBank,
    title: "PER — Plan d'Épargne Retraite",
    rows: [
      { label: "Frais d'entrée", value: "Identiques à l'assurance vie" },
      { label: "Frais de gestion — les deux contrats", value: "1,00 % / an" },
    ],
    note: "Le PER bénéficie d'une grille de frais de gestion légèrement plus douce que l'assurance vie chez nos partenaires.",
  },
  {
    icon: LineChart,
    title: "Fonds ISR au sein de l'assurance vie",
    rows: [
      { label: "Supports indiciels ISR (ETF) — frais courants faibles", value: "Rétrocession faible ou nulle" },
      { label: "Fonds ISR à gestion active — frais courants plus élevés", value: "Rétrocession plus élevée" },
    ],
    note: "Les rétrocessions sur les supports logés dans un contrat varient selon les fonds : elles sont financées par les frais courants de chaque support, qui diffèrent fortement entre un ETF indiciel ISR et un fonds actif thématique. Nous ne publions pas de taux fonds par fonds ici — l'univers exact de supports de nos contrats est en cours de consolidation — mais les frais courants de chaque support figurent dans son DIC, que nous commentons avec vous avant toute souscription. L'asymétrie que cela crée est détaillée sans détour en section 8 du guide ci-dessous.",
  },
  {
    icon: Building2,
    title: "SCPI",
    rows: [
      { label: "Frais d'entrée totaux (identiques en direct)", value: "~12 %" },
      { label: "Part rétrocédée à notre cabinet", value: "~6 %" },
      { label: "Cashback client à partir de 100 000 € investis", value: "2 %" },
    ],
    note: "Les frais d'entrée SCPI sont les seuls à nous rémunérer — il n'y a aucune commission de gestion annuelle pour le cabinet. Au-delà de 100 000 € investis, nous vous reversons 2 % sous forme de cashback.",
  },
  {
    icon: Coins,
    title: "Girardin industriel (Lodeom)",
    rows: [{ label: "Commission totale (toutes parties incluses)", value: "~6 %" }],
    note: "Le Girardin industriel est un montage de défiscalisation outre-mer (loi Lodeom). La commission est intégrée au montage et identique en direct.",
  },
  {
    icon: Home,
    title: "Immobilier direct",
    rows: [{ label: "Commission cabinet (incluse dans le prix du bien)", value: "0 % à 10 %" }],
    note: "La commission est toujours incluse dans le prix d'acquisition affiché par l'opérateur. Elle varie selon le programme et la typologie de bien — nous vous indiquons le montant exact avant toute signature.",
  },
];

const tocItems = [
  { id: "pourquoi-cette-page", label: "1. Pourquoi cette page existe" },
  { id: "engagement-transparence", label: "2. Notre engagement de transparence" },
  { id: "remuneration-cgp-france", label: "3. Comment un conseiller peut être rémunéré en France" },
  { id: "modele-placement-ethique", label: "4. Le modèle de rémunération de Placement-éthique.fr" },
  { id: "retrocessions-expliquees", label: "5. Que sont exactement les rétrocessions ?" },
  { id: "cout-plus-eleve", label: "6. Les solutions coûtent-elles plus cher ?" },
  { id: "pourquoi-partenaires-remunerent", label: "7. Pourquoi les partenaires rémunèrent-ils les conseillers ?" },
  { id: "commissions-influencent-elles", label: "8. Les commissions influencent-elles nos pistes ?" },
  { id: "pourquoi-honoraires", label: "9. Pourquoi certains cabinets facturent des honoraires" },
  { id: "cabinets-semblent-ne-rien-couter", label: "10. Pourquoi certains cabinets semblent ne rien coûter" },
  { id: "qui-paie-quoi", label: "11. Qui paie réellement quoi ?" },
  { id: "deroulement-accompagnement", label: "12. Le déroulé d'un accompagnement" },
  { id: "ce-que-peu-expliquent", label: "13. Ce que peu de cabinets expliquent" },
  { id: "a-qui-nous-ne-convenons-pas", label: "À qui nous ne convenons pas" },
  { id: "faq", label: "Les questions qu'on n'ose pas poser" },
  { id: "notre-philosophie", label: "Notre philosophie" },
];

const payerRows = [
  {
    flux: "Frais d'entrée sur un versement (assurance vie, PER)",
    payeur: "Vous, prélevés une fois sur le montant versé",
    beneficiaire: "Partagés entre la compagnie d'assurance et notre cabinet",
    ou: "Bulletin de versement, tableau de frais du contrat",
  },
  {
    flux: "Frais de gestion annuels (assurance vie, PER)",
    payeur: "Vous, prélevés chaque année sur la valorisation de votre épargne",
    beneficiaire: "Majoritairement la compagnie d'assurance ; une part est rétrocédée à notre cabinet",
    ou: "Relevé annuel, Document d'Informations Clés (DIC) de chaque support",
  },
  {
    flux: "Frais courants des supports (ETF ISR, fonds actifs)",
    payeur: "Vous, déduits en continu de la valeur de chaque support — que vous soyez accompagné ou non",
    beneficiaire: "La société de gestion du fonds ; sur les fonds les plus chargés, une part peut être rétrocédée à notre cabinet",
    ou: "DIC de chaque support, rubrique « coûts au fil du temps »",
  },
  {
    flux: "Frais d'entrée (SCPI)",
    payeur: "Vous, prélevés à la souscription — identiques en direct",
    beneficiaire: "Société de gestion, dont une part rétrocédée à notre cabinet (+ cashback à vous au-delà de 100 000 €)",
    ou: "Bulletin de souscription, note d'information de la SCPI",
  },
  {
    flux: "Commission Girardin, immobilier direct",
    payeur: "Intégrée dans le montage ou dans le prix affiché — pas un supplément que vous réglez à part",
    beneficiaire: "L'opérateur, dont une part rétrocédée à notre cabinet",
    ou: "Grille publique de l'opérateur partenaire",
  },
  {
    flux: "Honoraires de mission (lettre de mission)",
    payeur: "Vous, réglés directement à notre cabinet, sur devis accepté",
    beneficiaire: "Exclusivement notre cabinet",
    ou: "Devis puis facture — uniquement si vous en faites la demande",
  },
  {
    flux: "Premier échange, bilan patrimonial initial",
    payeur: "Personne — aucune facture n'est émise pour cet échange",
    beneficiaire: "Aucune rémunération n'est générée à ce stade, quelle que soit l'issue du rendez-vous",
    ou: "—",
  },
];

const timelineSteps = [
  {
    icon: Users,
    title: "Prise de contact",
    body: "Vous nous écrivez via le formulaire de contact ou par email. Nous vous proposons un créneau pour le premier échange, généralement sous 48 heures ouvrées.",
  },
  {
    icon: HelpCircle,
    title: "Premier échange (45 à 60 minutes)",
    body: "Un bilan patrimonial et une cartographie de vos exigences extra-financières : secteurs que vous refusez de financer, causes que vous voulez soutenir, niveau de preuve que vous attendez d'un fonds « responsable ». Nous partons de vos objectifs (projet immobilier, retraite, transmission, réduction d'impôt) et de votre situation réelle. Aucune vente à ce stade — nous cartographions.",
  },
  {
    icon: BookOpen,
    title: "Restitution écrite",
    body: "Nous vous adressons une synthèse écrite : priorités identifiées, scénarios envisageables, ordre de grandeur des montants et des enveloppes concernées, et le raisonnement extra-financier qui justifie chaque piste. S'il existe plusieurs façons légitimes de structurer votre situation, nous vous les présentons toutes — avec leurs avantages et leurs limites. Cette synthèse est l'avis écrit d'un conseiller humain qui a lu votre dossier, pas la sortie d'un algorithme.",
  },
  {
    icon: Scale,
    title: "Votre décision",
    body: "Vous prenez le temps qu'il vous faut. Rien ne vous engage à ce stade, et aucune relance commerciale insistante ne suit notre synthèse. Si vous choisissez de ne pas donner suite, cela ne change rien à la qualité de ce que vous avez reçu.",
  },
  {
    icon: FileSignature,
    title: "Mise en œuvre",
    body: "Si vous décidez d'avancer, nous constituons le dossier avec vous : signature électronique, pièces justificatives, versement initial. C'est à ce moment précis — et seulement à ce moment — qu'un flux financier entre le partenaire et notre cabinet est déclenché.",
  },
  {
    icon: BadgeCheck,
    title: "Entrée en relation",
    body: "Vous recevez vos accès à l'espace client de la compagnie d'assurance ou de la société de gestion partenaire. Nous restons votre point de contact unique pour toute question, même technique, même après la souscription.",
  },
  {
    icon: CalendarCheck,
    title: "Suivi annuel",
    body: "Revue de votre allocation, et vérification que les critères extra-financiers de vos supports tiennent dans le temps : labels toujours en cours de validité (un label se renouvelle par audit et peut être perdu), classification SFDR inchangée (les reclassements d'Article 9 vers Article 8 existent et sont documentés), stratégie du fonds fidèle à sa promesse initiale. Nous révisons aussi votre clause bénéficiaire en cas de changement de situation familiale.",
  },
  {
    icon: TrendingUp,
    title: "La vie du contrat",
    body: "Versements complémentaires, arbitrages, événements de vie, rachats partiels, transmission : nous vous accompagnons sur la durée, pas seulement au moment de la signature.",
  },
];

const notForItems = [
  {
    strong: "Vous cherchez la performance maximale, sans aucune contrainte de valeurs.",
    body: "C'est un objectif parfaitement légitime — mais l'essentiel de notre travail consiste à vérifier la dimension extra-financière des placements. Si elle n'a aucune valeur à vos yeux, ce travail ne vous apportera rien, et un cabinet généraliste vous servira aussi bien.",
  },
  {
    strong: "Vous attendez un verdict absolu : « ce placement est 100 % éthique ».",
    body: "Personne ne peut vous le donner honnêtement. Il n'existe pas de référentiel unique et incontesté de l'éthique en finance — seulement des méthodologies, des labels aux exigences différentes et des preuves à vérifier. Nous documentons et nous sourçons ; nous ne délivrons pas de certificat de pureté. Si la nuance vous est insupportable, nous vous décevrons.",
  },
  {
    strong: "Vous n'avez pas encore d'épargne de précaution.",
    body: "Si votre épargne actuelle correspond à votre matelas de sécurité (3 à 6 mois de dépenses), le constituer reste la priorité — avant tout placement, responsable ou non. Nous serons heureux de vous accompagner quand cette base sera en place.",
  },
  {
    strong: "Vous cherchez uniquement un produit financier, pas un accompagnement.",
    body: "Si vous avez déjà décidé de souscrire une solution précise et cherchez simplement un exécutant, notre valeur ajoutée sera limitée. Nous accompagnons des projets patrimoniaux globaux, pas des transactions isolées.",
  },
  {
    strong: "Vous avez besoin d'une réponse en 24 heures.",
    body: "Un accompagnement patrimonial sérieux prend du temps. Notre premier rendez-vous dure 45 à 60 minutes, et notre synthèse écrite arrive après analyse de votre situation complète — et après vérification des supports envisagés. Si l'urgence prime sur la rigueur, nous ne sommes pas le bon cabinet.",
  },
  {
    strong: "Vous êtes convaincu que l'éthique coûte forcément plus cher — et ne souhaitez pas regarder les chiffres.",
    body: "Nous passons nos journées à comparer des frais courants et des performances nettes, DIC en main. La réalité est nuancée : certains supports responsables sont peu chargés, d'autres le sont beaucoup. Si aucune donnée ne peut faire évoluer votre conviction, l'échange tournera court — dans un sens comme dans l'autre.",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   FAQ — au moins 30 questions
   ═══════════════════════════════════════════════════════════════════ */

const faqItems: { q: string; a: string }[] = [
  {
    q: "Est-ce que vous gagnez plus d'argent si vous m'orientez vers un fonds labellisé plus cher ?",
    a: "Le label lui-même ne change rien à notre rémunération : aucun organisme de labellisation ne nous verse quoi que ce soit. Ce qui peut la faire varier, ce sont les frais courants du support — un fonds plus chargé en frais peut rétrocéder davantage au cabinet, qu'il soit labellisé ou non. Un fonds labellisé n'est pas mécaniquement plus chargé qu'un autre : il existe des ETF ISR à frais faibles et des fonds actifs non labellisés très chargés. Nous détaillons cette asymétrie, et pourquoi elle ne détermine pas nos pistes, en section 8 de notre guide de rémunération.",
  },
  {
    q: "Un fonds ISR coûte-t-il structurellement plus cher qu'un fonds classique ?",
    a: "Non, pas par principe. L'analyse extra-financière a un coût de recherche réel, mais l'écart de frais entre deux fonds s'explique d'abord par le mode de gestion : un ETF indiciel ISR affiche des frais courants faibles, souvent proches de son équivalent non-ISR, tandis qu'un fonds thématique à gestion active est nettement plus chargé — ISR ou pas. Le bon réflexe n'est pas de comparer « ISR contre classique » en bloc, mais de lire les frais courants de chaque support dans son DIC.",
  },
  {
    q: "Êtes-vous rémunérés différemment selon le fonds ISR que je choisis dans mon contrat ?",
    a: "Oui, et nous préférons vous le dire clairement plutôt que de simplifier à l'excès. Les supports indiciels ISR (ETF), peu chargés en frais, ne versent quasiment aucune rétrocession récurrente au cabinet. Les fonds à gestion active, plus chargés, en versent davantage. C'est un conflit d'intérêts potentiel réel, que nous documentons en détail en section 8 — avec les garde-fous que nous y opposons, et leurs limites.",
  },
  {
    q: "Une commission peut-elle rendre un placement « moins éthique » ?",
    a: "Non — ce sont deux questions indépendantes. La qualité extra-financière d'un placement dépend de sa méthodologie (exclusions réelles, engagement actionnarial, reporting publié), pas du mode de rémunération de l'intermédiaire qui vous l'a présenté. En revanche, une commission non expliquée abîme la confiance — et la confiance est précisément ce qui manque le plus à la finance responsable. C'est la raison d'être de cette page.",
  },
  {
    q: "Qu'est-ce que la classification SFDR et pourquoi devrait-elle m'intéresser ?",
    a: "SFDR (Sustainable Finance Disclosure Regulation) est un règlement européen qui impose aux fonds de déclarer leur niveau d'ambition en matière de durabilité : Article 6 (pas d'objectif particulier), Article 8 (promotion de caractéristiques environnementales ou sociales), Article 9 (objectif d'investissement durable). C'est une déclaration encadrée, pas un label de qualité : fin 2022, plusieurs centaines de fonds européens ont été reclassés d'Article 9 vers Article 8, selon les recensements de Morningstar. Elle vous intéresse parce qu'elle dit la promesse sur laquelle un fonds s'engage — donc ce que vous êtes en droit de lui demander de prouver.",
  },
  {
    q: "Gagnez-vous plus sur un fonds Article 9 que sur un fonds Article 8 ?",
    a: "Non. La classification SFDR ne détermine pas la rétrocession : ce sont les frais courants du support qui la déterminent. Un ETF Article 8 peu chargé nous rétrocède moins qu'un fonds actif Article 6 très chargé. Le niveau d'ambition durable affiché et le niveau de rétrocession sont deux variables indépendantes — les confondre serait une erreur de lecture.",
  },
  {
    q: "Vos partenaires vous imposent-ils des objectifs de vente sur les fonds labellisés ?",
    a: "Non. Nous ne sommes salariés d'aucune compagnie d'assurance ni d'aucune société de gestion : aucun quota, aucun objectif commercial — ni sur les fonds labellisés, ni sur les autres. Et aucun organisme de labellisation (Label ISR, Greenfin, Finansol) ne nous verse quoi que ce soit : la démarche de labellisation est engagée et financée par la société de gestion du fonds auprès d'auditeurs indépendants, sans aucun flux vers les distributeurs.",
  },
  {
    q: "Qu'est-ce qu'une rétrocession, en une phrase ?",
    a: "C'est la part des frais que vous réglez déjà — frais d'entrée, frais de gestion, frais courants d'un support — qu'une compagnie d'assurance ou une société de gestion reverse à l'intermédiaire qui vous a apporté et qui vous accompagne : le même principe qu'une commission d'apporteur d'affaires dans beaucoup d'autres secteurs.",
  },
  {
    q: "Si je souscris en direct, sans passer par vous, est-ce moins cher ?",
    a: "Non, en général. Les grilles tarifaires des compagnies d'assurance et des sociétés de gestion sont fixées en amont, que vous souscriviez seul ou via un intermédiaire. La part qui nous serait normalement rétrocédée n'est pas reversée au client si vous passez en direct : elle reste chez le partenaire. Sur l'assurance vie et le PER, nous appliquons en outre une grille de frais d'entrée plafonnée et dégressive plutôt que le maximum autorisé.",
  },
  {
    q: "Est-ce que je paie deux fois — une fois le placement, une fois votre accompagnement ?",
    a: "Non. Il n'y a qu'un seul flux financier : celui que vous versez sur votre solution d'épargne, aux conditions publiques du distributeur. Notre rémunération est prélevée sur ce flux par le partenaire, elle ne s'ajoute pas par-dessus.",
  },
  {
    q: "Pourquoi la commission SCPI (~6 %) est-elle plus élevée en pourcentage que celle de l'assurance vie (1 %) ?",
    a: "Parce que la nature du flux est différente. La commission SCPI est perçue une seule fois, à la souscription, et couvre tout le travail d'analyse en amont — sans rémunération récurrente ensuite. La commission d'assurance vie est annuelle et récurrente tant que votre épargne reste investie : elle rémunère un suivi qui se répète chaque année. Comparer les deux pourcentages sans tenir compte de cette différence de nature serait trompeur.",
  },
  {
    q: "Êtes-vous payés pour me faire changer de placement régulièrement ?",
    a: "Non. Les arbitrages entre supports au sein d'un même contrat d'assurance vie ou de PER ne génèrent aucune commission supplémentaire pour notre cabinet. Notre rémunération dépend de l'encours global détenu, pas de la fréquence des mouvements. Vous faire arbitrer souvent ne nous rapporterait rien — et vous coûterait du temps.",
  },
  {
    q: "Est-ce que vous choisissez vos partenaires en fonction de qui vous paie le mieux ?",
    a: "Notre sélection de partenaires repose d'abord sur la profondeur et la vérifiabilité de l'offre de supports responsables (labels en cours de validité, reporting extra-financier publié), la qualité de service, la solidité de l'assureur et les conditions tarifaires pour le client — pas sur le montant de la commission perçue. Nous travaillons avec un nombre restreint de partenaires précisément parce qu'ils remplissent ces critères, pas l'inverse.",
  },
  {
    q: "Que se passe-t-il si une solution moins rémunératrice pour vous convient mieux à ma situation ?",
    a: "Nous vous la proposons. Notre réputation et la relation de confiance construite dans la durée valent structurellement davantage qu'une commission ponctuelle plus élevée sur une piste mal calibrée — d'autant qu'une part significative de nos clients nous sont adressés par d'anciens clients satisfaits.",
  },
  {
    q: "Puis-je vous demander de me facturer des honoraires plutôt que de percevoir une rétrocession ?",
    a: "C'est précisément l'objet de la lettre de mission. Pour certaines situations — audit patrimonial complexe, stratégie de transmission élaborée, bilan retraite chiffré — nous pouvons établir un devis d'honoraires. Contactez-nous pour évaluer si cette formule est pertinente pour votre cas.",
  },
  {
    q: "Comment savoir si les frais que je paie sont dans la norme du marché ?",
    a: "Les frais d'entrée d'assurance vie (0 à 1 %) et de gestion (autour de 1 % par an) que nous pratiquons se situent dans la moyenne basse observée sur le marché français pour des contrats en architecture ouverte. Les frais d'entrée SCPI (autour de 12 %, identiques quel que soit le distributeur) sont la norme du secteur, tous acteurs confondus. Pour les supports, comparez les frais courants indiqués dans le DIC de chaque fonds — c'est la seule source qui fasse foi.",
  },
  {
    q: "Qu'est-ce que le DIC (Document d'Informations Clés) et pourquoi devrait-il m'intéresser ?",
    a: "C'est un document réglementaire obligatoire, remis avant toute souscription d'un support d'investissement, qui détaille de façon standardisée les frais, les risques et les scénarios de performance. Peu d'épargnants le lisent — nous vous encourageons à le faire, ou à nous demander de vous en commenter les points clés avant de signer. Pour un fonds « responsable », c'est aussi là (et dans la documentation SFDR du fonds) que la promesse extra-financière s'écrit noir sur blanc.",
  },
  {
    q: "Êtes-vous un cabinet indépendant au sens réglementaire ?",
    a: "« Indépendant » recouvre plusieurs réalités selon les cadres réglementaires, et nous préférons la précision au slogan. Ce que vous pouvez vérifier : EXP Capital (SASU, RCS Versailles 987 986 247) est immatriculée à l'ORIAS sous le n° 25005915, consultable sur orias.fr. Nous ne sommes salariés d'aucune compagnie d'assurance ni d'aucune société de gestion, et nous ne distribuons aucun fonds « maison » que nous aurions intérêt à défendre.",
  },
  {
    q: "Qu'est-ce que l'ORIAS et à quoi sert-il ?",
    a: "L'ORIAS est le registre unique des intermédiaires en assurance, banque et finance en France. Chaque professionnel habilité y est immatriculé sous un numéro public, consultable gratuitement sur orias.fr. Vérifier ce numéro avant de signer avec n'importe quel conseiller est le premier réflexe de vigilance à avoir, quel que soit le cabinet — pour nous : EXP Capital, n° 25005915.",
  },
  {
    q: "Quelle est la différence entre l'ACPR et l'AMF pour un cabinet comme le vôtre ?",
    a: "L'ACPR (Autorité de Contrôle Prudentiel et de Résolution) supervise les activités d'assurance et leur intermédiation ; l'AMF (Autorité des Marchés Financiers) supervise les marchés et les produits financiers — dont les SCPI. Ce sont deux régulateurs distincts. Le premier réflexe de vigilance reste le même dans tous les cas : vérifier l'immatriculation ORIAS de l'intermédiaire sur orias.fr.",
  },
  {
    q: "Est-ce que vous êtes obligés légalement d'agir dans mon intérêt ?",
    a: "Oui. Les distributeurs de produits d'assurance sont tenus d'agir de manière honnête, impartiale et professionnelle, au mieux des intérêts de leurs clients — une exigence posée notamment par la directive européenne sur la distribution d'assurances (DDA). Ces obligations existent indépendamment de notre volonté de transparence — mais nous préférons vous les expliquer plutôt que de nous cacher derrière elles.",
  },
  {
    q: "Combien gagnez-vous en moyenne sur un client ?",
    a: "Cela dépend entièrement du montant investi, des enveloppes choisies et de la durée de la relation — il n'existe pas de chiffre moyen représentatif que nous pourrions afficher sans induire en erreur. C'est précisément pour cette raison que nous préférons publier notre grille de frais détaillée, solution par solution, plutôt qu'un chiffre agrégé qui ne vous renseignerait sur rien de concret.",
  },
  {
    q: "Les rétrocessions sont-elles propres à l'investissement responsable ?",
    a: "Non. Les rétrocessions existent dans l'ensemble de l'industrie française de la gestion de patrimoine, quelle que soit la thématique des placements. L'investissement responsable n'a pas de modèle de rémunération distinct — nous appliquons les mêmes règles de courtage que n'importe quel cabinet, avec en plus une exigence de vérification extra-financière sur les supports que nous vous présentons.",
  },
  {
    q: "Si je ne signe rien, avez-vous perdu votre temps ?",
    a: "Financièrement, oui — aucune rémunération n'est générée si vous ne donnez pas suite. Nous l'assumons : notre modèle repose sur le fait qu'une majorité de premiers échanges débouche, à terme, sur un accompagnement, mais nous ne conditionnons jamais la qualité du premier rendez-vous à cette probabilité.",
  },
  {
    q: "Vos frais changent-ils si mon patrimoine est important ?",
    a: "Oui, dans un sens favorable pour vous : nos frais d'entrée d'assurance vie diminuent avec le montant investi (1 % jusqu'à 200 000 €, 0,50 % de 200 000 € à 400 000 €, 0 % au-delà), et le cashback SCPI de 2 % s'active au-delà de 100 000 € investis. Un patrimoine plus important vous donne accès à de meilleures conditions, pas l'inverse.",
  },
  {
    q: "Est-ce que je peux voir les conventions qui vous lient à vos partenaires ?",
    a: "Les conventions de distribution entre notre cabinet et nos partenaires sont des documents contractuels bilatéraux, non publics dans leur intégralité — comme c'est l'usage dans l'ensemble du secteur. En revanche, les taux qui vous concernent directement sont publiés sur cette page, ce qui est rarement le cas ailleurs, et les frais de chaque contrat et de chaque support figurent dans leur documentation réglementaire.",
  },
  {
    q: "Pourquoi ne pas simplement facturer 1 % d'honoraires à tout le monde, ce serait plus simple ?",
    a: "Ce serait effectivement plus simple à expliquer en une phrase. Mais cela créerait une barrière à l'entrée pour les épargnants qui démarrent avec de petits montants, et cela dupliquerait une rémunération déjà prévue dans les grilles des partenaires — sauf à reverser intégralement les rétrocessions au client, ce que certains cabinets fee-only pratiquent. Nous avons fait un autre choix, assumé et documenté ; ce n'est pas le seul choix légitime.",
  },
  {
    q: "Vos partenaires changent-ils souvent ?",
    a: "Non. Nous travaillons avec un nombre volontairement restreint de partenaires sur la durée, parce que la stabilité permet un suivi de qualité et une connaissance approfondie de chaque contrat. Un changement n'intervient que si la qualité de l'offre responsable, la qualité de service ou les conditions tarifaires se dégradent significativement.",
  },
  {
    q: "Un fonds de mon contrat perd son label ou est reclassé SFDR : est-ce que vous me prévenez ?",
    a: "C'est précisément l'un des objets du suivi annuel. Un label a une durée de validité et se renouvelle par audit — il peut donc être perdu ; une classification SFDR peut être revue à la baisse, comme l'ont montré les reclassements massifs d'Article 9 vers Article 8 fin 2022. Lors de chaque revue, nous vérifions que les critères extra-financiers qui avaient justifié une piste tiennent toujours, et nous vous proposons un arbitrage si ce n'est plus le cas. Un placement responsable ne se vérifie pas une fois : il se surveille.",
  },
  {
    q: "Est-ce que je peux transférer mon contrat ailleurs si je ne suis plus satisfait de vous ?",
    a: "Sur une assurance vie, un transfert vers un autre assureur n'est généralement pas possible sans clôture puis nouvelle ouverture. Un PER, lui, est transférable vers un autre établissement, avec des frais de transfert encadrés et plafonnés par la loi. Dans tous les cas, vous pouvez cesser de nous solliciter sans clôturer votre contrat — la relation d'accompagnement n'est jamais contractuellement figée.",
  },
  {
    q: "Comment savoir si un autre cabinet me facturerait moins cher pour la même solution ?",
    a: "Pour la SCPI, l'immobilier et le Girardin, les frais sont fixés par la grille du partenaire, identique quel que soit l'intermédiaire. Pour l'assurance vie et le PER, les frais de gestion sont fixés par la compagnie, mais les frais d'entrée relèvent d'une fourchette que chaque courtier peut moduler jusqu'à un plafond — un autre cabinet pourrait donc appliquer une grille différente de la nôtre. C'est précisément pour cette raison que nous publions la nôtre : pour que vous puissiez comparer.",
  },
  {
    q: "Est-ce que vos outils gratuits (simulateur, décodeur de label…) vous rapportent quelque chose ?",
    a: "Non, rien directement. Aucun outil de ce site ne déclenche de rémunération, ne recommande de produit ni ne transmet vos réponses à un partenaire : leurs résultats sont des pistes pédagogiques, pas des recommandations. Leur intérêt pour nous est indirect et assumé : montrer notre façon de travailler avant même que vous nous parliez.",
  },
  {
    q: "Est-ce que vous publiez cette page parce que la loi vous y oblige ?",
    a: "Non. La réglementation impose une information sur les coûts et frais avant la souscription d'un produit précis (via le DIC notamment), pas la publication d'une page détaillant l'intégralité du modèle de rémunération d'un cabinet. Cette page va au-delà de ce qui est exigé — c'est un choix éditorial cohérent avec ce que nous demandons aux fonds que nous examinons : prouver, pas proclamer.",
  },
  {
    q: "Que faire si je pense qu'une orientation ne servait pas mon intérêt ?",
    a: "Dites-le nous directement — c'est la première étape, et dans l'immense majorité des cas la plus efficace. Si le désaccord persiste, adressez une réclamation écrite à notre cabinet : les intermédiaires en assurance doivent y répondre sous deux mois au maximum (recommandation de l'ACPR). En cas d'échec, vous pouvez saisir gratuitement le médiateur compétent : La Médiation de l'Assurance pour les contrats d'assurance vie et de PER assurantiel, ou le médiateur de l'AMF pour les produits relevant des marchés financiers, comme une SCPI.",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   COMPOSANTS
   ═══════════════════════════════════════════════════════════════════ */

function Sommaire() {
  const [activeId, setActiveId] = useState(tocItems[0].id);

  useEffect(() => {
    const elements = tocItems
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActiveId(top.target.id);
        }
      },
      { rootMargin: "-100px 0px -65% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Sommaire"
      className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm max-h-[70vh] overflow-y-auto"
    >
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">Sommaire</h3>
      <ul className="space-y-3 text-sm relative border-l border-border/80 pl-4">
        {tocItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="relative">
              {isActive && (
                <span className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[var(--grenat)] border-2 border-background" />
              )}
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                className={`text-left w-full leading-snug transition-colors ${
                  isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function LongSection({
  id,
  eyebrow,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pb-16 border-b border-border/50 last:border-b-0 last:pb-0">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center"
          style={{ background: "var(--accent)", color: "var(--grenat)" }}
        >
          <Icon size={18} />
        </span>
        <p className="eyebrow !mb-0">{eyebrow}</p>
      </div>
      <h2 className="display-3 font-display font-semibold text-foreground mb-5">{title}</h2>
      <div className="prose-article max-w-none">{children}</div>
    </section>
  );
}

function Callout({
  variant = "grenat",
  label,
  children,
}: {
  variant?: "grenat" | "muted";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={
        variant === "grenat"
          ? {
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 5%, var(--card))",
            }
          : { borderColor: "var(--color-border)", background: "var(--color-card)" }
      }
    >
      <p
        className="text-[11px] uppercase tracking-[0.16em] font-bold mb-2"
        style={{ color: "var(--grenat)" }}
      >
        {label}
      </p>
      <div className="text-sm text-foreground/85 leading-relaxed">{children}</div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-5 flex items-center justify-between gap-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base md:text-lg text-foreground font-semibold">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[var(--grenat)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-foreground/80 leading-relaxed text-sm -mt-1">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════ */

function TarifsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Rémunération & transparence"
        title={
          <>
            Comment est rémunéré un cabinet de gestion de patrimoine{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              spécialisé en investissement responsable
            </span>{" "}
            ?
          </>
        }
        lead="Le guide le plus complet que nous connaissions sur la façon dont un conseiller en gestion de patrimoine gagne sa vie en France — appliqué à notre propre cabinet, chiffre par chiffre, sans détour."
      />

      {/* Chapô */}
      <section className="pb-4 pt-10">
        <div className="container-prose max-w-3xl">
          <p className="text-foreground/80 leading-relaxed text-base">
            Vous êtes probablement arrivé sur cette page avec une question simple, et parfois inavouée :{" "}
            <em>
              « si ce cabinet ne me facture rien directement, qui le paie, et est-ce que cela influence ce
              qu'on va me proposer ? »
            </em>{" "}
            C'est une excellente question. C'est même la bonne question à poser à n'importe quel conseiller
            financier avant de lui confier quoi que ce soit.
          </p>
          <p className="text-foreground/80 leading-relaxed text-base mt-4">
            Elle se pose avec une acuité particulière ici. Ce site passe son temps à examiner les promesses
            des autres — ce qu'un label garantit vraiment, ce qu'un fonds « vert » détient réellement. Un
            site qui vous parle d'éthique vous doit d'abord cette transparence-là, appliquée à lui-même :
            il serait incohérent de traquer le flou des brochures en entretenant le flou sur notre propre
            modèle économique. Nous avons donc écrit cette page pour répondre en entier — pas en trois
            lignes rassurantes, mais avec le niveau de détail que le sujet mérite.
          </p>
        </div>
      </section>

      {/* Engagement */}
      <section className="pb-4 pt-8">
        <div className="container-prose">
          <div
            className="rounded-2xl border p-7 md:p-9"
            style={{
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
              borderColor: "var(--grenat)",
            }}
          >
            <p className="eyebrow" style={{ color: "var(--grenat)" }}>
              Notre engagement
            </p>
            <h2 className="display-3 mt-4 max-w-3xl font-display font-semibold leading-tight text-foreground">
              L'épargnant a le droit de savoir qui rémunère son conseiller, combien, et pourquoi.
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed max-w-3xl text-sm font-medium">
              Pendant des années, nous avons opéré au sein de réseaux qui taisaient leurs marges. Nous avons
              construit ce cabinet — et ce site — pour faire l'inverse.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed max-w-3xl text-sm">
              Avant d'être spécialistes de l'investissement responsable, nous sommes conseillers en gestion
              de patrimoine, au sein d'EXP Capital (ORIAS n° 25005915, vérifiable sur{" "}
              <a href="https://www.orias.fr" target="_blank" rel="noreferrer">
                www.orias.fr
              </a>
              ) — une structure qui nous donne accès à des conditions tarifaires négociées auprès de nos
              partenaires assureurs, que nous vous répercutons intégralement. La rigueur que nous demandons
              aux fonds — prouver, pas proclamer — commence par notre propre grille de rémunération.
            </p>
          </div>
        </div>
      </section>

      {/* 4 principes */}
      <section className="section pt-12">
        <div className="container-prose">
          <p className="eyebrow">Nos 4 règles</p>
          <h2 className="display-2 mt-4 max-w-3xl">Ce que vous réglez, ce que vous ne réglez pas.</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {principles.map(({ icon: Icon, title, body }) => (
              <article key={title} className="card-paper">
                <div className="flex items-start gap-4">
                  <span
                    className="h-11 w-11 shrink-0 rounded-full flex items-center justify-center"
                    style={{ background: "var(--accent)", color: "var(--grenat)" }}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl">{title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Détail solution par solution */}
      <section className="pb-20">
        <div className="container-prose">
          <p className="eyebrow">Solution par solution</p>
          <h2 className="display-2 mt-4 max-w-3xl">Chaque commission, chiffrée.</h2>
          <p className="lead mt-5 max-w-2xl">
            Les chiffres ci-dessous sont les nôtres. Pour la plupart des solutions (SCPI, immobilier,
            Girardin), la grille est fixée par le partenaire et strictement identique en direct. Pour
            l'assurance vie et le PER, les frais de gestion sont fixés par la compagnie, mais les frais
            d'entrée relèvent d'une marge de manœuvre que le courtier — donc nous — peut moduler dans une
            fourchette autorisée. Nous l'avons plafonnée à une grille dégressive plutôt que de la
            maximiser : c'est un choix que nous assumons et détaillons en section 6 de notre guide de
            rémunération.
          </p>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {solutions.map(({ icon: Icon, title, rows, note }) => (
              <article key={title} className="card-paper flex flex-col">
                <div className="flex items-center gap-3">
                  <span
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ background: "var(--accent)", color: "var(--grenat)" }}
                  >
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-2xl">{title}</h3>
                </div>

                <dl className="mt-5 divide-y divide-border">
                  {rows.map((r) => (
                    <div key={r.label} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-sm text-foreground/80">{r.label}</dt>
                      <dd
                        className="font-display text-lg text-right"
                        style={{ color: "var(--grenat)" }}
                      >
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {note && (
                  <p
                    className="mt-5 text-sm text-muted-foreground leading-relaxed border-l-2 pl-4"
                    style={{ borderColor: "var(--grenat)" }}
                  >
                    {note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser outils */}
      <section className="pb-20">
        <div className="container-prose">
          <div
            className="rounded-2xl border border-dashed p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between"
            style={{ borderColor: "var(--grenat)" }}
          >
            <div className="max-w-2xl">
              <p className="eyebrow" style={{ color: "var(--grenat)" }}>
                Avant de nous rencontrer
              </p>
              <h3 className="font-display text-2xl md:text-3xl mt-3">Faites vos propres calculs</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Nos outils en libre accès projettent votre épargne frais réels inclus, décodent ce que
                chaque label garantit vraiment, ou estiment l'empreinte carbone de vos placements actuels.
                Ils donnent des pistes, sans inscription forcée — avant même de nous parler.
              </p>
            </div>
            <Link to="/outils" className="btn-grenat shrink-0">
              Voir tous les outils
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ GUIDE LONG-FORME ═══════════════ */}
      <section className="pb-8">
        <div className="container-prose max-w-3xl text-center">
          <p className="eyebrow justify-center">Le guide complet</p>
          <h2 className="display-2 mt-4">Tout ce que l'industrie explique rarement en entier</h2>
          <p className="lead mt-5">
            Treize sections pour comprendre, dans le détail, comment un conseiller en gestion de patrimoine
            gagne sa vie en France — et comment nous, précisément, avons construit notre modèle.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-prose">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-16">
              {/* 1 */}
              <LongSection id="pourquoi-cette-page" eyebrow="Introduction" title="Pourquoi cette page existe" icon={BookOpen}>
                <p>
                  La plupart des sites de conseillers en gestion de patrimoine consacrent une ligne à leur
                  rémunération, généralement en bas de page, en petits caractères. Nous avons fait le choix
                  inverse : lui consacrer l'une des pages les plus longues de notre site.
                </p>
                <p>
                  Ce choix n'est pas cosmétique. Dans notre expérience, la question de la rémunération est
                  celle qui pèse le plus lourd — souvent silencieusement — dans la décision de faire
                  confiance ou non à un conseiller. Un épargnant qui ne comprend pas comment son conseiller
                  est payé ne peut pas juger, en connaissance de cause, si une piste le sert lui ou sert la
                  commission. Cette incertitude, légitime, mérite une réponse complète plutôt qu'une phrase
                  rassurante.
                </p>
                <p>
                  Il y a une raison supplémentaire, propre à ce site. La première question qu'un lecteur
                  averti pose à un média, un comparateur ou un cabinet qui parle d'investissement
                  « responsable », c'est : <em>qui vous paie ?</em> Et il a raison de la poser — une partie
                  du greenwashing de l'épargne se niche exactement là, dans des mises en avant rémunérées
                  qui ne se présentent pas comme telles. Nous appliquons donc à notre propre modèle la
                  discipline que nous réclamons aux fonds : documenter, sourcer, laisser le lecteur juger.
                </p>
                <p>
                  Notre objectif ici n'est pas de vous convaincre que notre modèle est le meilleur. Il est de
                  vous donner tous les éléments pour comprendre comment fonctionne cette industrie — la
                  nôtre comme celle de nos confrères — afin que vous puissiez juger par vous-même, avec des
                  faits, pas avec des slogans.
                </p>
              </LongSection>

              {/* 2 */}
              <LongSection id="engagement-transparence" eyebrow="Notre position" title="Notre engagement de transparence" icon={ShieldCheck}>
                <p>
                  Nous avons longtemps exercé au sein de structures où la rémunération du conseiller n'était
                  jamais mentionnée au client — ni son montant, ni son origine, ni la façon dont elle
                  pouvait, en théorie, orienter une proposition. Ce silence n'était pas illégal : la
                  réglementation impose une information sur les coûts avant la souscription d'un produit
                  précis, pas une transparence globale et proactive sur le modèle économique du cabinet.
                  Mais ce silence nous a toujours semblé être un manque de respect envers le client.
                </p>
                <p>
                  Placement-éthique.fr est né de cette conviction, appliquée au champ de l'investissement
                  responsable : un épargnant qui veut que son argent serve ses valeurs mérite, sur la
                  rémunération de son conseiller, une transparence au moins égale à celle qu'il exige des
                  fonds dans lesquels il investit. C'est un engagement que nous tenons de trois façons
                  concrètes.
                </p>
                <ul>
                  <li>
                    <strong>Publier nos grilles de frais précises</strong>, solution par solution, sur une
                    page publique — pas seulement au moment où vous les demandez.
                  </li>
                  <li>
                    <strong>Expliquer la mécanique</strong>, pas seulement le chiffre — pour que vous
                    compreniez d'où vient chaque euro, pas seulement combien il représente.
                  </li>
                  <li>
                    <strong>Répondre aux questions inconfortables</strong> plutôt que de les éviter — y
                    compris celle de savoir si nos commissions influencent les pistes que nous vous
                    proposons (voir section 8).
                  </li>
                </ul>
                <Callout label="Ce que cet engagement ne signifie pas">
                  Être transparent sur notre rémunération ne signifie pas que nous travaillons sans en tirer
                  de revenu, ni que notre accompagnement serait « désintéressé » au sens absolu. Nous sommes
                  un cabinet qui doit générer un chiffre d'affaires pour exister durablement. La transparence
                  n'efface pas cette réalité économique — elle vous permet simplement de l'évaluer
                  vous-même.
                </Callout>
              </LongSection>

              {/* 3 */}
              <LongSection
                id="remuneration-cgp-france"
                eyebrow="Le cadre général"
                title="Comment un conseiller en gestion de patrimoine peut être rémunéré en France"
                icon={Landmark}
              >
                <p>
                  Il n'existe pas un modèle unique de rémunération pour les conseillers en gestion de
                  patrimoine (CGP) en France. Trois grandes familles coexistent, chacune avec sa propre
                  logique économique.
                </p>
                <h3>Le modèle honoraires (fee-only)</h3>
                <p>
                  Le client règle directement le cabinet — au forfait, à l'heure, ou en pourcentage du
                  patrimoine conseillé. Certains cabinets fee-only s'engagent en outre à reverser
                  intégralement au client toute rétrocession qu'ils percevraient malgré tout des
                  partenaires, pour éliminer toute ambiguïté. L'avantage : la rémunération du conseiller ne
                  dépend d'aucune solution en particulier, ce qui réduit un type de biais. La limite : le
                  coût est immédiat et visible dès le premier euro, ce qui peut freiner l'accès au conseil
                  pour les patrimoines modestes ou en construction.
                </p>
                <h3>Le modèle courtage (rétrocessions)</h3>
                <p>
                  Le client ne règle rien directement au cabinet. Le conseiller, agissant comme courtier ou
                  apporteur d'affaires, perçoit une rétrocession de la part du partenaire distribué —
                  assureur, société de gestion, opérateur. C'est le modèle le plus répandu en France pour
                  l'assurance vie et les SCPI, et c'est le modèle que nous avons choisi par défaut.
                  L'avantage : l'accès à l'accompagnement est ouvert dès les premiers montants investis. La
                  limite théorique : la rémunération dépend de la souscription effective d'une solution, ce
                  qui peut, en théorie, inciter à proposer de faire plutôt que de ne rien faire — nous
                  détaillons ce point sans détour en section 8.
                </p>
                <h3>Le modèle hybride</h3>
                <p>
                  De nombreux cabinets, dont le nôtre, combinent les deux : rémunération par défaut via
                  rétrocessions pour l'accompagnement standard, et honoraires ponctuels pour des missions
                  spécifiques (audit patrimonial complexe, structuration de transmission, bilan retraite
                  chiffré) qui exigent un travail d'analyse indépendant du fait qu'une solution soit ou non
                  souscrite ensuite.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border mt-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50 text-left">
                        <th className="p-3 font-medium">Modèle</th>
                        <th className="p-3 font-medium">Qui paie le conseiller</th>
                        <th className="p-3 font-medium">Point fort</th>
                        <th className="p-3 font-medium">Point de vigilance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-3 font-medium">Honoraires</td>
                        <td className="p-3">Le client, directement</td>
                        <td className="p-3">Rémunération indépendante de la solution choisie</td>
                        <td className="p-3">Coût visible dès le premier euro</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Rétrocessions</td>
                        <td className="p-3">Le partenaire distribué</td>
                        <td className="p-3">Accès à l'accompagnement sans barrière financière</td>
                        <td className="p-3">Rémunération liée à la souscription effective</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Hybride</td>
                        <td className="p-3">Les deux, selon la mission</td>
                        <td className="p-3">S'adapte à la nature de chaque demande</td>
                        <td className="p-3">Modèle plus complexe à expliquer clairement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </LongSection>

              {/* 4 */}
              <LongSection
                id="modele-placement-ethique"
                eyebrow="Notre modèle"
                title="Le modèle de rémunération de Placement-éthique.fr, précisément"
                icon={Handshake}
              >
                <p>Trois faits, dans l'ordre où ils s'appliquent réellement.</p>
                <p>
                  <strong>Premièrement, vous ne réglez rien directement à notre cabinet</strong> pour
                  l'accompagnement standard — ni au moment du premier échange, ni au moment de la
                  souscription, ni ensuite pour le suivi annuel. Aucune facture ne vous est adressée dans ce
                  cadre.
                </p>
                <p>
                  <strong>Deuxièmement, ce sont nos partenaires qui nous rémunèrent</strong> — compagnies
                  d'assurance, sociétés de gestion de SCPI, opérateurs immobiliers et Girardin — sous forme
                  de commissions prévues contractuellement dans nos conventions de distribution. Les
                  tableaux détaillés plus haut sur cette page vous montrent exactement le taux appliqué pour
                  chaque famille de solutions — et, pour les supports au sein d'un contrat, la logique qui
                  détermine si une rétrocession existe ou non.
                </p>
                <p>
                  <strong>Troisièmement, cette rémunération n'est pas ponctuelle et sans suite</strong> :
                  notre cabinet vous accompagne dans la durée — suivi annuel, vérification que les critères
                  extra-financiers de vos supports tiennent dans le temps, révision de votre clause
                  bénéficiaire, arbitrages en cas d'événement de vie. Une partie de la commission perçue (en
                  particulier la part récurrente sur l'assurance vie et le PER) rémunère précisément ce
                  travail de suivi, pas seulement l'acte de souscription initial.
                </p>
                <Callout variant="muted" label="Exception : la lettre de mission">
                  Pour des missions ponctuelles qui ne débouchent pas nécessairement sur une souscription —
                  un audit de transmission, un bilan retraite chiffré, une optimisation fiscale complexe —
                  nous pouvons établir un devis d'honoraires. Cette formule reste l'exception, activée
                  uniquement à votre demande.
                </Callout>
              </LongSection>

              {/* 5 */}
              <LongSection id="retrocessions-expliquees" eyebrow="Pédagogie" title="Que sont exactement les rétrocessions ?" icon={Percent}>
                <p>
                  Une rétrocession est la part des frais que vous réglez déjà — frais d'entrée, frais de
                  gestion annuels, frais courants d'un support — qu'une compagnie d'assurance ou une société
                  de gestion reverse à l'intermédiaire qui vous a apporté et qui vous accompagne. Ce n'est
                  pas un frais supplémentaire ajouté à votre facture : c'est une répartition, en interne,
                  d'un flux qui existe de toute façon.
                </p>
                <h3>Une analogie utile</h3>
                <p>
                  Pensez à un billet d'avion acheté via une agence de voyage plutôt que directement sur le
                  site de la compagnie aérienne. Le prix affiché est identique dans les deux cas — la
                  compagnie a intégré, dans son prix « catalogue », une commission de distribution qu'elle
                  reversera à l'agence si vous passez par elle. Vous ne payez pas l'agence en plus : vous
                  payez le même prix, et l'agence est rémunérée sur la part déjà prévue dans ce prix. Le
                  mécanisme des rétrocessions fonctionne de manière structurellement identique dans la
                  gestion de patrimoine — à une nuance près sur l'assurance vie et le PER, où l'agence (donc
                  nous) conserve une marge de manœuvre sur une partie du prix. Nous détaillons cette nuance
                  en section 6.
                </p>
                <h3>Un exemple chiffré</h3>
                <p>
                  Prenons une assurance vie avec 1 % de frais de gestion annuels sur l'encours. Sur ce 1 %,
                  une compagnie d'assurance type reverse une fraction à l'intermédiaire qui a apporté et
                  suit le client — le reste finance la gestion administrative et technique du contrat par la
                  compagnie elle-même. Le taux exact de reversement varie selon les compagnies et les
                  conventions ; ce qui compte pour vous, c'est que le total des 1 % que vous réglez ne
                  change pas, que vous soyez accompagné ou non.
                </p>
                <p>
                  Le même mécanisme existe à l'étage des supports : les frais courants d'un fonds — ceux que
                  vous voyez dans son DIC — peuvent inclure une part reversée au distributeur. C'est
                  précisément ce qui crée l'asymétrie entre fonds peu chargés et fonds très chargés que nous
                  détaillons en section 8.
                </p>
                <Callout label="Le terme technique">
                  Dans les textes européens sur la distribution de produits financiers et d'assurance, on
                  parle d'« avantages et rémunérations » (ou d'« inducements »). Le terme « rétrocession »
                  (ou « rétrocommission ») est l'usage courant du secteur en France — nous l'utilisons tout
                  au long de cette page dans ce sens précis.
                </Callout>
              </LongSection>

              {/* 6 */}
              <LongSection
                id="cout-plus-eleve"
                eyebrow="La question directe"
                title="Les solutions coûtent-elles plus cher parce que nous sommes rémunérés ?"
                icon={Scale}
              >
                <p>
                  La réponse honnête demande de distinguer deux mécaniques, car elles ne fonctionnent pas de
                  la même façon.
                </p>
                <p>
                  Pour la SCPI, l'immobilier direct et le Girardin, le prix est fixé par le partenaire dans
                  une grille publique, identique que vous passiez par nous ou en direct : notre rémunération
                  est prélevée sur un flux qui existe indépendamment de notre intervention, vous ne réglez
                  rien de plus.
                </p>
                <p>
                  Pour l'assurance vie et le PER, la réalité est plus nuancée — et nous préférons vous le
                  dire plutôt que de le simplifier à l'excès. Les frais de gestion annuels sont fixés
                  uniformément par la compagnie d'assurance, quel que soit l'intermédiaire. Les frais
                  d'entrée, en revanche, relèvent d'une fourchette que le courtier — donc notre cabinet — a
                  la possibilité de moduler, jusqu'à un plafond fixé par la compagnie. Nous aurions
                  techniquement la latitude d'appliquer systématiquement le taux maximal autorisé. Nous
                  avons choisi l'inverse : une grille dégressive et plafonnée (1 % jusqu'à 200 000 €, 0,50 %
                  jusqu'à 400 000 €, 0 % au-delà), identique pour tous nos clients, sans négociation au cas
                  par cas qui favoriserait les plus habiles à négocier au détriment des autres.
                </p>
                <p>
                  Ce que vous gagnez en passant par nous n'est donc pas seulement un prix comparable au
                  direct — c'est aussi une marge que nous nous imposons de plafonner, plus l'accompagnement,
                  la vérification extra-financière en amont, et le suivi. Des éléments qui ont une valeur
                  réelle, même s'ils ne figurent pas tous sur une ligne de frais séparée.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <Sparkles size={18} style={{ color: "var(--grenat)" }} />
                    <h4 className="font-display font-semibold text-base mt-3">L'accompagnement</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      Calibrer un versement PER sur votre tranche marginale d'imposition, arbitrer entre
                      deux enveloppes selon votre horizon, rédiger une clause bénéficiaire qui protège
                      vraiment votre famille : ces arbitrages ont une valeur réelle non facturée
                      séparément.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <SearchCheck size={18} style={{ color: "var(--grenat)" }} />
                    <h4 className="font-display font-semibold text-base mt-3">La vérification</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      Lire les DIC, les reportings SFDR et les méthodologies de labels avant d'ouvrir une
                      piste ; vérifier ce qu'un fonds « responsable » détient réellement plutôt que de
                      relayer sa brochure : c'est le cœur de notre travail, et il se fait en amont, sans
                      ligne de facturation.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <CheckCircle2 size={18} style={{ color: "var(--grenat)" }} />
                    <h4 className="font-display font-semibold text-base mt-3">Le suivi</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      Revue annuelle de l'allocation, surveillance des labels (validité, renouvellement) et
                      des classifications SFDR de vos supports, révision de la clause bénéficiaire à chaque
                      changement de situation : un accompagnement dans la durée, pas une transaction
                      isolée.
                    </p>
                  </div>
                </div>
                <p className="mt-6">
                  Une nuance mérite d'être ajoutée : certains distributeurs pratiquent le modèle « fee-only
                  sans rétrocession », en reversant au client la part normalement destinée à
                  l'intermédiaire, contre le paiement d'honoraires directs. Selon les montants en jeu et la
                  structure exacte de leurs honoraires, ce modèle peut, dans certains cas, s'avérer
                  légèrement moins coûteux — ou légèrement plus coûteux — que le nôtre. Cela dépend de votre
                  situation précise, pas d'une règle générale.
                </p>
              </LongSection>

              {/* 7 */}
              <LongSection
                id="pourquoi-partenaires-remunerent"
                eyebrow="Le point de vue du partenaire"
                title="Pourquoi les partenaires rémunèrent-ils les conseillers ?"
                icon={Wallet}
              >
                <p>
                  Une compagnie d'assurance ou une société de gestion pourrait théoriquement vendre
                  uniquement en direct, sans intermédiaire, et garder l'intégralité de ses marges. Si elle
                  choisit malgré tout de rémunérer des conseillers, c'est parce que ce canal de distribution
                  lui apporte un travail qu'elle ne réalise pas elle-même.
                </p>
                <ul>
                  <li>
                    <strong>L'accompagnement en amont.</strong> Un partenaire ne connaît pas votre situation
                    personnelle avant que vous ne souscriviez. Le conseiller, lui, l'analyse en détail :
                    revenus, tranche marginale d'imposition, objectifs, situation familiale, horizon — et,
                    dans notre cas, exigences extra-financières précises.
                  </li>
                  <li>
                    <strong>La pédagogie.</strong> Expliquer la différence entre un PER et une assurance
                    vie, ou entre ce que garantit un Label ISR et ce que déclare un fonds Article 8, demande
                    un temps que peu de partenaires consacrent individuellement à chaque client.
                  </li>
                  <li>
                    <strong>L'accompagnement administratif.</strong> Constitution du dossier, vérification
                    des pièces, suivi de la signature — un travail qui allège la charge du partenaire tout
                    en fluidifiant votre expérience.
                  </li>
                  <li>
                    <strong>Le suivi dans la durée.</strong> Un partenaire gère des milliers de contrats ;
                    il ne peut pas, à lui seul, revoir individuellement chaque situation chaque année. Le
                    conseiller le fait.
                  </li>
                </ul>
                <p>Trois exemples concrets, issus de notre pratique, illustrent la valeur de ce travail.</p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="card-paper p-6 space-y-3">
                    <span className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--accent)] text-[var(--grenat)]">
                      <Scale size={18} />
                    </span>
                    <h3 className="font-display font-semibold text-base">Un PER mal calibré</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Un épargnant dans la tranche marginale d'imposition de 11 % qui verse 300 € par mois
                      sur un PER économise environ 33 € d'impôt par mois — au prix d'un blocage jusqu'à la
                      retraite. Le même versement sur une assurance vie donne accès aux mêmes supports
                      responsables, sans blocage, avec une fiscalité avantageuse après 8 ans. Sans
                      accompagnement, cet arbitrage est souvent fait dans le mauvais sens.
                    </p>
                  </div>
                  <div className="card-paper p-6 space-y-3">
                    <span className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--accent)] text-[var(--grenat)]">
                      <FileSignature size={18} />
                    </span>
                    <h3 className="font-display font-semibold text-base">Une clause bénéficiaire vague</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Une assurance vie transmet, pour les capitaux issus de primes versées avant 70 ans,
                      jusqu'à{" "}
                      <a
                        href="https://www.impots.gouv.fr/particulier/questions/je-suis-beneficiaire-dune-assurance-vie-comment-la-declarer"
                        target="_blank"
                        rel="noreferrer"
                      >
                        152 500 € par bénéficiaire
                      </a>{" "}
                      en franchise du prélèvement spécifique. Une clause mal rédigée — bénéficiaires flous,
                      clause jamais mise à jour — peut faire perdre tout ou partie de cet avantage. Une
                      phrase bien écrite, revue à chaque événement familial, protège concrètement les
                      vôtres.
                    </p>
                  </div>
                  <div className="card-paper p-6 space-y-3">
                    <span className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--accent)] text-[var(--grenat)]">
                      <SearchCheck size={18} />
                    </span>
                    <h3 className="font-display font-semibold text-base">Un label perdu, sans que personne ne le voie</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Un fonds choisi pour son label peut ne pas le renouveler, être reclassé d'Article 9
                      vers Article 8, ou infléchir sa stratégie. Sans suivi, l'épargnant continue de
                      détenir — parfois pendant des années — un support qui ne correspond plus au critère
                      qui avait motivé son choix. La revue annuelle sert exactement à détecter cela.
                    </p>
                  </div>
                </div>
              </LongSection>

              {/* 8 */}
              <LongSection
                id="commissions-influencent-elles"
                eyebrow="Le sujet qui compte vraiment"
                title="Les commissions influencent-elles nos pistes ?"
                icon={ShieldAlert}
              >
                <p>
                  C'est la question centrale de cette page, et nous refusons d'y répondre par une pirouette.
                  La réponse honnête tient en trois temps : la tentation structurelle existe ; elle prend,
                  dans l'univers des fonds responsables, une forme précise que peu de cabinets détaillent ;
                  et un résidu de biais subsiste, que nous préférons nommer plutôt que taire.
                </p>
                <p>
                  <strong>Structurellement, une tentation existe.</strong> Tout conseiller rémunéré à la
                  souscription — nous inclus — fait face, en théorie, à un biais possible : proposer de
                  faire quelque chose plutôt que de ne rien faire, ou privilégier, à situation équivalente,
                  une solution qui rémunère davantage. Prétendre que ce biais n'existe nulle part dans notre
                  industrie serait malhonnête. Nous préférons le nommer plutôt que le nier.
                </p>

                <h3>L'asymétrie de rétrocession entre supports responsables</h3>
                <p>
                  Voici un point que nous n'avons vu détaillé presque nulle part, et qui mérite de l'être :
                  à l'intérieur d'une même assurance vie ou d'un même PER, tous les supports
                  « responsables » ne rémunèrent pas le cabinet de la même façon — parce que la rétrocession
                  éventuelle est financée par les frais courants de chaque support, et que ces frais varient
                  fortement d'un type de fonds à l'autre.
                </p>
                <p>
                  Les fonds indiciels ISR (ETF), dont les frais courants sont faibles, ne versent dans
                  l'immense majorité des cas quasiment aucune rétrocession récurrente au cabinet qui les a
                  proposés. Les fonds à gestion active — y compris labellisés ISR ou Greenfin, y compris
                  classés Article 8 ou 9 — portent des frais courants plus élevés, qui permettent, eux, une
                  rétrocession au distributeur.
                </p>
                <p>
                  Il faut être précis sur ce que cela implique. À stratégie et univers d'investissement
                  comparables, un support plus chargé en frais part chaque année avec un handicap de
                  performance nette égal à ce surcoût — et c'est pourtant lui qui rémunère le mieux notre
                  cabinet à l'euro investi. Il n'y a pas, ici, de mécanisme qui annulerait automatiquement ce
                  conflit d'intérêts potentiel. Un contrepoids structurel existe néanmoins : notre
                  rémunération récurrente sur l'assurance vie et le PER est assise sur l'encours de votre
                  contrat. Des supports moins chargés laissent, toutes choses égales par ailleurs, davantage
                  de performance nette dans votre contrat — donc un encours qui croît plus vite, et c'est
                  cet encours qui alimente notre rémunération sur la durée d'une relation de plusieurs
                  années. Cet alignement de long terme est réel, mais partiel : il ne compense pas
                  mécaniquement l'écart de rétrocession immédiat, et nous ne vous dirons pas le contraire.
                </p>
                <p>
                  Une précision utile pour la suite de vos lectures : ni un label (ISR, Greenfin, Finansol),
                  ni une classification SFDR ne modifie en soi notre rémunération. Ce sont les frais
                  courants du support qui la déterminent. Le « niveau d'éthique » affiché d'un fonds et son
                  niveau de rétrocession sont deux variables indépendantes — un fonds peut être exigeant et
                  peu chargé, médiocre et très chargé, ou l'inverse.
                </p>

                <h3>La méthodologie précède le support</h3>
                <p>
                  C'est le garde-fou qui compte le plus, précisément parce que l'argument précédent est
                  structurel et non absolu. Notre premier rendez-vous part systématiquement de vos
                  objectifs, votre horizon, votre fiscalité, votre situation familiale — et de vos exigences
                  extra-financières précises : secteurs exclus, causes prioritaires, niveau de preuve
                  attendu. Le choix entre gestion indicielle et gestion active se justifie ensuite par des
                  critères documentables — profondeur de la méthodologie d'exclusion, pratique réelle
                  d'engagement actionnarial, qualité du reporting extra-financier, frais courants — jamais
                  par le taux de rétrocession. Certaines exigences (fonds thématiques, épargne solidaire)
                  ne peuvent être servies que par des fonds actifs plus chargés ; d'autres situations
                  appellent une ossature indicielle à bas coût. Dans les deux cas, le raisonnement figure
                  noir sur blanc dans la synthèse écrite que nous vous remettons — vous pouvez donc vérifier
                  qu'il ne repose jamais sur notre rémunération.
                </p>

                <h3>La réputation à long terme pèse plus lourd qu'une commission ponctuelle</h3>
                <p>
                  Une part significative de nos nouveaux clients nous sont adressés par d'anciens clients.
                  Une piste mal calibrée qui satisferait une commission ponctuelle, mais desservirait votre
                  intérêt, coûte structurellement plus cher à notre cabinet sur la durée qu'elle ne lui
                  rapporte une seule fois. Sur un site dont le positionnement entier repose sur la chasse au
                  greenwashing, ce mécanisme est encore plus brutal : notre crédibilité est notre seul
                  actif.
                </p>

                <h3>Ce que ces garde-fous ne couvrent pas entièrement</h3>
                <p>
                  Des biais plus subtils demeurent, et nous préférons les nommer : celui de proposer une
                  action plutôt que l'inaction ; celui de la marge que nous conservons la possibilité de
                  moduler sur les frais d'entrée d'assurance vie et de PER (voir section 6) ; celui de
                  privilégier, à qualité équivalente, un partenaire dont les outils sont plus simples à
                  mettre en œuvre ; et l'asymétrie de rétrocession entre supports décrite ci-dessus, qui ne
                  disparaît pas parce qu'elle est documentée. C'est pour limiter ces biais que nous
                  formulons explicitement, à chaque premier rendez-vous, la possibilité de ne rien
                  souscrire — et que nous publions, sur cette page, précisément ce que nous préférerions
                  parfois ne pas devoir détailler.
                </p>
                <Callout label="En résumé, sans détour">
                  Nous ne prétendons pas être immunisés contre tout biais — personne ne l'est. Le support le
                  plus rémunérateur pour nous n'est pas nécessairement le plus pertinent pour vous après
                  frais, et aucun label n'y change rien. C'est précisément pour cela que notre méthode part
                  de vos exigences et de votre horizon plutôt que d'un produit, que le raisonnement vous est
                  remis par écrit, et que cette asymétrie est publiée ici plutôt que passée sous silence.
                </Callout>
              </LongSection>

              {/* 9 */}
              <LongSection
                id="pourquoi-honoraires"
                eyebrow="L'autre modèle"
                title="Pourquoi certains cabinets facturent-ils des honoraires ?"
                icon={FileSignature}
              >
                <p>
                  Un cabinet qui choisit le modèle honoraires (fee-only) ne fait pas un choix moins légitime
                  que le nôtre — il répond à une logique différente, avec ses propres avantages.
                </p>
                <p>
                  En facturant directement le client plutôt qu'en percevant des rétrocessions, ce type de
                  cabinet élimine par construction tout lien entre sa rémunération et la solution retenue :
                  il est payé pour son analyse, que vous souscriviez ou non, quel que soit le produit
                  finalement choisi. Cette indépendance a un prix visible et immédiat — mais elle offre une
                  clarté que le modèle courtage ne peut pas égaler sur ce point précis.
                </p>
                <p>
                  Ce modèle convient particulièrement bien aux situations où le conseil lui-même est le
                  produit principal : audit patrimonial global sans souscription immédiate, arbitrage entre
                  plusieurs stratégies déjà en place, mission de structuration complexe. C'est d'ailleurs
                  pour ce type de situations que nous proposons, nous aussi, une lettre de mission tarifée —
                  sans en faire notre modèle par défaut.
                </p>
              </LongSection>

              {/* 10 */}
              <LongSection
                id="cabinets-semblent-ne-rien-couter"
                eyebrow="Une confusion fréquente"
                title="Pourquoi certains cabinets semblent ne rien vous coûter ?"
                icon={Eye}
              >
                <p>
                  Aucun cabinet sérieux ne « travaille sans être rémunéré ». Quand un site affiche un
                  accompagnement présenté comme entièrement dénué de coût, cela signifie presque toujours
                  que sa rémunération provient exclusivement de rétrocessions — exactement notre cas — mais
                  que cette information n'est simplement pas détaillée aussi explicitement que sur cette
                  page.
                </p>
                <p>
                  Ce n'est pas nécessairement une tromperie délibérée : beaucoup de cabinets considèrent, à
                  tort selon nous, que cette précision relève du détail technique plutôt que d'une
                  information essentielle à la confiance. D'autres, plus rarement, entretiennent
                  volontairement l'ambiguïté pour éviter la question du conflit d'intérêts potentiel.
                </p>
                <p>
                  Notre position : un accompagnement « sans facture directe » n'est jamais un accompagnement
                  « sans rémunération ». Il est simplement rémunéré par un tiers plutôt que par vous — ce
                  qui mérite d'être expliqué, pas seulement mentionné en passant. Le lecteur qui a appris à
                  se demander « qui paie ? » devant un fonds « vert » devrait se poser exactement la même
                  question devant un conseiller « gratuit ». Nous préférons y avoir répondu avant qu'il ne
                  la pose.
                </p>
              </LongSection>

              {/* 11 */}
              <LongSection id="qui-paie-quoi" eyebrow="Vue d'ensemble" title="Qui paie réellement quoi ?" icon={Users}>
                <p>
                  Un tableau vaut souvent mieux qu'un paragraphe pour ce genre de question. Voici, pour
                  chaque type de flux financier qui peut exister dans notre relation, qui règle quoi, à qui
                  cela va, et où vous pouvez le vérifier vous-même.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border mt-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50 text-left">
                        <th className="p-3 font-medium">Type de flux</th>
                        <th className="p-3 font-medium">Qui paie</th>
                        <th className="p-3 font-medium">Qui reçoit</th>
                        <th className="p-3 font-medium">Où le vérifier</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {payerRows.map((r) => (
                        <tr key={r.flux}>
                          <td className="p-3 font-medium align-top">{r.flux}</td>
                          <td className="p-3 align-top text-muted-foreground">{r.payeur}</td>
                          <td className="p-3 align-top text-muted-foreground">{r.beneficiaire}</td>
                          <td className="p-3 align-top text-muted-foreground">{r.ou}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </LongSection>

              {/* 12 */}
              <LongSection
                id="deroulement-accompagnement"
                eyebrow="En pratique"
                title="Comment se déroule un accompagnement chez Placement-éthique.fr ?"
                icon={CalendarCheck}
              >
                <p>
                  Pour que la question de la rémunération ne reste pas abstraite, voici précisément à quel
                  moment, dans le déroulé réel d'un accompagnement, chaque étape se situe — et à quel
                  moment, exactement, un flux financier apparaît pour la première fois.
                </p>
                <div className="mt-8 space-y-6">
                  {timelineSteps.map((step, i) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex flex-col items-center shrink-0">
                        <span
                          className="h-10 w-10 rounded-full flex items-center justify-center font-display text-sm"
                          style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
                        >
                          {i + 1}
                        </span>
                        {i < timelineSteps.length - 1 && <span className="w-px flex-1 bg-border mt-2" />}
                      </div>
                      <div className="pb-6">
                        <div className="flex items-center gap-2">
                          <step.icon size={16} style={{ color: "var(--grenat)" }} />
                          <h4 className="font-display font-semibold text-base text-foreground">{step.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </LongSection>

              {/* 13 */}
              <LongSection
                id="ce-que-peu-expliquent"
                eyebrow="Le détail qui change la lecture"
                title="Ce que peu de cabinets expliquent"
                icon={Quote}
              >
                <p>
                  Voici cinq précisions que nous jugeons importantes, et que la plupart des pages « tarifs »
                  du secteur ne détaillent pas — non par malice, le plus souvent, mais parce qu'elles
                  demandent plus de mots qu'un tableau de frais n'en laisse de place.
                </p>
                <h3>1. Le moment exact où la rémunération se déclenche</h3>
                <p>
                  Notre cabinet n'est rémunéré à aucun moment du premier échange, de la restitution, ni même
                  de votre réflexion. Le flux financier n'existe qu'à partir de la signature effective d'un
                  contrat — jamais avant. Cela signifie qu'un rendez-vous qui ne débouche sur rien ne génère
                  aucune rémunération pour nous, quel que soit le temps investi.
                </p>
                <h3>2. Commission « one-shot » contre commission récurrente</h3>
                <p>
                  Une commission SCPI, Girardin ou immobilier est perçue une seule fois, à la souscription.
                  Une commission d'assurance vie ou de PER est en grande partie récurrente, perçue chaque
                  année tant que l'encours reste investi. Cette différence de nature crée des incitations
                  différentes : une commission récurrente nous incite structurellement à vous garder
                  satisfait dans la durée ; une commission ponctuelle nous incite davantage à bien calibrer
                  la piste dès le départ, puisqu'il n'y aura pas de « rattrapage » ensuite.
                </p>
                <h3>3. L'asymétrie de rétrocession entre supports responsables</h3>
                <p>
                  Nous l'avons détaillée en section 8, mais ce point mérite d'être répété tant il est
                  rarement expliqué ailleurs : à l'intérieur d'une même assurance vie, notre rémunération
                  n'est pas neutre selon le support choisi. Les ETF indiciels ISR, peu chargés en frais,
                  versent peu ou pas de rétrocession récurrente ; les fonds à gestion active, plus chargés,
                  en versent davantage — alors qu'à stratégie comparable, leur surcoût pèse mécaniquement
                  sur votre performance nette. Ni le label, ni la classification SFDR n'y changent rien :
                  seuls les frais courants comptent. Cette asymétrie n'élimine pas toute tentation ; c'est
                  justement pourquoi le dosage entre gestion indicielle et gestion active repose sur vos
                  exigences extra-financières, votre horizon et votre tolérance au risque — pas sur le taux
                  de rétrocession du support.
                </p>
                <h3>4. Pourquoi les commissions one-shot sont, en pourcentage, plus élevées</h3>
                <p>
                  Une commission SCPI d'environ 6 % peut sembler élevée comparée au 1 % de frais de gestion
                  annuel d'une assurance vie. Mais ce pourcentage unique doit couvrir l'intégralité du
                  travail d'analyse et de suivi, puisqu'aucune rémunération récurrente ne suivra ensuite.
                  Comparer un pourcentage one-shot à un pourcentage annuel récurrent, sans ajuster pour
                  cette différence de nature, conduit à des conclusions trompeuses.
                </p>
                <h3>5. Le cadre réglementaire</h3>
                <p>
                  Notre activité s'exerce au sein d'EXP Capital (SASU au capital de 1 000 €, RCS Versailles
                  987 986 247), immatriculée à l'ORIAS sous le n° 25005915 — un registre public que
                  n'importe qui peut consulter sur{" "}
                  <a href="https://www.orias.fr" target="_blank" rel="noreferrer">
                    orias.fr
                  </a>{" "}
                  avant de signer quoi que ce soit. En France, l'intermédiation financière est encadrée par
                  deux régulateurs distincts :{" "}
                  <a href="https://acpr.banque-france.fr" target="_blank" rel="noreferrer">
                    l'ACPR
                  </a>{" "}
                  pour l'assurance et{" "}
                  <a href="https://www.amf-france.org" target="_blank" rel="noreferrer">
                    l'AMF
                  </a>{" "}
                  pour les marchés financiers, chacun imposant des obligations de loyauté et de transparence
                  envers le client. La plupart des épargnants ignorent que ces deux cadres existent
                  séparément — le premier réflexe de vigilance, lui, ne change pas : vérifier le numéro
                  ORIAS de tout intermédiaire avant de s'engager.
                </p>
              </LongSection>
            </div>

            <aside className="hidden lg:block lg:col-span-4 sticky top-24 self-start">
              <Sommaire />
            </aside>
          </div>
        </div>
      </section>

      {/* À qui nous ne convenons pas */}
      <section id="a-qui-nous-ne-convenons-pas" className="pb-20 scroll-mt-28">
        <div className="container-prose">
          <div
            className="card-paper p-6 md:p-8 space-y-6 border"
            style={{
              borderColor: "color-mix(in oklch, var(--grenat) 25%, transparent)",
              background: "color-mix(in oklch, var(--grenat) 3%, var(--card))",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full flex items-center justify-center bg-red-500/10 text-red-600">
                <ShieldAlert size={20} />
              </span>
              <h2 className="display-3">À qui nous ne convenons pas</h2>
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-red-600 font-bold">
              Parce qu'un bon cabinet sait aussi dire non.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nous préférons être clairs dès le départ plutôt que de vous faire perdre du temps — ou d'en
              perdre nous-mêmes. Placement-éthique.fr n'est probablement pas le bon interlocuteur si :
            </p>

            <ul className="space-y-4 text-sm text-foreground/90">
              {notForItems.map((item) => (
                <li key={item.strong} className="flex gap-3">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>
                    <strong>{item.strong}</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pb-20 scroll-mt-28">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Aller plus loin</p>
          <h2 className="display-2 mt-4">Les questions qu'on n'ose pas toujours poser</h2>
          <p className="lead mt-5">
            {faqItems.length} questions directes, sans langue de bois — parce qu'une question inconfortable
            mérite une réponse complète, pas une esquive.
          </p>

          <div className="mt-10 space-y-3">
            {faqItems.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section id="notre-philosophie" className="pb-20 scroll-mt-28">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Pour conclure</p>
          <h2 className="display-2 mt-4">Notre philosophie</h2>
          <div className="prose-article mt-6">
            <p>
              Nous ne pensons pas qu'un modèle de rémunération soit, en soi, plus vertueux qu'un autre. Un
              cabinet fee-only peut être excellent ou médiocre. Un cabinet rémunéré par rétrocessions peut
              être rigoureux ou complaisant. Ce qui distingue, à notre sens, un accompagnement digne de
              confiance, ce n'est pas le modèle économique choisi — c'est la disposition à l'expliquer en
              entier, sans en cacher les zones grises.
            </p>
            <p>
              C'est, au fond, la même grille de lecture que nous appliquons aux placements responsables : un
              label ne dit pas tout, une déclaration SFDR ne dit pas tout, un beau récit ne prouve rien — ce
              qui compte, c'est ce qui est documenté, vérifiable et assumé, zones grises comprises. Nous
              avons écrit cette page comme nous conseillerions un membre de notre famille : en disant « cela
              dépend » plutôt que « toujours », en nommant les tentations structurelles plutôt qu'en
              prétendant qu'elles n'existent pas, et en acceptant qu'une partie de nos lecteurs, après avoir
              tout lu, choisisse un autre cabinet — ou un modèle fee-only. Ce serait une décision informée,
              et c'est précisément l'objectif que nous poursuivions en écrivant ce texte.
            </p>
            <p>
              La confiance ne se décrète pas. Elle se construit, patiemment, par la cohérence entre ce qu'un
              cabinet affiche et ce qu'il fait réellement. Cette page est notre part du contrat : vous
              montrer, avant même votre premier échange avec nous, exactement ce que vous pouvez attendre de
              notre rapport à l'argent.
            </p>
          </div>

          <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center gap-6 bg-card/60 p-6 rounded-2xl border border-border/80">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 shadow-md" style={{ borderColor: "color-mix(in oklch, var(--grenat) 40%, transparent)" }}>
              <img
                src="/alexandre.jpg"
                alt="Alexandre Pollet"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Alexandre+Pollet&background=random";
                }}
              />
            </div>
            <div className="text-center sm:text-left space-y-1">
              <p className="font-display text-xl font-semibold text-foreground">Alexandre Pollet</p>
              <p className="text-xs font-medium" style={{ color: "var(--grenat)" }}>
                Communication, contenu et partenariats — EXP Capital
              </p>
              <p className="text-[14px] text-foreground/80 italic mt-3 leading-relaxed">
                « On me demande souvent pourquoi nous détaillons nos commissions à ce point. La réponse est
                simple : on ne peut pas passer ses journées à demander des preuves aux fonds « verts » et
                refuser d'en donner sur soi-même. Je préfère qu'un lecteur nous dise non après avoir tout
                compris, plutôt que oui sans avoir tout su. »
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Le premier échange est offert"
        title="Réservons votre premier rendez-vous"
        text="45 à 60 minutes pour cartographier votre situation, vos objectifs et vos exigences extra-financières, et voir si nous sommes le bon cabinet pour vous accompagner. Sans engagement — et maintenant, sans zone d'ombre sur la façon dont nous sommes rémunérés."
      />
    </SiteLayout>
  );
}
