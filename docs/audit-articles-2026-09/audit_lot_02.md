# Audit batch_02 — 8 articles (lecture seule, aucun fichier du repo modifié)

Méthode : lecture intégrale de chaque `src/content/articles/<slug>.tsx`, GUIDE-ARTICLE, brief §2, skill endless-customers-article. Longueurs meta mesurées par script (caractères). Volume corps : 2 700 à 3 400 mots par article (au-dessus de la cible 1 200-2 500 du guide, mais pas de remplissage flagrant sauf répétitions signalées).

Limite honnête : je n'ai pas accès au web ici. Les chiffres 2026 (baromètre FAIR, nombre de fonds Greenfin/ISR, taux du Livret A) sont marqués « à revérifier » quand je ne peux pas les confirmer ; je ne dis « faux » que lorsqu'il y a contradiction interne au site.

## Tableau de synthèse

| Slug | Note | Verdict | Title (car.) | Excerpt (car.) | Requête cible |
|---|---|---|---|---|---|
| investissement-ethique-guide-complet-2026 | 7,5 | Améliorable | 69 (trop long) | 160 | investissement éthique / investir éthique |
| investissement-immobilier-responsable-commencer | 6 | Améliorable | 84 (trop long) | 167 | investissement immobilier responsable |
| isr-esg-impact-investing-differences | 8 | Complet | 77 (trop long) | 153 | différence ISR ESG |
| label-finansol-finance-solidaire | 8 | Complet | 69 (trop long) | 166 | label Finansol |
| label-greenfin-vs-label-isr | 7,5 | Améliorable | 65 (limite) | 158 | label Greenfin label ISR différence |
| label-isr-que-garantit-il-vraiment | 8,5 | Complet | 59 (OK) | 152 (OK) | label ISR |
| livrets-epargne-solidaire-alternative-livret-a | 7 | Améliorable | 64 (limite) | 162 | épargne solidaire / livret solidaire |
| metaux-precieux-investissement-ethique | 7 | Améliorable | 75 (trop long) | 149 (OK) | or éthique / investir dans l'or responsable |

## Constats transverses

1. **Incohérences internes entre articles (les plus graves, faciles à corriger).**
   - `label-isr-que-garantit-il-vraiment` (tableau « qui promet quoi ») dit que Greenfin exclut « les énergies fossiles et du nucléaire » ; `label-greenfin-vs-label-isr` (2 endroits) et `label-finansol-finance-solidaire` disent l'inverse : nucléaire éligible depuis janvier 2024. Erreur factuelle dans le plus important des 8.
   - `livrets-epargne-solidaire-alternative-livret-a` parle de « flat tax de 30 % » (3 fois) alors que `metaux-precieux-...`, `quelle-enveloppe-...`, `per-*`, `retraite-capital-ou-rente-*` utilisent PFU 31,4 % / prélèvements sociaux 18,6 % depuis le 01/01/2026 (LFSS 2026).
   - Nombre de produits Finansol : « plus de 180 » (Finansol) vs « plus de 190 » (livrets). Nombre de fonds ISR : « 939 / près de 940 au 1er janvier 2025 » vs « un peu plus d'un millier début 2026 » sans source.
   - Exclusions du Label ISR V3 décrites différemment selon l'article : fossiles seulement (guide, ISR/ESG, Greenfin vs ISR, réponses FAQ) vs fossiles + armes controversées + tabac + Pacte mondial (label-isr-que-garantit). À harmoniser sur la source du Trésor, puis un seul paragraphe canonique.
   - Nommage de la réforme : « V3 mars 2024 », « référentiel 2024 », « version 2025 » désignent la même chose. Choisir « référentiel V3 (mars 2024, généralisé au 1er janvier 2025) » partout.
