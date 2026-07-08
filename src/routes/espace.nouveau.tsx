import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Info,
  Save,
  SendHorizonal,
  TriangleAlert,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ConsentCheckbox } from "@/components/espace/ConsentCheckbox";
import {
  getDossierDetail,
  sauverBrouillon,
  transmettreDossier,
} from "@/lib/espace/espace.functions";
import {
  EPARGNES_MENSUELLES,
  EXPERIENCES,
  HORIZONS,
  MONTANTS,
  OBJECTIFS,
  PATRIMOINES,
  REVENUS,
  SITUATIONS_PRO,
  TOLERANCES,
  type Situation,
} from "@/lib/espace/schemas";
import { CATALOGUE, CATEGORIES_INFORMATIVES, type ProduitCategorie } from "@/lib/espace/catalogue";
import { CONSENTEMENTS, type ConsentementCategorie } from "@/lib/espace/consentements";
import {
  CHOIX_CONTRATS,
  CRENEAUX_RAPPEL,
  FONDS_SELECTIONNABLES,
  fondsProposables,
  libelleContrat,
  ORDRE_CATEGORIES,
  resumeAllocation,
  totalPoids,
  type AllocationDossier,
} from "@/lib/espace/allocation";
import type { ContratId, EnveloppeContrat } from "@/lib/simulateur-placements/contrats";

// Wizard de dossier — cœur du principe « pré-souscription ≠ souscription ».
//
// Tout ce qui se passe ici est NON ENGAGEANT :
//  - saisir, enregistrer en brouillon, revenir : aucune donnée ne quitte
//    l'espace du client (visible de lui seul) ;
//  - transmettre (dernière étape) : demande d'échange documentée, avec
//    consentements RGPD séparés par catégorie et mises en garde produit lues
//    explicitement. Ce n'est PAS une souscription — le libellé du bouton, le
//    texte au-dessus et l'écran de suivi le répètent.
// L'étape engageante (signature) n'existe pas dans ce fichier, ni nulle part
// dans l'espace client : elle appartient au conseiller, après recommandation.

export const Route = createFileRoute("/espace/nouveau")({
  head: () => ({
    meta: [{ title: "Nouveau dossier — Espace client — Placement-éthique.fr" }],
  }),
  validateSearch: (search: Record<string, unknown>): { dossier?: string } => ({
    dossier: typeof search.dossier === "string" ? search.dossier : undefined,
  }),
  component: NouveauDossier,
});

const ETAPES = [
  "Votre projet",
  "Votre situation",
  "Pistes de placements",
  "Esquisse d'allocation",
  "Relecture & consentements",
];

interface FormState {
  titre: string;
  objectif: (typeof OBJECTIFS)[number] | null;
  horizon: (typeof HORIZONS)[number] | null;
  montantTranche: (typeof MONTANTS)[number] | null;
  situation: Situation;
  produits: ProduitCategorie[];
  allocation: AllocationDossier;
  creneauRappel: (typeof CRENEAUX_RAPPEL)[number] | null;
}

const FORM_INITIAL: FormState = {
  titre: "",
  objectif: null,
  horizon: null,
  montantTranche: null,
  situation: {},
  produits: [],
  allocation: { lignes: [] },
  creneauRappel: null,
};

