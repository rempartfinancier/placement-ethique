// Filtre anti-spam côté serveur pour les leads (saveLead et /api/lead passent par processLead).
// Un lead jugé spam reçoit un « succès » (pour ne pas alerter le robot) mais ne déclenche ni
// email, ni Brevo, ni CRM, ni Supabase. Règle d'or : ne jamais bloquer un vrai lead — les
// critères ne visent que des motifs observés en production (faux contacts en série,
// adresses Gmail à points aléatoires, noms aléatoires).
const DOMAINES_SPAM = ["probox.my.id"];

function illisible(s: unknown, minLongueur: number, exigeEspace: boolean) {
  if (typeof s !== "string") return false;
  const t = s.trim();
  if (t.length < minLongueur) return false;
  if (exigeEspace) return !/\s/.test(t);
  // Prénom/nom aléatoire (ex. « ltijWFwXgpypUnWx ») : long, sans séparateur, ≥ 3 majuscules internes
  return !/[\s'’-]/.test(t) && (t.slice(1).match(/[A-Z]/g) || []).length >= 3;
}

export function estSpam(d: { email: string; name?: string | null; message?: string | null }): boolean {
  const [local = "", domaine = ""] = d.email.toLowerCase().split("@");
  if (DOMAINES_SPAM.some((x) => domaine === x || domaine.endsWith(`.${x}`))) return true;
  // Astuce des points Gmail : b.e.w.o.x.o.q.i.0.80@gmail.com
  if ((local.match(/\./g) || []).length >= 4) return true;
  if (illisible(d.name, 10, false)) return true;
  if (illisible(d.message, 10, true)) return true;
  return false;
}
