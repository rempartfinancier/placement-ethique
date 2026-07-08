// ============================================================
// Simulateur de projection — orchestrateur (pattern rempartfinancier/
// src/components/simulators/Placements.tsx) : reducer central,
// synchronisation URL débouncée, formulaire à gauche, résultats à
// droite. AUCUN chiffre métier ici : tout vient de
// src/lib/simulateur-placements/ (hypotheses, contrats) et le calcul du
// moteur (engine, fiscalite).
//
// Règle produit : aucun fonds nommé sur cet écran — le simulateur reste
// un calculateur générique (couche « Information »). Les portefeuilles
// types vivent sur /outils/portefeuilles-types avec leur cadrage propre.
// ============================================================

import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { Link2 } from "lucide-react";
import { LeadGate, hasPassedGate } from "@/components/LeadGate";
import { ResultsActions } from "@/components/ResultsActions";
import { SliderField } from "@/components/SliderField";
import type { PdfDoc } from "@/lib/pdf";
import { projeterContrat, type FrequenceVersement } from "@/lib/simulateur-placements/engine";
import type { Enveloppe } from "@/lib/simulateur-placements/fiscalite";
import {
  CONTRATS,
  type ContratId,
  type EnveloppeContrat,
} from "@/lib/simulateur-placements/contrats";
import {
  ASSURANCE_VIE,
  HYPOTHESES_MAJ,
  PRESETS_TAUX_UC,
  RENDEMENTS,
  TMI_DISPONIBLES_PCT,
} from "@/lib/simulateur-placements/hypotheses";
import {
  CLES_SCHEMA_URL,
  serialiserEtat,
  type PresetFrais,
} from "@/lib/simulateur-placements/share";
import { eur, pct } from "@/components/simulators/format";
import { reducerSimulateur, versEntreeMoteur, type EtatSimulateur } from "./projection/state";
import { GraphiqueProjection } from "./projection/GraphiqueProjection";
import { TableauAnnuel } from "./projection/TableauAnnuel";

const LIBELLE_ENVELOPPE: Record<Enveloppe, string> = {
  av: "Assurance-vie",
  per: "PER",
  libre: "Épargne libre",
};

const DESCRIPTION_ENVELOPPE: Record<Enveloppe, string> = {
  av: "Prélèvements sociaux annuels sur le fonds en euros, PFO puis régularisation au rachat, abattement après 8 ans.",
  per: "Versements déductibles du revenu imposable (économie affichée à part), sortie en capital imposée selon votre TMI.",
  libre:
    "Projection sans enveloppe fiscale ni frais d'entrée : utile pour comparer des hypothèses de rendement.",
};

const FREQUENCES: { value: FrequenceVersement; label: string }[] = [
  { value: "mensuelle", label: "par mois" },
  { value: "trimestrielle", label: "par trimestre" },
  { value: "annuelle", label: "par an" },
];

type Props = { etatInitial: EtatSimulateur };

