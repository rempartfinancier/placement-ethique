import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTA } from "@/components/CTA";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import {
  ArrowRight,
  SearchCheck,
  BookOpen,
  CalendarCheck,
  ShieldCheck,
  Eye,
  Scale,
  Landmark,
  Building2,
  LineChart,
  PiggyBank,
  HandCoins,
  FileCheck2,
  Calculator,
  Tags,
  Gauge,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Placement-éthique.fr — L'investissement éthique, sans le vernis" },
      {
        name: "description",
        content:
          "Cabinet de gestion de patrimoine spécialisé en investissement responsable : nous vérifions ce que les labels ISR, Greenfin et SFDR garantissent vraiment avant de vous orienter. Assurance vie, PER, SCPI — sans greenwashing.",
      },
      {
        property: "og:title",
        content: "Placement-éthique.fr — L'investissement éthique, sans le vernis",
      },
      { property: "og:url", content: "https://placement-ethique.fr/" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/" }],
  }),
  component: HomePage,
});

/* ─────────────────────────── Données de la page ─────────────────────────── */

const methode = [
  {
    icon: SearchCheck,
    title: "Vérifier",
    body: "Nous lisons les rapports réglementaires (SFDR, DIC, inventaires de portefeuille), pas les brochures commerciales. Un fonds « vert » n'entre dans nos pistes qu'après vérification de ce qu'il détient réellement.",
  },
  {
    icon: BookOpen,
    title: "Expliquer",
    body: "Label ISR, Greenfin, Finansol, Article 8 ou 9 : chaque tampon garantit quelque chose de précis — et ne garantit pas le reste. Nous décodons ces nuances en clair, pour que vous jugiez par vous-même.",
  },
  {
    icon: CalendarCheck,
    title: "Accompagner dans la durée",
    body: "Un fonds peut perdre son label, changer de stratégie ou être reclassé. Notre suivi annuel vérifie que votre épargne reste alignée avec vos exigences — pas seulement le jour de la signature.",
  },
];

const constats = [
  {
    chiffre: "Des centaines",
    label: "de fonds déclassés",
    body: "Fin 2022, plusieurs centaines de fonds européens ont été reclassés du niveau le plus exigeant de la réglementation SFDR (Article 9) vers un niveau inférieur, d'après les recensements de Morningstar. Les promesses avaient dépassé les portefeuilles.",
  },
  {
    chiffre: "3 labels",
    label: "aux promesses différentes",
    body: "Label ISR, Greenfin, Finansol : trois référentiels français qui ne mesurent ni la même chose, ni avec la même exigence. Les confondre, c'est acheter une promesse qu'on n'a pas comprise.",
  },
  {
    chiffre: "0 audit",
    label: "fait par les brochures",
    body: "Le document commercial d'un fonds n'est pas contrôlé comme son rapport réglementaire. Ce qui est vérifiable se trouve dans le DIC, l'inventaire et le reporting SFDR — c'est là que nous regardons.",
  },
];

const placements = [
  {
    icon: ShieldCheck,
    title: "Assurance vie responsable",
    body: "L'enveloppe reine de l'épargne française, investie en supports ISR vérifiés — avec sa fiscalité avantageuse après 8 ans.",
  },
  {
    icon: PiggyBank,
    title: "PER — retraite responsable",
    body: "Déduction fiscale immédiate, capital pour la retraite, et des supports alignés avec vos valeurs.",
  },
  {
    icon: Building2,
    title: "SCPI & immobilier durable",
    body: "Pierre-papier labellisée ISR, rénovation énergétique, immobilier de santé ou d'éducation : du tangible, du traçable.",
  },
  {
    icon: LineChart,
    title: "Actions & ETF ISR",
    body: "Fonds indiciels et actifs filtrés ESG — en comprenant la méthodologie de filtrage, pas seulement le nom du produit.",
  },
  {
    icon: HandCoins,
    title: "Épargne solidaire",
    body: "Fonds de partage et finance solidaire labellisée Finansol : une partie du rendement finance directement des projets à impact social.",
  },
  {
    icon: FileCheck2,
    title: "Obligations vertes",
    body: "Les green bonds financent des projets environnementaux identifiés — à condition de vérifier l'usage réel des fonds.",
  },
];

