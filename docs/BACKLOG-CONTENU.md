# BACKLOG-CONTENU — document vivant (créé le 28 septembre 2026)

> Un seul fichier vivant : on met à jour ce document à chaque session de mining, on n'en crée pas d'autre.
> Méthode : skill `endless-customers-article` (mode Extraction) + `docs/GUIDE-ARTICLE.md` + `docs/GUIDE-AGENT.md`.

## 1. Sources et limites (à lire d'abord)

- **Signal de demande :** 64 requêtes GSC (90 jours, site jeune : 1,87 k impressions au total). Volumes minuscules : ils servent d'**indice d'intention**, pas de volume de recherche. Aucun outil de mots-clés n'a été utilisé : **les priorités sont qualitatives** et à confirmer avec un outil de volumes (Semrush, Ahrefs, Keyword Planner) avant de figer les vagues 2 et 3.
- **Trous relevés :** audit des 39 articles (`docs/audit-articles-2026-09/`) + comparaison du catalogue (`src/content/articles.ts`, 39 articles) sujet par sujet.
- **Pas de transcription de rendez-vous client** dans ce mining : **aucune texture réelle (registre B)** n'est utilisée. Registre A uniquement (cas chiffrés pédagogiques avec disclaimer d'illustration). Quand des échanges réels seront disponibles, relancer le mode Extraction et compléter ce fichier.
- **Overlay de domaine :** la skill `finance-ethique-article` citée dans CLAUDE.md n'existe pas sur cette machine ; `GUIDE-ARTICLE.md §2` en tient lieu.

## 2. Requêtes GSC par grappe d'intention (90 jours)

| Grappe | Requêtes (impressions, position) | Réponse actuelle |
|---|---|---|
| Générique « éthique » | placement éthique (337, 28,7), placement ethique (113, 15,3), placements éthiques (133, 18,6), investissement éthique (370, 36,8), investissement ethique (167, 30,1), investir éthique/ethique (105), épargne éthique/ethique (~41), fonds éthique(s) (~28), placement responsable (14, 72) | Home + `/placement-ethique` (nouveau) |
| Solidaire | placement ethique solidaire (56, 27), épargne solidaire comparatif (7, 36), label finansol isr (2), finansol courtier (1) | Articles finansol + livrets, **rien sur les fonds 90/10** |
| Assurance vie | assurance vie éthique / ethique / assurance-vie éthique (~32, pos 53-93), comparatif assurance vie esg (1) | Guide `assurance-vie-isr-guide-2026` (méthode, pas de comparaison classique vs ISR) |
| PER | per ethique (10, 21), quel per est le plus éthique (3, 54), per solidaire et responsable (1), existe-t-il des placements retraite responsable (1) | `per-ethique-optimiser-retraite` (optimisation, pas de critères de choix) |
| ETF / fonds | etf responsable (27, 58), etf eco responsable (9, 65), portefeuille etf isr en ligne (1) | `etf-isr-debutants` |
| SCPI | scpi verte (8, 77), scpi responsable (6, 71), conseil investissement responsable immobilier (2) | Panorama sans SCPI nommée, pas de frais/fiscalité |
| Empreinte carbone | epargne impact carbone (31, 30), empreinte carbone épargne (3, 44) | Article + outil (à enrichir) |
| Objectifs | quel placement s'adapte le mieux à mes objectifs de vie (30, **7,9**) | Page `/objectifs` (déjà bien placée : ne pas y toucher sans raison) |
| Outils / simulation | simulation placement, simulateur (de) placement(s), simulation assurance vie, enveloppe fiscale (28, 87), calculette… (~30 au total) | Outils existants ; leviers = titres et maillage, pas de nouvel article |
| Conseil | conseil finance éthique (5, 22,6), prix cabinet de gestion de patrimoine international (2) | Page service (nouveau) + `frais-conseiller…` |
| Comparaison enveloppes | cto ou assurance vie (3, 99) | `quelle-enveloppe…` (enrichissement plutôt que nouvel article) |
| Marques / fonds | axa euro valeurs responsables (2), activeseed, actiale, place des opinions | Ignorées : requêtes navigationnelles hors périmètre |

## 3. Priorisation (Big 5 équilibré)

