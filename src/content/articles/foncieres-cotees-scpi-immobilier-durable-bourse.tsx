import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "foncieres-cotees-scpi-immobilier-durable-bourse",
  title:
    "Peut-on investir dans l'immobilier durable en bourse ? Foncières cotées, ETF et SCPI démêlés",
  excerpt:
    "Oui — via les foncières cotées (SIIC) et les ETF immobiliers. Les SCPI, elles, ne sont pas cotées. Ce que « durable » garantit vraiment pour chaque véhicule.",
  readingTime: "11 min",
  category: "Fondamentaux",
  date: "2026-04-28",
  tags: ["foncières cotées", "SIIC", "SCPI", "immobilier durable", "pierre-papier"],
  author: "Sébastien Petrisot",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>La réponse courte :</strong> oui, l'immobilier s'achète en bourse — via les
          foncières cotées (SIIC), des sociétés qui détiennent des immeubles et distribuent
          l'essentiel de leurs loyers, et via les ETF qui répliquent des indices immobiliers. Les
          SCPI, souvent citées dans la même phrase, ne sont <strong>pas</strong> cotées : c'est de
          la pierre-papier hors bourse, aux cours moins nerveux mais à la revente moins immédiate.
          Quant au mot « durable », il ne se décrète pas : il se vérifie dans les certifications du
          parc, la trajectoire énergétique et le reporting réglementaire — des documents publics
          que cet article vous apprend à lire.
        </p>
      </div>

      <p>
        Vous aimeriez que la part immobilière de votre épargne serve autre chose que des tours de
        bureaux énergivores — sans pour autant acheter un appartement, gérer des locataires ou
        immobiliser des centaines de milliers d'euros. Autour de vous, on parle de SCPI « ISR », de
        foncières cotées, d'ETF immobiliers, parfois comme s'il s'agissait du même produit. Et
        trois questions restent sans réponse claire : est-ce que ça se passe en bourse ? Est-ce que
        je peux revendre quand je veux ? Et ce « durable » mis en avant — qui le contrôle,
        exactement ?
      </p>
      <p>
        Tous ces véhicules appartiennent à la « pierre-papier » : vous détenez un titre (action ou
        part) adossé à des immeubles réels, et vous percevez votre quote-part des loyers. Mais la
        ressemblance s'arrête là — cotation, liquidité, fiscalité et méthodes de vérification du
        caractère durable diffèrent du tout au tout. Cet article démêle les trois grandes voies
        (foncières cotées, ETF immobiliers, SCPI), explique ce que « durable » veut dire pour un
        immeuble et pour un fonds, puis vous donne une méthode de vérification en trois lectures.
      </p>

      <h2>L'immobilier « en bourse », concrètement, ça passe par quoi ?</h2>
      <p>
        Par les <strong>foncières cotées</strong>. Une foncière est une société dont le métier est
        de détenir et d'exploiter un patrimoine immobilier — bureaux, commerces, logements,
        entrepôts, santé — et d'en encaisser les loyers. Quand elle est cotée en bourse, vous
        pouvez en acheter des actions comme n'importe quelle autre valeur, pour le prix d'un titre,
        en quelques secondes.
      </p>
      <p>
        En France, la plupart des grandes foncières cotées ont adopté le statut de{" "}
        <strong>SIIC</strong> (société d'investissements immobiliers cotée). Ce régime fiscal,
        prévu à l'article 208 C du code général des impôts, exonère la société d'impôt sur les
        sociétés sur ses résultats de location — à condition de les redistribuer massivement à ses
        actionnaires : au moins 95 % des bénéfices tirés de la location et 70 % des plus-values de
        cession, selon{" "}
        <a
          href="https://bofip.impots.gouv.fr/bofip/4487-PGP.html/identifiant=BOI-IS-CHAMP-30-20-40-20190327"
          target="_blank"
          rel="noreferrer"
        >
          le Bulletin officiel des finances publiques
        </a>
        . C'est ce mécanisme qui fait des foncières des valeurs traditionnellement distributrices
        de dividendes — jamais garantis pour autant. L'équivalent international s'appelle REIT
        (<em>real estate investment trust</em>).
      </p>
      <p>
        Deuxième voie boursière : les <strong>ETF immobiliers</strong>, des fonds indiciels cotés
        qui répliquent un panier de foncières — le plus souvent un indice de la famille FTSE EPRA
        Nareit, la référence du secteur de l'immobilier coté. Il en existe des déclinaisons
        « vertes », qui pondèrent les foncières selon la part certifiée de leur parc et leur
        intensité énergétique. La logique de vérification est exactement celle de n'importe quel
        ETF filtré :{" "}
        <LienArticle slug="etf-isr-debutants">
          la méthodologie de l'indice fait foi, pas le nom du produit
        </LienArticle>
        .
      </p>

      <h2>Une SCPI, est-ce que c'est de la bourse ?</h2>
      <p>
        Non — et c'est la confusion la plus répandue de toute la pierre-papier. Une SCPI (société
        civile de placement immobilier) est un fonds <strong>non coté</strong>, géré par une
        société de gestion agréée par l'AMF : vous souscrivez des parts auprès de la société de
        gestion ou d'un distributeur, pas sur un marché boursier. Conséquences très concrètes :
      </p>
      <ul>
        <li>
          <strong>Pas de cours en continu.</strong> Le prix de part est fixé périodiquement par la
          société de gestion, sur la base d'expertises immobilières — il ne bouge pas à chaque
          seconde au gré du marché.
        </li>
        <li>
          <strong>Une liquidité organisée, pas instantanée.</strong> Revendre des parts suppose de
          trouver une contrepartie ou de passer par le mécanisme de retrait du fonds ; en période
          de marché tendu, les délais peuvent s'allonger sensiblement.
        </li>
        <li>
          <strong>Une volatilité apparente plus faible — pas un risque plus faible.</strong> La
          remontée brutale des taux d'intérêt en 2022-2023 l'a illustré : les cours des foncières
          cotées ont chuté rapidement, puis plusieurs SCPI ont ajusté leur prix de part à la baisse
          des mois plus tard. Même choc immobilier, deux vitesses de traduction dans votre relevé.
        </li>
      </ul>
      <p>
        Pour être complet, il existe un véhicule hybride, l'OPCI — non coté lui aussi, mais conçu
        pour des retraits plus rapides. La réponse à la question de départ est donc claire :
        l'immobilier durable <em>en bourse</em>, c'est foncières cotées et ETF ; la SCPI en est le
        cousin hors bourse.
      </p>

      <h2>Qu'est-ce qui rend un immeuble — ou un fonds immobilier — « durable » ?</h2>
      <p>
        « Durable » recouvre deux réalités différentes, qu'il faut distinguer avant d'évaluer
        n'importe quel produit : la performance du <em>bâtiment</em> et la démarche du{" "}
        <em>véhicule</em> qui le détient.
      </p>
      <h3>Côté bâtiment : des obligations réglementaires, pas seulement des promesses</h3>
      <p>
        L'immobilier est l'un des rares secteurs où la transition n'est plus optionnelle. Deux
        cadres français structurent le sujet. Le dispositif Éco Énergie Tertiaire (issu du « décret
        tertiaire » pris en application de la loi ÉLAN) impose aux bâtiments abritant plus de
        1 000 m² d'activités tertiaires de réduire leur consommation d'énergie d'au moins 40 % en
        2030, 50 % en 2040 et 60 % en 2050 par rapport à 2010, avec un suivi annuel déclaré sur la
        plateforme OPERAT, selon{" "}
        <a
          href="https://www.ecologie.gouv.fr/politiques-publiques/eco-energie-tertiaire-eet"
          target="_blank"
          rel="noreferrer"
        >
          le ministère de la Transition écologique
        </a>
        . Côté logement, la loi Climat et Résilience interdit progressivement la location des
        passoires énergétiques : les logements classés G au DPE sont interdits de location depuis
        le 1er janvier 2025, les F le seront en 2028 et les E en 2034, comme le rappelle{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/actualites/A17975"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        .
      </p>
      <p>
        Traduction pour l'investisseur : un patrimoine mal classé énergétiquement n'est pas
        seulement un problème d'éthique, c'est un risque financier documenté — travaux à financer,
        loyers gelés ou actifs qui deviennent inlouables. À l'inverse, les certifications
        environnementales de bâtiments (HQE, BREEAM, LEED et leurs déclinaisons en exploitation)
        attestent qu'un immeuble respecte un référentiel précis.
      </p>
      <h3>Côté véhicule : labels, classification SFDR et reporting</h3>
      <p>
        Pour les fonds immobiliers non cotés (SCPI, OPCI), le Label ISR d'État leur est ouvert
        depuis un arrêté du 23 juillet 2020, avec un référentiel immobilier spécifique : le label
        est attribué pour trois ans, sur audit d'un organisme tiers indépendant, comme l'explique{" "}
        <a
          href="https://www.lelabelisr.fr/faq/mon-fonds-immobilier-est-il-eligible-au-label-isr/"
          target="_blank"
          rel="noreferrer"
        >
          le site officiel du label
        </a>
        . Il valide une <em>démarche</em> — analyse ESG du patrimoine, plan d'amélioration, suivi
        d'indicateurs — pas une garantie que chaque immeuble soit exemplaire ;{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que le Label ISR garantit et ne garantit pas
        </LienArticle>{" "}
        mérite d'être compris avant d'y adosser sa confiance. Ces fonds relèvent aussi, comme les
        fonds financiers, de la classification européenne SFDR (Article 6, 8 ou 9), déclarative
        elle aussi.
      </p>
      <p>
        Les foncières cotées, elles, sont des sociétés : elles ne portent pas de label de fonds,
        mais publient des rapports de durabilité de plus en plus encadrés au niveau européen, et
        beaucoup participent à des évaluations sectorielles comme le GRESB, qui note la performance
        ESG des patrimoines immobiliers.
      </p>

      <h2>Foncières cotées, ETF immobilier ou SCPI : comment choisir ?</h2>
      <p>
        Les trois véhicules donnent accès à la même classe d'actifs, mais ne répondent pas aux
        mêmes besoins. Voici la comparaison sous l'angle qui compte pour votre décision :
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Foncière cotée (SIIC)</th>
            <th>ETF immobilier</th>
            <th>SCPI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cotation et liquidité</td>
            <td>En bourse, achat/vente en continu aux heures de marché</td>
            <td>En bourse, achat/vente en continu aux heures de marché</td>
            <td>Hors bourse ; souscription et retrait via la société de gestion, délais variables</td>
          </tr>
          <tr>
            <td>Volatilité ressentie</td>
            <td>Celle d'une action : forte, sensible aux taux d'intérêt</td>
            <td>Celle d'un panier d'actions : forte mais diversifiée</td>
            <td>Prix de part lissé par expertises — les baisses arrivent plus tard, pas jamais</td>
          </tr>
          <tr>
            <td>Diversification</td>
            <td>Un seul patrimoine, une seule équipe : concentration réelle</td>
            <td>Des dizaines de foncières en une ligne</td>
            <td>Des dizaines à centaines d'immeubles par fonds</td>
          </tr>
          <tr>
            <td>Vérifier le « durable »</td>
            <td>Rapport de durabilité, part du parc certifiée, notation GRESB</td>
            <td>Méthodologie de l'indice répliqué + inventaire des positions</td>
            <td>Label ISR immobilier, classification SFDR, rapport annuel du fonds</td>
          </tr>
          <tr>
            <td>Enveloppes possibles</td>
            <td>Compte-titres ; assurance vie si le contrat la référence ; PEA exclu</td>
            <td>Compte-titres ; assurance vie selon la liste d'unités de compte du contrat</td>
            <td>En direct, ou en unités de compte d'assurance vie</td>
          </tr>
          <tr>
            <td>Point de vigilance principal</td>
            <td>Fiscalité des dividendes spécifique, risque de concentration</td>
            <td>Frais du contrat qui s'ajoutent à ceux de l'ETF en assurance vie</td>
            <td>Frais d'entrée élevés, horizon long quasi obligatoire</td>
          </tr>
        </tbody>
      </table>
      <div className="callout">
        <p>
          Un point fiscal souvent découvert trop tard : depuis le 21 octobre 2011, les actions de
          SIIC ne peuvent plus être inscrites dans un PEA, et leurs dividendes issus des bénéfices
          exonérés n'ouvrent pas droit à l'abattement de 40 % applicable aux dividendes classiques
          en cas d'imposition au barème — contrepartie de l'exonération dont bénéficie la
          foncière. Les règles sont détaillées au{" "}
          <a
            href="https://bofip.impots.gouv.fr/bofip/1556-PGP.html/identifiant=BOI-RPPM-RCM-40-50-20-20-20240516"
            target="_blank"
            rel="noreferrer"
          >
            Bulletin officiel des finances publiques
          </a>
          .
        </p>
      </div>
      <p>
        Si votre hésitation porte surtout sur la version non cotée,{" "}
        <LienArticle slug="scpi-isr-vs-scpi-classique">
          notre comparatif SCPI ISR contre SCPI classique
        </LienArticle>{" "}
        prolonge exactement cette colonne du tableau.
      </p>

      <h2>Comment vérifier qu'un véhicule immobilier est vraiment durable ?</h2>
      <p>
        Quelle que soit la voie choisie, la vérification suit le même fil, que nous appelons{" "}
        <strong>Parc → Trajectoire → Preuve</strong>. Comptez une heure de lecture — peu de chose
        au regard des années de détention.
      </p>
      <ol>
        <li>
          <strong>Le parc.</strong> Que détient réellement le véhicule ? Pour une foncière ou une
          SCPI, le rapport annuel liste les immeubles, leurs usages et souvent la part du
          patrimoine certifiée ou les étiquettes énergétiques. Pour un ETF, l'inventaire des
          positions dit quelles foncières vous financez. Un « fonds immobilier durable » qui ne
          détaille pas son patrimoine mérite votre méfiance.
        </li>
        <li>
          <strong>La trajectoire.</strong> Un parc immobilier ne devient pas sobre par
          déclaration : cherchez les objectifs chiffrés de réduction de consommation ou d'émissions,
          le plan de travaux qui les finance, et la référence aux obligations réglementaires
          (dispositif tertiaire, calendrier DPE). Acheter de l'ancien énergivore pour le rénover
          peut être une stratégie durable plus exigeante que de n'acheter que du neuf déjà
          certifié — l'important est que la trajectoire soit écrite et suivie.
        </li>
        <li>
          <strong>La preuve.</strong> Croisez les documents opposables : Label ISR immobilier et
          classification SFDR pour un fonds, rapport de durabilité et notation sectorielle pour une
          foncière, méthodologie d'indice pour un ETF — et le DIC dans tous les cas pour les frais
          et le niveau de risque. Notre <a href="/outils/decodeur-label">décodeur de labels</a>{" "}
          vous donne des pistes pour lire chaque tampon : ce qu'il garantit, ce qu'il ne garantit
          pas, et où vérifier qu'un produit le détient vraiment.
        </li>
      </ol>

      <h2>Quels pièges guettent l'investisseur en immobilier coté « vert » ?</h2>
      <h3>Confondre stabilité du prix et sécurité du placement</h3>
      <p>
        La SCPI paraît tranquille parce que son prix bouge peu ; la foncière cotée paraît risquée
        parce que son cours bouge tous les jours. Les deux détiennent pourtant le même type
        d'actifs, exposés aux mêmes cycles. La cotation rend le risque <em>visible</em>, elle ne le
        crée pas — et l'absence de cotation ne le supprime pas.
      </p>
      <h3>La vitrine certifiée qui cache le reste du parc</h3>
      <p>
        Mettre en avant un immeuble phare ultra-certifié pendant que la majorité du patrimoine
        reste énergivore est le mécanisme de greenwashing le plus courant du secteur — décrit ici
        génériquement, car seul le rapport annuel de chaque véhicule permet de juger un cas précis.
        Le bon réflexe : chercher la <em>part</em> du patrimoine certifiée ou alignée sur une
        trajectoire, pas la photo de couverture.
      </p>
      <h3>Croire qu'un label immobilier garantit la performance</h3>
      <p>
        Le Label ISR immobilier valide une démarche de gestion, pas un rendement, et pas davantage
        l'absence de baisse du prix de part. Un fonds labellisé reste un placement immobilier, avec
        ses cycles, ses vacances locatives et ses frais.
      </p>
      <h3>Oublier la sensibilité aux taux d'intérêt</h3>
      <p>
        Les foncières travaillent avec de la dette : quand les taux montent, leur coût de
        financement grimpe et la valeur de leurs immeubles est mécaniquement questionnée. C'est le
        premier facteur de volatilité du secteur coté — un facteur de marché, que le meilleur
        reporting ESG du monde ne neutralise pas.
      </p>
      <div className="callout">
        <p>
          Foncières cotées, ETF immobiliers et SCPI présentent tous un risque de perte en capital,
          et les performances passées ne préjugent pas des performances futures. Le caractère
          durable d'un patrimoine porte sur ce que finance votre épargne — pas sur le risque de
          marché, qui demeure entier.
        </p>
      </div>

      <h2>Vos questions sur l'immobilier durable en bourse</h2>
      <h3>Les SCPI sont-elles cotées en bourse ?</h3>
      <p>
        Non. Les parts de SCPI se souscrivent et se revendent hors marché boursier, via la société
        de gestion ou un distributeur. C'est précisément ce qui explique leur prix lissé — et leurs
        délais de revente potentiellement longs.
      </p>
      <h3>Une foncière cotée peut-elle avoir le Label ISR ?</h3>
      <p>
        Non : le Label ISR s'applique à des fonds, pas à des actions individuelles. Une foncière
        démontre sa démarche par son rapport de durabilité et ses certifications d'immeubles ; en
        revanche, un fonds ou un ETF qui détient des foncières peut, lui, être candidat au label.
      </p>
      <h3>Peut-on loger des foncières cotées dans un PEA ?</h3>
      <p>
        Non, plus depuis octobre 2011 : les titres de SIIC et de leurs équivalents européens sont
        exclus du PEA (ceux qui y figuraient avant ont pu y rester). Restent le compte-titres et,
        selon les contrats, l'assurance vie.
      </p>
      <h3>L'immobilier coté est-il plus risqué que la SCPI ?</h3>
      <p>
        Il est plus volatil, ce qui n'est pas exactement la même chose. Le sous-jacent est
        comparable ; la différence tient à la façon dont le risque s'exprime : au jour le jour pour
        le coté, par ajustements différés et contraintes de liquidité pour le non coté. À vous de
        savoir laquelle des deux expressions vous supportez le mieux.
      </p>
      <h3>Avec combien peut-on commencer ?</h3>
      <p>
        En bourse, le ticket d'entrée est le prix d'une action ou d'une part d'ETF — quelques
        dizaines à quelques centaines d'euros. Une part de SCPI se situe généralement dans le même
        ordre de grandeur de quelques centaines d'euros, avec parfois un minimum de plusieurs
        parts. L'immobilier coté est donc l'une des portes d'entrée les plus accessibles vers la
        pierre.
      </p>
      <h3>Un immeuble certifié est-il forcément sobre en énergie ?</h3>
      <p>
        Pas nécessairement. Certaines certifications portent sur la conception ou la construction,
        d'autres sur l'exploitation réelle : un bâtiment certifié à sa livraison peut consommer
        beaucoup plus que prévu des années après. D'où l'importance des indicateurs de consommation
        réelle dans le reporting, pas seulement de la liste des tampons.
      </p>
      <h3>Les foncières versent-elles vraiment des dividendes réguliers ?</h3>
      <p>
        Le régime SIIC les oblige à distribuer l'essentiel de leurs bénéfices locatifs exonérés —
        c'est la contrepartie de leur régime fiscal. Mais l'obligation porte sur les bénéfices
        réalisés : si les loyers ou les valeurs chutent, le dividende peut baisser ou être suspendu.
        Régulier par construction ne veut pas dire garanti.
      </p>

      <h2>Bourse ou hors bourse : la pierre durable se vérifie avant de s'acheter</h2>
      <p>
        Vous avez désormais la réponse complète : oui, l'immobilier durable s'investit en bourse —
        par les foncières cotées et les ETF immobiliers — et la SCPI en offre la version non cotée,
        avec d'autres règles de liquidité. Aucune des trois voies n'est « la bonne » dans l'absolu :
        le choix dépend de votre besoin de liquidité, de votre tolérance à la volatilité et de
        l'enveloppe où vous logez le placement. Ce qui ne change jamais, c'est la méthode : parc,
        trajectoire, preuve.
      </p>
      <p>
        Attendre a un coût, lui aussi vérifiable : la réglementation énergétique resserre chaque
        année l'étau sur les patrimoines mal classés, et une épargne laissée sur des supports par
        défaut ne finance ni vos projets ni la rénovation du parc immobilier. Rester spectateur ne
        supprime pas le risque — cela vous prive seulement de choisir ce que votre argent
        construit.
      </p>
      <p>
        Pour la suite logique : si c'est la dimension patrimoniale globale qui vous questionne —
        direct, pierre-papier, rénovation —{" "}
        <LienArticle slug="investissement-immobilier-responsable-commencer">
          notre guide pour commencer un investissement immobilier responsable
        </LienArticle>{" "}
        reprend la décision depuis le début ; et avant tout achat de fonds labellisé, passez le
        tampon au crible avec le <a href="/outils/decodeur-label">décodeur de labels</a>.
      </p>
      <p>
        Et si vous hésitez encore entre la nervosité du coté et la lenteur du non coté, c'est une
        conversation que nous avons chaque semaine au cabinet : venez avec le nom de la foncière,
        de l'ETF ou de la SCPI qui vous intrigue, nous lirons ensemble son rapport, sa trajectoire
        et ses preuves. Le premier échange est offert.
      </p>
    </>
  );
}
