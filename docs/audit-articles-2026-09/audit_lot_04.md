# Audit batch_04 — 7 articles (lecture seule, 2026-09-28)

Méthode : lecture intégrale de chaque .tsx, grille CLAUDE.md / GUIDE-ARTICLE / brief §2 / Endless Customers. Vérifications externes faites : service-public.gouv.fr F34982 (PER : PFU 31,4 %, PS 18,6 %, fractions de rente 70/50/40/30 %, seuil de rachat 110 €/mois : confirmés), F2722 (legs : 35 %/45 % pour RUP non exonérées, 60 % après abattement 1 564 € pour les autres : confirmés), Greenfin/nucléaire janvier 2024 (confirmé), état SFDR 2.0 (voir ci-dessous).

Constats de structure communs : les 7 articles ont résumé exécutif en callout, intro PEP, H2 en requêtes, au moins 1 tableau (1 à 2), méthode nommée, FAQ 6 à 8 questions, conclusion 4R, 4 à 6 LienArticle. Aucune violation des règles non négociables détectée (pas de « recommandation » hors conseil, « email » non utilisé, vouvoiement, pas de fonds/société nommés comme greenwashing, aucune entité sœur, pas d'ISIN). La structure est donc bonne : les faiblesses sont dans la profondeur, la fraîcheur des données, le SEO et le maillage.

---

## 1. reperer-greenwashing-fonds-vert-methode — Améliorable — 7,5/10

Requête cible suggérée : « comment reconnaître un fonds greenwashing » / « fonds vert greenwashing comment vérifier » (secondaire : « greenwashing fonds ISR », « écoblanchiment finance »).

Problèmes (par gravité)
1. (Moyenne) Article 100 % abstrait : aucun exemple travaillé. La méthode 4P est décrite mais jamais appliquée à un fonds fictif (registre A). Concurrents (Goodvest, Novethic) montrent une lecture de DIC / annexe SFDR. Correctif : ajouter un encadré « La méthode 4P appliquée à un fonds fictif "Planète Transition Europe" » avec disclaimer « situation type construite pour illustrer » : promesse relevée (3 mots du DIC), preuve (part minimale d'investissements durables : 20 %), portefeuille (2 lignes sur 10 hors thème), persistance (reclassement). Ou tableau avant/après « ce que dit la brochure / ce que dit le document réglementaire ».
2. (Moyenne) Pas de mention de l'état du droit à jour : SFDR 2.0 (proposition Commission nov. 2025, mandat Conseil juin 2026, vote ECON 10 sept. 2026) absent alors que l'article évoque « Article 8/9 ». Ajouter 2 phrases + renvoi vers l'article SFDR. Pas de champ `updated`.
3. (Moyenne) Le H2 « Un fonds peut-il encore s'appeler vert… » cite l'ESMA correctement (21/11/2024 nouveaux fonds, 21/05/2025 existants, seuil 80 %) : OK. Mais « exclusions… alignées Accord de Paris (charbon, pétrole et gaz au-delà de seuils stricts) » est simplifié : les exclusions PAB/CTB dépendent du terme utilisé (environnement/durabilité vs transition/social). Nuancer d'une demi-phrase (« selon le terme employé »).
4. (Faible) FAQ « Que faire si mon fonds ne correspond pas… » : dit qu'on peut signaler à l'AMF « via son dispositif dédié » sans lien. Ajouter le lien officiel AMF (signalement / Épargne Info Service) : affirmation actionnable non sourcée.
5. (Faible) « Comptez environ trente minutes par fonds » vs « une vingtaine de minutes » (article SFDR) vs « moins d'un quart d'heure » (taxonomie) : incohérence entre articles frères. Harmoniser ou supprimer les durées.
6. (Faible) CTA final « un conseiller passe vos fonds actuels au crible… documents ouverts à l'écran, écarts constatés » : proche d'une « étude de votre situation » (interdit par CLAUDE.md) et d'une analyse de supports individualisée. Reformuler : « échanger avec un conseiller pour comprendre comment lire les documents de vos fonds ».
7. (Faible) Aucun exemple sourcé d'action régulateur (l'article dit « peut être puni » sans un seul cas public daté). Option : citer 1 sanction/enquête publique avec lien source datée (règle : nommer seulement avec source publique vérifiable, à valider avant publication) ; sinon rester générique comme aujourd'hui, ce qui est acceptable.

SEO
- Title (71 car.) trop long, sera tronqué. Proposition (58) : « Fonds vert ou greenwashing ? La méthode 4P pour vérifier » ou « Comment repérer le greenwashing d'un fonds vert (méthode 4P) » (56).
- Excerpt (156 car.) OK ; remplaçable par une version plus « requête » : « Comment savoir si un fonds vert fait du greenwashing ? Quatre vérifications dans les documents publics (DIC, annexe SFDR, inventaire), sans être analyste. »

Structure Endless Customers : résumé OK, PEP OK, H2 en requêtes OK (le 4e « La méthode 4P » pourrait être « Comment vérifier un fonds vert en 4 étapes ? »), tableau OK (signaux d'alerte), FAQ 6 (ok), 4R OK. Manque : checklist téléchargeable/imprimable (type « 10 questions à poser »).

Liens internes à ajouter
1. Source : étape 3 « Portefeuille » → cible `/outils/empreinte-carbone-epargne`, ancre « mesurer l'empreinte carbone de votre épargne », phrase après « principaux secteurs ».
2. Étape 3 ou paragraphe « exclusion » → `<LienArticle slug="engagement-actionnarial-vs-exclusion">` ancre « exclusion ou engagement : ce qui change vraiment ».
3. FAQ « Un ETF vert est-il plus fiable… » → `etf-isr-debutants`, ancre « comment choisir un ETF ISR quand on débute ».
4. Paragraphe d'ouverture (après « premier réflexe d'un épargnant sérieux ») ou conclusion → `pieges-inconvenients-investissement-ethique`, ancre « les pièges et inconvénients de l'investissement éthique ».
5. Intro ou conclusion → `/placement-ethique`, ancre « placement éthique » ; dernier paragraphe → `/conseiller-investissement-responsable`, ancre « échanger avec un conseiller en investissement responsable ».

---

## 2. retraite-capital-ou-rente-per-ethique — Améliorable — 7/10

Requête cible suggérée : « PER sortie en capital ou en rente » (secondaires : « PER capital ou rente fiscalité », « sortie PER fractionnée »).

Chiffres vérifiés (service-public F34982) : PFU 31,4 % (12,8 + 18,6), PS 18,6 % depuis le 1/1/2026, fraction imposable de la rente 40 % (60-69 ans) / 30 % (70+), seuil rachat rente 110 €/mois : exacts. Le lien Légifrance A160-2 n'a pas été rouvert.

Problèmes (par gravité)
1. (Haute, complétude) Aucun exemple chiffré : pour une requête de décision, le lecteur veut « 200 000 € en PER : combien en rente, combien d'impôt en capital fractionné sur 8 ans ». Ajouter un cas registre A (disclaimer d'illustration), avec hypothèses justifiées, sans taux de conversion inventé : marquer `[À COMPLÉTER : taux de conversion du contrat, source assureur]` ou raisonner en ordre de grandeur qualitatif. Ajouter un tableau « barème : versements 100 000 € sortis en une fois vs sur 5 ans » (tranches à sourcer sur impots.gouv.fr).
2. (Haute, exactitude/complétude) Le PER a trois compartiments (versements volontaires ; épargne salariale ; versements obligatoires). L'article ne traite que volontaires + obligatoires (« ancien article 83 »). Oubli : le compartiment épargne salariale (participation/intéressement), sortie capital exonérée d'IR sur la part versements (gains PS). Ajouter un H3. Autre oubli : sorties anticipées (achat de la résidence principale, accidents de la vie) qui alimentent l'intention de recherche « débloquer PER ».
3. (Moyenne) Transmission du PER au décès (ce qu'on paie sur le capital transmis, âge du décès avant/après 70 ans, régime 990 I / 757 B) : le tableau dit seulement « se transmet via la clause bénéficiaire ». Renvoyer à `per-protection-familiale` avec une phrase, et sourcer 1 lien officiel.
4. (Moyenne) PERP / contrats Madelin / Préfon (anciens contrats à sortie en rente obligatoire) : cas fréquent à la retraite, absent. 2-3 phrases + avertissement « vérifiez le type de contrat ».
5. (Moyenne) Option barème pour les gains (au lieu du PFU) et « fractionnement » sans exemple sur le nombre de retraits/an : dire que l'option globale existe (à sourcer).
6. (Faible, conformité) CTA final « passe en revue avec vous vos scénarios de sortie — rythme de fractionnement, opportunité d'une rente » : très proche de « étude de votre situation »/conseil personnalisé (interdit). Reformuler : « échanger avec un conseiller pour obtenir des pistes ; la décision de sortie reste la vôtre ».
7. (Faible) L'angle « éthique » du slug/de la FAQ ne se retrouve pas dans le title : acceptable (intention SEO prime), mais l'article ne donne aucune donnée sur les politiques d'investissement des actifs généraux (constat vrai : non publié). Bon point d'honnêteté.

SEO : title 59 car., excerpt 154 car. : corrects. Option title plus fort : « PER : sortie en capital ou en rente ? Fiscalité et critères (2026) » (58). Le millésime « 2026 » capte la fraîcheur fiscale (PFU 31,4 %).

Structure : tous éléments présents ; tableau très bon ; méthode « Horizon, Besoin, Fiscalité, Alignement » bonne ; FAQ 7 OK ; 4R OK.

Liens internes à ajouter
1. Étape « Fiscalité » de la méthode → `/outils/per-isr`, ancre « simulateur PER ISR », à côté de `/outils/retraite` déjà cité.
2. FAQ « Le capital sorti peut-il être réinvesti… » → `/outils/comparateur-enveloppes`, ancre « comparer assurance vie, PER et autres enveloppes » ; et `<LienArticle slug="per-vs-assurance-vie-isr">` ancre « PER ou assurance vie pour investir responsable ? ».
3. Tableau/FAQ décès de la rente → `transmettre-patrimoine-engage-fonds-partage`, ancre « transmettre un patrimoine engagé », phrase sur la clause bénéficiaire.
4. Conclusion 4R « prochaine étape » → `/tarifs`, ancre « comment sont rémunérés les conseillers (frais du PER inclus) » — pour la transparence sur les frais de gestion 1,00 %/an (brief §2.4) ; pas de pitch dans le corps.
5. Intro ou conclusion → `/placement-ethique` ancre « placement éthique » ; dernier § → `/conseiller-investissement-responsable`.

---

## 3. scpi-isr-environnementales-panorama — Faible à Améliorable — 5,5/10 (le plus faible du lot)

Requête cible suggérée : « SCPI ISR » / « meilleures SCPI ISR » / « SCPI environnementales » (volume dominant : « SCPI ISR liste », « SCPI ISR 2026 »).

Problèmes (par gravité)
1. (Haute, promesse non tenue) Le title promet « Quelles SCPI existent… le panorama 2026 » et l'article refuse de nommer une seule SCPI (« pas de palmarès de noms »). C'est défendable côté anti-fabrication, mais pour l'intention de recherche (liste/comparatif), le lecteur repart sans réponse et ira chez Meilleurtaux/Louve/Ma SCPI. Correctif au choix : (a) ajouter un tableau de 8-12 SCPI labellisées tirées de la liste officielle lelabelisr.fr (nom, société de gestion, catégorie, label oui/non), avec les colonnes chiffrées en `[À COMPLÉTER : source bulletin trimestriel]`/statut « À VALIDER » ; chaque ligne avec un inconvénient réel (règle Sheridan « best of » avec vrais inconvénients) ; aucun classement, pas d'avantage cabinet ; ou (b) rebaptiser l'article « Comment repérer une SCPI vraiment ISR : liste officielle et grille en 4 murs » et ajuster title/H1 pour ne pas promettre un panorama de noms.
2. (Haute) Cannibalisation avec `scpi-isr-vs-scpi-classique` : les deux expliquent best-in-progress, « passoires énergétiques », Éco-énergie tertiaire, perte du label, SCPI en assurance vie, avec quasi les mêmes 3 questions FAQ (« passoires », « perdre son label », « AV »). Différencier : le panorama = offre + méthode de sélection + données ; le comparatif = label vs non-label. Supprimer les sections dupliquées du panorama (label immobilier + Éco-énergie tertiaire) et renvoyer vers le comparatif.
3. (Haute, données) Incohérence chiffrée entre articles : panorama « 184 fonds au 1er déc. 2025, 45 % du marché » ; comparatif « environ 170 fonds à l'été 2026, un peu plus de la moitié ». Sources différentes (ASPIM vs linfodurable), périodes différentes, ordres de grandeur contradictoires (baisse de 184 à 170 ?). À réconcilier et dater précisément dans les deux ; « panorama 2026 » repose sur une donnée de décembre 2025.
4. (Moyenne, exactitude) « frais de souscription (souvent proches de 10 %…) » alors que le brief §2.4 fixe SCPI « frais d'entrée totaux ~12 % ». Ne pas contredire la grille du cabinet : écrire « de l'ordre de 10 à 12 % selon la SCPI » avec renvoi `/tarifs`, ou ne pas donner de chiffre.
5. (Moyenne, complétude) Aucune donnée de marché : pas de TD moyen (4,91 % en 2025 cité dans l'autre article), pas de collecte, capitalisation, ni fiscalité SCPI (revenus fonciers, PS, IFI, démembrement, détention via AV/PER/SCI). Ces sous-questions sont à volume élevé. Ajouter un H2 « Quelle fiscalité pour une SCPI ISR ? » avec sources service-public/impots.gouv.
6. (Faible) Phrase illisible : « L'essentiel des immeubles de 2050 existant déjà » — reformuler (« l'essentiel du parc de 2050 existe déjà »).
7. (Faible) « Combien faut-il pour investir » : « quelques centaines à quelques milliers d'euros » = vague ; donner un ordre de grandeur sourcé ou un exemple avec placeholder.
8. (Faible, conformité) CTA « passe en revue votre présélection de SCPI… pour en dégager des pistes » : ok car « pistes », mais éviter « passe en revue votre présélection » (individualisé).

SEO : title 75 car. → trop long. Propositions : « SCPI ISR : liste, familles et méthode pour choisir (2026) » (57) ; excerpt 157 (ok, à ajuster si la structure change).

Structure : résumé OK, PEP OK, H2 quasi tous en requêtes OK, 2 tableaux OK, méthode « quatre murs » OK, FAQ 7 OK, 4R OK. Manque : liste/tableau des SCPI, données chiffrées, exemple.

Liens internes à ajouter
1. H2 « Article 8 ou 9… » (aucun lien actuellement) → `<LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">`, ancre « ce que les Articles 8 et 9 garantissent vraiment ».
2. Intro (« Dans ce panorama… ») → `investissement-immobilier-responsable-commencer`, ancre « par où commencer un investissement immobilier responsable ».
3. FAQ « Peut-on loger une SCPI ISR dans une assurance vie ? » → `/outils/comparateur-enveloppes`, ancre « comparer SCPI en direct, assurance vie et PER ».
4. « Mur des conditions » → `/tarifs`, ancre « la grille de frais et la rémunération du cabinet sur les SCPI ».
5. Intro → `/placements`, ancre « les grandes familles de placements responsables » ; conclusion → `/placement-ethique` et `/conseiller-investissement-responsable`.

---

## 4. scpi-isr-vs-scpi-classique — Améliorable (proche de Complet) — 7,5/10

Requête cible suggérée : « SCPI ISR ou classique » / « SCPI ISR différence » (secondaires : « SCPI ISR avantages inconvénients », « SCPI label ISR que garantit »).

Problèmes (par gravité)
1. (Haute) Incohérence chiffrée avec l'article panorama (170 fonds/« un peu plus de la moitié » à l'été 2026 vs 184 fonds/45 % au 1/12/2025). Source ici : linfodurable (article de presse) ; préférer la source primaire (ASPIM ou comité du label), dater, et harmoniser avec le panorama.
2. (Moyenne) Manque un exemple comparatif chiffré : le tableau est qualitatif partout (« Fixés par la société de gestion », « Non garanti »). Le lecteur qui « hésite entre deux SCPI aux TD comparables » n'a pas de trame de comparaison chiffrée. Ajouter un mini-tableau registre A « SCPI A (label) vs SCPI B (sans label) » à gabarit vide/illustratif avec les lignes à relever : TD 2025, frais de souscription, frais de gestion, taux d'occupation financier, part de patrimoine notée, DPE, délai de jouissance.
3. (Moyenne) Pas de fiscalité ni de risques spécifiques (marché secondaire, décote, endettement). Ajouter 1 H3 fiscalité SCPI sourcé.
4. (Moyenne, fraîcheur) « consultation publique à l'été 2026 » sur la révision du référentiel immobilier : vérifier l'état à la date de mise à jour (sept. 2026) et mettre à jour `updated`.
5. (Faible) Le résumé et l'excerpt contiennent « ni un rendement ou des frais différents » : formulation juste mais absolue ; dire « ne certifie ni ».
6. (Faible) Bon point : disclaimers de risque OK ; la donnée TD 4,91 % et catégories 4,2-6 % est sourcée ASPIM (non revérifiée ici).