Score = intention d'achat + signal GSC + trou réel dans le catalogue + faisabilité vérifiable (chiffres sourçables sans fabrication) + apport à la marque « vérifier avant d'affirmer ». Type = Big 5 (C = Coût, P = Problèmes, X = Comparaisons, B = Best of/Avis, W = What is) + M = « comment nous travaillons ».

### Vague 1 — 8 articles (lancée le 28/09/2026)

| # | Slug | Type | Catégorie | Requêtes visées | Pourquoi |
|---|---|---|---|---|---|
| 1 | `assurance-vie-ethique-ou-classique-differences` | X | Enveloppes | assurance vie éthique / ethique, assurance vie ISR vs classique | 3 variantes GSC (~32 impr.), aucune comparaison directe |
| 2 | `quel-per-choisir-investir-ethique-criteres` | X/B | Enveloppes | per ethique, quel per est le plus éthique, per solidaire et responsable | 3 requêtes GSC ; le cluster PER décrit des mécanismes mais ne donne pas de critères de choix |
| 3 | `placement-ethique-solidaire-fonds-90-10-livrets` | W | Fondamentaux | placement ethique solidaire (56 impr.), épargne solidaire comparatif | Meilleur signal GSC non couvert ; les fonds 90/10 sont absents du catalogue |
| 4 | `comment-choisir-conseiller-investissement-ethique-questions` | P/M | Conseil | conseil finance éthique, comment choisir un CGP éthique | Soutient la page service ; angle « 10 questions à poser » distinct de `cgp-independant-vs-conseiller-bancaire-ethique` |
| 5 | `que-finance-votre-assurance-vie-comment-le-savoir` | W/P | Fondamentaux | que finance mon assurance vie, dans quoi investit mon assurance vie | Coeur de marque (« votre épargne finance quelque chose ») ; trou total |
| 6 | `assurance-vie-isr-frais-reels-combien-ca-coute` | C | Enveloppes | frais assurance vie ISR, assurance vie ISR frais | Big 5 Coût absent du cluster AV (l'audit relève « zéro fourchette de frais ») |
| 7 | `epargne-salariale-solidaire-isr-pee-per-collectif` | W | Fondamentaux | épargne salariale responsable, PEE fonds solidaire, PER collectif ISR | Audience salariée large, sujet totalement absent |
| 8 | `sfdr-refonte-et-regles-esma-noms-de-fonds-ce-qui-change` | W | Labels & Greenwashing | SFDR 2.0, nouvelle classification SFDR, règles ESMA noms de fonds ESG | Absent de tous les articles (audit) ; sert aussi à corriger les passages périmés |

### Vague 2 — à lancer après les premiers retours GSC (2 à 4 semaines)

| # | Slug proposé | Type | Requêtes / raison |
|---|---|---|---|
| 9 | `lire-dic-prospectus-fonds-isr-pas-a-pas` | W/M | « vérifier avant d'affirmer » en pratique ; fort potentiel de citation |
| 10 | `gestion-pilotee-isr-ou-gestion-libre-assurance-vie` | X | Trou catalogue |
| 11 | `fonds-euros-responsables-existent-ils` | P | Trou catalogue, attentes des épargnants prudents |
| 12 | `scpi-frais-fiscalite-rendement-net` | C | scpi verte/responsable ; audit : « aucun chiffre sur frais, fiscalité, liquidité » |
| 13 | `per-trois-compartiments-expliques` | W | Trou relevé par l'audit (compartiments, sorties) |
| 14 | `etf-isr-esg-climat-pab-ctb-differences` | X | etf responsable / eco responsable ; complète `etf-isr-debutants` |
| 15 | `que-exclut-vraiment-un-fonds-isr-fossiles-armes-tabac` | P | Grosse contradiction interne des exclusions V3 ; à faire après vérification sur le référentiel officiel |
| 16 | `legs-association-fiscalite-assurance-vie-transmission` | W | Trou juridique relevé sur `transmettre-patrimoine-engage-fonds-partage` |
| 17 | `financement-participatif-energies-renouvelables-risques` | P | Trou catalogue ; forte exigence de sourçage (plateformes nommées) |
| 18 | `reserve-hereditaire-quotite-disponible-donation-valeurs` | W | Trou relevé sur donation/héritage |

### Vague 3 — décisions humaines requises avant de commencer

| Sujet | Blocage |
|---|---|
| « Meilleures assurances vie ISR 2026 » (Best of nommé) | Nommer des contrats/concurrents = risque juridique et besoin de données datées ; décision de posture à prendre. Le cabinet ne distribue que deux contrats (article « avis » existant) |
| « Meilleures SCPI ISR » avec liste nommée | Besoin de la liste officielle ASPIM datée ; ISIN/rendements = placeholders `[À COMPLÉTER]` tant que non vérifiés |
| « Meilleurs ETF ISR » | ISIN et performances interdits sans vérification ; idem |
| Cas réels anonymisés (registre B) | Requiert des échanges clients réels et la validation du cadre de confidentialité |

## 4. Enrichissements et refontes d'articles existants (pas de nouvel article)

| Article | Action | Priorité |
|---|---|---|
| `heritage-donation-investir-valeurs` | Refonte complète (note audit 4/10 : 0 tableau, 0 chiffre, 0 lien externe) | Haute |
| Cluster PER (`per-ethique-optimiser-retraite`, `preparer-retraite-epargne-alignee-valeurs`, `per-vs-assurance-vie-isr`, `quelle-enveloppe-investissement-ethique`) | Différencier les intentions, dédoublonner plafonds/abattements, un seul chiffre fiscal par fait | Haute |
| `scpi-isr-environnementales-panorama` | Ajouter un tableau à partir de la liste officielle (décision humaine, cf. vague 3) ; réconcilier les chiffres avec `scpi-isr-vs-scpi-classique` | Moyenne |
| `empreinte-carbone-epargne-pourquoi-mesurer` | Corriger l'affirmation « plus lourd que votre empreinte personnelle », requête GSC « epargne impact carbone » | Moyenne |
| `avis-patrimoine-vie-plus-uaf-life-version-absolue` | Mettre à jour les rendements fonds euros 2025 (source officielle) | Haute |
| Articles SFDR / taxonomie / guide complet | Mise à jour SFDR (après article n°8) | Haute |
| Tous | Ajouter `updated` + date de vérification des chiffres | Moyenne |
| Site | Uniformiser la durée du premier échange (30 min vs 45-60 min) | Haute (décision humaine) |

## 5. Règles d'écriture (obligatoires pour chaque brief)

- Structure : résumé exécutif (callout-grenat) → intro PEP → 4 à 8 H2 en vraies requêtes → tableau(x) → cas chiffré registre A **avec disclaimer** → FAQ 5 à 8 questions → conclusion 4R (H2 utile, pas « Conclusion »). Format de fichier et balises : `GUIDE-ARTICLE.md §1`.
- **FAQ via `meta.faq`** + `<FaqArticle items={meta.faq!} />` (import `./faq`) : source unique du JSON-LD FAQPage et du bloc affiché.
- **Anti-fabrication :** tout chiffre réglementaire, taux, plafond, date, statistique = **vérifié sur une source officielle consultée pendant la rédaction** (legifrance, service-public, economie.gouv, BOFiP, AMF, ESMA, EUR-Lex, sites officiels des labels) et lié à côté de l'affirmation. Introuvable = formulation qualitative ou `[À COMPLÉTER : …]`. Aucune citation entre guillemets non vérifiée mot pour mot. Aucun ISIN, aucune performance de fonds.
- **Garde-fous ESG :** jamais de fonds ou société nommé comme greenwashing sans source publique datée ; débats exposés avec substance ; pas de « CGP indépendant » comme statut ; pas de catégorie ORIAS ; EXP Capital seule entité ; « recommandation » = conseil écrit humain ; pas de « conseil/étude personnalisé(e) » ; CTA : « échanger avec un conseiller », « obtenir des pistes » ; premier échange « offert et sans engagement » **sans durée**.
- **Aucun avantage commercial dans le corps** (pas de « nos frais », « chez nous »). La 4R réintroduit le cabinet en une à deux phrases, avec un lien `/cgp-investissement-responsable`.
- **Maillage :** 4 à 6 liens internes commentés (jamais nus) : un vers `/placement-ethique` ou `/cgp-investissement-responsable`, des `LienArticle` vers des articles existants, l'outil pertinent, `/tarifs` quand il est question de frais ; 1 à 3 liens externes officiels.
- **Anti-cannibalisation :** chaque brief précise l'intention distincte par rapport aux articles proches ; ne pas recopier leurs paragraphes, les citer par lien.
- Meta : `title` ≤ 60 caractères, requête principale en tête ; `excerpt` 140-155 caractères ; `date: "2026-09-28"` ; auteur alterné ; pas d'image inventée.

## 6. Briefs détaillés — Vague 1

### 1. `assurance-vie-ethique-ou-classique-differences` (X, Enveloppes, auteur : Sébastien Petrisot)
- **Question d'acheteur :** « Une assurance vie éthique est-elle différente d'une assurance vie classique, en frais, risque et rendement ? »
- **Intention distincte :** compare deux contrats *à l'usage*, alors que `assurance-vie-isr-guide-2026` explique comment choisir. Ne pas refaire la méthode de choix : y renvoyer.
- **H2 candidats :** Qu'est-ce qu'une assurance vie éthique, au juste ? · Y a-t-il une différence de frais entre un contrat éthique et un contrat classique ? · Le risque est-il différent ? · Le rendement est-il différent (ce que les études disent, y compris contradictoires) ? · Le fonds en euros change-t-il ? · Tableau : éthique vs classique (critères : supports, frais, risque, fiscalité, transparence, sortie) · Dans quels cas l'assurance vie classique reste-t-elle un choix cohérent ? (inconvénients de l'éthique cités) · Comment passer d'un contrat classique à une gestion éthique sans le clôturer (arbitrage, transfert : fiscalité, ancienneté).
- **Faits à sourcer :** obligation d'offrir 3 types d'UC (ISR, Greenfin, solidaire) depuis 2022 ; fiscalité AV (avant/après 8 ans, prélèvements sociaux 17,2 %) ; garantie du fonds en euros ; Fonds de garantie (plafond).
- **Liens :** `assurance-vie-isr-guide-2026`, `label-isr-que-garantit-il-vraiment`, `investir-ethique-performance-chiffres`, `quelle-enveloppe-investissement-ethique`, `/outils/comparateur-enveloppes`, `/tarifs`.

