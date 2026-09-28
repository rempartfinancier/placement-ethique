# Audit batch_03 — 8 articles (lecture seule)

Méthode : lecture intégrale des 8 fichiers, grille GUIDE-ARTICLE §2/§4/§5, brief §2, skill endless-customers-article. Longueurs mesurées par script (title / excerpt en caractères). Aucune vérification web n'a été faite (outil non utilisé) : les chiffres 2026 sont signalés « À VÉRIFIER » quand je ne peux pas les confirmer avec certitude, pas déclarés faux.

## Synthèse

| Slug | Note | Verdict | Problème n°1 |
|---|---|---|---|
| obligations-vertes-vs-obligations-classiques | 8/10 | Complet | Title 76 car. ; réponse « achat en direct » incomplète (OAT verte accessible aux particuliers via CTO) |
| ou-placer-argent-facon-ethique-montant | 6,5/10 | Améliorable | Avantage commercial du cabinet dans le corps (« notre propre grille », « 100 000 € chez nous ») + généralisations invérifiables sur les frais d'entrée |
| per-ethique-optimiser-retraite | 8/10 | Complet | Deux nouveautés fiscales 2026 sans source (déductibilité > 70 ans supprimée ; report de plafond 3 → 5 ans) |
| per-protection-familiale | 8,5/10 | Complet | Exemple chiffré « 160 000 € / 2 enfants » qui ne démontre rien (abattement 100 000 €/enfant annule tout) |
| per-vs-assurance-vie-isr | 7,5/10 | Complet (limite) | Aucun cas chiffré comparant PER et AV ; title 66 car. |
| pieges-inconvenients-investissement-ethique | 7/10 | Améliorable | Pas de tableau ; stats AMF/ESMA 2024-2026 non vérifiables ici ; title 83 / excerpt 167 |
| preparer-retraite-epargne-alignee-valeurs | 6,5/10 | Améliorable | Cannibalise per-ethique-optimiser-retraite ; aucun chiffre concret (taux de remplacement, âge légal, 100 €/mois) |
| quelle-enveloppe-investissement-ethique | 7/10 | Améliorable | Title 83 car. ; paragraphe fiscalité 2026 omet l'exception AV (17,2 %) alors que ou-placer la mentionne |

## Constats transverses

1. **Cluster PER/enveloppes quasi-redondant** : 6 articles (per-ethique, per-vs-av, per-protection, preparer-retraite, quelle-enveloppe, ou-placer) répètent les mêmes blocs (plafond 37 680 € / 4 710 €, abattement AV 4 600 €, PFU 31,4 %, « angle mort du fonds en euros », méthode « listes/labels/lire », CTA identique). Risque de cannibalisation SEO + risque de maintenance (un chiffre fiscal à corriger = 6 fichiers). À différencier par intention (voir chaque bloc) et à faire pointer vers un pilier /placement-ethique.
2. **Maillage sortant très pauvre** : aucun des 8 articles ne lie vers /placements, /enveloppes, /objectifs, /tarifs, /questions, ni vers les 2 pages en création ; /outils/portefeuilles-types, /outils/profil-investisseur, /outils/empreinte-carbone-epargne jamais utilisés ; articles « frais »/« CGP vs banque »/« petit budget » jamais liés depuis ce lot.
3. **Titles trop longs / non alignés sur une requête** : 7 titles sur 8 dépassent 60 car. (65 à 83). Excerpts entre 143 et 167 (5 sur 8 > 155). Titles formulés en question de fond plutôt qu'en requête réelle.
4. **Chiffres fiscaux 2026 : aucune date de vérification affichée** et deux affirmations sans source (per-ethique). Pas de bloc « Dernière vérification : date » près des chiffres réglementaires (GUIDE §2.7).
5. **Peu de Registre A** (persona chiffré illustratif) : seul per-protection en a un (défectueux) ; les concurrents (Nalo, Meilleurtaux, Les clés de la banque) donnent tous des exemples chiffrés. Aucune texture Registre B.
6. **CTA de conclusion** : « un conseiller passe en revue avec vous votre plafond / votre situation / vos supports » est proche de l'interdit « étude de votre situation » (brief §2.2) ; à harmoniser vers « échanger avec un conseiller / prendre rendez-vous » (le mot « recommandation » n'est utilisé nulle part à tort : OK).