SEO : title 58 car. OK (parfait) ; excerpt 158 car. (limite ~155, couper « ni un rendement ou des frais différents »). 

Structure : complète (résumé, PEP, H2 requêtes, tableau, méthode Liste → Trajectoire → Preuves, FAQ 7, 4R). Verdict contextualisé présent (« vraie différence = trajectoire documentée »).

Liens internes à ajouter
1. H2 « Une SCPI ISR rapporte-t-elle moins… » → `investir-ethique-performance-chiffres`, ancre « investir éthique rapporte-t-il moins ? ».
2. Même H2 ou FAQ « moins risquée » → `pieges-inconvenients-investissement-ethique`, ancre « les inconvénients de l'investissement éthique ».
3. FAQ AV → `quelle-enveloppe-investissement-ethique`, ancre « quelle enveloppe choisir pour investir éthique » + `/outils/comparateur-enveloppes`.
4. H2 « La réglementation n'impose-t-elle pas déjà… » → `investissement-immobilier-responsable-commencer`, ancre « par où commencer un investissement immobilier responsable » (aussi pour DPE/loi Climat).
5. Conclusion → `/placement-ethique` (ancre « placement éthique ») et `/conseiller-investissement-responsable`.

---

## 5. sfdr-article-8-ou-9-ce-que-ca-garantit — Complet — 8,5/10

