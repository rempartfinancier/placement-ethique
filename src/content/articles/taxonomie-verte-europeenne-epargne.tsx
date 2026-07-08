import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "taxonomie-verte-europeenne-epargne",
  title: "Taxonomie verte européenne : qu'est-ce que ça change vraiment pour votre épargne ?",
  excerpt:
    "La taxonomie verte n'est pas un label : c'est le dictionnaire européen des activités durables. Ce qu'elle change déjà pour votre épargne — et ses angles morts.",
  readingTime: "11 min",
  category: "Labels & Greenwashing",
  date: "2026-05-23",
  tags: ["taxonomie verte", "SFDR", "finance durable", "gaz et nucléaire", "greenwashing"],
  author: "Sébastien Petrisot",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> oui, la taxonomie verte européenne change des choses
          concrètes pour votre épargne — mais pas celles qu'on croit. Ce n'est ni un label ni
          une note : c'est un <em>dictionnaire réglementaire</em> qui définit, activité par
          activité et critères chiffrés à l'appui, ce que l'Union européenne accepte
          d'appeler « durable ». Depuis son entrée en application, vos fonds doivent publier
          un pourcentage d'alignement sur cette taxonomie, votre conseiller doit recueillir
          vos préférences de durabilité, et un label européen d'obligations vertes s'appuie
          dessus. Ce que la taxonomie ne fera jamais : décider à votre place qu'un fonds est
          « éthique » — d'autant qu'elle inclut, sous conditions, le gaz et le nucléaire.
        </p>
      </div>

      <p>
        Vous avez croisé le mot « taxonomie » dans la presse, le plus souvent accolé à une
        polémique sur le gaz et le nucléaire. Ou vous l'avez repéré dans les documents d'un
        fonds, sous la forme d'une ligne déroutante : « alignement sur la taxonomie : 0 % » —
        pour un fonds pourtant vendu comme vert. Et vous vous posez la question légitime de
        tout épargnant devant une machinerie bruxelloise de plus : est-ce que cela change
        quelque chose, concrètement, pour mon assurance vie, mon PER ou mes ETF — ou est-ce
        une couche réglementaire de plus entre moi et la réalité de mes placements ?
      </p>
      <p>
        La réponse mérite mieux qu'un haussement d'épaules. La taxonomie est probablement le
        texte le plus structurant de la finance durable européenne : c'est lui qui décide de
        ce que le mot « vert » veut dire, et tous les autres étages — classification SFDR,
        labels, obligations vertes — s'appuient dessus ou s'en démarquent. Mais c'est aussi un
        texte dont la promesse est régulièrement survendue par les uns et caricaturée par les
        autres.
      </p>
      <p>
        Dans cet article : ce que la taxonomie est exactement (et ce qu'elle n'est pas),
        pourquoi le gaz et le nucléaire y figurent, les trois changements concrets qu'elle a
        déjà introduits dans votre épargne, pourquoi tant de fonds affichent un alignement
        proche de zéro sans que ce soit un scandale, et comment utiliser ce chiffre comme un
        outil de vérification plutôt que comme un argument commercial.
      </p>

      <h2>La taxonomie verte européenne, c'est quoi exactement ?</h2>
      <p>
        La taxonomie est instituée par le{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32020R0852"
          target="_blank"
          rel="noreferrer"
        >
          règlement (UE) 2020/852 du 18 juin 2020
        </a>
        . Son objet : établir une classification commune des activités économiques durables
        sur le plan environnemental, pour orienter les capitaux vers la transition écologique
        et couper court aux définitions maison du mot « vert ». Elle retient six objectifs
        environnementaux : l'atténuation du changement climatique, l'adaptation au changement
        climatique, l'eau et les ressources marines, l'économie circulaire, la prévention de
        la pollution, et la biodiversité.
      </p>
      <p>
        Pour qu'une activité soit dite <strong>« alignée »</strong> sur la taxonomie, quatre
        conditions cumulatives doivent être réunies : contribuer substantiellement à au moins
        un des six objectifs ; ne pas causer de préjudice important aux cinq autres (le
        principe dit <em>do no significant harm</em>, ou DNSH) ; respecter des garanties
        sociales minimales (droits humains et du travail) ; et satisfaire des critères
        techniques chiffrés, publiés par la Commission européenne dans des actes délégués —
        d'abord pour les deux objectifs climatiques en 2021, puis pour les quatre autres en
        2023. Ce ne sont donc pas des intentions : ce sont des seuils, activité par activité.
      </p>
      <div className="callout">
        <p>
          <strong>Le point qui évite 90 % des malentendus :</strong> la taxonomie classe des{" "}
          <em>activités</em>, pas des entreprises ni des fonds. Une entreprise n'est jamais
          « alignée » en bloc : elle a un pourcentage de chiffre d'affaires (et
          d'investissements) aligné. Un fonds agrège ensuite ces pourcentages au prorata de
          son portefeuille. C'est ce chiffre agrégé que vous voyez sur les documents de vos
          supports — un thermomètre, pas un verdict.
        </p>
      </div>
      <p>
        Pour situer la taxonomie parmi les autres tampons que vous croisez sur les fiches de
        fonds :
      </p>
      <table>
        <thead>
          <tr>
            <th>Outil</th>
            <th>Nature</th>
            <th>Ce qu'il fait</th>
            <th>Ce qu'il ne fait pas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Taxonomie verte</strong>
            </td>
            <td>Dictionnaire réglementaire européen</td>
            <td>Définit ce qui est « durable », activité par activité, avec des seuils chiffrés</td>
            <td>Ne note ni ne certifie aucun fonds ; n'intègre pas de dimension sociale positive</td>
          </tr>
          <tr>
            <td>
              <strong>Classification SFDR (Article 6/8/9)</strong>
            </td>
            <td>Régime de transparence auto-déclaré</td>
            <td>Oblige les fonds à documenter leurs ambitions — dont leur alignement taxonomie</td>
            <td>Aucun audit préalable, aucune exigence minimale de composition</td>
          </tr>
          <tr>
            <td>
              <strong>Labels (ISR, Greenfin, Finansol)</strong>
            </td>
            <td>Certifications volontaires auditées</td>
            <td>Vérifient par un tiers le respect d'un référentiel</td>
            <td>Chaque label mesure autre chose — leurs périmètres ne coïncident pas avec la taxonomie</td>
          </tr>
        </tbody>
      </table>
      <p>
        La classification SFDR et la taxonomie sont donc complémentaires : la première oblige
        à publier, la seconde définit ce qui est publié. Nous avons consacré une analyse
        détaillée à{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          ce que les catégories Article 8 et Article 9 garantissent vraiment
        </LienArticle>{" "}
        — les deux lectures se complètent.
      </p>

      <h2>Pourquoi le gaz et le nucléaire sont-ils classés « verts » par la taxonomie ?</h2>
      <p>
        C'est l'épisode qui a fait connaître la taxonomie au grand public. Par un{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022R1214"
          target="_blank"
          rel="noreferrer"
        >
          acte délégué complémentaire du 9 mars 2022
        </a>
        , applicable depuis le 1er janvier 2023, la Commission a inclus certaines activités
        gazières et nucléaires dans la taxonomie, au titre d'activités dites
        « transitoires » : sous conditions strictes (plafonds d'émissions, dates butoirs
        d'autorisation, plans de gestion des déchets pour le nucléaire) et avec des
        obligations de transparence renforcées.{" "}
        <a
          href="https://www.europarl.europa.eu/news/fr/press-room/20220701IPR34365/taxonomie-le-pe-ne-s-oppose-pas-a-l-inclusion-du-gaz-et-du-nucleaire"
          target="_blank"
          rel="noreferrer"
        >
          Le Parlement européen a renoncé à s'y opposer en juillet 2022
        </a>
        , au terme d'un des votes les plus disputés de la législature ; des recours ont
        ensuite été portés devant la justice européenne.
      </p>
      <p>
        Deux lectures s'affrontent, et chacune a sa cohérence. La lecture{" "}
        <strong>pragmatique</strong> : la transition énergétique a besoin d'électricité
        pilotable et bas-carbone, et mieux vaut encadrer ces activités par des conditions
        chiffrées et une transparence obligatoire — les documents des fonds doivent
        d'ailleurs faire apparaître séparément l'exposition au gaz et au nucléaire, ce qui
        vous laisse le choix. La lecture <strong>critique</strong> : en acceptant des
        énergies fossiles ou controversées dans son dictionnaire du « vert », l'Union a
        affaibli la crédibilité de l'outil au moment précis où il devait faire référence.
        Aucune des deux positions n'est absurde ; ce qui compte pour vous, c'est de savoir
        que « aligné taxonomie » peut inclure du gaz et du nucléaire — et de vérifier si
        c'est le cas de vos supports.
      </p>
      <p>
        Ce débat explique aussi pourquoi les labels français ne recouvrent pas la taxonomie :
        le label d'État{" "}
        <a
          href="https://www.ecologie.gouv.fr/politiques-publiques/label-greenfin"
          target="_blank"
          rel="noreferrer"
        >
          Greenfin
        </a>{" "}
        exclut toute la chaîne des énergies fossiles, et n'a réintégré le nucléaire dans son
        référentiel qu'en janvier 2024, après l'avoir longtemps exclu. Le même mot « vert »
        recouvre donc des périmètres différents selon le tampon — c'est tout l'objet de notre
        comparaison entre{" "}
        <LienArticle slug="label-greenfin-vs-label-isr">
          le label Greenfin et le Label ISR
        </LienArticle>
        .
      </p>

      <h2>Qu'est-ce que la taxonomie change concrètement pour votre assurance vie ou votre PER ?</h2>
      <p>Trois changements sont déjà en vigueur — et vous les avez peut-être croisés sans les nommer.</p>
      <h3>1. Un chiffre nouveau dans les documents de vos fonds</h3>
      <p>
        Les annexes SFDR des fonds Article 8 et Article 9 doivent indiquer la part minimale
        d'investissements alignés sur la taxonomie que le gérant s'engage à respecter, puis
        rendre compte chaque année du niveau effectivement atteint. Pour la première fois, la
        promesse verte d'un fonds se traduit par un pourcentage défini par un référentiel
        public — le même pour tous — et non par la méthodologie maison d'une société de
        gestion. Comme tout support en unités de compte, un fonds aligné sur la taxonomie
        reste exposé à un risque de perte en capital : le chiffre mesure le caractère
        environnemental des activités financées, pas la solidité du placement.
      </p>
      <h3>2. Une question nouvelle chez votre conseiller</h3>
      <p>
        Depuis le 2 août 2022, tout professionnel qui vous conseille un placement — en
        assurance vie comme en compte-titres — doit recueillir vos{" "}
        <strong>préférences de durabilité</strong>, dont, précisément, la part minimale
        d'alignement taxonomie que vous souhaitez. Dans les faits, l'
        <a
          href="https://acpr.banque-france.fr/system/files/2025-11/Approche_ACPR-AMF_preferences_durabilite_public.pdf"
          target="_blank"
          rel="noreferrer"
        >
          ACPR et l'AMF ont constaté
        </a>{" "}
        que le dispositif restait mal compris et que la très grande majorité des clients
        n'exprimait aucune préférence détaillée — les deux superviseurs ont publié fin 2025
        une approche commune pour le simplifier. C'est pourtant un droit utile : une
        préférence exprimée engage le distributeur à en tenir compte dans ce qu'il vous
        propose.
      </p>
      <h3>3. Un label européen pour les obligations vertes</h3>
      <p>
        Depuis le 21 décembre 2024, le{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32023R2631"
          target="_blank"
          rel="noreferrer"
        >
          règlement (UE) 2023/2631
        </a>{" "}
        crée l'appellation volontaire « obligation verte européenne » (EuGB) : le produit de
        l'émission doit financer des activités conformes aux exigences de la taxonomie. C'est
        la première brique qui transforme le dictionnaire en norme de produit — nous
        détaillons ce que cela change dans notre comparaison entre{" "}
        <LienArticle slug="obligations-vertes-vs-obligations-classiques">
          green bonds et obligations classiques
        </LienArticle>
        .
      </p>
      <table>
        <thead>
          <tr>
            <th>Ce que la taxonomie vous garantit</th>
            <th>Ce qu'elle ne vous garantit pas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Une <strong>définition commune et publique</strong> du mot « vert », avec des
              seuils chiffrés opposables — fini les définitions maison invérifiables
            </td>
            <td>
              Que cette définition corresponde à <strong>vos valeurs</strong> : le gaz et le
              nucléaire peuvent y contribuer, la dimension sociale positive n'y figure pas
            </td>
          </tr>
          <tr>
            <td>
              Un <strong>pourcentage comparable</strong> d'un fonds à l'autre, publié dans des
              annexes standardisées
            </td>
            <td>
              Qu'un fonds « vert » soit majoritairement aligné : les taux publiés restent
              souvent faibles, voire nuls, sans que ce soit disqualifiant
            </td>
          </tr>
          <tr>
            <td>
              Le <strong>droit d'exiger</strong> une part minimale d'alignement via le
              questionnaire de durabilité de votre conseiller
            </td>
            <td>
              Que ce droit s'exerce tout seul : si vous n'exprimez rien, le sujet ne sera
              probablement jamais rouvert
            </td>
          </tr>
          <tr>
            <td>
              Un <strong>socle vérifié par des tiers</strong> pour d'autres briques : label
              EuGB, reporting des grandes entreprises, futurs référentiels
            </td>
            <td>
              La <strong>stabilité du mode d'emploi</strong> : le format du reporting est en
              cours de simplification, les chiffres publiés vont évoluer
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Pourquoi tant de fonds affichent-ils 0 % d'alignement taxonomie ?</h2>
      <p>
        C'est le paradoxe qui déroute le plus les épargnants : des fonds sérieux, parfois
        labellisés, affichent un engagement d'alignement taxonomie de 0 %. Trois raisons
        l'expliquent, et aucune n'est un aveu de greenwashing.
      </p>
      <p>
        <strong>Le périmètre de la taxonomie est étroit.</strong> Le dictionnaire couvre en
        priorité les secteurs à fort enjeu environnemental — énergie, transport, bâtiment,
        industrie. Une grande partie de l'économie (santé, logiciels, distribution, services
        financiers…) n'y a tout simplement pas d'activités « alignables », quelle que soit sa
        qualité ESG. Un fonds diversifié affichera mécaniquement un alignement faible.
      </p>
      <p>
        <strong>L'alignement se prouve, il ne se proclame pas.</strong> Pour compter une
        activité comme alignée, il faut démontrer la contribution substantielle, l'absence de
        préjudice aux cinq autres objectifs et le respect des garanties sociales — avec les
        données publiées par les entreprises, qui n'ont commencé ce reporting que récemment
        et progressent encore, comme l'a montré l'
        <a
          href="https://www.amf-france.org/sites/institutionnel/files/private/2023-12/rapport-taxonomie-2023.pdf"
          target="_blank"
          rel="noreferrer"
        >
          étude de l'AMF sur les premiers reportings taxonomie
        </a>
        . Faute de données complètes, beaucoup de gérants préfèrent s'engager sur 0 % —
        l'engagement inscrit dans l'annexe SFDR étant contraignant, la prudence l'emporte,
        même quand l'alignement réel du portefeuille est supérieur.
      </p>
      <p>
        <strong>Le chiffre est un minimum, pas une mesure.</strong> L'annexe précontractuelle
        publie l'engagement plancher du gérant ; le rapport périodique publie le niveau
        réellement atteint. Confondre les deux conduit à sous-estimer certains fonds et à
        surestimer la portée d'autres.
      </p>
      <p>
        La conséquence pratique est contre-intuitive : <strong>un 0 % ne disqualifie pas un
        fonds, mais un pourcentage élevé mérite vérification</strong>. C'est exactement le
        genre de signal qu'une méthode de détection du greenwashing doit savoir interpréter —
        nous y consacrons{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          une méthode complète pour passer un fonds « vert » au crible
        </LienArticle>
        .
      </p>

      <h2>Comment utiliser l'alignement taxonomie pour vérifier un fonds ?</h2>
      <p>
        Notre méthode tient en trois réflexes — <strong>les 3 R : Repérer, Relativiser,
        Recouper</strong> — et demande moins d'un quart d'heure par fonds.
      </p>
      <ol>
        <li>
          <strong>Repérer.</strong> Ouvrez l'annexe SFDR du fonds (jointe au prospectus, sur
          le site de la société de gestion) et trouvez la part minimale d'investissements
          alignés sur la taxonomie — ainsi que la mention, obligatoire, de l'exposition
          éventuelle au gaz et au nucléaire. Si le fonds est vendu comme « vert » et que ce
          chiffre n'apparaît nulle part, c'est déjà une information.
        </li>
        <li>
          <strong>Relativiser.</strong> Interprétez le chiffre dans son contexte : un fonds
          d'infrastructures vertes et un fonds actions monde diversifié ne jouent pas dans la
          même catégorie. Comparez des fonds comparables entre eux, jamais un pourcentage
          isolé à un idéal absolu.
        </li>
        <li>
          <strong>Recouper.</strong> Confrontez l'engagement précontractuel au rapport
          périodique (le niveau atteint) et à l'inventaire du portefeuille : les dix
          premières lignes racontent-elles la même histoire que le pourcentage ? Un chiffre
          qui ne survit pas à la lecture de l'inventaire est un chiffre à questionner.
        </li>
      </ol>
      <p>
        Pour situer rapidement la taxonomie parmi les autres tampons d'un document de fonds —
        Label ISR, Greenfin, Finansol, classification SFDR — notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> vous donne gratuitement des
        pistes de lecture, tampon par tampon. La vérification finale reste toujours le
        document officiel.
      </p>

      <h2>Les règles de la taxonomie vont-elles encore changer ?</h2>
      <p>
        Oui — dans le sens de la simplification. Dans le cadre du paquet « Omnibus » de
        réduction de la charge réglementaire, la Commission a adopté le 4 juillet 2025 un{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202600073"
          target="_blank"
          rel="noreferrer"
        >
          acte délégué de simplification du reporting taxonomie
        </a>
        , applicable depuis le 1er janvier 2026 : seuil de matérialité de 10 % en deçà duquel
        les entreprises sont dispensées de détailler leurs activités, formulaires allégés,
        vérification du principe DNSH simplifiée. En parallèle, la révision du règlement SFDR
        proposée fin 2025 est en cours de négociation. À la date de publication de cet
        article, la direction est claire : moins de granularité dans les chiffres publiés par
        les entreprises, mais le dictionnaire lui-même — les six objectifs, les quatre
        conditions, les seuils techniques — demeure le référentiel commun. Pour vous,
        l'essentiel est acquis : le mot « vert » a désormais une définition publique, et elle
        ne disparaîtra pas avec les ajustements de formulaires.
      </p>

      <h2>Vos questions sur la taxonomie verte et votre épargne</h2>

      <h3>La taxonomie verte est-elle un label ?</h3>
      <p>
        Non. Un label (ISR, Greenfin, Finansol) est une certification volontaire, auditée par
        un tiers, qu'un fonds demande et peut perdre. La taxonomie est un référentiel de
        définitions qui s'impose à tous : elle ne se décerne pas, elle se mesure. Un fonds
        n'« a » pas la taxonomie — il affiche un pourcentage d'alignement sur elle.
      </p>

      <h3>Un fonds « aligné taxonomie » est-il forcément éthique ?</h3>
      <p>
        Non, pour deux raisons. La taxonomie est exclusivement environnementale : elle
        n'impose aucune contribution sociale positive, seulement des garanties minimales. Et
        son périmètre inclut, sous conditions, des activités gazières et nucléaires que
        certains épargnants souhaitent précisément écarter. « Aligné » signifie « conforme au
        dictionnaire européen du vert » — pas « conforme à vos valeurs ». C'est à vous de
        définir les vôtres, documents à l'appui.
      </p>

      <h3>Où trouver le pourcentage d'alignement taxonomie de mon fonds ?</h3>
      <p>
        Dans l'annexe SFDR précontractuelle du fonds (l'engagement minimal) et dans son
        rapport périodique (le niveau atteint), tous deux disponibles sur le site de la
        société de gestion et, en principe, auprès de votre distributeur ou assureur. Si vous
        ne les trouvez pas, demandez-les : leur communication fait partie des obligations
        d'information.
      </p>

      <h3>Mon Livret A ou mon fonds en euros ont-ils une part verte taxonomie ?</h3>
      <p>
        Les livrets réglementés ne publient pas d'alignement taxonomie : ce ne sont pas des
        produits financiers au sens du règlement SFDR. Dans une assurance vie, c'est au
        niveau de chaque support en unités de compte que le pourcentage se lit ; pour le
        fonds en euros, l'information dépend des publications de l'assureur — elle est
        généralement moins granulaire. En cas de doute, la question posée par écrit à votre
        assureur reste le moyen le plus sûr d'obtenir la donnée.
      </p>

      <h3>Dois-je exprimer une préférence d'alignement taxonomie dans le questionnaire de mon conseiller ?</h3>
      <p>
        Vous n'y êtes pas obligé, mais c'est l'un des rares leviers réglementaires entre vos
        mains : une préférence exprimée (par exemple une part minimale d'investissements
        alignés) engage le professionnel à en tenir compte dans ce qu'il vous propose. Si le
        vocabulaire du questionnaire vous paraît obscur — c'est le constat des superviseurs
        eux-mêmes — faites-vous expliquer chaque option avant de répondre « pas de
        préférence ».
      </p>

      <h3>Quelle différence entre la taxonomie et la classification SFDR ?</h3>
      <p>
        La taxonomie définit ce qui est durable (un dictionnaire d'activités, avec des seuils
        chiffrés) ; SFDR oblige les fonds à publier ce qu'ils déclarent faire en matière de
        durabilité — y compris leur alignement sur la taxonomie. La première fournit l'unité
        de mesure, la seconde impose l'affichage. Notre analyse de{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          la classification Article 8 / Article 9
        </LienArticle>{" "}
        détaille ce second étage.
      </p>

      <h2>Lisez la taxonomie comme un mètre étalon, pas comme un tampon</h2>
      <p>
        Vous avez maintenant la réponse à la question de départ : oui, la taxonomie verte
        change des choses réelles pour votre épargne — une définition publique du mot
        « vert », un pourcentage comparable dans les documents de vos fonds, un droit nouveau
        dans le questionnaire de votre conseiller, un label européen d'obligations vertes.
        Mais elle ne certifie rien à votre place : c'est un instrument de mesure, dont il
        faut connaître les conventions — gaz et nucléaire inclus sous conditions, dimension
        sociale absente, chiffres encore prudents.
      </p>
      <p>
        L'ignorer a un coût : sans référentiel, vous choisissez vos placements « verts » sur
        le vocabulaire des brochures, c'est-à-dire sur le terrain où le greenwashing est le
        plus à l'aise. Et remettre la vérification à plus tard ne la supprime pas — elle la
        déplace simplement après la souscription, quand les arbitrages sont plus coûteux.
      </p>
      <p>
        Pour la suite logique de cette lecture, deux chemins : notre{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          méthode pour repérer le greenwashing d'un fonds « vert »
        </LienArticle>{" "}
        transforme les réflexes de cet article en grille de détection complète ; et notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> situe en quelques minutes
        chaque tampon — taxonomie, SFDR, Label ISR, Greenfin, Finansol — à sa juste place.
      </p>
      <p>
        Et si vous préférez faire ces lectures accompagné, c'est notre métier : lors d'un
        premier échange offert, un conseiller du cabinet passe en revue avec vous les annexes
        SFDR et l'alignement taxonomie de vos supports actuels — documents à l'appui, sans
        jargon et sans engagement.
      </p>
    </>
  );
}
