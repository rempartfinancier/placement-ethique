// Trajectoire de la projection — recharts, couleurs sur les tokens du
// thème (or/vert forêt/terracotta). Aucun calcul ici : le composant
// affiche les lignes annuelles produites par le moteur.

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { LigneAnnuelle } from "@/lib/simulateur-placements/engine";
import { eur } from "@/components/simulators/format";

const COULEUR_BRUT = "oklch(0.72 0.12 80)"; // or
const COULEUR_VERSE = "oklch(0.55 0.02 80)"; // gris chaud
const COULEUR_NET = "oklch(0.32 0.06 160)"; // vert forêt
const COULEUR_REEL = "oklch(0.62 0.13 38)"; // terracotta

function formatCompact(n: number): string {
  if (Math.abs(n) >= 1_000_000)
    return `${(n / 1_000_000).toLocaleString("fr-FR", { maximumFractionDigits: 1 })} M€`;
  if (Math.abs(n) >= 1_000) return `${Math.round(n / 1_000).toLocaleString("fr-FR")} k€`;
  return `${Math.round(n).toLocaleString("fr-FR")} €`;
}

type Props = {
  lignes: LigneAnnuelle[];
  /** Affiche la courbe « euros constants » si l'inflation est activée. */
  inflationActivee: boolean;
  /** Masque la courbe nette pour l'épargne libre (identique au brut). */
  fiscaliteActivee: boolean;
};

export function GraphiqueProjection({ lignes, inflationActivee, fiscaliteActivee }: Props) {
  const donnees = lignes.map((l) => ({
    annee: l.annee,
    brut: l.capitalFinAnnee,
    verse: l.cumulVerseBrut,
    net: l.capitalNetSiRachat,
    reel: l.pouvoirAchatReel,
  }));

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={donnees} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 80)" />
          <XAxis dataKey="annee" tick={{ fontSize: 11 }} tickFormatter={(a: number) => `${a}`} />
          <YAxis tick={{ fontSize: 11 }} tickFormatter={formatCompact} width={52} />
          <Tooltip
            formatter={(valeur, nom) => [valeur == null ? "—" : eur(Number(valeur)), nom]}
            labelFormatter={(annee) => `Année ${annee}`}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Area
            type="monotone"
            dataKey="brut"
            name="Capital brut"
            stroke={COULEUR_BRUT}
            fill={COULEUR_BRUT}
            fillOpacity={0.15}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="verse"
            name="Versements cumulés"
            stroke={COULEUR_VERSE}
            strokeDasharray="4 4"
            strokeWidth={1.5}
            dot={false}
          />
          {fiscaliteActivee && (
            <Line
              type="monotone"
              dataKey="net"
              name="Net si rachat"
              stroke={COULEUR_NET}
              strokeWidth={2}
              dot={false}
            />
          )}
          {inflationActivee && (
            <Line
              type="monotone"
              dataKey="reel"
              name="Euros constants"
              stroke={COULEUR_REEL}
              strokeDasharray="2 3"
              strokeWidth={1.5}
              dot={false}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
