import type { ArticleMeta } from "../article-types";
import { FaqArticle } from "./faq";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "sfdr-refonte-et-regles-esma-noms-de-fonds-ce-qui-change",
  title: "SFDR 2.0 et noms de fonds ESMA : ce qui change",
  excerpt:
    "La réforme du SFDR n'est pas en vigueur, mais les règles ESMA sur les noms de fonds, si. Où en est-on au 28 septembre 2026, et que lire sur vos fonds ?",
  readingTime: "11 min",
  category: "Labels & Greenwashing",
  date: "2026-09-28",
  tags: ["SFDR", "SFDR 2.0", "ESMA", "noms de fonds", "réglementation européenne", "greenwashing"],
  author: "Sébastien Petrisot",
  faq: [
    {
      q: "Les Articles 8 et 9 du SFDR ont-ils déjà disparu ?",
      a: "Non. À la date de rédaction (28 septembre 2026), la révision n'a pas abouti : le règlement actuel s'applique toujours, avec ses catégories Article 6, 8 et 9. La proposition de la Commission de novembre 2025 prévoit de les remplacer par trois catégories définies par des critères, mais Parlement et Conseil doivent encore s'accorder sur un texte final.",
    },
    {
      q: "Qu'est-ce que le « SFDR 2.0 » ?",
      a: "C'est le surnom donné par le marché à la révision du règlement SFDR proposée par la Commission en novembre 2025. Ce n'est pas un texte distinct : la procédure porte sur la modification du règlement (UE) 2019/2088, et rien n'est applicable tant qu'elle n'est pas adoptée.",
    },
    {
      q: "Quand la réforme du SFDR s'appliquera-t-elle ?",
      a: "La date n'est pas arrêtée. À la date de rédaction, aucun texte final n'a été adopté, et la fiche officielle de la procédure indique que le Parlement n'a pas encore adopté sa position en première lecture ; elle ne liste ni vote en séance plénière ni négociation à trois.",
    },
    {
      q: "Un fonds qui n'a plus « ESG » dans son nom est-il devenu moins responsable ?",
      a: "Pas nécessairement. Le changement de nom peut signaler que le fonds ne remplissait pas les critères pour garder le mot, ou qu'un gérant a préféré un autre vocabulaire en gardant sa stratégie. L'annexe précontractuelle et l'inventaire du portefeuille disent ce que le fonds fait réellement.",
    },
    {
      q: "Les règles de l'ESMA sur les noms de fonds concernent-elles mon assurance vie ou mon PER ?",
      a: "Elles visent les fonds et leurs gestionnaires, pas le nom d'un contrat. Les supports de votre contrat, quand ce sont des fonds, sont concernés en tant que fonds. Pour le contrat lui-même, lisez les documents de l'assureur.",
    },
    {
      q: "Un fonds dont le nom contient « durable » investit-il 100 % dans des entreprises durables ?",
      a: "Non. Les orientations de l'ESMA fixent un seuil de 80 % des investissements servant les caractéristiques ou l'objectif annoncés, selon la stratégie contraignante du fonds. Le reste n'est pas couvert par ce seuil, et « durable » s'entend selon la méthodologie du gérant : deux fonds peuvent l'appliquer différemment.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> à la date de rédaction (28 septembre 2026), la réforme du
          SFDR n'est pas en vigueur : les catégories « Article 6, 8 et 9 » s'appliquent toujours. La
          Commission a proposé en novembre 2025 de les remplacer par trois catégories définies par
          des critères, le Conseil a arrêté son mandat de négociation le 24 juin 2026 et la
          commission des affaires économiques du Parlement a voté le sien le 10 septembre 2026. Le
          texte final et la date d'application ne sont pas arrêtés. En revanche, les orientations de
          l'ESMA sur les noms de fonds s'appliquent déjà : elles attendent d'un fonds qui affiche «
          ESG », « durable » ou « transition » dans son nom un seuil de 80 % et des exclusions. Ce
          que vous devez lire sur un fonds ne change pas : son nom, son annexe SFDR, son
          portefeuille.
        </p>
      </div>

      <p>
        Vous avez peut-être croisé « SFDR 2.0 » dans la presse financière, ou constaté que le fonds
        de votre contrat a perdu le mot « ESG » ou « durable » dans son nom, sans que rien d'autre
        ne semble avoir bougé. Deux mouvements réglementaires distincts se mélangent ici, et les
        confondre conduit soit à croire que tout est déjà réformé, soit à ignorer des règles déjà
        applicables.
      </p>
      <p>
        Le SFDR (<em>Sustainable Finance Disclosure Regulation</em>) est le règlement européen qui
        oblige les acteurs financiers à publier des informations de durabilité. « SFDR 2.0 » n'est
        pas une appellation officielle : c'est le surnom de sa révision, en discussion. Les
        orientations de l'ESMA, l'autorité européenne des marchés financiers, sont un texte à part,
        qui encadre l'usage de termes comme « ESG » ou « durable » dans le nom même d'un fonds. Cet
        article distingue, sources officielles à l'appui, ce qui est établi, ce qui est proposé et
        ce qui reste ouvert, puis donne une méthode de lecture valable avant comme après la réforme.
      </p>

      <h2>Qu'est-ce que le SFDR aujourd'hui, et pourquoi la Commission veut-elle le réformer ?</h2>
      <p>
        Le SFDR est un régime de <strong>transparence</strong> : il impose aux sociétés de gestion
        de déclarer si leur fonds ne poursuit aucune ambition de durabilité (Article 6), s'il
        promeut des caractéristiques environnementales ou sociales (Article 8) ou s'il poursuit un
        objectif d'investissement durable (Article 9), et de publier des documents en conséquence.
        Le régime actuel ne fixe pas de critères minimaux de composition, et la catégorie est
        choisie par la société de gestion elle-même. Nous détaillons cette mécanique, et ses
        limites, dans notre article{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          Article 8 ou 9 : ce que la classification garantit
        </LienArticle>
        .
      </p>
      <p>
        C'est précisément ce que la Commission européenne met en cause. Dans son{" "}
        <a
          href="https://finance.ec.europa.eu/news/commission-proposes-improvements-sfdr-2025-11-21_en"
          target="_blank"
          rel="noreferrer"
        >
          communiqué de novembre 2025
        </a>
        , elle relève que les informations publiées sont souvent trop longues et complexes pour être
        comparées par des épargnants, et que le SFDR a été utilisé de fait comme un système
        d'étiquetage, avec un risque de confusion, d'écoblanchiment (greenwashing) et de mauvaise
        vente. Deux reproches à la fois : trop de papier, pas assez de critères.
      </p>

      <h2>Que prévoit la révision du SFDR, et où en est la négociation au 28 septembre 2026 ?</h2>
      <h3>Ce que propose la Commission</h3>
      <p>
        La proposition, présentée en novembre 2025 (document COM(2025) 841), remplace le principe «
        déclarez ce que vous faites » par des catégories de produits assorties de critères. Selon la{" "}
        <a
          href="https://finance.ec.europa.eu/news/commission-proposes-improvements-sfdr-2025-11-21_en"
          target="_blank"
          rel="noreferrer"
        >
          Commission
        </a>
        , il y aurait trois catégories facultatives : « durable » (produits qui contribuent à des
        objectifs de durabilité), « transition » (produits qui orientent des capitaux vers des
        entreprises ou projets pas encore durables mais engagés sur une trajectoire de transition
        crédible) et « ESG de base » (produits qui intègrent des approches ESG variées sans
        satisfaire aux critères des deux autres). Chaque produit catégorisé devrait consacrer 70 %
        de son portefeuille à la stratégie de durabilité choisie, exclure des activités jugées
        nuisibles, et seuls les produits catégorisés pourraient afficher des allégations ESG dans
        leur nom et leur communication. Enfin, les acteurs financiers n'auraient plus à publier, au
        niveau de l'entreprise, la prise en compte des principales incidences négatives de leurs
        décisions d'investissement.
      </p>
      <h3>Où en est la procédure ?</h3>
      <p>Dates issues des sources officielles consultées le 28 septembre 2026 :</p>
      <ul>
        <li>
          <strong>19-20 novembre 2025 :</strong> la Commission présente sa proposition, publiée sous
          la référence COM(2025) 841 à la date du 20 novembre (procédure 2025/0361(COD), selon la{" "}
          <a
            href="https://oeil.europarl.europa.eu/oeil/en/procedure-file?reference=2025/0361(COD)"
            target="_blank"
            rel="noreferrer"
          >
            fiche officielle du Parlement européen
          </a>
          ).
        </li>
        <li>
          <strong>24 juin 2026 :</strong> le Conseil de l'UE{" "}
          <a
            href="https://www.consilium.europa.eu/en/press/press-releases/2026/06/24/council-agrees-position-on-simpler-transparency-rules-for-sustainable-financial-products/"
            target="_blank"
            rel="noreferrer"
          >
            arrête sa position de négociation
          </a>
          .
        </li>
        <li>
          <strong>10 septembre 2026 :</strong> la commission des affaires économiques et monétaires
          (ECON) du Parlement adopte son texte, par 37 voix contre 9 et 4 abstentions, d'après le{" "}
          <a
            href="https://www.europarl.europa.eu/news/en/press-room/20260907IPR47414/"
            target="_blank"
            rel="noreferrer"
          >
            communiqué du Parlement
          </a>
          . Le mandat de négociation doit être annoncé au début de la session plénière d'octobre.
        </li>
        <li>
          <strong>15 septembre 2026 :</strong> le rapport de la commission est déposé pour la séance
          plénière (référence A10-0234/2026, d'après la fiche de procédure).
        </li>
      </ul>
      <p>
        <strong>Ce qui n'est pas établi à ce jour :</strong> la fiche officielle de la procédure
        indique que la position du Parlement en première lecture est encore attendue, et ne liste
        aucun vote en séance plénière ni aucune négociation à trois (« trilogue ») entre Parlement,
        Conseil et Commission. Le texte final, la date d'entrée en vigueur et le délai d'application
        ne sont donc pas arrêtés : toute date avancée à ce stade est une anticipation, pas un fait.
      </p>
      <h3>Deux visions déjà visibles : le cas des énergies fossiles</h3>
      <p>
        Les deux positions publiées diffèrent sur un point sensible, le traitement des entreprises
        actives dans les énergies fossiles pour la catégorie « transition ». Le Conseil précise que
        les investissements dans des entreprises du secteur fossile qui consacrent{" "}
        <a
          href="https://www.consilium.europa.eu/en/press/press-releases/2026/06/24/council-agrees-position-on-simpler-transparency-rules-for-sustainable-financial-products/"
          target="_blank"
          rel="noreferrer"
        >
          20 % de leurs dépenses d'investissement
        </a>{" "}
        à des activités alignées sur la taxonomie verte européenne sont reconnus dans cette
        catégorie. La commission ECON, elle, exclut ces entreprises sauf conditions :
        investissements importants dans des activités durables, objectifs de réduction d'émissions
        mesurables et datés, plus de capital orienté vers le durable que vers de nouveaux projets
        fossiles. Premier argument : la transition passe aussi par des entreprises encore fossiles,
        qu'il faut pouvoir financer. Second argument : une catégorie censée clarifier le marché perd
        son sens si elle accueille trop largement le secteur qu'elle prétend faire évoluer. Le
        compromis final n'est pas connu.
      </p>

      <h2>Que disent les lignes directrices de l'ESMA sur les noms de fonds ?</h2>
      <p>
        Contrairement à la réforme du SFDR, ces règles sont déjà applicables. Publiées en mai 2024
        et datées du 21 août 2024 dans leur version française, les{" "}
        <a
          href="https://www.esma.europa.eu/sites/default/files/2024-08/ESMA34-1592494965-657_Guidelines_on_funds_names_using_ESG_or_sustainability_related_terms_FR.pdf"
          target="_blank"
          rel="noreferrer"
        >
          orientations de l'ESMA sur les noms de fonds
        </a>{" "}
        s'appliquent depuis le 21 novembre 2024 aux fonds créés après cette date, et depuis le 21
        mai 2025 aux fonds qui existaient déjà. Ce sont des orientations, adressées aux sociétés de
        gestion et aux autorités nationales, qui les prennent en compte dans leur supervision : ce
        n'est pas un label, mais un cadre de contrôle des noms.
      </p>
      <table>
        <thead>
          <tr>
            <th>Terme dans le nom du fonds</th>
            <th>Seuil</th>
            <th>Exclusions</th>
            <th>Exigence en plus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>« transition », « social », « gouvernance » et dérivés</td>
            <td>80 % des investissements</td>
            <td>
              Exclusions de base (article 12(1), points a à c, du règlement délégué 2020/1818)
            </td>
            <td>Pour « transition » : trajectoire claire et mesurable</td>
          </tr>
          <tr>
            <td>
              Termes environnementaux (« vert », « climat », et les abréviations « ESG » et « ISR »)
            </td>
            <td>80 %</td>
            <td>Exclusions élargies (points a à g), qui incluent les énergies fossiles</td>
            <td>Aucune</td>
          </tr>
          <tr>
            <td>« impact » et dérivés</td>
            <td>80 %</td>
            <td>Exclusions élargies (points a à g)</td>
            <td>Impact positif et mesurable, en parallèle du rendement financier</td>
          </tr>
          <tr>
            <td>« durable » et dérivés</td>
            <td>80 %</td>
            <td>Exclusions élargies (points a à g)</td>
            <td>
              Engagement d'investir de manière significative dans des investissements durables
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Trois lectures à retenir. Les 80 % mesurent la part des investissements qui respecte les
        éléments contraignants de la stratégie publiés dans l'annexe SFDR : c'est la stratégie du
        fonds, pas un barème externe, avec une marge de 20 % et une liberté méthodologique. Les
        exclusions sont une obligation distincte, qui renvoie aux règles des indices de référence
        climatiques de l'UE (leurs seuils chiffrés se lisent dans le règlement délégué lui-même).
        Enfin, un écart temporaire est traité comme un dépassement passif, à corriger dans l'intérêt
        des investisseurs.
      </p>

      <h3>Quel effet ces règles ont-elles eu sur le marché ?</h3>
      <p>
        L'ESMA a publié le 17 décembre 2025 une{" "}
        <a
          href="https://www.esma.europa.eu/press-news/esma-news/esma-reviews-impact-guidelines-esg-or-sustainability-related-terms-fund-names"
          target="_blank"
          rel="noreferrer"
        >
          analyse d'impact
        </a>{" "}
        fondée sur les notifications aux porteurs des 25 plus grands gestionnaires européens (près
        de 1 000 notifications, 924 fonds retenus) : parmi les fonds cités, 64 % ont changé de nom,
        le plus souvent en supprimant tout terme ESG, et 56 % ont modifié leur politique
        d'investissement, surtout en ajoutant des exclusions fossiles. Les fonds qui ont gardé un
        terme ESG ont, depuis, réduit leur part de titres fossiles davantage que les autres.
      </p>
      <p>
        Deux lectures coexistent, et l'ESMA elle-même les nourrit. La première y voit un nettoyage :
        des fonds ont retiré des mots qu'ils ne pouvaient plus justifier. La seconde insiste sur les
        limites : l'échantillon ne couvre que des notifications faisant explicitement référence aux
        orientations, un fonds a pu appliquer ces exclusions sans que cela change son portefeuille,
        et de nouveaux mots (l'ESMA cite « scored », « screened », « select », « advanced », «
        committed ») ont remplacé les termes ESG dans près de la moitié des cas de suppression, ce
        que l'autorité dit surveiller. Pour l'épargnant : l'absence d'un mot ne dit pas qu'un fonds
        a abandonné sa démarche, et sa présence ne dit pas qu'il l'a tenue.
      </p>

      <h2>Qu'est-ce que ça change concrètement pour votre épargne ?</h2>
      <p>
        Rien dans votre contrat ne change du fait de la réforme, puisqu'elle n'est pas adoptée ; ce
        qui a déjà changé, ce sont les noms de fonds. Le tableau distingue ce qui est en vigueur, ce
        qui est seulement proposé, et ce qu'il faut surveiller.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Aujourd'hui (en vigueur)</th>
            <th>Proposé (en discussion, non adopté)</th>
            <th>À surveiller</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Vocabulaire des fonds</strong>
            </td>
            <td>Article 6, 8 ou 9, déclaré par la société de gestion, sans critères minimaux</td>
            <td>Trois catégories facultatives : durable, transition, ESG de base</td>
            <td>
              Le vocabulaire qui apparaîtra sur vos documents ; la durée de coexistence des deux
              systèmes n'est pas établie
            </td>
          </tr>
          <tr>
            <td>
              <strong>Nom et communication</strong>
            </td>
            <td>Orientations ESMA : 80 % et exclusions selon les termes employés</td>
            <td>
              Allégations ESG dans le nom et le marketing réservées aux produits catégorisés
              (proposition de la Commission)
            </td>
            <td>
              Le devenir des orientations ESMA une fois le règlement adopté : non établi dans les
              sources consultées
            </td>
          </tr>
          <tr>
            <td>
              <strong>Seuil</strong>
            </td>
            <td>80 % pour les noms ; pas de seuil chiffré dans le SFDR lui-même</td>
            <td>70 % du portefeuille pour chaque catégorie</td>
            <td>
              Ce qui compte comme « conforme » : les deux seuils ne se comparent pas directement
            </td>
          </tr>
          <tr>
            <td>
              <strong>Énergies fossiles</strong>
            </td>
            <td>Exclusions ESMA liées au nom du fonds</td>
            <td>
              Exclusions par catégorie ; positions du Conseil et de la commission ECON différentes
            </td>
            <td>Le compromis final sur la catégorie « transition »</td>
          </tr>
          <tr>
            <td>
              <strong>Informations publiées</strong>
            </td>
            <td>Annexes standardisées, longues, et publications au niveau de l'entreprise</td>
            <td>
              Communication allégée ; fin de l'obligation de publication des incidences négatives au
              niveau de l'entreprise (Commission)
            </td>
            <td>Ce qui restera lisible et comparable pour un épargnant</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pour l'assurance vie et le PER, les orientations de l'ESMA s'adressent aux gestionnaires de
        fonds, non aux assureurs : le nom d'un contrat n'est pas encadré par elles, mais celui de
        ses supports, quand ce sont des fonds, l'est. Notre article sur la{" "}
        <LienArticle slug="taxonomie-verte-europeenne-epargne">
          taxonomie verte européenne et votre épargne
        </LienArticle>{" "}
        détaille le dictionnaire commun sur lequel ces catégories s'appuient.
      </p>

      <h2>Comment lire un fonds pendant la période de transition ?</h2>
      <p>
        Tant que les catégories actuelles s'appliquent et que les nouvelles ne sont pas adoptées, la
        meilleure défense est une méthode indifférente au vocabulaire. Nous l'appelons la lecture{" "}
        <strong>N-A-P : Nom, Annexe, Portefeuille</strong>.
      </p>
      <ol>
        <li>
          <strong>Nom.</strong> Repérez les termes (« ESG », « durable », « transition », « impact
          », « climat »…) : ils déclenchent, selon les orientations, un seuil de 80 % et des
          exclusions précises. Un fonds sans aucun de ces termes n'est pas soumis à ces règles de
          nom.
        </li>
        <li>
          <strong>Annexe.</strong> Ouvrez l'annexe précontractuelle SFDR : la stratégie
          contraignante, la part minimale d'investissements alignés et les exclusions volontaires y
          sont écrites. C'est là que le seuil de 80 % prend son sens concret.
        </li>
        <li>
          <strong>Portefeuille.</strong> Confrontez ces engagements à l'inventaire publié : les
          premières lignes correspondent-elles à la promesse du nom ?
        </li>
      </ol>
      <p>
        <strong>Un exemple de calcul.</strong>{" "}
        <em>
          Situation type construite pour illustrer le calcul, à partir de paramètres réalistes :
          aucun fonds réel n'est visé.
        </em>{" "}
        Un fonds fictif de 10 millions d'euros porte le mot « durable » dans son nom. Selon les
        orientations de l'ESMA, au moins 80 % de ses investissements, soit 8 millions d'euros,
        doivent respecter les éléments contraignants de sa stratégie ; jusqu'à 2 millions d'euros
        restent hors de ce seuil. Si une catégorie « durable » à 70 % était adoptée, ce seuil serait
        de 7 millions d'euros, mais les deux chiffres ne se comparent pas terme à terme, car ce qui
        compte comme conforme n'est pas défini de la même façon. Un pourcentage ne dit rien tant
        qu'on n'a pas lu ce qu'il mesure. Pour aller plus loin sur un fonds « vert », voyez notre{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          méthode pour repérer le greenwashing d'un fonds
        </LienArticle>{" "}
        ; et notre <a href="/outils/decodeur-label">décodeur de labels</a> résume ce que chaque
        repère garantit et où le vérifier.
      </p>

      <h2>Faut-il attendre la fin de la réforme pour investir ?</h2>
      <p>
        Il n'y a pas de réponse universelle, et les deux positions se défendent. Pour attendre : les
        critères et le vocabulaire des fonds vont évoluer, et choisir sur une étiquette appelée à
        changer peut sembler prématuré. Pour agir : le calendrier n'est pas arrêté, l'attente peut
        durer, et ce que vous détenez réellement, avec ses frais, compte plus que l'étiquette qui
        l'accompagne. Deux repères aident à trancher. Une nouvelle étiquette ne dit pas, à elle
        seule, ce qu'un fonds détient. Et changer de support plus tard peut avoir un coût (frais
        d'arbitrage, fiscalité, délais), à vérifier dans les conditions de votre enveloppe. Ce qui
        ne dépend pas de la réforme peut se faire dès maintenant : lire les documents de vos
        supports actuels, comme nous l'expliquons dans notre article{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          Label ISR : ce qu'il garantit vraiment
        </LienArticle>
        , qui complète le SFDR par un label public audité.
      </p>

      <h2>Vos questions sur la réforme du SFDR et les noms de fonds</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Ce qu'il faut retenir de la réforme du SFDR, et par où commencer</h2>
      <p>
        <strong>La réponse à votre question :</strong> non, la réforme du SFDR ne change pas encore
        ce que vous lisez sur vos fonds, puisqu'elle n'est pas adoptée. Les règles sur les noms de
        fonds, elles, s'appliquent déjà et ont modifié les fiches et les noms de nombreux fonds.
      </p>
      <p>
        <strong>Ce qu'il faut garder en tête :</strong> un nom, une catégorie ou un seuil ne sont
        que le sommaire d'un fonds. Attendre la réforme pour vérifier vos supports reviendrait à
        repousser une lecture possible dès aujourd'hui, avec les mêmes documents.
      </p>
      <p>
        <strong>La suite logique :</strong> reprenez la mécanique du régime actuel avec notre
        article{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          Article 8 ou 9 : ce que la classification garantit
        </LienArticle>
        , puis appliquez la lecture N-A-P à un fonds que vous détenez déjà.
      </p>
      <p>
        Et si vous préférez faire ce travail à deux, vous pouvez{" "}
        <a href="/cgp-investissement-responsable">
          échanger avec un conseiller en gestion de patrimoine spécialisé en investissement
          responsable
        </a>{" "}
        : le premier échange est offert et sans engagement, et il permet d'obtenir des pistes pour
        lire vos supports et suivre l'évolution de la réglementation.
      </p>
    </>
  );
}
