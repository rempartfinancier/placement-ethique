# Relecture adversariale A — 4 articles (2026-09-28)

Méthode : chaque source officielle citée a été rouverte (Légifrance, service-public, ACPR/AMF, ORIAS, ESMA, FAIR ; PDF AMF PER, ACPR-AMF, note ORIAS, ESMA et étude FAIR téléchargés et lus en texte intégral). Calculs registre A refaits en Python. Vérifié : title ≤ 60 (58 / 51 / 55 / 57), excerpt 140-155 (153 / 147 / 154 / 152), tous les `LienArticle slug` existent, tous les `href="/…"` internes pointent vers des routes existantes, JSX valide (eslint --fix OK, 0 erreur), FAQ = `meta.faq` + `<FaqArticle>` cohérents. Aucun fonds/société nommé, aucun ISIN, aucune mention de statut CIF ou catégorie ORIAS du cabinet, aucun « conseil/étude personnalisé(e) » en CTA, premier échange sans durée.

Calculs recalculés (tous exacts) : A1 30 000 x 1,033^15 = 48 823 / x 1,03^15 = 46 739, écart 2 084 (4,3 %). A2 (mensuel, taux net = 4 % - frais) A = 90 922, B = 77 831, écart 13 091 > 12 560 (1/5 de 62 800). A3 : 600/500/1 500 ; 200 x 25 % = 50 ; 150. A4 : frais cumulés et capitaux à 5/10/15 ans reproduits à ±10 € (arrondis) ; croisement des frais cumulés entre 12 et 13 ans, capitaux à égalité vers 15-16 ans : le texte (« une douzaine d'années », « se rejoignent vers quinze ans ») est correct. Les 4 cas portent le disclaimer d'illustration.

---

## 1. assurance-vie-ethique-ou-classique-differences — Publiable après validation humaine

Corrections faites (12) :
1. Frais : « trois couches » selon service-public F15274 → la fiche liste **4 types** (dossier, entrée, gestion, arbitrage) ; texte corrigé (« couche de plus » pour les frais des supports au lieu de « quatrième »). Source : https://www.service-public.gouv.fr/particuliers/vosdroits/F15274
2. « Dans la plupart des contrats, la même grille s'applique à toutes les UC » (généralisation de marché non sourcée) → « le label d'un support n'est pas un critère de cette grille… à vérifier dans l'annexe » (tableau et FAQ alignés).
3. « Certains supports labellisés, notamment de niche, coûtent plus cher ; d'autres autant » → « peut coûter plus cher, autant ou moins : cela se lit fonds par fonds » (+ ligne du tableau).
4. « la page tarifs montre comment le cabinet détaille la sienne » (avantage commercial dans le corps) → formulation neutre « à titre d'exemple de présentation détaillée ».
5. FAQ « socle responsable existe donc partout » → « dans tout contrat en unités de compte » (L131-1-2 exclut les contrats liés à la cessation d'activité professionnelle).
6. Tableau fonds en euros : « traçabilité de l'actif général souvent faible » → « peu de visibilité sur l'actif général depuis votre relevé ».
7. « Rachat possible à tout moment » / « même liberté de rachat » → « rachat partiel ou total possible, selon les règles du contrat » (F15274 ne dit pas « à tout moment » et précise de vérifier que le contrat prévoit le rachat).
8. « Ce régime s'applique à tous vos rachats » → « à vos rachats sur ces primes » (régime vérifié pour les primes versées depuis le 27/09/2017 seulement).
9. Espace parasite avant le point après un `LienArticle` (intro).
Vérifiés OK : L131-1-2 (version en vigueur 01/01/2025), F15274 (vérifié 25/09/2026), F22414 (12,8 % / 4 600-9 200 € / 7,5 % ≤ 150 000 € / 12,8 % au-delà / PS 17,2 %), FGAP 70 000 € (ACPR), ACPR 13/11/2025 (préférences durabilité depuis août 2022). 17,2 % confirmé aussi pour l'assurance vie après la LFSS 2026 (hausse à 18,6 % ne vise pas l'AV).

À valider par un humain :
- Pacte art. 72 (transformation sans dénouement fiscal, même assureur, information annuelle) : lu via résumé de Légifrance ; relire II 2° et I 6° e) et confirmer qu'il s'agit d'un dispositif pérenne applicable à un contrat déjà ouvert. https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000038496267
- « Certains assureurs publient un reporting extra-financier de leur actif général ou proposent des fonds en euros « verts » » : qualitatif, non sourcé (à sourcer ou supprimer).
- Régime fiscal < 8 ans : le texte dit « prélèvement forfaitaire de 12,8 % » sans mentionner l'option pour le barème (F22414) ; à décider.
- Incohérence hors périmètre : `assurance-vie-isr-guide-2026` écrit « PFU de 30 % » pour les rachats < 8 ans (12,8 + 17,2, mais libellé trompeur).

