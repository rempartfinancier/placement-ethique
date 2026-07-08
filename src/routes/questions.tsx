import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";

/* ─────────────────────────── Types & données ─────────────────────────── */

interface FaqLink {
  label: string;
  /** Article du site — rendu via /articles/$slug + params (typage du routeur). */
  slug?: string;
  /** Route interne statique (/tarifs, /outils/…). */
  to?: string;
  /** Lien externe officiel (source vérifiable). */
  href?: string;
}

interface FaqItem {
  q: string;
  a: string;
  links?: FaqLink[];
}

interface FaqCategory {
  cat: string;
  id: string;
  label: string;
  items: FaqItem[];
}

const categories: FaqCategory[] = [
  {
    cat: "Comprendre l'investissement éthique",
    id: "comprendre",
    label: "Comprendre",
    items: [
      {
        q: "Qu'est-ce que l'investissement éthique, concrètement ?",
        a: "« Investissement éthique » est le terme grand public ; les professionnels parlent d'investissement socialement responsable (ISR) ou d'investissement durable. Le principe : sélectionner les placements en intégrant des critères extra-financiers — environnementaux, sociaux et de gouvernance (ESG) — en plus des critères financiers classiques de rendement et de risque. Concrètement, cela recouvre des approches très différentes : exclure certains secteurs (armement, tabac, charbon), retenir les entreprises les mieux notées de chaque secteur (best-in-class), investir sur des thématiques précises comme la transition énergétique, ou viser un impact mesurable. Ce n'est pas de la philanthropie : vous restez un investisseur qui cherche un rendement, mais en sachant ce que son argent finance. Toute la difficulté — et tout l'objet de ce site — consiste à vérifier que la promesse correspond au portefeuille réel.",
        links: [{ slug: "investissement-ethique-guide-complet-2026", label: "Lire notre guide complet pour débuter" }],
      },
      {
        q: "ISR, ESG, impact investing : quelle différence ?",
        a: "ESG désigne une grille d'analyse : trois familles de critères (Environnement, Social, Gouvernance) qui évaluent les pratiques d'une entreprise au-delà de ses comptes. ISR désigne une démarche d'investissement : appliquer cette grille de façon systématique et documentée pour construire un portefeuille. L'impact investing ajoute trois exigences supplémentaires : l'intention explicite de générer un bénéfice social ou environnemental, sa mesure régulière, et l'additionnalité — le fait que cet effet ne se serait pas produit sans votre investissement. En résumé : ESG est l'outil de mesure, l'ISR est la méthode, l'impact est l'ambition la plus exigeante. Un fonds peut être « ESG » sans être ISR, et ISR sans avoir le moindre impact mesurable.",
        links: [{ slug: "isr-esg-impact-investing-differences", label: "Lire l'article complet" }],
      },
      {
        q: "Investir éthique rapporte-t-il moins ?",
        a: "Il n'existe pas de consensus scientifique permettant d'affirmer que l'ISR rapporte structurellement plus ou moins que l'investissement conventionnel : les études académiques se contredisent selon la période étudiée, l'indice de comparaison et la méthodologie retenue — et l'honnêteté oblige à le dire. Ce qui est établi : un univers d'investissement restreint par des filtres crée des écarts par rapport aux indices classiques, dans les deux sens selon les années. Ce qui pèse de façon certaine sur votre rendement, en revanche, ce sont les frais — et eux se comparent facilement. Notre position : la question pertinente n'est pas « l'ISR rapporte-t-il moins ? » mais « ce fonds précis est-il bien construit, correctement facturé et conforme à ce qu'il promet ? ».",
        links: [{ slug: "investir-ethique-performance-chiffres", label: "Ce que disent vraiment les chiffres" }],
      },
      {
        q: "L'investissement responsable, c'est pour qui ?",
        a: "Pour tout épargnant qui veut savoir ce que son argent finance — ce n'est ni une affaire de militantisme, ni une niche réservée aux gros patrimoines. Certains de nos lecteurs viennent par conviction écologique ou sociale ; d'autres par gestion du risque, car les critères ESG captent des risques bien réels (contentieux, transition réglementaire, gouvernance défaillante) ; d'autres encore simplement parce qu'ils refusent l'opacité. Les enveloppes sont les mêmes que pour n'importe quel épargnant : assurance vie, PER, PEA, compte-titres, SCPI. Seul le contenu change — et le niveau d'exigence sur la vérification.",
        links: [{ to: "/outils/diagnostic", label: "Faire le point avec notre diagnostic d'épargne" }],
      },
      {
        q: "Que finance mon épargne actuelle, sans que je le sache ?",
        a: "Chaque euro placé est investi quelque part : un fonds euros d'assurance vie détient majoritairement des obligations d'États et de grandes entreprises, un fonds actions détient des titres de sociétés dont l'activité vous échappe si personne ne vous la montre, et vos dépôts bancaires alimentent les crédits accordés par votre banque. Rien de tout cela n'est secret : les inventaires de portefeuille et les rapports annuels existent, mais presque personne ne les lit. C'est précisément le point de départ d'une démarche responsable : regarder ce qui est déjà là avant de choisir où aller. Notre outil d'empreinte carbone de l'épargne vous donne un ordre de grandeur pédagogique en quelques minutes.",
        links: [{ to: "/outils/empreinte-carbone-epargne", label: "Estimer l'empreinte carbone de votre épargne" }],
      },
      {
        q: "Exclure les mauvais élèves ou dialoguer avec eux : quelle stratégie change vraiment les choses ?",
        a: "Les deux écoles ont des arguments sérieux. L'exclusion sectorielle ou normative garantit la cohérence de votre portefeuille et envoie un signal de marché, mais elle prive l'investisseur de tout droit de regard sur les entreprises exclues. L'engagement actionnarial fait le pari inverse : rester au capital pour voter en assemblée générale, dialoguer avec la direction et durcir le ton (résolutions, coalitions d'investisseurs) si rien ne bouge — au prix de détenir des titres d'entreprises imparfaites. Aucune des deux approches n'a démontré de supériorité définitive, et beaucoup de fonds combinent les deux. L'important est de savoir ce que fait réellement votre fonds : une politique d'engagement sérieuse se lit dans un rapport de vote publié, pas dans une profession de foi.",
        links: [{ slug: "engagement-actionnarial-vs-exclusion", label: "Comparer les deux stratégies en détail" }],
      },
      {
        q: "Qu'est-ce que le « best-in-class », et pourquoi est-il critiqué ?",
        a: "Le best-in-class consiste à retenir, dans chaque secteur, les entreprises les mieux notées sur les critères ESG — sans exclure aucun secteur par principe. Un fonds best-in-class peut donc détenir une compagnie pétrolière, dès lors qu'elle est jugée plus avancée que ses concurrentes. C'est la critique principale : un fonds « responsable » peut ainsi ressembler de très près aux indices classiques. La défense de l'approche : noter tous les secteurs incite chaque entreprise à progresser, là où l'exclusion abandonne le terrain. Notre conclusion pratique : « best-in-class » n'est ni un gage ni un scandale — c'est une méthodologie, et il faut la connaître avant de souscrire, car elle détermine ce que vous détiendrez réellement.",
        links: [{ to: "/outils/decodeur-label", label: "Décoder la méthodologie d'un fonds" }],
      },
      {
        q: "Mon investissement a-t-il un impact réel sur l'économie ?",
        a: "Réponse honnête : cela dépend du mécanisme. Acheter une action en bourse, c'est l'acheter à un autre investisseur — l'entreprise ne reçoit pas votre argent, et l'effet passe par des canaux indirects (coût du capital, signal de marché, droits de vote). À l'inverse, souscrire une obligation verte à l'émission, financer une entreprise solidaire agréée ou investir au capital d'une société non cotée apporte des ressources nouvelles : c'est là que l'additionnalité est la plus tangible. Les deux démarches sont légitimes, mais elles ne racontent pas la même histoire — et un fonds qui promet de « changer le monde » en achetant des actions cotées mérite au minimum une question sur son mécanisme d'impact.",
      },
    ],
  },
  {
    cat: "Labels & vérification",
    id: "labels",
    label: "Labels & vérification",
    items: [
      {
        q: "Le Label ISR garantit-il qu'un fonds est éthique ?",
        a: "Non — et ce n'est d'ailleurs pas ce qu'il promet. Le Label ISR, label public créé par le ministère de l'Économie, garantit qu'un fonds applique une méthodologie de sélection ESG documentée, contrôlée par un organisme tiers, avec des obligations de transparence. Il ne garantit pas que le portefeuille correspond à votre définition personnelle de l'éthique. Le référentiel a toutefois été nettement durci : depuis mars 2024, il exclut notamment les entreprises qui exploitent du charbon ou des hydrocarbures non conventionnels et celles qui lancent de nouveaux projets d'exploration ou d'exploitation d'hydrocarbures. Un progrès réel — qui ne dispense pas de lire ce que le fonds détient.",
        links: [
          { slug: "label-isr-que-garantit-il-vraiment", label: "Ce que le Label ISR garantit vraiment" },
          { href: "https://www.lelabelisr.fr", label: "Le site officiel du label" },
        ],
      },
      {
        q: "Label ISR, Greenfin, Finansol : quelles différences ?",
        a: "Trois labels français, trois promesses distinctes. Le Label ISR (ministère de l'Économie) valide une méthodologie de sélection ESG généraliste — c'est le plus répandu et le moins spécialisé. Le label Greenfin (ministère de la Transition écologique) cible la finance verte : le portefeuille doit financer des éco-activités définies, et toute la chaîne des combustibles fossiles est exclue ; le nucléaire, longtemps exclu lui aussi, y est devenu éligible début 2024. Le label Finansol, porté par l'association FAIR, identifie les produits d'épargne solidaire — ceux qui financent des entreprises à forte utilité sociale ou reversent une partie des gains à des associations. Les confondre, c'est acheter une promesse qu'on n'a pas comprise : vérifiez lequel correspond à votre intention.",
        links: [
          { slug: "label-greenfin-vs-label-isr", label: "Greenfin ou Label ISR : le comparatif" },
          { href: "https://www.ecologie.gouv.fr/politiques-publiques/label-greenfin", label: "Le label Greenfin sur ecologie.gouv.fr" },
        ],
      },
      {
        q: "Que signifient « Article 6 », « Article 8 » et « Article 9 » (SFDR) ?",
        a: "SFDR (Sustainable Finance Disclosure Regulation) est le règlement européen de transparence applicable depuis 2021. Il classe les fonds selon ce qu'ils déclarent : Article 6 — pas de caractéristique durable particulière ; Article 8 — le fonds promeut des caractéristiques environnementales ou sociales ; Article 9 — le fonds poursuit un objectif d'investissement durable comme finalité. Point essentiel : c'est un régime déclaratif de transparence, pas un label — c'est la société de gestion elle-même qui classe son fonds, sous le contrôle a posteriori du régulateur. Une classification Article 8 ou 9 vous dit où chercher l'information, pas si le fonds est vertueux.",
        links: [{ slug: "sfdr-article-8-ou-9-ce-que-ca-garantit", label: "Article 8 ou 9 : ce que ça garantit vraiment" }],
      },
      {
        q: "Un fonds « Article 8 » est-il forcément responsable ?",
        a: "Non. La catégorie Article 8 est très large : elle va de fonds réellement exigeants à des fonds qui se contentent d'exclusions minimales, car « promouvoir des caractéristiques environnementales ou sociales » reste une formulation souple. Les points à vérifier dans l'annexe SFDR précontractuelle du fonds : la part minimale d'investissements durables à laquelle il s'engage, les exclusions effectivement appliquées et les indicateurs suivis. Un fonds Article 8 qui ne s'engage sur aucune part d'investissement durable existe — et il est parfaitement en règle. C'est toute la différence entre conformité réglementaire et exigence réelle.",
      },
      {
        q: "Pourquoi tant de fonds ont-ils été déclassés d'Article 9 vers Article 8 fin 2022 ?",
        a: "Parce que le régulateur européen a précisé ses attentes : un fonds Article 9 doit être investi quasi exclusivement en investissements durables au sens de SFDR — une exigence que beaucoup de fonds alors classés Article 9 ne tenaient pas. Résultat : plusieurs centaines de fonds européens ont été reclassés vers l'Article 8 fin 2022 et début 2023, d'après les recensements du fournisseur de données Morningstar. L'épisode a une vertu pédagogique : les promesses avaient dépassé les portefeuilles, et la clarification a fait le tri. Il rappelle aussi qu'une classification n'est pas figée — d'où l'intérêt d'un suivi dans le temps, pas seulement d'une vérification à la souscription.",
      },
      {
        q: "Comment vérifier moi-même ce qu'un fonds détient réellement ?",
        a: "Quatre documents, tous accessibles gratuitement. Le DIC (document d'informations clés) résume la stratégie, les frais et le niveau de risque. L'annexe SFDR précontractuelle détaille les engagements durables chiffrés du fonds. Le reporting périodique montre les principales positions, et l'inventaire complet du portefeuille — publié dans le rapport annuel — liste chaque ligne détenue. Enfin, les sites officiels des labels permettent de vérifier qu'un fonds est réellement labellisé, et jusqu'à quand. Trente minutes de lecture suffisent souvent à confronter la brochure au portefeuille — c'est exactement l'exercice que notre décodeur de labels vous aide à structurer.",
        links: [{ to: "/outils/decodeur-label", label: "Ouvrir le décodeur de labels" }],
      },
      {
        q: "Comment repérer un placement « greenwashé » ?",
        a: "Quelques signaux d'alerte génériques, à défaut de certitude : un vocabulaire flou jamais défini (« vert », « durable », « à impact » sans méthodologie ni chiffre) ; un nom de fonds évocateur dont l'inventaire raconte une autre histoire ; l'absence de politique d'exclusion chiffrée ; une communication qui met en avant trois lignes emblématiques du portefeuille en passant le reste sous silence ; des frais élevés justifiés par la seule dimension « responsable ». Aucun de ces signaux ne prouve à lui seul une tromperie — mais leur accumulation justifie de passer son chemin ou d'exiger des réponses. Nous décrivons la méthode complète de vérification, document par document, dans notre article dédié.",
        links: [{ slug: "reperer-greenwashing-fonds-vert-methode", label: "La méthode complète anti-greenwashing" }],
      },
      {
        q: "La taxonomie verte européenne change-t-elle quelque chose pour mon épargne ?",
        a: "La taxonomie est le dictionnaire officiel de l'Union européenne : elle définit, activité par activité, ce qui peut être qualifié de durable sur le plan environnemental selon des critères techniques précis. Les fonds publient leur pourcentage d'alignement à cette taxonomie — et ces pourcentages sont souvent bas, y compris pour des fonds sérieux, parce que les critères sont exigeants et que les données des entreprises restent incomplètes. Un alignement faible n'est donc pas, à lui seul, un signal négatif ; un alignement élevé affiché sans explication mérite en revanche d'être questionné. Pour l'épargnant, la taxonomie est surtout un outil de comparaison, qui gagnera en utilité à mesure que les données s'amélioreront.",
        links: [{ slug: "taxonomie-verte-europeenne-epargne", label: "La taxonomie expliquée pour votre épargne" }],
      },
    ],
  },
  {
    cat: "Enveloppes & placements",
    id: "placements",
    label: "Enveloppes & placements",
    items: [
      {
        q: "Une assurance vie ISR, c'est quoi concrètement ?",
        a: "L'assurance vie est une enveloppe neutre : c'est le choix des supports qui la rend responsable, pas le contrat lui-même. Une « assurance vie ISR » désigne donc un contrat dont les unités de compte comptent suffisamment de fonds labellisés ou classés Article 8/9 pour construire une allocation cohérente avec vos exigences. Les bons réflexes avant d'ouvrir : vérifier la profondeur réelle de l'offre responsable (pas seulement deux fonds vitrine), les frais du contrat et la qualité des fonds référencés. L'enveloppe conserve tous ses atouts classiques — capitalisation sans imposition immédiate, fiscalité allégée des rachats après huit ans, transmission facilitée.",
        links: [{ slug: "assurance-vie-isr-guide-2026", label: "Choisir une assurance vie ISR en 2026" }],
      },
      {
        q: "Le PER permet-il de préparer sa retraite de façon responsable ?",
        a: "Oui — la logique est la même que pour l'assurance vie : tout dépend des supports référencés dans le contrat. Le PER ajoute un levier fiscal : les versements volontaires sont déductibles de votre revenu imposable, dans la limite d'un plafond global — de l'ordre de 10 % de vos revenus professionnels — dont le montant exact figure sur votre avis d'imposition, ligne « plafond épargne retraite ». L'horizon long de la retraite se marie d'ailleurs bien avec les thématiques de transition, qui se jouent sur des décennies. En contrepartie, l'épargne est bloquée jusqu'à la retraite, hors cas de déblocage anticipé prévus par la loi — dont l'achat de la résidence principale et les accidents de la vie.",
        links: [
          { slug: "per-ethique-optimiser-retraite", label: "Optimiser sa retraite avec un PER éthique" },
          { to: "/outils/per-isr", label: "Simuler votre PER responsable" },
        ],
      },
      {
        q: "PER ou assurance vie pour investir responsable ?",
        a: "Les deux enveloppes donnent accès aux mêmes familles de fonds responsables — la vraie différence est fiscale et patrimoniale. Le PER offre une déduction à l'entrée (intéressante si votre taux marginal d'imposition est élevé) contre un blocage jusqu'à la retraite et une imposition à la sortie. L'assurance vie n'offre rien à l'entrée mais reste disponible à tout moment, avec une fiscalité qui s'adoucit après huit ans. Dans la plupart des situations, la question n'est pas « lequel ? » mais « dans quel ordre et dans quelles proportions ? ». Notre comparateur d'enveloppes vous aide à poser les termes du choix — les proportions se discutent ensuite de vive voix.",
        links: [
          { slug: "per-vs-assurance-vie-isr", label: "PER ou assurance vie : le comparatif" },
          { to: "/outils/comparateur-enveloppes", label: "Comparer les enveloppes" },
        ],
      },
      {
        q: "Qu'est-ce qu'une SCPI ISR, et est-ce vraiment différent d'une SCPI classique ?",
        a: "Une SCPI labellisée ISR applique au patrimoine immobilier une grille d'analyse environnementale (performance énergétique, émissions), sociale (usage des bâtiments, relations avec les locataires) et de gouvernance. Particularité de l'immobilier : le label valorise surtout le best-in-progress — acheter des immeubles moyens et les améliorer de façon mesurable, ce qui a souvent plus d'effet réel que de n'acheter que du neuf déjà performant. Les risques restent ceux de toute SCPI : capital non garanti, revenus non garantis, liquidité limitée, frais d'entrée significatifs. Le label change la façon de gérer les immeubles, pas la nature du placement.",
        links: [
          { slug: "scpi-isr-vs-scpi-classique", label: "SCPI ISR ou classique : les différences réelles" },
          { slug: "scpi-isr-environnementales-panorama", label: "Le panorama des SCPI ISR en France" },
        ],
      },
      {
        q: "Le PEA a-t-il un intérêt pour l'investissement responsable ?",
        a: "Oui, avec des limites. Le PEA est fiscalement attractif — après cinq ans de détention, les gains sont exonérés d'impôt sur le revenu, les prélèvements sociaux restant dus — mais il est réservé pour l'essentiel aux actions d'entreprises européennes et aux fonds éligibles. L'univers responsable y existe (fonds et ETF ISR investis en actions européennes), mais il est plus étroit que dans une assurance vie ou un compte-titres, notamment pour les thématiques mondiales. Le PEA se pense donc comme une brique complémentaire d'une allocation responsable, rarement comme son cœur.",
        links: [{ slug: "quelle-enveloppe-investissement-ethique", label: "Quelle enveloppe pour investir éthique ?" }],
      },
      {
        q: "Les obligations vertes financent-elles vraiment des projets écologiques ?",
        a: "C'est leur raison d'être : une obligation verte (green bond) est une obligation dont les fonds levés sont fléchés vers des projets environnementaux identifiés — énergies renouvelables, transports propres, rénovation énergétique. L'émetteur s'engage sur un cadre de référence (le plus souvent les Green Bond Principles, et désormais un standard européen) et publie des rapports d'allocation et d'impact. La vigilance porte sur deux points : la qualité du reporting — certains émetteurs documentent précisément l'usage des fonds, d'autres restent vagues — et le fait qu'une obligation verte n'engage pas la stratégie globale de l'émetteur, qui peut par ailleurs financer des activités contestées. La lecture du rapport d'allocation fait le tri.",
        links: [{ slug: "obligations-vertes-vs-obligations-classiques", label: "Green bonds ou obligations classiques ?" }],
      },
      {
        q: "L'épargne solidaire est-elle une alternative crédible au Livret A ?",
        a: "C'est un complément plus qu'un substitut, car le couple rendement/risque n'est pas le même : le Livret A est garanti et disponible, l'épargne solidaire ne l'est pas nécessairement. Elle prend principalement trois formes : les livrets de partage, où vous donnez une partie de vos intérêts à une association ; les fonds dits « 90/10 », dont une petite fraction du portefeuille finance des entreprises solidaires agréées, le reste étant géré de façon classique, souvent ISR ; et l'investissement direct au capital d'entreprises solidaires. Le label Finansol aide à identifier les produits sérieux. C'est l'un des segments où l'additionnalité — l'impact qui n'aurait pas eu lieu sans vous — est la plus concrète.",
        links: [
          { slug: "livrets-epargne-solidaire-alternative-livret-a", label: "Épargne solidaire vs Livret A" },
          { slug: "label-finansol-finance-solidaire", label: "Ce que garantit le label Finansol" },
        ],
      },
      {
        q: "L'or et les métaux précieux ont-ils leur place dans un patrimoine éthique ?",
        a: "C'est un vrai débat, et nous préférons l'exposer plutôt que le trancher d'autorité. À charge : l'extraction minière a des impacts environnementaux et sociaux documentés, et l'or ne produit ni dividende ni financement d'activité. À décharge : l'or joue un rôle de diversification et de réserve de valeur qu'aucun autre actif ne réplique exactement, et des filières plus exigeantes émergent (or recyclé, standards de traçabilité minière) — dont la réalité se vérifie au cas par cas. Notre position : une allocation en métaux précieux peut se justifier pour des raisons patrimoniales, à condition d'être assumée et raisonnée, pas présentée comme « verte » par nature.",
        links: [{ slug: "metaux-precieux-investissement-ethique", label: "L'or dans un patrimoine éthique : notre analyse" }],
      },
      {
        q: "Peut-on investir de façon responsable avec un petit budget ?",
        a: "Oui, sans difficulté particulière. Une assurance vie s'ouvre avec quelques centaines d'euros chez de nombreux assureurs, et des versements programmés de quelques dizaines d'euros par mois suffisent à construire une position dans la durée — les seuils exacts dépendent de chaque contrat, vérifiez-les avant de souscrire. À petit budget, deux variables comptent plus que tout : la régularité des versements et le niveau des frais, qui pèsent proportionnellement plus lourd sur les petites sommes. Les fonds responsables n'exigent pas de ticket d'entrée supérieur aux fonds classiques — l'idée selon laquelle l'ISR serait réservé aux gros patrimoines ne résiste pas à l'examen.",
        links: [
          { slug: "investir-ethique-petit-budget", label: "Investir éthique avec un petit budget" },
          { to: "/outils/simulateur", label: "Projeter vos versements dans le simulateur" },
        ],
      },
    ],
  },
  {
    cat: "Notre cabinet",
    id: "cabinet",
    label: "Notre cabinet",
    items: [
      {
        q: "Comment votre cabinet est-il rémunéré ?",
        a: "Nos rendez-vous sont offerts : nous ne facturons pas d'honoraires pour les échanges. Notre rémunération vient de nos partenaires — assureurs et sociétés de gestion — qui nous rémunèrent en tant qu'apporteurs d'affaires lorsque vous souscrivez par notre intermédiaire, sur le modèle économique d'un courtier. Vous ne recevez aucune facture de notre part : cette rémunération est comprise dans les frais des solutions souscrites. Et parce qu'un site qui parle d'éthique doit commencer par balayer devant sa porte, notre grille de rémunération est publiée en clair, solution par solution, sur notre page Tarifs.",
        links: [{ to: "/tarifs", label: "Lire notre grille de rémunération complète" }],
      },
      {
        q: "Êtes-vous indépendants ?",
        a: "Nous préférons décrire le dispositif plutôt que proclamer un adjectif. EXP Capital ne gère aucun fonds « maison » et n'a aucun produit à défendre : nous sélectionnons parmi les solutions de plusieurs partenaires. Nous sommes rémunérés par ces partenaires — le dire clairement fait partie de l'exercice — et notre grille de rémunération publiée vous permet de vérifier par vous-même qu'aucune solution n'est mise en avant pour de mauvaises raisons. Enfin, nos articles de fond ne mettent en avant aucun avantage commercial : les contenus informent, la page Tarifs assume la dimension commerciale.",
        links: [
          { to: "/a-propos", label: "Découvrir le cabinet" },
          { to: "/tarifs", label: "Vérifier notre grille de rémunération" },
        ],
      },
      {
        q: "Qui est EXP Capital, l'éditeur de ce site ?",
        a: "EXP Capital est une SASU au capital de 1 000 €, immatriculée au RCS de Versailles sous le numéro 987 986 247 et enregistrée à l'ORIAS sous le numéro 25005915 — une immatriculation que vous pouvez vérifier vous-même sur le registre officiel. Le cabinet est porté par deux conseillers, Sébastien Petrisot et Alexandre Pollet, et édite placement-ethique.fr. Notre spécialité : la gestion de patrimoine appliquée à l'investissement responsable, avec une méthode simple — vérifier ce que les labels garantissent vraiment, sourcer chaque affirmation et publier notre rémunération.",
        links: [{ href: "https://www.orias.fr", label: "Vérifier notre immatriculation sur orias.fr" }],
      },
      {
        q: "Comment se déroule un premier rendez-vous ?",
        a: "Le premier échange est offert et sans engagement. Nous commençons par vous écouter : vos projets, votre épargne existante, vos exigences éthiques — ce que vous excluez absolument, ce que vous acceptez sous conditions. Nous répondons ensuite à vos questions, et vous repartez avec des pistes concrètes et hiérarchisées : ce qui mérite d'être creusé, dans quel ordre, et ce qu'il reste à vérifier. Nous ne vendons rien pendant ce rendez-vous — et si nous pensons que notre accompagnement ne vous apporterait rien, nous vous le disons.",
        links: [
          { to: "/contact", label: "Réserver un échange" },
          { slug: "bilan-patrimonial-investissement-ethique-rendez-vous", label: "Le récit complet d'un rendez-vous" },
        ],
      },
      {
        q: "Certifiez-vous vous-mêmes qu'un fonds est « vraiment éthique » ?",
        a: "Non — et nous nous méfions de quiconque le prétend. Nous ne sommes ni une agence de notation extra-financière, ni un auditeur, ni un régulateur. Notre travail consiste à réunir les faits vérifiables — label et date de labellisation, classification SFDR, engagements chiffrés, inventaire du portefeuille, rapports d'impact — et à vous les présenter avec leur source, pour que vous jugiez selon vos propres critères. Sur les débats que la profession n'a pas tranchés (exclusion contre engagement, rigueur des labels), nous exposons les deux lectures et notre grille d'analyse, sans décider à votre place.",
      },
      {
        q: "Proposez-vous un suivi après la souscription ?",
        a: "Oui — c'est même l'une des raisons d'être du cabinet, car la dimension responsable d'un placement est vivante : un fonds peut perdre son label, être reclassé sous SFDR, changer de stratégie ou de gérant. Notre suivi comprend un point annuel sur votre allocation et votre situation, la vérification que vos supports respectent toujours leurs engagements, et une alerte lorsque quelque chose change et appelle une décision de votre part. Ce suivi est couvert par notre rémunération de partenaires : il ne fait pas l'objet d'honoraires supplémentaires.",
      },
      {
        q: "Peut-on échanger avec vous à distance ?",
        a: "Oui — la visioconférence est notre mode de fonctionnement le plus courant, du premier échange jusqu'aux points de suivi annuels, et les souscriptions se font par signature électronique. Vous pouvez nous écrire à contact@placement-ethique.fr ou réserver directement un créneau depuis la page Contact. La distance ne change rien à la méthode : mêmes documents, mêmes vérifications, mêmes réponses écrites à vos questions.",
        links: [{ to: "/contact", label: "Nous contacter" }],
      },
    ],
  },
  {
    cat: "Aspects pratiques",
    id: "pratique",
    label: "Aspects pratiques",
    items: [
      {
        q: "Faut-il un montant minimum pour commencer ?",
        a: "Pour échanger avec nous : aucun. Pour investir : les seuils dépendent des solutions — une assurance vie ou un PER s'ouvrent souvent avec quelques centaines d'euros, une SCPI suppose l'achat d'au moins quelques parts, et certaines solutions patrimoniales ne se justifient qu'à partir de montants plus élevés. Chaque contrat fixe ses propres minimums de versement initial et de versements programmés : vérifiez-les dans les conditions du contrat avant de souscrire. Ce qui compte davantage que le montant de départ, c'est la régularité — un versement mensuel modeste mais constant construit plus sûrement qu'un versement unique ambitieux.",
        links: [{ to: "/outils/simulateur", label: "Simuler une épargne programmée" }],
      },
      {
        q: "Combien de temps faut-il pour ouvrir un contrat et être investi ?",
        a: "L'ordre de grandeur va de quelques jours à quelques semaines, selon l'enveloppe et l'assureur : la souscription d'une assurance vie ou d'un PER en signature électronique est rapide, et le premier investissement suit la validation du dossier. Deux cas particuliers méritent d'être anticipés : les SCPI prévoient un délai de jouissance — une période, précisée dans la documentation de chaque SCPI, entre l'achat des parts et le versement des premiers revenus — et les transferts d'anciens contrats retraite peuvent prendre plusieurs semaines à plusieurs mois. Nous vous annonçons ces délais avant la souscription, pas après.",
      },
      {
        q: "Puis-je transférer mes contrats existants (assurance vie, PER) ?",
        a: "Cela dépend de l'enveloppe. Une assurance vie ne se transfère pas d'un assureur à un autre sans perdre son antériorité fiscale ; en revanche, la loi Pacte permet de transformer un contrat en un autre contrat du même assureur en conservant cette antériorité — utile si votre assureur propose un contrat plus riche en supports responsables. Un PER, lui, est transférable d'un établissement à l'autre, moyennant d'éventuels frais de transfert encadrés par la réglementation ; les anciens produits d'épargne retraite peuvent également être transférés vers un PER. Avant tout transfert, on compare ce qu'on gagne (supports, frais) à ce qu'on perd (garanties, antériorité, frais de transfert) — c'est un calcul, pas un réflexe.",
        links: [{ href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F36526", label: "Le PER individuel sur service-public.gouv.fr" }],
      },
      {
        q: "Que se passe-t-il si un de mes fonds perd son label ou est reclassé ?",
        a: "Cela arrive — les labels sont contrôlés périodiquement et les classifications SFDR évoluent, comme l'a montré la vague de reclassements d'Article 9 vers Article 8 fin 2022. Vous n'êtes pas prisonnier : au sein d'une assurance vie ou d'un PER, un arbitrage permet de remplacer le support concerné sans clôturer le contrat ni perdre son antériorité fiscale. La vraie question est d'être informé à temps : c'est précisément l'objet de notre suivi annuel, qui vérifie que vos supports tiennent encore leurs engagements. Un déclassement n'est d'ailleurs pas toujours une raison de vendre — il faut comprendre pourquoi il a eu lieu avant de décider.",
        links: [{ slug: "sfdr-article-8-ou-9-ce-que-ca-garantit", label: "Comprendre les reclassements SFDR" }],
      },
      {
        q: "Dois-je vendre tous mes placements actuels pour repartir de zéro ?",
        a: "Rarement — une réorientation responsable se construit par étapes. La démarche raisonnable : dresser l'inventaire de l'existant, identifier ce qui contredit frontalement vos exigences, puis agir dans l'ordre le moins coûteux — commencer par orienter les nouveaux versements, arbitrer au sein des enveloppes existantes (souvent sans frottement fiscal), et ne céder les positions taxables qu'en connaissance des conséquences fiscales et des frais. Précipiter la bascule peut coûter cher ; l'étaler la rend presque indolore. Notre diagnostic d'épargne en ligne est une bonne première étape pour cartographier l'existant.",
        links: [{ to: "/outils/diagnostic", label: "Cartographier votre épargne actuelle" }],
      },
      {
        q: "Quelle est la fiscalité d'une assurance vie lors d'un retrait ?",
        a: "Un rachat n'est imposé que sur la part de gains qu'il contient, jamais sur le capital retiré. Pour les versements effectués depuis fin septembre 2017 : avant huit ans de détention, les gains sont imposés à 12,8 % (ou au barème progressif sur option), auxquels s'ajoutent les prélèvements sociaux. Après huit ans, vous bénéficiez d'un abattement annuel de 4 600 € de gains (9 200 € pour un couple), puis d'un taux réduit de 7,5 % pour la part des versements n'excédant pas 150 000 € — 12,8 % au-delà — toujours en sus des prélèvements sociaux. Ces règles évoluant au gré des lois de finances, vérifiez les taux en vigueur au moment de votre rachat sur la fiche officielle.",
        links: [{ href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F22414", label: "La fiscalité de l'assurance vie sur service-public.gouv.fr" }],
      },
      {
        q: "Comment fonctionne l'abattement de 152 500 € à la transmission d'une assurance vie ?",
        a: "Pour les versements effectués avant les 70 ans de l'assuré, chaque bénéficiaire désigné reçoit jusqu'à 152 500 € hors droits de succession (article 990 I du Code général des impôts) ; au-delà de ce montant, un prélèvement spécifique s'applique. L'abattement vaut par bénéficiaire et par assuré, tous contrats confondus — désigner plusieurs bénéficiaires démultiplie donc la capacité de transmission. Les versements effectués après 70 ans relèvent d'un régime distinct, moins favorable. La rédaction de la clause bénéficiaire mérite autant d'attention que le choix des supports : une clause vague peut ruiner l'avantage.",
        links: [{ slug: "donation-transmission-coherence-valeurs", label: "Transmettre en cohérence avec ses valeurs" }],
      },
      {
        q: "Comment suivre l'évolution « éthique » de mes placements dans le temps ?",
        a: "Trois rendez-vous réguliers suffisent. Une fois par an, parcourez le rapport annuel ou le rapport d'impact de vos fonds : positions principales, indicateurs suivis, exercice des droits de vote. Vérifiez que les labels sont toujours valides sur leurs sites officiels — une labellisation a une date d'expiration. Et lisez les courriers de votre assureur ou de la société de gestion : un changement de stratégie, de classification SFDR ou de gérant doit vous être notifié. Si vous êtes accompagné par notre cabinet, ce travail fait partie du suivi annuel — mais nous préférons des clients capables de le faire eux-mêmes : c'est le meilleur des garde-fous.",
        links: [{ slug: "empreinte-carbone-epargne-pourquoi-mesurer", label: "Pourquoi mesurer ce que finance votre épargne" }],
      },
    ],
  },
];

const allQuestions = categories.flatMap((c) => c.items);

/* ─────────────────────────────── Route ─────────────────────────────── */

export const Route = createFileRoute("/questions")({
  head: () => ({
    meta: [
      {
        title:
          "40 questions fréquentes sur l'investissement éthique — labels, SFDR, greenwashing | Placement-éthique.fr",
      },
      {
        name: "description",
        content:
          "Label ISR, Greenfin, SFDR, greenwashing, assurance vie ISR, PER, SCPI, épargne solidaire : 40 réponses claires et sourcées sur l'investissement éthique.",
      },
      {
        property: "og:title",
        content: "40 questions fréquentes sur l'investissement éthique — Placement-éthique.fr",
      },
      {
        property: "og:description",
        content:
          "Label ISR, Greenfin, SFDR, greenwashing, assurance vie ISR, PER, SCPI, épargne solidaire : 40 réponses claires et sourcées sur l'investissement éthique.",
      },
      { property: "og:url", content: "https://placement-ethique.fr/questions" },
    ],
    links: [{ rel: "canonical", href: "https://placement-ethique.fr/questions" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allQuestions.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: QuestionsPage,
});

/* ─────────────────────────────── Page ─────────────────────────────── */

function QuestionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = categories
    .map((cat) => {
      const items = cat.items.filter((item) => {
        const matchesSearch =
          searchQuery === "" ||
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCat = activeCategory === "all" || cat.id === activeCategory;
        return matchesSearch && matchesCat;
      });
      return { ...cat, items };
    })
    .filter((cat) => cat.items.length > 0);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Questions fréquentes"
        title={
          <>
            Vos questions sur l'investissement éthique,{" "}
            <span className="italic" style={{ color: "var(--grenat)" }}>
              sans détour
            </span>
          </>
        }
        lead="40 questions, 5 thèmes, des réponses sourcées — labels, SFDR, greenwashing, enveloppes, et notre propre rémunération. Un épargnant bien informé pose de meilleures questions, y compris à ses conseillers."
      />

      {/* Recherche & filtres */}
      <section className="py-8 border-b border-border/40" style={{ background: "color-mix(in oklch, var(--accent) 40%, transparent)" }}>
        <div className="container-prose max-w-3xl space-y-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher une question…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-sm shadow-sm focus:outline-none focus:border-[var(--grenat)]"
              aria-label="Rechercher une question"
            />
            <Search className="absolute left-4 top-3.5 text-muted-foreground" size={18} aria-hidden />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                activeCategory === "all"
                  ? "bg-foreground text-background border-foreground shadow-sm"
                  : "bg-background text-foreground/80 border-border hover:bg-muted"
              }`}
            >
              Toutes
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background border-foreground shadow-sm"
                    : "bg-background text-foreground/80 border-border hover:bg-muted"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordéons */}
      <section className="section">
        <div className="container-prose max-w-3xl">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div key={cat.id} className="mb-14 last:mb-0">
                <h2 className="display-3 mb-6">{cat.cat}</h2>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <FaqRow key={item.q} item={item} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 card-paper border border-dashed border-border/80">
              <p className="text-muted-foreground text-sm">
                Aucune question ne correspond à votre recherche. Essayez un autre terme — ou posez-nous
                directement votre question via la page{" "}
                <Link to="/contact" className="font-medium underline" style={{ color: "var(--grenat)" }}>
                  Contact
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      <CTA
        eyebrow="Votre question n'est pas ici ?"
        title="Posez-la — elle enrichira peut-être cette page"
        text="Ces 40 réponses couvrent les questions que l'on nous pose le plus souvent. Si la vôtre est plus spécifique, écrivez-nous ou réservez un échange : nous répondons, et si la question revient régulièrement, nous l'ajoutons ici — avec ses sources."
      />
    </SiteLayout>
  );
}

/* ─────────────────────────── Accordéon FAQ ─────────────────────────── */

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full px-6 py-5 flex items-center justify-between gap-6 text-left"
      >
        <span className="font-display text-base md:text-lg text-foreground font-semibold">{item.q}</span>
        <ChevronDown
          size={18}
          aria-hidden
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: "var(--grenat)" }}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-foreground/80 leading-relaxed text-sm -mt-1 space-y-4">
          <p>{item.a}</p>
          {item.links && item.links.length > 0 && (
            <div className="pt-1 flex flex-wrap gap-x-5 gap-y-2">
              {item.links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold hover:underline inline-flex items-center gap-1"
                    style={{ color: "var(--grenat)" }}
                  >
                    → {link.label}
                  </a>
                ) : link.slug ? (
                  <Link
                    key={link.label}
                    to="/articles/$slug"
                    params={{ slug: link.slug }}
                    className="text-xs font-semibold hover:underline inline-flex items-center gap-1"
                    style={{ color: "var(--grenat)" }}
                  >
                    → {link.label}
                  </Link>
                ) : link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-xs font-semibold hover:underline inline-flex items-center gap-1"
                    style={{ color: "var(--grenat)" }}
                  >
                    → {link.label}
                  </Link>
                ) : null,
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
