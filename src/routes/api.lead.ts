import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start"; // charge l'augmentation "server" du typage
import { processLead } from "@/lib/leads.server";

// Route serveur POST /api/lead — appelée par LeadGate (fetch direct).
// Le GET sert de healthcheck : il indique si les clés Brevo/Supabase sont
// configurées dans l'environnement, sans exposer aucun secret.

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      GET: async () =>
        json({
          ok: true,
          brevo_configured: !!process.env.BREVO_API_KEY,
          supabase_configured: !!(process.env.SUPABASE_URL && process.env.SUPABASE_PUBLISHABLE_KEY),
        }),

      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => null);
          const email = typeof body?.email === "string" ? body.email.trim() : "";
          const source = typeof body?.source === "string" ? body.source.trim() : "";

          if (!/.+@.+\..+/.test(email) || !source) {
            return json({ ok: false, emailed: false, error: "email and source required" }, 400);
          }

          const sendEmail = body?.send_email !== false; // true par défaut
          const result = await processLead({
            email,
            source: source.slice(0, 80),
            payload: body?.payload && typeof body.payload === "object" ? body.payload : null,
            newsletter_opt_in: false,
            send_email: sendEmail,
            send_admin_notification: sendEmail,
          });

          return json(result);
        } catch (fatalErr) {
          console.error("[api/lead] Fatal error:", fatalErr);
          return json({ ok: false, emailed: false, error: "server error" }, 200);
        }
      },
    },
  },
});
