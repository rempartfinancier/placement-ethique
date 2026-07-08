// Notifications serveur de l'espace client (Brevo). Module serveur pur :
// n'importer que depuis un handler de server function. Aucun accès à
// process.env au niveau module (cf. src/lib/config.server.ts).
//
// Les envois sont volontairement non bloquants pour l'utilisateur : une
// transmission de dossier réussie en base ne doit jamais échouer côté client
// parce qu'un email n'est pas parti. Les erreurs sont loggées.

interface TransmissionNotification {
  email: string;
  prenom?: string | null;
  nom?: string | null;
  dossierId: string;
  titre: string;
  objectif?: string | null;
  produits: string[];
  /** Résumé texte de l'esquisse d'allocation (vide si le client n'en a pas fait). */
  allocationResume?: string[];
  creneauRappel?: string | null;
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

async function envoyerEmail(payload: Record<string, unknown>): Promise<boolean> {
  const brevoKey = process.env.BREVO_API_KEY;
  if (!brevoKey) {
    console.warn("[espace.server] BREVO_API_KEY absent — notification non envoyée.");
    return false;
  }
  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": brevoKey },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error(`[espace.server] Brevo SMTP ${res.status}:`, (await res.text()).slice(0, 300));
    }
    return res.ok;
  } catch (e) {
    console.error("[espace.server] Brevo exception:", e);
    return false;
  }
}

export async function notifierTransmissionDossier(input: TransmissionNotification): Promise<void> {
  // Pas d'adresse de conseiller nommément confirmée pour ce site : le repli
  // pointe sur la boîte générique du cabinet — à surcharger par variable
  // d'environnement une fois une adresse dédiée communiquée.
  const senderEmail = process.env.PLACEMENT_ETHIQUE_SENDER || "contact@placement-ethique.fr";
  const adminEmail = process.env.PLACEMENT_ETHIQUE_ADMIN_EMAIL || "contact@placement-ethique.fr";
  const nomComplet = [input.prenom, input.nom].filter(Boolean).join(" ") || "Non renseigné";
  const produits = input.produits.length ? input.produits.join(", ") : "Aucune piste sélectionnée";

  // ── Notification conseiller ──
  const allocationHtml =
    input.allocationResume && input.allocationResume.length > 0
      ? `<h3>Esquisse d'allocation du client (support de discussion, pas une instruction)</h3>
    <ul>${input.allocationResume.map((ligne) => `<li>${escapeHtml(ligne)}</li>`).join("")}</ul>`
      : "";

  const adminHtml = `<!doctype html><html><body style="font-family:sans-serif;color:#1a1a1a;">
    <h2>Dossier espace client transmis</h2>
    <ul>
      <li><strong>Client :</strong> ${escapeHtml(nomComplet)}</li>
      <li><strong>Email :</strong> ${escapeHtml(input.email)}</li>
      <li><strong>Dossier :</strong> ${escapeHtml(input.titre)} (id ${escapeHtml(input.dossierId)})</li>
      <li><strong>Objectif :</strong> ${escapeHtml(input.objectif || "Non renseigné")}</li>
      <li><strong>Pistes produits :</strong> ${escapeHtml(produits)}</li>
      <li><strong>Créneau de rappel souhaité :</strong> ${escapeHtml(input.creneauRappel || "Non précisé")}</li>
    </ul>
    ${allocationHtml}
    <p>Statut : <strong>transmis</strong> — en attente de prise en charge (planifier l'échange, puis formaliser la recommandation avant toute souscription).</p>
  </body></html>`;

  const adminOk = await envoyerEmail({
    sender: { name: "Placement-éthique.fr (Espace client)", email: senderEmail },
    to: [{ email: adminEmail, name: "Conseiller" }],
    subject: `Dossier transmis : ${nomComplet} — ${input.titre}`,
    htmlContent: adminHtml,
  });
  if (!adminOk) {
    console.error("[espace.server] Échec notification conseiller pour dossier", input.dossierId);
  }

  // ── Accusé de réception client — répète noir sur blanc que rien n'est
  // souscrit : le mail de confirmation ne doit jamais ressembler à un mail
  // de bienvenue post-souscription. ──
  const clientHtml = `<!doctype html><html><body style="font-family:Georgia,serif;color:#1a1a1a;max-width:640px;margin:24px auto;padding:24px;">
    <h1 style="color:#1a3d2e;">Votre demande est bien transmise</h1>
    <p>Bonjour${input.prenom ? " " + escapeHtml(input.prenom) : ""},</p>
    <p>Votre dossier <strong>${escapeHtml(input.titre)}</strong> vient d'être transmis à votre conseiller.</p>
    <div style="background:#fafaf7;border-left:3px solid #8a3a3a;padding:16px;">
      <p style="margin:0;"><strong>Où vous en êtes :</strong> votre demande est une demande d'échange, pas une souscription.
      Rien n'est engagé : votre conseiller vous recontacte pour un échange de vive voix, puis vous remettra une
      recommandation individualisée écrite. La signature éventuelle n'intervient qu'après, sur les documents
      officiels du partenaire — jamais depuis votre espace en ligne.</p>
    </div>
    <p style="margin-top:24px;">Vous pouvez suivre votre dossier, déposer des pièces ou retirer votre demande à tout moment
    depuis <a href="https://placement-ethique.fr/espace">votre espace client</a>.</p>
    <p style="font-size:12px;color:#777;margin-top:32px;">Cet email est un accusé de réception. Il ne constitue ni un conseil
    en investissement ni un engagement contractuel.</p>
  </body></html>`;

  await envoyerEmail({
    sender: { name: "Placement-éthique.fr", email: senderEmail },
    to: [{ email: input.email, name: nomComplet !== "Non renseigné" ? nomComplet : undefined }],
    subject: "Votre demande est transmise — rien n'est engagé à ce stade",
    htmlContent: clientHtml,
  });
}
