import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "frais-conseiller-gestion-patrimoine-independant",
  title: "Combien coûte un CGP ? Honoraires, rétrocessions, frais",
  excerpt:
    "Un CGP est rarement payé en honoraires : il est rémunéré par des rétrocessions intégrées aux frais du produit. Comment ça marche, chiffres à l'appui.",
  readingTime: "12 min",
  category: "Conseil",
  date: "2026-08-01",
  tags: ["frais CGP", "rétrocessions", "honoraires", "transparence", "coût conseil patrimonial"],
  author: "Sébastien Petrisot",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> non, un conseiller en gestion de patrimoine (CGP) n'est pas «
          gratuit », même quand le premier rendez-vous l'est. En France, l'immense majorité des
          conseillers ne facturent aucun honoraire direct : selon une étude de l'AMF publiée en
          octobre 2024, environ 8 % seulement des conseillers en investissements financiers (CIF)
          déclarent un statut de conseil « indépendant » au sens réglementaire, rémunéré
          exclusivement par des honoraires — tous les autres exercent en mode « non indépendant »,
          rémunéré par des rétrocessions versées par les compagnies d'assurance, sociétés de gestion
          ou opérateurs qu'ils distribuent. Concrètement : vous ne signez aucun chèque à votre
          conseiller, mais son coût est déjà intégré dans les frais du produit que vous payez —
          frais d'entrée, frais de gestion annuels — que vous soyez accompagné ou non. « Gratuit »
          en apparence, donc, mais pas sans coût en réalité. La bonne question n'est pas « est-ce
          gratuit ? » mais « combien, sur quoi, et est-ce que ça change quelque chose à ce qu'on me
          propose ? »
        </p>
      </div>

      <p>
        Vous avez pris rendez-vous — ou vous hésitez encore — avec un conseiller en gestion de
        patrimoine. Le premier échange vous est annoncé « offert, sans engagement ». Une question
        vous trotte pourtant en tête, rarement posée à voix haute : si c'est gratuit pour moi, qui
        paie ce conseiller, et pourquoi le ferait-il si ça ne lui rapporte rien ? Vous n'avez pas
        tort de vous la poser. C'est même la question la plus utile que vous puissiez poser avant de
        confier quoi que ce soit à un professionnel du patrimoine — CGP, banquier privé ou courtier.
      </p>
      <p>
        Dans cet article : les deux grands modèles de rémunération qui coexistent en France, ce que
        chacun signifie concrètement pour votre épargne, un exemple chiffré — le nôtre, présenté
        comme tel, jamais comme la norme du marché —, la question qui fâche sur l'investissement
        éthique (« est-ce que mon conseiller me pousse vers l'ISR parce qu'il gagne plus dessus ?
        »), et la méthode pour vérifier vous-même, document en main, ce que touche réellement votre
        conseiller sur votre contrat.
      </p>

      <h2>Un CGP est-il vraiment « gratuit » au premier rendez-vous ?</h2>
      <p>
        Littéralement, oui : aucune facture n'est émise pour ce premier échange, quelle que soit son
        issue. Mais « gratuit » ne veut dire qu'une chose précise — vous ne réglez rien
        <em> à ce moment-là</em>. Cela ne veut pas dire que la relation qui suit, si vous donnez
        suite, est sans coût.
      </p>
      <p>
        Si vous souscrivez une solution à l'issue de l'échange, un flux financier se déclenche : le
        partenaire distribué (compagnie d'assurance, société de gestion, opérateur) verse une
        rétrocession au conseiller, prélevée sur les frais que vous payez déjà — frais d'entrée au
        versement, frais de gestion annuels tant que l'épargne reste investie. Ce n'est pas un
        supplément qui s'ajoute par-dessus le prix du produit : c'est une part de ce prix qui va au
        conseiller plutôt qu'ailleurs.
      </p>
      <p>
        Une nuance mérite d'être posée honnêtement, car elle n'a pas de réponse universelle :
        souscrire en direct, sans intermédiaire, ne réduit pas toujours la facture. Sur de nombreux
        contrats en architecture ouverte distribués par des CGP, la grille tarifaire est fixée en
        amont par la compagnie, que vous passiez par un intermédiaire ou non — la part qui aurait
        été rétrocédée au conseiller reste alors chez le distributeur, elle ne vous revient pas
        automatiquement. Sur d'autres contrats, notamment certaines offres 100 % en ligne conçues
        sans réseau de conseillers, l'absence d'intermédiaire se traduit dès l'origine par des frais
        d'entrée nuls. Il n'existe pas de règle générale : c'est la grille tarifaire du contrat
        précis que vous envisagez qu'il faut lire, pas une supposition sur le courtage.
      </p>

      <h2>Combien touche un CGP sur mon contrat d'assurance vie ou de PER ?</h2>
      <p>
        Le mécanisme repose sur deux flux distincts, qui n'ont pas la même nature. Le{" "}
        <strong>frais d'entrée</strong> est prélevé une seule fois, au moment du versement, et
        rémunère le travail d'analyse et de mise en place. Les <strong>frais de gestion</strong>{" "}
        sont prélevés chaque année sur la valorisation de votre épargne, tant que le contrat existe
        — ils rémunèrent la tenue du contrat par l'assureur et, pour une part rétrocédée, le suivi
        continu du conseiller. Sur les supports logés dans le contrat (fonds, ETF), une troisième
        couche existe : les frais courants du support lui-même, qui peuvent aussi générer une
        rétrocession selon le mode de gestion du fonds (pour choisir un contrat, voir{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">
          notre guide de l'assurance vie ISR
        </LienArticle>
        ) — nous y revenons plus loin, car c'est précisément là que se pose la question de
        l'investissement éthique.
      </p>
      <p>
        Le document réglementaire qui vous donne le coût total agrégé d'un support est le{" "}
        <strong>Document d'Informations Clés (DIC)</strong>, remis obligatoirement avant toute
        souscription : il détaille les coûts cumulés sur la durée de détention, de façon
        standardisée. Il vous permet de comparer deux supports entre eux, mais il n'isole pas
        toujours la part précise qui revient à votre conseiller par opposition à celle de l'assureur
        ou du gérant — c'est un document sur le produit, pas sur votre relation avec
        l'intermédiaire. Pour ce second niveau d'information, la loi impose autre chose : une
        information directe sur la nature de la rémunération de votre conseiller, avant la
        signature. Nous détaillons ce texte plus loin.
      </p>

      <h2>Honoraires ou rétrocessions : quel modèle est le plus honnête ?</h2>
      <p>
        Aucun des deux modèles n'est malhonnête en soi — chacun a une logique économique défendable,
        et chacun a un point de vigilance réel qui mérite d'être nommé sans détour, pas seulement
        celui du modèle qu'on n'a pas choisi.
      </p>
      <table>
        <thead>
          <tr>
            <th>Modèle</th>
            <th>Qui paie le conseiller</th>
            <th>Avantage réel</th>
            <th>Limite honnête</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Honoraires (fee-only)</strong>
            </td>
            <td>Le client, directement — au forfait, à l'heure, ou en % du patrimoine conseillé</td>
            <td>
              Rémunération totalement indépendante de la solution finalement choisie : cela supprime
              le lien mécanique entre « vendre » et « être payé »
            </td>
            <td>
              Coût visible et immédiat dès le premier euro, ce qui peut freiner l'accès au conseil
              pour un patrimoine modeste ou en construction
            </td>
          </tr>
          <tr>
            <td>
              <strong>Rétrocessions (courtage)</strong>
            </td>
            <td>
              Le partenaire distribué (assureur, société de gestion, opérateur), sur les frais déjà
              intégrés au produit
            </td>
            <td>
              Accès à l'accompagnement ouvert dès les premiers montants investis, sans barrière
              financière préalable
            </td>
            <td>
              La rémunération dépend de la souscription effective d'une solution — un conflit
              d'intérêts théorique réel, que la réglementation encadre et impose de divulguer, sans
              l'éliminer pour autant
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Selon l'étude de l'AMF citée plus haut, environ 8 % des CIF français relèvent du premier
        modèle et plus de 90 % du second — beaucoup de cabinets, dont le nôtre, combinent en réalité
        les deux : rétrocessions par défaut pour l'accompagnement standard, honoraires ponctuels sur
        devis pour des missions spécifiques (audit patrimonial complexe, stratégie de transmission)
        à la demande du client. Pour la comparaison avec un conseiller de banque, voir{" "}
        <LienArticle slug="cgp-independant-vs-conseiller-bancaire-ethique">
          CGP ou conseiller bancaire : qui choisir pour investir de façon éthique
        </LienArticle>
        .
      </p>

      <h2>Exemple concret : ce que ça donne en chiffres chez nous</h2>
      <p>
        Les principes abstraits ne remplacent pas des chiffres. Voici, à titre d'exemple documenté —
        pas comme la norme du marché, chaque cabinet fixant sa propre grille dans les limites
        autorisées par ses partenaires — la grille appliquée par notre cabinet, EXP Capital, publiée
        en intégralité sur notre <a href="/tarifs">page dédiée à notre rémunération</a>. Le détail
        des deux contrats d'assurance vie concernés figure dans notre{" "}
        <LienArticle slug="avis-patrimoine-vie-plus-uaf-life-version-absolue">
          avis sur les contrats Patrimoine Vie Plus et Version Absolue 2
        </LienArticle>
        .
      </p>
      <table>
        <thead>
          <tr>
            <th>Solution</th>
            <th>Ce que ça coûte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Assurance vie / PER — frais d'entrée</td>
            <td>1,00 % jusqu'à 200 000 € ; 0,50 % de 200 000 à 400 000 € ; 0 % au-delà</td>
          </tr>
          <tr>
            <td>Assurance vie / PER — frais de gestion annuels</td>
            <td>Entre 1,00 % et 1,08 % par an, selon le contrat</td>
          </tr>
          <tr>
            <td>SCPI — frais d'entrée totaux</td>
            <td>Environ 12 % (identiques en direct), dont environ 6 % rétrocédés au cabinet</td>
          </tr>
          <tr>
            <td>SCPI — cashback client</td>
            <td>2 % au-delà de 100 000 € investis</td>
          </tr>
          <tr>
            <td>Girardin industriel (Lodeom)</td>
            <td>Commission d'environ 6 %, intégrée au montage et identique en direct</td>
          </tr>
        </tbody>
      </table>
      <p>
        À titre de comparaison sur le modèle honoraires : un cabinet fee-only que nous avons
        consulté publie par exemple des tarifs de{" "}
        <a
          href="https://prosper-conseil.fr/patrimoine/honoraires-conseiller-en-gestion-de-patrimoine/"
          target="_blank"
          rel="noreferrer"
        >
          150 à 400 € de l'heure pour un accompagnement ponctuel, un forfait de quelques milliers
          d'euros pour une stratégie initiale, et un suivi annuel dégressif entre 0,2 % et 0,6 % des
          encours conseillés
        </a>
        . Les deux modèles existent, avec des ordres de grandeur différents selon la nature du flux
        : ponctuel et immédiat d'un côté, récurrent et intégré au produit de l'autre — les comparer
        terme à terme sans tenir compte de cette différence serait trompeur.
      </p>

      <h2>Un CGP peut-il vous orienter vers l'ISR parce qu'il gagne plus dessus ?</h2>
      <p>
        C'est la question implicite de tout épargnant qui découvre le mécanisme des rétrocessions en
        même temps qu'il s'intéresse à l'investissement responsable, et elle mérite une réponse
        directe plutôt qu'un contournement.
      </p>
      <p>
        La réponse honnête : le label ISR lui-même ne change rien à la rémunération d'un conseiller.
        Aucun organisme de labellisation ne verse quoi que ce soit aux distributeurs — la démarche
        de labellisation est engagée et financée par la société de gestion du fonds auprès
        d'auditeurs indépendants, sans aucun flux vers les intermédiaires. Ce que le label garantit
        et ne garantit pas est d'ailleurs un sujet à part entière, que nous détaillons dans notre
        article sur{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          ce que le Label ISR certifie vraiment
        </LienArticle>
        .
      </p>
      <p>
        Ce qui fait réellement varier la rétrocession, ce sont les{" "}
        <strong>frais courants du support</strong> — et ceux-ci dépendent du mode de gestion, pas de
        l'étiquette ISR. Un ETF indiciel ISR, peu chargé en frais, ne verse quasiment aucune
        rétrocession récurrente. Un fonds à gestion active, labellisé ou non, plus chargé en frais,
        en verse davantage. Le vrai conflit d'intérêts théorique se situe donc sur l'axe « gestion
        passive contre gestion active », ou « fonds peu chargé contre fonds chargé » — un axe qui
        traverse aussi bien l'univers ISR que l'univers conventionnel, et qui existerait à
        l'identique si le mot ISR n'existait pas.
      </p>
      <p>
        Ce constat ne supprime pas le risque, il le déplace là où il faut le surveiller : demandez
        systématiquement les frais courants du support dans son DIC, quel que soit son label ou sa
        classification SFDR, et comparez-les à une alternative peu chargée dans la même famille
        d'actifs. C'est un réflexe qui protège contre un biais réel, sans avoir besoin de suspecter
        untel ou untel — la vérification vaut mieux que la présomption.
      </p>

      <h2>Comment vérifier vous-même ce qu'un CGP touche sur votre contrat ?</h2>
      <p>
        Vous n'avez pas à faire confiance sur parole : la loi organise une information précise, à
        deux niveaux distincts, et vous avez le droit de la réclamer avant de signer quoi que ce
        soit. Pour la liste des questions à poser au conseiller au-delà des frais, voir{" "}
        <LienArticle slug="comment-choisir-conseiller-investissement-ethique-questions">
          comment choisir un conseiller en investissement éthique
        </LienArticle>
        ; pour situer les frais du contrat lui-même face aux moyennes publiées, voir{" "}
        <LienArticle slug="assurance-vie-isr-frais-reels-combien-ca-coute">
          assurance vie ISR : combien coûtent vraiment les frais ?
        </LienArticle>
        .
      </p>
      <ol>
        <li>
          <strong>Le document d'entrée en relation.</strong> Pour les conseillers en investissements
          financiers, l'
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035043376"
            target="_blank"
            rel="noreferrer"
          >
            article L.541-8-1 du code monétaire et financier
          </a>{" "}
          impose de communiquer en temps utile les modalités de rémunération et la tarification des
          prestations. Pour les intermédiaires en assurance, c'est l'
          <a
            href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000036920566/"
            target="_blank"
            rel="noreferrer"
          >
            article L.521-2 du code des assurances
          </a>
          , issu de la transposition en droit français de la directive européenne sur la
          distribution d'assurances (DDA), qui impose d'indiquer, avant la conclusion du contrat, la
          nature de la rémunération — honoraires, commission incluse dans la prime, autre avantage
          économique, ou combinaison des deux.
        </li>
        <li>
          <strong>Le DIC de chaque support.</strong> Il vous donne les coûts cumulés sur la durée de
          détention, de façon standardisée et comparable d'un fonds à l'autre — c'est le document le
          plus simple pour repérer un support anormalement chargé en frais.
        </li>
        <li>
          <strong>La question posée frontalement.</strong> « Quelle rétrocession percevez-vous sur
          ce contrat, sur ce fonds ? » Votre conseiller a l'obligation réglementaire d'y répondre —
          un refus ou une esquive est en lui-même un signal à prendre au sérieux.
        </li>
        <li>
          <strong>Le registre ORIAS.</strong> Vérifiez le statut exact de votre interlocuteur sur{" "}
          <a href="https://www.orias.fr" target="_blank" rel="noreferrer">
            orias.fr
          </a>{" "}
          : conseiller en investissements financiers (CIF), intermédiaire en assurance (IAS,
          courtier ou agent), intermédiaire en opérations de banque (IOBSP). Chaque statut relève
          d'un régime d'obligations légèrement différent — notre cabinet, EXP Capital (ORIAS n°
          25005915, à vérifier sur orias.fr), n'est pas CIF.
        </li>
        <li>
          <strong>La réclamation, en dernier recours.</strong> Si un doute persiste sur une
          orientation après ces vérifications, une réclamation écrite adressée au cabinet est la
          première étape, suivie si besoin d'une saisine gratuite du médiateur compétent — La
          Médiation de l'Assurance pour un contrat d'assurance vie ou de PER assurantiel, le
          médiateur de l'AMF pour un produit relevant des marchés financiers comme une SCPI.
        </li>
      </ol>

      <h2>Vos questions sur les frais d'un CGP</h2>

      <h3>Un CGP peut-il vous orienter vers un produit parce qu'il est mieux rémunéré dessus ?</h3>
      <p>
        Oui, c'est un risque réel, et il vaut mieux le dire sans détour que de le nier. Le modèle
        rétrocession crée un lien mécanique entre la souscription d'une solution et la rémunération
        du conseiller — c'est précisément la limite honnête de ce modèle, nommée dans le tableau
        ci-dessus. La réglementation (directive européenne sur la distribution d'assurances, cadre
        MIF2 pour les CIF) impose de détecter ce type de conflit d'intérêts, de le gérer et, quand
        il ne peut être neutralisé, de le divulguer clairement au client — elle ne l'élimine pas.
        Votre meilleure protection reste concrète : demander systématiquement la rétrocession perçue
        sur la solution proposée, et la comparer aux frais courants d'une alternative équivalente.
        Si vous voulez supprimer entièrement ce lien, la lettre de mission à honoraires est l'outil
        prévu pour cela.
      </p>

      <h3>Le premier rendez-vous est-il vraiment sans aucune contrepartie ?</h3>
      <p>
        Aucune facture n'est émise, et aucune rémunération n'est générée si vous ne donnez pas suite
        — dans ce sens, oui, c'est sans contrepartie financière. Cela n'en fait pas un échange dénué
        d'intérêt commercial pour le cabinet : c'est un investissement de temps assumé de notre
        part, pas un acte philanthropique.
      </p>

      <h3>Payer des honoraires garantit-il un conseil plus objectif ?</h3>
      <p>
        Cela réduit un biais précis — celui lié au choix d'une solution plutôt qu'une autre —, sans
        garantir l'objectivité en bloc. Un conseiller facturé à l'heure peut avoir intérêt à
        prolonger une mission au-delà du nécessaire ; un conseiller facturé en pourcentage du
        patrimoine peut avoir intérêt à vous convaincre d'investir davantage. Aucun modèle de
        rémunération n'annule tous les biais possibles : chacun déplace le point de vigilance, aucun
        ne le supprime.
      </p>

      <h3>Quelle est la différence entre un CIF, un CGP, un IAS et un courtier ?</h3>
      <p>
        « CGP » (conseiller en gestion de patrimoine) est un terme d'usage, pas un statut
        réglementaire unique : derrière, un même professionnel peut cumuler plusieurs
        immatriculations à l'ORIAS. Le CIF (conseiller en investissements financiers) est habilité à
        conseiller sur les instruments financiers, sous supervision de l'AMF. L'IAS (intermédiaire
        en assurance, courtier ou agent) distribue des contrats d'assurance vie et de PER
        assurantiel, sous supervision de l'ACPR. L'IOBSP intervient sur les opérations de banque et
        de crédit. EXP Capital, la structure sous laquelle nous exerçons, est immatriculée à l'ORIAS
        (n° 25005915, vérifiable sur orias.fr) ; elle n'est pas CIF.
      </p>

      <h3>
        Un CGP touche-t-il une commission plus élevée en pourcentage sur les SCPI que sur
        l'assurance vie ?
      </h3>
      <p>
        Oui, en apparence — mais la comparaison brute des pourcentages est trompeuse. La commission
        SCPI est perçue une seule fois, à la souscription, et couvre l'intégralité du travail
        d'analyse en amont, sans rémunération récurrente ensuite. La commission d'assurance vie ou
        de PER est annuelle et se répète chaque année tant que l'épargne reste investie. Comparer un
        flux ponctuel à un flux récurrent sans tenir compte de cette différence de nature ne dit
        rien d'utile sur lequel des deux coûte réellement le plus, à horizon donné.
      </p>

      <h3>
        Puis-je demander à mon CGP de facturer des honoraires plutôt que de percevoir une
        rétrocession ?
      </h3>
      <p>
        C'est précisément l'objet de la lettre de mission tarifée, prévue par de nombreux cabinets —
        dont le nôtre — pour des missions spécifiques à la demande du client : audit patrimonial
        complexe, stratégie de transmission, bilan retraite chiffré. Certains cabinets fee-only vont
        plus loin en s'engageant contractuellement à reverser au client toute rétrocession perçue
        malgré tout des partenaires, pour éliminer toute ambiguïté sur ce point précis.
      </p>

      <h3>Si je souscris en ligne sans conseiller, est-ce automatiquement moins cher ?</h3>
      <p>
        Non, pas automatiquement, et c'est une idée reçue à corriger. Sur un contrat en architecture
        ouverte dont la grille de frais est fixée par la compagnie, la part qui aurait été
        rétrocédée à un intermédiaire n'est en général pas restituée au client qui souscrit seul —
        elle reste chez le distributeur, quel qu'il soit. Certaines offres 100 % en ligne, conçues
        sans réseau de conseillers, affichent en revanche des frais d'entrée nuls dès l'origine. La
        seule façon de savoir, pour un contrat donné, est de lire sa grille tarifaire — pas de
        généraliser à partir d'un seul exemple.
      </p>

      <h2>Le bon réflexe : demander le chiffre, pas la promesse</h2>
      <p>
        Vous avez maintenant la réponse complète. Un CGP n'est presque jamais rémunéré en honoraires
        directs en France — les rétrocessions dominent très largement le marché — et « gratuit » au
        premier rendez-vous ne veut pas dire « sans coût » sur la durée de votre épargne : le coût
        existe, il est simplement intégré aux frais du produit plutôt qu'isolé sur une facture
        séparée. Sur l'investissement éthique en particulier, ce n'est pas le label qui fait varier
        la rémunération d'un conseiller, mais le niveau de frais du support choisi — un axe de
        vigilance qui vaut pour tout placement, labellisé ou non.
      </p>
      <p>
        Ne pas poser la question a un coût silencieux : celui de ne jamais savoir si une piste vous
        a été présentée pour vous servir, ou pour servir une commission plus confortable — un doute
        qui, non vérifié, abîme la confiance plus sûrement qu'un chiffre inconfortable mais assumé.
        La bonne nouvelle : la vérification tient en quelques questions et deux ou trois documents,
        pas en un acte de foi.
      </p>
      <p>
        Pour voir concrètement à quoi ressemble un échange construit sur cette logique —
        cartographie de vos objectifs avant toute proposition, synthèse écrite argumentée, aucune
        vente forcée au premier rendez-vous —, notre article{" "}
        <LienArticle slug="bilan-patrimonial-investissement-ethique-rendez-vous">
          à quoi ressemble un vrai rendez-vous de conseil en investissement éthique
        </LienArticle>{" "}
        détaille chaque étape. Et si votre épargne de départ est modeste, notre article sur{" "}
        <LienArticle slug="investir-ethique-petit-budget">
          investir éthique avec un petit budget
        </LienArticle>{" "}
        montre que le modèle rétrocession n'est pas, sur ce point précis, un obstacle.
      </p>
      <p>
        Enfin, si vous souhaitez vérifier point par point ce qu'un cabinet peut toucher sur votre
        propre situation, la totalité de notre grille — chiffrée, solution par solution — est
        publiée sur notre <a href="/tarifs">page dédiée à notre rémunération</a>. Vos autres
        questions sur nos pratiques trouvent leur réponse dans la page{" "}
        <a href="/questions">questions fréquentes</a>. Et si vous préférez les poser directement, un
        premier échange avec l'un de nos conseillers est offert et sans engagement : vous pouvez le
        demander via notre <a href="/contact">page de contact</a>, et en savoir plus sur{" "}
        <a href="/cgp-investissement-responsable">
          l'accompagnement du cabinet en investissement responsable
        </a>
        .
      </p>
    </>
  );
}
