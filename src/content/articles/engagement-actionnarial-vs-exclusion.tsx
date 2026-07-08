import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "engagement-actionnarial-vs-exclusion",
  title: "Exclure ou engager : quelle stratégie ISR change vraiment les choses ?",
  excerpt:
    "Vendre une action ne coupe pas ses financements ; voter en assemblée peut faire bouger l'entreprise. Exclusion et engagement au banc d'essai, preuves à l'appui.",
  readingTime: "12 min",
  category: "Performance",
  date: "2026-06-01",
  tags: [
    "engagement actionnarial",
    "exclusion sectorielle",
    "désinvestissement",
    "vote en assemblée générale",
    "ISR",
  ],
  author: "Alexandre Pollet",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> exclure et engager ne répondent pas à la même question.
          L'exclusion garantit une chose immédiate et vérifiable : votre épargne ne détient plus —
          et ne tire plus profit — des activités que vous refusez. Mais la recherche académique
          montre que vendre des titres déjà en circulation prive rarement une grande entreprise de
          financement. L'engagement actionnarial — dialogue, vote en assemblée générale, résolutions
          — est le mécanisme dont l'effet sur les pratiques des entreprises est le mieux démontré
          empiriquement, à condition d'être réellement exercé : politique publiée, votes traçables,
          escalade prévue en cas d'échec. Les fonds sérieux combinent les deux. Votre travail
          d'épargnant n'est pas de choisir un camp : c'est de vérifier que la stratégie affichée est
          réellement mise en œuvre.
        </p>
      </div>

      <p>
        Vous comparez deux fonds « responsables ». Le premier affiche fièrement sa liste
        d'exclusions : ni charbon, ni tabac, ni armement controversé. Le second assume de conserver
        en portefeuille des entreprises très émettrices « pour les faire évoluer de l'intérieur »,
        vote en assemblée générale et publie des rapports de dialogue. Et vous voilà face à un doute
        symétrique : le second fonds n'est-il pas en train d'habiller de vertu le fait de tout
        garder ? Le premier n'est-il pas en train de se laver les mains en revendant ses titres… à
        quelqu'un que la question n'intéresse pas ?
      </p>
      <p>
        Ce doute n'a rien de naïf : c'est l'un des débats les plus sérieux de la finance
        responsable, et il divise jusqu'aux professionnels. Des ONG reprochent aux fonds
        d'engagement de servir d'alibi à l'inaction ; des chercheurs reprochent au désinvestissement
        de soulager la conscience sans toucher l'entreprise. Les deux critiques contiennent une part
        de vérité — et c'est précisément ce qui rend le sujet intéressant.
      </p>
      <p>
        Dans cet article : ce que recouvrent exactement l'exclusion et l'engagement actionnarial, ce
        que la recherche académique a réellement démontré sur l'impact de chacun, un tableau
        comparatif pour décider, ce que les labels et la réglementation en disent, l'effet de chaque
        stratégie sur la performance, et une méthode en quatre vérifications pour distinguer un
        fonds qui agit d'un fonds qui affiche.
      </p>

      <h2>Exclusion, engagement actionnarial : de quoi parle-t-on exactement ?</h2>

      <h3>L'exclusion : refuser de détenir</h3>
      <p>
        Exclure, c'est s'interdire d'acheter — ou vendre si on les détient — les titres
        d'entreprises dont l'activité contrevient aux critères du fonds. On distingue l'
        <strong>exclusion sectorielle</strong> (des secteurs entiers écartés : charbon, tabac, jeux
        d'argent, hydrocarbures non conventionnels…), généralement assortie de seuils de chiffre
        d'affaires pour traiter les entreprises diversifiées, et l'
        <strong>exclusion normative</strong> (des entreprises écartées pour violation de normes
        internationales : Pacte mondial des Nations unies, conventions interdisant les mines
        antipersonnel ou les armes à sous-munitions). La quasi-totalité des fonds ISR pratique au
        moins une forme d'exclusion — toute la question est celle de l'étendue et des seuils.
      </p>

      <h3>L'engagement actionnarial : rester pour peser</h3>
      <p>
        L'<strong>engagement actionnarial</strong> prend le problème à l'envers : plutôt que de
        vendre, l'investisseur reste au capital et utilise ses droits d'actionnaire pour infléchir
        les pratiques de l'entreprise. Concrètement : dialogue formalisé avec la direction,
        questions écrites ou orales en assemblée générale, vote sur les résolutions — y compris les
        résolutions climatiques dites « Say on Climate », par lesquelles les actionnaires se
        prononcent sur la stratégie climat —, dépôt de résolutions par des coalitions
        d'actionnaires, et, en dernier recours,
        <strong> escalade</strong> : vote contre la direction, déclaration publique, puis
        désinvestissement si le dialogue échoue. Pour situer ces deux approches dans le paysage plus
        large des stratégies responsables (best-in-class, fonds thématiques, impact investing),
        notre article{" "}
        <LienArticle slug="isr-esg-impact-investing-differences">
          ISR, ESG, impact investing : quelles différences réelles ?
        </LienArticle>{" "}
        pose l'ensemble du vocabulaire.
      </p>

      <h2>Vendre une action prive-t-elle vraiment l'entreprise de financement ?</h2>
      <p>
        C'est le point technique que les brochures passent sous silence, et il change toute la
        discussion. Quand un fonds vend les actions d'une entreprise cotée, il les vend sur le
        <strong> marché secondaire</strong> : un autre investisseur les achète, et pas un euro ne
        sort des caisses de l'entreprise. Celle-ci a encaissé l'argent une seule fois, au moment de
        l'émission des titres. Pour qu'un désinvestissement renchérisse réellement son financement,
        il faudrait qu'une part massive des investisseurs s'y mette — au point de peser sur le cours
        et sur le coût des levées de capitaux futures.
      </p>
      <p>
        La recherche académique a examiné la question. Une revue de littérature de référence,
        publiée en 2020 dans <em>Organization &amp; Environment</em> par Julian Kölbel et ses
        co-auteurs (
        <a
          href="https://journals.sagepub.com/doi/10.1177/1086026620919202"
          target="_blank"
          rel="noreferrer"
        >
          « Can Sustainable Investing Save the World? »
        </a>
        ), conclut que l'impact de l'allocation de capital — dont l'exclusion — n'est que
        <strong> partiellement démontré</strong> : l'effet existe surtout pour les entreprises
        petites, jeunes ou dépendantes de financements nouveaux, et reste faible pour les grandes
        capitalisations, dont les titres trouvent immédiatement preneur. Le canal le plus tangible
        est le <strong>marché primaire</strong> : refuser de souscrire à une émission d'obligations,
        à une augmentation de capital ou à un crédit bancaire prive, lui, l'entreprise d'argent
        frais.
      </p>
      <p>
        Faut-il en conclure que l'exclusion « ne sert à rien » ? Non — mais il faut être précis sur
        ce qu'elle accomplit. Elle garantit d'abord une{" "}
        <strong>cohérence immédiate et vérifiable</strong> : vos revenus d'épargne ne proviennent
        plus de dividendes ou de plus-values tirés d'activités que vous refusez. C'est la seule
        stratégie qui offre cette garantie-là, et pour beaucoup d'épargnants c'est la motivation
        première — parfaitement légitime. Elle contribue ensuite, de façon plus diffuse, à la
        construction de normes : un secteur massivement exclu devient plus coûteux à assurer, à
        recruter, à refinancer. Cet effet indirect est réel dans son principe, mais les mêmes
        travaux académiques soulignent qu'il reste difficile à démontrer empiriquement — l'honnêteté
        oblige à le dire.
      </p>
      <div className="callout">
        <p>
          <strong>Le malentendu à dissiper :</strong> l'exclusion tient deux promesses très
          différentes. « Je ne veux plus profiter de cette activité » — cette promesse-là est tenue
          à l'instant même où le fonds vend. « Je vais priver cette entreprise d'argent » —
          celle-là, pour une grande entreprise cotée, est rarement tenue par la seule vente
          d'actions. Un fonds d'exclusion honnête vous promet la première, pas la seconde.
        </p>
      </div>

      <h2>L'engagement actionnarial change-t-il vraiment les pratiques des entreprises ?</h2>
      <p>
        Sur ce point, la littérature académique est plus affirmative. La même revue de littérature
        conclut que l'engagement actionnarial est le mécanisme d'impact
        <strong> le mieux démontré empiriquement</strong> : plusieurs études mesurent des
        améliorations concrètes des pratiques environnementales, sociales ou de gouvernance à la
        suite de campagnes d'engagement. Les campagnes aboutissent plus souvent quand la demande est
        précise, raisonnablement coûteuse à mettre en œuvre pour l'entreprise, et portée par des
        investisseurs qui pèsent au capital — d'où l'importance des coalitions d'actionnaires, qui
        mutualisent ce poids face aux plus gros émetteurs.
      </p>
      <p>
        L'engagement a aussi un avantage décisif pour l'épargnant sceptique : en France, il laisse
        des traces écrites obligatoires. Depuis la transposition de la directive européenne sur les
        droits des actionnaires (dite SRD II) par la loi PACTE et le{" "}
        <a
          href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000039424586"
          target="_blank"
          rel="noreferrer"
        >
          décret n° 2019-1235 du 27 novembre 2019
        </a>
        , les sociétés de gestion doivent publier une{" "}
        <strong>politique d'engagement actionnarial</strong> et un compte rendu annuel de sa mise en
        œuvre — ou expliquer publiquement pourquoi elles ne le font pas. Politique de vote, bilan
        des dialogues menés, sens des votes en assemblée générale : ces documents existent, sont en
        accès libre sur les sites des sociétés de gestion, et se lisent.
      </p>
      <p>
        Reste la critique, et elle mérite d'être exposée sans caricature. Côté partisans de
        l'exclusion : un engagement sans calendrier ni escalade peut durer dix ans sans résultat,
        tout en servant de caution — « nous dialoguons » devient une raison de tout conserver. Le
        dialogue ne transformera pas non plus le cœur de métier d'une entreprise dont le modèle même
        est en cause. Côté partisans de l'engagement : exclure revient à céder ses droits de vote,
        souvent à des investisseurs indifférents au sujet — la chaise laissée vide ne reste pas
        vide. Aucune de ces deux objections ne réfute l'autre stratégie : elles délimitent, en
        creux, ce que chacune peut et ne peut pas accomplir.
      </p>

      <h2>Exclusion ou engagement : le comparatif pour décider</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Exclusion</th>
            <th>Engagement actionnarial</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Ce que ça vous garantit</strong>
            </td>
            <td>
              Votre épargne ne détient plus l'activité refusée et n'en tire plus aucun revenu —
              effet immédiat et vérifiable dans l'inventaire du fonds
            </td>
            <td>
              Rien d'immédiat : une démarche d'influence, dont les résultats se mesurent sur des
              années et ne sont jamais acquis d'avance
            </td>
          </tr>
          <tr>
            <td>
              <strong>Mécanisme d'impact visé</strong>
            </td>
            <td>
              Renchérir le financement du secteur exclu et construire une norme sociale — effet
              surtout tangible sur le marché primaire et les petites entreprises
            </td>
            <td>
              Modifier les pratiques de l'entreprise de l'intérieur : dialogue, vote, résolutions,
              escalade
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ce que montre la recherche</strong>
            </td>
            <td>
              Impact sur les entreprises partiellement démontré ; faible sur les grandes
              capitalisations via la seule vente d'actions
            </td>
            <td>
              Mécanisme le mieux documenté empiriquement — succès plus fréquent si demande précise
              et coalition pesant au capital
            </td>
          </tr>
          <tr>
            <td>
              <strong>Effet sur l'univers d'investissement</strong>
            </td>
            <td>
              Le réduit — d'autant plus que les exclusions sont larges, avec un écart de composition
              croissant vis-à-vis des grands indices
            </td>
            <td>Aucun : l'univers reste entier, le coût est en travail d'analyse et de suivi</td>
          </tr>
          <tr>
            <td>
              <strong>Risque de dérive</strong>
            </td>
            <td>
              Des exclusions cosmétiques : seuils si élevés ou périmètre si étroit que presque rien
              n'est réellement écarté
            </td>
            <td>
              L'engagement de façade : un « dialogue » sans demande datée, sans vote dissident, sans
              conséquence en cas d'échec
            </td>
          </tr>
          <tr>
            <td>
              <strong>Comment le vérifier</strong>
            </td>
            <td>Liste d'exclusions et seuils chiffrés dans le prospectus, puis inventaire</td>
            <td>
              Politique d'engagement, compte rendu annuel et relevé des votes publiés par la société
              de gestion
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Ce tableau suggère la vraie réponse : ces deux stratégies ne sont pas concurrentes, elles ne
        travaillent pas au même endroit. L'exclusion s'impose pour les activités qu'aucun dialogue
        ne fera évoluer — on n'« engage » pas un fabricant d'armes controversées vers un autre
        métier. L'engagement prend le relais là où une pratique peut changer : trajectoire
        d'émissions, gouvernance, chaîne de sous-traitance. Les fonds les plus solides articulent
        explicitement les deux, avec une frontière écrite entre ce qui est exclu d'office et ce qui
        est engagé avec échéance.
      </p>

      <h2>Que disent les labels et la réglementation française ?</h2>
      <p>
        Longtemps, le principal label français a été critiqué précisément sur ce débat : le Label
        ISR historique n'imposait aucune exclusion sectorielle, au nom d'une approche «
        best-in-class » et du pari de l'accompagnement. Ce débat-là a été tranché par la réforme du
        référentiel : depuis le 1er mars 2024 pour les nouvelles candidatures — et depuis le 1er
        janvier 2025 pour les fonds déjà labellisés —, le{" "}
        <a
          href="https://www.tresor.economie.gouv.fr/Articles/2023/12/11/label-isr-publication-du-nouveau-referentiel"
          target="_blank"
          rel="noreferrer"
        >
          nouveau référentiel publié par le ministère de l'Économie
        </a>{" "}
        exclut les entreprises qui exploitent du charbon ou des hydrocarbures non conventionnels,
        ainsi que celles qui lancent de nouveaux projets d'exploration, d'exploitation ou de
        raffinage d'hydrocarbures. Autrement dit : même le label français le plus attaché à la
        logique d'accompagnement a fini par poser un socle d'exclusions — tout en continuant
        d'attendre des fonds un suivi des entreprises en transition. Nous détaillons ce que ce label
        garantit (et ne garantit pas) dans notre analyse{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          du Label ISR et de ses garanties réelles
        </LienArticle>
        .
      </p>
      <p>
        La leçon réglementaire rejoint la leçon académique : le cadre converge vers un
        <strong> plancher d'exclusions</strong> pour les activités jugées incompatibles avec la
        transition, <strong>plus</strong> une exigence de transparence sur l'engagement et le vote.
        La classification européenne SFDR, elle, n'impose ni l'un ni l'autre — elle oblige seulement
        à documenter ce que le fonds déclare faire, ce qui en fait un outil de vérification plus
        qu'un arbitre du débat.
      </p>

      <h2>Et la performance : exclure coûte-t-il du rendement ?</h2>
      <p>
        Le débat a aussi une dimension financière, et elle est plus subtile qu'on ne le présente.
        Mécaniquement, exclure réduit l'univers d'investissement : plus les exclusions sont larges,
        plus le portefeuille s'écarte de la composition des grands indices, et plus sa performance
        peut diverger — dans les deux sens. Les années où les secteurs exclus flambent, un fonds
        d'exclusion reste à quai ; les années où ils dévissent, il est protégé. Les études comparant
        fonds d'exclusion et fonds conventionnels aboutissent à des conclusions contradictoires
        selon les périodes, les univers et les méthodologies retenues — nous consacrons{" "}
        <LienArticle slug="investir-ethique-performance-chiffres">
          une analyse entière à ce que disent vraiment les chiffres de la performance ISR
        </LienArticle>
        .
      </p>
      <p>
        L'engagement, lui, ne restreint pas l'univers : son coût est ailleurs, dans les équipes et
        le temps d'analyse qu'exige un dialogue sérieux — un coût qui se retrouve dans les frais de
        gestion, et qui ne produit rien si l'engagement est de façade. Retenez surtout que
        l'argument de performance ne tranche pas ce débat : aucune des deux stratégies n'a démontré
        d'avantage ou de handicap systématique. Et dans les deux cas, un fonds investi en actions
        reste un placement avec un risque de perte en capital — les performances passées ne
        préjugent pas des performances futures.
      </p>

      <h2>Comment vérifier ce qu'un fonds fait vraiment ? La preuve par quatre</h2>
      <p>
        Qu'un fonds se réclame de l'exclusion, de l'engagement ou des deux, la vérification tient en
        quatre lectures — comptez une demi-heure, aucun jargon d'analyste requis.
      </p>
      <ol>
        <li>
          <strong>Des seuils, pas des slogans.</strong> Ouvrez le prospectus et l'annexe SFDR : la
          politique d'exclusion doit être chiffrée (secteurs, seuils de chiffre d'affaires,
          périmètre). « Nous excluons les activités les plus controversées » sans chiffre n'engage à
          rien ; « exclusion au-delà de X % du chiffre d'affaires » se vérifie dans l'inventaire.
        </li>
        <li>
          <strong>Une politique d'engagement publiée.</strong> Cherchez sur le site de la société de
          gestion sa politique d'engagement actionnarial et le compte rendu annuel de mise en œuvre
          — des documents qu'elle doit publier ou justifier de ne pas publier. Une politique sans
          compte rendu, c'est une promesse sans bilan.
        </li>
        <li>
          <strong>Le relevé des votes.</strong> Le document le plus révélateur : la société de
          gestion vote-t-elle parfois contre les directions ? Soutient-elle les résolutions
          climatiques ? Un « engagement » qui approuve 100 % des résolutions du management, année
          après année, ressemble davantage à une signature qu'à une stratégie.
        </li>
        <li>
          <strong>L'escalade écrite.</strong> Que se passe-t-il quand le dialogue échoue ? Les
          politiques sérieuses le précisent : vote sanction, déclaration publique, puis
          désinvestissement sous échéance. Sans clause de sortie, l'engagement n'a pas de plancher —
          et c'est précisément là que se loge l'engagement de façade.
        </li>
      </ol>
      <p>
        Pour situer les tampons que vous croiserez en chemin — Label ISR, Greenfin, Finansol,
        classification SFDR — notre <a href="/outils/decodeur-label">décodeur de labels</a> résume
        gratuitement ce que chacun garantit et où le vérifier. Il vous donne des pistes de lecture ;
        la référence reste toujours le document officiel du fonds.
      </p>

      <h2>Vos questions sur l'exclusion et l'engagement actionnarial</h2>

      <h3>Un fonds peut-il pratiquer à la fois l'exclusion et l'engagement ?</h3>
      <p>
        Oui, et c'est même la configuration la plus courante parmi les fonds ISR sérieux : un socle
        d'exclusions pour les activités jugées incompatibles avec la stratégie du fonds, et une
        démarche d'engagement sur les entreprises conservées en portefeuille. Les deux approches ne
        s'opposent que dans les débats — dans la construction d'un fonds, elles s'additionnent.
      </p>

      <h3>Quelle différence entre exclusion sectorielle et exclusion normative ?</h3>
      <p>
        L'exclusion sectorielle écarte des secteurs d'activité entiers (charbon, tabac, jeux
        d'argent…), généralement au-delà d'un seuil de chiffre d'affaires. L'exclusion normative
        écarte des entreprises, quel que soit leur secteur, pour violation de normes internationales
        — droits humains, droit du travail, environnement, corruption. Un fonds peut pratiquer
        l'une, l'autre ou les deux : le prospectus le précise.
      </p>

      <h3>Qu'est-ce qu'une résolution climatique, ou « Say on Climate » ?</h3>
      <p>
        C'est une résolution soumise au vote des actionnaires en assemblée générale portant sur la
        stratégie climat de l'entreprise — soit à l'initiative de la direction, soit déposée par des
        actionnaires. Le vote est le plus souvent consultatif, mais un score de défiance élevé est
        un signal public difficile à ignorer pour un conseil d'administration. Le sens des votes de
        votre société de gestion sur ces résolutions figure dans son relevé de votes.
      </p>

      <h3>Si je vends mes parts d'un fonds, l'entreprise en portefeuille le sent-elle ?</h3>
      <p>
        Non, pas directement : vous vendez vos parts au fonds, qui ajuste son portefeuille sur le
        marché secondaire — l'entreprise ne voit passer aucun flux. Votre levier d'épargnant est
        indirect mais réel : en choisissant des fonds dont les exclusions et l'engagement sont
        documentés, vous déplacez la demande vers les gérants qui font ce travail, et c'est cette
        demande agrégée qui structure l'offre.
      </p>

      <h3>L'engagement actionnarial n'est-il pas juste un alibi pour tout garder ?</h3>
      <p>
        Il peut l'être — c'est la critique la plus sérieuse qui lui est adressée, et la recherche
        comme les ONG documentent l'existence d'engagements de pure forme. La différence entre un
        engagement réel et un alibi se lit dans trois documents : une demande précise et datée, des
        votes qui divergent parfois de la direction, et une conséquence écrite en cas d'échec du
        dialogue. Sans ces trois éléments, le scepticisme est fondé.
      </p>

      <h3>Un fonds d'exclusion rapporte-t-il moins qu'un fonds classique ?</h3>
      <p>
        Il n'existe pas de réponse établie : les études divergent selon les périodes et les
        méthodologies, et l'écart de composition avec les grands indices joue dans les deux sens
        selon les années. Ce qui est certain, c'est qu'exclure augmente la probabilité que la
        performance s'écarte de celle du marché — en mieux ou en moins bien — et qu'aucune stratégie
        n'élimine le risque de perte en capital.
      </p>

      <h3>Où trouver la politique d'engagement des fonds de mon assurance vie ?</h3>
      <p>
        Identifiez d'abord la société de gestion de chaque support (elle figure sur le DIC, le
        document d'informations clés). Sa politique d'engagement actionnarial, sa politique de vote
        et leurs comptes rendus annuels sont publiés sur son site, le plus souvent dans une rubrique
        « informations réglementaires ». Si vous ne les trouvez pas, demandez-les à votre
        distributeur : leur communication fait partie du jeu.
      </p>

      <h2>Exclure dit ce que vous refusez de financer ; engager tente de changer le reste</h2>
      <p>
        Vous avez maintenant la réponse à la question de départ, et elle est plus utile qu'un
        verdict : les deux stratégies « changent les choses », mais pas les mêmes. L'exclusion
        change immédiatement ce que <em>votre épargne</em> détient et cautionne — c'est la stratégie
        de la cohérence. L'engagement peut changer, plus lentement et sans garantie, ce que{" "}
        <em>les entreprises</em> font — c'est la stratégie de l'influence, et c'est celle dont
        l'effet sur les pratiques est le mieux démontré par la recherche. Notre grille de lecture,
        en tant que cabinet : ne pas choisir un camp, mais exiger des deux la même chose — des
        seuils écrits d'un côté, des votes et une escalade traçables de l'autre.
      </p>
      <p>
        Ne pas trancher, en revanche, a un coût : tant que vous ne regardez ni les exclusions ni
        l'engagement de vos supports actuels, votre épargne applique la stratégie de quelqu'un
        d'autre — souvent aucune des deux. Et c'est précisément dans cet angle mort que prospèrent
        les fonds qui affichent sans agir.
      </p>
      <p>
        La suite logique de cette lecture : notre{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          méthode complète pour repérer le greenwashing d'un fonds « vert »
        </LienArticle>
        , qui intègre la vérification des exclusions et de l'engagement dans une grille de détection
        plus large — les quatre réflexes de cet article y trouvent leur place. Et notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> reste ouvert pour décoder chaque
        tampon croisé en route.
      </p>
      <p>
        Si vous préférez faire cet exercice accompagné, c'est notre métier : lors d'un premier
        échange offert, un conseiller du cabinet passe en revue avec vous les politiques
        d'exclusion, d'engagement et de vote des supports que vous détenez déjà — documents à
        l'appui, sans jargon et sans engagement de votre part.
      </p>
    </>
  );
}
