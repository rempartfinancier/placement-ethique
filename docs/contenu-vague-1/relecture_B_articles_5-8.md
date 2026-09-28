# Relecture adversariale B : articles 5 a 8 (vague 1), 2026-09-28

Methode : sources officielles rouvertes (WebFetch, curl, pdftotext sur les PDF ACPR n°180, CDC, OPEF 2026, ESMA TRV/orientations, AMF 2024, Conseil ST 10495/26, fiche OEIL). Recalcul de tous les cas chiffres (Python). eslint --fix passe sur les 4 fichiers. Aucun autre fichier touche.
Verifs JSX/maillage : balises equilibrees, `FaqArticle`/`meta.faq` presents dans les 4, tous les `LienArticle slug` existent, tous les `href="/..."` pointent vers des routes existantes (/guide, /outils/decodeur-label, /outils/simulateur, /tarifs, /cgp-investissement-responsable). Liens externes : 200 en curl ou confirmes par WebFetch ; les 403 (Legifrance, ACPR, Banque de France, ABE, Conseil) sont des blocages anti-robot, pas des liens casses (contenu confirme par WebFetch/PDF pour tous sauf Conseil, voir plus bas). Title/excerpt : 51/142, 56/145, 57/153, 46/151 (excerpt SFDR ramene de 158 a 151).

---

## Article 5 : que-finance-votre-assurance-vie-comment-le-savoir
Verdict : **Publiable apres validation humaine** (points 1 a 3 ci-dessous)

Verifie OK : 1 361 Md EUR / 612 Md EUR, 32/17/12 % (ACPR n°180, texte relu) ; 59,5 % et 22,9 Md EUR (communique CDC, texte relu) ; emploi du non-centralise (annexe BdF, texte relu) ; L132-22 (ESG depuis 2022, frais, retrocessions ; pas d'inventaire ligne a ligne de l'actif general) ; service-public F15274, F2385, D533-16-1 applicable aux assureurs via L310-1-1-3 CdA ; AMF 2023 (citation litterale relue) ; exemple Camille (500 + 900 = 1 400 EUR = 2,33 % de 60 000 EUR, coherent, disclaimer present).

Corrections (avant -> apres) :
1. « supports a capital garanti » -> « contrats a capital garanti » (formulation ACPR exacte, encadre 3).
2. Ligne « L'actif general, environ 60 % d'obligations » (tableau) et FAQ -> « les obligations pesent environ 60 % des placements des assureurs-vie (ACPR) » : la phrase ACPR porte sur les « placements des assureurs-vie et ORPS », pas sur le seul fonds en euros ; suppression de « la repartition exacte varie d'un assureur a l'autre » (non source).
3. Resume : « majoritairement en obligations » -> « en grande partie en obligations ».
4. « angle mort le plus frequent du contrat responsable » -> « angle mort possible » (generalisation de marche non sourcee).
5. Tableau Livret A : « moins tracable que la part centralisee » (jugement non source) -> « Le rapport de la CDC ne detaille pas l'emploi de la part conservee par votre banque ».
6. « composition detaillee n'apparait pas sur votre releve » / « absente du releve » -> « ne figure pas dans la liste legale du releve » (L132-22).
7. Marche secondaire : « votre choix pese sur le prix du capital et l'engagement des gestionnaires » (assertion non sourcee, presentee comme un fait) -> « effet plus indirect et ampleur debattue » ; meme correction dans la FAQ PEA.
8. FAQ AMF : « ecarts d'exposition entre categories SFDR » -> « entre fonds Article 8 et fonds Article 6 » (l'AMF ne compare que 8 vs 6 pour les fonds hors actions : « hardly ever significant »).
9. Meme precision dans le corps du texte (etude AMF).
10. D533-16-1 : ajout du seuil (« organismes depassant 500 millions d'euros d'encours ») ; le III.5°b ne s'applique qu'au-dela.
11. DIC : « deux a trois pages » (guide AMF de 2018, PRIIPs en cours de revision) -> « document standardise et court ».
12. PEA : « UE ou EEE » -> « UE ou, sous conditions, EEE » (F2385 : EEE lies a la France par convention).
13. FAQ Mediateur : ajout « gratuit pour l'assure » et renvoi aux delais de saisine (2 mois apres reclamation / 12 mois selon sites secondaires, non affirmes dans l'article).

