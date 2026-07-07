# GUIDE-AGENT — conventions pour toute contribution à placement-ethique.fr

> À lire INTÉGRALEMENT avant d'écrire le moindre fichier. Ce guide est la
> distillation opérationnelle du brief (`docs/brief-placement-ethique.md`) :
> en cas de doute sur un point non couvert ici, le brief fait foi.

## 1. Le projet en trois phrases

Placement-ethique.fr est le site d'un cabinet réel de gestion de patrimoine
(EXP Capital) spécialisé en investissement éthique/ISR, porté par deux
conseillers réels : Sébastien Petrisot et Alexandre Pollet. Positionnement :
**transparence radicale anti-greenwashing** — « L'investissement éthique, sans
le vernis. » Le site vérifie ce que les labels garantissent vraiment, source
chaque affirmation, et publie sa propre grille de rémunération en clair.

## 2. Interdits réglementaires absolus (violation = rejet du travail)

1. **EXP Capital est la SEULE entité juridique mentionnée** : SASU au capital
   de 1 000 €, RCS Versailles 987 986 247, ORIAS n° 25005915 (www.orias.fr).
   EXP Capital N'EST PAS CIF. Ne JAMAIS écrire : « Épargne Plurielle »,
   « Uptimi », « CIF », « conseiller en investissements financiers », un
   mandat, ou toute référence à un conseil réglementé.
2. Le site est **informatif et éducatif**. Aucun CTA ne dit « conseil
   personnalisé », « recommandation personnalisée » ni « étude de votre
   situation ». Formules autorisées : « échanger avec un conseiller »,
   « prendre rendez-vous », « réserver un échange », « obtenir des pistes ».
3. **« recommandation » = conseil écrit HUMAIN uniquement.** Toute sortie
   d'outil, de quiz ou de simulateur s'appelle une **« piste »**.
4. **Anti-fabrication** : ne jamais inventer un ISIN, un chiffre de
   performance, une adresse, une date, un montant réglementaire, un nom de
   fonds, une statistique. Donnée absente = placeholder explicite
   `[À COMPLÉTER : …]` ou formulation qui renvoie à la vérification
   (« à vérifier sur le DIC », « selon les données publiées par X »).
   Un chiffre réglementaire (plafond, taux, seuil) ne se publie qu'après
   vérification via recherche web sur une source officielle — sinon on
   l'écrit qualitativement sans le chiffre.
5. **Jamais nommer un fonds, une société de gestion ou une entreprise comme
   exemple de greenwashing** sans source publique vérifiable et datée
   (sanction AMF, contentieux public, enquête documentée). Les mécanismes se
   décrivent de façon générique.
6. Près de toute projection/simulation : mention « hypothèse illustrative »
   + « les performances passées ne préjugent pas des performances futures »
   + risque de perte en capital.
7. Rémunération du cabinet : modèle apporteur d'affaires assumé et documenté
   (rendez-vous gratuits, rémunération par les partenaires, grille publiée
   sur /tarifs). Aucun avantage commercial du cabinet mis en avant dans un
   article de fond — ça se dit sur /tarifs seulement.

## 3. Rédaction

- **Vouvoiement**, toujours. **« email »**, jamais « e-mail ».
- Ton : rigoureux, pédagogique, une pointe d'enquête/mythbusting — jamais
  moralisateur envers le lecteur, jamais accusateur sans source.
- Vocabulaire technique précis et assumé : ISR, ESG, SFDR (Article 6/8/9),
  taxonomie verte, Label ISR, Greenfin, Finansol, best-in-class, exclusion
  sectorielle/normative, engagement actionnarial, green bonds, scope 1/2/3,
  additionnalité. Définir au premier usage si le lecteur peut être débutant.
- Le mot « éthique » est le terme grand public (titres, SEO) ; ISR/ESG/
  « responsable » sont les termes techniques du corps de texte.

## 4. Design system (Tailwind 4 + tokens maison)

Tokens (via `style={{}}` ou classes arbitraires `text-[var(--grenat)]`) :

| Token | Usage |
|---|---|
| `var(--grenat)` | Accent signature sur fonds clairs (titres italiques, icônes, liens) |
| `var(--grenat-clair)` | Accents sur fonds sombres (le grenat profond y est illisible) |
| `var(--gradient-grenat)` | Pastilles d'icônes, boutons signature |
| `var(--gradient-encre)` | Sections sombres (hero, CTA) |
| `var(--gradient-paper)` | Fond des PageHero |
| `var(--accent)` | Fond pâle des pastilles d'icônes sur fond clair |
| `var(--verifie)` | VERT — UNIQUEMENT badges de statut « vérifié/sourcé ». Jamais décoratif. |
| `var(--ink)` | Bleu-nuit de marque (fond du footer) |

Classes maison : `.container-prose`, `.section`, `.eyebrow`, `.display-1/2/3`,
`.lead`, `.btn-primary` (encre), `.btn-grenat` (signature), `.btn-ghost`,
`.card-paper`, `.prose-article`, `.badge-verifie`, `.badge-a-valider`,
`.fade-up`, `.rule-grenat`.

Interdits : couleur oklch en dur dans un composant (passer par les tokens +
`color-mix(in oklch, var(--x) N%, transparent)` pour les alphas) ; le vert
comme couleur décorative ; toute imagerie cliché « finance verte » (feuilles,
globe, pousses, mains dans la terre).

