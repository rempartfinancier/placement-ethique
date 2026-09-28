# Edits batch_00 — phase 2 (8 articles, src/content/articles/*.tsx)

Aucun build/commit lancé. Vérification de syntaxe JSX faite par transpilation TypeScript (0 erreur sur les 8 fichiers). Tous les slugs ciblés par LienArticle existent dans src/content/articles/. Slug, date, category, author, tags inchangés. Chaque article renvoie vers /cgp-investissement-responsable (dans la conclusion/CTA) ; /placement-ethique ajouté dans 2 articles (AV ISR guide, dispositifs-fiscaux), au plus un lien par cible et par article pour les liens ajoutés.

Total : 38 liens internes ajoutés, 8 titles et 8 excerpts réécrits.

---

## 1. assurance-vie-enfants-transmettre-valeurs

**Meta**
- title : « Ouvrir une assurance vie à ses enfants : comment transmettre un capital — et vos valeurs ? » (90) → « Assurance vie enfant mineur : ouvrir, donner, transmettre » (57)
- excerpt : « Oui, votre enfant peut avoir son assurance vie dès la naissance : qui signe… » (161) → « Qui signe, comment donner sans droits, quel cadre après 18 ans : ouvrir une assurance vie à votre enfant, sur des supports alignés sur vos valeurs. » (147)

**Liens ajoutés (4)**
- FAQ « Livret A ou assurance vie ? » → `/outils/comparateur-enveloppes`, ancre « comparateur d'enveloppes »
- FAQ « Des supports ISR sont-ils adaptés… » → `/outils/decodeur-label`, ancre « décodeur de labels »
- même FAQ → LienArticle `investissement-ethique-guide-complet-2026`, ancre « guide complet de l'investissement éthique »
- Réintroduction (dernier paragraphe) → `/cgp-investissement-responsable`, ancre « échanger avec un conseiller du cabinet »

**Corrections**
- « l'objection que nous entendons le plus souvent » → « l'une des objections les plus courantes » (affirmation sur le cabinet non vérifiable).
- CTA final : « un conseiller du cabinet passe en revue avec vous le contrat, les dons déjà réalisés… » → « échanger avec un conseiller du cabinet… pour obtenir des pistes sur le contrat, le calibrage des dons… » (formulation proche de « étude de situation »).

## 2. assurance-vie-isr-guide-2026

**Meta**
- title : « Assurance vie ISR : comment choisir un contrat vraiment responsable en 2026 ? » (77) → « Assurance vie ISR : comment choisir un contrat en 2026 » (54)
- excerpt : « Tous les contrats affichent des supports « responsables » depuis la loi Pacte. Univers réel, frais… » (155) → « Depuis la loi Pacte, tous les contrats affichent des supports responsables. Univers, frais, fonds en euros : les critères vérifiables pour bien choisir. » (152)

**Liens ajoutés (5)**
- Intro (« Reposons les bases ») → LienArticle `investissement-ethique-guide-complet-2026`, ancre « guide de l'investissement éthique »
- même paragraphe → `/placement-ethique`, ancre « placement éthique »
- § frais → LienArticle `avis-patrimoine-vie-plus-uaf-life-version-absolue`, ancre « avis sur deux contrats d'assurance vie »
- FAQ « Assurance vie ISR ou PER ISR » → `/outils/per-isr`, ancre « outil PER ISR »
- CTA final → `/cgp-investissement-responsable`, ancre « échanger avec un conseiller du cabinet »

