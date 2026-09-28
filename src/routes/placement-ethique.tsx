import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { articles } from "@/content/articles";
import type { ArticleCategory } from "@/content/article-types";
import { ArrowRight, ChevronDown } from "lucide-react";

const TITLE = "Placement éthique : guide complet 2026 | Placement-éthique.fr";
const DESCRIPTION =
  "Placement éthique : définition, différences entre ISR, ESG et solidaire, principaux supports, méthode en 5 vérifications pour repérer le greenwashing, FAQ.";
const URL = "https://placement-ethique.fr/placement-ethique";

/* ─────────────────────────── FAQ (aussi en JSON-LD) ─────────────────────────── */

const faqItems: { q: string; a: string }[] = [
  {
    q: "Qu'est-ce qu'un placement éthique ?",
    a: "C'est un placement dont la sélection intègre des critères extra-financiers — environnement, social, gouvernance, exclusions sectorielles, utilité sociale — en plus du rendement et du risque. « Éthique » n'est pas un label officiel : c'est le terme courant pour désigner des démarches différentes (ISR, solidaire, impact). Ce qu'un placement fait réellement se lit dans ses documents officiels, pas dans son nom.",
  },
  {
    q: "Quelle différence entre placement éthique, ISR et ESG ?",
    a: "L'ESG désigne les critères d'analyse (environnement, social, gouvernance). L'ISR est une démarche d'investissement qui les intègre ; le Label ISR est un label public qui contrôle cette démarche. « Éthique » est le mot du grand public. Le solidaire finance des entreprises à forte utilité sociale, et l'impact investing vise des effets mesurables en plus du rendement.",
  },
  {
    q: "Un fonds classé Article 8 ou Article 9 est-il forcément éthique ?",
    a: "Non. Le règlement européen SFDR est un règlement de transparence, pas un label : l'Article 8 ou 9 indique ce que la société de gestion déclare sur la durabilité du fonds, pas une garantie de résultat. La classification se lit avec l'inventaire du portefeuille et la méthodologie du fonds.",
  },
  {
    q: "Le Label ISR garantit-il qu'un fonds est éthique ?",
    a: "Il garantit le respect d'un référentiel public contrôlé par des organismes indépendants, ce qui est une vraie base de vérification. Il ne garantit pas que chaque société détenue corresponde à votre définition personnelle de l'éthique : un fonds labellisé peut détenir des entreprises qui restent débattues. D'où l'intérêt de lire l'inventaire.",
  },
  {
    q: "Peut-on perdre de l'argent avec un placement éthique ?",
    a: "Oui, sauf produits à capital garanti. Les unités de compte ISR, les ETF, les SCPI ou les obligations vertes présentent le même risque de perte en capital que leurs équivalents classiques : l'étiquette éthique ne réduit pas le risque de marché.",
  },
  {
    q: "À partir de quel montant peut-on investir éthique ?",
    a: "Il n'existe pas de minimum légal. Selon les contrats, des versements programmés de quelques dizaines d'euros par mois suffisent souvent pour commencer. Le point de vigilance n'est pas le montant de départ mais les frais, proportionnellement plus lourds sur les petites sommes.",
  },
  {
    q: "Quelle enveloppe choisir : assurance vie, PER, PEA ou compte-titres ?",
    a: "Cela dépend de l'objectif et de l'horizon. L'assurance vie offre de la souplesse et une fiscalité qui s'allège avec le temps ; le PER vise la retraite, avec une déduction fiscale possible et une épargne bloquée sauf cas de déblocage prévus par la loi ; le PEA et le compte-titres donnent accès à un univers plus large (ETF, actions).",
  },
  {
    q: "Faut-il un conseiller pour investir éthique ?",
    a: "Ce n'est pas obligatoire : on peut investir seul avec de la méthode. Un conseiller en gestion de patrimoine est utile quand plusieurs enjeux se croisent (fiscalité, retraite, transmission) ou quand on veut un regard extérieur pour lire les documents des supports.",
  },
];

/* ─────────────────────────── Route ─────────────────────────── */

