import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Download, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { saveLead } from "@/lib/leads.functions";

// Formulaire de capture dédié au lead magnet PDF « Diagnostic contrat ISR ».
// Se greffe sur le pipeline de leads existant (saveLead → processLead dans
// leads.server.ts) avec une source distincte pour tracer l'origine, et
// déclenche l'email de confirmation contenant le lien de téléchargement
// (voir download_url/download_label dans leads.server.ts).

export const LEAD_MAGNET_SOURCE = "lead_magnet_diagnostic_contrat_isr";
export const LEAD_MAGNET_PDF_URL = "/guides/diagnostic-contrat-isr.pdf";
export const LEAD_MAGNET_PDF_ABSOLUTE_URL = `https://placement-ethique.fr${LEAD_MAGNET_PDF_URL}`;
const LEAD_MAGNET_LABEL = "le diagnostic contrat ISR";

interface LeadMagnetFormProps {
  className?: string;
  buttonText?: string;
  compact?: boolean;
}

export function LeadMagnetForm({
  className = "",
  buttonText = "Recevoir le diagnostic (PDF)",
  compact = false,
}: LeadMagnetFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"form" | "sending" | "sent" | "failed">("form");
  const submit = useServerFn(saveLead);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) return;

    setStatus("sending");
    try {
      const res = await submit({
        data: {
          email: email.trim(),
          source: LEAD_MAGNET_SOURCE,
          offer_name: "Diagnostic contrat ISR (guide PDF)",
          send_email: true,
          send_admin_notification: true,
          newsletter_opt_in: false,
          download_url: LEAD_MAGNET_PDF_ABSOLUTE_URL,
          download_label: LEAD_MAGNET_LABEL,
        },
      });
      setStatus(res?.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent") {
    return (
      <div
        className={`rounded-2xl border border-[var(--grenat)] bg-card p-6 text-center animate-in fade-in zoom-in-95 duration-300 ${className}`}
      >
        <CheckCircle2 className="mx-auto text-[var(--grenat)] mb-3" size={32} />
        <p className="font-display text-lg text-foreground">C'est envoyé !</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Le lien de téléchargement part aussi vers{" "}
          <strong className="text-foreground">{email}</strong>. Pensez à vérifier vos courriers
          indésirables.
        </p>
        <a
          href={LEAD_MAGNET_PDF_URL}
          download
          className="btn-primary mt-5 inline-flex items-center justify-center gap-2"
        >
          <Download size={16} /> Télécharger le guide (PDF)
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col sm:flex-row gap-3 ${compact ? "" : "max-w-lg"}`}
      >
        <label htmlFor="lead-magnet-email" className="sr-only">
          Votre adresse email
        </label>
        <input
          id="lead-magnet-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre.email@exemple.com"
          className="w-full sm:flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-[var(--grenat)] focus:outline-none focus:ring-1 focus:ring-[var(--grenat)] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-grenat sm:w-auto w-full justify-center disabled:opacity-70 flex items-center gap-2"
        >
          {status === "sending" ? (
            <Loader2 className="animate-spin" size={16} />
          ) : (
            <ArrowRight size={16} />
          )}
          {status === "sending" ? "Envoi en cours..." : buttonText}
        </button>
      </form>
      {status === "failed" && (
        <p className="mt-3 text-sm text-destructive">
          L'envoi n'a pas pu être confirmé. Vous pouvez réessayer, ou{" "}
          <a href={LEAD_MAGNET_PDF_URL} download className="underline underline-offset-2">
            télécharger le PDF directement
          </a>
          .
        </p>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        Vos données restent confidentielles. Pas de spam.
      </p>
    </div>
  );
}
