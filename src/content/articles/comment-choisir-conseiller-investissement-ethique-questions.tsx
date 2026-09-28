import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";
import { FaqArticle } from "./faq";

export const meta: ArticleMeta = {
  slug: "comment-choisir-conseiller-investissement-ethique-questions",
  title: "Comment choisir un conseiller en investissement éthique ?",
  excerpt:
    "Dix questions à poser avant de confier votre épargne éthique à un conseiller : statut, rémunération, préférences de durabilité, documents écrits, suivi.",
  readingTime: "11 min",
  category: "Conseil",
  date: "2026-09-28",
  tags: [
    "conseiller en investissement éthique",
    "choisir son conseiller",
    "questions à poser",
    "ORIAS",
    "préférences de durabilité",
    "rémunération du conseiller",
  ],
  author: "Sébastien Petrisot",
  faq: [
    {
      q: "Un conseiller peut-il refuser de me dire comment il est rémunéré ?",
      a: "Pas un intermédiaire en assurance : le code des assurances impose d'indiquer, avant la conclusion du contrat, la nature de la rémunération (honoraires, commission comprise dans la prime, autre avantage, ou combinaison). Un conseiller en investissements financiers doit, lui, communiquer ses modalités de rémunération et sa tarification. Une réponse évasive est un signal d'alerte.",
    },
    {
      q: "Faut-il choisir un conseiller « indépendant » pour investir éthique ?",
      a: "Le mot n'a pas le même sens partout : évaluer un éventail suffisant d'instruments financiers du marché pour un conseiller en investissements financiers, analyser un nombre suffisant de contrats pour un intermédiaire en assurance. Dans les deux cas, il ne dit rien de la compétence en finance durable : demandez la liste des partenaires et la méthode de vérification d'un fonds.",
    },
    {
      q: "Un conseiller peut-il me proposer un produit qui ne correspond pas à mes préférences de durabilité ?",
      a: "Les autorités (ACPR et AMF) rappellent qu'un tel produit ne peut pas vous être conseillé. Le professionnel peut vous proposer d'adapter vos préférences, et vous êtes libre de refuser. Si vous répondez « non » ou ne répondez pas, vous pouvez être considéré comme neutre : précisez vos critères plutôt que de survoler le questionnaire.",
    },
    {
      q: "Puis-je changer d'avis après avoir signé une assurance vie ?",
      a: "Oui. Une personne physique dispose de trente jours calendaires révolus, à compter du moment où elle est informée de la conclusion du contrat, pour y renoncer par lettre recommandée ou envoi recommandé électronique (article L. 132-5-1 du code des assurances). Ce délai est prolongé si les documents et informations requis n'ont pas été remis (article L. 132-5-2 du code des assurances).",
    },
    {
      q: "À qui m'adresser en cas de désaccord avec mon conseiller ?",
      a: "D'abord au professionnel, par une réclamation écrite. Pour un litige lié à un contrat d'assurance, vous pouvez ensuite saisir gratuitement La Médiation de l'Assurance, avec une réclamation datant de plus de deux mois et de moins d'un an. Pour un produit relevant des marchés financiers, le médiateur de l'AMF est compétent ; il ne traite ni l'assurance vie, ni la banque, ni la fiscalité.",
    },
    {
      q: "Dois-je décider pendant le rendez-vous ?",
      a: "Non. Le code des assurances exige que vos besoins et les raisons du contrat proposé soient précisés par écrit avant la souscription : c'est un document à lire au calme. Toute urgence artificielle est un signal d'alerte.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> avant de regarder un produit, vérifiez trois choses chez
          votre conseiller. Qui il est : une inscription à l'ORIAS qui couvre l'activité proposée,
          et la liste de ses partenaires. Comment il est payé : la nature de sa rémunération, puis
          un chiffre en euros, avant toute signature. Ce qu'il fait de vos valeurs : le recueil de
          vos préférences de durabilité et la vérification des fonds sur documents. Dix questions
          suffisent, et les réponses attendues sont pour l'essentiel des obligations réglementaires.
          Si elles restent floues, demandez l'écrit, comparez, et prenez le temps : en assurance
          vie, vous avez trente jours après la conclusion pour renoncer.
        </p>
      </div>

      <p>
        Vous avez décidé que votre épargne devait financer autre chose que ce qu'elle finance
        aujourd'hui. Mais entre la brochure d'une banque, le site d'un cabinet et la promesse d'une
        plateforme, une question passe avant celle du produit : à qui allez-vous demander ? La
        personne en face de vous filtre l'offre. Elle décide de ce qu'elle vous montre, de ce
        qu'elle laisse de côté, et de la manière dont elle traduit votre mot « éthique » en critères
        concrets. Or « éthique » est un mot du langage courant, pas un critère du{" "}
        <a href="https://www.orias.fr" target="_blank" rel="noreferrer">
          registre de l'ORIAS
        </a>
        , qui comptait 72 666 intermédiaires inscrits au 31 décembre 2025. L'inscription est
        nécessaire ; elle n'est pas un label de compétence en finance durable.
      </p>
      <p>
        Un « conseiller en investissement éthique » n'est pas une catégorie du registre : c'est une
        spécialisation que le professionnel revendique. Ce qui est encadré, c'est son statut, la
        transparence sur sa rémunération et sa manière de recueillir vos préférences. Cet article
        vous donne dix questions à poser, avec la bonne réponse et le signal d'alerte pour chacune,
        et les sources qui les fondent. Nous ne comparons pas ici les canaux (banque, cabinet,
        plateforme) : c'est l'objet de notre article sur{" "}
        <LienArticle slug="cgp-independant-vs-conseiller-bancaire-ethique">
          CGP ou conseiller bancaire
        </LienArticle>
        . Ici, quel que soit le canal, on vérifie la personne.
      </p>

      <h2>Pourquoi vérifier son conseiller avant de choisir un placement éthique ?</h2>
      <ul>
        <li>
          <strong>Il détermine l'univers que vous voyez.</strong> Un professionnel qui travaille
          avec un seul assureur ne peut vous montrer que sa gamme ; un autre en compare plusieurs.
          Aucun n'est fautif par nature, mais vous devez savoir dans quel cas vous êtes.
        </li>
        <li>
          <strong>Le mot « éthique » ne vous protège pas.</strong> Un fonds peut porter un label ou
          un nom évocateur sans correspondre à ce que vous refusez de financer ; c'est le conseiller
          qui, en pratique, le vérifie ou non.
        </li>
        <li>
          <strong>Le cadre existe, mais son application est inégale.</strong> Les préférences de
          durabilité doivent être recueillies dans le conseil depuis août 2022. Dans{" "}
          <a
            href="https://www.amf-france.org/sites/institutionnel/files/private/2025-11/approche_acpr-amf_preferences_durabilite_public_0.pdf"
            target="_blank"
            rel="noreferrer"
          >
            un document conjoint de fin 2025
          </a>
          , l'ACPR et l'AMF, qui ont observé les pratiques entre 2023 et 2025, relèvent qu'une
          proportion significative des parcours de conseil observés n'est pas conforme sur ce point,
          et que les clients n'expriment très majoritairement pas de préférences détaillées (environ
          95 % en moyenne dans les réseaux observés). Le constat ne désigne aucun acteur.
        </li>
      </ul>

      <h2>Comment vérifier le statut d'un conseiller avant le premier rendez-vous ?</h2>
      <p>
        Le{" "}
        <a href="https://www.orias.fr" target="_blank" rel="noreferrer">
          registre de l'ORIAS
        </a>{" "}
        est public et permet de vérifier qu'un intermédiaire est autorisé à distribuer des produits
        d'assurance, bancaires ou financiers. Saisissez le nom ou le numéro du professionnel, et
        regardez trois choses, d'après{" "}
        <a
          href="https://www.orias.fr/api/document/content?id=2c9419ee7fd59a83017fd5b32e9b0056"
          target="_blank"
          rel="noreferrer"
        >
          la note de l'ORIAS sur le fonctionnement du registre
        </a>{" "}
        (version du 1er mai 2022).
      </p>
      <ol>
        <li>
          <strong>La ou les catégories d'inscription.</strong> Le registre distingue les activités :
          intermédiaires en assurance (courtiers, agents généraux, mandataires), intermédiaires en
          opérations de banque, conseillers en investissements financiers. L'essentiel est que
          l'inscription couvre l'activité qu'on vous propose.
        </li>
        <li>
          <strong>Le lien avec les compagnies.</strong> Un agent général est soumis à une obligation
          d'exclusivité avec une ou plusieurs entreprises d'assurance ; un courtier ne peut pas y
          être soumis. Le registre indique aussi si l'intermédiaire est autorisé à encaisser des
          fonds au titre de son activité d'assurance.
        </li>
        <li>
          <strong>Les garanties exigées.</strong> Les intermédiaires en assurance doivent remplir
          des conditions d'honorabilité, de capacité professionnelle et d'assurance de
          responsabilité civile professionnelle, et de garantie financière s'ils encaissent des
          fonds. Les conseillers en investissements financiers adhèrent à une association
          professionnelle agréée par l'AMF et justifient d'une assurance de responsabilité civile.
        </li>
      </ol>
      <p>
        Le registre n'atteste pas une compétence en finance durable : la même note rappelle que les
        intermédiaires en assurance à titre principal doivent suivre au moins quinze heures de
        formation continue par an, mais que l'ORIAS ne contrôle pas cette formation.
      </p>

      <h2>Quelles sont les 10 questions à poser à un conseiller en investissement éthique ?</h2>
      <p>Un professionnel sérieux a déjà une réponse prête à chacune, à l'oral ou par email.</p>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Bonne réponse</th>
            <th>Signal d'alerte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>1. Quel est votre numéro ORIAS, pour quelle activité ?</strong>
            </td>
            <td>Numéro donné sans hésiter ; catégorie qui correspond au produit</td>
            <td>Numéro introuvable dans les documents ; réponse évasive</td>
          </tr>
          <tr>
            <td>
              <strong>2. Avec quels assureurs et sociétés de gestion travaillez-vous ?</strong>
            </td>
            <td>
              Liste nominative ; base du conseil expliquée (exclusivité, gamme limitée, analyse du
              marché)
            </td>
            <td>« Tout le marché » sans liste ; « indépendant » sans définition</td>
          </tr>
          <tr>
            <td>
              <strong>3. Comment êtes-vous rémunéré, en euros, sur cette proposition ?</strong>
            </td>
            <td>
              Nature (honoraires, commission comprise dans les frais, ou les deux), puis chiffre ou
              méthode, par écrit
            </td>
            <td>« C'est gratuit pour vous » sans détail ; montant « communiqué plus tard »</td>
          </tr>
          <tr>
            <td>
              <strong>4. Mes fonds transitent-ils par vous ?</strong>
            </td>
            <td>Réponse nette, cohérente avec le registre</td>
            <td>Virement demandé vers un compte absent des documents de l'assureur ou du gérant</td>
          </tr>
          <tr>
            <td>
              <strong>
                5. Comment avez-vous recueilli mes préférences de durabilité, et qu'en avez-vous
                fait ?
              </strong>
            </td>
            <td>
              Trois axes expliqués sans jargon ; trace écrite ; propositions reliées à mes réponses
            </td>
            <td>Questionnaire expédié en quelques secondes, sans effet sur les propositions</td>
          </tr>
          <tr>
            <td>
              <strong>6. Comment vérifiez-vous qu'un fonds « durable » tient sa promesse ?</strong>
            </td>
            <td>
              Cite des documents : DIC, label et ce qu'il garantit, classification SFDR, inventaire
            </td>
            <td>« Il est labellisé, donc c'est bon » ; « tout notre catalogue est éthique »</td>
          </tr>
          <tr>
            <td>
              <strong>7. Quel est le coût total, en euros, sur ma durée de détention ?</strong>
            </td>
            <td>Frais d'entrée, de gestion, des supports, d'arbitrage, chiffrés sur mon horizon</td>
            <td>
              Seuls les frais d'entrée annoncés ; « sans frais d'entrée » présenté comme « sans
              frais »
            </td>
          </tr>
          <tr>
            <td>
              <strong>8. Quels risques, quels inconvénients, quelle alternative écartée ?</strong>
            </td>
            <td>
              Perte en capital, blocage, limites de l'approche retenue ; une alternative et la
              raison de l'écarter
            </td>
            <td>
              Un seul produit ; aucun inconvénient ; urgence (« l'offre se termine vendredi »)
            </td>
          </tr>
          <tr>
            <td>
              <strong>9. Que vais-je recevoir par écrit avant de signer ?</strong>
            </td>
            <td>Mes besoins tels que compris, les raisons du choix, le DIC de chaque support</td>
            <td>Rien avant la signature ; documents « envoyés ensuite »</td>
          </tr>
          <tr>
            <td>
              <strong>
                10. Que se passe-t-il après la signature, et quel médiateur en cas de désaccord ?
              </strong>
            </td>
            <td>
              Qui suit le dossier, à quel rythme ; que faire si un fonds perd son label ; médiateur
              nommé
            </td>
            <td>« Vous n'aurez plus à vous en occuper » ; aucun médiateur nommé</td>
          </tr>
        </tbody>
      </table>
      <p>
        La question 6 se prépare à l'avance : notre méthode pour{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          repérer le greenwashing d'un fonds vert
        </LienArticle>{" "}
        détaille ce que la réponse devrait couvrir, et vous saurez si elle est à la hauteur. Trois
        autres questions méritent un éclairage.
      </p>
      <h3>Question 2 : que doit vraiment vous dire un conseiller « indépendant » ?</h3>
      <p>
        Le mot ne recouvre pas la même chose selon le régime. Pour un conseiller en investissements
        financiers,{" "}
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035043376"
          target="_blank"
          rel="noreferrer"
        >
          l'article L.541-8-1 du code monétaire et financier
        </a>{" "}
        impose, s'il se présente comme indépendant, d'évaluer un éventail suffisant d'instruments
        financiers du marché et de refuser les rémunérations de tiers, sauf à les reverser
        intégralement au client ; il impose aussi de communiquer ses modalités de rémunération et la
        nature juridique de ses relations avec les établissements promoteurs de produits. Pour un
        intermédiaire en assurance,{" "}
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036920566"
          target="_blank"
          rel="noreferrer"
        >
          l'article L.521-2 du code des assurances
        </a>{" "}
        prévoit d'indiquer s'il travaille en exclusivité, avec une gamme limitée d'assureurs (qu'il
        faut alors nommer), ou sur la base d'une analyse d'un nombre suffisant de contrats du
        marché. Aucun de ces cadres ne mesure la compétence en finance durable, d'où la question 6.
      </p>

      <h2>Comment un conseiller doit-il traiter vos préférences de durabilité ?</h2>
      <p>
        Depuis le 2 août 2022, les textes européens (MIF 2 pour les instruments financiers, DDA pour
        l'assurance) imposent de recueillir vos préférences de durabilité, comme le rappelle{" "}
        <a
          href="https://www.amf-france.org/en/news-publications/news/sustainability-requirements-distribution-financial-instruments-update-upcoming-legislation-and-its"
          target="_blank"
          rel="noreferrer"
        >
          l'AMF
        </a>
        . Pour le conseil en instruments financiers, les{" "}
        <a
          href="https://www.esma.europa.eu/sites/default/files/2023-04/ESMA35-43-3172_Guidelines_on_certain_aspects_of_the_MiFID_II_suitability_requirements.pdf"
          target="_blank"
          rel="noreferrer"
        >
          orientations de l'ESMA du 23 septembre 2022
        </a>{" "}
        précisent la méthode : le professionnel demande d'abord si vous avez des préférences, puis
        sur lesquels des trois axes (part d'activités alignées sur la taxonomie verte européenne,
        part d'« investissements durables » au sens du règlement SFDR, prise en compte des
        principales incidences négatives). Il recueille une proportion minimale pour les deux
        premiers axes, et les incidences retenues pour le troisième. Il doit expliquer ces notions
        sans jargon et rester neutre pour ne pas influencer vos réponses.
      </p>
      <p>Ce que cela change pour vous, d'après le document ACPR-AMF cité plus haut :</p>
      <ul>
        <li>
          <strong>Répondre « non », ou ne pas répondre, vous rend « neutre ».</strong> Le
          professionnel peut alors vous conseiller des produits avec ou sans caractéristiques de
          durabilité. Si le sujet compte pour vous, dites-le et précisez ce que vous refusez de
          financer.
        </li>
        <li>
          <strong>Vos préférences passent après le reste de votre profil.</strong> Elles ne sont
          traitées qu'une fois évaluées vos connaissances, votre situation financière et vos autres
          objectifs : un critère éthique ne remplace pas votre tolérance au risque.
        </li>
        <li>
          <strong>Un produit qui n'y correspond pas ne peut pas vous être conseillé.</strong> Si
          aucun ne convient, le professionnel peut vous proposer d'adapter vos préférences, vous
          êtes libre de refuser, et l'adaptation doit être documentée dans le conseil formalisé.
        </li>
        <li>
          <strong>Un label ne clôt pas le sujet.</strong> Les produits relevant du Label ISR ou de
          Greenfin semblent pouvoir être considérés comme prenant en compte certaines incidences
          négatives, mais cela ne dispense pas de vérifier qu'elles correspondent à ce que vous avez
          exprimé.
        </li>
      </ul>
      <p>
        Le document liste aussi des pratiques susceptibles de nuire au client : un questionnaire
        sans effet sur le conseil, ou inviter le client à revoir ses préférences avant d'avoir
        vérifié si des produits y correspondent. Ce sont vos signaux d'alerte de la question 5.
        Notre article sur{" "}
        <LienArticle slug="bilan-patrimonial-investissement-ethique-rendez-vous">
          le déroulé d'un premier rendez-vous de bilan patrimonial
        </LienArticle>{" "}
        montre cet échange en pratique.
      </p>

      <h2>Comment lire la rémunération d'un conseiller, en euros et sur votre durée ?</h2>
      <p>
        Pour un intermédiaire en assurance, l'article L.521-2 impose d'indiquer, avant la conclusion
        du contrat, la nature de la rémunération : honoraires payés par vous, commission comprise
        dans la prime, autre avantage, ou combinaison. Quand vous payez des honoraires, le texte
        prévoit aussi d'en communiquer le montant ou, à défaut, la méthode de calcul. Demander le
        chiffre reste dans tous les cas utile, y compris pour une commission comprise dans les frais
        du produit : un professionnel à l'aise avec son modèle sait répondre. Notre article sur{" "}
        <LienArticle slug="frais-conseiller-gestion-patrimoine-independant">
          les frais d'un conseiller en gestion de patrimoine
        </LienArticle>{" "}
        expose les limites de chaque modèle.
      </p>
      <p>
        Le piège le plus fréquent est de comparer des pourcentages sans les convertir en euros sur
        votre horizon réel. Un exemple.
      </p>
      <div className="callout">
        <p>
          <strong>
            Situation type construite pour illustrer le calcul, à partir de paramètres réalistes.
          </strong>{" "}
          Vous versez 50 000 € en une fois sur une assurance vie. Deux propositions fictives : la{" "}
          <strong>A</strong> prélève 3 % à l'entrée puis 0,80 % par an sur l'encours ; la{" "}
          <strong>B</strong> ne prélève rien à l'entrée mais 1,00 % par an. Hypothèses simples :
          rendement brut de 3 % par an, constant, avant frais (elle ne préjuge d'aucune performance)
          ; frais de gestion prélevés chaque année sur l'encours ; frais des supports et fiscalité
          ignorés.
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Horizon</th>
            <th>Frais cumulés A</th>
            <th>Frais cumulés B</th>
            <th>Capital final A</th>
            <th>Capital final B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 ans</td>
            <td>3 590 €</td>
            <td>2 680 €</td>
            <td>54 010 €</td>
            <td>55 120 €</td>
          </tr>
          <tr>
            <td>10 ans</td>
            <td>5 910 €</td>
            <td>5 630 €</td>
            <td>60 150 €</td>
            <td>60 770 €</td>
          </tr>
          <tr>
            <td>15 ans</td>
            <td>8 500 €</td>
            <td>8 890 €</td>
            <td>66 990 €</td>
            <td>67 000 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        La proposition « sans frais d'entrée » coûte moins cher pendant une douzaine d'années ;
        au-delà, la A devient moins coûteuse, et les capitaux se rejoignent vers quinze ans. Aucune
        n'est « la bonne » en soi : tout dépend de la durée pendant laquelle vous gardez le contrat.
        D'où les questions 3 et 7 : des euros sur votre durée, pas un pourcentage isolé. Hypothèse
        illustrative : les performances passées ne préjugent pas des performances futures, et un
        placement en unités de compte comporte un risque de perte en capital.
      </p>

      <h2>Que doit-on recevoir par écrit avant de signer ?</h2>
      <ul>
        <li>
          <strong>Assurance vie ou capitalisation :</strong>{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048252377"
            target="_blank"
            rel="noreferrer"
          >
            l'article L.522-5 du code des assurances
          </a>{" "}
          impose de préciser par écrit, avant la souscription, les exigences et besoins que vous
          avez exprimés et les raisons justifiant le caractère approprié du contrat proposé.
        </li>
        <li>
          <strong>Conseil en investissements financiers :</strong> l'article L.541-8-1 prévoit une
          lettre de mission signée par les deux parties, précisant droits, obligations et conditions
          du service.
        </li>
        <li>
          <strong>Chaque support en unités de compte :</strong> le document d'informations clés
          (DIC). D'après{" "}
          <a
            href="https://www.amf-france.org/sites/institutionnel/files/private/2023-06/Guide%20comprendre%20le%20DIC_MAJ2023_DEF.pdf"
            target="_blank"
            rel="noreferrer"
          >
            le guide de l'AMF
          </a>
          , il est obligatoirement remis avant toute souscription, avec un délai raisonnable, et
          présente l'impact des coûts en euros comme en pourcentage.
        </li>
      </ul>
      <p>
        Le devoir de conseil se poursuit après la signature. Selon l'article L.522-5, lorsqu'un
        contrat d'assurance vie ou de capitalisation est resté sans opération pendant une durée
        fixée par arrêté, l'intermédiaire actualise les informations sur votre situation et vous
        prévient sur support durable si le contrat n'est plus approprié. Cette durée est de quatre
        ans, ramenée à deux ans lorsque l'intermédiaire fournit ce que l'arrêté qualifie de service
        de recommandation (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049729141"
          target="_blank"
          rel="noreferrer"
        >
          article A.522-2
        </a>
        ). C'est la réponse concrète à la question 10.
      </p>

      <h2>Que faire si les réponses restent floues ?</h2>
      <p>
        Le flou n'est pas une preuve de malhonnêteté, mais il vous autorise à ralentir. Retenez la
        méthode <strong>Vérifier, Redemander, Comparer, Renoncer</strong>.
      </p>
      <ol>
        <li>
          <strong>Vérifier.</strong> Retournez au registre et relisez la catégorie d'inscription au
          regard du produit proposé.
        </li>
        <li>
          <strong>Redemander, par email.</strong> Reprenez les questions 3, 7 et 9 par écrit : une
          réponse écrite est une trace, et un professionnel à l'aise la produit sans difficulté.
        </li>
        <li>
          <strong>Comparer.</strong> Demandez un second avis ou confrontez la proposition au DIC des
          supports. Une urgence est en elle-même une raison de comparer.
        </li>
        <li>
          <strong>Renoncer, si nécessaire.</strong> En assurance vie, une personne physique peut
          renoncer dans les trente jours calendaires révolus suivant le moment où elle est informée
          de la conclusion du contrat, par lettre recommandée ou envoi recommandé électronique (
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035731314"
            target="_blank"
            rel="noreferrer"
          >
            article L.132-5-1 du code des assurances
          </a>
          ).
        </li>
      </ol>
      <p>
        En cas de désaccord persistant, la réclamation écrite au professionnel est la première
        étape. Pour un contrat d'assurance, vous pouvez ensuite saisir{" "}
        <a
          href="https://www.mediation-assurance.org/la-mediation-etape-par-etape/"
          target="_blank"
          rel="noreferrer"
        >
          La Médiation de l'Assurance
        </a>
        , gratuite pour le consommateur, avec une réclamation écrite datant de plus de deux mois et
        de moins d'un an ; elle couvre aussi les différends avec un intermédiaire affilié. Pour un
        produit relevant des marchés financiers, c'est{" "}
        <a
          href="https://www.amf-france.org/en/amf-ombudsman/how-mediation-works/what-ombudsmans-remit"
          target="_blank"
          rel="noreferrer"
        >
          le médiateur de l'AMF
        </a>{" "}
        qui est compétent ; il ne traite ni l'assurance vie, ni la banque, ni la fiscalité.
      </p>

      <h2>Vos questions sur le choix d'un conseiller en investissement éthique</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Choisir son conseiller : ce que vous retenez, et la suite logique</h2>
      <p>
        <strong>La réponse :</strong> on choisit un conseiller en investissement éthique en
        vérifiant d'abord ce qui est vérifiable (l'inscription à l'ORIAS, les partenaires, la
        rémunération), puis ce qui l'est moins (la manière dont il traite vos valeurs), le tout sur
        documents. Aucun label ne le fait à votre place.
      </p>
      <p>
        <strong>Le coût de l'inaction :</strong> signer sans ces questions, c'est accepter un
        produit dont vous ne connaissez ni le coût total, ni la base du conseil, ni la façon dont
        vos préférences ont été prises en compte.
      </p>
      <p>
        <strong>La suite logique :</strong> pour préparer vos documents, lisez{" "}
        <LienArticle slug="bilan-patrimonial-investissement-ethique-rendez-vous">
          le déroulé d'un bilan patrimonial éthique
        </LienArticle>
        ; pour comprendre ce que vous payez, l'article sur{" "}
        <LienArticle slug="frais-conseiller-gestion-patrimoine-independant">
          les frais d'un conseiller
        </LienArticle>{" "}
        détaille chaque poste.
      </p>
      <p>
        Ces dix questions valent aussi pour nous. La page{" "}
        <a href="/cgp-investissement-responsable">CGP en investissement responsable</a> présente
        comment nous travaillons et comment nous sommes rémunérés (détail sur la page{" "}
        <a href="/tarifs">tarifs</a>) ; vous pouvez ensuite échanger avec un conseiller lors d'un
        premier échange offert et sans engagement, et lui poser ces questions telles quelles.
      </p>
      <p>
        <em>
          Cet article est informatif et éducatif : il ne constitue ni une recommandation ni un
          conseil en investissement. Les références légales sont citées à la date de rédaction (28
          septembre 2026) ; vérifiez-les à la date de votre décision.
        </em>
      </p>
    </>
  );
}
