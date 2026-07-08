import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "label-greenfin-vs-label-isr",
  title: "Label Greenfin ou Label ISR : lequel choisir pour votre épargne ?",
  excerpt:
    "Deux labels publics, deux promesses : le Label ISR certifie une méthodologie ESG globale, Greenfin un portefeuille qui finance la transition, fossiles exclus.",
  readingTime: "11 min",
  category: "Labels & Greenwashing",
  date: "2026-05-11",
  tags: ["Label Greenfin", "Label ISR", "finance verte", "labels", "assurance vie"],
  author: "Alexandre Pollet",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> ces deux labels publics ne certifient pas la même
          chose — « lequel choisir » se résout donc par votre priorité, pas par un
          classement. Le Label ISR (ministère de l'Économie, 2016) certifie une{" "}
          <em>méthodologie de sélection</em> fondée sur les trois familles de critères ESG —
          environnement, social, gouvernance — avec une offre très large. Le label Greenfin
          (ministère de la Transition écologique, 2015) certifie que le portefeuille{" "}
          <em>finance des activités de la transition écologique</em> et exclut toute la
          chaîne des énergies fossiles — il est beaucoup plus rare. Priorité climatique et
          fossiles non négociables : regardez d'abord Greenfin. Démarche responsable
          d'ensemble et choix étendu : le Label ISR est la référence. Et certains fonds
          cumulent les deux.
        </p>
      </div>

      <p>
        Vous parcourez la liste des supports de votre assurance vie, ou la documentation de
        deux fonds qu'on vous propose. L'un arbore le logo « Label ISR », l'autre un tampon
        « Greenfin ». Les deux se présentent comme des labels d'État, les deux brochures
        parlent de finance responsable, et rien n'explique en quoi ils diffèrent. Vous vous
        demandez, légitimement : est-ce le même tampon sous deux noms ? L'un est-il plus
        exigeant que l'autre ? Et surtout — lequel correspond à ce que <em>vous</em> attendez
        de votre épargne ?
      </p>
      <p>
        La confusion est compréhensible, car elle est entretenue par la communication des
        distributeurs, qui empilent les logos sans jamais dire ce que chacun garantit. La
        réalité est pourtant nette : ces deux labels sont portés par deux ministères
        différents, reposent sur deux référentiels différents, et répondent à deux questions
        différentes. Le Label ISR répond à « ce fonds sélectionne-t-il ses investissements
        selon une méthode ESG contrôlable ? ». Greenfin répond à « ce fonds finance-t-il
        réellement la transition écologique, sans énergies fossiles ? ».
      </p>
      <p>
        Dans cet article : ce que chaque label garantit — et ne garantit pas —, un tableau
        comparatif pensé pour votre décision, le point précis sur les énergies fossiles et
        le nucléaire (là où les deux référentiels divergent le plus), et une méthode simple
        pour vérifier vous-même qu'un fonds porte vraiment le tampon qu'il affiche.
      </p>

      <h2>Que garantit exactement le Label ISR ?</h2>
      <p>
        Le <strong>Label ISR</strong> est un label public créé en 2016 sous l'égide du
        ministère de l'Économie et des Finances. C'est le label généraliste de
        l'investissement socialement responsable en France : il certifie qu'un fonds
        applique une méthodologie de sélection formalisée, documentée et auditée, fondée
        sur les critères <strong>ESG</strong> — environnement, social, gouvernance. La
        labellisation est délivrée après audit par des organismes certificateurs
        indépendants, pour une durée limitée avec des contrôles de suivi : un fonds peut
        donc perdre son label, et seule la liste officielle publiée sur{" "}
        <a href="https://www.lelabelisr.fr/comment-investir/fonds-labellises/" target="_blank" rel="noreferrer">
          lelabelisr.fr
        </a>{" "}
        fait foi.
      </p>
      <p>
        Son référentiel a été profondément durci. La troisième version, entrée en
        application le 1er mars 2024 et imposée à tous les fonds labellisés depuis le 1er
        janvier 2025, relève la barre sur deux points majeurs : la sélectivité — le fonds
        doit écarter les 30 % d'émetteurs les moins bien notés de son univers
        d'investissement, contre 20 % auparavant — et les énergies fossiles, avec
        l'exclusion du charbon et des hydrocarbures non conventionnels au-delà de seuils
        stricts, ainsi que des entreprises qui lancent de nouveaux projets d'exploration,
        d'exploitation ou de raffinage d'hydrocarbures. Ce durcissement a fait le tri :
        selon le comité du label, près de{" "}
        <a
          href="https://www.lelabelisr.fr/wp-content/uploads/2501-CP-comite-du-label.pdf"
          target="_blank"
          rel="noreferrer"
        >
          940 fonds ont conservé le label au 1er janvier 2025
        </a>
        , certains gérants ayant préféré y renoncer plutôt que de se conformer aux nouvelles
        exclusions.
      </p>
      <p>
        Le périmètre du Label ISR est large : fonds actions, obligataires, monétaires, et
        même fonds immobiliers (SCPI, OPCI), qui disposent de leur propre déclinaison du
        référentiel. C'est sa force — vous trouverez des fonds labellisés ISR dans
        pratiquement tous les contrats — et sa limite : un label aussi répandu certifie une
        méthode, pas un contenu. Deux fonds labellisés peuvent avoir des portefeuilles très
        différents, et un fonds labellisé peut détenir des entreprises qui vous
        surprendront. Nous avons consacré une analyse entière à cette nuance :{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que le Label ISR garantit vraiment — et ce qu'il ne garantit pas
        </LienArticle>{" "}
        — la lecture indispensable avant de faire de ce logo un critère de choix.
      </p>

      <h2>Que garantit exactement le label Greenfin ?</h2>
      <p>
        Le <strong>label Greenfin</strong> est l'autre label d'État — mais côté ministère de
        la Transition écologique. Lancé fin 2015 dans le sillage de la COP 21 sous le nom
        de label « Transition énergétique et écologique pour le climat » (TEEC), rebaptisé
        Greenfin en 2019, c'est le premier label d'État dédié à la{" "}
        <strong>finance verte</strong> : il ne certifie pas une démarche ESG d'ensemble,
        mais la <em>qualité verte</em> du portefeuille. Son référentiel, publié sur le{" "}
        <a
          href="https://www.ecologie.gouv.fr/politiques-publiques/label-greenfin"
          target="_blank"
          rel="noreferrer"
        >
          site du ministère
        </a>
        , repose sur quatre familles de critères :
      </p>
      <ul>
        <li>
          une <strong>part verte</strong> : une fraction minimale du portefeuille doit être
          investie dans huit catégories d'éco-activités définies par le référentiel —
          énergie, bâtiment, gestion des déchets et contrôle de la pollution, industrie,
          transport propre, technologies de l'information et de la communication,
          agriculture et forêt, adaptation au changement climatique ;
        </li>
        <li>
          des <strong>exclusions</strong> : toute la chaîne de valeur des énergies fossiles
          — exploration, production, transformation, transport du pétrole, du charbon et du
          gaz — est écartée, ainsi que d'autres activités jugées incompatibles avec la
          transition ;
        </li>
        <li>
          la <strong>gestion des controverses ESG</strong> : les entreprises visées par des
          controverses environnementales, sociales ou éthiques documentées doivent être
          suivies et, le cas échéant, écartées ;
        </li>
        <li>
          un <strong>mécanisme de mesure d'impact environnemental</strong> : le fonds doit
          suivre la contribution effective de ses investissements, notamment sur le climat.
        </li>
      </ul>
      <p>
        Cette exigence a un prix : la rareté. Selon la page officielle du ministère, on
        comptait début 2026 un peu plus d'une centaine de fonds labellisés Greenfin, pour
        environ 36 milliards d'euros d'encours — un ordre de grandeur presque dix fois
        inférieur au Label ISR en nombre de fonds. Le label est attribué après audit par
        des organismes labellisateurs référencés, pour une durée d'un an renouvelable avec
        contrôles. Et son référentiel évolue pour converger avec la{" "}
        <LienArticle slug="taxonomie-verte-europeenne-epargne">
          taxonomie verte européenne
        </LienArticle>
        , le dictionnaire officiel des activités durables de l'Union européenne — une
        convergence qui devrait, à terme, rendre la « part verte » encore plus lisible.
      </p>
      <p>
        Ce que Greenfin ne garantit pas mérite d'être dit aussi clairement : ce n'est pas un
        label ESG global. Les dimensions sociale et de gouvernance n'y sont traitées qu'au
        travers du suivi des controverses — un fonds Greenfin certifie son contenu
        environnemental, pas une exemplarité sociale d'ensemble. Et comme tout label, il ne
        garantit ni performance, ni absence de risque de perte en capital.
      </p>

      <h2>Greenfin ou Label ISR : le tableau comparatif pour décider</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Label ISR</th>
            <th>Label Greenfin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Qui le porte</strong>
            </td>
            <td>Ministère de l'Économie et des Finances (créé en 2016)</td>
            <td>Ministère de la Transition écologique (lancé fin 2015, ex-TEEC)</td>
          </tr>
          <tr>
            <td>
              <strong>La question à laquelle il répond</strong>
            </td>
            <td>« Ce fonds sélectionne-t-il selon une méthode ESG auditée ? »</td>
            <td>« Ce fonds finance-t-il la transition écologique, sans fossiles ? »</td>
          </tr>
          <tr>
            <td>
              <strong>Cœur du référentiel</strong>
            </td>
            <td>
              Sélectivité ESG (exclusion des 30 % d'émetteurs les moins bien notés),
              transparence, suivi
            </td>
            <td>
              Part verte investie dans 8 éco-activités, mesure d'impact environnemental
            </td>
          </tr>
          <tr>
            <td>
              <strong>Énergies fossiles</strong>
            </td>
            <td>
              Exclusions ciblées : charbon et non-conventionnels au-delà de seuils,
              nouveaux projets d'hydrocarbures
            </td>
            <td>Toute la chaîne de valeur exclue (pétrole, charbon, gaz)</td>
          </tr>
          <tr>
            <td>
              <strong>Nucléaire</strong>
            </td>
            <td>Pas d'exclusion imposée par le référentiel</td>
            <td>Exclu à l'origine ; éligible depuis un arrêté de janvier 2024</td>
          </tr>
          <tr>
            <td>
              <strong>Social et gouvernance</strong>
            </td>
            <td>Au cœur de la méthodologie (les trois piliers ESG)</td>
            <td>Traités via le suivi des controverses uniquement</td>
          </tr>
          <tr>
            <td>
              <strong>Taille de l'offre</strong>
            </td>
            <td>Près de 940 fonds au 1er janvier 2025 (comité du label)</td>
            <td>Un peu plus d'une centaine de fonds début 2026 (ministère)</td>
          </tr>
          <tr>
            <td>
              <strong>Où vérifier</strong>
            </td>
            <td>Liste officielle sur lelabelisr.fr</td>
            <td>Liste officielle sur ecologie.gouv.fr</td>
          </tr>
        </tbody>
      </table>
      <p>
        Lisez ce tableau pour ce qu'il est : une comparaison de <em>promesses</em>, pas un
        podium. Greenfin est plus exigeant sur le climat, le Label ISR plus complet sur les
        dimensions sociale et de gouvernance — et beaucoup plus disponible. Aucune des deux
        colonnes ne certifie qu'un fonds est « éthique » au sens où vous l'entendez, vous :
        cette adéquation-là ne se labellise pas, elle se vérifie.
      </p>

      <h2>Énergies fossiles et nucléaire : quel label exclut quoi ?</h2>
      <p>
        C'est ici que les deux référentiels divergent le plus — et c'est souvent ici que se
        joue votre choix.
      </p>
      <h3>Sur les énergies fossiles</h3>
      <p>
        Greenfin applique l'exclusion la plus radicale du paysage français : l'ensemble de
        la chaîne de valeur — exploration, production, transformation, transport du
        pétrole, du charbon et du gaz — est incompatible avec le label. Le Label ISR,
        depuis sa version 2025, exclut le charbon et les hydrocarbures non conventionnels
        au-delà de seuils stricts, ainsi que les entreprises lançant de nouveaux projets
        d'hydrocarbures ; mais il n'interdit pas toute exposition au secteur de l'énergie.
        En clair : « zéro fossile » est une promesse Greenfin, pas une promesse Label ISR.
        Si c'est votre ligne rouge, vous savez quel tampon chercher — et l'inventaire du
        fonds reste la vérification finale.
      </p>
      <h3>Sur le nucléaire</h3>
      <p>
        Le nucléaire raconte l'histoire inverse. Greenfin l'excluait depuis sa création ;
        depuis un arrêté de janvier 2024, les activités liées à l'énergie nucléaire sont{" "}
        <a
          href="https://www.notre-environnement.gouv.fr/actualites/breves/article/finance-verte-le-nucleaire-desormais-eligible-au-label-greenfin"
          target="_blank"
          rel="noreferrer"
        >
          devenues éligibles au label
        </a>
        , aux côtés des énergies renouvelables. Le Label ISR, lui, n'a jamais imposé
        d'exclusion du nucléaire. Ce changement se lit de deux façons, toutes deux
        défendables : pour les uns, le nucléaire est un pilier bas-carbone de la
        décarbonation française, et son intégration met le label en cohérence avec cet
        objectif ; pour les autres, la question des déchets et le refus de principe de
        cette énergie justifient de l'écarter d'un label « vert ». Nous ne trancherons pas
        ce débat à votre place. Conséquence pratique, en revanche : si le nucléaire est un
        critère pour vous — dans un sens ou dans l'autre —, le logo ne suffit plus depuis
        2024. Il faut lire la politique d'investissement du fonds et son inventaire.
      </p>

      <h2>Faut-il vraiment choisir entre les deux ?</h2>
      <p>
        Non — et c'est la bonne nouvelle de ce comparatif. Les deux labels ne sont pas
        concurrents : ils sont complémentaires, et un même fonds peut être à la fois
        labellisé ISR et Greenfin. La vraie question n'est pas « quel est le meilleur
        label ? » mais « quelle est ma priorité ? » :
      </p>
      <ul>
        <li>
          <strong>votre priorité est climatique</strong>, et l'exclusion des énergies
          fossiles n'est pas négociable : commencez par l'offre Greenfin, plus étroite mais
          calibrée pour cet objectif ;
        </li>
        <li>
          <strong>vous cherchez une démarche responsable d'ensemble</strong> —
          environnement, mais aussi conditions de travail et gouvernance — avec un choix
          large dans toutes les classes d'actifs : le Label ISR est la référence, à
          condition d'en connaître les limites ;
        </li>
        <li>
          <strong>vous voulez une dimension solidaire</strong> — financer directement des
          entreprises à forte utilité sociale : c'est le terrain d'un troisième label,
          Finansol, qui obéit à une logique encore différente.
        </li>
      </ul>
      <p>
        Bonne nouvelle supplémentaire si vous investissez via l'assurance vie : vous n'avez
        pas à espérer que votre contrat propose ces fonds. Depuis le 1er janvier 2022, la
        loi Pacte impose à tout contrat multisupport de référencer au moins une unité de
        compte labellisée ISR, une unité de compte verte (Greenfin) et une unité de compte
        solidaire — une obligation détaillée sur{" "}
        <a
          href="https://www.lelabelisr.fr/loi-pacte-lassurance-vie-en-soutien-de-linvestissement-socialement-responsable/"
          target="_blank"
          rel="noreferrer"
        >
          le site officiel du Label ISR
        </a>
        . Le minimum légal reste un minimum — une unité de compte par catégorie, ce n'est
        pas une gamme — mais il garantit que la comparaison de cet article a une traduction
        concrète dans votre contrat.
      </p>
      <p>
        Notre grille de lecture, assumée : un label est un point de départ, jamais une
        conclusion. Il vous épargne l'analyse de centaines de fonds en présélectionnant
        ceux qui respectent un référentiel public audité — c'est précieux. Mais aucun
        tampon ne remplace la lecture de ce que le fonds détient réellement.
      </p>

      <h2>Comment vérifier qu'un fonds porte vraiment l'un de ces labels ?</h2>
      <p>
        Un logo sur une brochure n'est pas une preuve : un fonds peut avoir perdu son
        label, et une plaquette peut être obsolète. Trois réflexes suffisent — c'est notre
        méthode <strong>Liste → Référentiel → Inventaire</strong> :
      </p>
      <ol>
        <li>
          <strong>La liste.</strong> Vérifiez le fonds sur la liste officielle du label :{" "}
          <a
            href="https://www.lelabelisr.fr/comment-investir/fonds-labellises/"
            target="_blank"
            rel="noreferrer"
          >
            lelabelisr.fr
          </a>{" "}
          pour le Label ISR, la page{" "}
          <a
            href="https://www.ecologie.gouv.fr/politiques-publiques/label-greenfin"
            target="_blank"
            rel="noreferrer"
          >
            Greenfin du ministère
          </a>{" "}
          pour la finance verte. Seule la liste fait foi, jamais le logo.
        </li>
        <li>
          <strong>Le référentiel.</strong> Situez la promesse dans le temps : un fonds
          labellisé ISR aujourd'hui respecte le référentiel durci applicable depuis 2025 ;
          un fonds Greenfin peut détenir du nucléaire depuis 2024. Le tampon n'a pas
          toujours promis la même chose — sachez quelle version vous achetez.
        </li>
        <li>
          <strong>L'inventaire.</strong> Ouvrez le document d'informations clés (DIC) et
          l'inventaire du portefeuille publié par la société de gestion, et lisez au moins
          les dix premières lignes. Correspondent-elles à ce que le label vous a laissé
          imaginer ? Ce test de trois minutes est le plus honnête qui existe.
        </li>
      </ol>
      <p>
        Pour aller plus vite sur les deux premières étapes, notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> résume gratuitement ce que
        chaque label français garantit, ce qu'il ne garantit pas, et où le vérifier. Il
        vous donne des pistes de lecture — la vérification finale reste toujours le
        document officiel du fonds.
      </p>

      <h2>Vos questions sur les labels Greenfin et ISR</h2>

      <h3>Un fonds peut-il avoir à la fois le Label ISR et le label Greenfin ?</h3>
      <p>
        Oui. Les deux labels sont indépendants et leurs référentiels ne s'excluent pas :
        un fonds peut être audité et labellisé par les deux dispositifs. Le cumul est même
        un signal intéressant — une méthodologie ESG auditée <em>et</em> un contenu vert
        certifié — mais il reste rare, la double labellisation ayant un coût pour la
        société de gestion.
      </p>

      <h3>Le label Greenfin est-il « plus éthique » que le Label ISR ?</h3>
      <p>
        La question est mal posée — et c'est le piège classique. Greenfin est plus exigeant
        sur le climat et les fossiles ; le Label ISR couvre des dimensions que Greenfin ne
        traite qu'en surface, comme le social et la gouvernance. Aucun des deux ne certifie
        une conformité à vos valeurs personnelles : ils certifient des référentiels
        publics, différents, que cet article vous a détaillés.
      </p>

      <h3>Où vérifier qu'un fonds a vraiment l'un de ces labels ?</h3>
      <p>
        Sur les listes officielles uniquement : lelabelisr.fr pour le Label ISR, le site du
        ministère de la Transition écologique pour Greenfin. Un logo sur une brochure ou un
        site de courtier ne suffit pas — un fonds peut perdre son label lors d'un audit de
        renouvellement.
      </p>

      <h3>Trouve-t-on ces fonds dans une assurance vie ?</h3>
      <p>
        Oui, et c'est même une obligation légale : depuis le 1er janvier 2022, tout contrat
        d'assurance vie multisupport doit proposer au moins une unité de compte labellisée
        ISR, une unité de compte Greenfin et une unité de compte solidaire. Le nombre de
        supports au-delà de ce minimum varie fortement d'un contrat à l'autre — c'est un
        vrai critère de comparaison entre contrats.
      </p>

      <h3>Le Label ISR exclut-il totalement le pétrole et le gaz ?</h3>
      <p>
        Non. Depuis son référentiel applicable à tous les fonds labellisés au 1er janvier
        2025, il exclut le charbon et les hydrocarbures non conventionnels au-delà de
        seuils stricts, ainsi que les entreprises lançant de nouveaux projets
        d'hydrocarbures — mais pas toute exposition au secteur de l'énergie. L'exclusion de
        l'ensemble de la chaîne fossile est la marque de Greenfin.
      </p>

      <h3>Un fonds peut-il perdre son label ?</h3>
      <p>
        Oui, dans les deux cas : les labels sont attribués pour une durée limitée, avec des
        audits de suivi et de renouvellement. L'entrée en vigueur du nouveau référentiel
        ISR l'a montré à grande échelle — des fonds ont quitté le label plutôt que de se
        conformer aux nouvelles exclusions. D'où l'importance de vérifier la liste
        officielle au moment où vous investissez, pas seulement la brochure.
      </p>

      <h3>Un fonds labellisé rapporte-t-il plus — ou moins — qu'un fonds classique ?</h3>
      <p>
        Ni l'un ni l'autre n'est garanti : aucun label ne certifie une performance, et les
        études comparant fonds responsables et fonds conventionnels divergent selon les
        périodes et les méthodologies. Comme pour tout placement en unités de compte, les
        performances passées ne préjugent pas des performances futures et le capital
        investi reste exposé à un risque de perte.
      </p>

      <h3>Et le label Finansol, c'est encore autre chose ?</h3>
      <p>
        Oui — c'est le troisième label du paysage français, dédié à l'épargne solidaire :
        il certifie qu'une partie de votre épargne finance directement des entreprises à
        forte utilité sociale ou environnementale. Nous lui avons consacré une analyse
        dédiée :{" "}
        <LienArticle slug="label-finansol-finance-solidaire">
          ce que garantit le label Finansol
        </LienArticle>
        , pour compléter votre panorama des trois labels.
      </p>

      <h2>Deux tampons, deux promesses — et une décision qui reste la vôtre</h2>
      <p>
        Vous n'avez plus à choisir à l'aveugle entre deux logos : le Label ISR certifie une
        méthode de sélection ESG auditée, large et généraliste ; Greenfin certifie un
        portefeuille qui finance la transition écologique, débarrassé des énergies
        fossiles. Si votre priorité est climatique, Greenfin est le référentiel le plus
        proche de votre exigence ; si vous cherchez une démarche responsable d'ensemble,
        le Label ISR vous ouvre une offre incomparablement plus vaste — à lire avec les
        limites que vous connaissez maintenant.
      </p>
      <p>
        Reporter ce choix a un coût silencieux : tant que la question reste ouverte, votre
        épargne continue de financer ce que vous n'avez pas choisi. Et le choisir sur un
        logo mal compris coûte plus cher encore — c'est découvrir dans trois ans, en
        ouvrant l'inventaire, des lignes que vous pensiez précisément avoir exclues.
      </p>
      <p>
        Pour la suite logique de cette lecture : notre{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          méthode pour repérer le greenwashing d'un fonds « vert »
        </LienArticle>{" "}
        transforme la vigilance de cet article en réflexes de détection — indispensable
        pour les fonds qui se disent verts <em>sans</em> label. Et notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> vous donne, en quelques
        minutes, la fiche de lecture de chaque tampon du marché.
      </p>
      <p>
        Enfin, si vous préférez faire ce tri à deux : c'est notre métier. Lors d'un premier
        échange offert, un conseiller du cabinet passe en revue avec vous les labels et les
        inventaires de vos placements actuels — documents à l'appui, sans jargon et sans
        engagement.
      </p>
    </>
  );
}
