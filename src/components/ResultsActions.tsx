import { useState, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Download, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { downloadPdf, summarizeForEmail, type PdfDoc } from "@/lib/pdf";
import { saveLead } from "@/lib/leads.functions";
import { getStoredLeadEmail } from "@/components/LeadGate";

type Props = {
  /** Slug court de l'outil — utilisé comme source du lead. */
  source: string;
  /** Construit le document PDF au moment du clic (capture les valeurs courantes). */
  buildDoc: () => PdfDoc;
};

export function ResultsActions({ source, buildDoc }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [busy, setBusy] = useState<"download" | "email" | null>(null);
  const [done, setDone] = useState<"download" | "email" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const submit = useServerFn(saveLead);

  // Préremplit avec l'email déjà fourni sur un autre outil (LeadGate).
  useEffect(() => {
    const stored = getStoredLeadEmail();
    if (stored) setEmail((prev) => prev || stored);
  }, []);

  const handleDownload = async () => {
    setError(null);
    setBusy("download");
    try {
      const doc = buildDoc();
      downloadPdf(doc);
      // Optionnel : si email rempli, on log aussi le lead
      if (email && /.+@.+\..+/.test(email)) {
        await submit({
          data: {
            email,
            name: name || null,
            source,
            payload: { mode: "download" },
            newsletter_opt_in: newsletter,
            send_email: false,
            result_summary: null,
          },
        });
      }
      setDone("download");
      setTimeout(() => setDone(null), 3000);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally {
      setBusy(null);
    }
  };

  const handleEmail = async () => {
    setError(null);
    if (!/.+@.+\..+/.test(email)) {
      setError("Email invalide.");
      return;
    }
    setBusy("email");
    try {
      const doc = buildDoc();
      const summary = summarizeForEmail(doc);
      const res = await submit({
        data: {
          email,
          name: name || null,
          source,
          payload: { mode: "email" },
          newsletter_opt_in: newsletter,
          send_email: true,
          result_summary: summary,
        },
      });
      if (!res.ok) {
        setError("Impossible d'enregistrer votre demande. Réessayez plus tard.");
      } else {
        setDone("email");
        setTimeout(() => setDone(null), 4000);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <p className="eyebrow">Vos résultats</p>
      <h3 className="font-display text-xl mt-2 text-foreground">Télécharger ou recevoir par email</h3>
      <p className="text-sm text-muted-foreground mt-2">
        Recevez un récapitulatif PDF propre — pour vos archives, ou pour le présenter à votre conseiller.
      </p>

      <div className="mt-5 grid sm:grid-cols-2 gap-3">
        <input
          type="text"
          aria-label="Prénom (optionnel)"
          placeholder="Prénom (optionnel)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={120}
          className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
        />
        <input
          type="email"
          aria-label="Adresse email"
          placeholder="votre@email.fr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={255}
          className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
        />
      </div>

      <label className="mt-4 flex items-start gap-2.5 text-sm text-muted-foreground cursor-pointer">
        <input
          type="checkbox"
          aria-label="S'inscrire à la newsletter"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
          className="mt-0.5 accent-[var(--grenat)]"
        />
        <span>
          Je souhaite recevoir <strong className="text-foreground">la newsletter Placement-éthique.fr</strong> :
          1 email/mois maximum, des analyses pédagogiques, désabonnement en 1 clic.
        </span>
      </label>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleDownload}
          disabled={busy !== null}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground text-background px-4 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-60"
        >
          {busy === "download" ? <Loader2 className="animate-spin" size={16} /> : done === "download" ? <CheckCircle2 size={16} /> : <Download size={16} />}
          Télécharger le PDF
        </button>
        <button
          type="button"
          onClick={handleEmail}
          disabled={busy !== null || !email}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--grenat)] text-foreground px-4 py-2.5 text-sm font-medium hover:bg-[oklch(0.97_0.025_85)] disabled:opacity-60"
        >
          {busy === "email" ? <Loader2 className="animate-spin" size={16} /> : done === "email" ? <CheckCircle2 size={16} /> : <Mail size={16} />}
          Recevoir par email
        </button>
      </div>

      {done === "email" && (
        <p className="mt-3 text-sm text-foreground">
          ✓ Demande enregistrée. Le récapitulatif vous est envoyé par email.
        </p>
      )}
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        Vos données sont conservées par Placement-éthique.fr pour assurer le suivi et, si vous le souhaitez, vous adresser la
        newsletter. Aucune transmission à un tiers commercial. Désabonnement à tout moment.
      </p>
    </div>
  );
}
