import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CircleAlert,
  Landmark,
  LineChart,
  PiggyBank,
} from "lucide-react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { SliderField } from "@/components/SliderField";
import { eur, pct } from "@/components/simulators/format";

export const Route = createFileRoute("/outils/empreinte-carbone-epargne")({
  head: () => ({
    meta: [
      { title: "Quelle est l'empreinte carbone de votre épargne ? | Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Renseignez votre épargne et sa répartition (actions, obligations, immobilier, livrets) : obtenez un ordre de grandeur pédagogique, qualitatif et sourcé — pas un audit carbone certifié.",
      },
      {
        property: "og:title",
        content: "L'empreinte carbone de votre épargne — ordre de grandeur pédagogique",
      },
      {
        property: "og:description",
        content:
          "Un outil pédagogique pour situer, poche par poche, où le choix d'un fonds change vraiment l'intensité carbone financée — méthodologie et limites incluses.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/empreinte-carbone-epargne" },
    ],
    links: [
      { rel: "canonical", href: "https://placement-ethique.fr/outils/empreinte-carbone-epargne" },
    ],
  }),
  component: EmpreinteCarboneePage,
});

/* ─────────────────────────── Données de la page ─────────────────────────── */

type Niveau = 1 | 2 | 3 | null;

const LIBELLE_INTENSITE: Record<Exclude<Niveau, null>, string> = {
  1: "Faible",
  2: "Moyenne",
  3: "Forte",
};

const LIBELLE_LEVIER: Record<Exclude<Niveau, null>, string> = {
  1: "Limité",
  2: "Modéré",
  3: "Fort",
};

type Poche = {
  id: "actions" | "obligations" | "immobilier" | "livrets";
  label: string;
  icon: typeof LineChart;
  intensite: Niveau;
  intensiteNote: string;
  levier: Niveau;
  levierNote: string;
  typeMarche: string;
  basCarbone: string;
};

const POCHES: Poche[] = [
  {
    id: "actions",
    label: "Actions & fonds diversifiés",
    icon: LineChart,
    intensite: 3,
    intensiteNote:
      "Très hétérogène : l'intensité reproduit le poids des secteurs réellement détenus — énergie fossile, industrie lourde, aviation, mais aussi services numériques ou santé — au prorata de leur part dans le fonds ou l'indice suivi.",
    levier: 3,
    levierNote:
      "C'est la classe d'actifs où le choix du fonds change le plus la donne. Selon la méthodologie du PCAF (Partnership for Carbon Accounting Financials), l'épargnant se voit attribuer une part des émissions d'une entreprise proportionnelle à la part qu'il détient dans sa valeur totale : exclusions sectorielles, sélection « best-in-class » ou fonds affichant une trajectoire de décarbonation documentée peuvent réduire fortement cette part.",
    typeMarche:
      "Réplique un indice large sans filtre : énergie fossile, aviation et industrie lourde y pèsent au prorata de leur poids dans l'indice.",
    basCarbone:
      "Exclusions sectorielles renforcées, approche « best-in-class » et fonds affichant une trajectoire de décarbonation vérifiable dans leur reporting SFDR.",
  },
  {
    id: "obligations",
    label: "Obligations (entreprises & États)",
    icon: Landmark,
    intensite: 2,
    intensiteNote:
      "Hétérogène selon l'émetteur : une obligation d'entreprise suit une logique proche des actions (financement direct de l'activité de l'émetteur) ; une obligation d'État est plutôt rattachée à l'empreinte du pays financé, qui varie peu d'un fonds à l'autre.",
    levier: 2,
    levierNote:
      "Le levier est réel sur les obligations d'entreprise (obligations vertes fléchant des projets identifiés, sélection ESG des émetteurs) mais plus limité sur la dette souveraine : son intensité suit surtout la trajectoire climatique du pays financé, pas le choix du fonds.",
    typeMarche:
      "Mix générique d'émetteurs d'entreprise et d'État, sans critère extra-financier de sélection.",
    basCarbone:
      "Obligations vertes (green bonds) fléchées vers des projets identifiés et émetteurs d'entreprise sélectionnés sur des critères ESG documentés.",
  },
  {
    id: "immobilier",
    label: "Immobilier (SCPI, foncières)",
    icon: Building2,
    intensite: 2,
    intensiteNote:
      "Portée essentiellement par l'énergie consommée par les bâtiments détenus (chauffage, électricité) — donc par leur étiquette de performance énergétique (DPE) plus que par une « activité économique » au sens classique.",
    levier: 2,
    levierNote:
      "Le principal levier est la rénovation énergétique du parc détenu, ou le choix d'actifs récents et performants — davantage que le seul intitulé « SCPI ISR » de la société de gestion.",
    typeMarche: "Parc bâti hétérogène, sans filtre sur la performance énergétique des actifs détenus.",
    basCarbone:
      "SCPI ciblant la rénovation énergétique ou des actifs récents, avec un reporting DPE consultable auprès de la société de gestion.",
  },
  {
    id: "livrets",
    label: "Livrets & fonds monétaires",
    icon: PiggyBank,
    intensite: null,
    intensiteNote:
      "Non mesurée à l'échelle du produit à ce jour : le standard PCAF ne couvre pas encore les dépôts bancaires de détail comme il couvre les actions ou les obligations cotées. L'argent déposé suit la politique de financement globale de l'établissement — ce que documentent, à l'échelle des banques (pas du produit individuel), des travaux comme ceux de Carbon4 Finance pour Oxfam France.",
    levier: null,
    levierNote:
      "« Liquide » ne veut pas dire « neutre en carbone » : cela signifie surtout que la donnée n'est pas mesurée à l'échelle du produit. Pour les livrets réglementés (Livret A, LDDS), une part est centralisée par la loi à la Caisse des Dépôts, notamment pour financer le logement social — le reste suit la politique de financement générale de la banque.",
    typeMarche: "Politique de financement de l'établissement, non choisie ni connue de l'épargnant.",
    basCarbone:
      "Établissements publiant une politique de financement engagée (ex. sortie progressive du financement des énergies fossiles) — à vérifier établissement par établissement, la donnée n'étant pas encore normée pour ce type de produit.",
  },
];

