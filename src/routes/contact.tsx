import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { IClosedWidget } from "@/components/IClosedWidget";
import { ContactForm } from "@/components/ContactForm";
import { useContactPrefill } from "@/lib/espace/useContactPrefill";
import {
  ArrowRight,
  Clock,
  HandCoins,
  ShieldCheck,
  Video,
  Lock,
  Mail,
  Phone,
  CalendarCheck,
} from "lucide-react";

/* ─────────────────────────── Données de la page ─────────────────────────── */

const faq = [
  {
    q: "Le premier échange est-il vraiment gratuit ?",
    a: "Oui, et il le restera. Nos rendez-vous sont offerts parce que nous sommes rémunérés par nos partenaires (assureurs, sociétés de gestion) en tant qu'apporteurs d'affaires — un modèle assumé, dont la grille complète est publiée en clair sur notre page tarifs. Vous ne recevrez jamais de facture pour un échange avec nous.",
  },
  {
    q: "Dois-je préparer quelque chose avant l'appel ?",
    a: "Rien d'obligatoire. Si vous les avez sous la main, vos derniers relevés d'épargne (assurance vie, PER, comptes-titres, livrets) rendent la cartographie plus précise. Sinon, la conversation suffit largement pour un premier tour d'horizon — vous pourrez toujours compléter ensuite.",
  },
  {
    q: "Faut-il déjà disposer d'un capital ?",
    a: "Non. Il n'y a aucun seuil pour échanger avec nous : la question de départ est ce que vous voulez faire de votre épargne, pas son montant. Certains placements imposent leurs propres minimums de versement — si c'est le cas pour une piste évoquée, nous vous le dirons explicitement pendant l'échange.",
  },
  {
    q: "Vais-je subir des relances commerciales ensuite ?",
    a: "Non. Après l'échange, vous recevez un email récapitulatif des pistes évoquées, puis la décision vous appartient. Pas de séquence d'emails automatiques, pas de sollicitations répétées : si vous ne donnez pas suite, nous n'insistons pas.",
  },
  {
    q: "L'échange se fait-il en visio ou sur place ?",
    a: "En visioconférence, partout en France (et depuis l'étranger si vous êtes expatrié). Comptez 45 à 60 minutes, le temps de faire le tour de votre situation sans survoler les sujets.",
  },
  {
    q: "Vais-je repartir avec des pistes concrètes ?",
    a: "Oui, dans la limite de ce qu'un premier échange permet : des pistes et des points de vérification, pas un plan définitif construit en une heure. Ce site et ce premier rendez-vous sont informatifs et éducatifs ; si un accompagnement se dessine, il se construit lors d'un second rendez-vous, à votre rythme.",
  },
];

const deroules = [
  {
    n: "01",
    t: "Vous parlez, nous écoutons",
    d: "Votre parcours, votre épargne existante, vos projets — et ce que « éthique » veut dire pour vous : exclusions non négociables, causes prioritaires, niveau d'exigence. C'est une cartographie, pas un interrogatoire commercial : nous prenons des notes, nous ne vendons rien.",
  },
  {
    n: "02",
    t: "Nous répondons à vos questions",
    d: "Sur les labels (ISR, Greenfin, Finansol), les frais, la fiscalité des enveloppes, ce qu'un fonds « vert » garantit vraiment — et ce qu'il ne garantit pas. Sans jargon inutile. Et si nous ne savons pas, nous le disons et nous revenons vers vous après vérification.",
  },
  {
    n: "03",
    t: "La suite vous appartient",
    d: "Nous récapitulons par email les pistes évoquées et les points à vérifier. Rien à signer le jour même, aucune relance insistante : si un second rendez-vous a du sens, c'est vous qui le fixez.",
  },
];

const conseillers = [
  {
    img: "/sebastien.jpeg",
    nom: "Sébastien Petrisot",
    role: "Responsable relations investisseurs",
    fallback: "Sebastien+Petrisot",
  },
  {
    img: "/alexandre.jpg",
    nom: "Alexandre Pollet",
    role: "Communication, contenu et partenariats",
    fallback: "Alexandre+Pollet",
  },
];

/* ────────────────────────────────── Route ───────────────────────────────── */

