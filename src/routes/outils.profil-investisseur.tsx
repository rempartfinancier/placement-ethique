// ============================================================
// QUIZ — PROFIL INVESTISSEUR (capacité + tolérance au risque)
// ------------------------------------------------------------
// RÈGLE PRODUIT NON NÉGOCIABLE : ce quiz calcule un profil de RISQUE
// (Prudent / Équilibré / Dynamique) à partir des réponses du visiteur.
// Il ne calcule JAMAIS une allocation personnalisée. Le résultat renvoie
// systématiquement vers /outils/portefeuilles-types comme EXEMPLE
// générique — jamais « votre allocation ». Les deux questions
// facultatives sur les priorités extra-financières (E/S/G, exclusions)
// n'influencent ni le score ni le profil : elles ne filtrent aucun
// fonds automatiquement, elles nourrissent l'échange avec le
// conseiller. Toute sortie de cet outil est une « piste », jamais une
// « recommandation » (réservée au conseil écrit humain).
// ============================================================

import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, ShieldAlert } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { LeadGate, hasPassedGate } from "@/components/LeadGate";
import { ResultsActions } from "@/components/ResultsActions";
import type { PdfDoc } from "@/lib/pdf";
import {
  AVERTISSEMENT_PROFIL_TYPE,
  PROFILS_TYPES,
  type ProfilTypeId,
} from "@/lib/simulateur-placements/profils";

