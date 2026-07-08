import { useState, useEffect, useRef } from "react";
import { Mail, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle } from "lucide-react";

interface LeadGateProps {
  source: string;
  payload?: Record<string, unknown>;
  onSuccess: () => void;
}

const GATE_KEY = "pe-gate-passed";
const EMAIL_KEY = "pe-lead-email";

/** Le visiteur a-t-il déjà passé le gate (sur n'importe quel outil) ? */
export function hasPassedGate(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(GATE_KEY) === "1";
  } catch {
    return false;
  }
}

/** Email mémorisé lors d'un précédent passage (pour préremplir les formulaires). */
export function getStoredLeadEmail(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(EMAIL_KEY) || "";
  } catch {
    return "";
  }
}

function markGatePassed(email?: string) {
  try {
    window.localStorage.setItem(GATE_KEY, "1");
    if (email) window.localStorage.setItem(EMAIL_KEY, email);
  } catch {
    // stockage indisponible (navigation privée) — non bloquant
  }
}

async function submitLead(
  email: string,
  source: string,
  payload?: Record<string, unknown>,
  sendEmail = true,
): Promise<{ ok: boolean; emailed: boolean }> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source, payload, send_email: sendEmail }),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return { ok: false, emailed: false };
    const data = await res.json().catch(() => null);
    // Succès si le traitement a abouti OU si l'email de résultats est parti
    // (une notification admin en échec ne doit pas pénaliser le visiteur).
    return { ok: data?.ok === true || data?.emailed === true, emailed: data?.emailed === true };
  } catch {
    return { ok: false, emailed: false };
  }
}

export function LeadGate({ source, payload, onSuccess }: LeadGateProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"form" | "sending" | "sent" | "failed" | "skipping">("form");
  const successFired = useRef(false);

  const fireSuccess = () => {
    if (successFired.current) return;
    successFired.current = true;
    onSuccess();
  };

  // Gate déjà passé sur un autre outil : on laisse passer immédiatement,
  // en journalisant l'usage de l'outil en arrière-plan (sans email envoyé).
  useEffect(() => {
    if (hasPassedGate()) {
      setStatus("skipping");
      const stored = getStoredLeadEmail();
      if (stored) {
        submitLead(stored, source, payload, false).catch(() => {});
      }
      fireSuccess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) return;

    setStatus("sending");
    const res = await submitLead(email.trim(), source, payload, true);

    // Quoi qu'il arrive, on ne re-gate plus ce visiteur.
    markGatePassed(email.trim());

    if (res.ok) {
      setStatus("sent");
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setTimeout(fireSuccess, 1500);
    } else {
      setStatus("failed");
    }
  };

  const handleSkip = () => {
    markGatePassed();
    fireSuccess();
  };

  if (status === "skipping") return null;

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-500 bg-card p-8 md:p-10 shadow-[var(--shadow-elevated)] max-w-2xl mx-auto my-12 text-center animate-in fade-in zoom-in-95 duration-300">
        <CheckCircle2 className="mx-auto text-emerald-500 mb-4" size={48} />
        <h2 className="font-display text-2xl text-foreground">C'est envoyé !</h2>
        <p className="mt-3 text-[15px] text-muted-foreground">
          Le récapitulatif part vers <strong className="text-foreground">{email}</strong>.
          Pensez à vérifier vos courriers indésirables.
        </p>
        <p className="mt-4 text-xs text-muted-foreground animate-pulse">
          Affichage de vos résultats détaillés...
        </p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="rounded-2xl border border-amber-400 bg-card p-8 md:p-10 shadow-[var(--shadow-elevated)] max-w-2xl mx-auto my-12 text-center animate-in fade-in duration-300">
        <AlertTriangle className="mx-auto text-amber-500 mb-4" size={40} />
        <h2 className="font-display text-2xl text-foreground">L'envoi n'a pas pu être confirmé</h2>
        <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
          Pas d'inquiétude : vos résultats restent accessibles. Vous pourrez réessayer l'envoi
          par email depuis le bloc « Télécharger ou recevoir par email » sous vos résultats.
        </p>
        <button type="button" onClick={fireSuccess} className="btn-primary mt-6">
          Voir mes résultats
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--grenat)] bg-card p-8 md:p-10 shadow-[var(--shadow-elevated)] max-w-2xl mx-auto my-12 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex items-center gap-3 text-[var(--grenat)] mb-4">
        <CheckCircle2 size={24} />
        <p className="eyebrow" style={{ color: "var(--grenat)" }}>Vos résultats sont prêts</p>
      </div>

      <h2 className="font-display text-3xl mt-2 text-foreground">
        Gardez-en une trace par email.
      </h2>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Recevez ce récapitulatif dans votre boîte mail, suivi de notre mini-série de 3 emails
        pour passer à l'action — ou consultez vos résultats directement. Vous ne verrez ce
        formulaire qu'une seule fois.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-3">
        <label htmlFor="lead-email" className="block text-sm font-medium text-foreground">
          Votre adresse email
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              id="lead-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.email@exemple.com"
              className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-4 text-sm text-foreground focus:border-[var(--grenat)] focus:outline-none focus:ring-1 focus:ring-[var(--grenat)] transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary sm:w-auto w-full justify-center disabled:opacity-70 flex items-center gap-2"
          >
            {status === "sending" ? "Envoi en cours..." : "Recevoir + voir mes résultats"}
            {status !== "sending" && <ArrowRight size={16} />}
          </button>
        </div>
      </form>

      <div className="mt-6 flex flex-col gap-4 border-t border-border/60 pt-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="text-[var(--grenat)] shrink-0 mt-0.5" size={18} />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground/80 font-medium">En toute transparence :</strong>{" "}
            votre email et le résumé de cette simulation sont transmis à notre outil d'emailing
            (Brevo) pour vous envoyer le récapitulatif et le mini-cours de 3 emails. Aucun spam,
            aucune revente, désinscription en un clic.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSkip}
          className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground self-start transition-colors"
        >
          Voir mes résultats sans les recevoir par email
        </button>
      </div>
    </div>
  );
}