A valider par un humain :
1. Perimetre du « ~60 % » : ouvrir https://acpr.banque-france.fr/system/files/2026-06/20260630_AS180_revalorisation_2025.pdf p. 17-18 (section TRA). J'ai desormais formule sans l'assimiler au fonds en euros, mais la phrase reste sur les « assureurs-vie et ORPS ».
2. « La liste legale ne prevoit pas l'inventaire ligne a ligne de l'actif general » (FAQ 1) : lecture de L132-22 par WebFetch ; faire confirmer par un juriste assurance : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048252743
3. D533-16-1 : applicabilite aux assureurs deduite de L310-1-1-3 CdA (renvoi a L533-22-1) ; verifier qu'il n'existe pas de version posterieure a mai 2021 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043543865
4. Mediateur de l'assurance : conditions de saisine (delai, reclamation prealable) confirmees seulement par sources secondaires ; ouvrir https://www.mediation-assurance.org (l'URL /saisir-le-mediateur/ renvoie 404).
5. Nombre de liens externes (14) tres au-dessus de la fourchette 1-3 : arbitrage editorial.
6. Marche primaire/secondaire : source pedagogique (La finance pour tous), pas de source officielle equivalente.

---

## Article 6 : assurance-vie-isr-frais-reels-combien-ca-coute
Verdict : **Publiable apres validation humaine** (arithmetique et chiffres OPEF/ESMA/AMF confirmes ; reste le point 1)

Verifie OK (textes bruts relus) : OPEF T5 (0,57 / 0,54 / 0,65 ; 0,88 / 0,79 / 1,08 ; 0,67 ; arbitrage 0,13), T8 (1,60 ; 1,80 ; 1,16 ; 0,29 actions ETF et monetaires), T38 (1,93 / 1,92 / 2,02, ETF exclus), ESMA (1-an : 1,0/1,0 ; 1,2/1,4 ; 0,5/0,7 ; 1,5/1,4 ; ETF 0,2/0,2 ; one-off 2,2/2,0), AMF mai 2024 (0,15 pt), service-public F15268 (5 %, 30 jours). Tous les calculs recalcules : 77 898 / 72 415 / 67 293 / 62 512 EUR ; 90 047 EUR (69,4 %) ; profils A/B/C 76 996 / 62 339 / 57 319 EUR ; ecarts 14 657 (19,0 %) et 19 677 EUR ; 3 % d'entree = 0,20 pt/an ; tableau 3 (2,4 % / 1 366 ; 4,8 % / 3 055 ; 7,1 % / 5 121 ; 9,3 % / 7 633 ; 13,6 % / 14 310). Disclaimer d'illustration present (+ disclaimer perf. passees).

Corrections :
1. Profil A « fonds indiciels » a 0,29 % : faux, 0,29 % est la moyenne des **ETF** actions (OPEF : autres fonds indiciels actions = 0,77 %) -> « ETF actions » dans le tableau 2, le tableau options, le texte, + phrase de precision (0,29 % = tous ETF, pas seulement ISR ; indiciels hors ETF 0,77 %).
2. « Un seul poste est plafonne par la loi » (negatif non verifie) -> « Un poste au moins est plafonne » ; la fiche service-public ne cite pas de plafond de gestion (conserve).
3. Tableau ESMA : seul l'horizon 1 an etait cite -> ajout « Sur cinq ans, l'ESMA releve 1,1 % contre 1,0 % pour l'ensemble » (donnee defavorable a l'ISR omise) ; « aucune prime ISR n'est visible » -> « nette n'apparait ».
4. « l'etiquette ISR n'ajoute aucune ligne de frais » (resume, FAQ, intro) -> « n'ajoute pas de ligne de frais au contrat » ; « aucun label ne certifie un niveau de frais » -> « le label ne porte pas sur un niveau de frais ».
5. Derivation du rendement brut : « brut voisin de 4,5 % » -> « en ajoutant environ 2,5 points de frais moyens, un brut de l'ordre de 4,5 % » (somme de deux moyennes, non observee sur un meme contrat).
6. 4R : « grille publiee en clair » (leger avantage commercial) -> « publiee sur la page tarifs ».
7. Reformulations mineures : « aucune performance garantie » -> « n'est garantie » ; « qu'il soit ISR ou non » -> « ISR ou non ».

