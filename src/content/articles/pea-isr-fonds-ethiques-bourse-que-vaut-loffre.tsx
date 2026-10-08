import type { ArticleMeta } from "../article-types";
import { FaqArticle } from "./faq";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "pea-isr-fonds-ethiques-bourse-que-vaut-loffre",
  title: "PEA ISR : que vaut vraiment l'offre éthique en bourse ?",
  excerpt:
    "Un PEA peut accueillir des fonds éthiques, mais pas tous les fonds ISR. Éligibilité, fiscalité 2026, limites du label et méthode de vérification, sans promesse.",
  readingTime: "9 min",
  category: "Enveloppes",
  date: "2026-10-08",
  tags: ["PEA", "Label ISR", "enveloppes", "fonds ISR", "fiscalité"],
  author: "Sébastien Petrisot",
  faq: [
    {
      q: "Un fonds labellisé ISR est-il automatiquement éligible au PEA ?",
      a: "Non. L'éligibilité au PEA dépend de la composition du fonds (notamment sa part d'actions de sociétés européennes), pas de son label. Un fonds peut être labellisé ISR sans être éligible au PEA, et inversement. La mention figure dans la documentation du fonds ou de l'ETF ; en cas de doute, demandez-la par écrit à votre courtier.",
    },
    {
      q: "Un PEA ISR existe-t-il comme produit à part ?",
      a: "Non, il n'existe pas de « PEA ISR » réglementaire : c'est un PEA classique dans lequel vous choisissez des supports ISR éligibles. L'expression est une commodité de langage, pas un statut.",
    },
    {
      q: "Quel est le plafond de versements du PEA ?",
      a: "Le plafond de versements d'un PEA est de 150 000 euros selon la fiche de l'AMF citée dans l'article. Vérifiez-le à la date de votre versement, les plafonds pouvant évoluer.",
    },
    {
      q: "Le PEA est-il vraiment sans impôt après 5 ans ?",
      a: "Après 5 ans, les gains sont exonérés d'impôt sur le revenu, mais restent soumis aux prélèvements sociaux, dont le taux est de 18,6 % pour les gains réalisés depuis le 1er janvier 2026 selon la source citée dans l'article. « Sans impôt » est donc inexact.",
    },
    {
      q: "Le délai de 5 ans court-il dès l'ouverture du PEA ?",
      a: "Non : il court à compter du premier versement, d'après le médiateur de l'AMF. Ouvrir un PEA sans l'alimenter ne fait pas démarrer l'horloge fiscale.",
    },
    {
      q: "Un PEA ISR est-il plus risqué ou plus performant qu'un PEA classique ?",
      a: "Aucune règle ne permet de l'affirmer. Un fonds ISR reste un fonds d'actions : il peut baisser, et sa performance dépend de sa gestion, de ses frais et de son marché, pas de son label.",
    },
    {
      q: "Faut-il choisir un PEA ou une assurance vie pour investir de façon éthique ?",
      a: "Ce n'est pas un choix exclusif. Le PEA est centré sur les actions européennes ; l'assurance vie donne accès à un éventail plus large de supports, dont l'immobilier ou les fonds en euros, avec des règles de transmission propres. Le bon équilibre dépend de votre horizon et de votre patrimoine global.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> le PEA peut accueillir des fonds et des ETF éthiques, mais
          l'offre n'est pas aussi large qu'en assurance vie, et le logo ISR ne suffit ni à rendre un
          fonds éligible, ni à garantir qu'il corresponde à vos valeurs. Trois filtres successifs
          sont nécessaires : l'éligibilité au PEA, la solidité de la démarche ISR, puis l'inventaire
          réel du portefeuille. Le PEA reste intéressant pour sa fiscalité après cinq ans — mais pas
          « sans impôt », puisque les prélèvements sociaux s'appliquent toujours.
        </p>
      </div>

      <p>
        Vous voulez investir en bourse sans financer ce que vous réprouvez. Vous ouvrez un PEA, vous
        cherchez « fonds ISR » dans le catalogue de votre courtier, et vous découvrez que certains
        fonds sont éligibles, d'autres non, sans que la raison soit évidente. Pire : un fonds
        éligible peut porter le logo ISR et détenir des entreprises que vous n'attendiez pas.
      </p>
      <p>
        Le PEA (plan d'épargne en actions) est une enveloppe fiscale dédiée aux actions de sociétés
        européennes et aux fonds qui en détiennent. L'expression « PEA ISR » n'a pas de définition
        réglementaire : elle désigne un PEA dans lequel on choisit des supports se réclamant de
        l'investissement socialement responsable. Nous voyons ci-dessous ce que cela permet, ce que
        cela limite, et comment vérifier vous-même.
      </p>

      <h2>Qu'est-ce qu'un « PEA ISR » exactement ?</h2>
      <p>
        Il n'existe ni plan spécial ni avantage fiscal supplémentaire pour l'ISR. Un PEA est un PEA
        ; l'ISR se joue au niveau des supports que vous y placez. Deux notions distinctes se
        superposent donc :
      </p>
      <ul>
        <li>
          <strong>L'enveloppe</strong> (le PEA) définit ce qui peut y entrer et comment les gains
          sont taxés ;
        </li>
        <li>
          <strong>Le support</strong> (action, fonds, ETF) porte ou non une démarche ISR, un label,
          une classification SFDR.
        </li>
      </ul>
      <p>
        Cette distinction évite une erreur fréquente : croire qu'un fonds est éligible au PEA parce
        qu'il est « responsable », ou qu'il est responsable parce qu'il est dans un PEA.
      </p>

      <h2>Un fonds labellisé ISR est-il éligible au PEA ?</h2>
      <p>
        Pas nécessairement. Selon l'
        <a
          href="https://www.amf-france.org/sites/institutionnel/files/pdf/59240/fr/PEA__tout_savoir_sur_le_plan_d%27epargne_en_actions.pdf"
          target="_blank"
          rel="noreferrer"
        >
          AMF
        </a>
        , le PEA accueille les actions de sociétés ayant leur siège dans l'Union européenne ou
        l'Espace économique européen, ainsi que des fonds investis à 75 % au moins dans de telles
        actions. Un fonds actions monde, même labellisé, n'entre donc pas dans un PEA, sauf montage
        spécifique (certains ETF répliquent des indices mondiaux de manière à rester éligibles).
      </p>
      <p>
        Le label ISR, lui, est attribué fonds par fonds après un audit indépendant ; il ne dit rien
        de l'éligibilité fiscale. Le raisonnement est donc toujours en deux temps : le fonds est-il
        éligible ? puis la démarche est-elle crédible ? Notre article sur le{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">Label ISR</LienArticle> détaille ce
        que le label certifie — et ce qu'il laisse de côté.
      </p>

      <h2>Quels avantages fiscaux pour un PEA éthique en 2026 ?</h2>
      <p>
        La fiscalité est celle du PEA, indépendante de l'ISR. D'après{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F22449"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        , les gains restent exonérés d'impôt sur le revenu tant qu'ils demeurent dans le plan ; un
        retrait avant cinq ans est taxé à 12,8 % (avec option possible pour le barème), et après
        cinq ans les gains sont exonérés d'impôt sur le revenu. Dans tous les cas, les prélèvements
        sociaux s'appliquent.
      </p>
      <p>
        Point d'actualité : selon la{" "}
        <a
          href="https://www.cic.fr/banqueprivee/fr/principales-mesures-fiscales-2026.html"
          target="_blank"
          rel="noreferrer"
        >
          synthèse de CIC Banque Privée
        </a>
        , le taux global des prélèvements sociaux est passé à 18,6 % depuis le 1er janvier 2026 pour
        les gains de PEA, tandis que les produits des contrats d'assurance vie et de capitalisation
        ne sont pas concernés par cette hausse. Cet écart mérite d'être pris en compte dans un
        arbitrage entre enveloppes, sans en faire à lui seul un critère de choix.
      </p>
      <p>
        <strong>Illustration, pas une projection :</strong> pour un gain imaginaire de 1 000 €
        retiré après cinq ans, les prélèvements sociaux à 18,6 % représenteraient 186 €, et aucun
        impôt sur le revenu. Ce calcul ne présume ni du gain réel, ni de l'évolution future des
        taux.
      </p>
      <p>
        Autre règle souvent méconnue, rappelée par le{" "}
        <a
          href="https://www.boursedirect.fr/fr/la-finance-et-moi/fiscalite/pea-et-nouveau-label-isr-2025-ce-que-vous-devez-absolument-savoir-bourse-direct-8cb6f08af3dd1d1b9bf576eb1c19e498f09fb288"
          target="_blank"
          rel="noreferrer"
        >
          médiateur de l'AMF via Bourse Direct
        </a>
        : le délai de cinq ans court à compter du premier versement, pas de l'ouverture. Un PEA
        ouvert et laissé vide ne démarre aucune ancienneté.
      </p>

      <h2>Quelles limites pour investir éthique dans un PEA ?</h2>
      <p>Le PEA a des atouts, mais l'investisseur éthique doit en connaître les contraintes :</p>
      <ul>
        <li>
          <strong>Un univers géographique restreint.</strong> Les entreprises européennes sont
          soumises à des cadres de déclaration extra-financière parfois plus avancés qu'ailleurs, ce
          qui peut faciliter l'analyse ; mais votre diversification mondiale est limitée.
        </li>
        <li>
          <strong>Uniquement des actions.</strong> Pas de fonds en euros, pas d'immobilier, pas
          d'obligations vertes en direct : l'exposition est celle des marchés actions, avec leurs
          fluctuations.
        </li>
        <li>
          <strong>Un label qui n'est pas un inventaire.</strong> Depuis la réforme applicable aux
          fonds labellisés au 1er janvier 2025, le label exclut notamment le charbon, les
          hydrocarbures non conventionnels et les nouveaux projets fossiles, et écarte les 30 %
          d'émetteurs les moins bien notés. Il ne garantit pas l'absence de toute entreprise
          contestable à vos yeux.
        </li>
      </ul>

      <h2>PEA, assurance vie, compte-titres : comment les comparer ?</h2>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>PEA</th>
            <th>Assurance vie</th>
            <th>Compte-titres</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supports possibles</td>
            <td>Actions européennes et fonds éligibles</td>
            <td>Fonds en euros, unités de compte, souvent SCPI</td>
            <td>Très large</td>
          </tr>
          <tr>
            <td>Fiscalité des gains</td>
            <td>Exonération d'impôt sur le revenu après 5 ans, prélèvements sociaux dus</td>
            <td>Règles propres selon l'ancienneté et les versements</td>
            <td>Fiscalité des revenus du capital, sans avantage d'enveloppe</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>Intégré à la succession</td>
            <td>Régime spécifique des bénéficiaires</td>
            <td>Intégré à la succession</td>
          </tr>
          <tr>
            <td>Choix éthique</td>
            <td>Étroit, centré sur l'Europe</td>
            <td>Étendu, contrat par contrat</td>
            <td>Le plus large, mais aucune fiscalité dédiée</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pour une vue d'ensemble, voyez notre guide sur{" "}
        <LienArticle slug="quelle-enveloppe-investissement-ethique">
          le choix de l'enveloppe pour investir éthique
        </LienArticle>{" "}
        et celui sur l'
        <LienArticle slug="assurance-vie-isr-guide-2026">assurance vie ISR</LienArticle>.
      </p>

      <h2>Comment vérifier qu'un fonds ou un ETF de votre PEA est vraiment éthique ?</h2>
      <p>Quatre vérifications, dans cet ordre, valent mieux que n'importe quelle brochure :</p>
      <ol>
        <li>
          <strong>L'éligibilité au PEA</strong>, écrite dans la documentation du fonds ou de l'ETF
          ou confirmée par votre courtier.
        </li>
        <li>
          <strong>Le label</strong>, contrôlé sur la{" "}
          <a href="https://www.lelabelisr.fr/" target="_blank" rel="noreferrer">
            liste officielle du Label ISR
          </a>{" "}
          et non sur un argumentaire commercial.
        </li>
        <li>
          <strong>La classification SFDR</strong> (article 8 ou 9), dont la portée est limitée :
          voir{" "}
          <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
            ce que SFDR garantit
          </LienArticle>
          .
        </li>
        <li>
          <strong>L'inventaire des principales lignes</strong>, comparé à vos propres exclusions.
          C'est la seule preuve directe.
        </li>
      </ol>
      <p>
        Pour la méthode complète, consultez{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          comment repérer le greenwashing d'un fonds
        </LienArticle>
        , et pour les trackers, notre{" "}
        <LienArticle slug="etf-isr-debutants">guide des ETF ISR pour débuter</LienArticle>.
      </p>

      <h2>Vos questions sur le PEA ISR</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Alors, le PEA ISR vaut-il la peine ?</h2>
      <p>
        <strong>Résolution :</strong> le PEA peut très bien porter une partie de votre épargne
        éthique, si vous acceptez un univers actions européen et une exposition aux marchés. Ce
        n'est ni une solution complète, ni un placement plus sûr ou plus performant parce qu'il est
        ISR.
      </p>
      <p>
        <strong>Rappel :</strong> éligibilité, démarche ISR, inventaire — trois filtres distincts.
        Le logo ne remplace aucun des deux autres, et la fiscalité du PEA, avantageuse après cinq
        ans, n'exonère pas des prélèvements sociaux.
      </p>
      <p>
        <strong>Prochaine étape :</strong> testez votre tolérance au risque avec le{" "}
        <a href="/outils/profil-investisseur">test de profil investisseur</a>, puis décodez les
        labels avec notre <a href="/outils/decodeur-label">décodeur de labels</a>.
      </p>
      <p>
        Et si vous préférez en discuter, c'est le métier de{" "}
        <a href="/cgp-investissement-responsable">notre cabinet</a> : prenez rendez-vous pour un
        premier échange gratuit et sans engagement avec un conseiller ; venez avec le nom du fonds
        qui vous intéresse, nous en vérifierons l'inventaire avec vous.
      </p>
    </>
  );
}