// Groupe de pastilles sélectionnables — un choix (ou plusieurs si multi).
function OptionPills<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly T[];
  value: T | null;
  onChange: (value: T | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(selected ? null : option)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function MultiPills<T extends string>({
  options,
  values,
  onChange,
}: {
  options: readonly T[];
  values: T[];
  onChange: (values: T[]) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const selected = values.includes(option);
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() =>
              onChange(selected ? values.filter((v) => v !== option) : [...values, option])
            }
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function Champ({
  label,
  aide,
  children,
}: {
  label: string;
  aide?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground">{label}</p>
      {aide && <p className="mt-0.5 text-xs text-muted-foreground">{aide}</p>}
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

function NouveauDossier() {
  const { dossier: dossierIdParam } = Route.useSearch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const sauverFn = useServerFn(sauverBrouillon);
  const transmettreFn = useServerFn(transmettreDossier);
  const getDetailFn = useServerFn(getDossierDetail);

  const [etape, setEtape] = useState(0);
  const [form, setForm] = useState<FormState>(FORM_INITIAL);
  const [dossierId, setDossierId] = useState<string | undefined>(dossierIdParam);
  const [hydrated, setHydrated] = useState(!dossierIdParam);
  // Mises en garde produit lues (codes) — remises à zéro si le produit est
  // désélectionné : l'accusé de lecture suit la sélection, pas la session.
  const [misesEnGardeLues, setMisesEnGardeLues] = useState<Set<ProduitCategorie>>(new Set());
  // Consentements RGPD : TOUS initialisés à false — jamais pré-cochés.
  const [consentements, setConsentements] = useState<Record<ConsentementCategorie, boolean>>({
    donnees_contact: false,
    donnees_patrimoniales: false,
    partage_conseiller: false,
    pieces_justificatives: false,
  });
  const [busy, setBusy] = useState<"save" | "transmit" | null>(null);

  // Mode édition : hydrate le brouillon existant (une seule fois).
  const detail = useQuery({
    queryKey: ["dossier", dossierIdParam],
    queryFn: () => getDetailFn({ data: { dossierId: dossierIdParam! } }),
    enabled: Boolean(dossierIdParam),
  });

  useEffect(() => {
    if (!detail.data || hydrated) return;
    const d = detail.data.dossier;
    setForm({
      titre: d.titre,
      objectif: (d.objectif as FormState["objectif"]) ?? null,
      horizon: (d.horizon as FormState["horizon"]) ?? null,
      montantTranche: (d.montant_tranche as FormState["montantTranche"]) ?? null,
      situation: (d.situation as Situation) ?? {},
      produits: d.produits,
      allocation: { lignes: [], ...((d.allocation as AllocationDossier) ?? {}) },
      // Colonne TEXT libre : ne garder que les libellés encore proposés,
      // sinon un ancien créneau reformulé ferait échouer chaque sauvegarde.
      creneauRappel: (CRENEAUX_RAPPEL as readonly string[]).includes(d.creneau_rappel ?? "")
        ? (d.creneau_rappel as FormState["creneauRappel"])
        : null,
    });
    setHydrated(true);
  }, [detail.data, hydrated]);

  // Si les pistes ou le contrat pressenti changent, l'esquisse ne garde que
  // les supports encore proposables — jamais de support orphelin de sa piste
  // (et donc de sa mise en garde) ni hors du contrat choisi.
  useEffect(() => {
    const lignes = form.allocation.lignes ?? [];
    if (lignes.length === 0) return;
    const proposables = new Set(
      fondsProposables(form.produits, form.allocation.contratId ?? null).map((f) => f.isin),
    );
    const valides = lignes.filter((l) => proposables.has(l.isin));
    if (valides.length !== lignes.length) {
      setForm((prev) => ({
        ...prev,
        allocation: { ...prev.allocation, lignes: valides },
      }));
    }
  }, [form.produits, form.allocation.contratId, form.allocation.lignes]);

  // /espace/nouveau et /espace/nouveau?dossier=X sont la même route TanStack :
  // changer le search ne remonte pas le composant. Sans cette remise à zéro,
  // cliquer « Nouveau dossier » depuis un brouillon repris continuerait
  // d'écrire silencieusement dans ce brouillon. La ref évite de rejouer la
  // logique quand le param n'a pas réellement changé (ex. re-render après
  // sauvegarde), ce qui écraserait la saisie en cours.
  const dernierParam = useRef(dossierIdParam);
  useEffect(() => {
    if (dernierParam.current === dossierIdParam) return;
    dernierParam.current = dossierIdParam;
    if (dossierIdParam) {
      if (dossierIdParam !== dossierId) {
        setDossierId(dossierIdParam);
        setHydrated(false);
      }
    } else {
      setForm(FORM_INITIAL);
      setDossierId(undefined);
      setHydrated(true);
      setEtape(0);
      setMisesEnGardeLues(new Set());
      setConsentements({
        donnees_contact: false,
        donnees_patrimoniales: false,
        partage_conseiller: false,
        pieces_justificatives: false,
      });
    }
  }, [dossierIdParam, dossierId]);

  const produitsSelectionnes = useMemo(
    () => CATALOGUE.filter((p) => form.produits.includes(p.code)),
    [form.produits],
  );
  const misesEnGardeManquantes = produitsSelectionnes.filter(
    (p) => p.miseEnGarde && !misesEnGardeLues.has(p.code),
  );
  const fondsDisponibles = useMemo(
    () => fondsProposables(form.produits, form.allocation.contratId ?? null),
    [form.produits, form.allocation.contratId],
  );
  const totalEsquisse = totalPoids(form.allocation.lignes ?? []);
  const consentementsObligatoiresOk =
    consentements.donnees_contact &&
    consentements.donnees_patrimoniales &&
    consentements.partage_conseiller;

  const peutTransmettre =
    form.titre.trim().length > 0 &&
    form.produits.length > 0 &&
    misesEnGardeManquantes.length === 0 &&
    consentementsObligatoiresOk;

  if (dossierIdParam && detail.isLoading) {
    return (
      <div className="container-prose py-14">
        <div className="h-40 animate-pulse rounded-2xl bg-muted" />
      </div>
    );
  }

  if (dossierIdParam && detail.error) {
    return (
      <div className="container-prose py-14">
        <div className="card-paper mx-auto max-w-lg p-8 text-center">
          <h1 className="font-display text-2xl text-foreground">Brouillon introuvable</h1>
          <p className="mt-3 text-muted-foreground">
            Ce brouillon n'existe plus ou n'appartient pas à votre espace. Vous pouvez démarrer un
            nouveau dossier.
          </p>
          <Link to="/espace/nouveau" search={{}} className="btn-primary mt-6">
            Nouveau dossier
          </Link>
        </div>
      </div>
    );
  }

  if (dossierIdParam && detail.data && detail.data.dossier.statut !== "brouillon") {
    return (
      <div className="container-prose py-14">
        <div className="card-paper mx-auto max-w-lg p-8 text-center">
          <h1 className="font-display text-2xl text-foreground">Ce dossier a été transmis</h1>
          <p className="mt-3 text-muted-foreground">
            Un dossier transmis ne se modifie plus depuis l'espace — c'est ce qui garantit que ce
            que votre conseiller lit est bien ce que vous avez validé. Vous pouvez le suivre, y
            déposer des pièces, ou le retirer.
          </p>
          <Link
            to="/espace/dossiers/$dossierId"
            params={{ dossierId: dossierIdParam }}
            className="btn-primary mt-6"
          >
            Suivre ce dossier
          </Link>
        </div>
      </div>
    );
  }

  // Sauvegarde brute, sans gestion du flag busy : chaque appelant gère le
  // sien (sinon le finally de l'un réactive le bouton de l'autre en plein vol).
  async function sauvegarder(silencieux: boolean): Promise<string | null> {
    // NON ENGAGEANT : un brouillon n'est visible que de vous, ne part chez
    // personne, et se supprime en un clic.
    if (!form.titre.trim()) {
      toast.error("Donnez un titre à votre dossier (ex. « Préparer ma retraite »).");
      return null;
    }
    try {
      const estCreation = !dossierId;
      const row = await sauverFn({
        data: {
          dossierId,
          titre: form.titre.trim(),
          objectif: form.objectif,
          horizon: form.horizon,
          montantTranche: form.montantTranche,
          situation: form.situation,
          produits: form.produits,
          allocation: { ...form.allocation, lignes: form.allocation.lignes ?? [] },
          creneauRappel: form.creneauRappel,
        },
      });
      setDossierId(row.id);
      dernierParam.current = row.id;
      if (estCreation) {
        // L'URL porte l'id dès la création : un F5 ou un retour arrière
        // retrouve le brouillon au lieu d'en créer un doublon.
        navigate({ to: "/espace/nouveau", search: { dossier: row.id }, replace: true });
      }
      queryClient.invalidateQueries({ queryKey: ["espace"] });
      if (!silencieux) toast.success("Brouillon enregistré — rien n'a été transmis.");
      return row.id;
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Enregistrement impossible.");
      return null;
    }
  }

  async function enregistrerBrouillon() {
    setBusy("save");
    try {
      await sauvegarder(false);
    } finally {
      setBusy(null);
    }
  }

  async function transmettre() {
    // ÉTAPE SENSIBLE, NON ENGAGEANTE : envoie une demande d'échange au
    // conseiller. Les gardes ci-dessous doublent celles du serveur et du
    // trigger SQL — l'UI ne doit jamais être le seul verrou.
    if (!peutTransmettre) return;
    // L'état réel des cases — jamais des `true` codés en dur. Le narrowing
    // TypeScript (const + early return) garantit qu'on n'envoie que des
    // consentements effectivement cochés, et zod (z.literal(true)) rejette
    // côté serveur toute case obligatoire manquante.
    const { donnees_contact, donnees_patrimoniales, partage_conseiller } = consentements;
    if (!donnees_contact || !donnees_patrimoniales || !partage_conseiller) return;
    setBusy("transmit");
    try {
      const id = await sauvegarder(true);
      if (!id) return;
      await transmettreFn({
        data: {
          dossierId: id,
          consentements: {
            donnees_contact,
            donnees_patrimoniales,
            partage_conseiller,
            pieces_justificatives: consentements.pieces_justificatives,
          },
          misesEnGardeLues: Array.from(misesEnGardeLues),
        },
      });
      queryClient.invalidateQueries({ queryKey: ["espace"] });
      queryClient.invalidateQueries({ queryKey: ["dossier", id] });
      toast.success("Demande transmise. Votre conseiller vous recontacte — rien n'est engagé.");
      navigate({ to: "/espace/dossiers/$dossierId", params: { dossierId: id } });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "La transmission a échoué.");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="container-prose py-10 md:py-14">
      <p className="eyebrow">{dossierIdParam ? "Reprendre mon brouillon" : "Nouveau dossier"}</p>
      <h1 className="display-3 mt-4">Préparons votre échange conseiller.</h1>
      <p className="lead mt-4 max-w-2xl">
        Cinq étapes, aucune obligation de tout remplir : ce que vous préférez garder pour l'oral,
        dites-le simplement de vive voix. Rien n'est transmis avant la dernière étape.
      </p>

      {/* Fil d'Ariane des étapes */}
      <ol className="mt-8 flex flex-wrap gap-2">
        {ETAPES.map((label, index) => (
          <li key={label}>
            <button
              type="button"
              onClick={() => index < etape && setEtape(index)}
              disabled={index > etape}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                index === etape
                  ? "border-primary bg-primary text-primary-foreground"
                  : index < etape
                    ? "border-primary/40 bg-card text-foreground/80 hover:border-primary"
                    : "border-border bg-card text-muted-foreground"
              } disabled:cursor-default`}
            >
              {index < etape ? <Check size={13} aria-hidden /> : <span>{index + 1}.</span>}
              {label}
            </button>
          </li>
        ))}
      </ol>

      <div className="card-paper mt-8 p-6 md:p-8">
        {etape === 0 && (
          <div className="space-y-7">
            <Champ
              label="Titre du dossier"
              aide="Pour vous y retrouver — ex. « Préparer ma retraite »"
            >
              <Input
                value={form.titre}
                maxLength={120}
                placeholder="Mon projet"
                onChange={(e) => setForm({ ...form, titre: e.target.value })}
                className="max-w-md bg-card"
              />
            </Champ>
            <Champ label="Votre objectif principal">
              <OptionPills
                options={OBJECTIFS}
                value={form.objectif}
                onChange={(v) => setForm({ ...form, objectif: v })}
              />
            </Champ>
            <Champ label="Votre horizon de placement">
              <OptionPills
                options={HORIZONS}
                value={form.horizon}
                onChange={(v) => setForm({ ...form, horizon: v })}
              />
            </Champ>
            <Champ
              label="Montant que vous envisagez d'investir"
              aide="Une tranche suffit — le montant précis se discute de vive voix."
            >
              <OptionPills
                options={MONTANTS}
                value={form.montantTranche}
                onChange={(v) => setForm({ ...form, montantTranche: v })}
              />
            </Champ>
          </div>
        )}

        {etape === 1 && (
          <div className="space-y-7">
            <p className="flex items-start gap-2 rounded-xl bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
              <Info size={16} className="mt-0.5 shrink-0 text-[var(--grenat)]" aria-hidden />
              <span>
                Ces informations servent uniquement à préparer l'échange. Chaque question propose «
                Je préfère en parler de vive voix » — c'est une réponse parfaitement valable.
              </span>
            </p>
            <Champ label="Votre situation professionnelle">
              <OptionPills
                options={SITUATIONS_PRO}
                value={form.situation.situationPro ?? null}
                onChange={(v) =>
                  setForm({
                    ...form,
                    situation: { ...form.situation, situationPro: v ?? undefined },
                  })
                }
              />
            </Champ>
            <Champ label="Vos revenus annuels (tranche)">
              <OptionPills
                options={REVENUS}
                value={form.situation.revenus ?? null}
                onChange={(v) =>
                  setForm({ ...form, situation: { ...form.situation, revenus: v ?? undefined } })
                }
              />
            </Champ>
            <Champ label="Votre patrimoine global (tranche)">
              <OptionPills
                options={PATRIMOINES}
                value={form.situation.patrimoine ?? null}
                onChange={(v) =>
                  setForm({ ...form, situation: { ...form.situation, patrimoine: v ?? undefined } })
                }
              />
            </Champ>
            <Champ label="Votre capacité d'épargne mensuelle">
              <OptionPills
                options={EPARGNES_MENSUELLES}
                value={form.situation.epargneMensuelle ?? null}
                onChange={(v) =>
                  setForm({
                    ...form,
                    situation: { ...form.situation, epargneMensuelle: v ?? undefined },
                  })
                }
              />
            </Champ>
            <Champ label="Vos expériences d'investissement" aide="Plusieurs réponses possibles.">
              <MultiPills
                options={EXPERIENCES}
                values={form.situation.experiences ?? []}
                onChange={(values) =>
                  setForm({ ...form, situation: { ...form.situation, experiences: values } })
                }
              />
            </Champ>
            <Champ
              label="Votre rapport au risque, en première intention"
              aide="Indicatif — le vrai profil réglementaire sera établi avec le conseiller."
            >
              <OptionPills
                options={TOLERANCES}
                value={form.situation.tolerance ?? null}
                onChange={(v) =>
                  setForm({ ...form, situation: { ...form.situation, tolerance: v ?? undefined } })
                }
              />
            </Champ>
            <Champ label="Autre chose à signaler ? (optionnel)">
              <Textarea
                value={form.situation.precisions ?? ""}
                maxLength={2000}
                rows={4}
                placeholder="Contexte, contraintes, questions que vous voulez absolument aborder…"
                onChange={(e) =>
                  setForm({ ...form, situation: { ...form.situation, precisions: e.target.value } })
                }
                className="bg-card"
              />
            </Champ>
          </div>
        )}

        {etape === 2 && (
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sélectionner une piste veut dire « j'aimerais en parler » — pas « je souscris ».
              Chaque catégorie précise où s'arrête la démarche en ligne et ce qui doit
              obligatoirement passer par votre conseiller.
            </p>

            {CATALOGUE.map((produit) => {
              const selected = form.produits.includes(produit.code);
              const ack = misesEnGardeLues.has(produit.code);
              return (
                <div
                  key={produit.code}
                  className={`rounded-2xl border p-5 transition-colors ${
                    selected ? "border-primary/50 bg-card" : "border-border/70 bg-card"
                  }`}
                >
                  <label className="flex cursor-pointer items-start gap-3">
                    <Checkbox
                      checked={selected}
                      onCheckedChange={(v) => {
                        const on = v === true;
                        setForm({
                          ...form,
                          produits: on
                            ? [...form.produits, produit.code]
                            : form.produits.filter((c) => c !== produit.code),
                        });
                        if (!on) {
                          // Désélection → l'accusé de mise en garde tombe aussi.
                          setMisesEnGardeLues((prev) => {
                            const next = new Set(prev);
                            next.delete(produit.code);
                            return next;
                          });
                        }
                      }}
                      className="mt-1"
                    />
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-lg text-foreground">{produit.nom}</span>
                        <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                          {produit.tag}
                        </span>
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {produit.description}
                      </span>
                      <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/70">Risques :</strong>{" "}
                        {produit.risques.join(" · ")}
                      </span>
                      <span className="mt-2 block rounded-lg bg-muted/60 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/70">
                          Jusqu'où va la démarche en ligne :
                        </strong>{" "}
                        {produit.bascule}
                      </span>
                    </span>
                  </label>

                  {/* Mise en garde : bloquante AVANT transmission pour les
                      catégories qui l'exigent (SCPI, métaux précieux). */}
                  {selected && produit.miseEnGarde && (
                    <div
                      className="mt-4 rounded-xl border p-4"
                      style={{
                        borderColor: "color-mix(in oklch, var(--grenat-clair) 40%, transparent)",
                        background: "color-mix(in oklch, var(--grenat-clair) 6%, transparent)",
                      }}
                    >
                      <p className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
                        <TriangleAlert
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--grenat-clair)" }}
                          aria-hidden
                        />
                        {produit.miseEnGarde.texte}
                      </p>
                      <label className="mt-3 flex cursor-pointer items-center gap-2.5">
                        <Checkbox
                          checked={ack}
                          onCheckedChange={(v) =>
                            setMisesEnGardeLues((prev) => {
                              const next = new Set(prev);
                              if (v === true) next.add(produit.code);
                              else next.delete(produit.code);
                              return next;
                            })
                          }
                        />
                        <span className="text-sm font-medium text-foreground">
                          J'ai lu et compris cette mise en garde.
                        </span>
                      </label>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-8">
              <h2 className="font-display text-xl text-foreground">
                Présentes au catalogue, volontairement absentes du parcours en ligne
              </h2>
              <div className="mt-4 space-y-3">
                {CATEGORIES_INFORMATIVES.map((cat) => (
                  <div
                    key={cat.code}
                    className="rounded-2xl border border-dashed border-border bg-muted/40 p-5"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-lg text-foreground/80">{cat.nom}</span>
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                        {cat.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <strong className="text-foreground/70">Pourquoi pas ici :</strong>{" "}
                      {cat.pourquoiPasEnLigne}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary underline"
                    >
                      En parler lors d'un échange <ArrowRight size={13} aria-hidden />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {etape === 3 && (
          <div className="space-y-7">
            {/* NON ENGAGEANT : l'esquisse est un support de discussion pour
                l'échange conseiller. Aucun ordre, aucune souscription — le
                choix « avec mon conseiller » est proposé en premier. */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              Deux façons de préparer la suite — aussi légitimes l'une que l'autre. Dans les deux
              cas, l'allocation finale se décide avec votre conseiller, jamais ici.
            </p>

            <div className="grid gap-3 md:grid-cols-2">
              <button
                type="button"
                aria-pressed={form.allocation.mode === "avec_conseiller"}
                onClick={() =>
                  // Choisir « avec conseiller » retire l'esquisse en cours :
                  // pas de lignes résiduelles invisibles (ni en base, ni dans
                  // le gate du bouton Continuer).
                  setForm({
                    ...form,
                    allocation: {
                      mode: "avec_conseiller",
                      enveloppe: null,
                      contratId: null,
                      lignes: [],
                    },
                  })
                }
                className={`rounded-2xl border p-5 text-left transition-colors ${
                  form.allocation.mode === "avec_conseiller"
                    ? "border-primary bg-card"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <span className="font-display text-lg text-foreground">
                  Construire l'allocation avec mon conseiller
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                  Le plus simple : vous transmettez votre dossier, votre conseiller vous rappelle au
                  créneau de votre choix et construit l'allocation avec vous, de vive voix.
                </span>
              </button>
              <button
                type="button"
                aria-pressed={form.allocation.mode === "esquisse"}
                onClick={() =>
                  setForm({ ...form, allocation: { ...form.allocation, mode: "esquisse" } })
                }
                className={`rounded-2xl border p-5 text-left transition-colors ${
                  form.allocation.mode === "esquisse"
                    ? "border-primary bg-card"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <span className="font-display text-lg text-foreground">
                  Esquisser moi-même une allocation
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                  Choisissez une enveloppe et un contrat pressenti ; les supports de l'univers ISR
                  du cabinet s'ajouteront ici au fur et à mesure de leur publication. C'est une
                  esquisse de travail : votre conseiller la challengera avec vous — ce n'est ni une
                  instruction d'investissement, ni une souscription.
                </span>
              </button>
            </div>

            {form.allocation.mode === "esquisse" && (
              <>
                <Champ label="Enveloppe pressentie">
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        { value: "av", label: "Assurance vie" },
                        { value: "per", label: "PER (retraite)" },
                      ] as { value: EnveloppeContrat; label: string }[]
                    ).map((option) => {
                      const selected = (form.allocation.enveloppe ?? "av") === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          aria-pressed={selected}
                          onClick={() =>
                            setForm({
                              ...form,
                              allocation: { ...form.allocation, enveloppe: option.value },
                            })
                          }
                          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                            selected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-foreground"
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </Champ>

                <Champ
                  label="Contrat pressenti"
                  aide="Frais affichés en toute transparence — notre rémunération (rétrocessions) est incluse dans ces frais, détail sur la page Tarifs."
                >
                  <div className="grid gap-3 md:grid-cols-3">
                    {CHOIX_CONTRATS.map((contrat) => {
                      const selected = form.allocation.contratId === contrat.id;
                      const frais = contrat.resumeFrais(form.allocation.enveloppe ?? "av");
                      return (
                        <button
                          key={contrat.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() =>
                            setForm({
                              ...form,
                              allocation: {
                                ...form.allocation,
                                contratId: selected ? null : contrat.id,
                              },
                            })
                          }
                          className={`rounded-2xl border p-4 text-left transition-colors ${
                            selected
                              ? "border-primary bg-card"
                              : "border-border bg-card hover:border-primary/40"
                          }`}
                        >
                          <span className="block font-medium text-foreground">
                            {contrat.libelle}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {contrat.assureur} · distribué par {contrat.distribution}
                          </span>
                          {frais && (
                            <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                              {frais}
                            </span>
                          )}
                          <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                            {contrat.modaliteSouscription}
                          </span>
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      aria-pressed={!form.allocation.contratId}
                      onClick={() =>
                        setForm({
                          ...form,
                          allocation: { ...form.allocation, contratId: null },
                        })
                      }
                      className={`rounded-2xl border border-dashed p-4 text-left transition-colors ${
                        !form.allocation.contratId
                          ? "border-primary bg-card"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      <span className="block font-medium text-foreground">
                        Je ne sais pas encore
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        Le contrat se choisit très bien pendant l'échange — vous verrez alors tous
                        les supports des deux contrats.
                      </span>
                    </button>
                  </div>
                </Champ>

                {FONDS_SELECTIONNABLES.length === 0 ? (
                  <p className="rounded-xl bg-muted/60 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                    L'univers de fonds ISR référencés sur nos contrats n'est pas encore publié par
                    le cabinet : l'esquisse se limite pour l'instant au choix de l'enveloppe et du
                    contrat pressenti. Les supports concrets (avec leur SRI, leur classification
                    SFDR et leurs labels) apparaîtront ici dès qu'ils seront communiqués — vous
                    pouvez aussi laisser votre conseiller construire l'allocation complète avec
                    vous, de vive voix.
                  </p>
                ) : fondsDisponibles.length === 0 ? (
                  <p className="rounded-xl bg-muted/60 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                    Aucun support à afficher : sélectionnez au moins une piste « Actions & ETF ISR
                    », « Obligations vertes & obligataire ISR », « Épargne solidaire » ou « SCPI &
                    immobilier durable » à l'étape précédente — ou laissez simplement votre
                    conseiller construire l'allocation avec vous.
                  </p>
                ) : (
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-medium text-foreground">
                        Supports de l'univers ISR du cabinet
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Poids indicatifs, optionnels — total{" "}
                        <strong
                          className={totalEsquisse > 100 ? "text-destructive" : "text-foreground"}
                        >
                          {totalEsquisse} %
                        </strong>
                        {totalEsquisse < 100 && " (le solde se définit avec le conseiller)"}
                      </p>
                    </div>
                    <div className="mt-3 space-y-4">
                      {ORDRE_CATEGORIES.map((categorie) => {
                        const fondsCategorie = fondsDisponibles.filter(
                          (f) => f.categorie === categorie,
                        );
                        if (fondsCategorie.length === 0) return null;
                        return (
                          <div key={categorie}>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              {categorie}
                            </p>
                            <ul className="mt-2 space-y-2">
                              {fondsCategorie.map((fonds) => {
                                const ligne = (form.allocation.lignes ?? []).find(
                                  (l) => l.isin === fonds.isin,
                                );
                                const selected = Boolean(ligne);
                                return (
                                  <li
                                    key={fonds.isin}
                                    className={`flex flex-wrap items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
                                      selected
                                        ? "border-primary/50 bg-card"
                                        : "border-border/70 bg-card"
                                    }`}
                                  >
                                    <Checkbox
                                      id={`fonds-${fonds.isin}`}
                                      checked={selected}
                                      onCheckedChange={(v) => {
                                        const lignes = form.allocation.lignes ?? [];
                                        setForm({
                                          ...form,
                                          allocation: {
                                            ...form.allocation,
                                            lignes:
                                              v === true
                                                ? [...lignes, { isin: fonds.isin, poidsPct: null }]
                                                : lignes.filter((l) => l.isin !== fonds.isin),
                                          },
                                        });
                                      }}
                                    />
                                    <label
                                      htmlFor={`fonds-${fonds.isin}`}
                                      className="min-w-0 flex-1 cursor-pointer"
                                    >
                                      <span className="block text-sm text-foreground">
                                        {fonds.nom}
                                      </span>
                                      <span className="mt-0.5 block text-xs text-muted-foreground">
                                        {fonds.isin}
                                        {fonds.sri ? ` · SRI ${fonds.sri}/7` : ""}
                                        {fonds.disponibleSur.length === 1
                                          ? ` · référencé sur ${libelleContrat(fonds.disponibleSur[0]).split(" — ")[0]}`
                                          : " · référencé sur les deux contrats"}
                                      </span>
                                    </label>
                                    {selected && (
                                      <div className="flex items-center gap-1.5">
                                        <label htmlFor={`poids-${fonds.isin}`} className="sr-only">
                                          Poids indicatif de {fonds.nom} en pourcentage
                                        </label>
                                        <Input
                                          id={`poids-${fonds.isin}`}
                                          type="number"
                                          min={0}
                                          max={100}
                                          step={5}
                                          placeholder="—"
                                          value={ligne?.poidsPct ?? ""}
                                          onChange={(e) => {
                                            const brut = e.target.value;
                                            const nombre = Number(brut);
                                            // Saisie vide ou non numérique → « à discuter » (null),
                                            // jamais NaN (rejeté par zod avec un message obscur).
                                            const poids =
                                              brut === "" || Number.isNaN(nombre)
                                                ? null
                                                : Math.max(0, Math.min(100, Math.round(nombre)));
                                            setForm({
                                              ...form,
                                              allocation: {
                                                ...form.allocation,
                                                lignes: (form.allocation.lignes ?? []).map((l) =>
                                                  l.isin === fonds.isin
                                                    ? { ...l, poidsPct: poids }
                                                    : l,
                                                ),
                                              },
                                            });
                                          }}
                                          className="w-20 bg-card text-right"
                                        />
                                        <span className="text-sm text-muted-foreground">%</span>
                                      </div>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    {totalEsquisse > 100 && (
                      <p className="mt-3 rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                        Le total dépasse 100 % — ajustez les poids pour continuer.
                      </p>
                    )}
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      Le DIC et le prospectus de chaque support font foi et sont disponibles sur
                      demande auprès du cabinet. Les performances passées ne préjugent pas des
                      performances futures. Cette esquisse ne constitue ni un conseil, ni une
                      instruction d'investissement : elle prépare votre échange.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {etape === 4 && (
          <div className="space-y-8">
            {/* Relecture : les données saisies, présentées pour CONFIRMATION
                explicite avant transmission. */}
            <div>
              <h2 className="font-display text-xl text-foreground">Relisez ce qui sera transmis</h2>
              <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm md:grid-cols-2">
                <div>
                  <dt className="text-muted-foreground">Dossier</dt>
                  <dd className="mt-0.5 font-medium text-foreground">
                    {form.titre || "Sans titre"}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Objectif</dt>
                  <dd className="mt-0.5 font-medium text-foreground">
                    {form.objectif ?? "Non renseigné"}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Horizon</dt>
                  <dd className="mt-0.5 font-medium text-foreground">
                    {form.horizon ?? "Non renseigné"}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Montant envisagé</dt>
                  <dd className="mt-0.5 font-medium text-foreground">
                    {form.montantTranche ?? "Non renseigné"}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Situation</dt>
                  <dd className="mt-0.5 font-medium text-foreground">
                    {[
                      form.situation.situationPro,
                      form.situation.revenus,
                      form.situation.patrimoine,
                      form.situation.epargneMensuelle,
                      form.situation.tolerance,
                    ]
                      .filter(Boolean)
                      .join(" · ") || "À aborder de vive voix"}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Pistes sélectionnées</dt>
                  <dd className="mt-0.5 font-medium text-foreground">
                    {produitsSelectionnes.length > 0
                      ? produitsSelectionnes.map((p) => p.nom).join(", ")
                      : "Aucune — sélectionnez-en au moins une à l'étape 3"}
                  </dd>
                </div>
                {form.allocation.mode && (
                  <div className="md:col-span-2">
                    <dt className="text-muted-foreground">
                      Esquisse d'allocation (support de discussion)
                    </dt>
                    <dd className="mt-0.5 space-y-0.5 font-medium text-foreground">
                      {resumeAllocation(form.allocation).map((ligne, i) => (
                        <span key={i} className="block">
                          {ligne}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
              {form.situation.precisions && (
                <p className="mt-3 rounded-xl bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
                  « {form.situation.precisions} »
                </p>
              )}
            </div>

            <Champ
              label="Quand préférez-vous être rappelé ?"
              aide="Votre conseiller vous recontacte après la transmission — indiquez le moment qui vous arrange."
            >
              <OptionPills
                options={CRENEAUX_RAPPEL}
                value={form.creneauRappel}
                onChange={(v) => setForm({ ...form, creneauRappel: v })}
              />
            </Champ>

            <div>
              <h2 className="font-display text-xl text-foreground">Vos consentements, un par un</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Un consentement par catégorie de donnée — aucun n'est pré-coché, et le libellé exact
                de chacun est archivé avec sa date dans votre espace (Profil &amp; données). Détail
                des traitements dans notre{" "}
                <Link to="/confidentialite" className="underline">
                  politique de confidentialité
                </Link>
                .
              </p>
              <div className="mt-4 space-y-3">
                {CONSENTEMENTS.map((meta) => (
                  <ConsentCheckbox
                    key={meta.categorie}
                    meta={meta}
                    checked={consentements[meta.categorie]}
                    onCheckedChange={(checked) =>
                      setConsentements((prev) => ({ ...prev, [meta.categorie]: checked }))
                    }
                  />
                ))}
              </div>
            </div>

            {/* Le point exact où s'arrête la démarche en ligne — écrit noir
                sur blanc à l'endroit où l'utilisateur clique. */}
            <div
              className="rounded-2xl border bg-card p-5"
              style={{ borderColor: "color-mix(in oklch, var(--grenat) 50%, transparent)" }}
            >
              <h3 className="font-medium text-foreground">
                Ce que « transmettre » veut dire — et ne veut pas dire
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-2">
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--primary)" }}
                    aria-hidden
                  />
                  <span>
                    Votre conseiller reçoit votre dossier et vous recontacte pour un échange de vive
                    voix.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--primary)" }}
                    aria-hidden
                  />
                  <span>
                    Vous pourrez retirer votre demande à tout moment, en un clic, sans
                    justification.
                  </span>
                </li>
                <li className="flex gap-2">
                  <X
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--grenat-clair)" }}
                    aria-hidden
                  />
                  <span>
                    Vous ne souscrivez à rien : aucune somme n'est engagée, aucun contrat n'est
                    créé.
                  </span>
                </li>
                <li className="flex gap-2">
                  <X
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--grenat-clair)" }}
                    aria-hidden
                  />
                  <span>
                    Aucune recommandation n'est produite automatiquement : elle sera formalisée par
                    écrit par votre conseiller, après votre échange — et la signature éventuelle se
                    fera sur les documents officiels du partenaire, jamais dans cet espace.
                  </span>
                </li>
              </ul>
            </div>

            {misesEnGardeManquantes.length > 0 && (
              <p className="rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                Mise en garde à lire et accepter (étape 3) pour :{" "}
                {misesEnGardeManquantes.map((p) => p.nom).join(", ")}.
              </p>
            )}
          </div>
        )}

        {/* Barre d'actions */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6">
          <div className="flex flex-wrap gap-3">
            {etape > 0 && (
              <button type="button" className="btn-ghost" onClick={() => setEtape(etape - 1)}>
                <ArrowLeft size={15} aria-hidden /> Précédent
              </button>
            )}
            <button
              type="button"
              className="btn-ghost disabled:cursor-not-allowed disabled:opacity-50"
              disabled={busy !== null}
              onClick={() => void enregistrerBrouillon()}
            >
              <Save size={15} aria-hidden />
              {busy === "save" ? "Enregistrement…" : "Enregistrer le brouillon"}
            </button>
          </div>

          {etape < ETAPES.length - 1 ? (
            <button
              type="button"
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
              disabled={
                (etape === 2 && misesEnGardeManquantes.length > 0) ||
                (etape === 3 && form.allocation.mode === "esquisse" && totalEsquisse > 100)
              }
              onClick={() => setEtape(etape + 1)}
            >
              Continuer <ArrowRight size={15} aria-hidden />
            </button>
          ) : (
            <button
              type="button"
              className="btn-grenat disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!peutTransmettre || busy !== null}
              onClick={() => void transmettre()}
            >
              <SendHorizonal size={15} aria-hidden />
              {busy === "transmit" ? "Transmission…" : "Transmettre ma demande — sans engagement"}
            </button>
          )}
        </div>

        {/* La raison du bouton inactif, visible de tous (un bouton disabled
            n'est ni focusable ni survolable sur mobile). */}
        {etape === ETAPES.length - 1 && !peutTransmettre && (
          <p className="mt-3 text-right text-sm text-muted-foreground">
            Pour transmettre, il manque :{" "}
            {[
              !form.titre.trim() && "un titre de dossier (étape 1)",
              form.produits.length === 0 && "au moins une piste de placement (étape 3)",
              misesEnGardeManquantes.length > 0 && "la lecture des mises en garde (étape 3)",
              !consentementsObligatoiresOk && "les trois consentements requis ci-dessus",
            ]
              .filter(Boolean)
              .join(", ")}
            .
          </p>
        )}
      </div>
    </div>
  );
}