const outilsVedettes = [
  {
    to: "/outils/simulateur",
    icon: Calculator,
    title: "Projection d'épargne",
    body: "Votre épargne an par an, frais réels et fiscalité complète de l'assurance vie et du PER incluses.",
  },
  {
    to: "/outils/decodeur-label",
    icon: Tags,
    title: "Décodeur de labels",
    body: "Ce que chaque label garantit vraiment, ce qu'il ne garantit pas, et comment vérifier qu'un fonds l'a.",
  },
  {
    to: "/outils/empreinte-carbone-epargne",
    icon: Gauge,
    title: "Empreinte carbone de votre épargne",
    body: "Un ordre de grandeur pédagogique de ce que financent vos placements actuels — et le levier d'une réallocation.",
  },
];

/* ────────────────────────────────── Page ────────────────────────────────── */

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-encre)" }}>
        <div
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-grenat)" }}
          aria-hidden
        />
        <div className="container-prose relative z-10 pt-20 pb-24 md:pt-32 md:pb-32 text-primary-foreground">
          <p className="eyebrow fade-up" style={{ color: "var(--grenat-clair)" }}>
            Gestion de patrimoine · Investissement responsable
          </p>
          <h1 className="display-1 mt-6 max-w-4xl fade-up text-white">
            Votre épargne finance quelque chose.{" "}
            <span className="italic" style={{ color: "var(--grenat-clair)" }}>
              Savez-vous quoi ?
            </span>
          </h1>
          <p
            className="lead mt-6 max-w-2xl fade-up"
            style={{ color: "color-mix(in oklch, white 82%, transparent)" }}
          >
            L'investissement « éthique » est devenu un argument marketing avant d'être une méthode.
            Nous sommes un cabinet de gestion de patrimoine qui fait l'inverse : vérifier ce que les
            labels garantissent vraiment, sourcer chaque affirmation, et vous dire clairement ce qui
            est solide — et ce qui ne l'est pas.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 fade-up">
            <Link to="/contact" className="btn-grenat">
              Réserver un premier échange offert <ArrowRight size={16} />
            </Link>
            <Link
              to="/outils"
              className="btn-ghost"
              style={{ color: "white", borderColor: "color-mix(in oklch, white 25%, transparent)" }}
            >
              Explorer nos outils gratuits
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/65 fade-up">
            <span className="inline-flex items-center gap-2">
              <Landmark size={15} aria-hidden /> EXP Capital — ORIAS n° 25005915
            </span>
            <span className="inline-flex items-center gap-2">
              <Eye size={15} aria-hidden /> Rémunération publiée, ligne par ligne
            </span>
            <span className="inline-flex items-center gap-2">
              <Scale size={15} aria-hidden /> Aucun fonds « maison » à défendre
            </span>
          </div>
        </div>
      </section>

      {/* Le constat */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <p className="eyebrow">Le constat</p>
          <h2 className="display-2 mt-4 max-w-3xl">
            Le greenwashing n'est pas une opinion. C'est un risque documenté.
          </h2>
          <p className="lead mt-5 max-w-2xl">
            Beaucoup d'épargnants qui veulent que leur argent serve leurs valeurs finissent par
            renoncer — non par manque de produits, mais par manque de confiance. Trois faits
            expliquent pourquoi cette méfiance est légitime.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {constats.map((c) => (
              <article key={c.label} className="card-paper">
                <p className="font-display text-4xl" style={{ color: "var(--grenat)" }}>
                  {c.chiffre}
                </p>
                <p className="mt-1 font-medium text-foreground">{c.label}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* La méthode */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <div className="text-center mb-14">
            <p className="eyebrow justify-center">Notre méthode</p>
            <h2 className="display-2 mt-4">Vérifier. Expliquer. Accompagner.</h2>
            <p className="lead mt-5 max-w-2xl mx-auto">
              La même rigueur qu'un gestionnaire de patrimoine applique à la fiscalité ou à
              l'allocation d'actifs — appliquée à la réalité extra-financière de vos placements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {methode.map(({ icon: Icon, title, body }, i) => (
              <article key={title} className="card-paper relative">
                <span
                  className="absolute top-6 right-6 font-display text-5xl opacity-10 select-none"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: "var(--accent)", color: "var(--grenat)" }}
                >
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="font-display text-2xl mt-5">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">Les solutions</p>
              <h2 className="display-2 mt-4 max-w-2xl">
                Des placements responsables — au sens vérifiable du terme
              </h2>
            </div>
            <Link to="/placements" className="btn-ghost shrink-0 self-start md:self-auto">
              Voir tous les placements <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {placements.map(({ icon: Icon, title, body }) => (
              <Link key={title} to="/placements" className="card-paper group flex flex-col">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--accent)", color: "var(--grenat)" }}
                >
                  <Icon size={18} aria-hidden />
                </span>
                <h3 className="font-display text-xl mt-4">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-[var(--grenat)] transition-colors">
                  En savoir plus <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outils */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <div className="text-center mb-12">
            <p className="eyebrow justify-center">Avant même de nous parler</p>
            <h2 className="display-2 mt-4">Des outils gratuits, sans inscription forcée</h2>
            <p className="lead mt-5 max-w-2xl mx-auto">
              Faites vos propres calculs et vos propres vérifications. Nos outils donnent des pistes
              — la lecture de votre situation complète se fait ensuite, de vive voix.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {outilsVedettes.map(({ to, icon: Icon, title, body }) => (
              <Link key={to} to={to} className="card-paper group">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--gradient-grenat)",
                    color: "var(--grenat-foreground)",
                  }}
                >
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="font-display text-xl mt-4">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-[var(--grenat)] transition-colors">
                  Ouvrir l'outil <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guide gratuit — lead magnet PDF */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <div
            className="rounded-3xl border p-8 md:p-12 grid md:grid-cols-12 gap-10 items-center"
            style={{
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
            }}
          >
            <div className="md:col-span-7">
              <p className="eyebrow" style={{ color: "var(--grenat)" }}>
                Guide gratuit
              </p>
              <h2 className="display-3 mt-3 max-w-xl">
                Le diagnostic documentaire noté sur 40 pour votre contrat « ISR »
              </h2>
              <p className="mt-4 text-foreground/80 leading-relaxed max-w-xl">
                Vérifiez en 30 minutes si votre assurance vie ou votre PER étiqueté « ISR » est
                réellement transparent — ou juste bien marketé. La checklist des 8 documents à
                réunir (avec le modèle d'email pour les obtenir si vous ne les avez pas encore), la
                grille de notation, et la lecture de votre score. En PDF, sans jargon.
              </p>
            </div>
            <div className="md:col-span-5">
              <LeadMagnetForm />
              <Link
                to="/guide"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[var(--grenat)] transition-colors"
              >
                Voir le sommaire complet du guide <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparence rémunération */}
      <section className="section border-b border-border/40">
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
                Transparence radicale
              </p>
              <h2 className="display-3 mt-3 font-display">
                Qui nous paie, combien, et pourquoi — publié en clair
              </h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Nos rendez-vous sont offerts : nous sommes rémunérés par nos partenaires (assureurs,
                sociétés de gestion) en tant qu'apporteurs d'affaires, comme un courtier. Un site
                qui vous parle d'éthique vous doit d'abord cette transparence-là : notre grille de
                rémunération est publique, solution par solution, chiffre par chiffre.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link to="/tarifs" className="btn-primary">
                Lire notre grille complète <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Les conseillers */}
      <section className="section">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <p className="eyebrow">Qui vous répond</p>
              <h2 className="display-2 mt-4">
                Deux conseillers. Pas d'algorithme, pas de call-center.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Derrière ce site, deux conseillers en gestion de patrimoine qui pensent qu'un
                placement doit être lisible, structuré et cohérent avec vos valeurs — et que cette
                cohérence se vérifie, elle ne se proclame pas.
              </p>
              <Link to="/a-propos" className="btn-ghost mt-7">
                Découvrir le cabinet <ArrowRight size={15} />
              </Link>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-5">
              {[
                {
                  img: "/sebastien.jpeg",
                  nom: "Sébastien Petrisot",
                  role: "Responsable relations investisseurs",
                  fallback: "Sebastien+Petrisot",
                },
                {
                  img: "/alexandre.jpg",
                  nom: "Alexandre Pollet",
                  role: "Communication, contenu et partenariats",
                  fallback: "Alexandre+Pollet",
                },
              ].map((p) => (
                <div key={p.nom} className="card-paper flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-muted overflow-hidden border-4 border-background shadow-md">
                    <img
                      src={p.img}
                      alt={p.nom}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${p.fallback}&background=random`;
                      }}
                    />
                  </div>
                  <h3 className="font-display text-xl mt-4">{p.nom}</h3>
                  <p className="text-sm mt-1" style={{ color: "var(--grenat)" }}>
                    {p.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
