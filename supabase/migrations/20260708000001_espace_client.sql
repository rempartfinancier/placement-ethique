-- ============================================================================
-- Espace client V1 — placement-ethique.fr
--
-- Principe non négociable, encodé EN BASE (pas seulement dans l'UI) :
-- pré-souscription ≠ souscription. Aucun chemin, même via le service role ou
-- le dashboard Supabase, ne permet d'atteindre un statut engageant
-- ('signature_en_cours', 'finalise') sans être passé par la recommandation
-- individualisée formalisée du conseiller ('recommandation_transmise').
--
-- Côté client (rôle authenticated), les seules transitions possibles sont :
--   brouillon  → transmis     (transmission de la demande — non engageante)
--   brouillon  → sans_suite   (abandon d'un brouillon)
--   transmis / echange_planifie / recommandation_transmise → sans_suite
--     (retrait de la demande, à tout moment avant signature)
-- Tout le reste est réservé au conseiller.
-- ============================================================================

-- ────────────────────────────────────────────────────────────────────────────
-- Enums
-- ────────────────────────────────────────────────────────────────────────────

CREATE TYPE public.dossier_statut AS ENUM (
  'brouillon',                -- rien n'est transmis, modifiable/supprimable
  'transmis',                 -- demande transmise au cabinet — PAS une souscription
  'echange_planifie',         -- échange conseiller à venir (rappel ou RDV)
  'recommandation_transmise', -- recommandation individualisée écrite remise
  'signature_en_cours',       -- ENGAGEANT — documents officiels du partenaire, hors espace
  'finalise',                 -- ENGAGEANT — souscription confirmée par le conseiller
  'sans_suite'                -- clos sans souscription
);

-- Six pistes sélectionnables, chacune correspondant terme à terme à une
-- section de /placements (page publique, sourcée). Volontairement ABSENT de
-- cet enum (donc impossible à stocker dans un dossier de pré-souscription,
-- quelle que soit l'UI) :
--   - l'immobilier en direct (achat financé à crédit, travaux, notaire) :
--     présentation informative uniquement sur /espace/nouveau, aucun flux
--     structuré comparable aux autres pistes (pas de bulletin de souscription).
CREATE TYPE public.produit_categorie AS ENUM (
  'actions_etf_isr',
  'obligations_vertes',
  'epargne_solidaire',
  'scpi_immobilier_durable',
  'metaux_precieux',
  'av_per_enveloppes'
);

CREATE TYPE public.type_piece AS ENUM (
  'piece_identite',
  'justificatif_domicile',
  'avis_imposition',
  'releve_situation',
  'autre'
);

CREATE TYPE public.consentement_categorie AS ENUM (
  'donnees_contact',
  'donnees_patrimoniales',
  'pieces_justificatives',
  'partage_conseiller'
);

CREATE TYPE public.dossier_event_type AS ENUM (
  'creation',
  'changement_statut',
  'document_ajoute',
  'document_supprime'
);

-- ────────────────────────────────────────────────────────────────────────────
-- Tables
-- ────────────────────────────────────────────────────────────────────────────

CREATE TABLE public.profiles (
  user_id    UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  prenom     TEXT,
  nom        TEXT,
  telephone  TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.dossiers (
  id                          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                     UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  statut                      public.dossier_statut NOT NULL DEFAULT 'brouillon',
  titre                       TEXT NOT NULL DEFAULT 'Mon projet',
  objectif                    TEXT,
  horizon                     TEXT,
  montant_tranche             TEXT,
  -- Situation déclarative saisie par le client (tranches, jamais de montants
  -- exacts en V1). Validée côté serveur par zod ; JSONB pour itérer sans
  -- migration à chaque champ.
  situation                   JSONB NOT NULL DEFAULT '{}'::jsonb,
  produits                    public.produit_categorie[] NOT NULL DEFAULT '{}',
  -- Accusés de lecture des mises en garde produit (SCPI illiquidité, métaux
  -- précieux hors cadre MIF2, etc.) :
  -- { "scpi_immobilier_durable": { "version": "2026-07.1", "accepte_le": "…" } }
  mises_en_garde              JSONB NOT NULL DEFAULT '{}'::jsonb,
  -- Horodatage des consentements RGPD par catégorie (le détail versionné est
  -- dans public.consentements ; ici le trigger vérifie leur présence avant
  -- toute transmission).
  consentement_contact_at     TIMESTAMPTZ,
  consentement_patrimoine_at  TIMESTAMPTZ,
  consentement_pieces_at      TIMESTAMPTZ,
  consentement_partage_at     TIMESTAMPTZ,
  transmitted_at              TIMESTAMPTZ,
  retrait_motif               TEXT,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX dossiers_user_id_idx ON public.dossiers (user_id, updated_at DESC);

-- Journal append-only, alimenté uniquement par triggers (aucune policy INSERT
-- pour authenticated) : c'est la trace documentée du parcours.
CREATE TABLE public.dossier_events (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dossier_id  UUID NOT NULL REFERENCES public.dossiers (id) ON DELETE CASCADE,
  type        public.dossier_event_type NOT NULL,
  de_statut   public.dossier_statut,
  vers_statut public.dossier_statut,
  detail      TEXT,
  acteur      TEXT NOT NULL DEFAULT 'systeme',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX dossier_events_dossier_idx ON public.dossier_events (dossier_id, created_at DESC);

CREATE TABLE public.documents (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dossier_id    UUID NOT NULL REFERENCES public.dossiers (id) ON DELETE CASCADE,
  user_id       UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  type_piece    public.type_piece NOT NULL,
  storage_path  TEXT NOT NULL UNIQUE,
  nom_fichier   TEXT NOT NULL,
  taille_octets BIGINT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX documents_dossier_idx ON public.documents (dossier_id);

-- Registre de consentements RGPD : append-only, une ligne par consentement
-- donné, avec la version et le libellé exact affiché au moment du clic.
CREATE TABLE public.consentements (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  dossier_id UUID REFERENCES public.dossiers (id) ON DELETE SET NULL,
  categorie  public.consentement_categorie NOT NULL,
  version    TEXT NOT NULL,
  libelle    TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX consentements_user_idx ON public.consentements (user_id, created_at DESC);

-- Un même consentement (dossier, catégorie, version) ne peut exister qu'une
-- fois : rend le registre idempotent en cas de re-essai de transmission.
-- (NULLs distincts : les consentements hors dossier restent possibles.)
ALTER TABLE public.consentements
  ADD CONSTRAINT consentements_dossier_categorie_version_key
  UNIQUE (dossier_id, categorie, version);

-- ────────────────────────────────────────────────────────────────────────────
-- Fonctions & triggers
-- ────────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER dossiers_updated_at
  BEFORE UPDATE ON public.dossiers
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Un profil par compte, créé automatiquement à l'inscription.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id) VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ─── LE garde-fou central ───────────────────────────────────────────────────
-- Valide toute création et toute transition de statut. S'applique à TOUS les
-- rôles : les invariants "engageants" tiennent même pour le service role et
-- le dashboard.
CREATE OR REPLACE FUNCTION public.enforce_dossier_transition()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  is_client BOOLEAN := (auth.role() = 'authenticated');
  produit_risque public.produit_categorie;
BEGIN
  -- À la création : un dossier naît toujours en amont du parcours — jamais
  -- directement dans un statut engageant, quel que soit le rôle.
  IF TG_OP = 'INSERT' THEN
    IF NEW.statut IN ('signature_en_cours', 'finalise') THEN
      RAISE EXCEPTION 'Création interdite : un dossier ne peut pas naître en statut engageant (%) — la souscription exige le parcours complet.', NEW.statut;
    END IF;
    IF is_client AND NEW.statut <> 'brouillon' THEN
      RAISE EXCEPTION 'Création interdite : un dossier client démarre toujours en brouillon.';
    END IF;
    RETURN NEW;
  END IF;

  -- Invariants universels (client, conseiller, service role, dashboard) :
  -- la signature ne peut JAMAIS précéder la recommandation formalisée.
  IF NEW.statut = 'signature_en_cours' AND OLD.statut IS DISTINCT FROM 'recommandation_transmise'
     AND OLD.statut IS DISTINCT FROM 'signature_en_cours' THEN
    RAISE EXCEPTION 'Transition interdite : la souscription ne peut être engagée qu''après une recommandation formalisée (recommandation_transmise → signature_en_cours).';
  END IF;

  IF NEW.statut = 'finalise' AND OLD.statut IS DISTINCT FROM 'signature_en_cours'
     AND OLD.statut IS DISTINCT FROM 'finalise' THEN
    RAISE EXCEPTION 'Transition interdite : une souscription ne peut être finalisée qu''après la phase de signature (signature_en_cours → finalise).';
  END IF;

  IF NOT is_client THEN
    -- Conseiller / service role : libre pour le reste (corrections comprises),
    -- les deux invariants ci-dessus restant infranchissables.
    RETURN NEW;
  END IF;

  -- ── Règles côté client ─────────────────────────────────────────────────
  IF OLD.statut = 'brouillon' THEN
    IF NEW.statut NOT IN ('brouillon', 'transmis', 'sans_suite') THEN
      RAISE EXCEPTION 'Transition interdite : depuis un brouillon, vous pouvez uniquement transmettre la demande ou la clore.';
    END IF;

    IF NEW.statut = 'transmis' THEN
      -- Une transmission sans consentements explicites n'existe pas.
      IF NEW.consentement_contact_at IS NULL
         OR NEW.consentement_patrimoine_at IS NULL
         OR NEW.consentement_partage_at IS NULL THEN
        RAISE EXCEPTION 'Transmission impossible : les consentements RGPD (contact, situation patrimoniale, partage conseiller) doivent être donnés explicitement.';
      END IF;
      IF COALESCE(array_length(NEW.produits, 1), 0) = 0 THEN
        RAISE EXCEPTION 'Transmission impossible : sélectionnez au moins une piste de placement.';
      END IF;
      -- Le registre RGPD doit exister AVANT la transmission — même via un
      -- appel PostgREST direct qui court-circuiterait l'UI.
      IF (SELECT count(DISTINCT categorie) FROM public.consentements c
          WHERE c.dossier_id = NEW.id
            AND c.user_id = NEW.user_id
            AND c.categorie IN ('donnees_contact', 'donnees_patrimoniales', 'partage_conseiller')) < 3 THEN
        RAISE EXCEPTION 'Transmission impossible : le registre des consentements (contact, patrimoine, partage) doit être constitué avant la transmission.';
      END IF;
      -- Les catégories sous mise en garde (SCPI : illiquidité/capital ;
      -- métaux précieux : hors cadre MIF2) exigent un accusé de lecture archivé.
      FOREACH produit_risque IN ARRAY NEW.produits LOOP
        IF produit_risque IN ('scpi_immobilier_durable', 'metaux_precieux')
           AND NOT (NEW.mises_en_garde ? produit_risque::text) THEN
          RAISE EXCEPTION 'Transmission impossible : la mise en garde « % » doit être lue et acceptée.', produit_risque;
        END IF;
      END LOOP;
      IF NEW.transmitted_at IS NULL THEN
        NEW.transmitted_at := now();
      END IF;
    END IF;

    RETURN NEW;
  END IF;

  -- Hors brouillon, la seule action client est le retrait (→ sans_suite),
  -- possible tant que rien n'est signé. Aucun autre champ ne doit bouger.
  IF OLD.statut IN ('transmis', 'echange_planifie', 'recommandation_transmise')
     AND NEW.statut = 'sans_suite' THEN
    IF to_jsonb(NEW) - 'statut' - 'retrait_motif' - 'updated_at'
       IS DISTINCT FROM to_jsonb(OLD) - 'statut' - 'retrait_motif' - 'updated_at' THEN
      RAISE EXCEPTION 'Retrait impossible : un dossier transmis ne peut plus être modifié, seulement retiré.';
    END IF;
    RETURN NEW;
  END IF;

  -- Exception unique hors retrait : ACCORDER (jamais révoquer) le consentement
  -- pièces après transmission, sans toucher à rien d'autre. Ce n'est pas une
  -- modification de la demande, c'est un consentement supplémentaire.
  IF OLD.statut IN ('transmis', 'echange_planifie', 'recommandation_transmise')
     AND NEW.statut = OLD.statut
     AND OLD.consentement_pieces_at IS NULL
     AND NEW.consentement_pieces_at IS NOT NULL
     AND (to_jsonb(NEW) - 'consentement_pieces_at' - 'updated_at')
         = (to_jsonb(OLD) - 'consentement_pieces_at' - 'updated_at') THEN
    RETURN NEW;
  END IF;

  RAISE EXCEPTION 'Action impossible depuis votre espace : ce changement (% → %) relève de votre conseiller, après votre échange.', OLD.statut, NEW.statut;
END;
$$;

CREATE TRIGGER dossiers_enforce_transition
  BEFORE INSERT OR UPDATE ON public.dossiers
  FOR EACH ROW EXECUTE FUNCTION public.enforce_dossier_transition();

-- Journalisation automatique (SECURITY DEFINER : les events ne passent pas
-- par une policy INSERT, ils sont générés par le système uniquement).
CREATE OR REPLACE FUNCTION public.log_dossier_event()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  acteur_nom TEXT := CASE WHEN auth.role() = 'authenticated' THEN 'client' ELSE 'conseiller' END;
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.dossier_events (dossier_id, type, vers_statut, acteur)
    VALUES (NEW.id, 'creation', NEW.statut, acteur_nom);
    RETURN NEW;
  END IF;

  IF OLD.statut IS DISTINCT FROM NEW.statut THEN
    INSERT INTO public.dossier_events (dossier_id, type, de_statut, vers_statut, detail, acteur)
    VALUES (NEW.id, 'changement_statut', OLD.statut, NEW.statut, NEW.retrait_motif, acteur_nom);
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER dossiers_log_event
  AFTER INSERT OR UPDATE ON public.dossiers
  FOR EACH ROW EXECUTE FUNCTION public.log_dossier_event();

CREATE OR REPLACE FUNCTION public.log_document_event()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  acteur_nom TEXT := CASE WHEN auth.role() = 'authenticated' THEN 'client' ELSE 'conseiller' END;
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.dossier_events (dossier_id, type, detail, acteur)
    VALUES (NEW.dossier_id, 'document_ajoute', NEW.type_piece::text || ' — ' || NEW.nom_fichier, acteur_nom);
    RETURN NEW;
  END IF;

  -- Si le dossier est en cours de suppression (cascade), ne rien journaliser.
  IF EXISTS (SELECT 1 FROM public.dossiers WHERE id = OLD.dossier_id) THEN
    INSERT INTO public.dossier_events (dossier_id, type, detail, acteur)
    VALUES (OLD.dossier_id, 'document_supprime', OLD.type_piece::text || ' — ' || OLD.nom_fichier, acteur_nom);
  END IF;
  RETURN OLD;
END;
$$;

CREATE TRIGGER documents_log_event
  AFTER INSERT OR DELETE ON public.documents
  FOR EACH ROW EXECUTE FUNCTION public.log_document_event();

-- ────────────────────────────────────────────────────────────────────────────
-- Grants & RLS
-- ────────────────────────────────────────────────────────────────────────────

GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.dossiers TO authenticated;
GRANT SELECT ON public.dossier_events TO authenticated;
GRANT SELECT, INSERT, DELETE ON public.documents TO authenticated;
-- Grant par colonnes : le client ne peut pas fournir id/created_at — le
-- registre n'est donc pas antidatable depuis un token utilisateur.
GRANT SELECT ON public.consentements TO authenticated;
GRANT INSERT (user_id, dossier_id, categorie, version, libelle) ON public.consentements TO authenticated;
GRANT ALL ON public.profiles, public.dossiers, public.dossier_events, public.documents, public.consentements TO service_role;

ALTER TABLE public.profiles       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dossiers       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dossier_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consentements  ENABLE ROW LEVEL SECURITY;

-- profiles : chacun le sien.
CREATE POLICY "Own profile select" ON public.profiles
  FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Own profile insert" ON public.profiles
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Own profile update" ON public.profiles
  FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

-- dossiers : un client ne crée que des brouillons ; les transitions fines
-- sont arbitrées par le trigger enforce_dossier_transition.
CREATE POLICY "Own dossiers select" ON public.dossiers
  FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Own dossiers insert as draft" ON public.dossiers
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid() AND statut = 'brouillon');
CREATE POLICY "Own dossiers update" ON public.dossiers
  FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "Own draft delete" ON public.dossiers
  FOR DELETE TO authenticated USING (user_id = auth.uid() AND statut = 'brouillon');

-- dossier_events : lecture seule (écriture réservée aux triggers).
CREATE POLICY "Own dossier events select" ON public.dossier_events
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.dossiers d
    WHERE d.id = dossier_id AND d.user_id = auth.uid()
  ));

-- documents : dépôt possible uniquement sur un dossier transmis (consentement
-- pièces donné) et avant toute phase de signature ; suppression idem.
CREATE POLICY "Own documents select" ON public.documents
  FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Own documents insert" ON public.documents
  FOR INSERT TO authenticated
  WITH CHECK (
    user_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.dossiers d
      WHERE d.id = dossier_id
        AND d.user_id = auth.uid()
        AND d.statut IN ('transmis', 'echange_planifie', 'recommandation_transmise')
        AND d.consentement_pieces_at IS NOT NULL
    )
  );
CREATE POLICY "Own documents delete" ON public.documents
  FOR DELETE TO authenticated
  USING (
    user_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.dossiers d
      WHERE d.id = dossier_id
        AND d.statut IN ('transmis', 'echange_planifie', 'recommandation_transmise')
    )
  );

-- consentements : append-only côté client (ni update ni delete — registre),
-- et uniquement rattachables à SES propres dossiers.
CREATE POLICY "Own consents select" ON public.consentements
  FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Own consents insert" ON public.consentements
  FOR INSERT TO authenticated
  WITH CHECK (
    user_id = auth.uid()
    AND (
      dossier_id IS NULL
      OR EXISTS (
        SELECT 1 FROM public.dossiers d
        WHERE d.id = dossier_id AND d.user_id = auth.uid()
      )
    )
  );

-- ────────────────────────────────────────────────────────────────────────────
-- Storage : bucket privé pour les pièces justificatives
-- Chemin imposé : {user_id}/{dossier_id}/{fichier}
-- ────────────────────────────────────────────────────────────────────────────

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'pieces-dossiers',
  'pieces-dossiers',
  false,
  10485760, -- 10 Mo
  ARRAY['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']
)
ON CONFLICT (id) DO NOTHING;

-- Les policies storage reflètent celles de public.documents : dépôt possible
-- uniquement sur SON dossier, transmis, avec consentement pièces — même en
-- appelant l'API storage directement, sans passer par l'UI.
CREATE POLICY "Pieces upload own folder" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'pieces-dossiers'
    AND (storage.foldername(name))[1] = auth.uid()::text
    AND EXISTS (
      SELECT 1 FROM public.dossiers d
      WHERE d.id::text = (storage.foldername(name))[2]
        AND d.user_id = auth.uid()
        AND d.statut IN ('transmis', 'echange_planifie', 'recommandation_transmise')
        AND d.consentement_pieces_at IS NOT NULL
    )
  );

CREATE POLICY "Pieces read own folder" ON storage.objects
  FOR SELECT TO authenticated
  USING (
    bucket_id = 'pieces-dossiers'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Pieces delete own folder" ON storage.objects
  FOR DELETE TO authenticated
  USING (
    bucket_id = 'pieces-dossiers'
    AND (storage.foldername(name))[1] = auth.uid()::text
    AND EXISTS (
      SELECT 1 FROM public.dossiers d
      WHERE d.id::text = (storage.foldername(name))[2]
        AND d.user_id = auth.uid()
        AND d.statut IN ('transmis', 'echange_planifie', 'recommandation_transmise')
    )
  );