export const Route = createFileRoute("/outils/profil-investisseur")({
  head: () => ({
    meta: [
      {
        title: "Profil investisseur éthique : quiz gratuit en 10 questions | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Dix questions pour situer votre capacité et votre tolérance au risque, votre horizon de placement, et — en option — vos priorités extra-financières. Résultat : une piste, jamais une allocation toute faite.",
      },
      { property: "og:title", content: "Quel est votre profil investisseur éthique ?" },
      {
        property: "og:description",
        content:
          "10 questions de risque + 2 facultatives sur vos priorités E/S/G. Une piste en moins de 5 minutes.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/profil-investisseur" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils/profil-investisseur" }],
  }),
  component: ProfilInvestisseurPage,
});

/* ─────────────────────────── Les 10 questions notées ─────────────────────────── */

type Choice = { label: string; score: number };
type Question = { q: string; short: string; choices: Choice[] };

const questions: Question[] = [
  {
    q: "Quel est votre horizon de placement principal ?",
    short: "Horizon de placement",
    choices: [
      { label: "Moins de 3 ans", score: 0 },
      { label: "3 à 8 ans", score: 1 },
      { label: "8 à 15 ans", score: 2 },
      { label: "Plus de 15 ans", score: 3 },
    ],
  },
  {
    q: "Votre épargne de précaution couvre…",
    short: "Épargne de précaution",
    choices: [
      { label: "Moins d'1 mois de charges", score: 0 },
      { label: "1 à 3 mois", score: 1 },
      { label: "3 à 6 mois", score: 2 },
      { label: "Plus de 6 mois", score: 3 },
    ],
  },
  {
    q: "Si vos placements perdaient 20 % en 6 mois, vous…",
    short: "Réaction à une baisse de 20 %",
    choices: [
      { label: "Vendriez tout immédiatement", score: 0 },
      { label: "Vendriez une partie pour limiter la casse", score: 1 },
      { label: "Attendriez patiemment la remontée", score: 2 },
      { label: "Renforceriez la position pendant la baisse", score: 3 },
    ],
  },
  {
    q: "Avez-vous déjà investi en actions ou en fonds ?",
    short: "Expérience d'investissement",
    choices: [
      { label: "Jamais", score: 0 },
      { label: "Très peu", score: 1 },
      { label: "Régulièrement", score: 2 },
      { label: "Je suis un investisseur expérimenté", score: 3 },
    ],
  },
  {
    q: "Votre objectif principal est…",
    short: "Objectif principal",
    choices: [
      { label: "Préserver le capital avant tout", score: 0 },
      { label: "Un peu de croissance, peu de risque", score: 1 },
      { label: "Faire croître le patrimoine sur le long terme", score: 2 },
      { label: "Maximiser le rendement, j'accepte la volatilité", score: 3 },
    ],
  },
  {
    q: "Vos revenus mensuels, rapportés à vos charges…",
    short: "Revenus mensuels",
    choices: [
      { label: "Couvrent à peine vos charges", score: 0 },
      { label: "Permettent une épargne modérée", score: 1 },
      { label: "Permettent une épargne confortable", score: 2 },
      { label: "Sont largement supérieurs à vos dépenses", score: 3 },
    ],
  },
  {
    q: "Avez-vous un projet engageant dans les 5 prochaines années ?",
    short: "Projet engageant à 5 ans",
    choices: [
      { label: "Achat immobilier imminent, mariage…", score: 0 },
      { label: "Un projet possible, mais flexible", score: 1 },
      { label: "Aucun projet majeur identifié", score: 2 },
      { label: "Aucun : je place pour le très long terme", score: 3 },
    ],
  },
  {
    q: "Votre âge approximatif ?",
    short: "Âge",
    choices: [
      { label: "Plus de 60 ans", score: 0 },
      { label: "45 à 60 ans", score: 1 },
      { label: "30 à 45 ans", score: 2 },
      { label: "Moins de 30 ans", score: 3 },
    ],
  },
  {
    q: "Vous suivriez l'évolution de votre portefeuille…",
    short: "Fréquence de suivi",
    choices: [
      { label: "Tous les jours, avec anxiété", score: 0 },
      { label: "Toutes les semaines", score: 1 },
      { label: "Une fois par mois", score: 2 },
      { label: "Une à deux fois par an", score: 3 },
    ],
  },
  {
    q: "Vous êtes prêt à immobiliser cette épargne…",
    short: "Durée d'immobilisation acceptée",
    choices: [
      { label: "Pas du tout : je veux la liquidité", score: 0 },
      { label: "Quelques années", score: 1 },
      { label: "Environ 10 ans", score: 2 },
      { label: "20 ans ou plus", score: 3 },
    ],
  },
];

/** Q1 (horizon), Q2 (épargne de précaution), Q6 (revenus), Q7 (projet à 5 ans), Q8 (âge). */
const CAPACITY_IDX = [0, 1, 5, 6, 7];
/** Q3 (réaction à la baisse), Q4 (expérience), Q5 (objectif), Q9 (suivi), Q10 (immobilisation). */
const TOLERANCE_IDX = [2, 3, 4, 8, 9];

type ProfileLabel = "Prudent" | "Équilibré" | "Dynamique";

function bandOf(score: number): ProfileLabel {
  if (score < 5) return "Prudent";
  if (score <= 10) return "Équilibré";
  return "Dynamique";
}

/** Correspondance avec les identifiants du référentiel partagé des portefeuilles types. */
const PROFIL_TYPE_ID: Record<ProfileLabel, ProfilTypeId> = {
  Prudent: "prudent",
  Équilibré: "equilibre",
  Dynamique: "dynamique",
};

/** Ce que révèle chaque bande de score sur le RISQUE — pas sur une composition de portefeuille. */
const RISK_SUMMARIES: Record<ProfileLabel, string> = {
  Prudent:
    "Vos réponses indiquent une priorité claire : la sécurité du capital plutôt que la performance. Une allocation cohérente avec ce profil limite fortement la part exposée aux marchés actions et privilégie les supports peu volatils.",
  Équilibré:
    "Vos réponses indiquent une tolérance modérée à la volatilité, en échange d'un potentiel de rendement supérieur à celui d'un support garanti. Un équilibre entre poche obligataire et poche actions correspond généralement à ce profil.",
  Dynamique:
    "Vos réponses indiquent un horizon long et une réelle capacité à traverser un creux de marché sans céder à la panique. Une allocation cohérente avec ce profil peut faire une large place aux actions.",
};

/* ─────────────────── Les 2 questions facultatives (préférences) ─────────────────── */
// Ces réponses ne comptent dans AUCUN score et ne filtrent AUCUN fonds. Elles ne
// servent qu'à préparer la conversation avec le conseiller, qui vérifie ensuite,
// fonds par fonds, ce qu'un support finance ou exclut réellement (DIC, reporting
// SFDR) — jamais une promesse marketing.

const PRIORITE_NEUTRE = "Pas de priorité tranchée entre ces piliers";
const PRIORITES_OPTIONS = [
  "Environnement (climat, biodiversité, transition énergétique)",
  "Social (droits humains, conditions de travail, inclusion)",
  "Gouvernance (transparence, rémunération des dirigeants, éthique des affaires)",
  "Finance solidaire (impact social direct, type Finansol)",
  PRIORITE_NEUTRE,
];

const EXCLUSION_NEUTRE = "Pas d'exclusion stricte : je privilégie l'engagement actionnarial";
const EXCLUSIONS_OPTIONS = [
  "Armement controversé",
  "Tabac",
  "Énergies fossiles (charbon, pétrole, gaz)",
  "Jeux d'argent",
  "Alcool",
  EXCLUSION_NEUTRE,
];

/** Sélection multiple avec une option « neutre » exclusive des autres. */
function toggleOption(current: string[], option: string, neutral: string): string[] {
  if (option === neutral) return current.includes(neutral) ? [] : [neutral];
  const withoutNeutral = current.filter((o) => o !== neutral);
  return withoutNeutral.includes(option)
    ? withoutNeutral.filter((o) => o !== option)
    : [...withoutNeutral, option];
}

function OptionChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="rounded-full border px-4 py-2 text-left text-sm font-medium transition-colors"
      style={
        active
          ? {
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 8%, var(--card))",
              color: "var(--foreground)",
            }
          : { borderColor: "var(--border)", color: "var(--foreground)" }
      }
    >
      {label}
    </button>
  );
}

