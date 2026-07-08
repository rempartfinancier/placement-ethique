import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "etf-isr-debutants",
  title: "Comment choisir un ETF ISR quand on débute ? La méthode en quatre documents",
  excerpt:
    "Le vrai choix d'un ETF ISR se joue dans l'indice qu'il réplique, pas dans son nom. La méthode en quatre documents pour vérifier avant d'acheter.",
  readingTime: "11 min",
  category: "Fondamentaux",
  date: "2026-04-24",
  tags: ["ETF", "ISR", "ESG", "indices", "débutant"],
  author: "Sébastien Petrisot",
  image: "/images/articles/etf-isr-lettres.jpg",
  imageAlt: "Lettres de jeu de société formant le mot ETF posées sur une table en bois",
  imageWidth: 2000,
  imageHeight: 1333,
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>La réponse courte :</strong> un ETF ISR est un fonds indiciel coté qui réplique un
          indice boursier filtré selon des critères environnementaux, sociaux et de gouvernance
          (ESG). Deux produits étiquetés « ISR » peuvent pourtant contenir des portefeuilles très
          différents : tout se joue dans la méthode de construction de l'indice répliqué, pas dans
          le nom du produit. Avant d'acheter, lisez quatre documents — la fiche méthodologique de
          l'indice, l'inventaire du portefeuille, la classification réglementaire SFDR et le DIC. Ce
          réflexe prend une demi-heure et vous protège de l'essentiel du greenwashing.
        </p>
      </div>

      <p>
        Vous avez tapé « ETF ISR » dans le moteur de recherche de votre courtier, ou parcouru la
        liste des supports de votre assurance vie, et vous voilà face à des dizaines de lignes aux
        noms cryptiques : ESG, SRI, Screened, Leaders, Paris-Aligned… Vous voulez que votre épargne
        cesse de financer n'importe quoi, mais vous redoutez deux écueils symétriques : acheter du
        greenwashing en croyant bien faire, ou renoncer faute de comprendre ce que ces sigles
        recouvrent.
      </p>
      <p>
        La bonne nouvelle : un ETF (<em>exchange traded fund</em>, ou fonds indiciel coté) est
        justement l'un des placements les plus transparents qui existent, parce que sa règle du jeu
        est publiée à l'avance. Sa version « ISR » (investissement socialement responsable) réplique
        un indice dont l'univers a été filtré selon des critères ESG. Cet article vous donne la
        grille de lecture complète : quelles familles d'indices existent, comment vérifier ce qu'un
        ETF contient réellement, dans quelle enveloppe le loger et quels pièges éviter — sans exiger
        de vous la moindre expertise préalable.
      </p>

      <h2>Un ETF ISR, c'est quoi exactement ?</h2>
      <p>
        Un ETF est un fonds d'investissement coté en bourse dont l'unique mission est de répliquer
        un indice : si l'indice monte de 2 %, l'ETF vise de monter de 2 %, frais déduits. Personne
        n'y sélectionne des titres « au feeling » : la composition du portefeuille découle
        mécaniquement de la règle de construction de l'indice. C'est ce qui rend les ETF peu coûteux
        — il n'y a pas d'équipe de gérants à rémunérer pour choisir les titres — et c'est aussi ce
        qui les rend vérifiables.
      </p>
      <p>
        Un ETF ISR fonctionne exactement pareil, à une différence près : l'indice répliqué n'est pas
        l'indice « brut » du marché, mais une version filtrée. Le fournisseur d'indice (MSCI, FTSE,
        S&amp;P et quelques autres) applique des critères ESG — environnement, social, gouvernance —
        pour exclure certaines entreprises, en surpondérer d'autres, ou ne retenir que les mieux
        notées.
      </p>
      <p>
        D'où le principe central de cet article :{" "}
        <strong>
          la question « cet ETF est-il vraiment responsable ? » se traduit toujours en « la
          méthodologie de son indice correspond-elle à mes exigences ? »
        </strong>
        . Vous n'achetez pas la promesse d'un gérant, vous achetez une règle de construction — et
        cette règle est publique.
      </p>
      <p>
        Précision de vocabulaire importante : dans le langage courant, « ISR » désigne l'approche
        générale de l'investissement responsable. Ne le confondez pas avec le{" "}
        <strong>Label ISR</strong>, label d'État français attribué fonds par fonds : un ETF peut
        afficher « ESG » dans son nom sans détenir le label, et inversement. Nous y revenons plus
        bas.
      </p>

      <h2>Pourquoi deux ETF « ISR » peuvent-ils contenir des portefeuilles très différents ?</h2>
      <p>
        Parce qu'il n'existe pas une seule façon de filtrer un indice, mais plusieurs familles de
        méthodologies, d'exigence très variable. Les deux grandes logiques sont l'
        <strong>exclusion sectorielle</strong> (retirer des activités jugées incompatibles :
        armement controversé, tabac, charbon…) et le <strong>best-in-class</strong> (conserver, dans
        chaque secteur, les entreprises les mieux notées ESG — y compris dans des secteurs que vous
        pensiez peut-être exclus). Une compagnie pétrolière bien notée sur ses pratiques peut ainsi
        figurer dans un indice best-in-class large : ce n'est pas une anomalie, c'est un choix
        méthodologique documenté. À vous de savoir s'il vous convient.
      </p>
      <p>
        Voici les quatre familles que vous croiserez le plus souvent, du filtre le plus léger au
        plus contraint :
      </p>
      <table>
        <thead>
          <tr>
            <th>Famille (mots-clés dans le nom)</th>
            <th>Méthode de filtrage</th>
            <th>Conséquence concrète</th>
            <th>Pour quel débutant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Exclusions simples — « Screened »</td>
            <td>
              Retire les activités les plus controversées (armes controversées, tabac, charbon
              thermique, violations de normes internationales)
            </td>
            <td>Portefeuille quasi identique à l'indice parent</td>
            <td>Vous voulez d'abord répliquer le marché, en écartant le pire</td>
          </tr>
          <tr>
            <td>Best-in-class large — « ESG », « Leaders »</td>
            <td>
              Conserve les entreprises les mieux notées ESG de chaque secteur, sur une large part de
              l'univers de départ
            </td>
            <td>
              Filtre modéré, diversification préservée ; des secteurs contestés restent représentés
              par leurs « meilleurs élèves »
            </td>
            <td>Vous cherchez un compromis entre filtre et diversification</td>
          </tr>
          <tr>
            <td>Sélectif — « SRI »</td>
            <td>
              Ne conserve qu'environ un quart de la capitalisation de chaque secteur, les
              entreprises les mieux notées
            </td>
            <td>Filtre marqué, portefeuille plus concentré, écarts au marché plus visibles</td>
            <td>
              Vous voulez un filtrage exigeant et acceptez de vous éloigner de l'indice classique
            </td>
          </tr>
          <tr>
            <td>Climat — « PAB », « CTB », « Climate »</td>
            <td>
              Cadre réglementaire européen : intensité carbone fortement réduite, puis trajectoire
              de décarbonation annuelle imposée
            </td>
            <td>
              Objectif climatique chiffré et contrôlable ; les indices PAB excluent par construction
              les principaux producteurs d'énergies fossiles
            </td>
            <td>Votre priorité est la décarbonation de votre épargne</td>
          </tr>
        </tbody>
      </table>
      <p>
        Deux de ces familles reposent sur des chiffres publics que vous pouvez vérifier vous-même.
        Les indices « SRI » de MSCI visent environ 25 % de la capitalisation de chaque secteur,
        selon{" "}
        <a
          href="https://www.msci.com/index/methodology/latest/SRI"
          target="_blank"
          rel="noreferrer"
        >
          la méthodologie publiée par MSCI
        </a>
        . Les indices climat, eux, sont définis par le droit européen : le{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32020R1818"
          target="_blank"
          rel="noreferrer"
        >
          règlement délégué (UE) 2020/1818
        </a>{" "}
        impose aux indices « accord de Paris » (PAB) une intensité carbone inférieure d'au moins 50
        % à celle de l'univers d'investissement — 30 % pour les indices « transition climatique »
        (CTB) — puis une décarbonation d'environ 7 % par an. C'est l'un des rares cas où « vert »
        correspond à une obligation chiffrée, contrôlable, et non à un argument marketing.
      </p>

      <h2>Comment vérifier ce qu'un ETF ISR contient vraiment ?</h2>
      <p>
        C'est la partie que la plupart des débutants sautent — et c'est pourtant la seule qui
        compte. Nous l'appelons <strong>la lecture en quatre documents</strong> : indice,
        inventaire, étiquette, DIC. Comptez une demi-heure la première fois, dix minutes ensuite.
      </p>
      <ol>
        <li>
          <strong>La fiche méthodologique de l'indice.</strong> Le nom exact de l'indice répliqué
          figure dans la documentation de l'ETF. Cherchez ce nom suivi de « methodology » sur le
          site du fournisseur d'indice : vous y trouverez la liste des exclusions, la méthode de
          sélection et la part de l'univers conservée. Si cette méthodologie est introuvable ou
          incompréhensible, c'est en soi un signal.
        </li>
        <li>
          <strong>L'inventaire du portefeuille.</strong> Contrairement à beaucoup de fonds
          classiques, un ETF publie la liste complète de ses positions, souvent quotidiennement, sur
          le site de son émetteur. Les dix premières lignes vous disent déjà beaucoup : cherchez-y
          les entreprises qui vous poseraient problème. C'est le test le plus honnête qui soit — on
          ne discute pas avec un inventaire.
        </li>
        <li>
          <strong>L'étiquette réglementaire et les labels.</strong> Tout fonds européen est classé
          au titre du règlement SFDR : Article 6 (pas de démarche de durabilité particulière),
          Article 8 (promotion de caractéristiques ESG) ou Article 9 (objectif d'investissement
          durable). Cette classification est déclarative et ne vaut pas certification —{" "}
          <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
            nous détaillons ce qu'Article 8 et Article 9 garantissent vraiment
          </LienArticle>{" "}
          dans un article dédié. Côté labels, certains fonds indiciels détiennent le{" "}
          <a href="https://www.lelabelisr.fr/" target="_blank" rel="noreferrer">
            Label ISR
          </a>
          , dont le référentiel réformé (version 3, en vigueur depuis 2024) exclut désormais les
          entreprises qui exploitent du charbon ou des hydrocarbures non conventionnels, ainsi que
          celles qui lancent de nouveaux projets d'exploration ou d'exploitation d'énergies
          fossiles.{" "}
          <LienArticle slug="label-isr-que-garantit-il-vraiment">
            Ce que le Label ISR garantit — et ne garantit pas
          </LienArticle>{" "}
          mérite sa propre lecture avant de lui accorder une confiance aveugle. Notre{" "}
          <a href="/outils/decodeur-label">décodeur de labels</a> vous donne des pistes de
          vérification, tampon par tampon.
        </li>
        <li>
          <strong>Le DIC (document d'informations clés).</strong> Ce document réglementaire de
          quelques pages, obligatoire avant toute souscription, récapitule les frais courants,
          l'indicateur de risque et le mode de réplication. C'est là — et pas dans la brochure
          commerciale — que se lisent les chiffres qui engagent.
        </li>
      </ol>

      <h2>PEA, assurance vie ou compte-titres : où loger un ETF ISR ?</h2>
      <p>
        Le même ETF ne se comporte pas fiscalement de la même façon selon l'enveloppe qui l'héberge.
        Les trois principales options :
      </p>
      <table>
        <thead>
          <tr>
            <th>Enveloppe</th>
            <th>Accès aux ETF ISR</th>
            <th>Fiscalité en deux mots</th>
            <th>Point de vigilance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PEA</td>
            <td>
              Restreint aux ETF éligibles : principalement actions européennes, certains indices
              mondiaux via réplication indirecte
            </td>
            <td>
              Gains exonérés d'impôt sur le revenu après 5 ans (prélèvements sociaux dus) ; plafond
              de versements de 150 000 €
            </td>
            <td>L'offre ISR éligible au PEA est plus étroite qu'ailleurs</td>
          </tr>
          <tr>
            <td>Assurance vie</td>
            <td>
              Dépend de la liste d'unités de compte du contrat — elle varie fortement d'un assureur
              à l'autre
            </td>
            <td>Fiscalité allégée après 8 ans de détention, atouts pour la transmission</td>
            <td>Les frais du contrat s'ajoutent aux frais propres de l'ETF</td>
          </tr>
          <tr>
            <td>Compte-titres (CTO)</td>
            <td>Le plus large : tout ETF européen (UCITS) y est accessible</td>
            <td>Gains imposés au fil des cessions (prélèvement forfaitaire unique ou barème)</td>
            <td>Aucun avantage fiscal : la discipline d'épargne repose sur vous</td>
          </tr>
        </tbody>
      </table>
      <p>
        Les règles du PEA — plafond de 150 000 € de versements, exonération d'impôt sur le revenu
        sur les gains après cinq ans — sont détaillées sur{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2385"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        . En assurance vie, vérifiez la liste exacte des unités de compte avant d'ouvrir un contrat
        : c'est elle, et non la plaquette, qui dit si vous pourrez réellement construire une
        allocation responsable.
      </p>
      <div className="callout">
        <p>
          Quel que soit son filtre ESG, un ETF ISR reste un placement en actions : il présente un
          risque de perte en capital, et les performances passées ne préjugent pas des performances
          futures. Le filtre porte sur ce que finance votre épargne, pas sur le risque de marché.
        </p>
      </div>

      <h2>Quels pièges guettent le débutant avec un ETF ISR ?</h2>
      <h3>Le nom du produit n'est pas un contrat</h3>
      <p>
        « ESG » ou « Sustainable » dans un nom commercial ne dit presque rien du filtre réel. Seule
        la méthodologie de l'indice fait foi. Deux ETF au nom quasi identique peuvent appartenir à
        deux familles différentes du tableau ci-dessus.
      </p>
      <h3>« ISR » ne veut pas dire « sans énergies fossiles »</h3>
      <p>
        Beaucoup d'indices best-in-class conservent des producteurs d'énergies fossiles bien notés
        sur leurs pratiques ESG. Si l'exclusion des fossiles est votre critère décisif, vérifiez-le
        explicitement dans la liste d'exclusions de la méthodologie — ou orientez-vous vers les
        familles qui l'imposent par construction.
      </p>
      <h3>Le filtre le plus strict n'est pas gratuit</h3>
      <p>
        Plus l'indice est sélectif, plus le portefeuille est concentré et plus il peut s'écarter du
        marché, dans un sens comme dans l'autre. Ce n'est ni un défaut ni une qualité en soi : c'est
        un arbitrage entre exigence du filtre et diversification, à faire consciemment.
      </p>
      <h3>Les frais s'empilent en silence</h3>
      <p>
        En assurance vie, les frais de gestion du contrat s'ajoutent chaque année aux frais courants
        de l'ETF. Un support peu coûteux logé dans un contrat cher perd une partie de son intérêt.
        Additionnez toujours les deux lignes.
      </p>
      <h3>Le greenwashing se niche dans le vocabulaire flou</h3>
      <p>
        Signaux d'alerte génériques : une promesse d'« impact » sans mécanisme expliqué, une
        méthodologie introuvable ou réservée aux professionnels, une communication qui met en scène
        trois lignes vertueuses du portefeuille en passant les autres sous silence. Aucun de ces
        signaux ne prouve une tromperie — mais chacun justifie de retourner à l'inventaire avant
        d'acheter.
      </p>

      <h2>Combien coûte un ETF ISR — et avec combien peut-on commencer ?</h2>
      <p>
        Les frais courants d'un ETF ISR figurent noir sur blanc dans son DIC. Ils comptent parmi les
        plus bas du marché des fonds : généralement une fraction de ceux d'un fonds à gestion active
        comparable, même si les versions filtrées ESG sont souvent un peu plus chères que l'indice
        brut équivalent. Sur des décennies, cet écart de frais pèse davantage que bien des
        subtilités de méthodologie — c'est l'une des raisons pour lesquelles les ETF sont une porte
        d'entrée sérieuse vers l'investissement responsable.
      </p>
      <p>
        Côté ticket d'entrée, une part d'ETF se négocie souvent pour quelques dizaines ou centaines
        d'euros, et la plupart des contrats d'assurance vie acceptent des versements programmés
        modestes. Autrement dit, il n'existe pas de seuil de fortune à franchir pour commencer —{" "}
        <LienArticle slug="investir-ethique-petit-budget">
          nous avons consacré un article entier à l'investissement éthique avec un petit budget
        </LienArticle>
        , si c'est votre situation. L'important est moins le montant de départ que la régularité et
        l'horizon : un placement en actions se juge sur des années, pas sur des semaines.
      </p>

      <h2>Vos questions sur les ETF ISR</h2>
      <h3>Un ETF ISR rapporte-t-il moins qu'un ETF classique ?</h3>
      <p>
        Il n'existe pas de réponse universelle : les études comparatives se contredisent selon la
        période, l'indice et la méthodologie retenus, et l'écart observé tient surtout aux biais
        sectoriels du filtre. Ce qui est certain : les performances passées ne préjugent pas des
        performances futures.{" "}
        <LienArticle slug="investir-ethique-performance-chiffres">
          Nous passons les chiffres disponibles au crible dans un article dédié
        </LienArticle>
        .
      </p>
      <h3>Quelle différence entre un ETF ISR et un fonds ISR classique ?</h3>
      <p>
        Le fonds classique repose sur les choix d'un gérant, l'ETF sur une règle d'indice publiée à
        l'avance. L'ETF est généralement moins cher et plus transparent ; le fonds actif peut en
        théorie aller plus loin dans l'analyse au cas par cas. Ce sont deux logiques différentes,
        pas une hiérarchie.
      </p>
      <h3>Peut-on perdre de l'argent avec un ETF ISR ?</h3>
      <p>
        Oui. Un ETF ISR suit le marché des actions qu'il réplique, à la hausse comme à la baisse,
        sans aucune garantie en capital. C'est pourquoi il se destine à une épargne de long terme,
        pas à votre épargne de précaution.
      </p>
      <h3>Les ETF ISR ont-ils le Label ISR ?</h3>
      <p>
        Certains fonds indiciels le détiennent, d'autres non : le label est attribué fonds par
        fonds, sur candidature de la société de gestion, pas à un indice. La liste officielle des
        fonds labellisés est consultable publiquement sur le site du label — c'est la seule source
        qui fasse foi.
      </p>
      <h3>Puis-je mettre un ETF monde ISR dans mon PEA ?</h3>
      <p>
        Uniquement s'il est explicitement éligible au PEA. L'enveloppe est réservée pour l'essentiel
        aux actions européennes, mais certains émetteurs proposent des ETF répliquant des indices
        mondiaux de façon indirecte pour y être éligibles. La mention d'éligibilité figure dans la
        documentation de l'ETF : vérifiez-la avant de passer l'ordre.
      </p>
      <h3>Comment savoir si mon ETF ISR exclut le pétrole et le gaz ?</h3>
      <p>
        Deux vérifications suffisent : la liste d'exclusions dans la fiche méthodologique de
        l'indice, puis l'inventaire du portefeuille pour constater le résultat. Si vous voulez une
        exclusion par construction, les indices « accord de Paris » (PAB) écartent les principaux
        producteurs d'énergies fossiles en vertu du règlement européen cité plus haut.
      </p>
      <h3>Faut-il un seul ETF ISR ou plusieurs ?</h3>
      <p>
        Pour débuter, un seul ETF très diversifié peut suffire : multiplier les lignes similaires
        crée surtout des doublons. La vraie question est celle de votre allocation globale — quelle
        part en actions, pour quel horizon —, et elle dépend de votre situation, pas du produit.
      </p>

      <h2>Par où commencer, concrètement ?</h2>
      <p>
        Retenez ceci : choisir un ETF ISR n'exige pas d'être analyste financier. C'est un exercice
        de lecture — quatre documents, une demi-heure — à la portée de n'importe quel débutant
        décidé à ne pas acheter une étiquette les yeux fermés. La famille d'indice fait le filtre,
        l'inventaire fait la preuve, l'enveloppe fait la fiscalité.
      </p>
      <p>
        Le coût de l'attente, lui, est bien réel : chaque année passée à chercher le produit parfait
        est une année où votre épargne dort sur des comptes dont vous ignorez ce qu'ils financent,
        sans travailler ni pour vos projets ni pour vos convictions. Mieux vaut un choix vérifié et
        perfectible aujourd'hui qu'un choix idéal indéfiniment reporté.
      </p>
      <p>
        Pour la suite logique : passez les tampons au crible avec notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> — c'est le complément direct de
        l'étape 3 de la lecture en quatre documents — puis situez votre tolérance au risque avec le{" "}
        <a href="/outils/profil-investisseur">test de profil investisseur</a>, qui vous donnera des
        pistes sur la part d'actions cohérente avec votre horizon.
      </p>
      <p>
        Et si vous préférez ne pas faire cette lecture seul, c'est précisément le métier de notre
        cabinet : vérifier les documents avant de vous orienter, et vous expliquer ce que nous y
        trouvons. Le premier échange est offert — venez avec le nom de l'ETF qui vous intrigue, nous
        le décortiquerons ensemble, méthodologie et inventaire à l'appui.
      </p>
    </>
  );
}