Icônes : `lucide-react` uniquement.

## 5. Composants disponibles

```tsx
import { SiteLayout } from "@/components/SiteLayout";   // header+footer, wrapper de toute page
import { PageHero } from "@/components/PageHero";        // { eyebrow, title (ReactNode), lead, children? }
import { CTA } from "@/components/CTA";                  // { eyebrow?, title?, text? } — section CTA fin de page
import { ArticleLayout } from "@/components/ArticleLayout"; // pages articles uniquement
import { IClosedWidget } from "@/components/IClosedWidget"; // prise de RDV (repli email intégré)
import { SliderField } from "@/components/SliderField";  // curseur numérique des simulateurs
```

Composants shadcn/ui disponibles dans `@/components/ui/*` (accordion, tabs,
select, slider, dialog…). Recharts disponible pour les graphiques.

## 6. Squelette d'une route (OBLIGATOIRE pour toute page)

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/ma-page")({
  head: () => ({
    meta: [
      { title: "Titre SEO — question réelle | Placement-éthique.fr" },
      { name: "description", content: "…150-160 caractères…" },
      { property: "og:title", content: "…" },
      { property: "og:url", content: "https://placement-ethique.fr/ma-page" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/ma-page" }],
  }),
  component: MaPage,
});

function MaPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="…" title={<>… <span className="italic" style={{ color: "var(--grenat)" }}>accent</span></>} lead="…" />
      {/* sections */}
      <CTA />
    </SiteLayout>
  );
}
```

Pour une page à forte densité de FAQ (`/tarifs`, `/questions`), ajouter le
JSON-LD `FAQPage` dans `head.scripts` (modèle : la page /tarifs).

## 7. Liens

- Entre pages : `<Link to="/tarifs">` (chemins statiques typés).
- Vers un article : JAMAIS `to="/articles/mon-slug"` en littéral (casse le
  typage). Toujours `<Link to="/articles/$slug" params={{ slug: "mon-slug" }}>`
  ou, dans le corps d'un article, le helper
  `import { LienArticle } from "./lien";` → `<LienArticle slug="…">texte</LienArticle>`.
- Externes : `<a href="…" target="_blank" rel="noreferrer">` — à placer à côté
  de toute affirmation factuelle/légale qu'un lecteur sceptique voudrait
  sourcer (AMF, CNIL, labels officiels : lelabelisr.fr, greenfin, finansol,
  service-public.fr, legifrance).

## 8. Pièges techniques connus

- `validateSearch` : ne JAMAIS convertir un nombre en chaîne (`String(v)`) —
  307 sur les URL partagées. Passthrough `string | number`.
- Pas de `Date.now()` fantaisiste dans le rendu SSR au-delà de l'année du
  footer.
- Fichier = un seul export de Route par fichier de route.
- N'écrire QUE le(s) fichier(s) demandé(s). Ne pas lancer de build, ne pas
  modifier routeTree.gen.ts, ne pas toucher aux autres fichiers.

## 9. Données réelles utilisables (déjà validées, ne pas altérer)

- Grille de frais (page /tarifs et `src/lib/simulateur-placements/contrats.ts`) :
  AV/capitalisation entrée 1 % ≤ 200 k€ / 0,50 % ≤ 400 k€ / 0 % au-delà ;
  gestion Patrimoine Vie Plus (Suravenir) 1,08 %/an, Version Absolue 2
  (Spirica/UAF Life) 1,00 %/an ; PER : entrée idem, gestion 1,00 %/an ;
  SCPI : entrée ~12 % identique en direct, rétrocédé ~6 %, cashback client
  2 % > 100 k€ ; Girardin/Lodeom : commission ~6 % intégrée ; immobilier
  direct : 0-10 % incluse dans le prix.
- Personnes : Sébastien Petrisot (Responsable relations investisseurs,
  LinkedIn /in/sébastien-pétrisot-a94832111) ; Alexandre Pollet
  (Communication, contenu et partenariats, /in/alexandre-pollet-98704ba1).
  Photos : `/sebastien.jpeg`, `/alexandre.jpg` (repli ui-avatars en onError).
- Contact : contact@placement-ethique.fr. PAS de numéro de téléphone (non
  confirmé — ne pas en inventer, ne pas reprendre celui d'un autre site).
- L'univers de fonds ISR des contrats N'EST PAS ENCORE communiqué : aucun
  fonds nommé nulle part (hors exemples génériques de méthodologie où on
  décrit COMMENT vérifier, sans dire « disponible dans nos contrats »).

## 10. Routes du site (pour le maillage interne)

`/` `/a-propos` `/contact` `/tarifs` `/questions` `/placements` `/enveloppes`
`/objectifs` `/articles` `/articles/$slug` `/mentions-legales`
`/confidentialite` `/espace` — Outils : `/outils` `/outils/simulateur`
`/outils/portefeuilles-types` `/outils/retraite` `/outils/per-isr`
`/outils/diagnostic` `/outils/profil-investisseur`
`/outils/type-investissement` `/outils/decodeur-label`
`/outils/empreinte-carbone-epargne` `/outils/comparateur-eco-ptz`
`/outils/comparateur-enveloppes`

Les slugs des 33 articles sont listés dans `docs/GUIDE-ARTICLE.md` §3.
