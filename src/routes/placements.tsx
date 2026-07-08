import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import {
  ShieldCheck,
  PiggyBank,
  Building2,
  LineChart,
  Landmark,
  HandCoins,
  Home,
  Gem,
  SearchCheck,
  BookOpen,
  Calculator,
  FileSearch,
  ListChecks,
  BadgeCheck,
  Receipt,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      {
        title:
          "Quels placements responsables choisir ? Le panorama complet | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Assurance vie ISR, PER, SCPI, ETF, obligations vertes, épargne solidaire, immobilier, or : risque, horizon et points à vérifier, classe par classe, sans vernis.",
      },
      {
        property: "og:title",
        content: "Placements responsables : le panorama complet — Placement-éthique.fr",
      },
      { property: "og:url", content: "https://placement-ethique.fr/placements" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/placements" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "ItemList",
          name: "Panorama des placements responsables",
          description:
            "Les classes d'actifs d'une épargne responsable : ce qu'elles sont, leur niveau de risque et ce qu'il faut vérifier avant de souscrire.",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Assurance vie responsable (supports ISR)" },
            { "@type": "ListItem", position: 2, name: "PER — plan d'épargne retraite" },
            { "@type": "ListItem", position: 3, name: "SCPI & immobilier durable" },
            { "@type": "ListItem", position: 4, name: "Actions & ETF ISR" },
            { "@type": "ListItem", position: 5, name: "Obligations vertes" },
            { "@type": "ListItem", position: 6, name: "Épargne solidaire" },
            { "@type": "ListItem", position: 7, name: "Immobilier direct responsable" },
            { "@type": "ListItem", position: 8, name: "Métaux précieux" },
          ],
        }),
      },
    ],
  }),
  component: PlacementsPage,
});

/* ─────────────────────────── Données de la page ─────────────────────────── */

const ancres = [
  { href: "#assurance-vie", label: "Assurance vie" },
  { href: "#per", label: "PER" },
  { href: "#scpi", label: "SCPI" },
  { href: "#actions-etf", label: "Actions & ETF" },
  { href: "#obligations-vertes", label: "Obligations vertes" },
  { href: "#epargne-solidaire", label: "Épargne solidaire" },
  { href: "#immobilier-direct", label: "Immobilier direct" },
  { href: "#metaux-precieux", label: "Métaux précieux" },
  { href: "#comparatif", label: "Tableau comparatif" },
  { href: "#methode", label: "Notre méthode" },
];