**Corrections**
- CTA final : « un conseiller du cabinet passe en revue avec vous votre contrat actuel… » → « échanger avec un conseiller… pour obtenir des pistes sur votre contrat… ».
- **NON modifié** : « prélèvement forfaitaire unique de 30 % (impôt et prélèvements sociaux compris) » pour les rachats d'AV avant 8 ans. La consigne demandait de corriger « 30 % » en 31,4 % ; ma vérification (sources : Banque Transatlantique, Sextant, Hagnéré, MACSF, etc.) indique que la LFSS 2026 a porté les PS à 18,6 % sur la plupart des revenus du capital MAIS que l'assurance vie et la capitalisation restent à 17,2 % (donc PFU AV = 12,8 % + 17,2 % = 30 %). Changer en 31,4 % rendrait l'article faux pour l'AV. À trancher par le coordinateur sur source officielle (economie.gouv.fr / BOFiP). Aucun changement appliqué.

## 3. assurance-vie-luxembourgeoise-investissement-responsable

**Meta**
- title : « Assurance vie luxembourgeoise : quel intérêt réel pour l'investissement responsable ? » (85) → « Assurance vie luxembourgeoise : atouts et limites pour l'ISR » (60)
- excerpt : « Sécurité, prestige… et éthique ? L'intérêt réel du contrat luxembourgeois… » (166) → « Triangle de sécurité, fonds dédié, architecture ouverte : ce que l'assurance vie luxembourgeoise apporte vraiment à l'investissement responsable. » (145)

**Liens ajoutés (5)**
- § architecture ouverte (LuxFLAG) → LienArticle `label-isr-que-garantit-il-vraiment`, ancre « Label ISR français »
- § FID → LienArticle `engagement-actionnarial-vs-exclusion`, ancre « exclure ou engager »
- § « À partir de quel montant » → LienArticle `ou-placer-argent-facon-ethique-montant`, ancre « où placer 50 000, 100 000 ou 300 000 € de façon éthique »
- § fiscalité (décès) → LienArticle `transmettre-patrimoine-engage-fonds-partage`, ancre « la transmission d'un patrimoine engagé »
- CTA final → `/cgp-investissement-responsable`, ancre « échanger avec un conseiller du cabinet »

**Corrections**
- CTA final : « c'est exactement le type d'analyse que nous menons lors d'un premier échange offert » (affirmation sur le cabinet + « analyse de votre situation ») → « vous pouvez échanger avec un conseiller du cabinet… pour obtenir des pistes ».

## 4. avis-patrimoine-vie-plus-uaf-life-version-absolue

**Meta**
- title : « Patrimoine Vie Plus et UAF Life Patrimoine (Version Absolue 2) : ce qu'il faut savoir avant de signer » (101) → « Patrimoine Vie Plus et Version Absolue 2 : avis et frais » (56)
- excerpt : « Ce sont les deux seuls contrats que notre cabinet distribue. Frais réels… » (177) → « Frais, fonds en euros, unités de compte ISR et limites : notre avis sur Patrimoine Vie Plus et UAF Life Version Absolue 2, les deux contrats du cabinet. » (152)

**Liens ajoutés (5)**
- § « Ces frais sont-ils compétitifs ? » → LienArticle `frais-conseiller-gestion-patrimoine-independant`, ancre « le coût d'un conseiller en gestion de patrimoine »
- § points de vigilance (« juge et partie ») → `/tarifs`, ancre « notre page tarifs »
- § UC ISR → `/outils/decodeur-label`, ancre « décodeur de labels »
- FAQ « Version Absolue 2 utilisable en PER » → `/outils/per-isr`, ancre « outil PER ISR »
- dernier paragraphe → `/cgp-investissement-responsable`, ancre « échanger avec un conseiller »

