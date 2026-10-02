import type { ArticleMeta } from "../article-types";
import { FaqArticle } from "./faq";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "label-isr-immobilier-reforme-2026-ce-qui-change-scpi",
  title: "Label ISR immobilier réformé : ce qui change pour vos SCPI",
  excerpt:
    "Le comité du label ISR a remis le 30 septembre 2026 sa réforme du volet immobilier : climat, exclusions, calendrier. Ce qui change pour une SCPI, et quand.",
  readingTime: "12 min",
  category: "Labels & Greenwashing",
  date: "2026-10-02",
  tags: ["Label ISR", "SCPI", "immobilier durable", "réforme", "best-in-progress", "décarbonation"],
  author: "Alexandre Pollet",
  faq: [
    {
      q: "Le nouveau référentiel du label ISR immobilier est-il déjà en vigueur ?",
      a: "Non. À la date de rédaction (2 octobre 2026), le comité du label a seulement transmis sa proposition finale au ministre de l'Économie, le 30 septembre 2026. Le référentiel définitif doit être adopté par arrêté ministériel. Tant que ce n'est pas fait, les fonds labellisés restent contrôlés sur le référentiel actuel, qui date d'octobre 2020.",
    },
    {
      q: "Ma SCPI labellisée ISR va-t-elle perdre son label ?",
      a: "Rien ne permet de le dire aujourd'hui. Les fonds déjà labellisés disposeront d'une période de transition d'un an après la publication du référentiel définitif, et plusieurs exigences nouvelles ne s'appliqueront qu'à partir de leur premier audit de renouvellement suivant cette transition. Un fonds qui ne remplirait pas les nouvelles conditions à ce moment-là pourrait en revanche ne pas être renouvelé.",
    },
    {
      q: "Une SCPI labellisée ISR peut-elle encore détenir des immeubles énergivores ?",
      a: "Oui, et la réforme le maintient volontairement. Le référentiel proposé conserve la distinction entre actifs « performants » et actifs « en progrès », ces derniers devant faire l'objet d'un plan d'amélioration chiffré. La réforme mise sur la rénovation du parc existant plutôt que sur la seule détention d'immeubles neufs.",
    },
    {
      q: "Que signifie le seuil de 35 % d'actifs avec une stratégie de décarbonation crédible ?",
      a: "Parmi les actifs analysés sur des critères ESG, au moins 35 % devront disposer d'une trajectoire de décarbonation sur au moins dix ans, cohérente avec un scénario aligné sur l'accord de Paris. Le taux est progressif : 15 % au 1er janvier 2028, 25 % au 1er janvier 2029, 35 % au 1er janvier 2030. Cela laisse, par construction, une majorité d'actifs sans cette exigence de résultat.",
    },
    {
      q: "La réforme rend-elle une SCPI ISR plus rentable ou moins risquée ?",
      a: "Non. Le label encadre une démarche extra-financière, pas le rendement, la liquidité ou le risque en capital. Une SCPI ISR reste un placement immobilier non garanti, dont la valeur de part et les revenus dépendent du marché, des locataires et de la gestion.",
    },
    {
      q: "Faut-il attendre la réforme avant d'investir dans une SCPI ISR ?",
      a: "Pas nécessairement. Attendre ne garantit rien de plus sur la qualité d'un fonds précis, et le calendrier d'application s'étale sur plusieurs années. Ce qui compte est de vérifier dès maintenant ce que le fonds publie : rapport ESG annuel, part d'actifs en progrès, objectifs d'amélioration et documents SFDR.",
    },
    {
      q: "Où vérifier si une SCPI est vraiment labellisée ISR ?",
      a: "Sur la liste officielle des fonds labellisés publiée par le site du label ISR. Une mention dans une plaquette commerciale ne suffit pas : vérifiez que le fonds y figure, avec sa date de labellisation.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> le 30 septembre 2026, le comité du label ISR a transmis au
          ministre de l'Économie sa proposition finale de réforme du référentiel applicable aux
          fonds immobiliers (SCPI, OPCI et autres fonds immobiliers). Elle durcit le volet climat
          (une part minimale d'actifs avec une stratégie de décarbonation crédible, progressive
          jusqu'à 35 % en 2030), reprend des exclusions du label « valeurs mobilières » et précise
          les règles d'amélioration des immeubles. Rien n'est encore applicable : il faut un arrêté
          ministériel, puis une transition d'un an pour les fonds déjà labellisés. Pour un
          épargnant, la réforme ne change ni le rendement ni le risque d'une SCPI ; elle rend
          surtout certains engagements plus vérifiables.
        </p>
      </div>

      <p>
        Vous détenez des parts de SCPI labellisée ISR, ou vous envisagez d'en acheter, et vous lisez
        que le label « se réforme ». Deux inquiétudes reviennent alors : votre SCPI va-t-elle perdre
        son label, et le label que vous avez pris pour un gage de sérieux valait-il quelque chose
        jusqu'ici ? Les articles de presse parlent de « durcissement », sans dire ce que cela change
        pour un associé de SCPI.
      </p>
      <p>
        Prenons un cas courant : vous avez souscrit il y a trois ans une SCPI de bureaux labellisée
        ISR, et le dernier bulletin trimestriel mentionne que la société de gestion « se prépare au
        nouveau référentiel ». Faut-il s'en réjouir, s'en inquiéter, arbitrer ?
      </p>
      <p>
        Le label ISR est un label public, soutenu par le ministère de l'Économie, attribué pour
        trois ans par des organismes certificateurs indépendants sur la base d'un cahier des charges
        appelé référentiel. Son volet immobilier existe depuis fin 2020 et n'avait jamais été
        révisé. Cet article vous explique, à partir des documents officiels du label, ce que la
        réforme prévoit, à quel moment elle s'appliquera, ce qu'elle ne change pas, et comment
        vérifier une SCPI labellisée sans attendre.
      </p>

      <h2>Pourquoi le label ISR immobilier est-il réformé en 2026 ?</h2>
      <p>
        Selon le{" "}
        <a
          href="https://www.lelabelisr.fr/le-comite-du-label-isr-soumet-au-ministre-sa-proposition-de-revision-du-referentiel-immobilier/"
          target="_blank"
          rel="noreferrer"
        >
          communiqué du comité du label du 30 septembre 2026
        </a>
        , le label ISR immobilier couvre aujourd'hui 55 % du marché des fonds immobiliers ouverts au
        grand public, avec environ 170 fonds labellisés. Autrement dit, si vous achetez une SCPI
        aujourd'hui, il y a de bonnes chances qu'elle affiche ce label. C'est précisément ce succès
        qui pose question : un label porté par plus de la moitié du marché distingue-t-il encore
        quelque chose ?
      </p>
      <p>
        Le comité met en avant trois raisons. D'abord, la fin des premiers cycles de labellisation
        de trois ans a permis de constater des applications hétérogènes des règles d'une société de
        gestion à l'autre. Ensuite, le référentiel « valeurs mobilières » (actions, obligations) a
        été profondément révisé fin 2023, avec des exclusions et des exigences climat que le volet
        immobilier n'avait pas : nous en avons détaillé le contenu dans{" "}
        <LienArticle slug="label-isr-que-garantit-il-vraiment">
          notre article sur ce que garantit le Label ISR
        </LienArticle>
        . Enfin, l'immobilier pose un problème spécifique : selon le{" "}
        <a
          href="https://www.lelabelisr.fr/revision-du-referentiel-immobilier-du-label-isr-la-consultation-publique-est-ouverte/"
          target="_blank"
          rel="noreferrer"
        >
          communiqué d'ouverture de la consultation
        </a>
        , avec un taux de renouvellement d'environ 1 % par an, près de 75 % du parc immobilier
        français de 2050 est déjà construit. Les objectifs climatiques passent donc par la
        rénovation des immeubles existants, pas seulement par l'achat d'immeubles neufs.
      </p>

      <h3>Les étapes de la réforme, de 2024 à aujourd'hui</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Étape</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fin 2020</td>
            <td>Création du référentiel immobilier du label ISR (version d'octobre 2020)</td>
            <td>En vigueur à la date de rédaction</td>
          </tr>
          <tr>
            <td>Fin 2024</td>
            <td>Appel à contribution et création d'un sous-comité immobilier</td>
            <td>Terminé</td>
          </tr>
          <tr>
            <td>23 juin – 31 juillet 2026</td>
            <td>Consultation publique sur une première version révisée</td>
            <td>Terminé</td>
          </tr>
          <tr>
            <td>30 septembre 2026</td>
            <td>Proposition finale transmise au ministre de l'Économie</td>
            <td>Terminé</td>
          </tr>
          <tr>
            <td>Date non fixée</td>
            <td>Adoption du référentiel définitif par arrêté ministériel</td>
            <td>À venir</td>
          </tr>
          <tr>
            <td>Un an après la publication</td>
            <td>Fin de la transition pour les fonds déjà labellisés</td>
            <td>À venir</td>
          </tr>
        </tbody>
      </table>

      <h2>Qu'est-ce qui change concrètement dans le nouveau référentiel immobilier ?</h2>
      <p>
        Les éléments ci-dessous proviennent de la{" "}
        <a
          href="https://www.lelabelisr.fr/wp-content/uploads/Referentiel-label-ISR-immobilier-V2-proposition-finale.pdf"
          target="_blank"
          rel="noreferrer"
        >
          proposition finale de référentiel publiée par le comité
        </a>
        . Le ministre peut encore la modifier avant de l'adopter : lisez-les comme ce qui est
        proposé, pas comme des règles acquises.
      </p>

      <h3>Un volet climat avec une exigence de résultat</h3>
      <p>
        C'est le changement le plus structurant. Le fonds doit analyser la stratégie de
        décarbonation de ses actifs, en tenant compte des émissions directes, de celles liées à
        l'énergie achetée et des émissions indirectes (les « scopes » 1, 2 et 3), au regard d'un
        scénario sectoriel aligné sur l'accord de Paris. Pour une part minimale d'actifs, il ne
        suffit plus d'analyser : il faut démontrer une trajectoire de décarbonation sur au moins dix
        ans, les moyens prévus pour la tenir (travaux, budget) et la gouvernance qui la suit.
      </p>
      <p>
        Cette part minimale est progressive :{" "}
        <strong>
          15 % des actifs analysés au 1er janvier 2028, 25 % au 1er janvier 2029, 35 % au 1er
          janvier 2030
        </strong>
        . La proposition soumise à consultation en juin prévoyait 35 % d'emblée ; le calendrier a
        été étalé après la consultation. Le fonds devra aussi publier la proportion d'actifs qui
        disposent d'une telle stratégie, ce qui donne à l'épargnant un chiffre à suivre d'année en
        année.
      </p>

      <h3>Les immeubles « performants » doivent prouver leur avance</h3>
      <p>
        Le référentiel immobilier distingue deux familles d'actifs, selon leur note ESG par rapport
        à une « valeur seuil » fixée par la société de gestion : les actifs performants (au-dessus)
        et les actifs en progrès (en dessous). Dans la proposition, chaque actif classé performant
        doit présenter une surperformance sur deux indicateurs : les émissions de gaz à effet de
        serre, et un second indicateur choisi parmi ceux que le fonds suit. Après la consultation,
        le comité a introduit une souplesse : sur justification, la surperformance carbone peut être
        démontrée autrement que par un indicateur quantitatif unique. L'indicateur de consommation
        d'énergie permet aussi de déduire l'énergie autoproduite et autoconsommée, en cohérence avec
        le décret tertiaire.
      </p>

      <h3>Les immeubles « en progrès » doivent réellement progresser</h3>
      <p>
        C'est la logique dite <em>best-in-progress</em>, spécificité assumée du volet immobilier,
        que nous expliquons dans{" "}
        <LienArticle slug="scpi-isr-vs-scpi-classique">
          notre comparaison entre SCPI ISR et SCPI classique
        </LienArticle>
        . Le texte proposé précise les règles : au début de chaque cycle, plan d'amélioration et
        note cible pour chaque actif en progrès, et objectif d'amélioration de la note moyenne de
        cette poche à trois ans, supérieure à 20 points sur une échelle de 100 ou permettant
        d'atteindre la valeur seuil. Ne pas atteindre cet objectif entraîne, sauf justification
        valable, la perte du label et un délai de six mois avant une nouvelle candidature. Le comité
        indique vouloir que les objectifs fixés à la labellisation « se traduisent par des résultats
        mesurables ». Pour ne pas pénaliser un fonds qui rénove puis revend, l'amélioration moyenne
        peut être calculée au prorata du temps passé par chaque actif dans le portefeuille pendant
        le cycle.
      </p>

      <h3>Des exclusions alignées sur le label « valeurs mobilières »</h3>
      <p>
        Le référentiel proposé exclut notamment les actifs utilisés spécifiquement pour
        l'extraction, la production ou le raffinage de charbon thermique ou d'hydrocarbures non
        conventionnels, les centrales électriques fonctionnant avec ces combustibles, les actifs
        dédiés à la production d'armes controversées ou de tabac, et les actifs situés dans un pays
        figurant sur la liste de l'Union européenne des juridictions non coopératives à des fins
        fiscales ou sur les listes noire et grise du GAFI. Un actif concerné doit faire l'objet d'un
        plan de cession. Pour la plupart des SCPI de bureaux, de commerces, de santé ou de logement,
        ces exclusions auront peu d'effet concret : elles servent surtout à aligner les promesses du
        label entre classes d'actifs.
      </p>

      <h3>Engagement des parties prenantes et transparence</h3>
      <p>
        Le fonds doit formaliser une politique d'engagement envers les locataires et les
        prestataires (gestionnaires d'immeubles, entreprises de travaux) et démontrer, dans un délai
        d'un à trois ans, un engagement formalisé avec 100 % de ses prestataires clés. Côté
        transparence, le rapport ESG annuel doit présenter l'évaluation des cinq actifs les plus
        performants, des cinq moins performants et des cinq plus importants en valeur, avec les
        plans d'amélioration en cours. Le fonds publie aussi, au moins une fois par an, la part de
        ses actifs « en progrès » et celle de ses actifs « performants ».
      </p>

      <h2>Ce que la réforme change pour vous, en un tableau</h2>
      <table>
        <thead>
          <tr>
            <th>Exigence proposée</th>
            <th>Ce que vous pourrez vérifier</th>
            <th>Ce que ça ne dit pas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Part d'actifs avec stratégie de décarbonation crédible (15 % en 2028 → 35 % en 2030)
            </td>
            <td>Le pourcentage publié par le fonds et son évolution</td>
            <td>Que tout le parc soit sur une trajectoire compatible avec l'accord de Paris</td>
          </tr>
          <tr>
            <td>Surperformance carbone des actifs performants</td>
            <td>Les indicateurs retenus dans la documentation du fonds</td>
            <td>
              Que l'immeuble soit « bas carbone » dans l'absolu : la comparaison se fait avec une
              référence
            </td>
          </tr>
          <tr>
            <td>Amélioration chiffrée de la poche en progrès à 3 ans</td>
            <td>Les notes initiales, les notes cibles et les résultats à chaque renouvellement</td>
            <td>
              Comment la note ESG est construite : la grille reste propre à chaque société de
              gestion
            </td>
          </tr>
          <tr>
            <td>
              Exclusions (fossiles, armes controversées, tabac, juridictions non coopératives)
            </td>
            <td>L'absence de ces actifs dans l'inventaire</td>
            <td>Les choix sur d'autres secteurs de locataires, non visés par le référentiel</td>
          </tr>
          <tr>
            <td>Rapport ESG annuel (5 actifs les plus et les moins performants, 5 plus gros)</td>
            <td>Des exemples concrets d'immeubles et de travaux</td>
            <td>La performance financière, les frais ou la liquidité de la SCPI</td>
          </tr>
        </tbody>
      </table>

      <h2>Quand la réforme s'appliquera-t-elle à ma SCPI ?</h2>
      <p>
        La réponse tient en deux étapes, et la première n'a pas encore eu lieu. Le comité indique
        qu'il appartient désormais au ministre d'adopter par arrêté la version définitive du
        référentiel. Une fois celle-ci publiée, les{" "}
        <a
          href="https://www.lelabelisr.fr/wp-content/uploads/Referentiel-label-ISR-immobilier-V2-proposition-finale.pdf"
          target="_blank"
          rel="noreferrer"
        >
          modalités de transition proposées
        </a>{" "}
        prévoient :
      </p>
      <ul>
        <li>
          <strong>pour un nouveau fonds candidat</strong> : une entrée en application trois à quatre
          mois après la publication, les audits de première labellisation étant suspendus entre les
          deux dates ;
        </li>
        <li>
          <strong>pour un fonds déjà labellisé</strong> : une transition d'un an après la
          publication, pendant laquelle les audits de suivi et de renouvellement se font encore sur
          l'ancien référentiel. Ensuite, tous les audits se font sur le nouveau.
        </li>
      </ul>
      <p>
        Certaines exigences, comme la part minimale d'actifs avec une stratégie de décarbonation
        crédible ou la surperformance de chaque actif performant, ne s'imposent à un fonds déjà
        labellisé qu'à partir de son premier audit de renouvellement suivant la fin de la
        transition. Comme les cycles durent trois ans, la date effective varie d'un fonds à l'autre.
      </p>
      <div className="callout">
        <p>
          <strong>Illustration, pas une prévision :</strong> supposons que l'arrêté soit publié au
          printemps 2027 (date purement hypothétique, aucun calendrier n'a été annoncé). La
          transition s'achèverait au printemps 2028. Une SCPI dont le renouvellement tombe à
          l'automne 2028 serait alors auditée sur le nouveau référentiel dès cette date ; une SCPI
          renouvelée juste avant la fin de la transition pourrait conserver l'ancien référentiel
          jusqu'à son renouvellement suivant, trois ans plus tard. Pour connaître la situation de
          votre fonds, demandez sa date de labellisation et d'échéance à la société de gestion.
        </p>
      </div>

      <h2>Ce que la réforme ne change pas pour un associé de SCPI</h2>
      <p>
        La réforme renforce une démarche ; elle ne transforme pas la nature du placement. Quatre
        points restent identiques.
      </p>
      <ul>
        <li>
          <strong>Le risque en capital.</strong> Une SCPI, labellisée ou non, n'est pas garantie :
          la valeur de part peut baisser et les revenus distribués varient avec les loyers et la
          vacance.
        </li>
        <li>
          <strong>La liquidité.</strong> La revente des parts dépend de l'existence d'acheteurs ; le
          label n'y change rien.
        </li>
        <li>
          <strong>Les frais.</strong> Frais de souscription, de gestion et de travaux sont fixés par
          les statuts et la note d'information du fonds, pas par le label.
        </li>
        <li>
          <strong>La méthode de notation.</strong> Chaque société de gestion conserve sa propre
          grille ESG et sa propre valeur seuil, dans les bornes de pondération fixées par le
          référentiel. Deux SCPI labellisées peuvent donc noter très différemment un même type
          d'immeuble.
        </li>
      </ul>
      <p>
        Lisez aussi le seuil de 35 % pour ce qu'il est : un minimum, qui laisse jusqu'à 65 % des
        actifs analysés sans cette exigence de résultat climatique. Ce n'est pas une critique de
        principe. Le comité indique d'ailleurs que ce seuil sera révisé chaque année, selon la
        disponibilité des données et l'évolution des pratiques. Mais c'est une raison de regarder le
        chiffre publié par votre fonds plutôt que de vous contenter du logo.
      </p>
      <p>
        Sur la question plus large de ce que valent les classifications européennes des fonds, qui
        évoluent elles aussi, voyez{" "}
        <LienArticle slug="sfdr-refonte-et-regles-esma-noms-de-fonds-ce-qui-change">
          notre point sur la refonte du SFDR et les noms de fonds
        </LienArticle>
        : le label ISR et le classement SFDR sont deux systèmes distincts, à lire ensemble.
      </p>

      <h2>Faut-il attendre la réforme avant d'investir dans une SCPI ISR ?</h2>
      <p>
        Deux raisonnements se défendent. Le premier : attendre que le nouveau référentiel s'applique
        pour bénéficier d'un label plus exigeant et de données plus comparables. Le second : la
        réforme ne s'appliquera pleinement aux fonds existants qu'au fil de leurs renouvellements,
        sur plusieurs années, et un fonds sérieux aujourd'hui le restera ; ce qui compte est donc
        d'examiner le fonds lui-même, et non la version du référentiel.
      </p>
      <p>
        Notre lecture : le calendrier de la réforme ne devrait pas dicter celui de votre
        investissement. Votre horizon de placement, la part d'immobilier dans votre patrimoine et la
        qualité du fonds pèsent bien plus lourd. En revanche, la réforme vous donne une grille de
        questions précise à poser dès maintenant, même si le fonds n'est pas encore tenu d'y
        répondre.
      </p>

      <h2>Comment vérifier une SCPI labellisée ISR dès aujourd'hui ?</h2>
      <p>
        Voici une méthode en quatre étapes, que nous appelons la « méthode du dossier ouvert » : on
        vérifie ce qui est publié avant de croire ce qui est affiché.
      </p>
      <ol>
        <li>
          <strong>Confirmer le label.</strong> Vérifiez que la SCPI figure dans la liste officielle
          publiée sur le{" "}
          <a href="https://www.lelabelisr.fr/" target="_blank" rel="noreferrer">
            site du label ISR
          </a>
          , avec sa date de labellisation : vous en déduirez la date de son prochain renouvellement.
        </li>
        <li>
          <strong>Lire le rapport ESG annuel.</strong> Repérez la part d'actifs en progrès et
          d'actifs performants, et les exemples d'immeubles avec leurs plans de travaux. Un rapport
          qui ne contient que des généralités est un signal faible.
        </li>
        <li>
          <strong>Poser les questions de la réforme.</strong> Quelle part de vos actifs dispose
          d'une trajectoire de décarbonation chiffrée ? Quelle est votre valeur seuil et comment
          a-t-elle été fixée ? La poche en progrès a-t-elle atteint son objectif lors du dernier
          renouvellement ?
        </li>
        <li>
          <strong>Croiser avec les documents SFDR.</strong> L'annexe précontractuelle et le rapport
          périodique disent quel engagement de durabilité le fonds prend juridiquement. Notre outil{" "}
          <a href="/outils/decodeur-label">décodeur de labels</a> vous aide à lire ces mentions.
        </li>
      </ol>
      <p>
        Pour replacer la SCPI parmi les autres façons d'investir dans l'immobilier de manière
        responsable, et comprendre les familles de SCPI qui existent, consultez{" "}
        <LienArticle slug="scpi-isr-environnementales-panorama">
          notre panorama des SCPI ISR et environnementales
        </LienArticle>
        .
      </p>

      <h2>Vos questions sur la réforme du label ISR immobilier</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Ce qu'il faut retenir avant de choisir une SCPI ISR</h2>
      <p>
        La réforme du label ISR immobilier est une bonne nouvelle pour la lisibilité : un volet
        climat avec une exigence de résultat, des objectifs d'amélioration contrôlés à chaque
        renouvellement et des publications plus concrètes. Elle n'est pas encore en vigueur, elle
        s'appliquera progressivement, et elle ne fera pas d'une SCPI un placement sans risque. Votre
        SCPI actuelle n'est pas devenue suspecte du jour au lendemain ; elle aura simplement des
        comptes plus précis à rendre.
      </p>
      <p>
        Le vrai risque est de continuer à choisir une SCPI sur la seule foi d'un logo, alors que
        plus de la moitié du marché l'affiche. Si vous détenez déjà des parts, prenez le temps de
        lire le dernier rapport ESG de votre fonds et de comparer ses chiffres d'une année sur
        l'autre. Si vous débutez, commencez par{" "}
        <LienArticle slug="investissement-immobilier-responsable-commencer">
          notre guide pour démarrer un investissement immobilier responsable
        </LienArticle>
        , qui situe la SCPI parmi les autres options.
      </p>
      <p>
        Si vous préférez faire ce tri avec quelqu'un, les conseillers d'EXP Capital peuvent passer
        en revue avec vous les documents de vos SCPI et vous proposer des pistes. Le premier échange
        est offert et sans engagement : découvrez{" "}
        <a href="/cgp-investissement-responsable">
          notre façon d'accompagner l'investissement responsable
        </a>
        .
      </p>
    </>
  );
}
