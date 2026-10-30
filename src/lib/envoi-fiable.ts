// Envoi « fiable » côté navigateur (30/10/2026) — un formulaire dont l'appel serveur échoue
// (réseau coupé, 500, onglet fermé en plein envoi) perdait sa saisie : le visiteur voyait
// une erreur et repartait. Ici la demande est d'abord écrite dans le localStorage, puis
// envoyée ; elle n'est retirée qu'après un succès confirmé par le serveur. Les demandes
// restées en attente sont rejouées à la prochaine page vue, au retour de la connexion et
// toutes les minutes (voir rejouerEnvoisEnAttente, appelé depuis __root.tsx).
// Un doublon (réponse perdue puis rejeu) vaut mieux qu'un lead perdu.
const CLE = "pe-envois-en-attente";
const AGE_MAX_MS = 7 * 24 * 3600 * 1000;
const TENTATIVES_MAX = 15;

interface EnAttente {
  id: string;
  kind: string;
  data: unknown;
  creeLe: number;
  tentatives: number;
}

type Executeur = (data: never) => Promise<unknown>;
const executeurs = new Map<string, Executeur>();

function lire(): EnAttente[] {
  try {
    const brut = window.localStorage.getItem(CLE);
    const liste = brut ? (JSON.parse(brut) as EnAttente[]) : [];
    return Array.isArray(liste) ? liste : [];
  } catch {
    return [];
  }
}
function ecrire(liste: EnAttente[]) {
  try {
    if (liste.length === 0) window.localStorage.removeItem(CLE);
    else window.localStorage.setItem(CLE, JSON.stringify(liste));
  } catch {
    // stockage indisponible : on retombe sur le comportement historique (pas de rejeu)
  }
}
function retirer(id: string) {
  ecrire(lire().filter((e) => e.id !== id));
}

function reussi(res: unknown): boolean {
  return !(res && typeof res === "object" && (res as { ok?: unknown }).ok === false);
}

/**
 * Enveloppe une server function : même signature ({ data }), mais la demande est
 * conservée localement tant que le serveur n'a pas confirmé. Le résultat (ou l'exception)
 * est renvoyé tel quel à l'appelant, qui garde son affichage d'erreur habituel.
 */
export function fiable<D, R>(kind: string, fn: (opts: { data: D }) => Promise<R>) {
  executeurs.set(kind, ((data: D) => fn({ data })) as Executeur);
  return async (opts: { data: D }): Promise<R> => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    if (typeof window !== "undefined") {
      ecrire([...lire(), { id, kind, data: opts.data, creeLe: Date.now(), tentatives: 1 }]);
    }
    const res = await fn(opts);
    if (typeof window !== "undefined" && reussi(res)) retirer(id);
    return res;
  };
}

let rejeuEnCours = false;

/** Rejoue les demandes restées en attente. Sans effet côté serveur ou sans stockage. */
export async function rejouerEnvoisEnAttente(): Promise<void> {
  if (typeof window === "undefined" || rejeuEnCours) return;
  rejeuEnCours = true;
  try {
    for (const e of lire()) {
      if (Date.now() - e.creeLe > AGE_MAX_MS || e.tentatives >= TENTATIVES_MAX) {
        console.error("[envoi-fiable] Abandon après tentatives/âge dépassés :", e.kind);
        retirer(e.id);
        continue;
      }
      const executer = executeurs.get(e.kind);
      if (!executer) continue; // module pas encore chargé : on retentera
      // Marqué avant l'appel : une exception ne doit pas permettre des tentatives infinies.
      ecrire(lire().map((x) => (x.id === e.id ? { ...x, tentatives: x.tentatives + 1 } : x)));
      try {
        const res = await executer(e.data as never);
        if (reussi(res)) retirer(e.id);
      } catch {
        // réseau toujours indisponible : conservé pour le prochain passage
      }
    }
  } finally {
    rejeuEnCours = false;
  }
}
