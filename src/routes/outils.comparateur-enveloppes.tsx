import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Info,
  Layers,
  PiggyBank,
  ShieldCheck,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { SliderField } from "@/components/SliderField";
import { ResultsActions } from "@/components/ResultsActions";
import type { PdfDoc } from "@/lib/pdf";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { projeterContrat } from "@/lib/simulateur-placements/engine";
import { CONTRATS } from "@/lib/simulateur-placements/contrats";
import {
  ASSURANCE_VIE,
  BORNES,
  IR_PFU,
  PRESETS_TAUX_UC,
  PS_ASSURANCE_VIE,
  PS_HORS_ASSURANCE_VIE,
  RENDEMENTS,
  SCENARIO_PAR_DEFAUT,
  TMI_DISPONIBLES_PCT,
  TMI_PER_PAR_DEFAUT_PCT,
} from "@/lib/simulateur-placements/hypotheses";

export const Route = createFileRoute("/outils/comparateur-enveloppes")({
  head: () => ({
    meta: [
      {
        title:
          "Comparateur d'enveloppes — Assurance vie, PER ou compte-titres ? | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Comparez le capital net d'impôt de l'assurance vie, du PER et du compte-titres selon votre durée, votre TMI et vos versements — frais réels du cabinet inclus, fiscalité 2026 complète.",
      },
      {
        property: "og:title",
        content: "Comparateur d'enveloppes — Assurance vie, PER ou compte-titres ?",
      },
      {
        property: "og:description",
        content:
          "Capital net comparé sur vos propres hypothèses : versements, durée, tranche d'imposition. Frais réels et fiscalité complète, non contractuel.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/comparateur-enveloppes" },
    ],
    links: [
      { rel: "canonical", href: "https://placement-ethique.fr/outils/comparateur-enveloppes" },
    ],
  }),
  component: ComparateurEnveloppesPage,
});

/* ─────────────────────────────── Formatage ─────────────────────────────── */

const eur = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.round(n)) + " €";
const pctFrac = (fraction: number) =>
  `${(fraction * 100).toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} %`;

/* ─────────────────────────────── Hypothèses de frais ─────────────────────────────── */
// Grille du cabinet (page /tarifs, src/lib/simulateur-placements/contrats.ts) : contrat
// Patrimoine Vie Plus (Suravenir) retenu par défaut pour l'AV et le PER — les deux
// partenaires distribués appliquent la même grille pour le PER (entrée 1 %, gestion 1 %).
const FRAIS_AV = CONTRATS.pvp.frais.av ?? {
  entreePct: 1,
  gestionUcPct: 1.08,
  gestionFondsEurosPct: 0.6,
};
const FRAIS_PER = CONTRATS.pvp.frais.per ?? {
  entreePct: 1,
  gestionUcPct: 1.0,
  gestionFondsEurosPct: null,
};

const TMI_OPTIONS = TMI_DISPONIBLES_PCT.map((v) => ({ value: v, label: `${v} %` }));

/* ─────────────────────────────── Comparatif qualitatif ─────────────────────────────── */

type Cle = "av" | "per" | "cto";
type Cellule = { v: string; atout?: boolean; attention?: boolean };
type Ligne = { critere: string } & Record<Cle, Cellule>;

