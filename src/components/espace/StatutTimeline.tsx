import { Check, CircleDashed, Lock } from "lucide-react";
import { PARCOURS, STATUTS, type DossierStatut } from "@/lib/espace/statuts";

// Timeline du parcours : montre au client TOUT le chemin, y compris les
// étapes qu'il ne peut pas déclencher lui-même — c'est précisément le point.
// Les étapes engageantes portent un cadenas : elles n'existent qu'après
// l'échange conseiller et la recommandation écrite.

export function StatutTimeline({ statut }: { statut: DossierStatut }) {
  const etapeActuelle = STATUTS[statut].etape;

  return (
    <ol className="space-y-0">
      {PARCOURS.map((s, index) => {
        const meta = STATUTS[s];
        const estPassee = etapeActuelle !== null && index < etapeActuelle;
        const estActuelle = etapeActuelle !== null && index === etapeActuelle;
        const derniere = index === PARCOURS.length - 1;

        return (
          <li key={s} className="relative flex gap-4 pb-6 last:pb-0">
            {!derniere && (
              <span
                className="absolute left-[13px] top-7 h-full w-px"
                style={{
                  background: estPassee ? "var(--primary)" : "var(--border)",
                }}
                aria-hidden
              />
            )}
            <span
              className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px]"
              style={
                estPassee || estActuelle
                  ? {
                      background: estActuelle
                        ? "var(--primary)"
                        : "color-mix(in oklch, var(--primary) 12%, transparent)",
                      borderColor: "var(--primary)",
                      color: estActuelle ? "var(--primary-foreground)" : "var(--primary)",
                    }
                  : {
                      background: "var(--card)",
                      borderColor: "var(--border)",
                      color: "var(--muted-foreground)",
                    }
              }
            >
              {estPassee ? (
                <Check size={13} aria-hidden />
              ) : meta.engageant && !estActuelle ? (
                <Lock size={12} aria-hidden />
              ) : estActuelle ? (
                index + 1
              ) : (
                <CircleDashed size={13} aria-hidden />
              )}
            </span>
            <div className="min-w-0 pt-0.5">
              <p
                className={`text-sm font-medium ${estActuelle ? "text-foreground" : estPassee ? "text-foreground/70" : "text-muted-foreground"}`}
              >
                {meta.label}
                {meta.engageant && (
                  <span className="ml-2 text-xs font-normal text-muted-foreground">
                    — hors espace, après recommandation
                  </span>
                )}
              </p>
              {estActuelle && (
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{meta.description}</p>
              )}
            </div>
          </li>
        );
      })}
      {statut === "sans_suite" && (
        <li className="mt-2 rounded-xl border border-border/70 bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
          {STATUTS.sans_suite.description}
        </li>
      )}
    </ol>
  );
}
