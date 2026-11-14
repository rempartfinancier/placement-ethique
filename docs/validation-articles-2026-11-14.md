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