## 2. quel-per-choisir-investir-ethique-criteres — Publiable après validation humaine

Corrections faites (5) :
1. « Ce qui départage le plus souvent deux contrats » (généralisation de marché) → « Ce qui pèse le plus dans la comparaison ».
2. « nous n'avons pas trouvé d'équivalent explicite » (vécu/prudence) → affirmation vérifiable : « aucun de ces deux articles [L131-1-2 CAssur, L224-3 CMF] ne fixe de minimum équivalent pour un PER individuel » (L224-3 relu en intégralité : fonds solidaire + fonds labellisé cités seulement pour les PER d'entreprise).
3. « celle du cabinet est publiée en clair sur la page tarifs » (argument commercial dans le corps) → « voir, pour le cabinet, la page tarifs ».
4. Cas de déblocage anticipé : liste alignée sur le PDF AMF (décès du titulaire, du conjoint ou du partenaire de Pacs ; expiration des droits à l'assurance chômage ; cessation d'activité non salariée à la suite d'une liquidation judiciaire) au lieu d'une version tronquée.
5. Délai de 2 mois (F36526) : précisé qu'il s'agit du délai pour transmettre au nouveau gestionnaire les informations nécessaires (et non un délai de transfert global).
Vérifiés OK : AMF PER (3 formes ; gestion libre ; transfert PER individuel « à tout moment » ; PER collectif tous les 3 ans ; frais employeur ; AV transférable vers PER), L224-3 (version 24/10/2024), L224-6 (1 %, nuls à 5 ans), L224-29, arrêté du 1er juillet 2024 (entrée en vigueur 24/10/2024, part minimale d'actifs non cotés par profil/horizon), F34982 (profil « équilibré horizon retraite », 5 % si < 10 ans, 4 mois), AMF gestion pilotée (citation « ni garantie, ni protection du capital » confirmée, 25/08/2020), dossier médiateur AMF (2/2/2021 → 25/12/2021).

À valider par un humain :
- Périmètre juridique : PER individuel assurantiel et obligation de supports labellisés. L131-1-2 exclut les « contrats liés à la cessation d'activité professionnelle » ; L224-3 al. 2 range les PER assurantiels dans cette catégorie ; des sources secondaires affirment le contraire. Consultation juridique à faire (les articles frères `per-ethique-optimiser-retraite` / `per-vs-assurance-vie-isr` sont déjà alignés sur la lecture prudente). https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563706
- Incohérence hors périmètre : `per-ethique-optimiser-retraite` (FAQ) plafonne à 1 % les frais de transfert depuis PERP/Madelin/Perco/art. 83 ; service-public F34982 dit 5 % si < 10 ans. https://www.service-public.gouv.fr/particuliers/vosdroits/F34982
- Le titre du décret d'application de L224-40 (5 %) n'a pas été relu ; service-public seul fait foi ici.
- Affirmations d'analyse sans source (posture éditoriale) : « trois fonds labellisés ne permettent pas de construire un portefeuille diversifié », « le non coté : information parfois moins standardisée ».

## 3. placement-ethique-solidaire-fonds-90-10-livrets — Publiable après validation humaine

Corrections faites (12) :
1. « 60 % des fonds solidaires portent un autre label, soit 40 % sans autre label » : l'échantillon FAIR = 47 fonds **tous labellisés Finansol** ; les « autres labels » incluent CIES et Relance (18 fonds ISR sur 47 seulement) → reformulé (échantillon, 4 labels, pas de « 40 % » dérivé) + rappel que l'étude dit qu'un fonds solidaire n'a pas d'obligation d'intégrer des critères ESG ni le Label ISR. Source : https://www.finance-fair.org/sites/default/files/2025-12/FAIR_Etude85-15_WEB.pdf (p. 5, 11)
2. « encours totaux 20,6 Md€ fin 2024 » : la date « fin 2024 » n'est pas dans l'étude (elle date l'échantillon, pas l'estimation de 20,6 Md€) → date supprimée, « des fonds 85/15 en France ».
3. « la poche solidaire ne peut être investie que dans ESUS ou véhicules assimilés » → « est investie dans … » (exclusivité non démontrée pour L214-164).
4. Liste ESUS du Trésor « mise à jour chaque année » : la page affiche « Liste des agréments ESUS 2024, publiée le 31/01/2025, dernière mise à jour 24/07/2025 » → « par millésime : vérifiez l'année de la liste consultée ».
5. Livret solidaire : « taux libre, souvent sans avantage sur un livret classique » (généralisation non sourcée) → « taux fixé librement par la banque ».
6. Livret de partage : « impact plus faible que l'investissement en capital » (opinion non sourcée) → « l'impact se limite à la part donnée ».
7. FAQ : « un PEE bloque en général l'épargne plusieurs années » → « indisponible pendant cinq ans, sauf cas de déblocage anticipé » (service-public F2141) ; livret « oui » → « en principe oui, sous réserve des conditions du produit ».
8. « Dix minutes suffisent » (durée non vérifiable) → « Trois vérifications suffisent ».
9. « un produit sans label ne présente aucune garantie équivalente » → « n'offre pas cette garantie de méthode ».
10. Lien FGDR anglais → https://www.garantiedesdepots.fr/fr (100 000 € par client et par établissement confirmé).
11. Conclusion : libellés de jargon « Résolution / Rappel / Prochaine étape / Réintroduction » supprimés au profit de lead-ins naturels.
Vérifiés OK : L131-1-2 et L214-164 (5-15 %, en vigueur 01/01/2025, loi 2024-537), L3332-17-1 (7x / 10x SMIC, non-cotation, impact sur le compte de résultat), FAIR (47 fonds = 46 %, 6,2 %, 16,3 Md€, FPS investisseurs qualifiés, liquidités 27,1 %, assimilation à 50 %, exclusions du label depuis 01/01/2025), FAIR épargne de partage (25 %), F2368 (LDDS), F426 (66 % / 20 % / 75 % plafonné), BOFiP (§450 et §470, document actif).

À valider par un humain :
- Étude FAIR, source unique (association porteuse du label, pas une autorité) pour 6,2 %, 46 %, 20,6/16,3 Md€, 60 % de labels croisés, exclusions Finansol ; le règlement du label (juillet 2025) n'a pas pu être lu. https://www.finance-fair.org/fr/connaitre-le-label-finansol
- BOFiP du 20/12/2019 : ne traite que du PFL 5 % ; utilisé seulement pour « peuvent ouvrir droit » à la réduction art. 200 et la convention à la souscription ; confirmer que rien n'a changé depuis le PFU. https://bofip.impots.gouv.fr/bofip/3743-PGP.html/identifiant=BOI-RPPM-RCM-30-10-20-30-20191220
- « Un fonds solidaire suit la fiscalité de son enveloppe, sans régime propre » : logique mais non sourcée (hors IR-PME/souscription directe).
- « Le livret solidaire fléché bénéficie de la garantie des dépôts » : vrai pour un dépôt bancaire classique, à confirmer produit par produit (colonne « Votre capital »).
- Incohérence hors périmètre : `label-finansol-finance-solidaire`, `livrets-epargne-solidaire-alternative-livret-a`, probablement `assurance-vie-isr-guide-2026` et `investir-ethique-petit-budget` affichent encore « 5 à 10 % » (texte en vigueur : 5-15 %).
- Page DG Trésor ESUS : WebFetch en erreur 500 (lu par curl) ; re-contrôler https://www.tresor.economie.gouv.fr/banque-assurance-finance/finance-sociale-et-solidaire/liste-nationale-agrements-esus

## 4. comment-choisir-conseiller-investissement-ethique-questions — Publiable après validation humaine

Corrections faites (9) :
1. Médiateur de l'AMF : « ne traite ni l'assurance, … » → « ni l'assurance vie, ni la banque, ni la fiscalité » (FAQ et corps ; la page dit « life insurance »). https://www.amf-france.org/en/amf-ombudsman/how-mediation-works/what-ombudsmans-remit
2. FAQ renonciation : le prolongement du délai relève de **L132-5-2** (non de L132-5-1 cité comme source) → citations L132-5-1 et L132-5-2 ajoutées, « peut être prolongé » → « est prolongé ».
3. Médiation de l'Assurance : « une fois passés deux mois » → réclamation écrite « de plus de deux mois et de moins d'un an » (formulation de la page officielle), FAQ et corps.
4. L541-8-1 (CIF « indépendant ») : ajout de la contrepartie du mot (refus des rémunérations de tiers, sauf reversement intégral au client) — lue sur deux sources concordantes ; sans elle, « indépendant » se lisait comme compatible avec commissions.
5. Orientations ESMA : ajout de « pour le conseil en instruments financiers » (les orientations visent MIF 2, pas la DDA).
6. A.522-2 : « service de recommandation, au sens du code » → « service de recommandation personnalisée », terme employé par l'arrêté (terme réglementaire explicité comme tel).
7. « La rémunération de notre propre cabinet se lit … sur la page tarifs » dans le corps (avantage commercial) → supprimé ; renvoi /tarifs déplacé dans la 4R en une parenthèse (la page /cgp-investissement-responsable traite bien de la rémunération).
8. Mention finale « références légales ont été relues » (affirmation invérifiable) → « sont citées à la date de rédaction (28 septembre 2026) ».
Vérifiés OK : ORIAS 72 666 au 31/12/2025 ; note ORIAS 20220501 (15 h/an non contrôlées, exclusivité agent général / courtier, encaissement de fonds, honorabilité/RCP/garantie financière) ; L521-2 ; L522-5 (v. 24/10/2024) ; A.522-2 (4 ans / 2 ans, en vigueur 17/06/2024) ; L132-5-1 (30 jours calendaires révolus) ; document ACPR-AMF (PDF daté 13/11/2025, « ≈ 95 % », « proportion significative non conforme », neutre si « non », ISR/Greenfin « semblent pouvoir… », pratiques nuisibles) ; ESMA35-43-3172 (23/09/2022) ; guide AMF du DIC.

À valider par un humain :
- Textes L541-8-1, L521-2, L522-5, A.522-2, L132-5-1 lus via résumés (Légifrance rendu par JavaScript, non lisible en brut) ; relire les alinéas exacts. https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035043376 (surtout « lettre de mission signée par les deux parties », « nature juridique des relations avec les promoteurs », refus des rémunérations de tiers).
- Note ORIAS de mai 2022 : vérifier qu'aucune règle citée n'a changé (15 h, exclusivité, RCP). https://www.orias.fr
- Médiation de l'Assurance : la page ne dit pas si une réponse du professionnel avant deux mois permet de saisir plus tôt ; le texte reprend la règle de la page telle quelle. https://www.mediation-assurance.org/la-mediation-etape-par-etape/
- Le libellé « service de recommandation personnalisée » (A.522-2) est un terme réglementaire ; à confirmer que la ligne éditoriale l'accepte ici.
- 13 URL externes distinctes (au-delà de 1-3) : maintenues car chaque fait réglementaire est sourcé à côté de l'affirmation ; alléger si le plafond doit être strict.
