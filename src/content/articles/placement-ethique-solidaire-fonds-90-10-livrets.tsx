import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";
import { FaqArticle } from "./faq";

export const meta: ArticleMeta = {
  slug: "placement-ethique-solidaire-fonds-90-10-livrets",
  title: "Placement éthique et solidaire : fonds 90/10 et livrets",
  excerpt:
    "Un placement solidaire finance des structures d'utilité sociale, un placement éthique filtre ses titres. Fonds 90/10, livrets, partage : le mode d'emploi.",
  readingTime: "11 min",
  category: "Fondamentaux",
  date: "2026-09-28",
  tags: [
    "épargne solidaire",
    "fonds 90/10",
    "fonds 85/15",
    "livret solidaire",
    "label Finansol",
    "ESUS",
  ],
  author: "Alexandre Pollet",
  faq: [
    {
      q: "Un fonds solidaire garantit-il mon capital ?",
      a: "Non. Un fonds solidaire est un fonds d'investissement : sa valeur varie avec les marchés et le capital peut être entamé. La garantie du capital est une caractéristique des livrets bancaires (dans la limite de la garantie des dépôts), pas des fonds. Un label ne remplace pas l'indicateur de risque du document d'informations clés, qui est le repère à lire avant de souscrire.",
    },
    {
      q: "Quelle différence entre un fonds « 90/10 » et un fonds « 85/15 » ?",
      a: "Le principe est le même : une poche de titres solidaires non cotés, le reste investi comme un fonds ordinaire. Ce qui change, c'est le plafond légal de la poche solidaire, relevé de 10 à 15 % de l'actif au 1er janvier 2025 pour les fonds proposés en assurance vie et en épargne salariale, le plancher restant à 5 %. L'appellation « 90/10 » reste très répandue, mais elle ne décrit plus la borne haute autorisée.",
    },
    {
      q: "Un placement solidaire est-il forcément un placement ISR ?",
      a: "Non. Solidaire et ISR répondent à deux questions différentes : le premier oriente une part de l'argent vers des activités d'utilité sociale, le second applique des critères ESG à la sélection des titres. Un fonds solidaire peut être labellisé ISR, mais ce n'est pas une obligation légale : la poche cotée, qui représente l'essentiel de l'actif, s'examine à part.",
    },
    {
      q: "Peut-on récupérer son argent à tout moment ?",
      a: "Sur un livret, en principe oui : les sommes restent disponibles, sous réserve des conditions du produit. Sur un fonds solidaire, vous pouvez en principe demander le rachat de vos parts, mais la disponibilité dépend de l'enveloppe qui les contient : un plan d'épargne entreprise rend l'épargne indisponible pendant cinq ans, sauf cas de déblocage anticipé, alors qu'une assurance vie reste rachetable.",
    },
    {
      q: "Les intérêts donnés sur un livret de partage sont-ils déductibles ?",
      a: "Les sommes abandonnées à un organisme d'intérêt général peuvent ouvrir droit à la réduction d'impôt pour dons, dans les conditions de droit commun : 66 % des sommes versées pour la plupart des organismes, dans la limite de 20 % du revenu imposable. Une convention avec l'établissement doit être signée à la souscription. Demandez à votre banque le détail du régime applicable à vos intérêts avant de souscrire.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> un placement éthique filtre ce que votre épargne détient ; un
          placement solidaire fait autre chose, il oriente une part précise de votre argent, ou de
          ses revenus, vers des activités d'utilité sociale. Dans un fonds « 90/10 » — que l'on dit
          désormais « 85/15 » —, cette part est comprise entre 5 et 15 % de l'actif, investie dans
          des structures non cotées agréées ESUS ; les 85 à 95 % restants forment un fonds
          ordinaire, avec un risque de perte en capital. Un livret solidaire, lui, garde le capital
          garanti, mais la solidarité tient à un fléchage ou à un don d'une fraction des intérêts.
          Ni synonyme d'ISR, ni équivalent du Livret A : trois questions suffisent pour savoir ce
          que vous achetez.
        </p>
      </div>

      <p>
        Le mot « solidaire » apparaît sur la fiche d'un fonds de votre assurance vie, dans la liste
        des supports de votre plan d'épargne entreprise, sur la brochure d'un livret. Vous vous
        demandez ce qu'il engage : où va concrètement l'argent, est-ce plus risqué qu'un fonds
        ordinaire, et pourquoi cette mention « 90/10 » que personne n'explique jamais ? Le doute est
        sain, surtout après des années de vocabulaire vert et responsable appliqué à tout.
      </p>
      <p>
        L'épargne solidaire regroupe les produits dont une partie de l'argent, ou une partie des
        revenus, bénéficie à des activités d'utilité sociale ou environnementale : logement très
        social, insertion par l'emploi, énergies renouvelables citoyennes. Ce n'est pas un label de
        sélection des titres, c'est un mécanisme de financement — et il se vérifie, à condition de
        savoir où regarder.
      </p>
      <h2>Placement éthique ou placement solidaire : quelle différence ?</h2>
      <p>
        Les deux mots se croisent sur les mêmes brochures et se confondent facilement. Ils ne
        répondent pourtant pas à la même question.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Placement éthique (ISR, ESG)</th>
            <th>Placement solidaire</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Question posée</strong>
            </td>
            <td>« Qu'est-ce que mon fonds accepte de détenir ? »</td>
            <td>« Qu'est-ce que mon épargne finance en plus ? »</td>
          </tr>
          <tr>
            <td>
              <strong>Mécanisme</strong>
            </td>
            <td>Critères ESG appliqués à la sélection des titres, sur tout le portefeuille</td>
            <td>
              Une poche de titres non cotés d'utilité sociale, ou un don d'une part des revenus
            </td>
          </tr>
          <tr>
            <td>
              <strong>Repère principal</strong>
            </td>
            <td>Label ISR, classification SFDR</td>
            <td>Label Finansol, agrément ESUS des entreprises financées</td>
          </tr>
          <tr>
            <td>
              <strong>Limite à garder en tête</strong>
            </td>
            <td>Une méthodologie, pas une garantie d'éthique ni d'impact mesuré</td>
            <td>
              La part solidaire reste minoritaire, et le reste du fonds n'est pas forcément ISR
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Les deux approches peuvent se cumuler : dans l'échantillon de 47 fonds étudié par
        l'association FAIR, qui porte le label Finansol, tous sont labellisés Finansol et 60 %
        portent aussi au moins un autre label (ISR, CIES, Greenfin ou Relance) (
        <a
          href="https://www.finance-fair.org/sites/default/files/2025-12/FAIR_Etude85-15_WEB.pdf"
          target="_blank"
          rel="noreferrer"
        >
          étude FAIR sur les fonds 85/15, 2025
        </a>
        ). Rien n'oblige un fonds solidaire à obtenir le Label ISR : la même étude rappelle qu'il
        n'a pas d'obligation réglementaire d'intégrer des critères ESG. Le référentiel du label
        lui-même est détaillé dans{" "}
        <LienArticle slug="label-finansol-finance-solidaire">
          notre analyse du label Finansol
        </LienArticle>
        ; ici, nous restons sur le fonctionnement concret des produits.
      </p>

      <h2>Comment fonctionne un fonds solidaire « 90/10 », devenu « 85/15 » ?</h2>
      <p>
        Le principe tient en une phrase : un fonds solidaire est un fonds classique dont une petite
        fraction de l'actif est investie dans des structures solidaires non cotées. Deux textes
        fixent cette fraction pour les fonds proposés dans les deux principaux canaux. Pour
        l'assurance vie, l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049720147"
          target="_blank"
          rel="noreferrer"
        >
          article L. 131-1-2 du code des assurances
        </a>{" "}
        impose aux contrats en unités de compte de référencer au moins un support dont une part
        comprise entre 5 % et 15 % est investie en titres d'entreprises solidaires d'utilité sociale
        ou de véhicules assimilés — et d'indiquer au souscripteur, avant la signature, la proportion
        de supports respectant ces critères. Pour l'épargne salariale, l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039260447"
          target="_blank"
          rel="noreferrer"
        >
          article L. 214-164 du code monétaire et financier
        </a>{" "}
        retient la même fourchette de 5 à 15 %.
      </p>
      <h3>Pourquoi parle-t-on de « 90/10 » et pas de « 85/15 » ?</h3>
      <p>
        Parce que la borne haute était jusque-là de 10 %. Le plafond a été relevé à 15 % à compter
        du 1er janvier 2025 par la loi du 13 juin 2024 visant à accroître le financement des
        entreprises et l'attractivité de la France, le plancher de 5 % restant inchangé : d'où le «
        85/15 » désormais employé par FAIR. De nombreux documents parlent encore de 90/10 ; en cas
        de doute, seul le règlement du fonds fait foi.
      </p>
      <h3>Pourquoi une part si faible ?</h3>
      <p>
        Les titres solidaires sont émis par des structures non cotées, sans marché secondaire pour
        les revendre, alors qu'un fonds grand public doit pouvoir rembourser les épargnants qui
        sortent. Selon FAIR, un fonds vendrait difficilement ses actifs solidaires en cas de retrait
        massif ; à l'inverse, si les actifs cotés baissent, la part solidaire grimpe mécaniquement
        et peut buter sur le plafond. Le relèvement à 15 % réduit ce second risque.
      </p>
      <h3>Combien d'euros solidaires dans un fonds, en pratique ?</h3>
      <p>
        Moins que le plafond, et proche du plancher. Sur un échantillon de 47 fonds labellisés
        Finansol, représentant 46 % du marché selon FAIR, la part solidaire moyenne au 31 décembre
        2024 était de 6,2 % (
        <a
          href="https://www.finance-fair.org/sites/default/files/2025-12/FAIR_Etude85-15_WEB.pdf"
          target="_blank"
          rel="noreferrer"
        >
          même étude FAIR
        </a>
        ), soit environ 6 centimes par euro investi. La même étude estime les encours totaux des
        fonds 85/15 en France à 20,6 milliards d'euros, dont 16,3 milliards en épargne salariale,
        sujet traité dans{" "}
        <LienArticle slug="epargne-salariale-solidaire-isr-pee-per-collectif">
          l'article sur l'épargne salariale solidaire et ISR
        </LienArticle>
        .
      </p>

      <h2>Qui finance-t-on concrètement avec la poche solidaire ?</h2>
      <p>
        Dans les fonds distribués en assurance vie ou en épargne salariale, la poche solidaire est
        investie dans des structures ayant obtenu l'agrément <strong>ESUS</strong> (entreprise
        solidaire d'utilité sociale) ou dans des véhicules assimilés. Selon l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048598324/"
          target="_blank"
          rel="noreferrer"
        >
          article L. 3332-17-1 du code du travail
        </a>
        , l'agrément suppose notamment que :
      </p>
      <ul>
        <li>
          l'entreprise poursuive à titre principal une finalité d'utilité sociale, inscrite dans ses
          statuts, et que la charge induite ait un impact significatif sur son compte de résultat ;
        </li>
        <li>
          la politique de rémunération soit encadrée : les cinq salariés ou dirigeants les mieux
          payés ne perçoivent pas en moyenne plus de 7 fois le SMIC annuel, et le mieux payé pas
          plus de 10 fois ;
        </li>
        <li>ses titres de capital ne soient pas admis aux négociations sur un marché financier.</li>
      </ul>
      <p>
        Certains fonds spécialisés sont assimilés à des ESUS lorsque au moins la moitié de leurs
        titres provient de structures agréées, d'après FAIR. Les projets financés relèvent notamment
        du logement très social, de l'insertion par l'emploi ou des énergies renouvelables.
      </p>
      <h3>La poche solidaire est-elle investie directement ?</h3>
      <p>
        Pas toujours. Selon la même étude, la poche est gérée en direct, via des fonds spécialisés
        réservés aux investisseurs qualifiés, ou par une combinaison des deux. Ces fonds spécialisés
        gardent une part de liquidités pour honorer les rachats, ce qui limite mécaniquement la part
        effectivement investie dans des projets : une part solidaire affichée ne dit pas tout. Le
        reporting d'impact du fonds est le document à demander.
      </p>
      <p>
        Chaque entreprise agréée peut être identifiée : la direction générale du Trésor publie la{" "}
        <a
          href="https://www.tresor.economie.gouv.fr/banque-assurance-finance/finance-sociale-et-solidaire/liste-nationale-agrements-esus"
          target="_blank"
          rel="noreferrer"
        >
          liste nationale des agréments ESUS
        </a>
        , par millésime : vérifiez l'année de la liste consultée.
      </p>

      <h2>Un fonds solidaire est-il risqué, et rapporte-t-il moins ?</h2>
      <p>Trois risques distincts.</p>
      <ul>
        <li>
          <strong>Le risque de marché sur 85 à 95 % du fonds.</strong> Actions, obligations ou
          mélange : la valeur des parts varie et le capital peut être entamé. Le document
          d'informations clés (DIC) affiche un indicateur de risque que l'
          <a
            href="https://www.amf-france.org/sites/institutionnel/files/private/2023-06/Guide%20comprendre%20le%20DIC_MAJ2023_DEF.pdf"
            target="_blank"
            rel="noreferrer"
          >
            AMF explique dans son guide du DIC
          </a>
          .
        </li>
        <li>
          <strong>Le risque propre à la poche non cotée.</strong> Sur 5 à 15 % du fonds, des
          entreprises non cotées : risque de défaillance et difficulté à revendre, malgré la
          diversification entre plusieurs structures.
        </li>
        <li>
          <strong>Le risque de liquidité du fonds.</strong> Le mécanisme décrit plus haut, qui
          justifie le plafond.
        </li>
      </ul>
      <h3>Et le rendement ?</h3>
      <p>
        Pas de réponse tranchée. FAIR a comparé les fonds solidaires de son échantillon à des
        indices de référence sur 2022-2024 : les résultats varient selon la classe d'actifs, et
        l'association précise elle-même que les indices ne reflètent pas la composition des fonds
        (poche solidaire, exclusions, démarche ISR). Trois ans, c'est court, et la comparaison ne
        dit rien de ce que vous obtiendrez. Pour situer ce débat dans une littérature souvent
        contradictoire, lisez{" "}
        <LienArticle slug="investir-ethique-performance-chiffres">
          notre article sur la performance de l'investissement éthique
        </LienArticle>
        . Comparez toujours le fonds à l'indice de référence de son DIC et vérifiez ses frais. Les
        performances passées ne préjugent pas des performances futures.
      </p>

      <h2>Livret solidaire, livret de partage, fonds solidaire : lequel choisir ?</h2>
      <p>
        Ces produits ne jouent pas dans la même catégorie : les livrets sont des dépôts, les fonds
        des placements. Le tableau ci-dessous les compare à partir de ce que chacun garantit et de
        ce qu'il coûte réellement. Pour l'angle « alternative au Livret A », voir{" "}
        <LienArticle slug="livrets-epargne-solidaire-alternative-livret-a">
          notre comparatif détaillé des livrets solidaires
        </LienArticle>
        .
      </p>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Votre capital</th>
            <th>Où va la solidarité</th>
            <th>Vrai inconvénient</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Livret solidaire (encours fléché)</strong>
            </td>
            <td>
              Garanti par la banque (garantie des dépôts, 100 000 € par client et par établissement)
            </td>
            <td>
              La banque prête tout ou partie de l'encours à des acteurs de l'économie sociale et
              solidaire
            </td>
            <td>Taux fixé librement par la banque ; part réellement fléchée à vérifier</td>
          </tr>
          <tr>
            <td>
              <strong>Livret de partage</strong>
            </td>
            <td>Garanti par la banque, mêmes limites</td>
            <td>Don d'au moins 25 % de la performance si le produit est labellisé Finansol</td>
            <td>
              Vous renoncez à une fraction de vos intérêts ; l'impact se limite à la part donnée
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fonds solidaire 90/10 (85/15)</strong>
            </td>
            <td>Non garanti : risque de perte en capital</td>
            <td>Poche de 5 à 15 % dans des structures ESUS non cotées</td>
            <td>
              Solidarité minoritaire dans le fonds ; poche non cotée ; frais du fonds et de
              l'enveloppe
            </td>
          </tr>
          <tr>
            <td>
              <strong>Don depuis un LDDS</strong>
            </td>
            <td>Garanti (produit réglementé)</td>
            <td>
              Don à des organismes de l'économie sociale et solidaire, que la banque doit vous
              proposer chaque année
            </td>
            <td>Facultatif et ponctuel : c'est un don, sans lien avec un investissement</td>
          </tr>
        </tbody>
      </table>
      <p>
        Les chiffres de la ligne « livret » sont ceux de la{" "}
        <a href="https://www.garantiedesdepots.fr/fr" target="_blank" rel="noreferrer">
          garantie des dépôts (FGDR)
        </a>
        , et la sollicitation annuelle pour le LDDS est décrite sur{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2368"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        . Le seuil de 25 % vient du règlement du label, décrit par{" "}
        <a
          href="https://www.finance-fair.org/fr/epargne-de-partage"
          target="_blank"
          rel="noreferrer"
        >
          FAIR
        </a>
        .
      </p>
      <h3>Y a-t-il un avantage fiscal à l'épargne solidaire ?</h3>
      <p>
        Cela dépend du produit. Un fonds solidaire suit la fiscalité de son enveloppe (assurance
        vie, plan d'épargne salariale, compte-titres) : l'engagement solidaire n'y ajoute pas, en
        soi, de régime propre. Pour un produit de partage, les sommes abandonnées peuvent ouvrir
        droit à la réduction d'impôt pour dons (article 200 du code général des impôts), à condition
        qu'une convention soit signée avec l'établissement à la souscription, comme le rappelle la{" "}
        <a
          href="https://bofip.impots.gouv.fr/bofip/3743-PGP.html/identifiant=BOI-RPPM-RCM-30-10-20-30-20191220"
          target="_blank"
          rel="noreferrer"
        >
          doctrine fiscale (BOFiP)
        </a>
        . Le taux de droit commun est de 66 % des sommes versées, dans la limite de 20 % du revenu
        imposable, avec un taux majoré à 75 % pour certains organismes d'aide aux personnes en
        difficulté, plafonné (
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F426"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        ). Le calcul exact sur des intérêts abandonnés est à demander à l'établissement.
      </p>

      <h2>À quoi ressemble un placement solidaire sur 10 000 euros ?</h2>
      <p>
        Prenons un exemple pour voir ce que « solidaire » représente en euros, dans deux logiques
        très différentes.
      </p>
      <div className="callout">
        <p>
          <strong>
            Situation type construite pour illustrer le calcul, à partir de paramètres réalistes.
          </strong>{" "}
          Claire dispose de 10 000 € qu'elle n'utilisera pas avant de nombreuses années. Les
          chiffres sont volontairement ronds ; ils ne correspondent à aucun produit précis, et ne
          constituent pas une projection de performance : les performances passées ne préjugent pas
          des performances futures, et un fonds comporte un risque de perte en capital.
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Option A : fonds solidaire en assurance vie</th>
            <th>Option B : livret de partage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Hypothèse</strong>
            </td>
            <td>
              Poche solidaire de 6 %, proche de la moyenne de 6,2 % relevée par FAIR fin 2024 (le
              cadre légal autorise de 5 à 15 %)
            </td>
            <td>
              Taux de 2 % par an, choisi pour la lisibilité, pas un taux du marché ; partage de 25
              %, le minimum du label
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ce qui est « solidaire »</strong>
            </td>
            <td>
              600 € investis dans des structures ESUS (entre 500 € et 1 500 € selon la part du
              fonds)
            </td>
            <td>50 € donnés par an, soit 25 % de 200 € d'intérêts bruts</td>
          </tr>
          <tr>
            <td>
              <strong>Ce qui ne l'est pas</strong>
            </td>
            <td>9 400 € investis comme un fonds ordinaire, éventuellement ISR</td>
            <td>150 € d'intérêts conservés, avant fiscalité</td>
          </tr>
          <tr>
            <td>
              <strong>Votre capital</strong>
            </td>
            <td>Exposé aux marchés, non garanti</td>
            <td>Garanti par la banque dans la limite de la garantie des dépôts</td>
          </tr>
          <tr>
            <td>
              <strong>Nature de la solidarité</strong>
            </td>
            <td>
              Un investissement : l'argent reste à vous, il finance des entreprises solidaires
            </td>
            <td>Un don : 50 € par an quittent définitivement votre patrimoine</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ces deux options ne se comparent pas en « euros d'impact » : dans l'option A, la solidarité
        est un placement à risque dont vous récupérez la valeur ; dans l'option B, un don modeste
        sur un capital sans risque. Le choix dépend de votre objectif : faire travailler une partie
        de votre épargne longue dans l'économie sociale, ou donner sans toucher à la sécurité de
        votre capital.
      </p>

      <h2>Comment vérifier qu'un produit est vraiment solidaire ?</h2>
      <p>
        Trois vérifications suffisent, avec la méthode <strong>Qui, Combien, Quoi d'autre</strong>.
      </p>
      <ol>
        <li>
          <strong>Qui est financé ?</strong> Demandez le nom ou la catégorie des structures de la
          poche solidaire, et vérifiez leur agrément ESUS sur la liste nationale du Trésor. Un fonds
          qui ne sait pas dire qui il finance ne coche pas cette case.
        </li>
        <li>
          <strong>Combien, exactement ?</strong> Cherchez dans le DIC ou le reporting la part
          solidaire réelle, et pas seulement la part cible. Un fonds à 5 % n'est pas un fonds à 15 %
          : l'écart est de un à trois. Pour un livret de partage, la part des intérêts donnés doit
          figurer dans la convention.
        </li>
        <li>
          <strong>Quoi d'autre dans le fonds ?</strong> Les 85 à 95 % restants sont l'essentiel de
          votre argent. Regardez leur politique d'exclusion et l'inventaire, comme pour tout fonds.
          FAIR indique que son comité du label a introduit à compter du 1er janvier 2025 des
          exclusions sectorielles (énergies fossiles, charbon, tabac notamment) pour les produits
          labellisés ; un produit sans ce label n'offre pas cette garantie de méthode.
        </li>
      </ol>
      <p>
        Le label Finansol, contrôlé chaque année, est le premier repère : la liste des produits
        labellisés est publique. Notre <a href="/outils/decodeur-label">décodeur de labels</a>{" "}
        résume ce que chaque label français garantit ou non, et renvoie aux sources officielles.
      </p>

      <h2>Vos questions sur le placement éthique et solidaire</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Par où commencer avec un placement éthique et solidaire ?</h2>
      <p>
        <strong>La réponse à votre question.</strong> Un placement solidaire n'est ni un placement
        éthique de plus ni un Livret A avec un supplément d'âme : c'est un mécanisme précis, qui
        oriente 5 à 15 % d'un fonds, ou 25 % au moins des intérêts d'un livret de partage, vers des
        structures d'utilité sociale. La bonne question n'est pas « lequel est le meilleur ? » mais
        « que veux-je financer, et avec quel risque ? ».
      </p>
      <p>
        <strong>Ce que coûte l'inaction.</strong> Laisser un fonds « solidaire » dans votre contrat
        sans l'avoir ouvert, c'est risquer de découvrir une poche bien plus petite qu'imaginée.
        Trois questions règlent l'essentiel : qui est financé, combien, et que contiennent les 85 à
        95 % restants.
      </p>
      <p>
        <strong>La suite logique.</strong> Si vous avez un plan d'épargne salariale, commencez par
        la liste de ses supports, comme l'explique{" "}
        <LienArticle slug="epargne-salariale-solidaire-isr-pee-per-collectif">
          l'article sur l'épargne salariale solidaire
        </LienArticle>
        . Pour savoir ce que garantit exactement la mention sur une brochure, la lecture de{" "}
        <LienArticle slug="label-finansol-finance-solidaire">
          l'analyse du label Finansol
        </LienArticle>{" "}
        est la suite naturelle.
      </p>
      <p>
        <strong>Si vous préférez être accompagné.</strong> Pour un regard extérieur sur ce que
        finance votre épargne aujourd'hui, vous pouvez{" "}
        <a href="/cgp-investissement-responsable">échanger avec un conseiller</a> : le premier
        échange est offert et sans engagement, et vous repartez avec des pistes à vérifier
        vous-même.
      </p>
    </>
  );
}
