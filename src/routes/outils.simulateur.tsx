import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { ProjectionPlacement } from "@/components/simulators/ProjectionPlacement";
import { deserialiserEtat } from "@/lib/simulateur-placements/share";

export const Route = createFileRoute("/outils/simulateur")({
  head: () => ({
    meta: [
      { title: "Simulateur d'épargne responsable — assurance vie & PER | Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Projetez votre épargne responsable année par année : frais d'entrée et de gestion réels, prélèvements sociaux, fiscalité complète de l'assurance vie et du PER. Hypothèses librement modifiables, simulation partageable par lien.",
      },
      { property: "og:title", content: "Simulateur d'épargne responsable — assurance vie et PER" },
      {
        property: "og:description",
        content:
          "Projection année par année avec frais et fiscalité complète (assurance vie, PER). Hypothèses librement modifiables, non contractuelles.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/simulateur" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils/simulateur" }],
  }),
  // Quasi-passthrough : l'expansion et le clamp métier se font dans la
  // page via deserialiserEtat — faire l'expansion complète ici ferait
  // boucler la canonicalisation SSR du routeur. Les valeurs restent
  // typées string | number telles que résolues par le parseSearch par
  // défaut : les convertir en chaînes ici ferait re-sérialiser « 999 »
  // en « "999" » (JSON) et déclencherait un 307 à chaque requête
  // (pattern rempartfinancier/src/routes/simulateur-placements.tsx).
  validateSearch: (search: Record<string, unknown>): Record<string, string | number> => {
    const sortie: Record<string, string | number> = {};
    for (const [cle, valeur] of Object.entries(search)) {
      if (typeof valeur === "string" || typeof valeur === "number") sortie[cle] = valeur;
    }
    return sortie;
  },
  component: SimulateurPage,
});

function SimulateurPage() {
  const search = Route.useSearch();
  // État initial figé au premier rendu : ensuite la source de vérité est
  // le reducer du composant, l'URL n'étant qu'un miroir débouncé.
  const [etatInitial] = useState(() => {
    const commeChaines: Record<string, string> = {};
    for (const [cle, valeur] of Object.entries(search)) commeChaines[cle] = String(valeur);
    return deserialiserEtat(commeChaines);
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Simulateur"
        title={
          <>
            Combien vaudra votre{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              épargne responsable
            </span>{" "}
            demain ?
          </>
        }
        lead="Projection année par année, frais d'entrée et de gestion inclus, avec la fiscalité complète de l'assurance vie et du PER — ou une projection libre sans enveloppe. Toutes les hypothèses sont librement modifiables, indicatives et non contractuelles."
      />

      <section className="section">
        <ProjectionPlacement etatInitial={etatInitial} />
      </section>

      <CTA
        eyebrow="Aller plus loin"
        title="Un chiffre vaut mieux qu'une intuition"
        text="Cette projection repose sur des hypothèses génériques, librement modifiables. Pour vérifier ce que financent réellement vos contrats actuels et explorer des pistes alignées avec vos exigences, réservez un échange avec un conseiller."
      />
    </SiteLayout>
  );
}