function buildLignes(): Ligne[] {
  return [
    {
      critere: "Avantage fiscal à l'entrée",
      av: { v: "Aucun" },
      per: {
        v: "Oui — versements déduits du revenu imposable, à hauteur de votre TMI",
        atout: true,
      },
      cto: { v: "Aucun" },
    },
    {
      critere: "Fiscalité des gains à la sortie",
      av: {
        v: `Après ${ASSURANCE_VIE.dureeAbattementAnnees} ans : abattement ${ASSURANCE_VIE.abattementAnnuelCelibataire.toLocaleString("fr-FR")} € / ${ASSURANCE_VIE.abattementAnnuelCouple.toLocaleString("fr-FR")} €, puis ${pctFrac(ASSURANCE_VIE.tauxIRReduitApres8Ans)} + PS ${pctFrac(PS_ASSURANCE_VIE)}`,
        atout: true,
      },
      per: {
        v: `Versements déduits réimposés au barème (TMI de sortie), gains à ${pctFrac(IR_PFU)} + PS ${pctFrac(PS_HORS_ASSURANCE_VIE)}`,
        attention: true,
      },
      cto: {
        v: `Prélèvement forfaitaire unique ${pctFrac(IR_PFU + PS_HORS_ASSURANCE_VIE)} sur les gains, au fil de l'eau`,
        attention: true,
      },
    },
    {
      critere: "Disponibilité de l'épargne",
      av: { v: "Totale — rachat possible à tout moment", atout: true },
      per: { v: "Bloquée jusqu'à la retraite*", attention: true },
      cto: { v: "Totale — vente possible à tout moment", atout: true },
    },
    {
      critere: "Transmission au décès",
      av: {
        v: "152 500 € par bénéficiaire hors succession (primes versées avant 70 ans)",
        atout: true,
      },
      per: { v: "Régime assurantiel spécifique, selon l'âge au décès" },
      cto: { v: "Intégré à la succession" },
    },
    {
      critere: "Plafond de versement",
      av: { v: "Aucun", atout: true },
      per: { v: "Aucun (déduction plafonnée à 10 % des revenus professionnels)" },
      cto: { v: "Aucun", atout: true },
    },
    {
      critere: "Univers de fonds ISR accessible",
      av: { v: "UC labellisées obligatoires (loi PACTE) — profondeur variable selon l'assureur" },
      per: {
        v: "Dépend de l'assureur, y compris dans la gestion pilotée par défaut — à vérifier",
        attention: true,
      },
      cto: { v: "Le plus large : tout ETF ou fonds coté, y compris Article 9 SFDR", atout: true },
    },
  ];
}

const OBJECTIFS: { objectif: string; enveloppe: string; pourquoi: string }[] = [
  {
    objectif: "Capitaliser 8 ans et plus, en gardant l'argent disponible",
    enveloppe: "Assurance vie responsable",
    pourquoi:
      "Fiscalité allégée après 8 ans, rachat possible à tout moment, univers ISR le plus étoffé des enveloppes assurantielles.",
  },
  {
    objectif: "Préparer sa retraite avec une TMI de 30 % ou plus",
    enveloppe: "PER investi en supports ISR",
    pourquoi:
      "La déduction immédiate est d'autant plus intéressante que votre tranche d'imposition actuelle est élevée.",
  },
  {
    objectif: "Piloter soi-même une allocation ISR mondiale précise (ETF, Article 9, green bonds)",
    enveloppe: "Compte-titres",
    pourquoi:
      "Aucune restriction d'univers ni de plafond de versement — la fiscalité au fil de l'eau est le prix de cette liberté.",
  },
  {
    objectif: "Protéger sa famille en cas de décès",
    enveloppe: "Assurance vie et/ou PER assurantiel",
    pourquoi:
      "Abattement de 152 500 € par bénéficiaire hors succession sur les deux enveloppes, sous conditions d'âge.",
  },
  {
    objectif: "Démarrer une première épargne responsable, montant modeste",
    enveloppe: "Assurance vie responsable",
    pourquoi:
      "Pas de plafond, pas de blocage, versements libres : l'enveloppe la plus simple pour commencer.",
  },
];

/* ────────────────────────────────── Page ────────────────────────────────── */

