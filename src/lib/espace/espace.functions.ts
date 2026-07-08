import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  brouillonSchema,
  documentSchema,
  profilSchema,
  retraitSchema,
  transmissionSchema,
} from "./schemas";
import { produitsAvecMiseEnGarde, VERSION_MISES_EN_GARDE } from "./catalogue";
import {
  CONSENTEMENTS_PAR_CATEGORIE,
  VERSION_CONSENTEMENTS,
  type ConsentementCategorie,
} from "./consentements";
import {
  fondsProposables,
  resumeAllocation,
  totalPoids,
  type AllocationDossier,
} from "./allocation";

// Server functions de l'espace client. Toutes passent par requireSupabaseAuth :
// le `context.supabase` est un client scoppé RLS à l'utilisateur — même un bug
// ici ne peut pas toucher les dossiers d'un autre compte, ni contourner le
// trigger SQL `enforce_dossier_transition` qui arbitre les statuts.

export const BUCKET_PIECES = "pieces-dossiers";

function emailFromClaims(claims: unknown): string {
  const email = (claims as { email?: unknown })?.email;
  return typeof email === "string" ? email : "";
}

// ── Lectures ────────────────────────────────────────────────────────────────

export const getEspace = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const [profil, dossiers] = await Promise.all([
      context.supabase.from("profiles").select("*").eq("user_id", context.userId).maybeSingle(),
      context.supabase.from("dossiers").select("*").order("updated_at", { ascending: false }),
    ]);
    if (profil.error) throw new Error(profil.error.message);
    if (dossiers.error) throw new Error(dossiers.error.message);
    return {
      email: emailFromClaims(context.claims),
      profil: profil.data,
      dossiers: dossiers.data,
    };
  });

export const getDossierDetail = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ dossierId: z.string().uuid() }))
  .handler(async ({ data, context }) => {
    const dossier = await context.supabase
      .from("dossiers")
      .select("*")
      .eq("id", data.dossierId)
      .maybeSingle();
    if (dossier.error) throw new Error(dossier.error.message);
    if (!dossier.data) throw new Error("Dossier introuvable.");

    const [events, documents] = await Promise.all([
      context.supabase
        .from("dossier_events")
        .select("*")
        .eq("dossier_id", data.dossierId)
        .order("created_at", { ascending: false }),
      context.supabase
        .from("documents")
        .select("*")
        .eq("dossier_id", data.dossierId)
        .order("created_at", { ascending: false }),
    ]);
    if (events.error) throw new Error(events.error.message);
    if (documents.error) throw new Error(documents.error.message);

    return { dossier: dossier.data, events: events.data, documents: documents.data };
  });

export const getHistoriqueConsentements = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("consentements")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data;
  });

// ── Profil ──────────────────────────────────────────────────────────────────

export const upsertProfil = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(profilSchema)
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("profiles")
      .upsert({
        user_id: context.userId,
        prenom: data.prenom ?? null,
        nom: data.nom ?? null,
        telephone: data.telephone ?? null,
      })
      .select()
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

// ── Dossier : brouillon (non engageant, modifiable, supprimable) ────────────

