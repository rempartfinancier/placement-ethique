import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";
import { FaqArticle } from "./faq";

export const meta: ArticleMeta = {
  slug: "quel-per-choisir-investir-ethique-criteres",
  title: "Quel PER choisir pour investir éthique : 7 critères",
  excerpt:
    "Aucun PER n'est éthique par nature : 7 critères vérifiables pour comparer gamme, gestion pilotée, frais, transfert et information avant de choisir.",
  readingTime: "12 min",
  category: "Enveloppes",
  date: "2026-09-28",
  tags: ["PER", "critères de choix", "gestion pilotée", "transfert", "ISR", "épargne retraite"],
  author: "Alexandre Pollet",
  faq: [
    {
      q: "Existe-t-il un PER 100 % éthique ?",
      a: "Non, pas au sens d'une catégorie officielle : les labels publics (ISR, Greenfin) s'attribuent à des fonds, pas à des contrats. Le caractère responsable d'un PER dépend des supports qu'il contient, de sa gestion pilotée par défaut et, en assurance, de son fonds en euros, investi dans l'actif général de l'assureur, dont vous ne choisissez pas la composition. Le bon réflexe : mesurer, contrat par contrat, la part réellement labellisée.",
    },
    {
      q: "Quelle part d'ISR faut-il exiger dans la gestion pilotée d'un PER ?",
      a: "Aucun seuil légal ne répond à cette question : c'est à vous de fixer votre exigence. Demandez la composition de la grille pilotée pour chaque profil et chaque horizon, comptez la part des fonds labellisés dans chaque ligne, puis comparez d'un contrat à l'autre. Une grille qui n'est pas communicable en détail est déjà une réponse.",
    },
    {
      q: "Peut-on changer de PER, et à quel coût ?",
      a: "Oui : le transfert d'un PER vers un autre PER est prévu par la loi. Les frais ne peuvent pas dépasser 1 % des droits acquis et sont nuls après cinq ans à compter du premier versement. Depuis un ancien produit (PERP, Madelin, Perco, article 83) détenu depuis moins de dix ans, ils peuvent atteindre 5 % de l'épargne accumulée. Gardez la trace de l'origine des sommes (versements volontaires, épargne salariale, versements obligatoires) : chaque compartiment a sa fiscalité à la sortie.",
    },
    {
      q: "PER assurance ou PER compte-titres : lequel pour investir de façon responsable ?",
      a: "Les deux existent. Le PER d'assurance permet d'investir en fonds en euros et en unités de compte ; le PER compte-titres donne accès à des titres financiers figurant sur une liste réglementaire. Ni l'un ni l'autre n'est responsable par nature : comparez les supports labellisés accessibles, la gestion pilotée, les frais, et le sort de l'épargne au décès (bénéficiaires désignés en assurance, succession en compte-titres).",
    },
    {
      q: "Mon PER d'entreprise est-il forcément moins responsable qu'un PER individuel ?",
      a: "Pas forcément. Le PER d'entreprise collectif doit proposer au moins un support d'investissement alternatif permettant notamment d'investir dans un fonds solidaire, et l'employeur prend en charge certains frais tant que vous êtes dans l'entreprise. En revanche, la gamme est choisie par l'employeur, pas par vous : sa profondeur responsable se vérifie de la même façon, sur la liste des supports.",
    },
    {
      q: "Un PER investi en supports responsables coûte-t-il plus cher ?",
      a: "Il n'existe pas de réponse générale : le coût dépend du contrat (frais d'entrée, frais de gestion) et de chaque support (frais courants indiqués dans le document d'informations clés). Un fonds labellisé n'est pas mécaniquement plus cher qu'un fonds classique, et un contrat peu cher peut contenir des supports chers. Additionnez les trois niveaux de frais avant de comparer.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> aucun PER n'est « éthique » par nature : la loi ne connaît
          que des enveloppes, des fonds labellisés et des profils de gestion. Pour choisir, sept
          critères se vérifient sur pièces : la profondeur réelle de la gamme responsable, le
          contenu de la gestion pilotée, les frais d'entrée, les frais de gestion, la
          désensibilisation à l'approche de la retraite, la transférabilité et la qualité de
          l'information. Ce qui pèse le plus dans la comparaison : la gestion pilotée par défaut, le
          cumul des frais et la facilité de partir. Un gabarit à remplir vous attend plus bas.
        </p>
      </div>

      <p>
        Vous avez sous les yeux trois brochures de « PER responsable ». Chacune affiche un logo, un
        mot (« ISR », « durable », « impact »), un avantage fiscal en gros caractères — et aucune ne
        vous dit ce qu'il faut regarder pour les départager. Le doute est légitime : un PER, c'est
        de l'argent bloqué jusqu'à la retraite, donc des entreprises financées pendant vingt ou
        trente ans. Se tromper de contrat coûte cher, en frais comme en cohérence.
      </p>
      <p>
        Rappelons de quoi l'on parle. Créé par la loi PACTE, le plan d'épargne retraite (PER) se
        décline en trois formes : un PER individuel et deux PER d'entreprise (collectif et
        obligatoire), comme le rappelle{" "}
        <a
          href="https://www.amf-france.org/sites/institutionnel/files/pdf/62325/fr/Que_faut-il_savoir_sur_le_plan_d%27epargne_retraite_%28PER%29_.pdf"
          target="_blank"
          rel="noreferrer"
        >
          l'AMF
        </a>
        . Le PER individuel peut prendre la forme d'un contrat d'assurance vie ou d'un
        compte-titres. Quant au qualificatif « éthique », il ne désigne aucune catégorie juridique :
        cet article s'occupe donc de ce qui se mesure.
      </p>
      <p>
        Ici : sept critères de comparaison, l'arbitrage entre gestion pilotée et gestion libre, les
        pièges, un cas chiffré sur les frais et la marche à suivre pour transférer un ancien
        contrat. La fiscalité et les plafonds sont traités dans{" "}
        <LienArticle slug="per-ethique-optimiser-retraite">
          comment optimiser sa retraite avec un PER éthique
        </LienArticle>
        , la comparaison avec l'assurance vie dans{" "}
        <LienArticle slug="per-vs-assurance-vie-isr">
          PER ou assurance vie pour investir responsable
        </LienArticle>
        .
      </p>

      <h2>Existe-t-il des PER « éthiques » au sens de la loi ?</h2>
      <p>
        Non, et la nuance est décisive. Il n'existe pas de label public « PER éthique » : les labels
        de l'État, comme le Label ISR, se décernent à des <em>fonds</em>, dont la{" "}
        <a
          href="https://www.lelabelisr.fr/comment-investir/fonds-labellises/"
          target="_blank"
          rel="noreferrer"
        >
          liste officielle est publique
        </a>
        . Un PER est une enveloppe : elle fixe la mécanique fiscale, le blocage et les modalités de
        sortie. Le contenu — fonds en euros, unités de compte, gestion pilotée — fait l'éthique, ou
        non.
      </p>
      <p>
        La loi pose des repères, moins uniformes qu'on le croit. Pour l'assurance vie multisupport,
        l'article L131-1-2 du Code des assurances impose de référencer une unité de compte solidaire
        et, pour chaque label public de transition écologique ou d'ISR, au moins une unité de compte
        labellisée — mais le même article précise qu'il ne s'applique pas aux contrats dont
        l'exécution est liée à la cessation d'activité professionnelle (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038507523"
          target="_blank"
          rel="noreferrer"
        >
          texte sur Légifrance
        </a>
        ). C'est la catégorie dans laquelle le Code monétaire et financier range les PER
        assurantiels. Pour les PER, l'article L224-3 exige que soit proposée au moins une autre
        allocation que l'allocation par défaut et, pour les PER d'entreprise, une allocation
        permettant d'acquérir des parts d'un fonds solidaire et d'un fonds labellisé (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563706"
          target="_blank"
          rel="noreferrer"
        >
          texte sur Légifrance
        </a>
        ). Pour un PER individuel, aucun de ces deux articles ne fixe de minimum équivalent à celui
        de l'assurance vie.
      </p>
      <div className="callout">
        <p>
          <strong>Ce que cela change pour vous :</strong> ne présumez pas qu'un PER individuel
          embarque le socle de supports responsables d'une assurance vie. Demandez la liste complète
          des supports du contrat, et jugez sur cette liste plutôt que sur l'intitulé commercial.
        </p>
      </div>

      <h2>Quels critères regarder pour comparer des PER responsables ?</h2>
      <p>
        Sept critères, dans l'ordre où on les vérifie. Aucun ne demande d'être analyste ; tous
        demandent d'obtenir un document précis auprès du gestionnaire.
      </p>

      <h3>1. La gamme : combien de supports responsables, et lesquels ?</h3>
      <p>
        Comptez, ne vous fiez pas à l'adjectif : demandez la liste des unités de compte du contrat
        et confrontez-la à la liste officielle des fonds labellisés. Deux vérifications comptent
        autant que le nombre : ces fonds sont-ils accessibles <em>en gestion libre</em> et{" "}
        <em>dans la gestion pilotée</em> ? Et couvrent-ils plusieurs classes d'actifs (actions,
        obligations, monétaire) ? Trois fonds labellisés ne permettent pas de construire un
        portefeuille diversifié.
      </p>

      <h3>2. La gestion pilotée : quelle part responsable réellement ?</h3>
      <p>
        C'est le critère qui compte le plus, parce que c'est le mode par défaut. Demandez, pour
        chaque profil et chaque horizon, la composition exacte de la grille et le poids de chaque
        fonds ; calculez la part de fonds labellisés. Nous y revenons dans la section suivante.
      </p>

      <h3>3. Les frais d'entrée : combien prélevés sur chaque versement ?</h3>
      <p>
        Un pourcentage prélevé à chaque versement pèse d'autant plus que vous versez souvent et
        longtemps. Comparez le taux et ses conditions. Si un intermédiaire vous accompagne, sa
        rémunération fait partie des frais à demander ; voir, pour le cabinet, la page{" "}
        <a href="/tarifs">tarifs</a>.
      </p>

      <h3>4. Les frais de gestion : contrat, supports, mandat</h3>
      <p>
        Ils se superposent sur trois niveaux : les frais annuels du contrat, les frais courants de
        chaque support (indiqués dans son document d'informations clés) et, le cas échéant, ceux de
        la gestion pilotée. Le{" "}
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563706"
          target="_blank"
          rel="noreferrer"
        >
          Code monétaire et financier
        </a>{" "}
        prévoit par ailleurs que les conditions de partage des rétrocessions de commissions perçues
        sur la gestion financière du plan sont fixées par voie réglementaire : posez la question du
        sort réservé à ces flux.
      </p>

      <h3>
        5. La désensibilisation : que devient la part responsable à l'approche de la retraite ?
      </h3>
      <p>
        Par défaut, la gestion d'un PER réduit progressivement le risque à mesure que la retraite
        approche : l'épargne bascule vers des actifs moins risqués (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563706"
          target="_blank"
          rel="noreferrer"
        >
          article L224-3
        </a>
        ). Ce mécanisme est utile, mais il déplace aussi votre épargne : ce qui remplace les actions
        dans la grille — fonds en euros, monétaire, obligations — n'est pas forcément labellisé.
        Demandez le calendrier de bascule et la nature des supports de sécurisation.
      </p>

      <h3>6. La transférabilité : pourrez-vous partir, et à quel prix ?</h3>
      <p>
        Le PER est transférable, avec des frais plafonnés par la loi (détail dans la dernière
        section). Un gestionnaire vague sur les conditions de sortie donne une information en soi.
      </p>

      <h3>7. La qualité de l'information : que peut-on vérifier, et par qui ?</h3>
      <p>
        Le gestionnaire d'un PER individuel doit publier chaque année sur son site l'information
        détaillée fournie avant l'ouverture du plan (
        <a
          href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000038818200/"
          target="_blank"
          rel="noreferrer"
        >
          article L224-29
        </a>
        ) : lisez-la avant de signer, pas après. Pour vos fonds finalistes, ouvrez le document
        d'informations clés et l'inventaire du portefeuille, et lisez{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que le Label ISR garantit vraiment
        </LienArticle>{" "}
        pour savoir quoi attendre d'un fonds labellisé. Si vous passez par un intermédiaire, sachez
        que depuis août 2022 le cadre européen l'oblige à tenir compte de vos préférences de
        durabilité, comme le rappellent l'
        <a
          href="https://acpr.banque-france.fr/fr/actualites/lacpr-et-lamf-presentent-leur-demarche-conjointe-pour-accompagner-les-professionnels-dans-la-prise"
          target="_blank"
          rel="noreferrer"
        >
          ACPR et l'AMF
        </a>
        : dites-les-lui explicitement.
      </p>

      <h3>Le gabarit : une grille de comparaison à remplir vous-même</h3>
      <p>
        Recopiez ce tableau pour chaque contrat comparé, avec le document de référence en regard de
        chaque ligne. Une case que le gestionnaire ne sait pas remplir est un signal, pas un détail.
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Question à poser / document à demander</th>
            <th>Contrat A</th>
            <th>Contrat B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Forme du PER</strong>
            </td>
            <td>Assurance ou compte-titres ? Gamme accessible dans cette forme</td>
            <td>…</td>
            <td>…</td>
          </tr>
          <tr>
            <td>
              <strong>Gamme responsable</strong>
            </td>
            <td>
              Liste complète des supports ; nombre de fonds labellisés ; classes d'actifs couvertes
            </td>
            <td>…</td>
            <td>…</td>
          </tr>
          <tr>
            <td>
              <strong>Gestion pilotée</strong>
            </td>
            <td>Composition de la grille par profil et par horizon ; part labellisée calculée</td>
            <td>…</td>
            <td>…</td>
          </tr>
          <tr>
            <td>
              <strong>Frais d'entrée</strong>
            </td>
            <td>Taux par versement ; conditions ; rémunération de l'intermédiaire</td>
            <td>…</td>
            <td>…</td>
          </tr>
          <tr>
            <td>
              <strong>Frais de gestion</strong>
            </td>
            <td>Frais annuels du contrat + frais courants de chaque support + mandat éventuel</td>
            <td>…</td>
            <td>…</td>
          </tr>
          <tr>
            <td>
              <strong>Désensibilisation</strong>
            </td>
            <td>Calendrier de bascule ; nature des supports de sécurisation</td>
            <td>…</td>
            <td>…</td>
          </tr>
          <tr>
            <td>
              <strong>Transfert</strong>
            </td>
            <td>Frais et délai de sortie ; conditions par écrit</td>
            <td>…</td>
            <td>…</td>
          </tr>
          <tr>
            <td>
              <strong>Information</strong>
            </td>
            <td>
              Information précontractuelle détaillée publiée ; documents des fonds ; politique du
              fonds en euros
            </td>
            <td>…</td>
            <td>…</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pour chiffrer vos propres hypothèses de versement, de durée et de rendement, le{" "}
        <a href="/outils/per-isr">simulateur PER responsable</a> donne des pistes illustratives, pas
        des promesses.
      </p>

      <h2>Gestion pilotée ou gestion libre pour un PER responsable ?</h2>
      <p>
        Sauf indication contraire, la gestion d'un PER individuel suit le principe de la gestion
        pilotée, avec par défaut le profil « équilibré horizon retraite » (
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        ). Vous pouvez aussi décider de gérer vous-même votre PER et de choisir les fonds, comme le
        précise{" "}
        <a
          href="https://www.amf-france.org/sites/institutionnel/files/pdf/62325/fr/Que_faut-il_savoir_sur_le_plan_d%27epargne_retraite_%28PER%29_.pdf"
          target="_blank"
          rel="noreferrer"
        >
          l'AMF
        </a>
        . Deux précisions utiles : l'AMF rappelle dans{" "}
        <a
          href="https://www.amf-france.org/fr/espace-epargnants/actualites-mises-en-garde/plan-depargne-retraite-comprendre-la-gestion-pilotee-horizon"
          target="_blank"
          rel="noreferrer"
        >
          son explication de la gestion pilotée
        </a>{" "}
        que celle-ci ne garantit ni ne protège le capital investi, et le profil par défaut est un
        réglage de risque, pas un filtre éthique.
      </p>
      <p>
        S'y ajoute une règle récente : l'arrêté du 1er juillet 2024, en vigueur depuis le 24 octobre
        2024, fixe une part minimale d'actifs non cotés dans les allocations de gestion pilotée,
        variable selon le profil et l'horizon (
        <a
          href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049880444"
          target="_blank"
          rel="noreferrer"
        >
          texte sur Légifrance
        </a>
        ). Deux lectures coexistent : le non coté peut financer directement des entreprises et des
        projets, mais son caractère responsable se vérifie fonds par fonds, et son information est
        parfois moins standardisée que celle d'un fonds coté. Demandez ce que contient cette poche
        et sur quels documents s'appuyer.
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Gestion pilotée</th>
            <th>Gestion libre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Contrôle du contenu responsable</strong>
            </td>
            <td>
              Faible : vous acceptez la grille en bloc. Un avantage : elle est construite pour vous
            </td>
            <td>Élevé : vous choisissez chaque support. Un inconvénient : il faut le faire</td>
          </tr>
          <tr>
            <td>
              <strong>Sécurisation à l'approche de la retraite</strong>
            </td>
            <td>Automatique. Inconvénient : elle peut faire sortir des supports labellisés</td>
            <td>À organiser vous-même. Inconvénient : oubli et biais de comportement possibles</td>
          </tr>
          <tr>
            <td>
              <strong>Temps de suivi</strong>
            </td>
            <td>Minimal</td>
            <td>Un point sérieux au moins une fois par an</td>
          </tr>
          <tr>
            <td>
              <strong>Poche d'actifs non cotés</strong>
            </td>
            <td>Intégrée d'office, selon profil et horizon</td>
            <td>À votre main</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notre grille de lecture, assumée : la gestion libre est la voie naturelle d'une exigence
        stricte à condition que la gamme soit profonde ; la gestion pilotée convient à qui veut de
        la simplicité à condition que la grille ait été vérifiée support par support. La loi impose
        de proposer au moins une autre allocation que l'allocation par défaut : vous n'êtes donc pas
        obligé de subir la première.
      </p>

      <h2>PER individuel ou PER collectif d'entreprise : qu'est-ce qui change ?</h2>
      <p>
        La question se pose si votre employeur propose un PER collectif. Les mécanismes de choix
        sont les mêmes, mais les leviers diffèrent. Dans le PER collectif, la gamme est choisie par
        l'employeur ; tant que vous êtes dans l'entreprise, votre employeur prend en charge certains
        frais, notamment de gestion courante, et vous supportez ces frais si vous partez, sauf
        transfert vers le PER collectif du nouvel employeur (
        <a
          href="https://www.amf-france.org/sites/institutionnel/files/pdf/62325/fr/Que_faut-il_savoir_sur_le_plan_d%27epargne_retraite_%28PER%29_.pdf"
          target="_blank"
          rel="noreferrer"
        >
          AMF
        </a>
        ). Le PER collectif doit aussi proposer au moins un support d'investissement alternatif, qui
        permet notamment d'investir dans un fonds solidaire (
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        ).
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>PER individuel</th>
            <th>PER collectif d'entreprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Qui choisit la gamme ?</strong>
            </td>
            <td>Vous, en choisissant le contrat</td>
            <td>Votre employeur</td>
          </tr>
          <tr>
            <td>
              <strong>Exigence légale de supports</strong>
            </td>
            <td>
              Au moins une autre allocation que le défaut ; pas d'équivalent explicite du minimum de
              l'assurance vie
            </td>
            <td>
              Support alternatif dont un fonds solidaire ; allocation avec fonds solidaire et fonds
              labellisé
            </td>
          </tr>
          <tr>
            <td>
              <strong>Inconvénient principal</strong>
            </td>
            <td>Vous devez comparer et suivre</td>
            <td>Gamme parfois mince, non choisie ; frais à votre charge si vous partez</td>
          </tr>
          <tr>
            <td>
              <strong>Sortie du plan</strong>
            </td>
            <td>Transfert possible à tout moment</td>
            <td>Transfert vers un autre produit tous les 3 ans tant que vous êtes salarié (AMF)</td>
          </tr>
        </tbody>
      </table>

      <h2>Quels sont les pièges d'un PER responsable ?</h2>
      <h3>La gestion pilotée « verte » de façade</h3>
      <p>
        Une mention « ISR » ou « durable » sur la grille n'est pas un label : elle n'engage que
        celui qui l'écrit. Vérifiez trois choses : la part de fonds labellisés, la présence de
        supports classiques dans les tranches proches de la retraite, et le contenu de la poche non
        cotée.
      </p>
      <h3>Les frais cumulés, qui pèsent plus que l'on croit</h3>
      <p>
        <strong>
          Situation type construite pour illustrer le calcul, à partir de paramètres réalistes.
        </strong>{" "}
        Camille, 40 ans, verse 10 000 € à l'ouverture d'un PER puis 200 € par mois jusqu'à ses 62
        ans, soit 22 ans et 62 800 € de versements. Hypothèse de rendement : 4 % par an avant tous
        frais, un niveau volontairement modéré qui n'a pas vocation à prédire les marchés — c'est
        l'écart entre deux contrats qui compte ici, pas le niveau absolu. Elle compare deux contrats
        aux supports comparables :
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Contrat A</th>
            <th>Contrat B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Frais d'entrée</strong>
            </td>
            <td>0 %</td>
            <td>2 % de chaque versement</td>
          </tr>
          <tr>
            <td>
              <strong>Frais annuels cumulés (contrat + supports)</strong>
            </td>
            <td>1,2 %</td>
            <td>2,2 %</td>
          </tr>
          <tr>
            <td>
              <strong>Capital estimé à 62 ans, avant impôts</strong>
            </td>
            <td>environ 90 900 €</td>
            <td>environ 77 800 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        L'écart, d'environ 13 000 €, dépasse un cinquième des sommes versées. Ces frais sont des
        hypothèses de calcul, non des frais constatés, et le calcul ignore la fiscalité comme
        l'avantage de déduction. Comme toujours, il s'agit d'une hypothèse illustrative : les
        performances passées ne préjugent pas des performances futures, et le capital investi en
        unités de compte présente un risque de perte en capital. Retenez la mécanique : un point de
        frais par an se compose sur vingt ans.
      </p>
      <h3>Le blocage, qui rend l'erreur coûteuse</h3>
      <p>
        L'épargne d'un PER est en principe bloquée jusqu'à la retraite, avec des cas de déblocage
        anticipé prévus par la loi : acquisition de la résidence principale (sauf pour les sommes
        issues de cotisations obligatoires), décès du titulaire, de son conjoint ou de son
        partenaire de Pacs, invalidité, surendettement, expiration des droits à l'assurance chômage
        et cessation d'activité non salariée à la suite d'une liquidation judiciaire, selon la{" "}
        <a
          href="https://www.amf-france.org/sites/institutionnel/files/pdf/62325/fr/Que_faut-il_savoir_sur_le_plan_d%27epargne_retraite_%28PER%29_.pdf"
          target="_blank"
          rel="noreferrer"
        >
          page de l'AMF
        </a>
        . Un mauvais choix se corrige par un transfert, pas par un rachat.
      </p>

      <h2>Comment transférer un ancien PER ou PERP vers un PER plus responsable ?</h2>
      <p>
        Bonne nouvelle : le PER est transférable, et l'un de ses avantages structurels est de
        permettre de changer de contrat. Quatre temps suffisent :{" "}
        <strong>Relever, Comparer, Demander, Contrôler</strong>.
      </p>
      <ol>
        <li>
          <strong>Relever.</strong> Obtenez un relevé de votre contrat actuel avec l'origine des
          sommes : versements volontaires, épargne salariale, versements obligatoires. Chaque PER
          est organisé en trois compartiments selon l'origine des fonds (
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
            target="_blank"
            rel="noreferrer"
          >
            service-public.gouv.fr
          </a>
          ), et un transfert peut se bloquer quand cette information manque : le médiateur de l'AMF
          a documenté un dossier ainsi retardé de près d'un an (
          <a
            href="https://www.amf-france.org/en/amf-ombudsman/ombudsman-online-diary/latest/transfer-retirement-savings-plan-when-incomplete-information-results-blockage-situation"
            target="_blank"
            rel="noreferrer"
          >
            journal du médiateur
          </a>
          ).
        </li>
        <li>
          <strong>Comparer.</strong> Appliquez le gabarit des sept critères au contrat actuel et à
          celui que vous envisagez. Avant de quitter un ancien contrat, vérifiez aussi s'il porte
          des garanties spécifiques que le nouveau ne reproduirait pas.
        </li>
        <li>
          <strong>Demander.</strong> Déposez la demande de transfert avec les justificatifs. Pour un
          PER individuel, le gestionnaire dispose de deux mois, à compter de la réception de la
          demande et des justificatifs, pour transmettre au nouveau gestionnaire les informations
          nécessaires (
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F36526/0"
            target="_blank"
            rel="noreferrer"
          >
            service-public.gouv.fr
          </a>
          ). Pour un ancien produit (PERP, contrat Madelin, Perco, article 83 notamment), le délai
          maximal est de quatre mois.
        </li>
        <li>
          <strong>Contrôler.</strong> Vérifiez que le montant transféré correspond au relevé et que
          la ventilation par compartiment est reproduite, puis relisez la gestion appliquée à
          l'arrivée : elle peut être la gestion pilotée par défaut.
        </li>
      </ol>
      <p>
        Côté coûts : d'un PER vers un autre, les frais ne peuvent pas dépasser 1 % des droits acquis
        et sont nuls après cinq ans à compter du premier versement (
        <a
          href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000038507607"
          target="_blank"
          rel="noreferrer"
        >
          article L224-6
        </a>
        ). Depuis un ancien produit détenu depuis moins de dix ans, ils peuvent atteindre 5 % de
        l'épargne accumulée (
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        ). Les avoirs d'une assurance vie peuvent aussi être transférés vers un PER, selon l'AMF.
      </p>

      <h2>Vos questions sur le choix d'un PER responsable</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Un PER responsable se choisit sur pièces, pas sur la couverture</h2>
      <p>
        Il n'y a pas de « meilleur PER éthique » en soi, mais sept critères qui permettent de
        comparer honnêtement deux contrats. Le plus révélateur n'est pas la gamme mise en avant :
        c'est la gestion pilotée par défaut, le cumul des frais et la facilité de partir.
      </p>
      <p>
        Attendre a un coût : chaque année dans un contrat mal choisi, ce sont des frais qui
        s'accumulent et des entreprises non choisies qui sont financées. La première étape :
        remplissez le gabarit pour le contrat que vous détenez ou que l'on vous propose, puis, pour
        la fiscalité et le dimensionnement de vos versements,{" "}
        <LienArticle slug="per-ethique-optimiser-retraite">
          l'article sur l'optimisation d'un PER éthique
        </LienArticle>{" "}
        prolonge exactement là où celui-ci s'arrête.
      </p>
      <p>
        Et si vous préférez faire ces vérifications accompagné, vous pouvez échanger avec un
        conseiller du cabinet : le premier échange est offert et sans engagement, à partir de vos
        documents. Découvrez{" "}
        <a href="/cgp-investissement-responsable">l'accompagnement du cabinet</a>.
      </p>
    </>
  );
}
