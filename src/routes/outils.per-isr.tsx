import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { LeadGate, hasPassedGate } from "@/components/LeadGate";
import { ResultsActions } from "@/components/ResultsActions";
import { SliderField } from "@/components/SliderField";
import type { PdfDoc } from "@/lib/pdf";
import { calculerFiscaliteSortie } from "@/lib/simulateur-placements/fiscalite";
import {
  IR_PFU,
  PS_HORS_ASSURANCE_VIE,
  PRESETS_TAUX_UC,
  TMI_DISPONIBLES_PCT,
  TMI_PER_PAR_DEFAUT_PCT,
} from "@/lib/simulateur-placements/hypotheses";

export const Route = createFileRoute("/outils/per-isr")({
  head: () => ({
    meta: [
      { title: "Simulateur PER ISR — économie d'impôt et capital retraite | Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Calculez l'économie d'impôt, l'effort d'épargne réel et le capital projeté d'un PER investi en supports ISR vérifiés. Transmission, résidence principale : les leviers au-delà de l'impôt.",
      },
      { property: "og:title", content: "Simulateur PER ISR — économie d'impôt et capital retraite" },
      {
        property: "og:description",
        content:
          "Économie d'impôt immédiate, capital projeté et transmission : les leviers du PER investi en supports ISR vérifiés.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/per-isr" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils/per-isr" }],
  }),
  component: PerIsrPage,
});

const eur = (n: number) => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) + " €";
const pct = (fraction: number) => `${(fraction * 100).toFixed(1).replace(".", ",")} %`;

const TMI_BRACKETS = TMI_DISPONIBLES_PCT.map((v) => ({ value: v, label: `${v} %` }));

function PerIsrPage() {
  const [yearly, setYearly] = useState(4000);
  const [years, setYears] = useState(20);
  const [tmi, setTmi] = useState(TMI_PER_PAR_DEFAUT_PCT);
  const [rate, setRate] = useState(5.5);
  const [submitted, setSubmitted] = useState(false);
  const [emailRequested, setEmailRequested] = useState(false);

  const result = useMemo(() => {
    const taxSavingsYearly = yearly * (tmi / 100);
    const totalTaxSavings = taxSavingsYearly * years;
    const realEffortYearly = yearly - taxSavingsYearly;
    const r = rate / 100;
    // Capitalisation annuelle simplifiée — hors frais d'entrée/gestion,
    // hypothèse illustrative (le moteur complet vit dans /outils/simulateur).
    let capital = 0;
    for (let i = 0; i < years; i++) capital = capital * (1 + r) + yearly;
    const invested = yearly * years;
    // Fiscalité de sortie : réutilise le moteur commun du réseau
    // (src/lib/simulateur-placements/fiscalite.ts), à TMI de sortie
    // supposée identique à la TMI actuelle — hypothèse prudente et
    // explicitement affichée comme telle.
    const sortie = calculerFiscaliteSortie(
      { capitalBrut: capital, primesVersees: invested, interetsFondsEurosCredites: 0, dureeDetentionAnnees: years },
      { enveloppe: "per", tmiEntreePct: tmi, tmiSortiePct: tmi },
    );
    return { taxSavingsYearly, totalTaxSavings, realEffortYearly, capital, invested, sortie };
  }, [yearly, years, tmi, rate]);

  const costPerThousand = Math.round(1000 * (1 - tmi / 100));

  const handleCalculate = () => {
    if (hasPassedGate()) {
      setSubmitted(true);
    } else {
      setEmailRequested(true);
    }
  };

  const buildDoc = (): PdfDoc => ({
    title: "Simulation PER ISR",
    subtitle: `Versement annuel ${eur(yearly)} · ${years} ans · TMI ${tmi} % · rendement ${rate} %/an`,
    source: "simulateur-per-isr",
    sections: [
      {
        heading: "Économie d'impôt & effort d'épargne",
        rows: [
          { label: "Économie d'impôt annuelle", value: eur(Math.round(result.taxSavingsYearly)) },
          { label: "Économie d'impôt cumulée", value: eur(Math.round(result.totalTaxSavings)) },
          { label: "Effort d'épargne réel (annuel)", value: eur(Math.round(result.realEffortYearly)) },
          { label: "Coût réel de 1 000 € versés", value: eur(costPerThousand) },
        ],
        note: `L'économie suppose une TMI constante et un versement restant dans votre tranche. À la sortie en capital, la part correspondant aux versements déduits est réimposée au barème (TMI de sortie), et les gains au prélèvement forfaitaire unique (${pct(IR_PFU)} + prélèvements sociaux ${pct(PS_HORS_ASSURANCE_VIE)}) : le PER est un différé d'impôt, avantageux si votre TMI à la retraite est plus faible.`,
      },
      {
        heading: "Capital retraite estimé",
        rows: [
          { label: "Capital investi", value: eur(result.invested) },
          { label: "Capital brut projeté", value: eur(Math.round(result.capital)) },
          { label: "Capital net estimé après fiscalité de sortie", value: eur(Math.round(result.sortie.capitalNet)) },
          { label: "Impôt total estimé à la sortie", value: eur(Math.round(result.sortie.totalImpots)) },
        ],
        note: "Capital net calculé à hypothèse de TMI de sortie identique à la TMI actuelle — une hypothèse prudente : si votre TMI baisse à la retraite, l'avantage réel est supérieur.",
      },
      {
        heading: "Bénéfices au-delà de l'impôt",
        rows: [
          {
            label: "Transmission (PER assurantiel)",
            value: "Abattement de 152 500 € par bénéficiaire hors succession, en cas de décès avant 70 ans (art. 990 I du Code général des impôts)",
          },
          { label: "Sortie en rente / capital", value: "Au choix, à l'âge légal de départ à la retraite" },
          { label: "Cas de déblocage anticipé", value: "Achat de la résidence principale + accidents de la vie" },
          { label: "Indépendants", value: "Épargne en principe insaisissable pendant la phase d'épargne" },
        ],
        note: "Le PER reste utile même hors TMI élevée dès lors que la protection familiale et la transmission entrent dans vos objectifs.",
      },
    ],
    disclaimer:
      "Simulation pédagogique à hypothèses illustratives, non contractuelle. Rendement non garanti : risque de perte en capital sur les supports en unités de compte. Les performances passées ne préjugent pas des performances futures. La fiscalité réelle à la sortie dépend de votre tranche marginale d'imposition au moment du dénouement. Ces résultats sont des pistes de calcul, pas une recommandation personnalisée : validez avec un conseiller avant tout versement.",
  });

  const inputs = (
    <div className="space-y-6">
      <div>
        <SliderField
          label="Versement volontaire annuel"
          value={yearly}
          onChange={setYearly}
          min={0}
          max={37680}
          step={100}
          unit="€"
          hint="Plafond indicatif pour un salarié en 2026 : 10 % des revenus professionnels nets de 2025, dans la limite de 37 680 €, avec un plancher de 4 710 € si celui-ci vous est plus favorable — majorable des plafonds non utilisés des années précédentes."
        />
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
          Source :{" "}
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F14709?lang=fr"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            service-public.fr
          </a>{" "}
          — retrouvez votre plafond exact sur votre avis d'imposition, ligne « plafond épargne retraite ».
        </p>
      </div>

      <SliderField label="Durée de versement" value={years} onChange={setYears} min={1} max={40} step={1} unit="ans" />

      <div>
        <SliderField
          label="Rendement annuel moyen visé"
          value={rate}
          onChange={setRate}
          min={0}
          max={12}
          step={0.5}
          unit="%"
        />
        <p className="text-xs text-muted-foreground mt-2 mb-2">
          Profils indicatifs, mêmes hypothèses que notre{" "}
          <Link to="/outils/simulateur" className="underline underline-offset-2 hover:text-foreground">
            simulateur d'épargne
          </Link>{" "}
          :
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESETS_TAUX_UC.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setRate(p.tauxPct)}
              className="rounded-lg border border-border bg-card px-2.5 py-2 text-left text-xs font-medium leading-snug text-muted-foreground transition-colors hover:border-foreground/40"
              style={rate === p.tauxPct ? { borderColor: "var(--grenat)", background: "var(--accent)" } : undefined}
            >
              {p.libelle}
              <span className="block text-foreground mt-0.5">{p.tauxPct} %</span>
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          Rendement non garanti, y compris sur les supports en unités de compte : risque de perte en capital. Les
          performances passées ne préjugent pas des performances futures. Hypothèses illustratives, librement
          modifiables.
        </p>
      </div>

      <div>
        <p className="eyebrow mb-3">Tranche marginale d'imposition (TMI)</p>
        <div className="grid grid-cols-5 gap-2">
          {TMI_BRACKETS.map((b) => (
            <button
              key={b.value}
              type="button"
              onClick={() => setTmi(b.value)}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:border-foreground/40"
              style={tmi === b.value ? { borderColor: "var(--grenat)", background: "var(--accent)" } : undefined}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Retraite & fiscalité"
        title={
          <>
            PER ISR —{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              économie d'impôt et capital
            </span>
          </>
        }
        lead="Chaque versement volontaire sur un PER réduit votre impôt dès cette année. Simulez l'économie exacte selon votre tranche d'imposition, le capital projeté en supports ISR vérifiés, et les leviers de transmission qui comptent autant que la fiscalité."
      />

      <section className="section">
        <div className={submitted ? "container-prose max-w-5xl" : "container-prose max-w-3xl"}>
          {!submitted && !emailRequested && (
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Le PER n'est pas qu'un outil fiscal : c'est aussi un choix d'allocation sur 15, 20 ou 30 ans. Ce
                simulateur calcule l'économie d'impôt et le capital projeté — pour vérifier ce que garantissent
                réellement les supports ISR d'un contrat, direction notre{" "}
                <Link to="/outils/decodeur-label" className="underline underline-offset-2 hover:text-foreground">
                  décodeur de labels
                </Link>
                .
              </p>

              {inputs}

              {tmi < 30 && (
                <div
                  className="rounded-xl border p-5"
                  style={{ borderColor: "var(--grenat)", background: "color-mix(in oklch, var(--grenat) 4%, var(--card))" }}
                >
                  <p className="font-display text-lg text-foreground">Et si l'impôt n'était pas votre seul objectif ?</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    À TMI {tmi} %, l'économie fiscale est limitée. Le PER reste toutefois un outil de capitalisation
                    et de protection familiale : sur un PER assurantiel, en cas de décès avant 70 ans, les capitaux
                    transmis aux bénéficiaires bénéficient, comme en assurance vie, d'un{" "}
                    <a
                      href="https://www.impots.gouv.fr/international-particulier/questions/je-suis-beneficiaire-dune-assurance-vie-comment-sont-imposees"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2"
                    >
                      abattement de 152 500 € par bénéficiaire hors succession
                    </a>{" "}
                    (art. 990 I du Code général des impôts). C'est souvent un complément judicieux pour les jeunes
                    parents ou les indépendants en recherche de protection.
                  </p>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                <button type="button" onClick={handleCalculate} className="btn-primary">
                  Calculer mon économie d'impôt
                </button>
              </div>
            </div>
          )}

          {emailRequested && !submitted && (
            <LeadGate
              source="Simulateur PER ISR"
              payload={{
                "Versement annuel": `${yearly} €`,
                "Durée": `${years} ans`,
                "Rendement annuel moyen": `${rate} %`,
                "TMI": `${tmi} %`,
                "Économie d'impôt annuelle": `${Math.round(result.taxSavingsYearly)} €`,
                "Économie d'impôt cumulée": `${Math.round(result.totalTaxSavings)} €`,
                "Effort d'épargne réel annuel": `${Math.round(result.realEffortYearly)} €`,
                "Capital brut projeté": `${Math.round(result.capital)} €`,
                "Capital net estimé après fiscalité": `${Math.round(result.sortie.capitalNet)} €`,
              }}
              onSuccess={() => {
                setEmailRequested(false);
                setSubmitted(true);
              }}
            />
          )}

          {submitted && (
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-6">
                {inputs}

                <div
                  className="rounded-xl border p-5"
                  style={{ borderColor: "var(--grenat)", background: "color-mix(in oklch, var(--grenat) 4%, var(--card))" }}
                >
                  <p className="font-display text-lg text-foreground">Au-delà de l'impôt</p>
                  <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                    <li>
                      <strong className="text-foreground">Transmission hors succession :</strong> sur un PER
                      assurantiel, en cas de décès avant 70 ans, les capitaux transmis bénéficient d'un{" "}
                      <a
                        href="https://www.impots.gouv.fr/international-particulier/questions/je-suis-beneficiaire-dune-assurance-vie-comment-sont-imposees"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2"
                      >
                        abattement de 152 500 € par bénéficiaire
                      </a>
                      , hors succession (art. 990 I du CGI).
                    </li>
                    <li>
                      <strong className="text-foreground">Résidence principale :</strong> les versements volontaires
                      peuvent être débloqués avant la retraite pour l'achat de votre résidence principale.
                    </li>
                    <li>
                      <strong className="text-foreground">Indépendants :</strong> l'épargne logée dans un PER est,
                      en principe, insaisissable pendant la phase d'épargne — une protection utile pour les
                      entrepreneurs.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="md:sticky md:top-24 space-y-5">
                  <div className="rounded-2xl p-7 text-primary-foreground" style={{ background: "var(--gradient-encre)" }}>
                    <p className="eyebrow" style={{ color: "var(--grenat-clair)" }}>
                      Effort d'épargne réel
                    </p>
                    <p className="font-display text-4xl mt-2" style={{ color: "var(--grenat-clair)" }}>
                      {eur(Math.round(result.realEffortYearly))} <span className="text-lg text-white/70">/ an</span>
                    </p>
                    {tmi > 0 ? (
                      <p className="text-sm text-white/80 mt-2 leading-relaxed">
                        Grâce à la déduction, 1 000 € versés ne vous coûtent que{" "}
                        <strong className="text-white">{eur(costPerThousand)}</strong>.
                      </p>
                    ) : (
                      <p className="text-sm text-white/80 mt-2 leading-relaxed">
                        À TMI 0 %, la déduction ne joue pas : l'intérêt du PER se situe dans la capitalisation et la
                        protection familiale.
                      </p>
                    )}
                    <dl className="mt-5 space-y-2 text-sm">
                      <Row k="Économie d'impôt annuelle" v={eur(Math.round(result.taxSavingsYearly))} />
                      <Row k="Économie d'impôt cumulée" v={eur(Math.round(result.totalTaxSavings))} />
                    </dl>
                    <p className="text-xs text-white/60 mt-3 leading-relaxed">
                      L'économie suppose une TMI constante et un versement restant dans votre tranche. À la sortie
                      en capital, les versements déduits sont réimposés au barème (TMI de sortie) : le PER est un
                      différé d'impôt, avantageux si votre TMI à la retraite est plus faible.
                    </p>
                    <dl className="mt-4 space-y-2 text-sm">
                      <Row k="Capital investi" v={eur(result.invested)} />
                      <Row k="Capital brut projeté" v={eur(Math.round(result.capital))} />
                      <Row k="Capital net après fiscalité de sortie" v={eur(Math.round(result.sortie.capitalNet))} />
                    </dl>
                    <p className="text-xs text-white/60 mt-3 leading-relaxed">
                      Capital net calculé à TMI de sortie supposée identique à votre TMI actuelle ({tmi} %) — une
                      hypothèse prudente. Rendement non garanti : risque de perte en capital sur les unités de
                      compte. Les performances passées ne préjugent pas des performances futures.
                    </p>
                    <div className="mt-7">
                      <Link to="/contact" className="btn-grenat">
                        Réserver un échange sur mon PER
                      </Link>
                    </div>
                  </div>
                  <ResultsActions source="simulateur-per-isr" buildDoc={buildDoc} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA
        eyebrow="Combiner"
        title="PER + assurance vie responsable"
        text="Pour beaucoup de profils, le PER finance la phase active de l'épargne pendant que l'assurance vie responsable garde de la liquidité pour les projets intermédiaires. Réservons un échange pour voir dans quelles proportions structurer les deux enveloppes."
      />
    </SiteLayout>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-2">
      <dt className="text-white/70">{k}</dt>
      <dd className="font-medium">{v}</dd>
    </div>
  );
}
