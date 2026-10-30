import { saveLead } from "./leads.functions";
import { fiable } from "./envoi-fiable";

// saveLead protégé par la file d'attente localStorage : le lead est rejoué
// tant que le serveur n'a pas confirmé (voir envoi-fiable.ts).
export const saveLeadFiable = fiable("lead", saveLead);
