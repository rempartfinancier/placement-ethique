import { Fragment } from "react";
import type { ArticleMeta } from "../article-types";

/**
 * Bloc FAQ d'un article : à placer sous un <h2>Vos questions sur …</h2>.
 * Rend `meta.faq` (une seule source de vérité avec le JSON-LD FAQPage émis
 * par la route). Réponses en texte brut ; un lien éventuel se met dans un
 * paragraphe séparé après le bloc.
 */
export function FaqArticle({ items }: { items: NonNullable<ArticleMeta["faq"]> }) {
  return (
    <>
      {items.map(({ q, a }) => (
        <Fragment key={q}>
          <h3>{q}</h3>
          <p>{a}</p>
        </Fragment>
      ))}
    </>
  );
}
