# Validation des articles du 2026-11-14 (placement-ethique.fr)

Branche `content/articles-2026-11-14`. Rien n'est poussé ni fusionné : relecture humaine requise avant PR.

## Passer son épargne en ISR : quelle fiscalité par enveloppe ?

- **Slug** : `passer-epargne-isr-fiscalite-par-enveloppe` · catégorie Fiscalité · auteur Sébastien Petrisot · date 2026-11-14
- **Fichiers** : `src/content/articles/passer-epargne-isr-fiscalite-par-enveloppe.tsx` (créé) ; `src/content/articles.ts` (import + entrée) ; `src/content/articles/assurance-vie-ethique-ou-classique-differences.tsx` (1 paragraphe de lien ajouté à la fin du H2 « Comment passer d'un contrat classique… », reste inchangé)
- **Longueur** : environ 3 400 mots de corps + 7 questions de FAQ (`meta.faq`) ; 2 tableaux, 1 arbre de décision, 1 exemple chiffré, 5 erreurs
- **Validations** : prettier OK, eslint OK, build OK, slugs `LienArticle` OK, rendu SSR vérifié (3 blocs JSON-LD, 9 H2). `tsc --noEmit` : 1 erreur préexistante sans rapport (`src/lib/antispam.test.ts`, `bun:test` sans export `it`), présente aussi sans l'article.

### Sources officielles (consultées le 14 novembre 2026)

| Organisme | Page | URL | Ce qu'elle établit |
|---|---|---|---|
| Service-public | Fiscalité de l'assurance vie (vérifiée le 15/04/2026) | https://www.service-public.gouv.fr/particuliers/vosdroits/F22414 | 12,8 % avant 8 ans ; abattement 4 600 / 9 200 € ; 7,5 % jusqu'à 150 000 € de primes puis 12,8 % ; prélèvements sociaux « en principe » 17,2 % |
| Service-public | Prélèvements sociaux sur les revenus du patrimoine et de placement | https://www.service-public.gouv.fr/particuliers/vosdroits/F2329 | 18,6 % cas général en 2026 ; 17,2 % assurance vie, PEL, CEL, revenus fonciers |
| Service-public | Plus-values sur valeurs mobilières (vérifiée le 15/04/2026) | https://www.service-public.gouv.fr/particuliers/vosdroits/F21618 | PFU 31,4 % (12,8 + 18,6) ; option barème ; abattement durée de détention pour titres acquis avant 2018 ; moins-values reportables 10 ans |
| Service-public | PEA (vérifiée le 22/05/2026) | https://www.service-public.gouv.fr/particuliers/vosdroits/F2385 | Retrait avant 5 ans = clôture en principe ; après 5 ans exonération d'IR ; prélèvements sociaux dus dans tous les cas |
| Service-public | PER individuel (vérifiée le 12/10/2026) | https://www.service-public.gouv.fr/particuliers/vosdroits/F34982 | Transfert : 1 % maximum avant 5 ans, gratuit après, 2 mois ; anciens produits : 5 % maximum avant 10 ans ; gestion pilotée par défaut ; sortie en capital : gains au PFU 31,4 % |
| Légifrance | Loi n° 2019-486 du 22 mai 2019 (Pacte), article 72 | https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000038496267 | Transformation par avenant ou nouveau contrat « auprès de la même entreprise d'assurance » ; information annuelle |
| BOFiP | BOI-RPPM-RCM-30-10-20-20 (version du 30/06/2022), § 335 à 380 | https://bofip.impots.gouv.fr/doctrine/pgp/9312-PGP | Transformation sans dénouement fiscal ; « qu'auprès du même organisme assureur » (§ 360) ; contrat réputé souscrit à la date du premier versement d'origine, y compris pour 757 B et 990 I (§ 347) ; transformation partielle (§ 370) |
| BOFiP | BOI-RPPM-RCM-20-10-20-50 (version du 30/06/2022), § 80 | https://bofip.impots.gouv.fr/bofip/3951-PGP.html | Formule du rachat partiel : R − [T × (R / V)] |
| BOFiP | BOI-RPPM-RCM-40-50-60 (version du 26/10/2026), § 1 et 10 | https://bofip.impots.gouv.fr/doctrine/pgp/2275-PGP | Transfert intégral d'un PEA = pas un retrait ; communication de la date d'ouverture |
| impots.gouv.fr | Bénéficiaire d'une assurance vie | https://www.impots.gouv.fr/particulier/questions/je-suis-beneficiaire-dune-assurance-vie-comment-la-declarer | Régimes distincts des primes versées avant et après 70 ans |

### Chiffres et règles à faire confirmer par un humain

1. **Texte en vigueur de l'article 125-0 A, I, 2° du CGI** : non lu directement sur Légifrance (page inaccessible à l'outil). La règle « même assureur » repose sur l'article 72 de la loi Pacte (version initiale) et sur le BOFiP du 30/06/2022. À recouper sur Légifrance.
2. **« Aucun texte ne prévoit le transfert d'un contrat d'assurance vie d'un assureur à un autre sans dénouement fiscal »** (H2 n° 4 et FAQ) : affirmation négative, déduite du BOFiP § 360 ; vérifier qu'aucune disposition récente (dont le projet de loi de finances 2027, article 6 évoqué par la presse) ne la modifie.
3. **PEA, retrait avant 5 ans** : l'article ne donne pas de taux (les fiches consultées ne l'affichent pas). Le taux des prélèvements sociaux du PEA (18,6 % « cas général » ; règles particulières pour les gains antérieurs à 2018) n'est pas chiffré dans le corps : à compléter si souhaité, avec source.
4. **Prélèvements sociaux de l'assurance vie à 17,2 %** : confirmés par deux fiches service-public ; le contrat de capitalisation n'est pas cité par la fiche F2329 (l'article n'en parle pas).
5. **Exemple chiffré** (calculs vérifiés par script) : A = 6 280 € ; C = 1 155 + 3 440 = 4 595 € ; D = 6 000 € ; rachat partiel de 15 000 € = 5 000 € de gains, 30 + 860 = 890 €. Hypothèse simplificatrice : contrat 100 % unités de compte (sur un fonds en euros, les prélèvements sociaux sont prélevés au fil de l'eau, point non traité dans l'article).
6. **Arbitrage dans une assurance vie, un PEA ou un PER non imposable** : déduit du fait générateur (rachat, retrait, sortie) ; aucune fiche officielle ne le dit en toutes lettres.
7. **Erreur n° 3 (rachat après 70 ans)** : mécanisme exact (757 B, abattement global de 30 500 €) non chiffré dans le corps ; formulation à relire.
8. **Obligation de référencer une UC ISR, une Greenfin et une solidaire** : reprise de l'article existant (L. 131-1-2 du code des assurances, fiche F15274), non revérifiée aujourd'hui.

### Affirmations sensibles à relire