export const sauverBrouillon = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(brouillonSchema)
  .handler(async ({ data, context }) => {
    // L'esquisse d'allocation reste cohérente avec le dossier : uniquement des
    // supports de l'univers cabinet (statut SOURCÉ), rattachés à une piste
    // sélectionnée (donc mise en garde SCPI/métaux précieux lue le cas
    // échéant) et référencés sur le contrat pressenti. Poids total ≤ 100, pas
    // de doublon.
    const lignes = data.allocation.lignes;
    if (lignes.length > 0) {
      const proposables = new Set(
        fondsProposables(data.produits, data.allocation.contratId ?? null).map((f) => f.isin),
      );
      const horsUnivers = lignes.filter((l) => !proposables.has(l.isin));
      if (horsUnivers.length > 0) {
        throw new Error(
          `Supports non proposables pour ce dossier (pistes sélectionnées ou contrat pressenti) : ${horsUnivers.map((l) => l.isin).join(", ")}.`,
        );
      }
      if (new Set(lignes.map((l) => l.isin)).size !== lignes.length) {
        throw new Error("Un même support figure deux fois dans l'esquisse.");
      }
      if (totalPoids(lignes) > 100) {
        throw new Error("Le total des poids de l'esquisse dépasse 100 %.");
      }
    }

    const values = {
      titre: data.titre,
      objectif: data.objectif ?? null,
      horizon: data.horizon ?? null,
      montant_tranche: data.montantTranche ?? null,
      situation: data.situation,
      produits: data.produits,
      allocation: data.allocation,
      creneau_rappel: data.creneauRappel ?? null,
    };

    if (data.dossierId) {
      // Le trigger SQL rejette toute édition d'un dossier qui n'est plus en
      // brouillon — on vérifie ici d'abord pour renvoyer un message propre.
      const existant = await context.supabase
        .from("dossiers")
        .select("statut")
        .eq("id", data.dossierId)
        .maybeSingle();
      if (existant.error) throw new Error(existant.error.message);
      if (!existant.data) throw new Error("Dossier introuvable.");
      if (existant.data.statut !== "brouillon") {
        throw new Error(
          "Ce dossier a été transmis : il ne peut plus être modifié, seulement retiré.",
        );
      }

      const { data: row, error } = await context.supabase
        .from("dossiers")
        .update(values)
        .eq("id", data.dossierId)
        .select()
        .single();
      if (error) throw new Error(error.message);
      return row;
    }

    const { data: row, error } = await context.supabase
      .from("dossiers")
      .insert({ ...values, user_id: context.userId, statut: "brouillon" })
      .select()
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const supprimerBrouillon = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ dossierId: z.string().uuid() }))
  .handler(async ({ data, context }) => {
    // La policy RLS ne permet le DELETE que sur un brouillon appartenant à
    // l'utilisateur — un dossier transmis est insupprimable par construction.
    const { error, count } = await context.supabase
      .from("dossiers")
      .delete({ count: "exact" })
      .eq("id", data.dossierId)
      .eq("statut", "brouillon");
    if (error) throw new Error(error.message);
    if (!count) throw new Error("Seul un brouillon peut être supprimé.");
    return { ok: true };
  });

// ── Dossier : transmission ──────────────────────────────────────────────────
// ÉTAPE SENSIBLE mais NON ENGAGEANTE : transmettre = demander un échange
// documenté, rien de plus. Aucun produit n'est souscrit ici. Les gardes :
//  1. zod : consentements obligatoires littéralement true ;
//  2. ce handler : mises en garde lues pour chaque produit qui l'exige ;
//  3. trigger SQL : consentements horodatés + ≥ 1 produit, sinon rejet en base.

