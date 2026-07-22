import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      {
        title:
          "Diagnostic contrat ISR (PDF gratuit) — votre assurance vie est-elle vraiment transparente ? | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Guide PDF gratuit (16 pages) : la checklist des 8 documents à réunir, le modèle d'email pour les obtenir, et la grille de notation sur 40 pour savoir en 30 minutes si votre contrat d'assurance vie ou PER « ISR » est documentairement transparent.",
      },
      {
        property: "og:title",
        content:
          "Diagnostic contrat ISR (PDF gratuit) — votre contrat est-il vraiment transparent ?",
      },
      {
        property: "og:description",
        content:
          "La checklist des 8 documents, le modèle d'email pour les réclamer, et la grille de notation sur 40 — en un seul PDF, sans jargon.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/guide" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/guide" }],
  }),
  component: GuidePage,
});

const obtenir = [
  "La checklist des 8 documents à réunir (DIC, annexe SFDR, rapport périodique, historique de classification, détail des frais, justificatif de label...) avec, pour chacun, où le trouver et ce qu'il révèle.",
  "Le modèle d'email prêt à copier-coller pour réclamer en une seule fois les documents que votre assureur ne vous a pas transmis spontanément.",
  "La grille de notation sur 40, en 4 catégories de 5 critères : classification réglementaire, méthodologie d'exclusion réelle, coûts et alignement d'intérêt, reporting et preuve d'impact.",
  "La feuille de score à remplir, et la grille de lecture de votre résultat — avec ce qu'un score bas signifie, et ce qu'il ne signifie pas.",
  "Un cas illustratif chiffré, entièrement fictif, qui montre la méthode appliquée pas à pas sur un contrat type.",
];

const faq = [
  {
    q: "Un score bas veut-il dire que je dois vendre mon contrat ?",
    a: "Non. Un score bas signale un manque de transparence documentaire, pas nécessairement une mauvaise performance — mais il justifie de creuser avant de renforcer la ligne, pas de la liquider dans la foulée.",
  },
  {
    q: "Mon assureur refuse de répondre à ma demande de documents, que faire ?",
    a: "Le guide détaille la marche à suivre (relance qualifiée de réclamation écrite, délais réglementaires, saisine de la Médiation de l'Assurance) — et explique pourquoi une non-réponse est déjà, en soi, une information à noter dans votre grille.",
  },
  {
    q: "Ce score remplace-t-il l'avis d'un conseiller ?",
    a: "Non. Il vous donne de quoi poser les bonnes questions à un conseiller, pas de quoi vous en passer : le diagnostic évalue la transparence documentaire, pas ce qu'il faut en conclure pour votre situation patrimoniale propre.",
  },
];

function GuidePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Guide gratuit — 16 pages, format PDF"
        title={<>Assurance vie et PER « ISR »&nbsp;: le diagnostic documentaire noté sur 40</>}
        lead="Savez-vous en 30 minutes si votre contrat étiqueté « ISR » est réellement transparent — ou juste bien marketé ? Que vous ayez déjà vos documents en main ou aucun d'entre eux, ce guide vous donne la méthode complète pour vérifier, noter, et savoir où creuser."
      >
        <LeadMagnetForm buttonText="Recevoir le PDF gratuitement" />
      </PageHero>

      <section className="section border-b border-border/40">
        <div className="container-prose">
          <p className="eyebrow">Ce que vous allez obtenir</p>
          <h2 className="display-2 mt-4 max-w-2xl">
            Un seul document, utilisable même sans vos documents en main
          </h2>
          <p className="lead mt-5 max-w-2xl">
            Ce PDF fusionne la checklist documentaire, le modèle de relance et la grille de notation
            en un seul outil autosuffisant — vous pouvez commencer même si vous n'avez encore reçu
            aucun document de votre assureur.
          </p>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {obtenir.map((item) => (
              <li key={item} className="card-paper flex gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--grenat)" }}
                  aria-hidden
                />
                <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-b border-border/40">
        <div className="container-prose max-w-3xl">
          <div
            className="rounded-2xl border p-6 md:p-8"
            style={{
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
            }}
          >
            <p className="eyebrow" style={{ color: "var(--grenat)" }}>
              Ce que ce diagnostic ne fait pas
            </p>
            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
              Ce n'est ni une notation extra-financière, ni un conseil en investissement
              personnalisé : la grille mesure la disponibilité et la cohérence de l'information
              documentaire de votre contrat, pas la qualité intrinsèque du fonds. Quel que soit
              votre score, le diagnostic vous dit où chercher — pas ce qu'il faut en conclure pour
              votre situation propre. C'est l'objet du premier échange offert.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-b border-border/40">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="display-2 mt-4">Avant de le télécharger</h2>
          <div className="mt-8 space-y-4">
            {faq.map(({ q, a }) => (
              <details key={q} className="rounded-xl border border-border bg-card px-6 py-4 group">
                <summary className="cursor-pointer text-[15px] font-medium text-foreground list-none flex items-center justify-between gap-3">
                  {q}
                  <span className="text-xs text-muted-foreground group-open:hidden shrink-0">
                    Afficher
                  </span>
                  <span className="text-xs text-muted-foreground hidden group-open:inline shrink-0">
                    Masquer
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-prose">
          <div
            className="rounded-3xl border p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center"
            style={{
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
            }}
          >
            <div className="md:col-span-7">
              <p className="eyebrow" style={{ color: "var(--grenat)" }}>
                Recevoir le guide
              </p>
              <h2 className="display-3 mt-3 max-w-xl">
                15 à 30 minutes, avec ou sans vos documents en main
              </h2>
            </div>
            <div className="md:col-span-5">
              <LeadMagnetForm buttonText="Recevoir le PDF gratuitement" />
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[var(--grenat)] transition-colors"
              >
                Réserver un premier échange offert <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