**Corrections**
- « réseau des CGP indépendants en France » → « réseau des conseillers en gestion de patrimoine en France » (règle c).
- FAQ « Pourquoi ces deux contrats ? » : « Mais un cabinet de conseil indépendant en gestion de patrimoine, quel qu'il soit, travaille toujours avec un nombre limité de partenaires » → « un cabinet de conseil en gestion de patrimoine travaille en pratique avec un nombre limité de partenaires… courtage et conseil intermédié » (retrait de « indépendant » et de « toujours »).
- FAQ « Ces contrats sont-ils plus chers ? » : contradiction interne corrigée (« comparable, voire identique, à… certains contrats en ligne sans frais d'entrée » alors que 1 % ≠ 0 %) → « reste supérieure jusqu'à 400 000 € à celle de contrats en ligne sans frais d'entrée », écart annuel toujours présenté comme l'essentiel.
- FAQ « Dois-je signer… » : « sert à faire un point sur votre situation, vos objectifs… » → « sert à échanger sur vos objectifs et vos priorités éthiques et à obtenir des pistes ».
- CTA final : « vérifier avec un conseiller si l'un de ces deux contrats correspond réellement à votre situation… chiffres qui vous concernent » → « échanger avec un conseiller pour savoir si l'un de ces deux contrats peut vous convenir… pistes chiffrées qui vous concernent ».

## 5. bilan-patrimonial-investissement-ethique-rendez-vous

**Meta**
- title : « Bilan patrimonial : à quoi ressemble un vrai rendez-vous de conseil en investissement éthique ? » (95) → « Bilan patrimonial éthique : le déroulé du 1er rendez-vous » (57)
- excerpt : « … le déroulé réel d'un premier rendez-vous patrimonial, sans mystère. » (160) → « Durée, questions posées, documents à préparer, préférences de durabilité, signaux d'alerte : le déroulé réel d'un premier bilan patrimonial éthique. » (148)

**Liens ajoutés (5)**
- § préférences de durabilité → LienArticle `taxonomie-verte-europeenne-epargne`, ancre « taxonomie verte européenne »
- même paragraphe → LienArticle `sfdr-article-8-ou-9-ce-que-ca-garantit`, ancre « règlement SFDR »
- § « Combien coûte un bilan patrimonial ? » (fin) → `/tarifs`, ancre « notre page tarifs »
- FAQ « Que deviennent les informations… » → `/confidentialite`, ancre « notre politique de confidentialité »
- conclusion (CTA) → `/cgp-investissement-responsable`, ancre « échanger avec un conseiller du cabinet »

**Corrections**
- Statistique interne inventée supprimée : « deux tiers d'écoute et de cartographie, un tiers de pistes et de pédagogie » → « L'essentiel du temps va à l'écoute et à la cartographie, le reste aux pistes et à la pédagogie ».
- « La quasi-totalité des épargnants découvre… » → « Beaucoup d'épargnants découvrent… » (statistique non sourcée).
- CTA final reformulé en « vous pouvez échanger avec un conseiller du cabinet ».

## 6. cgp-independant-vs-conseiller-bancaire-ethique

**Meta**
- title : « CGP indépendant ou conseiller bancaire : qui choisir pour investir de façon éthique ? » (85) → « CGP ou banquier : qui choisir pour investir éthique ? » (53)
- excerpt : (194) → « Architecture ouverte ou fermée, gamme ISR, rémunération, suivi : la vraie différence entre votre banquier et un CGP pour placer votre épargne éthique. » (150)

**Liens ajoutés (5)**
- § « Un CGP est-il moins cher… » (fin du 2e paragraphe) → `/tarifs`, ancre « notre page tarifs »
- bullet « Un montant faible ou un premier placement » → LienArticle `investir-ethique-petit-budget`, ancre « l'investissement éthique à petit budget »
- FAQ « Comment vérifier qu'un CGP n'est pas un vendeur déguisé… » → `/outils/decodeur-label`, ancre « décodeur de labels »
- conclusion → LienArticle `avis-patrimoine-vie-plus-uaf-life-version-absolue`, ancre « notre avis détaillé sur ces deux contrats »
- conclusion (CTA) → `/cgp-investissement-responsable`, ancre « échanger avec un conseiller du cabinet »

**Corrections (règle c « CGP indépendant »)**
- « CGP indépendant » remplacé par « CGP » dans le résumé, l'intro, 3 H2 (« Banquier ou CGP », « Un CGP est-il moins cher », « Comparatif… vs CGP »), l'en-tête du tableau, les H3 de FAQ concernées, la conclusion, l'intro de section « Dans quels cas… ». Le tag « CGP indépendant » (meta.tags) est conservé (tags non modifiables).
- Ajout d'une phrase-définition : « CGP » = terme d'usage, pas un statut juridique ; ce qui compte = immatriculation ORIAS et statut réel du cabinet.
- « Il travaille en architecture ouverte » → « en principe en architecture ouverte ou multi-partenaires… le nombre de partenaires varie toutefois fortement d'un cabinet à l'autre » ; « dizaines de sociétés de gestion » → « nombreuses » ; « gamme généralement plus large » → « souvent plus large » ; cellule du tableau « Architecture ouverte : plusieurs compagnies… » → « Souvent plusieurs compagnies… à vérifier cabinet par cabinet ».
- Conclusion : ajout d'une phrase de transparence (le cabinet distribue aujourd'hui deux contrats d'assurance vie, de deux assureurs, et non l'ensemble du marché) et remplacement de « mettre à l'épreuve… la largeur réelle de la gamme ISR proposée » par « poser toutes les questions… la liste des partenaires et des supports ISR disponibles ».
- « le secteur du conseil indépendant » → « le secteur du conseil en gestion de patrimoine » ; ancre du lien vers frais-conseiller : « … gestion de patrimoine indépendant » → « … gestion de patrimoine » ; « bancaire ou indépendant » → « bancaire ou non » ; FAQ ORIAS : « statut commercial de « CGP indépendant » » → « appellation commerciale de « CGP indépendant » ».

