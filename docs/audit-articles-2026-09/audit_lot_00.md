# Audit batch_00 — 8 articles (lecture seule, aucun fichier du repo modifié)

Date de l'audit : 2026-09-28. Longueurs mesurées par script (title / excerpt en caractères ; corps en mots approximatifs).

| slug | title | excerpt | mots ~ |
|---|---|---|---|
| assurance-vie-enfants-transmettre-valeurs | 90 | 161 | 2 400 |
| assurance-vie-isr-guide-2026 | 77 | 155 | 2 500 |
| assurance-vie-luxembourgeoise-investissement-responsable | 85 | 166 | 2 850 |
| avis-patrimoine-vie-plus-uaf-life-version-absolue | 101 | 177 | 2 950 |
| bilan-patrimonial-investissement-ethique-rendez-vous | 95 | 160 | 2 500 |
| cgp-independant-vs-conseiller-bancaire-ethique | 85 | 194 | 2 700 |
| dispositifs-fiscaux-demarche-ethique | 70 | 152 | 2 650 |
| donation-transmission-coherence-valeurs | 75 | 148 | 2 650 |

Les 8 titles dépassent 60 caractères (Google tronque vers 580 px, soit ~55-62 car.). Seuls 4 excerpts sont dans la cible ≤ 160 ; trois dépassent nettement (avis 177, cgp 194, lux 166).

## Vérifications externes faites pendant l'audit (recherche web, sept. 2026)

- Prélèvements sociaux : la LFSS 2026 (adoptée le 16 déc. 2025) porte les PS sur revenus du capital à 18,6 %, MAIS l'assurance vie et la capitalisation restent à 17,2 %. Les articles AV (17,2 %) sont donc corrects. À noter en revanche pour tout article évoquant PEA/CTO/PFU : le PFU n'est plus « 30 % » partout.
- Loi de finances 2026 (loi n° 2026-103 du 19 février 2026, art. 47) : création du « statut du bailleur privé » (dispositif Jeanbrun), amortissement de 3 à 5,5 % de la valeur du bien, logements en immeuble collectif neufs ou anciens avec travaux importants, acquisitions jusqu'au 31 déc. 2028. Cela contredit la FAQ « Le Pinel existe-t-il encore en 2026 ? » de l'article dispositifs-fiscaux.
- Dons aux associations : le plafond du taux de 75 % est passé de 1 000 à 2 000 € (LF 2026, dons depuis le 14 oct. 2025). L'article donation cite « 75 % sous conditions » sans montant : OK, mais l'occasion d'être précis.
- Suravenir a publié les rendements 2025 (communiqué du 23 janv. 2026) : l'Actif Général de Patrimoine Vie Plus est annoncé à 2,50 % (gestion libre) / 2,80 % (gestion sous mandat) avec bonus 3,00 % / 3,20 % selon la part d'UC (≥ 50 % / ≥ 70 %), taux nets de frais de gestion et avant prélèvements sociaux. L'article avis cite encore « 2,20 % brut » pour 2024.

---

# 1. assurance-vie-enfants-transmettre-valeurs

**Verdict : Améliorable — 7/10.** Requête cible : « assurance vie pour un enfant mineur » (secondaires : « ouvrir une assurance vie à son enfant », « assurance vie enfant abattement »).

**Structure Endless Customers** : résumé exécutif OK (mais 8 lignes, trop long pour « 2-4 phrases »), intro PEP OK (Livret A / doute intime), H2 en requêtes OK sauf « Le pacte adjoint : comment garder un cadre… », tableau OK (3 voies de don), process numéroté nommé (Donner, Placer, Expliquer, Passer la main), FAQ 7 questions OK, conclusion 4R OK. Bonne structure, le point faible est le fond chiffré.

**Problèmes (par gravité)**

1. **Aucun chiffre de coût ni de fiscalité concrète pour l'enfant** (Big 5 « Coût » absent). Ni frais d'entrée/gestion, ni fiscalité des gains d'un mineur (rattachement au foyer fiscal des parents, PFU ou barème sur rachat < 8 ans, prélèvements sociaux annuels sur fonds euros), ni exemple chiffré (« 50 €/mois pendant 15 ans à hypothèse X ») avec disclaimer registre A. Goodvest/Nalo/Meilleurtaux/Les clés de la banque traitent au moins la fiscalité et donnent un exemple. Correctif : ajouter un H2 « Combien peut valoir l'assurance vie d'un enfant à 18 ans ? » avec cas pédagogique (versements ronds, hypothèses justifiées, phrase « Situation type construite pour illustrer le calcul, à partir de paramètres réalistes ») et un H2 « Comment sont imposés les gains d'un contrat ouvert au nom d'un mineur ? » sourcé service-public.
2. **Sous-questions évidentes absentes** : assurance vie vs PEA jeune / Livret jeune / PEL / CTO (tableau comparatif 4-5 enveloppes pour un enfant, seul le Livret A est évoqué en FAQ), clause bénéficiaire (qui reçoit si l'enfant décède mineur ?), fonds euros vs UC pour un mineur, contrat de capitalisation comme alternative (donation-partage, démembrement), rachat pour un mineur (autorisation du juge des tutelles selon le régime d'administration légale : le texte dit seulement « signé par ses représentants légaux et doit servir l'intérêt de l'enfant », à faire valider par une source officielle ou un notaire).
3. **Affirmations non sourcées** : « la pratique retient généralement le vingt-cinquième anniversaire comme limite haute » (pacte adjoint, répété deux fois) sans source ni jurisprudence ; le pourcentage exact du taux réduit après 8 ans n'est pas donné (« taux réduit ») alors que l'article AV ISR le détaille (7,5 %/12,8 %) — incohérence de niveau de précision. Correctif : sourcer (notaires.fr / service-public) ou dire « la limite doit rester raisonnable et justifiée, appréciée au cas par cas ».
4. **Pied de conclusion proche de « étude de situation »** : « un conseiller du cabinet passe en revue avec vous le contrat, les dons déjà réalisés et l'opportunité d'un pacte adjoint » ressemble à une étude personnalisée (règle : pas de « conseil personnalisé / étude de votre situation »). Reformuler : « échanger avec un conseiller pour obtenir des pistes ».
5. « Depuis 2022, la réglementation issue de la loi Pacte impose… ISR, Greenfin, solidaire » : correct et cohérent avec l'article AV ISR (bien), mais pas de lien externe (le site officiel du Label ISR est cité ailleurs).
6. Titre 90 car. ; résumé trop long.

