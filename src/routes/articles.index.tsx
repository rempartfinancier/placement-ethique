import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { articles } from "@/content/articles";
import type { ArticleCategory } from "@/content/article-types";
import { Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Articles & guides — Investissement éthique | Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Guides complets sur l'investissement responsable : labels décodés, greenwashing, assurance vie ISR, PER, SCPI, performance — les réponses aux questions que l'industrie évite.",
      },
      { property: "og:title", content: "Articles & guides | Placement-éthique.fr" },
      { property: "og:url", content: "https://placement-ethique.fr/articles" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/articles" }],
  }),
  component: ArticlesIndex,
});

const CATEGORIES: (ArticleCategory | "Tous")[] = [
  "Tous",
  "Fondamentaux",
  "Labels & Greenwashing",
  "Enveloppes",
  "Performance",
  "Fiscalité",
  "Transmission",
  "Conseil",
];

function ArticlesIndex() {
  const [categorie, setCategorie] = useState<(typeof CATEGORIES)[number]>("Tous");

  const filtres =
    categorie === "Tous" ? articles : articles.filter((a) => a.category === categorie);
  const featured = articles.filter((a) => a.featured).slice(0, 2);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Articles & guides"
        title={
          <>
            Les réponses que l'industrie{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              préfère éviter
            </span>
          </>
        }
        lead="Coûts, comparaisons, limites des labels, performance réelle : nous publions en clair ce que d'autres réservent à un rendez-vous commercial. Chaque article répond à une vraie question d'épargnant."
      />

      {/* Articles à la une */}
      {featured.length > 0 && categorie === "Tous" && (
        <section className="pb-4">
          <div className="container-prose">
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((a) => (
                <Link
                  key={a.slug}
                  to="/articles/$slug"
                  params={{ slug: a.slug }}
                  className="group rounded-2xl border p-8 flex flex-col transition-all hover:shadow-lg"
                  style={{
                    borderColor: "var(--grenat)",
                    background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
                  }}
                >
                  <span className="eyebrow" style={{ color: "var(--grenat)" }}>
                    À la une · {a.category}
                  </span>
                  <h2 className="font-display text-2xl mt-3 text-foreground leading-snug">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {a.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={13} /> {a.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-[var(--grenat)] transition-colors">
                      Lire le guide <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtres + liste */}
      <section className="section pt-10">
        <div className="container-prose">
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="tablist"
            aria-label="Filtrer par catégorie"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={categorie === c}
                onClick={() => setCategorie(c)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  categorie === c
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border bg-transparent text-foreground/75 hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtres.map((a) => (
              <Link
                key={a.slug}
                to="/articles/$slug"
                params={{ slug: a.slug }}
                className="card-paper group flex flex-col overflow-hidden"
              >
                {a.image && (
                  <div className="-mx-7 -mt-7 mb-5 aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={a.image}
                      alt={a.imageAlt ?? ""}
                      width={a.imageWidth}
                      height={a.imageHeight}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <span className="eyebrow text-xs">{a.category}</span>
                <h3 className="font-display text-xl mt-3 text-foreground leading-snug">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={13} /> {a.readingTime}
                  </span>
                  <time className="text-xs text-muted-foreground" dateTime={a.date}>
                    {new Date(a.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>

          {filtres.length === 0 && (
            <p className="text-muted-foreground">
              Aucun article dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>

      <CTA
        eyebrow="Une question sans réponse ?"
        title="Posez-la nous directement."
        text="Si un sujet vous préoccupe et que nous ne l'avons pas encore traité, écrivez-nous : les questions de nos lecteurs deviennent nos prochains articles."
      />
    </SiteLayout>
  );
}
