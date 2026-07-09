import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles } from "@/content/articles";

const BASE_URL = "https://www.placement-ethique.fr";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/placements", changefreq: "monthly", priority: "0.9" },
          { path: "/enveloppes", changefreq: "monthly", priority: "0.9" },
          { path: "/objectifs", changefreq: "monthly", priority: "0.8" },
          { path: "/outils", changefreq: "monthly", priority: "0.9" },
          { path: "/outils/simulateur", changefreq: "monthly", priority: "0.8" },
          { path: "/outils/portefeuilles-types", changefreq: "monthly", priority: "0.8" },
          { path: "/outils/decodeur-label", changefreq: "monthly", priority: "0.9" },
          { path: "/outils/empreinte-carbone-epargne", changefreq: "monthly", priority: "0.8" },
          { path: "/outils/comparateur-eco-ptz", changefreq: "monthly", priority: "0.8" },
          { path: "/outils/per-isr", changefreq: "monthly", priority: "0.8" },
          { path: "/outils/retraite", changefreq: "monthly", priority: "0.8" },
          { path: "/outils/comparateur-enveloppes", changefreq: "monthly", priority: "0.8" },
          { path: "/outils/profil-investisseur", changefreq: "monthly", priority: "0.8" },
          { path: "/outils/type-investissement", changefreq: "monthly", priority: "0.8" },
          { path: "/outils/diagnostic", changefreq: "monthly", priority: "0.8" },
          { path: "/tarifs", changefreq: "monthly", priority: "0.9" },
          { path: "/articles", changefreq: "weekly", priority: "0.9" },
          { path: "/questions", changefreq: "monthly", priority: "0.8" },
          { path: "/a-propos", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          ...articles.map<SitemapEntry>((a) => ({
            path: `/articles/${a.slug}`,
            changefreq: "monthly",
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