Requête cible suggérée : « article 8 article 9 SFDR différence » (secondaires : « fonds article 8 c'est quoi », « SFDR article 9 garantie »).

Problèmes (par gravité)
1. (Haute, fraîcheur) Section « SFDR 2.0 » : « en cours de négociation entre le Parlement et le Conseil… calendrier non arrêté » est désormais périmé : Conseil a adopté son mandat en juin 2026, commission ECON du Parlement a voté sa position le 10 sept. 2026, plénière attendue octobre, trilogue fin 2026, application visée vers 2029 (recherche web 28/09/2026 : à vérifier sur sources officielles Conseil/Parlement avant publication). Mettre à jour la section, ajouter `updated: "2026-…"`. Même mise à jour pour l'article taxonomie et le greenwashing.
2. (Moyenne) Citations AMF entre guillemets (« à l'inverse d'un mécanisme de labellisation, SFDR ne prévoit pas d'exigences minimales », « alimenté l'éco-blanchiment ») : non revérifiées dans le PDF cité ; à contrôler mot pour mot (risque d'erreur de citation).
3. (Moyenne) Chiffre « 307 fonds / 175 Md€ / 40 % » : source next-finance relayant Morningstar ; c'est un chiffre de fin 2022. OK mais ajouter un chiffre récent (part des encours Art. 8/9 en 2026) avec placeholder ou source Morningstar, sinon l'article paraît daté.
4. (Moyenne, complétude) Absence des PAI (principal adverse impacts) et du DNSH dans « ce que l'annexe contient » ; c'est une sous-question évidente (« que veut dire investissement durable au sens SFDR ? »). 1 H3 suffit.
5. (Faible) Manque de visuel/exemple de lecture d'une annexe précontractuelle (où trouver les 3 chiffres). Ajouter un mini-tableau « Rubrique de l'annexe / question à se poser / seuil d'alerte » (générique).
6. (Faible) Surnoms « vert clair / vert foncé » : mentionner que ce sont des surnoms de marché, pas des termes du règlement (déjà « surnom commercial » : OK).
7. (Faible) CTA « passe en revue avec vous les annexes SFDR et les inventaires de vos supports actuels » : reformuler (individualisé).

SEO : title 72 car. → « Article 8 ou 9 SFDR : ce que la classification garantit » (54). Excerpt 161 car. → couper à ~155 : « Article 8 et 9 ne sont pas des labels : la classification SFDR est déclarative. Ce qu'elle oblige à publier, ce qu'elle ne garantit pas, comment la lire. » (150).

Structure : la plus complète du lot (2 tableaux, méthode « 4 D », FAQ 8, 4R, section prospective).

Liens internes à ajouter
1. Paragraphe « l'étiquette ne remplace pas la stratégie » → `engagement-actionnarial-vs-exclusion`, ancre « exclusion ou engagement : quelle stratégie change vraiment les choses ».
2. FAQ « Un fonds Article 9 rapporte-t-il moins… » → `investir-ethique-performance-chiffres`, ancre « investir éthique rapporte-t-il moins ? ».
3. FAQ « Quelle différence entre Label ISR et SFDR » → `label-greenfin-vs-label-isr`, ancre « Label Greenfin ou Label ISR : lequel choisir ? ».
4. Étape « Détenu » ou FAQ « Où trouver la classification » → `assurance-vie-isr-guide-2026`, ancre « comment choisir une assurance vie ISR » (fonds logés dans un contrat).
5. Intro → `/placement-ethique` (ancre « investir de façon éthique »), conclusion → `/conseiller-investissement-responsable`.

---

## 6. taxonomie-verte-europeenne-epargne — Complet — 8/10

Requête cible suggérée : « taxonomie verte européenne c'est quoi » (secondaires : « taxonomie européenne gaz nucléaire », « alignement taxonomie fonds 0 % »).

Vérifié : Greenfin/nucléaire (référentiel publié 8 janvier 2024, en vigueur 23 janvier 2024) exact ; dates MiFID/IDD (2 août 2022), EuGB (21 déc. 2024) plausibles et conformes à mes connaissances.

Problèmes (par gravité)
1. (Moyenne, fraîcheur) Section « Les règles vont-elles changer » : acte délégué du 4 juillet 2025 correct, mais « la révision SFDR est en cours de négociation » à actualiser (voir article SFDR). L'Omnibus CSRD/CSDDD (réduction du périmètre des entreprises soumises) impacte directement le reporting taxonomie et n'est pas mentionné : à vérifier et ajouter avec source Commission. Le lien EUR-Lex `OJ:L_202600073` n'a pas pu être vérifié : le tester avant publication.
2. (Moyenne) Aucune donnée chiffrée de marché (alignement moyen des fonds, part de CA aligné des grandes capitalisations) : le lecteur n'a pas de repère pour « 0 % » vs « 10 % ». Ajouter 1 ordre de grandeur sourcé (AMF, rapport cité) ou placeholder.
3. (Moyenne) Pas d'exemple concret registre A (lecture d'une ligne d'annexe SFDR : « alignement min. 5 %, dont 0 % gaz/nucléaire »). Ajouter.
4. (Faible) « 90 % des malentendus » (callout) : chiffre rhétorique non sourcé ; remplacer par « l'essentiel des malentendus ».
5. (Faible) L'article ne relie pas le pilier `investissement-ethique-guide-complet-2026` (aucun lien vers le guide pilier).
6. (Faible) CTA « passe en revue avec vous les annexes SFDR et l'alignement taxonomie de vos supports actuels » : reformuler.

SEO : title 82 car. → très long, sera tronqué. Proposition (58) : « Taxonomie verte européenne : c'est quoi, et pour votre épargne ? » (60) ou « Taxonomie verte européenne : ce qui change pour votre épargne » (60). Excerpt 159 car. : couper (« La taxonomie verte n'est pas un label : c'est le dictionnaire européen des activités durables. Ce qu'elle change pour votre épargne, et ses angles morts. » ~150).

Structure : complète (2 tableaux, méthode « 3 R », FAQ 6, 4R). H2 en requêtes excellents.

Liens internes à ajouter
1. Intro (paragraphe 2) → `investissement-ethique-guide-complet-2026`, ancre « notre guide complet de l'investissement éthique ».
2. Tableau des tampons (ligne Labels) → `label-isr-que-garantit-il-vraiment`, ancre « ce que le Label ISR garantit vraiment ».
3. H3 « Une question nouvelle chez votre conseiller » → `/outils/profil-investisseur`, ancre « faire le point sur votre profil et vos préférences ».
4. Section assurance vie / PER → `assurance-vie-isr-guide-2026`, ancre « choisir une assurance vie ISR ».
5. Conclusion → `/placement-ethique` (ancre « placement éthique »), `/conseiller-investissement-responsable` (ancre « un conseiller en investissement responsable »), `/questions`.

---

## 7. transmettre-patrimoine-engage-fonds-partage — Améliorable — 6,5/10

Requête cible suggérée : « legs à une association fiscalité » / « léguer à une association » (secondaire : « quotité disponible legs association », « fonds de partage succession »).

Vérifié (service-public F2722) : exonérations, taux 35 %/45 % pour RUP non exonérées, 60 % ailleurs : exacts. Tableau réserve/quotité correct (1/2, 2/3, 3/4 ; conjoint 1/4 sans descendant).

Problèmes (par gravité)
1. (Haute, exactitude/complétude) Liste des organismes exonérés incomplète : service-public inclut aussi les associations déclarées depuis 3 ans au moins à but exclusif d'assistance/bienfaisance, et cite explicitement la défense de l'environnement et la protection des animaux ; l'article omet aussi l'abattement de 1 564 € sur le 60 %. Pour un article dont c'est le cœur, compléter et rendre explicite « vérifiez le statut ». Ne pas laisser croire qu'être RUP suffit.
2. (Haute) Cas d'usage majeur absent : le legs « en duo » (l'héritier reçoit, l'association reçoit un legs avec les droits payés par l'association ; bénéfice pour la cause et allègement pour la famille), les fondations/fonds de dotation/fondations abritées, legs universel vs à titre universel vs particulier, frais de notaire. Concurrents notaires/associations traitent tout cela ; ici l'article ne couvre que réserve + testament + 1 tableau. Ajouter H2 « Legs, legs en duo, fondation abritée : quelle différence ? » avec sources service-public/associations.
3. (Haute) Assurance vie bénéficiaire = association : le tableau et la FAQ disent « dépend du statut — à vérifier avec l'assureur » sans donner la règle (régime 990 I / 757 B, abattements applicables uniquement aux personnes physiques, exonération des organismes visés à l'art. 795 CGI). Sujet clé de la comparaison clause/legs ; à documenter avec source officielle ou reformuler honnêtement (« point non tranché dans cet article, à vérifier »).
4. (Moyenne) Ligne « Donation de votre vivant » : « Réduction d'impôt sur le revenu » sans taux (66 % ou 75 % selon organisme, plafonds : vérifier sur service-public) : donnée attendue par le lecteur.
5. (Moyenne) Section fonds de partage : mécanisme mal cerné (l'article dit que « la solidarité continue sous une autre forme » via clause bénéficiaire, ce qui n'est pas le fonds de partage) ; « au moins 25 % du rendement » à recouper avec l'article label-finansol-finance-solidaire (cohérence). Renvois auto-référentiels lourds (« nous avons établi dans notre article… »).
6. (Moyenne) Conjoint : ni usufruit/option du conjoint, ni donation entre époux ; les personnes mariées avec enfants sont la majorité du lectorat. Une phrase de cadrage + renvoi notaire.
7. (Faible) « Pacte adjoint imposant le remploi » évoqué sans définition ici ; s'appuyer sur l'article donation (déjà lié) pour éviter les affirmations juridiques non sourcées.
8. (Faible) Positionnement : article juridique/notarial ; le CTA final renvoie à un notaire pour les actes : correct et conforme (non-CIF). Bon.