// Palette tokens (pas de oklch en dur) : dégradé grenat → encre pour les 4 parts.
const COULEURS_PARTS = [
  "var(--grenat)",
  "color-mix(in oklch, var(--grenat) 55%, var(--ink) 45%)",
  "var(--ink)",
  "color-mix(in oklch, var(--ink) 35%, var(--card) 65%)",
];

/* ────────────────────────────────── Page ────────────────────────────────── */

function EmpreinteCarboneePage() {
  const [montantTotal, setMontantTotal] = useState(50000);
  const [actionsPct, setActionsPct] = useState(40);
  const [obligationsPct, setObligationsPct] = useState(20);
  const [immobilierPct, setImmobilierPct] = useState(20);
  const [livretsPct, setLivretsPct] = useState(20);

  const sommePct = actionsPct + obligationsPct + immobilierPct + livretsPct;

  const result = useMemo(() => {
    const part = (v: number) => (sommePct > 0 ? (v / sommePct) * 100 : 0);

    const partLevierFort = part(actionsPct) + part(obligationsPct);
    const partLevierModere = part(immobilierPct);
    const partNonMesuree = part(livretsPct);

    return {
      partLevierFort,
      montantLevierFort: montantTotal * (partLevierFort / 100),
      partLevierModere,
      montantLevierModere: montantTotal * (partLevierModere / 100),
      partNonMesuree,
      montantNonMesuree: montantTotal * (partNonMesuree / 100),
    };
  }, [montantTotal, actionsPct, obligationsPct, immobilierPct, livretsPct, sommePct]);

  const donneesCamembert = [
    { name: "Actions & fonds diversifiés", value: actionsPct },
    { name: "Obligations (entreprises & États)", value: obligationsPct },
    { name: "Immobilier (SCPI, foncières)", value: immobilierPct },
    { name: "Livrets & fonds monétaires", value: livretsPct },
  ].filter((d) => d.value > 0);

  const inputs = (
    <div className="space-y-6">
      <SliderField
        label="Montant total épargné (toutes enveloppes confondues)"
        value={montantTotal}
        onChange={setMontantTotal}
        min={0}
        max={500000}
        step={1000}
        hardMax={5000000}
        unit="€"
        hint="Assurance vie, PER, compte-titres, PEA, livrets… additionnez ce que vous voulez situer."
      />

      <div>
        <p className="text-sm font-medium text-foreground mb-1">Répartition indicative par grande poche</p>
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
          Une estimation à la louche suffit — inutile d'aller chercher le détail de chaque support.
        </p>
        <div className="space-y-5">
          <SliderField
            label="Actions & fonds diversifiés"
            value={actionsPct}
            onChange={setActionsPct}
            min={0}
            max={100}
            step={5}
            unit="%"
          />
          <SliderField
            label="Obligations (entreprises & États)"
            value={obligationsPct}
            onChange={setObligationsPct}
            min={0}
            max={100}
            step={5}
            unit="%"
          />
          <SliderField
            label="Immobilier (SCPI, foncières)"
            value={immobilierPct}
            onChange={setImmobilierPct}
            min={0}
            max={100}
            step={5}
            unit="%"
          />
          <SliderField
            label="Livrets & fonds monétaires"
            value={livretsPct}
            onChange={setLivretsPct}
            min={0}
            max={100}
            step={5}
            unit="%"
          />
        </div>
        <p
          className={`mt-3 text-xs leading-relaxed ${
            sommePct === 100 ? "text-muted-foreground" : "text-foreground"
          }`}
        >
          Total renseigné : <strong>{pct(sommePct, 0)} %</strong>
          {sommePct !== 100
            ? " — les montants ci-contre sont recalculés au prorata pour totaliser 100 %."
            : "."}
        </p>
      </div>
    </div>
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Empreinte carbone"
        title={
          <>
            L'empreinte carbone de votre épargne :{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              ordre de grandeur, pas audit
            </span>
          </>
        }
        lead="Renseignez votre épargne et sa répartition indicative entre grandes poches (actions, obligations, immobilier, livrets). L'outil ne produit pas un chiffre en kgCO2 — il situe, poche par poche, où le choix d'un fonds ISR ou bas-carbone change réellement la donne, et où il ne la change pas."
      >
        <span className="badge-verifie">
          <BadgeCheck size={13} aria-hidden /> Méthodologie sourcée — PCAF, ADEME, Oxfam France / Carbon4 Finance
        </span>
      </PageHero>

      {/* Formulaire + restitution */}
      <section className="section">
        <div className="container-prose max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">{inputs}</div>

            <div className="md:col-span-5">
              <div className="sticky top-24 space-y-5">
                {donneesCamembert.length > 0 && (
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="eyebrow">Votre répartition renseignée</p>
                    <div className="h-56 mt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={donneesCamembert}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={50}
                            outerRadius={82}
                            paddingAngle={2}
                            stroke="none"
                          >
                            {donneesCamembert.map((_, i) => (
                              <Cell key={i} fill={COULEURS_PARTS[i % COULEURS_PARTS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(v) => `${pct(Number(v), 0)} %`} />
                          <Legend
                            layout="vertical"
                            align="right"
                            verticalAlign="middle"
                            wrapperStyle={{ fontSize: 11, maxWidth: 170 }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

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
                      Où se joue le levier sur votre épargne
                    </p>
                    <dl className="mt-4 space-y-4 text-sm">
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-white/70">
                          Poches à fort levier ISR (actions + obligations)
                        </dt>
                        <dd className="font-display text-2xl mt-1" style={{ color: "var(--grenat-clair)" }}>
                          {eur(Math.round(result.montantLevierFort))}
                        </dd>
                        <p className="text-xs text-white/60 mt-0.5">
                          {pct(result.partLevierFort, 0)} % de votre épargne renseignée
                        </p>
                      </div>
                      <div className="border-b border-white/10 pb-3">
                        <dt className="text-white/70">Poche au levier « rénovation » (immobilier)</dt>
                        <dd className="font-display text-2xl mt-1" style={{ color: "var(--grenat-clair)" }}>
                          {eur(Math.round(result.montantLevierModere))}
                        </dd>
                        <p className="text-xs text-white/60 mt-0.5">
                          {pct(result.partLevierModere, 0)} % de votre épargne renseignée
                        </p>
                      </div>
                      <div>
                        <dt className="text-white/70">Poche non mesurée à ce jour (livrets, monétaire)</dt>
                        <dd className="font-display text-2xl mt-1" style={{ color: "var(--grenat-clair)" }}>
                          {eur(Math.round(result.montantNonMesuree))}
                        </dd>
                        <p className="text-xs text-white/60 mt-0.5">
                          {pct(result.partNonMesuree, 0)} % de votre épargne renseignée
                        </p>
                      </div>
                    </dl>
                    <p className="mt-5 text-xs text-white/60 leading-relaxed">
                      Ordre de grandeur pédagogique, pas un audit : cette page ne présente aucune
                      projection de performance financière. Tout placement en actions, obligations,
                      immobilier ou unités de compte comporte un risque de perte en capital.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link to="/contact" className="btn-grenat">
                        Obtenir des pistes sur mon allocation <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Détail par poche */}
          <div className="mt-14">
            <p className="eyebrow mb-4">Poche par poche</p>
            <h2 className="display-3 font-display max-w-2xl">
              Intensité typique et poids réel du choix du fonds
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              Le principe, issu de la méthodologie PCAF utilisée par les sociétés de gestion et les
              banques pour mesurer leurs émissions financées : quand vous détenez une part d'un fonds
              qui finance une entreprise, un État ou un bien immobilier, on vous attribue une part de
              ses émissions, proportionnelle à la part que vous détenez dans sa valeur totale. Deux
              fonds « diversifiés » n'ont donc pas la même empreinte s'ils ne détiennent pas les mêmes
              sociétés.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {POCHES.map((p) => (
                <div key={p.id} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "var(--accent)", color: "var(--grenat)" }}
                    >
                      <p.icon size={16} aria-hidden />
                    </span>
                    <h3 className="font-display text-lg text-foreground">{p.label}</h3>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Jauge titre="Intensité typique" niveau={p.intensite} libelles={LIBELLE_INTENSITE} />
                    <Jauge titre="Levier du choix ISR" niveau={p.levier} libelles={LIBELLE_LEVIER} />
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed">{p.intensiteNote}</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.levierNote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparaison type marché vs bas-carbone */}
          <div className="mt-14">
            <p className="eyebrow mb-4">Allocation « type marché » vs « bas-carbone / ISR »</p>
            <h2 className="display-3 font-display max-w-2xl">
              Même poche, deux logiques de sélection très différentes
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              À répartition égale entre les quatre poches, ce n'est pas le nom de l'enveloppe qui fait
              varier l'empreinte carbone financée, mais la méthode de sélection des supports qui la
              composent. Voici, poche par poche, ce que change concrètement une sélection ISR/bas-carbone
              par rapport à une sélection générique.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border text-left text-xs text-muted-foreground">
                    <th className="px-4 py-2.5 font-medium">Poche</th>
                    <th className="px-4 py-2.5 font-medium">Allocation « type marché »</th>
                    <th className="px-4 py-2.5 font-medium">Allocation « bas-carbone / ISR »</th>
                  </tr>
                </thead>
                <tbody>
                  {POCHES.map((p) => (
                    <tr key={p.id} className="border-b border-border/60 last:border-b-0 align-top">
                      <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                        {p.label}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground leading-relaxed">{p.typeMarche}</td>
                      <td className="px-4 py-3 text-muted-foreground leading-relaxed">{p.basCarbone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Méthodologie */}
          <div className="mt-14 rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="eyebrow mb-3">Méthodologie, sources et limites</p>
            <div className="space-y-3 text-sm text-foreground/85 leading-relaxed">
              <p>
                Il n'existe pas, à notre connaissance, de coefficient officiel et audité convertissant
                « 1 € placé en actions » ou « 1 € placé en obligations » en un nombre de kgCO2e valable
                pour tout épargnant : l'empreinte réelle dépend entièrement des sociétés, États ou biens
                immobiliers effectivement détenus par les fonds choisis — pas de la seule catégorie
                d'actif. C'est pourquoi cet outil raisonne en échelle qualitative (faible / moyenne /
                forte, et fort / modéré / limité pour le levier du choix ISR) plutôt qu'en chiffre
                inventé.
              </p>
              <p>
                Cette échelle s'appuie sur la logique de trois références publiques :{" "}
                <a
                  href="https://carbonaccountingfinancials.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[var(--grenat)]"
                >
                  le standard PCAF
                </a>{" "}
                (Partnership for Carbon Accounting Financials), qui structure la comptabilisation des
                émissions financées par classe d'actifs (actions cotées, obligations d'entreprise et
                souveraines, immobilier, prêts) selon une logique d'attribution proportionnelle ;{" "}
                <a
                  href="https://base-empreinte.ademe.fr/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[var(--grenat)]"
                >
                  la Base Empreinte® de l'ADEME
                </a>
                , base publique française de facteurs d'émission par secteur d'activité, parfois utilisée
                en complément pour estimer l'intensité carbone d'un secteur financé ; et le rapport{" "}
                <a
                  href="https://www.oxfamfrance.org/rapports/banques-et-climat-le-desaccord-de-paris/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[var(--grenat)]"
                >
                  « Banques et climat : le désaccord de Paris »
                </a>{" "}
                d'Oxfam France (octobre 2021), qui applique la méthodologie Carbon Impact Analytics de
                Carbon4 Finance aux six principales banques françaises et illustre concrètement que
                l'argent déposé — y compris sur des produits d'épargne réglementée — finance des
                émissions qui ne sont pas nulles, même si elles restent aujourd'hui peu visibles pour
                l'épargnant individuel.
              </p>
              <p>
                Limites à garder en tête : ces trois références mesurent des empreintes à l'échelle d'un
                fonds, d'un secteur ou d'une banque — jamais celle de « votre épargne » prise
                isolément, qui dépendrait du détail exact des supports que vous détenez, du document
                d'informations clés (DIC) de chacun et du rapport SFDR du fonds. Les méthodes
                d'attribution elles-mêmes font débat (par exemple, pour la dette souveraine, l'attribution
                « par PIB » ou « par dette » ne donnent pas le même résultat), et une approche qui
                rapporterait un stock d'épargne à un flux annuel d'émissions macroéconomiques — sans
                tenir compte de ce que finance réellement chaque support — est elle-même contestée
                méthodologiquement. Cet outil ne calcule donc aucun chiffre de ce type.
              </p>
            </div>
          </div>

          {/* Ce que cet outil ne fait pas */}
          <div className="mt-8 rounded-2xl border p-6" style={{ borderColor: "var(--grenat)" }}>
            <div className="flex items-start gap-3">
              <CircleAlert size={18} className="shrink-0 mt-0.5" style={{ color: "var(--grenat)" }} aria-hidden />
              <div>
                <p className="font-medium text-foreground">Ce que cet outil ne fait pas</p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-4">
                  <li>
                    Il ne calcule pas une empreinte carbone certifiée par fonds : cela suppose
                    l'inventaire de portefeuille et le reporting SFDR de chaque support réellement
                    détenu.
                  </li>
                  <li>
                    Il ne note pas vos placements actuels comme « bons » ou « mauvais » — il situe des
                    ordres de grandeur qualitatifs, jamais un verdict.
                  </li>
                  <li>
                    Il ne remplace pas un bilan carbone réalisé par un professionnel indépendant selon la
                    méthode Bilan Carbone®.
                  </li>
                  <li>
                    Sa restitution est une <strong>piste</strong> de lecture, pas une recommandation :
                    seul un échange avec un conseiller permet de la rapprocher de votre situation
                    réelle.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Pour comprendre ce que garantit vraiment un fonds « vert » avant de changer votre
            répartition,{" "}
            <Link to="/outils/decodeur-label" className="text-foreground underline underline-offset-4">
              utilisez notre décodeur de labels
            </Link>{" "}
            ; pour projeter une épargne dans le temps, frais et fiscalité inclus,{" "}
            <Link to="/outils/simulateur" className="text-foreground underline underline-offset-4">
              utilisez le simulateur de projection
            </Link>
            .
          </p>
        </div>
      </section>

      <CTA
        eyebrow="Aller plus loin"
        title="Discutons de ce que financent vos placements actuels"
        text="Cet outil situe des ordres de grandeur qualitatifs. Un échange avec un conseiller permet de regarder le détail réel de vos contrats et d'obtenir des pistes de réallocation, sans engagement."
      />
    </SiteLayout>
  );
}

function Jauge({
  titre,
  niveau,
  libelles,
}: {
  titre: string;
  niveau: Niveau;
  libelles: Record<Exclude<Niveau, null>, string>;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-3">
      <p className="text-[11px] text-muted-foreground">{titre}</p>
      {niveau === null ? (
        <p className="text-sm font-medium text-foreground mt-1">Non mesuré</p>
      ) : (
        <div className="flex items-center gap-2 mt-1">
          <div className="flex gap-1" aria-hidden>
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className="h-2.5 w-4 rounded-sm"
                style={{
                  background:
                    n <= niveau ? "var(--grenat)" : "color-mix(in oklch, var(--foreground) 12%, transparent)",
                }}
              />
            ))}
          </div>
          <p className="text-sm font-medium text-foreground">{libelles[niveau]}</p>
        </div>
      )}
    </div>
  );
}
