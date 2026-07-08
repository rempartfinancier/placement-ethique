import { useEffect, useState } from "react";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

// Session Supabase côté navigateur (localStorage). Le SSR ne connaît pas la
// session : les écrans de l'espace rendent d'abord un état "chargement" puis
// se résolvent côté client — c'est le modèle de l'auth-attacher existant.
export function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Annotations explicites : le client Supabase est un Proxy typé en union
    // avec le mock SSR (any) — sans elles, noImplicitAny se déclenche.
    supabase.auth.getSession().then(({ data }: { data: { session: Session | null } }) => {
      if (!mounted) return;
      setSession(data.session);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, next: Session | null) => {
        if (!mounted) return;
        setSession(next);
        setLoading(false);
      },
    );

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return { session, loading };
}
