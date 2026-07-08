import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { FilePlus2, ArrowRight, CalendarClock, PhoneCall, FileSignature } from "lucide-react";
import { getEspace } from "@/lib/espace/espace.functions";
import { StatutBadge } from "@/components/espace/StatutBadge";
import { STATUTS } from "@/lib/espace/statuts";
import { PRODUITS_PAR_CODE } from "@/lib/espace/catalogue";

export const Route = createFileRoute("/espace/")({
  head: () => ({
    meta: [{ title: "Tableau de bord — Espace client — Placement-éthique.fr" }],
  }),
  component: TableauDeBord,
});

function TableauDeBord() {
  const getEspaceFn = useServerFn(getEspace);
  const { data, isLoading, error } = useQuery({
    queryKey: ["espace"],
    queryFn: () => getEspaceFn(),
  });

  return (
    <div className="container-prose py-10 md:py-14">
      <p className="eyebrow">Tableau de bord</p>
      <h1 className="display-3 mt-4">
        Bonjour{data?.profil?.prenom ? ` ${data.profil.prenom}` : ""}.
      </h1>
      <p className="lead mt-4 max-w-2xl">
        Vos dossiers, leur statut réel, et rien d'autre. Chaque étape vous dit honnêtement où vous
        en êtes — jamais plus, jamais moins.
      </p>

      {isLoading && (
        <div className="mt-10 space-y-3">
          <div className="h-24 animate-pulse rounded-2xl bg-muted" />
          <div className="h-24 animate-pulse rounded-2xl bg-muted" />
        </div>
      )}

      {error && (
        <p className="mt-10 rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          Impossible de charger vos dossiers pour le moment. Rechargez la page ou réessayez plus tard.
        </p>
      )}

      {data && (
        <>
          {/* Invitation à compléter le profil — utile au conseiller pour vous
              rappeler, jamais bloquant. */}
          {(!data.profil?.prenom || !data.profil?.nom || !data.profil?.telephone) && (
            <div
              className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border bg-card p-5"
              style={{ borderColor: "color-mix(in oklch, var(--grenat) 40%, transparent)" }}
            >
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Complétez votre profil</strong> (prénom, nom,
                téléphone) pour que votre conseiller puisse vous rappeler facilement.
              </p>
              <Link to="/espace/profil" className="btn-ghost text-sm">
                Compléter mon profil
              </Link>
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl text-foreground">Vos dossiers</h2>
            <Link to="/espace/nouveau" className="btn-grenat">
              <FilePlus2 size={16} aria-hidden /> Ouvrir un dossier
            </Link>
          </div>

          {data.dossiers.length === 0 ? (
            <div className="card-paper mt-6 p-8">
              <h3 className="font-display text-xl text-foreground">
                Aucun dossier pour l'instant — et c'est très bien comme ça.
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                Un dossier sert à préparer votre échange avec un conseiller : votre projet, votre
                situation (par tranches), les pistes de placements qui vous intéressent. Vous le
                transmettez quand vous êtes prêt — c'est une demande d'échange,{" "}
                <strong className="text-foreground">jamais une souscription</strong>. Et vous pouvez
                le retirer à tout moment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/espace/nouveau" className="btn-primary">
                  Commencer un dossier <ArrowRight size={15} aria-hidden />
                </Link>
                <Link to="/outils" className="btn-ghost">
                  D'abord explorer les simulateurs
                </Link>
              </div>
            </div>
          ) : (
            <ul className="mt-6 space-y-3">
              {data.dossiers.map((dossier) => (
                <li key={dossier.id}>
                  <Link
                    to="/espace/dossiers/$dossierId"
                    params={{ dossierId: dossier.id }}
                    className="card-paper flex flex-wrap items-center justify-between gap-4 p-5"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-display text-lg text-foreground">{dossier.titre}</span>
                        <StatutBadge statut={dossier.statut} />
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {dossier.objectif ? `${dossier.objectif} · ` : ""}
                        {dossier.produits.length > 0
                          ? dossier.produits
                              .map((p) => PRODUITS_PAR_CODE.get(p)?.nom ?? p)
                              .join(", ")
                          : "Aucune piste sélectionnée pour l'instant"}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Mis à jour le{" "}
                        {format(new Date(dossier.updated_at), "d MMMM yyyy", { locale: fr })} —{" "}
                        {STATUTS[dossier.statut].description.split(".")[0]}.
                      </p>
                    </div>
                    <ArrowRight size={18} className="shrink-0 text-muted-foreground" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Ce que cet espace change — et ce qu'il ne fera jamais. */}
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border/70 bg-card p-5">
              <CalendarClock size={20} className="text-[var(--grenat)]" aria-hidden />
              <h3 className="mt-3 font-medium text-foreground">Avancez à votre rythme</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Renseignez votre situation et vos pistes quand vous voulez, en plusieurs fois — le
                brouillon vous attend.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-5">
              <PhoneCall size={20} className="text-[var(--grenat)]" aria-hidden />
              <h3 className="mt-3 font-medium text-foreground">Un humain décide avec vous</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Transmettre un dossier déclenche un échange avec votre conseiller, puis une
                recommandation écrite — pas un contrat.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-5">
              <FileSignature size={20} className="text-[var(--grenat)]" aria-hidden />
              <h3 className="mt-3 font-medium text-foreground">La signature reste hors ligne</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Aucune souscription ne se fait dans cet espace : la signature n'intervient qu'après
                la recommandation, sur les documents du partenaire.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