**Correctifs meta**
- Title (≤ 60) : « Assurance vie pour un enfant : ouvrir, alimenter, transmettre » (58) ou « Assurance vie pour enfant mineur : mode d'emploi et fiscalité » (58).
- Excerpt (~150) : « Qui signe, comment donner sans droits, quelle fiscalité, quel cadre après 18 ans : ouvrir une assurance vie à votre enfant, avec des supports alignés sur vos valeurs. » (~165 : couper « avec des supports… » pour tenir ≤ 155).

**Liens à ajouter**
1. Source : § « Quel intérêt d'ouvrir le contrat maintenant… », 2e paragraphe (horizon) → cible `/outils/comparateur-enveloppes`, ancre « comparer assurance vie, PEA et compte-titres pour un mineur ».
2. Source : § « Comment ce contrat peut-il transmettre vos valeurs » → `/outils/decodeur-label`, ancre « décodeur de labels (ISR, Greenfin, Finansol) », pour « vérifier support par support ».
3. Source : Q/R « Des supports ISR sont-ils adaptés… » → `LienArticle investissement-ethique-guide-complet-2026`, ancre « notre guide complet de l'investissement éthique ».
4. Source : FAQ « Livret A ou assurance vie » → `/enveloppes`, ancre « toutes les enveloppes, leurs avantages et leurs limites ».
5. Source : Réintroduction en conclusion → `/tarifs`, ancre « comment nous sommes rémunérés, en clair » (et `/conseiller-investissement-responsable` une fois créée, ancre « échanger avec un conseiller »).

---

# 2. assurance-vie-isr-guide-2026

**Verdict : Améliorable — 7/10.** Requête cible : « assurance vie ISR » (secondaire : « meilleure assurance vie ISR », « assurance vie responsable comparatif »). C'est l'article à plus fort enjeu SEO du lot (requête commerciale à volume réel) et c'est celui qui remplit le moins bien l'intention « best of ».

**Structure** : résumé OK, PEP OK, H2 en requêtes OK (« Une assurance vie ISR, ça existe vraiment ? »), tableau critères OK, process « entonnoir » OK, FAQ 7 OK, conclusion 4R OK. Structure exemplaire.

**Problèmes**

