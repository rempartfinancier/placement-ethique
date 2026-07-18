# GO-LIVE-CHECKLIST — placement-ethique.fr

Actions qui nécessitent une identité humaine, un moyen de paiement ou une autorité
de signature. **Rien d'autre ne doit figurer ici** : tout le reste du site est
construit et fonctionnel.

1. [ ] **Nom de domaine** — acheter `placement-ethique.fr` et pointer le DNS vers
       Vercel (enregistrements exacts fournis par Vercel à l'ajout du domaine sur
       le projet). En attendant : déployer sur une URL de preview Vercel.
2. [ ] **Projet Supabase** — créer le projet (région UE), copier les 6 variables
       dans `.env` local + variables d'environnement Vercel (`SUPABASE_URL`,
       `SUPABASE_PROJECT_ID`, `SUPABASE_PUBLISHABLE_KEY` + équivalents `VITE_*`),
       appliquer les migrations de `supabase/migrations/` dans l'ordre, activer
       l'auth email OTP/magic link, ajouter `https://placement-ethique.fr/espace`
       aux Redirect URLs. ⚠ L'espace client (`/espace/*`) est codé mais **non
       opérationnel** tant que cette étape n'est pas faite — ne pas communiquer
       dessus avant vérification de bout en bout (leçon du site halal, dont le
       projet Supabase s'est révélé inexistant en production).
3. [ ] **Google Tag Manager** — créer un conteneur dédié à ce site et remplacer
       `GTM-XXXXXXX` dans `src/components/CookieConsent.tsx`.
4. [ ] **Brevo** (ou équivalent) — compte/clé API pour les emails de résultats de
       simulateurs et la newsletter.
5. [ ] **iClosed** — créer un lien de réservation dédié à placement-ethique.fr et
       renseigner `WIDGET_URL` dans `src/components/IClosedWidget.tsx` (ne pas
       réutiliser le lien EpargnePlurielleAJ du site halal). En attendant, la page
       contact affiche le formulaire email seul.
6. [ ] **Boîte email** `contact@placement-ethique.fr` fonctionnelle.
7. [ ] **Téléphone** — décider : mutualiser la ligne du réseau ou ligne dédiée,
       puis l'ajouter dans SiteFooter, /contact et /mentions-legales.
8. [x] ~~Photos des conseillers~~ — copiées depuis le site de référence (mêmes
       personnes) ; remplacer si de nouvelles photos sont souhaitées.
9. [ ] **Relecture légale finale par Fabienne** (convention réseau EXP Capital) —
       pages /mentions-legales, /confidentialite, /tarifs, footer.
10. [x] ~~Siège social EXP Capital~~ — adresse communiquée et intégrée dans
        /mentions-legales : 25 bis rue de la Côte, 78220 Viroflay. Note : elle
        manquait aussi dans la source Notion du réseau — mise à jour de cette
        source hors périmètre de ce dépôt, à vérifier séparément.
11. [ ] **Données fonds ISR** — fournir la liste des supports ISR/SFDR disponibles
        dans les contrats Vie Plus / Version Absolue 2 + fiches d'allocation des
        portefeuilles types (cf. `docs/donnees-fonds-mise-a-jour.md`) ; tant
        qu'elle manque, /outils/portefeuilles-types affiche « en cours de
        validation » (aucun fonds inventé).
12. [ ] **Favicons** — les fichiers actuels sont des placeholders ; générer un jeu
        (favicon.ico, 32x32, apple-touch-icon 180x180) à partir du monogramme « P. »
        grenat une fois l'identité validée.