---

## 1. obligations-vertes-vs-obligations-classiques — 8/10, Complet

**Requête cible** : « obligation verte » / « green bond différence obligation classique » / « obligation verte rendement ».

**Structure Endless Customers** : résumé exécutif OK ; intro PEP OK ; 6 H2 dont 4 en vraies requêtes ; 2 tableaux (1 vrai comparatif) ; processus « 3 C » ; FAQ 7 questions ; conclusion 4R complète. Très bon niveau.

**Problèmes**
- (Moyen) Réponse FAQ « Peut-on acheter en direct ? » : « rarement praticable ». Pour l'OAT verte (État français), les particuliers peuvent en acheter via un CTO/courtier ; le texte parle des émissions d'entreprises seulement. Corriger : distinguer OAT verte (accessible via un courtier, à vérifier dénominations/frais de courtage) et obligations d'entreprises (coupures élevées).
- (Moyen) Liens externes à tester (URL possiblement erronée) : `banque-france.fr/fr/publications-et-statistiques/publications/obligation-verte` et le lien Parlement européen « 85 % ». Vérifier qu'ils résolvent et qu'ils contiennent bien le fait cité (85 % / poche 15 % / ESMA).
- (Moyen) Manque de chiffres de marché récents : « milliers de milliards de dollars » est vague ; aucun ordre de grandeur de frais d'un fonds vert (frais courants typiques), ni de spread/greenium en points de base (la source Banque de France existe : citer une valeur datée ou dire explicitement « ordre de grandeur »).
- (Faible) Pas d'exemple illustratif (Registre A) : ex. 10 000 € en fonds d'obligations vertes vs fonds obligataire classique, écart de frais de 0,4 pt sur 10 ans, avec disclaimer.
- (Faible) « Depuis 2014, la plupart des émissions se réfèrent aux GBP » : formuler « publiés en 2014 (dernières mises à jour annuelles) » pour éviter le périmé.
- (Faible) Sujet « obligations vertes vs ETF obligataire ISR / fonds datés » absent.

**Meta** : title 76 car. (trop long) → « Obligation verte vs classique : quelles différences réelles ? » (57). Excerpt 155 car. : OK.

**Sous-questions manquantes** : fiscalité (identique), où les trouver dans une AV, qu'est-ce que le « greenium » en chiffres, obligation verte vs sustainability-linked (traité en FAQ, OK), risque de « green-washing » de l'émetteur (traité en mécanismes génériques, sans nommer : OK).

**Règles non négociables** : aucune violation (aucun fonds/émetteur nommé, sauf État français — factuel). « Notre grille de lecture » OK.

**Liens à ajouter**
1. → /placements, ancre « les supports obligataires responsables que nous suivons » ; H2 « Comment investir en obligations vertes quand on est un particulier ? », après la phrase sur « fonds ou ETF d'obligations vertes ».
2. → `etf-isr-debutants`, ancre « comment choisir un ETF ISR quand on débute » ; même H2, étape « Le Coût ».
3. → `reperer-greenwashing-fonds-vert-methode`, ancre « notre méthode 4P pour repérer le greenwashing » ; H2 « Qui vérifie que l'argent finance vraiment… », bloc callout « signal d'alerte ».
4. → `label-isr-que-garantit-il-vraiment`, ancre « ce que le Label ISR garantit vraiment » ; étape « Cadre » du H2 particulier.
5. → /enveloppes ou `assurance-vie-isr-guide-2026`, ancre « dans quelle enveloppe loger un fonds d'obligations vertes » ; conclusion (paragraphe « suite logique »).

---

## 2. ou-placer-argent-facon-ethique-montant — 6,5/10, Améliorable

**Requête cible** : « où placer 100 000 euros » (+ « éthique »). Le title cumule 3 montants ; une seule requête réelle domine (100 000 €, puis 50 000 €).

**Structure** : résumé exécutif OK ; intro PEP OK ; H2 par palier en requêtes OK ; 1 tableau récapitulatif ; FAQ 6 ; conclusion 4R. Manque : processus numéroté nommé (il y en a un « 3 réflexes » sans nom mémorisable), cas chiffré.