const classes = [
  {
    id: "assurance-vie",
    icon: ShieldCheck,
    tag: "Enveloppe · supports ISR",
    title: "Assurance vie responsable",
    body: (
      <>
        L'enveloppe d'épargne la plus utilisée de France : vous y combinez un fonds en euros
        (capital garanti par l'assureur, dans les conditions du contrat) et des unités de
        compte — dont des fonds responsables, labellisés ISR ou Greenfin, ou classés Article 8
        ou 9 selon la réglementation européenne SFDR. Sa fiscalité s'allège après huit ans de
        détention, et la clause bénéficiaire en fait aussi un outil de transmission.
      </>
    ),
    pourquoiTitre: "Pourquoi c'est pertinent dans une démarche responsable",
    pourquoi: (
      <>
        C'est dans l'assurance vie que dort l'essentiel de l'épargne longue des Français.
        Réorienter ses unités de compte vers des supports vérifiés est souvent le premier
        levier d'une démarche d'investissement éthique — le plus simple à actionner, et l'un
        des plus massifs.
      </>
    ),
    verifier: [
      "La liste réelle des supports responsables référencés dans le contrat — pas la plaquette : combien de fonds labellisés ou Article 9 sont effectivement accessibles ?",
      "L'empilement des frais (gestion du contrat + frais courants de chaque fonds), qui se lit dans le DIC — le document d'informations clés — de chaque support.",
      "Ce que finance le fonds en euros lui-même : l'actif général de l'assureur est rarement documenté avec la même transparence que les unités de compte.",
    ],
    risque: "Modulable selon les supports — perte en capital possible sur les unités de compte",
    horizon: "8 ans et plus",
    article: { slug: "assurance-vie-isr-guide-2026", label: "Choisir une assurance vie ISR" },
    outil: { to: "/outils/simulateur", label: "Projection d'épargne" },
  },
  {
    id: "per",
    icon: PiggyBank,
    tag: "Enveloppe · retraite & fiscalité",
    title: "PER — plan d'épargne retraite",
    body: (
      <>
        Le PER permet de déduire vos versements de votre revenu imposable, dans les limites
        prévues par la loi, en contrepartie d'un capital bloqué jusqu'à la retraite — hors cas
        de déblocage anticipé prévus par la loi, dont l'acquisition de la résidence
        principale. À la sortie : capital, rente, ou une combinaison des deux.
      </>
    ),
    pourquoiTitre: "Pourquoi c'est pertinent dans une démarche responsable",
    pourquoi: (
      <>
        L'horizon retraite est le plus long de toute l'épargne — précisément celui où le
        financement de la transition écologique et sociale prend son sens. Et la déduction
        fiscale réduit votre effort d'épargne réel : à budget constant, vous investissez
        davantage.
      </>
    ),
    verifier: [
      "L'univers de supports responsables réellement logeable dans le PER — souvent plus étroit que celui de l'assurance vie du même assureur.",
      "La gestion pilotée proposée par défaut : vers quels supports désensibilise-t-elle à l'approche de la retraite, et sont-ils eux aussi responsables ?",
      "La fiscalité de sortie : la déduction à l'entrée a pour contrepartie une imposition à la sortie — l'arbitrage dépend de votre taux d'imposition aujourd'hui et à la retraite.",
    ],
    risque: "Modulable selon les supports et le mode de gestion choisi",
    horizon: "Jusqu'à la retraite",
    article: { slug: "per-ethique-optimiser-retraite", label: "Optimiser sa retraite avec un PER éthique" },
    outil: { to: "/outils/per-isr", label: "Simulateur PER ISR" },
  },
  {
    id: "scpi",
    icon: Building2,
    tag: "Pierre-papier",
    title: "SCPI & immobilier durable",
    body: (
      <>
        Les sociétés civiles de placement immobilier mutualisent un parc locatif — bureaux,
        santé, éducation, logistique — dont vous détenez des parts et percevez les revenus,
        nets de frais. Le Label ISR s'applique aussi aux fonds immobiliers : certaines SCPI
        s'engagent sur une trajectoire d'amélioration mesurable de leur parc (consommations
        d'énergie, plan de travaux, confort des occupants).
      </>
    ),
    pourquoiTitre: "Pourquoi c'est pertinent dans une démarche responsable",
    pourquoi: (
      <>
        L'immobilier est l'un des rares actifs où l'exigence environnementale se mesure
        physiquement : un immeuble consomme, ou ne consomme pas. Améliorer le parc existant —
        plutôt que d'artificialiser pour construire neuf — est l'un des leviers les plus
        concrets de la transition.
      </>
    ),
    verifier: [
      "La trajectoire énergétique réelle du parc dans le rapport annuel : consommations mesurées et plan de travaux chiffré — pas une déclaration d'intention.",
      "Les indicateurs suivis au titre du Label ISR immobilier, et leur évolution d'une année sur l'autre.",
      "Les frais d'entrée, le délai de revente des parts (la liquidité n'est pas garantie) et le taux d'occupation du parc.",
    ],
    risque: "Modéré — revenus et capital non garantis",
    horizon: "8 à 10 ans et plus",
    article: { slug: "scpi-isr-environnementales-panorama", label: "Panorama des SCPI ISR" },
    outil: { to: "/outils/type-investissement", label: "Quel type d'investissement pour vous" },
  },
  {
    id: "actions-etf",
    icon: LineChart,
    tag: "Marchés cotés",
    title: "Actions & ETF ISR",
    body: (
      <>
        Des fonds actions gérés activement ou des ETF — fonds indiciels cotés à frais réduits
        — qui appliquent un filtre extra-financier : exclusions sectorielles (charbon, tabac,
        armement controversé…), sélection best-in-class (retenir les entreprises les mieux
        notées ESG de chaque secteur) ou indices dédiés. C'est le moteur de performance de
        long terme d'un portefeuille.
      </>
    ),
    pourquoiTitre: "Pourquoi c'est pertinent dans une démarche responsable",
    pourquoi: (
      <>
        Détenir des actions, c'est être copropriétaire d'entreprises — donc disposer d'un
        levier : le vote en assemblée générale et l'engagement actionnarial. Encore faut-il
        que la méthodologie du fonds soit réellement sélective, ce qui varie énormément d'un
        produit à l'autre.
      </>
    ),
    verifier: [
      "La méthodologie de l'indice ou du fonds : que retire-t-elle réellement de l'indice classique ? Certains filtres « ESG » n'écartent qu'une poignée de valeurs.",
      "La classification SFDR (Article 8 ou 9) et sa traduction concrète dans le document précontractuel — pas seulement le nom du produit.",
      "La politique de vote et d'engagement de la société de gestion, publiée chaque année : votes exercés, résolutions soutenues.",
    ],
    risque: "Élevé — volatilité des marchés actions",
    horizon: "8 à 10 ans minimum",
    article: { slug: "etf-isr-debutants", label: "Choisir un ETF ISR quand on débute" },
    outil: { to: "/outils/portefeuilles-types", label: "Portefeuilles types" },
  },
  {
    id: "obligations-vertes",
    icon: Landmark,
    tag: "Obligataire",
    title: "Obligations vertes",
    body: (
      <>
        Les green bonds sont des obligations dont les fonds levés sont fléchés vers des
        projets environnementaux identifiés — énergies renouvelables, transports propres,
        rénovation des bâtiments. Émises par des États, des collectivités ou des entreprises,
        elles s'appuient sur des référentiels comme les Green Bond Principles et, plus
        récemment, le standard européen EuGB. Dans un portefeuille, elles occupent la poche
        obligataire : revenus réguliers, volatilité plus faible que les actions.
      </>
    ),
    pourquoiTitre: "Pourquoi c'est pertinent dans une démarche responsable",
    pourquoi: (
      <>
        C'est l'un des rares instruments financiers où l'on peut suivre l'argent projet par
        projet : l'émetteur publie un rapport d'allocation et, souvent, un rapport d'impact.
        Une traçabilité rare en finance — à condition de la lire.
      </>
    ),
    verifier: [
      "Le rapport d'allocation publié par l'émetteur : les projets financés existent-ils, et sont-ils à la hauteur de la promesse d'émission ?",
      "La revue externe (« second party opinion ») qui évalue le sérieux du cadre de l'émission.",
      "La cohérence globale de l'émetteur : une obligation verte finance des projets, elle ne verdit pas la stratégie d'ensemble d'une entreprise. C'est le principal angle mort du produit.",
    ],
    risque: "Modéré — risque de taux et de crédit",
    horizon: "3 à 8 ans",
    article: {
      slug: "obligations-vertes-vs-obligations-classiques",
      label: "Green bonds vs obligations classiques",
    },
    outil: { to: "/outils/empreinte-carbone-epargne", label: "Empreinte carbone de votre épargne" },
  },
  {
    id: "epargne-solidaire",
    icon: HandCoins,
    tag: "Impact social",
    title: "Épargne solidaire",
    body: (
      <>
        Une famille de produits où le lien entre votre argent et le projet financé est le plus
        court : fonds dits « 90/10 » — l'essentiel du portefeuille reste géré de façon
        classique, souvent ISR, et la fraction restante, celle qui donne son nom au produit,
        finance des entreprises solidaires agréées ESUS (logement très social, insertion,
        agriculture durable) —, fonds de partage, qui reversent une partie de leurs revenus en
        don à des associations, et livrets solidaires. Le label Finansol, porté par
        l'association{" "}
        <a
          href="https://www.finance-fair.org"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-[var(--grenat)]"
        >
          FAIR
        </a>
        , balise ce champ.
      </>
    ),
    pourquoiTitre: "Pourquoi c'est pertinent dans une démarche responsable",
    pourquoi: (
      <>
        C'est la forme d'épargne à l'impact social le plus direct et le plus vérifiable de
        cette page : les entreprises financées sont nommées, agréées par l'État, et les
        rapports annuels documentent les projets soutenus.
      </>
    ),
    verifier: [
      "La part réellement solidaire du fonds : dans un « 90/10 », l'essentiel du portefeuille reste classique — vérifiez aussi comment cette majorité est gérée.",
      "Ce que le label Finansol garantit (la réalité du mécanisme solidaire) et ce qu'il ne garantit pas (ni la performance, ni le caractère ISR de la poche classique).",
      "Le rendement, souvent plus modeste : c'est un choix assumé, à connaître avant de souscrire — pas à découvrir après.",
    ],
    risque: "Faible à modéré selon le support",
    horizon: "3 ans et plus",
    article: { slug: "label-finansol-finance-solidaire", label: "Ce que garantit le label Finansol" },
    outil: { to: "/outils/decodeur-label", label: "Décodeur de labels" },
  },
  {
    id: "immobilier-direct",
    icon: Home,
    tag: "Immobilier en direct",
    title: "Immobilier direct responsable",
    body: (
      <>
        Acheter un logement pour le louer, en faisant de la rénovation énergétique le cœur du
        projet : viser un bien énergivore, le rénover sérieusement, le louer décemment. Des
        financements dédiés existent, dont l'éco-PTZ — un prêt sans intérêts destiné aux
        travaux de rénovation énergétique — et les aides publiques à la rénovation, sous
        conditions.
      </>
    ),
    pourquoiTitre: "Pourquoi c'est pertinent dans une démarche responsable",
    pourquoi: (
      <>
        Le parc résidentiel est l'un des premiers gisements d'économies d'énergie du pays.
        Rénover un logement existant produit un impact mesurable — le DPE avant/après — tout
        en créant de la valeur patrimoniale et en améliorant concrètement la vie d'un
        locataire réel.
      </>
    ),
    verifier: [
      "Le DPE et, pour les biens les plus énergivores, un audit énergétique avant l'achat : le calendrier légal restreint progressivement la location des logements les plus mal classés.",
      "Le coût réel des travaux — des devis d'artisans certifiés, pas une estimation d'annonce — et les conditions exactes des aides mobilisables.",
      "L'équilibre locatif de l'opération : l'emplacement et la demande locative restent premiers ; la vertu énergétique ne rattrape pas un mauvais achat.",
    ],
    risque: "Modéré à élevé — actif unique, souvent financé à crédit",
    horizon: "10 ans et plus",
    article: {
      slug: "investissement-immobilier-responsable-commencer",
      label: "Commencer un investissement immobilier responsable",
    },
    outil: { to: "/outils/comparateur-eco-ptz", label: "Comparateur éco-PTZ" },
  },
  {
    id: "metaux-precieux",
    icon: Gem,
    tag: "Diversification · le débat",
    title: "Métaux précieux",
    body: (
      <>
        L'or — et dans une moindre mesure l'argent — se détient en physique (pièces, lingots)
        ou via des supports cotés adossés à du métal. Actif refuge historique, décorrélé des
        marchés actions, sans risque de défaut d'un émetteur… mais aussi sans rendement : il
        ne verse ni loyer, ni dividende, ni coupon.
      </>
    ),
    pourquoiTitre: "Le débat éthique, posé honnêtement",
    pourquoi: (
      <>
        Pour : une diversification réelle, une protection historique dans les crises, un actif
        sans dette. Contre : l'extraction minière a une empreinte environnementale et sociale
        lourde, et l'or stocké ne finance aucun projet. Des filières plus responsables
        existent — or recyclé, chaînes d'approvisionnement auditées — sans clore le débat.
        Certains de nos clients en détiennent une part limitée pour la résilience de leur
        patrimoine ; d'autres l'excluent par principe. Les deux positions se défendent, et
        nous vous aidons à instruire la vôtre.
      </>
    ),
    verifier: [
      "Pour un support coté : la détention physique réelle du métal, allouée et ségréguée — cela se vérifie dans le prospectus, pas dans le nom du produit.",
      "La provenance : part d'or recyclé, adhésion de la chaîne d'approvisionnement à des référentiels de sourcing responsable.",
      "Les frais complets : prime à l'achat, écart entre prix d'achat et de revente, stockage assuré pour le physique.",
    ],
    risque: "Élevé — cours volatil, aucun revenu courant",
    horizon: "Long terme, en appoint d'un portefeuille diversifié",
    article: {
      slug: "metaux-precieux-investissement-ethique",
      label: "L'or a-t-il sa place dans un patrimoine éthique ?",
    },
    outil: { to: "/outils/profil-investisseur", label: "Profil investisseur" },
  },
] as const;

const comparatif = [
  {
    placement: "Assurance vie responsable",
    risque: "Modulable selon supports",
    horizon: "8 ans et +",
    liquidite: "Bonne — rachat possible à tout moment (délais de traitement)",
    vigilance: "La liste réelle des supports ISR du contrat, pas la plaquette",
  },
  {
    placement: "PER",
    risque: "Modulable selon supports",
    horizon: "Jusqu'à la retraite",
    liquidite: "Faible — capital bloqué hors cas légaux de déblocage",
    vigilance: "Univers responsable souvent plus étroit qu'en assurance vie",
  },
  {
    placement: "SCPI & immobilier durable",
    risque: "Modéré",
    horizon: "8-10 ans et +",
    liquidite: "Réduite — délai de revente des parts non garanti",
    vigilance: "Trajectoire énergétique mesurée du parc, pas l'intention",
  },
  {
    placement: "Actions & ETF ISR",
    risque: "Élevé",
    horizon: "8-10 ans minimum",
    liquidite: "Très bonne — cotation en continu",
    vigilance: "Écart réel entre l'indice ISR et son indice parent",
  },
  {
    placement: "Obligations vertes",
    risque: "Modéré",
    horizon: "3-8 ans",
    liquidite: "Bonne via les fonds obligataires",
    vigilance: "Usage des fonds levés et cohérence globale de l'émetteur",
  },
  {
    placement: "Épargne solidaire",
    risque: "Faible à modéré",
    horizon: "3 ans et +",
    liquidite: "Bonne à correcte selon le support",
    vigilance: "Part réellement solidaire et gestion de la poche classique",
  },
  {
    placement: "Immobilier direct responsable",
    risque: "Modéré à élevé",
    horizon: "10 ans et +",
    liquidite: "Faible — vente du bien",
    vigilance: "Ambition réelle des travaux : DPE avant/après, devis",
  },
  {
    placement: "Métaux précieux",
    risque: "Élevé",
    horizon: "Long terme, en appoint",
    liquidite: "Bonne (supports cotés) à correcte (physique)",
    vigilance: "Empreinte extractive, provenance, détention réelle",
  },
];

const etapesMethode = [
  {
    icon: FileSearch,
    title: "Les documents réglementaires d'abord",
    body: "DIC, prospectus, annexes SFDR précontractuelles et périodiques : c'est là que les engagements extra-financiers d'un fonds sont opposables. La brochure commerciale, elle, n'est pas contrôlée de la même façon — nous ne fondons rien dessus.",
  },
  {
    icon: ListChecks,
    title: "L'inventaire, ligne à ligne",
    body: "Ce que le fonds détient réellement, position par position — pas seulement les dix premières lignes mises en avant dans le reporting mensuel.",
  },
  {
    icon: BadgeCheck,
    title: "Le label, vérifié à la source",
    body: (
      <>
        Présence effective du fonds sur le registre officiel du label — par exemple{" "}
        <a
          href="https://www.lelabelisr.fr"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-[var(--grenat)]"
        >
          lelabelisr.fr
        </a>{" "}
        pour le Label ISR — et lecture de ce que ce label garantit précisément… et de ce
        qu'il ne garantit pas.
      </>
    ),
  },
  {
    icon: Receipt,
    title: "Les frais, complets et publiés",
    body: (
      <>
        Frais courants du support, frais de l'enveloppe qui les héberge, et notre propre
        rémunération — publiée ligne par ligne sur la page{" "}
        <Link to="/tarifs" className="underline underline-offset-2 hover:text-[var(--grenat)]">
          /tarifs
        </Link>
        .
      </>
    ),
  },
  {
    icon: RefreshCw,
    title: "Le suivi dans le temps",
    body: "Un fonds peut perdre son label, être reclassé SFDR ou changer de stratégie. La vérification initiale est revue périodiquement — la conformité à vos exigences se maintient, elle ne s'acquiert pas une fois pour toutes.",
  },
];

/* ────────────────────────────────── Page ────────────────────────────────── */

function PlacementsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Panorama des placements"
        title={
          <>
            Les placements responsables,{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              sans le vernis
            </span>
          </>
        }
        lead="Assurance vie ISR, PER, SCPI, actions et ETF, obligations vertes, épargne solidaire, immobilier, métaux précieux : ce que chaque classe d'actifs peut apporter, son niveau de risque — et surtout ce qu'il faut vérifier avant de souscrire. Parce qu'aucun placement n'est responsable par défaut."
      >
        <nav aria-label="Sommaire de la page" className="flex flex-wrap gap-2">
          {ancres.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-[var(--grenat)] hover:text-[var(--grenat)]"
            >
              {a.label}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* Mode d'emploi */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <p className="eyebrow">Comment lire ce panorama</p>
          <h2 className="display-2 mt-4 max-w-3xl">
            Aucune classe d'actifs n'est éthique par nature. Chacune peut le devenir — ou le
            prétendre.
          </h2>
          <p className="lead mt-5 max-w-2xl">
            Une SCPI peut rénover son parc ou repeindre sa plaquette ; un ETF « ESG » peut
            écarter la moitié de son indice ou trois valeurs seulement. C'est pourquoi chaque
            section ci-dessous consacre un encadré à ce qu'il faut <em>vérifier</em> — dans
            les documents réglementaires, pas dans les brochures. Les niveaux de risque et les
            horizons indiqués sont qualitatifs et indicatifs : tout investissement présente un
            risque de perte en capital.
          </p>
        </div>
      </section>

      {/* Catalogue des classes d'actifs */}
      <section className="section border-b border-border/40">
        <div className="container-prose space-y-8">
          {classes.map((c) => {
            const Icon = c.icon;
            return (
              <article key={c.id} id={c.id} className="card-paper scroll-mt-24">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                        style={{ background: "var(--accent)", color: "var(--grenat)" }}
                      >
                        <Icon size={20} aria-hidden />
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: "var(--grenat)" }}
                      >
                        {c.tag}
                      </span>
                    </div>
                    <h2 className="display-3 mt-5">{c.title}</h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                      {c.body}
                    </p>
                    <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                      {c.pourquoiTitre}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {c.pourquoi}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <div
                      className="rounded-2xl border p-5"
                      style={{
                        borderColor: "color-mix(in oklch, var(--grenat) 35%, transparent)",
                        background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
                      }}
                    >
                      <p
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                        style={{ color: "var(--grenat)" }}
                      >
                        <SearchCheck size={15} aria-hidden /> Ce qu'il faut vérifier
                      </p>
                      <ul className="mt-4 space-y-3">
                        {c.verifier.map((v) => (
                          <li key={v} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ background: "var(--grenat)" }}
                              aria-hidden
                            />
                            <span>{v}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-foreground/80">
                        <strong className="font-semibold">Risque :</strong> {c.risque}
                      </span>
                      <span className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-foreground/80">
                        <strong className="font-semibold">Horizon indicatif :</strong> {c.horizon}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/50 pt-5">
                      <Link
                        to="/articles/$slug"
                        params={{ slug: c.article.slug }}
                        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:underline"
                        style={{ color: "var(--grenat)" }}
                      >
                        <BookOpen size={15} aria-hidden /> {c.article.label}
                      </Link>
                      <Link
                        to={c.outil.to}
                        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:underline"
                        style={{ color: "var(--grenat)" }}
                      >
                        <Calculator size={15} aria-hidden /> Outil : {c.outil.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Tableau comparatif */}
      <section id="comparatif" className="section border-b border-border/40 scroll-mt-24">
        <div className="container-prose">
          <p className="eyebrow">Vue d'ensemble</p>
          <h2 className="display-2 mt-4 max-w-3xl">
            Huit placements, une même grille de lecture
          </h2>
          <p className="lead mt-5 max-w-2xl">
            Risque, horizon, liquidité — et pour chaque placement, le point de vigilance
            éthique numéro un : celui que nous vérifions en premier.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-sm">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border/80 bg-secondary/40 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="p-4 font-semibold">Placement</th>
                  <th className="p-4 font-semibold">Risque</th>
                  <th className="p-4 font-semibold">Horizon indicatif</th>
                  <th className="p-4 font-semibold">Liquidité</th>
                  <th className="p-4 font-semibold">Point de vigilance éthique</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {comparatif.map((r) => (
                  <tr key={r.placement} className="transition-colors hover:bg-muted/10">
                    <td className="p-4 font-medium text-foreground">{r.placement}</td>
                    <td className="p-4 text-foreground/85">{r.risque}</td>
                    <td className="p-4 text-foreground/85">{r.horizon}</td>
                    <td className="p-4 text-foreground/85">{r.liquidite}</td>
                    <td className="p-4 text-foreground/85">{r.vigilance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs italic text-muted-foreground">
            Grille qualitative et indicative, établie à titre pédagogique — elle ne remplace
            pas la lecture des documents de chaque produit. Tout investissement présente un
            risque de perte en capital ; les performances passées ne préjugent pas des
            performances futures.
          </p>
        </div>
      </section>

      {/* Encadré méthode */}
      <section id="methode" className="section border-b border-border/40 scroll-mt-24">
        <div className="container-prose">
          <div
            className="rounded-3xl border p-8 md:p-12"
            style={{
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
            }}
          >
            <p className="eyebrow" style={{ color: "var(--grenat)" }}>
              Notre méthode
            </p>
            <h2 className="display-3 mt-3 max-w-2xl">
              Comment nous vérifions un support avant de vous en parler
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
              Aucun support n'entre dans nos pistes sur la foi d'une brochure. Notre grille de
              vérification s'appuie sur les documents réglementaires — les seuls qui engagent
              réellement la société de gestion.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {etapesMethode.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="relative">
                  <span
                    className="absolute -top-1 right-0 select-none font-display text-4xl opacity-10"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: "var(--accent)", color: "var(--grenat)" }}
                  >
                    <Icon size={18} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}

              <div
                className="rounded-2xl p-5"
                style={{ background: "var(--accent)" }}
              >
                <h3 className="font-display text-lg">
                  Pourquoi aucun fonds n'est nommé sur cette page
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  L'univers précis de supports que nous utilisons se présente en rendez-vous,
                  documents réglementaires à l'appui, en fonction de votre contrat et de vos
                  exigences. Une liste publiée sur un site vieillit mal — un fonds peut
                  changer. Notre grille de vérification, elle, ne change pas.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/tarifs" className="btn-primary">
                Voir notre grille de rémunération <ArrowRight size={15} />
              </Link>
              <Link to="/outils/decodeur-label" className="btn-ghost">
                Décoder les labels vous-même <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Et pour vous ?"
        title="Quelle combinaison pour votre situation ?"
        text="Chaque classe d'actifs a sa logique ; c'est le dosage qui fait la cohérence. Lors d'un premier échange, nous passons en revue votre situation, vos objectifs et vos exigences éthiques — et vous repartez avec des pistes claires et documentées, quoi que vous décidiez ensuite."
      />
    </SiteLayout>
  );
}
