import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ArrowLeft, CalendarPlus, Pencil, Trash2, Undo2 } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { StatutBadge } from "@/components/espace/StatutBadge";
import { StatutTimeline } from "@/components/espace/StatutTimeline";
import { PiecesSection } from "@/components/espace/PiecesSection";
import { useSession } from "@/lib/espace/useSession";
import {
  getDossierDetail,
  retirerDossier,
  supprimerBrouillon,
} from "@/lib/espace/espace.functions";
import { clientPeutModifier, clientPeutRetirer, STATUTS } from "@/lib/espace/statuts";
import { PRODUITS_PAR_CODE } from "@/lib/espace/catalogue";
import { resumeAllocation, type AllocationDossier } from "@/lib/espace/allocation";
import type { Tables } from "@/integrations/supabase/types";

// Suivi d'un dossier : le client voit à tout instant OÙ il en est (timeline
// honnête), CE qu'il a transmis, et les seules actions qui lui appartiennent :
// modifier/supprimer un brouillon, déposer des pièces, retirer sa demande.
// Aucun bouton ne mène à une souscription — cette étape n'existe pas ici.

export const Route = createFileRoute("/espace/dossiers/$dossierId")({
  head: () => ({
    meta: [{ title: "Suivi de dossier — Espace client — Placement-éthique.fr" }],
  }),
  component: DossierDetail,
});

function formatDate(value: string): string {
  return format(new Date(value), "d MMMM yyyy 'à' HH'h'mm", { locale: fr });
}

function libelleEvent(event: Tables<"dossier_events">): string {
  switch (event.type) {
    case "creation":
      return "Dossier créé (brouillon)";
    case "changement_statut": {
      const vers = event.vers_statut ? STATUTS[event.vers_statut].label : "?";
      return `Statut : ${vers}`;
    }
    case "document_ajoute":
      return `Pièce déposée — ${event.detail ?? ""}`;
    case "document_supprime":
      return `Pièce supprimée — ${event.detail ?? ""}`;
    default:
      return event.type;
  }
}

