import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

// Mentions légales — texte canonique du brief (§9.1), commun au réseau
// EXP Capital : EXP Capital est la SEULE entité mentionnée ; jamais
// Épargne Plurielle ni Uptimi Conseil, ni aucun statut CIF/mandat.

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Mentions légales de Placement-ethique.fr : éditeur, cadre réglementaire (ORIAS), hébergement, réclamations et médiation.",
      },
      { property: "og:title", content: "Mentions légales — Placement-éthique.fr" },
      { property: "og:url", content: "https://placement-ethique.fr/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/mentions-legales" }],
  }),
  component: MentionsLegalesPage,
});

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="card-paper p-6 md:p-8">
      <h2 className="font-display text-2xl text-foreground">{titre}</h2>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function MentionsLegalesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Informations réglementaires"
        title={
          <>
            Mentions{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              légales
            </span>
          </>
        }
        lead="Qui édite ce site, dans quel cadre réglementaire nous exerçons, et vers qui vous tourner en cas de litige."
      />

      <section className="section pt-8">
        <div className="container-prose max-w-3xl space-y-6">
          <Bloc titre="Éditeur du site">
            <p>
              Placement-ethique.fr est édité par{" "}
              <strong className="text-foreground">EXP Capital</strong>, SASU au capital de 1 000 €,
              immatriculée au RCS de Versailles sous le n° 987 986 247, inscrite à l'ORIAS sous le
              n° 25005915 (www.orias.fr).
            </p>
            <p>Siège social : 25 bis rue de la Côte, 78220 Viroflay.</p>
            <p>
              Directeur de la publication : Alexandre Pollet.
              <br />
              Contact :{" "}
              <a href="mailto:contact@placement-ethique.fr" className="underline">
                contact@placement-ethique.fr
              </a>
              .
            </p>
            <p>
              Détail de notre rémunération (rétrocessions, grille par produit) :{" "}
              <Link to="/tarifs" className="underline">
                page Tarifs &amp; transparence
              </Link>
              .
            </p>
          </Bloc>

          <Bloc titre="Réclamations et médiation">
            <p>
              Toute réclamation peut être adressée à{" "}
              <a href="mailto:contact@placement-ethique.fr" className="underline">
                contact@placement-ethique.fr
              </a>
              . Nous en accusons réception sous 10 jours ouvrables et y répondons sous 2 mois au
              plus.
            </p>
            <p>
              En l'absence de résolution amiable, vous pouvez saisir le médiateur compétent selon la
              nature du produit concerné : La Médiation de l'Assurance (www.mediation-assurance.org)
              ou le médiateur de l'AMF (www.amf-france.org, rubrique « Le médiateur »).
            </p>
          </Bloc>

          <Bloc titre="Hébergement">
            <p>
              Site hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104,
              États-Unis (vercel.com). Données applicatives et espace client hébergés par Supabase
              (projet localisé dans l'Union européenne).
            </p>
          </Bloc>

          <Bloc titre="Avertissement et propriété intellectuelle">
            <p>
              Les contenus publiés sur ce site ont une vocation exclusivement informative et
              éducative. Ils ne constituent pas un conseil en investissement financier au sens de la
              réglementation AMF. Tout investissement comporte un risque de perte en capital. Les
              performances passées ne préjugent pas des performances futures.
            </p>
            <p>
              L'ensemble des contenus de ce site (textes, simulateurs, identité visuelle) est la
              propriété de son éditeur. Le traitement de vos données personnelles est décrit dans
              notre{" "}
              <Link to="/confidentialite" className="underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </Bloc>
        </div>
      </section>
    </SiteLayout>
  );
}
