# Mise à jour des données de fonds, frais et fiscalité — checklist

> Même mécanisme que sur les autres sites du réseau : un fichier source de
> vérité par domaine, daté et sourcé, révisé à cadence fixe.
> **Ne jamais toucher au moteur (`engine.ts`, `fiscalite.ts`) pour une
> mise à jour de chiffres.**

## Cadences

| Domaine | Fichier | Cadence | Déclencheur |
|---|---|---|---|
| VL, performances, SRI des fonds | `src/lib/simulateur-placements/fonds.ts` | **Trimestrielle** | Factsheets sociétés de gestion / reporting SFDR |
| Portefeuilles types (poids, indicateurs, backtests) | `src/lib/simulateur-placements/profils.ts` | Trimestrielle | Fiche d'allocation du cabinet |
| Frais des contrats | `src/lib/simulateur-placements/contrats.ts` | À chaque renégociation / avenant | Confirmation écrite du cabinet |
| Fiscalité, PS, abattements, rendements par défaut | `src/lib/simulateur-placements/hypotheses.ts` | **Annuelle** (millésime, après LF/LFSS) | Loi de finances, BOFiP |
| Labels et critères (décodeur) | `src/routes/outils.decodeur-label.tsx` | Semestrielle | Référentiels officiels des labels |

## Données actuellement en attente du cabinet (juillet 2026)

- [ ] **Liste exacte des supports ISR/SFDR disponibles** dans les contrats
      Patrimoine Vie Plus (Suravenir) et Version Absolue 2 (Spirica) —
      `fonds.ts` est volontairement VIDE tant qu'elle manque : ne rien
      inventer.
- [ ] Pour chaque support : ISIN, classification SFDR relevée sur le
      document réglementaire, labels détenus (avec date de vérification),
      SRI, devise, VL + date, lien DIC.
- [ ] Allocations des trois profils types (prudent/équilibré/dynamique) +
      indicateurs et backtest s'ils existent — `profils.ts` affiche « en
      cours de validation » tant qu'elles manquent.
- [ ] Caractère ISR éventuel du fonds en euros de chaque contrat (fonds
      euros « vert » ou classique).
- [ ] Confirmation que la grille de frais du réseau (brief §2.4) s'applique
      telle quelle à ce site — reprise par défaut en attendant.
- [ ] Gestion du fonds euros PVP (0,6 % repris de la simulation BIG) — à
      confirmer.
- [ ] Intitulé commercial exact du PER distribué par Vie Plus.
- [ ] Convention « seuil 300 k€ couple » du simulateur (héritée du réseau,
      alerte affichée) — à confirmer ou passer à l'appréciation par assuré.

## Checklist trimestrielle (fonds & profils) — une fois l'univers fourni

1. Exporter les factsheets / le reporting SFDR à jour de chaque support.
2. Dans `fonds.ts` : VL + `vlDate`, performances, SRI si changé, statut des
   labels revérifié ; **mettre à jour `DONNEES_FONDS_MAJ`** (affiché dans l'UI).
3. Dans `profils.ts` : poids, indicateurs ; vérifier que chaque profil
   totalise 100 % (`poidsTotalPct` — l'UI affiche un ⚠ sinon).
4. Statuer chaque « À VALIDER » possible : une donnée confirmée par écrit
   passe en « SOURCÉ » avec la référence dans `source`.
5. `bun test src/lib/simulateur-placements` puis relecture visuelle de
   `/outils/portefeuilles-types` et `/outils/simulateur`.

## Checklist annuelle (hypotheses.ts)

1. Après publication LF/LFSS : vérifier PS (17,2 / 18,6), PFU, PFO,
   abattements, TMI proposées.
2. Revalider les rendements par défaut UC / fonds euros avec le cabinet.
3. Mettre à jour `HYPOTHESES_MAJ`, re-dater les sources, adapter les tests
   si un taux a changé.
