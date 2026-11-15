import type { ArticleMeta } from "../article-types";
import { FaqArticle } from "./faq";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "passer-epargne-isr-fiscalite-par-enveloppe",
  title: "Passer son épargne en ISR : quelle fiscalité par enveloppe ?",
  excerpt:
    "Arbitrer dans une assurance vie, un PEA ou un PER ne déclenche aucun impôt ; vendre sur un compte-titres ou racheter un contrat, si. Le détail en 2026.",
  readingTime: "15 min",
  category: "Fiscalité",
  date: "2026-11-14",
  tags: ["assurance vie", "fiscalité", "ISR", "PER", "PEA", "compte-titres"],
  author: "Sébastien Petrisot",
  faq: [
    {
      q: "Comment passer mon assurance vie en ISR sans perdre l'antériorité fiscale ?",
      a: "En restant dans le contrat : un arbitrage vers les unités de compte labellisées de sa gamme ne fait sortir aucune somme, donc ne déclenche ni impôt ni nouveau décompte de huit ans. Si la gamme est trop pauvre, la transformation du contrat auprès du même assureur conserve aussi la date du premier versement, selon la doctrine fiscale. Seul le rachat suivi d'une réouverture ailleurs fait repartir le compteur à zéro.",
    },
    {
      q: "Un arbitrage dans une assurance vie est-il imposable ?",
      a: "Non. L'impôt sur les gains d'une assurance vie est dû en cas de rachat ou de dénouement du contrat, pas lorsque vous changez de supports à l'intérieur. Le contrat peut en revanche prévoir des frais d'arbitrage, à lire dans son annexe de frais.",
    },
    {
      q: "Puis-je transférer mon assurance vie chez un autre assureur ?",
      a: "Pas avec maintien de l'antériorité fiscale. À la date de rédaction (14 novembre 2026), la transformation sans conséquence fiscale n'est prévue qu'auprès de la même entreprise d'assurance (article 125-0 A du code général des impôts). Changer d'assureur suppose de racheter le contrat puis d'en souscrire un autre : les gains rachetés sont imposés et le nouveau contrat démarre son propre décompte de huit ans.",
    },
    {
      q: "Vendre mes fonds sur un compte-titres pour acheter des fonds ISR, est-ce imposable ?",
      a: "Oui, si la vente dégage une plus-value. Elle est soumise au prélèvement forfaitaire unique de 31,4 % en 2026 (12,8 % d'impôt sur le revenu et 18,6 % de prélèvements sociaux), ou au barème sur option. Le fait de racheter aussitôt un autre fonds ne change rien : sur un compte-titres, chaque vente est un événement fiscal.",
    },
    {
      q: "Est-ce que je paie des impôts si je change de fonds dans mon PEA ?",
      a: "Non, tant que l'argent reste dans le plan. Dans un PEA, ce sont les retraits qui comptent, pas les ventes et achats réalisés à l'intérieur. Attention en revanche au retrait avant cinq ans, qui entraîne en principe la clôture du plan.",
    },
    {
      q: "Peut-on changer de PER pour un PER mieux doté en fonds ISR ?",
      a: "Oui, le PER individuel est transférable vers un autre PER. Les frais de transfert sont plafonnés à 1 % de l'épargne si le plan a moins de cinq ans et le transfert est gratuit au-delà, selon service-public.gouv.fr. Avant de transférer, il est souvent plus simple de regarder si la gamme du plan actuel suffit : un changement de supports à l'intérieur du plan ne fait sortir aucune somme.",
    },
    {
      q: "Faut-il tout basculer en une seule fois ?",
      a: "Rien ne l'impose. Sur une assurance vie, un PEA ou un PER, basculer par arbitrage n'a pas de coût fiscal, donc le rythme dépend surtout de votre vérification des supports. Sur un compte-titres, étaler les ventes sur plusieurs années répartit l'impôt mais ne le supprime pas. Dans tous les cas, c'est une décision qui dépend de votre situation et qui se prend chiffres en main.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> passer son épargne à l'ISR ne coûte aucun impôt tant que
          l'argent ne sort pas de son enveloppe. Arbitrer vers des supports labellisés à l'intérieur
          d'une assurance vie, d'un PEA ou d'un PER ne déclenche ni impôt ni perte d'ancienneté. Ce
          qui coûte : vendre des titres en plus-value sur un compte-titres (31,4 % en 2026), ou
          racheter une assurance vie pour en rouvrir une ailleurs (gains imposés, décompte de huit
          ans remis à zéro). Entre les deux, la transformation d'un contrat auprès du même assureur
          conserve la date du premier versement. Chiffres et règles vérifiés sur sources officielles
          le 14 novembre 2026.
        </p>
      </div>

      <p>
        Vous avez décidé que votre épargne devait mieux correspondre à vos convictions. Puis vous
        avez ouvert vos relevés : une assurance vie de douze ans investie dans des fonds que vous
        n'avez jamais vraiment choisis, un compte-titres en plus-value, peut-être un PEA ou un PER.
        Et la question arrive, très concrète : si je change tout, est-ce que je paie l'impôt sur mes
        gains ? Est-ce que je perds les huit ans de mon contrat ?
      </p>
      <p>
        C'est le frein le plus fréquent, et il repose sur une confusion. L'investissement
        socialement responsable (ISR) se décide au niveau des <strong>supports</strong> (les fonds
        que vous détenez). La fiscalité, elle, se joue au niveau de l'<strong>enveloppe</strong>{" "}
        (assurance vie, PEA, PER, compte-titres) et, plus précisément, au moment où l'argent en
        sort. Cet article passe en revue six façons de basculer, dit pour chacune ce que le fisc en
        retient, donne un exemple chiffré et liste les cinq erreurs qui coûtent le plus cher. Il ne
        refait pas le choix d'une enveloppe : pour cela, voir{" "}
        <LienArticle slug="quelle-enveloppe-investissement-ethique">
          quelle enveloppe pour investir de façon éthique
        </LienArticle>
        , qui compare les quatre cadres avant toute ouverture.
      </p>

      <h2>Peut-on passer son assurance vie en ISR sans perdre l'antériorité fiscale ?</h2>
      <p>
        Oui, dans deux cas sur trois : l'arbitrage à l'intérieur du contrat et la transformation du
        contrat auprès du même assureur conservent tous deux la date d'origine. Seul le rachat suivi
        d'une réouverture la fait perdre.
      </p>
      <p>
        L'« antériorité fiscale » désigne l'ancienneté du contrat, comptée depuis le premier
        versement. Elle compte parce que le régime des rachats s'adoucit après huit ans. D'après{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F22414"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>{" "}
        (fiche vérifiée le 15 avril 2026), pour les primes versées depuis le 27 septembre 2017, les
        gains d'un contrat de moins de huit ans sont imposés à 12,8 % (ou au barème sur option).
        Après huit ans, ils bénéficient d'un abattement annuel de 4 600 € (9 200 € pour un couple
        soumis à imposition commune), tous contrats confondus, puis d'un taux de 7,5 % pour la part
        correspondant à des primes n'excédant pas 150 000 €, et de 12,8 % au-delà. S'y ajoutent les
        prélèvements sociaux, en principe au taux de 17,2 % pour l'assurance vie, sans abattement.
      </p>
      <p>Trois voies existent, de la plus légère à la plus lourde.</p>
      <ol>
        <li>
          <strong>L'arbitrage.</strong> Vous déplacez votre épargne d'un support à un autre dans le
          même contrat. Aucune somme ne sort : l'impôt, qui frappe le rachat ou le dénouement, n'a
          pas lieu de s'appliquer, et la date du contrat ne bouge pas. Limite : vous ne pouvez
          choisir que parmi les supports référencés par ce contrat.
        </li>
        <li>
          <strong>La transformation auprès du même assureur.</strong> Depuis la loi Pacte (
          <a
            href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000038496267"
            target="_blank"
            rel="noreferrer"
          >
            article 72 de la loi du 22 mai 2019
          </a>
          ), un contrat peut être transformé, par avenant ou par souscription d'un nouveau contrat
          auprès de la même entreprise d'assurance, sans les conséquences fiscales d'un dénouement.
          La{" "}
          <a
            href="https://bofip.impots.gouv.fr/doctrine/pgp/9312-PGP"
            target="_blank"
            rel="noreferrer"
          >
            doctrine fiscale (BOFiP, BOI-RPPM-RCM-30-10-20-20)
          </a>{" "}
          précise que le nouveau contrat est réputé souscrit à la date du premier versement sur le
          contrat d'origine, et que cette antériorité vaut aussi pour les règles applicables au
          décès. Limites : la transformation ne se fait qu'auprès du même organisme assureur et vers
          un contrat de même nature, et c'est l'assureur qui décide des contrats de destination
          qu'il ouvre à cette opération.
        </li>
        <li>
          <strong>Le rachat suivi d'une réouverture.</strong> Vous récupérez votre épargne puis
          souscrivez un autre contrat, chez un autre assureur par exemple. Les gains compris dans le
          rachat sont imposés selon les règles ci-dessus, et le nouveau contrat démarre son propre
          décompte de huit ans.
        </li>
      </ol>
      <p>
        Pour la méthode qui consiste à faire évoluer un contrat sans le fermer, et pour ce qui
        distingue vraiment un contrat « éthique » d'un contrat ordinaire, la suite logique est{" "}
        <LienArticle slug="assurance-vie-ethique-ou-classique-differences">
          assurance vie éthique ou classique : quelles différences
        </LienArticle>
        .
      </p>

      <h2>Quelle opération déclenche l'impôt quand on bascule vers l'ISR ?</h2>
      <p>
        La règle tient en une phrase : l'impôt se déclenche quand l'argent sort d'une enveloppe ou,
        sur un compte-titres, à chaque vente en plus-value. Le caractère ISR ou non du support
        d'arrivée n'a aucune incidence fiscale.
      </p>
      <p>
        Le tableau résume six opérations, à la date de rédaction (14 novembre 2026). Les taux
        s'entendent pour un résident fiscal français, hors contribution exceptionnelle sur les hauts
        revenus.
      </p>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Impôt déclenché ?</th>
            <th>Ancienneté fiscale</th>
            <th>Ce qu'il faut regarder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Arbitrage dans une assurance vie</strong>
            </td>
            <td>Non</td>
            <td>Conservée</td>
            <td>Frais d'arbitrage éventuels ; profondeur de la gamme labellisée du contrat</td>
          </tr>
          <tr>
            <td>
              <strong>Transformation du contrat chez le même assureur</strong>
            </td>
            <td>Non (pas de dénouement fiscal)</td>
            <td>Conservée (date du premier versement d'origine)</td>
            <td>
              Contrats de destination proposés par l'assureur ; frais du nouveau contrat ; écrit
              confirmant la conservation de la date
            </td>
          </tr>
          <tr>
            <td>
              <strong>Rachat d'une assurance vie puis réouverture ailleurs</strong>
            </td>
            <td>
              Oui, sur les gains rachetés : 12,8 % avant huit ans ; après huit ans, abattement de 4
              600 € ou 9 200 € puis 7,5 % ou 12,8 % ; plus 17,2 % de prélèvements sociaux
            </td>
            <td>Perdue : le nouveau contrat repart de zéro</td>
            <td>Gains latents ; âge du souscripteur ; frais sur versement du nouveau contrat</td>
          </tr>
          <tr>
            <td>
              <strong>Vente de titres sur un compte-titres</strong>
            </td>
            <td>Oui, sur la plus-value : 31,4 % (12,8 % + 18,6 %), ou barème sur option</td>
            <td>Sans objet (pas de régime lié à l'ancienneté du compte)</td>
            <td>
              Plus-value latente ligne par ligne ; moins-values disponibles ; frais de courtage
            </td>
          </tr>
          <tr>
            <td>
              <strong>Vente et rachat de titres à l'intérieur d'un PEA</strong>
            </td>
            <td>Non, tant qu'il n'y a pas de retrait</td>
            <td>Conservée (transfert complet vers un autre établissement inclus)</td>
            <td>Éligibilité des fonds ISR au PEA ; pas de retrait avant cinq ans</td>
          </tr>
          <tr>
            <td>
              <strong>Changement de supports ou transfert d'un PER</strong>
            </td>
            <td>Non : la fiscalité s'applique à la sortie du plan</td>
            <td>Sans objet pour l'impôt ; cinq ans de détention pour un transfert sans frais</td>
            <td>Frais de transfert (1 % au plus avant cinq ans) ; mode de gestion du plan</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources : pour l'assurance vie,{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F22414"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr (rachats)
        </a>{" "}
        et{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2329"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr (prélèvements sociaux)
        </a>{" "}
        ; pour le compte-titres,{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F21618"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr (plus-values mobilières)
        </a>{" "}
        ; pour le PEA,{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2385"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr (PEA)
        </a>{" "}
        ; pour le PER,{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr (PER individuel)
        </a>
        . Pages consultées le 14 novembre 2026.
      </p>
      <div className="callout">
        <p>
          <strong>À retenir sur les taux 2026.</strong> Depuis le 1er janvier 2026, les prélèvements
          sociaux sur les placements sont de 18,6 % dans le cas général, ce qui porte le prélèvement
          forfaitaire unique à 31,4 %. L'assurance vie reste en principe à 17,2 %. Deux taux
          coexistent donc selon la nature du revenu : c'est l'une des raisons pour lesquelles le
          même gain ne coûte pas le même impôt d'une enveloppe à l'autre. La loi de finances pour
          2027 n'est pas votée à la date de rédaction : ces règles peuvent évoluer.
        </p>
      </div>

      <h2>Arbitrage, transformation ou rachat : par où commencer ?</h2>
      <p>
        Par l'opération la moins coûteuse fiscalement qui suffit à atteindre votre objectif. L'arbre
        de décision ci-dessous suit cet ordre ; il décrit une logique générale, pas une marche à
        suivre adaptée à votre cas.
      </p>
      <ol>
        <li>
          <strong>Où est logée l'épargne à basculer ?</strong>
          <ul>
            <li>Assurance vie : passez à la question 2.</li>
            <li>PEA ou PER : passez à la question 4.</li>
            <li>Compte-titres : passez à la question 5.</li>
          </ul>
        </li>
        <li>
          <strong>
            La gamme du contrat contient-elle des supports labellisés qui vous conviennent ?
          </strong>
          <ul>
            <li>
              Oui : l'arbitrage suffit. Aucun impôt, ancienneté intacte. Le code des assurances
              (article L. 131-1-2) impose d'ailleurs aux contrats comportant des unités de compte de
              référencer au moins une unité de compte pour chaque label reconnu par l'État, dont le
              Label ISR et le label Greenfin, ainsi qu'une unité de compte solidaire.
            </li>
            <li>Non, ou trop peu : passez à la question 3.</li>
          </ul>
        </li>
        <li>
          <strong>
            L'assureur propose-t-il de transformer le contrat vers un contrat mieux doté de sa gamme
            ?
          </strong>
          <ul>
            <li>
              Oui : la transformation conserve la date d'origine. Restent à comparer les frais du
              contrat de destination.
            </li>
            <li>
              Non : deux options demeurent. Garder l'ancien contrat pour son ancienneté et ouvrir un
              second contrat pour les nouveaux versements ; ou racheter, en connaissant le coût
              (voir l'exemple chiffré plus bas). Un contrat de moins de huit ans, en faible
              plus-value, se quitte à moindre coût qu'un contrat ancien fortement valorisé.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            PEA ou PER : les supports voulus sont-ils accessibles dans le plan actuel ?
          </strong>
          <ul>
            <li>Oui : la bascule se fait à l'intérieur du plan, sans impôt.</li>
            <li>
              Non : le plan peut être transféré vers un autre établissement, sans que le transfert
              soit traité comme un retrait (conditions plus bas).
            </li>
          </ul>
        </li>
        <li>
          <strong>Compte-titres : la ligne à vendre est-elle en plus-value ?</strong>
          <ul>
            <li>
              Non (moins-value ou valeur stable) : la vente ne coûte pas d'impôt, et une moins-value
              s'impute sur les plus-values de même nature de l'année, puis des dix années suivantes.
            </li>
            <li>
              Oui : la vente est imposée. Plusieurs leviers existent sans que l'un s'impose : vendre
              d'abord les lignes les moins valorisées, compenser avec des moins-values, étaler sur
              plusieurs années, ou laisser la ligne en place et diriger les nouveaux versements vers
              des supports ISR.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Cet arbre ne dit rien de la qualité des supports d'arrivée. Avant d'arbitrer, la
        vérification du label et de l'inventaire du fonds reste la vôtre :{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que le Label ISR garantit vraiment
        </LienArticle>{" "}
        explique ce qu'un label certifie et ce qu'il laisse à votre charge.
      </p>

      <h2>Peut-on transférer son assurance vie chez un autre assureur ?</h2>
      <p>
        Non, pas en conservant l'antériorité fiscale : à la date de rédaction (14 novembre 2026),
        aucun texte en vigueur ne permet à l'épargnant de transférer son contrat d'assurance vie
        chez un autre assureur sans les conséquences fiscales d'un dénouement.
      </p>
      <p>
        L'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044989424"
          target="_blank"
          rel="noreferrer"
        >
          article 125-0 A du code général des impôts
        </a>{" "}
        (I, 2°, version en vigueur depuis le 1er janvier 2022) réserve la transformation sans
        dénouement fiscal à un avenant ou à la souscription d'un nouveau contrat « auprès de la même
        entreprise d'assurance ». La doctrine fiscale est tout aussi explicite sur le périmètre : le
        contrat ne peut être transformé « qu'auprès du même organisme assureur », en un contrat de
        même nature (
        <a
          href="https://bofip.impots.gouv.fr/doctrine/pgp/9312-PGP"
          target="_blank"
          rel="noreferrer"
        >
          BOFiP, BOI-RPPM-RCM-30-10-20-20, paragraphe 360
        </a>
        ). Concrètement, la transformation prend la forme d'un avenant, ou du transfert de l'épargne
        vers un nouveau contrat du même assureur. Elle peut être partielle : dans ce cas, le contrat
        d'origine continue de fonctionner et garde lui aussi son ancienneté.
      </p>
      <p>Trois précisions utiles avant de solliciter votre assureur :</p>
      <ul>
        <li>
          <strong>Le même assureur n'est pas forcément le même distributeur.</strong> Le contrat que
          vous avez souscrit auprès d'une banque, d'un courtier en ligne ou d'un cabinet est porté
          par une entreprise d'assurance, dont le nom figure sur vos conditions particulières. C'est
          elle qui compte pour la règle.
        </li>
        <li>
          <strong>L'assureur n'est pas tenu d'accepter.</strong> La loi l'oblige à vous informer une
          fois par an de la possibilité et des conditions de transformation de votre contrat, pas à
          ouvrir tous ses contrats à cette opération.
        </li>
        <li>
          <strong>La conservation de la date se demande par écrit.</strong> Un avenant ou un
          courrier mentionnant la date de souscription d'origine évite toute discussion le jour d'un
          rachat.
        </li>
      </ul>
      <p>
        À l'inverse, le PEA et le PER sont transférables d'un établissement à un autre. C'est une
        différence de nature entre enveloppes, détaillée plus bas.
      </p>

      <h2>Compte-titres ou assurance vie : combien coûte la bascule vers l'ISR ?</h2>
      <p>
        À gain latent égal, vendre sur un compte-titres coûte plus cher que racheter une assurance
        vie de plus de huit ans, et arbitrer dans le contrat ne coûte rien. L'exemple ci-dessous
        donne les ordres de grandeur.
      </p>
      <div className="callout">
        <p>
          <strong>
            Situation type construite pour illustrer le calcul, à partir de paramètres réalistes.
          </strong>{" "}
          Elle ne décrit aucun client, aucun contrat ni aucun fonds réel. Hypothèses : personne
          seule, résidente fiscale française ; 40 000 € versés, valant aujourd'hui 60 000 €, soit 20
          000 € de gains latents (un chiffre rond, choisi pour la lisibilité) ; imposition au taux
          forfaitaire, sans option pour le barème ; assurance vie entièrement investie en unités de
          compte, primes versées après le 27 septembre 2017 et inférieures à 150 000 € ; aucun autre
          rachat dans l'année ; taux en vigueur au 14 novembre 2026 ; frais du contrat, de courtage
          et d'arbitrage non pris en compte. Les performances passées ne préjugent pas des
          performances futures ; les unités de compte et les titres présentent un risque de perte en
          capital.
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Scénario</th>
            <th>Impôt sur le revenu</th>
            <th>Prélèvements sociaux</th>
            <th>Coût fiscal total</th>
            <th>Somme réinvestie en ISR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>A. Compte-titres : vente totale puis rachat de fonds ISR</strong>
            </td>
            <td>2 560 € (12,8 % de 20 000 €)</td>
            <td>3 720 € (18,6 %)</td>
            <td>6 280 €</td>
            <td>53 720 €</td>
          </tr>
          <tr>
            <td>
              <strong>B. Assurance vie : arbitrage dans le contrat</strong>
            </td>
            <td>0 €</td>
            <td>0 €</td>
            <td>0 €</td>
            <td>60 000 €</td>
          </tr>
          <tr>
            <td>
              <strong>C. Assurance vie de plus de 8 ans : rachat total puis nouveau contrat</strong>
            </td>
            <td>1 155 € (7,5 % de 15 400 €, après abattement de 4 600 €)</td>
            <td>3 440 € (17,2 % de 20 000 €)</td>
            <td>4 595 €</td>
            <td>55 405 €, ancienneté remise à zéro</td>
          </tr>
          <tr>
            <td>
              <strong>
                D. Assurance vie de moins de 8 ans : rachat total puis nouveau contrat
              </strong>
            </td>
            <td>2 560 € (12,8 % de 20 000 €)</td>
            <td>3 440 € (17,2 %)</td>
            <td>6 000 €</td>
            <td>54 000 €, ancienneté remise à zéro</td>
          </tr>
        </tbody>
      </table>
      <p>Trois enseignements, au-delà des montants.</p>
      <ul>
        <li>
          <strong>
            L'arbitrage laisse 60 000 € au travail, contre 53 720 € à 55 405 € ailleurs.
          </strong>{" "}
          L'écart, de 4 595 € à 6 280 €, est le prix d'une sortie d'enveloppe, pas le prix de l'ISR.
        </li>
        <li>
          <strong>Cet impôt est en partie une avance, pas une pure perte.</strong> Sur un
          compte-titres, la plus-value aurait été imposée le jour d'une vente future ; après la
          bascule, le prix d'acquisition des nouveaux titres repart de leur valeur d'achat. Ce que
          vous perdez réellement, c'est le rendement que l'impôt payé plus tôt aurait pu produire,
          et, pour l'assurance vie, les années d'ancienneté.
        </li>
        <li>
          <strong>Un rachat partiel n'embarque qu'une fraction des gains.</strong> Dans un rachat
          partiel, la part imposable est calculée au prorata (
          <a
            href="https://bofip.impots.gouv.fr/bofip/3951-PGP.html"
            target="_blank"
            rel="noreferrer"
          >
            BOFiP, BOI-RPPM-RCM-20-10-20-50
          </a>
          ). Sur ce contrat, un rachat de 15 000 € contient 5 000 € de gains (15 000 € moins 40 000
          € x 15 000 / 60 000). Après huit ans, l'abattement de 4 600 € en absorbe l'essentiel :
          l'impôt sur le revenu tombe à 30 € et les prélèvements sociaux à 860 €, soit 890 € au
          total. C'est le mécanisme qui explique pourquoi un contrat ancien se quitte parfois par
          étapes annuelles plutôt qu'en une fois.
        </li>
      </ul>
      <p>
        Pour refaire la comparaison entre enveloppes avec d'autres durées et d'autres montants, le{" "}
        <a href="/outils/comparateur-enveloppes">comparateur d'enveloppes</a> donne des pistes de
        lecture ; il ne remplace pas le calcul sur vos relevés réels.
      </p>

      <h2>PEA et PER : comment basculer vers des supports ISR sans impôt ?</h2>
      <p>
        En restant à l'intérieur du plan : dans un PEA comme dans un PER, vendre un support pour en
        acheter un autre n'est pas un événement fiscal, parce que l'impôt ne s'applique qu'aux
        retraits (PEA) ou à la sortie (PER).
      </p>
      <h3>PEA : la règle des cinq ans et le transfert</h3>
      <p>
        D'après{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2385"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>{" "}
        (fiche vérifiée le 22 mai 2026), tout retrait avant la fin de la cinquième année entraîne en
        principe la clôture du plan ; après cinq ans, les gains retirés sont exonérés d'impôt sur le
        revenu mais restent soumis aux prélèvements sociaux, quelle que soit la date du retrait.
        Sortir de l'argent d'un PEA pour acheter des fonds ISR ailleurs est donc la seule manœuvre
        coûteuse. Si votre établissement ne propose pas les supports recherchés, le plan peut
        changer de teneur de compte : selon la{" "}
        <a
          href="https://bofip.impots.gouv.fr/doctrine/pgp/2275-PGP"
          target="_blank"
          rel="noreferrer"
        >
          doctrine fiscale (BOFiP, BOI-RPPM-RCM-40-50-60, version du 26 octobre 2026)
        </a>
        , le transfert d'un PEA d'un organisme gestionnaire à un autre ne constitue pas un retrait
        s'il porte sur l'intégralité des titres et espèces du plan, et l'ancien gestionnaire
        communique au nouveau la date d'ouverture. Limite propre au PEA : seuls les titres et fonds
        éligibles y entrent, ce qui écarte une partie de l'offre ISR, notamment obligataire. Le
        guide <LienArticle slug="etf-isr-debutants">choisir un ETF ISR quand on débute</LienArticle>{" "}
        détaille ce point d'éligibilité, utile avant de vendre quoi que ce soit dans le plan.
      </p>
      <h3>PER : changer de supports, de mode de gestion ou de plan</h3>
      <p>
        Dans un PER, la fiscalité s'applique à la sortie. Changer de supports à l'intérieur du plan
        ne fait rien sortir. Un point pratique : selon{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>{" "}
        (fiche vérifiée le 12 octobre 2026), l'épargne est placée par défaut en gestion pilotée,
        sauf mention contraire de votre part. Choisir soi-même des supports ISR suppose donc souvent
        de modifier d'abord le mode de gestion, si le contrat le permet. Si la gamme reste trop
        étroite, le PER individuel se transfère vers un autre PER : frais plafonnés à 1 % de
        l'épargne accumulée avant cinq ans de détention, transfert gratuit au-delà, et un délai de
        deux mois pour l'ancien gestionnaire. Les anciens produits (Perp, contrat Madelin, Perco,
        article 83) peuvent eux aussi être transférés vers un PER, avec des frais pouvant atteindre
        5 % si le produit a moins de dix ans. Les critères de comparaison des gammes sont dans{" "}
        <LienArticle slug="quel-per-choisir-investir-ethique-criteres">
          quel PER choisir pour investir de façon éthique
        </LienArticle>
        , à lire avant tout transfert.
      </p>

      <h2>Quelles sont les 5 erreurs fréquentes quand on bascule son épargne vers l'ISR ?</h2>
      <p>
        Elles ont un point commun : confondre le changement de supports, qui ne coûte rien, avec la
        sortie d'une enveloppe, qui coûte.
      </p>
      <ol>
        <li>
          <strong>Clôturer un contrat ancien pour « passer à l'éthique ».</strong> C'est renoncer à
          l'abattement annuel et au taux de 7,5 % pour le futur contrat pendant huit ans, alors que
          les contrats en unités de compte doivent déjà référencer des supports labellisés.
        </li>
        <li>
          <strong>Croire que l'antériorité se transfère d'un assureur à l'autre.</strong> Elle ne se
          conserve que dans le contrat lui-même ou lors d'une transformation auprès du même
          organisme assureur.
        </li>
        <li>
          <strong>Oublier l'effet de l'âge sur la transmission.</strong> Les sommes versées après 70
          ans relèvent d'un régime distinct de celles versées avant, comme le rappelle{" "}
          <a
            href="https://www.impots.gouv.fr/particulier/questions/je-suis-beneficiaire-dune-assurance-vie-comment-la-declarer"
            target="_blank"
            rel="noreferrer"
          >
            impots.gouv.fr
          </a>
          . Racheter après 70 ans un contrat alimenté avant cet âge, pour reverser sur un nouveau
          contrat, change le traitement de ces sommes au décès.
        </li>
        <li>
          <strong>Vendre tout un compte-titres sans regarder les lignes une à une.</strong> La
          plus-value se calcule titre par titre. Certaines lignes sont en moins-value ou presque
          stables, et les moins-values se reportent dix ans : l'ordre des ventes change la facture.
          Pour les titres acquis avant le 1er janvier 2018, l'option pour le barème ouvre droit à un
          abattement pour durée de détention sur l'impôt sur le revenu, les prélèvements sociaux
          restant dus sur la totalité de la plus-value.
        </li>
        <li>
          <strong>Regarder l'impôt et oublier les frais.</strong> Un arbitrage gratuit fiscalement
          peut être facturé par le contrat ; un nouveau contrat peut prélever des frais sur
          versement ; un fonds labellisé peut avoir des frais courants plus élevés que celui qu'il
          remplace, ou plus bas. Ces coûts s'additionnent à la fiscalité : à titre d'exemple de
          présentation détaillée d'une grille, voir la page <a href="/tarifs">tarifs</a>.
        </li>
      </ol>

      <h2>Vos questions sur la fiscalité du passage à l'ISR</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Basculer vers l'ISR : changer de supports d'abord, d'enveloppe ensuite</h2>
      <p>
        <strong>La réponse à votre question.</strong> Passer à l'ISR ne remet pas en cause votre
        antériorité fiscale tant que vous changez de supports sans sortir de l'enveloppe :
        l'arbitrage dans une assurance vie, un PEA ou un PER est neutre, et la transformation d'un
        contrat auprès du même assureur conserve sa date d'origine. L'impôt apparaît avec la vente
        sur un compte-titres et avec le rachat d'un contrat.
      </p>
      <p>
        <strong>Le coût de l'inaction.</strong> La crainte de l'impôt conduit souvent à ne rien
        faire, alors que la part de l'épargne qui peut basculer sans aucun coût fiscal est
        généralement la plus importante. Chaque année d'attente, cette épargne continue de financer
        des entreprises que vous n'avez pas choisies, pour une économie d'impôt qui, sur ces
        enveloppes, n'existe pas.
      </p>
      <p>
        <strong>La prochaine étape.</strong> Relevez pour chaque enveloppe trois données : la date
        d'ouverture, les versements et la valeur actuelle. Elles suffisent à situer chaque ligne
        dans le tableau ci-dessus. Pour l'assurance vie, la liste des supports labellisés de votre
        contrat est le point de départ ; le{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">guide de l'assurance vie ISR</LienArticle>{" "}
        donne ensuite les critères pour juger une gamme, ce que cet article ne fait pas.
      </p>
      <p>
        <strong>Et si vous préférez en parler.</strong> Vous pouvez échanger avec un conseiller du
        cabinet pour obtenir des pistes sur l'ordre des opérations ; le premier échange est offert
        et sans engagement. <a href="/cgp-investissement-responsable">L'accompagnement proposé</a>{" "}
        est décrit sur une page dédiée, et la grille de rémunération sur{" "}
        <a href="/tarifs">tarifs</a>.
      </p>
    </>
  );
}