export const Route = createFileRoute("/contact")({
  // Paramètres de pré-remplissage du calendrier iClosed (cf. docs iClosed :
  // iclosedName/iclosedEmail/iclosedPhone doivent être sur l'URL de LA PAGE,
  // pas sur l'URL du calendrier lui-même). Posés après un envoi réussi du
  // formulaire natif pour proposer un créneau tout de suite, préempli.
  validateSearch: (
    search: Record<string, unknown>,
  ): { iclosedName?: string; iclosedEmail?: string; iclosedPhone?: string } => ({
    iclosedName: typeof search.iclosedName === "string" ? search.iclosedName : undefined,
    iclosedEmail: typeof search.iclosedEmail === "string" ? search.iclosedEmail : undefined,
    iclosedPhone: typeof search.iclosedPhone === "string" ? search.iclosedPhone : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — premier échange offert | Placement-éthique.fr" },
      {
        name: "description",
        content:
          "Réservez un premier échange offert de 45 à 60 minutes : cartographie de votre situation, réponses claires sur l'investissement responsable, sans engagement.",
      },
      {
        property: "og:title",
        content: "Prendre rendez-vous — premier échange offert | Placement-éthique.fr",
      },
      {
        property: "og:description",
        content:
          "45 à 60 minutes en visio, offertes et sans engagement. Nous écoutons d'abord — vendre n'est pas l'objectif du premier échange.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/contact" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: ContactPage,
});

/* ────────────────────────────────── Page ────────────────────────────────── */

function ContactPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const prefill = useContactPrefill();
  const rdvPret = Boolean(search.iclosedEmail);

  // Une fois le message envoyé, on pose les paramètres de pré-remplissage
  // iClosed sur l'URL AVANT que le widget ne se monte (son script externe
  // les lit une seule fois, au chargement).
  const handleBookingReady = (data: { name: string; email: string; phone: string }) => {
    navigate({
      to: "/contact",
      search: (prev) => ({
        ...prev,
        iclosedName: data.name || undefined,
        iclosedEmail: data.email || undefined,
        iclosedPhone: data.phone || undefined,
      }),
      replace: true,
    });
    // Le calendrier s'affiche tout en haut de page (cf. plus bas) — on y
    // ramène systématiquement le visiteur, où qu'il ait scrollé pendant la
    // saisie, pour qu'il ne puisse pas le manquer.
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <SiteLayout>
      {rdvPret && (
        <section className="pt-10 pb-4">
          <div className="container-prose">
            <div
              className="rounded-2xl border p-6 md:p-8 shadow-[var(--shadow-elevated)] animate-in fade-in zoom-in-95 duration-300"
              style={{
                borderColor: "color-mix(in oklch, var(--verifie) 30%, transparent)",
                background: "color-mix(in oklch, var(--verifie) 6%, var(--card))",
              }}
            >
              <p className="eyebrow">Message reçu</p>
              <h2 className="display-3 mt-3">
                Pas besoin d'attendre notre rappel — choisissez votre créneau.
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                Votre message est bien parti. Si vous préférez fixer l'échange tout de suite plutôt
                que d'attendre notre retour sous 48h, réservez directement ci-dessous.
              </p>
              <div className="mt-6">
                <IClosedWidget height={720} />
              </div>
            </div>
          </div>
        </section>
      )}

      <PageHero
        eyebrow="Prendre rendez-vous"
        title={
          <>
            Un premier échange offert.{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              Et sans suite obligée.
            </span>
          </>
        }
        lead="45 à 60 minutes en visio pour cartographier votre situation, vos objectifs et vos exigences éthiques. Vous en repartez avec des pistes claires et des points de vérification — que nous travaillions ensemble ensuite ou non."
      >
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Clock size={15} style={{ color: "var(--grenat)" }} aria-hidden /> 45 à 60 minutes
          </span>
          <span className="inline-flex items-center gap-2">
            <HandCoins size={15} style={{ color: "var(--grenat)" }} aria-hidden /> Offert — jamais
            de facture
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={15} style={{ color: "var(--grenat)" }} aria-hidden /> Sans
            engagement, sans relance insistante
          </span>
        </div>
      </PageHero>

      {/* Bande promesse — le ton avant le calendrier */}
      <section className="pt-10 pb-2">
        <div className="container-prose">
          <div
            className="rounded-2xl border p-6 md:p-8"
            style={{
              borderColor: "var(--grenat)",
              background: "color-mix(in oklch, var(--grenat) 4%, var(--card))",
            }}
          >
            <p className="text-foreground/85 leading-relaxed max-w-3xl">
              Soyons clairs sur ce qui va se passer :{" "}
              <strong>ce premier rendez-vous n'est pas un rendez-vous de vente.</strong> Nous
              écoutons votre situation et vos exigences, nous répondons à vos questions — y compris
              les plus inconfortables sur les frais, les risques ou les limites réelles des
              placements « responsables ». Et notre rémunération n'a rien de secret : elle est
              publiée, ligne par ligne, sur notre{" "}
              <Link to="/tarifs" className="underline text-foreground">
                grille de tarifs
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire — canal unique de prise de rendez-vous */}
      <section className="pt-10 pb-16">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <p className="eyebrow">Planifiez votre échange</p>
              <h2 className="display-3 mt-4">Un message, et nous nous occupons du reste.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Remplissez ce formulaire avec vos coordonnées et quelques mots sur votre projet.
                Vous pourrez ensuite choisir vous-même votre créneau — ou nous vous en proposons un
                sous 48 heures ouvrées si vous préférez attendre notre retour.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                Vous pouvez aussi nous écrire directement à{" "}
                <a href="mailto:contact@placement-ethique.fr" className="underline text-foreground">
                  contact@placement-ethique.fr
                </a>{" "}
                ou nous appeler au{" "}
                <a href="tel:+33184163791" className="underline text-foreground">
                  01 84 16 37 91
                </a>
                .
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Clock
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--grenat)" }}
                    aria-hidden
                  />
                  <span>
                    <strong className="text-foreground">45 à 60 minutes</strong> — le temps de ne
                    pas survoler votre situation
                  </span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--grenat)" }}
                    aria-hidden
                  />
                  <span>
                    <strong className="text-foreground">Sans engagement</strong> — et sans relance
                    insistante ensuite
                  </span>
                </li>
                <li className="flex gap-3">
                  <Video
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--grenat)" }}
                    aria-hidden
                  />
                  <span>
                    <strong className="text-foreground">En visio</strong> — partout en France et
                    depuis l'étranger
                  </span>
                </li>
                <li className="flex gap-3">
                  <Lock
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--grenat)" }}
                    aria-hidden
                  />
                  <span>
                    <strong className="text-foreground">Confidentiel</strong> — vos informations ne
                    sortent pas du cabinet
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-7 bg-card border border-border shadow-[var(--shadow-subtle)] rounded-2xl p-6 md:p-8">
              <ContactForm
                sourcePage="Page Contact"
                defaultName={prefill.loggedIn ? prefill.nom : undefined}
                defaultEmail={prefill.loggedIn ? prefill.email : undefined}
                onSuccess={handleBookingReady}
              />
            </div>
          </div>
        </div>
      </section>

      {/* À quoi vous attendre */}
      <section className="section border-t border-border/40">
        <div className="container-prose">
          <p className="eyebrow">À quoi vous attendre</p>
          <h2 className="display-2 mt-4 max-w-3xl">Les trois temps du premier échange.</h2>

          <ol className="mt-12 grid md:grid-cols-3 gap-6">
            {deroules.map((s) => (
              <li key={s.n} className="card-paper">
                <span className="font-display text-2xl" style={{ color: "var(--grenat)" }}>
                  {s.n}
                </span>
                <h3 className="font-display text-xl mt-4">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{s.d}</p>
              </li>
            ))}
          </ol>

          {/* Qui vous répond */}
          <div className="mt-16 grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <p className="eyebrow">Qui vous répond</p>
              <h3 className="display-3 mt-4">Deux conseillers. Pas de call-center.</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Vous échangerez avec l'un de nous deux — les mêmes personnes qui écrivent les
                articles et construisent les outils de ce site. Toute demande écrite reçoit une
                réponse sous 48 heures ouvrées.
              </p>
              <Link to="/a-propos" className="btn-ghost mt-7">
                Découvrir le cabinet <ArrowRight size={15} />
              </Link>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-3 gap-5">
              {conseillers.map((p) => (
                <div key={p.nom} className="card-paper flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-muted overflow-hidden border-4 border-background shadow-md">
                    <img
                      src={p.img}
                      alt={p.nom}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${p.fallback}&background=random`;
                      }}
                    />
                  </div>
                  <h4 className="font-display text-lg mt-4">{p.nom}</h4>
                  <p className="text-sm mt-1" style={{ color: "var(--grenat)" }}>
                    {p.role}
                  </p>
                </div>
              ))}
              <div className="card-paper flex flex-col items-center text-center justify-center">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: "var(--accent)", color: "var(--grenat)" }}
                >
                  <Mail size={20} aria-hidden />
                </span>
                <a
                  href="mailto:contact@placement-ethique.fr"
                  className="mt-4 font-display text-lg break-all hover:text-[var(--grenat)] transition-colors"
                >
                  contact@placement-ethique.fr
                </a>
                <a
                  href="tel:+33184163791"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm hover:text-[var(--grenat)] transition-colors"
                >
                  <Phone size={14} aria-hidden /> 01 84 16 37 91
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  Réponse sous 48 h ouvrées · rendez-vous en visio partout en France
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-FAQ */}
      <section className="section border-t border-border/40">
        <div className="container-prose">
          <p className="eyebrow">Avant de réserver</p>
          <h2 className="display-2 mt-4 max-w-3xl">
            Les questions qu'on nous pose avant le premier rendez-vous.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faq.map((item) => (
              <article key={item.q} className="card-paper">
                <h3 className="font-display text-xl">{item.q}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{item.a}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            D'autres questions sur le cabinet, notre rémunération ou notre méthode ?{" "}
            <Link to="/questions" className="underline text-foreground">
              Nous y répondons en détail ici
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Pas encore prêt ? */}
      <section className="pb-24">
        <div className="container-prose">
          <div
            className="rounded-3xl border border-border p-8 md:p-12"
            style={{ background: "var(--gradient-paper)" }}
          >
            <p className="eyebrow">Pas encore prêt ?</p>
            <h2 className="display-2 mt-4 max-w-3xl">Faites d'abord vos propres vérifications.</h2>
            <p className="lead mt-5 max-w-2xl">
              Rien ne vous oblige à nous parler pour avancer. Nos outils gratuits — projection
              d'épargne, décodeur de labels, diagnostic — donnent des pistes sans inscription
              forcée. Quand vous voudrez confronter ces pistes à votre situation complète, le
              formulaire ci-dessus sera toujours là.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/outils" className="btn-grenat">
                Explorer nos outils gratuits <ArrowRight size={16} />
              </Link>
              <Link to="/questions" className="btn-ghost">
                <CalendarCheck size={15} aria-hidden /> Lire nos réponses aux questions fréquentes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