function ScoreGauge({ label, score }: { label: string; score: number }) {
  const pct = Math.max(0, Math.min(100, (score / 15) * 100));
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{score}</span>/15 — {bandOf(score)}
        </p>
      </div>
      <div className="relative mt-2 h-2 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--grenat)] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
        {/* Repères des seuils 5 et 11 */}
        <span
          className="absolute top-0 h-full w-px bg-background/80"
          style={{ left: `${(5 / 15) * 100}%` }}
        />
        <span
          className="absolute top-0 h-full w-px bg-background/80"
          style={{ left: `${(11 / 15) * 100}%` }}
        />
      </div>
    </div>
  );
}

/* ────────────────────────────────── Page ────────────────────────────────── */

function ProfilInvestisseurPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [priorites, setPriorites] = useState<string[]>([]);
  const [exclusions, setExclusions] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [emailRequested, setEmailRequested] = useState(false);

  const answeredCount = answers.filter((a) => a !== null).length;
  const remaining = questions.length - answeredCount;
  const allAnswered = remaining === 0;

  const scores = useMemo(() => {
    const sum = (idx: number[]) =>
      idx.reduce(
        (acc, i) =>
          acc + (answers[i] !== null ? questions[i].choices[answers[i] as number].score : 0),
        0,
      );
    const capacity = sum(CAPACITY_IDX);
    const tolerance = sum(TOLERANCE_IDX);
    const minScore = Math.min(capacity, tolerance);

    // Règles de sécurité (knock-out) : elles plafonnent le profil, elles ne
    // l'améliorent jamais.
    const koHorizon = answers[0] === 0; // horizon < 3 ans
    const koProject = answers[6] === 0; // projet engageant imminent
    const koSafetyNet = answers[1] !== null && answers[1] <= 1; // épargne de précaution < 3 mois

    const rawLabel = bandOf(minScore);
    const label: ProfileLabel = koHorizon || koProject ? "Prudent" : rawLabel;

    return { capacity, tolerance, minScore, label, rawLabel, koHorizon, koProject, koSafetyNet };
  }, [answers]);

  const profilType = PROFILS_TYPES[PROFIL_TYPE_ID[scores.label]];

  const leadPayload = useMemo(() => {
    const payload: Record<string, string> = {};
    questions.forEach((q, i) => {
      payload[q.short] = answers[i] !== null ? q.choices[answers[i] as number].label : "—";
    });
    payload["Capacité de risque"] = `${scores.capacity}/15`;
    payload["Tolérance au risque"] = `${scores.tolerance}/15`;
    payload["Profil de risque"] = scores.label;
    payload["Priorités extra-financières"] = priorites.length
      ? priorites.join(" · ")
      : "Non renseigné";
    payload["Exclusions souhaitées"] = exclusions.length ? exclusions.join(" · ") : "Non renseigné";
    return payload;
  }, [answers, scores, priorites, exclusions]);

  const buildDoc = (): PdfDoc => ({
    title: "Profil investisseur — piste indicative",
    subtitle: `Profil ${scores.label} · capacité ${scores.capacity}/15 · tolérance ${scores.tolerance}/15`,
    source: "profil-investisseur",
    sections: [
      {
        heading: "Vos 10 réponses",
        rows: questions.map((q, i) => ({
          label: `${i + 1}. ${q.short}`,
          value: answers[i] !== null ? q.choices[answers[i] as number].label : "—",
        })),
      },
      {
        heading: "Scores de risque",
        rows: [
          {
            label: "Capacité de risque (situation)",
            value: `${scores.capacity}/15 (${bandOf(scores.capacity)})`,
          },
          {
            label: "Tolérance au risque (tempérament)",
            value: `${scores.tolerance}/15 (${bandOf(scores.tolerance)})`,
          },
          { label: "Profil de risque retenu", value: scores.label },
        ],
        note:
          "Le profil retenu correspond à la plus contraignante des deux dimensions" +
          (scores.koHorizon || scores.koProject
            ? ", plafonné à Prudent en raison d'un horizon court ou d'un projet engageant imminent."
            : "."),
      },
      {
        heading: "Priorités extra-financières (facultatif)",
        rows: [
          {
            label: "Priorités E/S/G",
            value: priorites.length ? priorites.join(" · ") : "Non renseigné",
          },
          {
            label: "Exclusions souhaitées",
            value: exclusions.length ? exclusions.join(" · ") : "Non renseigné",
          },
        ],
        note: "Ces réponses ne filtrent ni ne sélectionnent aucun fonds automatiquement : elles nourrissent l'échange avec votre conseiller, qui vérifie ensuite fonds par fonds ce qu'un support finance ou exclut réellement.",
      },
      {
        heading: "Exemple de portefeuille type correspondant",
        rows: [
          {
            label: profilType.libelle,
            value:
              profilType.statut === "SOURCÉ"
                ? "Composition vérifiée disponible sur /outils/portefeuilles-types"
                : "Composition en cours de vérification par le cabinet",
          },
        ],
        note: AVERTISSEMENT_PROFIL_TYPE,
      },
    ],
    disclaimer:
      "Outil pédagogique et indicatif. Ce quiz ne calcule ni un conseil en investissement ni une allocation personnalisée : il vous donne une première piste de lecture. L'examen complet de votre situation et toute allocation vous concernant réellement ne se construisent qu'en rendez-vous, avec un conseiller.",
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Quiz"
        title={
          <>
            Quel{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              profil investisseur
            </span>{" "}
            êtes-vous ?
          </>
        }
        lead="Dix questions pour mesurer séparément votre capacité de risque (votre situation) et votre tolérance au risque (votre tempérament) — puis deux questions facultatives pour amorcer l'échange sur vos priorités extra-financières. Environ 3 minutes ; le résultat est une piste, pas une allocation."
      />

      <section className="section">
        <div className="container-prose max-w-3xl">
          {!submitted && !emailRequested && (
            <>
              <div className="sticky top-20 z-20 mb-8 rounded-xl border border-border bg-card/95 backdrop-blur px-5 py-3 shadow-sm">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-medium text-foreground">
                    {answeredCount}/{questions.length} questions répondues
                  </p>
                  {!allAnswered && <p className="text-muted-foreground">Encore {remaining}</p>}
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[var(--grenat)] transition-all duration-300"
                    style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                  />
                </div>
              </div>

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
                      {q.choices.map((c, ci) => {
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
                                : {
                                    borderColor: "var(--border)",
                                    color:
                                      "color-mix(in oklch, var(--foreground) 85%, transparent)",
                                  }
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

              <div className="mt-8 rounded-xl border border-dashed border-border bg-card/60 p-6">
                <span className="badge-a-valider">Facultatif</span>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Ces deux questions n'entrent dans aucun score et n'influencent pas votre profil de
                  risque ci-dessus. Elles servent uniquement à préparer votre échange avec un
                  conseiller.
                </p>

                <div className="mt-6">
                  <p className="font-display text-lg text-foreground">
                    <span style={{ color: "var(--grenat)" }} className="mr-2">
                      11.
                    </span>
                    Quelles priorités extra-financières comptent le plus pour vous ?
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Plusieurs réponses possibles.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {PRIORITES_OPTIONS.map((opt) => (
                      <OptionChip
                        key={opt}
                        label={opt}
                        active={priorites.includes(opt)}
                        onClick={() => setPriorites((p) => toggleOption(p, opt, PRIORITE_NEUTRE))}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="font-display text-lg text-foreground">
                    <span style={{ color: "var(--grenat)" }} className="mr-2">
                      12.
                    </span>
                    Souhaitez-vous exclure explicitement certains secteurs ?
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Plusieurs réponses possibles.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {EXCLUSIONS_OPTIONS.map((opt) => (
                      <OptionChip
                        key={opt}
                        label={opt}
                        active={exclusions.includes(opt)}
                        onClick={() => setExclusions((e) => toggleOption(e, opt, EXCLUSION_NEUTRE))}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-xs text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
                  Important : ces réponses ne filtrent et ne sélectionnent aucun fonds
                  automatiquement. Un cabinet qui vérifie ce que les labels garantissent avant d'en
                  parler doit vérifier de la même façon ce qu'un fonds exclut réellement — fonds par
                  fonds, sur la base du document d'informations clés (DIC) et du reporting SFDR,
                  jamais sur une promesse marketing. Vos réponses ici ouvrent cette vérification en
                  rendez-vous, elles ne la remplacent pas.
                </p>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  type="button"
                  disabled={!allAnswered}
                  onClick={() => {
                    if (hasPassedGate()) {
                      setSubmitted(true);
                    } else {
                      setEmailRequested(true);
                    }
                  }}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {allAnswered
                    ? "Voir ma piste de profil"
                    : remaining === 1
                      ? "Répondez à la dernière question obligatoire"
                      : `Répondez aux ${remaining} questions obligatoires restantes`}
                </button>
              </div>
            </>
          )}

          {emailRequested && !submitted && (
            <LeadGate
              source="Profil Investisseur"
              payload={leadPayload}
              onSuccess={() => {
                setEmailRequested(false);
                setSubmitted(true);
              }}
            />
          )}

          {submitted && (
            <div className="space-y-5">
              {scores.koSafetyNet && (
                <div className="rounded-xl border border-amber-400 bg-card p-5 flex items-start gap-3">
                  <ShieldAlert className="text-amber-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-foreground">
                      Avant toute allocation risquée, constituez 3 à 6 mois d'épargne de précaution.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      Votre épargne de précaution couvre moins de 3 mois de charges. C'est la
                      première brique de tout patrimoine : elle vous évite de devoir vendre vos
                      placements au pire moment.
                    </p>
                  </div>
                </div>
              )}

              {(scores.koHorizon || scores.koProject) && (
                <div className="rounded-xl border border-amber-400 bg-card p-5 flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-foreground">
                      Profil plafonné à Prudent par sécurité.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {scores.koHorizon && scores.koProject
                        ? "Votre horizon est inférieur à 3 ans et un projet engageant est imminent : "
                        : scores.koHorizon
                          ? "Votre horizon de placement est inférieur à 3 ans : "
                          : "Un projet engageant (achat immobilier, mariage…) est imminent : "}
                      l'argent dont vous aurez besoin bientôt ne doit pas être exposé à la
                      volatilité des marchés, quel que soit votre tempérament
                      {scores.rawLabel !== "Prudent"
                        ? ` (vos réponses indiquaient sinon un profil ${scores.rawLabel})`
                        : ""}
                      .
                    </p>
                  </div>
                </div>
              )}

              <div
                className="rounded-2xl border p-8 md:p-10"
                style={{ borderColor: "var(--grenat)" }}
              >
                <p className="eyebrow">Piste — votre profil de risque</p>
                <h2 className="font-display text-4xl mt-3 text-foreground">{scores.label}</h2>
                <p className="mt-6 text-foreground/85 leading-relaxed">
                  {RISK_SUMMARIES[scores.label]}
                </p>

                <div className="mt-8 space-y-5">
                  <ScoreGauge label="Capacité de risque (situation)" score={scores.capacity} />
                  <ScoreGauge label="Tolérance au risque (tempérament)" score={scores.tolerance} />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Le profil retenu respecte la plus contraignante des deux dimensions : un
                    tempérament audacieux ne compense pas une situation fragile, et inversement.
                    Seuils indicatifs : Prudent &lt; 5 · Équilibré 5–10 · Dynamique ≥ 11.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="eyebrow mb-0">Piste — exemple de portefeuille type</p>
                  {profilType.statut === "SOURCÉ" ? (
                    <span className="badge-verifie">
                      <CheckCircle2 size={13} aria-hidden /> Vérifié
                    </span>
                  ) : (
                    <span className="badge-a-valider">
                      <Clock size={13} aria-hidden /> À valider
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl mt-3 text-foreground">{profilType.libelle}</h3>
                <p className="mt-3 text-foreground/85 leading-relaxed">{profilType.description}</p>
                <Link to="/outils/portefeuilles-types" className="btn-ghost mt-5">
                  Voir l'exemple de portefeuille type complet <ArrowRight size={15} />
                </Link>
                <p className="mt-6 text-xs text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
                  {AVERTISSEMENT_PROFIL_TYPE}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <p className="eyebrow">Vos priorités à évoquer avec le conseiller</p>
                {priorites.length === 0 && exclusions.length === 0 ? (
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Vous n'avez renseigné aucune priorité extra-financière particulière — nous en
                    parlerons directement en rendez-vous.
                  </p>
                ) : (
                  <div className="mt-3 space-y-2.5 text-sm">
                    {priorites.length > 0 && (
                      <p>
                        <span className="font-medium text-foreground">Priorités : </span>
                        <span className="text-muted-foreground">{priorites.join(" · ")}</span>
                      </p>
                    )}
                    {exclusions.length > 0 && (
                      <p>
                        <span className="font-medium text-foreground">
                          Exclusions souhaitées :{" "}
                        </span>
                        <span className="text-muted-foreground">{exclusions.join(" · ")}</span>
                      </p>
                    )}
                  </div>
                )}
                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                  Rappel : ces préférences ne filtrent aucun fonds automatiquement. Elles orientent
                  la conversation ; la vérification fonds par fonds (DIC, reporting SFDR) reste le
                  travail du conseiller.
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Étape suivante : une fois votre profil de risque situé, identifiez les enveloppes et
                les classes d'actifs responsables les plus adaptées à votre situation avec{" "}
                <Link
                  to="/outils/type-investissement"
                  className="text-foreground underline underline-offset-4"
                >
                  le sélecteur de type d'investissement
                </Link>
                .
              </p>

              <div className="mt-2 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Échanger avec un conseiller
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setAnswers(Array(questions.length).fill(null));
                    setPriorites([]);
                    setExclusions([]);
                    if (typeof window !== "undefined")
                      window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="btn-ghost"
                >
                  Refaire le quiz
                </button>
              </div>

              <ResultsActions source="profil-investisseur" buildDoc={buildDoc} />
            </div>
          )}
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
