import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "isr-esg-impact-investing-differences",
  title: "ISR, ESG, impact investing : quelles différences réelles pour votre épargne ?",
  excerpt:
    "ESG : une grille d'analyse. ISR : une démarche de gestion. Impact investing : un effet mesurable revendiqué. Trois niveaux d'exigence à ne pas confondre.",
  readingTime: "10 min",
  category: "Fondamentaux",
  date: "2026-04-20",
  tags: ["ESG", "ISR", "impact investing", "SFDR", "Label ISR"],
  author: "Alexandre Pollet",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> ESG désigne une grille d'analyse des entreprises selon
          trois familles de critères — environnement, social, gouvernance. C'est un outil
          d'évaluation, pas une promesse éthique. L'ISR (investissement socialement
          responsable) est une démarche de gestion qui applique cette grille de façon
          systématique et contrôlable, encadrée en France par le Label ISR. L'impact investing
          va un cran plus loin : il vise un effet social ou environnemental mesurable, annoncé
          à l'avance et publié dans un rapport de résultats. Trois niveaux d'exigence
          croissants, souvent présentés comme interchangeables dans les brochures — et cette
          confusion coûte cher à qui choisit un placement sur le mauvais mot.
        </p>
      </div>

      <p>
        Vous avez comparé deux contrats d'assurance vie, ou simplement feuilleté la
        documentation de votre banque. L'un met en avant une « intégration des critères
        ESG », l'autre des « fonds ISR labellisés », un troisième une « stratégie à
        impact ». Les trois expressions semblent promettre la même chose — une épargne plus
        propre — et vous vous demandez, légitimement, s'il y a une vraie différence ou si
        c'est le même produit sous trois emballages.
      </p>
      <p>
        La réponse est nette : ces trois termes n'ont ni la même nature, ni le même niveau
        d'exigence, ni les mêmes preuves à l'appui. Les confondre, c'est acheter une promesse
        qu'on n'a pas comprise — et parfois découvrir plus tard, dans l'inventaire du fonds,
        des entreprises qu'on croyait précisément avoir écartées.
      </p>
      <p>
        Dans cet article : une définition précise de chaque terme, un tableau comparatif
        pensé pour votre décision, leur correspondance avec la classification européenne SFDR
        (les fameux « Article 8 » et « Article 9 »), et une méthode en trois temps pour
        vérifier vous-même ce que fait réellement un fonds — sans croire personne sur parole,
        pas même nous.
      </p>

      <h2>ESG : que veulent dire ces trois lettres, concrètement ?</h2>
      <p>
        ESG est l'acronyme d'<strong>Environnement, Social, Gouvernance</strong> : trois
        familles de critères extra-financiers utilisées pour évaluer une entreprise au-delà de
        ses comptes. Côté environnement : émissions de gaz à effet de serre (y compris
        indirectes, dites scope 3), eau, déchets, biodiversité. Côté social : conditions de
        travail, sécurité, sous-traitance, égalité professionnelle. Côté gouvernance :
        indépendance du conseil
        d'administration, rémunération des dirigeants, prévention de la corruption.
      </p>
      <p>
        Point essentiel : la grille ESG est née de l'analyse financière, pas du militantisme.
        Son objectif premier est d'identifier des <em>risques</em> que le bilan comptable ne
        montre pas — une amende environnementale à venir, un scandale social, une gouvernance
        défaillante. « Intégrer les critères ESG », pour un gérant, signifie prendre ces
        informations en compte dans ses décisions. Cela ne signifie pas exclure quoi que ce
        soit.
      </p>
      <p>
        C'est là que naissent la plupart des malentendus. Beaucoup de fonds « ESG »
        fonctionnent en <strong>best-in-class</strong> : ils sélectionnent les entreprises les
        mieux notées <em>de chaque secteur</em>, y compris des secteurs que vous refuseriez
        peut-être par principe. Un producteur d'hydrocarbures doté d'une bonne gouvernance et
        d'une politique sociale solide peut ainsi obtenir une note ESG honorable et figurer
        dans un fonds estampillé ESG. Ajoutez que les notations ESG d'une même entreprise
        divergent fréquemment d'une agence à l'autre, faute de méthodologie unifiée — un
        constat largement documenté par la recherche académique — et vous comprenez qu'une
        note ESG, à elle seule, ne dit presque rien du contenu moral d'un portefeuille.
      </p>
      <div className="callout">
        <p>
          <strong>À retenir :</strong> « ESG » qualifie la <em>qualité de l'analyse</em>, pas
          le contenu du portefeuille. Un fonds ESG peut détenir des entreprises pétrolières
          ou des groupes d'armement, dès lors qu'ils sont bien notés dans leur catégorie.
        </p>
      </div>

      <h2>ISR : en quoi est-ce plus engageant que l'ESG ?</h2>
      <p>
        L'<strong>investissement socialement responsable (ISR)</strong> est une démarche de
        gestion : les critères ESG n'y sont plus une simple information parmi d'autres, mais
        un filtre systématique, formalisé et contrôlable qui pèse réellement sur la
        composition du portefeuille. Trois grandes approches coexistent, souvent combinées :
      </p>
      <ul>
        <li>
          la sélection <strong>best-in-class</strong> (retenir les mieux notés de chaque
          secteur), historiquement dominante en France ;
        </li>
        <li>
          les <strong>exclusions sectorielles</strong> (écarter des activités entières :
          charbon, tabac, armement controversé…) et <strong>normatives</strong> (écarter les
          entreprises qui violent des normes internationales, comme les principes du Pacte
          mondial des Nations unies) ;
        </li>
        <li>
          l'<strong>engagement actionnarial</strong> : rester actionnaire pour peser sur les
          pratiques de l'entreprise, par le dialogue et le vote en assemblée générale.
        </li>
      </ul>
      <p>
        En France, cette démarche est encadrée par le <strong>Label ISR</strong>, label public
        créé en 2016 sous l'égide du ministère de l'Économie et des Finances. Son référentiel
        a été profondément réformé : la nouvelle version, entrée en vigueur en 2024, s'impose
        à tous les fonds labellisés depuis le 1er janvier 2025. Elle introduit notamment des
        exclusions liées aux énergies fossiles — charbon et hydrocarbures non conventionnels
        au-delà de seuils stricts, et entreprises lançant de nouveaux projets d'exploration ou
        d'exploitation d'hydrocarbures. La liste officielle des fonds labellisés est publique
        et consultable sur{" "}
        <a href="https://www.lelabelisr.fr/" target="_blank" rel="noreferrer">
          lelabelisr.fr
        </a>
        , et la labellisation est auditée par des organismes certificateurs indépendants.
      </p>
      <p>
        La limite à connaître : un label certifie une <em>méthodologie</em>, pas une
        conformité à <em>vos</em> valeurs. Deux fonds labellisés ISR peuvent avoir des
        portefeuilles très différents, et un fonds labellisé peut détenir des entreprises qui
        vous surprendront. Nous avons consacré une analyse complète à cette question :{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que le Label ISR garantit vraiment — et ce qu'il ne garantit pas
        </LienArticle>
        , la suite logique si vous envisagez un fonds labellisé.
      </p>

      <h2>Impact investing : la promesse d'un effet mesurable — à quelles conditions ?</h2>
      <p>
        L'<strong>impact investing</strong> (investissement à impact) est le niveau d'exigence
        le plus élevé des trois — sur le papier. Selon la définition de référence du Global
        Impact Investing Network (
        <a
          href="https://thegiin.org/publication/post/about-impact-investing/"
          target="_blank"
          rel="noreferrer"
        >
          GIIN
        </a>
        ), il s'agit d'investissements réalisés <em>avec l'intention</em> de générer, aux
        côtés d'un rendement financier, un impact social ou environnemental positif et{" "}
        <em>mesurable</em>. Trois piliers structurent cette définition :
      </p>
      <ul>
        <li>
          l'<strong>intentionnalité</strong> : l'impact est un objectif annoncé dès le départ,
          pas un bénéfice secondaire constaté après coup ;
        </li>
        <li>
          la <strong>mesurabilité</strong> : l'investisseur s'engage à mesurer et publier les
          résultats (tonnes de CO2 évitées, logements sociaux financés, emplois créés…), avec
          une méthodologie explicite ;
        </li>
        <li>
          l'<strong>additionnalité</strong> : l'idée que le changement ne se serait pas
          produit — ou pas aussi vite — sans cet investissement.
        </li>
      </ul>
      <p>
        Ce troisième pilier fait débat, et il est honnête de vous l'exposer. L'impact
        investing s'est historiquement développé sur le non-coté — dette privée,
        capital-risque à vocation sociale, microfinance, infrastructures de transition — où
        le lien de cause à effet est direct : votre argent finance le projet. Sur les marchés
        cotés, acheter une action revient le plus souvent à la racheter à un autre
        investisseur, pas à apporter de l'argent frais à l'entreprise. Les partisans de
        l'impact coté répondent que l'effet passe par d'autres canaux — coût du capital,
        signal de marché, engagement actionnarial exigeant — et par des montants déployés
        sans commune mesure avec le non-coté. Les deux lectures ont leurs arguments ; notre
        grille de lecture est simple : un fonds qui revendique de l'impact doit publier un
        rapport d'impact, avec indicateurs et méthodologie. Sinon, la revendication ne repose
        sur rien de vérifiable.
      </p>
      <p>
        Dans l'épargne française grand public, l'impact prend surtout trois formes : les
        fonds solidaires (souvent dits « 90/10 », dont une fraction du portefeuille finance
        directement des entreprises solidaires agréées), les obligations vertes (green bonds)
        qui financent des projets environnementaux identifiés, et une génération récente de
        fonds cotés « à impact » dont l'exigence varie fortement d'un produit à l'autre.
      </p>

      <h2>ESG, ISR, impact : le tableau comparatif pour vous y retrouver</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ESG</th>
            <th>ISR</th>
            <th>Impact investing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Nature</strong>
            </td>
            <td>Grille d'analyse des entreprises</td>
            <td>Démarche de gestion systématique</td>
            <td>Stratégie visant un effet mesurable</td>
          </tr>
          <tr>
            <td>
              <strong>La question à laquelle il répond</strong>
            </td>
            <td>« Cette entreprise gère-t-elle bien ses risques extra-financiers ? »</td>
            <td>« Ce fonds sélectionne-t-il selon une méthode contrôlable ? »</td>
            <td>« Cet investissement produit-il un changement réel et mesuré ? »</td>
          </tr>
          <tr>
            <td>
              <strong>Ce que ça garantit, au mieux</strong>
            </td>
            <td>Une analyse extra-financière documentée</td>
            <td>Une méthodologie auditée (Label ISR, référentiel public)</td>
            <td>Des objectifs d'impact annoncés et un reporting de résultats</td>
          </tr>
          <tr>
            <td>
              <strong>Ce que ça ne garantit pas</strong>
            </td>
            <td>L'exclusion des secteurs que vous refusez</td>
            <td>Que le portefeuille corresponde à vos valeurs personnelles</td>
            <td>Que l'effet n'aurait pas eu lieu sans vous (additionnalité débattue)</td>
          </tr>
          <tr>
            <td>
              <strong>Le réflexe de vérification</strong>
            </td>
            <td>Lire la méthodologie de notation et l'inventaire du fonds</td>
            <td>Vérifier le label sur la liste officielle, lire le DIC</td>
            <td>Lire le rapport d'impact annuel : indicateurs, méthode, périmètre</td>
          </tr>
        </tbody>
      </table>
      <p>
        Une précision qui a son importance : ces trois colonnes ne classent pas les produits
        du « moins vertueux » au « plus vertueux ». Elles classent la <em>précision de la
        promesse</em>. Un fonds ISR rigoureux et transparent peut être un meilleur choix pour
        vous qu'un fonds « à impact » dont le rapport de résultats reste flou. Ce qui compte,
        c'est l'adéquation entre ce que le produit prouve et ce que vous cherchez.
      </p>

      <h2>Et les Articles 8 et 9 du règlement SFDR, où se situent-ils ?</h2>
      <p>
        Un quatrième vocabulaire se superpose aux trois précédents : la classification
        européenne issue du{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32019R2088"
          target="_blank"
          rel="noreferrer"
        >
          règlement (UE) 2019/2088
        </a>
        , dit SFDR, applicable depuis mars 2021. Il impose aux fonds un niveau de transparence
        proportionné à leurs ambitions déclarées : <strong>Article 6</strong> pour les fonds
        sans revendication de durabilité, <strong>Article 8</strong> pour ceux qui promeuvent
        des caractéristiques environnementales ou sociales, <strong>Article 9</strong> pour
        ceux qui affichent un objectif d'investissement durable.
      </p>
      <p>
        La correspondance avec nos trois termes est approximative mais utile : une simple
        intégration ESG se retrouve le plus souvent en Article 8 ; une ambition d'impact ou un
        objectif durable explicite relève en principe de l'Article 9. Mais retenez bien la
        nature de ce classement : c'est un <em>régime de transparence déclaratif</em>, pas un
        label de qualité décerné par un régulateur. La preuve par l'histoire récente : fin
        2022, plusieurs centaines de fonds européens se sont reclassés d'eux-mêmes d'Article 9
        vers Article 8, d'après les recensements du cabinet Morningstar — leurs promesses
        avaient dépassé ce que leurs portefeuilles pouvaient justifier. Nous détaillons ce
        mécanisme dans{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          notre analyse de ce que les Articles 8 et 9 garantissent vraiment
        </LienArticle>{" "}
        — indispensable si un distributeur vous présente « Article 9 » comme un argument de
        vente.
      </p>

      <h2>Comment vérifier vous-même ce que fait réellement un fonds ?</h2>
      <p>
        Pas besoin d'être analyste financier : trois réflexes suffisent pour situer n'importe
        quel fonds sur l'échelle ESG / ISR / impact. C'est notre méthode{" "}
        <strong>Promesse → Preuve → Portefeuille</strong> :
      </p>
      <ol>
        <li>
          <strong>La promesse.</strong> Repérez le vocabulaire exact employé dans le document
          d'informations clés (DIC) et la page produit. « Intégration des critères ESG »,
          « fonds labellisé ISR » et « objectif d'impact mesurable » n'engagent pas du tout au
          même niveau — vous savez maintenant pourquoi.
        </li>
        <li>
          <strong>La preuve.</strong> Cherchez l'élément opposable qui soutient la promesse :
          un label vérifiable sur la liste officielle (lelabelisr.fr pour le Label ISR), la
          classification SFDR dans l'annexe précontractuelle, un rapport d'impact publié avec
          des indicateurs chiffrés et leur méthodologie. Une promesse sans preuve documentaire
          est un argument commercial, pas un engagement.
        </li>
        <li>
          <strong>Le portefeuille.</strong> Ouvrez l'inventaire du fonds, publié
          périodiquement par la société de gestion, et regardez au minimum les dix premières
          lignes. Correspondent-elles à ce que la promesse vous a laissé imaginer ? C'est le
          test le plus rapide et le plus honnête qui existe.
        </li>
      </ol>
      <p>
        Pour vous aider sur la deuxième étape, notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> résume gratuitement ce que
        chaque label français garantit, ce qu'il ne garantit pas, et où le vérifier — il vous
        donne des pistes de lecture, la vérification finale restant toujours le document
        officiel du fonds.
      </p>

      <h2>Vos questions sur l'ISR, l'ESG et l'impact investing</h2>

      <h3>Un fonds « ESG » est-il forcément un fonds éthique ?</h3>
      <p>
        Non. « ESG » signifie que le gérant analyse des critères extra-financiers, pas qu'il
        exclut les secteurs que vous refusez. Un fonds ESG en approche best-in-class peut
        détenir des entreprises pétrolières ou d'armement bien notées dans leur catégorie. Si
        l'exclusion de certains secteurs compte pour vous, c'est la politique d'exclusion du
        fonds qu'il faut lire, pas la mention ESG.
      </p>

      <h3>ISR et ESG, c'est pareil ?</h3>
      <p>
        Non, et la nuance est simple à retenir : ESG est la grille d'analyse, ISR est la
        démarche de gestion qui l'applique de façon systématique et contrôlable. Tout fonds
        ISR s'appuie sur des critères ESG ; tous les fonds qui mentionnent l'ESG ne sont pas
        pour autant gérés en ISR.
      </p>

      <h3>Le Label ISR exclut-il le pétrole et le gaz ?</h3>
      <p>
        En partie, depuis sa réforme. Le nouveau référentiel, applicable à tous les fonds
        labellisés depuis le 1er janvier 2025, exclut le charbon et les hydrocarbures non
        conventionnels au-delà de seuils stricts, ainsi que les entreprises qui lancent de
        nouveaux projets d'hydrocarbures. Il n'interdit pas pour autant toute exposition au
        secteur de l'énergie. Le détail des critères est publié sur{" "}
        <a href="https://www.lelabelisr.fr/" target="_blank" rel="noreferrer">
          lelabelisr.fr
        </a>
        .
      </p>

      <h3>Un fonds Article 9 est-il automatiquement un fonds à impact ?</h3>
      <p>
        Non. L'Article 9 du règlement SFDR est une catégorie de transparence déclarative : le
        fonds affiche un objectif d'investissement durable et doit publier des informations en
        conséquence. Ce n'est ni un label, ni une certification d'impact. Les reclassements
        massifs d'Article 9 vers Article 8 fin 2022 ont montré que cette déclaration pouvait
        être révisée à la baisse. Demandez toujours le rapport d'impact, pas seulement la
        classification.
      </p>

      <h3>L'impact investing rapporte-t-il moins que l'investissement classique ?</h3>
      <p>
        Il n'existe pas de réponse unique et honnête à cette question : les études divergent
        selon les périodes, les classes d'actifs et les méthodologies. Ce qui est établi,
        c'est que les fonds à impact visent des rendements très variables par conception :
        certains recherchent le taux de marché, d'autres — les fonds solidaires notamment —
        assument un rendement financier plus modeste en contrepartie d'un impact social
        direct. L'important est que cet arbitrage soit annoncé dans la documentation du fonds.
      </p>

      <h3>Peut-on faire de l'impact investing dans une assurance vie ?</h3>
      <p>
        Partiellement. Les unités de compte ISR sont aujourd'hui largement disponibles dans
        les contrats d'assurance vie. L'impact au sens strict y passe surtout par les fonds
        solidaires de type « 90/10 » et les fonds investis en obligations vertes ; l'impact
        non coté (dette privée, capital-investissement à vocation sociale) reste plus rare
        dans les contrats grand public. La liste des supports disponibles dépend de chaque
        contrat — c'est un point à vérifier avant la souscription, pas après.
      </p>

      <h3>Où vérifier qu'un fonds a vraiment le Label ISR ?</h3>
      <p>
        Sur la liste officielle publiée sur{" "}
        <a href="https://www.lelabelisr.fr/" target="_blank" rel="noreferrer">
          lelabelisr.fr
        </a>
        , qui recense tous les fonds labellisés et la date de leur labellisation. Un logo sur
        une brochure ne suffit pas : un fonds peut perdre son label, et seule la liste
        officielle fait foi.
      </p>

      <h2>Trois mots, trois niveaux d'exigence : lequel vous correspond ?</h2>
      <p>
        Vous n'avez plus besoin de croire les brochures sur parole. ESG décrit une analyse,
        ISR une méthode de gestion contrôlable, impact investing une obligation de résultat
        mesuré. La bonne question n'est donc pas « quel est le meilleur sigle ? », mais
        « qu'est-ce que j'attends de mon épargne : mieux prendre en compte les risques
        extra-financiers, filtrer selon une méthode auditée, ou financer un changement dont on
        me prouve la réalité ? ». À chaque réponse correspond un niveau d'exigence — et des
        documents précis à demander.
      </p>
      <p>
        Ne pas trancher a aussi un coût. Tant que vous repoussez la question, votre épargne
        continue de financer ce que vous n'avez pas choisi ; et si vous choisissez sur un mot
        mal compris, vous risquez de découvrir dans quelques années, en ouvrant l'inventaire,
        des lignes que vous pensiez précisément avoir exclues. Dans les deux cas, le problème
        n'est pas le produit : c'est la promesse qu'on n'a pas vérifiée.
      </p>
      <p>
        Pour passer des définitions à l'action, deux lectures s'imposent : notre{" "}
        <LienArticle slug="investissement-ethique-guide-complet-2026">
          guide complet de l'investissement éthique
        </LienArticle>{" "}
        déroule toute la démarche, du choix de l'enveloppe à la sélection des supports — c'est
        le point de départ si vous construisez votre stratégie. Et si vous voulez aiguiser
        votre regard critique, notre{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          méthode pour repérer le greenwashing d'un fonds « vert »
        </LienArticle>{" "}
        transforme les notions de cet article en réflexes de détection concrets.
      </p>
      <p>
        Et si vous préférez faire cette vérification à deux, c'est précisément notre métier :
        lors d'un premier échange offert, un conseiller du cabinet passe en revue avec vous ce
        que contiennent réellement vos placements actuels — vocabulaire décodé, documents à
        l'appui, sans jargon et sans engagement.
      </p>
    </>
  );
}
