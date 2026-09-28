import type { ArticleMeta } from "../article-types";
import { FaqArticle } from "./faq";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "que-finance-votre-assurance-vie-comment-le-savoir",
  title: "Que finance votre assurance vie ? Comment le savoir",
  excerpt:
    "Fonds en euros, unités de compte, Livret A, PEA : ce que finance votre épargne, et les quatre documents à demander pour le vérifier vous-même.",
  readingTime: "12 min",
  category: "Fondamentaux",
  date: "2026-09-28",
  tags: [
    "que finance mon assurance vie",
    "fonds en euros",
    "unités de compte",
    "Livret A",
    "transparence",
  ],
  author: "Alexandre Pollet",
  faq: [
    {
      q: "Mon assureur est-il obligé de me dire dans quoi mon contrat est investi ?",
      a: "En partie. Chaque année, il doit vous communiquer notamment la valeur de vos unités de compte, leur évolution, les frais prélevés et, depuis le 1er janvier 2022, la manière dont sa politique d'investissement prend en compte les critères environnementaux, sociaux et de gouvernance. La liste légale ne prévoit pas l'inventaire ligne à ligne de l'actif général qui porte le fonds en euros : il se cherche dans le rapport publié par l'assureur.",
    },
    {
      q: "Le fonds en euros finance-t-il uniquement la dette de l'État ?",
      a: "Non. Les obligations représentent environ 60 % des placements des assureurs-vie selon l'ACPR, mais une obligation peut être émise par un État comme par une entreprise, et le reste est placé dans d'autres classes d'actifs. La répartition propre à votre assureur se lit dans ses publications.",
    },
    {
      q: "Mon argent au Livret A finance-t-il vraiment le logement social ?",
      a: "Pour la part centralisée, oui : la loi prévoit que les sommes centralisées à la Caisse des dépôts sont employées à titre prioritaire au logement social, et cette part représentait 59,5 % de l'encours des Livret A et LDDS fin 2025. Le reste, conservé par votre banque, finance notamment les PME, la transition énergétique et l'économie sociale et solidaire selon la Banque de France.",
    },
    {
      q: "Acheter des actions ou un ETF dans mon PEA finance-t-il directement les entreprises ?",
      a: "Pas directement dans la plupart des cas. Une entreprise reçoit l'argent quand elle émet des titres (introduction en bourse, augmentation de capital, émission d'obligations) ; en achetant des titres déjà cotés, vous les rachetez à un autre porteur, et l'émetteur n'intervient plus. L'effet de votre achat est donc plus indirect, et son ampleur reste débattue.",
    },
    {
      q: "Un contrat « ISR » finance-t-il forcément moins d'énergies fossiles ?",
      a: "Pas de garantie automatique. Un label ou une classification décrit une méthode, pas le contenu exact d'un portefeuille : dans son étude de mars 2023 sur les fonds français, l'AMF observe que, hors fonds actions, l'écart d'exposition aux énergies fossiles entre fonds Article 8 et fonds Article 6 n'est presque jamais significatif. Seul l'inventaire du fonds répond pour votre contrat.",
    },
    {
      q: "Que faire si mon assureur ne répond pas à ma demande de documents ?",
      a: "Envoyez une réclamation écrite (courrier ou email), en listant précisément les documents demandés, et gardez une trace datée. Si la réponse ne vient pas ou ne vous satisfait pas, vous pouvez saisir le Médiateur de l'assurance, gratuit pour l'assuré, une fois cette réclamation écrite adressée à l'assureur ; les délais de saisine sont précisés sur son site.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> votre assurance vie finance deux choses différentes selon la
          poche concernée. Le <em>fonds en euros</em> est placé par l'assureur dans son actif
          général, en grande partie en obligations d'États et d'entreprises ; les{" "}
          <em>unités de compte</em> achètent des parts de fonds (actions, obligations, immobilier…)
          dont l'inventaire est publié. Vous pouvez donc savoir dans quoi votre contrat est investi
          — à condition d'ouvrir quatre documents : le relevé annuel, la liste des supports avec
          leur document d'informations clés, l'inventaire de chaque fonds et le rapport
          extra-financier de l'assureur. La poche en euros est la moins lisible, et c'est
          précisément celle où se trouve, en France, la majorité de l'encours.
        </p>
      </div>

      <p>
        Vous ouvrez votre relevé d'assurance vie : une valeur de rachat, un pourcentage de
        revalorisation, quelques lignes de supports avec des noms techniques. Rien, dans ce
        document, ne vous dit ce que cet argent finance. Des obligations d'État ? Des actions d'une
        entreprise dont vous ne partagez pas les activités ? Vous avez peut-être choisi un contrat «
        responsable » — sans pouvoir dire ce qu'il contient réellement.
      </p>
      <p>
        Le principe est pourtant simple. Une assurance vie n'est pas un coffre : c'est un contrat
        par lequel un assureur place votre épargne, directement (fonds en euros) ou via des fonds
        d'investissement (unités de compte). Ce qu'elle finance dépend donc de ces placements — et
        de la façon dont vous pouvez les consulter. Dans cet article : où va l'argent de chaque
        poche du contrat, ce qu'il en est du Livret A, du LDDS et du PEA, une méthode en quatre
        documents pour vérifier vous-même, un calcul chiffré, et les options si le résultat ne vous
        convient pas. Sans nommer aucune entreprise : on cherche ici une méthode, pas des coupables.
      </p>

      <h2>Que devient l'argent de mon assurance vie ?</h2>
      <p>
        Lorsque vous versez une prime, elle est répartie entre les supports que vous avez choisis
        (ou que la gestion pilotée choisit pour vous). Selon{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15274"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        , dans un fonds en euros l'assureur place les sommes sur des actifs peu risqués et garantit
        la valeur des fonds investis ; dans une unité de compte, la valeur varie avec les marchés et
        seul le nombre d'unités est garanti, pas leur valeur. Pour situer les masses en jeu, l'ACPR
        recense fin 2025 environ 1 361 milliards d'euros sur les contrats à capital garanti et 612
        milliards d'euros en unités de compte, dans son étude{" "}
        <a
          href="https://acpr.banque-france.fr/system/files/2026-06/20260630_AS180_revalorisation_2025.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Revalorisation 2025 des contrats d'assurance-vie et de capitalisation
        </a>
        . Autrement dit : dans l'ensemble du marché, la poche en euros — la moins lisible — pèse
        nettement plus lourd que la poche en unités de compte.
      </p>

      <h3>Que finance un fonds en euros ?</h3>
      <p>
        Il finance ce que l'assureur achète avec l'argent de tous ses assurés : son{" "}
        <strong>actif général</strong>, un portefeuille unique et mutualisé. D'après l'ACPR, les
        obligations en représentent environ 60 % des placements des assureurs-vie — c'est-à-dire des
        prêts consentis à des États, à des entreprises, à des établissements financiers. Le reste
        est réparti entre d'autres classes d'actifs. Pour vous, cela signifie trois choses concrètes
        :
      </p>
      <ul>
        <li>
          vous ne choisissez pas la composition : c'est l'assureur qui décide, pour l'ensemble des
          contrats ;
        </li>
        <li>
          la garantie porte sur la valeur de votre épargne, pas sur la nature de ce qu'elle finance
          ;
        </li>
        <li>
          la composition détaillée de l'actif général ne figure pas dans la liste légale du relevé :
          elle se cherche dans un rapport publié par l'assureur (voir la méthode plus bas).
        </li>
      </ul>
      <p>
        C'est aussi un angle mort possible du contrat « responsable » : nous en parlons dans{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">
          notre guide pour choisir une assurance vie ISR
        </LienArticle>
        .
      </p>

      <h3>Que finance une unité de compte ?</h3>
      <p>
        Une unité de compte est le plus souvent une part d'un fonds d'investissement, géré par une
        société de gestion. Votre argent achète donc des parts du fonds, et c'est le fonds qui
        achète des titres. Selon l'ACPR (même étude), les fonds actions représentent 32 % des actifs
        en représentation des unités de compte fin 2025, les fonds à allocation d'actifs 17 % et les
        fonds obligataires 12 % ; on trouve aussi des fonds monétaires, immobiliers et certains
        actifs détenus directement par les assureurs, comme des produits structurés.
      </p>
      <p>
        C'est la poche la plus documentée : chaque fonds a son document d'informations clés, son
        prospectus, ses rapports, son inventaire. Contrepartie connue : le capital n'est pas
        garanti.
      </p>

      <h3>Que veut dire « financer » quand on achète des titres déjà cotés ?</h3>
      <p>
        Une entreprise reçoit l'argent des investisseurs quand elle émet des titres sur le marché
        primaire (introduction en bourse, augmentation de capital, émission d'obligations). Ensuite,
        les titres s'échangent sur le marché secondaire, où, comme l'explique{" "}
        <a
          href="https://www.lafinancepourtous.com/decryptages/marches-financiers/acteurs-de-la-finance/bourse/la-bourse-a-quoi-ca-sert/"
          target="_blank"
          rel="noreferrer"
        >
          l'Institut pour l'éducation financière du public
        </a>
        , l'émetteur n'intervient plus : acheter une action déjà cotée, c'est la racheter à un autre
        porteur, pas alimenter directement l'entreprise. Cela ne rend pas votre choix anodin, mais
        son effet est plus indirect et son ampleur débattue : mieux vaut le savoir avant de lire que
        « votre épargne finance » telle ou telle activité.
      </p>

      <h2>Et mon Livret A, mon LDDS, mon PEA : que financent-ils ?</h2>
      <p>
        Hors assurance vie, les réponses diffèrent fortement : le tableau compare ce que finance
        chaque support, ce que vous pouvez consulter et la limite à connaître.
      </p>
      <table>
        <thead>
          <tr>
            <th>Support</th>
            <th>Ce que votre argent finance</th>
            <th>Ce que vous pouvez consulter</th>
            <th>Limite à connaître</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Livret A et LDDS</strong>
            </td>
            <td>
              Une part est centralisée à la Caisse des dépôts (59,5 % fin 2025) : elle sert à titre
              prioritaire au logement social. Le reste, conservé par la banque, finance notamment
              les PME, la transition énergétique et l'économie sociale et solidaire
            </td>
            <td>Le rapport annuel du Fonds d'épargne de la Caisse des dépôts</td>
            <td>
              Le rapport de la Caisse des dépôts ne détaille pas l'emploi de la part conservée par
              votre banque
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fonds en euros</strong>
            </td>
            <td>
              L'actif général de l'assureur, où les obligations pèsent environ 60 % des placements
              des assureurs-vie (ACPR)
            </td>
            <td>Le rapport annuel extra-financier de l'assureur</td>
            <td>Composition mutualisée, non choisie par vous, hors de la liste légale du relevé</td>
          </tr>
          <tr>
            <td>
              <strong>Unités de compte</strong>
            </td>
            <td>Les titres détenus par les fonds choisis (actions, obligations, immobilier…)</td>
            <td>Le document d'informations clés, le prospectus, l'inventaire du fonds</td>
            <td>
              Le capital n'est pas garanti ; un label ne remplace pas la lecture de l'inventaire
            </td>
          </tr>
          <tr>
            <td>
              <strong>PEA</strong>
            </td>
            <td>
              Des actions de sociétés ayant leur siège dans l'Union européenne ou, sous conditions,
              dans l'Espace économique européen, en direct ou via des fonds investis à plus de 75 %
              en de tels titres
            </td>
            <td>Les lignes détenues en direct, ou l'inventaire des fonds et ETF choisis</td>
            <td>Sur des titres déjà cotés, l'argent va à l'ancien porteur, pas à l'entreprise</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sources : pour le Livret A et le LDDS, la Caisse des dépôts indique dans son{" "}
        <a
          href="https://www.caissedesdepots.fr/sites/cdc.fr/files/2026-05/2026_05_18_CP_Caisse_des_De%CC%81po%CC%82ts_Rapport_annuel_2025_du_Fonds_d'e%CC%81pargne.pdf"
          target="_blank"
          rel="noreferrer"
        >
          communiqué du 18 mai 2026
        </a>{" "}
        que 59,5 % de l'encours est centralisé et sert principalement à des prêts de très long terme
        pour le logement social et les collectivités locales (22,9 milliards d'euros de prêts
        nouveaux au logement social et à la politique de la ville en 2025). La loi les affecte en
        priorité au logement social (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036432874"
          target="_blank"
          rel="noreferrer"
        >
          article L221-7 du Code monétaire et financier
        </a>
        ), et la Banque de France décrit l'emploi de la part non centralisée dans{" "}
        <a
          href="https://www.banque-france.fr/system/files/2025-07/ER-2024_Annexe-4_Cadre-juridique.pdf"
          target="_blank"
          rel="noreferrer"
        >
          son annexe sur l'épargne réglementée
        </a>
        . Pour le PEA, les titres éligibles figurent sur{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2385"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        .
      </p>

      <h2>Comment savoir dans quoi mon contrat est investi ? La méthode des quatre pièces</h2>
      <p>
        Quatre documents, du plus général au plus fin : le Relevé, les Supports, l'Inventaire, le
        Rapport — la méthode des <strong>quatre pièces</strong>.
      </p>
      <ol>
        <li>
          <strong>Le relevé annuel.</strong> Le Code des assurances liste ce que l'assureur doit
          vous communiquer chaque année (
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048252743"
            target="_blank"
            rel="noreferrer"
          >
            article L132-22
          </a>
          ) : notamment la valeur de rachat et, pour les unités de compte, leur valeur, leur
          évolution, les frais prélevés au titre de chaque unité de compte et les frais supportés
          par l'actif. Depuis le 1er janvier 2022, l'information annuelle doit aussi préciser la
          manière dont la politique d'investissement prend en compte les critères environnementaux,
          sociaux et de gouvernance. Ce que vous en tirez : combien d'euros dans chaque support, et
          donc le poids de chacun dans votre contrat.
        </li>
        <li>
          <strong>La liste des supports et leur document d'informations clés (DIC).</strong>{" "}
          Demandez à l'assureur la liste complète de vos supports détenus. Pour chacun, le DIC est,
          selon l'
          <a
            href="https://www.amf-france.org/sites/institutionnel/files/contenu_simple/guide/guide_pedagogique/Comprendre%20le%20document%20d'informations%20cles%20(DIC).pdf"
            target="_blank"
            rel="noreferrer"
          >
            AMF
          </a>
          , un document standardisé et court, obligatoirement remis avant la souscription, qui
          décrit le produit, son niveau de risque sur une échelle de 1 à 7 et ses frais. Il concerne
          notamment les fonds détenus via un contrat d'assurance vie en unités de compte.
        </li>
        <li>
          <strong>L'inventaire de chaque fonds.</strong> C'est l'étape la plus révélatrice. Le
          prospectus et les rapports de gestion publiés par la société de gestion détaillent ce que
          le fonds détient : lisez les dix premières positions, les secteurs et les pays. Notre{" "}
          <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
            méthode pour repérer le greenwashing d'un fonds « vert »
          </LienArticle>{" "}
          détaille cette lecture, signal par signal.
        </li>
        <li>
          <strong>Le rapport de l'assureur sur son actif général.</strong> Au titre de la loi
          énergie-climat, les assureurs-vie doivent publier sur leur site un rapport sur leur
          politique de prise en compte des risques de durabilité, précise{" "}
          <a
            href="https://acpr.banque-france.fr/loi-energie-climat-les-assureurs-doivent-poursuivre-leurs-progres"
            target="_blank"
            rel="noreferrer"
          >
            l'ACPR
          </a>
          . L'ACPR note toutefois des contenus très hétérogènes. Le décret d'application prévoit que
          ces rapports, pour les organismes dépassant 500 millions d'euros d'encours, mentionnent la
          part des encours dans des entreprises actives dans le secteur des combustibles fossiles (
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043543865"
            target="_blank"
            rel="noreferrer"
          >
            article D533-16-1 du Code monétaire et financier
          </a>
          ). C'est votre principale fenêtre sur la poche en euros.
        </li>
      </ol>
      <p>
        Si un document manque, demandez-le par écrit : notre{" "}
        <a href="/guide">diagnostic de contrat ISR</a> (PDF gratuit) propose la checklist des
        documents à réunir et un modèle d'email prêt à copier pour les réclamer.
      </p>

      <h3>Un exemple chiffré : combien de mon contrat est concerné ?</h3>
      <p>
        <em>
          Situation type construite pour illustrer le calcul, à partir de paramètres réalistes. Les
          pourcentages ci-dessous sont des hypothèses de lisibilité, pas des constats de marché.
        </em>
      </p>
      <p>
        Camille détient un contrat de 60 000 € : 30 000 € en fonds en euros, 10 000 € dans un fonds
        actions, 10 000 € dans un fonds obligataire et 10 000 € dans un fonds diversifié. Elle veut
        mesurer la part de son épargne exposée aux énergies fossiles, sans nommer d'entreprise. Le
        calcul tient en trois lignes : poids du support dans le contrat × part fossile du support =
        part fossile du contrat.
      </p>
      <table>
        <thead>
          <tr>
            <th>Support</th>
            <th>Montant</th>
            <th>Part fossile lue dans le document (hypothèse)</th>
            <th>Montant concerné</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fonds actions</td>
            <td>10 000 €</td>
            <td>5 % (inventaire)</td>
            <td>500 €</td>
          </tr>
          <tr>
            <td>Fonds obligataire</td>
            <td>10 000 €</td>
            <td>0 % (inventaire)</td>
            <td>0 €</td>
          </tr>
          <tr>
            <td>Fonds diversifié</td>
            <td>10 000 €</td>
            <td>0 % (inventaire)</td>
            <td>0 €</td>
          </tr>
          <tr>
            <td>Fonds en euros</td>
            <td>30 000 €</td>
            <td>3 % (rapport de l'assureur)</td>
            <td>900 €</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>60 000 €</strong>
            </td>
            <td></td>
            <td>
              <strong>1 400 € (environ 2,3 % du contrat)</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Deux enseignements, valables avec vos propres chiffres. La poche en euros, qui représente la
        moitié du contrat de Camille, pèse ici davantage que les trois fonds réunis : ignorer le
        rapport de l'assureur reviendrait à laisser de côté l'essentiel du calcul. Et c'est le poids
        dans le contrat qui compte, pas le pourcentage lu isolément. Le résultat n'est qu'un
        instantané : un inventaire d'aujourd'hui n'est pas celui de l'an prochain.
      </p>

      <h2>
        Mon contrat finance-t-il des énergies fossiles ? Comment le vérifier sans nommer
        d'entreprise
      </h2>
      <p>
        Chaque source répond à une partie de la question, et aucune ne suffit seule. Premier réflexe
        : fixer votre définition. Seulement les producteurs de charbon, de pétrole et de gaz, ou
        aussi les fournisseurs d'énergie et les équipementiers ? Ce choix vous appartient.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ce que vous regardez</th>
            <th>Ce que ça révèle</th>
            <th>Sa limite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>L'inventaire du fonds</strong>
            </td>
            <td>Les positions réellement détenues, par secteur et par pays</td>
            <td>
              Un instantané ; les groupes diversifiés se classent selon leur activité principale
            </td>
          </tr>
          <tr>
            <td>
              <strong>La politique d'exclusion du fonds</strong>
            </td>
            <td>Ce que le gérant s'interdit, au-delà de tout label</td>
            <td>
              Les seuils d'exclusion varient : lisez les pourcentages, pas seulement l'intitulé
            </td>
          </tr>
          <tr>
            <td>
              <strong>Le Label ISR</strong>
            </td>
            <td>
              Un référentiel public d'exclusions, détaillé dans{" "}
              <LienArticle slug="label-isr-que-garantit-il-vraiment">
                notre article sur ce que le label garantit
              </LienArticle>
            </td>
            <td>Il exclut certaines activités fossiles, pas toutes</td>
          </tr>
          <tr>
            <td>
              <strong>La classification SFDR (Article 6, 8, 9)</strong>
            </td>
            <td>
              Le degré de prise en compte des critères de durabilité, tel que déclaré par le gérant
            </td>
            <td>
              Ce n'est pas un certificat d'absence d'exposition fossile (voir l'étude de l'AMF
              ci-dessous)
            </td>
          </tr>
          <tr>
            <td>
              <strong>Le rapport de l'assureur</strong>
            </td>
            <td>La part de l'actif général exposée au secteur fossile</td>
            <td>Qualité inégale d'un assureur à l'autre, selon l'ACPR</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sur la classification : dans son{" "}
        <a
          href="https://www.amf-france.org/en/news-publications/news/sustainable-finance-disclosure-regulation-amf-publishes-study-classifications-and-fossil-fuel"
          target="_blank"
          rel="noreferrer"
        >
          étude publiée en mars 2023
        </a>{" "}
        sur les fonds français à fin 2021, l'AMF observe que les fonds actions classés Article 8 ou
        9 sont moins exposés aux énergies fossiles que leurs équivalents Article 6, mais que, pour
        les autres types de fonds, l'écart entre Article 8 et Article 6 n'est presque jamais
        significatif. Ces données sont anciennes ; retenez le principe : une classification décrit
        une méthode déclarée, pas le contenu de votre portefeuille.
      </p>

      <h2>Que faire si le résultat ne me convient pas ?</h2>
      <p>
        Vous avez des chiffres, et peut-être un écart avec ce que vous auriez choisi. Chaque option
        a un coût, y compris ne rien changer.
      </p>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Avantage</th>
            <th>Inconvénient réel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Arbitrer au sein du contrat</strong>
            </td>
            <td>
              Vous changez la répartition sans clôturer ; la fiscalité ne s'applique qu'en cas de
              rachat (
              <a
                href="https://www.service-public.gouv.fr/particuliers/vosdroits/F22414"
                target="_blank"
                rel="noreferrer"
              >
                service-public.gouv.fr
              </a>
              )
            </td>
            <td>
              Des frais d'arbitrage peuvent être prélevés sur les sommes transférées ; la gamme du
              contrat borne vos choix ; le fonds en euros reste celui de l'assureur
            </td>
          </tr>
          <tr>
            <td>
              <strong>Rediriger les versements futurs</strong>
            </td>
            <td>Vous n'avez pas à toucher à l'existant</td>
            <td>L'effet est lent : l'ancien capital reste investi comme avant</td>
          </tr>
          <tr>
            <td>
              <strong>Ouvrir un second contrat</strong>
            </td>
            <td>Une gamme de supports plus large, choisie sur pièces</td>
            <td>
              Il repart de zéro pour l'ancienneté fiscale ; de nouveaux frais d'entrée et de gestion
              sont à comparer
            </td>
          </tr>
          <tr>
            <td>
              <strong>Racheter et réinvestir ailleurs</strong>
            </td>
            <td>Table rase possible, sur l'enveloppe de votre choix</td>
            <td>
              Les gains rachetés sont fiscalisés, et le contrat perd son ancienneté ; à réserver aux
              cas où l'écart est réellement insupportable
            </td>
          </tr>
          <tr>
            <td>
              <strong>Garder tel quel, en connaissance de cause</strong>
            </td>
            <td>Aucune friction, aucun frais, ancienneté conservée</td>
            <td>L'écart entre vos valeurs et votre contrat subsiste ; à réévaluer chaque année</td>
          </tr>
        </tbody>
      </table>
      <p>
        Avant de choisir de nouveaux supports, notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> résume gratuitement ce que chaque
        label promet et où le vérifier ; la vérification finale reste le document officiel du fonds.
      </p>

      <h2>Vos questions sur ce que finance votre épargne</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Savoir ce que finance son épargne : une lecture de documents, pas un acte de foi</h2>
      <p>
        Vous avez maintenant la réponse à la question de départ : oui, on peut savoir ce que finance
        son assurance vie, avec des degrés de précision différents. Les unités de compte se lisent
        ligne à ligne dans l'inventaire des fonds. Le fonds en euros s'approche par le rapport
        extra-financier de l'assureur. Le Livret A et le LDDS se lisent dans les publications de la
        Caisse des dépôts, pour leur part centralisée. Rien de tout cela n'est réservé aux initiés :
        ce sont des documents publics, ou à demander par écrit.
      </p>
      <p>
        Ne pas les ouvrir a un coût : la composition de votre épargne reste décidée par défaut, et
        vous découvrez peut-être trop tard des lignes que vous n'auriez pas choisies. Le premier pas
        est modeste : le relevé annuel, un support, un inventaire.
      </p>
      <p>
        Pour la suite logique de cette lecture, notre{" "}
        <LienArticle slug="reperer-greenwashing-fonds-vert-methode">
          méthode 4P pour vérifier un fonds vert
        </LienArticle>{" "}
        vous apprend à lire chaque document sans vous laisser guider par la brochure, et le{" "}
        <a href="/guide">diagnostic de contrat ISR</a> vous donne la grille pour noter votre contrat
        pièce par pièce.
      </p>
      <p>
        Et si vous préférez faire cette lecture à deux, vous pouvez{" "}
        <a href="/cgp-investissement-responsable">échanger avec un conseiller du cabinet</a> avec
        vos propres relevés sous les yeux. Le premier échange est offert et sans engagement : vous
        en repartez avec des pistes à vérifier auprès de votre assureur.
      </p>
    </>
  );
}