## 7. dispositifs-fiscaux-demarche-ethique

**Meta**
- title : « Quels dispositifs fiscaux sont compatibles avec une démarche éthique ? » (70) → « Défiscalisation éthique : quels dispositifs en 2026 ? » (53)
- excerpt : « … Chiffres 2026 vérifiés et méthode de tri incluse. » (152) → « Éco-PTZ, Denormandie, Girardin : trois dispositifs où l'avantage fiscal rémunère un impact vérifiable, et une méthode en trois filtres pour les trier. » (150) (retrait de la promesse « Chiffres 2026 vérifiés »)

**Liens ajoutés (5)**
- § méthode (paragraphe « Ce filtre s'applique… PER ») → LienArticle `donation-transmission-coherence-valeurs`, ancre « notre article sur la donation et la transmission » (dons aux associations)
- § Girardin → `/tarifs`, ancre « notre page tarifs »
- § Girardin → LienArticle `pieges-inconvenients-investissement-ethique`, ancre « les pièges et inconvénients de l'investissement éthique »
- conclusion « Pour la suite » → `/placement-ethique`, ancre « placement éthique »
- CTA final → `/cgp-investissement-responsable`, ancre « échanger avec un conseiller du cabinet »

**Corrections**
- FAQ « Le Pinel existe-t-il encore en 2026 ? » : suppression de « n'a pas été remplacé par un équivalent dans le neuf » et de « la voie ouverte est le Denormandie » (erreur factuelle : le statut du bailleur privé, dispositif dit Jeanbrun, créé par la loi de finances 2026, existe) → mention du statut du bailleur privé (amortissement plutôt que réduction d'impôt, « conditions à vérifier ») ; Denormandie « reste ouvert jusqu'à fin 2027 ». Aucun taux/plafond du Jeanbrun n'a été écrit (non vérifié sur source officielle).
- Ajout d'une phrase de transparence sur le Girardin : le cabinet peut être rémunéré par une commission intégrée à ce type de montage (sans chiffre), renvoi /tarifs (cohérence avec brief §2.3/2.4).
- CTA final : « un conseiller du cabinet passe en revue avec vous votre dernier avis d'imposition… dans votre cas » → « échanger avec un conseiller du cabinet… pour obtenir des pistes… ».

