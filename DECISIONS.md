# Décisions — placement-ethique.fr

Journal des décisions non triviales prises en autonomie pendant la construction
(cf. brief, section 11 « Protocole d'autonomie totale »). Une ligne par décision :
quoi, pourquoi.

## Fondations

- **Scaffold copié depuis placement-halal plutôt que généré from scratch** — l'agent
  exécutant a accès au repo de référence (contrairement à l'hypothèse du brief §1) ;
  copier les configs, les composants shadcn/ui et le moteur de simulation éprouvés
  élimine une classe entière de bugs de scaffold. Aucune dépendance runtime entre les
  deux repos : ce sont des copies.
- **Photos réelles copiées** (`sebastien.jpeg`, `alexandre.jpg`) — mêmes personnes
  réelles, fichiers disponibles ; résout l'item 8 de la GO-LIVE-CHECKLIST. Le repli
  `ui-avatars.com` reste en place par sécurité.
- **Images d'articles** : réutilisation des photos Pexels génériques (finance,
  bureaux, graphiques) déjà libres de droits dans le repo de référence ; les images
  spécifiquement halal (vaches, sukuk, familles en contexte religieux) ne sont pas
  reprises. Les articles sans image adaptée n'en ont pas (champ `image` optionnel).
- **Tri visuel effectué image par image** (inspection réelle des fichiers) : 6
  images conservées et renommées dans `public/images/articles/` (lettres ETF,
  immeuble végétalisé, maquette éolienne, blocs de progression, bocal d'épargne,
  duo devant graphiques) ; 8 supprimées — photos en contexte islamique (3),
  clichés bannis par le brief (pousse verte ×2, globe terrestre), Bitcoin à
  l'écran, dollars US sur pelouse. Cohérence marque > volume d'illustrations.

## Marque & design

- **Tagline retenue : « L'investissement éthique, sans le vernis. »** — double sens
  (superficialité + masquage) aligné sur le positionnement anti-greenwashing ; les
  deux autres pistes du brief étaient plus longues et moins mémorables.
- **Typo display : Fraunces** (vs Newsreader) — caractère plus fort et plus
  différenciant vs le Cormorant Garamond du site halal ; Newsreader restait trop
  proche visuellement d'une serif de lecture classique. Inter conservé en body
  (cohérence réseau, lisibilité éprouvée).
- **Palette** : ivoire neutre `oklch(0.973 0.006 95)` (moins jaune que le crème
  halal), encre bleu-nuit `oklch(0.24 0.035 255)` en primaire, grenat profond
  `oklch(0.44 0.14 20)` en accent signature. Deux variantes de grenat : `--grenat`
  (texte/boutons sur fond clair) et `--grenat-clair` `oklch(0.74 0.09 25)` (accents
  sur fond sombre — le grenat profond serait illisible sur le bleu-nuit). Vert
  réservé au token fonctionnel `--verifie` (badges de statut), jamais en marque.
- **Mapping des tokens portés** : `var(--gold)` → `var(--grenat-clair)` sur fonds
  sombres / `var(--grenat)` sur fonds clairs ; `var(--clay)` → `var(--grenat)` ;
  `.btn-gold` → `.btn-grenat` ; `--gradient-gold` → `--gradient-grenat`. Les
  composants copiés du moteur/simulateur sont réécrits avec ces tokens.
- **Monogramme du logo : « ≡pe »** rejeté, **« P. »** simple retenu dans une pastille
  gradient grenat — le ﷽ du site halal n'a pas d'équivalent séculier pertinent ;
  la sobriété sert le positionnement.

## Contenu

- **Articles : un fichier par article** (`src/content/articles/<slug>.tsx`) au lieu
  du fichier monolithique de 8 800 lignes du site de référence — permet la rédaction
  parallèle par agents et des diffs lisibles ; un index (`src/content/articles.ts`)
  agrège les métadonnées.
- **Vocabulaire verrouillé appliqué** : « recommandation » réservé au conseil humain,
  sorties d'outils = « pistes » ; CTA sans « conseil personnalisé »/« étude de votre
  situation » (brief §2.2).
- **Aucun fonds ISR nommé en dur** : `fonds.ts` et `profils.ts` livrés vides
  (statut « À VALIDER »), le cabinet n'ayant pas encore communiqué la liste des
  supports ISR disponibles dans les contrats — même discipline anti-fabrication que
  le site de référence.

## Technique

- **Clé cookies : `pe-consent-traceurs`** (préfixe site), GTM en placeholder
  `GTM-XXXXXXX` gaté par consentement — le conteneur réel est une dépendance humaine
  (GO-LIVE-CHECKLIST item 3).
- **iClosed : URL placeholder** — le lien `EpargnePlurielleAJ` du site de référence
  pointe vers un autre compte du réseau ; le composant affiche un repli propre
  (formulaire de contact) tant que l'URL dédiée n'est pas fournie.
- **Téléphone : non affiché** tant que le cabinet n'a pas confirmé la ligne à
  utiliser (le 01 84 60 25 30 du site halal n'est pas repris d'office — appartenance
  à ce site précis non confirmée). Email `contact@placement-ethique.fr` affiché
  partout (boîte à provisionner, GO-LIVE-CHECKLIST item 6).
