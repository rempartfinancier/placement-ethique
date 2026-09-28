import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { ArrowRight, ChevronDown } from "lucide-react";

const TITLE = "CGP investissement responsable : méthode et tarifs";
const DESCRIPTION =
  "Comment travaille un cabinet de gestion de patrimoine spécialisé en investissement responsable : déroulé du rendez-vous, vérification des supports, rémunération.";
const URL = "https://placement-ethique.fr/cgp-investissement-responsable";

/* ─────────────────────────── FAQ (aussi en JSON-LD) ─────────────────────────── */

const faqItems: { q: string; a: string }[] = [
  {
    q: "Qu'est-ce qu'un CGP spécialisé en investissement responsable ?",
    a: "C'est un conseiller en gestion de patrimoine qui aborde l'épargne, la retraite, la fiscalité et la transmission en intégrant des critères d'investissement responsable : lecture des labels, de la classification SFDR et des inventaires de portefeuille. Sa valeur ajoutée est de vérifier ce que les supports font réellement avant de les proposer.",
  },
  {
    q: "Le premier rendez-vous est-il payant ?",
    a: "Non. Le premier échange et le bilan patrimonial sont offerts et sans engagement. Vous repartez avec une lecture de votre situation et des points de vérification, que vous décidiez ensuite de travailler avec nous ou non.",
  },
  {
    q: "Comment le cabinet est-il rémunéré ?",
    a: "Par défaut, vous ne réglez aucun honoraire : la rémunération est versée par les partenaires (compagnies d'assurance, sociétés de gestion, opérateurs), sous forme de rétrocessions ou de commissions. Des lettres de mission tarifées existent pour des audits ponctuels, uniquement à votre demande. La grille est publiée chiffre par chiffre sur la page tarifs.",
  },
  {
    q: "Cette rémunération influence-t-elle ce qui est proposé ?",
    a: "C'est la bonne question, et le risque existe dans tout modèle de rémunération par les partenaires. C'est pourquoi la grille est publique, que les marges d'entrée sont plafonnées, et que chaque piste est accompagnée de ses frais et de ses risques avant toute décision.",
  },
  {
    q: "Les contenus du site sont-ils des conseils ?",
    a: "Non : les contenus sont informatifs et éducatifs et ne constituent pas un conseil en investissement. Le mot « recommandation » est réservé à un avis écrit formulé par un conseiller après échange avec vous. EXP Capital est inscrite à l'ORIAS sous le numéro 25005915, vérifiable sur orias.fr.",
  },
  {
    q: "Peut-on travailler avec vous à distance ?",
    a: "Oui, les échanges se font en visioconférence, partout en France.",
  },
  {
    q: "Que se passe-t-il après la mise en place ?",
    a: "Un suivi est prévu : les critères ESG d'un fonds peuvent évoluer, un label peut être retiré, une stratégie peut changer. Le suivi vérifie que les supports tiennent leur promesse dans la durée.",
  },
];

export const Route = createFileRoute("/cgp-investissement-responsable")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
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
              name: "CGP en investissement responsable",
              item: URL,
            },
          ],
        }),
      },
    ],
  }),
  component: CgpPage,
});

/* ─────────────────────────── Données de la page ─────────────────────────── */

const etapes: { titre: string; corps: string }[] = [
  {
    titre: "Un premier échange, offert",
    corps:
      "En visioconférence, pour cartographier votre situation, vos objectifs et vos exigences éthiques. Nous écoutons d'abord ; vendre n'est pas l'objectif de ce rendez-vous. Vous repartez avec des points de vérification, que nous travaillions ensemble ensuite ou non.",
  },
  {
    titre: "Le bilan patrimonial",
    corps:
      "Revenus, patrimoine, contrats existants, fiscalité, objectifs de retraite ou de transmission. Nous relisons aussi vos contrats actuels : frais réels, supports détenus, contenu de la gamme responsable.",
  },
  {
    titre: "Des pistes, puis une recommandation écrite",
    corps:
      "Nous présentons des pistes chiffrées avec leurs risques et leurs frais. Si vous le souhaitez, un conseiller formule ensuite une recommandation écrite : ce terme est réservé à l'avis d'un conseiller humain, jamais à la sortie d'un outil.",
  },
  {
    titre: "La vérification des supports",
    corps:
      "Avant qu'un support ne soit proposé, nous lisons ses documents réglementaires : label, classification SFDR, inventaire du portefeuille, méthode, frais. Un fonds « vert » n'entre dans nos pistes qu'après ce contrôle.",
  },
  {
    titre: "La mise en place et le suivi",
    corps:
      "Une fois le contrat en place, un suivi vérifie que les supports tiennent leur promesse : les critères d'un fonds peuvent changer, un label peut être perdu.",
  },
];

