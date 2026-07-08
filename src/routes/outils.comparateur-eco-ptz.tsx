import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { ArrowRight, BadgeCheck, Banknote, Info, Percent } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { SliderField } from "@/components/SliderField";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/outils/comparateur-eco-ptz")({
  head: () => ({
    meta: [
      {
        title: "Éco-PTZ ou prêt travaux classique : quel coût réel ? | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Comparez le coût total de l'éco-prêt à taux zéro (0 %) et d'un prêt travaux classique pour financer votre rénovation énergétique : mensualités, intérêts, plafonds 2026 vérifiés.",
      },
      {
        property: "og:title",
        content: "Éco-PTZ ou prêt travaux classique : quel coût réel pour votre rénovation ?",
      },
      {
        property: "og:description",
        content:
          "Montant, durée, taux du prêt classique éditable : visualisez l'écart de coût avec l'éco-PTZ à 0 % d'intérêts. Plafonds par type de travaux vérifiés sur source officielle.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/outils/comparateur-eco-ptz" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/outils/comparateur-eco-ptz" }],
  }),
  component: ComparateurEcoPtzPage,
});

/* ─────────────────────────── Données vérifiées ───────────────────────────
   Plafonds, durées et conditions de l'éco-PTZ vérifiés le 8 juillet 2026 sur
   service-public.gouv.fr (fiche F19905), france-renov.gouv.fr et anil.org.
   Ce sont des paramètres réglementaires : ils évoluent par arrêté, à
   recontrôler avant toute republication durable de cette page. */

const eur = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.round(n)) + " €";
const pct = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 }).format(n) + " %";

type Categorie = {
  id: string;
  label: string;
  plafond: number;
  dureeMax: number;
  detail: string;
};

const CATEGORIES: Categorie[] = [
  {
    id: "1-vitrage",
    label: "1 action — parois vitrées",
    plafond: 7000,
    dureeMax: 15,
    detail: "Remplacement de fenêtres ou portes-fenêtres, seul, sans autre action de travaux.",
  },
  {
    id: "1-autre",
    label: "1 action — autre nature",
    plafond: 15000,
    dureeMax: 15,
    detail:
      "Isolation des combles, changement de chaudière ou de mode de chauffage, etc. — une seule action.",
  },
  {
    id: "2-actions",
    label: "2 actions",
    plafond: 25000,
    dureeMax: 15,
    detail: "Deux catégories de travaux d'amélioration de la performance énergétique combinées.",
  },
  {
    id: "3-actions",
    label: "3 actions ou plus",
    plafond: 30000,
    dureeMax: 15,
    detail: "Trois catégories de travaux ou plus, hors rénovation globale.",
  },
  {
    id: "globale",
    label: "Rénovation énergétique globale",
    plafond: 50000,
    dureeMax: 20,
    detail: "Gain de performance évalué par une étude thermique, sans liste de travaux imposée.",
  },
  {
    id: "assainissement",
    label: "Assainissement non collectif",
    plafond: 10000,
    dureeMax: 15,
    detail:
      "Réhabilitation d'un système d'assainissement individuel — pas de qualification RGE exigée ici.",
  },
];

