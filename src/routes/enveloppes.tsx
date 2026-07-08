import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Calculator,
  Check,
  Landmark,
  Layers,
  LineChart,
  PiggyBank,
  Scale,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/enveloppes")({
  head: () => ({
    meta: [
      {
        title:
          "Assurance vie, PER, PEA ou CTO : quelle enveloppe pour investir responsable ? | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Comparatif 2026 des enveloppes fiscales sous l'angle ISR : fiscalité vérifiée (abattements, flat tax 31,4 %), profondeur de l'offre responsable, livrets réglementés et épargne salariale.",
      },
      {
        property: "og:title",
        content: "Quelle enveloppe fiscale pour investir responsable ? — Placement-éthique.fr",
      },
      { property: "og:url", content: "https://placement-ethique.fr/enveloppes" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/enveloppes" }],
  }),
  component: EnveloppesPage,
});

/* ─────────────────────── Données du comparatif final ─────────────────────── */

type Cle = "av" | "per" | "pea" | "cto" | "livrets" | "es";

const COLONNES: { cle: Cle; nom: string; nomCourt: string }[] = [
  { cle: "av", nom: "Assurance vie", nomCourt: "AV" },
  { cle: "per", nom: "PER individuel", nomCourt: "PER" },
  { cle: "pea", nom: "PEA", nomCourt: "PEA" },
  { cle: "cto", nom: "Compte-titres (CTO)", nomCourt: "CTO" },
  { cle: "livrets", nom: "Livret A / LDDS", nomCourt: "Livrets" },
  { cle: "es", nom: "Épargne salariale (PEE)", nomCourt: "PEE" },
];

type Cellule = { v: string; atout?: boolean; attention?: boolean };
type Ligne = { critere: string } & Record<Cle, Cellule>;

const LIGNES: Ligne[] = [
  {
    critere: "Plafond de versements",
    av: { v: "Aucun", atout: true },
    per: { v: "Aucun (déduction plafonnée)", atout: true },
    pea: { v: "150 000 €", attention: true },
    cto: { v: "Aucun", atout: true },
    livrets: { v: "22 950 € / 12 000 €", attention: true },
    es: { v: "Aucun (avantages plafonnés)" },
  },
  {
    critere: "Avantage fiscal à l'entrée",
    av: { v: "Non" },
    per: { v: "Oui — versements déduits du revenu imposable", atout: true },
    pea: { v: "Non" },
    cto: { v: "Non" },
    livrets: { v: "Non" },
    es: { v: "Oui — abondement et primes exonérés d'IR s'ils sont investis", atout: true },
  },
  {
    critere: "Fiscalité des gains à la sortie",
    av: {
      v: "Après 8 ans : abattement 4 600 / 9 200 €, puis 7,5 % + PS 17,2 %",
      atout: true,
    },
    per: { v: "Barème sur les versements déduits + flat tax sur les gains", attention: true },
    pea: { v: "Exonérés d'IR après 5 ans, PS dus", atout: true },
    cto: { v: "Flat tax 31,4 % (depuis 2026)", attention: true },
    livrets: { v: "Exonérés d'impôt et de prélèvements sociaux", atout: true },
    es: { v: "Exonérés d'IR à l'échéance du blocage, PS dus", atout: true },
  },
  {
    critere: "Disponibilité de l'argent",
    av: { v: "Totale — rachat possible à tout moment", atout: true },
    per: { v: "Bloqué jusqu'à la retraite*", attention: true },
    pea: { v: "Retrait avant 5 ans = clôture (sauf exceptions)", attention: true },
    cto: { v: "Totale", atout: true },
    livrets: { v: "Immédiate", atout: true },
    es: { v: "Bloquée 5 ans*", attention: true },
  },
  {
    critere: "Transmission au décès",
    av: { v: "152 500 € par bénéficiaire hors succession (primes avant 70 ans)", atout: true },
    per: { v: "Régime assurantiel spécifique, selon l'âge au décès" },
    pea: { v: "Plan clôturé, gains exonérés d'IR" },
    cto: { v: "Intégré à la succession" },
    livrets: { v: "Intégrés à la succession" },
    es: { v: "Déblocage anticipé, intégré à la succession" },
  },
  {
    critere: "Offre ISR dans l'enveloppe",
    av: { v: "UC labellisées obligatoires (loi PACTE) — profondeur très variable", atout: true },
    per: { v: "Dépend de l'assureur — à vérifier avant d'ouvrir", attention: true },
    pea: { v: "Restreinte aux actions européennes (75 % minimum)", attention: true },
    cto: { v: "La plus large : ETF ISR, fonds Article 9, green bonds, titres en direct", atout: true },
    livrets: { v: "Fléchage partiel de l'encours, non choisi par vous", attention: true },
    es: { v: "Fonds labellisé + fonds solidaire obligatoires au règlement", atout: true },
  },
  {
    critere: "Pour qui, en priorité",
    av: { v: "Le socle de l'épargne de moyen/long terme" },
    per: { v: "TMI ≥ 30 % qui prépare sa retraite" },
    pea: { v: "Actions européennes de long terme" },
    cto: { v: "Investisseur autonome, allocation mondiale" },
    livrets: { v: "Épargne de précaution uniquement" },
    es: { v: "Tout salarié qui y a accès (abondement)" },
  },
];

