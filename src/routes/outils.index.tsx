import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import {
  Calculator,
  ChartPie,
  Compass,
  Sparkles,
  Stethoscope,
  ArrowRight,
  ArrowLeft,
  Scale,
  PiggyBank,
  Hourglass,
  Receipt,
  ShieldCheck,
  TrendingUp,
  Clock,
  RotateCcw,
  Tags,
  Gauge,
  Home,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/outils/")({
  head: () => ({
    meta: [
      { title: "Outils & simulateurs éthiques | Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Onze outils gratuits pour piloter une épargne réellement responsable : diagnostic, profil investisseur, simulateur, portefeuilles ISR types, retraite, PER, décodeur de labels, empreinte carbone. Laissez-vous guider vers le bon outil en deux questions.",
      },
      { property: "og:title", content: "Outils & simulateurs éthiques" },
      {
        property: "og:description",
        content:
          "Le bon outil au bon moment : diagnostic, simulateurs, décodage des labels, comparateurs — guidage en deux questions.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils" }],
  }),
  component: OutilsIndex,
});

/* ────────────────────────── Guide interactif ────────────────────────── */

type Piste = {
  to: string;
  title: string;
  why: string;
  duration: string;
  then?: { to: string; label: string };
};

type Q2 = {
  question: string;
  options: { label: string; piste: Piste }[];
};

type Intent = {
  icon: LucideIcon;
  label: string;
  q2?: Q2;
  piste?: Piste;
};

const PISTES = {
  diagnostic: {
    to: "/outils/diagnostic",
    title: "Diagnostic patrimonial et cohérence de valeurs",
    why: "12 points de contrôle qui croisent votre situation patrimoniale et la cohérence réelle de votre épargne avec vos exigences. Vous repartez avec un double score et vos 3 priorités immédiates.",
    duration: "≈ 4 min",
    then: { to: "/outils/profil-investisseur", label: "Puis déterminez votre profil de risque" },
  },
  profil: {
    to: "/outils/profil-investisseur",
    title: "Profil investisseur",
    why: "Une série de questions pour mesurer votre capacité et votre tolérance au risque — le préalable indispensable avant toute allocation, responsable ou non.",
    duration: "≈ 3 min",
    then: { to: "/outils/type-investissement", label: "Puis identifiez les enveloppes et actifs adaptés" },
  },
  typeInvest: {
    to: "/outils/type-investissement",
    title: "Quel type d'investissement responsable ?",
    why: "Selon vos objectifs, votre horizon et votre fiscalité, identifiez les enveloppes et les classes d'actifs ISR les plus pertinentes pour votre situation.",
    duration: "≈ 2 min",
    then: { to: "/outils/simulateur", label: "Puis projetez votre épargne dans le temps" },
  },
  simulateur: {
    to: "/outils/simulateur",
    title: "Projection d'épargne — assurance vie & PER",
    why: "Versements, durée, frais réels, fiscalité complète de l'assurance vie et du PER : visualisez votre épargne an par an, en brut et en net.",
    duration: "≈ 2 min",
    then: { to: "/outils/portefeuilles-types", label: "Puis découvrez des exemples de portefeuilles ISR" },
  },
  retraite: {
    to: "/outils/retraite",
    title: "Combien pour ma retraite ?",
    why: "Partez du revenu souhaité à la retraite pour calculer le capital cible et l'effort d'épargne mensuel, en supports vérifiés.",
    duration: "≈ 2 min",
    then: { to: "/outils/per-isr", label: "Le PER reste le levier fiscal le plus direct pour y arriver" },
  },
  perIsr: {
    to: "/outils/per-isr",
    title: "PER ISR — économie d'impôt & capital",
    why: "Chaque versement PER réduit votre impôt dès cette année. Simulez l'économie exacte selon votre tranche d'imposition et le capital projeté en supports ISR.",
    duration: "≈ 2 min",
    then: { to: "/outils/retraite", label: "Puis dimensionnez l'effort d'épargne global" },
  },
  decodeurLabel: {
    to: "/outils/decodeur-label",
    title: "Décodeur de labels",
    why: "Label ISR, Greenfin, Finansol : ce que chaque label garantit vraiment, ce qu'il ne garantit pas, et comment vérifier qu'un fonds l'a réellement obtenu.",
    duration: "≈ 3 min",
  },
  empreinteCarbone: {
    to: "/outils/empreinte-carbone-epargne",
    title: "Empreinte carbone de votre épargne",
    why: "Un ordre de grandeur pédagogique de ce que financent réellement vos placements actuels — et l'effet d'une réallocation vers des supports vérifiés.",
    duration: "≈ 3 min",
  },
} satisfies Record<string, Piste>;