1. **N'aide pas à choisir concrètement : zéro contrat, zéro chiffre de frais, zéro exemple.** Les concurrents (Goodvest, Nalo, Meilleurtaux Placement, Les clés de la banque) affichent un comparatif de contrats avec frais de gestion, univers ISR, fonds euros. L'article tient un discours méthodologique juste, mais un lecteur qui tape « assurance vie ISR » veut au moins des ordres de grandeur de frais (frais sur versement, frais de gestion UC ≈ 0,5 % en ligne vs ≈ 1 % avec conseil) et 3-4 exemples de contrats nommés avec inconvénients. Correctif : ajouter un tableau « Trois familles de contrats » (en ligne 100 % autonome / courtier-CGP / banque) avec fourchettes de frais sourcées (pages frais Linxea, Yomoni, etc. datées) et inconvénients pour chaque famille (règle du skill : de vrais inconvénients pour chaque option) ; renvoyer vers l'article avis-patrimoine-vie-plus… pour les deux contrats du cabinet. Sans cela l'article se fait dépasser par un simple comparatif.
2. **Pas de « cas construit » registre A.** « La différence de frais totaux… pèse souvent davantage que le choix entre deux supports » : affirmation forte, non chiffrée. Ajouter un exemple : 20 000 € + 200 €/mois, 20 ans, 0,5 % vs 1,0 % de frais de gestion UC à rendement brut hypothétique identique, écart final chiffré, avec disclaimer d'illustration (le simulateur existe, le citer avec un préréglage).
3. **Données 2026 à actualiser** : titre « 2026 » alors que le contexte réglementaire a bougé : (a) proposition de réforme SFDR (catégories « Transition / ESG basics / Sustainable » à la place des Articles 8/9) — l'article présente encore Art. 8/9 comme cadre stable, sans mention de la réforme en discussion ; (b) Label ISR version renforcée (exclusions fossiles) déjà évoqué ailleurs sur le site, non repris ici ; (c) lignes directrices ESMA sur les noms de fonds. Une mention « ce qui change » + lien vers l'article SFDR suffit.
4. Fiscalité : chiffres exacts et confirmés (PS 17,2 % maintenus pour l'AV par la LFSS 2026, abattement 4 600/9 200 €, 7,5 %/12,8 %, seuil 150 000 €). Point à préciser : le seuil de 150 000 € s'apprécie sur les primes nettes des rachats, tous contrats confondus ; et l'option barème avant 8 ans n'est pas mentionnée. Ajouter la date de vérification (« chiffres vérifiés en septembre 2026 »).
5. « La loi Pacte autorise la transformation de votre contrat en un autre contrat du même assureur en conservant l'antériorité fiscale » : exact, mais un lien source (service-public / Code des assurances art. L131-1) manque, et le cas du transfert « Fourgous » (vers monosupport→multisupport) n'est pas distingué. Mineur.
6. « Souvent de l'ordre de quelques centaines d'euros » (ticket d'entrée) : vague ; PVP est à 500 € d'après un autre article du site. Harmoniser.
7. Résumé exécutif de 8 lignes ; title 77 car.

**Correctifs meta**
- Title : « Assurance vie ISR : comment choisir un contrat en 2026 » (52) ou « Assurance vie ISR : 5 critères pour choisir en 2026 » (47).
- Excerpt (≤ 155) : « Depuis la loi Pacte, tous les contrats affichent des supports responsables. Univers, frais, fonds en euros : les 5 critères vérifiables pour choisir. » (152).

**Liens à ajouter**
1. § « Que garantit déjà la loi Pacte… » → `LienArticle investissement-ethique-guide-complet-2026`, ancre « ce que recouvre vraiment l'investissement éthique ».
2. § « Les frais peuvent-ils annuler l'intérêt… » → `LienArticle frais-conseiller-gestion-patrimoine-independant`, ancre « comment un conseiller en gestion de patrimoine est rémunéré (et ce que cela ajoute aux frais du contrat) ».
3. § « Comment vérifier un contrat avant de signer » (fin) ou conclusion → `LienArticle avis-patrimoine-vie-plus-uaf-life-version-absolue`, ancre « notre avis détaillé sur les deux contrats que nous distribuons, limites comprises ».
4. Intro ou 1er H2 → `/placement-ethique` (page pilier), ancre « panorama de l'investissement éthique en France ».
5. FAQ « PER ISR » → `/outils/per-isr`, ancre « estimer l'effet d'un PER ISR » ; et Q/R « Puis-je rendre mon contrat actuel plus responsable » → `/outils/empreinte-carbone-epargne`, ancre « mesurer d'abord ce que finance votre contrat actuel ».

---

# 3. assurance-vie-luxembourgeoise-investissement-responsable

**Verdict : Améliorable (proche de Complet) — 7,5/10.** Requête cible : « assurance vie luxembourgeoise » (secondaires : « assurance vie luxembourg avantages », « assurance vie luxembourgeoise ISR »). Sujet à faible volume mais très bonne intention haute valeur ; l'article est le plus rigoureux du lot.

**Structure** : résumé OK (long mais riche), PEP OK, H2 en requêtes OK, 3 tableaux/tables (catégories, face-à-face) OK, process « 4 P » OK, FAQ 7 OK, conclusion 4R OK.

**Problèmes**

1. **Affirmation absolue contestable** : « Dans ce cas, aucune enveloppe française ne fait mieux » et, dans le résumé, « un niveau de personnalisation qu'aucun contrat français grand public n'offre ». Le fonds interne dédié (FID) et les fonds dédiés existent aussi dans des contrats français pour de gros patrimoines (seuils souvent plus élevés, offre plus restreinte). « Grand public » sauve la 1re phrase, pas la 2e. Correctif : « peu d'enveloppes françaises offrent ce degré de sur-mesure à ce niveau de patrimoine » ou vérifier auprès d'un assureur français avant de maintenir « aucune ».
2. **Sourcing partiel** : la lettre circulaire CAA 26/1 (en vigueur 1er févr. 2026), les catégories N/A/B/C/D et les seuils 125 000/250 000/1 000 000 € sont donnés avec un lien mais la date d'entrée en vigueur et les seuils précis sont exactement le type de donnée que l'audit ne peut pas confirmer à l'écran ; à re-vérifier ligne à ligne contre le PDF avant maintien (risque « chiffre réglementaire de mémoire »). Le lien ALFI pointe vers la home (pas la statistique « première place européenne ») : citer la page de chiffres précise ou retirer.
3. **Sapin 2** : mécanisme décrit (« Haut Conseil de stabilité financière… par périodes de trois mois renouvelables, six mois consécutifs ») — vérifier la formulation exacte de L. 631-2-1 CMF (autorité compétente et durées) ; l'article attribue la mesure au HCSF alors que la décision formelle relève de l'ACPR/collège de résolution sur avis du HCSF selon les versions. À recouper sur Légifrance.
4. **Manque le coût chiffré du Luxembourg** : « négociés au cas par cas, souvent dégressifs » ; aucun ordre de grandeur (frais de gestion contrat, frais de dépositaire, frais de mandat FID). Sans chiffre sourcé, dire explicitement « nous ne publions pas de fourchette faute de barème public » ou renvoyer vers 2 grilles publiques. Les comparatifs concurrents donnent des fourchettes.
5. **Absents** : fonds en euros (quasi inexistants en direct au Luxembourg, ou via réassurance — juste effleuré) ; prélèvements sociaux et mécanique de prélèvement (retenue non faite à la source au Luxembourg, à déclarer) ; démarche pratique (courtier, délais, KYC) ; transmission (fiscalité identique : dit, mais sans les 152 500 € / 990 I en chiffres, lien vers article donation) ; exemples de contrats/assureurs (aucun nommé, ce qui est prudent mais peu utile) ; risque de change/juridique.
6. Bon point : nuance honnête sur triangle de sécurité, formulaire 3916, Sapin 2. Pas de violation des règles non négociables. « Sur-mesure/ prestige » : ton correct.
7. Title 85 car.

**Correctifs meta**
- Title : « Assurance vie luxembourgeoise : atouts pour l'ISR, seuils, fiscalité » (~63) ou « Assurance vie luxembourgeoise et ISR : faut-il y aller ? » (52).
- Excerpt (≤ 155) : « Triangle de sécurité, fonds dédié, architecture ouverte : ce que l'assurance vie luxembourgeoise apporte vraiment à l'investissement responsable, et à partir de quel montant. » → couper à ~155.

**Liens à ajouter**
1. § « Un résident français paie-t-il moins d'impôts… » → `/outils/comparateur-enveloppes`, déjà en conclusion ; ajouter ici ancre « situer l'assurance vie face au PER, au PEA et au compte-titres ».
2. § « À partir de quel montant… » → `LienArticle ou-placer-argent-facon-ethique-montant`, ancre « où placer 100 000 ou 300 000 € de façon éthique, palier par palier ».
3. § « Fonds interne dédié » → `LienArticle engagement-actionnarial-vs-exclusion`, ancre « exclusion ou engagement : quelle stratégie ISR choisir avant de rédiger vos critères ».
4. § FAQ « Les fonds responsables luxembourgeois… » → `LienArticle label-isr-que-garantit-il-vraiment`, ancre « ce que garantit le Label ISR français, par contraste avec LuxFLAG ».
5. Conclusion → `/conseiller-investissement-responsable` (page de service à créer), ancre « échanger avec un conseiller sur un projet à plusieurs centaines de milliers d'euros » ; et `LienArticle transmettre-patrimoine-engage-fonds-partage` pour le volet succession.

---

# 4. avis-patrimoine-vie-plus-uaf-life-version-absolue

**Verdict : Améliorable — 6/10.** Requêtes cibles : « Patrimoine Vie Plus avis » (volume réel) et « UAF Life Patrimoine avis » / « Version Absolue 2 avis ». Le title actuel ne contient pas le mot « avis », alors que le slug oui : requête principale manquée.

**Structure** : résumé OK (trop long, 12 lignes), PEP OK, H2 partiellement en requêtes (« Patrimoine Vie Plus : présentation et frais » n'en est pas une), tableau OK, section « Points de vigilance » très bonne, FAQ 7 OK, conclusion 4R explicite (Rappel/Réponse/Raisons/Réserves : structure 4R inhabituelle mais présente). Très honnête sur la position juge et partie : point fort.

**Problèmes**

1. **Donnée périmée et probablement fausse** : « rendement 2024 publié s'est établi à 2,20 % brut (environ 1,82 % net de prélèvements sociaux et de frais de gestion) ». (a) Nous sommes en sept. 2026 : les taux 2025 sont publiés depuis le 23 janv. 2026 (Suravenir : Actif Général de PVP à 2,50 % gestion libre / 2,80 % sous mandat, bonus 3,00 %/3,20 % avec ≥ 50 %/≥ 70 % d'UC, taux nets de frais de gestion, avant prélèvements sociaux). (b) La formule « 2,20 % brut… net de prélèvements sociaux et de frais de gestion » est confuse : les taux annoncés sont déjà nets de frais de gestion, avant PS ; 2,20 × (1 − 0,172) = 1,82 ne déduit que les PS. (c) L'article ignore le **bonus conditionné à la part d'UC**, pourtant décisif pour juger le fonds euros. Correctif : remplacer par les taux 2025 sourcés (communiqué Suravenir), préciser « net de frais de gestion, avant PS », mentionner les bonus UC, dater. Idem pour les fonds euros Spirica (aucun taux donné : ajouter les taux 2025 de « Fonds Euro Nouvelle Génération » et « Objectif Climat » à vérifier sur le communiqué Spirica).
2. **Contradiction interne (FAQ)** : « la grille que nous appliquons (1 % dégressif…) est comparable, voire identique, à ce que proposent déjà certains contrats en ligne sans frais d'entrée » — 1 % n'est ni identique ni comparable à 0 % ; et le corps du texte dit l'inverse (« sans frais d'entrée » chez Linxea). Corriger : « supérieure de 1 point jusqu'à 200 000 € ».
3. **Écart avec GUIDE-ARTICLE §2.5** : « aucun avantage commercial du cabinet dans le corps d'un article (pas de "nos frais négociés") ». Ici la grille « que nous appliquons réellement… avant négociation par le distributeur » est le cœur de l'article. C'est cohérent avec la transparence radicale du brief (§2.3/2.4), mais contredit la lettre du guide. À trancher (décision à consigner dans DECISIONS.md) ; en attendant, reformuler « grille négociée » en « grille appliquée par le cabinet » et retirer « réduit fortement, voire totalement… pour les versements significatifs » (assertion sur « l'essentiel des réseaux » non sourcée).
4. **Risque réglementaire : « cabinet de conseil indépendant »** (FAQ « Pourquoi seulement ces deux contrats ? ») alors que le cabinet distribue deux contrats de deux assureurs. En assurance (DDA), « conseil fondé sur une analyse impartiale et personnelle » suppose un nombre suffisant de contrats analysés ; en MIF 2, « conseil indépendant » interdit les rétrocessions. EXP Capital n'est pas CIF. L'article dit lui-même que le cabinet n'a pas comparé tout le marché : ne pas se qualifier d'« indépendant » ; l'article cgp-independant-vs-conseiller-bancaire-ethique fait l'inverse (voir n°6). Aligner le vocabulaire sur tout le site (« cabinet de courtage / conseil en gestion de patrimoine, partenaire de N assureurs »).
5. **Affirmations non sourcées** : « l'un des contrats les plus répandus dans le réseau des CGP indépendants » ; frais d'entrée publics « jusqu'à 4,50 % » / « 3,50 % » (« selon plusieurs comparateurs » sans lien précis) ; « environ 1 200 UC », « plus de 200 ETF », « cinquantaine ISR » (un lien France Transactions, mais dates inconnues) ; classement Article 9 du Fonds Euro Objectif Climat sans lien officiel. Mettre un lien + date à chaque chiffre.
6. **Manques utiles** : frais d'arbitrage, frais du mandat de gestion, frais de gestion du fonds en euros et conditions d'accès (quotas d'UC), SCPI/OPCI accès et frais (brief : 12 % d'entrée en direct, part rétrocédée ~6 %, cashback : à ne pas mélanger mais à renvoyer vers /tarifs), notation/solvabilité des assureurs (ratio de solvabilité publié), garantie FGAP 70 000 €, avis clients, exemple chiffré de frais (registre A : 50 000 € sur 15 ans, 1,08 % vs 0,5 %).
7. « Conseillé/arbitrages conseillés » : OK tant que le mot « recommandation » n'est pas utilisé (ce n'est pas le cas). Vocabulaire « pistes » respecté dans le FAQ.
8. Title 101 car., excerpt 177.

