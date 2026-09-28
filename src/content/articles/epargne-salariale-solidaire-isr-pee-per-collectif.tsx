import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";
import { FaqArticle } from "./faq";

export const meta: ArticleMeta = {
  slug: "epargne-salariale-solidaire-isr-pee-per-collectif",
  title: "Épargne salariale ISR et solidaire : PEE et PER collectif",
  excerpt:
    "Votre PEE ou votre PER collectif propose-t-il des fonds ISR ou solidaires ? Ce que la loi impose, comment lire la liste des fonds et ce qui reste bloqué.",
  readingTime: "12 min",
  category: "Fondamentaux",
  date: "2026-09-28",
  tags: ["épargne salariale", "PEE", "PER collectif", "fonds solidaire", "ISR", "FCPE"],
  author: "Alexandre Pollet",
  faq: [
    {
      q: "Mon entreprise est-elle obligée de proposer un PEE ou un PER collectif ?",
      a: "Non pour le plan d'épargne lui-même : PEE et PER collectif sont facultatifs. La participation, elle, est obligatoire à partir de 50 salariés. Si votre entreprise a mis un plan en place, vous le trouvez décrit dans le livret d'épargne salariale que l'employeur doit vous remettre à l'embauche.",
    },
    {
      q: "Puis-je choisir moi-même les fonds de mon PEE ou de mon PER collectif ?",
      a: "Oui, parmi la liste que le plan propose : c'est l'entreprise, via le règlement du plan, qui fixe cet univers, pas vous. Sans choix de votre part, une affectation par défaut s'applique. Dans un PER d'entreprise, c'est une gestion pilotée, qui réduit progressivement la part des actifs risqués à l'approche de la retraite, sauf décision contraire de votre part.",
    },
    {
      q: "Un fonds solidaire d'épargne salariale est-il un fonds éthique ?",
      a: "Pas au sens d'un portefeuille entièrement engagé : dans un fonds solidaire, seule une part encadrée par la loi de l'actif, entre 5 % et 15 %, est investie dans des entreprises solidaires d'utilité sociale. Le reste est investi de façon classique, avec ou sans approche ISR selon le fonds. C'est le document d'informations clés et le règlement du fonds qui le précisent.",
    },
    {
      q: "Un fonds portant le Label ISR est-il forcément éthique ?",
      a: "Non. Le Label ISR certifie une méthodologie de sélection ESG auditée, pas la conformité du portefeuille à vos valeurs personnelles. Un fonds labellisé peut détenir des entreprises que vous préféreriez exclure. Le bon réflexe reste de lire le document d'informations clés et d'examiner l'inventaire du fonds.",
    },
    {
      q: "Que devient mon épargne salariale si je quitte l'entreprise ?",
      a: "Elle vous appartient toujours. Un ancien salarié peut conserver son plan, et les sommes peuvent, selon les cas, être transférées vers un autre plan. Un état récapitulatif des sommes détenues vous est remis à votre départ ; il précise aussi si les frais de tenue de compte restent à la charge de l'entreprise ou sont prélevés sur votre épargne.",
    },
    {
      q: "Puis-je récupérer mon épargne salariale avant la fin du blocage ?",
      a: "Seulement dans des cas fixés par la loi. Pour un PEE, la liste est assez large (mariage, naissance du troisième enfant, achat de la résidence principale, et depuis juillet 2024 proche aidant, rénovation énergétique ou véhicule propre, entre autres). Pour un PER collectif, elle est plus restreinte : décès, invalidité, surendettement, fin des droits au chômage, achat de la résidence principale, notamment.",
    },
    {
      q: "Dois-je déclarer mon épargne salariale aux impôts ?",
      a: "Les sommes de participation et d'intéressement placées dans un plan dans les délais légaux et laissées bloquées sont exonérées d'impôt sur le revenu, dans la limite d'un plafond annuel, mais restent soumises à la CSG et à la CRDS. Un retrait en dehors des cas de déblocage autorisés, ou des sommes non placées dans les délais, peut en revanche être imposable.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> oui, votre épargne salariale peut être investie de façon
          responsable ou solidaire, et la loi vous y aide : le règlement d'un plan d'épargne
          d'entreprise doit permettre d'investir dans un fonds solidaire et dans au moins un fonds
          labellisé (ISR, Greenfin, Finansol, Relance ou label du comité intersyndical de l'épargne
          salariale), et un PER d'entreprise doit proposer une allocation équivalente. Mais «
          proposer » ne veut pas dire « être investi dedans » : c'est vous qui choisissez, dans une
          liste fixée par votre employeur. Une fois vos fonds identifiés, il reste à vérifier ce
          qu'ils contiennent, car un fonds solidaire n'est solidaire que pour une petite fraction de
          son actif. Et gardez en tête le prix de l'épargne salariale : elle est bloquée (cinq ans
          minimum en PEE, jusqu'à la retraite en PER collectif), sauf cas de déblocage prévus par la
          loi.
        </p>
      </div>

      <p>
        Vous avez peut-être déjà vu passer la mention « intéressement » ou « participation » sur
        votre bulletin de paie, reçu un email de la plateforme de votre teneur de compte, ou signé
        un formulaire de répartition une fois, un jour, sans trop y réfléchir. Résultat possible :
        une épargne qui n'a jamais fait l'objet d'un vrai choix de votre part, placée chez le teneur
        de compte retenu par votre employeur, dans des fonds dont vous ne connaissez ni le nom ni le
        contenu. Et si vous vous êtes mis en tête que votre épargne devait financer autre chose que
        n'importe quoi, la question se pose naturellement : ces fonds-là, sont-ils responsables ?
      </p>
      <p>
        L'<strong>épargne salariale</strong> désigne l'ensemble des dispositifs collectifs, mis en
        place par l'entreprise, qui vous permettent de placer de l'argent avec un cadre fiscal
        favorable : le plan d'épargne entreprise (PEE), le plan d'épargne retraite d'entreprise
        collectif (PER collectif), et les sommes qui les alimentent (participation, intéressement,
        abondement de l'employeur, versements volontaires). C'est une enveloppe à part, avec ses
        propres règles de choix des fonds — différentes de celles d'une assurance vie ou d'un PER
        que vous ouvririez vous-même.
      </p>
      <p>
        Dans cet article : ce que ces plans contiennent, ce que la loi impose à votre employeur en
        matière de fonds solidaires et labellisés, comment lire la liste qu'il vous propose, ce
        qu'un fonds solidaire finance réellement (avec un exemple chiffré), et ce que vous pouvez
        faire d'une épargne bloquée. Chaque affirmation légale est liée à sa source officielle.
      </p>

      <h2>
        Qu'est-ce que l'épargne salariale : PEE, PER collectif, participation, intéressement ?
      </h2>
      <p>
        Quatre mots reviennent, et on les confond souvent. Deux d'entre eux désignent des{" "}
        <em>sources d'argent</em>, deux autres des <em>contenants</em>.
      </p>
      <ul>
        <li>
          <strong>La participation</strong> redistribue une part des bénéfices de l'entreprise aux
          salariés. Elle est obligatoire à partir de 50 salariés, facultative en dessous, selon{" "}
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2141"
            target="_blank"
            rel="noreferrer"
          >
            service-public.gouv.fr
          </a>
          .
        </li>
        <li>
          <strong>L'intéressement</strong> est un dispositif facultatif, fondé sur un accord, qui
          associe les salariés aux résultats ou aux objectifs de l'entreprise (
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2140"
            target="_blank"
            rel="noreferrer"
          >
            fiche service-public.gouv.fr
          </a>
          ).
        </li>
        <li>
          <strong>Le PEE</strong> est un plan collectif qui vous permet de constituer un
          portefeuille de valeurs mobilières, avec l'aide éventuelle de l'entreprise. Les sommes y
          sont bloquées au moins cinq ans (
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2142"
            target="_blank"
            rel="noreferrer"
          >
            fiche PEE
          </a>
          ).
        </li>
        <li>
          <strong>Le PER collectif</strong> est un plan d'épargne retraite proposé par l'entreprise
          : épargne bloquée en principe jusqu'à la retraite, avec une sortie en capital ou en rente
          (
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F36526"
            target="_blank"
            rel="noreferrer"
          >
            fiche PER collectif
          </a>
          ).
        </li>
      </ul>
      <p>
        Le circuit est simple : la participation et l'intéressement que vous touchez peuvent être
        versés directement sur votre compte, ou placés dans un PEE ou un PER collectif. C'est ce
        placement qui vous fait entrer dans l'univers des fonds. Le livret d'épargne salariale que
        l'employeur doit vous remettre à l'embauche présente les dispositifs en vigueur dans votre
        entreprise, comme le prévoit l'
        <a
          href="https://code.travail.gouv.fr/code-du-travail/l3341-6"
          target="_blank"
          rel="noreferrer"
        >
          article L. 3341-6 du code du travail
        </a>
        : c'est le premier document à retrouver.
      </p>

      <h2>Y a-t-il des fonds ISR ou solidaires dans votre PEE ou votre PER collectif ?</h2>
      <p>En principe oui, et pour une raison légale, pas seulement commerciale.</p>
      <h3>Ce que la loi impose au règlement du plan</h3>
      <p>
        Pour un PEE, l'
        <a
          href="https://code.travail.gouv.fr/code-du-travail/l3332-17"
          target="_blank"
          rel="noreferrer"
        >
          article L. 3332-17 du code du travail
        </a>{" "}
        prévoit que le règlement du plan permet d'affecter une partie des sommes à des fonds
        investis dans des entreprises solidaires d'utilité sociale, et à au moins un fonds labellisé
        au titre de la transition énergétique et écologique ou de l'investissement socialement
        responsable. L'obligation de proposer un fonds labellisé s'applique depuis le 1er juillet
        2024, et la liste des labels retenus est fixée par le{" "}
        <a
          href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049834776"
          target="_blank"
          rel="noreferrer"
        >
          décret n° 2024-644 du 29 juin 2024
        </a>{" "}
        : Label ISR, Label Greenfin (désigné « France finance verte » dans le décret), label
        Relance, label Finansol et label du comité intersyndical de l'épargne salariale.
      </p>
      <p>
        Pour un PER d'entreprise, l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048491274"
          target="_blank"
          rel="noreferrer"
        >
          article L. 224-3 du code monétaire et financier
        </a>{" "}
        impose de proposer, en plus de la gestion pilotée par défaut, au moins une autre allocation
        d'actifs, qui doit notamment permettre d'investir dans un fonds solidaire et dans au moins
        un fonds labellisé. Le mécanisme est proche de celui du PEE : dans les deux cas, la loi
        oblige à mettre ces supports <em>à la disposition</em> des salariés.
      </p>
      <h3>Ce que la loi ne dit pas</h3>
      <p>
        Elle n'impose ni un niveau de performance, ni une part minimale de vos avoirs investie dans
        ces fonds, ni un choix particulier pour votre épargne par défaut. Votre employeur doit
        référencer un fonds solidaire et un fonds labellisé ; il n'est pas tenu de construire toute
        la gamme sur ces critères. Vous pouvez donc avoir un plan parfaitement en règle dont
        l'essentiel des fonds n'a rien de responsable.
      </p>
      <p>
        Un point d'articulation utile : si les mécanismes exacts des fonds solidaires 90/10 et du
        label Finansol vous intéressent, notre article sur{" "}
        <LienArticle slug="label-finansol-finance-solidaire">
          ce que garantit le label Finansol
        </LienArticle>{" "}
        les détaille, et celui consacré aux{" "}
        <LienArticle slug="placement-ethique-solidaire-fonds-90-10-livrets">
          placements éthiques et solidaires (fonds 90/10 et livrets)
        </LienArticle>{" "}
        les compare aux autres produits solidaires. Ici, nous nous concentrons sur ce qui est propre
        à l'épargne salariale.
      </p>

      <h2>Comment lire la liste des fonds proposés par votre employeur ?</h2>
      <p>
        Dans l'épargne salariale, la plupart des fonds prennent la forme de{" "}
        <strong>fonds communs de placement d'entreprise (FCPE)</strong> : des fonds réservés aux
        salariés d'une entreprise ou d'un groupe. Ils sont gérés par une société de gestion, et
        contrôlés par un <em>conseil de surveillance</em> dont au moins la moitié des membres sont
        des salariés représentant les porteurs de parts, selon l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049720154"
          target="_blank"
          rel="noreferrer"
        >
          article L. 214-164 du code monétaire et financier
        </a>
        . Ce conseil peut, entre autres, exercer les droits de vote attachés aux titres détenus par
        le fonds (le règlement peut toutefois les déléguer à la société de gestion, sauf pour les
        titres de l'employeur). C'est un levier à connaître : si vous êtes intéressé, vous pouvez
        vous renseigner sur les élections des représentants.
      </p>
      <p>
        Pour lire la liste sans vous perdre, suivez la méthode <strong>Liste, Label, DIC</strong> :
      </p>
      <ol>
        <li>
          <strong>Liste.</strong> Récupérez la liste complète des fonds de chaque plan auprès de
          votre teneur de compte (l'espace en ligne, ou le livret d'épargne salariale). Notez, pour
          chaque fonds, sa classe d'actifs : monétaire, obligataire, actions, diversifié,
          actionnariat salarié.
        </li>
        <li>
          <strong>Label.</strong> Repérez ceux qui portent l'un des labels cités plus haut. Pour le
          Label ISR, comparez le nom du fonds à la{" "}
          <a
            href="https://www.lelabelisr.fr/comment-investir/fonds-labellises/"
            target="_blank"
            rel="noreferrer"
          >
            liste officielle des fonds labellisés
          </a>{" "}
          (fichier téléchargeable). Notre <a href="/outils/decodeur-label">décodeur de labels</a>{" "}
          vous aide à interpréter ce que chaque label certifie.
        </li>
        <li>
          <strong>DIC.</strong> Ouvrez le document d'informations clés de chaque fonds retenu :
          stratégie, indicateur de risque, frais courants, part éventuelle de titres solidaires.
        </li>
      </ol>
      <p>
        Le tableau suivant résume ce que chaque type de fonds vous apporte et ce qu'il ne vous
        garantit pas.
      </p>
      <table>
        <thead>
          <tr>
            <th>Type de fonds</th>
            <th>Ce que cela apporte</th>
            <th>Ce que cela ne garantit pas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Fonds labellisé ISR</strong>
            </td>
            <td>
              Une méthodologie de sélection ESG auditée par un organisme indépendant et un
              référentiel public
            </td>
            <td>
              Que le portefeuille corresponde à vos valeurs, ni un impact mesuré, ni la performance
              (voir{" "}
              <LienArticle slug="label-isr-que-garantit-il-vraiment">
                ce que garantit vraiment le Label ISR
              </LienArticle>
              )
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fonds solidaire</strong>
            </td>
            <td>
              Une fraction de l'actif investie dans des entreprises solidaires d'utilité sociale
            </td>
            <td>
              Que le reste soit investi de façon responsable, et que cette fraction soit liquide à
              tout moment
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fonds monétaire ou obligataire classique</strong>
            </td>
            <td>Généralement une volatilité moindre</td>
            <td>Aucun critère extra-financier, sauf mention contraire dans le DIC</td>
          </tr>
          <tr>
            <td>
              <strong>Fonds d'actionnariat salarié (titres de l'entreprise)</strong>
            </td>
            <td>Une participation au capital de votre employeur</td>
            <td>
              La diversification : votre emploi et votre épargne dépendent alors de la même
              entreprise
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Une dernière question, souvent oubliée :{" "}
        <strong>que devient votre fonds par défaut ?</strong> Si vous n'avez jamais fait de choix,
        vos sommes ont été affectées selon la règle prévue par l'accord ou le règlement de votre
        plan. En PER d'entreprise, il s'agit de la gestion pilotée (profil « équilibré horizon
        retraite » par défaut d'après{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        ), dont il vaut la peine d'examiner la composition : rien ne garantit qu'elle contienne des
        fonds labellisés. Demandez-la avec le DIC de chaque profil.
      </p>

      <h2>Comment fonctionne un fonds solidaire d'épargne salariale ?</h2>
      <p>
        Le principe est celui des fonds « 90/10 » décrits dans notre article sur le{" "}
        <LienArticle slug="label-finansol-finance-solidaire">label Finansol</LienArticle>, avec une
        particularité propre à l'épargne salariale : la part solidaire est encadrée par la loi. L'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049720154"
          target="_blank"
          rel="noreferrer"
        >
          article L. 214-164 du code monétaire et financier
        </a>{" "}
        (version en vigueur depuis le 1er janvier 2025) fixe entre 5 % et 15 % la part de l'actif
        d'un fonds solidaire investie en titres d'entreprises solidaires d'utilité sociale ou
        d'organismes assimilés. Ces entreprises sont agréées selon les critères de l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048598324/"
          target="_blank"
          rel="noreferrer"
        >
          article L. 3332-17-1 du code du travail
        </a>
        : utilité sociale de l'activité, titres non cotés, écarts de rémunération plafonnés,
        objectif inscrit dans les statuts.
      </p>
      <p>
        Le vocabulaire mérite un mot : « 90/10 » désigne l'ordre de grandeur d'origine, et il est
        encore très utilisé, mais le texte en vigueur parle d'une fourchette, pas d'un chiffre fixe.
        Le pourcentage effectif de votre fonds figure dans son règlement et son DIC : demandez-le.
      </p>
      <h3>Que finance-t-on vraiment ? Un exemple chiffré</h3>
      <p>
        <em>
          Situation type construite pour illustrer le calcul, à partir de paramètres réalistes. Elle
          ne correspond à aucun salarié réel.
        </em>{" "}
        Camille, salariée d'une entreprise de taille intermédiaire, reçoit 2 000 € de participation
        cette année. Elle les place dans le PEE de l'entreprise, ajoute un versement volontaire de 1
        000 €, et son employeur abonde à hauteur de 50 % de ce versement volontaire, soit 500 €
        (règle supposée du plan : elle reste bien en dessous du plafond légal, 3 844,80 € par an
        selon la{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2142"
          target="_blank"
          rel="noreferrer"
        >
          fiche PEE de service-public.gouv.fr
        </a>
        ). Elle dispose donc de 3 500 € à répartir.
      </p>
      <p>
        Elle choisit : 40 % (1 400 €) dans un fonds labellisé ISR, 20 % (700 €) dans un fonds
        solidaire, et 40 % (1 400 €) dans un fonds monétaire. Hypothèse : la part solidaire de ce
        fonds est de 10 % de son actif, dans la fourchette légale. Calcul :
      </p>
      <ul>
        <li>
          700 € dans le fonds solidaire × 10 % ={" "}
          <strong>70 € investis en entreprises solidaires</strong> ;
        </li>
        <li>
          70 € sur 3 500 €, soit <strong>2 % de son épargne salariale</strong> ;
        </li>
        <li>
          les 630 € restants du fonds solidaire sont investis de façon classique, selon la stratégie
          décrite dans le DIC.
        </li>
      </ul>
      <p>
        Ce que Camille en retient : le fonds solidaire finance vraiment des entreprises solidaires,
        mais son effet reste modeste à l'échelle de l'ensemble de son plan. Le fonds labellisé, lui,
        oriente 40 % de son épargne selon un cadre ESG, sans la garantie d'un portefeuille aligné
        sur ses valeurs. Aucun des deux n'est un choix « faux » : le point est de savoir ce qu'on
        finance, et de proportionner son attente à la réalité. Les montants et pourcentages
        ci-dessus sont des hypothèses illustratives ; les performances passées ne préjugent pas des
        performances futures, et tous ces fonds comportent un risque de perte en capital.
      </p>

      <h2>PEE ou PER collectif : quelles différences de blocage, de fiscalité et d'abondement ?</h2>
      <p>
        Les deux plans se ressemblent par leur mécanique collective, mais diffèrent sur un point
        décisif : ce que vous pouvez faire de l'argent, et quand.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>PEE</th>
            <th>PER collectif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>À quoi ça sert</strong>
            </td>
            <td>Constituer une épargne de moyen terme avec l'aide de l'entreprise</td>
            <td>Préparer la retraite avec l'aide de l'entreprise</td>
          </tr>
          <tr>
            <td>
              <strong>Disponibilité</strong>
            </td>
            <td>Bloquée au moins cinq ans</td>
            <td>Bloquée en principe jusqu'à la retraite</td>
          </tr>
          <tr>
            <td>
              <strong>Déblocage anticipé</strong>
            </td>
            <td>Liste assez large de cas (mariage, naissance, résidence principale, etc.)</td>
            <td>
              Liste restreinte : décès, invalidité, surendettement, fin des droits au chômage,
              résidence principale, etc.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Plafond d'abondement</strong>
            </td>
            <td>3 844,80 € par an (3 fois le versement salarié au maximum)</td>
            <td>7 690 € par an (3 fois le versement salarié au maximum)</td>
          </tr>
          <tr>
            <td>
              <strong>Fiscalité à la sortie</strong>
            </td>
            <td>Exonération d'impôt sur le revenu ; prélèvements sociaux sur les gains</td>
            <td>
              Capital issu de l'épargne salariale exonéré d'impôt ; gains au prélèvement forfaitaire
              unique (31,4 % depuis le 1er janvier 2026)
            </td>
          </tr>
          <tr>
            <td>
              <strong>Offre solidaire et labellisée</strong>
            </td>
            <td>Fonds solidaire et fonds labellisé à référencer (L. 3332-17)</td>
            <td>Allocation solidaire et labellisée à proposer (L. 224-3 CMF)</td>
          </tr>
          <tr>
            <td>
              <strong>Inconvénient principal</strong>
            </td>
            <td>Gamme de fonds choisie par l'employeur ; blocage de cinq ans</td>
            <td>Blocage long ; sortie surtout à la retraite ; gamme choisie par l'employeur</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources : fiches{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2142"
          target="_blank"
          rel="noreferrer"
        >
          PEE
        </a>
        ,{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F36526"
          target="_blank"
          rel="noreferrer"
        >
          PER collectif
        </a>{" "}
        et{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          PER
        </a>{" "}
        de service-public.gouv.fr. La CSG et la CRDS restent dues sur les sommes d'épargne
        salariale, même lorsque l'impôt sur le revenu est évité ; le montant de l'abondement de
        votre entreprise, lui, dépend de son propre règlement.
      </p>
      <p>
        Le plafond d'abondement est une limite haute : l'entreprise fixe sa propre règle, souvent
        plus basse. Et si votre projet est d'épargner pour la retraite avec un choix de fonds plus
        large, un PER individuel suit d'autres règles : nous les comparons dans{" "}
        <LienArticle slug="per-vs-assurance-vie-isr">PER ou assurance vie ISR</LienArticle>.
      </p>

      <h2>Votre épargne est bloquée : quelles exceptions, et peut-on la transférer ?</h2>
      <h3>Les cas de déblocage anticipé</h3>
      <p>
        Le blocage n'est pas absolu. Pour un PEE, la liste des cas est publiée sur{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F31622"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        : mariage ou Pacs, naissance ou adoption du troisième enfant, divorce avec garde d'enfant,
        violences conjugales, invalidité ou décès, perte d'emploi, création ou reprise d'entreprise,
        achat ou agrandissement de la résidence principale, remise en état après une catastrophe
        naturelle, surendettement. Trois cas s'y sont ajoutés le 7 juillet 2024 : proche aidant,
        rénovation énergétique de la résidence principale et achat d'un véhicule propre (
        <a
          href="https://www.service-public.gouv.fr/particuliers/actualites/A17553"
          target="_blank"
          rel="noreferrer"
        >
          annonce officielle
        </a>
        ). En PER collectif, la liste est plus courte : décès, invalidité, surendettement, fin des
        droits au chômage, liquidation judiciaire, situation grave d'un enfant, achat de la
        résidence principale.
      </p>
      <p>
        Pour la plupart des cas, la demande se fait dans les six mois suivant l'événement, avec
        justificatifs ; certains cas peuvent être invoqués à tout moment. Ces cas ne sont pas
        anodins : c'est le principal inconvénient de l'épargne salariale, à peser avant d'y placer
        une somme dont vous pourriez avoir besoin.
      </p>
      <h3>Transférer vers un support plus responsable</h3>
      <p>
        Pour un PER collectif, les règles sont claires : vous pouvez transférer vos sommes vers un
        autre PER collectif, un PER individuel ou un PER obligatoire d'entreprise, gratuitement
        après cinq ans de détention, avec des frais plafonnés à 1 % de la valeur du plan avant cette
        échéance (
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F12400"
          target="_blank"
          rel="noreferrer"
        >
          fiche transfert
        </a>
        ). Un salarié qui quitte l'entreprise peut aussi conserver son plan, et un état
        récapitulatif lui est remis, précisant si les frais de tenue de compte sont pris en charge
        par l'employeur ou prélevés sur l'épargne (
        <a
          href="https://code.travail.gouv.fr/code-du-travail/l3341-7"
          target="_blank"
          rel="noreferrer"
        >
          article L. 3341-7
        </a>
        ).
      </p>
      <p>
        Pour le PEE, des transferts vers un autre plan d'épargne salariale sont possibles (notamment
        en cas de départ de l'entreprise ou de changement de plan), mais les conditions varient :
        demandez-les par écrit à votre teneur de compte avant d'agir. Le transfert d'un PER
        collectif vers un PER individuel est pertinent si vous voulez élargir votre gamme
        responsable — à condition de comparer les frais du plan actuel et ceux du nouveau contrat,
        ainsi que la gamme de fonds qu'ils donnent réellement accès.
      </p>
      <p>Quelques questions à poser, par écrit, à votre employeur ou à votre teneur de compte :</p>
      <ul>
        <li>Quelle est la liste complète des fonds de chaque plan, avec leur DIC ?</li>
        <li>
          Quels fonds sont labellisés, lesquels sont solidaires, et quelle est leur part solidaire ?
        </li>
        <li>Quelle est mon affectation par défaut, et comment la modifier ?</li>
        <li>Quels frais supportent mes avoirs, et qui règle les frais de tenue de compte ?</li>
        <li>Qui siège au conseil de surveillance des fonds, et comment vote-t-il ?</li>
      </ul>

      <h2>Vos questions sur l'épargne salariale ISR et solidaire</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Épargne salariale responsable : par où commencer dès cette semaine ?</h2>
      <p>
        <strong>La réponse à votre question de départ est rassurante :</strong> oui, votre PEE ou
        votre PER collectif doit en principe proposer des fonds solidaires et labellisés, parce que
        la loi l'exige. Ce n'est pas parce qu'ils sont proposés qu'ils suffisent : c'est à vous de
        choisir, de lire le DIC et de vérifier ce que le fonds contient.
      </p>
      <p>
        <strong>Le coût de l'inaction est concret :</strong> une épargne qui reste sur l'affectation
        par défaut, parfois pendant des années, dans des fonds que vous n'avez jamais examinés,
        alors même que l'argent est bloqué et que chaque année de blocage rend un changement plus
        important à préparer.
      </p>
      <p>
        <strong>Pour la suite,</strong> deux lectures s'imposent. Notre article sur{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que garantit vraiment le Label ISR
        </LienArticle>{" "}
        vous aide à ne pas surestimer un fonds simplement parce qu'il est labellisé ; et le{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> vous donne une grille de lecture
        rapide pour chaque logo croisé dans votre liste.
      </p>
      <p>
        Si vous préférez en parler à un interlocuteur, le premier échange est offert et sans
        engagement : vous pouvez échanger avec un conseiller du cabinet sur la façon dont votre
        épargne salariale s'articule avec une assurance vie ou un PER individuel, et obtenir des
        pistes de lecture pour votre situation. Découvrez{" "}
        <a href="/cgp-investissement-responsable">l'accompagnement du cabinet</a>.
      </p>
    </>
  );
}
