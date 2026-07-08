import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

// Bannière de consentement aux traceurs — affichée dès la première visite,
// AVANT tout chargement de Google Tag Manager : aucun traceur ne part sans
// accord explicite. « Continuer sans accepter » est aussi visible et aussi
// simple que « Accepter » (lignes directrices CNIL). Le choix est conservé
// 13 mois (localStorage) puis redemandé, et reste modifiable à tout moment
// via « Gérer les cookies » (footer) ou la politique de confidentialité —
// ces liens émettent l'évènement OUVRIR_COOKIES_EVENT.

export const OUVRIR_COOKIES_EVENT = "pe-cookies-ouvrir";

const STORAGE_KEY = "pe-consent-traceurs";
// Conteneur GTM dédié à placement-ethique.fr — À CRÉER (GO-LIVE-CHECKLIST
// item 3). Tant que l'ID est le placeholder, chargerGtm() ne fait rien :
// aucun script tiers n'est injecté par erreur.
const GTM_ID = "GTM-XXXXXXX";
const VALIDITE_MS = 13 * 30 * 24 * 60 * 60 * 1000; // ≈ 13 mois (CNIL)

type Choix = "accepte" | "refuse";

function lireChoix(): Choix | null {
  try {
    const brut = localStorage.getItem(STORAGE_KEY);
    if (!brut) return null;
    const stocke = JSON.parse(brut) as { choix?: Choix; date?: string };
    if (!stocke.choix || !stocke.date) return null;
    // Consentement (ou refus) expiré → on redemande.
    if (Date.now() - new Date(stocke.date).getTime() > VALIDITE_MS) return null;
    return stocke.choix;
  } catch {
    return null;
  }
}

function chargerGtm() {
  if (GTM_ID === "GTM-XXXXXXX") return; // conteneur pas encore créé
  if (document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choix = lireChoix();
    if (choix === "accepte") chargerGtm();
    else if (choix === null) setVisible(true);

    const ouvrir = () => setVisible(true);
    window.addEventListener(OUVRIR_COOKIES_EVENT, ouvrir);
    return () => window.removeEventListener(OUVRIR_COOKIES_EVENT, ouvrir);
  }, []);

  function decider(choix: Choix) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ choix, date: new Date().toISOString() }));
    } catch {
      /* stockage indisponible : le choix ne vaut que pour cette page */
    }
    setVisible(false);
    if (choix === "accepte") {
      chargerGtm();
    }
    // Refus après une acceptation antérieure : GTM peut être déjà chargé sur
    // CETTE page — le refus prend pleinement effet dès la navigation suivante.
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-4"
    >
      <div className="container-prose">
        <div
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-5"
          style={{ boxShadow: "var(--shadow-elevated)" }}
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Cookies.</strong> Nous aimerions utiliser un outil
            de mesure d'audience (Google Tag Manager) pour comprendre quelles pages vous sont
            utiles. Aucun traceur n'est déposé tant que vous n'avez pas accepté — et le site
            fonctionne exactement pareil sans. Détails dans notre{" "}
            <Link to="/confidentialite" className="underline">
              politique de confidentialité
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-primary text-sm"
              onClick={() => decider("accepte")}
            >
              Accepter la mesure d'audience
            </button>
            <button type="button" className="btn-ghost text-sm" onClick={() => decider("refuse")}>
              Continuer sans accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
