import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "label-isr-que-garantit-il-vraiment",
  title: "Le Label ISR garantit-il qu'un fonds est vraiment éthique ?",
  excerpt:
    "Non : le Label ISR certifie une méthodologie auditée, pas une éthique. Ce que le référentiel 2024 exclut désormais — et ce qu'il ne promet toujours pas.",
  readingTime: "11 min",
  category: "Labels & Greenwashing",
  date: "2026-05-08",
  tags: ["Label ISR", "labels", "greenwashing", "exclusions fossiles", "réforme du label"],
  author: "Alexandre Pollet",
  featured: true,
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> non, le Label ISR ne garantit pas qu'un fonds est « éthique »
          au sens où vous l'entendez. Il certifie autre chose, de plus précis : qu'une méthodologie
          de sélection ESG existe, qu'elle est formalisée, appliquée et auditée par un organisme
          certificateur indépendant. Depuis sa réforme — applicable à tous les fonds labellisés
          depuis le 1er janvier 2025 —, il exclut enfin le charbon, les hydrocarbures non
          conventionnels et les entreprises qui lancent de nouveaux projets fossiles, et impose
          d'écarter les 30 % d'émetteurs les moins bien notés de l'univers d'investissement. Mais il
          ne garantit toujours ni la conformité du portefeuille à vos valeurs personnelles, ni un
          impact mesuré, ni la performance. Le bon réflexe tient en trois mots : la liste
          officielle, le document d'informations clés, l'inventaire.
        </p>
      </div>

      <p>
        Le logo figure sur la brochure de votre assurance vie, sur la fiche du fonds proposé par
        votre banque, parfois en argument principal : « fonds labellisé ISR ». Le message implicite
        est limpide — ce placement serait vertueux, contrôlé, aligné avec vos valeurs. Et pourtant,
        un doute persiste : vous avez peut-être lu que des fonds labellisés détenaient des
        entreprises pétrolières, que le label avait dû être réformé sous la pression, que des
        sociétés de gestion y avaient renoncé. Alors, ce tampon vaut-il quelque chose ?
      </p>
      <p>
        Le Label ISR est un label public français créé en 2016 sous l'égide du ministère de
        l'Économie et des Finances, pour identifier les fonds d'investissement socialement
        responsable auprès des épargnants. C'est aujourd'hui le label de finance durable le plus
        répandu en France — ce qui en fait à la fois un repère utile et une cible privilégiée du
        marketing.
      </p>
      <p>
        Dans cet article : ce que le label certifie exactement (et le malentendu fondamental sur ce
        point), ce que la réforme entrée pleinement en vigueur en 2025 a changé, la liste honnête de
        ce qu'il ne garantit toujours pas, et une méthode en trois étapes pour vérifier vous-même ce
        qu'un fonds labellisé contient — sans croire personne sur parole, pas même nous.
      </p>

      <h2>Que certifie exactement le Label ISR ?</h2>
      <p>
        Le label est attribué à l'issue d'un audit mené par un organisme certificateur indépendant,
        sur la base d'un référentiel public. Ce référentiel, consultable sur{" "}
        <a
          href="https://www.lelabelisr.fr/label-isr/criteres-attribution/"
          target="_blank"
          rel="noreferrer"
        >
          le site officiel du label
        </a>
        , organise ses exigences en six familles : des objectifs ESG définis et communiqués aux
        investisseurs, une méthodologie d'analyse formalisée, la prise en compte effective de cette
        analyse dans la construction du portefeuille, une politique d'engagement et de vote auprès
        des entreprises détenues, une information transparente des investisseurs, et une évaluation
        des impacts de la démarche ESG. Le label fait ensuite l'objet de contrôles dans la durée, et
        il peut être retiré.
      </p>
      <p>
        Un peu plus d'un millier de fonds portent le label début 2026 — fonds actions, obligataires,
        diversifiés, mais aussi fonds immobiliers (SCPI, OPCI), le référentiel comportant un volet
        immobilier dédié. La liste officielle, mise à jour régulièrement, est publiée sur{" "}
        <a
          href="https://www.lelabelisr.fr/comment-investir/fonds-labellises/"
          target="_blank"
          rel="noreferrer"
        >
          lelabelisr.fr
        </a>
        .
      </p>
      <p>
        Voici maintenant le point qui conditionne tout le reste : ces six piliers décrivent un{" "}
        <em>processus</em>, pas un résultat. Le label certifie que le gérant fait ce qu'il dit selon
        une méthode contrôlable — il ne certifie pas que le portefeuille qui en sort correspond à ce
        que <em>vous</em> appelez éthique. C'est le même principe qu'une certification qualité dans
        l'industrie : elle prouve que la méthode existe et qu'elle est suivie, pas que le produit
        final est celui qu'il vous faut. Si les termes ESG, ISR et impact restent flous pour vous,
        notre article sur{" "}
        <LienArticle slug="isr-esg-impact-investing-differences">
          les différences réelles entre ISR, ESG et impact investing
        </LienArticle>{" "}
        pose ces fondations en dix minutes.
      </p>
      <div className="callout">
        <p>
          <strong>À retenir :</strong> le Label ISR est un label de <em>méthodologie auditée</em>,
          pas un certificat d'éthique. Deux fonds labellisés peuvent avoir des portefeuilles très
          différents — et tous deux respecter parfaitement le référentiel.
        </p>
      </div>

      <h2>Le Label ISR exclut-il le pétrole, le tabac ou l'armement ?</h2>
      <p>La réponse honnête se donne en deux temps, car elle a changé récemment.</p>
      <h3>Avant mars 2024 : aucune exclusion sectorielle obligatoire</h3>
      <p>
        Pendant ses huit premières années, le label n'imposait l'exclusion d'aucun secteur. Un fonds
        labellisé pouvait détenir des compagnies pétrolières, des groupes de tabac ou d'armement,
        dès lors que sa méthodologie de sélection — le plus souvent en{" "}
        <strong>best-in-class</strong>, c'est-à-dire en retenant les entreprises les mieux notées de
        chaque secteur, tous secteurs confondus — était correctement appliquée et documentée.
        C'était la critique centrale adressée au label : une promesse perçue comme éthique, des
        exigences purement méthodologiques.
      </p>
      <h3>Depuis la réforme : des exclusions réelles, mais ciblées</h3>
      <p>
        Le nouveau référentiel, publié en décembre 2023, s'applique aux nouvelles candidatures
        depuis le 1er mars 2024 et à l'ensemble des fonds labellisés depuis le 1er janvier 2025,
        comme le détaille{" "}
        <a
          href="https://www.tresor.economie.gouv.fr/Articles/2023/12/11/label-isr-publication-du-nouveau-referentiel"
          target="_blank"
          rel="noreferrer"
        >
          la direction générale du Trésor
        </a>
        . Il introduit pour la première fois des exclusions obligatoires :
      </p>
      <ul>
        <li>
          les entreprises dont une part de l'activité, au-delà de seuils stricts fixés par le
          référentiel, provient du <strong>charbon</strong> ou des{" "}
          <strong>hydrocarbures non conventionnels</strong> ;
        </li>
        <li>
          les entreprises qui lancent de{" "}
          <strong>
            nouveaux projets d'exploration, d'exploitation ou de raffinage d'hydrocarbures
          </strong>
          , pétrole ou gaz ;
        </li>
        <li>
          la production d'<strong>armes controversées</strong> interdites par les conventions
          internationales, le <strong>tabac</strong> au-delà d'une part minime de l'activité, et les
          entreprises en{" "}
          <strong>
            violation grave ou répétée des principes du Pacte mondial des Nations unies
          </strong>{" "}
          (exclusions dites normatives).
        </li>
      </ul>
      <p>
        La sélectivité a également été relevée : un fonds labellisé doit désormais écarter au moins
        les <strong>30 % d'émetteurs les moins bien notés</strong> de son univers d'investissement,
        contre 20 % auparavant, selon des modalités de calcul précisées par le référentiel. Enfin,
        les gérants doivent analyser les plans de transition climatique des entreprises les plus
        exposées, dans une logique d'alignement progressif des portefeuilles sur l'accord de Paris.
      </p>
      <p>
        Ce qui reste possible dans un fonds labellisé, et qu'il faut savoir : les énergies fossiles
        conventionnelles existantes (une entreprise du secteur pétrogazier sans nouveaux projets et
        sous les seuils du référentiel demeure éligible), l'alcool, les jeux d'argent, et plus
        largement tout secteur que le référentiel n'exclut pas mais que vous excluriez peut-être,
        vous.
      </p>

      <h2>Pourquoi le label a-t-il dû être réformé ?</h2>
      <p>
        Parce que son propre superviseur l'a jugé en danger. En décembre 2020, un{" "}
        <a
          href="https://www.igf.finances.gouv.fr/files/live/sites/igf/files/contributed/Rapports%20de%20mission/2020/2020-M-038-03_Rapport_label_ISR.pdf"
          target="_blank"
          rel="noreferrer"
        >
          rapport de l'Inspection générale des finances
        </a>{" "}
        concluait qu'« à moins qu'il n'évolue radicalement, le label ISR s'expose à une perte
        inéluctable de crédibilité et de pertinence ». Le diagnostic : une promesse perçue comme une
        promesse d'impact, adossée à des exigences qui ne garantissaient aucun fléchage des
        financements vers des activités durables. La réforme de 2023-2024 est la réponse à ce
        constat.
      </p>
      <p>
        Cette réforme fait-elle consensus ? Non, et les deux lectures méritent d'être comprises.
        Pour ses détracteurs, elle reste insuffisante : le pétrole et le gaz conventionnels
        existants demeurent éligibles, la logique best-in-class subsiste sur les 70 % d'univers
        restants, et les notations ESG sur lesquelles repose la sélectivité divergent fortement
        d'une agence à l'autre. Pour ses défenseurs, le référentiel est devenu l'un des plus
        exigeants parmi les labels généralistes européens — et durcir davantage aurait réduit
        l'univers investissable au point de marginaliser le label. Les deux raisonnements se
        tiennent ; le débat porte en réalité sur ce qu'on attend d'un label généraliste : écarter le
        pire, ou ne retenir que l'exemplaire.
      </p>
      <p>
        Un fait donne la mesure du changement : au 1er janvier 2025, à l'issue de la période de
        transition, 939 fonds conservaient le label — soit environ 70 % des fonds labellisés fin
        2024, selon{" "}
        <a
          href="https://www.lelabelisr.fr/wp-content/uploads/2501-CP-comite-du-label.pdf"
          target="_blank"
          rel="noreferrer"
        >
          le comité du label
        </a>
        . Trois fonds sur dix sont donc sortis — renoncements de sociétés de gestion ou
        non-conformités — avant que les labellisations ne repartent. Notre grille de lecture,
        assumée : un label qui fait le tri dans ses propres rangs regagne de la valeur informative.
        Un tampon que tout le monde obtient ne renseigne personne.
      </p>

      <h2>Qu'est-ce que le label ne garantit toujours pas ?</h2>
      <p>
        C'est la question qui vous protège des déconvenues. Le tableau qui suit met en regard ce que
        le label établit réellement et ce qu'il laisse entièrement à votre charge.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ce que le Label ISR garantit</th>
            <th>Ce qu'il ne garantit pas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Une méthodologie ESG formalisée, appliquée et auditée par un certificateur indépendant
            </td>
            <td>Que cette méthodologie corresponde à vos exclusions et priorités personnelles</td>
          </tr>
          <tr>
            <td>
              L'exclusion du charbon, des hydrocarbures non conventionnels, des nouveaux projets
              fossiles, des armes controversées et du tabac (seuils du référentiel)
            </td>
            <td>
              L'exclusion de tous les secteurs controversés : fossile conventionnel existant,
              alcool, jeux d'argent…
            </td>
          </tr>
          <tr>
            <td>L'écartement d'au moins 30 % des émetteurs les moins bien notés de l'univers</td>
            <td>Que les 70 % restants soient vertueux — la logique best-in-class demeure</td>
          </tr>
          <tr>
            <td>Un reporting ESG et un suivi des indicateurs dans le temps</td>
            <td>Un impact environnemental ou social mesuré et prouvé</td>
          </tr>
          <tr>
            <td>Des contrôles dans la durée, avec un label qui peut être retiré</td>
            <td>
              Que le fonds sera encore labellisé demain — seule la liste officielle à date fait foi
            </td>
          </tr>
          <tr>
            <td>Un cadre de transparence sur la stratégie du fonds</td>
            <td>La performance financière — le risque de perte en capital demeure entier</td>
          </tr>
        </tbody>
      </table>
      <p>
        Trois de ces lignes méritent un mot de plus. <strong>L'impact</strong> : le référentiel
        demande de mesurer et de suivre des indicateurs ESG, pas de prouver un effet dans le monde
        réel — confondre label et impact est précisément le malentendu que le rapport de
        l'Inspection générale des finances reprochait à l'ancienne version.{" "}
        <strong>La performance</strong> : le label ne dit rien du rendement, dans un sens comme dans
        l'autre — les études comparant fonds ISR et fonds conventionnels divergent selon les
        périodes et les méthodologies, et un fonds labellisé reste exposé au risque de perte en
        capital. <strong>La durée</strong> : un logo imprimé a pu être vrai au moment de
        l'impression et ne plus l'être aujourd'hui — seule la liste officielle en ligne fait foi.
      </p>

      <h2>Label ISR, Greenfin, Finansol, Article 9 : qui promet quoi ?</h2>
      <p>
        Le Label ISR n'est qu'un des référentiels que vous croiserez sur les documents d'un fonds —
        et ils ne mesurent pas la même chose. Ce tableau situe chacun en une ligne.
      </p>
      <table>
        <thead>
          <tr>
            <th>Référentiel</th>
            <th>Nature</th>
            <th>Promesse centrale</th>
            <th>Point de vigilance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Label ISR</strong>
            </td>
            <td>Label public généraliste</td>
            <td>Méthodologie ESG auditée + exclusions fossiles et normatives depuis la réforme</td>
            <td>Ne certifie pas une éthique, ni un impact</td>
          </tr>
          <tr>
            <td>
              <strong>Label Greenfin</strong>
            </td>
            <td>Label public environnemental</td>
            <td>
              Financement d'activités de la transition écologique, avec exclusion des énergies
              fossiles et du nucléaire
            </td>
            <td>Univers plus étroit ; ne couvre pas le volet social</td>
          </tr>
          <tr>
            <td>
              <strong>Label Finansol</strong>
            </td>
            <td>Label associatif de la finance solidaire</td>
            <td>
              Mécanismes de solidarité vérifiés : financement d'acteurs solidaires ou partage des
              revenus
            </td>
            <td>Ne dit rien du reste du portefeuille non solidaire</td>
          </tr>
          <tr>
            <td>
              <strong>SFDR Article 9</strong>
            </td>
            <td>Classification déclarative européenne</td>
            <td>
              Transparence renforcée pour les fonds affichant un objectif d'investissement durable
            </td>
            <td>Déclaratif, sans audit de labellisation — reclassements massifs fin 2022</td>
          </tr>
        </tbody>
      </table>
      <p>
        Deux de ces confusions coûtent particulièrement cher. Si votre priorité est strictement
        environnementale, la comparaison détaillée{" "}
        <LienArticle slug="label-greenfin-vs-label-isr">
          Label Greenfin ou Label ISR : lequel choisir
        </LienArticle>{" "}
        vous concerne directement, car les deux labels ne répondent pas à la même question. Et si un
        distributeur vous présente « Article 9 » comme un gage supérieur au label, lisez d'abord{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          ce que les Articles 8 et 9 garantissent vraiment
        </LienArticle>{" "}
        — une classification déclarative n'est pas une certification.
      </p>

      <h2>Comment vérifier vous-même ce qu'un fonds labellisé contient ?</h2>
      <p>
        Dix minutes suffisent, sans compétence financière particulière. C'est notre méthode des{" "}
        <strong>trois L : la Liste, la Lecture, les Lignes</strong>.
      </p>
      <ol>
        <li>
          <strong>La Liste.</strong> Vérifiez que le fonds figure bien, aujourd'hui, sur la liste
          officielle publiée sur{" "}
          <a
            href="https://www.lelabelisr.fr/comment-investir/fonds-labellises/"
            target="_blank"
            rel="noreferrer"
          >
            lelabelisr.fr
          </a>
          . Un logo sur une brochure ne prouve rien : le label se perd, se rend, expire. Seule la
          liste à jour fait foi.
        </li>
        <li>
          <strong>La Lecture.</strong> Ouvrez le document d'informations clés (DIC) et la politique
          d'exclusion du fonds, publiés par la société de gestion. Cherchez deux réponses : quelles
          exclusions le fonds applique-t-il <em>au-delà</em> du référentiel du label ? Et quelle est
          son approche dominante — best-in-class, exclusions sectorielles, engagement actionnarial ?
          C'est là que se joue la compatibilité avec vos valeurs, pas dans le logo.
        </li>
        <li>
          <strong>Les Lignes.</strong> Ouvrez l'inventaire du portefeuille — publié périodiquement
          par la société de gestion — et lisez au minimum les dix premières positions.
          Correspondent-elles à ce que le mot « ISR » vous avait laissé imaginer ? Ce test de trente
          secondes est le plus honnête qui existe.
        </li>
      </ol>
      <p>
        Pour la première étape, notre <a href="/outils/decodeur-label">décodeur de labels</a> résume
        gratuitement ce que chaque label français garantit, ce qu'il ne garantit pas et où le
        vérifier. Il vous donne des pistes de lecture — la vérification finale reste toujours le
        document officiel du fonds.
      </p>

      <h2>Vos questions sur le Label ISR</h2>

      <h3>
        Un fonds labellisé ISR peut-il encore détenir des entreprises pétrolières ou gazières ?
      </h3>
      <p>
        Oui, dans certaines limites. Le référentiel en vigueur exclut le charbon et les
        hydrocarbures non conventionnels au-delà de seuils stricts, ainsi que toute entreprise
        lançant de nouveaux projets d'exploration, d'exploitation ou de raffinage de pétrole ou de
        gaz. Une entreprise du secteur de l'énergie qui reste sous ces seuils et ne développe pas de
        nouveaux projets demeure éligible. Si vous souhaitez une exclusion totale du fossile, il
        faut la chercher dans la politique d'exclusion propre du fonds, pas dans le label.
      </p>

      <h3>Le Label ISR garantit-il une meilleure performance ?</h3>
      <p>
        Non — ni meilleure, ni moins bonne. Le label ne porte que sur la méthodologie
        extra-financière du fonds. Les études comparant la performance des fonds ISR et des fonds
        conventionnels aboutissent à des conclusions contradictoires selon les périodes, les classes
        d'actifs et les méthodologies retenues. Un fonds labellisé reste un placement de marché,
        avec un risque de perte en capital, et les performances passées ne préjugent pas des
        performances futures.
      </p>

      <h3>Où vérifier qu'un fonds a vraiment le label aujourd'hui ?</h3>
      <p>
        Sur la liste officielle publiée et mise à jour sur{" "}
        <a
          href="https://www.lelabelisr.fr/comment-investir/fonds-labellises/"
          target="_blank"
          rel="noreferrer"
        >
          lelabelisr.fr
        </a>
        . C'est la seule source qui fait foi : les brochures, fiches produit et sites de
        distributeurs peuvent afficher un logo obsolète.
      </p>

      <h3>Un fonds peut-il perdre son Label ISR ?</h3>
      <p>
        Oui : à l'occasion des contrôles de suivi s'il ne respecte plus le référentiel, à l'échéance
        de son cycle de labellisation s'il ne le renouvelle pas, ou par renoncement volontaire de la
        société de gestion. La vérification sur la liste officielle se refait donc à chaque décision
        d'investissement, pas une fois pour toutes.
      </p>

      <h3>Le Label ISR s'applique-t-il aux SCPI ?</h3>
      <p>
        Oui. Le référentiel comporte un volet dédié aux fonds immobiliers, et des SCPI comme des
        OPCI figurent sur la liste officielle. Les exigences y sont adaptées à la nature de l'actif
        : elles portent notamment sur la stratégie d'amélioration ESG du patrimoine immobilier et
        l'engagement avec les locataires et gestionnaires, plutôt que sur une politique de vote en
        assemblée générale.
      </p>

      <h3>Label ISR ou fonds « Article 9 » : lequel est le plus exigeant ?</h3>
      <p>
        Les deux ne sont pas comparables terme à terme. Le Label ISR est une certification auditée
        par un organisme indépendant sur un référentiel public ; l'Article 9 du règlement européen
        SFDR est une catégorie déclarative de transparence, choisie par la société de gestion
        elle-même. Un fonds peut être labellisé sans être Article 9, et inversement — et aucun des
        deux ne dispense de lire l'inventaire.
      </p>

      <h3>Les fonds labellisés avant la réforme respectent-ils les nouvelles règles ?</h3>
      <p>
        Oui. La période de transition des fonds déjà labellisés s'est achevée le 1er janvier 2025 :
        depuis cette date, tous les contrôles sont réalisés sur la base du nouveau référentiel. Un
        fonds présent aujourd'hui sur la liste officielle est donc soumis aux exclusions fossiles et
        à la sélectivité renforcée, quelle que soit la date de sa première labellisation.
      </p>

      <h2>Un label utile — à condition de lui demander ce qu'il sait garantir</h2>
      <p>
        Vous avez maintenant la réponse complète. Le Label ISR ne certifie pas qu'un fonds est
        éthique : il certifie une méthodologie auditée, considérablement renforcée par la réforme.
        C'est un vrai filtre de sérieux, qui écarte le pire et documente le reste. Utilisé pour ce
        qu'il est — un point de départ, jamais une conclusion —, il vous rend un service réel.
      </p>
      <p>
        L'ignorer a un coût, mais mal le comprendre aussi. Choisir un fonds sur la seule foi du
        logo, c'est risquer de découvrir un jour, dans l'inventaire, des lignes que vous pensiez
        précisément avoir exclues. Et repousser le sujet, c'est laisser votre épargne financer, sans
        aucun filtre, ce que vous n'avez pas choisi. Entre les deux, il y a la vérification — et
        elle prend dix minutes.
      </p>
      <p>
        Pour transformer cette lucidité en réflexes, la suite logique est notre{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          méthode pour repérer le greenwashing d'un fonds « vert »
        </LienArticle>{" "}
        : elle étend les trois L à tous les signaux d'alerte, label ou pas. Et notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> vous donne, gratuitement et sans
        inscription, la fiche de lecture de chaque label français.
      </p>
      <p>
        Enfin, si vous préférez faire cette vérification à deux, c'est notre métier : lors d'un
        premier échange offert, un conseiller du cabinet passe en revue avec vous ce que contiennent
        réellement vos placements actuels — labels vérifiés sur les listes officielles, documents à
        l'appui, sans jargon et sans engagement.
      </p>
    </>
  );
}
