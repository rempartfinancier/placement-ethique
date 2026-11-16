import type { ArticleMeta } from "../article-types";
import { FaqArticle } from "./faq";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "etf-isr-ou-fonds-isr-actif-lequel-choisir",
  title: "ETF ISR ou fonds ISR actif : lequel choisir ?",
  excerpt:
    "0,33 % de frais par an en moyenne pour un ETF actions, 1,37 % pour un fonds actif (AMF, 2025) : ce que l'écart finance, ou non, en 7 critères.",
  readingTime: "19 min",
  category: "Fondamentaux",
  date: "2026-11-15",
  tags: ["ETF", "ISR", "frais", "indices", "ESMA", "gestion active"],
  author: "Alexandre Pollet",
  faq: [
    {
      q: "C'est quoi la différence entre un ETF ISR et un fonds ISR actif ?",
      a: "Un ETF ISR reproduit un indice dont les règles de sélection (exclusions, notes ESG, objectif climat) sont écrites à l'avance et publiées. Un fonds ISR actif est géré par une équipe qui choisit elle-même les entreprises, dans le cadre décrit par son prospectus. Dans le premier cas vous achetez une règle, dans le second un jugement. Les deux sont des fonds exposés au risque de perte en capital.",
    },
    {
      q: "Un ETF ISR coûte-t-il vraiment moins cher qu'un fonds ISR actif ?",
      a: "En moyenne, oui. Selon la Lettre de l'Observatoire de l'épargne de l'AMF n° 65 (avril 2026), les ETF actions affichaient 0,33 % de frais annuels moyens en 2025, contre 1,37 % pour les fonds actions gérés activement, commissions de surperformance comprises. Ce sont des moyennes sur les fonds français, tous styles confondus : seuls les frais inscrits dans le document d'informations clés de chaque fonds font foi. S'y ajoutent, dans les deux cas, les frais de l'enveloppe et de la transaction.",
    },
    {
      q: "Un fonds ISR actif rapporte-t-il plus qu'un ETF ISR ?",
      a: "Personne ne peut le dire à l'avance. Les données de l'ESMA publiées en mars 2026 montrent des fonds actions actifs en retrait des ETF en moyenne en 2024 et sur dix ans, mais des fonds obligataires actifs devant les ETF en 2024, et des résultats ESG qui changent de sens selon la période. Ce sont des moyennes qui masquent de grands écarts entre fonds. Les performances passées ne préjugent pas des performances futures.",
    },
    {
      q: "Un ETF peut-il avoir le Label ISR ?",
      a: "Oui, le Label ISR est attribué fonds par fonds, quel que soit le mode de gestion : un ETF peut être labellisé, un fonds actif aussi, et beaucoup de fonds des deux familles ne le sont pas. Le mot « ISR » ou « SRI » dans le nom d'un ETF renvoie souvent à la méthode de son indice, pas au label public français. La vérification se fait sur la liste officielle publiée sur lelabelisr.fr.",
    },
    {
      q: "Ça veut dire quoi, PAB et CTB, dans le nom d'un ETF ?",
      a: "Ce sont deux catégories d'indices climatiques définies par le droit européen (règlement délégué (UE) 2020/1818). Un indice « accord de Paris » (PAB) doit afficher une intensité d'émissions de gaz à effet de serre inférieure d'au moins 50 % à celle de son univers d'investissement ; un indice « transition climatique » (CTB), d'au moins 30 %. Les deux doivent ensuite la réduire d'au moins 7 % par an en moyenne. Le PAB impose en plus des exclusions chiffrées sur le charbon, le pétrole, le gaz et l'électricité très carbonée.",
    },
    {
      q: "Est-ce qu'un ETF ISR vote aux assemblées générales des entreprises ?",
      a: "Un ETF qui détient réellement les actions de son indice est actionnaire, et c'est sa société de gestion qui exerce les droits de vote. Ce qu'il ne peut pas faire, c'est vendre une entreprise qui reste dans l'indice : son levier est la voix, pas la sortie. La façon dont les votes sont exercés se lit dans la politique d'engagement et le rapport de vote de la société de gestion, pour un ETF comme pour un fonds actif.",
    },
    {
      q: "Peut-on avoir à la fois un ETF ISR et un fonds ISR actif ?",
      a: "Oui, rien ne l'interdit et les deux se logent dans les mêmes enveloppes (compte-titres, PEA sous conditions d'éligibilité, assurance vie, PER) lorsque la gamme le permet. Certains épargnants utilisent un ETF large comme socle et réservent un fonds actif à un thème ou à une démarche d'engagement qu'aucun indice ne reproduit. Ce qui compte est de savoir ce que chaque ligne apporte et ce qu'elle coûte, pas d'appartenir à un camp.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> un ETF ISR applique une règle publique (son indice) pour un
          coût faible ; un fonds ISR actif applique le jugement d'une équipe pour un coût plus
          élevé. En 2025, les frais annuels moyens étaient de 0,33 % pour les ETF actions et de 1,37
          % pour les fonds actions gérés activement, commissions de surperformance comprises (AMF,
          Lettre de l'Observatoire de l'épargne n° 65, avril 2026). Cet écart de frais est connu
          d'avance ; la performance, elle, ne l'est pas : les moyennes publiées par le régulateur
          européen varient selon la classe d'actifs et la période, et ne préjugent pas de l'avenir.
          Le choix dépend donc de ce que vous voulez pouvoir vérifier et de ce que vous acceptez de
          payer. Sources officielles consultées le 15 novembre 2026.
        </p>
      </div>

      <p>
        Deux lignes dans la liste des supports. La première : un ETF dont le nom aligne des sigles,
        « ESG », « SRI », parfois « PAB ». La seconde : un fonds actions « responsable » dont la
        plaquette montre une équipe de gérants, un label et un rapport d'engagement. Le premier
        coûte quelques dixièmes de pour cent par an, le second environ quatre fois plus. Est-ce
        qu'on paie, avec le second, une éthique plus sérieuse ? Ou simplement une gestion plus chère
        ?
      </p>
      <div className="callout">
        <p>
          <strong>Situation type, construite pour illustrer la question.</strong> Karim, 38 ans,
          dispose de 20 000 € à investir en actions pour dix ans au moins, sur un compte-titres. Il
          veut écarter le charbon et le tabac, et il aimerait que son épargne « pèse » sur les
          entreprises. Sa banque lui présente un fonds actions ISR géré activement ; un comparateur
          en ligne lui montre un ETF ISR monde. Il ne sait pas ce que la différence de prix achète.
        </p>
      </div>
      <p>
        Un <strong>ETF</strong> (<em>exchange-traded fund</em>, fonds indiciel coté) est un fonds
        qui reproduit un indice et s'achète en Bourse comme une action. Un{" "}
        <strong>fonds à gestion active</strong> est un fonds dont l'équipe de gestion sélectionne
        elle-même les titres pour tenter de faire mieux que son indice de référence. Quand l'un ou
        l'autre intègre des critères environnementaux, sociaux et de gouvernance (ESG), on parle
        couramment d'ETF ISR ou de fonds ISR, que le fonds porte ou non le Label ISR. Cet article
        compare les deux familles sur sept critères, chiffre l'écart de frais sur dix ans, explique
        ce que recouvrent les sigles PAB et CTB des indices climatiques, puis propose un arbre de
        décision. Il ne vous dira pas lequel rapportera le plus : personne ne le sait d'avance.
      </p>

      <h2>ETF ISR et fonds ISR actif : quelle différence, concrètement ?</h2>
      <p>
        La différence tient à la personne qui choisit les entreprises : avec un ETF ISR, c'est la
        méthode d'un indice, écrite à l'avance ; avec un fonds ISR actif, c'est une équipe de
        gestion, au fil de l'eau.
      </p>
      <p>
        L'ETF ISR part d'un indice classique et lui applique des règles mécaniques : exclure
        certains secteurs, ne garder que les entreprises les mieux notées, réduire l'intensité
        carbone. Ces règles sont publiées par le fournisseur d'indice, et la composition du fonds en
        découle, sans choix discrétionnaire du gérant entre deux révisions de l'indice. Deux ETF
        portant le même mot dans leur nom peuvent donc détenir des portefeuilles très différents si
        leurs indices ne filtrent pas de la même façon, un point que nous détaillons, pour ceux qui
        découvrent le sujet, dans{" "}
        <LienArticle slug="etf-isr-debutants">
          notre méthode de lecture d'un ETF ISR en quatre documents
        </LienArticle>
        .
      </p>
      <p>
        Le fonds ISR actif part, lui, d'un univers d'investissement que l'équipe réduit selon sa
        propre analyse financière et extra-financière. Elle peut rencontrer les dirigeants, écarter
        une entreprise après une controverse sans attendre la révision d'un indice, ou au contraire
        en conserver une mal notée parce qu'elle juge sa trajectoire crédible. Cette liberté a deux
        contreparties : un coût plus élevé, et un résultat qui dépend de la qualité des décisions
        prises.
      </p>
      <p>
        Une précision : il existe des fonds indiciels non cotés et des ETF gérés activement. La
        frontière réelle passe entre gestion indicielle et gestion active, pas entre « coté » et «
        non coté ». Et dans les deux cas, vous êtes exposé au risque de perte en capital.
      </p>

      <h2>ETF ISR ou fonds ISR actif : le comparatif en 7 critères</h2>
      <p>
        Sur sept critères, l'ETF ISR l'emporte nettement sur le coût et la lisibilité de la règle ;
        le fonds ISR actif garde l'avantage sur la finesse de la sélection et la capacité à sortir
        d'une entreprise. Sur les autres, tout dépend du fonds précis que vous avez sous les yeux.
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>ETF ISR (gestion indicielle)</th>
            <th>Fonds ISR actif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Qui choisit les entreprises ?</td>
            <td>La méthode de l'indice, publique et fixée à l'avance</td>
            <td>Une équipe de gestion, dans le cadre du prospectus</td>
          </tr>
          <tr>
            <td>2. Frais annuels moyens (fonds actions français, 2025, AMF)</td>
            <td>0,33 % pour les ETF ; 0,75 % pour les fonds indiciels non cotés</td>
            <td>1,37 %, commissions de surperformance comprises</td>
          </tr>
          <tr>
            <td>3. Ce que vous pouvez vérifier</td>
            <td>
              La méthode de l'indice, publiée par son fournisseur ; la composition, que de nombreux
              émetteurs mettent en ligne
            </td>
            <td>
              Le prospectus, l'annexe SFDR et les rapports périodiques ; la fréquence de publication
              de la composition complète varie d'un fonds à l'autre
            </td>
          </tr>
          <tr>
            <td>4. Exclusions et sélection ESG</td>
            <td>
              Mécaniques : ce que l'indice prévoit, rien de plus, jusqu'à la prochaine révision
            </td>
            <td>Au cas par cas : plus souples, mais dépendantes du jugement de l'équipe</td>
          </tr>
          <tr>
            <td>5. Vote et dialogue avec les entreprises</td>
            <td>Vote possible ; pas de vente d'un titre qui reste dans l'indice</td>
            <td>Vote, dialogue et possibilité de vendre</td>
          </tr>
          <tr>
            <td>6. Écart possible avec le marché</td>
            <td>Celui de l'indice ISR par rapport à l'indice classique, connu à l'avance</td>
            <td>Celui de l'indice, plus celui des paris du gérant, en mieux ou en moins bien</td>
          </tr>
          <tr>
            <td>7. Où le loger, et à quels frais annexes ?</td>
            <td>
              Compte-titres, PEA si éligible, certaines assurances vie et certains PER ; frais de
              courtage à l'achat et à la vente
            </td>
            <td>
              Mêmes enveloppes, offre plus large en assurance vie ; droits d'entrée ou commission de
              souscription possibles
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Ce tableau compare deux familles, pas deux produits : un ETF ISR dont l'indice n'exclut
        presque rien peut être moins exigeant qu'un fonds actif rigoureux, et un fonds actif peut
        ressembler à son indice tout en facturant une gestion de conviction.
      </p>

      <h2>Combien coûte un fonds ISR actif de plus qu'un ETF ISR ?</h2>
      <p>
        Environ un point de pourcentage par an en moyenne : 1,37 % contre 0,33 % sur les fonds
        actions français en 2025 selon l'AMF, et 1,2 % contre 0,2 % entre fonds actions ESG non
        cotés (gestion active et indicielle confondues) et ETF actions ESG de l'Union européenne en
        2024 selon l'ESMA.
      </p>
      <p>
        Le premier jeu de chiffres vient de{" "}
        <a
          href="https://www.amf-france.org/sites/institutionnel/files/private/2026-04/loe-65_1.pdf"
          target="_blank"
          rel="noreferrer"
        >
          la Lettre de l'Observatoire de l'épargne de l'AMF n° 65 (avril 2026)
        </a>
        . Elle porte sur les fonds français ouverts au public, suivis par Six Financial Information
        (6 010 fonds à fin mars 2026), avec des moyennes simples, non pondérées par la taille des
        fonds et hors coûts de transaction internes. Elle ne distingue pas les fonds ISR des autres.
        Le second vient du{" "}
        <a
          href="https://www.esma.europa.eu/sites/default/files/2026-03/ESMA50-1949966494-4065_Market_Report_-_Costs_and_Performance_of_EU_Retail_Investment_Products.pdf"
          target="_blank"
          rel="noreferrer"
        >
          rapport de l'ESMA sur les coûts et performances des produits d'investissement de détail,
          publié le 3 mars 2026
        </a>
        , qui couvre les OPCVM de l'Union européenne sur l'année 2024 et isole, lui, les fonds ESG
        (au sens de la classification « investissement durable » de Morningstar).
      </p>
      <table>
        <thead>
          <tr>
            <th>Fonds actions</th>
            <th>AMF, fonds français, 2025</th>
            <th>ESMA, OPCVM de l'UE, 2024</th>
            <th>ESMA, fonds ESG seuls, 2024</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fonds gérés activement</td>
            <td>1,37 % (1,47 % en 2024)</td>
            <td>1,28 %</td>
            <td>1,2 % (fonds non cotés, actifs et indiciels confondus)</td>
          </tr>
          <tr>
            <td>Fonds indiciels non cotés</td>
            <td>0,75 %</td>
            <td>0,22 %</td>
            <td>Non isolés</td>
          </tr>
          <tr>
            <td>ETF</td>
            <td>0,33 % (0,36 % en 2024)</td>
            <td>0,21 %</td>
            <td>0,2 %</td>
          </tr>
        </tbody>
      </table>
      <p>
        Les trois colonnes ne se comparent pas ligne à ligne : les périmètres, les années et les
        méthodes de calcul diffèrent (frais totaux pour les fonds actifs côté AMF, frais récurrents
        côté ESMA). Elles disent pourtant la même chose : l'écart se joue entre gestion active et
        gestion indicielle, pas entre « éthique » et « classique ». L'ESMA relève d'ailleurs que les
        fonds actions ESG non cotés coûtaient en moyenne moins cher que leurs équivalents non ESG en
        2024 (1,2 % contre 1,4 %), et que les ETF actions ESG et non ESG affichaient des frais
        similaires (0,2 %). Nous revenons sur cette idée reçue d'un « surcoût de l'éthique » dans{" "}
        <LienArticle slug="pieges-inconvenients-investissement-ethique">
          notre article sur les pièges de l'investissement éthique
        </LienArticle>
        , qui traite aussi du cas des fonds thématiques.
      </p>
      <p>
        Trois postes s'ajoutent aux frais du fonds, et ils ne pèsent pas de la même façon sur les
        deux familles :
      </p>
      <ul>
        <li>
          <strong>Les frais de transaction.</strong> Un ETF s'achète en Bourse : en janvier 2026,
          l'AMF relevait un coût moyen de 0,65 % pour un ordre de 1 000 € passé depuis un
          compte-titres dans une banque de réseau, de 0,45 % chez les banques et courtiers en ligne
          et de 0,15 % chez les néo-courtiers, auxquels s'ajoute l'écart entre prix d'achat et prix
          de vente. Un fonds actif peut supporter des droits d'entrée, et certaines banques
          facturent une commission de souscription sur les fonds extérieurs à leur groupe (0,58 % en
          moyenne pour 5 000 € chez celles qui la pratiquent, même source).
        </li>
        <li>
          <strong>Les frais de l'enveloppe.</strong> Dans une assurance vie ou un PER, les frais de
          gestion du contrat s'appliquent chaque année, ETF ou fonds actif, et s'additionnent aux
          frais du fonds ; le détail figure dans{" "}
          <LienArticle slug="assurance-vie-isr-frais-reels-combien-ca-coute">
            notre décomposition des frais réels d'une assurance vie ISR
          </LienArticle>
          .
        </li>
        <li>
          <strong>La rémunération du distributeur.</strong> Une partie des frais de gestion d'un
          fonds peut être reversée à l'intermédiaire qui le distribue (rétrocession). Selon l'AMF,
          le professionnel doit vous communiquer le total des coûts du produit, du service et des
          rétrocessions qu'il perçoit, en pourcentage et en euros : demandez ce document. Par
          transparence, la rémunération du cabinet qui édite ce site est décrite sur la page{" "}
          <a href="/tarifs">tarifs</a>.
        </li>
      </ul>

      <h2>Quel écart de frais sur 10 ans entre un ETF ISR et un fonds ISR actif ?</h2>
      <p>
        Pour 20 000 € placés dix ans, avec la même performance avant frais dans les deux cas, un
        point d'écart de frais annuels représente environ 3 100 € de capital final en moins pour le
        fonds actif, dans l'exemple ci-dessous (performance de 5 % par an avant frais retenue par
        convention de calcul, et non comme prévision).
      </p>
      <div className="callout">
        <p>
          <strong>
            Exemple construit pour illustrer le calcul, à partir de frais moyens publiés ; ce n'est
            ni une prévision ni une promesse.
          </strong>{" "}
          Hypothèses : versement unique de 20 000 €, conservé dix ans ; frais annuels constants,
          prélevés sur l'encours, égaux aux moyennes 2025 de l'AMF pour les fonds actions (0,33 %
          pour un ETF, 0,75 % pour un fonds indiciel non coté, 1,37 % pour un fonds actif) ;
          performance avant frais identique pour les trois, fixée à 5 % par an par convention, pour
          isoler le seul effet des frais. Ne sont pas comptés : frais de courtage, droits d'entrée,
          frais de l'enveloppe, fiscalité. La performance réelle sera différente, et peut être
          négative : risque de perte en capital. Les performances passées ne préjugent pas des
          performances futures.
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Support (hypothèse : 5 % par an avant frais)</th>
            <th>Frais annuels</th>
            <th>Capital après 10 ans</th>
            <th>Manque à gagner dû aux frais</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sans aucun frais (repère théorique)</td>
            <td>0 %</td>
            <td>32 578 €</td>
            <td>0 €</td>
          </tr>
          <tr>
            <td>ETF actions</td>
            <td>0,33 %</td>
            <td>31 519 €</td>
            <td>1 059 €</td>
          </tr>
          <tr>
            <td>Fonds indiciel non coté</td>
            <td>0,75 %</td>
            <td>30 215 €</td>
            <td>2 363 €</td>
          </tr>
          <tr>
            <td>Fonds actions géré activement</td>
            <td>1,37 %</td>
            <td>28 380 €</td>
            <td>4 198 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        L'écart entre l'ETF et le fonds actif est de 3 139 € au bout de dix ans. Il varie avec
        l'hypothèse de performance sans changer d'ordre de grandeur : avec 3 % par an avant frais,
        il serait d'environ 2 590 € ; avec 7 %, d'environ 3 790 €. Plus les marchés montent, plus un
        même pourcentage de frais représente d'euros.
      </p>
      <p>
        Lu autrement : pour arriver au même capital que l'ETF, le fonds actif de cet exemple doit
        produire environ 1,1 point de performance avant frais de plus, chaque année, pendant dix
        ans. Ce n'est pas impossible, et certains fonds y parviennent sur certaines périodes. Mais
        c'est la barre à franchir, et elle est connue d'avance alors que la surperformance ne l'est
        pas. Pour refaire le calcul avec vos montants et votre durée, notre{" "}
        <a href="/outils/simulateur">simulateur d'épargne</a> donne des ordres de grandeur à partir
        d'hypothèses que vous choisissez ; ses résultats sont des pistes, pas des prévisions.
      </p>

      <h2>Un fonds ISR actif rapporte-t-il plus qu'un ETF ISR ?</h2>
      <p>
        Les données officielles ne permettent pas de le dire : selon la classe d'actifs et la
        période, la moyenne des fonds actifs passe devant ou derrière celle des ETF, et la moyenne
        des fonds ESG devant ou derrière celle des autres.
      </p>
      <p>
        Le rapport de l'ESMA du 3 mars 2026, déjà cité, contient à lui seul des résultats opposés :
      </p>
      <ul>
        <li>
          <strong>Actions, gestion active contre indicielle.</strong> En 2024, les fonds actions
          actifs de l'Union ont dégagé en moyenne 17,0 % net de frais récurrents, contre 21,3 % pour
          les fonds indiciels non cotés et 21,4 % pour les ETF. Sur la période de dix ans 2015-2024
          : 7,6 % par an contre 9,3 %.
        </li>
        <li>
          <strong>Obligations, le résultat s'inverse en 2024.</strong> Les fonds obligataires actifs
          ont fait mieux (7,2 %) que les fonds indiciels non cotés (6,3 %) et que les ETF (5,7 %).
        </li>
        <li>
          <strong>Fonds ESG contre non ESG.</strong> En 2024, les fonds ESG ont fait moins bien que
          leurs équivalents, en actions non cotées (16,4 % contre 17,7 %) comme en ETF actions (19,6
          % contre 21,9 %). Sur cinq ans (2020-2024), les fonds actions ESG non cotés font
          légèrement mieux que les non ESG (8,3 % contre 8,0 % par an), mais les ETF actions ESG
          font moins bien (9,5 % contre 10,6 %).
        </li>
      </ul>
      <p>
        Ces chiffres sont des moyennes sur des milliers de fonds, investisseurs particuliers et
        institutionnels confondus pour la comparaison entre gestion active et indicielle. Pour 2024,
        l'ESMA avance une explication possible du retard des fonds ESG : leur plus forte exposition
        aux marchés européens ou mondiaux, moins performants que les zones Amérique et Asie au
        second semestre. Ces moyennes ne disent rien du fonds précis que vous regardez, ni des dix
        prochaines années. Les études académiques sur la performance de l'investissement responsable
        sont tout aussi partagées, selon la méthode et la période retenues ; nous les passons en
        revue dans{" "}
        <LienArticle slug="investir-ethique-performance-chiffres">
          notre article sur la performance de l'investissement éthique
        </LienArticle>
        , à lire si la question du rendement est votre principal frein.
      </p>
      <p>
        Notre grille de lecture, qui n'engage que nous : la performance future est une inconnue pour
        les deux formats, alors que les frais sont une certitude. Un fonds actif doit donc apporter
        autre chose qu'un espoir de faire mieux : une sélection plus cohérente avec vos valeurs, ou
        un engagement documenté.
      </p>

      <h2>Indices PAB et CTB : que garantit un ETF « aligné sur l'accord de Paris » ?</h2>
      <p>
        Un ETF qui réplique un indice « accord de Paris » (PAB) ou « transition climatique » (CTB)
        suit des normes minimales fixées par le droit européen : une intensité d'émissions de gaz à
        effet de serre inférieure d'au moins 50 % (PAB) ou 30 % (CTB) à celle de son univers
        d'investissement, puis une réduction d'au moins 7 % par an en moyenne.
      </p>
      <p>
        Ces deux catégories ont été créées par le règlement (UE) 2019/2089, et leurs normes
        minimales fixées par le{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32020R1818"
          target="_blank"
          rel="noreferrer"
        >
          règlement délégué (UE) 2020/1818 du 17 juillet 2020
        </a>
        . C'est l'un des rares cas où un sigle dans le nom d'un fonds renvoie à des seuils chiffrés
        inscrits dans un texte, et non à une méthode maison.
      </p>
      <table>
        <thead>
          <tr>
            <th>Exigence du règlement délégué (UE) 2020/1818</th>
            <th>Indice « transition climatique » (CTB)</th>
            <th>Indice « accord de Paris » (PAB)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Intensité d'émissions par rapport à l'univers d'investissement (articles 9 et 11)
            </td>
            <td>Inférieure d'au moins 30 %</td>
            <td>Inférieure d'au moins 50 %</td>
          </tr>
          <tr>
            <td>Trajectoire de décarbonation (article 7)</td>
            <td>Au moins 7 % par an en moyenne</td>
            <td>Au moins 7 % par an en moyenne</td>
          </tr>
          <tr>
            <td>Exclusions de base (article 12, points a à c)</td>
            <td>
              Armes controversées, culture et production de tabac, violations du Pacte mondial des
              Nations unies ou des principes directeurs de l'OCDE
            </td>
            <td>Les mêmes</td>
          </tr>
          <tr>
            <td>Exclusions liées aux énergies fossiles (article 12, points d à g)</td>
            <td>Non imposées par le texte</td>
            <td>
              Entreprises tirant au moins 1 % de leur chiffre d'affaires du charbon (houille et
              lignite), 10 % des combustibles liquides, 50 % des combustibles gazeux, ou 50 % d'une
              production d'électricité émettant plus de 100 g de CO2 équivalent par kWh
            </td>
          </tr>
          <tr>
            <td>Poids des secteurs à fort enjeu climatique (article 3, indices actions)</td>
            <td>Au moins équivalent à celui de l'univers d'investissement</td>
            <td>Au moins équivalent à celui de l'univers d'investissement</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ce cadre garantit des seuils, pas une vertu générale. Trois limites méritent d'être connues
        :
      </p>
      <ul>
        <li>
          <strong>Ce sont des indices climatiques, pas des indices « éthiques » complets.</strong>{" "}
          En dehors des trois exclusions de base, le texte ne dit rien des conditions de travail, de
          la fiscalité des entreprises ou de l'alcool, par exemple.
        </li>
        <li>
          <strong>Un indice PAB n'est pas un indice sans industrie.</strong> L'article 3 impose de
          conserver, pour les indices actions, une exposition aux secteurs à fort enjeu climatique
          (industrie, énergie, transport, construction…) au moins égale à celle de l'univers de
          départ : la baisse d'intensité s'obtient en choisissant, dans ces secteurs, les
          entreprises les moins émettrices.
        </li>
        <li>
          <strong>La décarbonation est celle de l'indice.</strong> Un indice peut réduire son
          intensité en changeant la pondération de ses lignes ; cela ne prouve pas, à soi seul, que
          les entreprises ont réduit leurs propres émissions.
        </li>
      </ul>
      <p>
        Ces exclusions concernent aussi les fonds actifs. Depuis le 21 novembre 2024 pour les fonds
        nouveaux et le 21 mai 2025 pour les fonds existants, les orientations de l'ESMA sur les noms
        de fonds demandent qu'un fonds dont le nom contient un terme lié à l'environnement
        (catégorie qui, selon ces orientations, peut inclure les abréviations « ESG » et « ISR »), à
        l'« impact » ou à la « durabilité » applique les exclusions des indices « accord de Paris »,
        et qu'un fonds dont le nom contient « transition », « social » ou « gouvernance » applique
        au moins les trois exclusions de base (
        <a
          href="https://www.esma.europa.eu/sites/default/files/2024-08/ESMA34-1592494965-657_Guidelines_on_funds_names_using_ESG_or_sustainability_related_terms_FR.pdf"
          target="_blank"
          rel="noreferrer"
        >
          orientations de l'ESMA, points 16 à 18
        </a>
        ). Attention à la nuance : appliquer les <em>exclusions</em> d'un indice PAB n'oblige pas à
        suivre sa <em>trajectoire</em> de décarbonation. Seul un fonds qui réplique effectivement un
        indice PAB ou CTB est tenu par les seuils de 50 % ou 30 % et par les 7 % annuels. Le détail
        de ces règles de dénomination est dans{" "}
        <LienArticle slug="sfdr-refonte-et-regles-esma-noms-de-fonds-ce-qui-change">
          notre article sur les règles de l'ESMA applicables aux noms de fonds
        </LienArticle>
        , utile si vous voulez comprendre pourquoi certains fonds ont changé de nom en 2025.
      </p>

      <h2>Un ETF ISR peut-il peser sur les entreprises autant qu'un fonds actif ?</h2>
      <p>
        En partie seulement : un ETF peut voter et dialoguer, mais il ne peut pas vendre une
        entreprise tant qu'elle figure dans son indice, alors qu'un fonds actif dispose des deux
        leviers.
      </p>
      <p>
        Un ETF qui détient physiquement les actions de son indice est un actionnaire comme un autre
        : sa société de gestion exerce les droits de vote en assemblée générale et peut mener un
        dialogue avec les entreprises. Certains ETF reproduisent en revanche leur indice par un
        contrat d'échange (réplication synthétique) ; le fonds ne détient alors pas nécessairement
        les actions de l'indice, et la question du vote se pose autrement. Le mode de réplication
        figure dans le prospectus et le document d'informations clés.
      </p>
      <p>
        Un fonds actif n'est pas, par nature, un actionnaire plus engagé : tout dépend des moyens
        que la société de gestion y consacre et de ce qu'elle publie. Dans les deux cas, la preuve
        se trouve dans les mêmes documents : la politique d'engagement actionnarial et son compte
        rendu annuel, qui décrit notamment la manière dont les droits de vote ont été exercés, que
        les sociétés de gestion de portefeuille publient en application des articles L. 533-22 et R.
        533-16 du code monétaire et financier, et, quand il existe, le rapport d'engagement qui
        nomme les thèmes de dialogue et leurs résultats. Le débat de fond, exclure ou rester pour
        peser, n'est pas tranché par la recherche ; nous en exposons les deux lectures dans{" "}
        <LienArticle slug="engagement-actionnarial-vs-exclusion">
          notre comparatif entre exclusion et engagement actionnarial
        </LienArticle>
        .
      </p>
      <p>
        Quant au Label ISR, il ne départage pas les deux familles : il est attribué fonds par fonds,
        à des ETF comme à des fonds actifs, sur la base d'un référentiel public. La présence d'un
        fonds sur la liste officielle se contrôle en une minute, et{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          notre analyse de ce que le Label ISR garantit vraiment
        </LienArticle>{" "}
        précise ce que ce label exige et ce qu'il laisse de côté. Pour décoder les autres mentions
        d'une fiche produit, le <a href="/outils/decodeur-label">décodeur de labels</a> indique ce
        que chaque sigle recouvre.
      </p>

      <h2>ETF ISR ou fonds ISR actif : comment trancher en 5 questions ?</h2>
      <p>
        Cinq questions, posées dans cet ordre, suffisent à orienter le choix ; aucune ne porte sur
        la performance attendue, puisqu'elle est inconnue dans les deux cas.
      </p>
      <ol>
        <li>
          <strong>
            Existe-t-il un indice dont les règles correspondent à ce que vous voulez écarter ou
            financer ?
          </strong>{" "}
          Lisez la méthode de l'indice (exclusions, part des entreprises conservées, objectif
          climat). Si oui, passez à la question 2. Si aucun indice ne couvre votre exigence (un
          thème précis, une exclusion particulière, une approche d'impact), regardez du côté des
          fonds actifs et passez à la question 4.
        </li>
        <li>
          <strong>L'ETF correspondant est-il accessible dans votre enveloppe ?</strong> Sur un
          compte-titres, presque toujours. Dans un PEA, seulement s'il est éligible. Dans une
          assurance vie ou un PER, seulement s'il figure dans la liste des supports. Si oui, passez
          à la question 3. Si non, comparez le coût d'un changement d'enveloppe (fiscalité comprise)
          avec celui d'un fonds actif disponible sur place.
        </li>
        <li>
          <strong>
            Êtes-vous prêt à passer vous-même des ordres et à accepter une règle mécanique ?
          </strong>{" "}
          Si oui, l'ETF ISR est le format cohérent avec vos réponses. Si vous préférez qu'une équipe
          puisse réagir à une controverse ou dialoguer avec les entreprises, passez à la question 4.
        </li>
        <li>
          <strong>Le fonds actif envisagé prouve-t-il ce qu'il fait de différent ?</strong> Demandez
          son rapport de vote et d'engagement, son annexe SFDR et la liste de ses principales lignes
          ; comparez-les avec celles d'un ETF ISR de la même zone. Si les portefeuilles se
          ressemblent, la différence de frais n'achète pas grand-chose. S'ils diffèrent nettement,
          passez à la question 5.
        </li>
        <li>
          <strong>Le surcoût annuel vous paraît-il justifié par cette différence ?</strong>{" "}
          Traduisez-le en euros sur votre durée de placement, comme dans l'exemple plus haut. Si
          oui, le fonds actif est un choix assumé. Si non, revenez à l'ETF, ou partagez votre
          épargne entre les deux.
        </li>
      </ol>
      <p>
        Pour Karim, la situation type du début : un indice PAB couvre ses exclusions, l'ETF est
        accessible sur son compte-titres et il accepte de passer un ordre, ce qui le conduit vers
        l'ETF. S'il tient à l'engagement auprès des entreprises, la question 4 l'amène à demander le
        rapport de vote du fonds proposé avant de payer environ un point de plus par an. Ce déroulé
        illustre la méthode ; il ne vaut pas pour une autre situation que la sienne.
      </p>
      <h3>Les erreurs les plus fréquentes au moment de choisir</h3>
      <ul>
        <li>
          <strong>Croire que le prix mesure le sérieux.</strong> Des frais élevés rémunèrent une
          gestion et une distribution, pas un degré d'exigence éthique.
        </li>
        <li>
          <strong>Prendre un sigle pour un label.</strong> « ESG », « SRI » ou « Climate » dans le
          nom d'un ETF décrivent d'abord la méthode d'un indice ; seuls « PAB » et « CTB » renvoient
          à un cahier des charges d'indice fixé par un règlement (les autres termes déclenchent
          toutefois les exclusions prévues par les orientations de l'ESMA sur les noms de fonds), et
          aucun n'est le Label ISR.
        </li>
        <li>
          <strong>Comparer un ETF monde à un fonds actif européen.</strong> Les écarts de
          performance viennent alors surtout de la zone géographique, pas du mode de gestion.
        </li>
        <li>
          <strong>Oublier les frais de l'enveloppe et de la transaction.</strong> Un ETF à 0,2 %
          logé dans un contrat à frais élevés, ou acheté par petits ordres chers, perd une partie de
          son avantage.
        </li>
        <li>
          <strong>Vendre un fonds existant sans regarder la fiscalité.</strong> Remplacer un fonds
          actif par un ETF sur un compte-titres peut déclencher l'imposition d'une plus-value ;{" "}
          <LienArticle slug="passer-epargne-isr-fiscalite-par-enveloppe">
            notre article sur la fiscalité d'un passage à l'ISR, enveloppe par enveloppe
          </LienArticle>{" "}
          détaille ce qui est imposé et ce qui ne l'est pas.
        </li>
      </ul>

      <h2>Vos questions sur les ETF ISR et les fonds ISR actifs</h2>
      <FaqArticle items={meta.faq!} />

      <h2>ETF ISR ou fonds actif : ce qu'il faut retenir avant de choisir</h2>
      <p>
        <strong>La réponse.</strong> Aucun des deux formats n'est « le plus éthique » par nature.
        L'ETF ISR offre une règle publique et un coût moyen d'environ un tiers de point par an ; le
        fonds ISR actif offre un jugement, une capacité à vendre et, parfois, un engagement
        documenté, pour un coût moyen proche de 1,4 % par an (AMF, données 2025). Sur la performance
        future, les données officielles ne départagent pas les deux.
      </p>
      <p>
        <strong>Le coût de l'inaction.</strong> Ne pas regarder, c'est payer pendant dix ans un
        point de frais annuels en plus (environ 3 100 € pour 20 000 € dans notre exemple) sans
        savoir s'il finance un travail réel, ou à l'inverse détenir un ETF dont l'indice n'exclut
        pas ce que vous pensiez écarter.
      </p>
      <p>
        <strong>La prochaine étape.</strong> Prenez les deux fonds que vous comparez, relevez leurs
        frais dans le document d'informations clés, puis lisez la règle de l'indice pour l'un et le
        rapport de vote pour l'autre. Si vous débutez avec les ETF,{" "}
        <LienArticle slug="etf-isr-debutants">notre guide de l'ETF ISR pour débutants</LienArticle>{" "}
        explique où trouver chacun de ces documents et dans quelle enveloppe loger le fonds.
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