**Correctifs meta**
- Title : « Patrimoine Vie Plus et Version Absolue 2 : avis, frais, limites » (63) ou « Patrimoine Vie Plus, Version Absolue 2 : avis et frais » (52).
- Excerpt (≤ 155) : « Frais réels, fonds en euros, unités de compte ISR et points de vigilance : notre avis, sans détour, sur les deux contrats que notre cabinet distribue. » (~150).

**Liens à ajouter**
1. § « Ces frais sont-ils compétitifs ? » → `LienArticle frais-conseiller-gestion-patrimoine-independant`, ancre « comment un conseiller est rémunéré et ce que cela représente dans les frais ».
2. § « Nous sommes juge et partie » / FAQ rémunération → `/tarifs`, ancre « la grille de rémunération complète du cabinet, poste par poste ».
3. § « Quelles unités de compte ISR sont disponibles ? » → `/outils/decodeur-label`, ancre « décodeur de labels pour vérifier les supports de la liste ».
4. FAQ « Version Absolue 2 utilisable en PER » → `/outils/per-isr`, ancre « estimer l'effet d'un PER ISR » (à côté du lien existant vers per-vs-assurance-vie-isr).
5. Conclusion → `LienArticle cgp-independant-vs-conseiller-bancaire-ethique`, ancre « comparer un CGP et un conseiller bancaire pour votre épargne éthique » et `/conseiller-investissement-responsable`.