2. **Le même bloc « V3 du Label ISR + 30 % + hydrocarbures » est recopié presque mot pour mot dans 5 articles** (guide, ISR/ESG, Finansol, Greenfin vs ISR, Label ISR), avec en plus le trio « Liste → Mécanique → Preuves », « inventaire dix premières lignes » et « décodeur de labels » répétés. Risque : contenu dupliqué en interne, cannibalisation entre les 4 articles labels, et lecture répétitive pour qui enchaîne les articles. Recommandation : une seule page de référence complète (label-isr-que-garantit) ; les autres résument en 2 phrases + lien.
3. **Actualisation 2026 et sources manquantes.** Sur les 8 : 0 article ne mentionne la refonte SFDR (proposition de la Commission de novembre 2025 remplaçant Art. 6/8/9 par des catégories, à vérifier) ni les lignes directrices ESMA sur les noms de fonds (applicables depuis nov. 2024 / mai 2025) alors que 4 articles expliquent Art. 8/9 comme cadre durable. Le reclassement Morningstar de fin 2022 est cité 3 fois sans lien. Chiffres de marché 2026 (Greenfin « un peu plus d'une centaine / 36 Md€ », « un peu plus d'un millier » de fonds ISR) sans lien direct ou sans daté. Le taux du Livret A (1,5 % depuis le 1er février 2026) est présenté comme actuel alors qu'une révision est intervenue le 1er août 2026 (aujourd'hui : 28/09/2026) : à revérifier, et l'article n'a pas de champ `updated`.
4. **Maillage : aucun des 8 articles ne pointe vers /placements, /enveloppes, /objectifs, /tarifs, /questions ni vers les futures /placement-ethique et /conseiller-investissement-responsable.** Les ~30 liens existants sont uniquement des LienArticle + 5-6 outils. La conclusion 4R se termine par « échange offert » sans lien cliquable vers une page de service. Outils sous-utilisés : /outils/empreinte-carbone-epargne (0/8), /outils/per-isr (0/8), /outils/simulateur (1/8), /outils/portefeuilles-types (1/8).
5. **Cannibalisation à anticiper avec la future page pilier /placement-ethique** : le guide complet cible « investissement éthique / investir éthique » avec le même plan (définition, labels, SFDR, greenwashing, enveloppes). Il faut répartir : pilier = requête « placement éthique » + hub de navigation vers les 33+ articles ; guide = tutoriel pas à pas (méthode 5 marches). Ajouter un lien réciproque et différencier title/H1.
6. **Structure Endless Customers : très bien respectée** (résumé exécutif en callout-grenat, intro PEP, H2 en requêtes, tableaux, process nommés, FAQ, 4R). Points de non-conformité récurrents : FAQ à 9 questions (Finansol, Greenfin vs ISR ; guide = 5-8) ; peu ou pas de registre A (cas chiffré) et jamais de registre B ; aucun « best of / avis » ; pas de JSON-LD FAQPage visible dans les fichiers (à vérifier côté route `articles.$slug.tsx`).
7. **Règles non négociables : aucune violation grave relevée.** Aucun fonds/société nommé en exemple de greenwashing ; « pistes » utilisé pour les outils ; pas de « recommandation » ; pas de CIF/Uptimi/Épargne Plurielle ; « email » n'apparaît pas ; vouvoiement respecté. Réserves : (a) « c'est notre métier » + « échange offert » à la fin de chaque article est formulaïque (8/8 quasi identiques), à varier ; (b) « la conversation que nous avons chaque semaine au cabinet » (immobilier) et « la grille que nous utilisons » (métaux) sont des affirmations de pratique non vérifiables mais bénignes ; (c) `metaux-precieux` : sujet potentiellement hors périmètre d'un non-CIF si la « grille » est lue comme un conseil d'allocation — le texte évite de chiffrer une part, ce qui est prudent.

---

## 1. investissement-ethique-guide-complet-2026 — Améliorable — 7,5/10

Requête cible : « investissement éthique » (secondaire : « investir éthique », « comment investir éthique »). Concurrents : Goodvest, Nalo, Les clés de la banque.

**Meta**
- Title 69 car. : « Investissement éthique : le guide complet pour bien commencer en 2026 » → coupé en SERP. Proposition (58) : « Investissement éthique : guide complet pour débuter (2026) ».
- Excerpt 160 car. : dans la fourchette du guide (140-170), un peu au-dessus de 155. Proposition (~150) : « Exclusions, labels ISR/Greenfin/Finansol, SFDR, enveloppes : la méthode pas à pas pour investir éthique en 2026 sans tomber dans le greenwashing. »

**Problèmes**
1. (Moyen-haut) Cannibalisation avec /placement-ethique : voir constat 5. Sans différenciation, deux pages se disputeront la même intention.
2. (Moyen) Actualité 2026 absente pour un « guide 2026 » : aucune mention de la révision SFDR en cours (« Article 8/9 » présentés comme cadre stable) ni des règles ESMA sur les noms de fonds, qui sont pourtant l'outil anti-greenwashing le plus récent. Vérifier sur eur-lex / esma.europa.eu avant d'ajouter.
3. (Moyen) Chiffres non sourcés : « un peu plus d'une centaine de fonds labellisés [Greenfin] début 2026 » (le lien pointe vers la page générale, pas vers un chiffre) ; « plusieurs centaines de fonds européens reclassés d'Article 9 vers 8 fin 2022, d'après Morningstar » sans lien vers la publication Morningstar.
4. (Moyen) Aucun chiffre de coût : un guide « pour débuter » sans ordre de grandeur des frais (frais d'entrée, frais de gestion des UC, frais courants d'ETF) est moins utile que Nalo/Goodvest, qui affichent des grilles. La phrase « les frais pèsent mécaniquement » n'est pas illustrée. Ajouter un mini-cas registre A (« 10 000 € sur 15 ans, 0,5 % vs 2 % de frais annuels ») avec disclaimer d'illustration, via /outils/simulateur.
5. (Faible) Pas de section « erreurs à éviter » ni de renvoi vers `pieges-inconvenients-investissement-ethique`, qui existe.
6. (Faible) « Notre cabinet applique à chaque placement la méthode décrite ici » : formulation absolue, à adoucir (« applique cette méthode dans ses échanges »).
7. (Faible) Faits vérifiés cohérents avec le reste du site : abattement AV 4 600/9 200 €, PEA 5 ans, obligation Pacte AV 2022, ISR 30 % vs 20 %. RAS.

