import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "obligations-vertes-vs-obligations-classiques",
  title: "Obligations vertes ou obligations classiques : quelles différences réelles ?",
  excerpt:
    "Même risque de crédit, rendement très proche : la vraie différence d'une obligation verte tient au fléchage vérifiable des fonds levés — et à son contrôle.",
  readingTime: "11 min",
  category: "Performance",
  date: "2026-05-29",
  tags: ["obligations vertes", "green bonds", "greenium", "EuGB", "rendement obligataire"],
  author: "Sébastien Petrisot",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> une obligation verte (green bond) est une obligation comme
          les autres sur presque tous les plans qui comptent pour votre argent : même émetteur, même
          risque de crédit, même sensibilité aux taux d'intérêt, et un rendement en général très
          proche de celui d'une obligation classique équivalente — l'écart, quand il existe, se
          mesure en centièmes de point. La différence réelle est ailleurs : les fonds levés sont
          fléchés vers des projets environnementaux identifiés, et l'émetteur s'engage à publier un
          reporting sur cet usage. Autrement dit, le « vert » ne change ni votre risque ni votre
          rendement — il change ce que vous pouvez vérifier. Cet article détaille ce que ce fléchage
          garantit, ce qu'il ne garantit pas, et comment en profiter en tant qu'épargnant.
        </p>
      </div>

      <p>
        Vous avez repéré un fonds « Green Bonds » dans la liste des supports de votre assurance vie,
        ou lu qu'une obligation verte permettait de « financer la transition sans sacrifier le
        rendement ». Et deux soupçons contradictoires vous viennent en même temps : soit c'est trop
        beau — le même rendement <em>et</em> la planète —, soit c'est une étiquette de plus, un coup
        de peinture verte sur un produit obligataire ordinaire.
      </p>
      <p>
        Les deux soupçons méritent une réponse précise, car le produit est devenu impossible à
        ignorer. Depuis la première émission de la Banque européenne d'investissement en 2007, le
        marché des obligations vertes se compte en milliers de milliards de dollars d'émissions
        cumulées, et l'État français lui-même a émis sa première{" "}
        <a
          href="https://www.ecologie.gouv.fr/politiques-publiques/obligations-vertes"
          target="_blank"
          rel="noreferrer"
        >
          OAT verte en janvier 2017, levant 7 milliards d'euros
        </a>{" "}
        — parmi les tout premiers États au monde à franchir le pas.
      </p>
      <p>
        Dans cet article : ce qu'est exactement une obligation verte, ce qui change — et ne change
        pas — par rapport à une obligation classique, ce que disent les études sur l'écart de
        rendement (le fameux « greenium »), qui contrôle réellement l'usage des fonds, et une
        méthode simple en trois lectures pour évaluer un fonds d'obligations vertes avant d'y placer
        un euro.
      </p>

      <h2>Une obligation verte, qu'est-ce que c'est exactement ?</h2>
      <p>
        Commençons par la mécanique commune. Une obligation est un titre de dette : vous prêtez de
        l'argent à un État, une collectivité ou une entreprise, qui s'engage à vous verser un
        intérêt (le coupon) puis à vous rembourser à l'échéance. Votre risque principal est le{" "}
        <strong>risque de crédit</strong> — que l'émetteur ne rembourse pas — et, si vous revendez
        avant l'échéance, le <strong>risque de taux</strong> : quand les taux d'intérêt montent, le
        prix des obligations existantes baisse.
      </p>
      <p>
        Une{" "}
        <a
          href="https://www.banque-france.fr/fr/publications-et-statistiques/publications/obligation-verte"
          target="_blank"
          rel="noreferrer"
        >
          obligation verte
        </a>{" "}
        est exactement ce titre-là, avec une clause d'usage en plus : l'émetteur s'engage à affecter
        les fonds levés au financement ou au refinancement de projets à bénéfice environnemental —
        énergies renouvelables, rénovation énergétique de bâtiments, transports bas-carbone, gestion
        de l'eau… C'est ce qu'on appelle le principe d'<em>use of proceeds</em> : le fléchage des
        fonds. L'engagement porte sur la destination de l'argent, pas sur la nature de l'émetteur —
        une entreprise dont l'activité principale n'a rien de « vert » peut émettre une obligation
        verte pour financer un projet qui l'est.
      </p>
      <p>
        Retenez le point structurel qui explique presque tout le reste de cet article :{" "}
        <strong>le fléchage ne crée pas de garantie financière supplémentaire</strong>. Vous n'êtes
        pas créancier du parc éolien ou du programme de rénovation : vous êtes créancier de
        l'émetteur, sur son bilan, au même rang que les porteurs de ses obligations classiques de
        même catégorie. Si l'émetteur fait défaut, l'obligation verte fait défaut avec les autres.
      </p>

      <h2>Qu'est-ce qui change vraiment par rapport à une obligation classique ?</h2>
      <p>
        Trois choses changent : la destination déclarée des fonds, le reporting que l'émetteur
        s'engage à publier, et — souvent — l'existence d'une revue externe de ces engagements. Tout
        le reste est identique. Le tableau qui suit compare les deux produits sur les critères qui
        pèsent réellement dans votre décision :
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Obligation classique</th>
            <th>Obligation verte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Usage des fonds levés</strong>
            </td>
            <td>Libre : besoins généraux de l'émetteur</td>
            <td>Fléché vers des projets environnementaux identifiés et documentés</td>
          </tr>
          <tr>
            <td>
              <strong>Risque de crédit</strong>
            </td>
            <td>Celui de l'émetteur</td>
            <td>
              Identique : même émetteur, même bilan, même rang de créance — le projet financé n'est
              pas une garantie
            </td>
          </tr>
          <tr>
            <td>
              <strong>Risque de taux</strong>
            </td>
            <td>Selon la durée du titre</td>
            <td>
              Identique à durée égale — les émissions vertes financent souvent des projets longs,
              donc des maturités parfois longues, à vérifier titre par titre
            </td>
          </tr>
          <tr>
            <td>
              <strong>Rendement</strong>
            </td>
            <td>Le taux de marché pour cette signature et cette durée</td>
            <td>
              Très proche ; un léger écart en faveur de l'émetteur (le « greenium ») est observé
              selon les périodes — quelques centièmes de point, variable
            </td>
          </tr>
          <tr>
            <td>
              <strong>Reporting</strong>
            </td>
            <td>Information financière classique</td>
            <td>
              En plus : rapport d'allocation des fonds et, de plus en plus, rapport d'impact
              (émissions évitées, capacités installées…)
            </td>
          </tr>
          <tr>
            <td>
              <strong>Contrôle externe</strong>
            </td>
            <td>Notation de crédit</td>
            <td>
              Notation de crédit + revue externe du cadre vert (seconde opinion, et examinateur
              supervisé par l'ESMA pour le standard européen EuGB)
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ce que ça ne garantit pas</strong>
            </td>
            <td>—</td>
            <td>
              La vertu globale de l'émetteur, l'additionnalité du projet, et votre capital — qui
              reste exposé aux mêmes risques que sur une obligation classique
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Lecture honnête de ce tableau : si vous cherchez un produit obligataire{" "}
        <em>financièrement</em> différent, l'obligation verte n'en est pas un. Si vous cherchez à
        savoir ce que votre épargne obligataire finance — ce qui est précisément l'angle mort des
        fonds obligataires classiques —, c'est le seul segment du marché obligataire qui vous doit
        contractuellement cette information.
      </p>

      <h2>Une obligation verte rapporte-t-elle moins ? Le débat du « greenium »</h2>
      <p>
        C'est la question de performance, et elle a une réponse plus nuancée que les deux slogans
        qui circulent (« on sacrifie du rendement pour ses valeurs » / « on gagne autant en sauvant
        la planète »).
      </p>
      <p>
        Le « greenium » — contraction de <em>green</em> et <em>premium</em> — désigne l'écart de
        rendement entre une obligation verte et une obligation classique comparable du même
        émetteur. Quand la demande des investisseurs pour les titres verts dépasse l'offre, ils
        acceptent un rendement légèrement inférieur : l'émetteur emprunte un peu moins cher,
        l'investisseur gagne un peu moins. Les travaux publiés par la{" "}
        <a
          href="https://www.banque-france.fr/en/publications-and-statistics/publications/do-green-sovereign-bonds-benefit-green-premium"
          target="_blank"
          rel="noreferrer"
        >
          Banque de France
        </a>{" "}
        sur les obligations souveraines et d'entreprises de la zone euro convergent sur trois
        constats : ce greenium existe, il est faible — de l'ordre de quelques centièmes de point de
        rendement —, et il fluctue fortement selon les périodes, les pays et les secteurs, au point
        de quasiment disparaître sur certaines phases de marché.
      </p>
      <p>
        Traduction pour votre épargne : à l'échelle d'un particulier investi via un fonds, l'écart
        de rendement attribuable au caractère « vert » des titres est marginal — généralement
        inférieur à l'écart de frais entre deux fonds obligataires concurrents. Le premier chiffre à
        regarder dans un fonds d'obligations vertes n'est donc pas le greenium : ce sont les frais
        courants, puis la qualité de crédit et la durée moyenne du portefeuille, exactement comme
        pour un fonds obligataire classique. La question plus large de la performance des placements
        responsables — traversée d'études contradictoires selon les périodes et les méthodologies —
        est décortiquée dans notre article{" "}
        <LienArticle slug="investir-ethique-performance-chiffres">
          « Investir éthique rapporte-t-il moins ? »
        </LienArticle>
        .
      </p>
      <div className="callout">
        <p>
          <strong>Rappel utile :</strong> une obligation, verte ou non, n'est pas un produit
          garanti. Sa valeur fluctue avec les taux d'intérêt et la santé de l'émetteur, et un fonds
          obligataire présente un risque de perte en capital. Les performances passées ne préjugent
          pas des performances futures.
        </p>
      </div>

      <h2>Une obligation verte est-elle moins risquée qu'une obligation classique ?</h2>
      <p>
        Non — et il faut le dire clairement, parce que l'intuition inverse est répandue. L'étiquette
        verte ne modifie aucun des deux risques qui déterminent le sort d'un placement obligataire.
      </p>
      <p>
        <strong>Le risque de crédit est celui de l'émetteur, pas du projet.</strong> Une OAT verte
        porte la signature de l'État français au même titre qu'une OAT classique ; une obligation
        verte d'entreprise porte celle de l'entreprise. En cas de défaut, le porteur d'obligations
        vertes est traité comme les autres créanciers de même rang : le parc solaire financé ne lui
        revient pas en compensation. Le « vert » n'est ni une sûreté, ni un collatéral.
      </p>
      <p>
        <strong>Le risque de taux dépend de la durée, pas de la couleur.</strong> À maturité et
        signature égales, une obligation verte réagit aux mouvements de taux exactement comme sa
        jumelle classique. Un point de vigilance tout de même : les projets environnementaux étant
        souvent des investissements de long terme, certaines émissions vertes — et certains fonds
        qui les regroupent — affichent des durées longues, donc une sensibilité aux taux élevée.
        C'est une caractéristique à lire dans le document d'informations clés (DIC) du fonds, pas
        une fatalité du produit.
      </p>
      <p>
        En sens inverse, l'étiquette n'ajoute pas non plus de risque financier propre. Le risque
        spécifique d'une obligation verte est d'une autre nature : c'est le risque que la promesse
        environnementale ne soit pas tenue — et c'est l'objet de la section suivante.
      </p>

      <h2>Qui vérifie que l'argent finance vraiment des projets verts ?</h2>
      <p>
        C'est ici que se joue la vraie différence entre une obligation verte sérieuse et un titre
        repeint. Trois niveaux d'exigence coexistent sur le marché.
      </p>
      <h3>Le standard de marché : les Green Bond Principles</h3>
      <p>
        Depuis 2014, la plupart des émissions se réfèrent aux{" "}
        <a
          href="https://www.icmagroup.org/sustainable-finance/the-principles-guidelines-and-handbooks/green-bond-principles-gbp/"
          target="_blank"
          rel="noreferrer"
        >
          Green Bond Principles de l'ICMA
        </a>{" "}
        (l'association internationale des marchés de capitaux), qui reposent sur quatre piliers :
        usage des fonds défini, processus de sélection des projets documenté, gestion ségréguée des
        fonds levés, et reporting régulier. C'est un cadre volontaire, sans force de loi : il
        encourage une revue externe (la « seconde opinion » d'un cabinet spécialisé), mais ne
        l'impose pas, et personne ne sanctionne un émetteur qui s'en écarte — sinon le marché
        lui-même.
      </p>
      <h3>Le cran au-dessus : l'obligation verte européenne (EuGB)</h3>
      <p>
        Depuis le 21 décembre 2024, le{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32023R2631"
          target="_blank"
          rel="noreferrer"
        >
          règlement (UE) 2023/2631
        </a>{" "}
        encadre l'appellation « obligation verte européenne » (EuGB). Le standard reste volontaire —
        un émetteur peut continuer d'émettre des obligations vertes hors de ce cadre —, mais celui
        qui revendique le label EuGB s'engage sur des règles précises :{" "}
        <a
          href="https://www.europarl.europa.eu/news/fr/press-room/20230929IPR06139/les-deputes-approuvent-une-nouvelle-norme-pour-lutter-contre-l-ecoblanchiment"
          target="_blank"
          rel="noreferrer"
        >
          au moins 85 % des fonds levés
        </a>{" "}
        doivent financer des activités alignées sur la taxonomie verte européenne (la classification
        officielle des activités durables de l'UE), la poche de flexibilité de 15 % restante devant
        elle-même être justifiée ; et la vérification est confiée à des examinateurs externes
        enregistrés et supervisés par l'ESMA, l'autorité européenne des marchés financiers. C'est le
        cadre le plus exigeant du marché à ce jour — nous expliquons ce que mesure cet alignement
        taxonomique dans{" "}
        <LienArticle slug="taxonomie-verte-europeenne-epargne">
          notre analyse de la taxonomie verte et de votre épargne
        </LienArticle>
        .
      </p>
      <h3>La limite qu'aucun cadre ne lève : l'additionnalité</h3>
      <p>
        Reste un débat de fond, qu'il serait malhonnête de vous cacher. Les critiques des
        obligations vertes font valoir que l'argent est fongible : un émetteur peut flécher une
        émission verte vers des projets environnementaux qu'il aurait financés de toute façon, voire
        refinancer des actifs verts existants — et libérer d'autant son budget pour le reste de ses
        activités, quelles qu'elles soient. Dans cette lecture, l'obligation verte ne crée pas de
        projet supplémentaire : elle réétiquette des flux. Les défenseurs répondent que le fléchage
        a des effets réels même sans additionnalité directe : il oblige l'émetteur à construire un
        inventaire de projets verts, installe une discipline de reporting inédite sur le marché
        obligataire, révèle la demande des investisseurs pour la transition, et abaisse
        marginalement le coût de financement des projets verts via le greenium.
      </p>
      <p>
        Notre grille de lecture, en tant que cabinet : les deux arguments sont solides, et la
        conclusion pratique est la même. Une obligation verte est un{" "}
        <strong>outil de transparence sur des flux</strong>, pas un certificat de vertu de
        l'émetteur. Elle se juge donc à deux niveaux : la qualité du cadre (qui a vérifié quoi ?){" "}
        <em>et</em> la trajectoire globale de l'émetteur — un titre impeccablement fléché n'efface
        pas une stratégie d'entreprise qui va en sens inverse.
      </p>
      <div className="callout">
        <p>
          <strong>Le signal d'alerte le plus simple :</strong> une obligation ou un fonds « vert »
          qui ne publie pas de rapport d'allocation des fonds — ou dont le rapport reste introuvable
          — ne vous offre précisément pas la seule chose qui le distingue d'un produit classique. Le
          reporting n'est pas un bonus : c'est le produit.
        </p>
      </div>

      <h2>Comment investir en obligations vertes quand on est un particulier ?</h2>
      <p>
        En pratique, un particulier accède rarement aux obligations vertes en direct : les émissions
        s'adressent d'abord aux investisseurs institutionnels, souvent par coupures élevées. La voie
        normale passe par un <strong>fonds ou un ETF d'obligations vertes</strong>, logé dans une
        assurance vie, un PER ou un compte-titres. Avant de souscrire, nous vous suggérons la
        méthode des <strong>3 C — Cadre, Contenu, Coût</strong> :
      </p>
      <ol>
        <li>
          <strong>Le Cadre.</strong> À quel référentiel le fonds se réfère-t-il pour qualifier un
          titre de « vert » : Green Bond Principles, standard EuGB, titres alignés taxonomie ? Le
          fonds est-il labellisé (le label Greenfin, notamment, est conçu pour les fonds finançant
          la transition) et comment est-il classé au sens du règlement SFDR ? Ces tampons ne disent
          pas tout, mais leur absence totale, sur ce segment précis, interroge. Notre{" "}
          <a href="/outils/decodeur-label">décodeur de labels</a> résume ce que chacun garantit — il
          vous donne des pistes de lecture, la vérification finale restant le document officiel du
          fonds.
        </li>
        <li>
          <strong>Le Contenu.</strong> Ouvrez le reporting du fonds et le rapport d'allocation des
          principales émissions détenues : quels types de projets, quelle part de refinancement
          d'actifs existants, quels émetteurs ? Dix minutes de lecture suffisent à distinguer un
          portefeuille documenté d'une étiquette.
        </li>
        <li>
          <strong>Le Coût.</strong> Comparez les frais courants du fonds au rendement obligataire
          attendu. Sur un placement obligataire, dont le rendement est par nature plus modeste que
          celui des actions, chaque dixième de point de frais pèse proportionnellement lourd —
          souvent plus que le greenium lui-même. Notre{" "}
          <a href="/outils/simulateur">simulateur d'épargne</a> permet de mesurer l'effet des frais
          année par année, à titre d'hypothèse illustrative.
        </li>
      </ol>

      <h2>Vos questions sur les obligations vertes</h2>

      <h3>Une obligation verte rapporte-t-elle moins qu'une obligation classique ?</h3>
      <p>
        Légèrement, parfois. L'écart observé — le greenium — se mesure en centièmes de point de
        rendement et varie selon les périodes, au point de disparaître sur certaines phases de
        marché, d'après les travaux de la Banque de France. Pour un particulier investi via un
        fonds, cet écart est généralement plus faible que l'écart de frais entre deux fonds
        concurrents : c'est là que se joue votre rendement net.
      </p>

      <h3>Une obligation verte est-elle garantie en capital ?</h3>
      <p>
        Non. Vous portez le risque de crédit de l'émetteur et, en cas de revente avant l'échéance,
        le risque de taux ; un fonds d'obligations vertes présente un risque de perte en capital
        comme tout fonds obligataire. Le caractère « vert » du titre ne constitue ni une garantie,
        ni une sûreté supplémentaire.
      </p>

      <h3>Peut-on acheter une obligation verte en direct en tant que particulier ?</h3>
      <p>
        C'est rarement la voie praticable : les émissions visent d'abord les institutionnels et les
        montants minimaux de souscription sont souvent élevés. L'accès usuel passe par des fonds ou
        ETF spécialisés, disponibles en assurance vie, PER ou compte-titres — avec l'avantage d'une
        diversification sur des dizaines d'émetteurs que vous n'auriez pas en direct.
      </p>

      <h3>
        Quelle différence entre obligation verte, obligation durable et obligation liée à la
        durabilité ?
      </h3>
      <p>
        L'obligation verte flèche les fonds vers des projets environnementaux ; l'obligation sociale
        vers des projets sociaux ; l'obligation durable combine les deux. L'obligation liée à la
        durabilité (<em>sustainability-linked bond</em>) fonctionne autrement : les fonds sont
        d'usage libre, mais le coupon varie selon l'atteinte d'objectifs de durabilité par
        l'émetteur. Ce dernier format ne comporte donc aucun fléchage — un point souvent mal
        compris.
      </p>

      <h3>Une OAT verte est-elle plus sûre qu'une OAT classique ?</h3>
      <p>
        Non : même signature — celle de l'État français —, même rang de créance, même risque. La
        différence est documentaire : l'État publie chaque année l'allocation des dépenses adossées
        à ses OAT vertes et un rapport d'impact, ce qu'il ne fait pas pour ses emprunts classiques.
      </p>

      <h3>Le label Greenfin garantit-il qu'un fonds d'obligations vertes est sérieux ?</h3>
      <p>
        Le label Greenfin, créé par l'État français, impose un univers d'investissement centré sur
        la transition énergétique et écologique et exclut notamment les énergies fossiles — c'est le
        label le plus pertinent pour ce segment. Comme tout label, il garantit le respect de son
        propre référentiel, pas l'adéquation du fonds à vos critères personnels. Nous comparons sa
        promesse à celle du Label ISR dans{" "}
        <LienArticle slug="label-greenfin-vs-label-isr">
          notre face-à-face Greenfin vs Label ISR
        </LienArticle>
        .
      </p>

      <h3>Comment savoir ce que finance concrètement une obligation verte ?</h3>
      <p>
        Par le rapport d'allocation (et souvent d'impact) que l'émetteur s'engage à publier : liste
        des catégories de projets financés, montants alloués, et indicateurs comme les émissions
        évitées. Pour un fonds, le reporting mensuel et le rapport annuel jouent le même rôle. Si
        ces documents n'existent pas ou restent introuvables, considérez que la promesse verte n'est
        pas vérifiable — et tirez-en les conséquences.
      </p>

      <h2>La couleur ne change pas votre risque — elle change ce que vous pouvez exiger</h2>
      <p>
        Vous avez maintenant la réponse complète à la question de départ. Financièrement, une
        obligation verte est la jumelle d'une obligation classique : même risque, même mécanique,
        rendement quasi identique — vous ne sacrifiez pas votre performance en choisissant le
        fléchage vert, mais vous ne gagnez pas non plus une protection qui n'existe pas. Ce que vous
        gagnez est d'une autre nature : un droit de regard documenté sur ce que finance votre
        épargne obligataire, adossé à des cadres de plus en plus exigeants — jusqu'au standard
        européen EuGB et ses examinateurs supervisés.
      </p>
      <p>
        Ignorer cette distinction a un coût dans les deux sens. Acheter l'étiquette sans ouvrir le
        rapport d'allocation, c'est payer pour de la transparence sans jamais la consommer. Et
        laisser dormir son épargne dans des fonds obligataires classiques sans se poser la question
        de leur contenu, c'est accepter que la moitié « dette » de son patrimoine finance on ne sait
        quoi — alors même que des instruments documentés existent.
      </p>
      <p>
        Pour la suite logique de cette lecture : les fonds d'obligations vertes affichent presque
        tous une classification SFDR Article 8 ou 9 — notre article{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          sur ce que garantit vraiment cette classification
        </LienArticle>{" "}
        vous apprendra à lire ces annexes comme un professionnel. Et si vous vous demandez plus
        largement si l'épargne responsable se paie en rendement, notre analyse{" "}
        <LienArticle slug="investir-ethique-performance-chiffres">
          des chiffres de la performance éthique
        </LienArticle>{" "}
        fait le tri dans les études contradictoires.
      </p>
      <p>
        Enfin, si vous préférez examiner tout cela accompagné — quelle part obligataire dans votre
        allocation, quels fonds verts dans votre contrat, quels documents leur demander —, c'est
        notre métier : lors d'un premier échange offert, un conseiller du cabinet passe en revue vos
        supports actuels avec vous, documents à l'appui, sans jargon et sans engagement.
      </p>
    </>
  );
}