**Problèmes**
- (Grave, règle §2.5 du GUIDE) **Avantage commercial du cabinet dans le corps de l'article** : « Notre propre grille l'illustre : 1,00 % jusqu'à 200 000 €, 0,50 %… 0 % au-delà » ; « cashback… (100 000 € chez nous, à titre d'exemple) ». À retirer du corps, ou à déplacer vers /tarifs avec un simple renvoi.
- (Grave, exactitude/orientation) Généralisations invérifiables : « les frais d'entrée sont très généralement dégressifs par palier de versement — une pratique répandue », « presque toujours négociable à ce niveau », « seuils (souvent autour de 200 000 € et 400 000 €) » (tableau). Ces seuils sont ceux de la grille du cabinet, pas un standard de marché ; de nombreux contrats en ligne affichent 0 % de frais d'entrée. Un lecteur y verrait une norme trompeuse. Reformuler qualitativement : « certains distributeurs appliquent des frais d'entrée dégressifs ; de nombreux contrats en ligne n'en ont aucun : comparez ».
- (Moyen) Aucune répartition chiffrée : les « repères génériques » restent verbaux (« majorité… en AV »). Le lecteur qui tape « où placer 100 000 € » attend au moins un exemple illustratif de répartition (ex. précaution / AV / PER / SCPI en %, avec disclaimer « exemple de portefeuille type », cohérent avec la règle des deux couches). Sans cela, contenu plus pauvre que les concurrents.
- (Moyen) Paliers absents : 10 000 / 20 000 € (le plus gros volume de recherche) et 500 000 € / 1 M€ ; Livret A/LDDS, fonds en euros, PEA-PME, épargne solidaire, immobilier direct ne sont pas discutés ; aucun mot sur la transmission (art. 990 I) au palier 300 000 €.
- (Moyen) Chiffres à recontrôler : PER 37 680 € / 4 710 € (cohérents avec PASS 2025, semblent corrects) ; abattement AV 4 600 / 9 200 € et 7,5 % / 150 000 € (corrects) ; **PS 17,2 % maintenus sur l'AV et 18,6 % ailleurs — À VÉRIFIER** sur LFSS 2026 promulguée (l'exception AV, et le périmètre exact PEA/PER, sont à confirmer sur source officielle, pas seulement LégiFiscal). Fonds de garantie des assurances de personnes : plafond non cité ; ajouter le chiffre officiel avec lien (70 000 € par assuré et par assureur, à confirmer).
- (Faible) CTO de conclusion : « vous restitue par écrit les pistes envisageables » : risque de confusion avec « recommandation écrite » ; préférer « échanger avec un conseiller ».
- (Faible) `featured: true` non prévu au tableau §3 du GUIDE (article hors plan initial) : à confirmer.

**Meta** : title 65 car. → « Où placer 100 000 € de façon éthique ? Repères 50 k, 100 k, 300 k » (~62) ou scinder. Excerpt 143 car. : OK.

**Correctifs précis** : (1) supprimer/déplacer la grille cabinet ; (2) ajouter un encadré « Exemple de répartition type (illustratif) » pour 100 000 € ; (3) ajouter paliers 20 000 € et 500 000 €+ ; (4) ajouter une ligne « Précaution : Livret A/LDDS (plafonds officiels) » dans le tableau ; (5) date de dernière vérification fiscale.

**Liens à ajouter**
1. → /outils/profil-investisseur, ancre « déterminez votre profil et votre horizon » ; H2 « Pourquoi le montant seul ne suffit jamais… », liste des 3 curseurs.
2. → /outils/portefeuilles-types, ancre « exemples de portefeuilles types » ; H2 palier 100 000 €, à côté du « repère générique ».
3. → `investir-ethique-petit-budget`, ancre « investir éthique avec un petit budget » ; H2 50 000 € (ou nouveau palier 10 000 €).
4. → `assurance-vie-luxembourgeoise-investissement-responsable`, ancre « l'assurance vie luxembourgeoise » ; H2 300 000 €+, phrase « diversification… un seul assureur ».
5. → /tarifs, ancre « comment le cabinet est rémunéré » ; H2 300 000 €, à la place de la grille retirée. Ajouter aussi `donation-transmission-coherence-valeurs` (ancre « donner de son vivant ») pour la transmission au palier 300 000 €+.

---

