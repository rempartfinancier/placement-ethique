import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { FileText, Trash2, Download, Upload, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TYPES_PIECES } from "@/lib/espace/schemas";
import { CONSENTEMENTS_PAR_CATEGORIE } from "@/lib/espace/consentements";
import { clientPeutDeposerPieces } from "@/lib/espace/statuts";
import {
  BUCKET_PIECES,
  donnerConsentementPieces,
  enregistrerDocument,
  supprimerDocument,
  urlDocument,
} from "@/lib/espace/espace.functions";

// Dépôt de pièces justificatives — NON ENGAGEANT : transmettre une pièce
// prépare l'échange, elle ne déclenche aucune souscription. Trois verrous :
//  1. le consentement dédié (jamais pré-coché) doit avoir été donné ;
//  2. uniquement sur un dossier transmis, avant toute phase de signature
//     (policies RLS identiques côté base) ;
//  3. bucket privé — les fichiers ne sont accessibles que par leur
//     propriétaire, via URL signée temporaire.

const MAX_OCTETS = 10 * 1024 * 1024;

function nomFichierSur(nom: string): string {
  return nom
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .slice(-120);
}

// MIME déduit de l'extension : beaucoup de navigateurs renvoient un file.type
// vide (HEIC notamment) — or le bucket n'accepte qu'une liste fermée de types.
const MIME_PAR_EXTENSION: Record<string, string> = {
  pdf: "application/pdf",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  heic: "image/heic",
  heif: "image/heif",
};

function mimeDuFichier(file: File): string | null {
  if (file.type && Object.values(MIME_PAR_EXTENSION).includes(file.type)) return file.type;
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  return MIME_PAR_EXTENSION[extension] ?? null;
}

function formatTaille(octets: number | null): string {
  if (!octets) return "";
  if (octets < 1024 * 1024) return `${Math.round(octets / 1024)} Ko`;
  return `${(octets / (1024 * 1024)).toFixed(1)} Mo`;
}

