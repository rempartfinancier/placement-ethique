// ============================================================
// Fiche d'allocation d'un portefeuille type — rendu façon Quantalys :
// camembert de répartition, jauge SRI, indicateurs de risque, tableau
// des supports, historiques de performance. AUCUNE donnée de fonds en
// dur ici : tout vient de src/lib/simulateur-placements/{profils,fonds}.
//
// RÈGLE PRODUIT : cette fiche est TOUJOURS un « exemple de portefeuille
// type » (AVERTISSEMENT_PROFIL_TYPE repris tel quel), jamais une
// allocation personnalisée — et le DIC de chaque support prime.
// ============================================================

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { DONNEES_FONDS_MAJ, fondsParIsin } from "@/lib/simulateur-placements/fonds";
import {
  AVERTISSEMENT_PROFIL_TYPE,
  poidsTotalPct,
  type ProfilType,
} from "@/lib/simulateur-placements/profils";
import { pct, pctSigne } from "@/components/simulators/format";

// Palette du thème (or, vert forêt, terracotta, puis déclinaisons).
const COULEURS_PARTS = [
  "oklch(0.72 0.12 80)",
  "oklch(0.32 0.06 160)",
  "oklch(0.62 0.13 38)",
  "oklch(0.55 0.08 160)",
  "oklch(0.8 0.08 82)",
  "oklch(0.45 0.05 38)",
];