SEO : title 71 car. → « Léguer à une association : quotité, fiscalité, fonds de partage » (61) ou « Legs à une association : combien, quelle fiscalité, quelles alternatives ? » (68 : trop long). Excerpt 166 car. → couper à ~155 (« Réserve héréditaire, quotité disponible, legs, clause bénéficiaire, fonds de partage : ce que le droit permet de transmettre à une cause. »).

Structure : résumé (dense mais un peu long), PEP OK, H2 requêtes OK, 2 tableaux OK, méthode CVCRR (5 étapes) OK, FAQ 7 OK, 4R OK. Exemple chiffré présent (600 000 € et 2 enfants) — bon, mais pas de disclaimer d'illustration explicite : ajouter « situation type construite pour illustrer ».

Liens internes à ajouter
1. Paragraphe « Aucun outil juridique ne peut… obliger un héritier » → `assurance-vie-enfants-transmettre-valeurs`, ancre « ouvrir une assurance vie à ses enfants pour transmettre aussi ses valeurs ».
2. Même paragraphe ou conclusion → `heritage-donation-investir-valeurs`, ancre « investir un héritage ou une donation reçue en cohérence avec ses valeurs ».
3. H2 fonds de partage → `livrets-epargne-solidaire-alternative-livret-a`, ancre « l'épargne solidaire » (remplace la 2e occurrence de label-finansol, actuellement dupliquée).
4. Tableau clause vs legs → `per-protection-familiale`, ancre « ce que le PER transmet à vos proches » (clause bénéficiaire du PER).
5. Conclusion → `/objectifs` (ancre « transmettre en cohérence avec vos valeurs », si la page a une entrée transmission), `/conseiller-investissement-responsable`, `/placement-ethique`.

