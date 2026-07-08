import { STATUTS, type DossierStatut } from "@/lib/espace/statuts";

// Le badge dit où en est le dossier — libellés honnêtes, jamais "souscrit"
// avant que la souscription soit réelle (statuts engageants posés par le
// conseiller uniquement). Couleurs dérivées des tokens du design system
// (styles.css) via color-mix : pas de valeur oklch dupliquée ici.

const STYLES: Record<DossierStatut, { bg: string; color: string; border: string }> = {
  brouillon: {
    bg: "var(--muted)",
    color: "var(--muted-foreground)",
    border: "var(--border)",
  },
  transmis: {
    bg: "color-mix(in oklch, var(--grenat) 14%, transparent)",
    color: "color-mix(in oklch, var(--grenat) 60%, var(--ink))",
    border: "color-mix(in oklch, var(--grenat) 45%, transparent)",
  },
  echange_planifie: {
    bg: "color-mix(in oklch, var(--grenat) 20%, transparent)",
    color: "color-mix(in oklch, var(--grenat) 55%, var(--ink))",
    border: "color-mix(in oklch, var(--grenat) 55%, transparent)",
  },
  recommandation_transmise: {
    bg: "color-mix(in oklch, var(--primary) 10%, transparent)",
    color: "var(--primary)",
    border: "color-mix(in oklch, var(--primary) 35%, transparent)",
  },
  signature_en_cours: {
    bg: "color-mix(in oklch, var(--grenat-clair) 12%, transparent)",
    color: "color-mix(in oklch, var(--grenat-clair) 80%, var(--ink))",
    border: "color-mix(in oklch, var(--grenat-clair) 40%, transparent)",
  },
  finalise: {
    bg: "var(--primary)",
    color: "var(--primary-foreground)",
    border: "var(--primary)",
  },
  sans_suite: {
    bg: "var(--muted)",
    color: "var(--muted-foreground)",
    border: "var(--border)",
  },
};

export function StatutBadge({ statut }: { statut: DossierStatut }) {
  const style = STYLES[statut];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide"
      style={{ background: style.bg, color: style.color, borderColor: style.border }}
    >
      {STATUTS[statut].label}
    </span>
  );
}
