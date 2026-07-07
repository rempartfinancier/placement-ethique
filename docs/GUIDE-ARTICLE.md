# GUIDE-ARTICLE — rédaction des articles de placement-ethique.fr

> Complète `docs/GUIDE-AGENT.md` (à lire d'abord). Chaque article applique la
> méthode Endless Customers (Marcus Sheridan / They Ask You Answer) + les
> garde-fous ESG spécifiques au site (§2). Pour la checklist complète des
> standards, lire aussi
> `~/.claude/skills/endless-customers-article/references/standards-checklist.md`
> si accessible.

## 1. Format de fichier — STRICT

Un article = un fichier `src/content/articles/<slug>.tsx` :

```tsx
import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "<slug>",                     // EXACTEMENT celui du tableau §3
  title: "…",                         // affiné librement, même question de fond
  excerpt: "…",                       // 140-170 caractères, réponse condensée
  readingTime: "8 min",               // honnête vs longueur réelle
  category: "…",                      // celle du tableau §3
  date: "2026-05-12",                 // celle du tableau §3
  tags: ["…", "…"],
  author: "…",                        // celui du tableau §3
  featured: true,                     // UNIQUEMENT si le tableau le dit
};

export function Corps() {
  return (
    <>
      {/* contenu JSX — voir structure §4 */}
    </>
  );
}
```

Balises utilisables dans `Corps` : `<h2>`, `<h3>`, `<p>`, `<ul>/<ol>/<li>`,
`<strong>`, `<em>`, `<blockquote>`, `<table>` (avec `<thead>/<tbody>`),
`<div className="callout">` et `<div className="callout callout-grenat">`
pour les encadrés — le style vient de `.prose-article`, ne pas ajouter de
classes de style. Liens internes : `<LienArticle slug="…">…</LienArticle>`
(slugs du §3 uniquement) ou `<a href="/outils/…">` pour les outils. Liens
externes : `<a href target="_blank" rel="noreferrer">`.

## 2. Garde-fous éditoriaux ESG (résumé du skill finance-ethique-article)

1. **Posture : CGP rigoureux, pas agence de notation ni militant.** On
   explique la méthodologie et les faits vérifiables ; on ne certifie jamais
   soi-même qu'un fonds « est vraiment éthique », on ne juge jamais
   moralement une entreprise nommée sans controverse publique sourcée.
2. **Jamais d'accusation de greenwashing nommée sans source publique datée**
   (sanction AMF/ACPR, contentieux, enquête documentée) — risque de
   diffamation réel. Mécanismes et signaux d'alerte : toujours génériques.
3. **Débats exposés avec substance** (Label ISR critiqué/réformé, Article 8
   vs 9, exclusion vs engagement, performance ISR vs conventionnelle) :
   décrire le raisonnement de chaque position, pas de hiérarchie implicite
   puristes/pragmatiques, conclure sur notre grille de lecture assumée sans
   trancher à la place du lecteur.
4. **Statistiques de performance : sourcées précisément** (indice, période,
   méthodologie) ou remplacées par un constat qualitatif. Le champ est
   traversé d'études contradictoires — le dire fait partie de l'honnêteté.
5. **Aucun avantage commercial du cabinet dans le corps d'un article** (pas
   de « nos frais négociés », pas de « chez nous c'est moins cher ») — la
   4R de conclusion réintroduit le service naturellement, sans pitch.
6. **Pas de cascade de prudence** : une affirmation directe si le fait est
   établi, UNE réserve claire si l'incertitude est réelle — pas trois
   « à notre connaissance » par paragraphe.
7. Chiffres réglementaires (plafonds, taux, seuils légaux) : vérifier via
   recherche web sur source officielle (legifrance, service-public.fr,
   economie.gouv.fr, AMF, labels officiels) avant publication. Introuvable
   = formulation qualitative sans chiffre, jamais un chiffre de mémoire.

## 3. Plan éditorial — slug, question d'acheteur, catégorie, date, auteur

| # | Slug | Question d'acheteur (Big 5) | Catégorie | Date | Auteur | Featured |
|---|---|---|---|---|---|---|
| 1 | investissement-ethique-guide-complet-2026 | « Par où commencer pour investir éthique en 2026 ? » (pilier) | Fondamentaux | 2026-04-16 | Alexandre Pollet | OUI |
| 2 | isr-esg-impact-investing-differences | « ISR, ESG, impact investing : c'est quoi la différence ? » (comparaison) | Fondamentaux | 2026-04-20 | Alexandre Pollet | |
| 3 | etf-isr-debutants | « Comment choisir un ETF ISR quand on débute ? » | Fondamentaux | 2026-04-24 | Sébastien Petrisot | |
| 4 | foncieres-cotees-scpi-immobilier-durable-bourse | « Peut-on investir dans l'immobilier durable en bourse ? » | Fondamentaux | 2026-04-28 | Sébastien Petrisot | |
| 5 | investir-ethique-petit-budget | « Peut-on investir éthique avec un petit budget ? » (coût) | Fondamentaux | 2026-05-02 | Alexandre Pollet | |
| 6 | livrets-epargne-solidaire-alternative-livret-a | « L'épargne solidaire est-elle une vraie alternative au Livret A ? » | Fondamentaux | 2026-05-05 | Alexandre Pollet | |
| 7 | label-isr-que-garantit-il-vraiment | « Le Label ISR garantit-il qu'un fonds est éthique ? » (problèmes) | Labels & Greenwashing | 2026-05-08 | Alexandre Pollet | OUI |
| 8 | label-greenfin-vs-label-isr | « Label Greenfin ou Label ISR : lequel choisir ? » (comparaison) | Labels & Greenwashing | 2026-05-11 | Alexandre Pollet | |
| 9 | sfdr-article-8-ou-9-ce-que-ca-garantit | « Article 8 ou Article 9 : qu'est-ce que ça garantit vraiment ? » | Labels & Greenwashing | 2026-05-14 | Sébastien Petrisot | |
| 10 | reperer-greenwashing-fonds-vert-methode | « Comment savoir si un fonds vert est du greenwashing ? » (problèmes) | Labels & Greenwashing | 2026-05-17 | Alexandre Pollet | |
| 11 | label-finansol-finance-solidaire | « Que garantit le label Finansol ? » | Labels & Greenwashing | 2026-05-20 | Alexandre Pollet | |
| 12 | taxonomie-verte-europeenne-epargne | « La taxonomie verte européenne change-t-elle quelque chose pour mon épargne ? » | Labels & Greenwashing | 2026-05-23 | Sébastien Petrisot | |
| 13 | investir-ethique-performance-chiffres | « Investir éthique rapporte-t-il moins ? » (problèmes/coût) | Performance | 2026-05-26 | Sébastien Petrisot | |
| 14 | obligations-vertes-vs-obligations-classiques | « Green bonds ou obligations classiques : quelles différences réelles ? » | Performance | 2026-05-29 | Sébastien Petrisot | |
| 15 | engagement-actionnarial-vs-exclusion | « Exclure ou engager : quelle stratégie ISR change vraiment les choses ? » | Performance | 2026-06-01 | Alexandre Pollet | |
| 16 | assurance-vie-isr-guide-2026 | « Comment choisir une assurance vie ISR en 2026 ? » (best of) | Enveloppes | 2026-06-03 | Sébastien Petrisot | |
| 17 | assurance-vie-luxembourgeoise-investissement-responsable | « L'assurance vie luxembourgeoise a-t-elle un intérêt pour l'investissement responsable ? » | Enveloppes | 2026-06-05 | Sébastien Petrisot | |
| 18 | per-vs-assurance-vie-isr | « PER ou assurance vie pour investir responsable ? » (comparaison) | Enveloppes | 2026-06-07 | Sébastien Petrisot | |
| 19 | per-protection-familiale | « Le PER protège-t-il ma famille au-delà de l'avantage fiscal ? » | Enveloppes | 2026-06-09 | Sébastien Petrisot | |
| 20 | per-ethique-optimiser-retraite | « Comment optimiser sa retraite avec un PER éthique ? » | Enveloppes | 2026-06-11 | Alexandre Pollet | |
| 21 | quelle-enveloppe-investissement-ethique | « Quelle enveloppe choisir pour investir éthique ? » (comparaison AV/PER/PEA/CTO) | Enveloppes | 2026-06-13 | Alexandre Pollet | |
| 22 | assurance-vie-enfants-transmettre-valeurs | « Ouvrir une assurance vie à ses enfants : comment transmettre aussi ses valeurs ? » | Enveloppes | 2026-06-15 | Alexandre Pollet | |
| 23 | scpi-isr-environnementales-panorama | « Quelles SCPI ISR/environnementales existent en France ? » (best of) | Enveloppes | 2026-06-17 | Sébastien Petrisot | |
| 24 | scpi-isr-vs-scpi-classique | « SCPI ISR ou SCPI classique : quelles différences réelles ? » (comparaison) | Enveloppes | 2026-06-19 | Sébastien Petrisot | |
| 25 | investissement-immobilier-responsable-commencer | « Par où commencer un investissement immobilier responsable ? » | Enveloppes | 2026-06-21 | Alexandre Pollet | |
| 26 | dispositifs-fiscaux-demarche-ethique | « Quels dispositifs fiscaux sont compatibles avec une démarche éthique ? » (Éco-PTZ, Denormandie, Girardin) | Fiscalité | 2026-06-23 | Alexandre Pollet | |
| 27 | preparer-retraite-epargne-alignee-valeurs | « Comment préparer sa retraite avec une épargne alignée sur ses valeurs ? » | Fiscalité | 2026-06-25 | Sébastien Petrisot | |
| 28 | retraite-capital-ou-rente-per-ethique | « Capital ou rente à la sortie d'un PER : que choisir ? » (comparaison) | Fiscalité | 2026-06-27 | Sébastien Petrisot | |
| 29 | donation-transmission-coherence-valeurs | « Comment donner et transmettre en cohérence avec ses valeurs ? » | Transmission | 2026-06-29 | Alexandre Pollet | |
| 30 | transmettre-patrimoine-engage-fonds-partage | « Comment transmettre un patrimoine engagé (succession, fonds de partage) ? » | Transmission | 2026-07-01 | Alexandre Pollet | |
| 31 | bilan-patrimonial-investissement-ethique-rendez-vous | « À quoi ressemble un vrai rendez-vous de conseil en investissement éthique ? » (avis/reviews) | Conseil | 2026-07-03 | Sébastien Petrisot | |
| 32 | metaux-precieux-investissement-ethique | « L'or et les métaux précieux ont-ils leur place dans un patrimoine éthique ? » | Conseil | 2026-07-05 | Sébastien Petrisot | |
| 33 | empreinte-carbone-epargne-pourquoi-mesurer | « Pourquoi (et comment) mesurer l'empreinte carbone de son épargne ? » | Conseil | 2026-07-07 | Alexandre Pollet | |

## 4. Structure OBLIGATOIRE de chaque article (Endless Customers)

Dans cet ordre :

1. **Résumé exécutif** — encadré `<div className="callout callout-grenat">`
   ouvrant l'article : 2-4 phrases qui RÉPONDENT à la question, tout de
   suite. Le lecteur pressé doit pouvoir s'arrêter là avec sa réponse.
2. **Introduction PEP** — douleur/doute du lecteur d'abord (« Vous avez
   vu… et vous vous demandez si… »), éventuel mini-scénario persona, puis
   définition du concept, puis promesse de ce que l'article résout. JAMAIS
   ouvrir par une définition de dictionnaire.