export const Route = createFileRoute("/placement-ethique")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: "https://placement-ethique.fr/",
            },
            { "@type": "ListItem", position: 2, name: "Placement éthique", item: URL },
          ],
        }),
      },
    ],
  }),
  component: PlacementEthiquePage,
});

/* ─────────────────────────── Données de la page ─────────────────────────── */

const familles: {
  nom: string;
  finance: string;
  risque: string;
  vigilance: string;
  slug: string;
  lien: string;
}[] = [
  {
    nom: "Assurance vie en supports ISR",
    finance:
      "Fonds ISR, Greenfin ou solidaires en unités de compte, plus fonds en euros selon le contrat",
    risque: "Perte en capital sur les unités de compte ; fonds en euros garanti par l'assureur",
    vigilance: "Frais du contrat + frais des supports ; qualité réelle de la gamme responsable",
    slug: "assurance-vie-isr-guide-2026",
    lien: "Choisir une assurance vie ISR",
  },
  {
    nom: "PER (retraite)",
    finance: "Mêmes types de supports, dans une enveloppe dédiée à la retraite",
    risque: "Selon les supports choisis ; épargne bloquée jusqu'à la retraite, hors cas légaux",
    vigilance: "Blocage, fiscalité à la sortie, cohérence de la gestion pilotée avec vos critères",
    slug: "per-vs-assurance-vie-isr",
    lien: "PER ou assurance vie ISR ?",
  },
  {
    nom: "ETF ISR",
    finance:
      "Indices intégrant des critères ESG ou des exclusions, dans un PEA, un compte-titres ou une assurance vie",
    risque: "Perte en capital, à hauteur du marché suivi",
    vigilance: "Méthodologie de l'indice, exclusions réelles, frais courants",
    slug: "etf-isr-debutants",
    lien: "Choisir un ETF ISR quand on débute",
  },
  {
    nom: "SCPI à démarche responsable",
    finance:
      "Immobilier (bureaux, santé, logement…) avec une stratégie environnementale ou sociale déclarée",
    risque: "Revenus non garantis, valeur des parts variable, liquidité limitée",
    vigilance: "Frais d'entrée élevés, durée de détention recommandée, contenu réel de la démarche",
    slug: "scpi-isr-vs-scpi-classique",
    lien: "SCPI ISR ou SCPI classique",
  },
  {
    nom: "Épargne solidaire",
    finance:
      "Livrets et fonds dont une part finance des structures à utilité sociale ou environnementale",
    risque:
      "Varie selon le produit : capital souvent garanti sur les livrets, risque de perte sur les fonds",
    vigilance: "Part réellement solidaire, rendement souvent modeste, label Finansol",
    slug: "livrets-epargne-solidaire-alternative-livret-a",
    lien: "Épargne solidaire et Livret A",
  },
  {
    nom: "Obligations vertes",
    finance: "Dettes finançant des projets à objectif environnemental déclaré",
    risque: "Risque de crédit et de taux comme toute obligation",
    vigilance: "Affectation réelle des fonds, reporting de l'émetteur",
    slug: "obligations-vertes-vs-obligations-classiques",
    lien: "Obligations vertes ou classiques",
  },
];

