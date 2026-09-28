# Audit batch 01 (8 articles) — placement-ethique.fr

Lecture seule, aucun fichier du repo modifié. Chaque article lu en entier. Les chiffres externes (ESMA, SDES, Oxfam, AMF, DPE, etc.) n'ont PAS été re-vérifiés en ligne (pas d'accès web dans cette passe) : ils sont marqués « à recouper » quand ils portent un risque.

Mesures automatiques (meta) :

| slug | title (car.) | excerpt (car.) | mots corps ≈ | H2 | tableaux | LienArticle | liens ext. |
|---|---|---|---|---|---|---|---|
| empreinte-carbone-epargne-pourquoi-mesurer | 66 | 152 | 2 500 | 9 | 1 | 4 | 5 |
| engagement-actionnarial-vs-exclusion | 70 | 160 | 3 200 | 9 | 1 | 4 | 3 |
| etf-isr-debutants | 75 | 144 | 2 700 | 8 | 2 | 4 | 4 |
| foncieres-cotees-scpi-immobilier-durable-bourse | 92 | 157 | 2 700 | 8 | 1 | 4 | 5 |
| frais-conseiller-gestion-patrimoine-independant | 66 | 167 | 3 100 | 8 | 2 | 3 | 4 |
| heritage-donation-investir-valeurs | 77 | 182 | 2 400 | 5 | 0 | 6 | 0 |
| investir-ethique-performance-chiffres | 74 | 167 | 2 800 | 8 | 1 | 4 | 6 |
| investir-ethique-petit-budget | 77 | 157 | 2 600 | 8 | 1 | 4 | 4 |

Tous les titres dépassent 60 caractères ; 5 excerpts sur 8 dépassent 155.

---

## Constats transverses (à traiter en lot)

