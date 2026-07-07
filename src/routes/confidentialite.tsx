import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { OUVRIR_COOKIES_EVENT } from "@/components/CookieConsent";

// Politique de confidentialité — structure canonique du brief (§9.3) :
// trois circuits de données distincts : (1) leads/newsletter (simulateurs,
// formulaires), (2) espace client (dossiers, situation patrimoniale),
// (3) pièces justificatives sur consentement dédié.
// Les durées de conservation affichées sont les standards du secteur
// (prospection 3 ans, obligations d'intermédiation 5 ans) — à faire valider
// par le cabinet avant toute communication officielle.

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Quelles données nous collectons, pourquoi, combien de temps, avec quels sous-traitants — et comment exercer vos droits.",
      },
      { property: "og:title", content: "Politique de confidentialité — Placement-éthique.fr" },
      { property: "og:url", content: "https://placement-ethique.fr/confidentialite" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/confidentialite" }],
  }),
  component: ConfidentialitePage,
});

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="card-paper p-6 md:p-8">
      <h2 className="font-display text-2xl text-foreground">{titre}</h2>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function ConfidentialitePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Vos données"
        title={
          <>
            Politique de{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              confidentialité
            </span>
          </>
        }
        lead="Ce que nous collectons, pourquoi, combien de temps, avec qui — écrit pour être lu, pas pour être caché en bas de page."
      />

      <section className="section pt-8">
        <div className="container-prose max-w-3xl space-y-6">
          <Bloc titre="Cookies et traceurs — votre choix, dès la première visite">
            <p>
              Un bandeau vous demande votre accord dès votre arrivée sur le site : la mesure
              d'audience (Google Tag Manager) ne se charge qu'après votre acceptation. Si vous
              refusez, aucun traceur n'est déposé — et le site fonctionne exactement pareil. Votre
              choix est conservé 13 mois au maximum, puis redemandé, et vous pouvez le modifier à
              tout moment ci-dessous ou via « Gérer les cookies » en bas de chaque page.
            </p>
            <p>
              L'espace client n'utilise aucun cookie publicitaire : seuls des identifiants
              techniques de session (authentification) sont nécessaires à son fonctionnement.
            </p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OUVRIR_COOKIES_EVENT))}
              className="btn-ghost text-sm"
            >
              Gérer mes préférences cookies
            </button>
          </Bloc>

          <Bloc titre="Responsable de traitement">
            <p>
              EXP Capital (éditeur de Placement-ethique.fr — voir{" "}
              <Link to="/mentions-legales" className="underline">
                mentions légales
              </Link>
              ) est responsable des traitements décrits ici. Contact pour toute question ou demande
              relative à vos données :{" "}
              <a href="mailto:contact@placement-ethique.fr" className="underline">
                contact@placement-ethique.fr
              </a>
              .
            </p>
          </Bloc>

          <Bloc titre="Ce que nous collectons, et pourquoi">
            <p>Trois circuits distincts, avec des finalités distinctes :</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Simulateurs et formulaires (avant tout compte) :</strong>{" "}
                email, prénom/nom éventuels, résultats de simulation. Finalités : vous envoyer les
                résultats demandés, la mini-série pédagogique de 3 emails annoncée au moment de la
                saisie, et — uniquement si vous avez coché la case dédiée (jamais pré-cochée) — la
                newsletter mensuelle. Base légale : votre consentement, retirable à tout moment
                (lien de désinscription dans chaque email).
              </li>
              <li>
                <strong className="text-foreground">Espace client (dossiers) :</strong> coordonnées,
                projet, situation patrimoniale et fiscale déclarée par tranches, pistes de
                placement et esquisse d'allocation. Finalités : préparer et documenter l'échange
                avec votre conseiller. Base légale : mesures précontractuelles à votre demande et
                consentements séparés par catégorie de donnée, recueillis à la transmission du
                dossier et archivés (libellé exact, version, date) dans votre espace, rubrique
                Profil &amp; données.
              </li>
              <li>
                <strong className="text-foreground">Pièces justificatives :</strong> uniquement si
                vous donnez le consentement dédié — les pièces sont conservées dans un espace privé
                et sécurisé, accessibles par vous et votre conseiller seulement.
              </li>
            </ul>
            <p>
              Aucune décision entièrement automatisée produisant des effets à votre égard n'est
              prise (art. 22 RGPD) : les résultats de nos simulateurs sont indicatifs, et toute
              proposition est formalisée par un conseiller, après un échange de vive voix.
            </p>
          </Bloc>

          <Bloc titre="Durées de conservation">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Prospects (leads, newsletter) :</strong> 3 ans
                après votre dernier contact avec nous, puis suppression ou anonymisation.
              </li>
              <li>
                <strong className="text-foreground">Dossiers de l'espace client sans suite :</strong>{" "}
                clôturés, ils restent consultables dans votre espace ; supprimés sur simple demande
                (voir « Vos droits »).
              </li>
              <li>
                <strong className="text-foreground">Dossiers ayant conduit à une souscription :</strong>{" "}
                conservés pendant la durée de la relation, puis pendant les durées légales
                applicables aux intermédiaires financiers (5 ans minimum après la fin de la
                relation, obligations LCB-FT le cas échéant).
              </li>
            </ul>
          </Bloc>

          <Bloc titre="Sous-traitants et destinataires">
            <p>Vos données ne sont jamais vendues ni transmises à des tiers commerciaux. Elles transitent par :</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Supabase</strong> — base de données et
                authentification de l'espace client (hébergement Union européenne) ;
              </li>
              <li>
                <strong className="text-foreground">Brevo</strong> (France) — envoi des emails de
                résultats, newsletter et notifications ;
              </li>
              <li>
                <strong className="text-foreground">iClosed</strong> — prise de rendez-vous en ligne
                (données que vous saisissez dans le calendrier) ;
              </li>
              <li>
                <strong className="text-foreground">Vercel</strong> (États-Unis, clauses
                contractuelles types) — hébergement du site ;
              </li>
              <li>
                <strong className="text-foreground">Google Tag Manager / mesure d'audience</strong> —
                statistiques de fréquentation.
              </li>
            </ul>
            <p>
              Dans le cadre d'une souscription décidée avec votre conseiller, les informations
              nécessaires sont transmises au partenaire concerné (assureur, société de gestion) —
              jamais avant, et jamais sans vous.
            </p>
          </Bloc>

          <Bloc titre="Vos droits">
            <p>
              Vous disposez des droits d'accès, de rectification, d'effacement, de limitation,
              d'opposition et de portabilité. Concrètement : vos données de l'espace client sont
              visibles et modifiables directement dans la rubrique Profil &amp; données ; une
              demande transmise se retire en un clic tant que rien n'est signé ; pour tout le
              reste, écrivez à{" "}
              <a href="mailto:contact@placement-ethique.fr" className="underline">
                contact@placement-ethique.fr
              </a>{" "}
              — nous répondons sous 30 jours, sous réserve des obligations légales de conservation.
            </p>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL
              (www.cnil.fr).
            </p>
          </Bloc>
        </div>
      </section>
    </SiteLayout>
  );
}
