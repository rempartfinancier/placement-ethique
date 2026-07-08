import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  GraduationCap,
  HeartHandshake,
  Hourglass,
  Info,
  LineChart,
  PiggyBank,
  Receipt,
} from "lucide-react";

export const Route = createFileRoute("/objectifs")({
  head: () => ({
    meta: [
      {
        title:
          "Quel placement pour quel objectif de vie ? Retraite, enfants, impôts, transmission | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Retraite, capital, enfants, impôts, transmission, épargne qui dort : six objectifs de vie, des pistes d'enveloppes concrètes et les outils pour les chiffrer.",
      },
      { property: "og:title", content: "Vos objectifs de vie — Placement-éthique.fr" },
      {
        property: "og:description",
        content:
          "Six objectifs de vie, des pistes d'enveloppes concrètes et les outils pour les chiffrer — sans jargon et sans greenwashing.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/objectifs" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/objectifs" }],
  }),
  component: ObjectifsPage,
});

/* ─────────────────────────── Données de la page ─────────────────────────── */

type Objectif = {
  id: string;
  icon: LucideIcon;
  nav: string;
  titre: string;
  badge?: string;
  accroche: string;
  situation: string;
  compte: string[];
  pistes: { nom: string; detail: string }[];
  outils: { to: string; label: string; desc: string }[];
  articles: { slug: string; label: string }[];
};

const objectifs: Objectif[] = [
  {
    id: "retraite",
    icon: Hourglass,
    nav: "Préparer ma retraite",
    titre: "Préparer ma retraite",
    accroche:
      "L'objectif où le temps est votre principal allié — et où chaque année d'attente coûte un peu de sérénité future.",
    situation:
      "Vous avez entre 35 et 55 ans. Vous cotisez, vous voyez passer les réformes, et vous pressentez que votre pension seule ne maintiendra pas votre niveau de vie. Vous voulez construire un complément de revenu — sans passer vingt ans à financer, via votre épargne, des activités que vous n'approuvez pas.",
    compte: [
      "Partir du besoin, pas du produit : estimez l'écart entre votre pension prévisible et le revenu souhaité, puis déduisez-en l'effort d'épargne mensuel. Ce chiffre change tout — et presque personne ne l'a posé.",
      "Un horizon long autorise une part d'actifs dynamiques : c'est elle qui fait l'essentiel du travail sur vingt ans, davantage que le choix fin du produit.",
      "La cohérence avec vos valeurs se vérifie dans la durée : un fonds peut changer de stratégie ou perdre son label. Le suivi annuel compte autant que la sélection initiale.",
      "La sortie se prépare aussi : capital, rente ou combinaison des deux — la bonne réponse dépend de votre situation, pas d'une règle générale.",
    ],
    pistes: [
      {
        nom: "PER (plan d'épargne retraite)",
        detail:
          "Versements déductibles du revenu imposable dans la limite de plafonds annuels, en contrepartie d'une épargne bloquée jusqu'à la retraite, hors cas de déblocage anticipé prévus par la loi. D'autant plus pertinent que votre imposition est élevée.",
      },
      {
        nom: "Assurance vie en supports ISR",
        detail:
          "Souplesse des retraits à tout moment et fiscalité allégée après huit ans de détention : le complément naturel d'un PER — ou l'enveloppe principale si vous tenez à garder la main sur votre épargne.",
      },
      {
        nom: "SCPI à démarche responsable",
        detail:
          "Des revenus potentiels réguliers — jamais garantis — pour compléter la pension, en détention directe ou logées dans une assurance vie.",
      },
    ],
    outils: [
      {
        to: "/outils/retraite",
        label: "Simulateur retraite",
        desc: "Estimez l'effort d'épargne mensuel qui correspond à votre objectif de revenu complémentaire (hypothèses illustratives).",
      },
    ],
    articles: [
      {
        slug: "preparer-retraite-epargne-alignee-valeurs",
        label: "Préparer sa retraite avec une épargne alignée sur ses valeurs",
      },
      {
        slug: "retraite-capital-ou-rente-per-ethique",
        label: "Capital ou rente à la sortie d'un PER : que choisir ?",
      },
    ],
  },
  {
    id: "capital",
    icon: LineChart,
    nav: "Faire fructifier un capital",
    titre: "Faire fructifier un capital en cohérence avec mes valeurs",
    accroche:
      "Un capital qui attend sur un compte, c'est une décision repoussée. L'investir en cohérence avec vos valeurs, c'est une méthode — pas un slogan.",
    situation:
      "Un héritage, la vente d'un bien, une prime, ou simplement des années d'épargne accumulée : vous disposez d'un capital, et il patiente sur un compte « en attendant de décider ». La performance vous intéresse, mais pas à n'importe quel prix — et surtout pas au prix d'un greenwashing que vous ne sauriez pas détecter.",
    compte: [
      "L'horizon et la tolérance au risque d'abord : ce couple dicte la répartition entre actifs dynamiques et actifs plus stables — avant toute discussion de produit.",
      "La traçabilité se vérifie : labels (ISR, Greenfin, Finansol), classification SFDR (Article 8 ou 9), inventaire de portefeuille. Ce sont des documents publics — pas des arguments commerciaux.",
      "La diversification reste la seule protection gratuite : plusieurs classes d'actifs, plusieurs zones géographiques, plusieurs approches responsables (exclusion sectorielle, sélection best-in-class, engagement actionnarial).",
      "Les frais s'imputent directement sur votre rendement : enveloppe, gestion, supports — chaque strate se lit avant de signer.",
    ],
    pistes: [
      {
        nom: "Assurance vie multisupport",
        detail:
          "L'enveloppe la plus polyvalente pour loger des unités de compte ISR, avec une fiscalité qui s'améliore dans le temps. Les unités de compte présentent un risque de perte en capital.",
      },
      {
        nom: "Compte-titres ordinaire",
        detail:
          "L'univers le plus large — ETF ISR, obligations vertes, fonds thématiques — sans plafond de versement, au prix d'une fiscalité moins favorable.",
      },
      {
        nom: "PEA",
        detail:
          "Pour la poche d'actions européennes, avec un avantage fiscal qui se construit avec la durée de détention.",
      },
    ],
    outils: [
      {
        to: "/outils/portefeuilles-types",
        label: "Portefeuilles types",
        desc: "Des pistes d'allocation selon votre horizon et votre tolérance au risque (hypothèses illustratives).",
      },
      {
        to: "/outils/profil-investisseur",
        label: "Profil investisseur",
        desc: "Situez votre tolérance réelle au risque avant de choisir le moindre support.",
      },
    ],
    articles: [
      {
        slug: "investissement-ethique-guide-complet-2026",
        label: "Par où commencer pour investir éthique en 2026 ? Le guide complet",
      },
      {
        slug: "investir-ethique-performance-chiffres",
        label: "Investir éthique rapporte-t-il moins ? Ce que disent les chiffres",
      },
    ],
  },
  {
    id: "enfants",
    icon: GraduationCap,
    nav: "L'avenir de mes enfants",
    titre: "Préparer l'avenir de mes enfants",
    accroche:
      "Quinze ans d'horizon, un objectif daté, des montants réguliers : la configuration idéale de l'épargne — à condition de régler la question du contrôle.",
    situation:
      "Vos enfants ont entre quelques mois et quinze ans. Vous voulez qu'à l'âge des études, du permis ou du premier logement, un capital soit là — et, tant qu'à faire, qu'il ait grandi pendant quinze ans dans une économie que vous assumez de leur montrer.",
    compte: [
      "Un horizon long et daté à l'avance : la configuration la plus favorable à une épargne progressive investie en supports dynamiques, avec une sécurisation à l'approche de l'échéance.",
      "La question du contrôle se pose avant celle du rendement : un contrat ouvert au nom de l'enfant lui appartient pleinement à sa majorité, sans condition d'usage.",
      "La régularité l'emporte sur le montant : des versements programmés, même modestes, construisent davantage que des versements exceptionnels au gré des occasions.",
      "Transmettre un capital peut aussi transmettre une méthode : associer l'enfant, le moment venu, à ce que finance cette épargne fait partie de l'éducation financière.",
    ],
    pistes: [
      {
        nom: "Assurance vie au nom de l'enfant",
        detail:
          "Le capital lui appartient juridiquement ; parents et grands-parents peuvent alimenter le contrat. À sa majorité, il en dispose librement — des mécanismes d'encadrement existent, à examiner au cas par cas.",
      },
      {
        nom: "Assurance vie à votre nom",
        detail:
          "Vous gardez le contrôle du calendrier et de l'usage : c'est vous qui décidez quand et comment transmettre — donation, retrait ciblé ou clause bénéficiaire.",
      },
      {
        nom: "Donations progressives",
        detail:
          "Des abattements fiscaux qui se renouvellent dans le temps permettent de transmettre par étapes, tôt et régulièrement, dans un cadre maîtrisé.",
      },
    ],
    outils: [
      {
        to: "/outils/simulateur",
        label: "Projection d'épargne",
        desc: "Visualisez ce que des versements mensuels peuvent construire sur dix ou quinze ans, frais inclus (hypothèses illustratives).",
      },
    ],
    articles: [
      {
        slug: "assurance-vie-enfants-transmettre-valeurs",
        label: "Ouvrir une assurance vie à ses enfants : transmettre un capital et des valeurs",
      },
      {
        slug: "investir-ethique-petit-budget",
        label: "Peut-on investir éthique avec un petit budget ?",
      },
    ],
  },
  {
    id: "impots",
    icon: Receipt,
    nav: "Réduire mes impôts",
    titre: "Réduire mes impôts — sans en faire une obsession",
    accroche:
      "Réduire l'impôt est un levier légitime. En faire le point de départ de vos placements est le plus court chemin vers les mauvais produits.",
    situation:
      "Chaque automne, votre avis d'imposition confirme que vous êtes solidement imposé. On vous a déjà proposé « de la défiscalisation » — des montages complexes, des plaquettes brillantes — et vous cherchez ce qui est réellement pertinent, sans transformer votre patrimoine en usine à gaz fiscale.",
    compte: [
      "La règle d'or : un avantage fiscal ne transforme jamais un placement médiocre en bon placement. On choisit d'abord l'actif, on optimise ensuite.",
      "Votre taux marginal d'imposition détermine l'intérêt réel d'une déduction : le même versement sur un PER ne produit pas du tout le même effet selon votre tranche.",
      "Une fiscalité différée n'est pas une fiscalité effacée : le PER, c'est une déduction aujourd'hui contre une imposition à la sortie. Le report est souvent favorable — c'est un calcul, pas un cadeau.",
      "Certains dispositifs concentrent les risques : avant de regarder la réduction, lisez ce que vous financez, avec quelle liquidité et quel scénario de sortie.",
    ],
    pistes: [
      {
        nom: "PER en supports ISR",
        detail:
          "Le levier le plus lisible quand l'objectif retraite et l'objectif fiscal se rejoignent : versements déductibles dans la limite de plafonds annuels, épargne investie selon vos exigences.",
      },
      {
        nom: "Dispositifs spécifiques (Girardin industriel, immobilier fiscal)",
        detail:
          "Des réductions réelles, mais des mécanismes exigeants et des risques propres — à examiner dossier par dossier, jamais sur plaquette commerciale.",
      },
      {
        nom: "Assurance vie",
        detail:
          "Aucune carotte à l'entrée, mais un cadre durablement avantageux sur les retraits après huit ans — souvent plus pertinent, au total, qu'un dispositif agressif.",
      },
    ],
    outils: [
      {
        to: "/outils/per-isr",
        label: "Simulateur PER ISR",
        desc: "Mesurez l'effet de la déduction selon votre tranche marginale d'imposition (hypothèses illustratives).",
      },
    ],
    articles: [
      {
        slug: "dispositifs-fiscaux-demarche-ethique",
        label: "Quels dispositifs fiscaux sont compatibles avec une démarche éthique ?",
      },
      {
        slug: "per-vs-assurance-vie-isr",
        label: "PER ou assurance vie pour investir responsable ?",
      },
    ],
  },
  {
    id: "transmission",
    icon: HeartHandshake,
    nav: "Transmettre mon patrimoine",
    titre: "Transmettre mon patrimoine",
    accroche:
      "Une transmission réussie se prépare de son vivant, à froid. L'improvisation coûte cher — en droits comme en conflits.",
    situation:
      "Vous avez construit un patrimoine et vous voulez qu'il parvienne aux bonnes personnes, dans de bonnes conditions : sans droits de succession évitables, sans conflit familial — et, si possible, en transmettant aussi la manière dont il a été construit : avec des exigences.",
    compte: [
      "Anticiper change tout : donations, clauses bénéficiaires, démembrement — les outils les plus efficaces perdent l'essentiel de leur intérêt quand ils sont improvisés dans l'urgence.",
      "La clause bénéficiaire de vos assurances vie mérite plus d'attention qu'elle n'en reçoit : une clause vague, standard ou obsolète peut trahir vos intentions au pire moment.",
      "Un patrimoine lisible se transmet mieux : des placements documentés, expliqués et cohérents avec vos valeurs sont plus faciles à recevoir qu'un empilement de produits.",
      "Chaque famille est un cas particulier — famille recomposée, enfant vulnérable, entreprise à transmettre : ce sujet se travaille avec des professionnels, notaire compris.",
    ],
    pistes: [
      {
        nom: "Assurance vie",
        detail:
          "Un cadre successoral spécifique, distinct de la succession classique, dont les paramètres dépendent notamment de l'âge auquel les versements sont effectués — et une clause bénéficiaire à rédiger avec soin.",
      },
      {
        nom: "Donations de son vivant",
        detail:
          "Des abattements renouvelables dans le temps pour transmettre progressivement, en conservant si besoin l'usufruit des biens donnés.",
      },
      {
        nom: "Contrat de capitalisation",
        detail:
          "Cousin de l'assurance vie, il peut se transmettre par donation sans être dénoué — une brique utile dans certaines stratégies patrimoniales.",
      },
      {
        nom: "Fonds de partage et épargne solidaire",
        detail:
          "Transmettre, c'est parfois aussi donner : une partie des revenus peut être reversée à des organismes soutenus, dans un cadre labellisé (Finansol).",
      },
    ],
    outils: [
      {
        to: "/outils/diagnostic",
        label: "Diagnostic d'épargne",
        desc: "La transmission elle-même ne s'automatise pas — mais cartographier ce que vous détenez en est la première étape.",
      },
    ],
    articles: [
      {
        slug: "donation-transmission-coherence-valeurs",
        label: "Comment donner et transmettre en cohérence avec ses valeurs ?",
      },
      {
        slug: "transmettre-patrimoine-engage-fonds-partage",
        label: "Transmettre un patrimoine engagé : succession et fonds de partage",
      },
    ],
  },
  {
    id: "epargne-qui-dort",
    icon: PiggyBank,
    nav: "Réveiller une épargne qui dort",
    titre: "Donner du sens à une épargne qui dort",
    badge: "Le point de départ le plus fréquent",
    accroche:
      "C'est le cas que nous rencontrons le plus souvent : une épargne de précaution devenue, sans décision, un patrimoine entier en sommeil.",
    situation:
      "Un Livret A au plafond ou presque, un LDDS, et des milliers d'euros qui s'accumulent sur le compte courant « en attendant de décider ». Cette situation dure souvent depuis des années — non par négligence, mais parce qu'aucune option ne semblait à la fois sûre, compréhensible et alignée avec vos valeurs.",
    compte: [
      "L'épargne de précaution reste indispensable : l'équivalent de quelques mois de dépenses, disponible immédiatement. Le vrai sujet, c'est tout ce qui dépasse ce matelas.",
      "Ne pas décider est aussi une décision : un compte courant ne rapporte rien, et l'inflation grignote son pouvoir d'achat année après année.",
      "Votre épargne finance déjà quelque chose : dépôts et livrets réglementés sont employés par le système bancaire. La question n'est pas « investir ou non », mais « financer quoi — en le sachant, ou sans le savoir ».",
      "Rien n'oblige à tout basculer d'un coup : des versements progressifs, par étapes, en commençant par l'horizon le plus long, suffisent à enclencher le mouvement.",
    ],
    pistes: [
      {
        nom: "Livrets réglementés",
        detail:
          "Conservez-y votre matelas de précaution : disponibilité immédiate, capital garanti. Leur plafond et leur rémunération en font un outil de précaution — pas un outil de projet.",
      },
      {
        nom: "Assurance vie en supports ISR",
        detail:
          "Pour l'épargne d'horizon moyen et long, avec des versements programmés — en acceptant le risque de perte en capital des unités de compte.",
      },
      {
        nom: "Épargne solidaire (label Finansol)",
        detail:
          "Pour donner un sens immédiat à une partie de l'épargne : fonds de partage, financement d'acteurs de l'économie sociale et solidaire.",
      },
    ],
    outils: [
      {
        to: "/outils/empreinte-carbone-epargne",
        label: "Empreinte carbone de votre épargne",
        desc: "Un ordre de grandeur pédagogique de ce que financent vos avoirs actuels — le point de départ le plus parlant.",
      },
      {
        to: "/outils/comparateur-enveloppes",
        label: "Comparateur d'enveloppes",
        desc: "Livret, assurance vie, PEA, compte-titres : comparez les cadres avant de déplacer votre épargne.",
      },
    ],
    articles: [
      {
        slug: "livrets-epargne-solidaire-alternative-livret-a",
        label: "L'épargne solidaire est-elle une vraie alternative au Livret A ?",
      },
      {
        slug: "quelle-enveloppe-investissement-ethique",
        label: "Quelle enveloppe choisir pour investir éthique ?",
      },
    ],
  },
];

/* ────────────────────────────────── Page ────────────────────────────────── */

function ObjectifsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Par où commencer"
        title={
          <>
            Commencez par l'objectif.{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              Le placement suivra.
            </span>
          </>
        }
        lead="Personne ne se lève le matin en voulant « une assurance vie ». On veut une retraite sereine, des enfants équipés pour leur vie d'adulte, un patrimoine qui passe aux bonnes mains — et une épargne qui ne finance pas n'importe quoi. Cette page part de là : six objectifs de vie, et pour chacun, ce qui compte vraiment, des enveloppes à explorer et les outils pour chiffrer."
      />

      {/* Navigation par objectif */}
      <section className="py-10 md:py-14 border-b border-border/40">
        <div className="container-prose">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {objectifs.map(({ id, icon: Icon, nav }, i) => (
              <a
                key={id}
                href={`#${id}`}
                className="card-paper group flex items-center gap-4 p-5"
              >
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--accent)", color: "var(--grenat)" }}
                >
                  <Icon size={18} aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="block text-xs text-muted-foreground">
                    Objectif {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block font-medium text-foreground group-hover:text-[var(--grenat)] transition-colors">
                    {nav}
                  </span>
                </span>
                <ArrowRight
                  size={15}
                  className="shrink-0 text-muted-foreground group-hover:text-[var(--grenat)] transition-colors"
                  aria-hidden
                />
              </a>
            ))}
          </div>

          <div
            className="mt-8 flex gap-4 rounded-2xl border p-5 md:p-6"
            style={{
              borderColor: "color-mix(in oklch, var(--grenat) 35%, transparent)",
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
            }}
          >
            <Info size={18} className="mt-0.5 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
            <p className="text-sm leading-relaxed text-foreground/80">
              <strong className="text-foreground">Comment lire cette page.</strong> Chaque objectif décrit
              une situation type, ce qui compte vraiment, et des enveloppes à explorer. Ce sont des pistes
              informatives — pas des recommandations : aucune page web ne connaît votre situation, vos
              revenus ni vos contraintes. Un rappel qui vaut pour toute la page : les supports non garantis
              présentent un risque de perte en capital, et les performances passées ne préjugent pas des
              performances futures.
            </p>
          </div>
        </div>
      </section>

      {/* Les six objectifs */}
      <section className="section">
        <div className="container-prose space-y-12 md:space-y-16">
          {objectifs.map(
            ({ id, icon: Icon, titre, badge, accroche, situation, compte, pistes, outils, articles }, i) => (
              <article
                key={id}
                id={id}
                className="scroll-mt-28 rounded-3xl border border-border/60 bg-card p-7 md:p-10"
              >
                {/* En-tête */}
                <div className="flex flex-wrap items-start gap-4">
                  <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
                  >
                    <Icon size={22} aria-hidden />
                  </span>
                  <div className="flex-1 min-w-[240px]">
                    <p className="eyebrow">Objectif {String(i + 1).padStart(2, "0")}</p>
                    <h2 className="display-3 mt-2">{titre}</h2>
                  </div>
                  {badge && (
                    <span
                      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                      style={{
                        borderColor: "color-mix(in oklch, var(--grenat) 40%, transparent)",
                        color: "var(--grenat)",
                        background: "color-mix(in oklch, var(--grenat) 6%, transparent)",
                      }}
                    >
                      {badge}
                    </span>
                  )}
                </div>

                <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-3xl">{accroche}</p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  {/* Colonne gauche : situation + ce qui compte */}
                  <div>
                    <h3 className="eyebrow">Situation type</h3>
                    <blockquote
                      className="mt-3 rounded-r-2xl border-l-4 pl-5 pr-4 py-4 text-[15px] italic leading-relaxed text-foreground/85"
                      style={{
                        borderColor: "var(--grenat)",
                        background: "color-mix(in oklch, var(--grenat) 4%, transparent)",
                      }}
                    >
                      {situation}
                    </blockquote>

                    <h3 className="eyebrow mt-7">Ce qui compte vraiment</h3>
                    <ul className="mt-3 space-y-3">
                      {compte.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <Check size={16} className="mt-0.5 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Colonne droite : pistes d'enveloppes */}
                  <div>
                    <h3 className="eyebrow">Des enveloppes à explorer — des pistes, pas des recommandations</h3>
                    <ul className="mt-3 space-y-4">
                      {pistes.map((p) => (
                        <li
                          key={p.nom}
                          className="rounded-2xl border border-border/60 bg-background/50 p-4"
                        >
                          <p className="font-medium text-foreground text-[15px]">{p.nom}</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      Le choix — et le dosage — entre ces enveloppes dépend de votre fiscalité, de votre
                      horizon et de votre situation familiale. Frais, conditions et supports disponibles se
                      vérifient contrat par contrat, notamment dans le DIC de chaque support.
                    </p>
                  </div>
                </div>

                {/* Pour aller plus loin */}
                <div className="mt-8 border-t border-border/50 pt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="eyebrow">Chiffrer par vous-même</h3>
                    <div className="mt-3 space-y-3">
                      {outils.map((o) => (
                        <Link
                          key={o.to}
                          to={o.to}
                          className="group flex items-start gap-3 rounded-2xl border border-border/60 p-4 transition-colors hover:border-[var(--grenat)]"
                        >
                          <span
                            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                            style={{ background: "var(--accent)", color: "var(--grenat)" }}
                          >
                            <Calculator size={16} aria-hidden />
                          </span>
                          <span>
                            <span className="block text-sm font-medium text-foreground group-hover:text-[var(--grenat)] transition-colors">
                              {o.label} <ArrowRight size={12} className="inline-block" aria-hidden />
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              {o.desc}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="eyebrow">Approfondir</h3>
                    <div className="mt-3 space-y-3">
                      {articles.map((a) => (
                        <Link
                          key={a.slug}
                          to="/articles/$slug"
                          params={{ slug: a.slug }}
                          className="group flex items-start gap-3 rounded-2xl border border-border/60 p-4 transition-colors hover:border-[var(--grenat)]"
                        >
                          <span
                            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                            style={{ background: "var(--accent)", color: "var(--grenat)" }}
                          >
                            <BookOpen size={16} aria-hidden />
                          </span>
                          <span className="block text-sm font-medium leading-snug text-foreground group-hover:text-[var(--grenat)] transition-colors">
                            {a.label} <ArrowRight size={12} className="inline-block" aria-hidden />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      {/* Plusieurs objectifs à la fois */}
      <section className="section border-t border-border/40">
        <div className="container-prose">
          <div
            className="rounded-3xl border p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center"
            style={{
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
            }}
          >
            <div className="md:col-span-8">
              <p className="eyebrow" style={{ color: "var(--grenat)" }}>
                Et si plusieurs objectifs se cumulent ?
              </p>
              <h2 className="display-3 mt-3 font-display">
                Vous vous reconnaissez dans plusieurs cas ? C'est le signe d'une situation normale.
              </h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Les situations réelles combinent presque toujours plusieurs objectifs : préparer la retraite
                tout en épargnant pour les enfants, faire fructifier un capital tout en pensant à sa
                transmission. L'ordre des priorités — et la répartition de l'effort entre les enveloppes —
                est précisément ce qui ne se décide pas depuis une page web. C'est le travail d'un échange
                de vive voix, avec vos chiffres réels sur la table.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link to="/contact" className="btn-primary">
                Réserver un échange <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="De l'objectif au plan"
        title="Un objectif clair mérite mieux qu'un produit pris au hasard"
        text="Un premier échange de 30 minutes, offert et sans engagement : nous cartographions votre situation, vos objectifs et vos exigences, et vous repartez avec une lecture claire de vos priorités et des pistes concrètes — que vous décidiez ensuite de travailler avec nous ou non."
      />
    </SiteLayout>
  );
}