## 3. per-ethique-optimiser-retraite — 8/10, Complet

**Requête cible** : « PER éthique » / « PER ISR » / « PER responsable ». Intention commerciale/informationnelle forte ; volume modeste mais qualifié.

**Structure** : résumé OK ; intro PEP OK ; 6 H2 dont 5 en requêtes ; 3 tableaux (tranche/économie, pilotée vs libre) ; méthode nommée « Lister, Labels, Lire, Suivre » ; FAQ 7 ; conclusion 4R. Très solide.

**Problèmes**
- (Grave, à sourcer) « les versements effectués à partir de 70 ans ne sont plus déductibles depuis le 1er janvier 2026 » et « report… porté de trois à cinq ans par la loi de finances pour 2026 » : aucune source liée, et ce sont des affirmations réglementaires fortes. À VÉRIFIER sur service-public.fr / legifrance / BOFiP ; si non confirmé, supprimer (GUIDE §2.7 : jamais de chiffre de mémoire). Même risque pour « PS 18,6 % » sur les gains PER.
- (Moyen) « Les travailleurs indépendants disposent d'un plafond spécifique plus élevé » : sans chiffre ni lien : soit sourcer, soit renvoyer explicitement à l'avis d'imposition (déjà fait pour le reste).
- (Moyen) Manque d'un cas chiffré cumulé (ex. 200 €/mois, TMI 30 %, 25 ans, hypothèse 3 % net, avec disclaimer) — l'outil /outils/per-isr est cité seulement en conclusion.
- (Moyen) Loi industrie verte : « depuis le 24 octobre 2024 » gestions pilotées avec part de non coté : vérifier date d'application et périmètre (nouveaux contrats ? tous ?) sur la source citée.
- (Faible) Frais du PER (entrée / gestion) jamais chiffrés de façon générique (fourchette de marché) alors que « frais » est mentionné comme paramètre n°1 : ajouter une fourchette sourcée ou un renvoi /tarifs.
- (Faible) Excerpt affirme « plafonds 2026 vérifiés » : promesse forte ; garder seulement si une date de vérification figure dans le corps.

**Meta** : title 51 car. OK mais peu ancré sur « PER éthique/ISR » → « PER éthique : comment optimiser sa retraite (plafonds 2026) » (57). Excerpt 165 car. → raccourcir à ≤155 : « Déduction à l'entrée, supports vraiment responsables, sortie préparée : les 3 leviers d'un PER éthique, avec plafonds 2026 et méthode de contrôle. » (~148).

**Sous-questions manquantes** : PER vs PEA pour la retraite, frais moyens d'un PER, PER collectif employeur (abondement), fonds en euros de PER, rendement type.

**Règles non négociables** : OK.

**Liens à ajouter**
1. → /outils/per-isr déjà présent en conclusion : le remonter aussi en H2 « Comment vérifier que les supports… » (ancre « testez la profondeur de l'offre ISR d'un PER »).
2. → `quelle-enveloppe-investissement-ethique`, ancre « comparer le PER au PEA et au compte-titres » ; H2 « La déduction fiscale est-elle un cadeau… », fin de section.
3. → `assurance-vie-isr-guide-2026`, ancre « ce qui sépare un contrat réellement responsable d'un contrat minimal » ; H2 « Un PER éthique, ça existe officiellement… », après la mention loi PACTE.
4. → /objectifs (page retraite si existante) ou /enveloppes, ancre « préparer sa retraite : nos pistes par objectif » ; conclusion.
5. → `preparer-retraite-epargne-alignee-valeurs`, ancre « bâtir votre plan retraite complet en 5 étapes » ; FAQ « Combien verser chaque mois ? » (sens inverse, pour hiérarchiser les deux articles).

---

## 4. per-protection-familiale — 8,5/10, Complet

