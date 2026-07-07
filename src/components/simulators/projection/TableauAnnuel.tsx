// Tableau année par année façon BIG : versements, produits, PS fonds
// euros, capital en fin d'année, net si rachat. Aucun calcul ici.

import type { LigneAnnuelle } from "@/lib/simulateur-placements/engine";
import { eur } from "@/components/simulators/format";

type Props = {
  lignes: LigneAnnuelle[];
  /** Colonne PS fonds euros affichée seulement si le contrat en prélève. */
  avecPsFondsEuros: boolean;
  /** Colonne « net si rachat » masquée pour l'épargne libre. */
  fiscaliteActivee: boolean;
};

export function TableauAnnuel({ lignes, avecPsFondsEuros, fiscaliteActivee }: Props) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-card">
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="px-3 py-2.5 font-medium">Année</th>
              <th className="px-3 py-2.5 font-medium text-right">Versements</th>
              <th className="px-3 py-2.5 font-medium text-right">Produits</th>
              {avecPsFondsEuros && (
                <th className="px-3 py-2.5 font-medium text-right">PS fonds €</th>
              )}
              <th className="px-3 py-2.5 font-medium text-right">Capital fin d'année</th>
              {fiscaliteActivee && (
                <th className="px-3 py-2.5 font-medium text-right">Net si rachat</th>
              )}
            </tr>
          </thead>
          <tbody>
            {lignes.map((l) => (
              <tr key={l.annee} className="border-b border-border/60 last:border-b-0">
                <td className="px-3 py-2 text-foreground">{l.annee}</td>
                <td className="px-3 py-2 text-right text-muted-foreground">
                  {eur(l.versementsBruts)}
                </td>
                <td className="px-3 py-2 text-right text-muted-foreground">
                  {eur(l.produitsUc + l.produitsFondsEuros)}
                </td>
                {avecPsFondsEuros && (
                  <td className="px-3 py-2 text-right text-muted-foreground">
                    {eur(l.psFondsEuros)}
                  </td>
                )}
                <td className="px-3 py-2 text-right font-medium text-foreground">
                  {eur(l.capitalFinAnnee)}
                </td>
                {fiscaliteActivee && (
                  <td className="px-3 py-2 text-right text-muted-foreground">
                    {eur(l.capitalNetSiRachat)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="px-3 py-2.5 text-xs text-muted-foreground border-t border-border/60">
        Versements bruts (frais d'entrée inclus), produits nets de frais de gestion. Aucun rachat en
        cours de contrat dans cette version : le « net si rachat » suppose un dénouement total en
        fin d'année considérée.
      </p>
    </div>
  );
}