export function ProjectionPlacement({ etatInitial }: Props) {
  const [etat, dispatch] = useReducer(reducerSimulateur, etatInitial);
  const [emailRequested, setEmailRequested] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lienCopie, setLienCopie] = useState(false);

  // Synchronisation URL débouncée (300 ms), via history.replaceState —
  // pas via le routeur, dont le sérialiseur transformerait les valeurs.
  // Seules les clés du schéma (CLES_SCHEMA_URL) sont réécrites : les
  // paramètres étrangers (utm_*, gclid…) et le fragment sont préservés.
  // État par défaut → aucune clé du schéma (pas de « ?v=1 » parasite).
  const timerUrl = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (timerUrl.current) clearTimeout(timerUrl.current);
    timerUrl.current = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      for (const cle of CLES_SCHEMA_URL) params.delete(cle);
      const notres = serialiserEtat(etat);
      if (Object.keys(notres).some((cle) => cle !== "v")) {
        for (const [cle, valeur] of Object.entries(notres)) params.set(cle, valeur);
      }
      const qs = params.toString();
      const url = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
      window.history.replaceState(null, "", url);
    }, 300);
    return () => {
      if (timerUrl.current) clearTimeout(timerUrl.current);
    };
  }, [etat]);

  const resultat = useMemo(() => projeterContrat(versEntreeMoteur(etat)), [etat]);

  const avecEnveloppe = etat.enveloppe !== "libre";
  const avecFondsEuros = avecEnveloppe && etat.repartitionUcPct < 100;
  const avecPsAnnuels = etat.enveloppe === "av" && avecFondsEuros;
  const contratPreset = etat.presetFrais !== "perso" ? CONTRATS[etat.presetFrais] : null;

  // Signaux affichés : alertes du moteur + signal « frais à valider »
  // quand un préréglage de contrat non confirmé est utilisé (jamais en
  // épargne libre, où le préréglage contrat n'intervient pas).
  const alertes = useMemo(() => {
    const liste = [...resultat.alertes];
    if (avecEnveloppe && contratPreset && contratPreset.statut === "À VALIDER") {
      liste.push({
        code: "frais-a-valider" as const,
        message: `Frais du contrat ${contratPreset.libelle} repris de la simulation de référence du cabinet — à confirmer en rendez-vous avant toute décision. ${contratPreset.modaliteSouscription}`,
      });
    }
    return liste;
  }, [resultat.alertes, contratPreset, avecEnveloppe]);

  const copierLien = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLienCopie(true);
      setTimeout(() => setLienCopie(false), 2500);
    } catch {
      // Permission refusée : dégradation silencieuse.
    }
  };

  const leadPayload: Record<string, unknown> = {
    Enveloppe: LIBELLE_ENVELOPPE[etat.enveloppe],
    "Versement initial": eur(etat.versementInitial),
    "Versement périodique": `${eur(etat.versementPeriodique)} ${FREQUENCES.find((f) => f.value === etat.frequenceVersement)?.label ?? ""}`,
    Durée: `${etat.dureeAnnees} ans`,
    ...(avecEnveloppe ? { "Répartition UC": `${pct(etat.repartitionUcPct)} %` } : {}),
    "Taux UC retenu": `${pct(etat.tauxUcPct)} %/an`,
    ...(avecFondsEuros ? { "Taux fonds euros retenu": `${pct(etat.tauxFondsEurosPct)} %/an` } : {}),
    ...(avecEnveloppe ? { "Frais d'entrée": `${pct(etat.fraisEntreePct)} %` } : {}),
    "Frais de gestion UC": `${pct(etat.fraisGestionUcPct)} %/an`,
    "Capital brut au terme": eur(Math.round(resultat.capitalBrutTerme)),
    "Capital net estimé": eur(Math.round(resultat.capitalNet)),
  };

  const buildDoc = (): PdfDoc => ({
    title: "Projection d'épargne responsable",
    subtitle: `${LIBELLE_ENVELOPPE[etat.enveloppe]} · ${etat.dureeAnnees} ans · hypothèses à jour : ${HYPOTHESES_MAJ}`,
    source: "simulateur-projection",
    sections: [
      {
        heading: "Hypothèses",
        rows: [
          { label: "Enveloppe", value: LIBELLE_ENVELOPPE[etat.enveloppe] },
          { label: "Versement initial", value: eur(etat.versementInitial) },
          {
            label: "Versement périodique",
            value: `${eur(etat.versementPeriodique)} ${FREQUENCES.find((f) => f.value === etat.frequenceVersement)?.label ?? ""}`,
          },
          ...(etat.indexationAnnuellePct > 0
            ? [
                {
                  label: "Indexation des versements",
                  value: `${pct(etat.indexationAnnuellePct)} %/an`,
                },
              ]
            : []),
          { label: "Durée", value: `${etat.dureeAnnees} ans` },
          ...(avecEnveloppe
            ? [
                {
                  label: "Répartition",
                  value: `${pct(etat.repartitionUcPct)} % UC / ${pct(100 - etat.repartitionUcPct)} % fonds euros`,
                },
              ]
            : []),
          {
            label: "Rendement UC retenu",
            value: `${pct(etat.tauxUcPct)} %/an (hypothèse non contractuelle)`,
          },
          ...(avecFondsEuros
            ? [
                {
                  label: "Rendement fonds euros retenu",
                  value: `${pct(etat.tauxFondsEurosPct)} %/an (hypothèse non contractuelle)`,
                },
              ]
            : []),
          {
            label: "Frais",
            value: avecEnveloppe
              ? `${pct(etat.fraisEntreePct)} % d'entrée · ${pct(etat.fraisGestionUcPct, 2)} %/an UC${avecFondsEuros ? ` · ${pct(etat.fraisGestionFondsEurosPct, 2)} %/an fonds euros` : ""}${contratPreset ? ` (préréglage ${contratPreset.libelle}${contratPreset.statut === "À VALIDER" ? " — à confirmer en rendez-vous" : ""})` : ""} — hors frais d'arbitrage et de sortie éventuels`
              : `${pct(etat.fraisGestionUcPct)} %/an de gestion (pas de frais d'entrée en épargne libre)`,
          },
          ...(etat.enveloppe === "av"
            ? [
                {
                  label: "Imposition des produits",
                  value: etat.optionBareme ? `Barème (TMI ${etat.tmiPct} %)` : "PFU",
                },
                {
                  label: "Situation",
                  value: etat.estCouple ? "Couple (imposition commune)" : "Personne seule",
                },
              ]
            : []),
          ...(etat.enveloppe === "per"
            ? [
                {
                  label: "TMI entrée / sortie",
                  value: `${etat.tmiEntreePct} % / ${etat.tmiSortiePct} %`,
                },
              ]
            : []),
          ...(etat.inflationActivee
            ? [{ label: "Inflation retenue", value: `${pct(etat.inflationPct)} %/an` }]
            : []),
        ],
      },
      {
        heading: "Synthèse",
        rows: [
          { label: "Versements bruts cumulés", value: eur(resultat.versementsBrutsCumules) },
          ...(resultat.fraisEntreePayes > 0
            ? [
                {
                  label: "Frais d'entrée prélevés",
                  value: eur(Math.round(resultat.fraisEntreePayes)),
                },
              ]
            : []),
          ...(resultat.psAnnuelsPreleves > 0
            ? [
                {
                  label: "PS annuels sur fonds euros",
                  value: eur(Math.round(resultat.psAnnuelsPreleves)),
                },
              ]
            : []),
          { label: "Capital brut au terme", value: eur(Math.round(resultat.capitalBrutTerme)) },
          ...(resultat.fiscal
            ? [
                ...(resultat.fiscal.pfo > 0
                  ? [{ label: "PFO retenu au rachat", value: eur(Math.round(resultat.fiscal.pfo)) }]
                  : []),
                {
                  label: "Régularisation d'impôt (année suivante)",
                  value: eur(Math.round(resultat.fiscal.regularisation)),
                },
                {
                  label: "Prélèvements sociaux à la sortie",
                  value: eur(Math.round(resultat.fiscal.prelevementsSociauxSortie)),
                },
              ]
            : []),
          { label: "Capital net estimé", value: eur(Math.round(resultat.capitalNet)) },
          ...(resultat.capitalNetReel !== null
            ? [
                {
                  label: "Soit en euros d'aujourd'hui",
                  value: eur(Math.round(resultat.capitalNetReel)),
                },
              ]
            : []),
          ...(resultat.fiscal && resultat.fiscal.economieImpotEntree > 0
            ? [
                {
                  label: "Économie d'impôt à l'entrée (PER)",
                  value: `${eur(Math.round(resultat.fiscal.economieImpotEntree))} — affichée à part, non capitalisée`,
                },
              ]
            : []),
        ],
      },
      {
        heading: "Trajectoire année par année",
        rows: resultat.lignes.map((l) => ({
          label: `Année ${l.annee} — versé ${eur(l.cumulVerseBrut)}`,
          value: `${eur(Math.round(l.capitalFinAnnee))}${avecEnveloppe ? ` (net si rachat : ${eur(Math.round(l.capitalNetSiRachat))})` : ""}`,
        })),
        note: "Versements bruts, produits nets de frais de gestion. Aucun rachat en cours de contrat dans cette version.",
      },
    ],
    disclaimer: `Simulation non contractuelle, à vocation pédagogique. Hypothèses de rendement, de frais et de fiscalité indicatives, à valider avec un conseiller. ${contratPreset ? contratPreset.notesFrais : "La simulation ne tient compte ni des frais d'arbitrage ni des frais de sortie éventuels."} Les performances passées ne préjugent pas des performances futures. Pour tout support réel, le document d'informations clés (DIC) prime sur les hypothèses affichées.`,
  });

  const inputsBlock = (
    <div className="space-y-7">
      <div>
        <p className="eyebrow mb-3">Enveloppe</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {(Object.keys(LIBELLE_ENVELOPPE) as Enveloppe[]).map((env) => {
            const active = etat.enveloppe === env;
            return (
              <button
                key={env}
                type="button"
                onClick={() => dispatch({ type: "ENVELOPPE", valeur: env })}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  active
                    ? "border-[var(--grenat)] bg-[oklch(0.97_0.025_85)]"
                    : "border-border bg-card hover:border-foreground/40"
                }`}
              >
                <p className="font-medium text-sm text-foreground">{LIBELLE_ENVELOPPE[env]}</p>
              </button>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          {DESCRIPTION_ENVELOPPE[etat.enveloppe]}
        </p>
      </div>

      <SliderField
        label="Versement initial"
        value={etat.versementInitial}
        onChange={(v) => dispatch({ type: "VERSEMENT_INITIAL", valeur: v })}
        min={0}
        max={200000}
        step={500}
        hardMax={2000000}
        unit="€"
      />

      <div>
        <SliderField
          label="Versement régulier"
          value={etat.versementPeriodique}
          onChange={(v) => dispatch({ type: "VERSEMENT_PERIODIQUE", valeur: v })}
          min={0}
          max={3000}
          step={50}
          hardMax={20000}
          unit="€"
        />
        <div className="mt-2 flex items-center gap-2">
          {FREQUENCES.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => dispatch({ type: "FREQUENCE_VERSEMENT", valeur: f.value })}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                etat.frequenceVersement === f.value
                  ? "border-[var(--grenat)] bg-[oklch(0.97_0.025_85)] text-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <SliderField
        label="Durée"
        value={etat.dureeAnnees}
        onChange={(v) => dispatch({ type: "DUREE", valeur: v })}
        min={1}
        max={40}
        step={1}
        hardMax={60}
        unit="ans"
      />

      {avecEnveloppe && (
        <div>
          <SliderField
            label="Part investie en supports (UC)"
            value={etat.repartitionUcPct}
            onChange={(v) => dispatch({ type: "REPARTITION_UC", valeur: v })}
            min={0}
            max={100}
            step={5}
            unit="%"
            hint={`Le reste (${pct(100 - etat.repartitionUcPct)} %) est affecté au fonds en euros.`}
          />
          {avecFondsEuros && (
            <div className="mt-3 rounded-xl border border-[color-mix(in_oklch,var(--grenat)_35%,transparent)] bg-[color-mix(in_oklch,var(--grenat)_5%,var(--card))] p-4 text-sm text-foreground leading-relaxed">
              ℹ Le fonds en euros classique est majoritairement investi en obligations (souveraines
              et d'entreprises) : sa composition extra-financière dépend de l'assureur et n'est
              généralement pas labellisée ISR. Si l'alignement de cette poche avec vos exigences
              compte pour vous, le sujet se vérifie contrat par contrat — parlez-en à votre
              conseiller.
            </div>
          )}
        </div>
      )}

      <div>
        <SliderField
          label={avecEnveloppe ? "Rendement annuel des supports (UC)" : "Rendement annuel retenu"}
          value={etat.tauxUcPct}
          onChange={(v) => dispatch({ type: "TAUX_UC", valeur: v })}
          min={RENDEMENTS.uc.minPct}
          max={RENDEMENTS.uc.maxPct}
          step={0.1}
          unit="%"
          hint="Hypothèse librement modifiable, non contractuelle — net des frais internes des supports, avant frais de gestion du contrat. Les performances passées ne préjugent pas des performances futures."
        />
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {PRESETS_TAUX_UC.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => dispatch({ type: "TAUX_UC", valeur: p.tauxPct })}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                etat.tauxUcPct === p.tauxPct
                  ? "border-[var(--grenat)] bg-[oklch(0.97_0.025_85)] text-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/40"
              }`}
            >
              {p.libelle} · {pct(p.tauxPct)} %
            </button>
          ))}
        </div>
      </div>

      {avecFondsEuros && (
        <SliderField
          label="Rendement annuel du fonds en euros"
          value={etat.tauxFondsEurosPct}
          onChange={(v) => dispatch({ type: "TAUX_FONDS_EUROS", valeur: v })}
          min={RENDEMENTS.fondsEuros.minPct}
          max={RENDEMENTS.fondsEuros.maxPct}
          step={0.1}
          unit="%"
          hint="Hypothèse non contractuelle — le rendement réellement servi par l'assureur varie chaque année."
        />
      )}

      {avecEnveloppe && (
        <div>
          <p className="eyebrow mb-3">Frais du contrat</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {(Object.keys(CONTRATS) as ContratId[])
              // Seuls les contrats disposant d'une grille de frais pour
              // l'enveloppe simulée sont proposés : un préréglage AV n'a
              // pas de sens sur une projection PER, et réciproquement.
              .filter((id) => CONTRATS[id].frais[etat.enveloppe as EnveloppeContrat] !== undefined)
              .map((id) => {
                const contrat = CONTRATS[id];
                const grille = contrat.frais[etat.enveloppe as EnveloppeContrat];
                const active = etat.presetFrais === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() =>
                      dispatch({ type: "APPLIQUER_PRESET_FRAIS", valeur: id as PresetFrais })
                    }
                    className={`rounded-xl border p-4 text-left transition-colors ${
                      active
                        ? "border-[var(--grenat)] bg-[oklch(0.97_0.025_85)]"
                        : "border-border bg-card hover:border-foreground/40"
                    }`}
                  >
                    <p className="font-medium text-sm text-foreground">{contrat.libelle}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {contrat.assureur}
                      {grille ? ` — ${pct(grille.gestionUcPct, 2)} %/an` : ""}
                      {contrat.statut === "À VALIDER" ? " — frais à confirmer" : ""}
                    </p>
                  </button>
                );
              })}
            <button
              type="button"
              onClick={() => dispatch({ type: "APPLIQUER_PRESET_FRAIS", valeur: "perso" })}
              className={`rounded-xl border p-4 text-left transition-colors ${
                etat.presetFrais === "perso"
                  ? "border-[var(--grenat)] bg-[oklch(0.97_0.025_85)]"
                  : "border-border bg-card hover:border-foreground/40"
              }`}
            >
              <p className="font-medium text-sm text-foreground">Personnalisé</p>
              <p className="text-xs text-muted-foreground mt-1">Saisissez vos propres frais</p>
            </button>
          </div>
          <div className="mt-4 space-y-5">
            <SliderField
              label="Frais d'entrée (sur chaque versement)"
              value={etat.fraisEntreePct}
              onChange={(v) => dispatch({ type: "FRAIS_ENTREE", valeur: v })}
              min={0}
              max={5}
              step={0.05}
              unit="%"
            />
            <SliderField
              label="Frais de gestion annuels — supports (UC)"
              value={etat.fraisGestionUcPct}
              onChange={(v) => dispatch({ type: "FRAIS_GESTION_UC", valeur: v })}
              min={0}
              max={4}
              step={0.05}
              unit="%"
            />
            {avecFondsEuros && (
              <SliderField
                label="Frais de gestion annuels — fonds en euros"
                value={etat.fraisGestionFondsEurosPct}
                onChange={(v) => dispatch({ type: "FRAIS_GESTION_FONDS_EUROS", valeur: v })}
                min={0}
                max={4}
                step={0.05}
                unit="%"
              />
            )}
            {contratPreset && (
              <p className="text-xs text-muted-foreground leading-relaxed">
                {contratPreset.notesFrais}
              </p>
            )}
          </div>
        </div>
      )}

      {!avecEnveloppe && (
        <SliderField
          label="Frais annuels (gestion, enveloppe)"
          value={etat.fraisGestionUcPct}
          onChange={(v) => dispatch({ type: "FRAIS_GESTION_UC", valeur: v })}
          min={0}
          max={3}
          step={0.1}
          unit="%"
          hint="Déduits chaque année du rendement brut."
        />
      )}

      {etat.enveloppe === "av" && (
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={etat.estCouple}
              onChange={() => dispatch({ type: "TOGGLE_COUPLE" })}
              className="h-4 w-4 accent-[var(--grenat)]"
            />
            <span className="text-sm font-medium text-foreground">
              Couple soumis à imposition commune (abattement{" "}
              {ASSURANCE_VIE.abattementAnnuelCouple.toLocaleString("fr-FR")} €)
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={etat.optionBareme}
              onChange={() => dispatch({ type: "TOGGLE_BAREME" })}
              className="h-4 w-4 accent-[var(--grenat)]"
            />
            <span className="text-sm font-medium text-foreground">
              Option pour le barème progressif (au lieu du PFU)
            </span>
          </label>
          {etat.optionBareme && (
            <TmiPills
              label="Votre taux marginal d'imposition"
              valeur={etat.tmiPct}
              onChange={(v) => dispatch({ type: "TMI", valeur: v })}
            />
          )}
        </div>
      )}

      {etat.enveloppe === "per" && (
        <div className="space-y-4">
          <TmiPills
            label="TMI aujourd'hui (économie d'impôt à l'entrée)"
            valeur={etat.tmiEntreePct}
            onChange={(v) => dispatch({ type: "TMI_ENTREE", valeur: v })}
          />
          <TmiPills
            label="TMI estimée à la retraite (imposition à la sortie)"
            valeur={etat.tmiSortiePct}
            onChange={(v) => dispatch({ type: "TMI_SORTIE", valeur: v })}
          />
        </div>
      )}

      <details className="rounded-xl border border-border bg-card">
        <summary className="cursor-pointer select-none px-4 py-3 text-sm font-medium text-foreground">
          Options avancées{" "}
          <span className="text-muted-foreground font-normal">— indexation, inflation</span>
        </summary>
        <div className="px-4 pb-5 pt-4 space-y-6 border-t border-border/60">
          <SliderField
            label="Indexation annuelle des versements"
            value={etat.indexationAnnuellePct}
            onChange={(v) => dispatch({ type: "INDEXATION", valeur: v })}
            min={0}
            max={10}
            step={0.5}
            unit="%"
            hint="Revalorise le versement régulier chaque année (0 % = versements constants)."
          />
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={etat.inflationActivee}
                onChange={() => dispatch({ type: "TOGGLE_INFLATION" })}
                className="h-4 w-4 accent-[var(--grenat)]"
              />
              <span className="text-sm font-medium text-foreground">
                Afficher en euros constants (corriger de l'inflation)
              </span>
            </label>
            {etat.inflationActivee && (
              <div className="mt-4">
                <SliderField
                  label="Inflation annuelle retenue"
                  value={etat.inflationPct}
                  onChange={(v) => dispatch({ type: "INFLATION", valeur: v })}
                  min={0}
                  max={6}
                  step={0.1}
                  unit="%"
                  hint="Hypothèse indicative. La BCE cible 2 % par an à moyen terme."
                />
              </div>
            )}
          </div>
        </div>
      </details>
    </div>
  );

  return (
    <>
      {!emailRequested && !submitted && (
        <div className="container-prose max-w-2xl">
          {inputsBlock}
          <div className="mt-10 flex justify-end">
            <button
              type="button"
              onClick={() => {
                if (hasPassedGate()) setSubmitted(true);
                else setEmailRequested(true);
              }}
              className="btn-primary"
            >
              Lancer la projection
            </button>
          </div>
        </div>
      )}

      {emailRequested && !submitted && (
        <div className="container-prose max-w-xl">
          <LeadGate
            source="Simulateur de projection"
            payload={leadPayload}
            onSuccess={() => {
              setEmailRequested(false);
              setSubmitted(true);
            }}
          />
        </div>
      )}

      {submitted && (
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-6">{inputsBlock}</div>

            <div className="md:col-span-6">
              <div className="space-y-5">
                <div
                  className="rounded-2xl p-8 text-primary-foreground"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.28 0.05 160), oklch(0.22 0.03 160))",
                  }}
                >
                  <p className="eyebrow" style={{ color: "oklch(0.8 0.08 82)" }}>
                    Projection à {etat.dureeAnnees} ans — {LIBELLE_ENVELOPPE[etat.enveloppe]}
                  </p>
                  <p className="font-display text-5xl mt-3" style={{ color: "var(--grenat)" }}>
                    {eur(Math.round(resultat.capitalNet))}
                  </p>
                  <p className="text-sm mt-2 text-white/80">
                    {avecEnveloppe
                      ? "net de frais et de fiscalité de sortie"
                      : "net de frais (aucune fiscalité appliquée)"}
                    {resultat.capitalNetReel !== null &&
                      ` — soit ${eur(Math.round(resultat.capitalNetReel))} en euros d'aujourd'hui`}
                  </p>
                  <dl className="mt-6 space-y-3 text-sm">
                    <Row k="Versements bruts cumulés" v={eur(resultat.versementsBrutsCumules)} />
                    {resultat.fraisEntreePayes > 0 && (
                      <Row
                        k="Frais d'entrée prélevés"
                        v={eur(Math.round(resultat.fraisEntreePayes))}
                      />
                    )}
                    <Row k="Capital brut au terme" v={eur(Math.round(resultat.capitalBrutTerme))} />
                    {resultat.psAnnuelsPreleves > 0 && (
                      <Row
                        k="PS annuels sur fonds euros"
                        v={eur(Math.round(resultat.psAnnuelsPreleves))}
                      />
                    )}
                    {resultat.fiscal && resultat.fiscal.pfo > 0 && (
                      <Row k="PFO retenu au rachat" v={eur(Math.round(resultat.fiscal.pfo))} />
                    )}
                    {resultat.fiscal && Math.round(resultat.fiscal.regularisation) !== 0 && (
                      <Row
                        k={
                          resultat.fiscal.regularisation >= 0
                            ? "Complément d'impôt (régularisation)"
                            : "Restitution d'impôt (régularisation)"
                        }
                        v={eur(Math.round(Math.abs(resultat.fiscal.regularisation)))}
                      />
                    )}
                    {resultat.fiscal && resultat.fiscal.prelevementsSociauxSortie > 0 && (
                      <Row
                        k="Prélèvements sociaux à la sortie"
                        v={eur(Math.round(resultat.fiscal.prelevementsSociauxSortie))}
                      />
                    )}
                    {resultat.anneeBascule !== null && (
                      <Row
                        k="Les intérêts dépassent les versements"
                        v={`année ${resultat.anneeBascule}`}
                      />
                    )}
                  </dl>
                  {resultat.fiscal && resultat.fiscal.economieImpotEntree > 0 && (
                    <p className="text-xs mt-4 text-white/70 leading-relaxed">
                      Économie d'impôt à l'entrée (PER) :{" "}
                      {eur(Math.round(resultat.fiscal.economieImpotEntree))} — affichée à part, non
                      capitalisée dans la projection.
                    </p>
                  )}
                  <Link to="/contact" className="btn-grenat mt-8 w-full justify-center">
                    Préparer un rendez-vous avec ces chiffres
                  </Link>
                </div>

                <GraphiqueProjection
                  lignes={resultat.lignes}
                  inflationActivee={etat.inflationActivee}
                  fiscaliteActivee={avecEnveloppe}
                />

                {alertes.length > 0 && (
                  <div className="space-y-3">
                    {alertes.map((a) => (
                      <div
                        key={a.code}
                        className="rounded-xl border border-[oklch(0.8_0.08_82)] bg-[oklch(0.97_0.025_85)] p-4 text-sm text-foreground leading-relaxed"
                      >
                        ⚠ {a.message}
                      </div>
                    ))}
                  </div>
                )}

                <ResultsActions source="simulateur-projection" buildDoc={buildDoc} />

                <TableauAnnuel
                  lignes={resultat.lignes}
                  avecPsFondsEuros={avecPsAnnuels}
                  fiscaliteActivee={avecEnveloppe}
                />

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={copierLien}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:border-foreground/40"
                  >
                    <Link2 size={16} />
                    {lienCopie ? "Lien copié ✓" : "Copier le lien de cette simulation"}
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "REINITIALISER" })}
                    className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    Réinitialiser
                  </button>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Envie de voir à quoi ressemble un portefeuille responsable réel ?{" "}
                  <Link
                    to="/outils/portefeuilles-types"
                    className="text-foreground underline underline-offset-4"
                  >
                    Consultez nos exemples de portefeuilles types
                  </Link>{" "}
                  — présentés à titre d'illustration, jamais comme une recommandation.
                </p>

                <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
                  Simulation non contractuelle, à vocation pédagogique. Hypothèses de rendement, de
                  frais et de fiscalité indicatives et librement modifiables : les performances
                  passées ne préjugent pas des performances futures, aucune performance n'est
                  garantie. La simulation ne tient compte ni des frais d'arbitrage ni des frais de
                  sortie éventuels. Pour tout support réel, le document d'informations clés (DIC)
                  prime sur les hypothèses affichées ici. Cet outil ne constitue pas un conseil en
                  investissement personnalisé. Hypothèses fiscales à jour : {HYPOTHESES_MAJ}.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function TmiPills({
  label,
  valeur,
  onChange,
}: {
  label: string;
  valeur: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {TMI_DISPONIBLES_PCT.map((tmi) => (
          <button
            key={tmi}
            type="button"
            onClick={() => onChange(tmi)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              valeur === tmi
                ? "border-[var(--grenat)] bg-[oklch(0.97_0.025_85)] text-foreground"
                : "border-border text-muted-foreground hover:border-foreground/40"
            }`}
          >
            {tmi} %
          </button>
        ))}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
      <dt className="text-white/70">{k}</dt>
      <dd className="font-medium text-right">{v}</dd>
    </div>
  );
}
