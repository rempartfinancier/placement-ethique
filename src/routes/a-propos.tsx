import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import {
  ArrowRight,
  CalendarCheck,
  Eye,
  Link2,
  Scale,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      {
        title:
          "Qui sommes-nous ? Le cabinet qui vérifie avant d'affirmer | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Deux conseillers indépendants, un cabinet né d'un ras-le-bol du greenwashing : notre histoire, nos valeurs et notre rémunération publiée en clair — sans vernis.",
      },
      {
        property: "og:title",
        content: "Notre cabinet — Placement-éthique.fr",
      },
      {
        property: "og:url",
        content: "https://placement-ethique.fr/a-propos",
      },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/a-propos" }],
  }),
  component: AProposPage,
});

/* ─────────────────────────── Données de la page ─────────────────────────── */

const conseillers = [
  {
    img: "/sebastien.jpeg",
    fallback: "Sebastien+Petrisot",
    nom: "Sébastien Petrisot",
    role: "Responsable relations investisseurs",
    linkedin: "https://www.linkedin.com/in/s%C3%A9bastien-p%C3%A9trisot-a94832111/",
    bio: "Sébastien n'a pas choisi ce métier pour parler de finance en théorie, mais pour aider les épargnants à prendre de meilleures décisions. Ce qu'il exige d'un placement responsable tient en deux mots : des règles claires et des actifs tangibles. Une méthodologie qui se lit noir sur blanc, des critères qui se retrouvent dans le portefeuille — pas une promesse posée sur une plaquette.",
  },
  {
    img: "/alexandre.jpg",
    fallback: "Alexandre+Pollet",
    nom: "Alexandre Pollet",
    role: "Communication, contenu et partenariats",
    linkedin: "https://www.linkedin.com/in/alexandre-pollet-98704ba1/",
    bio: "Alexandre veille à ce que la pédagogie reste au centre de notre démarche. Il décortique les offres du marché — méthodologies des labels, documents réglementaires, reportings —, structure nos comparatifs et s'assure que nos partenaires acceptent le niveau d'exigence que nous affichons ici : transparence sur les frais, réponses claires aux questions qui fâchent.",
  },
];

const valeurs = [
  {
    icon: SearchCheck,
    titre: "Vérification",
    phrase: "Nous sourçons avant d'affirmer — jamais l'inverse.",
  },
  {
    icon: Eye,
    titre: "Transparence sur la rémunération",
    phrase: "Qui nous paie, combien et pourquoi : notre grille est publiée en clair, chiffre par chiffre.",
  },
  {
    icon: Scale,
    titre: "Exigence sans dogmatisme",
    phrase: "Aucune posture absolutiste sur un label ou une stratégie : quand un débat existe, nous l'exposons au lieu de le trancher à votre place.",
  },
  {
    icon: CalendarCheck,
    titre: "Constance dans la durée",
    phrase: "L'accompagnement ne s'arrête pas à la signature : nous vérifions dans le temps que vos placements restent alignés avec vos exigences.",
  },
];

/* ────────────────────────────────── Page ────────────────────────────────── */

function AProposPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Notre cabinet"
        title={
          <>
            Deux conseillers, une règle :{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              vérifier avant d'affirmer
            </span>
            .
          </>
        }
        lead="Derrière ce site, pas d'algorithme ni de plateau téléphonique : deux conseillers indépendants qui pensent qu'un placement responsable doit être lisible, vérifiable et cohérent avec vos valeurs — et que cette cohérence se démontre, pièces à l'appui, plutôt qu'elle ne se proclame."
      />

      {/* 1. Qui sommes-nous ? */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <div className="text-center mb-14">
            <p className="eyebrow justify-center">Qui sommes-nous ?</p>
            <h2 className="display-2 mt-4">Deux personnes réelles, joignables, responsables de ce qu'elles écrivent</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {conseillers.map((c) => (
              <article key={c.nom} className="card-paper flex flex-col items-center text-center">
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-background bg-muted shadow-md">
                  <img
                    src={c.img}
                    alt={c.nom}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${c.fallback}&background=random`;
                    }}
                  />
                </div>
                <h3 className="font-display text-2xl mt-6">{c.nom}</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "var(--grenat)" }}>
                  {c.role}
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-foreground/80">{c.bio}</p>
                <a
                  href={c.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 text-sm font-medium underline underline-offset-4 transition-colors hover:text-[var(--grenat)]"
                >
                  Profil LinkedIn
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Récit d'origine + encadré d'humilité + valeurs */}
      <section className="section border-b border-border/40" style={{ background: "var(--gradient-paper)" }}>
        <div className="container-prose">
          <div className="grid items-start gap-12 md:grid-cols-12 lg:gap-16">
            {/* Récit */}
            <div className="md:col-span-7">
              <p className="eyebrow">D'où vient ce cabinet</p>
              <h2 className="display-3 mt-4 font-display">
                Né d'un constat : l'éthique est devenue un argument de vente avant d'être une méthode
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Labels qui se multiplient, fonds reclassés du jour au lendemain vers des catégories
                  réglementaires moins exigeantes, promesses d'impact rarement vérifiées : l'investissement
                  responsable a un problème de confiance — et il l'a bien cherché. Beaucoup d'épargnants qui
                  veulent que leur argent serve leurs valeurs finissent par renoncer, non par manque de
                  produits, mais faute de savoir à qui se fier.
                </p>
                <p>
                  Placement-ethique.fr est né pour répondre à cette défiance avec la même rigueur qu'un
                  gestionnaire de patrimoine applique à la fiscalité ou à l'allocation d'actifs : vérifier
                  avant d'affirmer, sourcer avant de proposer, et dire clairement ce qui est solide — et ce
                  qui ne l'est pas. Nous lisons les documents réglementaires plutôt que les brochures, et
                  nous écrivons publiquement ce que nous en concluons.
                </p>
                <div
                  className="my-6 border-l-2 py-1 pl-6"
                  style={{ borderColor: "var(--grenat)" }}
                >
                  <p className="text-[15px] leading-relaxed text-foreground/85">
                    Soyons clairs sur un point : nous ne prétendons pas détenir une vérité définitive sur ce
                    qui est « vraiment » éthique. Il n'existe pas de référentiel unique et incontesté en la
                    matière, et quiconque affirme le contraire cherche surtout à vous vendre le sien. Notre
                    métier est de vérifier les faits — ce qu'un label garantit, ce qu'un fonds détient, ce
                    qu'un reporting publie. Là où plusieurs lectures légitimes coexistent — exclure les
                    secteurs controversés ou y rester pour peser en tant qu'actionnaire, se satisfaire d'un
                    label ou exiger davantage — nous vous présentons les options et leurs nuances, plutôt que
                    d'imposer la nôtre.
                  </p>
                </div>
                <p>
                  Notre indépendance se mesure à un fait simple : nous n'avons aucun fonds « maison » à
                  défendre, aucune banque ni société de gestion actionnaire de notre structure. Nos liens
                  commerciaux existent — ils sont décrits plus bas et chiffrés sur notre page de tarifs, pas
                  dissimulés en bas de page.
                </p>
              </div>
            </div>

            {/* Valeurs */}
            <div className="md:col-span-5 card-paper">
              <p className="eyebrow" style={{ color: "var(--grenat)" }}>
                Nos valeurs
              </p>
              <ul className="mt-7 space-y-7">
                {valeurs.map(({ icon: Icon, titre, phrase }) => (
                  <li key={titre} className="flex gap-4">
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "var(--accent)", color: "var(--grenat)" }}
                    >
                      <Icon size={18} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-lg">{titre}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{phrase}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Approche éditoriale */}
      <section className="section border-b border-border/40">
        <div className="container-prose max-w-3xl text-center">
          <p className="eyebrow justify-center">Notre approche éditoriale</p>
          <h2 className="display-2 mt-4">Éclairer d'abord. Vendre, jamais.</h2>
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-foreground/80">
            <p>
              Nous publions, en clair, les réponses aux questions que les épargnants se posent réellement :
              ce que coûte un placement, ce qu'un label garantit — et ne garantit pas —, les limites d'un
              produit, les comparaisons que l'industrie préfère éviter. Ce que d'autres réservent à un
              rendez-vous commercial, nous le mettons en ligne.
            </p>
            <p>
              Notre conviction : un épargnant bien informé prend de meilleures décisions — et devient, le
              moment venu, un client serein. C'est aussi une question de cohérence : on ne peut pas
              reprocher au marché son opacité et cultiver la sienne.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/articles" className="btn-ghost">
              Parcourir nos articles <ArrowRight size={15} />
            </Link>
            <Link to="/questions" className="btn-ghost">
              Lire nos réponses franches <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Rémunération */}
      <section className="section border-b border-border/40">
        <div className="container-prose max-w-3xl">
          <div
            className="rounded-3xl border p-8 md:p-12"
            style={{
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
            }}
          >
            <p className="eyebrow" style={{ color: "var(--grenat)" }}>
              Transparence radicale
            </p>
            <h2 className="display-3 mt-3 font-display">Comment sommes-nous rémunérés ?</h2>
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-foreground/85">
              <p>
                La question mérite une réponse franche — c'est la première que nous posons aux acteurs que
                nous examinons, elle vaut donc aussi pour nous. Nos rendez-vous sont offerts, sans
                engagement.
              </p>
              <p>
                Si vous décidez d'investir par notre intermédiaire, nous sommes rémunérés par les
                partenaires dont nous distribuons les solutions — assureurs, sociétés de gestion,
                plateformes — sous forme de commissions et de rétrocessions sur les frais. C'est le modèle
                classique du courtage et de l'apport d'affaires : nous l'assumons, et nous le documentons.
              </p>
              <p className="font-medium text-foreground">
                Plutôt que de l'écrire en petits caractères, nous avons publié notre grille de rémunération,
                solution par solution, chiffre par chiffre.
              </p>
            </div>
            <Link to="/tarifs" className="btn-primary mt-8">
              Consulter notre grille complète <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Le Réseau EXP Capital */}
      <section
        className="section relative overflow-hidden text-primary-foreground"
        style={{ background: "var(--gradient-encre)" }}
      >
        <div className="pointer-events-none absolute top-0 right-0 p-12 opacity-5" aria-hidden>
          <ShieldCheck size={400} />
        </div>
        <div
          className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-grenat)" }}
          aria-hidden
        />
        <div className="container-prose relative z-10 max-w-3xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4" style={{ color: "var(--grenat-clair)" }}>
              <ShieldCheck size={32} aria-hidden />
              <p className="eyebrow" style={{ color: "var(--grenat-clair)" }}>
                Notre cadre juridique
              </p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 shadow-md backdrop-blur-sm">
              <span className="font-display text-xl font-bold uppercase tracking-widest text-white">
                EXP Capital
              </span>
            </div>
          </div>

          <h2 className="display-2 text-white">Le Réseau EXP Capital</h2>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-white/80">
            <p>
              Un site qui vous demande de vérifier qui se cache derrière chaque promesse vous doit la même
              clarté sur sa propre structure. La voici.
            </p>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <Link2 className="mt-1 shrink-0" size={18} style={{ color: "var(--grenat-clair)" }} aria-hidden />
                <span>
                  <strong className="text-white">Placement-ethique.fr</strong> est notre identité et notre
                  philosophie de conseil.
                </span>
              </li>
              <li className="flex gap-3">
                <Link2 className="mt-1 shrink-0" size={18} style={{ color: "var(--grenat-clair)" }} aria-hidden />
                <span>
                  <strong className="text-white">EXP Capital</strong> (SASU au capital de 1 000 €, RCS
                  Versailles 987 986 247) est l'entité qui édite ce site : elle est inscrite à l'ORIAS sous
                  le n° 25005915 (
                  <a
                    href="https://www.orias.fr"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                    style={{ color: "var(--grenat-clair)" }}
                  >
                    www.orias.fr
                  </a>
                  ) et nous fournit le cadre et les outils sécurisés pour exercer notre métier.
                </span>
              </li>
              <li className="flex gap-3">
                <Link2 className="mt-1 shrink-0" size={18} style={{ color: "var(--grenat-clair)" }} aria-hidden />
                <span>
                  Les contenus de ce site sont informatifs et éducatifs : ils ne constituent pas un conseil
                  en investissement. Tout ce qui touche à votre situation personnelle se décide de vive
                  voix, avec votre conseiller — jamais depuis une page web.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. CTA final */}
      <CTA
        eyebrow="Faisons connaissance"
        title="Vérifions ensemble ce que votre épargne finance"
        text="Un premier échange offert, sans engagement, pour faire le point sur vos placements actuels, vos objectifs et vos exigences — et repartir avec des pistes claires, expliquées et sourcées."
      />
    </SiteLayout>
  );
}
