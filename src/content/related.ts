import { articles } from "./articles";
import type { ArticleMeta } from "./article-types";

/**
 * Articles proches d'un article donné : score = 3 points pour la même
 * catégorie + 2 points par tag partagé. Égalité départagée par la date la
 * plus récente. Sert au bloc « À lire ensuite » de ArticleLayout, qui
 * garantit un maillage crawlable même quand le corps d'un article ne
 * renvoie pas vers ses voisins.
 */
export function getRelatedArticles(slug: string, limit = 4): ArticleMeta[] {
  const current = articles.find((a) => a.slug === slug);
  if (!current) return [];
  const tags = new Set((current.tags ?? []).map((t) => t.toLowerCase()));

  return articles
    .filter((a) => a.slug !== slug)
    .map((a) => {
      const shared = (a.tags ?? []).filter((t) => tags.has(t.toLowerCase())).length;
      return { article: a, score: shared * 2 + (a.category === current.category ? 3 : 0) };
    })
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score || (x.article.date < y.article.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.article);
}