export function PiecesSection({
  dossier,
  documents,
  userId,
  onChanged,
}: {
  dossier: Tables<"dossiers">;
  documents: Tables<"documents">[];
  userId: string;
  onChanged: () => void;
}) {
  const [typePiece, setTypePiece] = useState<string>("piece_identite");
  const [uploading, setUploading] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false); // jamais pré-coché
  const [consentSaving, setConsentSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const consentPieces = useServerFn(donnerConsentementPieces);
  const enregistrer = useServerFn(enregistrerDocument);
  const supprimer = useServerFn(supprimerDocument);
  const obtenirUrl = useServerFn(urlDocument);

  const depotOuvert = clientPeutDeposerPieces(dossier.statut);
  const consentDonne = dossier.consentement_pieces_at !== null;
  const metaConsent = CONSENTEMENTS_PAR_CATEGORIE.get("pieces_justificatives");

  async function handleUpload(file: File) {
    if (file.size > MAX_OCTETS) {
      toast.error("Fichier trop volumineux (10 Mo maximum).");
      return;
    }
    const contentType = mimeDuFichier(file);
    if (!contentType) {
      toast.error("Format non pris en charge : PDF ou image (JPG, PNG, WebP, HEIC).");
      return;
    }
    setUploading(true);
    try {
      const path = `${userId}/${dossier.id}/${Date.now()}-${nomFichierSur(file.name)}`;
      const up = await supabase.storage.from(BUCKET_PIECES).upload(path, file, {
        contentType,
        upsert: false,
      });
      if (up.error) throw new Error(up.error.message);

      await enregistrer({
        data: {
          dossierId: dossier.id,
          typePiece: typePiece as (typeof TYPES_PIECES)[number]["code"],
          storagePath: path,
          nomFichier: file.name.slice(0, 200),
          tailleOctets: file.size,
        },
      });
      toast.success("Pièce déposée. Elle sera examinée lors de votre échange conseiller.");
      onChanged();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Le dépôt a échoué.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className="card-paper p-6">
      <h2 className="font-display text-xl text-foreground">Pièces justificatives</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Optionnel — déposer une pièce prépare l'échange, cela n'engage rien.
      </p>

      {documents.length > 0 && (
        <ul className="mt-5 space-y-2">
          {documents.map((doc) => (
            <li
              key={doc.id}
              className="flex items-center gap-3 rounded-xl border border-border/70 bg-card px-4 py-3"
            >
              <FileText size={18} className="shrink-0 text-[var(--grenat)]" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-foreground">{doc.nom_fichier}</p>
                <p className="text-xs text-muted-foreground">
                  {TYPES_PIECES.find((t) => t.code === doc.type_piece)?.label ?? doc.type_piece}
                  {doc.taille_octets ? ` · ${formatTaille(doc.taille_octets)}` : ""}
                </p>
              </div>
              <button
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title="Télécharger"
                aria-label={`Télécharger ${doc.nom_fichier}`}
                onClick={async () => {
                  try {
                    const { url } = await obtenirUrl({ data: { documentId: doc.id } });
                    window.open(url, "_blank", "noopener");
                  } catch {
                    toast.error("Téléchargement impossible pour le moment.");
                  }
                }}
              >
                <Download size={16} aria-hidden />
              </button>
              {depotOuvert && (
                <button
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                  title="Supprimer"
                  aria-label={`Supprimer ${doc.nom_fichier}`}
                  onClick={async () => {
                    if (!window.confirm(`Supprimer « ${doc.nom_fichier} » ?`)) return;
                    try {
                      await supprimer({ data: { documentId: doc.id } });
                      toast.success("Pièce supprimée.");
                      onChanged();
                    } catch (e) {
                      toast.error(e instanceof Error ? e.message : "Suppression impossible.");
                    }
                  }}
                >
                  <Trash2 size={16} aria-hidden />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {!depotOuvert ? (
        <p className="mt-5 rounded-xl border border-border/70 bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
          {dossier.statut === "brouillon"
            ? "Le dépôt de pièces s'activera après la transmission de votre demande (et avec votre consentement dédié)."
            : "Le dépôt de pièces depuis l'espace est clos pour ce dossier. Votre conseiller reste votre interlocuteur pour tout document."}
        </p>
      ) : !consentDonne ? (
        <div className="mt-5 rounded-xl border border-border/70 bg-card p-4">
          <p className="text-sm text-muted-foreground">
            Le dépôt de pièces est désactivé : vous n'avez pas donné le consentement dédié lors de
            la transmission. Vous pouvez l'accorder maintenant — ou simplement remettre vos pièces
            de vive voix à votre conseiller.
          </p>
          {metaConsent && (
            <label className="mt-3 flex cursor-pointer items-start gap-3">
              <Checkbox
                checked={consentChecked}
                onCheckedChange={(v) => setConsentChecked(v === true)}
                className="mt-0.5"
              />
              <span className="text-sm leading-relaxed text-muted-foreground">
                {metaConsent.libelle}
              </span>
            </label>
          )}
          <button
            className="btn-ghost mt-4 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!consentChecked || consentSaving}
            onClick={async () => {
              setConsentSaving(true);
              try {
                await consentPieces({ data: { dossierId: dossier.id } });
                toast.success("Consentement enregistré : le dépôt de pièces est activé.");
                onChanged();
              } catch (e) {
                toast.error(e instanceof Error ? e.message : "Enregistrement impossible.");
              } finally {
                setConsentSaving(false);
              }
            }}
          >
            {consentSaving ? "Enregistrement…" : "Activer le dépôt de pièces"}
          </button>
        </div>
      ) : (
        <div className="mt-5 flex flex-wrap items-end gap-3">
          <div className="min-w-56">
            <label
              htmlFor="type-piece"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Type de pièce
            </label>
            <Select value={typePiece} onValueChange={setTypePiece}>
              <SelectTrigger id="type-piece" className="bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TYPES_PIECES.map((t) => (
                  <SelectItem key={t.code} value={t.code}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <input
            ref={fileRef}
            type="file"
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png,.webp,.heic"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void handleUpload(file);
            }}
          />
          <button
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            disabled={uploading}
            onClick={() => fileRef.current?.click()}
          >
            {uploading ? (
              <>
                <Loader2 size={15} className="animate-spin" aria-hidden /> Dépôt en cours…
              </>
            ) : (
              <>
                <Upload size={15} aria-hidden /> Déposer une pièce
              </>
            )}
          </button>
          <p className="w-full text-xs text-muted-foreground">
            PDF ou image, 10 Mo max. Stockage privé et sécurisé — accessible uniquement par vous et
            votre conseiller.
          </p>
        </div>
      )}
    </div>
  );
}