const compare: { critere: string; cgp: string; banque: string; seul: string }[] = [
  {
    critere: "Gamme de supports",
    cgp: "Plusieurs partenaires assureurs et sociétés de gestion",
    banque: "Le plus souvent la gamme de la banque ou de son groupe",
    seul: "Tout ce qui est accessible en ligne, à vous de trier",
  },
  {
    critere: "Lecture des critères responsables",
    cgp: "Vérification documentaire avant proposition",
    banque: "Variable selon le conseiller et la gamme",
    seul: "Entièrement à votre charge",
  },
  {
    critere: "Vue d'ensemble (fiscalité, retraite, transmission)",
    cgp: "Oui, c'est le cœur du métier",
    banque: "Partielle, centrée sur les produits maison",
    seul: "Vous assemblez vous-même",
  },
  {
    critere: "Rémunération",
    cgp: "Par les partenaires (grille publiée) ; honoraires sur demande",
    banque: "Intégrée à la relation bancaire",
    seul: "Aucune, mais aucun accompagnement",
  },
];

const nonFaisons: string[] = [
  "Nous ne sommes pas une agence de notation ESG : nous vérifions et expliquons, nous ne certifions pas qu'un fonds est éthique.",
  "Nous ne garantissons ni performance ni absence de perte en capital.",
  "Nous ne présentons pas nos contenus comme des conseils : ils sont informatifs et éducatifs, et « recommandation » désigne uniquement un avis écrit d'un conseiller après échange.",
  "Nous ne nommons jamais un fonds ou une société comme exemple de greenwashing sans source publique vérifiable.",
];

/* ─────────────────────────── Page ─────────────────────────── */

function CgpPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Le cabinet"
        title={
          <>
            Un CGP en{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              investissement responsable
            </span>{" "}
            : comment nous travaillons
          </>
        }
        lead="Ce qu'un cabinet de gestion de patrimoine fait concrètement pour votre épargne responsable, ce qu'il ne fait pas, et comment il est rémunéré — sans zone d'ombre."
      />

      <section className="pb-10 pt-6">
        <div className="container-prose max-w-3xl prose-article">
          <div className="callout callout-grenat">
            <p>
              <strong>En résumé :</strong> nous sommes deux conseillers en gestion de patrimoine
              (Alexandre Pollet et Sébastien Petrisot), au sein d'EXP Capital. Nous vérifions ce que
              les supports « responsables » font réellement avant de les proposer. Le premier
              échange et le bilan patrimonial sont offerts ; par défaut, vous ne payez aucun
              honoraire, notre rémunération étant versée par nos partenaires et publiée en clair.
            </p>
          </div>

          <p>
            Vous avez décidé que votre épargne devait cesser de financer n'importe quoi. Mais entre
            les offres bancaires étiquetées « durable », les plateformes en ligne et les avis
            contradictoires, vous ne savez pas à qui faire confiance — ni combien coûte réellement
            un accompagnement.
          </p>
          <p>
            Cette page répond à trois questions : que fait un CGP spécialisé en investissement
            responsable, comment se déroule le travail avec nous, et ce que cela coûte.
          </p>

          <h2>
            Que fait un conseiller en gestion de patrimoine spécialisé en investissement responsable
            ?
          </h2>
          <p>
            Un conseiller en gestion de patrimoine (CGP) aborde votre situation dans son ensemble :
            épargne, retraite, fiscalité, transmission. La spécialisation en investissement
            responsable ajoute une exigence : lire les documents des supports — labels,
            classification SFDR, inventaire des positions — avant de les proposer, plutôt que de
            reprendre leur argumentaire commercial.
          </p>

          <h2>Comment se déroule le travail avec nous ?</h2>
          <ol>
            {etapes.map((e) => (
              <li key={e.titre}>
                <strong>{e.titre}.</strong> {e.corps}
              </li>
            ))}
          </ol>

          <h2>CGP, conseiller bancaire ou investir seul : que choisir ?</h2>
          <table>
            <thead>
              <tr>
                <th>Critère</th>
                <th>Cabinet de gestion de patrimoine</th>
                <th>Conseiller bancaire</th>
                <th>Investir seul</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((c) => (
                <tr key={c.critere}>
                  <td>
                    <strong>{c.critere}</strong>
                  </td>
                  <td>{c.cgp}</td>
                  <td>{c.banque}</td>
                  <td>{c.seul}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Aucune option n'est meilleure en toutes circonstances. Investir seul convient à qui a le
            temps et la méthode ; un accompagnement devient utile quand plusieurs enjeux se
            croisent. Notre comparatif détaillé :{" "}
            <Link
              to="/articles/$slug"
              params={{ slug: "cgp-independant-vs-conseiller-bancaire-ethique" }}
            >
              CGP indépendant ou conseiller bancaire
            </Link>
            .
          </p>

          <h2>Comment est rémunéré le cabinet ?</h2>
          <p>
            Par défaut, vous ne réglez aucun honoraire : nos partenaires (compagnies d'assurance,
            sociétés de gestion, opérateurs) nous rémunèrent, sous forme de rétrocessions ou de
            commissions. Ce modèle est courant ; il pose une question légitime sur l'influence de la
            rémunération sur ce qui est proposé. Notre réponse est la publication de la grille,
            chiffre par chiffre, sur la page <Link to="/tarifs">Comment nous sommes rémunérés</Link>
            . Des lettres de mission tarifées sont possibles pour des audits ponctuels, uniquement à
            votre demande. Le détail des frais des contrats est aussi abordé dans{" "}
            <Link
              to="/articles/$slug"
              params={{ slug: "frais-conseiller-gestion-patrimoine-independant" }}
            >
              Combien coûte un conseiller en gestion de patrimoine
            </Link>
            .
          </p>

          <h2>Ce que nous ne faisons pas</h2>
          <ul>
            {nonFaisons.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>

          <h2>Qui sommes-nous ?</h2>
          <p>
            Placement-ethique.fr est édité par EXP Capital (SASU, RCS Versailles 987 986 247, ORIAS
            n° 25005915, vérifiable sur{" "}
            <a href="https://www.orias.fr" target="_blank" rel="noreferrer">
              www.orias.fr
            </a>
            ). Les deux conseillers, leur parcours et leur méthode sont présentés sur la page{" "}
            <Link to="/a-propos">à propos</Link>.
          </p>
          <p>
            Avant de nous rencontrer, vous pouvez déjà avancer : testez votre{" "}
            <a href="/outils/profil-investisseur">profil investisseur</a>, comparez les{" "}
            <a href="/outils/comparateur-enveloppes">enveloppes</a> ou vérifiez votre contrat actuel
            avec notre <Link to="/guide">guide gratuit : diagnostic d'un contrat ISR</Link>. Pour la
            vue d'ensemble du sujet, lisez{" "}
            <Link to="/placement-ethique">le guide du placement éthique</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-4">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="display-2 mt-4">Vos questions sur l'accompagnement</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  <h3 className="text-base font-medium">{q}</h3>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Cette page est informative et éducative : elle ne constitue ni une recommandation ni un
            conseil en investissement.{" "}
            <Link to="/tarifs" className="inline-flex items-center gap-1">
              Voir la grille de rémunération <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </section>

      <CTA
        eyebrow="Prochaine étape"
        title="Échanger avec un conseiller"
        text="Un premier échange offert et sans engagement, pour cartographier votre situation, vos objectifs et vos exigences éthiques."
      />
    </SiteLayout>
  );
}
