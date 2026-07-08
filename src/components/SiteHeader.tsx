import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, UserRound } from "lucide-react";

const flatNav = [
  { to: "/objectifs", label: "Vos projets" },
  { to: "/outils", label: "Outils" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/a-propos", label: "À propos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobilePlacementsOpen, setMobilePlacementsOpen] = useState(false);
  const [mobileArticlesOpen, setMobileArticlesOpen] = useState(false);

  const [placementsOpen, setPlacementsOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);

  const placementsRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  // Fermeture au clic extérieur — indispensable sur tablette/tactile.
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (placementsRef.current && !placementsRef.current.contains(target)) {
        setPlacementsOpen(false);
      }
      if (articlesRef.current && !articlesRef.current.contains(target)) {
        setArticlesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-lg"
            style={{ background: "var(--gradient-grenat)", color: "var(--grenat-foreground)" }}
            aria-hidden
          >
            P.
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-foreground">
              Placement-éthique<span className="text-[var(--grenat)]">.fr</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              L'investissement éthique, sans le vernis
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {/* Menu déroulant Placements */}
          <div ref={placementsRef} className="relative group py-2">
            <button
              onClick={() => {
                setPlacementsOpen(!placementsOpen);
                setArticlesOpen(false);
              }}
              className="flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors focus:outline-none"
            >
              Placements{" "}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 text-muted-foreground ${
                  placementsOpen ? "rotate-180" : "group-hover:rotate-180"
                }`}
              />
            </button>
            <div
              className={`absolute top-full left-0 mt-1 w-52 rounded-xl border border-border/60 bg-background p-2 shadow-lg animate-in fade-in slide-in-from-top-1 duration-150 ${
                placementsOpen ? "block" : "hidden group-hover:block"
              }`}
            >
              <Link
                to="/placements"
                onClick={() => setPlacementsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                activeProps={{ className: "bg-muted text-foreground font-semibold" }}
              >
                Nos placements
              </Link>
              <Link
                to="/enveloppes"
                onClick={() => setPlacementsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                activeProps={{ className: "bg-muted text-foreground font-semibold" }}
              >
                Enveloppes fiscales
              </Link>
            </div>
          </div>

          {/* Menu déroulant Articles */}
          <div ref={articlesRef} className="relative group py-2">
            <button
              onClick={() => {
                setArticlesOpen(!articlesOpen);
                setPlacementsOpen(false);
              }}
              className="flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors focus:outline-none"
            >
              Articles{" "}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 text-muted-foreground ${
                  articlesOpen ? "rotate-180" : "group-hover:rotate-180"
                }`}
              />
            </button>
            <div
              className={`absolute top-full left-0 mt-1 w-52 rounded-xl border border-border/60 bg-background p-2 shadow-lg animate-in fade-in slide-in-from-top-1 duration-150 ${
                articlesOpen ? "block" : "hidden group-hover:block"
              }`}
            >
              <Link
                to="/articles"
                onClick={() => setArticlesOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                activeProps={{ className: "bg-muted text-foreground font-semibold" }}
              >
                Tous les articles
              </Link>
              <Link
                to="/questions"
                onClick={() => setArticlesOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                activeProps={{ className: "bg-muted text-foreground font-semibold" }}
              >
                Questions fréquentes
              </Link>
            </div>
          </div>

          {flatNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/espace"
            className="flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            <UserRound size={15} aria-hidden />
            Espace client
          </Link>
          <Link to="/contact" className="btn-primary">
            Prendre rendez-vous
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-prose flex flex-col py-4 gap-1">
            <div className="border-b border-border/50">
              <button
                onClick={() => setMobilePlacementsOpen(!mobilePlacementsOpen)}
                className="flex items-center justify-between w-full py-3 text-foreground/80"
              >
                <span>Placements</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobilePlacementsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobilePlacementsOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-1">
                  <Link
                    to="/placements"
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm text-foreground/75"
                  >
                    Nos placements
                  </Link>
                  <Link
                    to="/enveloppes"
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm text-foreground/75"
                  >
                    Enveloppes fiscales
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-border/50">
              <button
                onClick={() => setMobileArticlesOpen(!mobileArticlesOpen)}
                className="flex items-center justify-between w-full py-3 text-foreground/80"
              >
                <span>Articles</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileArticlesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileArticlesOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-1">
                  <Link
                    to="/articles"
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm text-foreground/75"
                  >
                    Tous les articles
                  </Link>
                  <Link
                    to="/questions"
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm text-foreground/75"
                  >
                    Questions fréquentes
                  </Link>
                </div>
              )}
            </div>

            {flatNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/80 border-b border-border/50 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/espace"
              onClick={() => setOpen(false)}
              className="py-3 text-foreground/80 border-b border-border/50 flex items-center gap-2"
            >
              <UserRound size={16} aria-hidden />
              Espace client
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 self-start"
            >
              Prendre rendez-vous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
