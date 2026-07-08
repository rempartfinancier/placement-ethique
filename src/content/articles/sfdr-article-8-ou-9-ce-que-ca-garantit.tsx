import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "sfdr-article-8-ou-9-ce-que-ca-garantit",
  title: "Article 8 ou Article 9 : ce que la classification SFDR garantit vraiment",
  excerpt:
    "Article 8 et Article 9 ne sont pas des labels : la classification SFDR est déclarative. Ce qu'elle oblige à publier, ce qu'elle ne garantit pas, comment la lire.",
  readingTime: "11 min",
  category: "Labels & Greenwashing",
  date: "2026-05-14",
  tags: ["SFDR", "Article 8", "Article 9", "greenwashing", "réglementation européenne"],
  author: "Sébastien Petrisot",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> « Article 8 » et « Article 9 » ne sont pas des labels de
          qualité, mais des catégories de <em>transparence</em> issues du règlement européen SFDR :
          elles indiquent ce qu'un fonds déclare (promouvoir des caractéristiques environnementales
          ou sociales pour l'Article 8, poursuivre un objectif d'investissement durable pour
          l'Article 9) et l'obligent à publier des documents en conséquence. C'est la société de
          gestion elle-même qui choisit sa catégorie, sans audit indépendant préalable — l'Autorité
          des marchés financiers le dit sans détour : ce classement n'est ni un label, ni une
          garantie de qualité. Ce qu'il vous garantit, c'est un droit précieux : des engagements
          écrits, standardisés et opposables, que cet article vous apprend à lire.
        </p>
      </div>

      <p>
        Vous avez repéré la mention « Article 9 SFDR » sur la fiche d'un fonds, ou un distributeur
        vous a présenté un contrat « investi en fonds Article 8 » comme la preuve d'une épargne
        responsable. Le vocabulaire sonne officiel, réglementaire, européen — et vous vous demandez,
        légitimement, si ce tampon vaut certification ou si c'est encore un argument commercial de
        plus dans un secteur qui n'en manque pas.
      </p>
      <p>
        Le doute est fondé. Fin 2022, 307 fonds européens ont quitté d'eux-mêmes la catégorie
        Article 9 — la plus ambitieuse — pour redescendre en Article 8, soit environ 175 milliards
        d'euros d'actifs et 40 % de la catégorie, selon le{" "}
        <a
          href="https://www.next-finance.net/Les-actifs-des-fonds-article-9"
          target="_blank"
          rel="noreferrer"
        >
          recensement trimestriel de Morningstar
        </a>
        . Un « label » qu'on peut rendre en changeant trois lignes de documentation n'est pas un
        label : c'est une déclaration.
      </p>
      <p>
        Dans cet article : d'où vient cette classification, ce que chaque catégorie signifie
        exactement, pourquoi un fonds Article 9 n'est pas automatiquement plus exigeant qu'un
        Article 8, ce que la vague de déclassements de 2022 a révélé, et une méthode en quatre
        étapes pour transformer cette mention réglementaire en véritable outil de vérification.
      </p>

      <h2>D'où sortent ces « Article 8 » et « Article 9 » qu'on voit sur les fiches de fonds ?</h2>
      <p>
        SFDR est l'acronyme de <em>Sustainable Finance Disclosure Regulation</em> — en français, le{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32019R2088"
          target="_blank"
          rel="noreferrer"
        >
          règlement (UE) 2019/2088
        </a>{" "}
        sur la publication d'informations en matière de durabilité dans le secteur des services
        financiers, adopté le 27 novembre 2019 et applicable depuis le 10 mars 2021. Son objet est
        dans son titre : ce texte n'a pas été conçu pour noter des fonds, mais pour obliger les
        acteurs financiers à <strong>documenter leurs allégations de durabilité</strong>,
        proportionnellement à leurs ambitions déclarées.
      </p>
      <p>
        Les « Article 6 », « Article 8 » et « Article 9 » sont, littéralement, les numéros des
        articles du règlement qui fixent les obligations de transparence applicables à chaque niveau
        d'ambition. Le marché s'en est emparé comme d'une échelle de vertu — les brochures parlent
        de fonds « classés Article 9 » comme d'une médaille — alors que le texte, lui, ne décerne
        rien : il demande des comptes.
      </p>

      <h2>Article 6, 8 ou 9 : que déclare exactement chaque catégorie ?</h2>
      <p>
        Trois niveaux de déclaration coexistent, et chacun déclenche des obligations de publication
        différentes :
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Article 6</th>
            <th>Article 8</th>
            <th>Article 9</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Ce que le fonds déclare</strong>
            </td>
            <td>Aucune ambition de durabilité particulière</td>
            <td>« Promouvoir » des caractéristiques environnementales ou sociales</td>
            <td>Poursuivre un objectif d'investissement durable</td>
          </tr>
          <tr>
            <td>
              <strong>Ce qu'il doit publier</strong>
            </td>
            <td>La prise en compte (ou non) des risques de durabilité</td>
            <td>
              Une annexe précontractuelle standardisée : caractéristiques promues, part minimale
              d'investissements alignés, méthodologie
            </td>
            <td>
              La même annexe, renforcée : objectif durable, contribution mesurée, alignement du
              portefeuille sur cet objectif
            </td>
          </tr>
          <tr>
            <td>
              <strong>Surnom commercial</strong>
            </td>
            <td>« Fonds classique »</td>
            <td>« Fonds vert clair »</td>
            <td>« Fonds vert foncé »</td>
          </tr>
          <tr>
            <td>
              <strong>Ce que ça ne dit pas</strong>
            </td>
            <td>—</td>
            <td>Quels secteurs sont réellement exclus, et avec quelle rigueur</td>
            <td>Comment la société de gestion définit « durable » — la latitude reste large</td>
          </tr>
          <tr>
            <td>
              <strong>Le réflexe de vérification</strong>
            </td>
            <td>Lire le DIC et l'inventaire</td>
            <td>Lire l'annexe SFDR : les engagements chiffrés y sont écrits</td>
            <td>Lire l'annexe SFDR + le rapport périodique : l'objectif est-il tenu ?</td>
          </tr>
        </tbody>
      </table>
      <p>
        Le point technique qui explique presque tout le reste : le règlement définit l'«
        investissement durable » de façon volontairement large — un investissement dans une activité
        qui contribue à un objectif environnemental ou social, sans causer de préjudice important
        aux autres objectifs, dans une entreprise appliquant de bonnes pratiques de gouvernance.
        Mais il ne fixe ni seuils chiffrés, ni liste d'activités admises ou exclues : chaque société
        de gestion applique <em>sa propre méthodologie</em> pour décider ce qui est « durable » dans
        son portefeuille. Deux fonds Article 9 peuvent donc reposer sur des définitions très
        différentes du même mot.
      </p>
      <div className="callout">
        <p>
          <strong>Le piège de lecture le plus courant :</strong> « Article 8 » ne signifie pas «
          fonds durable certifié », mais « fonds qui déclare promouvoir des caractéristiques
          environnementales ou sociales — et qui doit documenter cette promotion ». La catégorie va
          de stratégies très exigeantes à de simples politiques d'exclusion a minima. Le nom de la
          catégorie ne vous dit pas où votre fonds se situe sur ce spectre ; ses documents, si.
        </p>
      </div>

      <h2>Un fonds Article 9 est-il forcément plus exigeant qu'un fonds Article 8 ?</h2>
      <p>
        En principe, l'Article 9 correspond au niveau d'ambition le plus élevé. En pratique, trois
        réalités empêchent d'en faire une échelle de qualité fiable.
      </p>
      <p>
        <strong>Premièrement, la classification est auto-déclarée.</strong> C'est la société de
        gestion qui choisit sa catégorie au moment de rédiger sa documentation, sans validation
        préalable d'un organisme indépendant. Le régulateur contrôle a posteriori la cohérence entre
        les déclarations et la gestion réelle, mais personne ne « décerne » l'Article 9 comme on
        décerne un label audité.
      </p>
      <p>
        <strong>Deuxièmement, le règlement ne fixe aucune exigence minimale de composition.</strong>{" "}
        C'est le constat, sévère, de l'Autorité des marchés financiers elle-même : dans sa{" "}
        <a
          href="https://www.amf-france.org/sites/institutionnel/files/private/2023-02/AMF%20SFDR%20minimum%20standards%20FR_0.pdf"
          target="_blank"
          rel="noreferrer"
        >
          proposition de révision publiée en février 2023
        </a>
        , l'AMF écrit qu'« à l'inverse d'un mécanisme de labellisation, SFDR ne prévoit pas
        d'exigences minimales », que le règlement et sa classification ne permettent pas d'apprécier
        le degré de durabilité réel des produits, et que leur application a « alimenté
        l'éco-blanchiment » — la notion d'investissement durable ayant donné lieu, selon ses termes,
        à « des conceptions très différentes de ce qu'est la durabilité ». Elle propose d'ailleurs
        d'introduire des critères environnementaux minimaux, précisément parce qu'il n'y en a pas.
      </p>
      <p>
        <strong>Troisièmement, l'étiquette ne remplace pas la stratégie.</strong> Un fonds Article 8
        construit sur des exclusions sectorielles strictes et un engagement actionnarial documenté
        peut être bien plus aligné avec vos valeurs qu'un fonds Article 9 dont la définition de
        l'investissement durable repose sur une méthodologie permissive. Ces notions —
        best-in-class, exclusion, engagement actionnarial — sont posées dans notre article{" "}
        <LienArticle slug="isr-esg-impact-investing-differences">
          ISR, ESG, impact investing : quelles différences réelles ?
        </LienArticle>{" "}
        ; la classification SFDR s'y superpose, elle ne les remplace pas.
      </p>

      <h2>Pourquoi 307 fonds ont-ils été déclassés d'Article 9 fin 2022 ?</h2>
      <p>
        L'épisode le plus instructif de la courte histoire de SFDR s'est joué au quatrième trimestre
        2022. À l'approche de l'entrée en application, le 1er janvier 2023, des normes techniques
        dites « de niveau 2 » (le{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022R1288"
          target="_blank"
          rel="noreferrer"
        >
          règlement délégué (UE) 2022/1288
        </a>
        , qui impose les annexes précontractuelles et périodiques standardisées), les régulateurs
        européens ont clarifié leur lecture : un fonds Article 9 doit être composé, hors liquidités
        et instruments de couverture, d'investissements durables au sens du règlement.
      </p>
      <p>
        Résultat : plutôt que de justifier chiffres à l'appui un portefeuille « 100 % durable », des
        centaines de sociétés de gestion ont préféré rétrograder leurs fonds. Selon Morningstar, 307
        fonds sont passés d'Article 9 à Article 8 sur le trimestre — environ 175 milliards d'euros
        d'actifs, 40 % de la catégorie. Certains fonds sont d'ailleurs remontés en Article 9 par la
        suite, une fois leur méthodologie consolidée : la classification bouge dans les deux sens.
      </p>
      <p>
        Deux lectures de cet épisode coexistent, et chacune contient une part de vérité. La première
        y voit la preuve que les promesses avaient dépassé les portefeuilles. La seconde, plus
        indulgente, y voit l'effet d'un texte flou : tant que « investissement durable » n'était pas
        précisé, des gérants prudents se sont reclassés par précaution juridique plus que par aveu
        de greenwashing. La leçon pour votre épargne, elle, ne fait pas débat :{" "}
        <strong>une catégorie déclarative peut être rendue du jour au lendemain</strong>. Un fonds
        ne « perd » pas son Article 9 comme on perd un label après un audit — il le rend en
        réécrivant sa documentation.
      </p>

      <h2>Que garantit vraiment la classification — et que ne garantit-elle pas ?</h2>
      <table>
        <thead>
          <tr>
            <th>Ce que la classification vous garantit</th>
            <th>Ce qu'elle ne vous garantit pas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Des <strong>engagements écrits et opposables</strong> : l'annexe précontractuelle
              chiffre une part minimale d'investissements alignés, dont le gérant ne peut s'écarter
              sans modifier ses documents
            </td>
            <td>
              Qu'un <strong>tiers indépendant a vérifié</strong> la réalité de ces engagements avant
              commercialisation : la classification est choisie par la société de gestion elle-même
            </td>
          </tr>
          <tr>
            <td>
              Un <strong>format standardisé et comparable</strong> : les annexes SFDR de deux fonds
              concurrents présentent les mêmes rubriques, dans le même ordre — comparer devient
              possible
            </td>
            <td>
              Qu'un secteur donné (fossiles, armement, tabac…) est{" "}
              <strong>exclu du portefeuille</strong> : le règlement n'impose aucune exclusion
              sectorielle
            </td>
          </tr>
          <tr>
            <td>
              Un <strong>reporting périodique</strong> : le fonds doit rendre compte chaque année de
              la tenue de ses engagements, dans un document que vous pouvez exiger
            </td>
            <td>
              Que le fonds correspond à <strong>vos valeurs personnelles</strong> : « durable » au
              sens d'une méthodologie de gérant n'est pas « éthique » au sens de vos propres
              critères
            </td>
          </tr>
          <tr>
            <td>
              Un <strong>levier de contrôle</strong> : un écart entre les déclarations et la gestion
              réelle expose la société de gestion à son régulateur
            </td>
            <td>
              La <strong>stabilité de la catégorie</strong> : un fonds peut se reclasser à la hausse
              comme à la baisse, l'histoire récente l'a montré à grande échelle
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Autrement dit : la classification SFDR ne vous garantit pas la vertu du fonds, mais elle
        vous garantit <em>des documents</em>. C'est moins vendeur — et beaucoup plus utile, à
        condition de les ouvrir.
      </p>

      <h2>Comment utiliser la classification SFDR pour vérifier un fonds ?</h2>
      <p>
        Voici notre méthode des <strong>4 D — Déclaré, Documenté, Détenu, Daté</strong> : quatre
        lectures, aucune compétence d'analyste requise, une vingtaine de minutes par fonds.
      </p>
      <ol>
        <li>
          <strong>Déclaré.</strong> Identifiez la catégorie du fonds : elle figure dans l'annexe
          SFDR jointe au prospectus, sur le site de la société de gestion, et souvent sur la fiche
          du fonds chez votre distributeur. Notez-la comme un point de départ — pas comme une
          conclusion.
        </li>
        <li>
          <strong>Documenté.</strong> Ouvrez l'annexe précontractuelle standardisée et cherchez
          trois chiffres : la part minimale d'investissements alignés avec les caractéristiques
          promues, la part minimale d'« investissements durables » au sens du règlement, et
          l'alignement éventuel sur la taxonomie verte européenne. Un fonds Article 8 qui ne
          s'engage que sur une part faible vous dit déjà beaucoup — nous détaillons ce que mesure ce
          troisième chiffre dans{" "}
          <LienArticle slug="taxonomie-verte-europeenne-epargne">
            notre analyse de la taxonomie verte et de votre épargne
          </LienArticle>
          .
        </li>
        <li>
          <strong>Détenu.</strong> Confrontez la promesse au portefeuille : l'inventaire du fonds
          est publié périodiquement par la société de gestion. Les dix premières lignes
          correspondent-elles à ce que l'annexe vous a laissé imaginer ? C'est le test le plus
          rapide qui existe contre les étiquettes trompeuses.
        </li>
        <li>
          <strong>Daté.</strong> Vérifiez la trajectoire : le fonds a-t-il changé de catégorie par
          le passé ? Le dernier rapport périodique confirme-t-il que les parts minimales annoncées
          ont été tenues ? Un engagement respecté année après année vaut plus que l'étiquette la
          plus ambitieuse.
        </li>
      </ol>
      <p>
        Pour situer cette classification parmi les autres tampons du marché — Label ISR, Greenfin,
        Finansol — notre <a href="/outils/decodeur-label">décodeur de labels</a> résume gratuitement
        ce que chacun garantit, ce qu'il ne garantit pas et où le vérifier. Il vous donne des pistes
        de lecture ; la vérification finale reste toujours le document officiel du fonds.
      </p>

      <h2>Les règles vont-elles changer ? (noms de fonds, SFDR 2.0)</h2>
      <p>Oui, et dans le bon sens pour l'épargnant : le cadre se durcit sur deux fronts.</p>
      <h3>Les noms de fonds sont désormais encadrés</h3>
      <p>
        Depuis le 21 novembre 2024 pour les nouveaux fonds, et depuis le 21 mai 2025 pour les fonds
        existants, les{" "}
        <a
          href="https://www.esma.europa.eu/sites/default/files/2024-08/ESMA34-1592494965-657_Guidelines_on_funds_names_using_ESG_or_sustainability_related_terms_FR.pdf"
          target="_blank"
          rel="noreferrer"
        >
          orientations de l'ESMA
        </a>{" "}
        (l'autorité européenne des marchés financiers) encadrent l'usage des termes « ESG », «
        durable », « vert », « impact » ou « transition » dans le nom même d'un fonds : au moins 80
        % des investissements doivent servir les caractéristiques ou l'objectif durable annoncés, et
        certains termes déclenchent en plus des exclusions inspirées des indices de référence
        climatiques européens. Un fonds dont le nom promet plus que son portefeuille doit renommer
        l'un ou ajuster l'autre.
      </p>
      <h3>SFDR 2.0 : vers de vraies catégories de produits</h3>
      <p>
        Surtout, la Commission européenne a présenté fin novembre 2025 une{" "}
        <a
          href="https://finance.ec.europa.eu/news/commission-proposes-improvements-sfdr-2025-11-21_en"
          target="_blank"
          rel="noreferrer"
        >
          proposition de révision du règlement
        </a>{" "}
        qui tire les leçons de la confusion actuelle : remplacer les « Article 8 » et « Article 9 »
        par de véritables catégories de produits assorties de critères minimaux — une catégorie «
        durable », une catégorie « transition » et une catégorie ESG de base, avec notamment
        l'exclusion, pour les deux premières, des entreprises développant de nouveaux projets
        d'énergies fossiles. Au moment où nous publions cet article, ce texte est en cours de
        négociation entre le Parlement et le Conseil : les catégories actuelles restent donc
        applicables, et le calendrier définitif n'est pas arrêté. Si vous lisez « Article 8 » ou «
        Article 9 » sur une fiche de fonds aujourd'hui, c'est bien le régime décrit dans cet article
        qui s'applique.
      </p>

      <h2>Vos questions sur les fonds Article 8 et Article 9</h2>

      <h3>Qui décide qu'un fonds est Article 8 ou Article 9 ?</h3>
      <p>
        La société de gestion elle-même, au moment de rédiger la documentation du fonds. Il n'y a ni
        candidature, ni audit préalable, ni certificat : la classification découle des ambitions que
        le gérant déclare et des obligations de publication qu'il accepte en conséquence. Le
        régulateur contrôle ensuite la cohérence entre ces déclarations et la gestion réelle.
      </p>

      <h3>Où trouver la classification SFDR d'un fonds ?</h3>
      <p>
        Dans l'annexe précontractuelle SFDR jointe au prospectus du fonds, disponible sur le site de
        la société de gestion — et généralement reprise sur la fiche du fonds chez votre
        distributeur ou votre assureur. Si vous ne la trouvez pas, demandez-la : sa communication
        fait partie des obligations d'information du producteur.
      </p>

      <h3>Un fonds Article 8 peut-il investir dans les énergies fossiles ?</h3>
      <p>
        Oui. Le règlement SFDR n'impose aucune exclusion sectorielle : un fonds Article 8 peut
        détenir des producteurs d'hydrocarbures si sa propre méthodologie le permet. Seules ses
        exclusions volontaires — écrites dans l'annexe SFDR et le prospectus — ou les contraintes
        liées à son nom (règles ESMA) limitent cette exposition. C'est l'annexe qu'il faut lire, pas
        la catégorie.
      </p>

      <h3>Un fonds Article 9 doit-il être investi à 100 % en investissements durables ?</h3>
      <p>
        Selon les clarifications apportées par les autorités européennes, un fonds Article 9 doit
        être composé d'investissements durables, à l'exception des liquidités et des instruments de
        couverture. La nuance essentielle : « durable » s'entend au sens de la méthodologie propre à
        chaque société de gestion, le règlement n'ayant pas fixé de seuils communs. Deux fonds « 100
        % durables » peuvent donc appliquer des définitions sensiblement différentes.
      </p>

      <h3>Quelle différence entre le Label ISR et la classification SFDR ?</h3>
      <p>
        Le Label ISR est un label d'État français : un référentiel public, une candidature, un audit
        par un organisme certificateur indépendant, une liste officielle des fonds labellisés. La
        classification SFDR est un régime européen de transparence auto-déclaré, sans audit
        préalable. Les deux se cumulent souvent — un fonds labellisé ISR est généralement classé
        Article 8 ou 9 — mais ne garantissent pas la même chose. Nous avons consacré une analyse
        complète à{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que le Label ISR garantit vraiment
        </LienArticle>
        .
      </p>

      <h3>Un fonds Article 9 rapporte-t-il moins qu'un fonds classique ?</h3>
      <p>
        Il n'existe pas de réponse établie : les études comparant la performance des fonds durables
        et conventionnels divergent selon les périodes, les univers et les méthodologies, et la
        catégorie Article 9 recouvre des stratégies trop hétérogènes pour autoriser une conclusion
        générale. Ce qui est certain, c'est que la classification SFDR ne dit rien de la performance
        : elle décrit des obligations de transparence, pas un profil de rendement. Comme tout
        placement en unités de compte, un fonds Article 8 ou 9 présente un risque de perte en
        capital.
      </p>

      <h3>Un fonds peut-il changer de catégorie SFDR ?</h3>
      <p>
        Oui, dans les deux sens, en modifiant sa documentation. La vague de fin 2022 — 307 fonds
        redescendus d'Article 9 en Article 8 en un trimestre selon Morningstar — l'a montré à grande
        échelle, et des reclassements à la hausse ont suivi. C'est un point de vigilance dans la
        durée : la catégorie qui a motivé votre souscription peut évoluer, d'où l'intérêt d'un suivi
        régulier de vos supports.
      </p>

      <h2>Lisez la classification comme un sommaire, pas comme une conclusion</h2>
      <p>
        Vous savez maintenant l'essentiel : « Article 8 » et « Article 9 » ne certifient pas la
        vertu d'un fonds, ils déclenchent des obligations de transparence. C'est à la fois moins et
        plus que ce que promettent les brochures — moins, parce qu'aucun auditeur indépendant ne se
        porte garant de l'étiquette ; plus, parce que ces annexes standardisées vous donnent, pour
        la première fois, des engagements chiffrés et comparables que vous pouvez opposer au gérant.
        La classification est un sommaire : elle vous dit où lire, pas quoi croire.
      </p>
      <p>
        Ignorer cette nuance a un coût réel. Choisir un fonds sur la seule foi de son étiquette,
        c'est accepter le risque de découvrir plus tard — au détour d'un reclassement ou d'un
        inventaire — que votre épargne finance ce que vous pensiez précisément avoir écarté. Et
        repousser la vérification ne la rend pas moins nécessaire : elle la rend simplement plus
        tardive, une fois les fonds déjà investis.
      </p>
      <p>
        Pour aller plus loin, la suite logique de cette lecture est notre{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          méthode pour repérer le greenwashing d'un fonds « vert »
        </LienArticle>{" "}
        : elle transforme les réflexes de cet article en grille de détection complète, annexes SFDR
        comprises. Et notre <a href="/outils/decodeur-label">décodeur de labels</a> reste ouvert
        pour situer chaque tampon du marché — SFDR, Label ISR, Greenfin, Finansol — à sa juste
        place.
      </p>
      <p>
        Et si vous préférez faire ces lectures accompagné, c'est notre métier : lors d'un premier
        échange offert, un conseiller du cabinet passe en revue avec vous les annexes SFDR et les
        inventaires de vos supports actuels — documents à l'appui, sans jargon et sans engagement.
      </p>
    </>
  );
}
