-- ============================================================================
-- Espace client V2 — esquisse d'allocation et créneau de rappel.
--
-- `allocation` : esquisse de travail saisie par le client (contrat pressenti,
-- supports, poids indicatifs). Ce N'EST PAS une instruction d'investissement :
-- l'allocation finale est établie avec le conseiller, et la souscription
-- reste soumise au parcours complet (recommandation écrite puis signature
-- chez le partenaire) — invariants du trigger enforce_dossier_transition.
-- Comme toutes les colonnes du dossier, elle est gelée après transmission
-- (la comparaison to_jsonb du trigger couvre automatiquement ces colonnes).
--
-- ⚠ L'univers de fonds ISR référencés sur les contrats n'est pas encore
-- communiqué par le cabinet (src/lib/simulateur-placements/fonds.ts est vide
-- côté application) : cette colonne peut donc rester à son défaut ('{}') pour
-- tous les dossiers tant que le registre n'est pas alimenté — c'est l'état
-- attendu, pas une anomalie.
--
-- `creneau_rappel` : préférence de rappel exprimée par le client.
-- ============================================================================

ALTER TABLE public.dossiers
  ADD COLUMN allocation JSONB NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN creneau_rappel TEXT;