A valider par un humain :
1. Plafond de 5 % : base legale (Code des assurances) non relue sur Legifrance ; seul service-public F15268 est cite : https://www.service-public.gouv.fr/particuliers/vosdroits/F15268
2. Etude AMF mai 2024 : document de travail (opinion de l'auteur) ; l'article dit « toutes choses egales par ailleurs » : relire p. 25-30 de https://www.amf-france.org/sites/institutionnel/files/private/2024-05/etude-analyse-des-frais_fr_0.pdf
3. Page OPEF : lien vers la page de publication (PDF 403 aux robots) https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-annuel-2026-de-lobservatoire-des-produits-depargne-financiere-opef (confirmee : publiee le 25/06/2026).
4. 7 liens externes (fourchette 1-3) : arbitrage editorial.

---

## Article 7 : epargne-salariale-solidaire-isr-pee-per-collectif
Verdict : **Publiable apres validation humaine** (obligations legales a faire relire par un juriste ; le point 1 est un conflit avec un article existant)

Verifie OK : plafonds 3 844,80 EUR (8 % PASS) et 7 689,60 EUR (16 % PASS, arrondi 7 690) avec PASS 2026 = 48 060 EUR (F2142 confirme ; PER collectif confirme par recherche, la fiche F36526 n'a pas ete lisible) ; L214-164 CMF « entre 5 % et 15 % » (en vigueur depuis 01/01/2025) et conseil de surveillance ; decret 2024-644 (liste des 5 labels, art. 3 au 01/07/2024) ; L3332-17 (« prevoit ... peut etre affectee ») ; L224-3 CMF (obligation de proposer une allocation solidaire + labellisee pour les PER d'entreprise) ; F34982 (gestion pilotee « equilibre horizon retraite », PFU 31,4 % sur gains) ; F12400 (transfert PER collectif : gratuit apres 5 ans, sinon <= 1 %) ; F31622 et A17553 (deblocages, 3 cas du 07/07/2024) ; L3341-6 et L3341-7. Arithmetique Camille : 2 000 + 1 000 + 500 = 3 500 EUR ; 700 x 10 % = 70 EUR ; 70/3 500 = 2 % ; 630 EUR ; coherent, disclaimer present.

Corrections :
1. Resume : « doit prevoir un fonds solidaire et au moins un fonds labellise » -> « doit permettre d'investir dans un fonds solidaire et dans au moins un fonds labellise » (L3332-17 : « prevoit qu'une partie ... peut etre affectee »).
2. Intro : « quelques milliers d'euros ... dorment ... au nom de votre employeur » (chiffre de marche invente + inexact : l'epargne est au nom du salarie) -> « epargne qui n'a jamais fait l'objet d'un vrai choix, placee chez le teneur de compte retenu par votre employeur ».
3. « La reponse est tres probablement oui » / « presque certainement » -> « En principe oui » / « doit en principe proposer ».
4. « levier peu connu » (generalisation) -> « levier a connaitre ».
5. Deblocage : « la demande se fait en general dans les six mois » -> « pour la plupart des cas ... certains cas a tout moment » (F31622 : PER collectif surtout a tout moment, 6 mois pour la residence principale ; PEE 6 mois sauf cas listes).
6. Transfert PEE : « possibles dans des cas precis » -> « des transferts vers un autre plan ... (notamment depart / changement de plan) » (F12400 mentionne aussi la demande volontaire).

A valider par un humain :
1. **Conflit avec `label-finansol-finance-solidaire`** (non modifie) : cet article-la annonce 5 a 10 % de part solidaire ; L214-164 CMF en vigueur depuis 01/01/2025 dit 5 % a 15 % pour les FCPE solidaires. A harmoniser : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049720154
2. Nature de l'obligation (« doit prevoir / proposer ») : a faire relire par un juriste sur https://code.travail.gouv.fr/code-du-travail/l3332-17 et L224-3 CMF (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048491274) ; date du 1er juillet 2024 de l'obligation de fonds labellise (decret 2024-644 art. 3/6 confirme, texte de la loi 2023-1107 non relu).
3. « France finance verte » = Label Greenfin : le decret cite les criteres D128-1 du code de l'environnement (Greenfin) ; la mention entre parentheses reste une inference : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049834776
4. Transferts PEE : la fiche F12400 (MAJ 08/2024) date d'avant la mise a jour des PER ; https://www.service-public.gouv.fr/particuliers/vosdroits/F12400
5. Plafonds d'abondement a re-verifier a chaque changement de PASS ; fiche PER collectif : https://www.service-public.gouv.fr/particuliers/vosdroits/F36526
6. FAQ « Mon entreprise est-elle obligee ... » : vrai pour le PEE/PER collectif eux-memes, mais la loi 2023-1107 impose (experimentation 2025-2029) aux entreprises rentables de 11 salaries et plus un dispositif de partage de la valeur, dont l'abondement sur un plan d'epargne est une option : une nuance peut etre ajoutee.

---

## Article 8 : sfdr-refonte-et-regles-esma-noms-de-fonds-ce-qui-change
Verdict : **Publiable apres validation humaine** (a re-verifier le jour de la mise en ligne : la plenière d'octobre peut changer l'etat de la procedure)