### 2. `quel-per-choisir-investir-ethique-criteres` (X/B, Enveloppes, auteur : Alexandre Pollet)
- **Question :** « Comment choisir un PER pour investir de façon éthique : quels critères regarder ? »
- **Intention distincte :** critères de choix d'un PER (gestion pilotée vs libre, gamme ISR, frais, transfert), pas l'optimisation fiscale (`per-ethique-optimiser-retraite`) ni PER vs AV (`per-vs-assurance-vie-isr`). Zéro recopie des plafonds : lien.
- **H2 :** Existe-t-il des PER « éthiques » ? · Les 7 critères pour comparer des PER responsables (gamme UC ISR/Greenfin/solidaires, gestion pilotée : part d'ISR réelle, frais de gestion, frais d'entrée, désensibilisation, transférabilité, qualité de l'information) · Gestion pilotée ou libre pour un PER responsable ? · Tableau : grille de comparaison à remplir soi-même (gabarit) · PER individuel ou collectif d'entreprise : qu'est-ce qui change ? · Les pièges : gestion pilotée « verte » de façade, frais cumulés, blocage · Comment transférer un ancien PER/PERP vers un PER plus responsable ?
- **Faits à sourcer :** obligation loi PACTE de proposer des UC ISR/Greenfin/solidaires dans les PER assurantiels (vérifier le périmètre exact) ; frais de transfert (plafond légal) ; règles de sortie ; désensibilisation.
- **Liens :** `per-vs-assurance-vie-isr`, `per-ethique-optimiser-retraite`, `retraite-capital-ou-rente-per-ethique`, `/outils/per-isr`, `/outils/retraite`, `/placement-ethique`.

### 3. `placement-ethique-solidaire-fonds-90-10-livrets` (W, Fondamentaux, auteur : Alexandre Pollet)
- **Question :** « Qu'est-ce qu'un placement éthique et solidaire (fonds 90/10, livrets solidaires) et comment ça marche ? »
- **Intention distincte :** le fonctionnement concret des fonds solidaires 90/10 et des livrets, en complément de `label-finansol-finance-solidaire` (le label) et de `livrets-epargne-solidaire-alternative-livret-a` (livrets vs Livret A).
- **H2 :** Placement éthique et placement solidaire : quelle différence ? · Comment fonctionne un fonds 90/10 (la part solidaire de 5 à 10 %, entreprises solidaires d'utilité sociale) · Qui finance-t-on concrètement ? · Rendement et risque d'un fonds solidaire · Livret solidaire, fonds solidaire, don d'intérêts : tableau comparatif · Les limites (part solidaire minoritaire, peu de liquidité de certains actifs) · Épargne solidaire et fiscalité (réduction d'impôt éventuelle : à sourcer) · Comment vérifier qu'un produit est bien solidaire (label Finansol, DIC).
- **Liens :** `label-finansol-finance-solidaire`, `livrets-epargne-solidaire-alternative-livret-a`, `epargne-salariale-…` (article 7, si publié), `/outils/decodeur-label`, `/placement-ethique`.

### 4. `comment-choisir-conseiller-investissement-ethique-questions` (P/M, Conseil, auteur : Sébastien Petrisot)
- **Question :** « Quelles questions poser à un conseiller avant de lui confier une épargne éthique ? »
- **Intention distincte :** checklist de 10 questions et signaux d'alerte ; ne recopie pas la comparaison CGP/banque (`cgp-independant-vs-conseiller-bancaire-ethique`) ni la rémunération (`frais-conseiller-gestion-patrimoine-independant`).
- **H2 :** Pourquoi vérifier son conseiller avant ses placements ? · Que doit-on vérifier avant un premier rendez-vous (ORIAS, statut, rémunération, assurance responsabilité : à sourcer) · Les 10 questions à poser (tableau : question / bonne réponse / signal d'alerte) · Comment un conseiller doit-il traiter vos critères de durabilité ? (obligation de recueillir les préférences de durabilité : à sourcer MIF 2 / DDA) · Que faire si les réponses sont floues ? · À quoi ressemble la suite d'un bon rendez-vous (livrables écrits).
- **Attention :** ne pas se présenter comme meilleur ; le cabinet est traité comme n'importe quel autre. Aucune mention du statut CIF. Lien vers `/cgp-investissement-responsable` uniquement en 4R.

### 5. `que-finance-votre-assurance-vie-comment-le-savoir` (W/P, Fondamentaux, auteur : Alexandre Pollet)
- **Question :** « Que finance réellement mon assurance vie (ou mon Livret A, mon PEA) et comment le savoir ? »
- **Intention distincte :** article de marque (« votre épargne finance quelque chose ») : où va l'argent (fonds en euros, UC, dette d'État, entreprises), comment consulter la composition (documents à demander, inventaire de portefeuille).
- **H2 :** Que devient l'argent de mon assurance vie ? · Que finance un fonds en euros ? · Que finance une unité de compte ? · Et mon Livret A, mon LDDS, mon PEA ? (tableau) · Comment savoir concrètement dans quoi mon contrat est investi (pas à pas : relevé annuel, DIC, inventaire, obligation d'information) · Mon contrat finance-t-il des énergies fossiles ? Comment le vérifier sans nommer d'entreprise · Que faire si le résultat ne me convient pas.
- **Faits à sourcer :** destination des fonds du Livret A/LDDS (Caisse des dépôts, part de financement du logement social), obligations d'information des assureurs (relevé annuel).
- **Liens :** `/guide` (diagnostic contrat ISR), `reperer-greenwashing-fonds-vert-methode`, `label-isr-que-garantit-il-vraiment`, `/outils/decodeur-label`, `/placement-ethique`.