- « La part de l'épargne qui peut basculer sans aucun coût fiscal est généralement la plus importante » (conclusion) : généralisation raisonnable mais non sourcée.
- « Cet impôt est en partie une avance, pas une pure perte » : raisonnement pédagogique, à valider.
- Conclusion : « échanger avec un conseiller du cabinet » (formule du squelette de la recette ; ni statut ni numéro d'immatriculation cités, aucune durée d'échange).
- Titre : « en ISR » (60 caractères) au lieu de « à l'ISR » (61).
- Longueur au-dessus de la cible haute (environ 3 400 mots hors FAQ).

### Liens internes

- Sortants : `quelle-enveloppe-investissement-ethique`, `assurance-vie-ethique-ou-classique-differences`, `label-isr-que-garantit-il-vraiment`, `etf-isr-debutants`, `quel-per-choisir-investir-ethique-criteres`, `assurance-vie-isr-guide-2026`, `/outils/comparateur-enveloppes`, `/tarifs`, `/cgp-investissement-responsable`
- Entrant ajouté : `assurance-vie-ethique-ou-classique-differences` (H2 « Comment passer d'un contrat classique… »). À envisager : `quelle-enveloppe-investissement-ethique`, `assurance-vie-isr-guide-2026`.

### Visuels suggérés

- Schéma de l'arbre de décision (5 questions) ; graphique en barres des 4 scénarios de l'exemple (somme réinvestie) ; pictogramme « dans l'enveloppe = 0 impôt, sortie = impôt ».

---

## Questionnaire de durabilité : comment y répondre ?

- **Slug** : `questionnaire-durabilite-assurance-vie-comment-repondre` · catégorie Conseil · date 2026-11-14
- **Auteur affiché : Alexandre Pollet — à confirmer par l'éditeur.** Convention du site suivie : union stricte de deux auteurs, en alternance ; l'article précédent de cette branche est signé Sébastien Petrisot, ce qui porte la répartition à 25 / 24.
- **Fichiers** : `src/content/articles/questionnaire-durabilite-assurance-vie-comment-repondre.tsx` (créé) ; `src/content/articles.ts` (import + entrée) ; `src/content/articles/comment-choisir-conseiller-investissement-ethique-questions.tsx` (1 phrase de lien ajoutée à la fin du H2 « Comment un conseiller doit-il traiter vos préférences de durabilité ? », reste inchangé)
- **Longueur** : environ 3 200 mots de corps (tableaux compris) + 7 questions de FAQ (`meta.faq`, environ 500 mots) ; 3 tableaux (les 3 critères ; « si vous répondez… alors l'offre devient… » ; exemple chiffré), 1 séquence en 4 temps, 1 checklist en 8 points, 6 signaux d'alerte
- **Validations** : prettier OK, eslint OK, build OK, slugs `LienArticle` OK, rendu SSR vérifié (3 blocs JSON-LD, 9 H2 d'article, lien entrant présent). `tsc --noEmit` : seule l'erreur préexistante `src/lib/antispam.test.ts` (sans rapport). `src/routeTree.gen.ts` régénéré par le build puis restauré, non commité.
- **Contraintes du brief respectées** : aucun contrat, assureur ni fonds nommé ; ni « CIF » ni « ORIAS » ; aucune réponse suggérée au lecteur (le texte décrit l'effet de chaque réponse, y compris « non »).

### Sources officielles (consultées le 14 novembre 2026)

| Organisme | Document | URL | Ce qu'il établit |
|---|---|---|---|
| ACPR et AMF (Pôle commun) | « Mise en œuvre des préférences en matière de durabilité sous DDA et MiFID II », 13/11/2025 (13 pages, lu en entier) | https://acpr.banque-france.fr/system/files/2025-11/Approche_ACPR-AMF_preferences_durabilite_public.pdf | ≈ 95 % des clients sans préférences détaillées (moyenne des réseaux observés) ; client « neutre » ; préférences traitées après le reste du profil ; labels ISR et Greenfin ; préférences prédéfinies ; séquence d'adaptation en 4 temps ; pratiques nuisibles ; approche non obligatoire |
| AMF | Communiqué du 13/11/2025 (démarche conjointe) | https://www.amf-france.org/fr/actualites-publications/communiques/communiques-de-lamf/lacpr-et-lamf-presentent-leur-demarche-conjointe-pour-accompagner-les-professionnels-dans-la-prise | Date et statut du document commun |
| AMF | Synthèse des contrôles SPOT sur les préférences de durabilité, publiée le 26/02/2026 (lue par extraits) | https://www.amf-france.org/sites/institutionnel/files/private/2026-02/synthese-spot-preferences-durabilite-fr.pdf | 5 établissements, contrôles d'avril à juillet 2024 ; 15 % contre 50 % de clients exprimant des préférences ; 0,5 % à 4 % de préférences détaillées ; profils génériques à 5-20 % (SFDR) ; taxonomie « peu nombreux voire absents » ; seuils qualitatifs sans pourcentage ; avertissement pouvant influencer ; mention générique d'adaptation ; contenu du rapport d'adéquation |
| AMF | Communiqué du 26/02/2026 | https://www.amf-france.org/fr/actualites-publications/communiques/communiques-de-lamf/lamf-publie-les-enseignements-de-ses-controles-sur-la-prise-en-compte-des-preferences-de-durabilite | Date, périmètre, bonnes et mauvaises pratiques |
| ESMA | Orientations ESMA35-43-3172, version française du 03/04/2023 (§ 16, 26 à 29, 57, 81 à 85, 88) | https://www.esma.europa.eu/sites/default/files/2023-04/ESMA35-43-3172_Guidelines_on_certain_aspects_of_the_MiFID_II_suitability_requirements_FR.pdf | Oui/non puis critères a, b, c ; proportion minimale ; exemple « minimum 20 %, 25 %, 30 % » ; neutralité ; pas de jargon ; adaptation limitée au conseil en question ; client neutre |
| Commission européenne (JOUE L 277 du 02/08/2021) | Règlement délégué (UE) 2021/1257 (assurance), texte français lu sur une copie du JO hébergée par le Commissariat aux assurances luxembourgeois | https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32021R1257 | Définition (article 2, point 4, a, b, c du règlement 2017/2359) ; article 9 § 6 (abstention, explication, enregistrement, modification des préférences) ; applicable le 2 août 2022 |
| Commission européenne | Règlement délégué (UE) 2021/1253 (MiFID II) | https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32021R1253 | Même dispositif pour les instruments financiers ; applicable le 2 août 2022 |
| EIOPA (traduction française ACPR) | Conseils d'application EIOPA-BOS-22-391 du 20/07/2022 | https://acpr.banque-france.fr/system/files/2024-12/20241212_2024-R-03_Guidance%20EIOPA_FR.pdf | Client neutre ; approche neutre et impartiale ; produits à options multiples : moyenne pondérée par les primes OU chaque option |

### Chiffres et règles à faire confirmer par un humain

1. **EUR-Lex inaccessible à l'outil** (page de garde du JO renvoyée à chaque tentative). Le règlement 2021/1257 a été lu en français sur une copie PDF du JO (caa.lu) ; le règlement 2021/1253 n'a PAS été lu directement : son contenu et sa date d'application (2 août 2022) sont établis par la synthèse AMF du 26/02/2026 (qui en cite les articles 54 § 2, 5, 7, 10, 12 et 55 § 3) et par les orientations ESMA. À recouper sur EUR-Lex, ainsi que les deux liens EUR-Lex de l'article.
2. **« Les deux [règlements] donnent la même définition »** : vrai en substance (a, b, c), mais l'un vise un « instrument financier », l'autre un « produit d'investissement fondé sur l'assurance ».
3. **Périmètre « dès lors qu'un conseil vous est fourni »** : le brief parle d'une étape imposée « à tout souscripteur » ; les textes visent le conseil (et la gestion de portefeuille). L'article s'en tient aux textes. À valider.
4. **Révision SFDR** : « proposée en novembre 2025, non adoptée au 14 novembre 2026 » : aucune source officielle d'un accord trouvée (recherche du jour ; dernières sources d'octobre 2026, trilogues en cours). À revérifier juste avant publication (un accord politique était jugé possible en novembre ou décembre 2026).
5. **Chiffres AMF** (15 % / 50 % ; 0,5 % à 4 % ; 5 % à 20 %) : portent sur un panel de 5 établissements, au deuxième trimestre 2024 ; l'article le précise.
6. **Exemple chiffré** (calculs vérifiés par script) : 600 + 2 700 + 4 500 = 7 800 € sur 30 000 € = 26 % ; variante 300 + 12 000 = 12 300 € = 41 %, part en unités de compte 80 %. Les engagements de 5 %, 30 % et 50 % sont INVENTÉS pour le calcul (signalé dans l'encadré) ; l'application d'un pourcentage SFDR à un fonds en euros est une simplification à relire.
7. **Critère b) et « Article 8 »** : « un fonds Article 8 peut s'engager sur 0 %, 10 % ou 50 % d'investissements durables » : affirmation générale non sourcée par un lien.
8. **Annexe précontractuelle SFDR** comme lieu de lecture des pourcentages : repris des articles existants du site, non revérifié aujourd'hui.

### Affirmations sensibles à relire

- « L'AMF attribue probablement l'écart au rôle du conseiller » (la synthèse écrit « probablement à mettre en lien avec le rôle central du conseiller »).
- « Si vous lisez une telle phrase […] vous pouvez demander sa correction » : déduction pratique, non tirée d'un texte.
- « Un questionnaire laborieux n'est pas forcément le signe d'une mauvaise volonté ; un questionnaire sans effet, si » : jugement éditorial.
- Coût de l'inaction : « c'est lui [le document de conseil] qui fera foi » : formulation à valider.
- Le mot « recommander » n'apparaît que dans une citation du règlement (« s'abstient de recommander ») ; ailleurs « conseiller » ou « proposer ».
- Conclusion : « échanger avec un conseiller du cabinet » (formule du squelette ; aucune durée, aucun statut).
- Longueur dans le haut de la fourchette (environ 3 200 mots hors FAQ).

### Liens internes

- Sortants : `taxonomie-verte-europeenne-epargne`, `sfdr-article-8-ou-9-ce-que-ca-garantit`, `que-finance-votre-assurance-vie-comment-le-savoir`, `comment-choisir-conseiller-investissement-ethique-questions`, `label-isr-que-garantit-il-vraiment`, `passer-epargne-isr-fiscalite-par-enveloppe`, `/outils/profil-investisseur`, `/cgp-investissement-responsable`, `/tarifs`
- Entrant ajouté : `comment-choisir-conseiller-investissement-ethique-questions`. À envisager : `taxonomie-verte-europeenne-epargne` (H3 « Une question nouvelle chez votre conseiller » et FAQ), `bilan-patrimonial-investissement-ethique-rendez-vous`.
- Incohérence mineure à signaler dans l'existant : `comment-choisir-conseiller-…` date les orientations ESMA du « 23 septembre 2022 » (rapport final) ; le présent article cite la version française du 3 avril 2023, appliquée par l'AMF depuis le 3 octobre 2023.

### Visuels suggérés

- Arbre « oui / non, puis a, b, c » ; entonnoir montrant l'offre qui se réduit à chaque critère ; schéma des 4 temps de l'adaptation ; barres de l'exemple (moyenne 26 % contre seuils 20 % et 40 %).

---

## Assurance vie ISR : gestion pilotée ou gestion libre ?

- **Slug** : `gestion-pilotee-ou-gestion-libre-assurance-vie-isr` · catégorie Enveloppes · date 2026-11-14 (brief n° 4 du scan, backlog #10 ; slug différent de celui du backlog pour mettre la requête en tête)
- **Auteur affiché : Sébastien Petrisot — à confirmer par l'éditeur.** Alternance du site suivie (l'article précédent de cette branche est signé Alexandre Pollet) ; répartition portée à 25 / 25.
- **Fichiers** : `src/content/articles/gestion-pilotee-ou-gestion-libre-assurance-vie-isr.tsx` (créé) ; `src/content/articles.ts` (import + entrée) ; `src/content/articles/assurance-vie-isr-guide-2026.tsx` (1 paragraphe de lien ajouté à la fin du H3 « La gestion pilotée « ISR » est-elle une bonne idée ? », reste inchangé)
- **Longueur** : environ 3 300 mots de corps (tableaux compris, même méthode de comptage que les deux articles précédents, qui donnent 2 900 et 3 000) + 7 questions de FAQ (`meta.faq`, environ 600 mots) ; 9 H2 ; 6 tableaux (profils légaux ; comparatif ; grille fictive ; frais moyens ; exemple chiffré ; profils de lecteur), 5 questions numérotées, 4 erreurs
- **Validations** : prettier OK, eslint OK, build OK, slugs `LienArticle` OK, rendu SSR vérifié (3 blocs JSON-LD, 9 H2 d'article, lien entrant présent). `tsc --noEmit` : seule l'erreur préexistante `src/lib/antispam.test.ts`. `src/routeTree.gen.ts` régénéré par le build puis restauré, non commité.
- **Contraintes du brief respectées** : assurance vie uniquement (PER renvoyé vers `quel-per-choisir-investir-ethique-criteres`) ; aucun mandat, contrat, assureur ni fonds nommé ; ni « CIF » ni « ORIAS » ; aucune grille ni avantage du cabinet dans le corps ; aucune conclusion sur la performance (un H2 dit explicitement qu'il n'y a pas de réponse générale).

### Sources officielles (consultées le 14 novembre 2026)

| Organisme | Document | URL | Ce qu'il établit |
|---|---|---|---|
| Banque de France / CCSF | Rapport 2026 de l'Observatoire des produits d'épargne financière (mis en ligne le 25/06/2026, mis à jour le 14/10/2026), PDF lu : chapitre 2, tableaux T1, T5 et T8 | https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-annuel-2026-de-lobservatoire-des-produits-depargne-financiere-opef | Frais 2025 (source ACPR) sur les UC : versement 0,54 % (libre) / 0,65 % (autres modes) ; gestion du contrat 0,79 % / 1,08 % ; arbitrage 0,13 % / 0,00 % ; « autres modes » = pilotée, pilotée profilée, déléguée, sous mandat ; coûts récurrents des fonds (France Assureurs) : 1,60 % ensemble, 1,80 % fonds actions, 0,29 % ETF actions ; définitions des modes de gestion ; dénominations « peu standardisées » ; tableau des 3 profils |
| Service-public | Assurance vie : fonctionnement (fiche F15274, vérifiée le 25/09/2026) | https://www.service-public.gouv.fr/particuliers/vosdroits/F15274 | Définition de la gestion libre et de la gestion pilotée ; profils prudent / équilibré / dynamique (50, 30, 20 % de supports à faible risque ; 30, 20, 10 % au-delà de 10 ans ; 4 % et 8 % de non coté) |
| Légifrance | Code des assurances, article L. 132-27-3 (en vigueur depuis le 24/10/2024) | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048244710 | Définition de l'arbitrage et du mandat d'arbitrage ; mandataires autorisés (assureurs et intermédiaires) ; délégation à un prestataire de services d'investissement |
| Légifrance | Code des assurances, article L. 132-27-4 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048244714 | Mandat écrit ; profil « cohérent avec les exigences et les besoins du mandant », motivé par écrit ; vérification périodique ; information sur les arbitrages au moins une fois par an |
| Légifrance | Code des assurances, article D. 133-1 (décret n° 2024-572 du 21/06/2024) | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049771471 | Mentions de la convention (identité, liens financiers, délégataire, profil, rémunération) ; relevé annuel (supports, performance, dates d'arbitrage, frais) ; résiliation à tout moment sans indemnité, effet sous 3 mois au plus |
| Légifrance | Code des assurances, article L. 132-5-4 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049736233 | Profils d'allocation proposés dans les contrats en UC, mis en œuvre par mandat d'arbitrage ; changement de profil sans frais |
| Légifrance | Arrêté du 1er juillet 2024 instaurant une gestion pilotée profilée (contrats de capitalisation et certains contrats d'assurance vie) | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049888609 | Qualification prudent / équilibré / dynamique (article A. 132-5-4) |
| Label ISR (site officiel) | Présentation du label | https://www.lelabelisr.fr/label-isr/ | Label attribué à des fonds (actions, obligations), fonds immobiliers depuis 2020, mandats de type institutionnel ; rien sur les contrats d'assurance vie ni sur la gestion pilotée |
| AMF | Position-recommandation DOC-2012-19, version du 26/03/2026 (lue, non citée dans l'article) | https://www.amf-france.org/sites/institutionnel/files/private/2026-03/doc-2012-19_fr18_0.pdf | Le mandat d'arbitrage relève depuis le 24/10/2024 des articles L. 132-27-3 et L. 132-27-4 et est juridiquement distinct de la gestion de portefeuille pour compte de tiers |

### Chiffres et règles à faire confirmer par un humain

1. **Articles de Légifrance lus par un outil de résumé**, pas en texte intégral (L. 132-27-3, L. 132-27-4, D. 133-1, L. 132-5-4) ; l'arrêté du 1er juillet 2024 (JORFTEXT000049888609) n'a pas été ouvert : son contenu est établi par service-public et par le tableau T1 de l'Observatoire. À recouper, en particulier : « seuls un assureur ou un intermédiaire d'assurance peuvent être mandataires », « résiliation à tout moment sans indemnité, effet sous trois mois au plus », « modifier sans frais son profil d'allocation ».
2. **« Les contrats comportant des unités de compte doivent proposer des profils d'allocation »** (L. 132-5-4) : périmètre exact (contrats concernés, exceptions) à vérifier ; l'article L. 132-27-4 exclut certains contrats (PER de groupe, plan d'épargne avenir climat, article 83).
3. **0,79 % en gestion libre** : valeur du tableau T5 du rapport ; la synthèse du même rapport (« Ce qu'il faut retenir ») écrit 0,80 %. L'article retient 0,79 %, comme `assurance-vie-isr-frais-reels-combien-ca-coute`.
4. **Frais d'arbitrage en gestion déléguée « 0,00 % »** : valeur du tableau T5 pour l'assurance vie ; le rapport parle de frais « en principe pas facturés mais intégrés ». L'article écrit « en principe non facturés ».
5. **Exemple chiffré** (script) : 50 000 €, 4 % brut, fonds à 1,60 %, 15 ans. Gestion libre : 50 000 × (1 − 0,54 %) × 1,0161^15 = 63 192 € ; pilotée moyenne : 50 000 × (1 − 0,65 %) × 1,0132^15 = 60 474 € ; écart ≈ 2 719 € (4,3 %) ; 8 ans ≈ 1 338 € ; 25 ans ≈ 5 189 € ; arbitrage annuel de 10 % à 0,13 % ≈ −123 €. La 3e ligne (supplément de 0,70 point, soit 1,49 % : 56 905 €, écart ≈ 6 287 €, 9,9 %) est une HYPOTHÈSE inventée, signalée comme telle. Rendement net faible (1,61 % et 1,32 %) : conséquence du choix d'un brut de 4 %, repris de l'article sur les frais.
6. **Grille fictive** (35 / 25 / 20 / 10 / 5 / 5) : entièrement inventée, signalée comme telle. Résultats : 55 % (Article 8 ou 9), 35 % (labellisés sur le total), 35/65 = 54 % (labellisés sur les UC). L'association « fonds labellisé ISR = Article 8, Greenfin = Article 9 » est une hypothèse d'illustration.
7. **« Le relevé annuel liste les supports, pas leur part labellisée »** : déduit de la liste de D. 133-1, qui ne mentionne pas les labels.
8. **« Aucun texte n'impose une part de fonds labellisés dans une gestion pilotée dite ISR »** (corps et FAQ) : affirmation négative, fondée sur l'absence de critère de durabilité dans les profils légaux et sur le périmètre du Label ISR ; les règles ESMA sur les noms de fonds visent les fonds, pas les profils de gestion. À valider.
9. **Indicateur de risque « au plus de 2 sur 7 »** : le rapport écrit « inférieur ou égal à 2 » ; l'échelle de 1 à 7 est celle du DIC (non revérifiée aujourd'hui).
10. **Périodicité de la vérification du profil** : non chiffrée dans l'article (des sources secondaires évoquent 4 ans, arrêté non lu).
11. **Fiscalité** : l'article se limite à « les arbitrages à l'intérieur du contrat ne déclenchent pas d'impôt », renvoyé vers `passer-epargne-isr-fiscalite-par-enveloppe` (voir ses points à confirmer).

### Affirmations sensibles à relire

- Le mot **« mandat »** (mandat d'arbitrage, gestion sous mandat) est utilisé comme terme légal du produit, jamais pour qualifier le cabinet ; le guide du site l'interdit pour le statut du cabinet. À valider.
- « Le professionnel vous oriente vers un profil […] » : paraphrase de l'obligation légale de conseil (L. 132-27-4), décrite comme règle générale et non comme service du cabinet.
- « Une gestion libre jamais suivie n'est pas plus "éthique" qu'une gestion pilotée vérifiée » et « notre grille de lecture, assumée et discutable » : jugements éditoriaux, alignés sur celui de l'article PER.
- « C'est ce qui explique qu'une société de gestion apparaisse souvent derrière le nom commercial d'une gestion pilotée » : généralisation non chiffrée.
- Coût de l'inaction : « une gestion dont un tiers seulement, ou moins, correspond à ce que vous pensiez financer » renvoie à la grille fictive (35 %), pas à une statistique.
- Tableau « pour quel épargnant » : situations générales, avec la phrase « il ne remplace pas l'examen de votre contrat et de vos objectifs ».
- Conclusion : « échanger avec un conseiller du cabinet » (formule du squelette ; aucune durée, aucun statut).
- `readingTime` : « 17 min » (environ 3 900 mots FAQ comprise, à 230 mots par minute).

### Liens internes

- Sortants : `quel-per-choisir-investir-ethique-criteres`, `label-isr-que-garantit-il-vraiment`, `que-finance-votre-assurance-vie-comment-le-savoir`, `sfdr-article-8-ou-9-ce-que-ca-garantit`, `assurance-vie-isr-frais-reels-combien-ca-coute`, `questionnaire-durabilite-assurance-vie-comment-repondre`, `passer-epargne-isr-fiscalite-par-enveloppe`, `assurance-vie-isr-guide-2026`, `/outils/decodeur-label`, `/cgp-investissement-responsable`, `/tarifs`
- Entrant ajouté : `assurance-vie-isr-guide-2026`. À envisager : `assurance-vie-isr-frais-reels-combien-ca-coute` (ligne « mode de gestion » de la checklist), `quel-per-choisir-investir-ethique-criteres` (H2 « Gestion pilotée ou gestion libre pour un PER responsable ? »).

### Visuels suggérés

- Barres empilées de la grille fictive avec les trois façons de compter (55 %, 35 %, 54 %) ; courbe de l'écart de capital à 8, 15 et 25 ans ; schéma « qui décide » (épargnant, mandataire, délégataire, assureur).

---

## ETF ISR ou fonds ISR actif : lequel choisir ?

- **Slug** : `etf-isr-ou-fonds-isr-actif-lequel-choisir` · catégorie Fondamentaux · auteur Alexandre Pollet · date 2026-11-15 (date réelle de rédaction ; les trois articles précédents sont datés du 14)
- **Auteur** : alternance du site (25 Pollet / 25 Petrisot avant cet article ; séquence de la série : Petrisot, Pollet, Petrisot, Pollet). **À confirmer par l'éditeur.**
- **Fichiers** : `src/content/articles/etf-isr-ou-fonds-isr-actif-lequel-choisir.tsx` (créé) ; `src/content/articles.ts` (import + entrée) ; `src/content/articles/etf-isr-debutants.tsx` et `src/content/articles/pieges-inconvenients-investissement-ethique.tsx` (une phrase de lien entrant chacun, reste inchangé)
- **Longueur** : environ 3 900 mots de corps, tableaux compris (au-dessus de la cible de 3 200) + 7 questions de FAQ (`meta.faq`, environ 620 mots) ; 4 tableaux (7 critères, frais AMF / ESMA, exemple chiffré, PAB / CTB), 1 arbre de décision en 5 questions, 5 erreurs fréquentes, 10 H2
- **Sujet fusionné** : le backlog #14 (indices PAB et CTB) est traité dans le H2 « Indices PAB et CTB : que garantit un ETF aligné sur l'accord de Paris ? » ; pas d'article séparé à prévoir.
- **Validations** : prettier OK, eslint OK, `bun run build` OK, slugs `LienArticle` OK. `tsc --noEmit` : seule l'erreur préexistante `src/lib/antispam.test.ts`. Rendu SSR non contrôlé par curl (gabarit inchangé). `src/routeTree.gen.ts` modifié par le build : non commité.

### Sources officielles (consultées le 15 novembre 2026)

| Organisme | Document | URL | Ce qu'il établit |
|---|---|---|---|
| AMF | Lettre de l'Observatoire de l'épargne n° 65, avril 2026 (PDF lu intégralement) | https://www.amf-france.org/sites/institutionnel/files/private/2026-04/loe-65_1.pdf | Fonds français ouverts au public, données Six Financial Information, 6 010 fonds à fin mars 2026, moyennes non pondérées, hors coûts de transaction : ETF actions 0,33 % en 2025 (0,36 % en 2024) ; fonds actions indiciels non cotés 0,75 % ; fonds actions actifs 1,37 % frais courants + commissions de surperformance (1,47 % en 2024). Courtage janvier 2026, ordre de 1 000 € : 0,65 % banques de réseau (compte-titres), 0,45 % banques et courtiers en ligne, 0,15 % néo-brokers. Commission de souscription sur fonds externes : 0,58 % en moyenne pour 5 000 € (18 banques). Obligation d'informer sur coûts du produit, du service et rétrocessions |
| AMF | Communiqué du 27 avril 2026 | https://www.amf-france.org/fr/actualites-publications/actualites/les-frais-des-placements-financiers-continuent-de-baisser-en-particulier-ceux-des-fonds | Date de publication et périmètre de la Lettre n° 65 |
| ESMA | Market Report « Costs and Performance of EU Retail Investment Products 2025 », 3 mars 2026 (ESMA50-1949966494-4065, PDF lu : tableaux MR-CP.14, MR-CP.25, MR-CP.26) | https://www.esma.europa.eu/sites/default/files/2026-03/ESMA50-1949966494-4065_Market_Report_-_Costs_and_Performance_of_EU_Retail_Investment_Products.pdf | OPCVM UE, 2024. Frais récurrents actions à 1 an : actifs 1,28 %, indiciels non cotés 0,22 %, ETF 0,21 %. Performance nette actions 2024 : 17,0 % / 21,3 % / 21,4 % ; sur 10 ans (2015-2024) : 7,6 % / 9,3 % / 9,3 %. Obligations 2024 : 7,2 % / 6,3 % / 5,7 %. ESG contre non ESG (particuliers) : actions non cotées 1,2 % contre 1,4 % de frais, 16,4 % contre 17,7 % en 2024, 8,3 % contre 8,0 % sur 5 ans ; ETF actions 0,2 % contre 0,2 %, 19,6 % contre 21,9 % en 2024, 9,5 % contre 10,6 % sur 5 ans |
| ESMA | Communiqué du 3 mars 2026 | https://www.esma.europa.eu/press-news/esma-news/new-investment-funds-drive-reduction-costs-investors | Date et titre du rapport ; fonds ESG moins coûteux, en retrait en 2024 |
| Union européenne | Règlement délégué (UE) 2020/1818 du 17 juillet 2020 (texte français lu via l'Office des publications ; EUR-Lex inaccessible à l'outil) | https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32020R1818 | Art. 3 (exposition aux secteurs NACE A à H et L au moins équivalente à l'univers) ; art. 7 (au moins 7 % par an en moyenne) ; art. 9 (CTB : au moins 30 %) ; art. 10 (CTB : exclusions a à c au plus tard le 31/12/2022) ; art. 11 (PAB : au moins 50 %) ; art. 12 (exclusions a à g : 1 % charbon, 10 % combustibles liquides, 50 % gaz, 50 % électricité > 100 g CO2e/kWh) |
| Commission européenne | Page « EU labels for benchmarks (climate, ESG) » | https://finance.ec.europa.eu/sustainable-finance/disclosures/eu-labels-benchmarks-climate-esg-and-benchmarks-esg-disclosures_en | Création des deux catégories par le règlement (UE) 2019/2089 du 27 novembre 2019 |
| ESMA | Orientations sur les noms de fonds (ESMA34-1592494965-657), points 16 à 18 (version anglaise lue ; lien de l'article vers la version française déjà utilisée par le site) | https://www.esma.europa.eu/sites/default/files/2024-08/ESMA34-1592494965-657_Guidelines_on_funds_names_using_ESG_or_sustainability_related_terms_FR.pdf | Seuil de 80 % ; exclusions de l'article 12(1) a à c (termes transition, social, gouvernance) ou a à g (termes environnementaux, impact, durabilité) ; application 3 mois après publication, 6 mois de plus pour les fonds existants |

### Chiffres et règles à faire confirmer par un humain

1. **Exemple chiffré** (vérifié par script ; formule : 20 000 × [(1 + r) × (1 − frais)]^10) : à 5 % avant frais, 32 578 € sans frais ; 31 519 € (ETF, 0,33 %) ; 30 215 € (indiciel non coté, 0,75 %) ; 28 380 € (actif, 1,37 %) ; écart ETF / actif 3 139 € ; 2 589 € à 3 %, 3 790 € à 7 % ; surperformance brute nécessaire au fonds actif pour égaler l'ETF : 1,11 point par an. Le taux de 5 % est une convention de calcul (annoncée comme telle), pas une hypothèse de marché sourcée : à valider ou remplacer.
2. **Frais AMF appliqués à l'ISR** : la Lettre n° 65 ne distingue pas les fonds ISR. L'article le dit et s'appuie sur l'ESMA pour l'ISR (1,2 % contre 0,2 %). Les 1,37 % incluent les commissions de surperformance, les 0,33 % et 0,75 % sont des frais courants : comparaison reprise telle que l'AMF la présente.
3. **Colonne « ESMA, fonds ESG seuls »** : la catégorie « non-ETF » de l'ESMA mêle fonds actifs et fonds indiciels non cotés (précisé dans le tableau). Définition ESG = « sustainable investment » de Morningstar.
4. **Dates d'application des orientations ESMA sur les noms** (21 novembre 2024, puis 21 mai 2025 pour les fonds existants) : reprises des articles existants du site et d'un rapport ESMA cité par la recherche ; seul le mécanisme « 3 mois + 6 mois » a été lu dans le texte. « ESG » et « ISR » assimilés à des termes environnementaux : repris de l'article `reperer-greenwashing-fonds-vert-methode` et du rapport final ESMA (non relu ligne à ligne aujourd'hui).
5. **Date d'application du règlement délégué 2020/1818** (23 décembre 2020) : non citée dans l'article.
6. **Plafond PEA de 0,50 % sur les frais de transaction** : présent dans la Lettre AMF, non cité dans l'article.

### Affirmations sensibles à relire

- **Performance** : l'article ne conclut pas ; il juxtapose des résultats ESMA de sens opposés et ajoute « Notre grille de lecture, qui n'engage que nous » (les frais sont certains, la performance ne l'est pas). À relire au regard de la règle « ne jamais conclure sur la performance ».
- « Une partie des frais d'un fonds actif peut être reversée à l'intermédiaire (rétrocession) ; un ETF n'en verse en principe pas » : pratique de marché connue, non sourcée par un texte ; suivie d'un renvoi neutre vers `/tarifs` (« la rémunération du cabinet qui édite ce site est décrite sur la page tarifs »).
- « La liste complète des lignes [d'un fonds actif] est publiée moins souvent » et « la composition [d'un ETF] publiée par l'émetteur » : généralités de marché, non sourcées.
- Réplication synthétique « utilisée notamment par des ETF éligibles au PEA qui suivent un indice mondial » et conséquence sur le vote : généralité non sourcée, formulée prudemment.
- « Les sociétés de gestion publient une politique d'engagement actionnarial et un rapport de vote » : présenté comme les documents où chercher la preuve, sans citer le texte (code monétaire et financier) : à sourcer si souhaité.
- Limites du PAB (« la décarbonation est celle de l'indice », « pas un indice éthique complet ») : analyse déduite du texte, non d'une source tierce.
- Application de l'arbre de décision à la situation type (« ce qui le conduit vers l'ETF ») : illustration, avec la mention « ne vaut pas pour une autre situation que la sienne ».
- Conclusion : « échanger avec un conseiller du cabinet » (formule du squelette de la recette). Ni « CIF » ni « ORIAS » ; aucun ETF, fonds, société de gestion ni fournisseur d'indice nommé (Six Financial Information et Morningstar ne sont cités que comme sources de données des régulateurs).

### Liens internes

- Sortants : `etf-isr-debutants` (×2), `pieges-inconvenients-investissement-ethique`, `assurance-vie-isr-frais-reels-combien-ca-coute`, `investir-ethique-performance-chiffres`, `sfdr-refonte-et-regles-esma-noms-de-fonds-ce-qui-change`, `engagement-actionnarial-vs-exclusion`, `label-isr-que-garantit-il-vraiment`, `passer-epargne-isr-fiscalite-par-enveloppe`, `/outils/simulateur`, `/outils/decodeur-label`, `/tarifs` (×2), `/cgp-investissement-responsable`
- Entrants ajoutés : `etf-isr-debutants` (H2 « Combien coûte un ETF ISR… ») et `pieges-inconvenients-investissement-ethique` (paragraphe « Comment l'éviter » du piège sur les frais). À envisager : `investir-ethique-performance-chiffres`, `gestion-pilotee-ou-gestion-libre-assurance-vie-isr`, et la PR #2 (PEA ISR) une fois fusionnée.

### Visuels suggérés

- Graphique en barres des quatre capitaux finaux de l'exemple (sans frais, ETF, indiciel non coté, actif) ; schéma de l'arbre de décision en 5 questions ; infographie « PAB contre CTB » (30 % / 50 %, 7 % par an, exclusions).

---

# Relecture 2026-11-15 (relecteur indépendant)

## Relecture 2026-11-15 — Passer son épargne en ISR : quelle fiscalité par enveloppe ?

**Vérifié (sources primaires, consultées le 15/11/2026)**
- Art. 125-0 A, I, 2° du CGI (Légifrance, LEGIARTI000044989424, en vigueur depuis le 01/01/2022) : transformation par avenant ou nouveau contrat « auprès de la même entreprise d'assurance », sans conséquences fiscales d'un dénouement. Point 1 levé.
- BOFiP BOI-RPPM-RCM-30-10-20-20 (30/06/2022) § 340, 347, 360 : confirmés.
- Prélèvements sociaux 2026 (F2329, vérifiée le 30/06/2026) : 18,6 % cas général, 17,2 % assurance vie ; PEA au cas général. Point 4 levé.
- Art. L. 131-1-2 du code des assurances (en vigueur depuis le 01/01/2025) : au moins une UC pour chaque label reconnu par l'État + UC solidaire. Point 8 levé (reformulé).
- Calculs de l'exemple (A 6 280 €, C 4 595 €, D 6 000 €, rachat partiel 890 €) : recalculés, exacts.

**Corrigé (avant → après)**
- « aucun texte ne prévoit le transfert… » → « aucun texte en vigueur ne permet à l'épargnant de transférer… sans les conséquences fiscales d'un dénouement » + citation et lien de l'art. 125-0 A du CGI (corps et FAQ).
- « Tout contrat comportant des UC doit référencer une UC ISR, une Greenfin et une solidaire » → formulation calée sur L. 131-1-2 (« pour chaque label reconnu par l'État, dont ISR et Greenfin, ainsi qu'une UC solidaire ») ; erreur n° 1 alignée (« doivent déjà référencer »).

**Reste à confirmer par l'éditeur**
- PLF 2027 (non voté) : son article 6 durcirait les conditions du régime de l'assurance vie pour les primes versées depuis le 01/10/2026 (presse spécialisée, non lu dans le texte) ; un amendement sur la transférabilité inter-assureurs a été évoqué, adoption non confirmée. L'encadré « loi de finances 2027 non votée » couvre le risque ; revérifier avant publication.
- Taux du PEA en cas de retrait : volontairement non chiffrés (non ajoutés faute de lecture BOFiP dédiée).
- Points 6 et 7 de la liste initiale inchangés (raisonnements non textuels, formulés prudemment).

## Relecture 2026-11-15 — Questionnaire de durabilité : comment y répondre ?

**Vérifié**
- Règlement délégué (UE) 2021/1253 : applicable aux PSI depuis le 2 août 2022, pour le conseil en investissement et la gestion de portefeuille (AMF, page « Exigences en matière de durabilité dans la distribution d'instruments financiers », 12/08/2022). EUR-Lex non lu ; seconde source officielle AMF. Point 1 levé pour la date et le périmètre.
- Art. L. 522-5 du code des assurances (en vigueur depuis le 24/10/2024) : avant toute souscription d'un contrat de l'art. L. 522-1, le distributeur « conseille un contrat » cohérent avec les exigences et besoins « y compris ceux concernant ses éventuelles préférences en matière de durabilité ».
- Révision SFDR : aucune trace d'accord politique au 15/11/2026 (mandat du Parlement en octobre 2026, trilogues ouverts ; sources de cabinets, aucune annonce du Conseil ou du Parlement trouvée). « Non adoptée » reste exact.
- Exemple (26 %, 41 %, 60 % → 80 % d'UC) : recalculé, exact ; pourcentages inventés bien signalés comme tels dans l'encadré.

**Corrigé (avant → après)**
- « la règle est la même dès lors qu'un conseil vous est fourni » (incomplet pour l'assurance vie) → « …la règle est la même. Pour l'assurance vie, le droit français impose ce conseil avant toute souscription (art. L. 522-5, préférences de durabilité comprises) ; pour les instruments financiers, dès lors qu'un conseil en investissement ou une gestion de portefeuille vous est fourni » + lien Légifrance.

**Reste à confirmer par l'éditeur**
- Révision SFDR : revérifier le jour de la publication (accord possible fin 2026).
- Points 2, 7 et 8 de la liste initiale inchangés.

## Relecture 2026-11-15 — Assurance vie ISR : gestion pilotée ou gestion libre ?

**Vérifié**
- Rapport OPEF 2026 (PDF lu) : tableau T5 = 0,79 % (libre) / 1,08 % (autres modes) en 2025 ; versement 0,54 / 0,65 ; arbitrage 0,13 / 0,00 ; T8 = 1,60 % ensemble, 1,80 % actions ; ETF actions 0,29 %. La synthèse « Ce qu'il faut retenir » arrondit à 0,80 % : l'article garde 0,79 % (tableau), cohérent avec l'article frais. Point 3 tranché.
- Arrêté du 1er juillet 2024 (JORF du 06/07/2024, ouvert) : planchers 50/30/20 % (30/20/10 % au-delà de 10 ans), 4 % et 8 % des versements, aucune mention de label ni de durabilité ; seuils appréciés au moins une fois par semestre.
- L. 132-27-3 (seuls intermédiaires et entreprises d'assurance mandataires), L. 132-27-4, D. 133-1 (résiliation à tout moment, sans indemnité, effet sous trois mois au plus), L. 132-5-4 (profils, changement sans frais ; contrats souscrits depuis le 24/10/2024 ; aucune mention de label) : confirmés. Point 1 levé.
- L. 131-1-2 : obligation de référencement de supports labellisés au niveau du contrat, rien sur les profils.
- Exemple chiffré (63 192 / 60 474 / 56 905 € ; écarts 1 338 / 2 719 / 5 189 €) : recalculé, exact. Grille fictive signalée comme telle.
- « Mandat » : employé uniquement comme terme légal (mandat d'arbitrage, L. 132-27-3), jamais pour le cabinet : conforme.

**Corrigé (avant → après)**
- « aucun texte ne l'impose » / « rien ne l'y oblige » / « aucun seuil légal » (déduction) → affirmation sourcée : les profils légaux (L. 132-5-4, arrêté du 01/07/2024) fixent des planchers de risque, pas de part de fonds labellisés ; L. 131-1-2 vise la gamme du contrat (corps et FAQ).
- « depuis le 24 octobre 2024, les contrats comportant des UC doivent proposer des profils » → « les contrats… souscrits depuis le 24 octobre 2024 » ; « modifier sans frais votre profil » limité aux contrats soumis à L. 132-5-4.
- « Un profil prudent en contient [du fonds en euros] au moins 30 à 50 % » → « contient au moins 30 à 50 % de supports à faible risque, souvent logés en grande partie sur le fonds en euros ».

**Reste à confirmer par l'éditeur**
- Indicateur de risque « au plus 2 sur 7 » : l'arrêté renvoie à l'arrêté du 7 août 2019 (non lu) ; repris de l'OPEF.
- Points 2, 7 et 10 de la liste initiale inchangés.

## Transversal
- Auteurs : alternance Petrisot / Pollet / Petrisot (non modifiée) — à confirmer par l'éditeur.
- Aucun « CIF », « ORIAS », « Épargne Plurielle », « Uptimi », « Calendly », « TODO » ou « À CONFIRMER » dans les trois articles ; slugs `LienArticle` tous existants.
- Validations après corrections : prettier + eslint OK sur les trois fichiers, `bun run build` OK, `tsc --noEmit` : seule l'erreur préexistante `src/lib/antispam.test.ts`. `src/routeTree.gen.ts` modifié par le build, non commité.

## Relecture 2026-11-15 — ETF ISR ou fonds ISR actif

**Vérifié**
- Exemple chiffré recalculé par script (20 000 × [(1 + r)(1 − frais)]^10) : 32 578 / 31 519 / 30 215 / 28 380 € ; écart 3 139 € ; 2 589 € à 3 % ; 3 790 € à 7 % ; surperformance requise 1,107 point. Exact. Le taux de 5 % reste une convention de calcul, désormais dite telle dès le chapeau du H2.
- AMF, Lettre n° 65 (PDF lu) : 0,33 % (0,36 % en 2024), 0,75 %, 1,37 % frais totaux avec surperformance (1,47 % en 2024), 6 010 fonds, moyennes non pondérées hors coûts de transaction ; courtage 1 000 € : 0,65 % (banques de réseau, compte-titres), 0,45 % / 0,15 % (en ligne / néo-brokers, Paris) ; commission de souscription 0,58 % pour 5 000 € (18 banques) ; information sur coûts du service, du produit et rétrocessions, en % et en euros. Tous exacts.
- ESMA, rapport du 3 mars 2026 (PDF lu) : MR-CP.14 (1,28 / 0,22 / 0,21 % ; 17,0 / 21,3 / 21,4 % ; 10 ans 7,6 / 9,3 / 9,3 % ; obligations 7,2 / 6,3 / 5,7 % ; investisseurs particuliers et institutionnels) ; MR-CP.25-26 (particuliers : 1,2 / 1,4 % ; 16,4 / 17,7 % ; ETF 0,2 / 0,2 % ; 19,6 / 21,9 % ; 5 ans 8,3 / 8,0 % et 9,5 / 10,6 %) ; définition ESG Morningstar. Tous exacts.
- Orientations ESMA34-1592494965-657 (version FR lue) : points 4 à 6 (application 3 mois après publication, +6 mois pour les fonds existants), 15 à 18 (seuil 80 % ; exclusions art. 12(1) a-c ou a-g). Communiqué ESMA du 21/08/2024 : application le 21/11/2024, fonds existants au 21/05/2025. Dates confirmées.
- Règlement délégué (UE) 2020/1818 : art. 3, 7(1) (7 % par an), 9 (30 %), 10(2) (exclusions a-c au 31/12/2022), 11 (50 %), 12(1) a-g (1 % charbon, 10 % combustibles liquides, 50 % gaz, 50 % électricité > 100 g CO2e/kWh) confirmés sur le texte anglais (version retenue au Royaume-Uni, legislation.gov.uk, libellé identique hors « UK » / nomenclature) ; EUR-Lex inaccessible à l'outil.
- Paragraphe « Notre grille de lecture » : aucune conclusion sur la performance, aucune accusation nommée, aucun avantage du cabinet. Conservé.
- Aucun ETF, fonds, société de gestion ni fournisseur d'indice nommé ; aucun « CIF », « ORIAS », « Épargne Plurielle », « Uptimi », « Calendly », « TODO » ; « recommandation » non employé ; vouvoiement. Liens entrants (`etf-isr-debutants`, `pieges-inconvenients-investissement-ethique`) et entrée `articles.ts` corrects.

**Corrigé (avant → après)**
- Résumé : « Ce point d'écart est la seule différence certaine : […] les données du régulateur européen ne désignent aucun gagnant durable » (inexact : l'ESMA montre un retard moyen des fonds actions actifs sur 1 et 10 ans) → l'écart de frais est connu d'avance ; les moyennes du régulateur varient selon la classe d'actifs et la période et ne préjugent pas de l'avenir.
- Chapeau frais : « 1,2 % contre 0,2 % sur les fonds actions ESG » → précision : fonds ESG non cotés, gestion active et indicielle confondues (MR-CP.25 ne distingue pas les actifs).
- Chapeau exemple : « dans l'hypothèse centrale » → « performance de 5 % retenue par convention de calcul, et non comme prévision » ; « ne dépend pas beaucoup de l'hypothèse » → « varie avec l'hypothèse sans changer d'ordre de grandeur ».
- Explication ESMA du retard ESG : « moins performants que le marché américain » → « moins performants que les zones Amérique et Asie au second semestre » (texte du rapport).
- Noms de fonds : « terme environnemental (y compris « ESG » ou « ISR ») » → catégorie qui, selon les orientations (point 15), « peut inclure » ces abréviations ; ajout de la date du 21/11/2024 pour les fonds nouveaux.
- Erreur fréquente « seuls PAB et CTB renvoient à des seuils réglementaires » (faux depuis 2025 : « ESG », « SRI », « Climate » déclenchent les orientations ESMA) → PAB et CTB seuls à renvoyer à un cahier des charges d'indice fixé par règlement, les autres termes déclenchant les exclusions des orientations ESMA.
- Rétrocessions : « un ETF n'en verse en principe pas » (non sourcé) → supprimé ; l'obligation d'information est attribuée à l'AMF (Lettre n° 65).
- Réplication synthétique : « montage utilisé notamment par des ETF éligibles au PEA qui suivent un indice mondial » (non sourcé, et éligibilité de ces ETF discutée en 2026 entre la DGT et la place) → supprimé, mécanisme décrit de façon générique.
- Tableau critère 3 : « composition publiée par l'émetteur » / « liste complète publiée moins souvent » (généralités) → « composition que de nombreux émetteurs mettent en ligne » / « fréquence de publication variable selon les fonds ». « Sans intervention humaine » → « sans choix discrétionnaire du gérant ».
- Engagement : « rapport annuel de vote » non sourcé → politique d'engagement et compte rendu annuel décrivant l'exercice des droits de vote, publiés en application des articles L. 533-22 et R. 533-16 du code monétaire et financier (articles cités par la synthèse AMF des contrôles SPOT de juillet 2025 ; texte Légifrance non ouvert).

**Reste à confirmer par l'éditeur**
- Auteur affiché Alexandre Pollet (26 Pollet / 25 Petrisot après cet article ; alternance de la série respectée) et date du 15/11 : non modifiés.
- Taux conventionnel de 5 % : à valider ou remplacer.
- Articles L. 533-22 et R. 533-16 CMF : à relire sur Légifrance (notamment l'éventuelle faculté de ne pas publier en s'expliquant).
- Mention « Par transparence, la rémunération du cabinet […] page tarifs » dans le corps (puce rétrocessions) : neutre, conservée ; à retirer si l'éditeur veut un corps sans aucune référence au cabinet.
- Validations : prettier + eslint OK, `bun run build` OK, `tsc --noEmit` : seule l'erreur préexistante `src/lib/antispam.test.ts` ; `src/routeTree.gen.ts` restauré.