**Requête cible** : « PER décès » / « que devient mon PER en cas de décès » / « PER succession ». Le title actuel (« Le PER protège-t-il votre famille au-delà de l'avantage fiscal ? ») n'est pas une requête.

**Structure** : résumé OK ; intro PEP ; 7 H2 dont 6 requêtes ; 3 tableaux dont comparatif AV/PER ; méthode « Forme, Clause, Options, Révision » ; FAQ 8 ; 4R. Meilleur article du lot sur la précision technique (990 I / 757 B, abattements 152 500 € / 30 500 €, seuil 700 000 € et 31,25 %, déblocages) — cohérent avec ce que je connais du droit.

**Problèmes**
- (Moyen) L'encadré « Hypothèse illustrative » (PER 160 000 €, 2 enfants, décès à 74 ans) est un mauvais exemple : 129 500 € / 2 = 64 750 € par enfant, sous l'abattement de 100 000 € par enfant en ligne directe → aucun droit dû dans la plupart des cas. Le texte se contente de « taxés ensuite selon les abattements » et laisse croire à un coût. Remplacer par un cas où l'écart est visible : 500 000 € transmis à 2 enfants, ou bénéficiaire non-descendant (neveu/nièce, tiers), avec calcul complet et disclaimer.
- (Moyen) Le tableau AV vs PER indique « décès avant 70 ans » sans préciser la particularité 990 I (assiette nette de l'abattement, bénéficiaire par bénéficiaire, cumul de tous contrats d'un même assuré) : ajouter une note « l'abattement de 152 500 € est global pour tous les contrats du même défunt pour un bénéficiaire ». À valider.
- (Faible) « Décès à partir de votre 70e anniversaire » vs « À partir de 70 ans révolus » (FAQ) : harmoniser.
- (Faible) Sujet de fond absent : PER et démembrement / clause à option / bénéficiaire mineur ; garantie plancher : coût typique non donné (normal, mais dire « quelques dixièmes de point » seulement si sourcé).
- (Faible) Mentionner explicitement que le PER collectif d'entreprise a le même régime successoral (à valider).

**Meta** : title 64 car. → « PER et décès : que reçoivent vos proches ? Fiscalité et clause » (60). Excerpt 157 : quasi OK ; couper « réversion » : « Clause bénéficiaire, règle des 70 ans, déblocage en cas d'accident de la vie : ce que le PER protège vraiment pour votre famille — et les réglages décisifs. » (~150).

**Règles non négociables** : OK (mention « premier échange offert » propre).

**Liens à ajouter**
1. → `assurance-vie-enfants-transmettre-valeurs`, ancre « ouvrir une assurance vie à ses enfants » ; H2 fiscalité 70 ans, paragraphe « La lecture honnête de ce tableau… ».
2. → `donation-transmission-coherence-valeurs`, ancre « donner de son vivant plutôt que transmettre au décès » ; même paragraphe.
3. → `transmettre-patrimoine-engage-fonds-partage`, ancre « transmettre un patrimoine engagé » ; H2 « Un PER investi en supports ISR protège-t-il… ».
4. → /outils/retraite, ancre « estimer l'écart de revenus à la retraite » ; H2 réversion/annuités garanties.
5. → /questions ou /tarifs, ancre « comment le cabinet est rémunéré sur un PER » ; H2 « Les quatre réglages… », étape Options (coût des options de prévoyance).

---

## 5. per-vs-assurance-vie-isr — 7,5/10, Complet (limite)

**Requête cible** : « PER ou assurance vie » (volume élevé, forte concurrence) ; variante « PER vs assurance vie ISR ».

**Structure** : résumé OK ; intro PEP ; 6 H2 dont 5 requêtes ; tableau comparatif de 9 lignes (bon) ; méthode nommée « Impôt, Disponibilité, Transmission » ; FAQ 7 ; 4R. La structure est complète ; c'est le contenu qui reste standard face à Meilleurtaux / Les clés de la banque.

**Problèmes**
- (Moyen) Pas de cas chiffré comparant les deux (ex. 5 000 €/an, TMI 30 %, 20 ans, deux trajectoires nettes) : c'est l'élément que les concurrents ont et qui fait convertir. Renvoi simulateur seulement.
- (Moyen) Incohérence de périmètre avec quelle-enveloppe (FAQ) : ici « non transférable d'un assureur à l'autre sans perdre l'antériorité fiscale » ; l'autre article mentionne la transformation intra-assureur (Fourgous). Ajouter la nuance ici (« mais transformable au sein du même assureur »).
- (Moyen) Fiscalité sortie AV : « 7,5 % jusqu'à 150 000 € de versements » sans dire « primes nettes versées non rachetées, tous contrats confondus » ni le 12,8 % au-delà (présent dans quelle-enveloppe/ou-placer). À harmoniser.
- (Moyen) Frais : rien sur les frais comparés (entrée, gestion, UC) alors que le lecteur compare deux contrats. Fourchette sourcée ou renvoi /tarifs.
- (Faible) PER : « souvent puisés dans le catalogue du même assureur » : formulation floue ; préciser que l'obligation Pacte d'offrir des UC ISR/Greenfin/Finansol s'applique aux PER assurantiels (à vérifier, sinon retirer l'ambiguïté).
- (Faible) Alternatives : PEA/CTO non évoqués (renvoi à quelle-enveloppe suffit).

