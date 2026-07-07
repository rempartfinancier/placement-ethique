export type ArticleCategory =
  | "Fondamentaux"
  | "Labels & Greenwashing"
  | "Performance"
  | "Enveloppes"
  | "Fiscalité"
  | "Transmission"
  | "Conseil";

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  category: ArticleCategory;
  date: string;
  /** Date de dernière mise à jour du contenu, si différente de la date de publication. */
  updated?: string;
  tags?: string[];
  featured?: boolean;
  /** Auteur affiché en byline et dans le JSON-LD. */
  author: "Alexandre Pollet" | "Sébastien Petrisot";
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};