const intents: Intent[] = [
  {
    icon: Stethoscope,
    label: "Faire le point sur ma situation",
    piste: PISTES.diagnostic,
  },
  {
    icon: Sparkles,
    label: "Savoir dans quoi investir",
    q2: {
      question: "Connaissez-vous déjà votre tolérance au risque ?",
      options: [
        { label: "Pas vraiment", piste: PISTES.profil },
        { label: "Oui, je la connais", piste: PISTES.typeInvest },
      ],
    },
  },
  {
    icon: TrendingUp,
    label: "Projeter la croissance de mon épargne",
    piste: PISTES.simulateur,
  },
  {
    icon: Hourglass,
    label: "Préparer ma retraite",
    q2: {
      question: "Payez-vous plus de 2 500 € d'impôt sur le revenu par an ?",
      options: [
        {
          label: "Oui",
          piste: {
            ...PISTES.perIsr,
            why: "À ce niveau d'imposition, le PER est un levier à regarder en priorité : chaque versement réduit votre impôt dès cette année, tout en capitalisant pour la retraite en supports ISR vérifiés.",
            then: { to: "/outils/retraite", label: "Puis calculez le capital retraite dont vous aurez besoin" },
          },
        },
        { label: "Non / je ne sais pas", piste: PISTES.retraite },
      ],
    },
  },
  {
    icon: Receipt,
    label: "Payer moins d'impôts",
    q2: {
      question: "Quelle est votre tranche marginale d'imposition (TMI) ?",
      options: [
        {
          label: "11 % ou moins",
          piste: {
            ...PISTES.perIsr,
            why: "À TMI faible, la déduction PER rapporte peu — mais le PER assurantiel reste un outil de transmission utile. Le simulateur vous montre les deux angles avant de trancher.",
            then: undefined,
          },
        },
        {
          label: "30 %",
          piste: {
            ...PISTES.perIsr,
            why: "À TMI 30 %, 1 000 € versés sur un PER ISR ne vous coûtent réellement que 700 €. Simulez votre économie exacte et le capital projeté.",
            then: {
              to: "/outils/comparateur-enveloppes",
              label: "Puis comparez le PER aux autres enveloppes disponibles",
            },
          },
        },
        {
          label: "41 % ou 45 %",
          piste: {
            ...PISTES.perIsr,
            why: "À votre TMI, chaque versement PER est déduit à 41-45 % — l'avantage fiscal est maximal. Reste à dimensionner l'effort d'épargne qui va avec.",
            then: { to: "/outils/retraite", label: "Puis calculez le capital retraite dont vous avez besoin" },
          },
        },
      ],
    },
  },
  {
    icon: ShieldCheck,
    label: "Vérifier qu'un placement est vraiment responsable",
    q2: {
      question: "Que voulez-vous vérifier ?",
      options: [
        { label: "Un label", piste: PISTES.decodeurLabel },
        { label: "Mon épargne globale", piste: PISTES.empreinteCarbone },
        { label: "Ma situation", piste: PISTES.diagnostic },
      ],
    },
  },
];