**Meta** : title 66 car. → « PER ou assurance vie ISR : comment choisir ? » (46). Excerpt 161 → « Mêmes supports labellisés, ou presque : le vrai choix PER / assurance vie se joue sur l'impôt, la disponibilité et la transmission. » (~135).

**Règles non négociables** : OK.

**Liens à ajouter**
1. → /outils/comparateur-enveloppes : déjà présent en fin ; ajouter une seconde occurrence dans le H2 tableau, ancre « comparez avec vos propres chiffres ».
2. → `quelle-enveloppe-investissement-ethique`, ancre « le PEA et le compte-titres, les deux autres enveloppes » ; H2 tableau comparatif, juste sous le tableau.
3. → `assurance-vie-luxembourgeoise-investissement-responsable`, ancre « l'assurance vie luxembourgeoise » ; H2 transmission.
4. → `ou-placer-argent-facon-ethique-montant`, ancre « où placer 50 000, 100 000 ou 300 000 € » ; conclusion, paragraphe « Attendre a un coût ».
5. → /enveloppes, ancre « toutes les enveloppes, expliquées une à une » ; intro, après « Dans cet article ».

---

## 6. pieges-inconvenients-investissement-ethique — 7/10, Améliorable

**Requête cible** : « inconvénients investissement éthique » / « investissement éthique avantages et inconvénients » / « pièges ISR ». Belle idée Big-5 « Problèmes ».

**Structure** : résumé OK (trop long, 190 mots : viser ≤ 90) ; intro PEP ; 6 H2 « Piège n°X » (non formulés en requêtes) ; **aucun tableau** ; FAQ 6 ; 4R OK. Chaque piège suit « mécanisme / pourquoi / comment l'éviter » : très bon patron.

