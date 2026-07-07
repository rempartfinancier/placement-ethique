import { useEffect, useState } from "react";

type Props = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  /** Unité affichée à droite du champ de saisie (ex. "€", "ans", "%"). */
  unit?: string;
  /** Plafond de la saisie clavier, si supérieur au max du curseur. */
  hardMax?: number;
  /** Texte d'aide affiché sous le curseur. */
  hint?: string;
  /** Formatage de la valeur dans les bornes min/max affichées. */
  format?: (v: number) => string;
};

/**
 * Champ hybride curseur + saisie clavier, synchronisés.
 * Le curseur couvre la plage courante [min, max] ; la saisie clavier permet
 * d'entrer une valeur exacte, éventuellement au-delà du max du curseur
 * (jusqu'à hardMax). Aucune valeur n'est perdue au blur : clamp explicite.
 */
export function SliderField({ label, value, onChange, min, max, step, unit, hardMax, hint, format }: Props) {
  const ceiling = hardMax ?? max;
  const [text, setText] = useState(String(value));

  useEffect(() => {
    setText(String(value));
  }, [value]);

  const fmt = format ?? ((v: number) => new Intl.NumberFormat("fr-FR").format(v));

  const commit = () => {
    const parsed = Number(text.replace(/\s/g, "").replace(",", "."));
    if (Number.isFinite(parsed)) {
      const clamped = Math.min(ceiling, Math.max(min, parsed));
      onChange(clamped);
      setText(String(clamped));
    } else {
      setText(String(value));
    }
  };

  return (
    <div>
      <div className="flex items-end justify-between gap-3 mb-2">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <div className="flex items-center gap-1.5 shrink-0">
          <input
            type="text"
            inputMode="decimal"
            aria-label={label}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                commit();
                (e.target as HTMLInputElement).blur();
              }
            }}
            className="w-28 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm text-right text-foreground focus:border-[var(--grenat)] focus:outline-none focus:ring-1 focus:ring-[var(--grenat)] transition-colors"
          />
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        </div>
      </div>
      <input
        type="range"
        aria-label={`${label} (curseur)`}
        min={min}
        max={max}
        step={step}
        value={Math.min(value, max)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--grenat)]"
      />
      <div className="flex justify-between text-xs text-muted-foreground mt-1">
        <span>{fmt(min)}{unit ? ` ${unit}` : ""}</span>
        <span>
          {fmt(max)}{unit ? ` ${unit}` : ""}
          {hardMax && hardMax > max ? " (saisie libre au-delà)" : ""}
        </span>
      </div>
      {hint && <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{hint}</p>}
    </div>
  );
}
