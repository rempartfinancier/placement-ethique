import type { ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { LayoutDashboard, FilePlus2, UserRound, LogOut, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/lib/espace/useSession";

// Garde d'authentification + navigation de l'espace client.
// Le compte n'est jamais une condition pour le contenu public : cette garde
// ne protège que /espace/* — tout le reste du site reste accessible sans compte.

const nav = [
  { to: "/espace", label: "Tableau de bord", icon: LayoutDashboard, exact: true },
  { to: "/espace/nouveau", label: "Nouveau dossier", icon: FilePlus2, exact: false },
  { to: "/espace/profil", label: "Profil & données", icon: UserRound, exact: false },
] as const;

export function EspaceLayout({ children }: { children: ReactNode }) {
  const { session, loading } = useSession();
  const navigate = useNavigate();

  if (loading) {
    return (
      <SiteLayout>
        <div className="container-prose py-24">
          <div className="mx-auto max-w-md space-y-4">
            <div className="h-8 w-2/3 animate-pulse rounded-lg bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-muted" />
          </div>
        </div>
      </SiteLayout>
    );
  }

  if (!session) {
    return (
      <SiteLayout>
        <div className="container-prose py-20 md:py-28">
          <div className="card-paper mx-auto max-w-lg p-8 text-center">
            <p className="eyebrow justify-center">Espace client</p>
            <h1 className="display-3 mt-4">Connexion requise</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cette page fait partie de votre espace personnel. Le reste du site — articles,
              simulateurs, prise de rendez-vous — reste entièrement accessible sans compte.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/espace/connexion" className="btn-primary">
                Me connecter / créer mon espace
              </Link>
              <Link to="/" className="btn-ghost">
                Retour au site
              </Link>
            </div>
          </div>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="border-b border-border/60" style={{ background: "var(--gradient-paper)" }}>
        <div className="container-prose flex flex-wrap items-center justify-between gap-3 py-4">
          <nav className="flex flex-wrap items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
                activeProps={{ className: "bg-muted text-foreground font-medium" }}
              >
                <item.icon size={15} aria-hidden />
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              navigate({ to: "/" });
            }}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <LogOut size={15} aria-hidden />
            Se déconnecter
          </button>
        </div>
      </div>

      {/* Rappel permanent, sur chaque écran de l'espace : rien ne se souscrit ici. */}
      <div className="container-prose pt-5">
        <p className="flex items-start gap-2 rounded-xl border border-border/70 bg-card px-4 py-3 text-sm text-muted-foreground">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--grenat)]" aria-hidden />
          <span>
            Aucune souscription ne se fait dans cet espace. Il sert à préparer et suivre votre
            demande — la décision se prend toujours après un échange avec votre conseiller, et la
            signature sur les documents officiels du partenaire.
          </span>
        </p>
      </div>

      {children}
    </SiteLayout>
  );
}
