import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "donation-transmission-coherence-valeurs",
  title: "Comment donner et transmettre un patrimoine en cohérence avec vos valeurs ?",
  excerpt:
    "Abattements vérifiés, pacte adjoint, clause bénéficiaire, dons aux associations : les outils pour transmettre vos valeurs, pas seulement un montant.",
  readingTime: "11 min",
  category: "Transmission",
  date: "2026-06-29",
  tags: [
    "donation",
    "transmission",
    "succession",
    "assurance vie",
    "pacte adjoint",
    "philanthropie",
  ],
  author: "Alexandre Pollet",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> transmettre en cohérence avec ses valeurs se joue sur trois
          plans. Le cadre fiscal, d&rsquo;abord : 100 000 € par parent et par enfant tous les quinze
          ans en donation, jusqu&rsquo;à 152 500 € par bénéficiaire via l&rsquo;assurance vie. Les
          outils juridiques, ensuite, qui orientent l&rsquo;usage des sommes : pacte adjoint,
          donation avec charges, clause bénéficiaire, legs. Et le plan que presque tout le monde
          oublie : transmettre la <em>méthode</em> — expliquer ce que cette épargne finance,
          pourquoi, et comment le vérifier. L&rsquo;erreur classique consiste à optimiser le premier
          plan et à ignorer les deux autres : les droits sont économisés, la cohérence est perdue.
        </p>
      </div>

      <p>
        Vous avez passé des années à mettre votre épargne en accord avec vos convictions : supports
        triés, labels vérifiés, exclusions assumées. Et puis une question se présente, souvent à
        l&rsquo;occasion d&rsquo;un événement familial : que restera-t-il de cette cohérence quand
        ce patrimoine changera de mains ? Vos enfants garderont-ils quoi que ce soit de la démarche,
        ou tout sera-t-il arbitré vers le premier produit venu dans le mois qui suit ? Les causes
        que vous soutenez recevront-elles un jour autre chose que vos dons ponctuels ?
      </p>
      <p>
        Le conseil patrimonial classique répond à côté : il optimise les droits de donation et de
        succession — ce qui est nécessaire — et s&rsquo;arrête là. Or transmettre en cohérence avec
        ses valeurs, c&rsquo;est organiser trois choses à la fois : qui reçoit quoi, dans quel cadre
        fiscal, et avec quelle direction donnée aux sommes — une direction qui survive au transfert.
      </p>
      <p>
        Cet article passe en revue les abattements en vigueur (chiffres vérifiés sur les sources
        officielles), les outils juridiques qui permettent d&rsquo;orienter l&rsquo;usage
        d&rsquo;une donation, la place des associations dans une transmission, et les limites
        honnêtes de l&rsquo;exercice — car aucun montage ne gouverne un patrimoine depuis
        l&rsquo;au-delà. Il se termine par une méthode en quatre temps pour transmettre la pratique,
        pas seulement l&rsquo;argent.
      </p>

      <h2>Que transmettez-vous vraiment : un montant, ou une manière d&rsquo;investir ?</h2>
      <p>
        Un patrimoine se transmet en trois couches, et le droit ne s&rsquo;occupe que des deux
        premières. La première est le <strong>capital</strong> : des sommes, des titres, des biens.
        La deuxième est la <strong>structure</strong> : les enveloppes qui portent ce capital, leurs
        clauses, leur calendrier fiscal — c&rsquo;est là que se jouent les abattements et les
        droits. La troisième est la <strong>pratique</strong> : ce que cette épargne finance, les
        critères qui ont présidé aux choix, la façon de vérifier un label ou de lire un document
        réglementaire.
      </p>
      <p>
        Cette troisième couche ne figure dans aucun acte notarié. Elle ne se décrète pas, elle
        s&rsquo;apprend — et c&rsquo;est précisément pour cela qu&rsquo;elle se perd si facilement.
        Un héritier qui reçoit un portefeuille ISR sans en comprendre la logique le traitera comme
        n&rsquo;importe quelle ligne de compte : quelque chose à simplifier au plus vite. Disons-le
        clairement dès maintenant : aucun outil juridique ne peut forcer durablement un adulte à
        investir selon vos convictions. Les mécanismes que nous allons voir encadrent, orientent,
        retardent — la cohérence de long terme, elle, se construit par la pédagogie.
      </p>

      <h2>Quels abattements pour donner de votre vivant ?</h2>
      <p>
        Le socle est connu mais mérite d&rsquo;être posé précisément. Chaque parent peut donner à
        chaque enfant jusqu&rsquo;à <strong>100 000 €</strong> sans droits de donation, et cet
        abattement se reconstitue tous les <strong>quinze ans</strong>. Un grand-parent dispose de
        31 865 € par petit-enfant, dans les mêmes conditions de renouvellement — le détail par lien
        de parenté est publié sur{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F14203"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        .
      </p>
      <p>
        S&rsquo;y ajoute, pour les sommes d&rsquo;argent uniquement, l&rsquo;exonération des{" "}
        <strong>dons familiaux</strong> : 31 865 € supplémentaires par donateur et par bénéficiaire,
        à condition que le donateur ait moins de 80 ans et que le bénéficiaire soit majeur (ou
        émancipé), renouvelable elle aussi tous les quinze ans, comme le précise{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F36656"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        . Les deux dispositifs se cumulent : un parent de moins de 80 ans peut ainsi transmettre 131
        865 € à un enfant majeur sans droits sur une période de quinze ans. Les cadeaux
        d&rsquo;occasion — le présent d&rsquo;usage, proportionné à vos moyens et lié à un événement
        — restent quant à eux hors de tout ce décompte.
      </p>
      <div className="callout">
        <p>
          <strong>Donner, c&rsquo;est donner :</strong> une donation est par principe irrévocable.
          Les sommes sortent définitivement de votre patrimoine — n&rsquo;engagez que ce dont vous
          n&rsquo;aurez pas besoin, y compris dans un scénario de dépendance ou de baisse de
          revenus. C&rsquo;est la première vérification à faire, avant toute considération fiscale
          ou éthique.
        </p>
      </div>

      <h2>Comment orienter l&rsquo;usage des sommes données — et jusqu&rsquo;où ?</h2>
      <p>
        C&rsquo;est ici que la dimension « valeurs » entre concrètement dans le droit. Un don manuel
        peut être accompagné d&rsquo;un <strong>pacte adjoint</strong>, document écrit qui en fixe
        le mode d&rsquo;emploi. Sa <strong>clause de remploi</strong> impose que les sommes soient
        investies sur un support déterminé — par exemple un contrat d&rsquo;assurance vie dont vous
        avez validé l&rsquo;univers de supports responsables. Sa{" "}
        <strong>clause d&rsquo;inaliénabilité temporaire</strong> interdit d&rsquo;en disposer
        librement jusqu&rsquo;à un âge que vous fixez, à condition de rester limitée dans le temps
        et justifiée par un intérêt sérieux et légitime.
      </p>
      <p>
        Pour les montants importants, les biens immobiliers ou les titres, la{" "}
        <strong>donation notariée</strong> permet d&rsquo;aller plus loin : donation avec charges
        (le donataire s&rsquo;engage à un usage déterminé, et l&rsquo;inexécution peut fonder une
        révocation), donation-partage qui fige l&rsquo;équilibre entre enfants et prévient les
        conflits au moment de la succession, ou démembrement — vous donnez la nue-propriété et
        conservez l&rsquo;usufruit, donc une partie du contrôle, de votre vivant. Dès que vous
        souhaitez des clauses élaborées, le passage par un notaire n&rsquo;est pas une option de
        confort : c&rsquo;est ce qui rend le cadre opposable.
      </p>
      <p>
        Pour un enfant mineur, la mécanique complète — qui signe, comment alimenter le contrat sans
        droits, comment garder un cadre après ses 18 ans — est détaillée dans notre article sur{" "}
        <LienArticle slug="assurance-vie-enfants-transmettre-valeurs">
          l&rsquo;assurance vie ouverte au nom d&rsquo;un enfant
        </LienArticle>
        , qui est le prolongement naturel de celui-ci côté jeunes générations.
      </p>
      <p>
        La limite, assumons-la : toutes ces clauses ont une échéance. Passé le terme de
        l&rsquo;inaliénabilité ou l&rsquo;extinction de l&rsquo;usufruit, le bénéficiaire dispose
        librement de ce qu&rsquo;il a reçu. Le droit vous permet d&rsquo;accompagner la transition —
        pas de la rendre éternelle.
      </p>

      <h2>L&rsquo;assurance vie transmet-elle aussi vos choix d&rsquo;investissement ?</h2>
      <p>
        L&rsquo;assurance vie est l&rsquo;outil de transmission préféré des Français pour une raison
        fiscale solide : les capitaux versés aux bénéficiaires désignés suivent un cadre propre,
        distinct des droits de succession. Pour les primes versées avant vos 70 ans, chaque
        bénéficiaire dispose d&rsquo;un abattement de <strong>152 500 €</strong> ; la fraction
        excédentaire est prélevée à 20 % jusqu&rsquo;à 700 000 €, puis à 31,25 % au-delà. Les primes
        versées après 70 ans réintègrent, elles, l&rsquo;assiette des droits de succession après un
        abattement global de 30 500 € pour l&rsquo;ensemble des contrats. Le conjoint marié ou le
        partenaire de Pacs est, lui, totalement exonéré. Ces règles sont détaillées sur{" "}
        <a
          href="https://www.impots.gouv.fr/particulier/questions/je-suis-beneficiaire-dune-assurance-vie-comment-la-declarer"
          target="_blank"
          rel="noreferrer"
        >
          impots.gouv.fr
        </a>
        .
      </p>
      <p>
        Mais il faut être lucide sur ce que l&rsquo;assurance vie transmet — et sur ce qu&rsquo;elle
        ne transmet pas. De votre vivant, le contrat porte vos choix : des supports labellisés,
        vérifiés, cohérents avec vos exigences — les critères de sélection sont ceux de notre{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">
          guide de l&rsquo;assurance vie ISR
        </LienArticle>
        . À votre décès, en revanche, le contrat est dénoué : les bénéficiaires reçoivent des
        liquidités, pas votre allocation. Vos supports soigneusement choisis redeviennent un
        virement bancaire. L&rsquo;assurance vie règle donc remarquablement le « qui reçoit combien
        » — le « qu&rsquo;en feront-ils » se prépare ailleurs : par les donations encadrées de votre
        vivant, et par la transmission de la méthode.
      </p>

      <h2>Quelle voie de transmission pour quel objectif ?</h2>
      <p>
        Le tableau ci-dessous compare les cinq voies principales du point de vue qui nous occupe :
        non pas seulement « combien de droits », mais « quel contrôle sur la destination des sommes
        ».
      </p>
      <table>
        <thead>
          <tr>
            <th>Voie</th>
            <th>Quand</th>
            <th>Cadre fiscal</th>
            <th>Contrôle sur l&rsquo;usage et la cohérence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Don manuel + pacte adjoint</strong>
            </td>
            <td>De votre vivant</td>
            <td>
              100 000 € par parent et par enfant tous les 15 ans, + 31 865 € de don familial
              d&rsquo;argent sous conditions
            </td>
            <td>
              Élevé pendant la durée des clauses : remploi sur un support choisi, inaliénabilité
              temporaire
            </td>
          </tr>
          <tr>
            <td>
              <strong>Donation notariée / donation-partage</strong>
            </td>
            <td>De votre vivant</td>
            <td>Mêmes abattements, sécurité juridique maximale</td>
            <td>Élevé : charges opposables, démembrement possible, équilibre familial figé</td>
          </tr>
          <tr>
            <td>
              <strong>Assurance vie (clause bénéficiaire)</strong>
            </td>
            <td>Au décès</td>
            <td>152 500 € par bénéficiaire pour les primes versées avant 70 ans</td>
            <td>
              Total de votre vivant (vous choisissez les supports), quasi nul après le dénouement :
              les bénéficiaires reçoivent des liquidités
            </td>
          </tr>
          <tr>
            <td>
              <strong>Legs par testament</strong>
            </td>
            <td>Au décès</td>
            <td>
              Droits selon le lien de parenté ; exonération possible pour certains organismes
              d&rsquo;intérêt général
            </td>
            <td>Modéré : charges possibles, mais exécutées sans vous</td>
          </tr>
          <tr>
            <td>
              <strong>Don à une association, de votre vivant</strong>
            </td>
            <td>Immédiat</td>
            <td>Réduction d&rsquo;impôt de 66 % (75 % sous conditions)</td>
            <td>Total : vous choisissez l&rsquo;organisme et constatez son action</td>
          </tr>
        </tbody>
      </table>
      <p>
        La lecture qui compte : plus une voie agit tôt et de votre vivant, plus elle vous laisse de
        prise sur la cohérence. Les voies « au décès » sont fiscalement puissantes mais
        s&rsquo;exécutent sans vous — elles se compensent par la précision de leur rédaction.
      </p>

      <h2>Peut-on inclure une association dans sa transmission ?</h2>
      <p>
        Oui, et c&rsquo;est souvent le chaînon manquant d&rsquo;un patrimoine « aligné ». Trois
        canaux existent. <strong>Le don de votre vivant</strong>, d&rsquo;abord : il ouvre droit à
        une réduction d&rsquo;impôt de 66 % du montant versé dans la limite de 20 % du revenu
        imposable, portée à 75 % jusqu&rsquo;à 2 000 € pour les organismes d&rsquo;aide aux
        personnes en difficulté, selon{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F426"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        . <strong>Le legs par testament</strong>, ensuite : certaines catégories d&rsquo;organismes
        — assistance et bienfaisance, protection de l&rsquo;environnement, recherche, notamment —
        sont exonérées de droits de mutation, quand d&rsquo;autres structures restent taxées ; les
        conditions précises figurent sur{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2722"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>{" "}
        et méritent d&rsquo;être validées avec un notaire, organisme par organisme.{" "}
        <strong>La clause bénéficiaire d&rsquo;assurance vie</strong>, enfin : une association peut
        y être désignée, seule ou en partage avec vos proches — le traitement fiscal dépendant du
        statut de l&rsquo;organisme, là encore à vérifier avant de rédiger.
      </p>
      <p>
        Entre l&rsquo;épargne investie et le don, il existe d&rsquo;ailleurs tout un continuum —
        fonds de partage, finance solidaire labellisée Finansol, dont nous décrivons les garanties
        réelles dans{" "}
        <LienArticle slug="label-finansol-finance-solidaire">
          notre analyse du label Finansol
        </LienArticle>
        . Et si vous souhaitez structurer l&rsquo;ensemble — succession, legs et supports de partage
        — c&rsquo;est l&rsquo;objet de notre article sur{" "}
        <LienArticle slug="transmettre-patrimoine-engage-fonds-partage">
          la transmission d&rsquo;un patrimoine engagé
        </LienArticle>
        , qui prolonge celui-ci côté philanthropie.
      </p>

      <h2>Comment transmettre la méthode, pas seulement l&rsquo;argent ?</h2>
      <p>
        Reste la troisième couche — celle qu&rsquo;aucun acte ne porte. Notre méthode tient en
        quatre temps : <strong>Clarifier, Structurer, Flécher, Raconter</strong>.
      </p>
      <ol>
        <li>
          <strong>Clarifier.</strong> Écrivez, sur une page, ce que votre épargne exclut, ce
          qu&rsquo;elle privilégie et pourquoi. Pas un manifeste : une grille de lecture. Si vous ne
          pouvez pas l&rsquo;expliquer simplement, vos héritiers ne pourront pas la reprendre.
        </li>
        <li>
          <strong>Structurer.</strong> Posez le calendrier fiscal : abattements disponibles, date de
          leur dernière utilisation (le compteur de quinze ans), âges charnières — 70 ans pour les
          versements en assurance vie, 80 ans pour le don familial de sommes d&rsquo;argent. Relisez
          votre clause bénéficiaire à chaque événement familial.
        </li>
        <li>
          <strong>Flécher.</strong> Adossez chaque donation à son cadre : pacte adjoint avec clause
          de remploi pour les sommes destinées à rester investies, charges notariées pour les biens,
          part associative dans le testament ou la clause bénéficiaire.
        </li>
        <li>
          <strong>Raconter.</strong> Lisez un relevé annuel avec vos enfants, montrez ce que finance
          un support, décodez un label ensemble — notre{" "}
          <a href="/outils/decodeur-label">décodeur de labels</a> est conçu pour servir de support à
          exactement cette conversation. Une lettre d&rsquo;intention, jointe au dossier,
          transmettra l&rsquo;esprit là où les actes transmettent la lettre.
        </li>
      </ol>

      <h2>Vos questions sur la donation et la transmission alignées sur vos valeurs</h2>

      <h3>Puis-je obliger mes enfants à investir « responsable » avec l&rsquo;argent donné ?</h3>
      <p>
        Temporairement, oui : une clause de remploi peut imposer le support d&rsquo;investissement,
        et une clause d&rsquo;inaliénabilité temporaire en verrouiller la disposition jusqu&rsquo;à
        un âge déterminé, si elle est limitée dans le temps et sérieusement justifiée. Indéfiniment,
        non : un adulte pleinement capable finit toujours par retrouver la libre disposition de son
        patrimoine. C&rsquo;est pour cela que la pédagogie compte au moins autant que les clauses.
      </p>

      <h3>Une donation peut-elle être annulée si l&rsquo;argent est utilisé autrement ?</h3>
      <p>
        Une donation est par principe irrévocable. En revanche, une donation consentie avec des
        charges précises peut être révoquée en justice si le donataire ne les exécute pas — encore
        faut-il que ces charges aient été correctement rédigées, ce qui plaide pour l&rsquo;acte
        notarié dès que l&rsquo;enjeu est réel.
      </p>

      <h3>
        Les abattements de donation et l&rsquo;abattement de l&rsquo;assurance vie se cumulent-ils ?
      </h3>
      <p>
        Oui : ce sont deux régimes distincts. Les 100 000 € par parent et par enfant concernent les
        donations de votre vivant ; les 152 500 € par bénéficiaire concernent les capitaux
        d&rsquo;assurance vie issus de primes versées avant vos 70 ans, transmis au décès. Utiliser
        l&rsquo;un n&rsquo;entame pas l&rsquo;autre — c&rsquo;est précisément ce qui permet
        d&rsquo;étaler une transmission dans le temps.
      </p>

      <h3>Faut-il un notaire pour donner de son vivant ?</h3>
      <p>
        Pas pour un don manuel de somme d&rsquo;argent, qui doit en revanche être déclaré à
        l&rsquo;administration fiscale. Le notaire devient nécessaire pour les biens immobiliers et
        fortement conseillé dès que vous souhaitez des clauses élaborées : pacte adjoint ambitieux,
        donation-partage, charges, démembrement. Le coût de l&rsquo;acte s&rsquo;évalue à
        l&rsquo;aune de ce qu&rsquo;il sécurise.
      </p>

      <h3>Peut-on désigner une association bénéficiaire de son assurance vie ?</h3>
      <p>
        Oui, seule ou aux côtés de vos proches, avec la répartition de votre choix. Le traitement
        fiscal des capitaux reçus dépend du statut de l&rsquo;organisme — certaines catégories sont
        exonérées, d&rsquo;autres non. Vérifiez ce point avec l&rsquo;association elle-même et votre
        notaire avant de rédiger la clause, et relisez-la régulièrement.
      </p>

      <h3>Une lettre d&rsquo;intention a-t-elle une valeur juridique ?</h3>
      <p>
        Non — elle ne lie personne, et c&rsquo;est sa force autant que sa limite. Elle
        n&rsquo;impose rien, mais elle transmet ce que les actes ne savent pas dire : vos critères,
        vos raisons, votre manière de vérifier. Beaucoup d&rsquo;héritiers respectent spontanément
        un cadre qu&rsquo;on leur a expliqué, là où ils contourneraient un cadre qu&rsquo;on leur a
        imposé.
      </p>

      <h3>Quand faut-il commencer à organiser sa transmission ?</h3>
      <p>
        Plus tôt qu&rsquo;on ne le pense, pour une raison arithmétique : l&rsquo;abattement de 100
        000 € se reconstitue tous les quinze ans, l&rsquo;exonération des dons familiaux
        d&rsquo;argent suppose un donateur de moins de 80 ans, et les versements en assurance vie
        effectués avant 70 ans bénéficient du cadre le plus favorable. Chaque cycle de quinze ans
        non entamé est un abattement qui ne servira jamais.
      </p>

      <h2>Un patrimoine qui continue de vous ressembler</h2>
      <p>
        La réponse à la question de départ est donc oui : on peut donner et transmettre en cohérence
        avec ses valeurs, à condition de jouer sur les trois plans à la fois — le cadre fiscal pour
        préserver le capital, les outils juridiques pour orienter les sommes le temps nécessaire, et
        la transmission de la méthode pour que la cohérence survive aux clauses. Aucun des trois ne
        remplace les deux autres.
      </p>
      <p>
        Ne rien organiser a un coût précis : des cycles d&rsquo;abattement de quinze ans qui
        expirent sans avoir servi, des seuils d&rsquo;âge qui se franchissent sans retour, une
        clause bénéficiaire jamais relue — et des héritiers qui reçoivent un portefeuille dont
        personne ne leur a donné le mode d&rsquo;emploi. La transmission subie existe : c&rsquo;est
        celle qui s&rsquo;applique par défaut, aux conditions fiscales par défaut, sans aucune de
        vos intentions.
      </p>
      <p>
        Deux lectures prolongent naturellement celle-ci : si vos enfants sont encore mineurs, notre
        article sur{" "}
        <LienArticle slug="assurance-vie-enfants-transmettre-valeurs">
          l&rsquo;assurance vie ouverte au nom d&rsquo;un enfant
        </LienArticle>{" "}
        décrit la mise en œuvre concrète, dons et pacte adjoint compris ; et si la dimension
        philanthropique vous parle, celui sur{" "}
        <LienArticle slug="transmettre-patrimoine-engage-fonds-partage">
          la transmission d&rsquo;un patrimoine engagé
        </LienArticle>{" "}
        détaille legs, fonds de partage et succession solidaire.
      </p>
      <p>
        Et si vous préférez poser votre situation sur la table — abattements déjà consommés, clauses
        à relire, part associative à structurer —, c&rsquo;est un travail que nous faisons
        régulièrement avec les familles : lors d&rsquo;un premier échange offert, un conseiller du
        cabinet passe en revue l&rsquo;existant et vous donne des pistes concrètes, à valider
        ensuite avec votre notaire pour la rédaction des actes.
      </p>
    </>
  );
}