**Problèmes**
- (Grave, exactitude/fraîcheur) Statistiques à valider une par une, elles portent tout l'article : AMF mai 2021 (28 480 parts, −17 pb), AMF juillet 2024 (52 fonds, 64 Md€, 55 %/31 %/27 %/28 %), ESMA février 2024 (187 fonds, 74 Md€), Lettre AMF n° 65 avril 2026 (1,37 % / 0,75 % / 0,33 %), rapport annuel ESMA « données 2024 : Art. 9 < Art. 6 », « environ 70 % des fonds ont conservé le label ». Je n'ai pas pu les recouper : À VÉRIFIER contre les PDF cités (surtout les 2 derniers, invérifiables de mémoire). Ajouter la date de consultation.
- (Grave, périmable) SFDR : le piège n°5 décrit Articles 8/9 comme cadre stable alors qu'une proposition de refonte (nouvelles catégories) est en discussion à l'UE : ajouter une phrase datée (« proposition de la Commission de novembre 2025 — à vérifier ») sinon l'article vieillira mal.
- (Moyen) Piège manquant et central pour la marque « transparence radicale » : **le modèle de rémunération du conseil lui-même** (rétrocessions, frais d'enveloppe) — une grille Sheridan exige de nommer les inconvénients de sa propre offre ; ici tous les pièges sont « du marché ». Ajouter un 7e piège ou un encadré, avec renvoi /tarifs.
- (Moyen) Pièges absents : promesses de performance, fonds en euros non ISR, concentration des fonds thématiques, liquidité (SCPI/non coté), absence de comparabilité des scores ESG entre agences.
- (Moyen) Aucun tableau récapitulatif « piège / signal d'alerte / vérification / document à ouvrir » : facile à ajouter, très citable par moteurs IA.
- (Faible) Piège n°6 contient un argument commercial en corps (« un rendez-vous annuel avec un conseiller permet de systématiser ») : enlever du corps, garder en 4R (GUIDE §2.5).
- (Faible) « Le Label ISR… exclut désormais… seuil de 30 % » : correct dans l'esprit ; ajouter lien vers la source officielle lelabelisr.fr à cet endroit.
- (Faible) Aucun nom de fonds/société : conforme.

**Meta** : title 83 car. (trop long) → « Investissement éthique : 6 pièges et inconvénients à connaître » (62) ; excerpt 167 → « Label mal compris, univers réduit, frais de niche, exclusion confondue avec impact, SFDR : 6 pièges de l'investissement éthique, et comment les éviter. » (~150).
H2 : passer en requêtes, ex. « Un label suffit-il à garantir un fonds éthique ? », « L'investissement éthique réduit-il la diversification ? », « L'investissement éthique coûte-t-il plus cher ? ».

**Liens à ajouter**
1. → /outils/decodeur-label : présent, ajouter dans H2 piège n°5 (SFDR), ancre « décoder Article 6, 8, 9 ».
2. → `label-greenfin-vs-label-isr`, ancre « Greenfin ou Label ISR » ; piège n°1, après le paragraphe sur la réforme ISR.
3. → `etf-isr-debutants`, ancre « choisir un ETF ISR quand on débute » ; piège n°3, paragraphe « Comment l'éviter ».
4. → `engagement-actionnarial-vs-exclusion`, ancre « exclusion ou engagement : ce qui change vraiment » ; piège n°4.
5. → /placement-ethique (pilier) ancre « notre guide pour investir éthique sans se faire piéger » en intro ; et `frais-conseiller-gestion-patrimoine-independant`, ancre « comment un conseiller indépendant est rémunéré », conclusion 4R.

---

## 7. preparer-retraite-epargne-alignee-valeurs — 6,5/10, Améliorable

**Requête cible** : « préparer sa retraite » + « épargne retraite éthique/responsable ». Le title est trop général et se chevauche avec per-ethique-optimiser-retraite.

**Structure** : résumé OK (mais « trois décisions » puis « + cadence + contrôle » : incohérent avec les « 5 C ») ; intro PEP ; 6 H2 en requêtes ; 2 tableaux (enveloppes ; ordre de versement) ; méthode « 5 C » ; FAQ 6 ; 4R. Complet formellement, faible en substance chiffrée.

**Problèmes**
- (Grave, SEO) **Cannibalisation** avec per-ethique-optimiser-retraite : mêmes plafonds, même « angle mort du fonds en euros », même « report d'impôt », même vérification de supports. Décider un partage : `preparer-retraite…` = article amont (combien épargner, quelles enveloppes, âge de départ, régimes obligatoires) ; `per-ethique…` = article aval PER. Retirer d'ici les blocs PER détaillés et lier.
- (Moyen) Aucun chiffre concret sur l'écart retraite : taux de remplacement moyen (source COR/DREES), âge légal de départ (64 ans, réforme 2023, à confirmer et sourcer), durée de cotisation. Or le H2 « De combien aurez-vous besoin ? » ne donne que la démarche. À ajouter avec sources officielles.
- (Moyen) « 100 € par mois pendant vingt-cinq ans représentent un capital versé conséquent » : dire 30 000 € (100×12×25) et illustrer avec une hypothèse de rendement + disclaimer ; c'est l'exemple le plus cherché.
- (Moyen) Manquent : épargne salariale / PER collectif (traité seulement en FAQ), immobilier locatif, retraite des indépendants, âge de départ progressif.
- (Faible) Tableau 1 : « Épargne solidaire… Où se joue l'alignement : Par construction : label Finansol, fonds de partage » : formulation trop affirmative (un label garantit une méthodologie, pas l'alignement) ; nuancer.
- (Faible) « un plafond de déduction qui ne se reportera pas éternellement » : vague, à sourcer en cohérence avec per-ethique (3 ou 5 ans ? à trancher après vérification).

**Meta** : title 71 car. → « Préparer sa retraite avec une épargne éthique : la méthode en 5 étapes » (68, encore long) ou « Retraite éthique : préparer sa retraite en 5 étapes » (48). Excerpt 166 → « Chiffrer l'écart de revenus, ordonner vos enveloppes, vérifier vos supports sur pièces : les 5 C d'une épargne retraite alignée sur vos valeurs. » (~145).

