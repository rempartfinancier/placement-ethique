import { useEffect } from "react";
import { Mail } from "lucide-react";

const SCRIPT_SRC = "https://app.iclosed.io/assets/widget.js";
// Lien de réservation iClosed dédié à placement-ethique.fr (GO-LIVE-CHECKLIST
// item 5, résolu). Événement "Appel découverte - Placement Éthique" créé par
// duplication de l'événement finance-halal, sur le même compte réseau
// (EpargnePlurielleAJ — décision actée dans DECISIONS.md, contrairement à
// l'ancienne consigne d'ici).
const WIDGET_URL = "https://app.iclosed.io/e/EpargnePlurielleAJ/appel-d-couverte-placement-thique";

export function IClosedWidget({ height = 720 }: { height?: number }) {
  useEffect(() => {
    if (!WIDGET_URL) return;
    // Charge le script iClosed une seule fois
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Re-déclenche l'hydratation du widget si le script est déjà là (navigation SPA)
      const w = window as unknown as { iClosed?: { reload?: () => void } };
      if (w.iClosed?.reload) {
        try {
          w.iClosed.reload();
        } catch {
          /* noop */
        }
      }
    }
  }, []);

  if (!WIDGET_URL) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
        <span
          className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full"
          style={{ background: "var(--accent)", color: "var(--grenat)" }}
        >
          <Mail size={22} aria-hidden />
        </span>
        <h3 className="font-display text-xl mt-4 text-foreground">
          La réservation en ligne arrive bientôt
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
          En attendant, écrivez-nous à{" "}
          <a href="mailto:contact@placement-ethique.fr" className="underline text-foreground">
            contact@placement-ethique.fr
          </a>{" "}
          en indiquant vos disponibilités : nous vous proposons un créneau sous 48 heures ouvrées.
        </p>
      </div>
    );
  }

  return (
    <div
      className="iclosed-widget rounded-2xl overflow-hidden border border-border bg-card"
      data-url={WIDGET_URL}
      title="Appel découverte — Placement Éthique"
      style={{ width: "100%", height: `${height}px` }}
    />
  );
}