3. **Corps en H2 formulés comme de vraies requêtes Google** (« Le Label ISR
   exclut-il les énergies fossiles ? » plutôt que « Critères du label »).
   4 à 8 H2. `<h3>` pour les sous-points.
4. **Au moins un tableau comparatif** dès que deux options sont pesées
   (colonnes pensées pour la décision du lecteur, pas pour l'exhaustivité).
5. **Chiffres et projections** : hypothèses justifiées (« pourquoi 5 % ?
   pourquoi 20 ans ? »), disclaimer d'illustration, préférer les
   enseignements qualitatifs aux pourcentages difficiles à défendre.
6. **Un processus numéroté** si le sujet s'y prête (3-5 étapes, avec un
   petit nom mémorisable).
7. **FAQ** — `<h2>Vos questions sur …</h2>` + 5 à 8 vraies questions de
   débutant en `<h3>`, réponses directes de 2-5 phrases.
8. **Conclusion en 4R** (sans titre « Conclusion » — utiliser un H2 utile) :
   Résolution (la réponse rassurante), Rappel (le coût de l'inaction),
   pRochaine étape (1-2 liens internes commentés d'une phrase — pourquoi
   c'est la suite logique), Réintroduction (le cabinet, naturellement :
   premier échange offert, sans pitch lourd).
9. **Maillage** : 2 à 4 `<LienArticle>` vers des slugs du §3 (chacun avec sa
   phrase de justification), 1-3 liens externes officiels à côté des
   affirmations factuelles, et si un outil du site est pertinent, un lien
   vers lui (« faites le calcul vous-même »).

Longueur cible : 1 200 à 2 500 mots selon le sujet (le pilier #1 peut aller
au-delà). La qualité de la réponse prime sur le volume.

## 5. Auto-vérification avant de rendre le fichier

- [ ] Résumé exécutif en tête, qui répond vraiment
- [ ] H2 en intention de recherche, FAQ 5-8 questions, conclusion 4R
- [ ] Au moins un tableau si des options sont comparées
- [ ] Aucun interdit du GUIDE-AGENT §2 violé (EXP Capital, « pistes »,
      anti-fabrication, pas d'accusation nommée, disclaimers)
- [ ] 2-4 LienArticle valides (slugs du §3), liens externes sourçant les faits
- [ ] meta complet, slug/catégorie/date/auteur EXACTEMENT ceux du §3
- [ ] Vouvoiement, « email », vocabulaire technique précis
- [ ] Le fichier compile mentalement : JSX valide, imports exacts du §1