const verifications: { titre: string; corps: string }[] = [
  {
    titre: "Le label : lequel, décerné par qui, pour quel périmètre ?",
    corps:
      "Le Label ISR, Greenfin et Finansol sont des labels publics ou associatifs avec un référentiel consultable. Un « label maison » ou un logo sans référentiel public ne dit rien de vérifiable. Vérifiez que le fonds figure bien sur la liste officielle du label concerné.",
  },
  {
    titre: "La classification SFDR : ce qu'elle déclare, ce qu'elle ne prouve pas",
    corps:
      "Article 6, 8 ou 9 : la classification décrit l'ambition déclarée du fonds, pas son résultat. Lisez la documentation précontractuelle pour voir la part d'investissements durables annoncée et la méthode utilisée.",
  },
  {
    titre: "L'inventaire du portefeuille : ce que le fonds détient vraiment",
    corps:
      "C'est le contrôle le plus révélateur. Comparez les premières lignes du portefeuille à votre propre définition de l'éthique : certaines démarches excluent des secteurs entiers, d'autres privilégient l'engagement auprès des entreprises.",
  },
  {
    titre: "La méthode : exclusion, sélection, engagement ou impact ?",
    corps:
      "Ces stratégies ne produisent pas les mêmes effets et ne se valent pas selon vos priorités. Sachez laquelle est appliquée, et si la société de gestion publie des preuves de son application (politique de vote, bilan d'engagement).",
  },
  {
    titre: "Les frais : ce que coûte la démarche",
    corps:
      "Frais de l'enveloppe, frais de gestion des supports, frais d'entrée éventuels : chaque strate s'impute directement sur votre rendement. Un support responsable n'est pas un support gratuit ni forcément plus cher ; c'est un total à comparer.",
  },
];

const definitions: { terme: string; sens: string }[] = [
  {
    terme: "Éthique",
    sens: "Terme courant, sans définition légale : chacun y met ses propres valeurs.",
  },
  { terme: "ESG", sens: "Critères d'analyse : Environnement, Social, Gouvernance." },
  {
    terme: "ISR",
    sens: "Démarche d'investissement intégrant les critères ESG ; le Label ISR est le label public qui la contrôle.",
  },
  {
    terme: "Solidaire",
    sens: "Finance des structures à forte utilité sociale ou environnementale ; les fonds dits 90/10 consacrent 5 à 10 % de leurs actifs à ces entreprises solidaires.",
  },
  {
    terme: "Impact",
    sens: "Vise des effets sociaux ou environnementaux mesurables en plus d'un rendement financier.",
  },
];

const CATEGORIES: { nom: ArticleCategory; intro: string }[] = [
  { nom: "Fondamentaux", intro: "Les bases pour comprendre et commencer." },
  {
    nom: "Labels & Greenwashing",
    intro: "Ce que les labels garantissent, et comment repérer les promesses creuses.",
  },
  { nom: "Performance", intro: "Rendement, risque et stratégies : ce que disent les chiffres." },
  { nom: "Enveloppes", intro: "Assurance vie, PER, SCPI : où loger ses placements." },
  { nom: "Fiscalité", intro: "Fiscalité et retraite d'une épargne alignée sur vos valeurs." },
  { nom: "Transmission", intro: "Donner et transmettre en cohérence avec ses valeurs." },
  { nom: "Conseil", intro: "Se faire accompagner : rendez-vous, frais, choix d'un conseiller." },
];

/* ─────────────────────────── Page ─────────────────────────── */

function PlacementEthiquePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Le guide"
        title={
          <>
            Placement éthique : le guide pour investir{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              sans greenwashing
            </span>
          </>
        }
        lead="Ce qu'est un placement éthique, ce qu'il finance, comment vérifier ses promesses et par où commencer — sans jargon et sans logo vert."
      />

      <section className="pb-10 pt-6">
        <div className="container-prose max-w-3xl prose-article">
          <div className="callout callout-grenat">
            <p>
              <strong>En résumé :</strong> un placement éthique est un placement dont la sélection
              tient compte de critères sociaux, environnementaux ou de gouvernance en plus du
              rendement. Le mot « éthique » n'a pas de définition légale : ce qui compte, c'est ce
              que le produit fait réellement, et cela se vérifie en cinq points — label,
              classification SFDR, inventaire du portefeuille, méthode et frais. L'étiquette éthique
              ne supprime ni le risque de perte en capital ni les frais.
            </p>
          </div>

          <p>
            Vous voulez que votre épargne serve à quelque chose que vous approuvez. Vous ouvrez un
            comparateur, et chaque banque affiche un fonds « responsable », « durable » ou « vert ».
            Vous vous demandez, légitimement, ce qui se cache derrière ces mots — et comment savoir
            si la promesse est tenue.
          </p>
          <p>
            Cette page est le point de départ. Elle définit le sujet, présente les principaux
            placements éthiques, donne une méthode de vérification en cinq points, puis vous oriente
            vers les articles détaillés par thème.
          </p>

          <h2>Qu'est-ce qu'un placement éthique ?</h2>
          <p>
            Un placement éthique est un placement dont la sélection intègre des critères
            extra-financiers — environnement, social, gouvernance, exclusion de certains secteurs,
            utilité sociale — en complément de l'analyse financière habituelle. Le terme est employé
            par le grand public ; les professionnels parlent plutôt d'ISR, d'ESG, d'investissement
            solidaire ou d'impact. Ces mots ne sont pas interchangeables.
          </p>

          <h2>Éthique, ISR, ESG, solidaire, impact : quelles différences ?</h2>
          <table>
            <thead>
              <tr>
                <th>Terme</th>
                <th>Ce qu'il désigne</th>
              </tr>
            </thead>
            <tbody>
              {definitions.map((d) => (
                <tr key={d.terme}>
                  <td>
                    <strong>{d.terme}</strong>
                  </td>
                  <td>{d.sens}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Pour approfondir :{" "}
            <Link to="/articles/$slug" params={{ slug: "isr-esg-impact-investing-differences" }}>
              ISR, ESG, impact investing : la différence
            </Link>
            .
          </p>

          <h2>Quels sont les principaux placements éthiques ?</h2>
          <p>
            Il n'existe pas un placement éthique, mais plusieurs familles de supports, qui se logent
            dans des enveloppes différentes. Le tableau ci-dessous les compare sur ce qu'elles
            financent, le risque et le point de vigilance principal.
          </p>
          <table>
            <thead>
              <tr>
                <th>Famille</th>
                <th>Ce qu'elle finance</th>
                <th>Risque</th>
                <th>À surveiller</th>
              </tr>
            </thead>
            <tbody>
              {familles.map((f) => (
                <tr key={f.nom}>
                  <td>
                    <strong>{f.nom}</strong>
                  </td>
                  <td>{f.finance}</td>
                  <td>{f.risque}</td>
                  <td>{f.vigilance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Les unités de compte présentent un risque de perte en capital. Ce tableau est une
            présentation générale, non une recommandation. Pour aller plus loin, chaque famille a
            son article :
          </p>
          <ul>
            {familles.map((f) => (
              <li key={f.slug}>
                <Link to="/articles/$slug" params={{ slug: f.slug }}>
                  {f.lien}
                </Link>
              </li>
            ))}
          </ul>
          <p>
            Vue par classe d'actifs : <Link to="/placements">tous les placements responsables</Link>
            . Vue par contrat : <Link to="/enveloppes">les enveloppes fiscales</Link>.
          </p>

          <h2>Comment vérifier qu'un placement est vraiment éthique ?</h2>
          <p>
            Aucun contrôle ne suffit seul. Cinq vérifications, dans cet ordre, donnent une image
            fiable en moins d'une heure.
          </p>
          <ol>
            {verifications.map((v) => (
              <li key={v.titre}>
                <strong>{v.titre}</strong> {v.corps}
              </li>
            ))}
          </ol>
          <p>
            Deux articles détaillent ces points :{" "}
            <Link to="/articles/$slug" params={{ slug: "label-isr-que-garantit-il-vraiment" }}>
              ce que garantit le Label ISR
            </Link>{" "}
            et{" "}
            <Link to="/articles/$slug" params={{ slug: "reperer-greenwashing-fonds-vert-methode" }}>
              la méthode pour repérer le greenwashing
            </Link>
            . L'outil <a href="/outils/decodeur-label">décodeur de labels</a> vous aide à lire une
            mention précise.
          </p>

          <h2>Un placement éthique rapporte-t-il moins ?</h2>
          <p>
            Il n'existe pas de réponse unique. Les études publiées sont contradictoires : selon la
            période, l'indice de référence et la méthode, l'écart avec un placement classique va
            d'un sens à l'autre. Ce qui est certain : un placement éthique reste un placement, avec
            le même risque de marché, et les frais pèsent autant. Nous détaillons les sources dans{" "}
            <Link to="/articles/$slug" params={{ slug: "investir-ethique-performance-chiffres" }}>
              Investir éthique rapporte-t-il moins ?
            </Link>
          </p>

          <h2>Par où commencer pour investir éthique ?</h2>
          <ol>
            <li>
              <strong>Définir l'objectif et l'horizon</strong> : retraite, capital, enfants,
              transmission. Voir <Link to="/objectifs">vos objectifs de vie</Link>.
            </li>
            <li>
              <strong>Situer votre tolérance au risque</strong> avec l'outil{" "}
              <a href="/outils/profil-investisseur">profil investisseur</a>.
            </li>
            <li>
              <strong>Choisir l'enveloppe</strong> : comparez avec{" "}
              <a href="/outils/comparateur-enveloppes">le comparateur d'enveloppes</a> ou lisez{" "}
              <Link
                to="/articles/$slug"
                params={{ slug: "quelle-enveloppe-investissement-ethique" }}
              >
                quelle enveloppe pour investir éthique
              </Link>
              .
            </li>
            <li>
              <strong>Vérifier les supports</strong> avec la grille en cinq points ci-dessus.
            </li>
            <li>
              <strong>Ajuster dans le temps</strong> : un fonds peut changer de stratégie ou perdre
              son label, un contrôle annuel s'impose.
            </li>
          </ol>
          <p>
            Vous démarrez avec peu ? Lisez{" "}
            <Link to="/articles/$slug" params={{ slug: "investir-ethique-petit-budget" }}>
              investir éthique avec un petit budget
            </Link>
            . Pour un guide de démarrage complet :{" "}
            <Link
              to="/articles/$slug"
              params={{ slug: "investissement-ethique-guide-complet-2026" }}
            >
              par où commencer en 2026
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Tous les articles, par thème */}
      <section className="section pt-4">
        <div className="container-prose">
          <p className="eyebrow">Tous les articles</p>
          <h2 className="display-2 mt-4 max-w-3xl">Aller plus loin, thème par thème</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {CATEGORIES.map(({ nom, intro }) => {
              const liste = articles.filter((a) => a.category === nom);
              if (liste.length === 0) return null;
              return (
                <div key={nom} className="card-paper">
                  <h3 className="font-display text-xl">{nom}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{intro}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {liste.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to="/articles/$slug"
                          params={{ slug: a.slug }}
                          className="hover:underline"
                        >
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-4">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="display-2 mt-4">Vos questions sur le placement éthique</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  <h3 className="text-base font-medium">{q}</h3>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Plus de réponses dans <Link to="/questions">la page des questions fréquentes</Link>.
          </p>
        </div>
      </section>

      {/* Conclusion 4R */}
      <section className="pb-6">
        <div className="container-prose max-w-3xl prose-article">
          <h2>Investir éthique, c'est surtout vérifier</h2>
          <p>
            La bonne nouvelle : vous n'avez pas besoin d'être expert pour poser les bonnes
            questions. Cinq vérifications suffisent à écarter l'essentiel des promesses creuses. Le
            coût de l'inaction est réel : sans elles, une épargne peut financer pendant des années
            des activités que vous n'auriez pas choisies.
          </p>
          <p>
            Si vous préférez être accompagné, découvrez{" "}
            <Link to="/cgp-investissement-responsable">
              comment travaille un cabinet de gestion de patrimoine spécialisé en investissement
              responsable
            </Link>{" "}
            : ce qu'il fait, ce qu'il ne fait pas, et comment il est rémunéré.
          </p>
          <p className="text-sm text-muted-foreground">
            Cette page est informative et éducative : elle ne constitue ni une recommandation ni un
            conseil en investissement. Les performances passées ne préjugent pas des performances
            futures.{" "}
            <Link to="/articles" className="inline-flex items-center gap-1">
              Tous les articles <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </section>

      <CTA
        eyebrow="Passer à l'action"
        title="Échanger avec un conseiller"
        text="Un premier échange offert et sans engagement, pour discuter de vos projets et de vos critères de vive voix."
      />
    </SiteLayout>
  );
}
