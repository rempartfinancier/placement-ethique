import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { SliderField } from "@/components/SliderField";

export const Route = createFileRoute("/outils/retraite")({
  head: () => ({
    meta: [
      { title: "Combien épargner pour ma retraite responsable ? | Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Fixez le revenu mensuel visé à la retraite, déduisez votre pension estimée : l'outil calcule le capital cible et l'effort d'épargne mensuel à programmer, inflation comprise. Gratuit, hypothèses modifiables.",
      },
      {
        property: "og:title",
        content: "Combien pour ma retraite ? — simulateur d'effort d'épargne",
      },
      {
        property: "og:description",
        content:
          "Revenu visé, pension estimée, horizon : calculez le capital nécessaire et l'épargne mensuelle à mettre en place. Hypothèses librement modifiables, non contractuelles.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/retraite" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils/retraite" }],
  }),
  component: RetraitePage,
});

const eur = (n: number) => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) + " €";
const pct = (n: number) => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 }).format(n) + " %";

function RetraitePage() {
  const [targetMonthly, setTargetMonthly] = useState(2500);
  const [pension, setPension] = useState(0);
  const [age, setAge] = useState(35);
  const [retireAge, setRetireAge] = useState(65);
  const [currentCapital, setCurrentCapital] = useState(15000);
  const [rate, setRate] = useState(5);
  const [inflation, setInflation] = useState(2);
  const [withdrawalYears, setWithdrawalYears] = useState(25);

  const years = Math.max(1, retireAge - age);
  const departYear = new Date().getFullYear() + years;
  const depletionAge = retireAge + withdrawalYears;

  const result = useMemo(() => {
    try {
      const safeTargetMonthly = Number(targetMonthly) || 0;
      const safePension = Number(pension) || 0;
      const safeWithdrawalYears = Number(withdrawalYears) || 0;
      const safeRate = Number(rate) || 0;
      const safeInflation = Number(inflation) || 0;
      const safeCurrentCapital = Number(currentCapital) || 0;
      const safeYears = Number(years) || 0;

      // Besoin net en euros d'aujourd'hui : revenu visé moins pension des
      // régimes obligatoires (pension supposée revalorisée avec l'inflation).
      const netMonthlyToday = Math.max(0, safeTargetMonthly - safePension);

      // Revalorisation du besoin net par l'inflation sur la phase d'accumulation :
      // le montant à retirer chaque mois à la retraite est exprimé en euros de l'année de départ.
      const netMonthlyAtRetirement = netMonthlyToday * Math.pow(1 + safeInflation / 100, safeYears);

      // Hypothèse de décumulation prudente : rendement divisé par deux en phase
      // de retrait (allocation plus défensive une fois à la retraite).
      const withdrawalRate = Math.max(0.005, safeRate / 100 / 2);
      const months = safeWithdrawalYears * 12;
      const monthlyRate = Math.pow(1 + withdrawalRate, 1 / 12) - 1;

      let capitalNeeded = 0;
      if (monthlyRate > 0) {
        capitalNeeded = (netMonthlyAtRetirement * (1 - Math.pow(1 + monthlyRate, -months))) / monthlyRate;
      } else {
        capitalNeeded = netMonthlyAtRetirement * months;
      }

      const r = safeRate / 100;
      const mr = Math.pow(1 + r, 1 / 12) - 1;
      const capitalFromExisting = safeCurrentCapital * Math.pow(1 + r, safeYears);
      const remaining = Math.max(0, capitalNeeded - capitalFromExisting);
      const n = safeYears * 12;

      let monthlyEffort = 0;
      if (n > 0) {
        const denominator = Math.pow(1 + mr, n) - 1;
        if (mr > 0 && Math.abs(denominator) > 0.000001) {
          monthlyEffort = (remaining * mr) / denominator;
        } else {
          monthlyEffort = remaining / n;
        }
      }

      const clean = (v: number) => (isFinite(v) && !isNaN(v) ? v : 0);

      return {
        netMonthlyToday: clean(netMonthlyToday),
        netMonthlyAtRetirement: clean(netMonthlyAtRetirement),
        capitalNeeded: clean(capitalNeeded),
        capitalFromExisting: clean(capitalFromExisting),
        monthlyEffort: clean(monthlyEffort),
      };
    } catch (e) {
      console.error("Erreur de calcul dans le simulateur retraite :", e);
      return { netMonthlyToday: 0, netMonthlyAtRetirement: 0, capitalNeeded: 0, capitalFromExisting: 0, monthlyEffort: 0 };
    }
  }, [targetMonthly, pension, age, retireAge, currentCapital, rate, inflation, withdrawalYears, years]);

  const inputs = (
    <div className="space-y-6">
      <SliderField
        label="Revenu mensuel visé à la retraite (total)"
        value={targetMonthly}
        onChange={setTargetMonthly}
        min={500}
        max={10000}
        step={100}
        hardMax={30000}
        unit="€"
        hint="Le train de vie mensuel total que vous visez, toutes ressources confondues."
      />
      <div>
        <SliderField
          label="Pension mensuelle estimée (régimes obligatoires)"
          value={pension}
          onChange={setPension}
          min={0}
          max={4000}
          step={50}
          hardMax={10000}
          unit="€"
          hint="Laissez 0 pour un calcul sans pension."
        />
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          Retrouvez votre estimation personnalisée sur{" "}
          <a
            href="https://www.info-retraite.fr"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            info-retraite.fr
          </a>
          , le service public inter-régimes de la retraite.
        </p>
      </div>
      <SliderField
        label="Âge actuel"
        value={age}
        onChange={(v) => {
          setAge(v);
          setRetireAge((prev) => Math.max(prev, v + 1));
        }}
        min={20}
        max={64}
        step={1}
        unit="ans"
      />
      <SliderField
        label="Âge de départ en retraite"
        value={retireAge}
        onChange={setRetireAge}
        min={age + 1}
        max={75}
        step={1}
        unit="ans"
      />
      <SliderField
        label="Durée de retraite estimée"
        value={withdrawalYears}
        onChange={setWithdrawalYears}
        min={10}
        max={40}
        step={1}
        unit="ans"
        hint="Nombre d'années pendant lesquelles le capital financera vos retraits."
      />
      <SliderField
        label="Capital déjà constitué"
        value={currentCapital}
        onChange={setCurrentCapital}
        min={0}
        max={500000}
        step={1000}
        hardMax={5000000}
        unit="€"
      />
      <SliderField
        label="Rendement annuel hypothèse"
        value={rate}
        onChange={setRate}
        min={1}
        max={9}
        step={0.5}
        unit="%"
        hint={`Pendant la phase d'épargne. En phase de retraite, l'outil retient prudemment la moitié (${pct(rate / 2)}), allocation plus défensive.`}
      />
      <SliderField
        label="Inflation annuelle hypothèse"
        value={inflation}
        onChange={setInflation}
        min={0}
        max={5}
        step={0.5}
        unit="%"
        hint="Le besoin net est revalorisé de l'inflation jusqu'au départ en retraite, pour raisonner en pouvoir d'achat constant."
      />
    </div>
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Retraite"
        title={
          <>
            Combien pour ma{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              retraite
            </span>{" "}
            ?
          </>
        }
        lead="Partez du revenu mensuel que vous visez à la retraite : cet outil en déduit le capital cible et l'effort d'épargne mensuel à programmer dès aujourd'hui, en supports vérifiés. Toutes les hypothèses sont librement modifiables."
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
                      Piste d'épargne mensuelle
                    </p>
                    <p className="font-display text-5xl mt-2" style={{ color: "var(--grenat-clair)" }}>
                      {eur(Math.round(result.monthlyEffort))}
                    </p>
                    {result.netMonthlyToday === 0 && (
                      <p className="mt-3 text-sm text-white/80">
                        Votre pension estimée couvre déjà le revenu visé : selon ces hypothèses, aucun
                        effort d'épargne supplémentaire n'est nécessaire.
                      </p>
                    )}
                    <dl className="mt-5 space-y-2 text-sm">
                      <Row k={`Besoin net (euros de ${departYear})`} v={`${eur(Math.round(result.netMonthlyAtRetirement))}/mois`} />
                      <Row k="Soit en euros d'aujourd'hui" v={`${eur(Math.round(result.netMonthlyToday))}/mois`} />
                      <Row k={`Capital cible à ${retireAge} ans`} v={eur(Math.round(result.capitalNeeded))} />
                      <Row k="Capital actuel, une fois projeté" v={eur(Math.round(result.capitalFromExisting))} />
                      <Row k="Horizon d'épargne" v={`${years} ans`} />
                      <Row k="Capital consommé vers" v={`${depletionAge} ans`} />
                    </dl>
                    <p className="mt-5 text-xs text-white/60 leading-relaxed">
                      Hypothèse illustrative et non contractuelle : {pct(rate)} pendant l'épargne,{" "}
                      {pct(rate / 2)} pendant la retraite (allocation plus défensive), inflation {pct(inflation)}.
                      Pension supposée revalorisée comme l'inflation ; le capital est consommé en{" "}
                      {withdrawalYears} ans. Les performances passées ne préjugent pas des performances
                      futures et un placement en unités de compte comporte un risque de perte en capital.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link to="/contact" className="btn-grenat">
                        Réserver un échange sur ma retraite <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-paper">
                  <p className="eyebrow">Où loger cet effort ?</p>
                  <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                    <li>
                      <Link
                        to="/enveloppes"
                        className="font-medium text-foreground underline underline-offset-2 hover:text-[var(--grenat)]"
                      >
                        Assurance vie responsable
                      </Link>{" "}
                      — l'enveloppe souple par défaut : fiscalité allégée après 8 ans, capital
                      disponible à tout moment.
                    </li>
                    <li>
                      <Link
                        to="/outils/per-isr"
                        className="font-medium text-foreground underline underline-offset-2 hover:text-[var(--grenat)]"
                      >
                        PER ISR
                      </Link>{" "}
                      — si vous payez de l'impôt sur le revenu, les versements sont déductibles :
                      testez la piste avec ce simulateur dédié.
                    </li>
                    <li>
                      <Link
                        to="/placements"
                        className="font-medium text-foreground underline underline-offset-2 hover:text-[var(--grenat)]"
                      >
                        Actions & ETF ISR en compte-titres
                      </Link>{" "}
                      — pour compléter en toute flexibilité, sans plafond de versement.
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Cette piste est une estimation pédagogique, fondée sur des hypothèses illustratives
                  que vous pouvez modifier librement : elle ne constitue ni un engagement ni une
                  recommandation. Elle ne tient pas compte de la fiscalité de sortie, de votre régime
                  matrimonial ni de vos autres revenus — des paramètres à poser avec un conseiller
                  avant toute décision.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Pour comparer cette piste avec une projection année par année, frais et fiscalité inclus,
            utilisez{" "}
            <Link to="/outils/simulateur" className="text-foreground underline underline-offset-4">
              le simulateur d'épargne responsable
            </Link>
            .
          </p>
        </div>
      </section>

      <CTA
        eyebrow="Combiner les enveloppes"
        title="Assurance vie, PER et SCPI responsables"
        text="Une retraite se construit rarement avec une seule enveloppe. Échangez avec un conseiller pour voir comment équilibrer liquidité, fiscalité et alignement de vos placements avec vos exigences."
      />
    </SiteLayout>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
      <dt className="text-white/70">{k}</dt>
      <dd className="font-medium text-right">{v}</dd>
    </div>
  );
}