## 8. donation-transmission-coherence-valeurs

**Meta**
- title : « Comment donner et transmettre un patrimoine en cohérence avec vos valeurs ? » (75) → « Transmettre son patrimoine selon ses valeurs : les outils » (57)
- excerpt : « Abattements vérifiés, pacte adjoint… pas seulement un montant. » (148) → « Abattements, pacte adjoint, clause bénéficiaire, legs aux associations : les outils pour transmettre vos valeurs, et pas seulement un capital. » (142)

**Liens ajoutés (4)**
- § abattements (fin) → LienArticle `heritage-donation-investir-valeurs`, ancre « l'héritage ou la donation reçue »
- § « Comment orienter l'usage des sommes » (clause de remploi) → LienArticle `quelle-enveloppe-investissement-ethique`, ancre « quelle enveloppe choisir pour investir éthique »
- process « Raconter » → `/outils/empreinte-carbone-epargne`, ancre « outil d'empreinte carbone de l'épargne »
- CTA final → `/cgp-investissement-responsable`, ancre « échanger avec un conseiller du cabinet »

**Corrections**
- « c'est un travail que nous faisons régulièrement avec les familles » supprimé (affirmation sur le cabinet non vérifiable) ; « poser votre situation sur la table » → « en parler à voix haute ».
- CTA : « un conseiller du cabinet passe en revue l'existant et vous donne des pistes concrètes » → « échanger avec un conseiller du cabinet… pour obtenir des pistes concrètes, à valider ensuite avec votre notaire ».
- Retrait de « Abattements vérifiés » de l'excerpt (promesse de maintenance).

---

# À VÉRIFIER / non modifié

