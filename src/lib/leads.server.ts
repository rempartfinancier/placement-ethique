// Logique serveur partagée de traitement des leads : Brevo CRM, email de
// résultats, notification admin, insert Supabase. Utilisée à la fois par le
// server function `saveLead` (leads.functions.ts) et par la route HTTP
// POST /api/lead (routes/api.lead.ts) — une seule source de vérité.
//
// IMPORTANT : ce module ne doit être importé que depuis du code serveur
// (handler de server function ou handler de route serveur). Aucun accès à
// process.env au niveau module.

export interface ProcessLeadInput {
  email: string;
  name?: string | null;
  phone?: string | null;
  message?: string | null;
  offer_name?: string | null;
  source: string;
  payload?: Record<string, unknown> | null;
  newsletter_opt_in?: boolean;
  send_email?: boolean;
  send_admin_notification?: boolean;
  result_summary?: string | null;
}

export interface ProcessLeadResult {
  ok: boolean;
  emailed: boolean;
  error?: string;
}

async function syncToBrevo(input: ProcessLeadInput) {
  const brevoKey = process.env.BREVO_API_KEY;
  if (!brevoKey) return { ok: false, error: "Brevo API key not configured" };

  const attributes: Record<string, unknown> = {
    SOURCE: input.source,
    NEWSLETTER: input.newsletter_opt_in ? "yes" : "no",
  };
  if (input.phone) attributes.SMS = input.phone;
  if (input.offer_name) attributes.OFFRE = input.offer_name;
  if (input.name) {
    const parts = input.name.split(" ");
    attributes.PRENOM = parts[0];
    if (parts.length > 1) attributes.NOM = parts.slice(1).join(" ");
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoKey,
      },
      body: JSON.stringify({
        email: input.email,
        attributes,
        listIds: process.env.BREVO_LIST_ID ? [parseInt(process.env.BREVO_LIST_ID, 10)] : undefined,
        updateEnabled: true,
      }),
    });
    if (!res.ok && res.status !== 204) {
      const txt = await res.text();
      console.error(`[syncToBrevo] Brevo API Error - Status: ${res.status}, Body:`, txt);
      return { ok: false, error: `Brevo ${res.status}: ${txt.slice(0, 300)}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

async function sendResultsEmail(input: ProcessLeadInput) {
  const brevoKey = process.env.BREVO_API_KEY;
  if (!brevoKey) return { ok: false, error: "Brevo API key not configured" };
  const senderEmail = process.env.PLACEMENT_ETHIQUE_SENDER || "contact@placement-ethique.fr";
  try {
    let dynamicSummary = input.result_summary
      ? input.result_summary.replace(/&/g, "&amp;").replace(/</g, "&lt;")
      : "";
    if (!dynamicSummary && input.payload) {
      dynamicSummary = Object.entries(input.payload)
        .map(([k, v]) => `• ${k} : ${String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;")}`)
        .join("\n");
    }

    const html = `<!doctype html><html><body style="font-family:Georgia,serif;color:#1a1a1a;max-width:640px;margin:24px auto;padding:24px;">
      <h1 style="color:#142030;">Vos résultats — Placement-éthique.fr</h1>
      <p>Bonjour${input.name ? " " + input.name : ""},</p>
      <p>Voici les informations liées à votre demande <strong>${input.source}</strong> :</p>
      <div style="background:#fafaf7;border-left:3px solid #b8893d;padding:16px;white-space:pre-wrap;">${dynamicSummary || "Demande bien reçue."}</div>
      <p style="margin-top:24px;">Pour valider ces hypothèses avec votre situation réelle, prenez rendez-vous : <a href="https://placement-ethique.fr/contact">placement-ethique.fr/contact</a></p>
      <p style="font-size:12px;color:#777;margin-top:32px;">Cet email est purement pédagogique. Les performances passées ne préjugent pas des performances futures.</p>
    </body></html>`;
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoKey,
      },
      body: JSON.stringify({
        sender: { name: "Placement-éthique.fr", email: senderEmail },
        to: [{ email: input.email, name: input.name || undefined }],
        subject: `Vos résultats — ${input.source}`,
        htmlContent: html,
      }),
    });
    if (!res.ok) {
      const txt = await res.text();
      console.error(`[sendResultsEmail] Brevo SMTP Error - Status: ${res.status}, Body:`, txt);
      return { ok: false, error: `Brevo email ${res.status}: ${txt.slice(0, 300)}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

async function sendAdminNotification(input: ProcessLeadInput) {
  const brevoKey = process.env.BREVO_API_KEY;
  if (!brevoKey) return { ok: false };
  const senderEmail = process.env.PLACEMENT_ETHIQUE_SENDER || "contact@placement-ethique.fr";
  // Pas d'adresse de conseiller nommément confirmée pour ce site : le repli
  // pointe sur la boîte générique du cabinet, comme dans espace.server.ts —
  // à surcharger par variable d'environnement une fois une adresse dédiée
  // communiquée.
  const adminEmail = process.env.PLACEMENT_ETHIQUE_ADMIN_EMAIL || "contact@placement-ethique.fr";

  try {
    const safeMessage = input.message ? input.message.replace(/</g, "&lt;") : "Aucun message.";
    const payloadRows = input.payload
      ? Object.entries(input.payload)
          .map(
            ([k, v]) =>
              `<li><strong>${String(k).replace(/</g, "&lt;")} :</strong> ${String(v).replace(/</g, "&lt;")}</li>`,
          )
          .join("")
      : "";
    const html = `<!doctype html><html><body style="font-family:sans-serif;color:#1a1a1a;">
      <h2>🚨 Nouveau lead : ${input.source}</h2>
      <ul>
        <li><strong>Nom :</strong> ${input.name || "Non renseigné"}</li>
        <li><strong>Email :</strong> ${input.email}</li>
        <li><strong>Téléphone :</strong> ${input.phone || "Non renseigné"}</li>
        <li><strong>Offre :</strong> ${input.offer_name || "Non renseignée"}</li>
      </ul>
      ${payloadRows ? `<h3>Détail de la simulation :</h3><ul>${payloadRows}</ul>` : ""}
      <h3>Message :</h3>
      <div style="background:#f5f5f5;padding:15px;border-radius:8px;white-space:pre-wrap;">${safeMessage}</div>
    </body></html>`;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoKey,
      },
      body: JSON.stringify({
        sender: { name: "Placement Éthique (Bot)", email: senderEmail },
        to: [{ email: adminEmail, name: "Admin" }],
        subject: `Nouveau lead : ${input.name || input.email} depuis ${input.source}`,
        htmlContent: html,
      }),
    });
    if (!res.ok) {
      const txt = await res.text();
      console.error(`[sendAdminNotification] Brevo SMTP Error - Status: ${res.status}, Body:`, txt);
    }
    return { ok: res.ok };
  } catch (e) {
    return { ok: false };
  }
}

// CRM interne du groupe (rempart-crm) — tourne EN PLUS de Brevo/Supabase,
// jamais à leur place. N'affecte jamais le retour de processLead ; erreur
// avalée et loguée si le CRM est indisponible ou si INGEST_TOKEN manque.
const CRM_INGEST_URL = "https://rempart-crm.vercel.app/api/ingest/lead";

async function notifierCrmInterne(input: ProcessLeadInput) {
  const token = process.env.INGEST_TOKEN;
  if (!token) return;
  try {
    let prenom: string | undefined;
    let nom: string | undefined;
    if (input.name) {
      const parts = input.name.split(" ");
      prenom = parts[0];
      if (parts.length > 1) nom = parts.slice(1).join(" ");
    }
    const res = await fetch(CRM_INGEST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        sourceSite: "placement-ethique",
        email: input.email,
        prenom,
        nom,
        telephone: input.phone || undefined,
        message: input.message || undefined,
      }),
    });
    if (!res.ok) {
      console.error(
        "[notifierCrmInterne] CRM interne a refusé le lead:",
        res.status,
        await res.text(),
      );
    }
  } catch (e) {
    console.error("[notifierCrmInterne] Erreur notification CRM interne:", e);
  }
}

export async function processLead(data: ProcessLeadInput): Promise<ProcessLeadResult> {
  try {
    // ── 1. Brevo CRM sync (priorité — fonctionne sans Supabase) ──
    const brevo = await syncToBrevo(data);

    let emailed = false;
    let emailError: string | null = null;
    if (data.send_email) {
      const r = await sendResultsEmail(data);
      emailed = r.ok;
      if (!r.ok) {
        emailError = r.error ? `Email Error: ${r.error}` : "Email Error: Unknown";
        console.error("[processLead] sendResultsEmail failed:", r.error);
      }
    }

    // ── 2. Notification admin ──
    let adminEmailed = true;
    if (data.send_admin_notification || data.send_email) {
      const adminRes = await sendAdminNotification(data);
      adminEmailed = adminRes.ok;
      if (!adminRes.ok) {
        console.error("[processLead] sendAdminNotification failed");
      }
    }

    // ── 3. Supabase insert — entièrement optionnel, ne bloque jamais ──
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(supabaseUrl, supabaseKey, {
          auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
        });
        const combinedPayload = {
          ...(data.payload || {}),
          phone: data.phone,
          message: data.message,
          offer_name: data.offer_name,
        };
        supabase
          .from("leads")
          .insert({
            email: data.email,
            name: data.name ?? null,
            source: data.source,
            payload: combinedPayload,
            newsletter_opt_in: data.newsletter_opt_in ?? false,
            synced_to_brevo: brevo.ok,
            brevo_error:
              (brevo.ok ? null : brevo.error?.slice(0, 500)) || emailError?.slice(0, 500) || null,
          })
          .then(
            ({ error }) => {
              if (error) console.error("[processLead] Supabase insert error:", error);
            },
            (err: unknown) => {
              console.error("[processLead] Supabase exception:", err);
            },
          );
      } catch (supabaseErr) {
        console.warn("[processLead] Supabase unavailable, skipping insert:", supabaseErr);
      }
    } else {
      console.warn(
        "[processLead] SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY not set — skipping DB insert. Lead sent to Brevo only.",
      );
    }

    // ── 3bis. CRM interne — comme le insert Supabase, entièrement optionnel ──
    void notifierCrmInterne(data);

    // ── 4. Réponse — succès si Brevo OK ou email envoyé ──
    // L'échec de l'email de notification admin ne doit jamais faire échouer
    // le formulaire côté visiteur : le lead est déjà capturé par syncToBrevo
    // et notifierCrmInterne (rempart-crm), indépendants de cet email. Même
    // logique que LeadGate.submitLead, qui tolère déjà ce cas.
    if (data.send_admin_notification && !adminEmailed) {
      console.warn(
        "[processLead] sendAdminNotification failed but returning ok to avoid blocking the visitor:",
      );
    }

    if (data.send_email && !brevo.ok) {
      console.warn(
        "[processLead] Brevo sync failed but returning ok to avoid UX crash:",
        brevo.error,
      );
    }

    return { ok: true, emailed };
  } catch (fatalErr) {
    console.error("[processLead] Fatal error caught at top level:", fatalErr);
    return {
      ok: false,
      emailed: false,
      error: "Une erreur inattendue est survenue. Vos résultats s'affichent quand même.",
    };
  }
}
