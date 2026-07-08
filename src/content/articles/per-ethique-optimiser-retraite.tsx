import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "per-ethique-optimiser-retraite",
  title: "Comment optimiser sa retraite avec un PER éthique ?",
  excerpt:
    "Déduction à l'entrée, supports réellement responsables, sortie préparée : les trois leviers d'un PER éthique — plafonds 2026 vérifiés et méthode de contrôle incluse.",
  readingTime: "12 min",
  category: "Enveloppes",
  date: "2026-06-11",
  tags: ["PER", "retraite", "déduction fiscale", "ISR", "gestion pilotée"],
  author: "Alexandre Pollet",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> le PER est l'enveloppe où votre exigence éthique pèse le
          plus lourd, parce que c'est celle où votre argent reste investi le plus longtemps —
          souvent vingt à trente ans. L'optimisation tient en trois leviers : déduire vos
          versements de votre revenu imposable (jusqu'à 10 % de vos revenus professionnels,
          avec une économie proportionnelle à votre tranche d'imposition), choisir vos supports
          sur pièces — labels et documents réglementaires, pas brochure commerciale — et
          préparer la sortie (capital, rente, fiscalité) dès maintenant. « PER éthique » n'est
          pas une catégorie officielle : tout se joue dans la liste des supports du contrat, et
          cet article vous montre comment la vérifier.
        </p>
      </div>

      <p>
        Vous savez que votre pension ne représentera qu'une fraction de votre dernier revenu,
        et on vous répète que le PER est « la » réponse — avec, en tête d'argumentaire,
        l'économie d'impôt. Mais quelque chose vous retient : bloquer de l'épargne pendant
        vingt ou trente ans, c'est aussi financer pendant vingt ou trente ans des entreprises
        que vous n'avez pas choisies. Et les plaquettes « PER responsable » que vous avez
        feuilletées ressemblent à toutes les autres, en plus vert.
      </p>
      <p>
        Reprenons la base. Le plan d'épargne retraite individuel, créé par la loi PACTE et
        commercialisé depuis le 1er octobre 2019, a remplacé le PERP et le contrat Madelin :
        vous y versez librement, l'épargne reste bloquée jusqu'à la retraite (hors cas de
        déblocage anticipé prévus par la loi), et vos versements volontaires sont déductibles
        de votre revenu imposable. La dimension « éthique », elle, n'a aucune existence
        juridique propre : elle dépend entièrement des supports d'investissement logés dans
        l'enveloppe.
      </p>
      <p>
        Dans cet article : combien la déduction rapporte réellement (chiffres 2026 vérifiés),
        pourquoi il s'agit d'un report d'impôt plus que d'un cadeau, une méthode en quatre
        temps pour vérifier que vos supports sont responsables ailleurs que sur la couverture,
        l'arbitrage gestion pilotée ou gestion libre, et ce qui vous attend à la sortie.
      </p>

      <h2>Un « PER éthique », ça existe officiellement — ou c'est un argument commercial ?</h2>
      <p>
        Aucun texte ne définit ce qu'est un « PER éthique », « responsable » ou « vert ». Le
        PER est une <strong>enveloppe</strong> : il fixe la mécanique fiscale, le blocage et
        les modalités de sortie. L'éthique se joue dans le <strong>contenu</strong> — le fonds
        en euros et, surtout, les unités de compte que le contrat référence.
      </p>
      <p>
        La réglementation a tout de même posé un socle : depuis 2020, tout contrat d'assurance
        vie en unités de compte doit proposer au moins un support labellisé ISR ; depuis le
        1er janvier 2022, cette obligation issue de la{" "}
        <a
          href="https://www.lelabelisr.fr/loi-pacte-lassurance-vie-en-soutien-de-linvestissement-socialement-responsable/"
          target="_blank"
          rel="noreferrer"
        >
          loi PACTE
        </a>{" "}
        s'étend aux labels Greenfin (transition écologique) et Finansol (finance solidaire) —
        et la grande majorité des PER individuels, souscrits sous forme assurantielle,
        appliquent la même règle. Conséquence paradoxale : presque n'importe quel PER récent
        peut s'afficher « responsable » en toute légalité, puisqu'il suffit de trois supports
        labellisés au milieu de centaines d'autres pour cocher la case.
      </p>
      <div className="callout">
        <p>
          <strong>Le réflexe anti-vernis :</strong> « PER ISR » sur la couverture ne vous dit
          ni combien de supports responsables le contrat référence réellement, ni s'ils sont
          accessibles en gestion pilotée, ni ce que contient le fonds en euros. Demandez la
          liste complète des supports du contrat — pas la gamme théorique de l'assureur — et
          jugez sur cette liste. Trois questions précises valent mieux qu'un logo.
        </p>
      </div>

      <h2>Combien un PER fait-il vraiment économiser d'impôt ?</h2>
      <p>
        Vos versements volontaires se déduisent de votre revenu imposable, dans la limite d'un
        plafond annuel : pour les versements réalisés en 2026, <strong>10 % de vos revenus
        professionnels de 2025</strong>, avec un maximum de 37 680 € et un plancher de 4 710 €
        si vos revenus sont modestes, selon{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          service-public.fr
        </a>
        . Les travailleurs indépendants disposent d'un plafond spécifique plus élevé. Votre
        plafond exact — celui qui compte — figure sur votre dernier avis d'imposition, à la
        rubrique « plafond épargne retraite » : les plafonds non consommés des années
        précédentes s'y reportent (un report que la loi de finances pour 2026 a porté de trois
        à cinq ans), et un couple soumis à imposition commune peut mutualiser les siens.
      </p>
      <p>
        L'économie d'impôt est simple à estimer : versement multiplié par votre tranche
        marginale d'imposition (11 %, 30 %, 41 % ou 45 %). C'est pour cela que le même
        versement ne « rapporte » pas la même chose à tout le monde :
      </p>
      <table>
        <thead>
          <tr>
            <th>Votre tranche marginale</th>
            <th>Versement de 5 000 €</th>
            <th>Économie d'impôt</th>
            <th>Effort d'épargne réel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11 %</td>
            <td>5 000 €</td>
            <td>550 €</td>
            <td>4 450 €</td>
          </tr>
          <tr>
            <td>30 %</td>
            <td>5 000 €</td>
            <td>1 500 €</td>
            <td>3 500 €</td>
          </tr>
          <tr>
            <td>41 %</td>
            <td>5 000 €</td>
            <td>2 050 €</td>
            <td>2 950 €</td>
          </tr>
          <tr>
            <td>45 %</td>
            <td>5 000 €</td>
            <td>2 250 €</td>
            <td>2 750 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        <em>
          Hypothèse illustrative : le calcul suppose que le versement reste dans votre plafond
          disponible et ne vous fait pas changer de tranche. Il ne constitue pas un conseil
          fiscal — votre économie réelle dépend de votre situation.
        </em>
      </p>
      <p>
        Deux nouveautés 2026 à connaître avant de verser. D'une part, les versements effectués
        à partir de 70 ans ne sont plus déductibles depuis le 1er janvier 2026 : l'avantage
        fiscal est désormais réservé à la phase de constitution de la retraite. D'autre part,
        si votre tranche marginale est faible ou nulle, la déduction rapporte peu — vous pouvez
        alors renoncer à déduire vos versements, en échange d'une fiscalité allégée à la sortie
        (nous y revenons dans la FAQ).
      </p>

      <h2>La déduction fiscale est-elle un cadeau — ou un simple report d'impôt ?</h2>
      <p>
        C'est la nuance que les argumentaires commerciaux passent sous silence : à la sortie en
        capital, la part correspondant à vos versements déduits est imposée au barème de
        l'impôt sur le revenu. La déduction n'efface donc pas l'impôt, elle le déplace dans le
        temps. Le gain réel se loge à trois endroits précis :
      </p>
      <ul>
        <li>
          <strong>Le différentiel de tranche.</strong> Si vous déduisez à 41 % pendant votre
          vie active et êtes imposé à 30 % (ou moins) à la retraite, l'écart entre les deux
          taux est définitivement gagné. C'est le scénario le plus fréquent — mais pas
          automatique.
        </li>
        <li>
          <strong>Le travail de l'impôt différé.</strong> L'économie d'impôt de l'année du
          versement peut être réinvestie : pendant vingt ou trente ans, c'est de l'argent qui
          capitalise pour vous au lieu d'être décaissé. Même à tranche identique à la sortie,
          ce levier subsiste.
        </li>
        <li>
          <strong>La discipline.</strong> Le blocage, souvent présenté comme un défaut, est
          aussi une protection contre vous-même : l'épargne retraite qui ne peut pas être
          pillée pour un projet de court terme arrive entière à destination.
        </li>
      </ul>
      <p>
        Les gains (plus-values et intérêts), eux, supportent à la sortie en capital un
        prélèvement forfaitaire de <strong>31,4 %</strong> — 12,8 % d'impôt sur le revenu et
        18,6 % de prélèvements sociaux, la CSG sur les revenus du capital ayant été relevée par
        la loi de financement de la sécurité sociale pour 2026 (le détail figure sur la{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34982"
          target="_blank"
          rel="noreferrer"
        >
          fiche officielle du PER individuel
        </a>
        ). Pour mesurer ce que ces mécanismes donnent sur votre cas — versement, durée, tranche
        à l'entrée et à la sortie —, notre{" "}
        <a href="/outils/simulateur">simulateur de projection</a> déroule le calcul année par
        année, frais et fiscalité compris. Ses résultats reposent sur des hypothèses
        illustratives : les performances passées ne préjugent pas des performances futures, et
        les unités de compte présentent un risque de perte en capital.
      </p>

      <h2>Comment vérifier que les supports de votre PER sont vraiment responsables ?</h2>
      <p>
        C'est ici que « PER éthique » cesse d'être un slogan pour devenir une méthode. La
        nôtre tient en quatre temps — <strong>Lister, Labels, Lire, Suivre</strong> — et ne
        demande aucune compétence d'analyste :
      </p>
      <ol>
        <li>
          <strong>Lister.</strong> Obtenez la liste des supports réellement référencés dans le
          contrat que l'on vous propose (elle figure en annexe des conditions générales), et
          identifiez ceux qui restent accessibles si vous optez pour la gestion pilotée. Un
          contrat peut référencer trois cents supports et n'en rendre qu'une poignée
          disponibles dans ses profils pilotés.
        </li>
        <li>
          <strong>Labels.</strong> Utilisez les labels comme premier filtre, pas comme
          conclusion : Label ISR, Greenfin et Finansol garantissent chacun une méthodologie
          précise — et pas la même. Nous avons détaillé{" "}
          <LienArticle slug="label-isr-que-garantit-il-vraiment">
            ce que le Label ISR garantit vraiment (et ce qu'il ne garantit pas)
          </LienArticle>
          , et notre <a href="/outils/decodeur-label">décodeur de labels</a> résume les
          promesses de chaque tampon.
        </li>
        <li>
          <strong>Lire.</strong> Pour vos supports finalistes, ouvrez trois documents :
          l'annexe SFDR (les engagements chiffrés du fonds y sont écrits), le DIC (frais et
          risques) et l'inventaire du portefeuille — les dix premières lignes suffisent
          souvent à confronter la promesse à la réalité.
        </li>
        <li>
          <strong>Suivre.</strong> Un fonds peut perdre son label, être reclassé SFDR ou
          changer de stratégie. Un point annuel sur vos supports fait partie de la vie normale
          d'un PER — d'autant que l'horizon se compte en décennies.
        </li>
      </ol>
      <p>
        Un angle mort à connaître : le <strong>fonds en euros</strong> de votre PER est investi
        dans l'actif général de l'assureur — vous n'en choisissez pas le contenu. Certains
        assureurs publient un rapport d'investissement responsable de cet actif général :
        demandez-le. À défaut, la part de votre épargne logée en fonds en euros échappe
        largement à votre exigence éthique, et il faut le savoir avant de fixer votre
        répartition.
      </p>

      <h2>Gestion pilotée ou gestion libre pour rester aligné avec vos valeurs ?</h2>
      <p>
        Sauf choix contraire de votre part, votre PER est géré selon le profil « équilibré
        horizon retraite » : l'épargne est progressivement sécurisée à mesure que la retraite
        approche. C'est un bon réglage par défaut… du point de vue du risque. Du point de vue
        de vos valeurs, la grille pilotée standard d'un assureur n'est pas nécessairement
        composée de supports responsables — et lorsqu'une « gestion pilotée ISR » existe, elle
        mérite la même vérification en quatre temps que le reste.
      </p>
      <p>
        S'ajoute une évolution récente : depuis le 24 octobre 2024, la{" "}
        <a
          href="https://www.economie.gouv.fr/actualites/que-contient-la-loi-industrie-verte"
          target="_blank"
          rel="noreferrer"
        >
          loi industrie verte
        </a>{" "}
        impose aux gestions pilotées des nouveaux PER une part minimale d'actifs non cotés,
        modulée selon le profil et l'horizon. Deux lectures honnêtes coexistent : le non coté
        peut financer directement des PME et des projets de transition — c'est l'objectif
        affiché du texte — mais son reporting extra-financier est moins standardisé que celui
        des fonds cotés, donc plus difficile à vérifier pour un épargnant exigeant.
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère de décision</th>
            <th>Gestion pilotée à horizon</th>
            <th>Gestion libre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Contrôle du contenu éthique</strong>
            </td>
            <td>Limité : vous acceptez la grille de l'assureur en bloc</td>
            <td>Total : vous choisissez et vérifiez chaque support</td>
          </tr>
          <tr>
            <td>
              <strong>Sécurisation à l'approche de la retraite</strong>
            </td>
            <td>Automatique</td>
            <td>À organiser vous-même (ou avec un conseiller)</td>
          </tr>
          <tr>
            <td>
              <strong>Temps de suivi</strong>
            </td>
            <td>Minimal</td>
            <td>Un point sérieux au moins une fois par an</td>
          </tr>
          <tr>
            <td>
              <strong>Compatible avec une exigence éthique stricte ?</strong>
            </td>
            <td>Seulement si la grille ISR a été vérifiée support par support</td>
            <td>Oui — c'est même son principal intérêt ici</td>
          </tr>
          <tr>
            <td>
              <strong>Part de non coté (nouveaux PER)</strong>
            </td>
            <td>Intégrée d'office selon le profil</td>
            <td>À votre main</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notre grille de lecture, assumée : la gestion libre est la voie naturelle d'une
        exigence éthique stricte, la gestion pilotée ISR vérifiée celle de la simplicité — et
        le choix dépend du temps que vous êtes réellement prêt à consacrer au suivi, pas d'une
        supériorité de principe de l'une sur l'autre.
      </p>

      <h2>Quand récupérez-vous votre argent — et à quelle fiscalité ?</h2>
      <p>
        L'épargne est bloquée jusqu'à la liquidation de votre retraite (ou l'âge légal), avec
        six cas de déblocage anticipé prévus par la loi : invalidité (la vôtre, celle de votre
        conjoint ou partenaire de Pacs, ou d'un enfant), décès du conjoint ou du partenaire de
        Pacs, expiration des droits au chômage, surendettement, cessation d'activité non
        salariée à la suite d'une liquidation judiciaire, et achat de la résidence principale
        (hors droits issus de versements obligatoires). Les cinq cas « accidents de la vie »
        bénéficient d'une fiscalité allégée ; le déblocage pour la résidence principale, lui,
        reste fiscalisé comme une sortie normale.
      </p>
      <p>
        Au moment de la retraite, trois portes : le capital — en une fois ou fractionné sur
        plusieurs années, ce qui permet de lisser l'impôt —, la rente viagère, imposée selon le
        régime des pensions, ou un panachage des deux. Ce choix de sortie est une optimisation
        à part entière, avec de vrais arbitrages selon votre espérance de revenus et votre
        situation familiale : nous lui avons consacré une analyse complète,{" "}
        <LienArticle slug="retraite-capital-ou-rente-per-ethique">
          capital ou rente à la sortie d'un PER : que choisir ?
        </LienArticle>{" "}
        — c'est la suite logique de cet article si votre retraite approche.
      </p>

      <h2>Vos questions sur le PER éthique</h2>

      <h3>Puis-je transférer un vieux PERP, un contrat Madelin ou un autre PER vers un PER plus responsable ?</h3>
      <p>
        Oui. Les produits antérieurs à octobre 2019 (PERP, Madelin notamment) sont
        transférables vers un PER individuel, et un PER se transfère vers un autre PER : les
        frais de transfert sont plafonnés à 1 % de l'épargne accumulée et deviennent nuls après
        cinq ans de détention. Le transfert est souvent le premier geste concret d'une remise
        en cohérence : on change de contrat pour changer d'univers de supports, sans repartir
        de zéro.
      </p>

      <h3>La gestion pilotée de mon PER est-elle automatiquement responsable ?</h3>
      <p>
        Non. Le profil appliqué par défaut (« équilibré horizon retraite ») est un réglage de
        risque, pas un filtre éthique : la grille peut contenir des supports responsables comme
        des supports conventionnels. Si l'assureur propose une gestion pilotée « ISR », vérifiez
        les supports sous-jacents un par un — le nom de la grille ne dispense pas de la
        méthode.
      </p>

      <h3>Un PER investi en supports responsables rapporte-t-il moins ?</h3>
      <p>
        Il n'existe pas de réponse établie : les études comparant fonds durables et
        conventionnels divergent selon les périodes, les univers et les méthodologies, et le
        champ est traversé d'études contradictoires. Ce qui est certain : les frais du contrat
        et des supports s'imputent chaque année, quelle que soit la performance — c'est le
        paramètre le plus prévisible de votre rendement de long terme. Et comme tout placement
        en unités de compte, un PER présente un risque de perte en capital.
      </p>

      <h3>Faut-il déduire ses versements si l'on est peu ou pas imposé ?</h3>
      <p>
        Pas forcément. Vous pouvez renoncer à la déduction (option à signaler à votre
        gestionnaire au moment du versement) : en contrepartie, la part de capital
        correspondant à ces versements est exonérée d'impôt à la sortie. Si votre tranche
        marginale est faible, comparez aussi avec l'assurance vie responsable, plus souple car
        non bloquée — notre comparatif{" "}
        <LienArticle slug="per-vs-assurance-vie-isr">
          PER ou assurance vie pour investir responsable ?
        </LienArticle>{" "}
        pose les critères de décision profil par profil.
      </p>

      <h3>Que devient mon PER si je décède avant la retraite ?</h3>
      <p>
        Pour un PER assurantiel — le cas le plus courant —, le capital est versé aux
        bénéficiaires que vous avez désignés dans la clause bénéficiaire, avec un traitement
        fiscal qui dépend notamment de votre âge au décès ; pour un PER bancaire, l'épargne
        intègre la succession. La rédaction de la clause mérite autant d'attention que le choix
        des supports : nous avons détaillé le sujet dans{" "}
        <LienArticle slug="per-protection-familiale">
          le PER protège-t-il votre famille au-delà de l'avantage fiscal ?
        </LienArticle>
        .
      </p>

      <h3>J'ai déjà un PER collectif au travail : puis-je ouvrir un PER individuel éthique en plus ?</h3>
      <p>
        Oui, les deux se cumulent sans difficulté. Gardez simplement en tête que vos versements
        volontaires déductibles partagent le même plafond global d'épargne retraite. L'intérêt
        du PER individuel dans ce tandem : vous choisissez l'univers de supports, là où le
        contrat collectif dépend du référencement négocié par votre employeur.
      </p>

      <h3>Combien verser chaque mois pour que cela change vraiment ma retraite ?</h3>
      <p>
        Cela dépend de l'écart entre votre revenu actuel et votre future pension, et du temps
        qu'il vous reste pour le combler — deux paramètres que personne ne peut deviner à votre
        place. La règle robuste : la régularité bat le montant, parce qu'elle capte les
        plafonds fiscaux chaque année et lisse les points d'entrée sur les marchés. Notre{" "}
        <a href="/outils/retraite">outil retraite</a> vous donne un ordre de grandeur en
        quelques minutes — des pistes, à affiner ensuite avec votre situation réelle.
      </p>

      <h2>Le temps long est votre meilleur allié — fiscalement et éthiquement</h2>
      <p>
        Optimiser sa retraite avec un PER éthique n'exige ni expertise ni pari : c'est
        l'addition de trois décisions méthodiques. Verser régulièrement dans la limite de votre
        plafond, pour transformer votre tranche d'imposition en moteur d'épargne. Choisir et
        vérifier vos supports sur pièces, pour que trente ans de capitalisation financent ce
        que vous avez réellement décidé. Préparer la sortie dès aujourd'hui, pour que la
        fiscalité de demain ne défasse pas l'optimisation d'hier.
      </p>
      <p>
        Attendre a un coût double. Fiscal d'abord : chaque année de tranche marginale élevée
        sans versement est une économie d'impôt qui ne se rattrapera pas éternellement, même
        avec le report des plafonds. Patrimonial et éthique ensuite : chaque année repoussée
        est une année de capitalisation en moins — et une année de plus où votre épargne
        finance, par défaut, ce que vous n'avez pas choisi.
      </p>
      <p>
        La prochaine étape la plus utile dépend de votre point de départ : si vous partez de
        zéro, notre <a href="/outils/per-isr">outil dédié au PER responsable</a> vous aide à
        poser vos premières pistes en quelques minutes ; si vous détenez déjà un PER, un PERP
        ou un Madelin, la question du transfert vers un contrat mieux aligné se pose avant
        toute autre.
      </p>
      <p>
        Et si vous préférez faire ces vérifications accompagné, c'est notre métier : lors d'un
        premier échange offert, un conseiller du cabinet passe en revue avec vous votre plafond
        d'épargne retraite disponible — il figure sur votre dernier avis d'imposition — et la
        liste réelle des supports de votre contrat actuel. Documents à l'appui, sans jargon et
        sans engagement.
      </p>
    </>
  );
}
