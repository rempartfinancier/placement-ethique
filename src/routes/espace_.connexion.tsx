import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { MailCheck, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/lib/espace/useSession";

// Connexion sans mot de passe (lien magique par email).
// NON ENGAGEANT : créer un espace ne demande qu'un email, ne déclenche rien,
// et n'est jamais une condition pour lire le contenu ou utiliser les
// simulateurs — on le dit explicitement à l'écran.
// Le fichier est nommé espace_.connexion pour échapper à la garde
// d'authentification du layout /espace.

export const Route = createFileRoute("/espace_/connexion")({
  head: () => ({
    meta: [
      { title: "Connexion à votre espace — Placement-éthique.fr" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ConnexionPage,
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ConnexionPage() {
  const { session, loading } = useSession();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Déjà connecté → directement au tableau de bord.
  useEffect(() => {
    if (!loading && session) navigate({ to: "/espace" });
  }, [loading, session, navigate]);

  // Pré-remplissage avec l'email déjà connu des simulateurs (localStorage),
  // sans jamais l'envoyer tant que l'utilisateur ne clique pas.
  useEffect(() => {
    try {
      const stored = localStorage.getItem("pe-lead-email");
      if (stored) setEmail((current) => current || stored);
    } catch {
      /* localStorage indisponible : champ vide */
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setErrorMsg("Merci de saisir une adresse email valide.");
      setState("error");
      return;
    }
    setState("sending");
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/espace` },
    });
    if (error) {
      console.error("[espace/connexion] signInWithOtp:", error);
      setErrorMsg("L'envoi du lien a échoué. Réessayez dans quelques instants.");
      setState("error");
      return;
    }
    setState("sent");
  }

  return (
    <SiteLayout>
      <section className="section" style={{ background: "var(--gradient-paper)" }}>
        <div className="container-prose">
          <div className="mx-auto max-w-lg">
            <p className="eyebrow">Espace client</p>
            <h1 className="display-2 mt-4">
              Votre espace,{" "}
              <span className="italic" style={{ color: "var(--grenat-clair)" }}>
                sans mot de passe
              </span>
              .
            </h1>
            <p className="lead mt-5">
              Saisissez votre email : vous recevez un lien de connexion sécurisé. Première visite ?
              Le même lien crée votre espace — rien d'autre à remplir.
            </p>

            {state === "sent" ? (
              <div className="card-paper mt-8 p-6">
                <p className="flex items-start gap-3 text-foreground">
                  <MailCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-[var(--grenat)]"
                    aria-hidden
                  />
                  <span>
                    <strong>Lien envoyé à {email}.</strong> Ouvrez l'email et cliquez sur le lien
                    pour accéder à votre espace. Pensez à vérifier vos spams — l'email vient de
                    notre prestataire d'authentification.
                  </span>
                </p>
                <button className="btn-ghost mt-5 text-sm" onClick={() => setState("idle")}>
                  Utiliser une autre adresse
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-paper mt-8 p-6">
                <label
                  htmlFor="email-connexion"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Votre adresse email
                </label>
                <Input
                  id="email-connexion"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={255}
                  placeholder="vous@exemple.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card"
                />
                {state === "error" && <p className="mt-2 text-sm text-destructive">{errorMsg}</p>}
                <button
                  type="submit"
                  className="btn-primary mt-4 w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={state === "sending"}
                >
                  {state === "sending" ? "Envoi du lien…" : "Recevoir mon lien de connexion"}
                </button>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Votre email sert ici uniquement à vous authentifier et à gérer votre espace.
                  Aucune inscription à une newsletter, aucun démarchage. Chaque usage de vos données
                  dans l'espace fera l'objet d'un consentement séparé, jamais pré-coché — détail
                  dans notre{" "}
                  <Link to="/confidentialite" className="underline">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </form>
            )}

            <div className="mt-8 rounded-2xl border border-border/70 bg-card p-5">
              <p className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--grenat)]"
                  aria-hidden
                />
                <span>
                  <strong className="text-foreground">Un compte n'est jamais obligatoire.</strong>{" "}
                  Les{" "}
                  <Link to="/articles" className="underline">
                    articles
                  </Link>
                  , les{" "}
                  <Link to="/outils" className="underline">
                    simulateurs
                  </Link>{" "}
                  et la{" "}
                  <Link to="/contact" className="underline">
                    prise de rendez-vous
                  </Link>{" "}
                  restent accessibles sans espace client. Celui-ci sert uniquement à préparer et
                  suivre un dossier — et rien ne s'y souscrit : toute décision passe par un échange
                  avec votre conseiller.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