/* ──────────────────── Tableau comparatif interactif ──────────────────── */

function CelluleTd({ c, hl }: { c: Cellule; hl: boolean }) {
  return (
    <td
      className="p-3.5 align-top text-muted-foreground"
      style={hl ? { background: "color-mix(in oklch, var(--grenat) 6%, transparent)" } : undefined}
    >
      <div className="flex items-start gap-1.5">
        {c.atout && (
          <Check size={14} className="mt-0.5 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
        )}
        {c.attention && (
          <TriangleAlert size={13} className="mt-0.5 shrink-0 opacity-60" aria-hidden />
        )}
        <span className="leading-snug">{c.v}</span>
      </div>
    </td>
  );
}

function ComparatifFinal() {
  const [surbrillance, setSurbrillance] = useState<Cle | null>(null);
  return (
    <section className="section border-b border-border/40">
      <div className="container-prose">
        <p className="eyebrow">Le comparatif final</p>
        <h2 className="display-2 mt-4 max-w-3xl">
          Six enveloppes, sept critères — le tableau à garder sous la main
        </h2>
        <p className="lead mt-5 max-w-2xl">
          Cliquez sur une enveloppe pour la mettre en surbrillance. Fiscalité en vigueur en
          juillet 2026, vérifiée sur les fiches officielles citées plus haut — elle peut évoluer
          à chaque loi de finances.
        </p>

        <div className="mt-8 mb-5 flex flex-wrap items-center gap-2">
          {COLONNES.map(({ cle, nom }) => (
            <button
              key={cle}
              type="button"
              onClick={() => setSurbrillance(surbrillance === cle ? null : cle)}
              className="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors"
              style={
                surbrillance === cle
                  ? {
                      borderColor: "var(--grenat)",
                      background: "color-mix(in oklch, var(--grenat) 8%, transparent)",
                      color: "var(--grenat)",
                    }
                  : { borderColor: "var(--border)", background: "var(--card)" }
              }
            >
              {nom}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[1080px] text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3.5 text-left font-semibold text-foreground">Critère</th>
                {COLONNES.map(({ cle, nom }) => (
                  <th
                    key={cle}
                    className="p-3.5 text-left font-semibold text-foreground"
                    style={
                      surbrillance === cle
                        ? { background: "color-mix(in oklch, var(--grenat) 8%, transparent)" }
                        : undefined
                    }
                  >
                    {nom}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LIGNES.map((l) => (
                <tr key={l.critere} className="border-t border-border align-top">
                  <td className="p-3.5 font-medium text-foreground">{l.critere}</td>
                  {COLONNES.map(({ cle }) => (
                    <CelluleTd key={cle} c={l[cle]} hl={surbrillance === cle} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
          * Cas de déblocage anticipé prévus par la loi (accidents de la vie ; achat de la
          résidence principale pour le PER, hors droits issus de versements obligatoires ;
          mariage, naissance ou rupture de contrat de travail, entre autres, pour le PEE).
          IR = impôt sur le revenu, PS = prélèvements sociaux, TMI = tranche marginale
          d'imposition. Ce tableau est informatif et ne tient pas compte de votre situation
          personnelle.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────── Page ────────────────────────────────── */

function EnveloppesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Enveloppes fiscales"
        title={
          <>
            L'enveloppe ne rend pas votre épargne éthique.{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              Elle décide de ce qu'il en reste.
            </span>
          </>
        }
        lead="Assurance vie, PER, PEA, compte-titres : le choix du contenant ne change pas ce que votre argent finance — il change la fiscalité, la disponibilité de vos fonds et la profondeur de l'offre responsable à laquelle vous accédez. Comparatif complet, chiffres vérifiés."
      >
        <span className="badge-verifie">
          <BadgeCheck size={13} aria-hidden /> Chiffres fiscaux vérifiés en juillet 2026 —
          service-public.gouv.fr, impots.gouv.fr, Légifrance
        </span>
      </PageHero>

      {/* Le principe : contenant vs contenu */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">Le principe</p>
              <h2 className="display-2 mt-4">
                L'erreur la plus fréquente : confondre l'enveloppe et le placement
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                L'enveloppe est le <strong className="text-foreground">contenant</strong> fiscal
                et juridique. Le placement est le{" "}
                <strong className="text-foreground">contenu</strong> — les fonds, ETF, actions ou
                obligations que vous y logez. Aucune enveloppe n'est « responsable » en soi : une
                assurance vie peut être remplie de fonds labellisés ISR rigoureusement vérifiés,
                et un compte-titres d'actions pétrolières. C'est le contenu qui porte vos valeurs.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Mais le contenant n'est pas neutre pour autant : il détermine{" "}
                <em>combien il vous restera</em> après impôt, <em>quand</em> vous pourrez
                récupérer votre argent, et surtout — c'est le point le moins connu —{" "}
                <em>quels supports responsables vous pourrez réellement y loger</em>. Un PEA ne
                peut pas contenir d'obligations vertes ; un contrat d'assurance vie ne référence
                que les fonds choisis par l'assureur ; un compte-titres accepte à peu près tout.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La bonne séquence est donc toujours la même :{" "}
                <strong className="text-foreground">
                  d'abord votre objectif et votre allocation, ensuite l'enveloppe qui les porte le
                  mieux.
                </strong>{" "}
                Jamais l'inverse.
              </p>
            </div>
            <div className="md:col-span-5 space-y-4">
              {[
                {
                  n: "1",
                  q: "Quand aurez-vous besoin de cet argent ?",
                  r: "L'horizon décide de la disponibilité exigée : un PER bloque vos fonds jusqu'à la retraite, un PEA se pénalise avant 5 ans, une assurance vie reste disponible à tout moment.",
                },
                {
                  n: "2",
                  q: "Quelle est votre tranche marginale d'imposition ?",
                  r: "La TMI départage le PER (déduction immédiate) et les enveloppes taxées à la sortie. À TMI faible, la déduction du PER perd l'essentiel de son intérêt.",
                },
                {
                  n: "3",
                  q: "L'offre ISR de l'enveloppe couvre-t-elle votre allocation ?",
                  r: "C'est le critère oublié : le même objectif peut être finançable en fonds labellisés dans un contrat… et pas dans un autre. Vérifiez la liste des supports avant d'ouvrir.",
                },
              ].map((e) => (
                <div key={e.n} className="card-paper">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-lg"
                      style={{ background: "var(--accent)", color: "var(--grenat)" }}
                    >
                      {e.n}
                    </span>
                    <div>
                      <h3 className="font-display text-lg leading-snug">{e.q}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.r}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Encadré LFSS 2026 */}
          <div
            className="mt-12 rounded-3xl border p-7 md:p-9"
            style={{
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
            }}
          >
            <p className="eyebrow" style={{ color: "var(--grenat)" }}>
              Ce qui a changé au 1ᵉʳ janvier 2026
            </p>
            <h3 className="display-3 mt-3 font-display">
              La « flat tax » est passée de 30 % à 31,4 % — mais pas pour tout le monde
            </h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              La loi de financement de la sécurité sociale pour 2026 a relevé la CSG sur la
              plupart des revenus du capital : les prélèvements sociaux passent de 17,2 % à
              18,6 % sur les dividendes, intérêts et plus-values de cession de titres. Le
              prélèvement forfaitaire unique global atteint donc{" "}
              <strong>31,4 % (12,8 % d'impôt sur le revenu + 18,6 % de prélèvements sociaux)</strong>{" "}
              sur un compte-titres. L'assurance vie et le contrat de capitalisation conservent des
              prélèvements sociaux à 17,2 %, et les livrets réglementés restent totalement
              exonérés. Conséquence directe : l'écart de fiscalité entre le compte-titres et les
              enveloppes capitalisantes s'est encore creusé. Les chiffres détaillés, enveloppe par
              enveloppe, sont sourcés ci-dessous.
            </p>
          </div>
        </div>
      </section>

      {/* Les 4 enveloppes en détail */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <p className="eyebrow">Le détail</p>
          <h2 className="display-2 mt-4 max-w-3xl">
            Les quatre enveloppes d'investissement, sous l'angle responsable
          </h2>

          <div className="mt-12 space-y-8">
            {/* ─── Assurance vie ─── */}
            <article className="card-paper p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "var(--accent)", color: "var(--grenat)" }}
                >
                  <ShieldCheck size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--grenat)" }}>
                    L'enveloppe par défaut — et souvent la bonne
                  </p>
                  <h3 className="display-3 font-display">Assurance vie</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-foreground">Comment elle fonctionne</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Un contrat d'assurance à versements libres, combinant un fonds en euros
                    (capital garanti par l'assureur) et des unités de compte — les « UC », c'est-à-dire
                    les supports d'investissement du contrat, non garantis en capital. Contrairement
                    à une idée reçue tenace, l'argent n'est <em>pas</em> bloqué 8 ans : un rachat est
                    possible à tout moment. C'est la fiscalité qui s'améliore à 8 ans, pas la
                    disponibilité.
                  </p>
                  <h4 className="mt-5 font-semibold text-foreground">Fiscalité</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Avant 8 ans, les gains rachetés supportent 12,8 % d'impôt sur le revenu +
                    17,2 % de prélèvements sociaux. Après 8 ans : abattement annuel de 4 600 €
                    de gains (9 200 € pour un couple), puis taux réduit de 7,5 % + 17,2 % jusqu'à
                    150 000 € de versements tous contrats confondus (12,8 % au-delà) — détail sur{" "}
                    <a
                      href="https://www.service-public.gouv.fr/particuliers/vosdroits/F22414"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:text-[var(--grenat)] transition-colors"
                    >
                      la fiche officielle service-public.gouv.fr
                    </a>
                    . À la transmission : jusqu'à 152 500 € par bénéficiaire hors droits de
                    succession pour les primes versées avant 70 ans, abattement global de
                    30 500 € au-delà (
                    <a
                      href="https://www.impots.gouv.fr/particulier/questions/je-suis-beneficiaire-dune-assurance-vie-comment-la-declarer"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:text-[var(--grenat)] transition-colors"
                    >
                      impots.gouv.fr
                    </a>
                    ). Et depuis 2026, un avantage relatif de plus : l'assurance vie a conservé ses
                    prélèvements sociaux à 17,2 % quand le compte-titres passait à 18,6 %.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">L'offre ISR dans l'enveloppe</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Depuis la loi PACTE, tout contrat multisupport doit référencer des UC
                    labellisées : au moins une UC labellisée ISR, une labellisée Greenfin
                    (transition écologique) et une solidaire type Finansol depuis 2022 (
                    <a
                      href="https://www.lelabelisr.fr/loi-pacte-lassurance-vie-en-soutien-de-linvestissement-socialement-responsable/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:text-[var(--grenat)] transition-colors"
                    >
                      lelabelisr.fr
                    </a>
                    ). Attention au raccourci : trois UC labellisées ne font pas un contrat
                    responsable. La vraie question est la <em>profondeur</em> — combien de supports
                    labellisés, dans quelles classes d'actifs, à quels frais, et ce que contient
                    réellement le fonds en euros, dont la politique d'investissement reste souvent
                    peu transparente. C'est précisément ce que nous vérifions contrat par contrat.
                  </p>
                  <h4 className="mt-5 font-semibold text-foreground">Pour qui</h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <Check size={14} className="mt-1 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                      Le socle de toute épargne de moyen/long terme (horizon 8 ans et plus)
                    </li>
                    <li className="flex gap-2">
                      <Check size={14} className="mt-1 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                      Celles et ceux qui veulent préparer une transmission
                    </li>
                    <li className="flex gap-2">
                      <Check size={14} className="mt-1 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                      Les débutants : disponibilité totale, gestion déléguée possible
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm font-medium">
                <Link
                  to="/articles/$slug"
                  params={{ slug: "assurance-vie-isr-guide-2026" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  Choisir une assurance vie ISR en 2026 <ArrowRight size={14} />
                </Link>
                <Link
                  to="/articles/$slug"
                  params={{ slug: "assurance-vie-luxembourgeoise-investissement-responsable" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  Le cas de l'assurance vie luxembourgeoise <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* ─── PER ─── */}
            <article className="card-paper p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "var(--accent)", color: "var(--grenat)" }}
                >
                  <PiggyBank size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--grenat)" }}>
                    La déduction fiscale — à manier selon votre TMI
                  </p>
                  <h3 className="display-3 font-display">PER — Plan d'épargne retraite</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-foreground">Comment il fonctionne</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Une enveloppe dédiée à la retraite : les sommes sont bloquées jusqu'à la
                    liquidation de vos droits, hors accidents de la vie et achat de la résidence
                    principale. Sortie possible en capital, en rente, ou les deux. Comme
                    l'assurance vie, il se remplit d'unités de compte — souvent via une « gestion
                    pilotée » par défaut, dont il faut regarder ce qu'elle contient vraiment.
                  </p>
                  <h4 className="mt-5 font-semibold text-foreground">Fiscalité</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Les versements volontaires sont déductibles du revenu imposable, dans la
                    limite de 10 % des revenus professionnels — plafonnée à 37 680 € et avec un
                    plancher de 4 710 € en 2026 (
                    <a
                      href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:text-[var(--grenat)] transition-colors"
                    >
                      service-public.gouv.fr
                    </a>
                    ). L'économie immédiate vaut votre TMI : 1 000 € versés à TMI 30 % réduisent
                    votre impôt de 300 €. En contrepartie, à la sortie, les versements déduits
                    sont imposés au barème et les gains à la flat tax. Le PER est donc un{" "}
                    <em>différé</em> d'impôt, pas un cadeau : son intérêt réel vient du
                    différentiel entre votre TMI d'actif et celle, souvent plus basse, de votre
                    retraite.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">L'offre ISR dans l'enveloppe</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Très inégale d'un contrat à l'autre : certains PER référencent une gamme
                    étoffée de fonds labellisés ISR ou Greenfin, d'autres presque rien. Deux
                    vérifications avant d'ouvrir : la liste des supports labellisés réellement
                    accessibles, et la composition de la gestion pilotée par défaut — c'est elle
                    qui recevra vos versements si vous ne choisissez rien, et rien ne garantit
                    qu'elle soit investie en fonds responsables. Un PER ouvert chez le mauvais
                    assureur ne deviendra jamais un PER responsable, quels que soient vos vœux.
                  </p>
                  <h4 className="mt-5 font-semibold text-foreground">Pour qui</h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <Check size={14} className="mt-1 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                      Contribuables à TMI 30 %, 41 % ou 45 % qui préparent leur retraite
                    </li>
                    <li className="flex gap-2">
                      <Check size={14} className="mt-1 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                      Indépendants et dirigeants cherchant à lisser une fiscalité élevée
                    </li>
                    <li className="flex gap-2">
                      <TriangleAlert size={14} className="mt-1 shrink-0 opacity-60" aria-hidden />À
                      éviter comme unique enveloppe : l'argent est immobilisé
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm font-medium">
                <Link
                  to="/articles/$slug"
                  params={{ slug: "per-vs-assurance-vie-isr" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  PER ou assurance vie pour investir responsable ? <ArrowRight size={14} />
                </Link>
                <Link
                  to="/articles/$slug"
                  params={{ slug: "per-ethique-optimiser-retraite" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  Optimiser sa retraite avec un PER éthique <ArrowRight size={14} />
                </Link>
                <Link
                  to="/outils/per-isr"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  <Calculator size={14} /> Outil : votre économie d'impôt PER
                </Link>
              </div>
            </article>

            {/* ─── PEA ─── */}
            <article className="card-paper p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "var(--accent)", color: "var(--grenat)" }}
                >
                  <LineChart size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--grenat)" }}>
                    La niche fiscale actions — avec un angle mort
                  </p>
                  <h3 className="display-3 font-display">PEA — Plan d'épargne en actions</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-foreground">Comment il fonctionne</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Une enveloppe boursière plafonnée à 150 000 € de versements (jusqu'à
                    225 000 € au total en le combinant avec un PEA-PME), réservée aux actions
                    d'entreprises de l'UE et de l'Espace économique européen et aux fonds investis
                    à 75 % minimum dans ces actions. Tout retrait avant 5 ans entraîne, sauf
                    exceptions, la clôture du plan ; après 5 ans, les retraits sont libres.
                  </p>
                  <h4 className="mt-5 font-semibold text-foreground">Fiscalité</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    La plus douce des quatre sur les plus-values : après 5 ans, les gains sont
                    exonérés d'impôt sur le revenu — seuls les prélèvements sociaux restent dus (
                    <a
                      href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2385"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:text-[var(--grenat)] transition-colors"
                    >
                      service-public.gouv.fr
                    </a>
                    ). Avant 5 ans, les gains d'un retrait sont imposés à 12,8 % en plus des
                    prélèvements sociaux. Tant que vous ne retirez pas, aucun impôt : arbitrages et
                    dividendes réinvestis capitalisent à l'abri.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">L'offre ISR dans l'enveloppe</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Le quota de 75 % d'actions européennes dessine un angle mort : pas de fonds
                    actions monde, pas d'obligations vertes, pas de fonds solidaires classiques
                    dans un PEA. En revanche, l'Europe est le marché le plus fourni au monde en
                    fonds actions labellisés ISR : des fonds et ETF actions européennes
                    responsables éligibles au PEA existent bel et bien — l'éligibilité est
                    indiquée dans le DIC, le document d'informations clés remis avant toute
                    souscription. Le PEA peut aussi loger des actions en direct, ce qui ouvre la
                    voie de l'engagement actionnarial : voter en assemblée générale avec ses
                    titres.
                  </p>
                  <h4 className="mt-5 font-semibold text-foreground">Pour qui</h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <Check size={14} className="mt-1 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                      Investisseur long terme acceptant une poche 100 % actions européennes
                    </li>
                    <li className="flex gap-2">
                      <Check size={14} className="mt-1 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                      En complément d'une assurance vie, jamais à la place
                    </li>
                    <li className="flex gap-2">
                      <TriangleAlert size={14} className="mt-1 shrink-0 opacity-60" aria-hidden />
                      Inadapté si votre allocation cible est mondiale ou obligataire
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm font-medium">
                <Link
                  to="/articles/$slug"
                  params={{ slug: "etf-isr-debutants" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  Comment choisir un ETF ISR quand on débute <ArrowRight size={14} />
                </Link>
                <Link
                  to="/articles/$slug"
                  params={{ slug: "engagement-actionnarial-vs-exclusion" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  Exclure ou engager : ce qui change vraiment les choses <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* ─── CTO ─── */}
            <article className="card-paper p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "var(--accent)", color: "var(--grenat)" }}
                >
                  <Layers size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--grenat)" }}>
                    La liberté totale — fiscalité brute
                  </p>
                  <h3 className="display-3 font-display">Compte-titres ordinaire (CTO)</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-foreground">Comment il fonctionne</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Le compte d'investissement sans règles : aucun plafond, aucun blocage, aucune
                    restriction géographique ou de classe d'actifs. Il s'ouvre auprès d'une banque
                    ou d'un courtier et donne accès à l'intégralité des marchés cotés.
                  </p>
                  <h4 className="mt-5 font-semibold text-foreground">Fiscalité</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    La moins favorable des quatre : depuis le 1ᵉʳ janvier 2026, dividendes,
                    intérêts et plus-values supportent le prélèvement forfaitaire unique à{" "}
                    <strong>31,4 %</strong> (12,8 % d'impôt sur le revenu + 18,6 % de prélèvements
                    sociaux, relevés par la loi de financement de la sécurité sociale pour 2026),
                    avec option possible pour le barème progressif si elle vous est plus
                    favorable. Surtout, le CTO ne capitalise pas à l'abri : chaque vente en
                    plus-value et chaque dividende déclenche l'impôt au fil de l'eau, là où
                    l'assurance vie et le PEA n'imposent qu'au retrait.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">L'offre ISR dans l'enveloppe</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    La plus profonde, sans comparaison : tous les ETF ISR mondiaux, les fonds
                    classés Article 9 au sens du règlement européen SFDR (ceux qui affichent un
                    objectif d'investissement durable), les obligations vertes en direct, les
                    actions du monde entier pour l'engagement actionnarial. Si un support
                    responsable existe sur un marché coté, il est logeable dans un CTO. C'est
                    l'enveloppe de la précision — au prix de la fiscalité et d'une exigence :
                    savoir vérifier soi-même ce que contiennent les fonds, car aucun assureur ne
                    fait le premier tri à votre place.
                  </p>
                  <h4 className="mt-5 font-semibold text-foreground">Pour qui</h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <Check size={14} className="mt-1 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                      Investisseur autonome voulant une allocation mondiale fine
                    </li>
                    <li className="flex gap-2">
                      <Check size={14} className="mt-1 shrink-0" style={{ color: "var(--grenat)" }} aria-hidden />
                      Complément une fois PEA plafonné ou pour des supports introuvables ailleurs
                    </li>
                    <li className="flex gap-2">
                      <TriangleAlert size={14} className="mt-1 shrink-0 opacity-60" aria-hidden />
                      Peu adapté à la capitalisation passive de long terme : la fiscalité mord
                      chaque année
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm font-medium">
                <Link
                  to="/articles/$slug"
                  params={{ slug: "obligations-vertes-vs-obligations-classiques" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  Green bonds : quelles différences réelles ? <ArrowRight size={14} />
                </Link>
                <Link
                  to="/articles/$slug"
                  params={{ slug: "quelle-enveloppe-investissement-ethique" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  L'article complet : quelle enveloppe choisir ? <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Livrets réglementés + épargne salariale */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <p className="eyebrow">Les oubliés du comparatif</p>
          <h2 className="display-2 mt-4 max-w-3xl">
            Livrets réglementés et épargne salariale : ce qu'on ne vous dit pas
          </h2>
          <p className="lead mt-5 max-w-2xl">
            Deux « enveloppes » que presque tous les Français détiennent déjà — et dont la
            dimension responsable est soit surestimée, soit totalement ignorée.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Livrets */}
            <article className="card-paper p-8">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--accent)", color: "var(--grenat)" }}
              >
                <Landmark size={20} aria-hidden />
              </span>
              <h3 className="display-3 mt-4 font-display">Livret A et LDDS</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Plafonnés à 22 950 € pour le Livret A et 12 000 € pour le LDDS, intérêts
                totalement exonérés d'impôt et de prélèvements sociaux, argent disponible
                immédiatement, rémunération fixée par l'État (
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2365"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[var(--grenat)] transition-colors"
                >
                  service-public.gouv.fr
                </a>
                ). C'est l'épargne de précaution idéale — et elle doit exister avant toute
                enveloppe d'investissement.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Côté « responsable », soyons honnêtes sur ce que ces livrets font — et ne font
                pas. Une part importante des dépôts est centralisée à la Caisse des dépôts, qui
                finance notamment le logement social ; le reste doit être employé par votre banque
                au financement des PME et, pour le LDDS, de l'économie sociale et solidaire et de
                la transition énergétique (
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2368"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[var(--grenat)] transition-colors"
                >
                  fiche LDDS
                </a>
                ). Le LDDS permet en outre de donner : votre banque doit vous proposer chaque
                année d'en reverser une partie à des entreprises de l'économie sociale et
                solidaire de votre choix, sur une liste qu'elle établit.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                La limite : ce fléchage est <em>partiel, agrégé et non choisi</em>. Vous ne
                sélectionnez ni les projets ni les critères, et aucun label ne vient l'auditer.
                Un livret réglementé est une excellente épargne de précaution au fléchage
                partiellement utile — ce n'est pas un outil d'investissement responsable au sens
                où vous décideriez de ce que vous financez.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4 text-sm font-medium">
                <Link
                  to="/articles/$slug"
                  params={{ slug: "livrets-epargne-solidaire-alternative-livret-a" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  L'épargne solidaire face au Livret A <ArrowRight size={14} />
                </Link>
                <Link
                  to="/articles/$slug"
                  params={{ slug: "label-finansol-finance-solidaire" }}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--grenat)] transition-colors"
                >
                  Ce que garantit le label Finansol <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Épargne salariale */}
            <article className="card-paper p-8">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--accent)", color: "var(--grenat)" }}
              >
                <Briefcase size={20} aria-hidden />
              </span>
              <h3 className="display-3 mt-4 font-display">Épargne salariale — PEE et PER collectif</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                C'est souvent le premier contact des Français avec l'ISR — sans le savoir. La loi
                impose en effet que tout plan d'épargne entreprise propose un fonds solidaire
                (les fonds dits « 90-10 », qui investissent 5 à 10 % de leur actif dans des
                entreprises solidaires agréées) et, depuis le 1ᵉʳ juillet 2024, au moins un fonds
                labellisé au titre de l'investissement socialement responsable ou du financement
                de la transition énergétique (
                <a
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038837087"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[var(--grenat)] transition-colors"
                >
                  article L. 3332-17 du code du travail
                </a>
                ). Si vous avez un PEE, vous avez probablement des fonds labellisés à portée de
                clic — regardez la liste de vos supports.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Fiscalement, l'épargne salariale est redoutable : l'abondement de l'employeur est
                un rendement immédiat qu'aucun placement ne peut égaler, l'intéressement et la
                participation investis dans le plan sont exonérés d'impôt sur le revenu dans les
                limites légales, et les gains sont exonérés d'IR à l'issue du blocage de 5 ans du
                PEE — prélèvements sociaux dus (
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2141"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[var(--grenat)] transition-colors"
                >
                  service-public.gouv.fr
                </a>
                ). Le PER collectif, successeur du PERCO depuis la loi PACTE, suit la logique
                retraite du PER individuel.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                La limite, là aussi dite franchement : la gamme de fonds est choisie par votre
                employeur, pas par vous. Vos leviers : arbitrer votre encours vers les fonds
                labellisés ou solidaires existants, et demander — via le CSE — l'enrichissement de
                la gamme. C'est gratuit, et c'est souvent le geste ISR le plus simple à faire
                cette année.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Tableau comparatif final interactif */}
      <ComparatifFinal />

      {/* Outils et suite du parcours */}
      <section className="section border-b border-border/40">
        <div className="container-prose">
          <div className="text-center mb-12">
            <p className="eyebrow justify-center">Faites vos propres calculs</p>
            <h2 className="display-2 mt-4">Passez de la théorie à votre cas</h2>
            <p className="lead mt-5 max-w-2xl mx-auto">
              Nos outils gratuits donnent des pistes chiffrées à partir de vos propres
              hypothèses — la lecture complète de votre situation se fait ensuite, de vive voix.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <Link to="/outils/comparateur-enveloppes" className="card-paper group">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
              >
                <Scale size={20} aria-hidden />
              </span>
              <h3 className="font-display text-xl mt-4">Comparateur d'enveloppes</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Assurance vie, PER, PEA, CTO : comparez le capital net d'impôt selon votre
                horizon, votre TMI et vos versements.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-[var(--grenat)] transition-colors">
                Ouvrir l'outil <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/outils/simulateur" className="card-paper group">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
              >
                <Calculator size={20} aria-hidden />
              </span>
              <h3 className="font-display text-xl mt-4">Projection d'épargne</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Votre épargne an par an, frais réels et fiscalité complète de l'assurance vie et
                du PER incluses.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-[var(--grenat)] transition-colors">
                Ouvrir l'outil <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/outils/per-isr" className="card-paper group">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
              >
                <PiggyBank size={20} aria-hidden />
              </span>
              <h3 className="font-display text-xl mt-4">PER ISR : économie d'impôt</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Mesurez ce qu'un versement PER vous fait économiser selon votre TMI — et ce que
                cela implique à la sortie.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-[var(--grenat)] transition-colors">
                Ouvrir l'outil <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-7">
            <p className="text-sm font-semibold text-foreground">Pour aller plus loin</p>
            <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/articles/$slug"
                  params={{ slug: "quelle-enveloppe-investissement-ethique" }}
                  className="hover:text-[var(--grenat)] transition-colors"
                >
                  → Quelle enveloppe choisir pour investir éthique ? — l'article de fond qui
                  prolonge cette page
                </Link>
              </li>
              <li>
                <Link
                  to="/articles/$slug"
                  params={{ slug: "preparer-retraite-epargne-alignee-valeurs" }}
                  className="hover:text-[var(--grenat)] transition-colors"
                >
                  → Préparer sa retraite avec une épargne alignée sur ses valeurs
                </Link>
              </li>
              <li>
                <Link to="/placements" className="hover:text-[var(--grenat)] transition-colors">
                  → Les placements responsables : le contenu à loger dans ces enveloppes
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="hover:text-[var(--grenat)] transition-colors">
                  → Notre grille de rémunération, publiée en clair, enveloppe par enveloppe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Vos contrats existants"
        title="Vos enveloppes actuelles portent-elles vraiment vos valeurs ?"
        text="Un premier échange offert de 30 minutes pour passer en revue vos contrats — frais, fiscalité, supports réellement détenus — et repartir avec des pistes concrètes, que vous décidiez ensuite de travailler avec nous ou non."
      />
    </SiteLayout>
  );
}
