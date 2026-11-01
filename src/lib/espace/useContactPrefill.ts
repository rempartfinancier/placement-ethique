import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "./useSession";
import { getEspace } from "./espace.functions";

// Coordonnées d'un client déjà connecté, prêtes à pré-remplir le formulaire
// de contact et le calendrier Cal.com (props name/email/phone). `ready` ne devient true qu'une fois la
// question « est-il connecté ? » tranchée : évite d'ouvrir le calendrier une
// première fois sans les paramètres puis de le re-remplir.
//
// queryKey partagée avec le reste de l'espace (["espace"]) : aucune requête
// supplémentaire si le client vient d'y naviguer.

export interface ContactPrefill {
  ready: boolean;
  loggedIn: boolean;
  nom: string;
  email: string;
  telephone: string;
}

export function useContactPrefill(): ContactPrefill {
  const { session, loading: sessionLoading } = useSession();
  const getEspaceFn = useServerFn(getEspace);
  const query = useQuery({
    queryKey: ["espace"],
    queryFn: () => getEspaceFn(),
    enabled: Boolean(session),
  });

  if (sessionLoading || (session && query.isLoading)) {
    return { ready: false, loggedIn: Boolean(session), nom: "", email: "", telephone: "" };
  }

  if (!session || !query.data) {
    return { ready: true, loggedIn: false, nom: "", email: "", telephone: "" };
  }

  const nom = [query.data.profil?.prenom, query.data.profil?.nom].filter(Boolean).join(" ");
  return {
    ready: true,
    loggedIn: true,
    nom,
    email: query.data.email ?? "",
    telephone: query.data.profil?.telephone ?? "",
  };
}
