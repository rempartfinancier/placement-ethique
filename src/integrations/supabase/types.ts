export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      consentements: {
        Row: {
          categorie: Database["public"]["Enums"]["consentement_categorie"]
          created_at: string
          dossier_id: string | null
          id: string
          libelle: string
          user_id: string
          version: string
        }
        Insert: {
          categorie: Database["public"]["Enums"]["consentement_categorie"]
          created_at?: string
          dossier_id?: string | null
          id?: string
          libelle: string
          user_id: string
          version: string
        }
        Update: {
          categorie?: Database["public"]["Enums"]["consentement_categorie"]
          created_at?: string
          dossier_id?: string | null
          id?: string
          libelle?: string
          user_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "consentements_dossier_id_fkey"
            columns: ["dossier_id"]
            isOneToOne: false
            referencedRelation: "dossiers"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string
          dossier_id: string
          id: string
          nom_fichier: string
          storage_path: string
          taille_octets: number | null
          type_piece: Database["public"]["Enums"]["type_piece"]
          user_id: string
        }
        Insert: {
          created_at?: string
          dossier_id: string
          id?: string
          nom_fichier: string
          storage_path: string
          taille_octets?: number | null
          type_piece: Database["public"]["Enums"]["type_piece"]
          user_id: string
        }
        Update: {
          created_at?: string
          dossier_id?: string
          id?: string
          nom_fichier?: string
          storage_path?: string
          taille_octets?: number | null
          type_piece?: Database["public"]["Enums"]["type_piece"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_dossier_id_fkey"
            columns: ["dossier_id"]
            isOneToOne: false
            referencedRelation: "dossiers"
            referencedColumns: ["id"]
          },
        ]
      }
      dossier_events: {
        Row: {
          acteur: string
          created_at: string
          de_statut: Database["public"]["Enums"]["dossier_statut"] | null
          detail: string | null
          dossier_id: string
          id: string
          type: Database["public"]["Enums"]["dossier_event_type"]
          vers_statut: Database["public"]["Enums"]["dossier_statut"] | null
        }
        Insert: {
          acteur?: string
          created_at?: string
          de_statut?: Database["public"]["Enums"]["dossier_statut"] | null
          detail?: string | null
          dossier_id: string
          id?: string
          type: Database["public"]["Enums"]["dossier_event_type"]
          vers_statut?: Database["public"]["Enums"]["dossier_statut"] | null
        }
        Update: {
          acteur?: string
          created_at?: string
          de_statut?: Database["public"]["Enums"]["dossier_statut"] | null
          detail?: string | null
          dossier_id?: string
          id?: string
          type?: Database["public"]["Enums"]["dossier_event_type"]
          vers_statut?: Database["public"]["Enums"]["dossier_statut"] | null
        }
        Relationships: [
          {
            foreignKeyName: "dossier_events_dossier_id_fkey"
            columns: ["dossier_id"]
            isOneToOne: false
            referencedRelation: "dossiers"
            referencedColumns: ["id"]
          },
        ]
      }
      dossiers: {
        Row: {
          allocation: Json
          consentement_contact_at: string | null
          consentement_partage_at: string | null
          consentement_patrimoine_at: string | null
          consentement_pieces_at: string | null
          created_at: string
          creneau_rappel: string | null
          horizon: string | null
          id: string
          mises_en_garde: Json
          montant_tranche: string | null
          objectif: string | null
          produits: Database["public"]["Enums"]["produit_categorie"][]
          retrait_motif: string | null
          situation: Json
          statut: Database["public"]["Enums"]["dossier_statut"]
          titre: string
          transmitted_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          allocation?: Json
          consentement_contact_at?: string | null
          consentement_partage_at?: string | null
          consentement_patrimoine_at?: string | null
          consentement_pieces_at?: string | null
          created_at?: string
          creneau_rappel?: string | null
          horizon?: string | null
          id?: string
          mises_en_garde?: Json
          montant_tranche?: string | null
          objectif?: string | null
          produits?: Database["public"]["Enums"]["produit_categorie"][]
          retrait_motif?: string | null
          situation?: Json
          statut?: Database["public"]["Enums"]["dossier_statut"]
          titre?: string
          transmitted_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          allocation?: Json
          consentement_contact_at?: string | null
          consentement_partage_at?: string | null
          consentement_patrimoine_at?: string | null
          consentement_pieces_at?: string | null
          created_at?: string
          creneau_rappel?: string | null
          horizon?: string | null
          id?: string
          mises_en_garde?: Json
          montant_tranche?: string | null
          objectif?: string | null
          produits?: Database["public"]["Enums"]["produit_categorie"][]
          retrait_motif?: string | null
          situation?: Json
          statut?: Database["public"]["Enums"]["dossier_statut"]
          titre?: string
          transmitted_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          brevo_error: string | null
          created_at: string
          email: string
          id: string
          name: string | null
          newsletter_opt_in: boolean
          payload: Json | null
          source: string
          synced_to_brevo: boolean
          user_agent: string | null
        }
        Insert: {
          brevo_error?: string | null
          created_at?: string
          email: string
          id?: string
          name?: string | null
          newsletter_opt_in?: boolean
          payload?: Json | null
          source: string
          synced_to_brevo?: boolean
          user_agent?: string | null
        }
        Update: {
          brevo_error?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          newsletter_opt_in?: boolean
          payload?: Json | null
          source?: string
          synced_to_brevo?: boolean
          user_agent?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          nom: string | null
          prenom: string | null
          telephone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          nom?: string | null
          prenom?: string | null
          telephone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          nom?: string | null
          prenom?: string | null
          telephone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      consentement_categorie:
        | "donnees_contact"
        | "donnees_patrimoniales"
        | "pieces_justificatives"
        | "partage_conseiller"
      dossier_event_type:
        | "creation"
        | "changement_statut"
        | "document_ajoute"
        | "document_supprime"
      dossier_statut:
        | "brouillon"
        | "transmis"
        | "echange_planifie"
        | "recommandation_transmise"
        | "signature_en_cours"
        | "finalise"
        | "sans_suite"
      produit_categorie:
        | "etf_actions_halal"
        | "fonds_sukuk"
        | "or_argent_physique"
        | "scpi_immobilier"
        | "av_per_enveloppes"
      type_piece:
        | "piece_identite"
        | "justificatif_domicile"
        | "avis_imposition"
        | "releve_situation"
        | "autre"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      consentement_categorie: [
        "donnees_contact",
        "donnees_patrimoniales",
        "pieces_justificatives",
        "partage_conseiller",
      ],
      dossier_event_type: [
        "creation",
        "changement_statut",
        "document_ajoute",
        "document_supprime",
      ],
      dossier_statut: [
        "brouillon",
        "transmis",
        "echange_planifie",
        "recommandation_transmise",
        "signature_en_cours",
        "finalise",
        "sans_suite",
      ],
      produit_categorie: [
        "etf_actions_halal",
        "fonds_sukuk",
        "or_argent_physique",
        "scpi_immobilier",
        "av_per_enveloppes",
      ],
      type_piece: [
        "piece_identite",
        "justificatif_domicile",
        "avis_imposition",
        "releve_situation",
        "autre",
      ],
    },
  },
} as const