export const transmettreDossier = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(transmissionSchema)
  .handler(async ({ data, context }) => {
    const dossier = await context.supabase
      .from("dossiers")
      .select("*")
      .eq("id", data.dossierId)
      .maybeSingle();
    if (dossier.error) throw new Error(dossier.error.message);
    if (!dossier.data) throw new Error("Dossier introuvable.");
    if (dossier.data.statut !== "brouillon") {
      throw new Error("Ce dossier a déjà été transmis.");
    }
    if (dossier.data.produits.length === 0) {
      throw new Error("Sélectionnez au moins une piste de placement avant de transmettre.");
    }

    // Chaque produit sélectionné qui impose une mise en garde (SCPI
    // illiquidité, métaux précieux hors cadre MIF2…) doit avoir été
    // explicitement lu et accepté — pas de transmission sinon.
    const misesEnGardeRequises = produitsAvecMiseEnGarde(dossier.data.produits);
    const lues = new Set(data.misesEnGardeLues);
    const manquantes = misesEnGardeRequises.filter((p) => !lues.has(p.code));
    if (manquantes.length > 0) {
      throw new Error(
        `Mise en garde non lue pour : ${manquantes.map((p) => p.nom).join(", ")}. Merci de la lire et de l'accepter avant de transmettre.`,
      );
    }

    // Registre RGPD : une ligne par consentement, avec le libellé exact et sa
    // version au moment du clic. Jamais pré-coché — zod a déjà rejeté tout
    // consentement obligatoire manquant.
    const now = new Date().toISOString();
    const categoriesAccordees: ConsentementCategorie[] = [
      "donnees_contact",
      "donnees_patrimoniales",
      "partage_conseiller",
    ];
    if (data.consentements.pieces_justificatives) {
      categoriesAccordees.push("pieces_justificatives");
    }

    const dossierRow = dossier.data;
    const lignesConsentement = categoriesAccordees.map((categorie) => {
      const meta = CONSENTEMENTS_PAR_CATEGORIE.get(categorie);
      return {
        user_id: context.userId,
        dossier_id: dossierRow.id,
        categorie,
        version: VERSION_CONSENTEMENTS,
        libelle: meta?.libelle ?? categorie,
      };
    });
    // Le registre est constitué AVANT le passage en `transmis` — le trigger
    // SQL l'exige. Upsert idempotent (contrainte UNIQUE dossier/catégorie/
    // version) : un re-essai après échec réseau ne crée aucun doublon.
    const consentInsert = await context.supabase.from("consentements").upsert(lignesConsentement, {
      onConflict: "dossier_id,categorie,version",
      ignoreDuplicates: true,
    });
    if (consentInsert.error) throw new Error(consentInsert.error.message);

    const misesEnGardeJson = Object.fromEntries(
      misesEnGardeRequises.map((p) => [
        p.code,
        { version: p.miseEnGarde?.version ?? VERSION_MISES_EN_GARDE, accepte_le: now },
      ]),
    );

    const { data: row, error } = await context.supabase
      .from("dossiers")
      .update({
        statut: "transmis",
        transmitted_at: now,
        mises_en_garde: misesEnGardeJson,
        consentement_contact_at: now,
        consentement_patrimoine_at: now,
        consentement_partage_at: now,
        consentement_pieces_at: data.consentements.pieces_justificatives ? now : null,
      })
      .eq("id", data.dossierId)
      .select()
      .single();
    if (error) throw new Error(error.message);

    // Notifications (conseiller + accusé de réception client) — ne bloquent
    // jamais la transmission elle-même.
    try {
      const profil = await context.supabase
        .from("profiles")
        .select("prenom, nom")
        .eq("user_id", context.userId)
        .maybeSingle();
      const { notifierTransmissionDossier } = await import("./espace.server");
      await notifierTransmissionDossier({
        email: emailFromClaims(context.claims),
        prenom: profil.data?.prenom,
        nom: profil.data?.nom,
        dossierId: row.id,
        titre: row.titre,
        objectif: row.objectif,
        produits: row.produits,
        allocationResume: resumeAllocation(row.allocation as AllocationDossier),
        creneauRappel: row.creneau_rappel,
      });
    } catch (e) {
      console.error("[transmettreDossier] Notification échouée (transmission OK):", e);
    }

    return row;
  });

// ── Dossier : retrait par le client ─────────────────────────────────────────
// Toujours possible avant signature — c'est la contrepartie du caractère non
// engageant de la transmission. Le trigger SQL vérifie que seul le statut
// (et le motif) changent.

export const retirerDossier = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(retraitSchema)
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("dossiers")
      .update({ statut: "sans_suite", retrait_motif: data.motif || "Retiré par le client" })
      .eq("id", data.dossierId)
      .select()
      .single();
    if (error) {
      throw new Error(
        error.message.includes("relève de votre conseiller") || error.message.includes("Transition")
          ? "Ce dossier ne peut plus être retiré depuis l'espace : contactez votre conseiller."
          : error.message,
      );
    }
    return row;
  });

// ── Consentement pièces donné après transmission ────────────────────────────

export const donnerConsentementPieces = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ dossierId: z.string().uuid() }))
  .handler(async ({ data, context }) => {
    const now = new Date().toISOString();

    // L'octroi d'abord (gardé par le trigger SQL et par `.is(null)`), le
    // registre ensuite : pas de ligne de registre si l'octroi échoue, et un
    // double clic / second onglet retombe sur le cas "déjà accordé".
    const { data: row, error } = await context.supabase
      .from("dossiers")
      .update({ consentement_pieces_at: now })
      .eq("id", data.dossierId)
      .is("consentement_pieces_at", null)
      .select()
      .maybeSingle();
    if (error) throw new Error(error.message);

    if (!row) {
      const dejaAccorde = await context.supabase
        .from("dossiers")
        .select("*")
        .eq("id", data.dossierId)
        .maybeSingle();
      if (dejaAccorde.error) throw new Error(dejaAccorde.error.message);
      if (!dejaAccorde.data) throw new Error("Dossier introuvable.");
      if (dejaAccorde.data.consentement_pieces_at) return dejaAccorde.data;
      throw new Error("Le consentement pièces ne peut pas être accordé sur ce dossier en l'état.");
    }

    const meta = CONSENTEMENTS_PAR_CATEGORIE.get("pieces_justificatives");
    const consentInsert = await context.supabase.from("consentements").upsert(
      {
        user_id: context.userId,
        dossier_id: data.dossierId,
        categorie: "pieces_justificatives" as const,
        version: VERSION_CONSENTEMENTS,
        libelle: meta?.libelle ?? "pieces_justificatives",
      },
      { onConflict: "dossier_id,categorie,version", ignoreDuplicates: true },
    );
    if (consentInsert.error) {
      console.error("[donnerConsentementPieces] Registre non inscrit:", consentInsert.error);
    }
    return row;
  });

