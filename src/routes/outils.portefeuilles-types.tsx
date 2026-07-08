import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, FileCheck2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { FicheAllocation } from "@/components/simulators/FicheAllocation";
import { pct } from "@/components/simulators/format";
import { CONTRATS, type ContratId } from "@/lib/simulateur-placements/contrats";
import {
  AVERTISSEMENT_PROFIL_TYPE,
  ORDRE_PROFILS,
  PROFILS_TYPES,
  type ProfilTypeId,
} from "@/lib/simulateur-placements/profils";

export const Route = createFileRoute("/outils/portefeuilles-types")({
  head: () => ({
    meta: [
      { title: "Portefeuilles éthiques types : où en est l'univers ISR ? | Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Nos exemples de portefeuilles éthiques types (prudent, équilibré, dynamique) seront publiés dès que l'univers de fonds ISR de nos contrats sera vérifié — jamais une allocation inventée. Suivez l'avancement.",
      },
      {
        property: "og:title",
        content: "Portefeuilles éthiques types — univers ISR en cours de vérification",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/portefeuilles-types" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils/portefeuilles-types" }],
  }),
  component: PortefeuillesTypesPage,
});

/* ─────────────────────────── Données de la page ─────────────────────────── */

const aVenir = [
  {
    titre: "L'univers de fonds ISR référencé",
    body: "Chaque support réellement disponible sur Patrimoine Vie Plus et Version Absolue 2 : nom, ISIN, catégorie, classification SFDR relevée sur le document réglementaire — jamais sur une brochure commerciale.",
  },
  {
    titre: "L'allocation cible de chaque profil",
    body: "La pondération exacte des trois profils (prudent, équilibré, dynamique), telle que transmise et confirmée par écrit par le cabinet — pas une allocation générique de marché.",
  },
  {
    titre: "Les indicateurs de risque",
    body: "Indicateur de risque (SRI), volatilité et perte maximale sur 3 ans de chaque portefeuille, calculés une fois les supports connus.",
  },
  {
    titre: "L'historique de performance",
    body: "Un backtest de l'allocation, présenté avec son cadre : hypothèse illustrative non contractuelle, les performances passées ne préjugent pas des performances futures, et tout placement en unités de compte comporte un risque de perte en capital.",
  },
];

/* ────────────────────────────────── Page ────────────────────────────────── */

function PortefeuillesTypesPage() {
  const [profilActif, setProfilActif] = useState<ProfilTypeId>("equilibre");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Portefeuilles types"
        title={
          <>
            Nos portefeuilles éthiques types :{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              vérifiés avant d'être publiés
            </span>
          </>
        }
        lead="Trois profils structureront nos exemples de portefeuilles éthiques types — prudent, équilibré, dynamique. Nous ne publions une allocation, un ISIN ou un historique de performance qu'après réception et vérification de l'univers de fonds ISR par le cabinet : jamais une simulation inventée pour remplir la page."
      >
        <span className="badge-a-valider">
          <Clock size={13} aria-hidden /> Univers ISR en cours de communication par le cabinet
        </span>
      </PageHero>

      <section className="section">
        <div className="container-prose max-w-4xl">
          <div className="flex flex-wrap gap-3 mb-8">
            {ORDRE_PROFILS.map((id) => {
              const actif = profilActif === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setProfilActif(id)}
                  className="rounded-full border px-5 py-2 text-sm font-medium transition-colors"
                  style={
                    actif
                      ? {
                          borderColor: "var(--grenat)",
                          background: "color-mix(in oklch, var(--grenat) 8%, var(--card))",
                          color: "var(--foreground)",
                        }
                      : undefined
                  }
                >
                  {PROFILS_TYPES[id].libelle}
                </button>
              );
            })}
          </div>

          <FicheAllocation profil={PROFILS_TYPES[profilActif]} />

          {/* Ce qui arrive */}
          <div className="mt-12">
            <p className="eyebrow mb-4">Ce que nous publierons dès confirmation</p>
            <h2 className="display-3 font-display max-w-xl">
              Pas de composition fictive en attendant — voici ce qui manque, et pourquoi
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              Un cabinet qui vérifie ce que les labels garantissent avant de vous en parler doit
              d'abord s'appliquer la même règle à lui-même : tant que l'univers de fonds ISR de nos
              contrats ne nous a pas été transmis par écrit, cette page reste honnête sur ce qui
              manque plutôt que de l'inventer.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {aVenir.map((item) => (
                <div key={item.titre} className="card-paper flex items-start gap-4">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--accent)", color: "var(--grenat)" }}
                  >
                    <FileCheck2 size={16} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{item.titre}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sur quels contrats ? */}
          <div className="mt-12">
            <p className="eyebrow mb-4">
              Sur quels contrats les futures allocations s'appliqueront
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {(Object.keys(CONTRATS) as ContratId[]).map((id) => {
                const contrat = CONTRATS[id];
                const grilles = (["av", "per"] as const).filter((e) => contrat.frais[e]);
                return (
                  <div key={id} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-display text-xl text-foreground">{contrat.libelle}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {contrat.assureur} · distribution {contrat.distribution}
                    </p>
                    <p className="text-sm text-foreground/85 mt-3 leading-relaxed">
                      {contrat.modaliteSouscription}
                    </p>
                    {grilles.length > 0 && (
                      <p className="text-xs text-muted-foreground mt-3">
                        Frais de gestion :{" "}
                        {grilles
                          .map(
                            (e) =>
                              `${e === "av" ? "assurance vie" : "PER"} ${pct(contrat.frais[e]!.gestionUcPct, 2)} %/an`,
                          )
                          .join(" · ")}
                        {" — "}
                        <Link to="/tarifs" className="underline underline-offset-4">
                          grille complète des frais
                        </Link>
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-3">
                      Univers de supports ISR référencés sur ce contrat : en cours de communication
                      par le cabinet.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Avertissement produit — repris tel quel */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-6">
            <p className="eyebrow mb-3">À lire avant toute allocation</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {AVERTISSEMENT_PROFIL_TYPE}
            </p>
          </div>

          <p className="mt-10 text-sm text-muted-foreground leading-relaxed">
            En attendant la publication de ces allocations, vous pouvez déjà projeter une épargne
            dans le temps avec des hypothèses librement modifiables (frais, fiscalité de l'assurance
            vie et du PER, an par an) :{" "}
            <Link to="/outils/simulateur" className="text-foreground underline underline-offset-4">
              utilisez le simulateur de projection
            </Link>
            . Aucun fonds n'y est nommé : la projection reste une hypothèse générique, le document
            d'informations clés (DIC) de chaque support réel prime.
          </p>

          <p className="mt-4 text-sm">
            <Link
              to="/tarifs"
              className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-[var(--grenat)] transition-colors"
            >
              Voir notre grille de rémunération publiée <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </section>

      <CTA
        eyebrow="En attendant l'univers ISR complet"
        title="Échangez dès maintenant avec un conseiller"
        text="Nos exemples de portefeuilles types ne sont pas encore publiés, mais votre situation, elle, peut déjà être posée à plat. Un premier échange offert pour clarifier vos objectifs, votre horizon et vos exigences — la piste chiffrée arrive dès que l'univers de fonds est confirmé."
      />
    </SiteLayout>
  );
}
