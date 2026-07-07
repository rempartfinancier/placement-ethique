import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Lien interne vers un autre article, typé et SPA — à utiliser dans le
 * corps des articles à la place de <a href> (qui provoquerait un
 * rechargement complet) et de Link to="/articles/<slug>" en littéral
 * (qui casse le typage du routeur, piège documenté du réseau).
 */
export function LienArticle({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <Link to="/articles/$slug" params={{ slug }}>
      {children}
    </Link>
  );
}