// ── Documents ───────────────────────────────────────────────────────────────
// Le fichier est déposé par le navigateur directement dans le bucket privé
// (policies storage : dossier {user_id}/… uniquement). Ici on n'enregistre
// que la métadonnée — la policy RLS de `documents` re-vérifie le statut du
// dossier et le consentement pièces.

export const enregistrerDocument = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(documentSchema)
  .handler(async ({ data, context }) => {
    const prefixeAttendu = `${context.userId}/${data.dossierId}/`;
    if (!data.storagePath.startsWith(prefixeAttendu)) {
      throw new Error("Chemin de fichier invalide.");
    }

    const { data: row, error } = await context.supabase
      .from("documents")
      .insert({
        dossier_id: data.dossierId,
        user_id: context.userId,
        type_piece: data.typePiece,
        storage_path: data.storagePath,
        nom_fichier: data.nomFichier,
        taille_octets: data.tailleOctets,
      })
      .select()
      .single();
    if (error) {
      // Métadonnée refusée (statut du dossier, consentement absent…) : on
      // retire le fichier orphelin du bucket pour ne rien conserver sans base
      // légale — et on trace si ce nettoyage échoue à son tour.
      const cleanup = await context.supabase.storage.from(BUCKET_PIECES).remove([data.storagePath]);
      if (cleanup.error) {
        console.error(
          `[enregistrerDocument] Fichier orphelin non nettoyé (${data.storagePath}):`,
          cleanup.error,
        );
      }
      throw new Error(
        "Dépôt refusé : le dépôt de pièces nécessite un dossier transmis (avant signature) et le consentement dédié.",
      );
    }
    return row;
  });

export const supprimerDocument = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ documentId: z.string().uuid() }))
  .handler(async ({ data, context }) => {
    const doc = await context.supabase
      .from("documents")
      .select("*")
      .eq("id", data.documentId)
      .maybeSingle();
    if (doc.error) throw new Error(doc.error.message);
    if (!doc.data) throw new Error("Document introuvable.");

    // Le fichier d'abord, la métadonnée ensuite : si le storage échoue, la
    // ligne reste et l'utilisateur peut réessayer — jamais de fichier orphelin
    // sans référence. (Les policies storage suivent celles de `documents`.)
    const storageRes = await context.supabase.storage
      .from(BUCKET_PIECES)
      .remove([doc.data.storage_path]);
    if (storageRes.error) {
      console.error("[supprimerDocument] Fichier storage non supprimé:", storageRes.error);
      throw new Error(
        "Suppression impossible pour le moment : réessayez, ou contactez votre conseiller.",
      );
    }

    const { error, count } = await context.supabase
      .from("documents")
      .delete({ count: "exact" })
      .eq("id", data.documentId);
    if (error) throw new Error(error.message);
    if (!count) {
      throw new Error(
        "Ce document ne peut plus être supprimé depuis l'espace : contactez votre conseiller.",
      );
    }
    return { ok: true };
  });

// URL de téléchargement temporaire (bucket privé — pas d'URL publique).
export const urlDocument = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ documentId: z.string().uuid() }))
  .handler(async ({ data, context }) => {
    const doc = await context.supabase
      .from("documents")
      .select("storage_path")
      .eq("id", data.documentId)
      .maybeSingle();
    if (doc.error) throw new Error(doc.error.message);
    if (!doc.data) throw new Error("Document introuvable.");

    const signed = await context.supabase.storage
      .from(BUCKET_PIECES)
      .createSignedUrl(doc.data.storage_path, 60 * 5);
    if (signed.error || !signed.data)
      throw new Error("Impossible de générer le lien de téléchargement.");
    return { url: signed.data.signedUrl };
  });