function ComparateurEnveloppesPage() {
  const [versementInitial, setVersementInitial] = useState(SCENARIO_PAR_DEFAUT.versementInitial);
  const [versementMensuel, setVersementMensuel] = useState(SCENARIO_PAR_DEFAUT.versementPeriodique);
  const [dureeAnnees, setDureeAnnees] = useState(SCENARIO_PAR_DEFAUT.dureeAnnees);
  const [taux, setTaux] = useState(RENDEMENTS.uc.defautPct);
  const [tmi, setTmi] = useState(TMI_PER_PAR_DEFAUT_PCT);
  const [estCouple, setEstCouple] = useState(false);

  const {
    resAv,
    resPer,
    gainCto,
    impotCto,
    psCto,
    capitalBrutCto,
    capitalNetCto,
    versementsCumules,
  } = useMemo(() => {
    const base = {
      versementInitial,
      versementPeriodique: versementMensuel,
      frequenceVersement: "mensuelle" as const,
      indexationAnnuellePct: 0,
      dureeAnnees,
      repartitionUcPct: 100,
      tauxUcPct: taux,
      tauxFondsEurosPct: RENDEMENTS.fondsEuros.defautPct,
    };

    const resAv = projeterContrat({
      ...base,
      enveloppe: "av",
      frais: {
        entreePct: FRAIS_AV.entreePct,
        gestionUcPct: FRAIS_AV.gestionUcPct,
        gestionFondsEurosPct: FRAIS_AV.gestionFondsEurosPct ?? 0,
      },
      fiscalite: { estCouple },
    });

    const resPer = projeterContrat({
      ...base,
      enveloppe: "per",
      frais: {
        entreePct: FRAIS_PER.entreePct,
        gestionUcPct: FRAIS_PER.gestionUcPct,
        gestionFondsEurosPct: FRAIS_PER.gestionFondsEurosPct ?? 0,
      },
      fiscalite: { tmiEntreePct: tmi, tmiSortiePct: tmi },
    });

    // Le compte-titres n'est pas (encore) une enveloppe native du moteur
    // partagé (Enveloppe = "libre" | "av" | "per") : on projette sa
    // croissance brute via l'enveloppe « libre » — sans frais d'entrée ni
    // de gestion annuelle modélisés (seuls des frais de courtage
    // ponctuels s'appliquent en réalité) — puis on applique manuellement
    // le prélèvement forfaitaire unique sur la plus-value totale au terme,
    // comme si elle était réalisée en une fois (simplification documentée
    // dans l'outil : en réalité, dividendes et arbitrages sont imposés au
    // fil de l'eau).
    const resLibre = projeterContrat({
      ...base,
      enveloppe: "libre",
      frais: { entreePct: 0, gestionUcPct: 0, gestionFondsEurosPct: 0 },
    });
    const gainCto = Math.max(0, resLibre.capitalBrutTerme - resLibre.versementsBrutsCumules);
    const impotCto = gainCto * IR_PFU;
    const psCto = gainCto * PS_HORS_ASSURANCE_VIE;
    const capitalNetCto = resLibre.capitalBrutTerme - impotCto - psCto;

    return {
      resAv,
      resPer,
      gainCto,
      impotCto,
      psCto,
      capitalBrutCto: resLibre.capitalBrutTerme,
      capitalNetCto,
      versementsCumules: resLibre.versementsBrutsCumules,
    };
  }, [versementInitial, versementMensuel, dureeAnnees, taux, tmi, estCouple]);

  const resultats: { cle: Cle; label: string; icon: LucideIcon; capitalNet: number }[] = [
    { cle: "av", label: "Assurance vie", icon: ShieldCheck, capitalNet: resAv.capitalNet },
    { cle: "per", label: "PER", icon: PiggyBank, capitalNet: resPer.capitalNet },
    { cle: "cto", label: "Compte-titres", icon: Layers, capitalNet: capitalNetCto },
  ];
  const meilleur = resultats.reduce((a, b) => (b.capitalNet > a.capitalNet ? b : a));
  const maxCapital = Math.max(...resultats.map((r) => r.capitalNet), 1);

  const buildDoc = (): PdfDoc => ({
    title: "Comparatif d'enveloppes fiscales",
    subtitle: `${eur(versementInitial)} initial + ${eur(versementMensuel)}/mois sur ${dureeAnnees} ans`,
    source: "outil-comparateur-enveloppes",
    sections: [
      {
        heading: `Piste la plus avantageuse : ${meilleur.label}`,
        rows: resultats.map((r) => ({ label: r.label, value: `${eur(r.capitalNet)} net estimé` })),
      },
      {
        heading: "Détail",
        rows: [
          { label: "Total versé", value: eur(versementsCumules) },
          { label: "Impôts + PS estimés — AV", value: eur(resAv.fiscal?.totalImpots ?? 0) },
          { label: "Impôts + PS estimés — PER", value: eur(resPer.fiscal?.totalImpots ?? 0) },
          { label: "Impôts + PS estimés — CTO", value: eur(impotCto + psCto) },
          ...(resPer.fiscal && resPer.fiscal.economieImpotEntree > 0
            ? [
                {
                  label: "+ Économie d'impôt PER à l'entrée (non capitalisée)",
                  value: eur(resPer.fiscal.economieImpotEntree),
                },
              ]
            : []),
        ],
      },
    ],
    disclaimer: `Hypothèse illustrative et non contractuelle : ${taux.toString().replace(".", ",")} %/an, TMI ${tmi} %. Les performances passées ne préjugent pas des performances futures et un placement en unités de compte comporte un risque de perte en capital. Ce classement compare le capital net à la sortie uniquement — hors économie d'impôt à l'entrée du PER, indiquée séparément.`,
  });

  const alertesUniques = useMemo(() => {
    const vues = new Set<string>();
    const toutes = [...resAv.alertes, ...resPer.alertes];
    return toutes.filter((a) => {
      if (vues.has(a.code)) return false;
      vues.add(a.code);
      return true;
    });
  }, [resAv, resPer]);

  const avantHuitAns = dureeAnnees < ASSURANCE_VIE.dureeAbattementAnnees;
  const LIGNES = buildLignes();

  const inputs = (
    <div className="space-y-6">
      <SliderField
        label="Versement initial"
        value={versementInitial}
        onChange={setVersementInitial}
        min={0}
        max={50000}
        step={500}
        hardMax={BORNES.capitalInitialMax}
        unit="€"
      />
      <SliderField
        label="Versement mensuel"
        value={versementMensuel}
        onChange={setVersementMensuel}
        min={0}
        max={1000}
        step={25}
        hardMax={BORNES.versementMax}
        unit="€"
      />
      <SliderField
        label="Durée du placement"
        value={dureeAnnees}
        onChange={setDureeAnnees}
        min={BORNES.dureeMinAnnees}
        max={40}
        step={1}
        hardMax={BORNES.dureeMaxAnnees}
        unit="ans"
        hint={
          avantHuitAns
            ? `Avant ${ASSURANCE_VIE.dureeAbattementAnnees} ans, l'assurance vie n'a pas encore accès à son abattement fiscal : sur cet horizon, l'écart avec les autres enveloppes se resserre.`
            : undefined
        }
      />
      <div>
        <SliderField
          label="Rendement annuel des supports"
          value={taux}
          onChange={setTaux}
          min={0}
          max={10}
          step={0.5}
          hardMax={BORNES.tauxAnnuelMaxPct}
          unit="%"
        />
        <p className="text-xs text-muted-foreground mt-2 mb-2">
          Même rendement brut appliqué aux trois enveloppes — mêmes hypothèses que le{" "}
          <Link
            to="/outils/simulateur"
            className="underline underline-offset-2 hover:text-foreground"
          >
            simulateur d'épargne
          </Link>{" "}
          :
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESETS_TAUX_UC.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setTaux(p.tauxPct)}
              className="rounded-lg border border-border bg-card px-2.5 py-2 text-left text-xs font-medium leading-snug text-muted-foreground transition-colors hover:border-foreground/40"
              style={
                taux === p.tauxPct
                  ? { borderColor: "var(--grenat)", background: "var(--accent)" }
                  : undefined
              }
            >
              {p.libelle}
              <span className="block text-foreground mt-0.5">{p.tauxPct} %</span>
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          Rendement non garanti, y compris sur les unités de compte : risque de perte en capital.
          Les performances passées ne préjugent pas des performances futures.
        </p>
      </div>
      <div>
        <p className="eyebrow mb-3">Tranche marginale d'imposition (TMI)</p>
        <div className="grid grid-cols-5 gap-2">
          {TMI_OPTIONS.map((b) => (
            <button
              key={b.value}
              type="button"
              onClick={() => setTmi(b.value)}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:border-foreground/40"
              style={
                tmi === b.value
                  ? { borderColor: "var(--grenat)", background: "var(--accent)" }
                  : undefined
              }
            >
              {b.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          Utilisée pour l'économie d'impôt à l'entrée et la fiscalité de sortie du PER — hypothèse
          simplificatrice : TMI de sortie supposée identique à votre TMI actuelle.
        </p>
      </div>
      <div>
        <p className="eyebrow mb-3">Situation déclarative (assurance vie)</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setEstCouple(false)}
            className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
            style={
              !estCouple ? { borderColor: "var(--grenat)", background: "var(--accent)" } : undefined
            }
          >
            Seul(e)
          </button>
          <button
            type="button"
            onClick={() => setEstCouple(true)}
            className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
            style={
              estCouple ? { borderColor: "var(--grenat)", background: "var(--accent)" } : undefined
            }
          >
            En couple (déclaration commune)
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          Double l'abattement annuel après {ASSURANCE_VIE.dureeAbattementAnnees} ans (
          {ASSURANCE_VIE.abattementAnnuelCelibataire.toLocaleString("fr-FR")} € →{" "}
          {ASSURANCE_VIE.abattementAnnuelCouple.toLocaleString("fr-FR")} €).
        </p>
      </div>
    </div>
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Comparateur"
        title={
          <>
            Assurance vie, PER ou compte-titres :{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              quelle enveloppe pour votre épargne responsable
            </span>{" "}
            ?
          </>
        }
        lead="Même rendement brut, même durée, mêmes versements — seule l'enveloppe change. Comparez le capital net d'impôt des trois enveloppes financières les plus courantes, frais réels du cabinet inclus. Toutes les hypothèses sont librement modifiables."
      />

      <section className="section">
        <div className="container-prose max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">{inputs}</div>

            <div className="md:col-span-5">
              <div className="sticky top-24 space-y-5">
                <div
                  className="rounded-2xl p-7 text-primary-foreground relative overflow-hidden"
                  style={{ background: "var(--gradient-encre)" }}
                >
                  <div
                    className="absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-25 blur-3xl"
                    style={{ background: "var(--gradient-grenat)" }}
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="eyebrow" style={{ color: "var(--grenat-clair)" }}>
                      Piste la plus avantageuse selon ces hypothèses
                    </p>
                    <div className="flex items-center gap-2.5 mt-2">
                      <meilleur.icon
                        size={22}
                        style={{ color: "var(--grenat-clair)" }}
                        aria-hidden
                      />
                      <p className="font-display text-2xl" style={{ color: "var(--grenat-clair)" }}>
                        {meilleur.label}
                      </p>
                    </div>
                    <p className="font-display text-4xl mt-1 text-white">
                      {eur(meilleur.capitalNet)}
                    </p>
                    <p className="text-xs text-white/60 mt-1">capital net estimé au terme</p>

                    <div className="mt-5 space-y-3">
                      {resultats.map((r) => (
                        <div key={r.cle}>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="inline-flex items-center gap-1.5 text-white/80">
                              <r.icon size={13} aria-hidden /> {r.label}
                            </span>
                            <span className="font-medium text-white">{eur(r.capitalNet)}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${Math.max(2, (r.capitalNet / maxCapital) * 100)}%`,
                                background:
                                  r.cle === meilleur.cle
                                    ? "var(--grenat-clair)"
                                    : "color-mix(in oklch, white 55%, transparent)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <dl className="mt-5 space-y-2 text-sm border-t border-white/10 pt-4">
                      <Row k="Total versé" v={eur(versementsCumules)} />
                      <Row k="Impôts + PS estimés — AV" v={eur(resAv.fiscal?.totalImpots ?? 0)} />
                      <Row k="Impôts + PS estimés — PER" v={eur(resPer.fiscal?.totalImpots ?? 0)} />
                      <Row k="Impôts + PS estimés — CTO" v={eur(impotCto + psCto)} />
                      {resPer.fiscal && resPer.fiscal.economieImpotEntree > 0 && (
                        <Row
                          k="+ Économie d'impôt PER à l'entrée (non capitalisée)"
                          v={eur(resPer.fiscal.economieImpotEntree)}
                        />
                      )}
                    </dl>
                    <p className="mt-4 text-xs text-white/60 leading-relaxed">
                      Hypothèse illustrative et non contractuelle :{" "}
                      {taux.toString().replace(".", ",")} %/an, TMI {tmi} %. Les performances
                      passées ne préjugent pas des performances futures et un placement en unités de
                      compte comporte un risque de perte en capital. Ce classement compare le
                      capital net à la sortie uniquement — hors économie d'impôt à l'entrée du PER,
                      indiquée séparément ci-dessus.
                    </p>
                    <div className="mt-6">
                      <Link to="/contact" className="btn-grenat">
                        Réserver un échange sur mes enveloppes <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                <ResultsActions source="outil-comparateur-enveloppes" buildDoc={buildDoc} />

                {alertesUniques.length > 0 && (
                  <div className="card-paper">
                    <p className="eyebrow">Points de vigilance</p>
                    <ul className="mt-3 space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                      {alertesUniques.map((a) => (
                        <li key={a.code} className="flex gap-2">
                          <TriangleAlert
                            size={13}
                            className="mt-0.5 shrink-0 opacity-60"
                            aria-hidden
                          />
                          <span>{a.message}</span>
                        </li>
                      ))}
                      <li className="flex gap-2">
                        <Info size={13} className="mt-0.5 shrink-0 opacity-60" aria-hidden />
                        <span>
                          Compte-titres : frais de courtage ponctuels non modélisés (pas de gestion
                          annuelle) ; imposition calculée comme si la totalité de la plus-value (
                          {eur(gainCto)} sur un capital brut de {eur(capitalBrutCto)}) était
                          réalisée en une fois au terme, au taux en vigueur ({pctFrac(IR_PFU)} + PS{" "}
                          {pctFrac(PS_HORS_ASSURANCE_VIE)}). En réalité, dividendes et arbitrages
                          sont imposés au fil de l'eau, année après année.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="mt-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Frais retenus par défaut : grille du cabinet (
            <Link to="/tarifs" className="text-foreground underline underline-offset-4">
              publiée en clair sur /tarifs
            </Link>
            ) — entrée {FRAIS_AV.entreePct} %, gestion annuelle {FRAIS_AV.gestionUcPct} % (assurance
            vie Patrimoine Vie Plus, Suravenir) et {FRAIS_PER.gestionUcPct} % (PER). Pour une
            projection détaillée année par année d'une seule enveloppe, frais et fiscalité inclus,
            utilisez{" "}
            <Link to="/outils/simulateur" className="text-foreground underline underline-offset-4">
              le simulateur d'épargne responsable
            </Link>{" "}
            ou{" "}
            <Link to="/outils/per-isr" className="text-foreground underline underline-offset-4">
              le simulateur PER ISR
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Comparatif qualitatif */}
      <section className="section border-t border-border/40">
        <div className="container-prose">
          <p className="eyebrow">Au-delà des chiffres</p>
          <h2 className="display-2 mt-4 max-w-3xl">Le comparatif complet, critère par critère</h2>
          <p className="lead mt-5 max-w-2xl">
            La fiscalité n'est qu'un des critères de choix. Disponibilité, transmission et
            profondeur de l'offre ISR comptent tout autant selon votre situation.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3.5 text-left font-semibold text-foreground">Critère</th>
                  <th className="p-3.5 text-left font-semibold text-foreground">Assurance vie</th>
                  <th className="p-3.5 text-left font-semibold text-foreground">PER</th>
                  <th className="p-3.5 text-left font-semibold text-foreground">Compte-titres</th>
                </tr>
              </thead>
              <tbody>
                {LIGNES.map((l) => (
                  <tr key={l.critere} className="border-t border-border align-top">
                    <td className="p-3.5 font-medium text-foreground">{l.critere}</td>
                    <CelluleTd c={l.av} />
                    <CelluleTd c={l.per} />
                    <CelluleTd c={l.cto} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            * Cas de déblocage anticipé du PER prévus par la loi : achat de la résidence principale
            (hors droits issus de versements obligatoires) et accidents de la vie (invalidité, décès
            du conjoint, surendettement, expiration des droits au chômage, liquidation judiciaire).
            IR = impôt sur le revenu, PS = prélèvements sociaux, TMI = tranche marginale
            d'imposition.
          </p>
        </div>
      </section>

      {/* Quelle enveloppe pour quel objectif */}
      <section className="section border-t border-border/40">
        <div className="container-prose">
          <p className="eyebrow">La séquence de décision</p>
          <h2 className="display-2 mt-4 max-w-3xl">Quelle enveloppe selon votre objectif ?</h2>
          <p className="lead mt-5 max-w-2xl">
            Rappel du principe : l'enveloppe ne rend rien « responsable » en soi — c'est ce que vous
            y logez qui compte. Elle décide en revanche de ce qu'il vous en restera, et de ce que
            vous pourrez y loger.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3.5 text-left font-semibold text-foreground">Votre objectif</th>
                  <th className="p-3.5 text-left font-semibold text-foreground">
                    Enveloppe prioritaire
                  </th>
                  <th className="p-3.5 text-left font-semibold text-foreground">Pourquoi</th>
                </tr>
              </thead>
              <tbody>
                {OBJECTIFS.map((o) => (
                  <tr key={o.objectif} className="border-t border-border align-top">
                    <td className="p-3.5 font-medium text-foreground">{o.objectif}</td>
                    <td className="p-3.5 text-muted-foreground">{o.enveloppe}</td>
                    <td className="p-3.5 text-muted-foreground">{o.pourquoi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Retrouvez le détail de chaque enveloppe — fonctionnement, fiscalité complète et offre
            ISR — sur la page{" "}
            <Link to="/enveloppes" className="text-foreground underline underline-offset-4">
              Enveloppes fiscales
            </Link>
            . Pour ce que vous pouvez concrètement loger dedans, direction{" "}
            <Link to="/placements" className="text-foreground underline underline-offset-4">
              nos placements responsables
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-border/40">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="display-2 mt-4">Avant d'utiliser ce comparateur</h2>
          <Accordion type="single" collapsible className="mt-8">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-left font-display text-lg">
                Cet outil peut-il remplacer un échange avec un conseiller ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Non. Il calcule des pistes à partir des hypothèses que vous choisissez librement —
                ce n'est ni un engagement ni une recommandation personnalisée, qui suppose de
                connaître l'ensemble de votre situation (autres revenus, régime matrimonial,
                objectifs de transmission, contrats déjà détenus). Un échange avec un conseiller
                permet de confronter ces pistes à vos chiffres réels.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-left font-display text-lg">
                Pourquoi le compte-titres n'a-t-il pas toujours le capital net le plus élevé ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Le compte-titres ne supporte ni frais d'entrée ni gestion annuelle dans ce
                comparateur — son capital brut est donc souvent le plus élevé au terme. Mais sa
                fiscalité s'applique sur la totalité des gains, chaque année, sans abattement :
                au-delà de {ASSURANCE_VIE.dureeAbattementAnnees} ans, l'avantage fiscal de
                l'assurance vie (voire du PER, selon votre TMI) compense fréquemment l'écart de
                frais. Plus la durée est courte, plus le compte-titres regagne l'avantage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-left font-display text-lg">
                Et le PEA, la SCPI ou l'épargne salariale ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ce comparateur modélise les trois enveloppes financières les plus universelles. Le
                PEA a une fiscalité de sortie proche de celle du compte-titres après 5 ans, mais un
                univers restreint aux actions européennes ; la SCPI répond à une logique de
                rendement locatif et de liquidité totalement différente, non modélisable dans ce
                même moteur de calcul. Retrouvez le comparatif qualitatif complet, incluant ces
                enveloppes, sur{" "}
                <Link
                  to="/enveloppes"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  la page Enveloppes fiscales
                </Link>
                , et les solutions concrètes sur{" "}
                <Link
                  to="/placements"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  Placements responsables
                </Link>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger className="text-left font-display text-lg">
                Je ne connais pas ma tranche marginale d'imposition (TMI), que faire ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Choisissez la tranche la plus proche de votre situation : elle sert uniquement à
                estimer l'économie d'impôt et la fiscalité de sortie du PER. Vous la retrouvez sur
                votre avis d'imposition, à la ligne « Taux marginal d'imposition ». À défaut, ce
                comparateur retient {TMI_PER_PAR_DEFAUT_PCT} % par défaut.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <CTA
        eyebrow="Passer du calcul à la décision"
        title="Vos enveloppes actuelles sont-elles les bonnes ?"
        text="Ces pistes reposent sur des hypothèses génériques que vous avez choisies. Un échange de 30 minutes, offert et sans engagement, permet de les confronter à vos contrats existants, votre fiscalité réelle et vos objectifs de transmission."
      />
    </SiteLayout>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2 text-xs">
      <dt className="text-white/70">{k}</dt>
      <dd className="font-medium text-right text-white">{v}</dd>
    </div>
  );
}

function CelluleTd({ c }: { c: Cellule }) {
  return (
    <td className="p-3.5 align-top text-muted-foreground">
      <div className="flex items-start gap-1.5">
        {c.atout && (
          <Check
            size={14}
            className="mt-0.5 shrink-0"
            style={{ color: "var(--grenat)" }}
            aria-hidden
          />
        )}
        {c.attention && (
          <TriangleAlert size={13} className="mt-0.5 shrink-0 opacity-60" aria-hidden />
        )}
        <span className="leading-snug">{c.v}</span>
      </div>
    </td>
  );
}
