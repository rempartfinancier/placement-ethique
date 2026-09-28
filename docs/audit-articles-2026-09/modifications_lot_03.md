# Edits batch_03 (phase 2)

Contrôles faits : tous les slugs ciblés existent dans src/content/articles/ ; JSX validé par `eslint --fix` (0 erreur restante) sur les 8 fichiers ; aucun build, aucun commit. date / tags / catégorie / auteur / slug inchangés. Chaque article contient désormais un lien vers /cgp-investissement-responsable (dans le dernier paragraphe 4R). Aucun lien vers /placement-ethique ajouté (page pilier non encore créée ; à voir en phase 3 si souhaité). Aucun nouveau lien ne double une cible déjà liée dans le même article.

Total : 38 liens ajoutés (dont 8 vers /cgp-investissement-responsable), 8 titles réécrits, 8 excerpts réécrits.

## 1. obligations-vertes-vs-obligations-classiques
- title : « Obligations vertes ou obligations classiques : quelles différences réelles ? » (76) → « Obligation verte vs classique : les différences réelles » (55)
- excerpt : inchangé (155 car., dans la fourchette).
- Liens ajoutés :
  - → /placements, ancre « notre panorama des placements responsables » (H2 « Comment investir en obligations vertes… », 1er paragraphe)
  - → etf-isr-debutants, ancre « pour choisir un ETF ISR quand on débute » (étape « Le Coût »)
  - → reperer-greenwashing-fonds-vert-methode, ancre « méthode pour repérer le greenwashing d'un fonds » (callout signal d'alerte)
  - → label-isr-que-garantit-il-vraiment, ancre « ce que le Label ISR garantit vraiment » (étape « Le Cadre »)
  - → /cgp-investissement-responsable, ancre « comment le cabinet accompagne les épargnants en investissement responsable » (dernier paragraphe)
- Correction CTA : « un conseiller du cabinet passe en revue vos supports actuels avec vous » → « si vous préférez en parler avec un conseiller … le premier échange est offert ».

