import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTA } from "@/components/CTA";
import { ArrowLeft, Clock, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

export function ArticleLayout({
  category,
  title,
  readingTime,
  date,
  updated,
  author = "Alexandre Pollet",
  children,
}: {
  category: string;
  title: string;
  readingTime: string;
  date: string;
  updated?: string;
  author?: string;
  children: ReactNode;
}) {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  useEffect(() => {
    const articleContainer = document.querySelector(".prose-article");
    if (!articleContainer) return;

    const slugify = (text: string) => {
      return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
    };

    const h2Elements = articleContainer.querySelectorAll("h2");
    const headingList: { id: string; text: string }[] = [];

    h2Elements.forEach((h2) => {
      if (!h2.id) {
        h2.id = slugify(h2.textContent || "");
      }
      headingList.push({
        id: h2.id,
        text: h2.textContent || "",
      });
    });

    setHeadings(headingList);

    if (headingList.length > 0) {
      setActiveId(headingList[0].id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, curr) => {
            return prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr;
          });
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
      },
    );

    h2Elements.forEach((h2) => observer.observe(h2));

    return () => observer.disconnect();
  }, [children]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 95;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsMobileTocOpen(false);
    }
  };

  return (
    <SiteLayout>
      {/* Bandeau de l'article */}
      <section
        className="pt-16 pb-12"
        style={{
          background: "var(--gradient-paper)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container-prose max-w-5xl">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> Tous les articles
          </Link>
          <div className="mt-8">
            <span className="eyebrow px-3 py-1 rounded-full border border-[color-mix(in_oklch,var(--grenat)_30%,transparent)] bg-[color-mix(in_oklch,var(--grenat)_8%,transparent)] text-xs">
              {category}
            </span>
          </div>
          <h1 className="display-1 mt-5 max-w-4xl leading-tight">{title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
            <span>Par {author}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {readingTime} de lecture
            </span>
            <span>·</span>
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {updated && (
              <>
                <span>·</span>
                <span>
                  Mis à jour le{" "}
                  {new Date(updated).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Grille principale */}
      <section className="pb-20 pt-12">
        <div className="container-prose max-w-5xl lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Contenu de l'article */}
          <article className="lg:col-span-8">
            {/* Sommaire mobile / tablette */}
            {headings.length > 0 && (
              <div className="lg:hidden mb-8 rounded-xl border border-border bg-card/60 backdrop-blur-md overflow-hidden">
                <button
                  onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-foreground hover:bg-muted/30 transition-colors"
                >
                  <span className="flex items-center gap-2 font-display text-lg">
                    Sommaire de l'article
                  </span>
                  {isMobileTocOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {isMobileTocOpen && (
                  <nav className="px-5 pb-5 pt-1 border-t border-border/50 bg-muted/10">
                    <ul className="space-y-2 text-sm">
                      {headings.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => handleScrollTo(item.id)}
                            className={`w-full text-left py-1 hover:text-foreground transition-colors ${
                              activeId === item.id
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                            }`}
                          >
                            {item.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            )}

            <div className="prose-article max-w-3xl">{children}</div>
          </article>

          {/* Sidebar sticky pour écrans larges */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 self-start space-y-8 pl-4">
            {/* Table des matières */}
            {headings.length > 0 && (
              <div className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
                <h3 className="font-display text-xl text-foreground font-semibold mb-4">
                  Sommaire
                </h3>
                <nav aria-label="Table des matières">
                  <ul className="space-y-3.5 text-sm relative border-l border-border/80 pl-4">
                    {headings.map((item) => {
                      const isActive = activeId === item.id;
                      return (
                        <li key={item.id} className="relative">
                          {isActive && (
                            <span
                              className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-background"
                              style={{
                                background: "var(--grenat)",
                                transform: "translate3d(0, -50%, 0)",
                              }}
                            />
                          )}
                          <button
                            onClick={() => handleScrollTo(item.id)}
                            className={`w-full text-left transition-colors font-sans leading-relaxed py-0.5 ${
                              isActive
                                ? "text-foreground font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {item.text}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            )}

            {/* Carte rendez-vous — vocabulaire verrouillé : pas de
                « conseil personnalisé » ni « étude de votre situation »
                dans un CTA (brief §2.2). */}
            <div className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm shadow-sm space-y-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "color-mix(in oklch, var(--grenat) 10%, transparent)",
                  border: "1px solid color-mix(in oklch, var(--grenat) 30%, transparent)",
                  color: "var(--grenat)",
                }}
              >
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground font-semibold">
                  Échanger avec un conseiller
                </h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Un premier échange de 30 minutes, offert et sans engagement, pour discuter de vos
                  projets de vive voix.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm cursor-pointer"
              >
                Réserver mon appel <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA de fin de page */}
      <CTA
        eyebrow="Passer à l'action"
        title="Discutons de vos projets."
        text="Un premier échange de 30 minutes, sans engagement, pour appliquer concrètement à votre cas ce que vous venez de lire."
      />
    </SiteLayout>
  );
}