function GuideWizard() {
  const [intentIdx, setIntentIdx] = useState<number | null>(null);
  const [piste, setPiste] = useState<Piste | null>(null);

  const intent = intentIdx !== null ? intents[intentIdx] : null;

  const reset = () => {
    setIntentIdx(null);
    setPiste(null);
  };

  const pickIntent = (i: number) => {
    setIntentIdx(i);
    const it = intents[i];
    if (it.piste) setPiste(it.piste);
  };

  return (
    <section className="section pt-0">
      <div className="container-prose max-w-3xl">
        <div
          className="rounded-2xl border bg-card p-7 md:p-9 shadow-sm"
          style={{ borderColor: "color-mix(in oklch, var(--grenat) 40%, transparent)" }}
        >
          <p className="eyebrow" style={{ color: "var(--grenat)" }}>
            Laissez-vous guider
          </p>

          {piste === null && intent === null && (
            <>
              <h2 className="font-display text-2xl mt-2 text-foreground">
                Qu'est-ce qui vous amène aujourd'hui ?
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {intents.map((it, i) => (
                  <button
                    key={it.label}
                    type="button"
                    onClick={() => pickIntent(i)}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 text-left text-sm font-medium text-foreground hover:border-[var(--grenat)] transition-colors"
                  >
                    <span
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
                    >
                      <it.icon size={17} />
                    </span>
                    {it.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {piste === null && intent !== null && intent.q2 && (
            <>
              <h2 className="font-display text-2xl mt-2 text-foreground">{intent.q2.question}</h2>
              <div className="mt-6 grid gap-3">
                {intent.q2.options.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setPiste(opt.piste)}
                    className="rounded-xl border border-border bg-background px-4 py-3.5 text-left text-sm font-medium text-foreground hover:border-[var(--grenat)] transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={reset}
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={14} /> Retour
              </button>
            </>
          )}

          {piste !== null && (
            <div className="animate-in fade-in duration-300">
              <h2 className="font-display text-2xl mt-2 text-foreground">Votre piste pour démarrer</h2>
              <div
                className="mt-5 rounded-xl border p-6"
                style={{
                  borderColor: "var(--grenat)",
                  background: "color-mix(in oklch, var(--grenat) 5%, transparent)",
                }}
              >
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="font-display text-xl text-foreground">{piste.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={13} /> {piste.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{piste.why}</p>
                <Link to={piste.to} className="btn-primary mt-5 inline-flex items-center gap-2">
                  Ouvrir l'outil <ArrowRight size={15} />
                </Link>
                {piste.then && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Ensuite :{" "}
                    <Link to={piste.then.to} className="font-medium hover:underline" style={{ color: "var(--grenat)" }}>
                      {piste.then.label}
                    </Link>
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={reset}
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw size={14} /> Recommencer
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Catalogue en 3 étapes ─────────────────────── */

type Tool = {
  to: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  body: string;
  duration: string;
  outcome: string;
};

const steps: { step: string; heading: string; sub: string; tools: Tool[] }[] = [
  {
    step: "Étape 1",
    heading: "Faire le point",
    sub: "Avant d'investir : où en êtes-vous, et quel investisseur êtes-vous ?",
    tools: [
      {
        to: "/outils/diagnostic",
        icon: Stethoscope,
        tag: "Diagnostic",
        title: "Diagnostic patrimonial et cohérence de valeurs",
        body: "12 points de contrôle pour évaluer votre situation patrimoniale et la cohérence réelle de votre épargne avec vos exigences.",
        duration: "4 min",
        outcome: "Double score + vos 3 priorités immédiates",
      },
      {
        to: "/outils/profil-investisseur",
        icon: Compass,
        tag: "Quiz",
        title: "Profil investisseur",
        body: "Une série de questions pour mesurer votre capacité et votre tolérance au risque, votre horizon et votre profil patrimonial.",
        duration: "3 min",
        outcome: "Votre profil de risque + une allocation ISR de référence",
      },
    ],
  },
  {
    step: "Étape 2",
    heading: "Choisir et dimensionner",
    sub: "Quelles enveloppes, quels actifs, combien, sur quelle durée — et avec quel avantage fiscal.",
    tools: [
      {
        to: "/outils/type-investissement",
        icon: Sparkles,
        tag: "Quiz",
        title: "Quel type d'investissement responsable ?",
        body: "Selon vos objectifs, découvrez quelles enveloppes et quels actifs ISR correspondent réellement à votre situation.",
        duration: "2 min",
        outcome: "Vos pistes de placement, avec les raisons",
      },
      {
        to: "/outils/simulateur",
        icon: Calculator,
        tag: "Simulateur",
        title: "Projection d'épargne — assurance vie & PER",
        body: "Projetez votre épargne an par an, frais d'entrée et de gestion inclus, avec la fiscalité complète de l'assurance vie et du PER.",
        duration: "2 min",
        outcome: "Projection année par année, nette de frais et de fiscalité",
      },
      {
        to: "/outils/portefeuilles-types",
        icon: ChartPie,
        tag: "Portefeuilles",
        title: "Portefeuilles ISR types",
        body: "Des exemples d'allocations par profil de risque, construits en supports ISR — pour visualiser une répartition cohérente.",
        duration: "2 min",
        outcome: "Une fiche d'allocation par profil type",
      },
      {
        to: "/outils/retraite",
        icon: Hourglass,
        tag: "Retraite",
        title: "Combien pour ma retraite ?",
        body: "De la rente cible au capital nécessaire, et à l'effort d'épargne mensuel — en supports responsables.",
        duration: "2 min",
        outcome: "Votre effort d'épargne mensuel cible",
      },
      {
        to: "/outils/per-isr",
        icon: PiggyBank,
        tag: "Fiscalité",
        title: "PER ISR — économie d'impôt & capital",
        body: "Économie d'impôt immédiate, capital projeté, transmission : simulez les leviers du PER investi en supports ISR.",
        duration: "2 min",
        outcome: "Votre économie d'impôt et l'effort d'épargne réel",
      },
      {
        to: "/outils/comparateur-enveloppes",
        icon: Scale,
        tag: "Comparatif",
        title: "Comparateur d'enveloppes",
        body: "Assurance vie, PER, SCPI, compte-titres : comparez fiscalité, disponibilité et liquidité pour choisir la bonne enveloppe.",
        duration: "3 min",
        outcome: "Un comparatif objectif des enveloppes selon votre objectif",
      },
    ],
  },
  {
    step: "Étape 3",
    heading: "Vérifier et piloter",
    sub: "Un label ne se prend pas pour argent comptant : il se vérifie, et s'entretient dans la durée.",
    tools: [
      {
        to: "/outils/decodeur-label",
        icon: Tags,
        tag: "Labels",
        title: "Décodeur de labels",
        body: "Label ISR, Greenfin, Finansol : ce que chaque label garantit vraiment, ce qu'il ne garantit pas, et comment le vérifier vous-même.",
        duration: "3 min",
        outcome: "Une grille de lecture label par label",
      },
      {
        to: "/outils/empreinte-carbone-epargne",
        icon: Gauge,
        tag: "Impact",
        title: "Empreinte carbone de votre épargne",
        body: "Un ordre de grandeur pédagogique de ce que financent réellement vos placements actuels, et l'effet d'une réallocation vers des supports vérifiés.",
        duration: "3 min",
        outcome: "Un ordre de grandeur de votre empreinte + les leviers",
      },
      {
        to: "/outils/comparateur-eco-ptz",
        icon: Home,
        tag: "Financement",
        title: "Comparateur éco-PTZ",
        body: "Éco-prêt à taux zéro pour la rénovation énergétique : conditions, travaux éligibles et cumul avec les autres aides, décodés simplement.",
        duration: "3 min",
        outcome: "Votre éligibilité et le cumul d'aides possible",
      },
    ],
  },
];

function OutilsIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outils gratuits"
        title={
          <>
            Le bon outil,{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              au bon moment
            </span>
            .
          </>
        }
        lead="Onze outils en libre accès pour clarifier votre situation, vérifier ce que vos placements financent vraiment, et dimensionner vos choix. Laissez-vous guider en deux questions — ou choisissez directement dans le parcours ci-dessous."
      />

      <GuideWizard />

      {steps.map((g) => (
        <section key={g.heading} className="section pb-6">
          <div className="container-prose">
            <div className="mb-6">
              <p className="eyebrow" style={{ color: "var(--grenat)" }}>
                {g.step}
              </p>
              <h2 className="font-display text-2xl text-foreground mt-1">{g.heading}</h2>
              <p className="text-sm text-muted-foreground mt-1.5">{g.sub}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {g.tools.map((t) => (
                <Link
                  key={t.to}
                  to={t.to}
                  className="group rounded-2xl border border-border bg-card p-7 hover:border-[var(--grenat)] transition-colors flex flex-col"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
                      style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
                    >
                      <t.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="eyebrow !mb-0">{t.tag}</p>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                          <Clock size={12} /> {t.duration}
                        </span>
                      </div>
                      <h3 className="font-display text-xl mt-1.5 text-foreground">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                      <p className="mt-3 text-xs text-foreground/75">
                        <span className="font-semibold" style={{ color: "var(--grenat)" }}>
                          Vous obtenez :
                        </span>{" "}
                        {t.outcome}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-[var(--grenat)]">
                        Ouvrir l'outil <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTA
        eyebrow="Et après ces pistes ?"
        title="Passez ces résultats au filtre d'un conseiller"
        text="Ces outils donnent une première lecture, à vous. Un échange de 30 minutes nous permet ensuite de la confronter à vos chiffres réels et à vos contraintes — sans engagement. Premier rendez-vous offert."
      />
    </SiteLayout>
  );
}
