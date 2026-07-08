import { createFileRoute, Outlet } from "@tanstack/react-router";
import { EspaceLayout } from "@/components/espace/EspaceLayout";
import { Toaster } from "@/components/ui/sonner";

// Layout de l'espace client : garde d'authentification (EspaceLayout) +
// rappel permanent qu'aucune souscription ne se fait en ligne.
// noindex : l'espace personnel n'a rien à faire dans les moteurs de recherche.

export const Route = createFileRoute("/espace")({
  head: () => ({
    meta: [
      { title: "Espace client — Placement-éthique.fr" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: EspaceRoute,
});

function EspaceRoute() {
  return (
    <EspaceLayout>
      <Outlet />
      <Toaster />
    </EspaceLayout>
  );
}
