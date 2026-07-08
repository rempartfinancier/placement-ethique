import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { getEspace, getHistoriqueConsentements, upsertProfil } from "@/lib/espace/espace.functions";
import { CONSENTEMENTS_PAR_CATEGORIE } from "@/lib/espace/consentements";

// Profil & données : la page qui matérialise la transparence RGPD.
// Trois natures de données, clairement séparées :
//  - AFFICHÉES (lecture seule) : email de connexion — modifiable uniquement
//    via le cabinet, pour éviter les détournements de compte ;
//  - SAISIES (modifiables librement) : prénom, nom, téléphone ;
//  - CONFIRMÉES (archivées, non modifiables) : le registre des consentements,
//    avec libellé exact, version et horodatage de chaque clic.

export const Route = createFileRoute("/espace/profil")({
  head: () => ({
    meta: [{ title: "Profil & données — Espace client — Placement-éthique.fr" }],
  }),
  component: ProfilPage,
});

function ProfilPage() {
  const queryClient = useQueryClient();
  const getEspaceFn = useServerFn(getEspace);
  const getConsentsFn = useServerFn(getHistoriqueConsentements);
  const upsertFn = useServerFn(upsertProfil);

  const espace = useQuery({ queryKey: ["espace"], queryFn: () => getEspaceFn() });
  const consents = useQuery({ queryKey: ["consentements"], queryFn: () => getConsentsFn() });

  const [formState, setFormState] = useState({ prenom: "", nom: "", telephone: "" });
  const [hydrated, setHydrated] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!espace.data || hydrated) return;
    setFormState({
      prenom: espace.data.profil?.prenom ?? "",
      nom: espace.data.profil?.nom ?? "",
      telephone: espace.data.profil?.telephone ?? "",
    });
    setHydrated(true);
  }, [espace.data, hydrated]);

  return (
    <div className="container-prose py-10 md:py-14">
      <p className="eyebrow">Profil &amp; données</p>
      <h1 className="display-3 mt-4">Vos données, à plat.</h1>
      <p className="lead mt-4 max-w-2xl">
        Ce que nous savons de vous tient sur cette page. Ce que vous saisissez se modifie ici ; ce
        que vous avez consenti reste archivé tel quel, avec sa date.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Coordonnées : saisies par le client */}
        <div className="card-paper p-6">
          <h2 className="font-display text-xl text-foreground">Vos coordonnées</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Utilisées uniquement pour que votre conseiller puisse vous recontacter sur vos dossiers.
          </p>
          <form
            className="mt-5 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setSaving(true);
              try {
                await upsertFn({
                  data: {
                    prenom: formState.prenom.trim() || null,
                    nom: formState.nom.trim() || null,
                    telephone: formState.telephone.trim() || null,
                  },
                });
                queryClient.invalidateQueries({ queryKey: ["espace"] });
                toast.success("Profil mis à jour.");
              } catch (err) {
                toast.error(err instanceof Error ? err.message : "Mise à jour impossible.");
              } finally {
                setSaving(false);
              }
            }}
          >
            <div>
              <label
                htmlFor="profil-email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email de connexion
              </label>
              <Input
                id="profil-email"
                value={espace.data?.email ?? ""}
                disabled
                className="bg-muted/50"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                Affiché pour information — pour le changer, contactez le cabinet (vérification
                d'identité oblige).
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="profil-prenom"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Prénom
                </label>
                <Input
                  id="profil-prenom"
                  value={formState.prenom}
                  maxLength={80}
                  onChange={(e) => setFormState({ ...formState, prenom: e.target.value })}
                  className="bg-card"
                />
              </div>
              <div>
                <label
                  htmlFor="profil-nom"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Nom
                </label>
                <Input
                  id="profil-nom"
                  value={formState.nom}
                  maxLength={80}
                  onChange={(e) => setFormState({ ...formState, nom: e.target.value })}
                  className="bg-card"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="profil-tel"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Téléphone
              </label>
              <Input
                id="profil-tel"
                type="tel"
                value={formState.telephone}
                maxLength={30}
                placeholder="06 12 34 56 78"
                onChange={(e) => setFormState({ ...formState, telephone: e.target.value })}
                className="bg-card"
              />
            </div>
            <button type="submit" className="btn-primary disabled:opacity-50" disabled={saving}>
              {saving ? "Enregistrement…" : "Enregistrer"}
            </button>
          </form>
        </div>

        {/* Droits RGPD */}
        <div className="card-paper p-6">
          <h2 className="font-display text-xl text-foreground">Vos droits sur ces données</h2>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">Accès et rectification :</strong> tout ce que nous
              détenons est visible sur cette page et dans vos dossiers ; les coordonnées se
              modifient ci-contre.
            </li>
            <li>
              <strong className="text-foreground">Retrait :</strong> une demande transmise se retire
              en un clic depuis le dossier concerné, tant que rien n'est signé.
            </li>
            <li>
              <strong className="text-foreground">Effacement :</strong> pour supprimer votre espace
              et les données associées, écrivez-nous à{" "}
              <a href="mailto:contact@placement-ethique.fr" className="underline">
                contact@placement-ethique.fr
              </a>{" "}
              — nous confirmons sous 30 jours, sous réserve des obligations légales de conservation
              propres aux intermédiaires financiers.
            </li>
            <li>
              <strong className="text-foreground">Aucun autre usage :</strong> pas de newsletter
              sans opt-in séparé, pas de transmission à un tiers commercial, pas de profilage
              automatisé — les recommandations sont écrites par un conseiller, pas par un
              algorithme.
            </li>
          </ul>
        </div>
      </div>

      {/* Registre des consentements : données CONFIRMÉES, jamais modifiables */}
      <div className="card-paper mt-6 p-6">
        <h2 className="font-display text-xl text-foreground">Registre de vos consentements</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Chaque consentement donné lors d'une transmission de dossier est archivé ici — libellé
          exact, version, date. C'est votre trace autant que la nôtre.
        </p>
        {consents.isLoading ? (
          <div className="mt-5 h-16 animate-pulse rounded-xl bg-muted" />
        ) : !consents.data || consents.data.length === 0 ? (
          <p className="mt-5 rounded-xl bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
            Aucun consentement enregistré pour l'instant — vous n'avez encore transmis aucun
            dossier.
          </p>
        ) : (
          <ul className="mt-5 space-y-3">
            {consents.data.map((consent) => (
              <li key={consent.id} className="rounded-xl border border-border/70 bg-card px-4 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {CONSENTEMENTS_PAR_CATEGORIE.get(consent.categorie)?.titre ?? consent.categorie}
                  </span>
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {format(new Date(consent.created_at), "d MMMM yyyy 'à' HH'h'mm", {
                      locale: fr,
                    })}{" "}
                    · version {consent.version}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {consent.libelle}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Une question sur vos données ? Consultez notre{" "}
        <Link to="/confidentialite" className="underline">
          politique de confidentialité
        </Link>{" "}
        ou{" "}
        <Link to="/contact" className="underline">
          écrivez-nous
        </Link>{" "}
        — un humain répond.
      </p>
    </div>
  );
}