**Liens à ajouter**
1. → /objectifs (retraite), ancre « votre objectif retraite, page par page » ; intro.
2. → `scpi-isr-environnementales-panorama`, ancre « SCPI ISR et environnementales : le panorama » ; tableau 1, ligne SCPI.
3. → `livrets-epargne-solidaire-alternative-livret-a`, ancre « l'épargne solidaire face au Livret A » ; FAQ « Le Livret A et le LDDS suffisent-ils… ».
4. → `investir-ethique-petit-budget`, ancre « démarrer avec un petit budget » ; FAQ « 100 € par mois ».
5. → /outils/per-isr, ancre « tester un PER responsable » ; H2 enveloppes ; + /placement-ethique en conclusion (« notre guide pour investir éthique »).

---

## 8. quelle-enveloppe-investissement-ethique — 7/10, Améliorable

**Requête cible** : « quelle enveloppe pour investir » / « assurance vie PER PEA compte-titres différences » (+ éthique). Volume correct, concurrence forte.

**Structure** : résumé OK ; intro PEP ; 6 H2 dont 5 requêtes ; 2 tableaux (comparatif + fiscalité) ; méthode « Dater, Vérifier, Empiler, Combiner » ; FAQ 8 ; 4R. Complète.

**Problèmes**
- (Moyen, exactitude) Paragraphe fiscalité : « les prélèvements sociaux sur les revenus du capital de 17,2 % à 18,6 % » dit de façon générale, alors que ou-placer précise que l'AV reste à 17,2 % (exception LFSS 2026). Ici, le tableau AV dit « plus PS » sans taux : ajouter la précision et vérifier (À VÉRIFIER : exception AV, traitement exact PEA/PER).
- (Moyen) Le tableau fiscalité n'indique pas les PS dans les lignes PEA/CTO/PER de façon uniforme et omet le cas PEA avant 5 ans (précisé en texte). Acceptable, mais ajouter une colonne « taux PS 2026 ».
- (Moyen) Contenu manquant vs concurrents : fourchettes de frais typiques par enveloppe (gestion AV/PER, courtage PEA/CTO) ; PEA-PME (plafond) ; contrat de capitalisation ; cas chiffré simple (10 000 € en ETF ISR sur AV vs PEA vs CTO sur 10 ans, illustratif) ; avantage successoral détaillé de l'AV (renvoi 990 I).
- (Faible) « Seul le PEA est limité à un par personne » : correct (avec PEA-PME en plus) ; mentionner le plafond PEA-PME pour être complet.
- (Faible) « la forme la plus directe d'engagement actionnarial à l'échelle individuelle » (vote en AG) : formulation très favorable ; ajouter que l'impact réel d'un petit porteur est très limité (cohérent avec engagement-actionnarial-vs-exclusion).
- (Faible) Réplication synthétique : bien expliqué ; sourcer (AMF) ou renvoyer à etf-isr-debutants (déjà fait).

**Meta** : title 83 car. (trop long) → « Quelle enveloppe pour investir éthique : assurance vie, PER, PEA ou CTO ? » (74, encore long) ou « Assurance vie, PER, PEA, CTO : quelle enveloppe éthique ? » (58). Excerpt 161 → « Aucune enveloppe n'est éthique en soi : elle fixe l'univers ISR accessible, les frais et la fiscalité. Comparatif assurance vie, PER, PEA, CTO. » (~145).

**Liens à ajouter**
1. → /outils/profil-investisseur, ancre « déterminez votre profil avant de choisir » ; H2 méthode, étape « Datez votre projet ».
2. → `per-ethique-optimiser-retraite`, ancre « optimiser un PER éthique » ; H3 PER.
3. → `assurance-vie-luxembourgeoise-investissement-responsable`, ancre « l'assurance vie luxembourgeoise, pour qui ? » ; H3 assurance vie.
4. → `investir-ethique-petit-budget`, ancre « démarrer avec un petit budget » ; FAQ « Quelle enveloppe pour commencer avec un petit budget ? » (actuellement sans lien).
5. → /enveloppes (page détaillée) ancre « fiches détaillées de chaque enveloppe » et /tarifs ancre « les frais réels côté cabinet » ; H2 « Empilez les frais ».
