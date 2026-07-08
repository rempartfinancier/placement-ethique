import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "empreinte-carbone-epargne-pourquoi-mesurer",
  title: "Pourquoi (et comment) mesurer l'empreinte carbone de son épargne ?",
  excerpt:
    "Votre épargne finance des tonnes de CO2 que vos gestes du quotidien ne compensent pas. Comment ce chiffre se calcule, ses limites, et comment l'estimer.",
  readingTime: "10 min",
  category: "Conseil",
  date: "2026-07-07",
  tags: ["empreinte carbone", "intensité carbone", "SFDR", "article 29", "reporting climat"],
  author: "Alexandre Pollet",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> mesurer l'empreinte carbone de son épargne, c'est
          évaluer les émissions de gaz à effet de serre financées, directement ou
          indirectement, par ce que détiennent vos contrats — assurance vie, PER,
          compte-titres. Ce chiffre mérite votre attention parce qu'il peut peser bien plus
          lourd que votre empreinte personnelle du quotidien : une banque ou un fonds finance
          des activités entières, pas seulement vos propres trajets. Il se calcule au moyen de
          l'intensité carbone (en tonnes de CO2 par million d'euros investis), un indicateur
          que les grands acteurs financiers doivent désormais publier par obligation
          réglementaire — mais qui reste rarement accessible simplement à l'épargnant
          individuel, d'où l'intérêt d'une méthode pour le réclamer.
        </p>
      </div>

      <p>
        Vous triez vos déchets, vous avez réduit votre consommation de viande, vous prenez le
        vélo plutôt que la voiture pour les petits trajets — et vous avez peut-être déjà
        calculé votre empreinte carbone personnelle. Reste un angle mort presque systématique :
        les 20 000, 50 000 ou 150 000 euros logés dans votre assurance vie ou votre PER
        continuent, pendant ce temps, à financer ce qu'ils financent — sans que vous ayez
        jamais vraiment regardé quoi. Personne ne vous a présenté cette facture climatique
        comme on vous a présenté celle de votre voiture ou de votre chauffage, en partie parce
        qu'elle est plus difficile à établir et longtemps restée l'affaire des seuls
        investisseurs institutionnels. Elle est pourtant réelle, et de mieux en mieux
        documentée.
      </p>
      <p>
        Dans cet article : pourquoi l'empreinte carbone financée par votre épargne peut
        dépasser de loin votre empreinte personnelle, comment ce chiffre se calcule, ce qu'il ne
        garantit pas, un comparatif des grands types de supports face à ce critère, une méthode
        en quatre étapes pour estimer la vôtre, les documents à réclamer à votre banque ou votre
        assureur, et ce que la démarche change — ou non — pour le rendement.
      </p>

      <h2>Pourquoi l'empreinte carbone de votre épargne peut-elle peser plus lourd que vos gestes du quotidien ?</h2>
      <p>
        Commençons par remettre les ordres de grandeur face à face. L'empreinte carbone
        moyenne d'un habitant en France — sa consommation, importations comprises — s'élevait
        à environ 8,2 tonnes de CO2 équivalent en 2024, d'après les statistiques officielles du{" "}
        <a
          href="https://www.statistiques.developpement-durable.gouv.fr/lempreinte-carbone-de-la-france-de-1990-2024"
          target="_blank"
          rel="noreferrer"
        >
          service statistique du ministère de la Transition écologique
        </a>
        . Les scénarios compatibles avec l'Accord de Paris situent l'objectif collectif visé
        d'ici 2050 autour de 2 tonnes par personne et par an — un repère popularisé par des
        outils comme{" "}
        <a
          href="https://nosgestesclimat.fr/blog/environnement/reduire-empreinte-carbone-objectif-deux-tonnes"
          target="_blank"
          rel="noreferrer"
        >
          Nos Gestes Climat
        </a>
        .
      </p>
      <p>
        Ces deux chiffres concernent votre consommation directe : transport, logement,
        alimentation. Ils ne disent rien de ce que finance votre épargne — et l'écart peut être
        considérable. Une enquête conjointe des Amis de la Terre et d'Oxfam France, publiée en
        novembre 2019, a établi que les activités de financement et d'investissement des
        quatre plus grandes banques françaises (BNP Paribas, Crédit Agricole, Société Générale,
        BPCE) ont généré, sur la seule année 2018, plus de deux milliards de tonnes de CO2
        équivalent — soit{" "}
        <a
          href="https://www.oxfamfrance.org/actualite/les-banques-francaises-emettent-45-fois-plus-que-la-france-entiere/"
          target="_blank"
          rel="noreferrer"
        >
          4,5 fois les émissions totales de la France
        </a>{" "}
        cette même année. Chacune des trois plus grandes banques françaises dépassait déjà, à
        elle seule, l'empreinte du territoire national.
      </p>
      <p>
        Ce chiffre agrégé ne se divise pas par le nombre de clients pour obtenir « votre »
        part, mais il illustre un principe qui s'applique directement à vous : l'argent confié
        à une banque ou un assureur ne reste pas inerte, il est prêté et investi — avec un
        poids climatique qui peut dépasser de plusieurs fois votre empreinte personnelle.
        Réduire ses trajets en avion sans jamais regarder ce que finance son assurance vie,
        c'est souvent optimiser le petit levier en ignorant le grand.
      </p>

      <h2>Comment se calcule concrètement l'empreinte carbone d'un placement ?</h2>
      <p>
        Deux logiques coexistent. Les <strong>émissions financées</strong> attribuent à chaque
        investisseur une part des émissions d'une entreprise au prorata de sa participation :
        détenir 1 % du capital d'une entreprise qui émet 1 000 tonnes de CO2 par an vous en
        attribue 10 — un exemple purement illustratif. L'<strong>intensité carbone</strong>{" "}
        (souvent désignée WACI, pour <em>weighted average carbon intensity</em>) rapporte
        plutôt les émissions de chaque entreprise à son chiffre d'affaires, pondérées par son
        poids dans le fonds, et s'exprime en tonnes de CO2 par million d'euros investis
        (tCO2e/M€) — ce qui permet de comparer des fonds de tailles différentes.
      </p>
      <p>
        Ces calculs reposent sur trois périmètres, ou «&nbsp;scopes&nbsp;» : les émissions
        directes d'une entreprise (scope 1), ses émissions indirectes liées à l'énergie
        achetée (scope 2), et l'ensemble de sa chaîne de valeur en amont et en aval (scope 3) —
        généralement le plus lourd et le plus difficile à mesurer, ce qui explique pourquoi de
        nombreux calculs s'en tiennent encore aux scopes 1 et 2, au risque d'une image
        incomplète. Ce n'est plus un exercice réservé aux think tanks environnementaux : le
        règlement européen SFDR impose désormais aux acteurs des marchés financiers de publier
        les émissions par scope (PAI 1) et l'empreinte carbone de leurs investissements (PAI
        2) — un cadre détaillé dans notre article sur{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          ce que garantissent vraiment les classifications Article 8 et 9
        </LienArticle>
        . La France a par ailleurs été le premier pays au monde à imposer ce type de
        transparence aux investisseurs institutionnels, dès 2015, renforcé depuis par l'
        <a
          href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000039355992"
          target="_blank"
          rel="noreferrer"
        >
          article 29 de la loi Énergie-Climat de 2019
        </a>
        , qui oblige les grands investisseurs institutionnels à publier l'empreinte climat de
        leurs portefeuilles et leurs objectifs de réduction.
      </p>

      <h2>Un chiffre d'intensité carbone bas garantit-il un impact réel sur le climat ?</h2>
      <p>
        C'est la nuance la plus importante à comprendre avant de courir après ce chiffre : une
        intensité carbone qui baisse ne signifie pas nécessairement qu'une tonne de CO2 en
        moins a été émise dans l'atmosphère. Un fonds peut faire chuter son intensité carbone
        du jour au lendemain simplement en vendant ses lignes d'aciéries ou de cimenteries pour
        acheter des lignes de technologies — sans qu'aucune usine n'ait modifié son activité
        d'un gramme. Les titres vendus ont simplement changé de propriétaire.
      </p>
      <p>
        Ce constat n'est pas propre à ce site : cinq ans après l'entrée en vigueur de l'article
        173, une analyse de référence de Novethic concluait que ce cadre pionnier peinait
        encore à transformer réellement les pratiques d'investissement, au-delà d'une
        vingtaine d'acteurs engagés. Publier un chiffre est une chose ; qu'il traduise une
        décarbonation réelle de l'économie en est une autre — c'est le débat que nous
        détaillons dans notre article{" "}
        <LienArticle slug="engagement-actionnarial-vs-exclusion">
          « Exclure ou engager : quelle stratégie ISR change vraiment les choses ? »
        </LienArticle>
        .
      </p>
      <div className="callout">
        <p>
          <strong>Signal d'alerte :</strong> méfiez-vous d'un calculateur qui affiche un
          chiffre d'empreinte carbone unique sans jamais préciser sa méthodologie (quels
          scopes, quelle source, quelle date). Un chiffre sans méthode documentée ne se
          vérifie pas — il se croit sur parole.
        </p>
      </div>

      <h2>Tous les supports d'épargne ont-ils la même empreinte carbone ?</h2>
      <p>
        Non — l'écart tient moins à l'enveloppe (assurance vie, PER, compte-titres) qu'aux
        supports qu'on y loge :
      </p>
      <table>
        <thead>
          <tr>
            <th>Support</th>
            <th>Ce que finance concrètement votre argent</th>
            <th>Empreinte carbone mesurable et publiée ?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Livret A / LDDS</strong>
            </td>
            <td>
              Une part centralisée pour le logement social et les PME ; le solde reste au
              bilan de la banque, selon sa propre politique
            </td>
            <td>Non individualisée : aucun établissement ne la publie par livret</td>
          </tr>
          <tr>
            <td>
              <strong>Fonds euros classique d'assurance vie</strong>
            </td>
            <td>Un portefeuille diversifié d'obligations tous secteurs, un peu d'actions</td>
            <td>
              Rarement détaillée poste par poste ; les assureurs publient au mieux une
              intensité agrégée, récente et incomplète
            </td>
          </tr>
          <tr>
            <td>
              <strong>Unité de compte actions large, sans filtre (Article 6)</strong>
            </td>
            <td>Un indice ou un fonds actions « tout secteur », énergies fossiles comprises</td>
            <td>
              Oui en principe (PAI 1 et 2 publiés), mais aucune exclusion ni objectif climat
              n'a été appliqué en amont
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fonds SFDR Article 8</strong>
            </td>
            <td>Actions et obligations avec critères ESG intégrés, exclusions partielles</td>
            <td>
              Généralement publiée, mais dépend fortement de la méthodologie propre à chaque
              société de gestion
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fonds SFDR Article 9 à objectif climatique</strong>
            </td>
            <td>
              Un univers d'investissement restreint dès le départ aux émetteurs jugés alignés
              avec une trajectoire de réduction
            </td>
            <td>
              Oui, avec un objectif chiffré de réduction suivi dans le temps — à vérifier
              néanmoins dans le reporting réel, pas seulement la brochure
            </td>
          </tr>
          <tr>
            <td>
              <strong>Obligations vertes (green bonds)</strong>
            </td>
            <td>Des projets identifiés : rénovation énergétique, renouvelable, mobilité propre</td>
            <td>
              Oui, projet par projet, via le rapport d'allocation et d'impact publié par
              l'émetteur — une traçabilité à l'échelle du projet, pas de l'émetteur entier
            </td>
          </tr>
          <tr>
            <td>
              <strong>Épargne solidaire labellisée Finansol</strong>
            </td>
            <td>Des structures à utilité sociale, parfois environnementale</td>
            <td>
              Rarement exprimée en tonnes de CO2 : le critère central du label est social et
              solidaire, pas climatique
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        À retenir : l'empreinte carbone n'est ni universellement mesurée, ni universellement
        pertinente selon le support. Elle est la plus exploitable sur les fonds Article 8 ou 9
        et sur les obligations vertes — c'est là que la donnée existe vraiment.
      </p>

      <h2>Comment mesurer, en pratique, l'empreinte carbone de votre propre épargne ?</h2>
      <p>
        Voici la méthode que nous suivons pour aborder ce sujet avec un épargnant — quatre
        étapes, à appliquer dans cet ordre :
      </p>
      <ol>
        <li>
          <strong>Cartographier.</strong> Listez, contrat par contrat, ce que vous détenez
          réellement : nom exact de chaque fonds ou unité de compte, montant investi dans
          chacun. Sans cette liste, aucun calcul n'est possible.
        </li>
        <li>
          <strong>Chiffrer.</strong> Pour chaque ligne, cherchez la donnée déjà publiée (voir
          la section suivante) plutôt que de l'estimer à l'œil. Pour un premier ordre de
          grandeur avant d'obtenir ces documents, notre{" "}
          <a href="/outils/empreinte-carbone-epargne">outil d'estimation de l'empreinte carbone de l'épargne</a>{" "}
          donne une indication illustrative — pas un chiffre certifié.
        </li>
        <li>
          <strong>Comparer.</strong> Rapportez le chiffre obtenu à un repère : votre empreinte
          personnelle, l'intensité moyenne du marché actions, ou celle d'un fonds Article 9
          équivalent. Un chiffre isolé ne veut rien dire ; un chiffre comparé oriente une
          décision.
        </li>
        <li>
          <strong>Corriger.</strong> Si l'écart vous semble significatif, l'arbitrage se joue
          ligne par ligne — remplacer une unité de compte non filtrée par un équivalent Article
          8 ou 9, pas nécessairement tout vendre d'un coup. Chaque arbitrage a des conséquences
          fiscales propres à votre situation, à examiner avant d'agir.
        </li>
      </ol>

      <h2>Quels documents demander à votre banque ou à votre assureur pour obtenir ce chiffre ?</h2>
      <p>
        L'épargnant individuel n'a, le plus souvent, pas accès à un chiffre unique et prêt à
        l'emploi. Voici où le chercher :
      </p>
      <ul>
        <li>
          <strong>La déclaration SFDR sur les incidences négatives (PAI)</strong> de votre
          assureur ou société de gestion, publiée sur son site : elle contient, à l'échelle de
          l'entité, les émissions financées et l'intensité carbone agrégée.
        </li>
        <li>
          <strong>La fiche périodique (factsheet)</strong> de chaque fonds ou unité de compte,
          qui mentionne de plus en plus souvent une intensité carbone en tCO2e/M€ —
          demandez-la si elle n'apparaît pas spontanément.
        </li>
        <li>
          <strong>Le rapport annuel article 29</strong>, publié par les grands investisseurs
          soumis au seuil réglementaire, qui détaille l'empreinte climat de leurs encours.
        </li>
        <li>
          <strong>Le document d'informations clés (DIC)</strong> de chaque support, qui précise
          la classification SFDR (Article 6, 8 ou 9) — la première case à vérifier.
        </li>
      </ul>
      <p>
        L'absence de l'un de ces documents pour un support donné est en soi une information :
        elle mérite d'être posée comme question directe à votre interlocuteur, au même titre
        que les frais ou la performance.
      </p>

      <h2>Réduire l'empreinte carbone de son épargne fait-il mécaniquement baisser son rendement ?</h2>
      <p>
        Non, pas mécaniquement — mais la réponse complète est plus nuancée, et le champ est
        traversé d'études contradictoires selon les méthodologies et les périodes. Décarboner
        une allocation revient à sous-pondérer certains secteurs et à surpondérer d'autres, ce
        qui modifie le profil de risque du portefeuille sans en déterminer par avance le sens
        de la performance. Nous consacrons un article entier à cette question :{" "}
        <LienArticle slug="investir-ethique-performance-chiffres">
          « Investir éthique rapporte-t-il moins ? »
        </LienArticle>
        . Comme pour tout placement, les performances passées ne préjugent pas des performances
        futures, et un support investi en actions ou en obligations comporte un risque de perte
        en capital.
      </p>

      <h2>Vos questions sur l'empreinte carbone de l'épargne</h2>

      <h3>Qu'est-ce que l'empreinte carbone d'une épargne, exactement ?</h3>
      <p>
        C'est l'estimation des émissions de gaz à effet de serre financées, directement ou
        indirectement, par les entreprises et projets détenus dans vos contrats, au prorata de
        votre participation — à distinguer de votre empreinte personnelle, liée à votre
        consommation directe (transport, logement, alimentation).
      </p>

      <h3>Le Livret A a-t-il une empreinte carbone ?</h3>
      <p>
        Il en a nécessairement une, puisque les sommes déposées sont réemployées par la Caisse
        des dépôts et par les banques — mais ce chiffre n'est à ce jour pas publié par livret.
        La part centralisée finance surtout le logement social et les PME ; le solde suit la
        politique propre de chaque établissement.
      </p>

      <h3>Un fonds Article 9 a-t-il forcément une empreinte carbone plus faible qu'un Article 8 ?</h3>
      <p>
        En général oui, mais « en général » n'est pas « toujours » : la classification SFDR
        encadre une intention, pas un résultat chiffré garanti. Vérifiez l'intensité réelle
        publiée dans le reporting du fonds plutôt que de vous fier à la seule lettre de son
        article — notre <a href="/outils/decodeur-label">décodeur de labels</a> détaille ce
        que chaque référentiel garantit vraiment.
      </p>

      <h3>Existe-t-il un outil gratuit pour estimer l'empreinte carbone de mon épargne ?</h3>
      <p>
        Oui : notre <a href="/outils/empreinte-carbone-epargne">outil d'empreinte carbone de
        l'épargne</a> vous donne un ordre de grandeur pédagogique à partir de la répartition
        indicative de vos placements, sans inscription — un point de départ pour poser les
        bonnes questions, pas un substitut au chiffre officiel de votre assureur.
      </p>

      <h3>Faut-il tout vendre pour réduire son empreinte carbone ?</h3>
      <p>
        Non, et ce serait rarement la bonne réponse : chaque arbitrage a des conséquences
        fiscales (antériorité d'une assurance vie, plus-values latentes) propres à votre
        situation. L'ajustement se fait le plus souvent ligne par ligne, en remplaçant
        progressivement les supports non filtrés par des équivalents mieux notés, à profil de
        risque comparable.
      </p>

      <h3>Ma banque ou mon assureur est-elle obligée de me communiquer ce chiffre ?</h3>
      <p>
        Les acteurs financiers ont des obligations de publication au niveau de l'entité et des
        produits sous le règlement SFDR, et les plus grands investisseurs institutionnels sous
        l'article 29 de la loi Énergie-Climat. Ces publications sont réglementaires et
        générales : elles ne garantissent pas un relevé personnalisé de l'empreinte carbone de
        votre contrat individuel, qu'il faut le plus souvent reconstituer vous-même.
      </p>

      <h2>Un chiffre à interroger, pas un totem à afficher</h2>
      <p>
        Oui, l'empreinte carbone de votre épargne se mesure — de mieux en mieux, à mesure que
        la réglementation (SFDR, article 29) oblige les acteurs financiers à publier des
        données qu'ils gardaient pour eux. Et oui, ce chiffre mérite votre attention au moins
        autant que celui de vos trajets ou de votre chauffage, parce qu'il peut peser, euro
        pour euro, bien plus lourd sur le climat que votre consommation directe.
      </p>
      <p>
        Le coût de l'inaction n'est pas seulement climatique : c'est celui d'ignorer un critère
        pertinent sur une part de patrimoine parfois plus importante que tous vos postes de
        consommation réunis, simplement parce qu'il n'apparaît pas sur votre relevé
        trimestriel. À l'inverse, courir après une intensité carbone affichée sans en
        comprendre la méthodologie revient à remplacer une ignorance par une fausse certitude.
      </p>
      <p>
        Pour la suite logique de cette lecture : replacer cette question dans une démarche
        d'ensemble grâce à notre{" "}
        <LienArticle slug="investissement-ethique-guide-complet-2026">
          guide complet de l'investissement éthique
        </LienArticle>
        , qui situe chaque brique — dont celle-ci — dans une allocation cohérente.
      </p>
      <p>
        Et si vous préférez faire cet exercice de cartographie accompagné — relire vos
        contrats, obtenir les bons documents, situer votre allocation face à ce critère —,
        c'est notre métier : lors d'un premier échange offert, un conseiller du cabinet passe
        en revue votre épargne avec vous, documents à l'appui, sans jargon et sans engagement.
      </p>
    </>
  );
}
