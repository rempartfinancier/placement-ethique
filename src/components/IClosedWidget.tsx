import { useEffect, useRef, useState } from "react";
import { Loader2, Mail } from "lucide-react";

const SCRIPT_SRC = "https://app.iclosed.io/assets/widget.js";
// Lien de réservation iClosed dédié à placement-ethique.fr (GO-LIVE-CHECKLIST
// item 5, résolu). Événement "Appel découverte - Placement Éthique" créé par
// duplication de l'événement finance-halal, sur le même compte réseau
// (EpargnePlurielleAJ — décision actée dans DECISIONS.md, contrairement à
// l'ancienne consigne d'ici).
const WIDGET_URL = "https://app.iclosed.io/e/EpargnePlurielleAJ/appel-d-couverte-placement-thique";

export function IClosedWidget({ height = 720 }: { height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!WIDGET_URL) return;

    // Le chargement iClosed est lent (script + iframe ≈ 5-10 s à froid) —
    // un preconnect démarre la résolution DNS/TLS avant même la requête du
    // script, pour grappiller ce qui peut l'être.
    if (!document.querySelector('link[rel="preconnect"][href="https://app.iclosed.io"]')) {
      const preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = "https://app.iclosed.io";
      document.head.appendChild(preconnect);
    }

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

    // Le script iClosed injecte un iframe dans ce conteneur une fois prêt —
    // on masque l'indicateur de chargement dès qu'il apparaît, plutôt que
    // de laisser une zone vide pendant ces quelques secondes.
    const el = containerRef.current;
    if (!el) return;
    const observer = new MutationObserver(() => {
      if (el.querySelector("iframe")) {
        setReady(true);
        observer.disconnect();
      }
    });
    observer.observe(el, { childList: true });
    return () => observer.disconnect();
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
      ref={containerRef}
      className="iclosed-widget relative rounded-2xl overflow-hidden border border-border bg-card"
      data-url={WIDGET_URL}
      title="Appel découverte — Placement Éthique"
      style={{ width: "100%", height: `${height}px` }}
    >
      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
          <Loader2
            size={28}
            className="animate-spin"
            style={{ color: "var(--grenat)" }}
            aria-hidden
          />
          <p className="text-sm">Chargement du calendrier…</p>
        </div>
      )}
    </div>
  );
}
