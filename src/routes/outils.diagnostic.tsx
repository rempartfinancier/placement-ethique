import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Check, AlertTriangle, X } from "lucide-react";
import { LeadGate } from "@/components/LeadGate";

export const Route = createFileRoute("/outils/diagnostic")({
  head: () => ({
    meta: [
      {
        title: "Diagnostic patrimoine éthique — solide ET aligné ? | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "12 questions pour croiser la santé de votre patrimoine (épargne, enveloppes, transmission) et la cohérence réelle de vos placements (labels, SFDR, ce qu'ils financent). Résultat immédiat.",
      },
      { property: "og:title", content: "Diagnostic patrimoine éthique — solide ET aligné ?" },
      { property: "og:url", content: "https://placement-ethique.fr/outils/diagnostic" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils/diagnostic" }],
  }),
  component: DiagnosticPage,
});

/* ─────────────────────────── Données du diagnostic ─────────────────────────── */

type Category = "Patrimonial" | "Cohérence valeurs";
type CheckItem = { q: string; tip: string; category: Category };

const checks: CheckItem[] = [
  {
    category: "Patrimonial",
    q: "Mon épargne de précaution couvre au moins 3 à 6 mois de charges courantes, sur un support disponible immédiatement.",
    tip: "C'est le préalable à tout placement de long terme : sans lui, un imprévu peut vous forcer à sortir d'un support au pire moment.",
  },
  {
    category: "Patrimonial",
    q: "J'ai au moins un contrat d'assurance vie ouvert depuis plus de 8 ans.",
    tip: "L'antériorité fiscale ne se rattrape pas : chaque année d'ouverture compte, même avec un versement de départ modeste.",
  },
  {
    category: "Patrimonial",
    q: "Mon épargne est répartie entre plusieurs enveloppes (assurance vie, PER, PEA, immobilier…) plutôt que concentrée sur un seul produit.",
    tip: "Diversifier par enveloppe et par classe d'actifs limite le risque de concentration sur un seul assureur ou un seul support.",
  },
  {
    category: "Patrimonial",
    q: "J'ai étudié mon intérêt réel à ouvrir un PER, au-delà du seul argument de la déduction fiscale.",
    tip: "La déduction à l'entrée n'a de sens que mise en regard de votre imposition à la sortie et de vos objectifs de transmission — un point à vérifier avant d'ouvrir ou d'écarter le produit.",
  },
  {
    category: "Patrimonial",
    q: "J'ai désigné des bénéficiaires précis sur mes contrats (et pas seulement « mes héritiers »).",
    tip: "Une clause bénéficiaire précise, revue régulièrement, conditionne la transmission hors succession — jusqu'à 152 500 € par bénéficiaire pour les primes versées avant 70 ans (article 990 I du Code général des impôts).",
  },
  {
    category: "Patrimonial",
    q: "Je connais mes objectifs patrimoniaux à 5, 10 et 20 ans.",
    tip: "Sans objectif clair (achat, retraite, transmission), il n'y a pas d'allocation pertinente — seulement des produits achetés au coup par coup.",
  },
  {
    category: "Cohérence valeurs",
    q: "Je sais précisément ce que financent mes placements actuels (quels secteurs, quelles entreprises).",
    tip: "Le nom d'un fonds ou d'un contrat ne dit rien de ce qu'il détient réellement — seuls l'inventaire de portefeuille et le reporting SFDR le montrent.",
  },
  {
    category: "Cohérence valeurs",
    q: "Les fonds « responsables » de mon contrat portent un label que j'ai vérifié (Label ISR, Greenfin, Finansol), pas seulement un nom évocateur.",
    tip: "« Vert », « durable », « engagé » sont des mots libres. Seul un label vérifié — et toujours valide — garantit une méthodologie contrôlée.",
  },
  {
    category: "Cohérence valeurs",
    q: "Mon épargne ne dort pas, pour l'essentiel, sur des livrets réglementés ou un fonds euros classique.",
    tip: "Un Livret A ou un fonds euros ne finance pas un projet identifiable aligné avec vos valeurs : c'est un support liquide, pas un choix engagé.",
  },
  {
    category: "Cohérence valeurs",
    q: "Je connais la classification SFDR (Article 6, 8 ou 9) des supports que je détiens.",
    tip: "Article 6 : pas d'engagement extra-financier structurant. Article 8 : caractéristiques ESG promues. Article 9 : objectif d'investissement durable assumé — trois niveaux d'exigence très différents.",
  },
  {
    category: "Cohérence valeurs",
    q: "Mon assurance vie ou mon PER actuel donne réellement accès à des supports ISR, pas seulement en théorie.",
    tip: "Certains contrats anciens n'ouvrent l'accès aux unités de compte ISR qu'à la marge, voire pas du tout — un point à vérifier dans la liste des supports éligibles.",
  },
  {
    category: "Cohérence valeurs",
    q: "J'ai vérifié la conformité de mes supports (label, classification SFDR) au cours des 12 derniers mois.",
    tip: "Un fonds peut perdre son label, changer de stratégie ou être reclassé d'un article à l'autre sans préavis visible : la vérification se fait dans la durée, pas une fois pour toutes.",
  },
];

type ActionLink =
  | {
      kind: "page";
      to:
        | "/objectifs"
        | "/enveloppes"
        | "/outils/per-isr"
        | "/outils/comparateur-enveloppes"
        | "/outils/decodeur-label"
        | "/outils/empreinte-carbone-epargne";
      label: string;
    }
  | { kind: "article"; slug: string; label: string };

type ActionItem = { text: string; priority: 1 | 2 | 3; link?: ActionLink };

const checkActions: ActionItem[] = [
  {
    priority: 1,
    text: "Urgence — sans matelas de précaution, tout placement devient un pari sur le mauvais moment pour en sortir.",
  },
  {
    priority: 2,
    text: "Ouvrez une assurance vie dès maintenant pour faire courir l'antériorité fiscale — chaque année compte.",
    link: {
      kind: "article",
      slug: "assurance-vie-isr-guide-2026",
      label: "Guide assurance vie ISR",
    },
  },
  {
    priority: 3,
    text: "Répartissez votre épargne entre plusieurs enveloppes pour limiter le risque de concentration.",
    link: { kind: "page", to: "/enveloppes", label: "Comparer les enveloppes" },
  },
  {
    priority: 3,
    text: "Étudiez votre intérêt réel à ouvrir un PER, fiscalité et transmission comprises.",
    link: { kind: "page", to: "/outils/per-isr", label: "Simulateur PER ISR" },
  },
  {
    priority: 2,
    text: "Quelques minutes pour préciser vos clauses bénéficiaires peuvent conditionner une transmission bien plus favorable.",
    link: {
      kind: "article",
      slug: "donation-transmission-coherence-valeurs",
      label: "Transmettre en cohérence avec ses valeurs",
    },
  },
  {
    priority: 3,
    text: "Clarifiez vos objectifs à 5, 10 et 20 ans avant de choisir vos supports.",
    link: { kind: "page", to: "/objectifs", label: "Clarifier vos objectifs" },
  },
  {
    priority: 1,
    text: "Vos placements actuels financent probablement des secteurs que vous n'avez jamais vérifiés — commencez par un ordre de grandeur.",
    link: {
      kind: "page",
      to: "/outils/empreinte-carbone-epargne",
      label: "Empreinte carbone de votre épargne",
    },
  },
  {
    priority: 1,
    text: "Vérifiez si vos fonds « responsables » portent un vrai label, ou seulement un nom évocateur.",
    link: { kind: "page", to: "/outils/decodeur-label", label: "Décodeur de labels" },
  },
  {
    priority: 2,
    text: "Un fonds euros ou un livret réglementé ne finance rien d'identifiable — à faire sortir en priorité de votre logique d'alignement.",
    link: {
      kind: "article",
      slug: "livrets-epargne-solidaire-alternative-livret-a",
      label: "L'épargne solidaire, une vraie alternative ?",
    },
  },
  {
    priority: 2,
    text: "Identifiez la classification SFDR (Article 6, 8 ou 9) de chacun de vos supports.",
    link: {
      kind: "article",
      slug: "sfdr-article-8-ou-9-ce-que-ca-garantit",
      label: "Article 8 ou 9 : ce que ça garantit",
    },
  },
  {
    priority: 3,
    text: "Vérifiez que votre contrat actuel donne bien accès à des supports ISR — pas seulement en théorie.",
    link: { kind: "page", to: "/outils/comparateur-enveloppes", label: "Comparer les enveloppes" },
  },
  {
    priority: 3,
    text: "Programmez une vérification annuelle : un label ou un classement SFDR peut changer sans préavis visible.",
    link: {
      kind: "article",
      slug: "reperer-greenwashing-fonds-vert-methode",
      label: "Repérer le greenwashing d'un fonds vert",
    },
  },
];

const SUB_MAX = 12;

type Tier = "high" | "mid" | "low";

function tierOf(ratio: number): Tier {
  if (ratio >= 0.75) return "high";
  if (ratio >= 0.5) return "mid";
  return "low";
}

const tierStyles: Record<Tier, { border: string; text: string; bar: string }> = {
  high: {
    border: "border-[var(--grenat)]",
    text: "text-[var(--grenat)]",
    bar: "bg-[var(--grenat)]",
  },
  mid: { border: "border-amber-500", text: "text-amber-600", bar: "bg-amber-500" },
  low: { border: "border-red-500", text: "text-red-600", bar: "bg-red-500" },
};

function subScoreReading(sub: number, kind: "patrimonial" | "valeurs"): string {
  const ratio = sub / SUB_MAX;
  if (kind === "patrimonial") {
    if (ratio >= 0.75)
      return "Votre structuration patrimoniale est solide — place aux optimisations fines.";
    if (ratio >= 0.5)
      return "Les bases sont posées, mais plusieurs briques structurantes restent à consolider.";
    return "Les fondations restent à construire : épargne de précaution, enveloppes, objectifs.";
  }
  if (ratio >= 0.75)
    return "Votre épargne est largement vérifiée et alignée — maintenez le rythme de vérification.";
  if (ratio >= 0.5)
    return "La démarche est engagée : plusieurs supports méritent encore une vérification (label, classification SFDR).";
  return "Une part importante de votre épargne n'a probablement jamais été vérifiée sur le fond — ce qu'elle finance reste à éclaircir.";
}

const urgencyGroups: Array<{ priority: 1 | 2 | 3; label: string; tier: Tier }> = [
  { priority: 1, label: "Urgent", tier: "low" },
  { priority: 2, label: "Ce trimestre", tier: "mid" },
  { priority: 3, label: "Cette année", tier: "high" },
];

function ActionLinkAnchor({ link }: { link: ActionLink }) {
  if (link.kind === "article") {
    return (
      <Link
        to="/articles/$slug"
        params={{ slug: link.slug }}
        className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
      >
        → {link.label}
      </Link>
    );
  }
  return (
    <Link
      to={link.to}
      className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
    >
      → {link.label}
    </Link>
  );
}

/* ────────────────────────────────── Page ────────────────────────────────── */

function DiagnosticPage() {
  const [answers, setAnswers] = useState<Array<"yes" | "partial" | "no" | null>>(
    Array(checks.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);
  const [emailRequested, setEmailRequested] = useState(false);

  const score = useMemo(() => {
    let pts = 0;
    answers.forEach((a) => {
      if (a === "yes") pts += 2;
      else if (a === "partial") pts += 1;
    });
    return pts;
  }, [answers]);
  const max = checks.length * 2;
  const allAnswered = answers.every((a) => a !== null);
  const answeredCount = useMemo(() => answers.filter((a) => a !== null).length, [answers]);

  const subScores = useMemo(() => {
    const calc = (from: number, to: number) => {
      let pts = 0;
      for (let i = from; i < to; i++) {
        const a = answers[i];
        if (a === "yes") pts += 2;
        else if (a === "partial") pts += 1;
      }
      return pts;
    };
    return { patrimonial: calc(0, 6), valeurs: calc(6, 12) };
  }, [answers]);

  const summary = useMemo(() => {
    const ratio = score / max;
    const tier = tierOf(ratio);
    if (tier === "high")
      return {
        tier,
        label: "Épargne solide et alignée",
        text: "Vos fondamentaux patrimoniaux sont posés et votre démarche de vérification est engagée. Un échange permet d'aller chercher les optimisations fines : transmission, fiscalité, allocation.",
      };
    if (tier === "mid")
      return {
        tier,
        label: "De bonnes bases, des vérifications à finaliser",
        text: "Plusieurs points peuvent être consolidés rapidement, côté patrimoine comme côté cohérence de vos placements. Un échange permet d'identifier les 2 ou 3 pistes à plus fort impact.",
      };
    return {
      tier,
      label: "Patrimoine et cohérence à construire",
      text: "Beaucoup de leviers ne sont pas encore activés — c'est une situation très courante. Une feuille de route claire permet d'avancer point par point, dans l'ordre qui compte le plus.",
    };
  }, [score, max]);

  const topPistes = useMemo(() => {
    const items: (ActionItem & { idx: number })[] = [];
    answers.forEach((a, i) => {
      if (a !== "yes" && checkActions[i]) {
        items.push({ ...checkActions[i]!, idx: i });
      }
    });
    items.sort((a, b) => a.priority - b.priority);
    return items.slice(0, 3);
  }, [answers]);

  const actionsByUrgency = useMemo(() => {
    const groups: Record<1 | 2 | 3, Array<ActionItem & { answer: "partial" | "no" }>> = {
      1: [],
      2: [],
      3: [],
    };
    answers.forEach((a, i) => {
      const action = checkActions[i];
      if ((a === "partial" || a === "no") && action) {
        groups[action.priority].push({ ...action, answer: a });
      }
    });
    return groups;
  }, [answers]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Diagnostic"
        title={
          <>
            Votre épargne est-elle solide — et vraiment{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              alignée avec vos valeurs
            </span>{" "}
            ?
          </>
        }
        lead="12 questions pour croiser la santé de votre patrimoine (épargne de précaution, enveloppes, transmission) et la cohérence réelle de vos placements (labels, classification SFDR, ce qu'ils financent). Résultat immédiat dans votre navigateur : ce diagnostic donne des pistes, la lecture complète de votre situation se fait ensuite, de vive voix."
      />

      <section className="section">
        <div className="container-prose max-w-3xl">
          {!submitted && !emailRequested && (
            <>
              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <p className="text-sm font-medium text-foreground">
                    {answeredCount}/{checks.length} points renseignés
                  </p>
                  {answeredCount < checks.length && (
                    <p className="text-xs text-muted-foreground">
                      Répondez aux 12 points pour obtenir votre diagnostic
                    </p>
                  )}
                </div>
                <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${(answeredCount / checks.length) * 100}%`,
                      background: "var(--gradient-grenat)",
                    }}
                  />
                </div>
              </div>
              <ol className="space-y-4">
                {checks.map((c, i) => (
                  <li key={i} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {c.category}
                        </p>
                        <p className="mt-1 text-foreground font-medium">{c.q}</p>
                        <p className="mt-1.5 text-sm text-muted-foreground">{c.tip}</p>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {(["yes", "partial", "no"] as const).map((v) => {
                        const active = answers[i] === v;
                        const text =
                          v === "yes" ? "Oui" : v === "partial" ? "Partiellement" : "Non";
                        return (
                          <button
                            key={v}
                            type="button"
                            onClick={() => {
                              const next = [...answers];
                              next[i] = v;
                              setAnswers(next);
                            }}
                            className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                              active
                                ? "border-[var(--grenat)] bg-[oklch(0.97_0.025_85)] text-foreground"
                                : "border-border hover:border-foreground/40 text-foreground/80"
                            }`}
                          >
                            {text}
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
                  onClick={() => setEmailRequested(true)}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Voir mon diagnostic
                </button>
              </div>
            </>
          )}

          {emailRequested && !submitted && (
            <LeadGate
              source="Diagnostic patrimoine éthique"
              payload={{
                "Score obtenu": `${score}/${max}`,
                Diagnostic: summary.label,
                ...checks.reduce(
                  (acc, check, idx) => {
                    const ans = answers[idx];
                    const label =
                      ans === "yes" ? "Oui" : ans === "partial" ? "Partiellement" : "Non";
                    acc[`Q${idx + 1} - ${check.q.slice(0, 50)}...`] = label;
                    return acc;
                  },
                  {} as Record<string, string>,
                ),
              }}
              onSuccess={() => {
                setEmailRequested(false);
                setSubmitted(true);
              }}
            />
          )}

          {submitted && (
            <div className="space-y-6">
              <div className={`rounded-2xl border bg-card p-8 ${tierStyles[summary.tier].border}`}>
                <p className="eyebrow">Score global</p>
                <p className={`font-display text-5xl mt-2 ${tierStyles[summary.tier].text}`}>
                  {score}
                  <span className="text-2xl text-muted-foreground">/{max}</span>
                </p>
                <h2 className="font-display text-2xl mt-4 text-foreground">{summary.label}</h2>
                <p className="mt-3 text-foreground/85 leading-relaxed">{summary.text}</p>

                <div className="mt-8 space-y-6 border-t border-border/60 pt-6">
                  {[
                    {
                      kind: "patrimonial" as const,
                      label: "Santé patrimoniale",
                      value: subScores.patrimonial,
                    },
                    {
                      kind: "valeurs" as const,
                      label: "Cohérence avec vos valeurs",
                      value: subScores.valeurs,
                    },
                  ].map((s) => {
                    const pct = (s.value / SUB_MAX) * 100;
                    const tier = tierOf(pct / 100);
                    return (
                      <div key={s.kind}>
                        <div className="flex items-baseline justify-between mb-2">
                          <p className="text-sm font-medium text-foreground">{s.label}</p>
                          <p className="font-display text-lg text-foreground">
                            {s.value}
                            <span className="text-sm text-muted-foreground">/{SUB_MAX}</span>
                          </p>
                        </div>
                        <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${tierStyles[tier].bar}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {subScoreReading(s.value, s.kind)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {topPistes.length > 0 && (
                <div className="rounded-2xl border border-[var(--grenat)]/30 bg-[var(--grenat)]/5 p-8">
                  <h3 className="font-display text-xl text-foreground mb-5">
                    Vos 3 premières pistes
                  </h3>
                  <ol className="space-y-4">
                    {topPistes.map((action, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span
                          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-sm"
                          style={{
                            background: "var(--gradient-grenat)",
                            color: "var(--grenat-foreground)",
                          }}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-foreground leading-relaxed">{action.text}</p>
                          {action.link && <ActionLinkAnchor link={action.link} />}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display text-xl text-foreground">
                  Toutes vos pistes de progression
                </h3>
                {answers.every((a) => a === "yes") ? (
                  <div className="mt-5 flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--grenat)" }}
                    />
                    <p className="text-foreground/85">
                      Tous les points sont validés. Vous êtes prêt(e) pour une revue d'optimisation
                      avancée — et un point de vérification annuel pour la maintenir.
                    </p>
                  </div>
                ) : (
                  <div className="mt-5 space-y-7">
                    {urgencyGroups.map((group) => {
                      const items = actionsByUrgency[group.priority];
                      if (items.length === 0) return null;
                      return (
                        <div key={group.priority}>
                          <p
                            className={`text-[11px] font-medium uppercase tracking-[0.2em] mb-3 ${tierStyles[group.tier].text}`}
                          >
                            {group.label}
                          </p>
                          <ul className="space-y-3">
                            {items.map((action, i) => {
                              const Icon = action.answer === "partial" ? AlertTriangle : X;
                              const iconClass =
                                action.answer === "partial" ? "text-amber-600" : "text-red-600";
                              const prefix =
                                action.answer === "partial"
                                  ? "À consolider — "
                                  : "À mettre en place — ";
                              return (
                                <li key={i} className="flex items-start gap-3">
                                  <Icon size={18} className={`mt-0.5 shrink-0 ${iconClass}`} />
                                  <div>
                                    <p className="text-foreground leading-relaxed">
                                      <span className="font-medium">{prefix}</span>
                                      {action.text}
                                    </p>
                                    {action.link && <ActionLinkAnchor link={action.link} />}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Link to="/contact" className="btn-primary">
                  Réserver un échange
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setAnswers(Array(checks.length).fill(null));
                  }}
                  className="btn-ghost"
                >
                  Recommencer
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