**Structure Endless** : résumé exécutif OK ; intro PEP OK ; H2 en requêtes OK (Article 8 ou 9 ? Comment repérer… ?) ; 3 tableaux ; process « 5 marches » ; FAQ 7 (bonne, avec « Ai-je besoin d'un conseiller ? » honnête) ; 4R OK. Manque : un exemple chiffré, une comparaison de coûts.

**Liens à ajouter**
1. `reperer-greenwashing-fonds-vert-methode` — ancre « notre méthode complète pour repérer le greenwashing d'un fonds » — H2 « Comment repérer le greenwashing… », dans le paragraphe qui suit le callout des signaux d'alerte (remplace la phrase actuelle vers le décodeur, ou s'ajoute).
2. `sfdr-article-8-ou-9-ce-que-ca-garantit` — ancre « ce que les Articles 8 et 9 garantissent vraiment » — H2 SFDR, dernière phrase du paragraphe « La classification SFDR est donc un signal utile… ».
3. `investir-ethique-petit-budget` — ancre « investir éthique avec un petit budget » — FAQ, réponse « Peut-on investir éthique avec un petit budget ? ».
4. `assurance-vie-isr-guide-2026` — ancre « comment choisir une assurance vie ISR » — H2 enveloppes, après la phrase sur l'obligation Pacte (« certains contrats s'arrêtent au minimum légal »).
5. `/placement-ethique` (pilier, à créer) — ancre « notre page de référence sur le placement éthique » — dernier paragraphe de l'intro (« Ce guide est le point de départ… ») ; et `/conseiller-investissement-responsable` — ancre « échanger avec un conseiller en investissement responsable » — dernier paragraphe de la conclusion (remplace « échange offert » nu par un lien).

---

## 2. investissement-immobilier-responsable-commencer — Améliorable — 6/10

Requête cible : « investissement immobilier responsable » (secondaire : « immobilier responsable », « investir immobilier écologique »). Concurrents : Goodvest, sites de SCPI, Meilleurtaux (rénovation). Aucun ne couvre proprement « par où commencer », créneau réel.

**Meta**
- Title 84 car. : « Par où commencer un investissement immobilier responsable ? Trois voies, une méthode » → tronqué. Proposition (60) : « Investissement immobilier responsable : par où commencer ? ».
- Excerpt 167 car. : un peu long. Proposition (~152) : « SCPI ISR, foncières cotées ou achat à rénover : la voie dépend de votre budget, temps et horizon. La méthode pour choisir et vérifier. »

**Problèmes**
1. (Haut) Aucun chiffre sur ce qui décide vraiment : ni frais d'entrée des SCPI (le texte dit seulement « élevés »), ni fourchette de rendement/taux de distribution, ni évolution récente des prix de parts et de la liquidité (tension du marché de la pierre-papier 2023-2025), ni fiscalité (revenus fonciers, prélèvements sociaux, IFI, démembrement). C'est la principale sous-question évidente d'un lecteur qui « commence ». La table dit « frais d'entrée à amortir » sans les quantifier. Ajouter des ordres de grandeur sourcés (site de l'AMF, ASPIM/IEIF) ou des formulations qualitatives explicites avec renvoi. Ne pas reprendre la grille cabinet (~12 %) dans le corps (règle 5 du guide) ; utiliser une fourchette de marché sourcée.
2. (Moyen-haut) Dispositifs publics présentés comme stables : MaPrimeRénov' « peut subventionner selon revenus » sans détail ni date alors que ce dispositif a été très instable en 2025-2026 ; changement du DPE au 1er janvier 2026 (coefficient de l'électricité) non mentionné alors que l'article s'appuie sur le calendrier F/G/E. À vérifier sur service-public/ecologie.gouv.fr. Le callout « montants à la date de mise à jour » est bien, mais il n'y a pas de champ `updated`.
3. (Moyen) Pas de cas concret registre A (ex. rénovation d'un studio classé F : budget travaux, saut d'étiquette, effet loyer/décote). L'article promet « la méthode » mais reste très générique ; il se lit comme un cadrage, pas comme un guide qui bat un contenu chiffré concurrent.
4. (Moyen) Aucune comparaison de coûts entre les trois voies dans le tableau (ligne « Coût total / frais » absente) ; pas de ligne « fiscalité ».
5. (Faible) « Le bâtiment est l'un des tout premiers postes de consommation d'énergie du pays » : sans source.
6. (Faible) Catégorie « Enveloppes » pour un article sur des types d'actifs : voulu par le plan §3, RAS.

**Faits vérifiés** : calendrier de location G 2025 / F 2028 / E 2034, audit énergétique F-G 2023 puis E 2025, éco-PTZ jusqu'à fin 2027 (50 000 €), Denormandie 25 % de travaux jusqu'au 31/12/2027, Label ISR immobilier ouvert en 2020 : cohérents avec ce que je connais et adossés à des liens officiels. À revérifier tout de même à la date de republication.

**Structure Endless** : résumé OK ; intro PEP OK ; H2 en requêtes OK ; tableau comparatif OK ; process 5 étapes nommé ; FAQ 7 ; 4R OK. Manque : chiffres, exemple.

**Liens à ajouter**
1. `quelle-enveloppe-investissement-ethique` — ancre « quelle enveloppe choisir pour investir éthique » — H2 « Faut-il commencer par la pierre-papier ou par l'achat en direct ? », paragraphe « Notez enfin que la question de l'enveloppe… ».
2. `label-isr-que-garantit-il-vraiment` — ancre « ce que le Label ISR garantit (et ne garantit pas) » — H2 « Comment vérifier qu'une SCPI… », phrase « Ce que le label garantit précisément… mérite un article entier ».
3. `assurance-vie-isr-guide-2026` — ancre « comment choisir un contrat d'assurance vie ISR » — FAQ « Peut-on loger des SCPI responsables dans une assurance vie ? ».
4. `/enveloppes` — ancre « les enveloppes fiscales en un coup d'œil » — même paragraphe que le lien 1, ou FAQ AV.
5. `/conseiller-investissement-responsable` — ancre « échanger avec un conseiller en investissement responsable » — dernier paragraphe (remplace « Le premier échange est offert. » nu). Option : `/placements` — ancre « les grandes familles de placements » — H2 « trois grandes voies ».

---

## 3. isr-esg-impact-investing-differences — Complet — 8/10

Requête cible : « différence ISR ESG » (secondaires : « ISR ESG impact investing », « c'est quoi l'ISR »). Meilleur article du lot en clarté pédagogique ; le tableau à 3 colonnes est citable (GEO).

**Meta**
- Title 77 car. → Proposition (58) : « ISR, ESG, impact investing : quelles différences ? » ; ou « Différence entre ISR, ESG et impact investing (guide clair) » (57).
- Excerpt 153 car. : OK. Peut intégrer la requête « différence ISR ESG » : « ISR, ESG ou impact ? L'ESG est une grille d'analyse, l'ISR une démarche de gestion, l'impact un effet mesurable. Le tableau pour ne plus confondre. »

**Problèmes**
1. (Moyen) Reclassement Morningstar fin 2022 cité deux fois sans lien vers la source ; « constat largement documenté par la recherche académique » (divergence des notations ESG) sans référence. Ajouter le lien Morningstar et une référence académique vérifiée (ex. étude sur la divergence des notations ESG) ou reformuler.
2. (Moyen) SFDR présenté comme cadre courant sans mention de la refonte en cours (voir constat 3) ; la « correspondance » « impact = Article 9 » est discutable (des fonds à impact sont Article 8) : nuancer davantage.
3. (Moyen) Le seuil des exclusions V3 reste « au-delà de seuils stricts » : le lecteur ne peut pas juger. Si la source du Trésor le permet, citer les seuils exacts ; sinon garder le qualitatif mais lier vers le référentiel.
4. (Faible) Pas de mention de la finance durable « RSE / durable / responsable » ni de la doctrine AMF sur la communication ESG des fonds (position-recommandation AMF DOC-2020-03), qui est précisément ce qui encadre « ESG » vs « ISR » dans la communication produit. À vérifier avant ajout.
5. (Faible) Pas de mini-exemple illustratif (registre A) de « même entreprise, deux notes ESG différentes » — sans nommer de société (générique).
6. (Faible) Intro : « sans croire personne sur parole, pas même nous » : bonne ligne, à conserver.

**Structure Endless** : très bien : résumé, PEP, H2 en questions, tableau, process « Promesse → Preuve → Portefeuille », FAQ 7, 4R. RAS.

**Liens à ajouter**
1. `engagement-actionnarial-vs-exclusion` — ancre « exclure ou engager : quelle stratégie change vraiment les choses ? » — H2 ISR, juste après la puce « l'engagement actionnarial ».
2. `taxonomie-verte-europeenne-epargne` — ancre « ce que la taxonomie verte européenne change pour votre épargne » — H2 SFDR, fin du 1er paragraphe (« Un quatrième vocabulaire… »).
3. `obligations-vertes-vs-obligations-classiques` — ancre « obligations vertes ou classiques : les différences réelles » — H2 impact, paragraphe « Dans l'épargne française grand public, l'impact prend surtout trois formes ».
4. `investir-ethique-performance-chiffres` — ancre « ce que disent les chiffres sur la performance » — FAQ « L'impact investing rapporte-t-il moins ? ».
5. `/placement-ethique` — ancre « notre vue d'ensemble du placement éthique » — dernière phrase de l'intro ; `/outils/empreinte-carbone-epargne` — ancre « mesurer l'empreinte carbone de votre épargne » — H2 ESG, paragraphe sur les émissions scope 3.

---

## 4. label-finansol-finance-solidaire — Complet — 8/10 (mis à jour le 2026-07-08)

Requête cible : « label Finansol » (secondaires : « fonds 90/10 », « finance solidaire »). Concurrent principal : finance-fair.org, Les clés de la banque ; l'article est plus pédagogique.

**Meta**
- Title 69 car. → Proposition (63) : « Label Finansol : ce qu'il garantit et ce qu'il ne garantit pas ».
- Excerpt 166 car. → Proposition (~152) : « Le label Finansol certifie un financement solidaire réel (5-10 % de l'actif ou 25 % des revenus donnés), contrôlé chaque année. Sans promesse de rendement. »

**Problèmes**
1. (Moyen) Chiffres 2026 à revérifier : baromètre FAIR/La Croix « juin 2026 » (34 Md€ fin 2025, +15 %, 18,5 Md€ épargne salariale, ~850 M€, 1 800 projets) — source citée avec lien, je ne peux pas la confirmer ; « plus de 180 produits labellisés » (autre article : « plus de 190 »). Harmoniser et dater (« au [date] »).
2. (Moyen) Affirmations institutionnelles sans source directe : « comité du label indépendant depuis sa création en 1999 », « nucléaire éligible à Greenfin en 2024 » (tableau : pas de lien dans cet article, contrairement à Greenfin vs ISR).
3. (Moyen) Ton très favorable : le label est décrit comme « l'un des labels les plus précis du marché ». Il manque la critique honnête (skill : « problèmes ») : une poche solidaire de 5-10 % n'est-elle pas symbolique ? frais généralement plus élevés des fonds solidaires ? illiquidité des titres ESUS ? Ajouter un H2 « Épargne solidaire : quelles limites réelles ? » sans jugement moral.
4. (Moyen) Aucun exemple chiffré : ex. « 10 000 € dans un fonds 90/10 = 500 à 1 000 € fléchés vers des entreprises ESUS » et « 25 % des intérêts d'un livret à 2 % sur 10 000 € = 50 € de dons » (registre A + disclaimer). L'article `livrets-epargne-solidaire-...` a un calcul mais sur le Livret A.
5. (Faible) FAQ à 9 questions (guide : 5-8) ; « Où trouver la liste » redoublonne H2 « Où trouve-t-on ». Retirer « Où trouver la liste… » ou fusionner.
6. (Faible) Texte de conclusion : « l'un des labels les plus précis du marché français » → affirmation comparative non sourcée.

**Faits vérifiés** : création 1997 (label) ; FAIR ; critères 5-10 % et ≥ 25 % ; L. 214-164 CMF, L. 3332-17-1 c. trav. (ESUS) ; obligation PEE fonds solidaire (LME 2008) ; Pacte AV 2022 : cohérents. Réforme du volet PS 2026 : n'affecte pas cet article.

**Structure Endless** : très complète (résumé, PEP, H2 requêtes, 3 tableaux, process « Liste → Mécanique → Preuves », FAQ 9, 4R).

**Liens à ajouter**
1. `assurance-vie-isr-guide-2026` — ancre « comment choisir une assurance vie ISR (et solidaire) » — H2 « Où trouve-t-on des produits labellisés », paragraphe sur l'obligation Pacte AV.
2. `per-ethique-optimiser-retraite` — ancre « un PER éthique pour préparer la retraite » — même H2, tableau/ligne « PER individuel » ou paragraphe épargne salariale.
3. `investir-ethique-petit-budget` — ancre « investir éthique avec un petit budget » — H2 « Que garantit concrètement », après « 5 à 10 % de l'encours » ou FAQ « Puis-je perdre… ».
4. `reperer-greenwashing-fonds-vert-methode` — ancre « repérer le greenwashing d'un produit dit “solidaire” » — H2 « Comment vérifier qu'un produit est vraiment labellisé », après la liste numérotée.
5. `/placements` — ancre « l'ensemble des familles de placements » ou `/outils/comparateur-enveloppes` — ancre « comparer les enveloppes qui accueillent des supports solidaires » — H2 « Où trouve-t-on… ».

---

## 5. label-greenfin-vs-label-isr — Améliorable — 7,5/10

Requête cible : « label Greenfin label ISR différence » (secondaires : « label greenfin », « greenfin vs isr »). Bon positionnement de comparaison (Big 5 n°3) avec verdict contextualisé.

**Meta**
- Title 65 car. (limite) → Proposition (58) : « Label Greenfin ou Label ISR : lequel choisir ? ».
- Excerpt 158 car. : OK.

**Problèmes**
1. (Moyen-haut) Répétition : la description V3 (30 %, hydrocarbures, mars 2024/1er janvier 2025) est redite 5 fois (résumé indirect, H2 ISR, tableau, H2 fossiles, FAQ ×2) ; la vérification « inventaire dix premières lignes » redite ; FAQ « Où vérifier » et « Un fonds peut-il perdre son label » redoublonnent le corps → FAQ à 9 questions. Environ 500 mots supprimables sans perte.
2. (Moyen) « Le Label ISR, depuis sa version 2025 » ≠ « V3 mars 2024 » utilisé plus haut dans le même article : incohérence de nommage.
3. (Moyen) Chiffres non vérifiables ici : « environ 36 milliards d'euros d'encours », « un peu plus d'une centaine de fonds » (source = page ministère sans chiffre exact cité), « 940 fonds » (PDF comité du label, cohérent avec l'article Label ISR). « durée d'un an renouvelable » (Greenfin) sans source. « La double labellisation reste rare, ayant un coût » : affirmation non sourcée.
4. (Moyen) Les inconvénients concrets des fonds Greenfin sont absents : univers étroit et concentré (poids possible des secteurs thématiques), moins de choix dans les contrats AV, gamme parfois limitée en UC, volatilité thématique. Le guide exige des « vrais inconvénients » pour chaque option. Ajouter une ligne « Limites pratiques » dans le tableau.
5. (Faible) Aucun élément de coût/performance ; c'est cohérent avec la prudence du site, mais une ligne « frais/DIC à comparer » dans le tableau aiderait.
6. (Faible) Pas de mention de la taxonomie/SFDR pour situer Greenfin vs Article 9 (un lien existe vers la taxonomie seulement).

**Faits** : TEEC 2015 → Greenfin 2019 ; huit éco-activités ; nucléaire éligible depuis 2024 ; Pacte AV 2022 : cohérents avec le reste du site (sauf l'incohérence dans `label-isr-que-garantit`).

**Structure Endless** : résumé, PEP, H2 requêtes, tableau, process « Liste → Référentiel → Inventaire », FAQ 9 (trop), 4R. RAS sauf densité.

**Liens à ajouter**
1. `sfdr-article-8-ou-9-ce-que-ca-garantit` — ancre « où se situe l'Article 8 ou 9 par rapport aux labels » — H2 « Faut-il vraiment choisir entre les deux ? », dernier paragraphe (« Notre grille de lecture, assumée »).
2. `assurance-vie-isr-guide-2026` — ancre « comment choisir un contrat d'assurance vie ISR » — même H2, paragraphe Pacte AV (« Le minimum légal reste un minimum »).
3. `scpi-isr-vs-scpi-classique` — ancre « SCPI labellisées ISR ou SCPI classiques » — H2 « Que garantit… Label ISR », paragraphe « Le périmètre… SCPI, OPCI ».
4. `obligations-vertes-vs-obligations-classiques` — ancre « obligations vertes : ce qu'elles changent vraiment » — H2 Greenfin, après « part verte ».
5. `/placement-ethique` — ancre « notre page de référence sur le placement éthique » — H2 final, phrase « Pour la suite logique » ; ou `/outils/portefeuilles-types` — ancre « voir des exemples de portefeuilles types (à titre illustratif) ».

---

## 6. label-isr-que-garantit-il-vraiment — Complet — 8,5/10 (featured)

Requête cible : « label ISR » (secondaires : « label ISR fonds », « label ISR c'est quoi », « label ISR garantie »). Article de référence du réseau, le plus fort du lot (structure, honnêteté, IGF, comparaison des positions, chiffres sourcés).

**Meta** : title 59 car. OK ; excerpt 152 car. OK. Proposition mineure : « Label ISR : que garantit-il vraiment (et que ne garantit-il pas) ? » (63) uniquement si vous voulez mieux capter « label ISR » en début de title.

**Problèmes**
1. (Haut) Erreur factuelle interne : tableau « Label ISR, Greenfin, Finansol, Article 9 » : « Greenfin : … exclusion des énergies fossiles et du nucléaire » → contredit `label-greenfin-vs-label-isr` (nucléaire éligible depuis un arrêté de janvier 2024, source gouvernementale). À corriger en « exclusion de toute la chaîne fossile ; nucléaire éligible depuis 2024 ».
2. (Moyen) « Un peu plus d'un millier de fonds portent le label début 2026 » : sans source ni date exacte, alors que le seul chiffre sourcé est « 939 au 1er janvier 2025 ». Remplacer par le chiffre du comité, daté.
3. (Moyen) Liste des exclusions V3 (armes controversées, tabac « au-delà d'une part minime », Pacte mondial) plus complète que celle des 4 autres articles : vérifier chaque item sur le document du Trésor lié ; puis reporter la liste identique ailleurs (ou raccourcir ici). « six familles » de critères : vérifier qu'elles correspondent bien à la structure V3 et pas à V2.
4. (Moyen) Citation IGF entre guillemets (« à moins qu'il n'évolue radicalement… inéluctable de crédibilité et de pertinence ») : à contrôler mot pour mot dans le PDF du rapport 2020-M-038-03 avant de la garder entre guillemets (une citation inexacte est une dette de confiance ; règle skill « jamais de citation inventée »).
5. (Faible) Pas de seuils chiffrés (charbon, hydrocarbures non conventionnels) alors que la question « Le Label ISR exclut-il le pétrole ? » est la plus recherchée : à compléter depuis la source, sinon lien direct vers l'annexe.
6. (Faible) Aucun exemple de lecture d'un DIC/inventaire (peut rester générique) ; la méthode « trois L » est très bien nommée mais sans capture/exemple.
7. (Faible) Pas de lien vers /placement-ethique, /placements ; 1 seul outil.

**Structure Endless** : exemplaire (résumé, PEP, H2 requêtes, 2 tableaux, méthode nommée, FAQ 7, 4R).

**Liens à ajouter**
1. `assurance-vie-isr-guide-2026` — ancre « quels fonds ISR trouver dans une assurance vie » — H2 « Comment vérifier vous-même… », paragraphe après le décodeur ; ou FAQ « Où vérifier ».
2. `scpi-isr-vs-scpi-classique` — ancre « SCPI ISR et SCPI classique : les différences réelles » — FAQ « Le Label ISR s'applique-t-il aux SCPI ? », fin de réponse.
3. `engagement-actionnarial-vs-exclusion` — ancre « exclure ou engager : quelle stratégie change vraiment les choses ? » — H2 « Pourquoi le label a-t-il dû être réformé ? », paragraphe sur le best-in-class et les 70 % restants.
4. `investir-ethique-performance-chiffres` — ancre « ce que disent les études sur la performance des fonds ISR » — FAQ « Le Label ISR garantit-il une meilleure performance ? ».
5. `/placement-ethique` — ancre « notre vue d'ensemble du placement éthique » — dernier paragraphe de la conclusion ; `/outils/portefeuilles-types` en option.

---

## 7. livrets-epargne-solidaire-alternative-livret-a — Améliorable — 7/10

Requête cible : « épargne solidaire » (secondaires : « livret solidaire », « livret de partage », « alternative livret A »). Bon angle honnête (réponse « complément plus qu'alternative »), tableau à 4 produits utile.

**Meta**
- Title 64 car. (limite) → Proposition (56) : « Épargne solidaire : une vraie alternative au Livret A ? ».
- Excerpt 162 car. → Proposition (~150) : « Livrets solidaires, livrets de partage, fonds 90/10 : sécurité, rendement net, fiscalité et impact comparés au Livret A (taux 2026). »

**Problèmes**
1. (Haut) Fiscalité incohérente avec le reste du site : « flat tax de 30 % » (tableau ×2, corps, FAQ) alors que les articles enveloppes/PER/retraite/métaux indiquent 31,4 % (PFU 12,8 % + 18,6 % PS) depuis le 1er janvier 2026 (LFSS 2026). Vérifier si les intérêts de livrets bancaires sont concernés par la hausse de CSG (probable) et corriger toutes les occurrences ; recalculer la comparaison « rendement net ». Vérifier aussi le maintien du PFL réduit de 5 % sur les intérêts donnés (BOFiP cité : la page renvoie à un BOI de 2019, à revalider) et la phrase « prélèvements sociaux en sus » (18,6 % ?).
2. (Haut) Taux du Livret A « 1,5 % depuis le 1er février 2026 » présenté comme actuel, et tous les calculs illustratifs (344 €, 86 €, ~30 €) en dépendent. Les taux réglementés sont révisés le 1er février et le 1er août : la révision d'août 2026 est passée. À revérifier sur economie.gouv.fr et actualiser (ou formuler « taux au [date] » avec champ `updated` renseigné). Ajouter `updated` dans `meta`.
3. (Moyen) Aucun taux réel de livret solidaire/de partage (non nommé, pas de fourchette) : la question centrale « ça rapporte combien ? » reste sans donnée. Sans nommer de produit, on peut donner une fourchette de taux publiés par les établissements labellisés, datée et sourcée par FAIR ; sinon dire explicitement « [taux à compléter à la date de publication] ».
4. (Moyen) Incohérence chiffre : « plus de 190 produits » (ici) vs « plus de 180 » (Finansol). « Fin 2024 : 29,4 Md€ » (ici) vs « 34 Md€ fin 2025, +15 % » (Finansol, article mis à jour en juillet) : mettre à jour ici avec le baromètre 2026.
5. (Moyen) Comparaisons manquantes : LEP, PEL, fonds euros, et assurance vie/UC solidaires ; pas de ligne « plafond » dans le tableau ; pas de mention du plafond de garantie des dépôts (100 000 €) dans le tableau, seulement dans le texte (présent : OK).
6. (Faible) LDDS « liste d'au moins dix organismes » : formulation à vérifier sur la fiche service-public liée.

**Faits vérifiés (cohérents)** : plafond Livret A 22 950 €, LDDS 12 000 €, réduction 66 %/20 % et 75 %/1 000 €, garantie des dépôts 100 000 €, calculs arithmétiques exacts (344 €, 86 €, ~29 €).

**Structure Endless** : résumé, PEP, H2 requêtes, tableau, process « Label → Mécanique → Trace → Suivi », FAQ 7, 4R. Bon respect du registre A avec disclaimer d'illustration (« purement illustratif »).

**Liens à ajouter**
1. `assurance-vie-isr-guide-2026` — ancre « choisir une assurance vie avec des supports solidaires et ISR » — H2 « Alors, faut-il remplacer… », paragraphe « Au-delà du matelas… ».
2. `per-ethique-optimiser-retraite` — ancre « un PER éthique pour la retraite » — même paragraphe, après « l'épargne salariale ».
3. `ou-placer-argent-facon-ethique-montant` — ancre « où placer 50 000, 100 000 ou 300 000 € de façon éthique » — H2 final, avant le paragraphe « Pour la suite logique ».
4. `/outils/simulateur` — ancre « simulez l'effet du temps et des frais » — H2 « L'épargne solidaire rapporte-t-elle moins… », après le calcul illustratif ; et `/placements` — ancre « les familles de placements au-delà du livret » — même endroit.
5. `/conseiller-investissement-responsable` — ancre « échanger avec un conseiller en investissement responsable » — dernier paragraphe.

---

## 8. metaux-precieux-investissement-ethique — Améliorable — 7/10

Requête cible : « or éthique » / « investir dans l'or responsable » (secondaires : « or recyclé investissement », « fiscalité or »). Sujet de niche à faible concurrence sérieuse ; l'angle « aucun or labellisé ISR » est différenciant.

**Meta**
- Title 75 car. → Proposition (57) : « Or éthique : peut-on investir dans l'or de façon responsable ? ».
- Excerpt 149 car. : OK.

**Problèmes**
1. (Moyen-haut) Aucune donnée de marché ni de coût : pas de contexte 2025-2026 (cours, volatilité récente, achats des banques centrales), pas d'ordre de grandeur des primes/écarts achat-revente du physique, ni des frais courants d'ETC, ni de l'origine de l'offre (« une partie notable de l'offre mondiale provient du recyclage » sans chiffre ni source, alors que le World Gold Council publie la part). Pour la requête « investir dans l'or 2026 » le contenu paraît intemporel. Ajouter des chiffres sourcés (WGC, LBMA) datés, ou dire clairement que l'article n'en donne pas et pourquoi.
2. (Moyen) Cohérence fiscale : taux global 37,6 % (19 % + 18,6 % PS) avec lien LFSS 2026 : plausible et cohérent avec le PFU 31,4 % du site, mais à revérifier que la hausse de CSG 2026 s'applique bien aux plus-values sur biens meubles ; et la taxe forfaitaire 11 % + 0,5 % CRDS = 11,5 % est correcte selon la source douane liée.
3. (Moyen) Réglementation minerais de conflit formulée de façon approximative : « impose aux importateurs… un devoir de diligence lorsqu'ils s'approvisionnent dans des zones de conflit ou à haut risque » ; le règlement 2017/821 vise les importateurs au-dessus de seuils de volume, et exclut notamment certains flux recyclés. Reformuler à partir de la fiche officielle de la Commission, en gardant la conclusion (« pas une garantie attachée à la pièce »).
4. (Moyen) Périmètre de conseil : pour un cabinet non-CIF, le texte reste prudent (pas de pourcentage), mais la « grille Rôle / Support / Source / Sortie » et « nous l'utilisons avec un épargnant » peut se lire comme méthode de conseil ; garder « pistes » et éviter « nous recommandons » (pas d'occurrence relevée). À faire relire par le référent conformité pour l'or physique (achat hors circuit du cabinet ?).
5. (Faible) Absence de « où acheter » (négociants, banques, comparaison des prix), qui est la question suivante d'un lecteur convaincu ; à traiter en une ligne générique sans nommer de vendeur.
6. (Faible) « Fairmined … le dispositif le plus proche d'un “or éthique” au sens fort » : jugement comparatif non sourcé ; ajouter une source (site Fairmined) sur volumes/limites.
7. (Faible) FAQ 7 bien ; le tableau à 3 formes d'exposition est excellent (Big 5 « comparaison », vrais inconvénients).

**Structure Endless** : résumé OK ; PEP OK ; H2 en requêtes OK ; tableau OK ; process « Rôle, Support, Source, Sortie » ; FAQ 7 ; 4R OK. Manque : chiffres, exemple registre A (« 10 000 € en lingot vs ETC : coûts à l'achat et à la revente »).

**Liens à ajouter**
1. `label-isr-que-garantit-il-vraiment` — ancre « ce que le Label ISR garantit réellement (et pour quels produits) » — H2 « Existe-t-il un “or éthique” certifié ? », 1er paragraphe (phrase sur le Label ISR et Greenfin).
2. `pieges-inconvenients-investissement-ethique` — ancre « les pièges de l'investissement éthique » — encadré « Signal d'alerte » (à côté du lien greenwashing).
3. `assurance-vie-isr-guide-2026` — ancre « quels supports ISR dans une assurance vie » — FAQ « Peut-on loger de l'or dans une assurance vie ou un PEA ? ».
4. `sfdr-article-8-ou-9-ce-que-ca-garantit` — ancre « ce que recouvre la classification SFDR » — FAQ « Un ETC sur l'or est-il couvert par SFDR ? ».
5. `/placements` — ancre « les autres familles de placements du site » — H2 final, paragraphe « Pour la suite logique » ; et `/conseiller-investissement-responsable` — ancre « échanger avec un conseiller en investissement responsable » — dernier paragraphe.

---

## Priorités de correction (ordre suggéré)

1. Corriger `label-isr-que-garantit-il-vraiment` : Greenfin/nucléaire (tableau) — 1 phrase.
2. Aligner `livrets-epargne-solidaire-...` sur PFU 31,4 % et vérifier le taux du Livret A post-1er août 2026 ; ajouter `updated`.
3. Harmoniser les chiffres/noms (V3, 939 vs « un millier », 180 vs 190 produits Finansol) et la liste d'exclusions ISR V3.
4. Raccourcir les 4 titles > 65 car. et renforcer les requêtes cibles.
5. Ajouter liens vers /placement-ethique, /conseiller-investissement-responsable, /placements, /enveloppes dès leur mise en ligne ; retirer la redite V3 dans 3 articles.
6. Ajouter chiffres sourcés/cas registre A dans immobilier (frais, fiscalité, rendement) et métaux (marché, coûts).
7. Ajouter sources : lien Morningstar (×3), référence académique divergence ESG, contrôle de la citation IGF.
