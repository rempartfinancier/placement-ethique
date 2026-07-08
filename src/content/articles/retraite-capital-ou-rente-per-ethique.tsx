import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "retraite-capital-ou-rente-per-ethique",
  title: "PER à la retraite : sortir en capital ou en rente viagère ?",
  excerpt:
    "Rente garantie à vie mais capital aliéné, ou capital conservé mais risque de longévité : fiscalité et critères concrets pour arbitrer votre sortie de PER.",
  readingTime: "11 min",
  category: "Fiscalité",
  date: "2026-06-27",
  tags: ["PER", "retraite", "rente viagère", "sortie en capital", "fiscalité", "liquidation"],
  author: "Sébastien Petrisot",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> il n'existe pas de bonne réponse universelle, mais des
          critères clairs. La <em>rente viagère</em> transforme votre PER en revenu garanti jusqu'à
          votre décès — au prix d'une opération définitive : le capital est aliéné, il ne se
          transmet plus (hors options payantes) et vous ne choisissez plus ce qu'il finance. La{" "}
          <em>sortie en capital</em>, souvent fractionnée sur plusieurs années pour lisser l'impôt,
          conserve le contrôle, la transmission et l'alignement de votre épargne avec vos valeurs —
          mais c'est vous qui portez le risque de vivre plus longtemps que votre capital. Le panaché
          des deux est autorisé et souvent pertinent : une rente pour couvrir les dépenses
          incompressibles, du capital pour le reste. Dans tous les cas, la décision se prépare
          plusieurs années avant la liquidation — pas le jour où l'assureur vous tend le formulaire.
        </p>
      </div>

      <p>
        Vous avez alimenté un PER pendant votre vie active — pour la déduction fiscale, pour la
        retraite, et peut-être en choisissant soigneusement des supports labellisés. La liquidation
        approche, et voilà que l'assureur pose la question que personne ne vous avait vraiment
        expliquée : capital, rente, ou un mélange des deux ? Vous sentez confusément que c'est un
        choix lourd. Vous avez raison : l'une des deux options est irréversible, les deux ont une
        fiscalité très différente — et aucun des comparatifs que vous avez lus ne vous dit ce que
        devient, après la liquidation, l'intention responsable qui vous a fait choisir ce plan.
      </p>
      <p>
        Posons les termes. La <strong>sortie en capital</strong> consiste à récupérer votre épargne,
        en une seule fois ou de manière fractionnée sur plusieurs années — un droit ouvert par la
        loi Pacte pour les versements volontaires du PER. La <strong>rente viagère</strong> consiste
        à confier définitivement votre capital à l'assureur, qui s'engage en échange à vous verser
        un revenu régulier jusqu'à votre décès, calculé selon un taux de conversion fondé sur votre
        âge et les tables de mortalité. Deux logiques opposées : dans un cas vous restez
        propriétaire d'un capital que vous devez faire durer, dans l'autre vous achetez une sécurité
        de revenu en renonçant au capital.
      </p>
      <p>
        Dans cet article : les options réellement ouvertes à la liquidation, la fiscalité vérifiée
        de chacune, un tableau comparatif pensé pour votre décision, l'angle que les comparatifs
        oublient — que finance votre épargne après la sortie ? — et notre méthode de préparation en
        quatre étapes.
      </p>

      <h2>Quelles sont vos options à la liquidation d'un PER ?</h2>
      <p>
        Pour les <strong>versements volontaires</strong> — le cœur d'un PER individuel —, vous avez
        trois possibilités à l'âge de la retraite : tout sortir en capital, en une fois ou en
        plusieurs fois ; convertir tout en rente viagère ; ou panacher librement les deux. Précision
        de périmètre : les sommes issues de versements obligatoires d'entreprise (l'ancien « article
        83 », devenu un compartiment du PER) sortent, elles, en rente — si votre PER a reçu un
        transfert de ce type, le choix ne porte que sur le reste.
      </p>
      <p>
        Deux asymétries méritent d'être comprises avant tout calcul. D'abord,{" "}
        <strong>la rente est irréversible</strong> : une fois l'option exercée, le capital est
        aliéné et l'opération ne se défait pas — alors qu'une sortie fractionnée se pilote,
        s'accélère ou se suspend au fil de vos besoins. Ensuite, tant que vous n'avez pas tout
        retiré, <strong>l'épargne restante demeure investie</strong> sur les supports de votre plan
        : elle continue de fluctuer, à la hausse comme à la baisse — le risque de perte en capital
        ne s'éteint pas à la retraite.
      </p>

      <h2>Quelle fiscalité pour la sortie en capital d'un PER ?</h2>
      <p>
        Si vous avez déduit vos versements de votre revenu imposable — le cas le plus fréquent —, la
        sortie en capital se décompose en deux parts, traitées différemment : la part correspondant
        à vos <strong>versements</strong> est imposée au barème progressif de l'impôt sur le revenu,
        sans prélèvements sociaux sur cette part ; la part correspondant aux <strong>gains</strong>{" "}
        subit le prélèvement forfaitaire unique, soit 31,4 % depuis le 1er janvier 2026 (12,8 %
        d'impôt et 18,6 % de prélèvements sociaux), comme le détaille{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        . L'avantage fiscal de l'entrée n'était donc pas un cadeau : c'était un report, et c'est ici
        qu'il se solde.
      </p>
      <p>
        La conséquence pratique est décisive : sortir un capital important en une seule fois gonfle
        votre revenu imposable de l'année et peut vous propulser dans des tranches supérieures —
        l'impôt reprend alors une part de ce que la déduction vous avait fait gagner. D'où l'intérêt
        du <strong>fractionnement</strong> : étaler les retraits sur plusieurs années lisse la part
        « versements » sur le barème, année après année, pendant que le solde reste investi. C'est
        l'un des arbitrages les plus rentables à préparer en amont — et l'une des raisons de ne pas
        décider dans la précipitation.
      </p>
      <p>
        Cas particulier : si vous aviez renoncé à la déduction à l'entrée, la part « versements »
        ressort exonérée d'impôt et de prélèvements sociaux — seuls les gains restent taxés au
        prélèvement forfaitaire unique.
      </p>

      <h2>Quelle fiscalité pour la rente viagère issue d'un PER ?</h2>
      <p>
        Pour des versements déduits, la rente est imposée comme une pension de retraite : elle
        s'ajoute chaque année à vos pensions et passe au barème progressif après l'abattement de 10
        % applicable aux pensions (abattement plafonné). S'y ajoutent les prélèvements sociaux —
        18,6 % depuis le 1er janvier 2026 — mais calculés sur une fraction de la rente seulement,
        déterminée par votre âge au premier versement : 40 % entre 60 et 69 ans, 30 % au-delà, selon{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          la même page de service-public.gouv.fr
        </a>
        .
      </p>
      <p>
        Pour des versements non déduits, le régime est plus doux : celui des rentes viagères à titre
        onéreux, où seule une fraction de la rente est imposable — là aussi 40 % si vous liquidez
        entre 60 et 69 ans, 30 % après 69 ans.
      </p>
      <p>
        Lecture d'ensemble : la rente étale mécaniquement l'imposition sur toute votre vie — aucun
        risque de « pic » de barème comme avec un capital sorti d'un coup. En contrepartie, chaque
        euro de rente imposable vient s'empiler, tous les ans, sur vos autres pensions : selon votre
        tranche marginale à la retraite, le prélèvement cumulé sur vingt-cinq ans de rente n'a rien
        d'anodin. Aucune des deux fiscalités ne « gagne » dans l'absolu — tout dépend du montant en
        jeu, de votre tranche à la retraite et du rythme de sortie choisi.
      </p>

      <h2>Capital ou rente : le tableau comparatif pour décider</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sortie en capital (souvent fractionnée)</th>
            <th>Rente viagère</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Nature du revenu</strong>
            </td>
            <td>Des retraits que vous pilotez, au montant et au rythme choisis</td>
            <td>Un revenu fixe garanti par l'assureur jusqu'à votre décès</td>
          </tr>
          <tr>
            <td>
              <strong>Risque de longévité</strong>
            </td>
            <td>Porté par vous : le capital peut s'épuiser si vous vivez très longtemps</td>
            <td>Porté par l'assureur : la rente est versée quelle que soit votre longévité</td>
          </tr>
          <tr>
            <td>
              <strong>Fiscalité (versements déduits)</strong>
            </td>
            <td>
              Versements au barème (lissables par fractionnement), gains au prélèvement forfaitaire
              unique
            </td>
            <td>
              Barème après abattement de 10 %, prélèvements sociaux sur une fraction selon l'âge
            </td>
          </tr>
          <tr>
            <td>
              <strong>Transmission au décès</strong>
            </td>
            <td>Le capital non consommé se transmet via la clause bénéficiaire du plan</td>
            <td>
              Rien ne se transmet, sauf options souscrites (réversion, annuités garanties) qui
              réduisent la rente
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ce que finance votre épargne</strong>
            </td>
            <td>Vous continuez de choisir les supports, tant que l'épargne reste investie</td>
            <td>
              Le capital rejoint l'actif général de l'assureur, dont vous ne choisissez pas la
              composition
            </td>
          </tr>
          <tr>
            <td>
              <strong>Réversibilité</strong>
            </td>
            <td>Totale : le rythme des retraits s'ajuste à tout moment</td>
            <td>Nulle : l'option est définitive une fois la rente liquidée</td>
          </tr>
          <tr>
            <td>
              <strong>Pour qui, d'abord</strong>
            </td>
            <td>
              Ceux qui veulent garder la main : pilotage, transmission, alignement des supports
            </td>
            <td>
              Ceux dont les pensions ne couvrent pas les dépenses incompressibles et qui veulent une
              sécurité à vie
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Lisez ce tableau comme une carte d'arbitrages, pas comme un verdict : chaque ligne avantage
        une colonne différente. Les trois lignes qui tranchent le plus souvent la décision : le
        risque de longévité, la transmission — et une ligne que les comparatifs classiques
        n'affichent jamais, celle du milieu.
      </p>

      <h2>Que finance votre épargne après la liquidation ?</h2>
      <p>
        C'est l'angle mort de ce débat, et sur un site comme le nôtre il mérite sa propre section.
        Pendant la phase d'épargne, vous avez — peut-être ligne à ligne — choisi des supports
        labellisés, vérifié des méthodologies d'exclusion, écarté ce qui ressemblait à du
        greenwashing. Que devient ce travail à la sortie ?
      </p>
      <p>
        En <strong>sortie fractionnée</strong>, la réponse est simple : l'épargne non retirée
        demeure investie sur les supports que vous avez choisis. Votre allocation responsable
        continue de vivre, et vous pouvez même réinvestir les capitaux retirés dans une enveloppe
        alignée — une assurance vie responsable, par exemple, dont notre guide{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">
          comment choisir une assurance vie ISR en 2026
        </LienArticle>{" "}
        détaille les critères de sélection, précisément parce que c'est la destination naturelle
        d'un capital de PER qu'on ne consomme pas immédiatement.
      </p>
      <p>
        En <strong>rente viagère</strong>, votre capital est aliéné : il quitte vos supports et
        rejoint l'actif général de l'assureur, ce grand portefeuille commun qui garantit l'ensemble
        de ses engagements. Sa composition n'est pas toujours publiée avec la transparence d'un
        fonds labellisé, et vous n'avez aucune prise sur elle. Certains assureurs publient une
        politique d'investissement durable de leur actif général — demandez-la avant d'opter, c'est
        une question parfaitement légitime à poser par écrit.
      </p>
      <p>
        Soyons justes : ce constat ne disqualifie pas la rente. La sécurité d'un revenu garanti à
        vie est un besoin réel, parfois prioritaire — et personne ne devrait s'imposer un risque de
        longévité par pureté d'allocation. L'alignement de votre épargne est un critère de la
        décision, pas un veto : notre grille de lecture consiste à le mettre sur la table à côté des
        autres, pas à la place des autres.
      </p>

      <h2>Comment préparer votre sortie : la méthode Horizon, Besoin, Fiscalité, Alignement</h2>
      <p>
        Quatre étapes, idéalement engagées cinq ans avant la liquidation — chacune répond à une
        question simple :
      </p>
      <ol>
        <li>
          <strong>Horizon — que fait votre plan à l'approche de la retraite ?</strong> Si votre PER
          est en gestion pilotée à horizon, il sécurise progressivement votre épargne vers des
          supports moins risqués. Vérifiez vers <em>quoi</em> il sécurise : ces supports de repli
          sont-ils cohérents avec vos exigences responsables, et avec un éventuel maintien en
          investissement pendant une sortie fractionnée ?
        </li>
        <li>
          <strong>Besoin — quel revenu incompressible vos pensions ne couvrent-elles pas ?</strong>{" "}
          Chiffrez l'écart entre vos dépenses contraintes (logement, santé, charges) et vos pensions
          attendues. C'est cet écart — et lui seul — qui peut justifier une rente : le confort et
          les projets se financent très bien par des retraits pilotés.
        </li>
        <li>
          <strong>Fiscalité — quel scénario laisse le plus dans votre poche ?</strong> Comparez un
          fractionnement sur cinq, huit ou dix ans à une rente, avec vos tranches réelles. Notre{" "}
          <a href="/outils/retraite">outil retraite</a> et notre{" "}
          <a href="/outils/simulateur">simulateur de projection</a> vous donnent des pistes
          chiffrées, frais et fiscalité inclus — sur des hypothèses illustratives : les performances
          passées ne préjugent pas des performances futures, et l'épargne investie en unités de
          compte reste exposée à un risque de perte en capital.
        </li>
        <li>
          <strong>Alignement — que devient votre épargne dans chaque scénario ?</strong> Supports
          conservés pendant le fractionnement, contrat de réinvestissement du capital, politique
          d'investissement de l'actif général si vous penchez vers la rente, clause bénéficiaire à
          jour et options de réversion : c'est le dernier contrôle avant de signer.
        </li>
      </ol>

      <h2>Vos questions sur la sortie du PER en capital ou en rente</h2>

      <h3>Peut-on combiner capital et rente ?</h3>
      <p>
        Oui, pour les versements volontaires le panaché est libre : vous pouvez par exemple
        convertir en rente la part nécessaire pour couvrir vos dépenses incompressibles et conserver
        le reste en capital, retiré à votre rythme. C'est souvent la réponse la plus robuste — elle
        achète la sécurité sans renoncer à tout le contrôle.
      </p>

      <h3>Peut-on changer d'avis après avoir choisi la rente ?</h3>
      <p>
        Non. La conversion en rente viagère est définitive : le capital est aliéné au profit de
        l'assureur en échange de son engagement de revenu à vie. C'est la raison pour laquelle cette
        option se décide documents en main, jamais sous la pression d'un formulaire de liquidation à
        retourner.
      </p>

      <h3>Ma rente serait minuscule : suis-je obligé de la prendre ?</h3>
      <p>
        Non. Lorsque la rente mensuelle n'excède pas 110 €, l'assureur peut, avec votre accord, la
        racheter et vous verser un capital unique à la place — un seuil fixé par l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043743273"
          target="_blank"
          rel="noreferrer"
        >
          article A160-2 du Code des assurances
        </a>
        . Sur un petit PER, la question capital/rente se referme donc souvent d'elle-même.
      </p>

      <h3>Que devient ma rente si je décède peu après la liquidation ?</h3>
      <p>
        Sans option particulière, les versements s'arrêtent et le capital restant est acquis à
        l'assureur — c'est la mutualisation qui permet de garantir les rentes des assurés qui vivent
        longtemps. Des options existent (réversion au profit du conjoint, annuités garanties) mais
        elles réduisent le montant servi. Sur tout ce que votre PER peut protéger — ou pas — pour
        vos proches, notre article{" "}
        <LienArticle slug="per-protection-familiale">
          le PER protège-t-il votre famille au-delà de l'avantage fiscal ?
        </LienArticle>{" "}
        est le complément direct de cette question.
      </p>

      <h3>La sortie fractionnée s'étale sur combien d'années ?</h3>
      <p>
        Il n'existe pas de durée légale unique : le rythme se définit avec votre assureur, selon les
        modalités du contrat. L'arbitrage est le vôtre : plus vous étalez, plus vous lissez le
        barème et plus l'épargne restante travaille — mais plus longtemps elle reste aussi exposée
        aux fluctuations des marchés.
      </p>

      <h3>Le capital sorti du PER peut-il être réinvesti de façon responsable ?</h3>
      <p>
        Oui, et c'est même le prolongement logique d'une démarche cohérente : un capital qui ne sera
        pas consommé rapidement peut alimenter une assurance vie investie en supports labellisés, de
        l'épargne solidaire ou un projet immobilier responsable. Gardez en tête que ce
        réinvestissement rouvre des frais d'entrée et un nouveau cadre fiscal — à intégrer au calcul
        global avant de sortir.
      </p>

      <h3>La rente est-elle revalorisée avec l'inflation ?</h3>
      <p>
        Pas automatiquement. La plupart des contrats prévoient une revalorisation annuelle liée aux
        résultats techniques et financiers de l'assureur, sans garantie d'indexation sur
        l'inflation. Sur vingt-cinq ou trente ans de retraite, l'écart entre une rente peu
        revalorisée et la hausse des prix peut éroder sensiblement votre pouvoir d'achat — demandez
        l'historique de revalorisation du contrat avant d'opter.
      </p>

      <h2>Décider tôt, c'est décider libre — et aligné</h2>
      <p>
        Repartez rassuré : bien préparée, la sortie du PER n'est pas un piège fiscal mais un
        arbitrage lisible. Quatre questions — votre horizon, votre besoin de revenu garanti, votre
        fiscalité, l'alignement de votre épargne — suffisent à dessiner la bonne combinaison, qui
        est rarement un choix binaire : pour beaucoup d'épargnants, un capital fractionné,
        éventuellement adossé à une petite rente de sécurité, coche l'essentiel des cases.
      </p>
      <p>
        Ne pas préparer cette décision a un coût bien réel : une sortie massive subie une année de
        forte imposition, une gestion pilotée qui sécurise vers des supports que vous n'auriez
        jamais choisis, ou une rente irréversible signée faute d'avoir chiffré l'alternative. Chaque
        année d'anticipation en moins réduit votre marge de manœuvre.
      </p>
      <p>
        Pour la suite logique de cette lecture : en amont de la liquidation, notre article{" "}
        <LienArticle slug="per-ethique-optimiser-retraite">
          comment optimiser sa retraite avec un PER éthique
        </LienArticle>{" "}
        couvre la phase d'épargne — versements, plafonds, choix des supports — dont la qualité
        conditionne tout ce que vous venez de lire. Et pour replacer le PER dans une stratégie
        retraite d'ensemble, pensions comprises,{" "}
        <LienArticle slug="preparer-retraite-epargne-alignee-valeurs">
          comment préparer sa retraite avec une épargne alignée sur ses valeurs
        </LienArticle>{" "}
        prend le sujet par le grand angle.
      </p>
      <p>
        Et si vous préférez poser vos chiffres sur la table plutôt que d'arbitrer seul : c'est notre
        métier. Lors d'un premier échange offert, un conseiller du cabinet passe en revue avec vous
        vos scénarios de sortie — rythme de fractionnement, opportunité d'une rente, clause
        bénéficiaire et destination du capital — documents à l'appui, sans jargon et sans
        engagement.
      </p>
    </>
  );
}