1. **Meta trop longues** : 8/8 titles > 60 car. (jusqu'à 92), 5/8 excerpts > 155 (jusqu'à 182). Propositions article par article ci-dessous. Note : le GUIDE-ARTICLE §1 autorise 140-170 pour l'excerpt, mais la cible SEO réelle est ≤ 155.
2. **Aucun article n'a de champ `updated`** alors que plusieurs reposent sur des données/réglementations qui bougent (SFDR, nommage des fonds ESMA, fiscalité du capital 2026, calendrier DPE, rapport ESMA). Ajouter `updated` et une date « chiffres arrêtés à » dans le corps. Point réglementaire transversal à traiter : la proposition de refonte de SFDR (catégories remplaçant Article 8/9) et les lignes directrices ESMA sur les noms de fonds (utilisation de « ESG », « sustainable », « transition », entrées en application fin 2024 / mai 2025) ne sont mentionnées dans aucun des 8 articles alors qu'ils parlent tous d'Article 8/9 ou de « nom du produit n'est pas un contrat ». À recouper sur sources officielles avant d'écrire.
3. **Peu de chiffres / zéro exemple chiffré** dans les articles « coût » et « petit budget » et « héritage » : les guides Sheridan et les concurrents (Goodvest, Nalo, Meilleurtaux) donnent des cas chiffrés. Le registre A (persona + disclaimer d'illustration) est absent des 8 articles. Cible : 1 cas chiffré par article coût/budget/héritage.
4. **Affirmations « vécues » non vérifiables** : « conversation que nous avons chaque semaine » (foncières), « règle que nous appliquons en rendez-vous » (performance), « une majorité de premiers échanges débouchant sur un accompagnement rémunéré » (frais — statistique interne inventée, à supprimer), « sans minimum requis » (petit-budget — engagement commercial non présent dans le brief). À supprimer ou passer en registre B pluriel générique validé par le cabinet.
5. **Réintroduction 4R en boilerplate** : « c'est notre métier… premier échange offert… sans jargon et sans engagement » est quasi identique dans 6/8 articles, sans lien vers /contact ni vers la future page /conseiller-investissement-responsable (seul frais-conseiller renvoie à /contact). Duplication + CTA non cliquable.
6. **Maillage sortant vers les pages stratégiques absent** : aucun des 8 ne pointe vers /placement-ethique (pilier), /conseiller-investissement-responsable, /questions, /enveloppes, /placements ; /outils/comparateur-enveloppes, /outils/profil-investisseur (sauf ETF), /outils/portefeuilles-types, /tarifs (sauf frais) sont sous-utilisés.

---

## 1. empreinte-carbone-epargne-pourquoi-mesurer

**Verdict : Améliorable — 6,5/10.** Requête cible probable : « empreinte carbone épargne » / « empreinte carbone assurance vie ».

Structure : résumé exécutif OK, intro PEP OK, 9 H2 en requêtes OK, 1 tableau (7 supports) OK, processus 4 étapes OK, FAQ 6 OK, 4R OK. Structure conforme, c'est le fond qui pose problème.

### Problèmes
1. **HAUTE — Définition erronée de l'intensité carbone.** « L'intensité carbone (WACI)… rapporte les émissions au chiffre d'affaires… s'exprime en tonnes de CO2 par million d'euros investis (tCO2e/M€) ». La WACI se rapporte au **million d'euros de chiffre d'affaires**, pas d'euros investis ; l'indicateur « par million investi » est l'empreinte carbone (SFDR PAI 2). Le résumé exécutif répète l'erreur (« intensité carbone (en tonnes de CO2 par million d'euros investis) »). Correctif : distinguer explicitement 3 mesures — émissions financées (absolues), empreinte carbone (tCO2e/M€ investi), WACI (tCO2e/M€ de CA) — et nommer la référence méthodologique (PCAF) pour crédibiliser.
2. **HAUTE — Affirmation centrale non étayée.** Le résumé et la conclusion disent que ce chiffre « peut peser bien plus lourd que votre empreinte personnelle », « euro pour euro, bien plus lourd sur le climat que votre consommation directe ». Or l'article admet lui-même que le chiffre agrégé des banques « ne se divise pas par le nombre de clients ». Aucun calcul ne relie 50 000 € d'épargne à des tonnes. Correctif : soit un cas chiffré registre A (ex. « 50 000 € investis dans un fonds à X tCO2e/M€ investi ≈ Y t/an », hypothèses + disclaimer), soit reformuler qualitativement sans « plus lourd ».
3. **HAUTE — Mélange de deux grandeurs.** 8,2 t/hab = empreinte carbone (consommation, importations comprises) ; « 4,5 fois les émissions totales de la France » (Oxfam) compare aux émissions territoriales ; l'article écrit ensuite « dépassait déjà… l'empreinte du territoire national ». Confusion empreinte/émissions territoriales. Chiffre 2018, article publié en 2026 : dire explicitement « données 2018 ». À recouper : valeur 8,2 t pour 2024 sur la page SDES citée.
4. **MOYENNE — Sur-promesse Article 9.** Tableau : Article 9 climat « univers restreint… aux émetteurs alignés… objectif chiffré de réduction suivi » ; FAQ : « en général oui » plus faible qu'Article 8. SFDR n'impose pas cela à l'Article 9 (fonds sociaux, impact, etc.). L'article contredit sa propre nuance (« classification = intention »). Correctif : limiter à « Article 9 à objectif de réduction d'émissions / indices PAB-CTB ».
5. **MOYENNE — SFDR/PAI formulés trop largement.** « SFDR impose désormais aux acteurs… de publier PAI 1 et 2 » : obligation stricte pour les grands acteurs (> 500 salariés), « comply or explain » pour les autres, et refonte SFDR en cours. Ajouter la nuance + date.
6. **MOYENNE — Manque d'ordre de grandeur concret.** Aucun chiffre d'intensité (indice large vs fonds climat) ni exemple de lecture d'une fiche fonds. Pour battre les pages concurrentes : capture/exemple « où lire la ligne carbone dans un reporting », avec valeurs marquées `[À COMPLÉTER : source MSCI/fournisseur]`, jamais de valeur de mémoire.
7. **BASSE** — Citation Novethic (« au-delà d'une vingtaine d'acteurs engagés ») à recouper ; « premier pays au monde… 2015 » à sourcer (lien article 173 manquant, seul l'art. 29 est lié).
8. **BASSE** — « Voici la méthode que nous suivons… avec un épargnant » : texture non vérifiable, acceptable si validée.

### Correctifs SEO
- Title (66) : « Empreinte carbone de l'épargne : comment la mesurer ? » (54).
- Excerpt (152, OK) : garder, mais corriger si l'affirmation « ne compensent pas » est retirée.

### Liens à ajouter
1. → `/articles/obligations-vertes-vs-obligations-classiques`, ancre « ce qui distingue une obligation verte d'une obligation classique », dans le paragraphe « À retenir » sous le tableau (ligne obligations vertes).
2. → `/articles/taxonomie-verte-europeenne-epargne`, ancre « la taxonomie verte européenne », H2 « Comment se calcule concrètement… » après le paragraphe sur les scopes.
3. → `/articles/reperer-greenwashing-fonds-vert-methode`, ancre « repérer le greenwashing d'un fonds vert », juste après le callout « Signal d'alerte ».
4. → `/articles/assurance-vie-isr-guide-2026`, ancre « choisir une assurance vie ISR », étape 4 « Corriger ».
5. → `/placement-ethique`, ancre « investir de façon éthique », dernier paragraphe d'intro ou conclusion ; option : `/outils/portefeuilles-types` ancre « exemples de portefeuilles types (illustratifs) » à l'étape 3 « Comparer », avec l'AVERTISSEMENT_PROFIL_TYPE, sans lien avec un quiz.

---

## 2. engagement-actionnarial-vs-exclusion

**Verdict : Complet — 8/10.** Requête cible : « exclusion ou engagement ISR » / « engagement actionnarial ISR ».

Structure : toutes les briques (résumé, PEP, H2 requêtes, tableau comparatif à 6 lignes, processus « preuve par quatre », FAQ 7, 4R). Meilleur article du lot : débat exposé avec substance, sources académiques nommées, grille de lecture assumée conforme au GUIDE §2.3.

### Problèmes
1. **MOYENNE — Affirmation Label ISR sans seuils.** « Le nouveau référentiel… exclut les entreprises qui exploitent du charbon ou des hydrocarbures non conventionnels » alors que l'étape 1 du même article exige « des seuils, pas des slogans ». Ajouter les seuils du référentiel (source : lien Trésor déjà présent) ou reformuler « exclut, au-delà de seuils fixés par le référentiel, … ». À recouper.
2. **MOYENNE — Plancher d'exclusions incomplet.** « SFDR n'impose ni l'un ni l'autre » est exact, mais les lignes directrices ESMA sur les noms de fonds imposent désormais des exclusions (PAB/CTB) aux fonds qui utilisent certains termes. Manque dans la partie réglementaire. À recouper (dates d'application).
3. **MOYENNE — Évidence quantitative absente.** Beaucoup de « la recherche montre » avec une seule référence (Kölbel et al.). Ajouter 1 ou 2 références sourcées supplémentaires sur l'effet du désinvestissement sur le coût du capital et sur des campagnes d'engagement collectives (sources publiques uniquement, sans nommer d'entreprise fautive).
4. **BASSE** — « Des ONG reprochent… des chercheurs reprochent… » sans source ; ajouter un lien ou retirer.
5. **BASSE** — Résumé exécutif de 9 lignes : trop long pour un « résumé 2-4 phrases » (GUIDE §4.1). Couper à 4 phrases.
6. **BASSE** — Catégorie « Performance » (imposée par le plan §3) alors que le sujet est stratégique ; sans incidence SEO.
7. Manque : ce que cela change pour l'épargnant en assurance vie/PER (le droit de vote est exercé par la société de gestion, pas par lui) — une phrase + lien vers l'enveloppe.

### Correctifs SEO
- Title (70) : « Exclusion ou engagement actionnarial : quelle stratégie ISR ? » (60).
- Excerpt (160) : « Vendre une action ne coupe pas ses financements ; voter en assemblée peut faire bouger l'entreprise. Exclusion et engagement comparés, preuves à l'appui. » (~150).

### Liens à ajouter
1. → `/articles/obligations-vertes-vs-obligations-classiques`, ancre « les obligations vertes, un levier côté marché primaire », H2 « Vendre une action prive-t-elle vraiment… » après la phrase sur le marché primaire.
2. → `/articles/sfdr-article-8-ou-9-ce-que-ca-garantit`, ancre « ce que garantissent vraiment l'Article 8 et l'Article 9 », paragraphe « La classification européenne SFDR, elle… » (SFDR cité sans lien).
3. → `/articles/etf-isr-debutants`, ancre « comment lire les exclusions de l'indice d'un ETF ISR », ligne « Comment le vérifier » de l'exclusion ou H2 « Comment vérifier ce qu'un fonds fait vraiment ».
4. → `/outils/empreinte-carbone-epargne`, ancre « estimer l'empreinte carbone de votre épargne », après le paragraphe sur la « cohérence immédiate ».
5. → `/placement-ethique`, ancre « investir de façon éthique : par où commencer », conclusion ; et `/conseiller-investissement-responsable`, ancre « échanger avec un conseiller en investissement responsable », dans le paragraphe de réintroduction.

---

## 3. etf-isr-debutants

**Verdict : Complet — 7,5/10.** Requête cible : « ETF ISR » / « choisir un ETF ISR » / « meilleur ETF ISR débutant ».

Structure complète : résumé, PEP, 8 H2 dont plusieurs en requêtes, 2 tableaux (familles d'indices ; enveloppes), processus « quatre documents », FAQ 8, 4R. Sources officielles solides (règlement 2020/1818, MSCI, service-public).

### Problèmes
1. **MOYENNE — Nommage réglementaire manquant.** Le message « le nom du produit n'est pas un contrat » est central, mais les règles ESMA sur les noms de fonds (seuil d'investissement, exclusions PAB pour « sustainable ») changent la donne pour les termes ESG/SRI/sustainable. À intégrer (à recouper). Idem SFDR refonte.
2. **MOYENNE — Coût imprécis.** « Une fraction des frais d'un fonds actif », « quelques dizaines ou centaines d'euros » : aucun ordre de grandeur de frais courants (TER) ni exemple, alors que la rubrique « Combien coûte » est un H2. Correctif : fourchette sourcée (ex. rapport ESMA déjà cité dans l'article performance : frais courants moyens ETF actions ESG 0,25 %) ou `[À COMPLÉTER]`.
3. **MOYENNE — Fiscalité datée sans taux.** « Prélèvement forfaitaire unique ou barème » sans taux ; à vérifier si le taux global du PFU/prélèvements sociaux a été modifié par la loi de financement 2026 avant tout chiffre. Ne pas écrire de taux de mémoire.
4. **BASSE** — Résumé exécutif : « vous protège de l'essentiel du greenwashing » = sur-promesse. Remplacer par « réduit fortement le risque de se tromper d'étiquette ».
5. Manque de sous-questions attendues : réplication physique vs synthétique, ETF capitalisant/distribuant, tracking difference, courtier vs assurance vie (frais de courtage), ETF ISR monde éligible PEA vs CTO (déjà touché en FAQ). Un tableau « 3 vérifications × où les trouver » serait utile.
6. Cohérence avec `investir-ethique-petit-budget` : celui-ci recommande le PEA « pour les ETF à moindres frais » alors que cet article explique que l'offre ISR éligible au PEA est étroite. Harmoniser.

### Correctifs SEO
- Title (75) : « ETF ISR pour débutants : comment choisir en 4 documents » (56).
- Excerpt (144, OK) : conserver.

### Liens à ajouter
1. → `/articles/engagement-actionnarial-vs-exclusion`, ancre « exclusion ou engagement : ce que change vraiment chaque stratégie », H2 « Pourquoi deux ETF “ISR” peuvent-ils contenir des portefeuilles très différents ? », après le paragraphe exclusion vs best-in-class.
2. → `/articles/quelle-enveloppe-investissement-ethique`, ancre « quelle enveloppe choisir pour investir éthique », H2 « PEA, assurance vie ou compte-titres… », après le tableau ; en complément `/outils/comparateur-enveloppes`, ancre « comparer les enveloppes chiffres en main ».
3. → `/articles/assurance-vie-isr-guide-2026`, ancre « choisir une assurance vie ISR », ligne assurance vie du tableau / paragraphe suivant.
4. → `/outils/simulateur`, ancre « mesurer l'effet des frais sur vingt ans », H2 « Combien coûte un ETF ISR ».
5. → `/outils/empreinte-carbone-epargne`, ancre « estimer l'empreinte carbone de votre allocation », paragraphe sur les indices PAB/CTB ; + `/placement-ethique` en conclusion.

---

## 4. foncieres-cotees-scpi-immobilier-durable-bourse

**Verdict : Améliorable — 6,5/10.** Requête cible probable : « SCPI en bourse ? » / « foncières cotées vs SCPI » / « immobilier durable bourse » (volume faible ; les vraies requêtes sont « SCPI cotée ou non » et « investir dans l'immobilier en bourse »).

Structure complète (résumé, PEP, H2 requêtes, tableau 3 véhicules, méthode « Parc → Trajectoire → Preuve », FAQ 8, 4R). Bien sourcé (BOFiP, service-public, ministère).

### Problèmes
1. **HAUTE (SEO) — Title de 92 caractères**, coupé en SERP. Title/H1 à recentrer.
2. **MOYENNE — Aucun chiffre de marché ni de coût.** « Frais d'entrée élevés » sans chiffre, alors que le brief §2.4 documente ~12 % de frais d'entrée SCPI (~6 % rétrocédés) : c'est le sujet « coût » du Big 5 traité de façon évasive dans une comparaison SCPI/foncières. Aucun rendement, aucune décote sur ANR (concept clé des foncières cotées), aucune fiscalité SCPI (revenus fonciers, IFI). Ajouter au moins une ligne « frais d'entrée » et « fiscalité » dans le tableau, avec les chiffres du brief ou sourcés.
3. **MOYENNE — Réglementaire à recouper avant republication** : calendrier DPE (G interdit 2025, F 2028, E 2034) — vérifier les évolutions législatives/réglementaires récentes ; exclusion SIIC du PEA « depuis octobre 2011 » (exactitude de la date à recouper sur le BOFiP cité) ; portée du reporting de durabilité européen (mentionné « de plus en plus encadré » sans précision, alors que le périmètre CSRD est en cours de révision).
4. **MOYENNE — ETF immobiliers « verts » non identifiés.** « Il en existe des déclinaisons vertes, qui pondèrent… » : aucune méthodologie ni source. Anti-fabrication : citer l'indice (nom public du fournisseur) ou retirer.
5. **BASSE** — « une conversation que nous avons chaque semaine au cabinet » : non vérifiable.
6. **BASSE** — OPCI en une phrase ; pas de ligne dans le tableau alors que le titre de section suggère un panorama « pierre-papier ».
7. Manque : SCPI dans l'assurance vie (frais d'entrée/gestion cumulés), SCPI à crédit, SCPI européennes vs françaises (renvoi article dédié), risques de liquidité chiffrés (délais de retrait publiés dans les rapports).

### Correctifs SEO
- Title (92) : « Immobilier durable en bourse : foncières cotées, ETF ou SCPI ? » (62 → couper « durable » si besoin : « Immobilier en bourse : foncières cotées, ETF ou SCPI ? » = 56).
- Excerpt (157) : OK, réduire de 2-3 caractères : « Oui, via foncières cotées (SIIC) et ETF immobiliers. Les SCPI, non cotées, sont un autre univers. Ce que “durable” garantit vraiment pour chacun. »

### Liens à ajouter
1. → `/articles/scpi-isr-environnementales-panorama`, ancre « panorama des SCPI ISR et environnementales », H2 « Une SCPI, est-ce que c'est de la bourse ? » en fin de section.
2. → `/articles/assurance-vie-isr-guide-2026`, ancre « loger une SCPI ou un ETF dans une assurance vie ISR », ligne « Enveloppes possibles » du tableau (paragraphe post-tableau).
3. → `/articles/taxonomie-verte-europeenne-epargne`, ancre « la taxonomie verte européenne appliquée à l'immobilier », H3 « Côté véhicule : labels, classification SFDR et reporting ».
4. → `/enveloppes`, ancre « comparer les enveloppes d'investissement », paragraphe post-tableau (enveloppes) ; et `/tarifs`, ancre « nos frais d'entrée sur les SCPI, détaillés », si une ligne « frais d'entrée ~12 % » est ajoutée.
5. → `/placements`, ancre « les placements que nous présentons », conclusion ; `/placement-ethique` en complément.

---

## 5. frais-conseiller-gestion-patrimoine-independant

**Verdict : Améliorable — 6/10.** Requête cible : « combien coûte un CGP » / « honoraires CGP » / « rémunération conseiller en gestion de patrimoine ».

Structure : très bonne (résumé, PEP, H2 requêtes, 2 tableaux, processus en 5 étapes, FAQ 7, 4R). L'honnêteté du fond est un vrai différenciant (limites du modèle rétrocession nommées). Mais **plusieurs points touchent aux règles non négociables et à l'anti-fabrication** : c'est l'article le plus risqué du lot.

### Problèmes
1. **HAUTE — Qualification de la catégorie ORIAS, interdite par le brief §2.2.** « le statut sous lequel opère notre cabinet pour l'assurance vie et le PER » (IAS) et « immatriculée à l'ORIAS au titre de l'intermédiation en assurance et en opérations de banque — pas au titre de CIF » (FAQ + étape 4). Le brief impose : « citer uniquement le numéro (25005915) et renvoyer vers orias.fr, sans qualifier la catégorie… plus précisément que ce qui est vérifié ». À corriger (ne garder que « n'est pas CIF » + numéro + lien orias.fr), ou faire valider et documenter la catégorie exacte dans le brief.
2. **HAUTE — Statistique interne inventée.** « une majorité de premiers échanges débouchant, à terme, sur un accompagnement rémunéré » : donnée non fournie ni vérifiable → supprimer ou remplacer par `[À COMPLÉTER]` / formulation qualitative.
3. **HAUTE — Étude AMF non sourcée et sur-interprétée.** Le chiffre « ~8 % des CIF en conseil indépendant, octobre 2024 » n'a aucun lien externe, alors qu'il porte tout le résumé exécutif. Par ailleurs « indépendant » au sens MIF2 n'équivaut pas à « rémunéré exclusivement par honoraires » pour l'ensemble de l'écosystème (et l'étude ne concerne que les CIF, pas les IAS), et le corps du texte glisse ensuite à « l'immense majorité des conseillers », « plus de 90 % … rétrocessions ». Ajouter le lien AMF et restreindre la portée (« parmi les CIF »), sinon retirer.
4. **HAUTE — Promesse de transparence non tenue.** L'H2 « Combien touche un CGP sur mon contrat d'assurance vie ou de PER ? » n'annonce aucun chiffre ; la grille donne frais d'entrée et de gestion totaux mais pas la part rétrocédée sur AV/PER (le brief ne la fournit que pour SCPI ~6 %). Ajouter explicitement `[À COMPLÉTER : part rétrocédée au cabinet sur frais d'entrée et de gestion AV/PER]` ou une phrase renvoyant à /tarifs — sans inventer. Idem « Girardin industriel ~6 % » : hors sujet éthique et à forte connotation défiscalisation, à reconsidérer ou expliquer.
5. **MOYENNE — Contradiction réglementaire interne.** L'étape 3 affirme « Votre conseiller a l'obligation réglementaire d'y répondre » (montant de la rétrocession) alors que l'étape 1 cite pour les IAS l'obligation d'indiquer la **nature** de la rémunération (L.521-2). Distinguer CIF (inducements) et IAS (nature) ; à valider en conformité. Idem médiation AMF pour une SCPI vendue par un cabinet non CIF : point de conformité à confirmer.
6. **MOYENNE — Prix concurrent non daté.** « un cabinet fee-only que nous avons consulté » + fourchettes 150-400 €/h, 0,2-0,6 % : lien unique, non daté ; la phrase-lien de 40 mots est en ancre. Ajouter « relevé le [date] », vérifier, réduire l'ancre.
7. **MOYENNE — Aucun cas chiffré.** Pas de simulation type « 50 000 € en AV : X € d'entrée + Y €/an » (registre A + disclaimer d'illustration) ni comparaison à 10/20 ans honoraires vs rétrocessions — c'est la valeur ajoutée attendue d'un article « coût » et ce qui rendrait la page citable.
8. **BASSE** — GUIDE §2.5 (pas d'avantage commercial dans le corps) : la section « ce que ça donne chez nous » est défendable au titre de la transparence radicale (brief §2.3), mais l'H2 n'est pas une requête ; reformuler en question (« Combien coûte concrètement le cabinet EXP Capital ? »).
9. **BASSE** — « recommander un produit » (FAQ 1) : usage courant, pas le sens réservé ; préférer « orienter/proposer ».
10. Titre et slug parlent de « CGP indépendant » alors que le corps précise que l'« indépendance » au sens réglementaire est rare et que le cabinet est en rétrocessions : risque de lecture trompeuse. Préciser dans le title ou l'intro.

### Correctifs SEO
- Title (66) : « Combien coûte un CGP ? Honoraires, rétrocessions, frais » (55).
- Excerpt (167) : « Un CGP est rarement payé en honoraires : il est rémunéré par des rétrocessions intégrées aux frais du produit. Comment ça marche, chiffres à l'appui. » (~150).

### Liens à ajouter
1. → `/articles/cgp-independant-vs-conseiller-bancaire-ethique`, ancre « CGP indépendant ou conseiller bancaire : qui choisir ? », H2 « Honoraires ou rétrocessions : quel modèle est le plus honnête ? » après le tableau.
2. → `/articles/avis-patrimoine-vie-plus-uaf-life-version-absolue`, ancre « notre analyse des contrats Patrimoine Vie Plus et Version Absolue 2 », H2 « Exemple concret… » sous le tableau de grille.
3. → `/articles/assurance-vie-isr-guide-2026`, ancre « ce que coûte réellement une assurance vie ISR », H2 « Combien touche un CGP sur mon contrat… » (couche frais de support).
4. → `/outils/comparateur-enveloppes`, ancre « comparer les frais des enveloppes », après la grille ; + `/questions`, ancre « toutes les questions fréquentes sur notre rémunération », conclusion.
5. → `/conseiller-investissement-responsable`, ancre « comment nous accompagnons en investissement responsable », paragraphe final (à côté de /tarifs et /contact déjà présents).

---

## 6. heritage-donation-investir-valeurs

**Verdict : Faible — 4/10.** Requête cible : « que faire d'un héritage » / « comment placer un héritage » / « placer une donation reçue » (très concurrentielle : banques, Boursorama, Meilleurtaux).

Structure : résumé et PEP OK, 5 H2 seulement (GUIDE demande 4-8 : OK), **0 tableau** alors que trois enveloppes sont pesées, **0 lien externe**, **0 chiffre**, pas de processus numéroté, FAQ 7 OK, 4R OK. L'angle émotionnel (ne pas se précipiter, un placement n'est pas un objet de mémoire) est un vrai plus mais l'article n'apporte presque aucune information actionnable et renvoie l'essentiel à d'autres articles.

### Problèmes
1. **HAUTE — Utilité réelle insuffisante.** Aucun élément concret d'un vrai « après-héritage » : délai de déclaration de succession et conséquences, rôle du notaire et comptes bloqués/déblocage des fonds, assurance vie du défunt (capital décès, option de clause bénéficiaire, disponibilité des fonds), plafonds/taux des livrets pour parquer la somme (à sourcer sur service-public/Banque de France), combien garder en précaution. Sans cela, le lecteur ne peut pas agir : concurrence bien plus utile.
2. **HAUTE — Point fiscal clé absent : la valeur d'acquisition des biens hérités** (plus-values latentes purgées au décès — à sourcer sur impots.gouv/BOFiP) : c'est ce qui rend possible une réorientation d'un portefeuille hérité sans grosse imposition ; la FAQ « garder ou vendre » ne le dit pas. À recouper avant écriture.
3. **HAUTE — Le résumé et deux sections renvoient ailleurs** pour l'essentiel (« direction notre article dédié » ×2, `donation-transmission-coherence-valeurs` cité deux fois, `assurance-vie-isr-guide-2026` deux fois). Le renvoi fiscal pointe vers un article qui traite surtout la donation de son vivant et l'assurance vie (abattements donation 100 000 €, AV 152 500 €), pas les droits de succession sur héritage reçu. Promesse « chiffres vérifiés à l'appui » partiellement hors-sujet.
4. **MOYENNE — Pas de tableau comparatif** (AV / PER / SCPI / livret / remboursement de crédit : liquidité, fiscalité, horizon, risque). À ajouter — c'est aussi un extrait citable.
5. **MOYENNE — Aucun cas chiffré.** Ex. registre A « 100 000 € reçus : 20 000 € précaution, 60 000 € AV, 20 000 € PER/SCPI » avec hypothèses et disclaimer — sans lien avec un quiz ; présenté comme exemple, pas comme piste personnalisée (attention au vocabulaire « pistes »). L'article « où placer 50 000, 100 000 ou 300 000 € » existe déjà : éviter la redondance en le liant plutôt qu'en dupliquant.
6. **MOYENNE — Assertions générales sans source** : « le cadre fiscal (AV) devient intéressant dès que le contrat prend de l'ancienneté » (8 ans, à chiffrer avec lien), « avantage fiscal à l'entrée du PER », inflation sur compte courant, remboursement de crédit. Ajouter 2-3 liens officiels (service-public, impots.gouv).
7. **BASSE** — PER et SCPI ISR suggérés sans mise en garde de risque/liquidité au-delà d'une phrase : ajouter la mention perte en capital / blocage / frais d'entrée SCPI (brief : ~12 %).
8. **BASSE** — reading time « 11 min » surestimé (≈ 2 400 mots ≈ 9-10 min) ; aucun élément de type FAQPage à signaler mais 0 lien externe = faible signal E-E-A-T.

### Correctifs SEO
- Title (77) : « Que faire d'un héritage ou d'une donation ? L'investir selon vos valeurs » (73) → « Héritage ou donation : où le placer selon vos valeurs ? » (55).
- Excerpt (182 — trop long) : « Héritage ou donation reçue : sécurisez d'abord, décidez ensuite. Les enveloppes cohérentes avec vos valeurs, sans précipitation. » (~135).
- Ajouter dans un H2 la requête exacte « que faire d'un héritage de 50 000 €, 100 000 € ? ».

### Liens à ajouter
1. → `/articles/quelle-enveloppe-investissement-ethique`, ancre « quelle enveloppe pour investir éthique », H2 « Quelles enveloppes pour un capital reçu en une fois ? », en tête de section ; + `/outils/comparateur-enveloppes` ancre « comparer AV, PER et SCPI selon votre horizon ».
2. → `/articles/per-ethique-optimiser-retraite`, ancre « optimiser sa retraite avec un PER éthique », paragraphe « Le PER mérite d'être envisagé… ».
3. → `/articles/scpi-isr-environnementales-panorama`, ancre « quelles SCPI ISR existent en France », paragraphe « Les SCPI ISR peuvent constituer… ».
4. → `/articles/transmettre-patrimoine-engage-fonds-partage`, ancre « transmettre un patrimoine engagé et fonds de partage », H2 « Comment concilier la mémoire du défunt… », fin de section ; ou `/articles/assurance-vie-enfants-transmettre-valeurs`, ancre « ouvrir une assurance vie à ses enfants ».
5. → `/outils/profil-investisseur`, ancre « situer votre tolérance au risque », paragraphe sur l'arbitrage entre enveloppes ; + `/placement-ethique` en 4R.

---

## 7. investir-ethique-performance-chiffres

**Verdict : Complet — 8/10.** Requête cible : « ISR performance » / « investissement éthique rentabilité » / « fonds ISR moins rentables ? ».

Structure : impeccable (résumé, PEP, H2 requêtes, tableau chiffré ESMA, règle des « quatre mêmes », FAQ 7, 4R). Sources primaires (Friede et al., NYU Stern, ESMA). Débat exposé sans parti pris (GUIDE §2.3-2.4 respectés).

### Problèmes
1. **HAUTE (risque) — 20 chiffres du tableau ESMA à recouper ligne par ligne** avec le PDF cité (période 2020-2024, définition ESG Morningstar) avant toute republication ; toute erreur ici décrédibilise l'article dont c'est l'argument. Idem « trois fonds actions durables sur quatre… moitié haute » (Morningstar 2020) et NYU 59 % / 14 %.
2. **MOYENNE — Lecture minimisante du tableau.** ETF actions : 9,2 % vs 10,1 %/an (≈ −0,9 point/an, soit plusieurs points cumulés sur 5 ans) est qualifié de « légèrement derrière » ; le résumé dit « au coude-à-coude » et « frais inférieurs » alors que pour les ETF et les mixtes les frais ESG sont plus élevés. Nuancer, d'autant que l'article `etf-isr-debutants` conseille les ETF.
3. **MOYENNE — Assertion non démontrée** : « Un écart de 0,5 point de frais annuels pèse, sur vingt ans, du même ordre que les écarts de performance… ». Ajouter un calcul (registre A, hypothèses justifiées + disclaimer) — c'est l'exemple concret qui manque.
4. **MOYENNE — Biais possibles non expliqués** : survivance/reclassements Article 9 → 8 (2022-2023) qui faussent la comparaison Art. 9/Art. 6 ; performance des indices ISR (indices MSCI SRI/PAB vs indice parent — chiffres publics de fournisseurs d'indices, sans citer de fonds) ; effet « qualité/tech » des filtres ESG. À recouper avant d'ajouter.
5. **BASSE** — « pénalisés par rien (le pétrole s'effondrait) » : formulation maladroite ; « spoiler : rien sur la performance » : ton trop familier pour le site.
6. **BASSE** — « la règle que nous appliquons en rendez-vous » : texture non vérifiable.
7. SFDR (Art. 9 vs 6) : ajouter la mention de la refonte SFDR en cours et la date « chiffres arrêtés à fin 2024 ».

### Correctifs SEO
- Title (74) : « Investir éthique rapporte-t-il moins ? Les chiffres ESMA » (54) ou « Investissement éthique : rapporte-t-il moins ? Ce que disent les chiffres » (70, à éviter).
- Excerpt (167) : « Études académiques et données ESMA : pas de pénalité structurelle de rendement pour les fonds ESG, mais pas de prime garantie non plus. Chiffres sourcés. » (~150).

### Liens à ajouter
1. → `/articles/etf-isr-debutants`, ancre « comment choisir un ETF ISR quand on débute », paragraphe de lecture du tableau (ligne ETF actions).
2. → `/articles/obligations-vertes-vs-obligations-classiques`, ancre « obligations vertes ou classiques : les différences réelles », même paragraphe (ligne Obligations).
3. → `/articles/pieges-inconvenients-investissement-ethique`, ancre « les inconvénients réels de l'investissement éthique », conclusion (« le vrai risque… »).
4. → `/articles/assurance-vie-isr-guide-2026`, ancre « les frais d'une assurance vie ISR », H2 « Les fonds éthiques coûtent-ils plus cher en frais ? » (paragraphe frais empilés) ; + `/tarifs` ancre « notre grille de frais publiée » si transparence souhaitée.
5. → `/placement-ethique`, ancre « investir éthique : les fondamentaux », intro ou conclusion ; option `/outils/portefeuilles-types` ancre « exemples de portefeuilles types (illustratifs) » avec AVERTISSEMENT_PROFIL_TYPE.

---

## 8. investir-ethique-petit-budget

**Verdict : Améliorable — 6,5/10.** Requête cible : « investir avec 50 € par mois » / « investir éthique petit budget » / « épargne éthique 100 € par mois ».

Structure complète (résumé, PEP, H2 requêtes, tableau 4 familles, processus « Sécuriser → Choisir → Programmer → Vérifier », FAQ 7, 4R, liste d'erreurs). Fait légal solide : L.131-1-2 Code des assurances (UC ISR/Greenfin/solidaire depuis 2022), sourcé.

### Problèmes
1. **HAUTE — Aucun chiffre sur le sujet-clé « frais »**, alors que l'article dit « c'est le point le plus important ». L'exemple « frais d'entrée de 3 % » est arbitraire et non représentatif (la grille du cabinet est à 1 % ; beaucoup de contrats en ligne sont à 0 % — jamais mentionné). Ajouter un cas registre A : 50 €/mois × 20 ans, deux scénarios de frais (entrée + gestion + support), hypothèses de rendement justifiées + disclaimer ; ne pas inventer de frais de marché — utiliser la grille du brief §2.4 (1 % d'entrée, 1,00-1,08 %/an gestion) ou `[À COMPLÉTER]`.
2. **MOYENNE — Promesse commerciale non vérifiable.** « sans minimum requis » dans le paragraphe final : le brief ne dit pas que le cabinet accepte n'importe quel montant. À valider ou retirer.
3. **MOYENNE — Contradiction avec `etf-isr-debutants`.** Étape 2 conseille « un PEA pour les ETF à moindres frais » ; l'article ETF dit que l'offre ISR éligible PEA est plus étroite. Harmoniser, et ajouter un renvoi.
4. **MOYENNE — Options manquantes typiques du petit budget** : LDDS (supports d'épargne solidaire/réglementée), financement participatif (minimums bas, risque élevé), PEA/PER selon abondement employeur ; le tableau contient l'épargne salariale mais pas les livrets réglementés (plafonds et taux à sourcer, jamais de mémoire).
5. **BASSE** — « frais fixes de quelques euros par mois sur certaines applications » : cible implicite des néobanques/robo ; garder générique (OK vis-à-vis de la diffamation).
6. **BASSE** — Fait 12 000 € = 50 € × 20 ans : correct mais sans projection ; ajouter hypothèses ou lien vers l'outil (présent).
7. Chevauchement à surveiller avec `ou-placer-argent-facon-ethique-montant` (même famille de requêtes « où placer / combien ») : différencier les intentions (petit montant régulier vs capital) et se lier mutuellement pour éviter la cannibalisation.

### Correctifs SEO
- Title (77) : « Investir éthique avec 50 € par mois : comment faire ? » (52).
- Excerpt (157, OK) : « Oui, dès quelques dizaines d'euros par mois : assurance vie ISR, épargne solidaire, ETF. Le vrai sujet : les frais et la régularité, pas le montant. » (~150).

### Liens à ajouter
1. → `/articles/label-finansol-finance-solidaire`, ancre « ce que garantit le label Finansol », paragraphe « Deux précisions utiles… » (mention du label Finansol).
2. → `/articles/investir-ethique-performance-chiffres`, ancre « investir éthique rapporte-t-il moins ? », H2 sur les frais ou en FAQ ETF (question d'un débutant : « ça rapporte moins ? »).
3. → `/articles/ou-placer-argent-facon-ethique-montant`, ancre « où placer 50 000, 100 000 ou 300 000 € de façon éthique », conclusion (« petit budget aujourd'hui, patrimoine demain »).
4. → `/outils/profil-investisseur`, ancre « situer votre tolérance au risque », étape « Choisir une seule enveloppe » ; + `/outils/comparateur-enveloppes` ancre « comparer les enveloppes chiffres en main ».
5. → `/placement-ethique`, ancre « investir éthique : les fondamentaux », intro ; option `/tarifs` ancre « la grille de frais de notre cabinet, publiée » dans H2 sur les frais (transparence radicale, sans revendication commerciale).

---

## Priorités d'action suggérées

1. Corriger d'urgence (règles non négociables / anti-fabrication) : frais-conseiller (catégorie ORIAS §2.2, statistique interne, étude AMF, obligation de réponse rétrocession), petit-budget (« sans minimum requis »), foncières (« chaque semaine »).
2. Corriger l'erreur technique WACI + le mélange empreinte/émissions (empreinte-carbone).
3. Étoffer héritage (contenu actionnable, tableau, sources) — seul article « Faible ».
4. Recouper les chiffres réglementaires/marché avant republication (ESMA, DPE, PEA-SIIC, seuils Label ISR, SDES, PFU 2026) et ajouter `updated`.
5. Passe SEO : raccourcir 8 titles et 5 excerpts ; ajouter les liens proposés dont /placement-ethique et /conseiller-investissement-responsable dès que les pages existent.
