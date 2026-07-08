import { useState } from "react";
import { saveLead } from "@/lib/leads.functions";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactFormProps {
  sourcePage?: string;
  offerName?: string;
  buttonText?: string;
  className?: string;
}

export function ContactForm({
  sourcePage = "Contact",
  offerName,
  buttonText = "Envoyer ma demande",
  className = "",
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.email.includes("@")) {
      setError("Veuillez saisir une adresse email valide.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await saveLead({
        data: {
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          source: sourcePage,
          offer_name: offerName,
          send_admin_notification: true, // Fire email to admin!
          send_email: false, // Don't send generic result to user
        },
      });

      if (!res?.ok || res?.error) {
        throw new Error(res?.error || "L'enregistrement a échoué.");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className="rounded-2xl border p-8 text-center animate-in fade-in"
        style={{
          borderColor: "color-mix(in oklch, var(--verifie) 30%, transparent)",
          background: "color-mix(in oklch, var(--verifie) 6%, var(--card))",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{
            background: "color-mix(in oklch, var(--verifie) 12%, transparent)",
            color: "var(--verifie)",
          }}
        >
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-display text-foreground mb-2">Message envoyé avec succès</h3>
        <p className="text-muted-foreground">
          Nous avons bien reçu votre demande. Un conseiller vous recontactera sous 48 heures
          ouvrées.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-sm underline underline-offset-4 text-foreground/80 hover:text-foreground"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Prénom et Nom <span className="text-[var(--grenat)]">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            required
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-[var(--grenat)] focus:outline-none focus:ring-1 focus:ring-[var(--grenat)] transition-colors"
            placeholder="Ex : Camille D."
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-[var(--grenat)]">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            required
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-[var(--grenat)] focus:outline-none focus:ring-1 focus:ring-[var(--grenat)] transition-colors"
            placeholder="votre.email@exemple.com"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Téléphone <span className="text-muted-foreground font-normal">(optionnel)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-[var(--grenat)] focus:outline-none focus:ring-1 focus:ring-[var(--grenat)] transition-colors"
          placeholder="06 12 34 56 78"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Votre message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-[var(--grenat)] focus:outline-none focus:ring-1 focus:ring-[var(--grenat)] transition-colors resize-y"
          placeholder="Décrivez brièvement votre projet ou votre question..."
        />
      </div>

      {error && (
        <div className="rounded-lg bg-destructive/10 p-3 flex items-start gap-3 text-destructive text-sm">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-[15px] py-4 disabled:opacity-70 flex items-center gap-2"
      >
        {loading ? "Envoi en cours..." : buttonText}
        {!loading && <Send size={18} />}
      </button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Vos données servent uniquement à vous répondre et ne sont jamais revendues — détail dans
        notre politique de confidentialité.
      </p>
    </form>
  );
}
