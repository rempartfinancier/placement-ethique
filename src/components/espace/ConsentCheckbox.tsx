import { Checkbox } from "@/components/ui/checkbox";
import type { ConsentementMeta } from "@/lib/espace/consentements";

// Case de consentement RGPD : une par catégorie de donnée, JAMAIS pré-cochée.
// L'état initial (false) appartient au parent — ce composant n'a aucun défaut
// et refuse structurellement d'être "coché d'office".

export function ConsentCheckbox({
  meta,
  checked,
  onCheckedChange,
}: {
  meta: ConsentementMeta;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  const id = `consent-${meta.categorie}`;
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/70 bg-card p-4 transition-colors hover:border-border"
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(value) => onCheckedChange(value === true)}
        className="mt-0.5"
      />
      <span className="min-w-0">
        <span className="block text-sm font-medium text-foreground">
          {meta.titre}
          {meta.obligatoire && (
            <span className="ml-1.5 text-xs font-normal text-muted-foreground">
              (requis pour transmettre)
            </span>
          )}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
          {meta.libelle}
        </span>
      </span>
    </label>
  );
}
