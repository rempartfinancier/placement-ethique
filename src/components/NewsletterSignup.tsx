import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { saveLead } from "@/lib/leads.functions";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) return;
    setStatus("loading");
    try {
      const res = await saveLead({
        data: {
          email,
          source: "Newsletter footer",
          newsletter_opt_in: true,
          send_email: false,
          send_admin_notification: false,
        },
      });
      setStatus(res?.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p className="mt-5 flex items-center gap-2 text-sm text-white/80">
        <CheckCircle2 size={16} style={{ color: "var(--grenat-clair)" }} aria-hidden /> Inscription
        confirmée — à bientôt.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <label htmlFor="footer-newsletter-email" className="text-sm text-white/80">
        1 email/mois maximum, désabonnement en 1 clic.
      </label>
      <div className="mt-2.5 flex gap-2">
        <input
          id="footer-newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.fr"
          aria-label="Adresse email"
          className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--grenat-clair)]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ background: "var(--grenat)", color: "var(--grenat-foreground)" }}
        >
          {status === "loading" ? (
            "…"
          ) : (
            <>
              S'inscrire <ArrowRight size={14} aria-hidden />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-white/60">
          Une erreur est survenue. Réessayez, ou écrivez-nous directement.
        </p>
      )}
    </form>
  );
}