---

## Constats transverses

1. Fraîcheur et cohérence des données réglementaires/marché : SFDR 2.0 décrit comme « en négociation entre Parlement et Conseil » alors que le Conseil a son mandat (juin 2026) et l'ECON a voté (10/09/2026) : à mettre à jour dans SFDR, taxonomie, greenwashing ; chiffres contradictoires entre panorama (184 fonds/45 %, 1/12/2025) et comparatif (~170/« un peu plus de la moitié », été 2026) ; frais SCPI « ~10 % » vs brief 12 % ; durées de vérification incohérentes (30 min/20 min/15 min). Seul 1 article sur 7 a un champ `updated` : ajouter `updated` et vérifier chaque chiffre daté.
2. Contenu correct mais abstrait : aucun exemple chiffré ou travaillé (registre A) dans retraite, SCPI, taxonomie, greenwashing, et lacunes de sous-questions à fort volume (fiscalité SCPI, compartiments du PER, legs en duo, PAI, liste de SCPI). L'article panorama ne tient pas la promesse de son title. C'est l'écart principal face aux concurrents.
3. SEO/maillage : 5 titles sur 7 dépassent 60 car. (71 à 82) et 3 excerpts dépassent 160 ; aucune FAQPage JSON-LD sur les pages articles (présente seulement sur /questions, /contact, /tarifs) ; aucun des 7 ne lie /tarifs, /placements, /enveloppes, /objectifs, /questions ni les deux nouvelles pages (/placement-ethique, /conseiller-investissement-responsable) ; les paragraphes de Réintroduction promettent « un conseiller passe en revue avec vous vos fonds/scénarios/SCPI », formulation proche de « étude de votre situation » à remplacer par « échanger avec un conseiller pour obtenir des pistes ». Conclusions 4R très gabaritées (mêmes tournures dans les 7) : varier.
