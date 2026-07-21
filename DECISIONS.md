# Décisions — placement-ethique.fr

Journal des décisions non triviales prises en autonomie pendant la construction
(cf. brief, section 11 « Protocole d'autonomie totale »). Une ligne par décision :
quoi, pourquoi.

## État final (QA)

Site complet : 9 pages marketing, 33 articles, 12 outils interactifs, espace
client (code + migrations). Vérifié à la fin de la construction :
`tsc --noEmit` propre, `eslint` 0 erreur (8 avertissements résiduels, tous dans
du vendor shadcn/ui non modifié), 48/48 tests unitaires, build de production
réussi, et les 33 articles + 22 pages/outils confirmés servis en HTTP 200 par
un vrai serveur SSR (aucun résidu « halal », aucune page en état de repli).

Un bug réel a été trouvé et corrigé en QA : `src/integrations/supabase/types.ts`
(fichier généré, copié depuis placement-halal) référençait encore l'ancien enum
`produit_categorie` (etf_actions_halal, fonds_sukuk…) alors que la migration
SQL et le code de l'espace client utilisent déjà les valeurs ISR renommées —
resynchronisé avec la migration. `src/components/ui/chart.tsx` (vendor shadcn
inutilisé nulle part, seule source d'erreurs tsc) a été supprimé plutôt que
rafistolé. Cinq findings mineurs de la revue de conformité (sources
manquantes sur des chiffres réglementaires par ailleurs exacts, une formule de
CTA trop proche de « étude de votre situation », une couleur email verte
décorative) ont été corrigés avec vérification web des sources ajoutées.

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
- **iClosed : compte EpargnePlurielleAJ réutilisé, sur validation explicite du
  cabinet** — la consigne initiale (ne pas réutiliser ce compte, en créer un
  dédié) a été levée à la demande d'Alex Pollet : c'est le compte réseau
  existant, chaque site y a son propre événement (finance halal, SCPI,
  capital retraite…). L'événement « Appel découverte - Placement Éthique » a
  été créé par duplication de l'événement finance-halal (mêmes réglages :
  30 min, Google Meet, questions du formulaire), renommé sans mention
  « Épargne Plurielle » dans le titre affiché, et repassé en français (la
  langue de l'événement dupliqué était restée sur l'anglais — jours de
  calendrier affichés en anglais sinon). Le préfixe d'URL `/e/EpargnePlurielleAJ/`
  reste visible : c'est l'identifiant fixe du compte, commun à tout le
  réseau, pas un artefact corrigible par événement.
- **Téléphone : non affiché** tant que le cabinet n'a pas confirmé la ligne à
  utiliser (le 01 84 60 25 30 du site halal n'est pas repris d'office — appartenance
  à ce site précis non confirmée). Email `contact@placement-ethique.fr` affiché
  partout (boîte à provisionner, GO-LIVE-CHECKLIST item 6).
