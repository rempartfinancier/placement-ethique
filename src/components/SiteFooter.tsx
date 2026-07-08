import { Link } from "@tanstack/react-router";
import { OUVRIR_COOKIES_EVENT } from "./CookieConsent";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--ink)] text-[oklch(0.96_0.006_95)]">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2.5">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-lg"
              style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
            >
              P.
            </span>
            <span className="font-display text-xl">
              Placement-éthique<span className="text-[var(--grenat-clair)]">.fr</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Cabinet de conseil en gestion de patrimoine spécialisé dans l'investissement éthique et
            responsable. Nous accompagnons les épargnants qui veulent que leur argent serve leurs
            valeurs — en vérifiant ce que les labels garantissent vraiment, plutôt qu'en croyant les
            brochures sur parole.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-[var(--grenat-clair)]">Explorer</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>
              <Link to="/placements" className="hover:text-white">
                Placements responsables
              </Link>
            </li>
            <li>
              <Link to="/enveloppes" className="hover:text-white">
                Enveloppes fiscales
              </Link>
            </li>
            <li>
              <Link to="/objectifs" className="hover:text-white">
                Vos objectifs
              </Link>
            </li>
            <li>
              <Link to="/outils" className="hover:text-white">
                Outils & simulateurs
              </Link>
            </li>
            <li>
              <Link to="/tarifs" className="hover:text-white">
                Tarifs & transparence
              </Link>
            </li>
            <li>
              <Link to="/articles" className="hover:text-white">
                Articles & guides
              </Link>
            </li>
            <li>
              <Link to="/questions" className="hover:text-white">
                Questions fréquentes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-[var(--grenat-clair)]">Contact</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>
              <Link to="/contact" className="hover:text-white">
                Prendre rendez-vous
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:text-white">
                Notre cabinet
              </Link>
            </li>
            <li>contact@placement-ethique.fr</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose py-6 space-y-3 text-xs text-white/55">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Placement-éthique.fr</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <Link to="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="hover:text-white">
                Confidentialité
              </Link>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event(OUVRIR_COOKIES_EVENT))}
                className="hover:text-white"
              >
                Gérer les cookies
              </button>
            </div>
          </div>
          {/* Mention canonique — identique sur les 14 sites du réseau. */}
          <p>
            Site édité par EXP Capital (SASU, RCS Versailles 987 986 247, ORIAS n° 25005915 —
            www.orias.fr). Les contenus de ce site sont fournis à titre informatif et éducatif
            uniquement. Ils ne constituent pas un conseil en investissement. Tout investissement
            comporte un risque de perte en capital.
          </p>
        </div>
      </div>
    </footer>
  );
}