const ELIGIBILITE: { q: string; a: ReactNode }[] = [
  {
    q: "Quel logement est éligible à l'éco-PTZ ?",
    a: (
      <>
        Un logement achevé depuis plus de deux ans à la date de début des travaux, qui constitue ou
        est destiné à constituer une résidence principale — occupée dans les six mois suivant la
        clôture du prêt. Vous pouvez être propriétaire occupant ou propriétaire bailleur.
      </>
    ),
  },
  {
    q: "Faut-il respecter une condition de ressources ?",
    a: (
      <>
        Non. Contrairement à MaPrimeRénov', dont le montant varie selon vos revenus, l'éco-PTZ est
        attribué sans aucune condition de ressources — c'est l'un des points qui le distingue.
      </>
    ),
  },
  {
    q: "Qui doit réaliser les travaux ?",
    a: (
      <>
        Des entreprises titulaires d'un signe de qualité RGE (Reconnu Garant de l'Environnement),
        pour toutes les catégories de travaux à l'exception de la réhabilitation de l'assainissement
        non collectif. Depuis le 1er juillet 2025, les travaux éligibles doivent en outre respecter
        les mêmes exigences techniques que celles de MaPrimeRénov' (arrêté du 27 mars 2025) : un
        point à vérifier avec l'artisan avant signature du devis.
      </>
    ),
  },
  {
    q: "Quel est le plafond selon la nature de mes travaux ?",
    a: (
      <ul className="mt-1 space-y-2">
        {CATEGORIES.map((c) => (
          <li
            key={c.id}
            className="flex items-center justify-between gap-4 border-b border-border/50 pb-2 last:border-0 last:pb-0"
          >
            <span className="text-foreground/80">{c.label}</span>
            <span className="font-medium text-foreground text-right shrink-0">
              {eur(c.plafond)} · {c.dureeMax} ans
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    q: "Peut-on cumuler l'éco-PTZ avec MaPrimeRénov' ?",
    a: (
      <>
        Oui. L'éco-PTZ est cumulable avec MaPrimeRénov' (parcours accompagné ou non) et
        MaPrimeRénov' Copropriété : il peut financer tout ou partie du reste à charge des travaux
        ayant ouvert droit à MaPrimeRénov'. Exemple illustratif : si MaPrimeRénov' couvre 50 % d'un
        projet à 40 000 €, l'éco-PTZ peut financer les 20 000 € restants, dans la limite de son
        propre plafond.
      </>
    ),
  },
  {
    q: "Peut-on souscrire plusieurs éco-PTZ pour le même logement ?",
    a: (
      <>
        Sous conditions, oui : un éco-PTZ complémentaire peut être souscrit dans les cinq ans
        suivant l'émission du premier, à condition de financer des travaux différents et de rester
        sous le plafond cumulé applicable (jusqu'à 50 000 € si l'un des deux prêts relève de la
        rénovation globale). Ce plafond s'apprécie par logement, et non par emprunteur — les
        modalités précises sont à vérifier auprès de votre banque, seule décisionnaire.
      </>
    ),
  },
  {
    q: "L'éco-PTZ est-il automatique une fois ces conditions réunies ?",
    a: (
      <>
        Non. L'éco-PTZ reste un prêt bancaire : l'établissement prêteur instruit votre dossier,
        vérifie les devis et les qualifications RGE, et reste libre de l'accorder ou non. L'État se
        contente de compenser l'absence d'intérêts auprès de la banque — il ne garantit pas l'octroi
        du prêt.
      </>
    ),
  },
];

/* ────────────────────────────────── Page ────────────────────────────────── */

function ComparateurEcoPtzPage() {
  const [categorieId, setCategorieId] = useState<string>("2-actions");
  const categorie = CATEGORIES.find((c) => c.id === categorieId) ?? CATEGORIES[2];

  const [montant, setMontant] = useState(20000);
  const [duree, setDuree] = useState(12);
  const [tauxClassique, setTauxClassique] = useState(4);

  const changerCategorie = (c: Categorie) => {
    setCategorieId(c.id);
    setMontant((m) => Math.min(m, c.plafond));
    setDuree((d) => Math.min(d, c.dureeMax));
  };

  const result = useMemo(() => {
    try {
      const p = Math.max(0, Number(montant) || 0);
      const n = Math.max(1, Math.round((Number(duree) || 0) * 12));
      const tauxMensuel = Math.max(0, Number(tauxClassique) || 0) / 100 / 12;

      const mensualiteClassique =
        tauxMensuel > 0 ? (p * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -n)) : p / n;
      const coutTotalClassique = mensualiteClassique * n;
      const interetsClassique = Math.max(0, coutTotalClassique - p);

      const mensualiteEcoPtz = p / n;
      const coutTotalEcoPtz = p;

      const clean = (v: number) => (Number.isFinite(v) ? v : 0);

      return {
        mensualiteClassique: clean(mensualiteClassique),
        coutTotalClassique: clean(coutTotalClassique),
        interetsClassique: clean(interetsClassique),
        mensualiteEcoPtz: clean(mensualiteEcoPtz),
        coutTotalEcoPtz: clean(coutTotalEcoPtz),
        economieMensuelle: clean(mensualiteClassique - mensualiteEcoPtz),
      };
    } catch (e) {
      console.error("Erreur de calcul dans le comparateur éco-PTZ :", e);
      return {
        mensualiteClassique: 0,
        coutTotalClassique: 0,
        interetsClassique: 0,
        mensualiteEcoPtz: 0,
        coutTotalEcoPtz: 0,
        economieMensuelle: 0,
      };
    }
  }, [montant, duree, tauxClassique]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Outil — Financer une rénovation"
        title={
          <>
            Éco-PTZ ou prêt travaux classique :{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              quel coût réel
            </span>{" "}
            ?
          </>
        }
        lead="L'éco-prêt à taux zéro finance une partie de vos travaux de rénovation énergétique sans un centime d'intérêts, dans la limite d'un plafond qui dépend du nombre d'actions réalisées. Comparez-le à un prêt travaux classique, mensualité par mensualité."
      >
        <span className="badge-verifie">
          <BadgeCheck size={13} aria-hidden /> Plafonds et durées vérifiés le 8 juillet 2026 —
          service-public.gouv.fr, france-renov.gouv.fr, anil.org
        </span>
      </PageHero>

      <section className="section">
        <div className="container-prose max-w-6xl">
          <p className="eyebrow">Le simulateur</p>
          <h2 className="display-2 mt-4 max-w-2xl">
            Fixez le montant, la durée — comparez les deux financements
          </h2>

          <div className="mt-10 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-7">
              <div>
                <p className="text-sm font-medium text-foreground mb-2.5">Nature de vos travaux</p>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => changerCategorie(c)}
                      className="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors"
                      style={
                        categorieId === c.id
                          ? {
                              borderColor: "var(--grenat)",
                              background: "color-mix(in oklch, var(--grenat) 8%, transparent)",
                              color: "var(--grenat)",
                            }
                          : { borderColor: "var(--border)", background: "var(--card)" }
                      }
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed">
                  {categorie.detail} Plafond éco-PTZ : {eur(categorie.plafond)}, remboursable sur{" "}
                  {categorie.dureeMax} ans maximum.
                </p>
              </div>

              <SliderField
                label="Montant à financer"
                value={montant}
                onChange={setMontant}
                min={1000}
                max={categorie.plafond}
                step={500}
                hardMax={categorie.plafond}
                unit="€"
                hint={`Plafonné à ${eur(categorie.plafond)} pour cette catégorie de travaux avec l'éco-PTZ. Des travaux plus coûteux ? Le surplus peut être financé par un prêt classique complémentaire, vos fonds propres, ou un second éco-PTZ (conditions détaillées plus bas).`}
              />

              <SliderField
                label="Durée de remboursement"
                value={duree}
                onChange={setDuree}
                min={3}
                max={categorie.dureeMax}
                step={1}
                hardMax={categorie.dureeMax}
                unit="ans"
                hint={`Durée maximale réglementaire pour l'éco-PTZ sur cette catégorie de travaux : ${categorie.dureeMax} ans.`}
              />

              <SliderField
                label="Taux du prêt travaux classique (comparaison)"
                value={tauxClassique}
                onChange={setTauxClassique}
                min={0.5}
                max={8}
                step={0.1}
                unit="%"
                hint="Les taux des prêts travaux varient fortement selon la banque, votre profil et la durée choisie : ce curseur n'affiche pas un taux de marché figé. Réglez-le sur une offre reçue ou à comparer."
              />
            </div>

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
                      Économie d'intérêts avec l'éco-PTZ
                    </p>
                    <p
                      className="font-display text-5xl mt-2"
                      style={{ color: "var(--grenat-clair)" }}
                    >
                      {eur(result.interetsClassique)}
                    </p>
                    <p className="mt-3 text-sm text-white/80">
                      soit {eur(result.economieMensuelle)}/mois de mensualité en moins qu'un prêt
                      classique au taux réglé ci-contre, à montant et durée égaux.
                    </p>
                    <dl className="mt-5 space-y-2 text-sm">
                      <Row
                        k="Mensualité éco-PTZ (0 %)"
                        v={`${eur(result.mensualiteEcoPtz)}/mois`}
                      />
                      <Row
                        k={`Mensualité classique (${pct(tauxClassique)})`}
                        v={`${eur(result.mensualiteClassique)}/mois`}
                      />
                      <Row k="Coût total éco-PTZ" v={eur(result.coutTotalEcoPtz)} />
                      <Row k="Coût total prêt classique" v={eur(result.coutTotalClassique)} />
                    </dl>
                    <p className="mt-5 text-xs text-white/60 leading-relaxed">
                      Simulation illustrative et non contractuelle, hors assurance emprunteur et
                      hors frais de dossier, mensualité constante sur toute la durée. Un crédit vous
                      engage et doit être remboursé : vérifiez vos capacités de remboursement avant
                      de vous engager.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link to="/contact" className="btn-grenat">
                        Échanger sur mon projet de rénovation <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-paper">
                  <p className="eyebrow">Sécuriser ce financement</p>
                  <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                    <li>Vérifiez la qualification RGE de l'entreprise avant de signer un devis.</li>
                    <li>
                      Confirmez le cumul éco-PTZ / MaPrimeRénov' auprès de{" "}
                      <a
                        href="https://france-renov.gouv.fr"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 hover:text-foreground"
                      >
                        France Rénov'
                      </a>{" "}
                      avant de lancer les travaux.
                    </li>
                    <li>
                      Comparez plusieurs banques : toutes ne proposent pas l'éco-PTZ, et son octroi
                      n'est jamais garanti.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau récapitulatif */}
          <div className="mt-14">
            <p className="eyebrow">Tableau récapitulatif</p>
            <h3 className="font-display text-2xl mt-3">Les deux financements, poste par poste</h3>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-3.5 text-left font-semibold text-foreground">Poste</th>
                    <th
                      className="p-3.5 text-left font-semibold"
                      style={{ color: "var(--grenat)" }}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <Percent size={14} aria-hidden /> Éco-PTZ
                      </span>
                    </th>
                    <th className="p-3.5 text-left font-semibold text-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Banknote size={14} aria-hidden /> Prêt travaux classique
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3.5 font-medium text-foreground">Montant emprunté</td>
                    <td className="p-3.5">{eur(montant)}</td>
                    <td className="p-3.5">{eur(montant)}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3.5 font-medium text-foreground">Taux d'intérêt</td>
                    <td className="p-3.5">0 %</td>
                    <td className="p-3.5">{pct(tauxClassique)}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3.5 font-medium text-foreground">Durée</td>
                    <td className="p-3.5">{duree} ans</td>
                    <td className="p-3.5">{duree} ans</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3.5 font-medium text-foreground">Mensualité</td>
                    <td className="p-3.5">{eur(result.mensualiteEcoPtz)}</td>
                    <td className="p-3.5">{eur(result.mensualiteClassique)}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3.5 font-medium text-foreground">Coût total remboursé</td>
                    <td className="p-3.5">{eur(result.coutTotalEcoPtz)}</td>
                    <td className="p-3.5">{eur(result.coutTotalClassique)}</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3.5 font-medium text-foreground">Dont intérêts</td>
                    <td className="p-3.5">0 €</td>
                    <td className="p-3.5">{eur(result.interetsClassique)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions d'éligibilité */}
      <section className="section border-t border-border/40">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Avant de vous décider</p>
          <h2 className="display-2 mt-4">Les conditions d'éligibilité de l'éco-PTZ</h2>
          <p className="lead mt-5">
            Sept questions directes pour vérifier que votre projet coche les cases — plafonds,
            durées et cumul avec MaPrimeRénov' inclus.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card px-6 divide-y divide-border">
            <Accordion type="single" collapsible>
              {ELIGIBILITE.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-b-0">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <span className="font-display text-base text-foreground font-semibold pr-4 text-left">
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed text-sm pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
            Sources :{" "}
            <a
              href="https://www.service-public.gouv.fr/particuliers/vosdroits/F19905"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              service-public.gouv.fr
            </a>
            ,{" "}
            <a
              href="https://france-renov.gouv.fr/aides/eco-pret-taux-zero"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              france-renov.gouv.fr
            </a>{" "}
            et{" "}
            <a
              href="https://www.anil.org/aj-eco-pret-a-taux-zero/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              anil.org
            </a>{" "}
            — consultées le 8 juillet 2026. Ces paramètres réglementaires évoluent par arrêté :
            revérifiez-les avant toute décision.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 flex gap-4">
            <Info
              size={20}
              className="shrink-0 mt-0.5"
              style={{ color: "var(--grenat)" }}
              aria-hidden
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ce comparateur est un outil pédagogique gratuit, sans lien avec une offre de crédit :
              EXP Capital n'intervient pas sur le financement bancaire de vos travaux. Il donne une
              piste de coût comparé — l'offre de prêt chiffrée, ferme et définitive, ne peut venir
              que d'une banque. Si cette rénovation s'inscrit dans un projet patrimonial plus large,
              échangez avec un conseiller pour la resituer dans votre stratégie globale (fiscalité,
              épargne, autres objectifs) —{" "}
              <Link
                to="/articles/$slug"
                params={{ slug: "dispositifs-fiscaux-demarche-ethique" }}
                className="font-medium text-foreground underline underline-offset-2 hover:text-[var(--grenat)]"
              >
                notre article sur les dispositifs fiscaux compatibles avec une démarche éthique
              </Link>{" "}
              détaille comment l'éco-PTZ s'articule avec d'autres leviers comme le Denormandie ou le
              Girardin.
            </p>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Rénovation et stratégie patrimoniale"
        title="Une rénovation énergétique se pense rarement seule"
        text="Fiscalité, épargne de précaution, autres objectifs patrimoniaux : échangez avec un conseiller pour voir comment ce financement s'articule avec le reste de votre stratégie — sans frais, sans engagement."
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
