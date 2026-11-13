import { describe, expect, it } from "bun:test";
import { estSpam } from "./antispam";

describe("estSpam", () => {
  it("rejette les adresses Gmail à points aléatoires et les noms aléatoires", () => {
    expect(estSpam({ email: "b.e.w.o.x.o.q.i.0.80@gmail.com", name: "ltijWFwXgpypUnWx", message: "qrMSFdnuVaQcYXoaqA" })).toBe(true);
    expect(estSpam({ email: "x@gmail.com", name: "OOUOVsQSnKQPObjBaiNpEWY" })).toBe(true);
  });
  it("rejette le domaine de spam connu", () => {
    expect(estSpam({ email: "alexis.felten6055@probox.my.id", name: "Alexis Felten" })).toBe(true);
  });
  it("accepte les vrais leads", () => {
    expect(estSpam({ email: "marie.dupont@gmail.com", name: "Marie Dupont", message: "Bonjour, je souhaite un rendez-vous" })).toBe(false);
    expect(estSpam({ email: "jean-pierre.de.la.tour@free.fr", name: "Jean-Pierre de La Tour" })).toBe(false);
    expect(estSpam({ email: "a@b.fr", name: null, message: null })).toBe(false);
    expect(estSpam({ email: "sonde+placement@rempartfinancier.fr" })).toBe(false);
  });
});
