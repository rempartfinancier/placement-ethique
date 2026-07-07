# placement-ethique.fr

Site vitrine + conseil patrimonial **investissement éthique/ISR**, édité par EXP
Capital. Sibling de placement-halal.fr (même cabinet, mêmes conseillers, même
modèle apporteur d'affaires) mais **marque, design et storytelling indépendants** :
positionnement anti-greenwashing / transparence radicale. Source de vérité du
projet : `docs/brief-placement-ethique.md`. Décisions prises en construction :
`DECISIONS.md`. Actions humaines restantes : `GO-LIVE-CHECKLIST.md`.

## Stack & commandes

TanStack Start (React 19, routing fichiers dans `src/routes/`), Tailwind CSS 4,
shadcn/ui, Supabase (espace client — **non provisionné**, voir GO-LIVE-CHECKLIST),
Vercel. Tout passe par **bun** (`/Users/alexmacmini/.bun/bin/bun`) :

- `bun install` / `bun run build` / `bun run dev`
- Tests moteur : `bun test src/lib/simulateur-placements`
- Typecheck : `bun ./node_modules/typescript/bin/tsc --noEmit` (doit rester PROPRE
  — contrairement au repo halal, pas de dette tolérée ici)
- Lint : `bun ./node_modules/.bin/eslint --fix <fichiers>`

`routeTree.gen.ts` est auto-généré (build/dev) — ne jamais l'éditer, ne pas le
commiter s'il référence des routes WIP.

## Règles non négociables (résumé du brief §2)

- **EXP Capital est la SEULE entité** (SASU, RCS Versailles 987 986 247, ORIAS
  25005915, PAS CIF). Jamais Épargne Plurielle, jamais Uptimi, jamais de statut
  CIF/mandat. Footer canonique identique au réseau.
- **« recommandation » = conseil écrit humain uniquement** ; sorties d'outils =
  « pistes ». CTA sans « conseil personnalisé »/« étude de votre situation ».
- **Anti-fabrication** : aucune donnée non vérifiable (ISIN, perf, adresse, date)
  — placeholder explicite `[À COMPLÉTER]` ou statut `"À VALIDER"`.
- **Jamais nommer un fonds/société comme exemple de greenwashing sans source
  publique vérifiable** (risque diffamation) — voir skill `finance-ethique-article`.
- **Deux couches jamais confondues** : simulateur générique sans fonds nommé ;
  fiche allocation toujours « exemple de portefeuille type » (`AVERTISSEMENT_PROFIL_TYPE`
  repris tel quel), jamais reliée aux réponses d'un quiz.

## Conventions design & rédaction

- Vouvoiement, « email » (jamais « e-mail »).
- Tokens oklch uniquement, via variables : `--grenat` (accent, fonds clairs),
  `--grenat-clair` (accents sur fond sombre), `--verifie` (vert fonctionnel,
  badges seulement — jamais couleur de marque). `color-mix()` pour les alphas,
  jamais d'oklch en dur dans un composant.
- Classes maison : `.btn-primary` / `.btn-grenat` / `.btn-ghost` / `.card-paper` /
  `.eyebrow` / `.display-1/2/3` / `.section` / `.prose-article`.
- Typo : Fraunces (display) + Inter (body), chargées via Google Fonts dans
  `__root.tsx`.
- Articles : un fichier par article dans `src/content/articles/<slug>.tsx`,
  métadonnées agrégées dans `src/content/articles.ts`.

## Pièges connus (hérités du réseau)

- `validateSearch` : ne JAMAIS convertir les nombres en chaînes (`String(v)`) —
  307 sur les URL partagées. Passthrough `string | number`, conversion dans le
  composant avant `deserialiserEtat`.
- Session Supabase en localStorage → le SSR ne voit jamais la session : garde
  côté composant, pas en `beforeLoad`.
- SSR TanStack Start émet des NUL bytes dans le HTML streamé → `grep -a` pour
  inspecter le HTML curlé.
- Mise à jour de chiffres (frais, fiscalité, fonds) : toucher UNIQUEMENT
  `hypotheses.ts`/`contrats.ts`/`fonds.ts`/`profils.ts`, jamais le moteur
  (`engine.ts`, `fiscalite.ts`).