Haute priorité
1. **PFU 30 % vs 31,4 % (assurance-vie-isr-guide-2026)** : la consigne de corriger « 30 % » en 31,4 % semble incorrecte pour l'assurance vie (AV maintenue à 17,2 % de PS par la LFSS 2026 d'après plusieurs sources) ; non appliqué. Confirmer sur economie.gouv.fr / BOFiP avant toute modification. Idem : vérifier tout article du site qui cite un PFU global pour PEA/CTO (hors batch).
2. **Fonds euros Suravenir (avis-patrimoine-…)** : « rendement 2024 publié 2,20 % brut (environ 1,82 % net de prélèvements sociaux et de frais de gestion) » est périmé et formulé de façon confuse ; les taux 2025 sont publiés (communiqué Suravenir du 23 janv. 2026 : Actif Général de Patrimoine Vie Plus à 2,50 % en gestion libre, 2,80 % en gestion sous mandat, bonus 3,00 %/3,20 % selon part d'UC ≥ 50 %/≥ 70 %, taux nets de frais de gestion et avant prélèvements sociaux). Non modifié faute de source officielle relue ; à réécrire à partir du communiqué. Ajouter aussi les taux 2025 des fonds euros Spirica.
3. **Statut du bailleur privé / Jeanbrun (dispositifs-fiscaux)** : loi n° 2026-103 du 19 févr. 2026 (art. 47), entrée en vigueur au 21 févr. 2026, acquisitions jusqu'au 31 déc. 2028, amortissement 3 à 5,5 %, immeubles collectifs neufs ou anciens avec travaux : issu de recherches web secondaires, à confirmer sur legifrance/impots.gouv avant d'ajouter des chiffres. Les mentions « vérifiés en juin 2026 » restantes dans l'intro et la note de synthèse du tableau sont à re-dater après re-vérification.

Autres points non modifiés
- **assurance-vie-luxembourgeoise** : « aucune enveloppe française ne fait mieux » (conclusion) et « qu'aucun contrat français grand public n'offre » (résumé) : des fonds internes dédiés existent aussi en France ; à vérifier ou reformuler. Lettre circulaire CAA 26/1 (entrée en vigueur 1er févr. 2026), catégories N/A/B/C/D et seuils 125 000/250 000/1 000 000 € à recontrôler sur le PDF du CAA. Sapin 2 : autorité compétente et durées (« HCSF », « trois mois renouvelables, six mois ») à recouper sur L. 631-2-1 CMF. Lien ALFI vers la page d'accueil (pas de statistique). Frais luxembourgeois non chiffrés.
- **assurance-vie-enfants** : « la pratique retient généralement le vingt-cinquième anniversaire comme limite haute » (pacte adjoint, 2 occurrences) sans source ; rachat pour un mineur (« signé par ses représentants légaux ») : conditions selon le régime d'administration légale à confirmer. Incohérence à harmoniser avec donation-transmission (clause d'inaliénabilité « jusqu'à un âge que vous fixez »).
- **avis-patrimoine-…** : « l'un des contrats les plus répandus dans le réseau des conseillers en gestion de patrimoine » ; frais publics « jusqu'à 4,50 % » et « 3,50 % » ; « ~1 200 UC / plus de 200 ETF / cinquantaine d'UC ISR » et « Fonds Euro Objectif Climat classé Article 9 » (sources datées manquantes) ; « l'essentiel des réseaux de conseil la réduit fortement, voire totalement, pour les versements significatifs » ; « Il arrive qu'aucun des deux ne soit pertinent… nous vous le disons » (pratique du cabinet). Décision à consigner (DECISIONS.md) : l'article publie la grille de frais « que nous appliquons », ce qui va à l'encontre de la lettre de GUIDE-ARTICLE §2.5 (« pas de nos frais négociés ») tout en respectant la transparence du brief §2.3/2.4 ; non modifié.
- **bilan-patrimonial** : « Comptez environ une heure » et « Si tout est plié en vingt minutes, ce n'était pas un bilan : c'était une vente » (généralisations non sourcées) ; pas de fourchette d'honoraires du marché ; MIF 2/DDA depuis août 2022 (correct, lien ADEME).
- **cgp-independant-…** : « rotation documentée des conseillers en agence » et autres généralisations comparatives (salaire + objectifs, portefeuilles) sans source ; citation nominative de Novethic (fidélité à L'Info Durable à vérifier) ; lien AMF « guide MIF 2 pour les CIF » hors-sujet pour un courtier en assurance ; 9 questions en FAQ (cible 5-8) ; définition juridique de l'« indépendance » (MIF 2 : pas de rétrocessions ; DDA : analyse impartiale) à sourcer avant toute affirmation supplémentaire. Le tag « CGP indépendant » (meta.tags) reste tel quel.
- **dispositifs-fiscaux** : chiffres éco-PTZ (50 000 €, 30 000/25 000/15 000 €, 7 000 €, 10 000 €, durées, échéance fin 2027), Denormandie (12/18/21 %, 300 000 €, 5 500 €/m², 25 % de travaux, 30 %/20 %, 31 déc. 2027), plafonds niches 10 000/18 000 € : cohérents avec ma recherche mais à re-confirmer à la date de publication après la loi de finances 2026 ; « sans les fonds collectés, la machine n'est pas livrée » (additionnalité du Girardin) non sourcé ; couverture incomplète (FCPI/FIP, IR-PME, déficit foncier énergétique, Loc'Avantages…).
- **donation-transmission** : réserve héréditaire/quotité disponible absente (à traiter dans la phase de réécriture) ; plafond de dons à 75 % désormais 2 000 € (LF 2026, dons depuis le 14 oct. 2025) : l'article dit « 75 % jusqu'à 2 000 € » : conforme ; « l'assurance vie est l'outil de transmission préféré des Français » sans source ; primes AV après 70 ans : gains exonérés non mentionnés.
- **Transversal** : ORIAS n° 25005915 : aucune qualification de catégorie trouvée dans les 8 articles (rien à corriger) ; aucune mention Greenfin/nucléaire dans ce batch (rien à corriger) ; « vouvoiement/email » conformes.
