import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { LeadGate, hasPassedGate } from "@/components/LeadGate";
import { ArrowRight, ShieldCheck, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/outils/type-investissement")({
  head: () => ({
    meta: [
      { title: "Quel type d'investissement responsable pour vous ? | Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Objectif, horizon, fiscalité, liquidité, montant, tolérance au risque : 6 questions pour identifier 3 pistes d'enveloppes et de classes d'actifs ISR adaptées à votre situation — aucun fonds nommé.",
      },
      { property: "og:title", content: "Quel type d'investissement responsable pour vous ?" },
      {
        property: "og:description",
        content:
          "En 6 questions, identifiez les enveloppes et classes d'actifs ISR les plus pertinentes pour votre objectif, votre horizon et votre fiscalité.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/type-investissement" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils/type-investissement" }],
  }),
  component: TypeInvestissementPage,
});

/* ─────────────────────────── Données de l'outil ─────────────────────────── */

type Asset = "av" | "per" | "scpi" | "etf" | "obligations" | "solidaire" | "immobilier";

type Question = {
  q: string;
  options: { label: string; weight: Partial<Record<Asset, number>> }[];
};

const questions: Question[] = [
  {
    q: "Quel est votre objectif principal ?",
    options: [
      { label: "Faire croître mon capital sur le long terme", weight: { etf: 3, av: 1 } },
      {
        label: "Générer des revenus réguliers",
        weight: { scpi: 3, obligations: 2, immobilier: 1 },
      },
      { label: "Réduire mon impôt sur le revenu", weight: { per: 3 } },
      {
        label: "Donner du sens à mon épargne, au-delà du seul rendement",
        weight: { solidaire: 3, obligations: 1 },
      },
      { label: "Transmettre un capital dans de bonnes conditions", weight: { av: 3, scpi: 1 } },
    ],
  },
  {
    q: "Quel est votre horizon de placement ?",
    options: [
      { label: "Moins de 3 ans", weight: { solidaire: 2, av: 1 } },
      { label: "3 à 8 ans", weight: { obligations: 3, av: 2, scpi: 1 } },
      { label: "8 à 15 ans", weight: { av: 2, scpi: 2, etf: 2, per: 1 } },
      { label: "Plus de 15 ans", weight: { etf: 3, per: 2, immobilier: 3, scpi: 1 } },
    ],
  },
  {
    q: "Quel levier fiscal recherchez-vous en priorité ?",
    options: [
      { label: "Réduire mon revenu imposable dès cette année", weight: { per: 3 } },
      {
        label: "Un cadre fiscal qui s'améliore après plusieurs années de détention",
        weight: { av: 3 },
      },
      {
        label: "Optimiser la fiscalité de revenus fonciers (travaux, déficit foncier)",
        weight: { immobilier: 3 },
      },
      {
        label: "Aucune préférence : je regarde d'abord le placement lui-même",
        weight: { etf: 2, scpi: 1, solidaire: 1, obligations: 1 },
      },
    ],
  },
  {
    q: "Quel est votre besoin de liquidité ?",
    options: [
      {
        label: "Je dois pouvoir récupérer mon argent rapidement en cas de besoin",
        weight: { av: 2, etf: 2, solidaire: 2 },
      },
      {
        label: "Je peux immobiliser une partie de mon épargne plusieurs années",
        weight: { scpi: 2, obligations: 2, av: 1 },
      },
      { label: "Je suis prêt(e) à bloquer cette épargne jusqu'à ma retraite", weight: { per: 3 } },
      {
        label: "Je peux immobiliser ce capital durablement, sans besoin de le revendre vite",
        weight: { immobilier: 3, scpi: 1 },
      },
    ],
  },
  {
    q: "Quel montant envisagez-vous d'investir ?",
    options: [
      { label: "Moins de 1 000 €", weight: { solidaire: 3, etf: 2 } },
      { label: "1 000 à 10 000 €", weight: { etf: 2, av: 2, per: 1, obligations: 1 } },
      { label: "10 000 à 50 000 €", weight: { av: 2, scpi: 2, per: 2, obligations: 1 } },
      { label: "Plus de 50 000 €", weight: { scpi: 2, immobilier: 3, per: 1, av: 1 } },
    ],
  },
  {
    q: "Quelle est votre tolérance aux variations de marché ?",
    options: [
      {
        label: "Faible — je veux limiter les fluctuations",
        weight: { solidaire: 3, obligations: 2, av: 1 },
      },
      {
        label: "Modérée — j'accepte des fluctuations pour un meilleur potentiel",
        weight: { scpi: 2, av: 2, obligations: 1, immobilier: 1 },
      },
      {
        label:
          "Forte — je vise la performance long terme, quitte à accepter des baisses temporaires",
        weight: { etf: 3, per: 1 },
      },
    ],
  },
];

const labels: Record<Asset, { name: string; body: string; slug: string }> = {
  av: {
    name: "Assurance vie ISR",
    body: "L'enveloppe la plus répandue de l'épargne française : fonds euro et supports en unités de compte filtrés ISR. Elle sert aussi bien la constitution d'un capital que sa transmission, avec un cadre fiscal qui s'assouplit après plusieurs années de détention.",
    slug: "assurance-vie-isr-guide-2026",
  },
  per: {
    name: "PER — retraite responsable",
    body: "Un contrat pensé pour la retraite : les versements volontaires réduisent votre revenu imposable l'année où vous les effectuez, en échange d'une épargne bloquée jusque-là, hors cas de déblocage anticipé prévus par la loi.",
    slug: "per-ethique-optimiser-retraite",
  },
  scpi: {
    name: "SCPI durable",
    body: "De la pierre-papier gérée par une société de gestion, avec des engagements environnementaux vérifiables sur le parc détenu : des revenus potentiels réguliers, un capital non garanti, et une revente de parts qui n'est jamais instantanée.",
    slug: "scpi-isr-environnementales-panorama",
  },
  etf: {
    name: "ETF actions ISR",
    body: "Des fonds indiciels cotés qui répliquent un indice filtré selon des critères ESG (exclusions, best-in-class) : frais réduits, liquidité quotidienne, et une exposition aux marchés actions qui suppose d'en accepter les variations.",
    slug: "etf-isr-debutants",
  },
  obligations: {
    name: "Obligations vertes",
    body: "Des titres de dette qui financent des projets environnementaux identifiés par l'émetteur : un profil plus défensif que les actions, à condition de vérifier l'usage réel des fonds levés plutôt que la seule étiquette « verte ».",
    slug: "obligations-vertes-vs-obligations-classiques",
  },
  solidaire: {
    name: "Épargne solidaire",
    body: "Une partie de l'épargne finance directement des structures à utilité sociale ou environnementale (insertion, logement, économie circulaire). Le rendement financier n'est pas l'objectif premier : l'impact l'est.",
    slug: "livrets-epargne-solidaire-alternative-livret-a",
  },
  immobilier: {
    name: "Immobilier direct responsable",
    body: "L'achat d'un bien en direct, choisi ou rénové pour sa performance énergétique : un actif tangible et un patrimoine identifiable, au prix d'un ticket d'entrée élevé et d'une revente qui prend du temps.",
    slug: "investissement-immobilier-responsable-commencer",
  },
};

const reasons: Record<Asset, string[]> = {
  av: [
    "Votre horizon vous laisse le temps de profiter du cadre fiscal de l'assurance vie, plus favorable après plusieurs années de détention.",
    "Le besoin de liquidité que vous avez exprimé reste compatible avec l'assurance vie : un rachat partiel est possible, sans blocage total comme sur un PER.",
    "L'assurance vie s'adapte à des montants très variables, du versement modeste au versement important.",
  ],
  per: [
    "Réduire votre revenu imposable dès cette année correspond exactement au fonctionnement du PER, à l'entrée.",
    "Votre horizon long, tourné vers la retraite, est cohérent avec une épargne qui reste bloquée jusque-là.",
    "L'intérêt de cet avantage dépend directement de votre tranche d'imposition — un point à vérifier précisément avant de vous engager.",
  ],
  scpi: [
    "Votre recherche de revenus réguliers correspond au modèle de la SCPI, qui distribue les loyers perçus sur son parc.",
    "Votre horizon long permet d'amortir des frais d'entrée habituellement plus élevés que sur des supports cotés.",
    "Le montant que vous envisagez est cohérent avec un investissement en parts de SCPI.",
  ],
  etf: [
    "Votre objectif de croissance du capital sur le long terme est précisément le rôle des actions dans une allocation.",
    "Votre tolérance aux variations de marché est compatible avec un support qui n'offre aucune garantie en capital à court terme.",
    "Les ETF restent accessibles à des montants modestes et peuvent être investis progressivement.",
  ],
  obligations: [
    "Votre besoin de stabilité correspond à un profil plus défensif que celui des actions.",
    "Votre horizon moyen terme est adapté à une détention obligataire, ni trop courte ni trop longue.",
    "Un cadre plus prévisible peut compléter une allocation par ailleurs plus dynamique.",
  ],
  solidaire: [
    "Donner du sens à votre épargne, au-delà du seul rendement, est la vocation première de l'épargne solidaire.",
    "Votre tolérance au risque, plus prudente, correspond à des supports solidaires généralement peu volatils.",
    "L'épargne solidaire reste accessible à des montants modestes, en complément d'une épargne de précaution.",
  ],
  immobilier: [
    "Le montant que vous envisagez est cohérent avec un achat en direct, le ticket d'entrée le plus élevé de ce comparatif.",
    "Votre horizon très long est adapté à un actif qui se revend lentement.",
    "Votre volonté d'immobiliser durablement ce capital, sans besoin de le récupérer rapidement, correspond au profil de liquidité de l'immobilier direct.",
  ],
};

const rankLabel = ["1re piste", "2e piste", "3e piste"];

const assetKeys = Object.keys(labels) as Asset[];

/**
 * Score maximum atteignable par actif : pour chaque question, le poids le plus
 * élevé de cet actif parmi les options, sommé sur les 6 questions. Sert de
 * dénominateur pour un pourcentage de compatibilité honnête (la 1re piste
 * n'affiche plus mécaniquement 100 %).
 */
const maxAttainable: Record<Asset, number> = (() => {
  const acc = Object.fromEntries(assetKeys.map((k) => [k, 0])) as Record<Asset, number>;
  questions.forEach((q) => {
    assetKeys.forEach((k) => {
      acc[k] += Math.max(0, ...q.options.map((o) => o.weight[k] ?? 0));
    });
  });
  return acc;
})();

/* ────────────────────────────────── Page ────────────────────────────────── */

function TypeInvestissementPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [emailRequested, setEmailRequested] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scores = Object.fromEntries(assetKeys.map((k) => [k, 0])) as Record<Asset, number>;
  answers.forEach((a, i) => {
    if (a !== null) {
      Object.entries(questions[i].options[a].weight).forEach(([k, v]) => {
        scores[k as Asset] += v || 0;
      });
    }
  });

  const percent = (k: Asset) =>
    maxAttainable[k] > 0 ? Math.round((scores[k] / maxAttainable[k]) * 100) : 0;

  const ranked = assetKeys
    .slice()
    .sort((a, b) => scores[b] - scores[a])
    .filter((k) => scores[k] > 0)
    .slice(0, 3);

  const overview = assetKeys.slice().sort((a, b) => percent(b) - percent(a));

  const allAnswered = answers.every((a) => a !== null);

  const resetQuiz = () => {
    setAnswers(Array(questions.length).fill(null));
    setEmailRequested(false);
    setSubmitted(false);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Quiz"
        title={
          <>
            Quel type d'investissement{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              responsable
            </span>{" "}
            pour vous ?
          </>
        }
        lead="6 questions sur votre objectif, votre horizon, votre fiscalité, votre besoin de liquidité, le montant envisagé et votre tolérance au risque : repartez avec 3 pistes d'enveloppes et de classes d'actifs ISR à approfondir — avant d'en parler avec un conseiller."
      />

      <section className="section">
        <div className="container-prose max-w-3xl">
          {!emailRequested && !submitted && (
            <>
              <ol className="space-y-8">
                {questions.map((q, i) => (
                  <li key={i} className="rounded-xl border border-border bg-card p-6">
                    <p className="font-display text-lg text-foreground">
                      <span style={{ color: "var(--grenat)" }} className="mr-2">
                        {i + 1}.
                      </span>
                      {q.q}
                    </p>
                    <div className="mt-4 grid gap-2">
                      {q.options.map((c, ci) => {
                        const active = answers[i] === ci;
                        return (
                          <button
                            key={ci}
                            type="button"
                            onClick={() => {
                              const next = [...answers];
                              next[i] = ci;
                              setAnswers(next);
                            }}
                            className="text-left rounded-lg border px-4 py-3 text-sm transition-colors"
                            style={
                              active
                                ? {
                                    borderColor: "var(--grenat)",
                                    background:
                                      "color-mix(in oklch, var(--grenat) 8%, var(--card))",
                                    color: "var(--foreground)",
                                  }
                                : undefined
                            }
                          >
                            {c.label}
                          </button>
                        );
                      })}
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10 flex justify-end">
                <button
                  type="button"
                  disabled={!allAnswered}
                  onClick={() => {
                    if (hasPassedGate()) setSubmitted(true);
                    else setEmailRequested(true);
                  }}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Voir mes pistes
                </button>
              </div>
            </>
          )}

          {emailRequested && !submitted && (
            <LeadGate
              source="Quiz type d'investissement responsable"
              payload={{
                "Piste 1": ranked[0] ? labels[ranked[0]].name : "",
                "Piste 2": ranked[1] ? labels[ranked[1]].name : "",
                "Piste 3": ranked[2] ? labels[ranked[2]].name : "",
              }}
              onSuccess={() => {
                setEmailRequested(false);
                setSubmitted(true);
              }}
            />
          )}

          {submitted && (
            <div className="space-y-6">
              <div className="rounded-2xl border p-8" style={{ borderColor: "var(--grenat)" }}>
                <p className="eyebrow">Vos pistes</p>
                <h2 className="display-3 font-display mt-2 text-foreground">
                  3 pistes d'investissement responsable alignées avec votre profil
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Ce sont des pistes indicatives, pas une recommandation : elles se construisent à
                  partir de vos seules réponses à ce quiz. Seul un échange avec un conseiller permet
                  de vérifier ce qui convient réellement à votre situation complète.
                </p>
              </div>

              {ranked.map((k, idx) => (
                <div key={k} className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm"
                      style={{
                        background: "var(--gradient-grenat)",
                        color: "var(--grenat-foreground)",
                      }}
                    >
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {rankLabel[idx]}
                      </p>
                      <h3 className="font-display text-xl text-foreground mt-0.5">
                        {labels[k].name}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed text-sm">
                        {labels[k].body}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Compatibilité indicative :{" "}
                        <strong className="text-foreground">{percent(k)} %</strong>
                      </p>
                    </div>
                  </div>

                  <div
                    className="rounded-lg border p-4"
                    style={{
                      borderColor: "color-mix(in oklch, var(--grenat) 20%, transparent)",
                      background: "color-mix(in oklch, var(--grenat) 5%, transparent)",
                    }}
                  >
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Pourquoi cette piste correspond à votre profil
                    </p>
                    <ul className="space-y-1.5">
                      {reasons[k].map((r, ri) => (
                        <li
                          key={ri}
                          className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed"
                        >
                          <span className="mt-0.5 shrink-0" style={{ color: "var(--grenat)" }}>
                            ◆
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-1">
                    <Link
                      to="/articles/$slug"
                      params={{ slug: labels[k].slug }}
                      className="text-sm font-medium text-foreground hover:text-[var(--grenat)] transition-colors inline-flex items-center gap-1.5"
                    >
                      Lire le guide complet sur {labels[k].name} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}

              <div className="rounded-xl border border-border bg-card p-6">
                <p className="eyebrow">Vue d'ensemble</p>
                <h3 className="font-display text-xl text-foreground mt-1">
                  Compatibilité des 7 classes d'actifs avec votre profil
                </h3>
                <div className="mt-5 space-y-4">
                  {overview.map((k) => {
                    const p = percent(k);
                    return (
                      <div key={k}>
                        <div className="flex items-baseline justify-between gap-3 mb-1.5">
                          <Link
                            to="/articles/$slug"
                            params={{ slug: labels[k].slug }}
                            className="text-sm font-medium text-foreground hover:text-[var(--grenat)] transition-colors"
                          >
                            {labels[k].name}
                          </Link>
                          <span className="text-sm text-muted-foreground tabular-nums shrink-0">
                            {p} %
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-border/60 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${p}%`,
                              background: "var(--gradient-grenat)",
                              opacity: ranked.includes(k) ? 1 : 0.35,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                  Pourcentages indicatifs, calculés sur le score maximal atteignable par chaque
                  classe d'actifs dans ce questionnaire. Cliquez sur une piste pour lire son guide
                  complet.
                </p>
              </div>

              <details className="rounded-xl border border-border bg-card px-6 py-4 group">
                <summary className="cursor-pointer text-sm font-medium text-foreground list-none flex items-center justify-between gap-3">
                  Vos réponses
                  <span className="text-xs text-muted-foreground group-open:hidden">Afficher</span>
                  <span className="text-xs text-muted-foreground hidden group-open:inline">
                    Masquer
                  </span>
                </summary>
                <ol className="mt-4 space-y-3">
                  {questions.map((q, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      <p className="text-muted-foreground">
                        <span style={{ color: "var(--grenat)" }} className="mr-1.5">
                          {i + 1}.
                        </span>
                        {q.q}
                      </p>
                      <p className="text-foreground font-medium mt-0.5 pl-5">
                        {answers[i] !== null ? q.options[answers[i]!].label : "—"}
                      </p>
                    </li>
                  ))}
                </ol>
              </details>

              <div className="rounded-xl border border-border bg-card p-6 flex items-start gap-3">
                <ShieldCheck
                  className="shrink-0 mt-0.5"
                  size={18}
                  style={{ color: "var(--grenat)" }}
                />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Les supports en unités de compte, en SCPI ou en actions ne garantissent pas le
                  capital investi et peuvent perdre de la valeur. Ces pistes sont génériques et non
                  personnalisées : elles ne remplacent ni le document d'informations clés (DIC) de
                  chaque support, ni un échange direct avec un conseiller.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/contact" className="btn-primary">
                  Échanger avec un conseiller <ArrowRight size={15} />
                </Link>
                <button type="button" onClick={resetQuiz} className="btn-ghost">
                  <RotateCcw size={15} /> Refaire le quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA
        eyebrow="Aller plus loin"
        title="Un quiz donne une direction, pas une décision"
        text="Vos pistes tiennent compte de votre objectif, de votre horizon et de votre fiscalité déclarés — pas de votre situation complète. Réservez un premier échange offert pour vérifier ce qui vous correspond vraiment, montant et enveloppe compris."
      />
    </SiteLayout>
  );
}