## 2. ou-placer-argent-facon-ethique-montant
- title : « Où placer 50 000, 100 000 ou 300 000 € de façon éthique en 2026 ? » (65) → « Où placer 100 000 € de façon éthique ? Repères par palier » (57)
- excerpt (143) → « Où placer 50 000, 100 000 ou 300 000 € de façon éthique ? La réponse dépend du montant ET de l'horizon : enveloppes, frais et erreurs à éviter. » (143)
- Liens ajoutés : → /outils/profil-investisseur (« outil profil investisseur », après le lien quelle-enveloppe) ; → /outils/portefeuilles-types (« exemples de portefeuilles types », palier 100 000 €) ; → assurance-vie-luxembourgeoise-investissement-responsable (« l'assurance vie luxembourgeoise », palier 300 000 €) ; → /tarifs (« la page tarifs », paragraphe frais d'entrée) ; → /cgp-investissement-responsable (« l'accompagnement du cabinet », dernier paragraphe).
- Corrections règles non négociables (avantage commercial / affirmations invérifiables) :
  - « Notre propre grille l'illustre : 1,00 % … » → grille présentée « à titre purement illustratif », sans attribution au cabinet, avec « les seuils et les taux varient d'un distributeur à l'autre » et renvoi neutre vers /tarifs.
  - « les frais d'entrée sont très généralement dégressifs … pratique répandue » → « quand il y en a (de nombreux contrats en ligne n'en prélèvent aucun), sont parfois dégressifs selon le distributeur ».
  - Supprimé « Ce mécanisme n'est pas propre à un cabinet… elle est presque toujours négociable à ce niveau ».
  - Cashback : « proposé par certains cabinets … (100 000 € chez nous, à titre d'exemple) » → « proposé par certains distributeurs … à vérifier auprès de chacun ».
  - Résumé exécutif, cellule du tableau et rappel de conclusion : « seuils autour de 200 000 € et 400 000 € » présentés comme norme → reformulés en « selon les distributeurs, des frais d'entrée dégressifs… ».
  - CTA : « passe en revue avec vous … et vous restitue par écrit les pistes envisageables » → « vous pouvez échanger avec un conseiller … et obtenir des pistes ».

## 3. per-ethique-optimiser-retraite
- title : « Comment optimiser sa retraite avec un PER éthique ? » (51) → « PER éthique : comment optimiser sa retraite ? » (45)
- excerpt (165) → « Déduction fiscale à l'entrée, supports vraiment responsables, sortie préparée : les 3 leviers d'un PER éthique, avec une méthode de contrôle. » (141) — retire la promesse « plafonds 2026 vérifiés ».
- Liens ajoutés : → assurance-vie-isr-guide-2026 (« choisir une assurance vie ISR en 2026 », H2 « Un PER éthique, ça existe officiellement… ») ; → quelle-enveloppe-investissement-ethique (« notre comparatif des enveloppes », fin section déduction) ; → preparer-retraite-epargne-alignee-valeurs (« comment préparer sa retraite avec une épargne alignée sur vos valeurs », FAQ « Combien verser chaque mois ? ») ; → /cgp-investissement-responsable (dernier paragraphe). /outils/per-isr déjà lié (non doublé).
- Correction CTA : « passe en revue avec vous votre plafond… » → « vous pouvez échanger avec un conseiller … sur votre plafond… ».

## 4. per-protection-familiale
- title : « Le PER protège-t-il votre famille au-delà de l'avantage fiscal ? » (64) → « PER et décès : fiscalité et protection de vos proches » (53)
- excerpt (157) → « Clause bénéficiaire, règle des 70 ans, déblocage en cas d'accident de la vie, réversion : ce que le PER assurantiel protège pour votre famille. » (143)
- Liens ajoutés : → assurance-vie-enfants-transmettre-valeurs (« ouvrir une assurance vie à ses enfants », paragraphe « lecture honnête ») ; → /outils/retraite (« outil retraite », section réversion/annuités) ; → transmettre-patrimoine-engage-fonds-partage (« transmettre un patrimoine engagé », section PER en supports ISR) ; → /cgp-investissement-responsable (dernier paragraphe).
- Exemple chiffré corrigé (sans nouveau chiffre inventé, à partir des chiffres du texte et de l'abattement légal de 100 000 € par enfant en ligne directe) : le cas « décès à 74 ans » précise maintenant 129 500 € d'assiette soit 64 750 € par enfant, sous l'abattement de 100 000 € : pas de droits tant que cet abattement n'est pas déjà utilisé, mais il en consomme une part, alors que le cas « avant 70 ans » le laisse intact ; l'effet est plus lourd pour un bénéficiaire moins abattu (neveu, nièce, tiers — sans chiffre).
- Correction CTA : « passe en revue avec vous » → « vous pouvez échanger avec un conseiller … sur ».

## 5. per-vs-assurance-vie-isr
- title : « PER ou assurance vie pour investir responsable : comment choisir ? » (66) → « PER ou assurance vie ISR : comment choisir ? » (44)
- excerpt (161) → « Mêmes supports labellisés, ou presque : le choix entre PER et assurance vie ISR se joue sur l'impôt, la disponibilité de l'épargne et la transmission. » (150)
- Liens ajoutés : → /enveloppes (« toutes les enveloppes expliquées une à une », intro) ; → assurance-vie-luxembourgeoise-investissement-responsable (« l'assurance vie luxembourgeoise », H2 offre responsable) ; → quelle-enveloppe-investissement-ethique (« notre comparatif des quatre enveloppes », sous le tableau) ; → ou-placer-argent-facon-ethique-montant (« où placer 50 000, 100 000 ou 300 000 € de façon éthique », conclusion) ; → /cgp-investissement-responsable (dernier paragraphe).
- Corrections : cellule du tableau « Non transférable d'un assureur à l'autre… » complétée par « (une transformation reste possible au sein du même assureur) » (cohérence avec la FAQ de quelle-enveloppe) ; CTA « passe en revue avec vous » → « vous pouvez échanger avec un conseiller … sur ».

## 6. pieges-inconvenients-investissement-ethique
- title : « Investissement éthique : les pièges et inconvénients à connaître avant de se lancer » (83) → « Investissement éthique : 6 pièges et inconvénients à éviter » (59)
- excerpt (167) → « Label mal compris, univers réduit, frais de niche, exclusion confondue avec impact, SFDR : 6 pièges de l'investissement éthique, et comment les éviter. » (151)
- Liens ajoutés : → label-greenfin-vs-label-isr (« Greenfin ou Label ISR », piège n°1) ; → etf-isr-debutants (« pour choisir un ETF ISR quand on débute », piège n°3 « Comment l'éviter ») ; → engagement-actionnarial-vs-exclusion (« exclusion et engagement actionnarial », piège n°4) ; → frais-conseiller-gestion-patrimoine-independant (« combien coûte un conseiller en gestion de patrimoine », dernier paragraphe) ; → /cgp-investissement-responsable (dernier paragraphe).
- Corrections : avantage commercial dans le corps (piège n°6) « C'est précisément le type de suivi qu'un rendez-vous annuel avec un conseiller permet de systématiser… » → « Fixer une date annuelle dans votre agenda suffit à installer ce réflexe. » ; CTA « passe en revue avec vous ces six pièges » → « vous pouvez échanger avec un conseiller … sur ces six points de vigilance ».

## 7. preparer-retraite-epargne-alignee-valeurs
- title : « Comment préparer sa retraite avec une épargne alignée sur vos valeurs ? » (71) → « Préparer sa retraite avec une épargne éthique en 5 étapes » (57)
- excerpt (166) → « Chiffrer l'écart de revenus, ordonner vos enveloppes, vérifier vos supports sur pièces : la méthode des 5 C pour une épargne retraite éthique. » (142)
- Liens ajoutés : → /objectifs (« objectifs d'épargne », étape « Mesurez l'écart ») ; → scpi-isr-environnementales-panorama (« le panorama des SCPI ISR et environnementales », après le tableau des enveloppes) ; → livrets-epargne-solidaire-alternative-livret-a (« l'épargne solidaire comme alternative au Livret A », FAQ Livret A) ; → investir-ethique-petit-budget (« comment investir éthique avec un petit budget », FAQ 100 €/mois) ; → /cgp-investissement-responsable (dernier paragraphe).
- Correction CTA : « passe en revue avec vous » → « vous pouvez échanger avec un conseiller … sur ».

## 8. quelle-enveloppe-investissement-ethique
- title : « Assurance vie, PER, PEA ou compte-titres : quelle enveloppe pour investir éthique ? » (83) → « Assurance vie, PER, PEA, CTO : quelle enveloppe éthique ? » (57)
- excerpt (161) → « Aucune enveloppe n'est éthique en soi : elle fixe l'univers ISR accessible, les frais et la fiscalité. Comparatif assurance vie, PER, PEA et compte-titres. » (155)
- Liens ajoutés : → /outils/profil-investisseur (« outil profil investisseur », étape « Datez votre projet ») ; → per-ethique-optimiser-retraite (« comment optimiser sa retraite avec un PER éthique », H3 PER) ; → investir-ethique-petit-budget (« investir éthique avec un petit budget », FAQ petit budget) ; → /tarifs (« la page tarifs », étape « Empilez les frais ») ; → /cgp-investissement-responsable (dernier paragraphe).
- Correction CTA : « passe en revue avec vous » → « vous pouvez échanger avec un conseiller … sur ».

## Vérifications faites sur les règles
- Aucune qualification de catégorie ORIAS, aucune mention CIF/mandat, aucune statistique interne inventée dans le lot (grep). Aucun usage de « CGP indépendant » comme statut dans le lot (les seules occurrences de « indépendant » : « travailleur indépendant » fiscal, « audit indépendant » du label). PFU 31,4 % déjà cohérent dans les 4 articles qui le citent.
- Mot « recommandation » : uniquement dans la négation (« n'est pas une recommandation »), conforme.

## À VÉRIFIER / non modifié
1. per-ethique-optimiser-retraite : (a) « les versements effectués à partir de 70 ans ne sont plus déductibles depuis le 1er janvier 2026 » ; (b) « report des plafonds porté de trois à cinq ans par la loi de finances pour 2026 » ; (c) « les travailleurs indépendants disposent d'un plafond spécifique plus élevé » (sans chiffre) ; (d) date d'application « 24 octobre 2024 » de la part de non coté en gestion pilotée (loi industrie verte) et son périmètre. Aucune source liée pour a, b. Vérifier service-public / legifrance / BOFiP ; sinon supprimer. Incohérence à trancher : preparer-retraite dit seulement « ne se reportera pas éternellement ».
2. Prélèvements sociaux 2026 : 18,6 % sur CTO/PEA/PER, exception AV à 17,2 % (mentionnée seulement dans ou-placer-argent-facon-ethique-montant, absente de quelle-enveloppe / per-vs-av / per-ethique) : vérifier la loi de financement de la Sécurité sociale 2026 promulguée, périmètre exact PEA/PER/AV, puis harmoniser les 4 articles.
3. pieges-inconvenients-investissement-ethique : statistiques AMF 2021 (28 480 parts, −17 pb), AMF juillet 2024 (52 fonds, 64 Md€, 55 % / 31 % / 27 % / 28 %), ESMA février 2024 (187 fonds, 74 Md€), Lettre AMF n° 65 avril 2026 (1,37 % / 0,75 % / 0,33 %), rapport ESMA « données 2024 : Article 9 moins performant que Article 6 », « environ 70 % des fonds ont conservé le label ISR » ; et absence de mention de la proposition de refonte de SFDR (nouvelles catégories) à dater.
4. obligations-vertes-vs-obligations-classiques : URL Banque de France `…/publications/obligation-verte` et lien Parlement européen (« 85 % des fonds ») à tester ; réponse FAQ « acheter en direct » à nuancer pour l'OAT verte accessible via un courtier (non modifiée) ; absence d'ordre de grandeur chiffré du greenium.
5. per-protection-familiale : abattement de 152 500 € 990 I « par bénéficiaire, tous contrats du même assuré confondus » (nuance non ajoutée) ; « à partir de votre 70e anniversaire » vs « 70 ans révolus » (harmonisation de style non faite) ; régime du PER collectif d'entreprise non précisé. L'abattement de 100 000 € par enfant utilisé dans l'exemple corrigé est l'abattement légal en ligne directe (à confirmer sur service-public.fr si le coordinateur souhaite lier une source).
6. ou-placer-argent-facon-ethique-montant : plafond du Fonds de garantie des assurances de personnes (non chiffré, à sourcer) ; PER 37 680 € / 4 710 € (cohérents avec le PASS 2025, à recontrôler) ; « featured: true » absent du tableau du GUIDE §3 (article hors plan) ; « frais d'entrée totaux de l'ordre de 12 % » SCPI (fait du brief §2.4, sans source publique liée) ; valeur de l'exemple de répartition chiffrée toujours absente (phase de réécriture).
7. per-vs-assurance-vie-isr : « 7,5 % jusqu'à 150 000 € de versements » sans la précision « primes nettes versées non rachetées, tous contrats confondus » ni le 12,8 % au-delà ; obligation loi Pacte (ISR/Greenfin/Finansol) pour les PER assurantiels : affirmée avec prudence, à confirmer.
8. Phase de réécriture éditoriale (hors périmètre ici) : cannibalisation du cluster PER (per-ethique / preparer-retraite / per-vs-av / quelle-enveloppe), cas chiffrés Registre A à ajouter, tableau récapitulatif à ajouter dans pieges, chiffres concrets retraite (taux de remplacement, âge légal) à ajouter dans preparer-retraite, piège « rémunération du conseil » à ajouter dans pieges, H2 « Piège n°X » à reformuler en requêtes.
9. Liens /placements, /enveloppes, /objectifs, /tarifs, /cgp-investissement-responsable : /cgp-investissement-responsable n'existe pas encore comme route dans src/routes (à créer) ; /placement-ethique idem.
