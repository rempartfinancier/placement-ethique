import type { ArticleMeta } from "../article-types";
import { FaqArticle } from "./faq";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "questionnaire-durabilite-assurance-vie-comment-repondre",
  title: "Questionnaire de durabilité : comment y répondre ?",
  excerpt:
    "Oui ou non, puis trois critères : taxonomie, investissement durable, incidences négatives. Ce que chaque réponse change dans l'offre qu'on vous propose.",
  readingTime: "16 min",
  category: "Conseil",
  date: "2026-11-14",
  tags: ["préférences de durabilité", "assurance vie", "SFDR", "taxonomie", "ESMA", "ISR"],
  author: "Alexandre Pollet",
  faq: [
    {
      q: "Suis-je obligé de répondre au questionnaire de durabilité ?",
      a: "Non. Le professionnel est tenu de vous poser la question, vous n'êtes pas tenu d'avoir des préférences. Si vous ne répondez pas, ou si vous répondez « non », les autorités européennes et françaises indiquent que vous pouvez être considéré comme « neutre » : des produits avec ou sans caractéristiques de durabilité peuvent alors vous être proposés.",
    },
    {
      q: "Que se passe-t-il si je réponds « non » au questionnaire de durabilité ?",
      a: "Rien ne vous est fermé. Vous êtes considéré comme neutre du point de vue de la durabilité, et le reste de votre profil (connaissances, situation financière, horizon, tolérance au risque) détermine seul les produits qui peuvent vous être conseillés. Des supports labellisés peuvent toujours figurer dans la proposition, mais le professionnel n'a pas à en chercher pour vous.",
    },
    {
      q: "Quel pourcentage minimum faut-il indiquer dans le questionnaire ?",
      a: "Aucun pourcentage n'est le bon en soi : c'est vous qui fixez la proportion minimale, et les textes interdisent au professionnel d'orienter votre réponse. Ce qu'il faut savoir, c'est l'effet du chiffre : plus il est élevé, moins il reste de produits qui y correspondent, surtout sur le critère de la taxonomie. Les orientations de l'ESMA citent à titre d'exemple des paliers du type « minimum 20 %, minimum 25 %, minimum 30 % ».",
    },
    {
      q: "C'est quoi, les « principales incidences négatives » ?",
      a: "Ce sont les effets défavorables des investissements sur l'environnement et la société : émissions de gaz à effet de serre, atteintes à la biodiversité, eau, déchets, questions sociales et de droits humains, corruption. Dans le questionnaire, vous indiquez lesquelles vous voulez voir prises en compte. Beaucoup de questionnaires les regroupent par familles (environnement, social, gouvernance) plutôt que de lister chaque indicateur.",
    },
    {
      q: "Si je coche les trois critères, est-ce que je risque de n'avoir aucune proposition ?",
      a: "C'est possible si vos exigences cumulées dépassent ce que la gamme du distributeur contient. Dans ce cas, il doit vous le dire : il ne peut pas vous présenter un produit comme correspondant à vos préférences si ce n'est pas le cas. Vous pouvez alors adapter vos préférences, ou ne pas le faire. Vous restez libre de votre choix, et toute adaptation doit être écrite dans le document qui formalise le conseil.",
    },
    {
      q: "Mes réponses au questionnaire de durabilité sont-elles définitives ?",
      a: "Non. Vos préférences se mettent à jour comme le reste de votre profil, et vous pouvez demander à les revoir. Par ailleurs, pour les instruments financiers, les orientations de l'ESMA précisent qu'une adaptation acceptée pour permettre un conseil donné ne vaut que pour ce conseil, pas pour votre profil en général.",
    },
    {
      q: "Un fonds labellisé ISR répond-il automatiquement à mes préférences de durabilité ?",
      a: "Non. Selon l'ACPR et l'AMF (document du 13 novembre 2025), les produits relevant du Label ISR ou du label Greenfin semblent pouvoir être regardés comme prenant en compte certaines incidences négatives, mais cela ne dispense pas le professionnel de vérifier que ces incidences sont bien celles que vous avez exprimées. Un label et une réponse au questionnaire sont deux choses distinctes.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> depuis le 2 août 2022, le professionnel qui vous conseille
          une assurance vie ou un placement financier doit vous demander si vous avez des
          préférences de durabilité. Vous répondez d'abord par oui ou par non. Si c'est oui, vous
          pouvez préciser jusqu'à trois critères : une part minimale alignée sur la taxonomie
          européenne, une part minimale d'« investissements durables » au sens du règlement SFDR, et
          les incidences négatives à prendre en compte. Chaque exigence ajoutée réduit la liste des
          produits qui peuvent vous être conseillés ; répondre « non » vous rend « neutre » et ne
          ferme rien. Sources officielles consultées le 14 novembre 2026.
        </p>
      </div>

      <p>
        Vous êtes en train de souscrire une assurance vie. Après les questions sur vos revenus,
        votre horizon et votre rapport au risque, une nouvelle page s'ouvre : « Souhaitez-vous une
        proportion minimale d'investissements alignés sur la taxonomie ? », « Quelles principales
        incidences négatives souhaitez-vous voir prises en compte ? ». Vous vouliez simplement que
        votre épargne ne finance pas n'importe quoi, et l'on vous demande un pourcentage sur une
        notion que personne ne vous a expliquée.
      </p>
      <p>
        Vous n'êtes pas un cas isolé. D'après le{" "}
        <a
          href="https://acpr.banque-france.fr/system/files/2025-11/Approche_ACPR-AMF_preferences_durabilite_public.pdf"
          target="_blank"
          rel="noreferrer"
        >
          document commun de l'ACPR et de l'AMF du 13 novembre 2025
        </a>
        , environ 95 % des clients, en moyenne dans les réseaux observés, n'expriment pas de
        préférences détaillées, et les deux autorités parlent de « concepts difficiles à appréhender
        pour les conseillers et les clients ». Le « questionnaire de durabilité » est le nom d'usage
        du recueil de vos <strong>préférences en matière de durabilité</strong> : la partie de votre
        profil d'épargnant qui dit si, et dans quelle mesure, vous voulez que des critères
        environnementaux et sociaux pèsent dans le choix de vos placements. Cet article explique ce
        que signifie chaque question, ce que chaque réponse change dans l'offre qui vous est
        présentée, et comment vous préparer. Il ne vous dit pas quoi répondre : c'est précisément le
        seul point sur lequel personne n'a le droit de vous orienter.
      </p>

      <h2>Qu'est-ce que le questionnaire de durabilité, et qui doit vous le poser ?</h2>
      <p>
        C'est une étape obligatoire du conseil en placement depuis le 2 août 2022 : avant de vous
        proposer un produit, le professionnel doit vous demander si vous avez des préférences de
        durabilité, puis en tenir compte.
      </p>
      <p>
        Deux textes européens jumeaux l'imposent. Pour l'assurance vie et les contrats de
        capitalisation, le{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32021R1257"
          target="_blank"
          rel="noreferrer"
        >
          règlement délégué (UE) 2021/1257
        </a>{" "}
        (cadre de la directive sur la distribution d'assurances, dite DDA). Pour les comptes-titres,
        les PEA et la gestion sous mandat, le{" "}
        <a
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32021R1253"
          target="_blank"
          rel="noreferrer"
        >
          règlement délégué (UE) 2021/1253
        </a>{" "}
        (cadre MiFID II). Les deux donnent la même définition, les deux sont applicables depuis le 2
        août 2022. Que vous passiez par une banque, un assureur, un courtier en ligne ou un cabinet
        de gestion de patrimoine, la règle est la même. Pour l'assurance vie, le droit français va
        jusqu'à imposer ce conseil avant toute souscription : selon l'
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048252377"
          target="_blank"
          rel="noreferrer"
        >
          article L. 522-5 du code des assurances
        </a>
        , le distributeur conseille un contrat cohérent avec vos exigences et vos besoins, « y
        compris ceux concernant [vos] éventuelles préférences en matière de durabilité ». Pour les
        instruments financiers, l'obligation s'applique dès lors qu'un conseil en investissement ou
        une gestion de portefeuille vous est fourni.
      </p>
      <p>Trois points de cadrage évitent la plupart des malentendus.</p>
      <ul>
        <li>
          <strong>La question est obligatoire, la préférence ne l'est pas.</strong> La définition
          vise « le choix d'un client d'intégrer ou non » des produits durables dans son
          investissement. « Non » est une réponse prévue par le texte.
        </li>
        <li>
          <strong>Le professionnel doit rester neutre.</strong> Les{" "}
          <a
            href="https://www.esma.europa.eu/sites/default/files/2023-04/ESMA35-43-3172_Guidelines_on_certain_aspects_of_the_MiFID_II_suitability_requirements_FR.pdf"
            target="_blank"
            rel="noreferrer"
          >
            orientations de l'ESMA
          </a>{" "}
          (référence ESMA35-43-3172, version française publiée le 3 avril 2023, appliquées par l'AMF
          depuis le 3 octobre 2023) lui demandent d'expliquer les notions « en évitant tout jargon
          technique » et d'adopter « une approche neutre et non biaisée » pour ne pas influencer vos
          réponses. Les conseils d'application de l'autorité européenne des assurances (EIOPA, 20
          juillet 2022) demandent la même neutralité pour l'assurance vie.
        </li>
        <li>
          <strong>Vos préférences passent après le reste de votre profil.</strong> Elles ne sont
          traitées qu'une fois vérifiés vos connaissances, votre situation financière, votre horizon
          et votre tolérance au risque. Le questionnaire trie parmi les produits déjà adaptés à
          votre profil ; il ne permet pas d'en faire entrer un qui serait trop risqué pour vous.
        </li>
      </ul>

      <h2>
        Que veulent dire les trois critères : taxonomie, investissement durable, incidences
        négatives ?
      </h2>
      <p>
        Ce sont trois façons différentes de mesurer la durabilité d'un placement : la première
        compte les activités « vertes » selon une liste officielle, la deuxième compte les
        investissements que le gérant qualifie de durables, la troisième regarde les dégâts que le
        placement cherche à limiter. Vous pouvez en retenir un, deux, trois, ou aucun.
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Ce qu'il mesure</th>
            <th>Ce qu'on vous demande</th>
            <th>Sa limite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>a) Alignement sur la taxonomie</strong>
            </td>
            <td>
              La part du produit investie dans des activités durables sur le plan environnemental,
              selon la classification de l'Union européenne (règlement 2020/852)
            </td>
            <td>Une proportion minimale, en pourcentage ou par paliers</td>
            <td>
              Uniquement environnemental ; les pourcentages affichés par les produits sont plus bas
              que pour le critère b) et l'offre correspondante est peu nombreuse
            </td>
          </tr>
          <tr>
            <td>
              <strong>b) Investissements durables (SFDR)</strong>
            </td>
            <td>
              La part investie dans des activités qui contribuent à un objectif environnemental ou
              social, sans nuire de façon importante à un autre objectif, dans des sociétés bien
              gouvernées (règlement 2019/2088, article 2, point 17)
            </td>
            <td>Une proportion minimale, en pourcentage ou par paliers</td>
            <td>
              Chaque société de gestion applique sa propre méthode de calcul : deux pourcentages
              identiques ne recouvrent pas forcément la même chose
            </td>
          </tr>
          <tr>
            <td>
              <strong>c) Principales incidences négatives</strong>
            </td>
            <td>
              Les effets défavorables des investissements sur le climat, la biodiversité, l'eau, les
              déchets, les questions sociales et les droits humains
            </td>
            <td>
              Les incidences (ou familles d'incidences) que vous voulez voir prises en compte, pas
              un pourcentage
            </td>
            <td>
              « Prendre en compte » peut passer par des exclusions, par le vote ou par le dialogue
              avec les entreprises : le critère ne dit pas laquelle de ces approches est suivie
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Le critère a) est le plus exigeant. Lors de ses contrôles auprès de cinq établissements
        (menés d'avril à juillet 2024, synthèse publiée le 26 février 2026), l'
        <a
          href="https://www.amf-france.org/sites/institutionnel/files/private/2026-02/synthese-spot-preferences-durabilite-fr.pdf"
          target="_blank"
          rel="noreferrer"
        >
          AMF a relevé
        </a>{" "}
        que les instruments alignés sur la taxonomie étaient « peu nombreux voire absents » des
        gammes, l'un des établissements n'en proposant aucun. Le pourcentage d'alignement d'un fonds
        se lit dans son annexe précontractuelle SFDR ; la méthode de lecture est détaillée dans{" "}
        <LienArticle slug="taxonomie-verte-europeenne-epargne">
          la taxonomie verte européenne expliquée aux épargnants
        </LienArticle>
        , utile si vous envisagez de chiffrer ce critère.
      </p>
      <p>
        Le critère b) repose sur une définition plus souple, ce qui explique que l'offre y soit plus
        large. Il ne se confond pas avec la classification des fonds en « Article 8 » ou « Article 9
        » : un fonds Article 8 peut s'engager sur une part minimale d'investissements durables de 0
        %, de 10 % ou de 50 %. Pour ne pas mélanger les deux notions, voir{" "}
        <LienArticle slug="sfdr-article-8-ou-9-ce-que-ca-garantit">
          ce que garantit la classification Article 8 ou 9
        </LienArticle>
        .
      </p>
      <div className="callout">
        <p>
          <strong>À retenir sur le calendrier.</strong> Une révision du règlement SFDR, proposée par
          la Commission européenne en novembre 2025, est en cours de négociation ; elle n'est pas
          adoptée à la date de rédaction (14 novembre 2026). Les trois critères ci-dessus restent
          ceux de votre questionnaire tant que les textes ne sont pas modifiés.
        </p>
      </div>

      <h2>Que change chaque réponse dans l'offre qu'on vous propose ?</h2>
      <p>
        Chaque réponse agit comme un filtre : « non » n'en pose aucun, « oui » sans précision laisse
        le distributeur appliquer sa propre grille, et chaque critère chiffré retire de la liste les
        produits qui ne l'atteignent pas.
      </p>
      <p>
        Le tableau décrit l'effet de chaque réponse, d'après les orientations de l'ESMA, les
        conseils d'application de l'EIOPA et le document ACPR-AMF. Il ne classe pas les réponses :
        aucune n'est meilleure qu'une autre dans l'absolu.
      </p>
      <table>
        <thead>
          <tr>
            <th>Si vous répondez…</th>
            <th>Alors l'offre devient…</th>
            <th>Ce qu'il faut avoir en tête</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>« Non », ou vous ne répondez pas</strong>
            </td>
            <td>
              Inchangée : vous êtes « neutre », des produits avec ou sans caractéristiques de
              durabilité peuvent vous être conseillés
            </td>
            <td>
              Le professionnel n'a pas à chercher de supports durables ; il peut en proposer quand
              même
            </td>
          </tr>
          <tr>
            <td>
              <strong>« Oui », sans détailler les trois critères</strong>
            </td>
            <td>
              Filtrée selon une grille définie par le distributeur (« profil générique » ou «
              préférences prédéfinies »), qui doit reposer sur au moins un des trois critères
            </td>
            <td>
              Demandez quels critères et quels seuils composent ce profil. L'AMF a relevé des
              profils génériques aux proportions minimales « peu élevées » (de 5 % à 20 %
              d'investissements durables dans son panel)
            </td>
          </tr>
          <tr>
            <td>
              <strong>« Oui », avec une part minimale alignée sur la taxonomie</strong>
            </td>
            <td>Fortement réduite, parfois vide selon la gamme et le seuil demandé</td>
            <td>
              C'est le critère pour lequel l'offre est la plus étroite ; un seuil élevé augmente la
              probabilité qu'aucun produit ne corresponde
            </td>
          </tr>
          <tr>
            <td>
              <strong>« Oui », avec une part minimale d'investissements durables</strong>
            </td>
            <td>Réduite aux supports qui s'engagent au moins sur ce pourcentage</td>
            <td>
              Le chiffre dépend de la méthode de chaque gérant ; dans un contrat multisupport, il
              peut être apprécié en moyenne sur l'allocation (voir plus bas)
            </td>
          </tr>
          <tr>
            <td>
              <strong>« Oui », avec des incidences négatives à prendre en compte</strong>
            </td>
            <td>Réduite aux supports qui déclarent prendre en compte ces incidences</td>
            <td>
              Filtre qualitatif : demandez par quel moyen (exclusion, vote, dialogue) le support les
              traite
            </td>
          </tr>
          <tr>
            <td>
              <strong>« Oui », avec plusieurs critères à la fois</strong>
            </td>
            <td>
              La plus restreinte si les critères sont cumulés ; plus large si le distributeur les
              traite comme des alternatives
            </td>
            <td>
              Les deux lectures existent. Si vos critères ne sont pas tous retenus, vous devez en
              être averti au moment où vous les exprimez
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Deux précisions. D'abord, l'ordre de grandeur : dans le panel contrôlé par l'AMF, la part
        des clients déclarant des préférences allait d'environ 15 % dans deux établissements à 50 %
        dans deux autres, et celle des clients qui les détaillaient de 0,5 % à 4 %. L'AMF attribue
        probablement l'écart au rôle du conseiller plutôt qu'aux outils. Ensuite, le vocabulaire :
        si le questionnaire vous propose des niveaux en mots (« un peu », « beaucoup », « avant tout
        »), vous êtes en droit de savoir à quel pourcentage minimal chaque niveau correspond. L'AMF
        classe l'absence de cette correspondance parmi les mauvaises pratiques.
      </p>

      <h2>Que se passe-t-il si aucun produit ne correspond à vos réponses ?</h2>
      <p>
        Le professionnel doit vous le dire, et il ne peut pas vous présenter un produit comme
        conforme à vos préférences s'il ne l'est pas. Vous pouvez alors adapter vos préférences, ou
        ne pas le faire : la décision vous appartient.
      </p>
      <p>
        Pour l'assurance vie, le règlement délégué (UE) 2021/1257 prévoit que le distributeur «
        s'abstient de recommander » un produit « comme correspondant » à vos préférences si ce n'est
        pas le cas, vous en explique les motifs et en garde la trace. Si vous décidez de modifier
        vos préférences, il conserve aussi un enregistrement de votre décision et de ses raisons. Le
        document ACPR-AMF décrit la séquence attendue :
      </p>
      <ol>
        <li>
          le professionnel vous indique qu'aucun produit ne peut être conseillé au regard de vos
          préférences, et que vous pouvez les adapter ;
        </li>
        <li>
          une fois que vous avez manifesté l'intention de les adapter, et pas avant, il vous
          présente les produits ou allocations les plus proches, en précisant quels critères
          devraient bouger ;
        </li>
        <li>il recueille votre accord exprès sur l'adaptation proposée ;</li>
        <li>
          l'adaptation est écrite dans le document qui formalise le conseil, afin que vous puissiez
          voir en quoi la proposition s'écarte de vos préférences initiales.
        </li>
      </ol>
      <p>
        À l'inverse, les deux autorités rangent parmi les pratiques susceptibles de nuire au client
        le fait de vous inviter à revoir vos préférences avant d'avoir vérifié si des produits y
        correspondent, et le fait de ne pas vous laisser les adapter librement. Dans ses contrôles,
        l'AMF a aussi relevé des rapports où une mention générique indiquait que le client avait
        accepté de modifier ses préférences, sans qu'on le lui ait réellement proposé. Si vous lisez
        une telle phrase dans votre document de conseil alors que personne ne vous a posé la
        question, vous pouvez demander sa correction.
      </p>

      <h2>Comment vos réponses s'appliquent-elles à une assurance vie multisupport ?</h2>
      <p>
        Dans un contrat multisupport, vos préférences peuvent être vérifiées de deux manières : en
        moyenne sur l'ensemble des supports retenus, pondérée par les sommes investies, ou support
        par support. Les conseils d'application de l'
        <a
          href="https://acpr.banque-france.fr/system/files/2024-12/20241212_2024-R-03_Guidance%20EIOPA_FR.pdf"
          target="_blank"
          rel="noreferrer"
        >
          EIOPA (traduction française diffusée par l'ACPR)
        </a>{" "}
        admettent les deux méthodes, et le résultat n'est pas le même.
      </p>
      <div className="callout">
        <p>
          <strong>
            Situation type construite pour illustrer le calcul, à partir de paramètres réalistes.
          </strong>{" "}
          Elle ne décrit aucun client, aucun contrat ni aucun fonds réel. Hypothèses : une
          épargnante verse 30 000 € sur un contrat multisupport et indique une seule préférence, une
          part minimale de 20 % d'investissements durables au sens de SFDR (critère b). Son profil
          de risque, établi avant, conduit à une allocation de 12 000 € sur le fonds en euros et 18
          000 € en unités de compte, répartis à parts égales entre deux supports. Engagements
          minimaux d'investissements durables retenus pour l'exemple : 5 % pour le fonds en euros,
          30 % pour le support A, 50 % pour le support B. Ces pourcentages sont choisis pour la
          lisibilité du calcul ; ils ne reflètent aucune moyenne de marché. Les unités de compte
          présentent un risque de perte en capital.
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Support</th>
            <th>Montant</th>
            <th>Engagement minimal</th>
            <th>Montant « durable » minimal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fonds en euros</td>
            <td>12 000 €</td>
            <td>5 %</td>
            <td>600 €</td>
          </tr>
          <tr>
            <td>Support A</td>
            <td>9 000 €</td>
            <td>30 %</td>
            <td>2 700 €</td>
          </tr>
          <tr>
            <td>Support B</td>
            <td>9 000 €</td>
            <td>50 %</td>
            <td>4 500 €</td>
          </tr>
          <tr>
            <td>
              <strong>Ensemble</strong>
            </td>
            <td>
              <strong>30 000 €</strong>
            </td>
            <td>
              <strong>26 % en moyenne pondérée</strong>
            </td>
            <td>
              <strong>7 800 €</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Ce que l'exemple montre :</p>
      <ul>
        <li>
          <strong>Méthode de la moyenne : la préférence est respectée.</strong> 7 800 € sur 30 000
          €, soit 26 %, dépasse les 20 % demandés.
        </li>
        <li>
          <strong>Méthode support par support : elle ne l'est pas.</strong> Le fonds en euros, à 5
          %, est sous le seuil. Le distributeur qui applique cette méthode devrait soit écarter ce
          support, soit constater que l'allocation ne correspond pas.
        </li>
        <li>
          <strong>Avec un seuil de 40 %, la moyenne ne suffit plus.</strong> 26 % est inférieur à 40
          %. Une allocation de 6 000 € sur le fonds en euros et 24 000 € sur le support B
          atteindrait 41 % (300 € + 12 000 €, soit 12 300 € sur 30 000 €), mais elle porterait la
          part en unités de compte de 60 % à 80 %. Or le profil de risque passe avant les
          préférences de durabilité : si cette allocation est trop risquée pour l'épargnante, elle
          ne peut pas lui être conseillée, et l'on revient à la séquence d'adaptation décrite plus
          haut.
        </li>
      </ul>
      <p>
        La question utile à poser n'est donc pas seulement « quel pourcentage ? », mais « sur quoi
        ce pourcentage est-il calculé, et par quelle méthode ? ». Pour savoir ce que contiennent
        réellement le fonds en euros et les unités de compte d'un contrat, la suite logique est{" "}
        <LienArticle slug="que-finance-votre-assurance-vie-comment-le-savoir">
          que finance votre assurance vie, et comment le savoir
        </LienArticle>
        .
      </p>

      <h2>Comment se préparer avant de remplir le questionnaire de durabilité ?</h2>
      <p>
        En clarifiant vos priorités avant le rendez-vous, puis en posant quatre ou cinq questions de
        méthode pendant. La liste ci-dessous ne suggère aucune réponse ; elle sert à ce que la vôtre
        soit comprise et correctement retranscrite.
      </p>
      <ol>
        <li>
          <strong>Avant : décidez si le sujet compte pour vous.</strong> « Non » ou « pas pour ce
          placement » sont des réponses recevables.
        </li>
        <li>
          <strong>Avant : notez ce qui vous importe en mots simples.</strong> Climat, conditions de
          travail, secteurs que vous ne voulez pas financer. Ces mots aideront à choisir entre les
          trois critères, notamment celui des incidences négatives. L'
          <a href="/outils/profil-investisseur">outil profil investisseur</a> donne des pistes pour
          cette mise au clair ; il ne remplace pas le questionnaire réglementaire.
        </li>
        <li>
          <strong>Pendant : faites-vous expliquer chaque critère.</strong> L'explication sans jargon
          fait partie des obligations du professionnel, pas d'une faveur.
        </li>
        <li>
          <strong>Pendant : demandez la traduction en pourcentage</strong> de tout niveau exprimé en
          mots, et le contenu exact de tout « profil générique » ou choix prédéfini.
        </li>
        <li>
          <strong>Pendant : demandez la méthode.</strong> Critères cumulés ou alternatifs ?
          Appréciés support par support ou en moyenne sur le contrat ?
        </li>
        <li>
          <strong>Pendant : demandez ce qui se passe si rien ne correspond.</strong> La réponse
          attendue est la séquence en quatre temps décrite plus haut.
        </li>
        <li>
          <strong>Après : relisez le document de conseil.</strong> Vos préférences doivent y
          figurer, telles que vous les avez exprimées, ainsi que l'explication de la façon dont la
          proposition y répond. Si vous n'en avez exprimé aucune, cela doit être écrit aussi.
        </li>
        <li>
          <strong>Après : vérifiez un support.</strong> Prenez un des fonds proposés et retrouvez
          dans son annexe précontractuelle le pourcentage annoncé.
        </li>
      </ol>
      <p>
        Le questionnaire n'est qu'une des questions à poser à un professionnel. Pour les autres
        (rémunération, indépendance, suivi), l'article{" "}
        <LienArticle slug="comment-choisir-conseiller-investissement-ethique-questions">
          dix questions à poser avant de choisir un conseiller
        </LienArticle>{" "}
        prend le même sujet du côté du professionnel.
      </p>

      <h2>Quels signaux montrent qu'un questionnaire de durabilité est mal mené ?</h2>
      <p>
        Les signaux les plus nets sont ceux que l'ACPR et l'AMF ont elles-mêmes listés : un
        questionnaire sans effet sur ce qu'on vous propose, des choix de réponse flous, ou des
        préférences mal retranscrites.
      </p>
      <ul>
        <li>
          <strong>Aucune question n'est posée</strong>, ou la page est validée à votre place en
          quelques secondes.
        </li>
        <li>
          <strong>Le recueil n'a aucune incidence sur le conseil</strong> : la proposition serait la
          même quelles que soient vos réponses.
        </li>
        <li>
          <strong>Les choix sont « peu ambitieux » ou « peu discriminants »</strong> : toutes les
          options mènent aux mêmes produits.
        </li>
        <li>
          <strong>On vous suggère une réponse</strong>, par exemple en vous prévenant d'emblée que
          tel critère « ne donne rien ». L'AMF a relevé qu'un avertissement de ce type sur la
          disponibilité des produits alignés sur la taxonomie pouvait influencer le choix des
          clients.
        </li>
        <li>
          <strong>Le document de conseil ne dit rien de la durabilité</strong> des supports
          proposés, ou n'explique pas en quoi ils répondent à ce que vous avez exprimé.
        </li>
        <li>
          <strong>Un label tient lieu de réponse.</strong> Un label atteste d'un cahier des charges
          ; il ne dit pas si le support correspond à vos critères. Sur ce que couvre un label, voir{" "}
          <LienArticle slug="label-isr-que-garantit-il-vraiment">
            ce que le Label ISR garantit vraiment
          </LienArticle>
          .
        </li>
      </ul>
      <p>
        Ces constats visent des pratiques, pas des personnes : les autorités notent elles-mêmes que
        le dispositif est complexe, qu'il a été déployé tardivement et que la formation reste
        inégale. Le document du 13 novembre 2025 propose d'ailleurs une méthode simplifiée, non
        obligatoire pour les professionnels. Un questionnaire laborieux n'est pas forcément le signe
        d'une mauvaise volonté ; un questionnaire sans effet, si.
      </p>

      <h2>Vos questions sur le questionnaire de durabilité</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Questionnaire de durabilité : comprendre les questions avant de choisir vos réponses</h2>
      <p>
        <strong>La réponse à votre question.</strong> Le questionnaire de durabilité se résume à une
        question (avez-vous des préférences ?) et, si oui, à trois critères que vous pouvez retenir
        ou non : une part minimale alignée sur la taxonomie, une part minimale d'investissements
        durables, des incidences négatives à prendre en compte. Aucune réponse n'est fausse. Chacune
        a un effet différent sur la liste des produits qui peuvent vous être conseillés.
      </p>
      <p>
        <strong>Le coût de l'inaction.</strong> Répondre sans comprendre a deux issues possibles :
        un « non » par défaut alors que le sujet comptait pour vous, ou des exigences cochées au
        hasard qui vident l'offre et conduisent à les « adapter » dans la foulée. Dans les deux cas,
        le document de conseil que vous signez ne dit pas ce que vous pensez, et c'est lui qui fera
        foi.
      </p>
      <p>
        <strong>La prochaine étape.</strong> Notez en quelques lignes ce qui vous importe, puis
        relisez le tableau « si vous répondez… » avant votre rendez-vous. Si vous détenez déjà un
        contrat et que vos réponses vous amènent à vouloir en changer les supports,{" "}
        <LienArticle slug="passer-epargne-isr-fiscalite-par-enveloppe">
          passer son épargne en ISR : quelle fiscalité par enveloppe
        </LienArticle>{" "}
        explique ce que chaque opération déclenche comme impôt, question qui se pose juste après.
      </p>
      <p>
        <strong>Et si vous préférez en parler.</strong> Vous pouvez échanger avec un conseiller du
        cabinet pour vous faire expliquer ces critères et obtenir des pistes ; le premier échange
        est offert et sans engagement.{" "}
        <a href="/cgp-investissement-responsable">L'accompagnement proposé</a> est décrit sur une
        page dédiée, et la grille de rémunération sur <a href="/tarifs">tarifs</a>.
      </p>
    </>
  );
}