function DossierDetail() {
  const { dossierId } = Route.useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { session } = useSession();

  const getDetailFn = useServerFn(getDossierDetail);
  const retirerFn = useServerFn(retirerDossier);
  const supprimerFn = useServerFn(supprimerBrouillon);

  const [retraitOuvert, setRetraitOuvert] = useState(false);
  const [motif, setMotif] = useState("");
  const [busy, setBusy] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["dossier", dossierId],
    queryFn: () => getDetailFn({ data: { dossierId } }),
  });

  function refresh() {
    queryClient.invalidateQueries({ queryKey: ["dossier", dossierId] });
    queryClient.invalidateQueries({ queryKey: ["espace"] });
  }

  if (isLoading) {
    return (
      <div className="container-prose py-14">
        <div className="h-64 animate-pulse rounded-2xl bg-muted" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="container-prose py-14">
        <div className="card-paper mx-auto max-w-lg p-8 text-center">
          <h1 className="font-display text-2xl text-foreground">Dossier introuvable</h1>
          <p className="mt-3 text-muted-foreground">
            Ce dossier n'existe pas ou n'appartient pas à votre espace.
          </p>
          <Link to="/espace" className="btn-primary mt-6">
            Retour au tableau de bord
          </Link>
        </div>
      </div>
    );
  }

  const { dossier, events, documents } = data;
  const meta = STATUTS[dossier.statut];

  return (
    <div className="container-prose py-10 md:py-14">
      <Link
        to="/espace"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={14} aria-hidden /> Tableau de bord
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="display-3">{dossier.titre}</h1>
        <StatutBadge statut={dossier.statut} />
      </div>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{meta.description}</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Colonne principale */}
        <div className="space-y-6 lg:col-span-2">
          {/* Où en est le dossier */}
          <div className="card-paper p-6">
            <h2 className="font-display text-xl text-foreground">Où en est votre demande</h2>
            <div className="mt-5">
              <StatutTimeline statut={dossier.statut} />
            </div>
          </div>

          {/* Ce qui a été saisi / transmis */}
          <div className="card-paper p-6">
            <h2 className="font-display text-xl text-foreground">
              {dossier.statut === "brouillon"
                ? "Ce que contient votre brouillon"
                : "Ce que vous avez transmis"}
            </h2>
            <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm md:grid-cols-2">
              <div>
                <dt className="text-muted-foreground">Objectif</dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {dossier.objectif ?? "Non renseigné"}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Horizon</dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {dossier.horizon ?? "Non renseigné"}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Montant envisagé</dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {dossier.montant_tranche ?? "Non renseigné"}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Pistes de placements</dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {dossier.produits.length > 0
                    ? dossier.produits.map((p) => PRODUITS_PAR_CODE.get(p)?.nom ?? p).join(", ")
                    : "Aucune"}
                </dd>
              </div>
              {dossier.creneau_rappel && (
                <div>
                  <dt className="text-muted-foreground">Créneau de rappel souhaité</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{dossier.creneau_rappel}</dd>
                </div>
              )}
              {resumeAllocation(dossier.allocation as AllocationDossier).length > 0 && (
                <div className="md:col-span-2">
                  <dt className="text-muted-foreground">
                    Esquisse d'allocation — support de discussion, l'allocation finale se décide
                    avec votre conseiller
                  </dt>
                  <dd className="mt-0.5 space-y-0.5 font-medium text-foreground">
                    {resumeAllocation(dossier.allocation as AllocationDossier).map((ligne, i) => (
                      <span key={i} className="block">
                        {ligne}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
            {dossier.transmitted_at && (
              <p className="mt-4 text-xs text-muted-foreground">
                Transmis le {formatDate(dossier.transmitted_at)}. Consentements archivés dans{" "}
                <Link to="/espace/profil" className="underline">
                  Profil &amp; données
                </Link>
                .
              </p>
            )}
          </div>

          {/* Pièces justificatives */}
          {session && (
            <PiecesSection
              dossier={dossier}
              documents={documents}
              userId={session.user.id}
              onChanged={refresh}
            />
          )}

          {/* Historique */}
          <div className="card-paper p-6">
            <h2 className="font-display text-xl text-foreground">Historique</h2>
            <ul className="mt-4 space-y-2.5">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 text-sm"
                >
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {formatDate(event.created_at)}
                  </span>
                  <span className="text-foreground/85">{libelleEvent(event)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Colonne actions */}
        <div className="space-y-6">
          {clientPeutModifier(dossier.statut) && (
            <div className="card-paper p-6">
              <h2 className="font-display text-lg text-foreground">Votre brouillon</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rien n'a été transmis. Reprenez-le quand vous voulez, ou supprimez-le — il n'en
                restera rien.
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                <Link
                  to="/espace/nouveau"
                  search={{ dossier: dossier.id }}
                  className="btn-primary justify-center"
                >
                  <Pencil size={15} aria-hidden /> Reprendre le brouillon
                </Link>
                <button
                  className="btn-ghost justify-center disabled:opacity-50"
                  disabled={busy}
                  onClick={async () => {
                    if (!window.confirm("Supprimer définitivement ce brouillon ?")) return;
                    setBusy(true);
                    try {
                      await supprimerFn({ data: { dossierId: dossier.id } });
                      toast.success("Brouillon supprimé.");
                      queryClient.invalidateQueries({ queryKey: ["espace"] });
                      navigate({ to: "/espace" });
                    } catch (e) {
                      toast.error(e instanceof Error ? e.message : "Suppression impossible.");
                    } finally {
                      setBusy(false);
                    }
                  }}
                >
                  <Trash2 size={15} aria-hidden /> Supprimer le brouillon
                </button>
              </div>
            </div>
          )}

          {(dossier.statut === "transmis" || dossier.statut === "echange_planifie") && (
            <div className="card-paper p-6">
              <h2 className="font-display text-lg text-foreground">Prochaine étape : l'échange</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Votre conseiller vous recontacte à partir de votre dossier. Vous pouvez aussi
                choisir directement un créneau — même calendrier, même échange.
              </p>
              <Link to="/contact" className="btn-primary mt-4 w-full justify-center">
                <CalendarPlus size={15} aria-hidden /> Choisir un créneau
              </Link>
            </div>
          )}

          {dossier.statut === "recommandation_transmise" && (
            <div className="card-paper p-6">
              <h2 className="font-display text-lg text-foreground">
                Votre décision, sans pression
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Vous avez reçu une recommandation individualisée écrite. Deux chemins, aussi
                légitimes l'un que l'autre : donner suite — c'est votre conseiller qui engagera
                alors la souscription sur les documents officiels du partenaire — ou en rester là,
                en retirant simplement votre demande ci-dessous.
              </p>
              <Link to="/contact" className="btn-primary mt-4 w-full justify-center">
                Échanger avec mon conseiller
              </Link>
            </div>
          )}

          {clientPeutRetirer(dossier.statut) && (
            <div className="card-paper p-6">
              <h2 className="font-display text-lg text-foreground">Retirer ma demande</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Possible à tout moment tant que rien n'est signé, sans justification. Votre dossier
                sera clos sans suite.
              </p>
              {!retraitOuvert ? (
                <button
                  className="btn-ghost mt-4 w-full justify-center"
                  onClick={() => setRetraitOuvert(true)}
                >
                  <Undo2 size={15} aria-hidden /> Retirer ma demande
                </button>
              ) : (
                <div className="mt-4">
                  <Textarea
                    value={motif}
                    onChange={(e) => setMotif(e.target.value)}
                    maxLength={1000}
                    rows={3}
                    placeholder="Un mot sur la raison ? (optionnel — cela nous aide à nous améliorer)"
                    className="bg-card"
                  />
                  <div className="mt-3 flex gap-2">
                    <button
                      className="btn-primary flex-1 justify-center disabled:opacity-50"
                      disabled={busy}
                      onClick={async () => {
                        setBusy(true);
                        try {
                          await retirerFn({
                            data: { dossierId: dossier.id, motif: motif || undefined },
                          });
                          toast.success("Demande retirée. Dossier clos sans suite.");
                          setRetraitOuvert(false);
                          refresh();
                        } catch (e) {
                          toast.error(e instanceof Error ? e.message : "Retrait impossible.");
                        } finally {
                          setBusy(false);
                        }
                      }}
                    >
                      Confirmer le retrait
                    </button>
                    <button className="btn-ghost" onClick={() => setRetraitOuvert(false)}>
                      Annuler
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {(dossier.statut === "signature_en_cours" || dossier.statut === "finalise") && (
            <div className="card-paper p-6">
              <h2 className="font-display text-lg text-foreground">Votre interlocuteur</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                À ce stade, tout passe par votre conseiller — y compris un éventuel renoncement dans
                les délais légaux de rétractation. Écrivez-nous à{" "}
                <a href="mailto:contact@placement-ethique.fr" className="underline">
                  contact@placement-ethique.fr
                </a>
                .
              </p>
              <Link to="/contact" className="btn-ghost mt-4 w-full justify-center">
                Contacter le cabinet
              </Link>
            </div>
          )}

          {dossier.statut === "sans_suite" && (
            <div className="card-paper p-6">
              <h2 className="font-display text-lg text-foreground">Et maintenant ?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Ce dossier est clos — aucune souscription n'a eu lieu. Vous pouvez en ouvrir un
                nouveau quand vous voulez, ou simplement continuer à explorer le site.
              </p>
              <Link to="/espace/nouveau" className="btn-ghost mt-4 w-full justify-center">
                Ouvrir un nouveau dossier
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
