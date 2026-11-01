import { useEffect } from "react";

// Même compte cal.com que loimalraux et placementgaranti (écosystème Rempart
// Financier) — voir CalWidget.tsx dans ces deux repos pour le snippet d'origine.
const CAL_LINK = "rempartfinancier/30min";
const CAL_NAMESPACE = "30min";
const SITE_SLUG = "placement-ethique";

// Le champ téléphone Cal.com (obligatoire depuis le 16/09) attend un numéro
// international — on ne pré-remplit que ce qui se convertit sans ambiguïté.
function toInternationalPhone(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const compact = raw.replace(/[\s.\-()]/g, "");
  // "+33" + "06…" (indicatif + numéro national tapé avec son 0) → retire ce 0.
  if (/^\+330\d{9}$/.test(compact)) return `+33${compact.slice(4)}`;
  if (/^\+\d{8,15}$/.test(compact)) return compact;
  if (/^0\d{9}$/.test(compact)) return `+33${compact.slice(1)}`;
  return undefined;
}

export function CalWidget({
  containerId,
  minHeight = 500,
  name,
  email,
  phone,
  notes,
  utm,
  onBookingSuccessful,
}: {
  containerId: string;
  minHeight?: number;
  name?: string;
  email?: string;
  phone?: string;
  notes?: string;
  utm?: { source?: string; medium?: string; campaign?: string };
  onBookingSuccessful?: () => void;
}) {
  useEffect(() => {
    const params = new URLSearchParams();
    // Attribution de la réservation (16/09) : Cal.com recopie `metadata[...]` dans
    // booking.metadata — le webhook Cal.com du CRM (/api/ingest/calcom) s'en sert pour
    // savoir depuis quel site/page le RDV a été pris (même compte cal.com que
    // loimalraux et placementgaranti, indiscernables jusqu'ici).
    params.set("metadata[site]", SITE_SLUG);
    params.set("metadata[page]", window.location.pathname);
    if (utm?.source) params.set("utm_source", utm.source);
    if (utm?.medium) params.set("utm_medium", utm.medium);
    if (utm?.campaign) params.set("utm_campaign", utm.campaign);
    const calLink = `${CAL_LINK}?${params.toString()}`;
    const attendeePhoneNumber = toInternationalPhone(phone);

    // Snippet officiel d'embed cal.com (app.cal.com/embed/embed.js) — gardé
    // tel quel en chaîne : sa file d'attente interne rejoue les appels une
    // fois le script async chargé, une réécriture manuelle en TS casserait
    // facilement ce contrat.
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "${CAL_NAMESPACE}", {origin:"https://cal.com"});
      Cal.ns["${CAL_NAMESPACE}"]("inline", {
        elementOrSelector: "#${containerId}",
        config: { "layout": "month_view"${name ? `, "name": ${JSON.stringify(name)}` : ""}${email ? `, "email": ${JSON.stringify(email)}` : ""}${attendeePhoneNumber ? `, "attendeePhoneNumber": ${JSON.stringify(attendeePhoneNumber)}` : ""}${notes ? `, "notes": ${JSON.stringify(notes)}` : ""} },
        calLink: ${JSON.stringify(calLink)},
      });
      Cal.ns["${CAL_NAMESPACE}"]("ui", {"hideEventTypeDetails": false, "layout": "month_view"});
    `;
    document.body.appendChild(script);

    // Cal.com poste ce message sur window une fois la réservation confirmée
    // (protocole documenté @calcom/embed-core, équivalent du
    // "calendly.event_scheduled" utilisé précédemment avec Calendly).
    function onCalMessage(event: MessageEvent) {
      if (event.data?.type !== "CAL:bookingSuccessful") return;
      onBookingSuccessful?.();
    }
    window.addEventListener("message", onCalMessage);

    return () => {
      script.remove();
      window.removeEventListener("message", onCalMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // Le script cal.com redimensionne lui-même son iframe interne à la hauteur exacte du
    // contenu (calendrier -> créneaux -> formulaire), via un style inline posé sur
    // l'iframe — une hauteur ou un overflow:hidden fixés ici l'écraseraient et
    // couperaient le bas du widget. minHeight évite juste un flash vide le temps que
    // le script s'initialise.
    <div
      id={containerId}
      style={{
        width: "100%",
        minHeight: `${minHeight}px`,
        borderRadius: 16,
      }}
    />
  );
}