---

# 5. bilan-patrimonial-investissement-ethique-rendez-vous

**Verdict : Améliorable (bon) — 7/10.** Requête cible : « bilan patrimonial » (secondaires : « rendez-vous conseiller en gestion de patrimoine », « bilan patrimonial gratuit »). Requête très concurrencée par les banques et cabinets ; l'angle « rendez-vous éthique » est différenciant mais absent du title générique.

**Structure** : résumé OK, PEP OK (peurs), H2 en requêtes OK, tableau modèles de rémunération OK, process nommé « cinq temps » OK, FAQ 7 OK, conclusion 4R OK. L'article respecte bien les règles (« pistes », pas de contrat signé).

**Problèmes**

1. **« Combien coûte un bilan patrimonial ? » ne donne aucun chiffre.** Le tableau décrit trois modèles mais pas d'ordre de grandeur des honoraires (concurrents et forums donnent des fourchettes) ni ce que fait EXP Capital précisément (rendez-vous et bilan offerts ; lettres de mission tarifées uniquement à la demande pour audit ponctuel : brief §2.3). Ajouter une phrase factuelle sur EXP Capital + lien `/tarifs`, et, pour les honoraires du marché, soit une fourchette sourcée, soit « les tarifs varient fortement, demandez un devis écrit ».
2. **Le livrable n'est pas décrit.** Que reçoit-on après ? Document d'entrée en relation, recueil des exigences et besoins, compte rendu, et — vocabulaire verrouillé — la « recommandation » écrite d'un conseiller humain lors d'un second temps. L'article dit « rien ne se signe » mais n'explique pas l'étape écrite : c'est l'occasion d'employer correctement le mot « recommandation » (conseil écrit humain) par contraste avec les « pistes » du premier rendez-vous.
3. **Affirmations « expérience du cabinet » non sourçables, formulées comme faits généraux** : « Comptez environ une heure », « deux tiers d'écoute et de cartographie, un tiers de pistes », « La quasi-totalité des épargnants découvre en rendez-vous ce que contiennent réellement leurs supports », « Si tout est plié en vingt minutes, ce n'était pas un bilan : c'était une vente ». Ce sont des généralisations sans source (registre B mal calibré : chiffres précis + « quasi-totalité »). Reformuler en « nous constatons régulièrement… » ou supprimer le 2/3-1/3.
4. **Pas d'exemple concret (registre A)** : un persona avec un bilan chiffré (patrimoine type, écart valeurs/placements) rendrait l'article plus utile que la liste des cinq plans ; pas d'exemple de questionnaire de durabilité (les trois axes taxonomie/SFDR/PAI sont cités, mais aucune illustration de réponse).
5. Exactitudes : « depuis août 2022 … MIF 2 … DDA » correct (2 août 2022), lien ADEME. À noter : EXP Capital n'étant pas CIF, la phrase « professionnel » générique est prudente ; ne pas laisser entendre que le cabinet applique MIF 2.
6. Manque : honoraires vs commissions ne dit pas ce que « gratuit » couvre (jusqu'où ?), la confidentialité renvoie à une phrase générique (lien `/confidentialite` absent), pas de mention du numéro ORIAS du cabinet alors que l'article invite à le vérifier : citer « le nôtre : 25005915, vérifiable sur orias.fr » (c'est un fait fourni par le brief).
7. Title 95 car., excerpt 160.

**Correctifs meta**
- Title : « Bilan patrimonial : déroulé d'un premier rendez-vous éthique » (58) ou « Bilan patrimonial éthique : à quoi s'attendre au rendez-vous ? » (57).
- Excerpt (≤ 155) : « Durée, questions posées, documents à préparer, préférences de durabilité, signaux d'alerte : le déroulé réel d'un premier bilan patrimonial. » (~145).

**Liens à ajouter**
1. § « Combien coûte un bilan patrimonial ? » (fin) → `/tarifs`, ancre « la grille de rémunération du cabinet, publiée en clair » (l'article le dit en conclusion sans lien).
2. § « Que faut-il préparer… » → `/outils/profil-investisseur`, ancre « questionnaire de profil investisseur » (en plus du diagnostic) et `/outils/portefeuilles-types` ancre « exemples de portefeuilles types (à titre illustratif) » pour visualiser « les orientations » du temps 4.
3. § « Vos préférences de durabilité sont recueillies » → `LienArticle sfdr-article-8-ou-9-ce-que-ca-garantit`, ancre « ce que garantit la classification Article 8 ou 9 » et `LienArticle taxonomie-verte-europeenne-epargne`, ancre « ce que change la taxonomie verte pour votre épargne » (deux des trois axes cités sont sans lien).
4. FAQ « Que deviennent les informations… » → `/confidentialite`, ancre « notre politique de confidentialité ».
5. Conclusion → `LienArticle cgp-independant-vs-conseiller-bancaire-ethique`, ancre « CGP ou conseiller bancaire : quel canal pour votre épargne éthique », `/questions` ancre « les questions fréquentes sur notre accompagnement » et `/conseiller-investissement-responsable`.

---

# 6. cgp-independant-vs-conseiller-bancaire-ethique

**Verdict : Améliorable — 6/10.** Requêtes cibles : « CGP ou conseiller bancaire » / « CGP indépendant vs banque ». Bon angle, article honnête, mais fragile sur le fond juridique et redondant en cohérence avec le reste du site.

**Structure** : résumé OK, PEP OK, H2 en requêtes OK, tableau comparatif 6 critères (en fait 6 lignes affichées : indépendance, gamme, rémunération, disponibilité, spécialisation, suivi) OK, FAQ **9** questions (au-delà des 5-8), conclusion 4R OK, pas de process numéroté (pas obligatoire), pas d'arbre de décision malgré la promesse « série de questions pour trancher ».

**Problèmes**

1. **Usage de « CGP indépendant » non défini juridiquement et contradictoire avec le reste du site.** L'article oppose « architecture fermée » (banque) et « ouverte » (CGP) et affirme qu'« un cabinet qui ne travaille qu'avec un seul assureur n'est indépendant que de nom ». Or EXP Capital distribue deux contrats de deux assureurs et l'article avis-patrimoine… reconnaît ne pas avoir comparé tout le marché. Le lecteur qui enchaîne les deux textes verra une incohérence ; la conclusion (« mettre à l'épreuve la largeur réelle de la gamme ISR proposée ») invite à un test que le cabinet ne passerait qu'à moitié. Correctif : soit qualifier la position du cabinet dans cet article (« notre cabinet travaille avec deux assureurs ; voici pourquoi et ce que cela limite »), soit renvoyer explicitement à l'article avis.
2. **Définition de l'indépendance et régime de rémunération à clarifier** : en conseil sur instruments financiers (MIF 2), le « conseil indépendant » est un statut précis qui interdit de percevoir des rétrocessions ; en assurance (DDA) l'indépendance repose sur une analyse impartiale d'un nombre suffisant de contrats. L'article présente « CGP indépendant = rétrocessions » comme un modèle courant, ce qui est un usage marketing du terme. Ajouter un encadré « Ce que "indépendant" veut (et ne veut pas) dire juridiquement » sourcé (AMF, ACPR, Code des assurances L. 521-2), sinon risque de confusion et de contradiction avec le statut non-CIF du cabinet. Le lien AMF cité est le guide MIF 2 pour les CIF, hors-sujet pour un courtier IAS.
3. **Affirmations comparatives sans source** : « rotation documentée des conseillers en agence » (aucune référence), « salaire + objectifs commerciaux internes », « portefeuille de clients important, créneaux contraints », « portefeuille généralement plus restreint » chez le CGP. Plusieurs lignes du tableau sont des généralisations non sourcées. Sourcer (études, rapports ACPR sur la commercialisation) ou marquer « en pratique, selon nos échanges avec les épargnants ».
4. **Citation nominative** d'un expert (Novethic) : « vraie cassure… » — vérifier la fidélité au texte de L'Info Durable et la date ; la citation dépasse 15 mots (ok sur le site tant que la source est citée avec lien, mais à re-vérifier).
5. **Concurrence oubliée** : la comparaison à 2 canaux ignore le 3e choix des internautes, l'assurance vie en ligne / robo-advisors (Goodvest, Nalo, Linxea…), qui est la vraie alternative pour un épargnant qui cherche « éthique » et petit budget. Ajouter une 3e colonne ou un H2 « Et une assurance vie en ligne ? » avec inconvénients (pas de conseil humain, pas de bilan global). Absence de chiffres : frais d'entrée/gestion typiques banque vs courtage vs ligne (au moins des fourchettes sourcées), taux fonds euros bancaires.
6. Points forts : honnêteté (cas où la banque reste le bon choix), nuance « canal, pas camp », FAQ utile. Aucun nom de banque cité : bon (pas de risque de diffamation).
7. Excerpt 194 car., title 85 car.

**Correctifs meta**
- Title : « CGP ou conseiller bancaire : qui choisir pour investir éthique ? » (63) → « CGP ou banquier : qui choisir pour investir éthique ? » (52).
- Excerpt (≤ 155) : « Architecture ouverte ou fermée, gamme ISR, rémunération, suivi : la vraie différence entre votre banquier et un CGP pour placer votre épargne éthique. » (~150).

**Liens à ajouter**
1. § « Un CGP indépendant est-il moins cher… » → `/tarifs`, ancre « voir en clair comment notre cabinet est rémunéré ».
2. § « Comparatif… six critères » (avant le tableau) → `LienArticle avis-patrimoine-vie-plus-uaf-life-version-absolue`, ancre « un exemple concret : les deux contrats que notre cabinet distribue, avec leurs limites ».
3. § « Dans quels cas le conseiller bancaire… » (bullet « montant faible ») → `LienArticle investir-ethique-petit-budget`, ancre « investir éthique avec un petit budget » et `/outils/simulateur`.
4. FAQ « Comment vérifier qu'un CGP… » → `/outils/decodeur-label`, ancre « décodeur de labels : de quoi vérifier la promesse d'un fonds ISR ».
5. Conclusion → `/conseiller-investissement-responsable`, ancre « ce que fait un conseiller en investissement responsable » (page de service à créer) et `/questions`.

---

# 7. dispositifs-fiscaux-demarche-ethique

**Verdict : Améliorable — 6,5/10.** Requête cible : « défiscalisation écologique / éthique » (secondaires : « dispositif fiscal investissement responsable », « éco-PTZ Denormandie Girardin »). Requête large : le title actuel est une question longue, peu alignée sur la manière dont les internautes cherchent.

**Structure** : résumé OK, PEP OK, méthode nommée « L'Opération, l'Impact, l'Impôt » OK, H2 en requêtes OK, tableau 3 dispositifs OK, FAQ 6 OK, conclusion 4R OK. Très bonne pédagogie ; erreurs de fraîcheur et de couverture.

**Problèmes**

1. **FAQ « Le Pinel existe-t-il encore en 2026 ? » obsolète/fausse par omission.** Elle affirme que Pinel « n'a pas été remplacé par un équivalent dans le neuf » et que « la voie ouverte est le Denormandie ». Or la loi de finances pour 2026 (loi n° 2026-103 du 19 févr. 2026, art. 47) a créé le « statut du bailleur privé » (dispositif Jeanbrun) : amortissement de 3 à 5,5 % de la valeur du bien (hors terrain), ouvert au collectif neuf et à l'ancien avec travaux, acquisitions jusqu'au 31 déc. 2028, applicable depuis le 21 févr. 2026. L'article prétend « chiffres vérifiés en juin 2026 » : c'est faux pour ce point. Correctif : réécrire la FAQ, ajouter Jeanbrun au tableau comparatif (colonne 4) ou au moins un H3, adapter la conclusion (« le Pinel a déjà disparu » → mentionner son successeur), et re-dater les vérifications. Gravité haute (erreur factuelle publiée sous un intitulé « chiffres vérifiés »).
2. **Conflit d'intérêts non déclaré sur le Girardin.** Le brief (§2.4) indique que le cabinet distribue du Girardin industriel avec ~6 % de commission incluse dans le montage, et de l'immobilier direct avec 0 à 10 % de commission. L'article recommande d'examiner le Girardin sans mentionner cette rémunération. Cohérent avec la promesse de « transparence radicale » : ajouter une phrase (« nous distribuons ce type de montage ; notre rémunération, intégrée au montage, est détaillée sur /tarifs ») — sans « nos frais négociés » (GUIDE §2.5) mais avec la transparence sur la rémunération.
3. **Couverture incomplète pour la requête « défiscalisation éthique »** : manquent PER (renvoyé vers l'article PER, OK), FCPI/FIP et IR-PME (réduction d'impôt pour PME/innovation), déficit foncier avec travaux de rénovation énergétique, Loc'Avantages, Malraux/monuments historiques, dons aux associations (66/75 %, traités ailleurs sur le site : donner un lien), SOFICA. Le choix « trois dispositifs » est défendable mais l'intitulé « quels dispositifs fiscaux sont compatibles » promet un panorama. Ajouter une section « Et les autres dispositifs ? » en tableau (dispositif / ce que finance l'argent / risque / passe le filtre O-I-I ?) avec renvois.
4. **Girardin présenté comme « éthique » sans nuance sur les critiques publiques** (opacité, frais de montage, risque de requalification) : l'article évoque le risque mais aucune source (rapports Cour des comptes / Sénat / Bercy sur le coût des niches ultramarines) ; l'argument « additionnalité » est affirmé (« sans les fonds collectés, la machine n'est pas livrée ») sans source. Ajouter un lien source ou nuancer.
5. **Chiffres vérifiés et cohérents avec ma recherche** : éco-PTZ (50 000 €, 30 000/25 000/15 000, 7 000 parois vitrées, 10 000 ANC, 15-20 ans, à fin 2027), Denormandie (12/18/21 %, 300 000 €, 5 500 €/m², 25 % de travaux, 30 %/20 % de gain, jusqu'au 31 déc. 2027), plafonds 10 000/18 000 €. À re-confirmer à la date de publication (LF 2026 a pu modifier la liste des dispositifs). Aucun exemple chiffré d'économie d'impôt ni de coût de crédit (registre A absent) : ajouter un cas simple (éco-PTZ : intérêts économisés sur 30 000 € sur 15 ans à un taux hypothétique de banque, disclaimer).
6. **Point de vigilance vocabulaire** : « pistes chiffrées » (OK), aucun « recommandation ». La conclusion (« passe en revue avec vous votre dernier avis d'imposition — plafonds disponibles, avantages déjà consommés ») frôle « étude de votre situation » : reformuler.
7. Excerpt annonce « Chiffres 2026 vérifiés » : engagement de maintenance, à retirer ou à dater (« vérifiés en septembre 2026 » après correction).
8. Title 70 car.

**Correctifs meta**
- Title : « Défiscalisation éthique : quels dispositifs choisir en 2026 ? » (58).
- Excerpt (≤ 155) : « Éco-PTZ, Denormandie, Girardin, bailleur privé : quels dispositifs fiscaux récompensent un impact vérifiable, et comment les trier avant de vous engager. » (~150).

**Liens à ajouter**
1. § « L'éco-PTZ finance-t-il… » → `/outils/comparateur-eco-ptz` (déjà présent) + `LienArticle empreinte-carbone-epargne-pourquoi-mesurer`, ancre « mesurer l'empreinte carbone de votre épargne, pas seulement de votre logement ».
2. § « Le Girardin industriel… » → `/tarifs`, ancre « la rémunération du cabinet sur ce type de montage » et `LienArticle pieges-inconvenients-investissement-ethique`, ancre « les pièges de l'investissement éthique, nommés honnêtement ».
3. FAQ « Un dispositif fiscal suffit-il… » → `/objectifs`, ancre « choisir un objectif : retraite, transmission, projet immobilier ».
4. Intro (après la définition) → `LienArticle donation-transmission-coherence-valeurs`, ancre « dons aux associations et réduction d'impôt de 66 % / 75 % » (dispositif fiscal éthique absent de l'article) et `LienArticle per-vs-assurance-vie-isr`.
5. Conclusion → `/placement-ethique` (page pilier), ancre « la vue d'ensemble d'un placement éthique cohérent » et `/conseiller-investissement-responsable`.

---

# 8. donation-transmission-coherence-valeurs

**Verdict : Améliorable — 7/10.** Requêtes cibles : « transmettre son patrimoine selon ses valeurs » (faible volume) ; opportunité SEO plus forte sur « donation et assurance vie : abattements », « legs à une association », « clause bénéficiaire assurance vie association ». Risque de cannibalisation avec assurance-vie-enfants…, transmettre-patrimoine-engage-fonds-partage et heritage-donation-investir-valeurs (même date, thématique proche).

**Structure** : résumé OK, PEP OK, H2 en requêtes OK, tableau 5 voies OK, process nommé « Clarifier, Structurer, Flécher, Raconter » OK, FAQ 7 OK, conclusion 4R OK. Le fichier utilise `&rsquo;` (les autres articles utilisent `'` littéral) : incohérence de style sans effet visible.

**Problèmes**

1. **Omission majeure : la réserve héréditaire / quotité disponible**, qui borne tout legs à une association et toute inégalité entre enfants. L'article présente le legs comme un outil libre (tableau : « Modéré : charges possibles… »). L'article voisin transmettre-patrimoine-engage-fonds-partage la traite : renvoyer explicitement (le lien est présent mais pas sur ce point) et ajouter une phrase + ligne au tableau. Sans cela, risque d'induire une promesse fausse (« associer une association » quand il y a des enfants).
2. **Idée forte manquée pour « transmettre l'allocation »** : l'article affirme que l'assurance vie « redevient un virement bancaire » au décès. Vrai pour l'AV, mais le **contrat de capitalisation** est transmis dans la succession (ou par donation, avec démembrement possible) et conserve son allocation et son antériorité fiscale : c'est l'outil concret pour transmettre « les supports soigneusement choisis ». À ajouter (avec la nuance fiscale : soumis aux droits de succession/donation, pas au régime 990 I). Idem clause bénéficiaire démembrée, fonds de dotation/fondation abritée pour la philanthropie : absents.
3. **Aucun chiffre de coût ni exemple** (registre A) : pas d'exemple « 300 000 € à deux enfants : combien de droits selon la voie choisie ? » ; pas d'ordre de grandeur des frais de notaire pour une donation. Le barème des droits en ligne directe (5 à 45 % après abattement) n'est même pas cité, alors que la fiscalité est le premier réflexe du lecteur. Un tableau ou un cas pédagogique sourcé (service-public / impots.gouv) comblerait ça.
4. **Fiscalité assurance vie : correcte mais incomplète** : 152 500 € par bénéficiaire (primes avant 70 ans), 20 % jusqu'à 700 000 €, 31,25 % au-delà, abattement global 30 500 € après 70 ans, conjoint/pacsé exonéré : exact. Manque : les gains sur primes après 70 ans sont exonérés (avantage clé), et l'assurance vie n'est pas soumise à la réserve héréditaire sauf primes manifestement exagérées. « L'assurance vie est l'outil de transmission préféré des Français » : non sourcé.
5. **Incohérence avec l'article enfants** : ici, la clause d'inaliénabilité « jusqu'à un âge que vous fixez » ; là-bas « la pratique retient généralement le vingt-cinquième anniversaire ». Harmoniser (et sourcer).
6. **Dons aux associations** : « 66 % … 75 % jusqu'à 2 000 € » est exact depuis la LF 2026 (dons depuis le 14 oct. 2025) ; ajouter la date de vérification et que le plafond de 20 % du revenu imposable a un report de 5 ans. À citer via lien service-public déjà présent.
7. Dernier paragraphe : « un conseiller du cabinet passe en revue l'existant et vous donne des pistes concrètes » : acceptable (le mot « pistes » est correct), mais éviter « passe en revue l'existant » (proche d'étude personnalisée). « à valider ensuite avec votre notaire » : bon réflexe.
8. Title 75 car.

**Correctifs meta**
- Title : « Transmettre selon ses valeurs : donation, legs, assurance vie » (61) ou « Donation et assurance vie : transmettre selon ses valeurs » (54).
- Excerpt (≤ 155) : « Abattements 2026, pacte adjoint, clause bénéficiaire, legs aux associations : les outils pour transmettre vos valeurs, pas seulement un capital. » (~145).

**Liens à ajouter**
1. § « Quels abattements pour donner de votre vivant ? » → `LienArticle heritage-donation-investir-valeurs`, ancre « que faire d'un héritage ou d'une donation reçue en cohérence avec vos valeurs » (côté receveur : lien croisé qui évite la cannibalisation).
2. § « L'assurance vie transmet-elle aussi vos choix » → `/enveloppes`, ancre « comparer assurance vie, capitalisation, PER, PEA et compte-titres » et `/outils/comparateur-enveloppes`.
3. § « Comment orienter l'usage des sommes données » → `LienArticle quelle-enveloppe-investissement-ethique`, ancre « quelle enveloppe choisir pour investir éthique avant de donner ».
4. § « Comment transmettre la méthode » (étape Raconter) → `/outils/portefeuilles-types`, ancre « exemples de portefeuilles types à commenter avec vos enfants » (rappeler qu'ils sont illustratifs) et `/outils/empreinte-carbone-epargne`.
5. Conclusion → `/objectifs`, ancre « transmission, retraite, projet : votre objectif d'épargne » et `/conseiller-investissement-responsable`.

---

# Constats transverses (tous les articles du lot)

1. **Fraîcheur des chiffres et des lois** : plusieurs contenus se disent « vérifiés » ou « 2026 » sans date de vérification affichée. Erreurs/périmés relevés : FAQ Pinel/Jeanbrun (dispositifs-fiscaux), fonds euros Suravenir 2024 au lieu de 2025 avec bonus UC omis (avis), SFDR en cours de réforme non mentionnée (AV ISR, lux, bilan). Les chiffres fiscaux AV (17,2 %, 7,5 %/12,8 %, 4 600/9 200 €) sont eux corrects après la LFSS 2026. Recommandation : ajouter une ligne « Chiffres vérifiés le JJ/MM/AAAA sur <source> » en fin d'article et un contrôle de fraîcheur trimestriel.
2. **Contradictions de positionnement « indépendant »** : cgp-independant-vs-… définit l'indépendance par l'architecture ouverte et rétrocessions, tandis que avis-patrimoine… reconnaît que le cabinet ne distribue que deux contrats. Risque réglementaire (usage du terme « indépendant » quand le cabinet n'est pas CIF et n'analyse pas tout le marché) et risque de confiance. À harmoniser dans tous les articles Conseil/Enveloppes (glossaire de vocabulaire dans GUIDE-ARTICLE).
3. **Peu de chiffres concrets et aucun cas chiffré registre A** dans 6 articles sur 8 (coûts, exemples de simulation, ordre de grandeur des frais) : les concurrents donnent au moins un exemple ; ici l'expertise est méthodologique mais l'intention « combien ça coûte ? » reste partiellement sans réponse (Big 5 Coût). En complément : titles trop longs partout (70-101 car., tous > 60), excerpts > 160 dans 3 articles, résumés exécutifs de 8-12 lignes au lieu de 2-4 phrases, maillage vers `/tarifs`, `/enveloppes`, `/objectifs`, `/placements`, `/questions` quasi inexistant dans ces 8 articles (aucun lien direct vers ces pages détecté), et fermetures de conclusion qui glissent vers « passe en revue avec vous votre situation » (à remplacer par « échanger avec un conseiller, obtenir des pistes »).
