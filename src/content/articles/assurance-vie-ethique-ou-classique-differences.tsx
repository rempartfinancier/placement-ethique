import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";
import { FaqArticle } from "./faq";

export const meta: ArticleMeta = {
  slug: "assurance-vie-ethique-ou-classique-differences",
  title: "Assurance vie éthique ou classique : quelles différences ?",
  excerpt:
    "Assurance vie éthique ou classique : même fiscalité, même garantie sur le fonds en euros. Ce qui change vraiment : supports, frais, risque, transparence.",
  readingTime: "12 min",
  category: "Enveloppes",
  date: "2026-09-28",
  tags: ["assurance vie", "assurance vie éthique", "ISR", "frais", "fonds en euros", "comparatif"],
  author: "Sébastien Petrisot",
  faq: [
    {
      q: "Une assurance vie éthique est-elle plus risquée qu'une assurance vie classique ?",
      a: "Pas du fait de l'enveloppe. Le risque dépend de la classe d'actifs et de l'allocation : une unité de compte en actions comporte un risque de perte en capital, labellisée ou non, et le fonds en euros est garanti par l'assureur dans les deux cas. Les filtres ESG peuvent en revanche créer des écarts sectoriels par rapport à un fonds sans filtre, dans un sens comme dans l'autre.",
    },
    {
      q: "Une assurance vie éthique coûte-t-elle plus cher ?",
      a: "Le label n'est pas un critère de la grille de frais du contrat : elle se lit dans l'annexe de frais, à vérifier. La différence éventuelle se joue sur les frais courants des supports, visibles dans leur document d'informations clés, à comparer fonds par fonds et à catégorie équivalente.",
    },
    {
      q: "La fiscalité d'une assurance vie éthique est-elle différente ?",
      a: "Non. Le caractère responsable des supports ne change rien au régime fiscal : c'est celui de toute assurance vie, avec les mêmes règles avant et après huit ans, le même abattement annuel après huit ans et les mêmes prélèvements sociaux.",
    },
    {
      q: "Un contrat d'assurance vie classique contient-il déjà des supports ISR ?",
      a: "Oui. Depuis la loi Pacte, un contrat en unités de compte doit faire référence à au moins une unité de compte solidaire et, pour chaque label reconnu par l'État au titre de la transition écologique ou de l'ISR, à au moins une unité de compte labellisée. Le socle responsable existe donc dans tout contrat en unités de compte, plus ou moins profond selon les assureurs.",
    },
    {
      q: "Le fonds en euros d'un contrat éthique est-il différent ?",
      a: "Le mécanisme est le même : la valeur des sommes investies est garantie par l'assureur. Ce que finance l'actif général reste peu visible, et un contrat dit éthique n'en donne pas forcément plus de traçabilité. Cherchez un reporting extra-financier publié par l'assureur plutôt qu'une mention commerciale.",
    },
    {
      q: "Peut-on rendre son contrat actuel plus éthique sans le clôturer ?",
      a: "Souvent, oui : arbitrer vers les unités de compte labellisées de votre contrat, demander à votre assureur s'il propose de transformer le contrat sans dénouement fiscal, ou ouvrir un second contrat en gardant l'ancien. Clôturer et rouvrir ailleurs déclenche en revanche l'imposition des gains et un nouveau décompte de huit ans.",
    },
    {
      q: "Comment vérifier qu'un support est vraiment éthique ?",
      a: "Trois vérifications : la présence du fonds sur la liste officielle du label revendiqué, son document d'informations clés et sa politique d'exclusion, puis son inventaire de portefeuille. Un label certifie une méthode, pas votre définition de l'éthique : l'inventaire montre ce que le fonds détient.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> une assurance vie « éthique » n'est pas une autre enveloppe :
          c'est une assurance vie ordinaire dont vous choisissez les supports selon des critères
          responsables. La fiscalité, la disponibilité de l'épargne et la garantie de l'assureur
          sont identiques à celles d'un contrat classique. Ce qui varie réellement : la profondeur
          de la gamme labellisée, les frais courants de certains supports, un risque de
          mésalignement (croire éthique un fonds qui ne l'est pas à vos yeux) et un effet de filtre
          sur le portefeuille dont le sens sur la performance ne se prédit pas. Le bon comparatif se
          fait donc contrat par contrat et support par support, pas « éthique contre classique ».
        </p>
      </div>

      <p>
        Vous avez tapé « assurance vie éthique » dans un moteur de recherche, et les pages
        promettent toutes la même chose : épargner « en accord avec vos valeurs ». Reste la question
        qu'elles éludent : qu'est-ce qui change réellement par rapport à votre contrat actuel ou à
        celui qu'on vous propose ? Plus de frais ? Plus de risque ? Un rendement rogné ? Et faut-il
        tout clôturer pour « passer à l'éthique » ?
      </p>
      <p>
        Posons les termes. L'assurance vie est une <strong>enveloppe</strong> : un cadre contractuel
        et fiscal dans lequel vous logez des supports (fonds en euros garanti, unités de compte). «
        Éthique » qualifie ce que vous mettez dedans, pas l'enveloppe. Cet article compare les deux
        approches sur supports, frais, risque, rendement, fonds en euros, fiscalité et sortie, avec
        les inconvénients de chacune, un cas chiffré et une méthode pour faire évoluer un contrat
        sans le fermer. Pour choisir un contrat, voir notre{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">
          guide pour choisir une assurance vie ISR
        </LienArticle>
        .
      </p>

      <h2>Qu'est-ce qu'une assurance vie éthique, au juste ?</h2>
      <p>
        Le code des assurances n'impose que des exigences de supports : il ne définit pas ce qu'est
        un contrat « éthique ». Depuis la loi Pacte, tout contrat comportant des unités de compte
        doit faire référence à au moins une unité de compte solidaire et, pour chaque label reconnu
        par l'État au titre de la transition écologique ou de l'ISR, à au moins une unité de compte
        labellisée, comme le prévoit l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038507523"
          target="_blank"
          rel="noreferrer"
        >
          article L. 131-1-2 du code des assurances
        </a>
        . L'assureur doit aussi vous communiquer, avant la conclusion du contrat, la proportion
        d'unités de compte concernées. Concrètement, la fiche officielle{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15274"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>{" "}
        résume ce socle : au moins une unité de compte labellisée ISR, une labellisée Greenfin et
        une solidaire.
      </p>
      <p>
        Un contrat « classique » propose donc déjà un socle responsable, mais ce socle est un
        plancher, pas une gamme. En pratique, une « assurance vie éthique » est un contrat dont
        l'univers de supports labellisés est large et lisible, ou un contrat classique dans lequel{" "}
        <em>vous</em> choisissez de ne loger que des supports sélectionnés selon vos critères.
      </p>
      <p>
        Qui décide de ce qui est éthique ? Vous, d'abord. Les règles européennes de distribution
        exigent depuis août 2022 que les professionnels qui conseillent sur des produits d'assurance
        ou d'investissement tiennent compte des préférences de durabilité de leurs clients, comme le
        rappelle{" "}
        <a
          href="https://acpr.banque-france.fr/fr/actualites/lacpr-et-lamf-presentent-leur-demarche-conjointe-pour-accompagner-les-professionnels-dans-la-prise"
          target="_blank"
          rel="noreferrer"
        >
          l'ACPR
        </a>
        . Le label ne peut pas répondre à cette question à votre place : voir{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que le Label ISR garantit vraiment
        </LienArticle>{" "}
        pour ce qu'il certifie (une méthode auditée) et ce qu'il laisse à votre charge.
      </p>

      <h2>Y a-t-il une différence de frais entre un contrat éthique et un contrat classique ?</h2>
      <p>
        Pas au niveau du contrat, en principe. Une assurance vie comporte plusieurs couches de
        frais, que la fiche{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15274"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>{" "}
        distingue ainsi : des frais de dossier payés à la souscription, des frais prélevés à chaque
        versement, des frais de gestion prélevés pendant toute la durée du contrat, et des frais
        d'arbitrage sur les sommes transférées d'une unité de compte à l'autre. Ces frais sont ceux
        du contrat : le label d'un support n'est pas un critère de cette grille, et le surcoût
        éventuel ne vient donc pas de l'étiquette. À vérifier dans l'annexe de frais du contrat.
      </p>
      <p>
        Il existe une couche de plus, que la grille du contrat ne montre pas : les frais courants
        propres à chaque fonds, lisibles dans son document d'informations clés. C'est là que la
        comparaison se joue, à condition de comparer à catégorie équivalente (fonds actif contre
        fonds actif, ETF contre ETF). Un support labellisé peut coûter plus cher, autant ou moins
        qu'un support classique : cela se lit fonds par fonds. Enfin, le mode de rémunération de la
        personne qui vous propose le contrat est une question à poser dans tous les cas ; à titre
        d'exemple de présentation détaillée, voir la page <a href="/tarifs">tarifs</a> du cabinet.
      </p>

      <h3>Ce que 0,3 point de frais change sur 15 ans : un cas chiffré</h3>
      <p>
        <em>
          Situation type construite pour illustrer le calcul, à partir de paramètres réalistes. Ces
          chiffres ne décrivent aucun contrat ni aucun fonds réel.
        </em>
      </p>
      <p>
        Camille verse 30 000 € une fois et n'y touche pas pendant 15 ans. Pourquoi 15 ans ? C'est un
        horizon de long terme, au-delà des huit ans après lesquels la fiscalité s'adoucit. Le
        rendement brut retenu, 5 % par an avant frais, est un chiffre rond choisi pour la
        lisibilité, pas une prévision. Deux contrats sont comparés : le contrat A, composé de
        supports classiques, prélève au total 1,70 % par an (frais de gestion du contrat 0,85 % et
        frais courants moyens des supports 0,85 %) ; le contrat B, composé de supports labellisés un
        peu plus chers, prélève 2,00 % par an (0,85 % et 1,15 %). Aucun frais sur versement, pour
        isoler les frais annuels.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Contrat A (supports classiques)</th>
            <th>Contrat B (supports labellisés plus coûteux)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Frais annuels cumulés</strong>
            </td>
            <td>1,70 %</td>
            <td>2,00 %</td>
          </tr>
          <tr>
            <td>
              <strong>Rendement annuel net de frais</strong>
            </td>
            <td>3,30 %</td>
            <td>3,00 %</td>
          </tr>
          <tr>
            <td>
              <strong>Capital après 15 ans (avant impôt)</strong>
            </td>
            <td>environ 48 800 €</td>
            <td>environ 46 700 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        L'écart : environ 2 100 € sur 30 000 € versés, soit un peu plus de 4 % du capital final,
        uniquement pour 0,3 point de frais annuels supplémentaires. Ce que l'exemple enseigne : un
        support éthique n'est pas coûteux par nature, mais s'il l'est, l'écart se compose année
        après année. La bonne réaction : comparer ses frais courants à ceux d'un support de même
        catégorie avant de le retenir. Hypothèse illustrative : les performances passées ne
        préjugent pas des performances futures et les unités de compte présentent un risque de perte
        en capital.
      </p>

      <h2>Le risque et le rendement sont-ils différents ?</h2>
      <h3>Le risque : dans les supports, pas dans l'étiquette</h3>
      <p>
        Le risque ne dépend pas du mot « éthique » mais de ce que le contrat contient. Selon{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15274"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        , sur une unité de compte seul le nombre de parts est garanti par l'assureur, pas leur
        valeur : un fonds actions ISR et un fonds actions classique exposent tous deux à une perte
        en capital. Ce sont la part d'actions, les zones géographiques et l'horizon qui déterminent
        le risque, pas le label.
      </p>
      <p>
        Deux risques sont propres à l'approche éthique. Le premier est le{" "}
        <strong>risque de mésalignement</strong> : acheter un fonds « responsable » et découvrir
        dans son inventaire des lignes que vous pensiez exclues, parce que sa méthode ne coïncide
        pas avec vos valeurs. Le second est un <strong>biais de portefeuille</strong> : exclusions
        sectorielles et sélection best-in-class éloignent le fonds d'un indice large, avec des
        périodes de sur- et de sous-performance relatives imprévisibles. Ces deux risques se gèrent
        en lisant les documents.
      </p>
      <h3>Le rendement : ce que les études disent, y compris quand elles se contredisent</h3>
      <p>
        Les études comparant fonds durables et conventionnels divergent selon les périodes, les
        classes d'actifs et les méthodologies : on ne peut affirmer ni qu'un contrat éthique
        rapporte moins, ni qu'il rapporte plus. Le rendement net d'un contrat dépend d'abord de
        l'allocation entre fonds en euros et unités de compte, puis des frais cumulés, comme le
        montre le cas ci-dessus. Les chiffres sourcés et leurs limites sont exposés dans{" "}
        <LienArticle slug="investir-ethique-performance-chiffres">
          notre article dédié à la performance
        </LienArticle>
        .
      </p>

      <h2>Le fonds en euros d'un contrat éthique est-il différent ?</h2>
      <p>
        Pas dans son mécanisme de garantie : sur le fonds en euros, la valeur des sommes investies
        est garantie par l'assureur, selon la même page{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15274"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        , dans un contrat éthique comme dans un contrat classique. Et cette garantie a une limite,
        identique elle aussi : en cas de défaillance d'un assureur, le Fonds de garantie des
        assurances de personnes indemnise chaque assuré, souscripteur ou bénéficiaire pour
        l'ensemble de ses contrats auprès de la société défaillante, dans la limite de 70 000 €,
        d'après{" "}
        <a
          href="https://acpr.banque-france.fr/autoriser/procedures-secteur-assurance/fonds-de-garantie-competents-en-cas-de-defaillance-dentreprises-dassurance"
          target="_blank"
          rel="noreferrer"
        >
          l'ACPR
        </a>
        .
      </p>
      <p>
        Ce qui peut différer, c'est ce que finance l'actif général de l'assureur qui adosse ce
        fonds, mutualisé entre tous les assurés. Depuis votre relevé, vous n'y voyez presque rien.
        Certains assureurs publient un reporting extra-financier de leur actif général ou proposent
        des fonds en euros présentés comme « verts » ; un contrat dit éthique n'en offre pas
        automatiquement davantage. Le seul critère fiable est un document publié par l'assureur, pas
        un slogan.
      </p>

      <h2>Assurance vie éthique ou classique : le tableau comparatif</h2>
      <p>
        Le tableau met en regard les deux approches, avec les limites réelles de chacune. Les lignes
        « fiscalité » et « garantie » sont identiques : c'est précisément le message.
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Approche éthique</th>
            <th>Approche classique</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Supports</strong>
            </td>
            <td>
              Sélection de supports labellisés ISR, Greenfin, solidaires ; inconvénient : gamme
              parfois limitée au plancher légal selon le contrat
            </td>
            <td>
              Gamme souvent large, socle responsable légal inclus ; inconvénient : rien ne filtre
              pour vous, vous pouvez détenir des lignes que vous auriez exclues
            </td>
          </tr>
          <tr>
            <td>
              <strong>Frais du contrat</strong>
            </td>
            <td>Celle du contrat, le label n'en est pas un critère ; à vérifier dans l'annexe</td>
            <td>Celle du contrat ; à comparer d'un contrat à l'autre</td>
          </tr>
          <tr>
            <td>
              <strong>Frais des supports</strong>
            </td>
            <td>
              Variables, plus ou moins chers selon le fonds ; à comparer à catégorie équivalente
            </td>
            <td>Variables ; pas de surcoût lié au label, mais pas de garantie de frais bas</td>
          </tr>
          <tr>
            <td>
              <strong>Risque</strong>
            </td>
            <td>
              Celui de la classe d'actifs, plus un biais sectoriel possible et un risque de
              mésalignement
            </td>
            <td>Celui de la classe d'actifs, sans biais de filtre, mais aussi sans filtre</td>
          </tr>
          <tr>
            <td>
              <strong>Rendement</strong>
            </td>
            <td>Aucun écart établi de façon univoque : études divergentes</td>
            <td>Idem : aucun avantage démontré dans l'autre sens</td>
          </tr>
          <tr>
            <td>
              <strong>Fonds en euros</strong>
            </td>
            <td>
              Valeur garantie par l'assureur ; peu de visibilité sur l'actif général depuis votre
              relevé
            </td>
            <td>
              Valeur garantie par l'assureur ; peu de visibilité sur l'actif général depuis votre
              relevé
            </td>
          </tr>
          <tr>
            <td>
              <strong>Garantie en cas de faillite de l'assureur</strong>
            </td>
            <td>
              Fonds de garantie des assurances de personnes, 70 000 € par personne et par assureur
            </td>
            <td>Identique</td>
          </tr>
          <tr>
            <td>
              <strong>Fiscalité</strong>
            </td>
            <td>Celle de toute assurance vie</td>
            <td>Identique</td>
          </tr>
          <tr>
            <td>
              <strong>Transparence</strong>
            </td>
            <td>
              Promesses à vérifier : liste officielle du label, DIC, inventaire ; inconvénient :
              effort de lecture
            </td>
            <td>
              Peu de promesses extra-financières à vérifier ; inconvénient : aucune information
              spontanée sur l'alignement avec vos valeurs
            </td>
          </tr>
          <tr>
            <td>
              <strong>Sortie</strong>
            </td>
            <td>Rachat partiel ou total possible, selon les règles du contrat</td>
            <td>Identique</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pour la fiscalité, le régime est celui décrit par{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F22414"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>{" "}
        (vérifié le 15 avril 2026) pour les primes versées depuis le 27 septembre 2017 : avant huit
        ans, les gains rachetés relèvent du prélèvement forfaitaire de 12,8 % ; après huit ans, ils
        bénéficient d'un abattement annuel de 4 600 € (9 200 € pour un couple), puis d'un taux de
        7,5 % pour la part correspondant à des primes n'excédant pas 150 000 € et de 12,8 % au-delà.
        Les gains restent soumis aux prélèvements sociaux de 17,2 %, taux maintenu pour l'assurance
        vie. Ce régime s'applique à vos rachats sur ces primes, quel que soit le support. Pour
        situer l'assurance vie face au PER, au PEA ou au compte-titres, notre{" "}
        <a href="/outils/comparateur-enveloppes">comparateur d'enveloppes</a> met les options côte à
        côte.
      </p>

      <h2>Dans quels cas l'assurance vie classique reste-t-elle un choix cohérent ?</h2>
      <p>
        Un comparatif honnête doit dire quand l'approche éthique n'est pas la meilleure réponse.
        Voici les cas, avec les inconvénients réels qui les fondent.
      </p>
      <ul>
        <li>
          <strong>Vous détenez un contrat ancien et intéressant.</strong> Si votre contrat a plus de
          huit ans, un bon fonds en euros ou des frais de gestion bas, le clôturer pour un contrat «
          éthique » aux frais plus élevés serait un mauvais calcul : mieux vaut le faire évoluer
          (section suivante).
        </li>
        <li>
          <strong>La gamme responsable du contrat envisagé est squelettique.</strong> Un contrat qui
          coche le minimum légal vous laisse un choix restreint : un contrat à la gamme riche, dans
          lequel vous sélectionnez vous-même vos supports, sert parfois mieux vos objectifs.
        </li>
        <li>
          <strong>Vos exigences vont au-delà de ce qu'un label garantit.</strong> Si vous refusez
          toute exposition à un secteur que le référentiel du label n'exclut pas, il faudra lire la
          politique d'exclusion de chaque fonds, quel que soit le contrat.
        </li>
        <li>
          <strong>Vous cherchez un support précis qui n'existe pas en version labellisée.</strong>{" "}
          Un ETF très bon marché sur un univers donné peut ne pas avoir d'équivalent ISR à coût
          comparable : c'est un vrai arbitrage entre frais et filtre.
        </li>
      </ul>
      <p>
        L'inverse vaut aussi : un contrat classique n'apporte aucune information spontanée sur ce
        que financent vos supports, et laisser l'alignement au hasard n'est pas un choix neutre.
        Pour savoir si un fonds « vert » tient sa promesse, quel que soit le contrat, la
        vérification passe par la liste officielle du label, le document d'informations clés et
        l'inventaire du portefeuille.
      </p>

      <h2>Comment passer d'un contrat classique à une gestion éthique sans le clôturer ?</h2>
      <p>
        Vous n'avez presque jamais besoin de fermer votre contrat. Trois portes s'offrent à vous,
        résumées par la méthode <strong>ATO</strong> :{" "}
        <strong>Arbitrer, Transformer, Ouvrir</strong>.
      </p>
      <ol>
        <li>
          <strong>Arbitrer.</strong> Dans le contrat existant, déplacez tout ou partie de vos
          supports vers les unités de compte labellisées de sa gamme. L'arbitrage modifie la
          répartition de vos investissements sans faire sortir l'argent du contrat, et les frais
          d'arbitrage éventuels figurent dans l'annexe de frais. Limite : vous restez dans l'univers
          de ce contrat, et un fonds en euros reste un fonds en euros.
        </li>
        <li>
          <strong>Transformer.</strong> La loi Pacte, en son{" "}
          <a
            href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000038496267"
            target="_blank"
            rel="noreferrer"
          >
            article 72
          </a>
          , a prévu que la transformation d'un contrat, notamment pour affecter tout ou partie des
          primes à des unités de compte, auprès de la même entreprise d'assurance, par avenant ou
          par nouvelle souscription, n'entraîne pas les conséquences fiscales d'un dénouement, et
          que l'assureur informe chaque année de cette possibilité. Demandez-lui par écrit si un
          contrat plus récent de sa gamme, mieux doté en supports responsables, est disponible dans
          ce cadre. Limite : l'assureur choisit les contrats de destination.
        </li>
        <li>
          <strong>Ouvrir.</strong> Ouvrir un second contrat, chez un autre assureur si besoin, en y
          dirigeant les nouveaux versements, tout en conservant l'ancien. Limite : ce nouveau
          contrat démarre son propre décompte de huit ans, et tout rachat sur l'ancien reste imposé
          selon les règles vues plus haut.
        </li>
      </ol>
      <p>
        Avant toute décision, notez l'ancienneté de votre contrat, ses gains latents et les frais du
        contrat de destination. Si l'écart de frais mange l'avantage de la nouvelle gamme, «
        Arbitrer » suffit souvent. Refaites ensuite le calcul de Camille avec vos propres chiffres :
        c'est la seule façon de mesurer ce que l'écart vaut pour vous.
      </p>

      <h2>Vos questions sur l'assurance vie éthique et classique</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Éthique ou classique : la vraie question est le contrat et ses supports</h2>
      <p>
        <strong>La réponse à votre question.</strong> Une assurance vie éthique diffère peu d'une
        classique : même fiscalité, mêmes règles de rachat, même garantie de l'assureur sur le fonds
        en euros. La différence se joue dans les supports, leur profondeur, leurs frais courants et
        la façon dont vous vérifiez qu'ils correspondent à vos valeurs.
      </p>
      <p>
        <strong>Ce qu'il faut retenir.</strong> Comparez des contrats, pas des étiquettes : annexe
        de frais, liste des supports, inventaire des fonds. Attendre n'est pas neutre : chaque année
        passée sur un contrat dont vous ignorez le contenu, votre épargne finance ce que vous n'avez
        pas choisi.
      </p>
      <p>
        <strong>Votre prochaine étape.</strong> Si vous devez choisir un contrat, commencez par les
        critères vérifiables du{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">guide de l'assurance vie ISR</LienArticle>,
        qui donne la méthode de sélection que cet article ne refait pas. Si vous avez déjà un
        contrat, commencez par arbitrer vers les supports labellisés que vous avez vérifiés.
      </p>
      <p>
        <strong>Si vous préférez être accompagné.</strong> Vous pouvez{" "}
        <a href="/cgp-investissement-responsable">
          échanger avec un conseiller en investissement responsable
        </a>{" "}
        pour obtenir des pistes sur votre contrat actuel ou sur celui que vous envisagez. Le premier
        échange est offert et sans engagement.
      </p>
    </>
  );
}
