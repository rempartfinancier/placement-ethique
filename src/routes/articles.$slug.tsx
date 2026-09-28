import { createFileRoute, notFound } from "@tanstack/react-router";
import { getArticle, articleContent } from "@/content/articles";
import { ArticleLayout } from "@/components/ArticleLayout";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return {};
    return {
      meta: [
        { title: `${a.title} | Placement-éthique.fr` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://placement-ethique.fr/articles/${a.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://placement-ethique.fr/articles/${a.slug}` }],
      scripts: [
        ...(a.faq?.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: a.faq.map(({ q, a: answer }) => ({
                    "@type": "Question",
                    name: q,
                    acceptedAnswer: { "@type": "Answer", text: answer },
                  })),
                }),
              },
            ]
          : []),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            datePublished: a.date,
            dateModified: a.updated ?? a.date,
            author: {
              "@type": "Person",
              name: a.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Placement-éthique.fr",
              logo: {
                "@type": "ImageObject",
                url: "https://placement-ethique.fr/favicon.svg",
              },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://placement-ethique.fr/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Articles",
                item: "https://placement-ethique.fr/articles",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: a.title,
                item: `https://placement-ethique.fr/articles/${a.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <ArticleLayout
      category="Article introuvable"
      title="Cet article n'existe pas"
      readingTime="—"
      date={new Date().toISOString()}
    >
      <p>L'article demandé n'a pas été trouvé. Consultez la liste complète sur la page articles.</p>
    </ArticleLayout>
  ),
  errorComponent: ({ error }) => (
    <ArticleLayout
      category="Erreur"
      title="Une erreur est survenue"
      readingTime="—"
      date={new Date().toISOString()}
    >
      <p>{error.message}</p>
    </ArticleLayout>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const Content = articleContent[article.slug];
  return (
    <ArticleLayout
      slug={article.slug}
      category={article.category}
      title={article.title}
      readingTime={article.readingTime}
      date={article.date}
      updated={article.updated}
      author={article.author}
    >
      {Content ? <Content /> : <p>Contenu en cours de rédaction.</p>}
    </ArticleLayout>
  );
}