export function FicheAllocation({ profil }: { profil: ProfilType }) {
  if (!profil.lignes) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8">
        <h3 className="font-display text-2xl text-foreground">{profil.libelle}</h3>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{profil.description}</p>
        <p className="mt-5 rounded-xl border border-[oklch(0.8_0.08_82)] bg-[oklch(0.97_0.025_85)] p-4 text-sm text-foreground leading-relaxed">
          La composition détaillée de ce profil est en cours de validation par le cabinet. Elle vous
          sera présentée en rendez-vous, avec le document d'informations clés (DIC) de chaque
          support.
        </p>
      </div>
    );
  }

  const lignes = profil.lignes.map((l) => ({ ...l, fonds: fondsParIsin(l.isin) }));
  const donneesCamembert = lignes.map((l) => ({
    name: l.fonds?.nom ?? l.isin,
    value: l.poidsPct,
  }));
  const total = poidsTotalPct(profil);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl text-foreground">
            {profil.libelle} — exemple de portefeuille type
          </h3>
          {profil.indicateurs && <JaugeSri sri={profil.indicateurs.sri} />}
        </div>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{profil.description}</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donneesCamembert}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={2}
                  stroke="none"
                >
                  {donneesCamembert.map((_, i) => (
                    <Cell key={i} fill={COULEURS_PARTS[i % COULEURS_PARTS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => `${pct(Number(v))} %`} />
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  wrapperStyle={{ fontSize: 11, maxWidth: 180 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {profil.indicateurs && (
            <dl className="grid grid-cols-2 gap-4">
              <Indicateur
                libelle="Volatilité 3 ans"
                valeur={`${pct(profil.indicateurs.volatilite3AnsPct, 2)} %`}
              />
              <Indicateur
                libelle="Perte max. 3 ans"
                valeur={`−${pct(profil.indicateurs.perteMax3AnsPct, 2)} %`}
              />
              <Indicateur
                libelle="Risque de baisse (DSR) 3 ans"
                valeur={`${pct(profil.indicateurs.dsr3AnsPct, 2)} %`}
              />
              <Indicateur
                libelle="Indicateur de risque (SRI)"
                valeur={`${profil.indicateurs.sri} / 7`}
              />
            </dl>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs text-muted-foreground">
                <th className="px-4 py-2.5 font-medium">Support</th>
                <th className="px-4 py-2.5 font-medium">ISIN</th>
                <th className="px-4 py-2.5 font-medium">Catégorie</th>
                <th className="px-4 py-2.5 font-medium text-right">Risque (SRI)</th>
                <th className="px-4 py-2.5 font-medium text-right">Poids</th>
                <th className="px-4 py-2.5 font-medium text-right">VL</th>
              </tr>
            </thead>
            <tbody>
              {lignes.map((l) => (
                <tr key={l.isin} className="border-b border-border/60 last:border-b-0 align-top">
                  <td className="px-4 py-2.5 text-foreground">
                    {l.fonds?.nom ?? "Support à documenter"}
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {l.fonds?.conformite}
                    </p>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground font-mono text-xs">{l.isin}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{l.fonds?.categorie ?? "—"}</td>
                  <td className="px-4 py-2.5 text-right text-muted-foreground">
                    {l.fonds && l.fonds.sri !== null ? `${l.fonds.sri}/7` : "—"}
                  </td>
                  <td className="px-4 py-2.5 text-right font-medium text-foreground">
                    {pct(l.poidsPct)} %
                  </td>
                  <td className="px-4 py-2.5 text-right text-muted-foreground">
                    {l.fonds?.vl !== null && l.fonds?.vl !== undefined
                      ? `${pct(l.fonds.vl, 2)}${l.fonds.devise ? ` ${l.fonds.devise}` : ""}`
                      : "sur demande"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="px-4 py-2.5 text-xs text-muted-foreground border-t border-border/60">
          {total !== null && Math.round(total) !== 100
            ? `⚠ Somme des poids : ${pct(total)} % — allocation à revalider par le cabinet. `
            : ""}
          Le document d'informations clés (DIC) de chaque support prime sur les informations de ce
          tableau — disponible sur demande auprès du cabinet.
        </p>
      </div>

      {(profil.perfCumulees || profil.perfCalendaires) && (
        <div className="grid sm:grid-cols-2 gap-5">
          {profil.perfCumulees && (
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow">Performances cumulées (backtest)</p>
              <dl className="mt-4 space-y-2.5 text-sm">
                <LignePerf libelle="1 mois" valeur={profil.perfCumulees.unMoisPct} />
                <LignePerf libelle="1 an" valeur={profil.perfCumulees.unAnPct} />
                <LignePerf libelle="3 ans" valeur={profil.perfCumulees.troisAnsPct} />
                <LignePerf libelle="5 ans" valeur={profil.perfCumulees.cinqAnsPct} />
                <LignePerf
                  libelle="Depuis création"
                  valeur={profil.perfCumulees.depuisCreationPct}
                />
              </dl>
            </div>
          )}
          {profil.perfCalendaires && (
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow">Performances calendaires (backtest)</p>
              <dl className="mt-4 space-y-2.5 text-sm">
                <LignePerf libelle="Année en cours" valeur={profil.perfCalendaires.ytdPct} />
                <LignePerf libelle="2024" valeur={profil.perfCalendaires.a2024Pct} />
                <LignePerf libelle="2023" valeur={profil.perfCalendaires.a2023Pct} />
                <LignePerf libelle="2022" valeur={profil.perfCalendaires.a2022Pct} />
              </dl>
            </div>
          )}
        </div>
      )}

      <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
        {AVERTISSEMENT_PROFIL_TYPE} Données : {DONNEES_FONDS_MAJ}.
      </p>
    </div>
  );
}

function JaugeSri({ sri }: { sri: number }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Indicateur de risque ${sri} sur 7`}>
      <span className="text-xs text-muted-foreground">Risque</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <span
            key={n}
            className={`flex h-6 w-6 items-center justify-center rounded text-xs font-medium ${
              n === sri
                ? "bg-[var(--gold)] text-white"
                : "bg-[oklch(0.94_0.01_80)] text-muted-foreground"
            }`}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function Indicateur({ libelle, valeur }: { libelle: string; valeur: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <dt className="text-xs text-muted-foreground">{libelle}</dt>
      <dd className="font-display text-xl text-foreground mt-1">{valeur}</dd>
    </div>
  );
}

function LignePerf({ libelle, valeur }: { libelle: string; valeur: number | null }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 pb-2 last:border-b-0">
      <dt className="text-muted-foreground">{libelle}</dt>
      <dd
        className={`font-medium ${
          valeur !== null && valeur < 0 ? "text-[oklch(0.55_0.15_25)]" : "text-foreground"
        }`}
      >
        {valeur === null ? "—" : pctSigne(valeur)}
      </dd>
    </div>
  );
}