Etat de la procedure verifie par moi sur sources officielles au 28/09/2026 :
- OEIL 2025/0361(COD) (curl, texte lu) : 20/11/2025 proposition COM(2025)0841 ; 10/09/2026 vote en commission + decision d'ouvrir des negociations interinstitutionnelles ; **15/09/2026 rapport tabled for plenary (A10-0234/2026)** ; statut « Awaiting Parliament's position in 1st reading ». Aucune date de plenière ni de trilogue n'apparait dans les evenements cles.
- Commission (finance.ec.europa.eu) : annonce du 19/11/2025 ; 3 categories facultatives, 70 %, allegations ESG reservees, fin du PAI au niveau entite, phrases « too long and complex », « de facto labelling », « greenwashing and mis-selling » confirmees.
- Parlement (communique ECON) : 37-9-4 le 10/09/2026 ; conditions fossiles ; mandat annonce a l'ouverture de la plenière « October I ».
- Conseil : mandat Coreper du 24/06/2026 confirme par le Legislative Train du Parlement ; regle des 20 % de capex confirmee par extrait de recherche consilium.europa.eu (la page presse renvoie 403 en direct, aussi cote miroir Chypre) ; texte du mandat ST 10495/26 telecharge et lu (remplacement des art. 7, 8, 9 ; seuil 70 % ; le 70 % est dit plus strict que les 80 % ESMA).
- ESMA : orientations FR (21/08/2024) relues : champ, application 3 mois apres publication + 6 mois pour l'existant, points 15-23 (seuils, exclusions a a c / a a g, ESG et ISR = termes environnementaux, transition/impact, ecart passif) ; TRV du 17/12/2025 relu (924 fonds, 600 changements de nom = 64 %, 530 politiques = 56 %, 61 % suppriment tout terme ESG, mots de remplacement, limites).

Corrections :
1. Fiche OEIL : « ne mentionne aucune date de vote en seance pleniere ni de trilogue programmes » (la phrase « No trilogues or plenary vote dates currently scheduled » citee par le redacteur n'apparait pas dans la page telle que je la lis) -> « le Parlement n'a pas encore adopte sa position en premiere lecture ; elle ne liste ni vote en seance pleniere ni negociation a trois » (FAQ + paragraphe « non etabli »).
2. Chronologie : ajout du 15 septembre 2026 (rapport depose pour la plenière, A10-0234/2026), omis.
3. Date de la proposition : « 20 novembre 2025 : depot » -> « 19-20 novembre 2025 : presentation par la Commission, publiee sous COM(2025) 841 a la date du 20 novembre » (Commission et Legislative Train disent 19/11, OEIL 20/11).
4. Resume : « un fonds ... doit respecter un seuil de 80 % et des exclusions » -> « les orientations ... attendent d'un fonds ... » ; et precision dans le corps : ce sont des orientations, prises en compte par les autorites nationales dans leur supervision (point 22 ; pas un reglement).
5. « Dix minutes de lecture suffisent souvent » (durée inventee) -> question de lecture sans duree.
6. « Une reforme de vocabulaire ne modifie pas ce qu'un fonds detient » (contredit l'article lui-meme : 56 % des fonds ont modifie leur politique) -> « Une nouvelle etiquette ne dit pas, a elle seule, ce qu'un fonds detient ».
7. Excerpt 158 -> 151 caracteres ; doubles espaces / espace final dans 2 reponses de FAQ supprimes.

A valider par un humain :
1. **Etat de la procedure le jour de la mise en ligne** : rouvrir https://oeil.europarl.europa.eu/oeil/en/procedure-file?reference=2025/0361(COD) et le communique https://www.europarl.europa.eu/news/en/press-room/20260907IPR47414/ (plenière « October I » ; le mandat peut etre annonce juste apres le 28/09). Mettre a jour la liste des dates si besoin.
2. **Communique du Conseil (24/06/2026)** : page 403 pour tous les robots ; ouvrir dans un navigateur https://www.consilium.europa.eu/en/press/press-releases/2026/06/24/council-agrees-position-on-simpler-transparency-rules-for-sustainable-financial-products/ pour confirmer les 20 % de capex et la formulation « position » vs « mandat ».
3. **Exclusions ESMA a a c / a a g** (art. 12(1) du reglement delegue 2020/1818) : la mention « incluent les energies fossiles » (tableau) repose sur mes connaissances du reglement, EUR-Lex n'est pas accessible aux robots : verifier https://eur-lex.europa.eu/eli/reg_del/2020/1818/oj
4. Position ECON sur les fossiles : les conditions sont dans le communique ; le caractere cumulatif n'est pas tranche dans l'article (« sauf conditions ») : relire le texte adopte A10-0234/2026.
5. Les deux « arguments » sur les fossiles (financer la transition / clarté de la categorie) sont une mise en forme editoriale, non attribuee a une institution ; a garder ou a retirer.
6. Non modifies (hors perimetre) mais periment : les paragraphes sur la reforme dans `sfdr-article-8-ou-9-ce-que-ca-garantit.tsx` et `taxonomie-verte-europeenne-epargne.tsx` (voir wave1_08_sources.md §3).
7. Nombre de liens externes (6) au-dessus de la fourchette 2-4.
