import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "per-protection-familiale",
  title: "Le PER protège-t-il votre famille au-delà de l'avantage fiscal ?",
  excerpt:
    "Clause bénéficiaire, règle des 70 ans au décès, déblocage en cas d'accident de la vie, réversion : ce que le PER protège vraiment — et les réglages décisifs.",
  readingTime: "11 min",
  category: "Enveloppes",
  date: "2026-06-09",
  tags: ["PER", "clause bénéficiaire", "succession", "transmission", "prévoyance"],
  author: "Sébastien Petrisot",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> oui, le PER protège votre famille au-delà de la
          déduction fiscale — mais pas comme les brochures le laissent entendre. Un PER
          assurantiel transmet le capital à des bénéficiaires que vous désignez librement,
          votre conjoint ou partenaire de PACS le reçoit sans aucune fiscalité, la déduction
          obtenue sur vos versements n'est jamais reprise en cas de décès, et la loi prévoit
          un déblocage anticipé si un accident de la vie — y compris le décès de votre
          conjoint — frappe le foyer avant la retraite. En face, une règle méconnue rebat les
          cartes : si vous décédez à partir de 70 ans, la <em>totalité</em> du plan, gains
          compris, entre dans les droits de succession après un abattement global de
          30 500 €. Le PER est donc un vrai filet de sécurité familial — à condition de
          choisir la bonne forme de plan, de soigner la clause bénéficiaire et de calibrer
          les options de sortie.
        </p>
      </div>

      <p>
        Vous versez chaque année sur un PER, séduit — à juste titre — par la déduction
        fiscale. Et puis une question s'invite, souvent un soir de déclaration de revenus :
        si je disparais avant d'en profiter, cet argent bloqué jusqu'à la retraite est-il
        perdu pour ma famille ? La question est plus saine qu'il n'y paraît. Le PER se vend
        presque exclusivement sur son argument fiscal ; ce qu'il prévoit pour vos proches se
        découvre trop souvent au pire moment, dans les conditions générales que personne
        n'avait ouvertes.
      </p>
      <p>
        Rappel rapide pour poser le décor : le plan d'épargne retraite, issu de la loi PACTE
        de 2019, est une enveloppe dont l'épargne reste bloquée jusqu'à la retraite, sauf
        exceptions prévues par la loi. Il existe sous deux formes — le PER
        « assurantiel », adossé à un contrat d'assurance de groupe, et le PER « bancaire »,
        qui est un compte-titres — et cette distinction, presque invisible à la
        souscription, change tout pour votre famille.
      </p>
      <p>
        Dans cet article : ce que devient votre capital à votre décès, la fiscalité exacte
        pour vos bénéficiaires — dont la règle des 70 ans que peu de distributeurs mettent
        en avant —, les déblocages anticipés qui protègent le foyer de votre vivant, les
        options de sortie, et quatre réglages concrets.
      </p>

      <h2>Que devient votre PER si vous décédez avant la retraite ?</h2>
      <p>
        Première réponse, la plus importante : l'épargne n'est pas confisquée. Ce qui lui
        arrive dépend en revanche de la forme de votre plan, comme le détaille la{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          fiche officielle du PER individuel sur service-public.fr
        </a>
        .
      </p>
      <p>
        Sur un <strong>PER assurantiel</strong>, le décès dénoue le contrat : le capital est
        versé directement par l'assureur aux bénéficiaires librement désignés dans la clause
        bénéficiaire — conjoint, enfants ou toute autre personne — sans passer par le
        partage civil de la succession. Sur un <strong>PER bancaire</strong>, pas de clause
        bénéficiaire : les titres intègrent l'actif successoral et suivent les règles
        ordinaires de la succession, pour le partage comme pour la fiscalité.
      </p>
      <div className="callout">
        <p>
          <strong>Le point que presque personne ne calcule :</strong> les versements que
          vous avez déduits de votre revenu imposable ne repasseront jamais par l'impôt sur
          le revenu si vous décédez avant d'avoir liquidé le plan. L'imposition qui aurait
          frappé une sortie en capital de votre vivant disparaît avec le décès — seules
          s'appliquent les règles successorales décrites plus bas. L'économie d'impôt
          réalisée à l'entrée devient définitivement acquise à votre famille.
        </p>
      </div>

      <h2>PER assurantiel ou PER bancaire : lequel protège mieux vos proches ?</h2>
      <p>
        L'essentiel de l'offre commercialisée en France est assurantielle, mais les deux
        formes coexistent et le contraste mérite d'être posé noir sur blanc :
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>PER assurantiel</th>
            <th>PER bancaire (compte-titres)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Qui reçoit l'épargne à votre décès</strong>
            </td>
            <td>Les bénéficiaires librement désignés dans la clause bénéficiaire</td>
            <td>Vos héritiers, selon les règles légales ou votre testament</td>
          </tr>
          <tr>
            <td>
              <strong>Circuit de transmission</strong>
            </td>
            <td>Capital versé directement par l'assureur, hors partage successoral civil</td>
            <td>Titres intégrés à l'actif successoral, partagés avec le reste du patrimoine</td>
          </tr>
          <tr>
            <td>
              <strong>Fiscalité au décès</strong>
            </td>
            <td>
              Régime spécifique de l'assurance : abattements dédiés, bascule à 70 ans (voir
              section suivante)
            </td>
            <td>Droits de succession de droit commun, selon le lien de parenté</td>
          </tr>
          <tr>
            <td>
              <strong>Garanties de prévoyance optionnelles</strong>
            </td>
            <td>Possibles selon les contrats : garantie plancher, réversion, annuités garanties</td>
            <td>Aucune</td>
          </tr>
          <tr>
            <td>
              <strong>Où vérifier</strong>
            </td>
            <td>La notice du contrat et le libellé exact de votre clause bénéficiaire</td>
            <td>Les règles successorales applicables à votre situation familiale</td>
          </tr>
        </tbody>
      </table>
      <p>
        La forme assurantielle offre structurellement plus de leviers de protection —
        liberté de désignation, abattements spécifiques, options de prévoyance. Encore
        faut-il les régler, à commencer par comprendre la mécanique fiscale qui suit.
      </p>

      <h2>Quelle fiscalité pour vos bénéficiaires ? Tout se joue à vos 70 ans</h2>
      <p>
        C'est ici que le PER assurantiel diverge de l'assurance vie, et la nuance est
        lourde de conséquences. En assurance vie, le régime fiscal au décès dépend de l'âge
        auquel vous avez <em>versé</em> les primes. Sur un PER, il dépend d'une seule
        chose : votre âge <em>au jour du décès</em>.
      </p>
      <p>
        <strong>Si vous décédez avant 70 ans</strong>, les sommes versées aux bénéficiaires
        relèvent du prélèvement de l'article 990 I du code général des impôts : chaque
        bénéficiaire dispose d'un abattement de 152 500 €, puis la part taxable supporte un
        prélèvement de 20 % jusqu'à 700 000 € et de 31,25 % au-delà, comme le précise la{" "}
        <a
          href="https://bofip.impots.gouv.fr/bofip/1335-PGP.html/identifiant=BOI-TCAS-AUT-60-20230330"
          target="_blank"
          rel="noreferrer"
        >
          doctrine fiscale publiée au BOFiP
        </a>
        . Le conjoint survivant et le partenaire de PACS, eux, sont totalement exonérés de
        ce prélèvement, comme ils le sont des droits de succession.
      </p>
      <p>
        <strong>Si vous décédez à partir de votre 70e anniversaire</strong>, le régime
        bascule sur l'article 757 B du même code — et il est nettement moins favorable que
        son équivalent en assurance vie. La{" "}
        <a
          href="https://bofip.impots.gouv.fr/bofip/3456-PGP.html/identifiant=BOI-ENR-DMTG-10-10-20-20-20230330"
          target="_blank"
          rel="noreferrer"
        >
          doctrine fiscale
        </a>{" "}
        est explicite : la <strong>totalité</strong> des sommes dues par l'assureur —
        versements et gains confondus, quel que soit l'âge auquel vous avez alimenté le
        plan — rejoint l'assiette des droits de succession, après un abattement global de
        30 500 € partagé entre l'ensemble des bénéficiaires (et commun, le cas échéant,
        avec les primes d'assurance vie versées après 70 ans qui relèvent du même article).
        En assurance vie, seules les primes versées après 70 ans subissent ce régime, et
        leurs gains restent exonérés ; sur un PER, rien n'échappe à l'assiette.
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère de décision</th>
            <th>Assurance vie</th>
            <th>PER assurantiel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Ce qui détermine le régime fiscal</strong>
            </td>
            <td>L'âge auquel vous avez versé chaque prime</td>
            <td>Votre âge au jour du décès</td>
          </tr>
          <tr>
            <td>
              <strong>Décès avant 70 ans</strong>
            </td>
            <td>152 500 € d'abattement par bénéficiaire sur les capitaux issus des primes versées avant 70 ans, puis 20 % / 31,25 %</td>
            <td>152 500 € d'abattement par bénéficiaire sur l'ensemble des sommes, puis 20 % / 31,25 %</td>
          </tr>
          <tr>
            <td>
              <strong>Décès à partir de 70 ans</strong>
            </td>
            <td>Droits de succession sur les seules primes versées après 70 ans au-delà de 30 500 € — les gains restent exonérés</td>
            <td>Droits de succession sur la totalité du plan (versements + gains) au-delà de 30 500 €</td>
          </tr>
          <tr>
            <td>
              <strong>Conjoint ou partenaire de PACS</strong>
            </td>
            <td>Exonéré dans tous les cas</td>
            <td>Exonéré dans tous les cas</td>
          </tr>
          <tr>
            <td>
              <strong>Levier de pilotage</strong>
            </td>
            <td>Verser avant 70 ans</td>
            <td>Arbitrer capital/rente et bénéficiaires de son vivant, à l'approche de la retraite</td>
          </tr>
        </tbody>
      </table>
      <p>
        <em>
          Régimes applicables aux plans et versements récents ; certains contrats
          d'assurance vie anciens conservent des règles dérogatoires.
        </em>
      </p>
      <div className="callout">
        <p>
          <strong>Hypothèse illustrative</strong> (hors autres contrats du défunt et hors
          situations particulières) : un PER de 160 000 € transmis à deux enfants à parts
          égales. Décès à 67 ans : chaque enfant reçoit 80 000 €, sous l'abattement de
          152 500 € — aucun prélèvement. Décès à 74 ans avec la même épargne : après
          l'abattement global de 30 500 €, ce sont 129 500 € qui rejoignent l'assiette des
          droits de succession, taxés ensuite selon les abattements et le barème applicables
          au lien de parenté. Même contrat, même montant : seule la date du décès a changé.
        </p>
      </div>
      <p>
        La lecture honnête de ce tableau : pour transmettre à vos enfants, l'assurance vie
        alimentée avant 70 ans reste structurellement mieux placée que le PER — et un
        distributeur qui présente le PER comme un outil de transmission universel passe
        cette règle sous silence. Pour protéger votre <em>conjoint</em>, en revanche, la
        différence s'efface : il est exonéré dans les deux enveloppes. Nous avons consacré
        un comparatif complet à ce choix dans{" "}
        <LienArticle slug="per-vs-assurance-vie-isr">
          PER ou assurance vie pour investir responsable
        </LienArticle>
        , qui replace cette mécanique successorale dans l'ensemble des critères.
      </p>

      <h2>Accident de la vie avant la retraite : dans quels cas votre PER se débloque-t-il ?</h2>
      <p>
        La protection familiale du PER ne se limite pas à la transmission : la loi a prévu
        que l'épargne redevienne disponible quand le foyer en a le plus besoin. Les cas de
        déblocage anticipé dits « accidents de la vie », listés sur{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          service-public.fr
        </a>
        , sont les suivants :
      </p>
      <ul>
        <li>
          le <strong>décès de votre conjoint ou partenaire de PACS</strong> — le PER du
          survivant se débloque, précisément au moment où les revenus du foyer chutent ;
        </li>
        <li>
          l'<strong>invalidité</strong> (2e ou 3e catégorie) qui vous touche, ou qui touche
          votre conjoint, votre partenaire de PACS ou l'un de vos enfants ;
        </li>
        <li>le <strong>surendettement</strong>, sur demande de la commission compétente ;</li>
        <li>
          l'<strong>expiration de vos droits au chômage</strong> — ou, pour les mandataires
          sociaux, l'absence de mandat ou de contrat de travail depuis au moins deux ans ;
        </li>
        <li>
          la <strong>cessation d'une activité non salariée</strong> à la suite d'un jugement
          de liquidation judiciaire.
        </li>
      </ul>
      <p>
        Dans tous ces cas, la fiscalité accompagne la logique de protection : la part
        correspondant à vos versements est exonérée d'impôt sur le revenu et de prélèvements
        sociaux ; seuls les gains supportent les prélèvements sociaux. Autrement dit, la
        déduction obtenue à l'entrée n'est pas reprise quand le déblocage est subi.
      </p>
      <p>
        Un sixième cas — l'achat de la résidence principale — relève d'une autre logique :
        sa fiscalité est nettement moins douce, les versements déduits étant réintégrés à
        votre revenu imposable et les gains taxés comme revenus du capital. Le filet de
        sécurité, c'est la première liste.
      </p>

      <h2>Réversion, annuités garanties, garantie plancher : comment protéger vos proches à la sortie ?</h2>
      <p>
        Le moment de la liquidation — capital, rente ou un mélange des deux — redistribue
        les protections, et on le découvre souvent trop tard : une{" "}
        <strong>rente viagère simple s'éteint avec vous</strong>, et l'épargne restante
        n'est pas redistribuée à votre famille. Trois mécanismes, présents selon les
        contrats, corrigent ce risque :
      </p>
      <ul>
        <li>
          la <strong>rente avec réversion</strong> : au décès, un pourcentage de la rente
          continue d'être versé à vie au bénéficiaire désigné, le plus souvent le conjoint ;
        </li>
        <li>
          les <strong>annuités garanties</strong> : la rente est versée pendant une durée
          minimale, à vos bénéficiaires si vous décédez avant son terme ;
        </li>
        <li>
          la <strong>garantie plancher</strong>, pendant la phase d'épargne : elle assure
          aux bénéficiaires de recevoir au moins le cumul de vos versements, même si les
          marchés ont fait baisser la valeur du plan au moment du décès.
        </li>
      </ul>
      <p>
        Ces options ont un coût, et leur disponibilité comme leur tarification varient d'un
        contrat à l'autre : c'est dans la notice que se vérifie ce que votre PER prévoit
        réellement. Une sortie en capital, à l'inverse, fait entrer les sommes dans votre
        patrimoine ordinaire — la protection de vos proches se joue alors sur le terrain
        successoral classique. Nous pesons ce choix dans{" "}
        <LienArticle slug="retraite-capital-ou-rente-per-ethique">
          capital ou rente à la sortie d'un PER : que choisir ?
        </LienArticle>
        , car il engage à la fois votre retraite et ce que vous laisserez.
      </p>

      <h2>Un PER investi en supports ISR protège-t-il aussi bien votre famille ?</h2>
      <p>
        Oui, et c'est une bonne nouvelle pour qui veut aligner son épargne retraite avec ses
        valeurs : tous les mécanismes décrits ici — clause bénéficiaire, régimes fiscaux au
        décès, déblocages anticipés, options de réversion — tiennent à l'<em>enveloppe</em>,
        pas aux supports qu'elle contient. Un PER investi en unités de compte ISR,
        labellisées ou classées SFDR Article 8 ou 9, offre exactement les mêmes protections
        familiales qu'un PER conventionnel.
      </p>
      <p>
        Deux points de vigilance subsistent. D'abord, la <strong>gestion pilotée à
        horizon</strong>, option par défaut du PER, sécurise progressivement l'épargne vers
        des supports moins risqués à l'approche de la retraite : une protection réelle dans
        le temps, mais pas une garantie — les unités de compte, ISR ou non, présentent un
        risque de perte en capital. Ensuite, la double exigence : un bon PER « éthique »
        doit réussir deux examens, celui des supports (que garantissent réellement leurs
        labels et leur classification SFDR ? à vérifier sur les documents officiels des
        fonds) et celui des protections (clause, options, garanties). Notre{" "}
        <a href="/outils/per-isr">outil PER ISR</a> vous donne des pistes pour le premier ;
        le second se lit dans la notice. Pour la stratégie d'ensemble — versements,
        plafonds, allocation —, notre article{" "}
        <LienArticle slug="per-ethique-optimiser-retraite">
          comment optimiser sa retraite avec un PER éthique
        </LienArticle>{" "}
        prend le relais.
      </p>

      <h2>Les quatre réglages qui font d'un PER un outil de protection familiale</h2>
      <p>
        Résumons la méthode — quatre réglages, dans l'ordre : <strong>Forme, Clause,
        Options, Révision</strong>.
      </p>
      <ol>
        <li>
          <strong>La forme.</strong> Si la protection de vos proches compte dans votre
          décision, privilégiez l'examen d'un PER assurantiel : clause bénéficiaire,
          abattements spécifiques et options de prévoyance n'existent que là. Vérifiez la
          nature exacte du plan avant de signer — elle figure en première page des
          conditions.
        </li>
        <li>
          <strong>La clause bénéficiaire.</strong> Ne vous contentez pas de la clause
          standard « mon conjoint, à défaut mes enfants… » sans l'avoir relue : elle décide
          de qui reçoit le capital et dans quelles proportions. Nommez précisément,
          prévoyez des bénéficiaires de second rang, et datez votre rédaction.
        </li>
        <li>
          <strong>Les options.</strong> Réversion, annuités garanties, garantie plancher :
          chacune a un coût et répond à un risque précis. Un couple avec un écart de revenus
          important ne calibre pas ces options comme un célibataire sans enfant — comparez
          le coût de l'option au risque réellement couvert.
        </li>
        <li>
          <strong>La révision.</strong> Mariage, divorce, naissance, décès : chaque
          événement de vie mérite une relecture de la clause et des options. Et à
          l'approche de vos 70 ans, la bascule fiscale décrite plus haut justifie de
          réexaminer où vont vos nouveaux versements — PER, assurance vie, ou les deux.
        </li>
      </ol>

      <h2>Vos questions sur le PER et la protection de votre famille</h2>

      <h3>Mon conjoint paiera-t-il des impôts sur mon PER à mon décès ?</h3>
      <p>
        Non. Le conjoint survivant et le partenaire de PACS sont exonérés à la fois du
        prélèvement de l'article 990 I (décès avant 70 ans) et des droits de succession
        (décès à partir de 70 ans). Quel que soit votre âge au décès, votre conjoint reçoit
        le capital du PER assurantiel sans fiscalité.
      </p>

      <h3>La déduction fiscale de mes versements est-elle reprise si je décède avant la retraite ?</h3>
      <p>
        Non. Les sommes transmises au décès ne passent jamais par l'impôt sur le revenu :
        elles relèvent uniquement des régimes successoraux (990 I ou 757 B selon votre âge
        au décès). L'économie d'impôt réalisée pendant vos années de versement reste
        définitivement acquise.
      </p>

      <h3>Puis-je débloquer mon PER si mon conjoint décède ?</h3>
      <p>
        Oui. Le décès du conjoint ou du partenaire de PACS est l'un des cas légaux de
        déblocage anticipé. La demande se fait auprès du gestionnaire du plan, justificatifs
        à l'appui ; la part correspondant à vos versements est alors exonérée d'impôt sur le
        revenu, seuls les gains supportant les prélèvements sociaux.
      </p>

      <h3>Que se passe-t-il si je décède après 70 ans, même sans avoir versé après 70 ans ?</h3>
      <p>
        C'est le piège du PER : contrairement à l'assurance vie, l'âge de vos versements ne
        compte pas — seul compte votre âge au décès. À partir de 70 ans révolus, la totalité
        du plan (versements et gains) entre dans l'assiette des droits de succession après
        l'abattement global de 30 500 €, même si chaque euro a été versé bien avant vos
        70 ans.
      </p>

      <h3>Puis-je modifier la clause bénéficiaire de mon PER ?</h3>
      <p>
        Oui, à tout moment et gratuitement, par simple demande au gestionnaire — sauf si un
        bénéficiaire a formellement accepté sa désignation, ce qui la verrouille. C'est
        précisément pour cela qu'une relecture après chaque événement de vie fait partie des
        réflexes à installer.
      </p>

      <h3>Que devient ma rente si je décède peu après l'avoir liquidée ?</h3>
      <p>
        Sans option particulière, une rente viagère simple s'éteint à votre décès et
        l'épargne restante n'est pas reversée à vos proches. La réversion et les annuités
        garanties existent pour couvrir ce risque — elles se choisissent au moment de la
        liquidation et réduisent le montant de la rente servie, en contrepartie de la
        protection.
      </p>

      <h3>Un PER en gestion pilotée protège-t-il mon capital ?</h3>
      <p>
        Il le protège progressivement, pas absolument : la gestion à horizon réduit la part
        des supports risqués à mesure que la retraite approche, ce qui limite l'exposition
        aux chocs de marché tardifs. Mais tant que l'épargne est investie en unités de
        compte, le risque de perte en capital demeure — c'est la garantie plancher, quand le
        contrat la propose, qui protège spécifiquement vos bénéficiaires contre ce risque.
      </p>

      <h2>Un vrai filet de sécurité — si vous prenez le temps de le régler</h2>
      <p>
        Vous avez maintenant la réponse complète : le PER protège votre famille bien au-delà
        de l'avantage fiscal — capital transmis hors partage successoral à des bénéficiaires
        librement choisis, conjoint exonéré en toutes circonstances, déduction jamais
        reprise, déblocage quand un accident de la vie frappe le foyer. Mais cette
        protection n'est pas automatique : elle dépend de la forme du plan, du libellé d'une
        clause et d'options que personne ne cochera à votre place — et la règle des 70 ans
        au décès impose de ne pas confondre le PER avec un outil de transmission universel.
      </p>
      <p>
        Ne rien régler a un coût réel : une clause standard jamais relue qui ignore votre
        situation familiale d'aujourd'hui, une rente liquidée sans réversion, ou des
        versements poursuivis après 70 ans dans la mauvaise enveloppe se découvrent toujours
        au moment où plus personne ne peut les corriger.
      </p>
      <p>
        Pour la suite logique de cette lecture, notre comparatif{" "}
        <LienArticle slug="quelle-enveloppe-investissement-ethique">
          quelle enveloppe choisir pour investir éthique
        </LienArticle>{" "}
        replace le PER face à l'assurance vie, au PEA et au compte-titres — utile avant de
        décider où iront vos prochains versements. Et notre{" "}
        <a href="/outils/simulateur">simulateur de projection</a> vous permet de chiffrer
        vous-même vos scénarios d'épargne retraite, frais et fiscalité inclus — il vous
        donne des pistes, sur des hypothèses illustratives.
      </p>
      <p>
        Enfin, si vous préférez vérifier tout cela à deux, c'est notre métier : lors d'un
        premier échange offert, un conseiller du cabinet passe en revue avec vous la forme
        de votre PER, votre clause bénéficiaire et vos options de sortie — documents à
        l'appui, sans jargon et sans engagement.
      </p>
    </>
  );
}
