// Formatage partagé des simulateurs — les routes historiques redéclarent
// eur()/pct() localement avec de légères divergences ; les nouveaux
// composants passent par ici (une seule convention d'affichage).

export function eur(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) + " €";
}

export function pct(n: number, decimales = 1): string {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: decimales }).format(n);
}

/** Performance signée pour les historiques : « +22,34 % » / « −4,15 % ». */
export function pctSigne(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const formate = new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 2,
    signDisplay: "always",
  }).format(n);
  return `${formate} %`;
}