### 6. `assurance-vie-isr-frais-reels-combien-ca-coute` (C, Enveloppes, auteur : Sébastien Petrisot)
- **Question :** « Combien coûte réellement une assurance vie ISR (frais d'entrée, de gestion, des supports) ? »
- **Intention distincte :** le Big 5 Coût du cluster AV. Répond frontalement, avec des cas chiffrés registre A (versement, durée, frais) et les ordres de grandeur **publics sourcés**.
- **H2 :** Quels frais paie-t-on dans une assurance vie ISR ? (entrée, gestion du contrat, frais des supports, arbitrage) · Combien coûtent en moyenne les contrats ? (sources : études/relevés publics, sinon qualitatif) · Un fonds ISR coûte-t-il plus cher qu'un fonds classique ? · Tableau : postes de frais, qui les perçoit, ordre de grandeur · Exemple chiffré : l'effet cumulé de 0,5 point de frais sur 15 ans (registre A, hypothèses justifiées, disclaimer) · Comment repérer les frais cachés (rétrocessions, frais sur UC) · Frais négociables ? Ce que dit la pratique · Que demander avant de signer.
- **Règle :** pas de « nos frais » dans le corps. La grille du cabinet est publiée sur `/tarifs` : y renvoyer, sans comparaison flatteuse. Toute moyenne du marché : source officielle datée ou aucun chiffre.
- **Liens :** `frais-conseiller-gestion-patrimoine-independant`, `investir-ethique-petit-budget`, `assurance-vie-isr-guide-2026`, `/tarifs`, `/outils/comparateur-enveloppes`.

### 7. `epargne-salariale-solidaire-isr-pee-per-collectif` (W, Fondamentaux, auteur : Alexandre Pollet)
- **Question :** « Mon épargne salariale (PEE, PER collectif) peut-elle être investie de façon responsable ou solidaire ? »
- **Intention distincte :** sujet totalement absent : les salariés ont déjà un PEE/PER collectif et ignorent ce qu'ils y détiennent.
- **H2 :** Qu'est-ce que l'épargne salariale (PEE, PER collectif, participation, intéressement) ? · Y a-t-il des fonds ISR ou solidaires dans mon plan ? (obligation de proposer un fonds solidaire : à sourcer) · Comment lire la liste des fonds proposés par mon employeur · Fonds solidaire d'épargne salariale : comment ça marche · Tableau : PEE vs PER collectif (blocage, fiscalité, abondement) · Peut-on transférer son épargne salariale ? · Mon épargne est bloquée : quelles sont les exceptions ? · Questions à poser à mon employeur ou à mon teneur de compte.
- **Faits à sourcer :** obligations légales de proposer un fonds solidaire, cas de déblocage anticipé, abondement, forfait social/CSG.
- **Liens :** `per-vs-assurance-vie-isr`, `placement-ethique-solidaire-fonds-90-10-livrets` (article 3), `label-finansol-finance-solidaire`, `/outils/decodeur-label`, `/placement-ethique`.

### 8. `sfdr-refonte-et-regles-esma-noms-de-fonds-ce-qui-change` (W, Labels & Greenwashing, auteur : Sébastien Petrisot)
- **Question :** « La réforme du SFDR et les règles sur les noms de fonds changent-elles ce que je lis sur mes fonds ? »
- **Intention distincte :** actualité réglementaire absente de tout le site : (1) où en est la révision du SFDR (proposition de la Commission de novembre 2025, statut de la négociation à la date de rédaction), (2) lignes directrices ESMA sur les noms de fonds (application et effets sur les mots « ESG », « durable », « transition »).
- **H2 :** Qu'est-ce que le SFDR aujourd'hui (rappel en 5 lignes, lien vers `sfdr-article-8-ou-9-ce-que-ca-garantit`) · Pourquoi le SFDR est-il réformé ? · Que prévoit la révision (catégories proposées) et où en est-on ? · Qu'est-ce que ça change pour un épargnant, concrètement ? · Que disent les lignes directrices ESMA sur les noms de fonds ? · Tableau : avant/après/à surveiller · Comment lire un fonds pendant la période de transition ? · Faut-il attendre pour investir ?
- **Attention critique :** **le statut de la révision est mouvant** : sourcer exclusivement sur commission.europa.eu, europarl.europa.eu, consilium.europa.eu, esma.europa.eu, EUR-Lex ; dater chaque affirmation (« à la date du … ») ; en cas de doute, écrire ce qui est établi et ce qui ne l'est pas. **Ne pas** reprendre les dates du rapport d'audit (source secondaire non officielle).
- **Liens :** `sfdr-article-8-ou-9-ce-que-ca-garantit`, `taxonomie-verte-europeenne-epargne`, `label-isr-que-garantit-il-vraiment`, `reperer-greenwashing-fonds-vert-methode`, `/outils/decodeur-label`.

## 7. Journal

| Date | Action |
|---|---|
| 2026-09-28 | Création du backlog ; lancement de la vague 1 (8 articles) |
