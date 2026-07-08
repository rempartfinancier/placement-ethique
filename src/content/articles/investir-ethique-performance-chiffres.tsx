import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "investir-ethique-performance-chiffres",
  title: "Investir éthique rapporte-t-il moins ? Ce que disent vraiment les chiffres",
  excerpt:
    "Méta-études académiques et données officielles ESMA ne montrent aucune pénalité structurelle de rendement — mais pas de prime garantie non plus. Les chiffres, sourcés.",
  readingTime: "11 min",
  category: "Performance",
  date: "2026-05-26",
  tags: ["performance ISR", "ESG", "rendement", "ESMA", "études académiques", "frais"],
  author: "Sébastien Petrisot",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> non, pas structurellement. La plus vaste synthèse académique
          disponible — plus de 2 000 études — ne trouve pas de pénalité de performance associée aux
          critères ESG, et les données officielles du régulateur européen des marchés (ESMA)
          montrent, sur 2020-2024, des fonds actions durables au coude-à-coude avec l'ensemble du
          marché, pour des frais courants en moyenne inférieurs. Mais il n'existe pas non plus de
          prime garantie : un fonds éthique s'écarte du marché par construction, et cet écart joue
          dans les deux sens selon les années — devant en 2020, derrière en 2022 et 2024. Le vrai
          déterminant de votre rendement à long terme reste le trio frais, diversification,
          régularité. Et comme toujours : les performances passées ne préjugent pas des performances
          futures.
        </p>
      </div>

      <p>
        Vous êtes prêt à orienter votre épargne vers des placements alignés avec vos valeurs, mais
        une petite phrase vous retient — celle qu'on entend partout : « l'éthique, ça se paie ». Un
        conseiller bancaire qui fronce les sourcils, un proche qui cite la flambée des actions
        pétrolières de 2022, un forum qui tranche : « l'ISR, c'est pour se faire plaisir, pas pour
        gagner de l'argent ». Et vous vous demandez si donner du sens à votre épargne revient à
        accepter, en silence, un rendement au rabais.
      </p>
      <p>
        La question mérite mieux qu'un slogan — dans un sens comme dans l'autre. L'investissement
        socialement responsable (ISR) consiste à intégrer des critères environnementaux, sociaux et
        de gouvernance (ESG) dans la sélection des placements : exclure certains secteurs,
        privilégier les entreprises les mieux notées, peser sur leurs pratiques en tant
        qu'actionnaire. Restreindre ainsi son univers d'investissement a-t-il un coût financier ?
        C'est une vraie question d'allocation, étudiée par la recherche depuis plus de trente ans —
        et, depuis quelques années, documentée par les régulateurs eux-mêmes.
      </p>
      <p>
        Dans cet article : ce que disent réellement les grandes synthèses académiques, ce que
        montrent les chiffres officiels européens année par année, pourquoi les fonds durables
        s'écartent du marché dans les deux sens, ce qu'ils coûtent en frais, et une méthode simple
        pour comparer honnêtement un fonds éthique à un fonds classique.
      </p>

      <h2>D'où vient l'idée qu'investir éthique rapporte moins ?</h2>
      <p>
        L'argument n'est pas un mythe de comptoir : il vient de la théorie financière classique. Si
        vous excluez des secteurs entiers de votre univers d'investissement — énergies fossiles,
        tabac, armement… — vous renoncez mécaniquement à certaines opportunités et vous réduisez
        votre diversification. À risque égal, un portefeuille contraint devrait donc, en théorie,
        faire au mieux aussi bien qu'un portefeuille libre. C'est un raisonnement sérieux, défendu
        par des gens sérieux.
      </p>
      <p>
        Le raisonnement inverse est tout aussi cohérent : les critères ESG ne sont pas seulement des
        convictions, ce sont aussi des filtres de risque. Une entreprise mal gouvernée, exposée aux
        sanctions, aux contentieux environnementaux ou aux actifs échoués (<em>stranded assets</em>{" "}
        : des réserves fossiles qui pourraient ne jamais être exploitées) porte des risques
        financiers bien réels. Écarter ces profils, c'est peut-être renoncer à des opportunités — ou
        éviter des accidents.
      </p>
      <p>
        Deux raisonnements cohérents, deux prédictions opposées. C'est précisément pour cela que la
        réponse ne peut être qu'empirique : il faut regarder les données.
      </p>

      <h2>Que disent les études académiques sur la performance des fonds éthiques ?</h2>
      <p>
        La référence du domaine reste la méta-analyse de Gunnar Friede, Timo Busch et Alexander
        Bassen, publiée en 2015 dans le{" "}
        <a
          href="https://www.tandfonline.com/doi/full/10.1080/20430795.2015.1118917"
          target="_blank"
          rel="noreferrer"
        >
          Journal of Sustainable Finance &amp; Investment
        </a>
        , qui agrège les résultats d'environ 2 200 études empiriques sur le lien entre critères ESG
        et performance financière. Son résultat central : environ 90 % des études ne trouvent{" "}
        <strong>pas de relation négative</strong>, et une large majorité de celles qui trouvent une
        relation la trouvent positive. Nuance importante et honnête : ce constat est le plus net au
        niveau des entreprises (les sociétés bien notées ESG tendent à afficher de meilleurs
        fondamentaux) ; au niveau des <em>portefeuilles</em> — la situation qui ressemble le plus à
        la vôtre —, la relation ressort le plus souvent neutre une fois les frais et le risque pris
        en compte.
      </p>
      <p>
        Plus récemment, le{" "}
        <a
          href="https://www.stern.nyu.edu/experience-stern/faculty-research/new-meta-analysis-nyu-stern-center-sustainable-business-and-rockefeller-asset-management-finds-esg"
          target="_blank"
          rel="noreferrer"
        >
          Center for Sustainable Business de NYU Stern, avec Rockefeller Asset Management
        </a>
        , a passé en revue 1 141 études publiées entre 2015 et 2020. Côté études d'investissement —
        celles qui comparent des portefeuilles durables à des portefeuilles conventionnels —, 59 %
        constatent une performance similaire ou supérieure aux approches classiques, et 14 %
        seulement une performance inférieure, le reste étant mitigé. Les auteurs relèvent aussi une
        meilleure résistance des stratégies durables dans les épisodes de crise, et des résultats
        plus favorables sur longue période que sur courte.
      </p>
      <p>
        Faut-il en conclure que l'ISR rapporte <em>plus</em> ? Non — et le dire fait partie de la
        rigueur. Ce champ de recherche est traversé d'études contradictoires selon les périodes, les
        zones géographiques et les méthodologies retenues. Ce qui se dégage des synthèses est un
        non-résultat précieux : <strong>aucune pénalité systématique n'est démontrée</strong> — et
        aucune prime systématique ne l'est solidement non plus.
      </p>

      <h2>Que montrent les chiffres officiels du régulateur européen ?</h2>
      <p>
        Depuis quelques années, la question a quitté le seul terrain académique : l'ESMA, l'autorité
        européenne des marchés financiers, compare chaque année les coûts et les performances des
        fonds ESG et non ESG vendus aux particuliers en Europe. C'est la source la plus neutre
        disponible — ni un institut militant, ni un vendeur de fonds.
      </p>
      <p>
        Une{" "}
        <a
          href="https://www.esma.europa.eu/press-news/esma-news/esma-study-looks-reasons-lower-costs-in-esg-funds"
          target="_blank"
          rel="noreferrer"
        >
          étude dédiée de l'ESMA publiée en mai 2022
        </a>{" "}
        concluait que les fonds actions ESG (hors ETF) avaient été à la fois{" "}
        <strong>moins chers et plus performants</strong> que leurs équivalents non ESG en 2019 et
        2020 — un avantage qui subsistait après correction des différences de composition (plus de
        grandes capitalisations et de marchés développés dans les fonds ESG). Sur les données 2021,
        le{" "}
        <a
          href="https://www.esma.europa.eu/press-news/esma-news/costs-retail-investment-products-continue-slow-decline"
          target="_blank"
          rel="noreferrer"
        >
          rapport annuel suivant
        </a>{" "}
        relevait encore des fonds ESG en moyenne devant leurs équivalents et moins chers, avec des
        écarts selon les classes d'actifs.
      </p>
      <p>
        La dernière édition de ce{" "}
        <a
          href="https://www.esma.europa.eu/sites/default/files/2026-03/ESMA50-1949966494-4065_Market_Report_-_Costs_and_Performance_of_EU_Retail_Investment_Products.pdf"
          target="_blank"
          rel="noreferrer"
        >
          rapport officiel (données arrêtées à fin 2024)
        </a>{" "}
        raconte l'autre versant : en 2024, les fonds ESG ont fait moins bien que leurs équivalents
        non ESG, et les fonds classés SFDR Article 9 moins bien que les fonds Article 6. Sur cinq
        ans, en revanche, le tableau redevient équilibré :
      </p>
      <table>
        <thead>
          <tr>
            <th>Catégorie de fonds (UCITS de détail, EU27)</th>
            <th>Perf. nette annualisée 2020-2024 — ensemble des fonds</th>
            <th>Perf. nette annualisée 2020-2024 — fonds ESG</th>
            <th>Frais courants annuels — ensemble</th>
            <th>Frais courants annuels — ESG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Actions (hors ETF)</strong>
            </td>
            <td>7,5 %</td>
            <td>7,7 %</td>
            <td>1,38 %</td>
            <td>1,31 %</td>
          </tr>
          <tr>
            <td>
              <strong>Obligations (hors ETF)</strong>
            </td>
            <td>0,0 %</td>
            <td>−0,4 %</td>
            <td>0,87 %</td>
            <td>0,70 %</td>
          </tr>
          <tr>
            <td>
              <strong>Mixtes</strong>
            </td>
            <td>2,7 %</td>
            <td>2,1 %</td>
            <td>1,47 %</td>
            <td>1,53 %</td>
          </tr>
          <tr>
            <td>
              <strong>ETF actions</strong>
            </td>
            <td>10,1 %</td>
            <td>9,2 %</td>
            <td>0,22 %</td>
            <td>0,25 %</td>
          </tr>
        </tbody>
      </table>
      <p>
        Lecture honnête de ce tableau : sur la classe d'actifs qui pèse le plus dans une épargne de
        long terme — les actions —, les fonds ESG font légèrement mieux que l'ensemble du marché sur
        cinq ans, avec des frais courants légèrement inférieurs. Sur l'obligataire, les mixtes et
        les ETF actions, ils sont légèrement derrière. Aucune catégorie ne montre l'effondrement que
        prédit le cliché, ni la surperformance que promettent certaines plaquettes. Précisions de
        méthode : la colonne « ensemble des fonds » inclut les fonds ESG eux-mêmes, et la définition
        « ESG » retenue par l'ESMA s'appuie sur les attributs de durabilité de Morningstar. Surtout,
        ces chiffres décrivent une période passée précise : ils ne préjugent pas des performances
        futures, et tout placement en fonds — éthique ou non — présente un risque de perte en
        capital.
      </p>

      <h2>Pourquoi les fonds éthiques font-ils moins bien certaines années ?</h2>
      <p>
        Parce qu'ils ne répliquent pas le marché — c'est leur raison d'être. Un fonds durable
        typique sous-pondère ou exclut les producteurs d'énergies fossiles et surpondère des
        secteurs jugés mieux notés sur les critères ESG : technologie, santé, grandes
        capitalisations de qualité. Cette empreinte sectorielle crée un écart avec les indices
        larges, qui se retourne au gré des cycles :
      </p>
      <ul>
        <li>
          <strong>2020, année faste :</strong> portés par la technologie et pénalisés par rien (le
          pétrole s'effondrait), trois fonds actions durables sur quatre ont terminé dans la moitié
          haute de leur catégorie, selon{" "}
          <a
            href="https://www.morningstar.com/funds/sustainable-equity-funds-outperform-traditional-peers-2020"
            target="_blank"
            rel="noreferrer"
          >
            le recensement de Morningstar
          </a>
          .
        </li>
        <li>
          <strong>2022, année miroir :</strong> la flambée des cours de l'énergie — secteur dont
          beaucoup de fonds durables sont structurellement absents — et la chute des valeurs
          technologiques qu'ils surpondèrent ont inversé le tableau : nombre de fonds durables ont
          terminé derrière le marché.
        </li>
        <li>
          <strong>2024, même mécanique :</strong> le rapport ESMA cité plus haut constate une
          sous-performance des fonds ESG, et des fonds Article 9 par rapport aux fonds Article 6.
        </li>
      </ul>
      <p>
        La leçon n'est pas « l'éthique sous-performe » ni « l'éthique surperforme » : c'est qu'un
        portefeuille qui s'écarte du marché par construction s'en écartera aussi en performance,
        dans les deux sens, année après année. Un fonds éthique se juge donc sur un cycle complet —
        au moins cinq ans, incluant une bonne et une mauvaise année pour ses biais sectoriels —
        jamais sur le dernier millésime.
      </p>
      <div className="callout">
        <p>
          <strong>Le piège de lecture le plus courant :</strong> comparer un fonds actions monde
          durable au CAC 40, ou un fonds obligataire vert à un livret. Un fonds s'évalue contre son
          indice de référence — celui qui figure dans son DIC (document d'informations clés) — à
          période identique et frais comparables. Toute autre comparaison produit une conclusion,
          mais pas une information.
        </p>
      </div>

      <h2>Les fonds éthiques coûtent-ils plus cher en frais ?</h2>
      <p>
        C'est l'autre moitié de la question du rendement, et la réponse des données officielles est
        contre-intuitive : non. Édition après édition, le rapport de l'ESMA constate que les frais
        courants des fonds ESG sont en moyenne <strong>inférieurs ou comparables</strong> à ceux de
        leurs équivalents classiques — c'était encore le cas sur les données 2024, comme le montre
        le tableau ci-dessus, avec des exceptions à connaître (les ETF actions ESG et les fonds
        mixtes ESG de l'échantillon ressortent légèrement au-dessus). Le « surcoût de l'éthique »
        que l'on vous oppose parfois n'est pas confirmé par les chiffres européens.
      </p>
      <p>
        En revanche, ce qui ampute réellement un rendement final, ce sont les frais
        <em> empilés</em> : frais d'entrée, frais de gestion du fonds, frais de l'enveloppe
        (assurance vie, PER, compte-titres) qui s'additionnent année après année. Un écart de 0,5
        point de frais annuels pèse, sur vingt ans, du même ordre que les écarts de performance
        mesurés ci-dessus entre fonds ESG et non ESG — à la différence près que les frais, eux, sont
        certains et connus d'avance. C'est un calcul que vous pouvez faire vous-même : notre{" "}
        <a href="/outils/simulateur">simulateur d'épargne</a> projette votre effort d'épargne avec
        les frais réels, ligne par ligne, et vous montre ce que chaque strate coûte à l'arrivée.
      </p>

      <h2>Comment comparer honnêtement la performance d'un fonds éthique ?</h2>
      <p>
        Voici la règle que nous appliquons en rendez-vous, facile à retenir : la règle des{" "}
        <strong>« quatre mêmes »</strong>. Une comparaison de performance n'a de sens que si elle se
        fait à conditions identiques.
      </p>
      <ol>
        <li>
          <strong>Même univers.</strong> Comparez le fonds à son indice de référence et à sa
          catégorie (actions monde, actions Europe, obligations euro…), indiqués dans le DIC — pas à
          l'indice qui fait l'actualité. Un fonds actions Europe durable ne se mesure ni au S&amp;P
          500, ni au Livret A.
        </li>
        <li>
          <strong>Même période.</strong> Cinq ans minimum, en incluant au moins une année
          défavorable aux biais sectoriels du fonds (2022 est un bon test pour les fonds durables).
          Une performance sur douze mois ne dit à peu près rien.
        </li>
        <li>
          <strong>Mêmes frais.</strong> Vérifiez que vous comparez des performances nettes de frais
          courants, sur des parts destinées au même type d'investisseur — et ajoutez mentalement les
          frais de l'enveloppe, identiques quel que soit le fonds choisi.
        </li>
        <li>
          <strong>Même risque.</strong> Le DIC affiche un indicateur synthétique de risque de 1 à 7
          : comparer un fonds actions (risque élevé) à un fonds prudent revient à comparer leurs
          classes de risque, pas leurs mérites. À performance égale, le fonds le moins volatil a
          fait le meilleur travail.
        </li>
      </ol>
      <p>
        Et gardez la performance extra-financière comme une vérification séparée : un fonds peut
        battre son indice tout en trahissant la promesse éthique qui vous l'a fait choisir. Notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> résume ce que chaque tampon garantit
        — et ne garantit pas — pour mener cette seconde vérification.
      </p>

      <h2>Vos questions sur la performance de l'investissement éthique</h2>

      <h3>Les fonds éthiques ont-ils fait moins bien en 2022 ?</h3>
      <p>
        Beaucoup, oui. L'année 2022 a combiné une flambée des valeurs pétrolières et gazières —
        largement absentes des portefeuilles durables — et une forte correction des valeurs
        technologiques, qu'ils surpondèrent souvent. C'est l'illustration type de l'écart sectoriel
        qui joue en défaveur des fonds durables certaines années, comme il avait joué en leur faveur
        en 2020. Une année ne fait pas une stratégie.
      </p>

      <h3>Un fonds Article 9 rapporte-t-il moins qu'un fonds classique ?</h3>
      <p>
        Sur les données 2024 du rapport ESMA, les fonds Article 9 ont fait moins bien que les fonds
        Article 6 ; sur d'autres périodes, l'écart s'est inversé. Surtout, la classification SFDR
        décrit des obligations de transparence, pas un profil de rendement, et la catégorie recouvre
        des stratégies très hétérogènes. Nous détaillons{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          ce que la classification SFDR garantit vraiment
        </LienArticle>{" "}
        — spoiler : rien sur la performance.
      </p>

      <h3>Le Label ISR garantit-il une bonne performance ?</h3>
      <p>
        Non, et il ne le prétend pas : le Label ISR certifie une méthodologie de sélection
        extra-financière, auditée par un organisme indépendant — pas un résultat financier. Deux
        fonds labellisés peuvent afficher des performances très différentes. Notre analyse de{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que le Label ISR garantit vraiment
        </LienArticle>{" "}
        détaille où s'arrête sa promesse.
      </p>

      <h3>Les frais d'un fonds ISR sont-ils plus élevés que ceux d'un fonds classique ?</h3>
      <p>
        En moyenne, non : les rapports annuels de l'ESMA constatent des frais courants inférieurs ou
        comparables à ceux des fonds non ESG, avec quelques exceptions (ETF actions ESG notamment).
        Le réflexe utile reste individuel : les frais courants exacts de votre fonds figurent dans
        son DIC, et c'est leur cumul avec les frais de l'enveloppe qui détermine ce que vous gardez
        vraiment.
      </p>

      <h3>L'épargne solidaire rapporte-t-elle forcément moins ?</h3>
      <p>
        C'est un cas à part : dans un fonds de partage, vous donnez volontairement une partie du
        rendement à des associations, et les entreprises solidaires non cotées visent par nature des
        rendements modérés. Ce n'est pas une sous-performance cachée, c'est un choix explicite et
        assumé — très différent d'un fonds ISR coté, qui vise le rendement du marché avec un filtre
        extra-financier.
      </p>

      <h3>Faut-il sacrifier du rendement pour avoir un impact réel ?</h3>
      <p>
        Pas nécessairement, mais la question est plus fine qu'il n'y paraît : un fonds ISR coté vise
        le rendement du marché, quand certains véhicules d'impact investing assument un objectif de
        rendement inférieur en contrepartie d'une additionnalité réelle (financer ce qui n'aurait
        pas été financé sans vous). Ce sont deux démarches distinctes, à choisir en conscience —
        nous les départageons dans{" "}
        <LienArticle slug="isr-esg-impact-investing-differences">
          ISR, ESG, impact investing : quelles différences réelles ?
        </LienArticle>
        .
      </p>

      <h3>Un fonds éthique qui a bien performé continuera-t-il ?</h3>
      <p>
        Personne ne peut vous le garantir, et quiconque vous le garantit devrait vous alerter : les
        performances passées ne préjugent pas des performances futures, pour un fonds durable comme
        pour n'importe quel placement. Ce que vous pouvez vérifier, c'est la constance de la méthode
        : un fonds qui bat régulièrement son indice de référence sur un cycle complet, à frais
        raisonnables, démontre au moins la solidité de son processus.
      </p>

      <h2>Valeurs ou rendement : le dilemme que les chiffres ne confirment pas</h2>
      <p>
        Vous pouvez ranger la petite phrase : ni les 2 200 études agrégées par la recherche
        académique, ni les rapports annuels du régulateur européen ne valident l'idée qu'un
        épargnant paie structurellement son éthique en rendement. Ce que montrent les données, c'est
        un match globalement nul sur longue période, des frais moyens plutôt favorables aux fonds
        ESG, et des écarts annuels — dans les deux sens — qui récompensent la patience et punissent
        les jugements sur douze mois.
      </p>
      <p>
        L'inaction, elle, a un coût certain. Attendre une certitude qui n'existera jamais, c'est
        laisser son épargne sur des supports qu'on n'a pas choisis — souvent plus chargés en frais
        que l'écart de performance qu'on redoutait — et repousser d'autant les années où les
        intérêts composés travaillent. Le risque n'est pas d'investir éthique : c'est de ne pas
        décider.
      </p>
      <p>
        La suite logique de cette lecture : une fois la question du rendement dégonflée, le vrai
        risque de l'investissement éthique redevient visible — acheter un produit qui ne tient pas
        ses promesses extra-financières. Notre{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          méthode pour repérer le greenwashing d'un fonds « vert »
        </LienArticle>{" "}
        vous arme pour cette vérification-là. Et pour mesurer ce que les frais — le facteur que vous
        contrôlez vraiment — changent à votre horizon, notre{" "}
        <a href="/outils/simulateur">simulateur d'épargne</a> fait le calcul en deux minutes,
        hypothèses illustratives et frais réels inclus.
      </p>
      <p>
        Enfin, si vous préférez mener cet examen accompagné, c'est notre métier : lors d'un premier
        échange offert, un conseiller du cabinet passe en revue avec vous les performances, les
        indices de référence et les frais réels de vos supports actuels — documents à l'appui, sans
        jargon et sans engagement.
      </p>
    </>
  );
}
