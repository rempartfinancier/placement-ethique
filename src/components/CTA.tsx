import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA({
  eyebrow = "Prochaine étape",
  title = "Parlons de ce que votre épargne finance vraiment",
  text = "Un premier échange de 30 minutes, sans engagement, pour cartographier votre situation, vos objectifs et vos exigences — et identifier les leviers les plus pertinents pour vous.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container-prose">
        <div
          className="rounded-3xl p-10 md:p-16 text-primary-foreground relative overflow-hidden"
          style={{ background: "var(--gradient-encre)" }}
        >
          <div
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-grenat)" }}
            aria-hidden
          />
          <p className="eyebrow" style={{ color: "var(--grenat-clair)" }}>
            {eyebrow}
          </p>
          <h2 className="display-2 mt-4 max-w-2xl">{title}</h2>
          <p
            className="lead mt-5 max-w-2xl"
            style={{ color: "color-mix(in oklch, white 85%, transparent)" }}
          >
            {text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-grenat">
              Réserver un échange <ArrowRight size={16} />
            </Link>
            <Link
              to="/questions"
              className="btn-ghost"
              style={{ color: "white", borderColor: "color-mix(in oklch, white 25%, transparent)" }}
            >
              Lire nos réponses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
