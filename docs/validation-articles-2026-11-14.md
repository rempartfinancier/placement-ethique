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
