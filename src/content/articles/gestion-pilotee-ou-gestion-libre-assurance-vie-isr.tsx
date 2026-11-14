import type { ArticleMeta } from "../article-types";
import { FaqArticle } from "./faq";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "gestion-pilotee-ou-gestion-libre-assurance-vie-isr",
  title: "Assurance vie ISR : gestion pilotée ou gestion libre ?",
  excerpt:
    "Qui décide, combien ça coûte en plus (0,79 % contre 1,08 % par an en moyenne en 2025) et comment mesurer la part réelle d'ISR d'une gestion pilotée.",
  readingTime: "17 min",
  category: "Enveloppes",
  date: "2026-11-14",
  tags: ["assurance vie", "gestion pilotée", "gestion libre", "ISR", "frais", "label ISR"],
  author: "Sébastien Petrisot",
  faq: [
    {
      q: "C'est quoi la différence entre gestion pilotée et gestion libre ?",
      a: "En gestion libre, vous choisissez vous-même les supports de votre assurance vie et vous décidez de chaque arbitrage. En gestion pilotée, vous signez un mandat d'arbitrage : un professionnel (l'assureur ou un intermédiaire d'assurance) décide des arbitrages à votre place, dans le cadre d'un profil défini à l'avance, par exemple prudent, équilibré ou dynamique. Dans les deux cas, le contrat, sa fiscalité et le risque de perte en capital sur les unités de compte restent les mêmes.",
    },
    {
      q: "La gestion pilotée coûte-t-elle plus cher que la gestion libre ?",
      a: "En moyenne, oui. D'après le rapport 2026 de l'Observatoire des produits d'épargne financière (données ACPR 2025), les frais de gestion du contrat sur les unités de compte sont de 0,79 % par an en gestion libre et de 1,08 % dans les autres modes de gestion (pilotée, profilée, déléguée, sous mandat), soit 0,29 point d'écart. En contrepartie, les arbitrages ne sont en principe pas facturés en gestion déléguée. Ce sont des moyennes : le prix de votre contrat figure dans ses conditions et dans la convention de mandat.",
    },
    {
      q: "Une gestion pilotée « ISR » est-elle investie à 100 % dans des fonds labellisés ?",
      a: "Pas nécessairement, et aucun texte ne l'impose. Le Label ISR s'attribue à des fonds, pas à un contrat d'assurance vie ni à un profil de gestion. Une gestion présentée comme « responsable » peut donc contenir un fonds en euros, des fonds non labellisés et une poche d'actifs non cotés. Le seul moyen de le savoir est de demander la grille d'allocation ligne par ligne et de compter la part de fonds labellisés.",
    },
    {
      q: "Peut-on passer de la gestion pilotée à la gestion libre en cours de contrat ?",
      a: "Oui. Le code des assurances prévoit que le mandat d'arbitrage peut être résilié à tout moment et sans indemnité par l'épargnant, avec une prise d'effet dans un délai maximal de trois mois. Vous reprenez alors la main sur le choix des supports. Les arbitrages réalisés à l'intérieur du contrat ne déclenchent pas d'impôt ; d'éventuels frais d'arbitrage peuvent s'appliquer selon le contrat.",
    },
    {
      q: "La gestion pilotée rapporte-t-elle plus que la gestion libre ?",
      a: "Personne ne peut l'affirmer de façon générale. Le résultat dépend du profil retenu, des fonds sélectionnés, de la période observée et, en gestion libre, de vos propres décisions. Les chiffres publics cités dans cet article comparent des frais, pas des performances. Ce qui est certain, c'est le coût, connu d'avance ; la performance, elle, ne l'est jamais, et les performances passées ne préjugent pas des performances futures.",
    },
    {
      q: "La gestion pilotée protège-t-elle mon capital ?",
      a: "Non. Un profil « prudent » réduit l'exposition aux supports risqués, il ne supprime pas le risque : la part investie en unités de compte peut perdre de la valeur, quel que soit le mode de gestion. Seule la part investie sur le fonds en euros bénéficie de la garantie en capital de l'assureur, nette des frais de gestion du contrat.",
    },
    {
      q: "Faut-il s'y connaître en finance pour choisir la gestion libre ?",
      a: "Il faut au minimum savoir lire trois documents par fonds (la liste officielle du label, l'annexe SFDR, le document d'informations clés) et accepter de faire le point au moins une fois par an. Ce n'est pas un métier, mais c'est une discipline. Si vous savez que vous ne la tiendrez pas, une gestion pilotée dont vous avez vérifié la grille peut être plus cohérente qu'une gestion libre laissée à l'abandon.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> en gestion libre, vous choisissez chaque support de votre
          assurance vie, donc vous pouvez viser 100 % de fonds labellisés si la gamme le permet ; en
          gestion pilotée, un professionnel arbitre pour vous selon un profil, et la part réellement
          investie en ISR dépend d'une grille que vous n'avez pas écrite. Côté prix, les frais de
          gestion du contrat sur les unités de compte étaient en moyenne de 0,79 % par an en gestion
          libre et de 1,08 % dans les autres modes de gestion en 2025 (Observatoire des produits
          d'épargne financière, rapport 2026). Avant de signer une gestion pilotée « responsable »,
          demandez sa grille ligne par ligne et comptez. Sources officielles consultées le 14
          novembre 2026.
        </p>
      </div>

      <p>
        Le bulletin de souscription est presque rempli. Il reste une case : « gestion libre » ou «
        gestion pilotée ». À côté de la seconde, une mention rassurante, « profil équilibré
        responsable ». Vous hésitez. Choisir vous-même des fonds parmi deux cents lignes, sans être
        sûr de votre coup ? Ou déléguer, sans savoir ce que « responsable » recouvre vraiment ni ce
        que cela coûte ?
      </p>
      <div className="callout">
        <p>
          <strong>Situation type, construite pour illustrer la question.</strong> Élodie, 41 ans,
          ouvre une assurance vie pour y placer 50 000 € sur quinze ans. Elle veut que son épargne
          finance des entreprises sélectionnées sur des critères environnementaux et sociaux, et
          elle n'a ni l'envie ni le temps de suivre les marchés. On lui propose une gestion pilotée
          dont la plaquette parle d'« approche durable ». Elle ne sait pas quelle part de son argent
          ira réellement vers des fonds labellisés.
        </p>
      </div>
      <p>
        Le <strong>mode de gestion</strong> d'une assurance vie désigne la personne qui décide de la
        répartition de votre épargne entre les supports du contrat : vous (gestion libre) ou un
        professionnel à qui vous donnez pouvoir (gestion pilotée, profilée ou sous mandat). Ce choix
        ne change ni la fiscalité du contrat ni le risque de perte en capital des unités de compte.
        Il change qui décide, combien vous payez et ce que vous pouvez vérifier. Cet article compare
        les deux modes sur ces trois points, pour l'assurance vie uniquement, avec un calcul d'écart
        de frais sur quinze ans et cinq questions à poser avant de signer. Il ne vous dira pas
        lequel rapporte le plus : personne ne le sait d'avance.
      </p>

      <h2>Gestion pilotée ou gestion libre : quelle différence dans une assurance vie ?</h2>
      <p>
        La différence tient en une phrase : en gestion libre, chaque arbitrage est décidé par vous ;
        en gestion pilotée, vous signez un mandat d'arbitrage qui donne à un professionnel le
        pouvoir de les décider à votre place.
      </p>
      <p>
        La gestion libre est le régime de base.{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15274"
          target="_blank"
          rel="noreferrer"
        >
          Service-public.gouv.fr
        </a>{" "}
        (fiche vérifiée le 25 septembre 2026) la résume ainsi : « Si votre contrat est en gestion
        libre, vous choisissez vous-même vos placements. » Vous répartissez vos versements entre le
        fonds en euros et les unités de compte, et vous modifiez cette répartition quand vous le
        décidez.
      </p>
      <p>
        La gestion pilotée repose, elle, sur un contrat distinct du contrat d'assurance vie : le{" "}
        <strong>mandat d'arbitrage</strong>. Depuis le 24 octobre 2024, il est défini par l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048244710"
          target="_blank"
          rel="noreferrer"
        >
          article L. 132-27-3 du code des assurances
        </a>
        , issu de la loi « industrie verte » du 23 octobre 2023 : c'est la convention par laquelle
        vous confiez à un mandataire le pouvoir de décider des arbitrages, dans le cadre d'une
        orientation de gestion ou d'un profil d'allocation. Seuls un assureur ou un intermédiaire
        d'assurance peuvent être mandataires ; ils peuvent déléguer l'exécution à un prestataire de
        services d'investissement, à condition que le mandat le prévoie et sous leur responsabilité.
        C'est ce qui explique qu'une société de gestion apparaisse souvent derrière le nom
        commercial d'une gestion pilotée.
      </p>
      <p>
        Le vocabulaire commercial, lui, n'est pas normalisé. Le{" "}
        <a
          href="https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-annuel-2026-de-lobservatoire-des-produits-depargne-financiere-opef"
          target="_blank"
          rel="noreferrer"
        >
          rapport 2026 de l'Observatoire des produits d'épargne financière
        </a>{" "}
        (Banque de France, publié en juin 2026 et mis à jour en octobre 2026) note que les
        dénominations des modes de gestion « non libres » sont « peu standardisées » et varient d'un
        produit à l'autre. Trois termes reviennent.
      </p>
      <ul>
        <li>
          <strong>Gestion profilée.</strong> Les arbitrages suivent une grille de répartition
          prédéfinie selon un profil de risque générique, identique pour tous les épargnants du même
          profil.
        </li>
        <li>
          <strong>Gestion pilotée profilée.</strong> C'est la version encadrée par la loi : depuis
          le 24 octobre 2024, les contrats comportant des unités de compte doivent proposer des
          profils d'allocation mis en œuvre par un mandat d'arbitrage (
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049736233"
            target="_blank"
            rel="noreferrer"
          >
            article L. 132-5-4 du code des assurances
          </a>
          ), que l'
          <a
            href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049888609"
            target="_blank"
            rel="noreferrer"
          >
            arrêté du 1er juillet 2024
          </a>{" "}
          permet de qualifier de prudent, équilibré ou dynamique.
        </li>
        <li>
          <strong>Gestion sous mandat.</strong> Le mandataire gère selon des objectifs fixés avec
          vous, avec une latitude plus grande et, en général, un degré de personnalisation plus
          élevé.
        </li>
      </ul>
      <p>
        Les trois profils légaux obéissent à des planchers chiffrés, repris par service-public et
        par l'Observatoire. Ils portent sur le risque, pas sur la durabilité.
      </p>
      <table>
        <thead>
          <tr>
            <th>Profil de gestion pilotée</th>
            <th>Part minimale de supports à faible risque</th>
            <th>Part minimale des versements en actifs non cotés</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prudent</td>
            <td>50 % (30 % si l'horizon de placement dépasse 10 ans)</td>
            <td>Aucune obligation</td>
          </tr>
          <tr>
            <td>Équilibré</td>
            <td>30 % (20 % au-delà de 10 ans)</td>
            <td>4 %</td>
          </tr>
          <tr>
            <td>Dynamique</td>
            <td>20 % (10 % au-delà de 10 ans)</td>
            <td>8 %</td>
          </tr>
        </tbody>
      </table>
      <p>
        Les supports « à faible risque » sont le fonds en euros et les actifs dont l'indicateur de
        risque est au plus de 2 sur 7 ; les actifs non cotés recouvrent notamment le capital
        investissement. Retenez un point pour la suite : aucune ligne de ce tableau ne parle d'ISR.
        Un profil « équilibré » est un réglage de risque ; le mot « responsable » qui lui est
        parfois accolé relève de la présentation commerciale de chaque offre.
      </p>

      <h2>Gestion pilotée et gestion libre : le comparatif en un tableau</h2>
      <p>
        Les deux modes se séparent sur quatre critères : qui décide, ce que cela coûte en plus, ce
        que vous pouvez vérifier sur le contenu ISR, et le type d'épargnant auquel chacun
        correspond. Chacun a de vrais inconvénients.
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Gestion libre</th>
            <th>Gestion pilotée (profilée ou sous mandat)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Qui décide</strong>
            </td>
            <td>
              Vous, support par support et arbitrage par arbitrage. Inconvénient : personne ne le
              fait si vous ne le faites pas
            </td>
            <td>
              Le mandataire, dans les limites du profil écrit dans la convention. Inconvénient :
              vous acceptez la grille en bloc
            </td>
          </tr>
          <tr>
            <td>
              <strong>Frais en plus</strong>
            </td>
            <td>
              Frais de gestion du contrat de 0,79 % par an en moyenne sur les unités de compte ;
              arbitrages facturés 0,13 % du montant arbitré en moyenne (2025)
            </td>
            <td>
              Frais de gestion du contrat de 1,08 % par an en moyenne ; arbitrages en principe non
              facturés (0,00 % en moyenne en 2025)
            </td>
          </tr>
          <tr>
            <td>
              <strong>Transparence ISR</strong>
            </td>
            <td>
              Maximale si vous faites le travail : vous connaissez chaque fonds, son label, son
              annexe SFDR
            </td>
            <td>
              Variable : elle dépend de la grille que l'on accepte de vous communiquer. Le relevé
              annuel du mandat liste les supports détenus, pas leur part labellisée
            </td>
          </tr>
          <tr>
            <td>
              <strong>Part d'ISR atteignable</strong>
            </td>
            <td>Jusqu'à 100 % des unités de compte, si la gamme labellisée est assez large</td>
            <td>Celle de la grille, que vous ne modifiez pas</td>
          </tr>
          <tr>
            <td>
              <strong>Profil de lecteur</strong>
            </td>
            <td>
              Exigence éthique stricte, envie de comprendre, une à deux heures par an à y consacrer
            </td>
            <td>
              Peu de temps ou peu d'appétence, à condition d'avoir vérifié la grille avant de signer
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Les frais cités sont les moyennes 2025 du rapport 2026 de l'Observatoire des produits
        d'épargne financière (données ACPR) ; nous y revenons plus bas. Le même arbitrage se pose
        pour l'épargne retraite, avec des règles propres (gestion pilotée par défaut, sécurisation
        progressive) : il est traité dans{" "}
        <LienArticle slug="quel-per-choisir-investir-ethique-criteres">
          quel PER choisir pour investir de façon éthique
        </LienArticle>
        , à lire si votre projet porte sur un PER et non sur une assurance vie.
      </p>

      <h2>Une gestion pilotée « ISR » est-elle vraiment investie en ISR ?</h2>
      <p>
        Pas forcément, et rien ne l'y oblige : le Label ISR s'attribue à des fonds, pas à un contrat
        d'assurance vie ni à un profil de gestion. La part réellement labellisée d'une gestion
        pilotée « responsable » se calcule, elle ne se lit pas sur la plaquette.
      </p>
      <p>
        Le{" "}
        <a href="https://www.lelabelisr.fr/label-isr/" target="_blank" rel="noreferrer">
          site officiel du Label ISR
        </a>{" "}
        indique que le label est attribué à des fonds investis en actions ou en obligations, à des
        fonds immobiliers depuis 2020 et à des mandats de type institutionnel. Un épargnant y accède
        par les fonds logés dans son contrat. Autrement dit, quand une gestion pilotée se présente
        comme « ISR », « durable » ou « responsable », ce qualificatif est une dénomination
        commerciale : il ne renvoie à aucun seuil légal de fonds labellisés. Ce que garantit le
        label lui-même, et ce qu'il ne garantit pas, est détaillé dans{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          notre analyse du Label ISR
        </LienArticle>
        , utile avant de compter des fonds labellisés.
      </p>
      <p>Trois raisons structurelles font baisser la part d'ISR d'une grille pilotée.</p>
      <ul>
        <li>
          <strong>Le fonds en euros.</strong> Un profil prudent en contient au moins 30 à 50 %, sous
          forme de supports à faible risque. Or le fonds en euros est investi dans l'actif général
          de l'assureur, qui ne porte pas de label de fonds. Sa composition se lit ailleurs, comme
          nous l'expliquons dans{" "}
          <LienArticle slug="que-finance-votre-assurance-vie-comment-le-savoir">
            que finance votre assurance vie
          </LienArticle>
          .
        </li>
        <li>
          <strong>La poche non cotée.</strong> Elle est obligatoire dans les profils équilibré et
          dynamique. Son caractère responsable se vérifie fonds par fonds, avec une information
          souvent moins standardisée que celle d'un fonds coté.
        </li>
        <li>
          <strong>Les fonds « Article 8 » non labellisés.</strong> Une grille peut afficher une
          forte proportion de fonds classés Article 8 au sens du règlement SFDR sans qu'aucun ne
          porte de label. Cette classification est une catégorie de transparence, pas un niveau
          d'exigence : voir{" "}
          <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
            ce que garantit vraiment un fonds Article 8 ou 9
          </LienArticle>
          .
        </li>
      </ul>
      <h3>Le calcul de la part réelle, sur une grille fictive</h3>
      <div className="callout">
        <p>
          <strong>
            Grille inventée pour illustrer le calcul ; elle ne décrit aucune offre existante.
          </strong>{" "}
          Elle respecte les planchers du profil équilibré (au moins 30 % de supports à faible
          risque, au moins 4 % d'actifs non cotés).
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Ligne de la grille</th>
            <th>Poids</th>
            <th>Labellisée ?</th>
            <th>Classification SFDR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fonds en euros</td>
            <td>35 %</td>
            <td>Non (pas un fonds labellisable)</td>
            <td>Sans objet dans ce calcul</td>
          </tr>
          <tr>
            <td>Fonds actions</td>
            <td>25 %</td>
            <td>Label ISR</td>
            <td>Article 8</td>
          </tr>
          <tr>
            <td>Fonds obligataire</td>
            <td>20 %</td>
            <td>Non</td>
            <td>Article 8</td>
          </tr>
          <tr>
            <td>Fonds thématique environnement</td>
            <td>10 %</td>
            <td>Label Greenfin</td>
            <td>Article 9</td>
          </tr>
          <tr>
            <td>Fonds actions monde</td>
            <td>5 %</td>
            <td>Non</td>
            <td>Article 6</td>
          </tr>
          <tr>
            <td>Fonds d'actifs non cotés</td>
            <td>5 %</td>
            <td>Non</td>
            <td>Article 6</td>
          </tr>
        </tbody>
      </table>
      <p>La même grille donne trois « parts d'ISR » très différentes selon la façon de compter.</p>
      <ul>
        <li>
          <strong>55 %</strong> si l'on compte tous les fonds classés Article 8 ou 9 (25 + 20 + 10).
          C'est le chiffre le plus flatteur.
        </li>
        <li>
          <strong>35 %</strong> si l'on ne compte que les fonds porteurs d'un label public (25 +
          10), rapportés à l'ensemble du contrat.
        </li>
        <li>
          <strong>54 %</strong> si l'on rapporte ces mêmes fonds labellisés aux seules unités de
          compte (35 sur 65), en laissant le fonds en euros de côté.
        </li>
      </ul>
      <p>
        Aucun de ces trois chiffres n'est faux. Mais une plaquette qui annonce « plus de la moitié
        de la gestion investie en supports durables » et un épargnant qui comprend « plus de la
        moitié de mon argent dans des fonds labellisés » ne parlent pas de la même chose : ici,
        l'écart est de vingt points. La question utile n'est donc pas « cette gestion est-elle ISR ?
        » mais « quelle part, comptée comment, sur quelle base ? ». Pour vérifier un label ligne par
        ligne, le <a href="/outils/decodeur-label">décodeur de labels</a> indique ce que chaque
        label exige et où contrôler qu'un fonds le détient.
      </p>
      <p>
        Une grille n'est pas figée : le mandataire arbitre, des fonds entrent et sortent. Le relevé
        annuel prévu par l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049771471"
          target="_blank"
          rel="noreferrer"
        >
          article D. 133-1 du code des assurances
        </a>{" "}
        liste les supports dans lesquels le mandat est investi, la performance sur la période et la
        date de chaque arbitrage : de quoi refaire le calcul une fois par an.
      </p>

      <h2>Combien coûte la gestion pilotée en plus de la gestion libre ?</h2>
      <p>
        En moyenne, 0,29 point de frais de gestion par an sur les unités de compte : 1,08 % contre
        0,79 % en 2025, selon le rapport 2026 de l'Observatoire des produits d'épargne financière.
        En contrepartie, les arbitrages ne sont en principe pas facturés.
      </p>
      <p>
        Ces chiffres sont des moyennes pondérées de frais réellement perçus par les assureurs,
        collectées par l'ACPR, pour tous les contrats d'assurance vie et non pour les seuls contrats
        ISR. La catégorie « autres modes de gestion » regroupe la gestion pilotée, la gestion
        pilotée profilée, la gestion déléguée et la gestion sous mandat.
      </p>
      <table>
        <thead>
          <tr>
            <th>Poste de frais (moyenne 2025, unités de compte)</th>
            <th>Gestion libre</th>
            <th>Autres modes de gestion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frais sur versement</td>
            <td>0,54 % du versement</td>
            <td>0,65 % du versement</td>
          </tr>
          <tr>
            <td>Frais de gestion du contrat</td>
            <td>0,79 % par an</td>
            <td>1,08 % par an</td>
          </tr>
          <tr>
            <td>Frais d'arbitrage</td>
            <td>0,13 % du montant arbitré</td>
            <td>0,00 %</td>
          </tr>
          <tr>
            <td>Frais courants des fonds (moyenne de toutes les unités de compte)</td>
            <td colSpan={2}>
              1,60 % par an, quel que soit le mode de gestion : ils dépendent des fonds choisis
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        La dernière ligne compte autant que les autres. Le mode de gestion ne détermine pas
        seulement le prix du contrat : il détermine qui choisit les fonds, donc leur coût. Selon le
        même rapport, les frais courants vont de 0,29 % en moyenne pour les ETF actions à 1,80 %
        pour l'ensemble des fonds actions. Une gestion pilotée construite en fonds à gestion active
        et une gestion libre construite en fonds indiciels s'écartent alors de bien plus que 0,29
        point ; l'inverse est tout aussi possible. Le détail des couches de frais, et les trois
        montages types, sont dans{" "}
        <LienArticle slug="assurance-vie-isr-frais-reels-combien-ca-coute">
          combien coûte vraiment une assurance vie ISR
        </LienArticle>
        , à lire pour chiffrer l'ensemble et pas seulement le supplément de pilotage.
      </p>

      <h3>Exemple chiffré : l'écart de frais sur 15 ans</h3>
      <div className="callout">
        <p>
          <strong>
            Situation type construite pour illustrer le calcul, à partir de paramètres réalistes.
          </strong>{" "}
          Élodie verse 50 000 € en une fois et laisse l'épargne investie 15 ans, sans versement
          complémentaire ni rachat. Les hypothèses de rendement, de durée et de frais sont fournies
          à titre illustratif : elles ne constituent ni une prévision ni une garantie. Risque de
          perte en capital sur les unités de compte ; les performances passées ne préjugent pas des
          performances futures.
        </p>
      </div>
      <p>Les hypothèses, et pourquoi elles ont été retenues :</p>
      <ul>
        <li>
          <strong>Mêmes fonds dans les deux cas</strong>, à 1,60 % de frais courants (moyenne 2025
          des unités de compte) : c'est ce qui isole le seul effet du mode de gestion.
        </li>
        <li>
          <strong>Rendement brut de 4 % par an, constant et identique</strong> : un chiffre rond,
          déjà utilisé dans notre article sur les frais pour que les deux calculs se comparent. Un
          rendement constant n'existe pas ; il sert à isoler les frais, pas à prévoir.
        </li>
        <li>
          <strong>Frais du contrat</strong> : moyennes 2025 de l'Observatoire, soit 0,54 % à
          l'entrée et 0,79 % par an en gestion libre, 0,65 % à l'entrée et 1,08 % par an en gestion
          pilotée.
        </li>
        <li>
          <strong>Frais retirés du rendement</strong> : rendement net = 4 % moins les frais annuels
          du contrat et des fonds, avant impôts et prélèvements sociaux.
        </li>
        <li>
          <strong>15 ans</strong> : un horizon de long terme cohérent avec les unités de compte.
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Mode de gestion</th>
            <th>Frais annuels (contrat + fonds)</th>
            <th>Rendement net</th>
            <th>Capital après 15 ans</th>
            <th>Écart</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gestion libre</td>
            <td>0,79 % + 1,60 % = 2,39 %</td>
            <td>1,61 %</td>
            <td>63 192 €</td>
            <td>Référence</td>
          </tr>
          <tr>
            <td>Gestion pilotée, moyenne 2025</td>
            <td>1,08 % + 1,60 % = 2,68 %</td>
            <td>1,32 %</td>
            <td>60 474 €</td>
            <td>environ - 2 720 € (- 4,3 %)</td>
          </tr>
          <tr>
            <td>Gestion pilotée, supplément de 0,70 point (hypothèse)</td>
            <td>1,49 % + 1,60 % = 3,09 %</td>
            <td>0,91 %</td>
            <td>56 905 €</td>
            <td>environ - 6 290 € (- 9,9 %)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sur 15 ans, l'écart moyen de 0,29 point représente environ 2 720 € pour 50 000 € versés,
        soit 4,3 % du capital final. La troisième ligne n'est pas une moyenne : c'est une hypothèse
        de travail, pour montrer ce que devient l'écart quand le supplément de pilotage est plus
        élevé que la moyenne, ce que seule la lecture de votre contrat peut confirmer ou infirmer.
        La durée joue dans le même sens : avec les mêmes hypothèses moyennes, l'écart est d'environ
        1 340 € après 8 ans et d'environ 5 190 € après 25 ans.
      </p>
      <p>
        Deux précautions de lecture. La gestion libre a ses propres frais d'arbitrage : si Élodie
        arbitre chaque année 10 % de son épargne à 0,13 %, son capital final baisse d'environ 120 €,
        ce qui ne change pas l'ordre de grandeur. Et ce calcul compare des frais à rendement brut
        égal : il ne dit pas lequel des deux modes aurait obtenu le meilleur rendement brut. Le
        supplément rémunère un service réel (sélection, arbitrages, suivi) ; reste à savoir si vous
        en avez l'usage.
      </p>

      <h2>La gestion pilotée rapporte-t-elle plus que la gestion libre ?</h2>
      <p>
        Il n'existe pas de réponse générale, et cet article n'en donnera pas. La performance dépend
        du profil, des fonds retenus, de la période et, en gestion libre, de vos propres décisions ;
        les chiffres publics cités ici comparent des frais, pas des performances par mode de
        gestion.
      </p>
      <p>
        Deux lectures s'opposent. En faveur de la délégation : un mandataire rééquilibre sans
        émotion et applique une discipline que beaucoup d'épargnants ne tiennent pas seuls. En
        faveur de l'autonomie : le supplément de frais est certain, la valeur ajoutée ne l'est pas.
      </p>
      <p>
        Ce que vous pouvez faire, c'est exiger des éléments vérifiables. Si l'on vous présente les
        performances passées d'un profil, demandez sur quelle période, nettes de quels frais
        (contrat, mandat, fonds) et pour quel niveau de risque. Aucun profil, même « prudent », ne
        garantit le capital investi en unités de compte.
      </p>

      <h2>Quelles questions poser avant de souscrire une gestion pilotée « responsable » ?</h2>
      <p>
        Cinq questions suffisent, et chacune appelle un document, pas une réponse orale. Si l'un de
        ces documents ne peut pas vous être remis avant la signature, c'est déjà une information.
      </p>
      <ol>
        <li>
          <strong>
            « Pouvez-vous me remettre la grille d'allocation actuelle de ce profil, ligne par ligne
            ? »
          </strong>{" "}
          Nom de chaque support, poids, label éventuel, classification SFDR. C'est la seule base qui
          permet de calculer la part réelle, comme dans l'exemple plus haut.
        </li>
        <li>
          <strong>
            « Quels critères extra-financiers sont écrits dans la convention de mandat ? »
          </strong>{" "}
          La convention doit décrire le profil : niveau de risque, horizon, stratégie d'allocation,
          classes d'actifs, et le cas échéant planchers ou plafonds. Cherchez-y un engagement
          chiffré (part minimale de fonds labellisés, exclusions). S'il n'y en a pas, la mention «
          responsable » n'engage personne dans la durée.
        </li>
        <li>
          <strong>« Quel est le coût total, en pourcentage et par an ? »</strong> Frais de gestion
          du contrat en gestion pilotée, comparés à ceux de la gestion libre du même contrat ; frais
          courants de chaque fonds de la grille ; nature de la rémunération du mandataire, que la
          convention doit préciser.
        </li>
        <li>
          <strong>
            « Qui décide réellement des arbitrages, et avec quels liens financiers ? »
          </strong>{" "}
          Identité du mandataire, du délégataire éventuel, et liens financiers entre eux : ces
          mentions sont obligatoires dans la convention. Demandez aussi si la grille privilégie les
          fonds d'une société liée.
        </li>
        <li>
          <strong>« Comment puis-je en sortir, et que recevrai-je chaque année ? »</strong> Le
          mandat peut être résilié à tout moment et sans indemnité, avec effet sous trois mois au
          plus. Vérifiez les frais d'arbitrage applicables une fois revenu en gestion libre, et le
          contenu du relevé annuel.
        </li>
      </ol>
      <p>
        Ces obligations résultent des articles{" "}
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048244714"
          target="_blank"
          rel="noreferrer"
        >
          L. 132-27-4
        </a>{" "}
        et D. 133-1 du code des assurances, en vigueur depuis le 24 octobre 2024. Le premier prévoit
        aussi qu'avant la conclusion du mandat, le professionnel vous oriente vers un profil «
        cohérent avec les exigences et les besoins du mandant », en le motivant par écrit, puis
        vérifie périodiquement que ce profil reste adapté. Vos préférences de durabilité font partie
        de ce que vous exprimez à ce moment-là : notre guide{" "}
        <LienArticle slug="questionnaire-durabilite-assurance-vie-comment-repondre">
          questionnaire de durabilité : comment y répondre
        </LienArticle>{" "}
        explique ce que chaque réponse change dans l'offre qui peut vous être présentée.
      </p>

      <h2>Gestion pilotée ou gestion libre : pour quel épargnant ?</h2>
      <p>
        Le bon critère n'est ni votre fortune ni votre âge : c'est le rapport entre votre niveau
        d'exigence éthique et le temps que vous êtes réellement prêt à y consacrer.
      </p>
      <table>
        <thead>
          <tr>
            <th>Si vous vous reconnaissez dans…</th>
            <th>Mode le plus cohérent</th>
            <th>La condition à vérifier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              « Je veux savoir exactement ce que je finance, et pouvoir exclure ce que je refuse »
            </td>
            <td>Gestion libre</td>
            <td>
              Une gamme de fonds labellisés assez large pour diversifier (actions, obligations,
              monétaire)
            </td>
          </tr>
          <tr>
            <td>« Je n'ouvrirai pas mon espace client plus d'une fois par an »</td>
            <td>Gestion pilotée</td>
            <td>Une grille communiquée et une part labellisée calculée avant de signer</td>
          </tr>
          <tr>
            <td>« Je ne veux aucun actif non coté »</td>
            <td>Gestion libre, ou profil prudent</td>
            <td>Les profils équilibré et dynamique en contiennent au moins 4 % et 8 %</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notre grille de lecture, assumée et discutable : la gestion libre est la voie naturelle
        d'une exigence stricte, à condition de tenir le suivi ; la gestion pilotée est une option
        légitime pour qui veut de la simplicité, à condition que la grille ait été lue support par
        support. Une gestion libre jamais suivie n'est pas plus « éthique » qu'une gestion pilotée
        vérifiée. Ce tableau décrit des situations générales : il ne remplace pas l'examen de votre
        contrat et de vos objectifs.
      </p>
      <p>
        Le choix n'est pas définitif. Vous pouvez modifier sans frais votre profil d'allocation
        (article L. 132-5-4 du code des assurances) et résilier le mandat pour revenir en gestion
        libre. Certains contrats permettent aussi de panacher les deux modes sur des compartiments
        distincts : cela se vérifie dans les conditions générales. Et comme ces mouvements se font à
        l'intérieur du contrat, ils ne déclenchent pas d'impôt, ce que nous détaillons enveloppe par
        enveloppe dans{" "}
        <LienArticle slug="passer-epargne-isr-fiscalite-par-enveloppe">
          passer son épargne en ISR : quelle fiscalité
        </LienArticle>
        , la suite logique si vous détenez déjà un contrat.
      </p>

      <h3>Quatre erreurs à éviter au moment de choisir</h3>
      <p>
        Aucune ne tient à un manque de connaissances financières : elles tiennent toutes à un
        document qu'on n'a pas demandé.
      </p>
      <ul>
        <li>
          <strong>Prendre le nom du profil pour un engagement.</strong> « Responsable », « durable
          », « climat » ne sont pas des labels. Seule la convention de mandat et la grille engagent.
        </li>
        <li>
          <strong>Comparer les frais du contrat et oublier ceux des fonds.</strong> 0,29 point
          d'écart sur le contrat peut être effacé, ou triplé, par le coût des fonds retenus dans la
          grille.
        </li>
        <li>
          <strong>Confondre « prudent » et « garanti ».</strong> Un profil prudent contient encore
          des unités de compte, exposées au risque de perte en capital.
        </li>
        <li>
          <strong>Choisir la gestion libre et ne plus y revenir.</strong> Un fonds peut perdre son
          label, changer de stratégie ou de classification. La gestion libre suppose une
          vérification annuelle ; sans elle, vous cumulez les inconvénients des deux modes.
        </li>
      </ul>

      <h2>Vos questions sur la gestion pilotée et la gestion libre en assurance vie ISR</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Gestion pilotée ou libre : ce qu'il faut retenir avant de cocher la case</h2>
      <p>
        <strong>La réponse.</strong> Aucun des deux modes n'est « le plus éthique » par nature. La
        gestion libre vous donne le contrôle du contenu et un coût de contrat plus bas en moyenne
        (0,79 % contre 1,08 % par an en 2025), au prix d'un suivi qui vous incombe. La gestion
        pilotée vous décharge des décisions, au prix d'un supplément de frais et d'une part d'ISR
        qui dépend d'une grille à vérifier. Dans les deux cas, vous pouvez changer d'avis en cours
        de contrat.
      </p>
      <p>
        <strong>Le coût de l'inaction.</strong> Cocher une case sans avoir lu la grille, c'est
        risquer de payer pendant quinze ans un supplément pour une gestion dont un tiers seulement,
        ou moins, correspond à ce que vous pensiez financer. À l'inverse, choisir la gestion libre
        sans jamais la suivre, c'est laisser dériver un portefeuille que personne ne surveille.
      </p>
      <p>
        <strong>La prochaine étape.</strong> Demandez la grille et la convention de mandat, faites
        le calcul de la part labellisée, puis replacez ce choix dans l'ensemble du contrat avec{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">
          notre guide de l'assurance vie ISR
        </LienArticle>
        , qui passe en revue les autres critères de sélection (gamme, fonds en euros, frais).
      </p>
      <p>
        <strong>Et si vous préférez en parler.</strong> Vous pouvez échanger avec un conseiller du
        cabinet pour obtenir des pistes ; le premier échange est offert et sans engagement.{" "}
        <a href="/cgp-investissement-responsable">L'accompagnement proposé</a> ; grille de
        rémunération sur <a href="/tarifs">tarifs</a>.
      </p>
    </>
  );
}
