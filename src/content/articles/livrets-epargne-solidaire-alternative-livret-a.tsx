import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "livrets-epargne-solidaire-alternative-livret-a",
  title: "L'épargne solidaire est-elle une vraie alternative au Livret A ?",
  excerpt:
    "Complément plus qu'alternative : les livrets solidaires gardent la sécurité du capital, les fonds solidaires vont plus loin. Mécanismes, fiscalité, vérifications.",
  readingTime: "10 min",
  category: "Fondamentaux",
  date: "2026-05-05",
  tags: [
    "épargne solidaire",
    "livret de partage",
    "label Finansol",
    "Livret A",
    "fonds 90/10",
  ],
  author: "Alexandre Pollet",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> l'épargne solidaire est moins une alternative au
          Livret A qu'un complément qui lui ressemble beaucoup — les livrets solidaires et
          les livrets de partage conservent un capital garanti et une disponibilité
          immédiate, en ajoutant un fléchage solidaire vérifiable, au prix d'une fiscalité
          moins favorable. Les fonds solidaires, eux, vont plus loin dans l'impact mais
          introduisent un risque de perte en capital : ils ne remplacent pas une épargne de
          précaution. La bonne question n'est donc pas « lequel choisir ? » mais « quelle
          part de mon épargne relève du matelas de sécurité, et quelle part peut porter du
          sens ? ».
        </p>
      </div>

      <p>
        Votre Livret A est plein, ou presque. Il rapporte 1,5 % par an depuis février 2026,
        il est disponible à tout moment, et vous n'avez jamais eu à vous demander s'il
        pouvait perdre de la valeur. Mais une question commence à vous travailler : à quoi
        sert cet argent pendant qu'il dort ? Vous avez croisé les mots « livret solidaire »,
        « livret de partage », « fonds 90/10 », et la promesse est séduisante — épargner en
        finançant l'insertion, le logement très social, la transition écologique. Reste le
        doute, légitime : est-ce aussi sûr ? Est-ce que ça rapporte moins ? Et comment
        savoir si le mot « solidaire » sur la brochure correspond à quelque chose de réel ?
      </p>
      <p>
        Posons d'abord la définition. L'épargne solidaire regroupe les produits d'épargne
        dont une partie de l'argent — ou une partie des gains — bénéficie à des activités à
        forte utilité sociale ou environnementale : entreprises d'insertion, logement
        d'urgence, agriculture durable, associations d'intérêt général. Ce fléchage n'est
        pas déclaratif : il se vérifie, notamment grâce au label Finansol, porté par
        l'association FAIR, dont la liste des produits labellisés est publique. Fin 2024,
        la finance solidaire représentait 29,4 milliards d'euros d'encours en France selon
        le{" "}
        <a
          href="https://www.finance-fair.org/fr/actualites/23e-edition-du-barometre-de-la-finance-solidaire-2025-2-milliards-deuros-pour-la-finance"
          target="_blank"
          rel="noreferrer"
        >
          baromètre FAIR – La Croix
        </a>{" "}
        — un marché réel, pas une niche militante.
      </p>
      <p>
        Dans cet article, nous comparons point par point ce que le Livret A et l'épargne
        solidaire garantissent vraiment : sécurité du capital, rendement net de fiscalité,
        mécanique solidaire réelle. Avec un tableau pour trancher, une méthode de
        vérification, et une réponse honnête à la question du titre — qui n'est pas celle
        que les brochures préfèrent.
      </p>

      <h2>Qu'est-ce que l'épargne solidaire, exactement ?</h2>
      <p>
        Derrière l'étiquette « solidaire » coexistent trois mécaniques très différentes —
        et c'est la première chose à comprendre, parce qu'elles n'engagent pas votre argent
        de la même façon.
      </p>
      <ul>
        <li>
          <strong>Le partage : vous donnez une partie de vos gains.</strong> Sur un livret
          de partage, votre capital reste sur le livret, garanti par la banque ; une
          fraction des intérêts est reversée sous forme de don à des organismes d'intérêt
          général. Pour être labellisé Finansol, un produit de partage doit reverser au
          moins 25 % de la performance générée, au moins une fois par an (
          <a
            href="https://www.finance-fair.org/fr/epargne-de-partage"
            target="_blank"
            rel="noreferrer"
          >
            critères publiés par FAIR
          </a>
          ).
        </li>
        <li>
          <strong>Le fléchage : votre encours finance des projets identifiés.</strong> Sur
          un livret solidaire dit « d'investissement », c'est l'argent déposé qui sert :
          la banque s'engage à prêter tout ou partie de l'encours collecté à des acteurs
          de l'économie sociale et solidaire. Votre capital reste garanti par
          l'établissement ; c'est son usage qui change.
        </li>
        <li>
          <strong>L'investissement solidaire : votre argent entre au capital.</strong> Les
          fonds solidaires, souvent appelés « fonds 90/10 », investissent entre 5 et 10 %
          de leur actif dans des entreprises agréées « entreprise solidaire d'utilité
          sociale » (ESUS) — un agrément public délivré selon des critères définis par
          l'État (
          <a
            href="https://www.tresor.economie.gouv.fr/banque-assurance-finance/finance-sociale-et-solidaire/agrement-esus"
            target="_blank"
            rel="noreferrer"
          >
            Direction générale du Trésor
          </a>
          ) — le reste étant géré comme un fonds classique, souvent avec une approche ISR.
          Ici, le capital n'est plus garanti : c'est un placement, avec un risque de perte
          en capital.
        </li>
      </ul>
      <p>
        Un même mot, trois niveaux d'engagement : donner une part de ses intérêts, orienter
        l'usage de son dépôt, ou investir dans l'économie solidaire elle-même. La suite de
        l'article garde cette distinction, parce que la réponse à « est-ce une alternative
        au Livret A ? » diffère pour chacune.
      </p>

      <h2>Que finance déjà votre Livret A ?</h2>
      <p>
        Avant de comparer, un point d'honnêteté que les promoteurs de produits « éthiques »
        omettent parfois : le Livret A n'est pas un placement sans usage social. Près de
        60 % des encours du Livret A, du LDDS et du LEP sont centralisés au fonds d'épargne
        de la Caisse des dépôts, qui les prête sur très longue durée aux organismes de
        logement social et aux projets de politique de la ville (
        <a
          href="https://www.economie.gouv.fr/facileco/livret-a-fonds-destination"
          target="_blank"
          rel="noreferrer"
        >
          economie.gouv.fr
        </a>
        ). Le reste demeure au bilan des banques, avec des obligations d'emploi vers les
        PME, la transition énergétique et l'économie sociale et solidaire.
      </p>
      <p>
        Alors pourquoi chercher plus loin ? Pour deux raisons. D'abord la traçabilité : le
        fléchage du Livret A est macroéconomique et mutualisé — vous ne choisissez ni les
        causes, ni les bénéficiaires, et la part conservée par votre banque est celle dont
        l'emploi est le moins lisible pour un particulier. Ensuite l'intention : l'épargne
        solidaire vous laisse choisir un domaine (insertion, logement d'urgence, écologie)
        et vous rend compte de ce qui a été financé ou donné. Le Livret A fait du social
        par construction réglementaire ; l'épargne solidaire en fait par décision de
        l'épargnant — et c'est cette décision documentée que le label Finansol vérifie.
      </p>
      <div className="callout">
        <p>
          <strong>À noter :</strong> le LDDS — plafonné à 12 000 € — comporte déjà une
          brique solidaire : chaque année, votre banque doit vous proposer de reverser une
          partie de votre épargne sous forme de don à des acteurs de l'économie sociale et
          solidaire, à partir d'une liste d'au moins dix organismes (
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2368"
            target="_blank"
            rel="noreferrer"
          >
            service-public.gouv.fr
          </a>
          ). Si vous détenez un LDDS, vous avez donc déjà un outil de don fiscalement
          reconnu — encore faut-il que la proposition annuelle ne finisse pas dans le
          dossier des messages non lus.
        </p>
      </div>

      <h2>Livret de partage, livret solidaire, fonds solidaire : quelles différences avec le Livret A ?</h2>
      <p>
        Le tableau ci-dessous compare les quatre options sous l'angle qui compte pour votre
        décision : que risquez-vous, que gagnez-vous, qu'est-ce qui est solidaire, et que
        devez-vous vérifier avant de signer.
      </p>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Capital garanti ?</th>
            <th>Rendement</th>
            <th>Mécanique solidaire</th>
            <th>Fiscalité des gains</th>
            <th>À vérifier avant de signer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Livret A / LDDS</strong> (référence)
            </td>
            <td>Oui — garantie de l'État</td>
            <td>Taux réglementé : 1,5 % net depuis le 1er février 2026</td>
            <td>
              Indirecte et mutualisée (logement social via la Caisse des dépôts) ; option
              de don annuelle sur le LDDS
            </td>
            <td>Exonérés d'impôt sur le revenu et de prélèvements sociaux</td>
            <td>Rien — produits standardisés par l'État</td>
          </tr>
          <tr>
            <td>
              <strong>Livret de partage</strong>
            </td>
            <td>Oui — dépôt bancaire</td>
            <td>Taux fixé librement par la banque, dont vous donnez une part</td>
            <td>Don d'au moins 25 % des intérêts si labellisé Finansol</td>
            <td>
              Intérêts donnés : prélèvement libératoire réduit de 5 % + prélèvements
              sociaux ; le don ouvre droit à réduction d'impôt ; intérêts conservés :
              flat tax de 30 %
            </td>
            <td>Label Finansol, taux servi, part donnée, bénéficiaires des dons</td>
          </tr>
          <tr>
            <td>
              <strong>Livret solidaire</strong> (encours fléché)
            </td>
            <td>Oui — dépôt bancaire</td>
            <td>Taux fixé librement par la banque</td>
            <td>L'encours collecté finance des prêts à l'économie sociale et solidaire</td>
            <td>Flat tax de 30 % (ou barème sur option)</td>
            <td>Part réelle de l'encours fléchée, reporting publié, label</td>
          </tr>
          <tr>
            <td>
              <strong>Fonds solidaire « 90/10 »</strong> (épargne salariale, assurance
              vie, compte-titres)
            </td>
            <td>Non — risque de perte en capital</td>
            <td>Performance de marché, non garantie</td>
            <td>5 à 10 % de l'actif investis en entreprises agréées ESUS</td>
            <td>Selon l'enveloppe (épargne salariale, assurance vie…)</td>
            <td>Part solidaire réelle, agrément ESUS des cibles, DIC, frais</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ce tableau dit l'essentiel : les livrets solidaires et de partage jouent dans la
        même catégorie de sécurité que le Livret A — capital garanti, argent disponible —
        et peuvent donc, eux, prétendre au titre d'« alternative » pour l'épargne de
        précaution. Les fonds solidaires jouent dans une autre catégorie : ce sont des
        placements, à comparer avec une assurance vie ou un plan d'épargne salariale, pas
        avec un livret. Pour situer chaque enveloppe dans une stratégie d'ensemble, notre{" "}
        <a href="/outils/comparateur-enveloppes">comparateur d'enveloppes</a> vous donne
        des pistes en quelques minutes.
      </p>

      <h2>L'épargne solidaire rapporte-t-elle moins que le Livret A ?</h2>
      <p>
        Souvent oui, pour les livrets — et il faut le dire clairement plutôt que de
        l'enrober. Trois effets se cumulent. D'abord le taux facial : celui d'un livret
        bancaire solidaire est fixé librement par l'établissement, et il est fréquemment
        inférieur ou comparable au taux du Livret A. Ensuite la fiscalité : contrairement
        au Livret A, exonéré, les intérêts d'un livret bancaire supportent la flat tax de
        30 % (impôt et prélèvements sociaux). Enfin le partage lui-même : si vous donnez
        25 % ou plus de vos intérêts, votre rendement conservé diminue d'autant — c'est le
        principe, pas un défaut caché.
      </p>
      <p>
        La fiscalité du don atténue cependant l'écart. Les intérêts que vous donnez via un
        livret de partage bénéficient d'un prélèvement forfaitaire libératoire réduit à
        5 % au lieu du taux normal, prélèvements sociaux en sus (
        <a
          href="https://bofip.impots.gouv.fr/bofip/3743-PGP.html/identifiant=BOI-RPPM-RCM-30-10-20-30-20191220"
          target="_blank"
          rel="noreferrer"
        >
          BOFiP, prélèvement applicable aux produits d'épargne solidaire
        </a>
        ). Et le don ouvre droit à la réduction d'impôt de droit commun : 66 % du montant
        donné dans la limite de 20 % du revenu imposable, portée à 75 % dans une limite de
        1 000 € pour les organismes d'aide aux personnes en difficulté (
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F426"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        ). Autrement dit, un don de 60 € d'intérêts peut ne vous « coûter » qu'une
        vingtaine d'euros après réduction d'impôt — hypothèse illustrative, à adapter à
        votre situation fiscale réelle.
      </p>
      <p>
        Donnons un ordre de grandeur, purement illustratif et calculé au taux en vigueur à
        la rédaction de cet article. Un Livret A au plafond de 22 950 € rapporte environ
        344 € d'intérêts par an à 1,5 %. Sur un livret de partage servant un taux
        comparable, en donner 25 %, c'est environ 86 € de dons annuels — ramenés à une
        trentaine d'euros de coût réel après une réduction d'impôt de 66 %. La question
        n'est donc pas « vais-je m'appauvrir ? » mais « ces quelques dizaines d'euros
        annuels, préférez-vous les consommer ou les flécher ? ». Les taux réglementés
        étant révisés périodiquement, refaites le calcul avec le taux du moment ; les
        performances passées ne préjugent pas des performances futures, et cette
        illustration ne vaut pas projection.
      </p>
      <p>
        Pour les fonds solidaires, la comparaison de rendement avec le Livret A n'a pas de
        sens : leur performance dépend des marchés, à la hausse comme à la baisse, avec un
        risque de perte en capital. On les évalue comme des placements de moyen-long
        terme — frais, méthodologie, part solidaire réelle — pas comme des livrets.
      </p>

      <h2>Comment vérifier qu'un produit est vraiment solidaire ?</h2>
      <p>
        « Solidaire » n'est pas un mot protégé sur une brochure. Ce qui se vérifie, ce sont
        des faits : un label, un pourcentage, un agrément, un reporting. Notre réflexe de
        vérification tient en quatre étapes — <strong>Label → Mécanique → Trace →
        Suivi</strong>.
      </p>
      <ol>
        <li>
          <strong>Label.</strong> Cherchez le produit sur la liste officielle des produits
          labellisés Finansol, publiée par l'association FAIR (
          <a href="https://www.finance-fair.org/fr" target="_blank" rel="noreferrer">
            finance-fair.org
          </a>
          ) — plus de 190 produits y figurent. Un produit absent de la liste n'est pas
          forcément insincère, mais la charge de la preuve change de camp. Nous avons
          détaillé{" "}
          <LienArticle slug="label-finansol-finance-solidaire">
            ce que le label Finansol garantit exactement
          </LienArticle>{" "}
          — et ce qu'il ne garantit pas, notamment en matière de rendement.
        </li>
        <li>
          <strong>Mécanique.</strong> Identifiez laquelle des trois mécaniques s'applique :
          don d'intérêts (quelle part ? 25 % minimum si labellisé), fléchage de l'encours
          (quelle proportion des dépôts est réellement prêtée à l'ESS ?), ou
          investissement 90/10 (quelle part exacte en entreprises ESUS, vérifiable dans le
          document d'informations clés ?).
        </li>
        <li>
          <strong>Trace.</strong> Exigez les noms : quels organismes reçoivent les dons,
          quelles entreprises solidaires sont financées. L'agrément ESUS des bénéficiaires
          se vérifie sur la liste nationale publiée par la Direction générale du Trésor.
          Un produit solidaire sérieux publie ses bénéficiaires ; un produit vague les
          « sélectionne avec soin ».
        </li>
        <li>
          <strong>Suivi.</strong> Une fois souscrit, lisez le rapport annuel : montants
          donnés ou financés, bénéficiaires effectifs. Un fléchage solidaire se démontre
          chaque année — pas seulement le jour de la souscription.
        </li>
      </ol>
      <p>
        Ce réflexe vaut pour toute la famille des produits « à impact » : notre{" "}
        <a href="/outils/decodeur-label">décodeur de labels</a> résume gratuitement ce que
        Finansol, le Label ISR et Greenfin garantissent chacun — trois labels, trois
        promesses différentes.
      </p>

      <h2>Alors, faut-il remplacer votre Livret A par de l'épargne solidaire ?</h2>
      <p>
        Non — il faut le compléter, et la nuance change tout. Voici comment nous
        raisonnons, dans l'ordre.
      </p>
      <p>
        <strong>Votre matelas de sécurité reste sur des supports garantis.</strong>{" "}
        L'équivalent de quelques mois de dépenses doit rester disponible et sans risque.
        Le Livret A et le LDDS le font très bien — et un livret solidaire ou de partage le
        fait aussi, puisque les dépôts bancaires sont couverts jusqu'à 100 000 € par
        déposant et par établissement par la garantie des dépôts (
        <a
          href="https://www.economie.gouv.fr/particuliers/gerer-mon-argent/emprunter-et-sassurer/quest-ce-que-la-garantie-des-depots"
          target="_blank"
          rel="noreferrer"
        >
          economie.gouv.fr
        </a>
        ). Sur ce périmètre, l'épargne solidaire est une alternative crédible : même
        sécurité de fait, fiscalité moins favorable, sens ajouté.
      </p>
      <p>
        <strong>Au-delà du matelas, la question n'est plus « livret contre livret ».</strong>{" "}
        L'argent qui dort au-delà de votre épargne de précaution a un coût d'opportunité,
        sur un livret classique comme sur un livret solidaire. C'est là que les fonds
        solidaires, l'assurance vie en unités de compte solidaires ou l'épargne salariale
        — qui doit proposer au moins un fonds solidaire depuis la loi de modernisation de
        l'économie de 2008 — prennent le relais, avec un horizon plus long et un risque de
        perte en capital assumé. Si vous débutez avec de petits montants, notre article
        sur{" "}
        <LienArticle slug="investir-ethique-petit-budget">
          l'investissement éthique à petit budget
        </LienArticle>{" "}
        montre que ce relais se prend dès quelques dizaines d'euros par mois.
      </p>
      <p>
        <strong>Et le don reste un outil à part entière.</strong> Un livret de partage — ou
        l'option de don annuelle de votre LDDS — transforme un rendement modeste en
        soutien régulier et fiscalement optimisé à des causes que vous choisissez. C'est
        peu spectaculaire, c'est traçable, et c'est exactement le genre de mécanique
        simple qui survit aux modes.
      </p>

      <h2>Vos questions sur les livrets d'épargne solidaire</h2>

      <h3>Mon argent est-il en sécurité sur un livret solidaire ?</h3>
      <p>
        Oui, au même titre que sur tout livret bancaire : le capital est garanti par
        l'établissement et couvert par la garantie des dépôts jusqu'à 100 000 € par
        déposant et par banque. Le caractère solidaire porte sur l'usage de l'encours ou
        le don des intérêts, pas sur la nature du dépôt. C'est différent pour les fonds
        solidaires, qui présentent un risque de perte en capital.
      </p>

      <h3>Un livret solidaire rapporte-t-il forcément moins que le Livret A ?</h3>
      <p>
        Pas forcément, mais souvent, une fois la fiscalité comptée : le taux d'un livret
        bancaire est librement fixé et ses intérêts supportent la flat tax de 30 %, alors
        que le Livret A est net d'impôt. Comparez toujours les taux nets — et, pour un
        livret de partage, tenez compte de la réduction d'impôt sur les dons, qui
        compense une partie de l'écart.
      </p>

      <h3>Le don effectué via un livret de partage ouvre-t-il droit à une réduction d'impôt ?</h3>
      <p>
        Oui. Les dons issus d'un livret de partage suivent le régime de droit commun des
        dons aux organismes d'intérêt général : 66 % de réduction d'impôt dans la limite
        de 20 % du revenu imposable, ou 75 % dans une limite de 1 000 € pour les
        organismes d'aide aux personnes en difficulté. La banque ou l'organisme
        bénéficiaire vous délivre un reçu fiscal. Les intérêts donnés bénéficient en outre
        d'un prélèvement libératoire réduit de 5 %.
      </p>

      <h3>Puis-je perdre de l'argent avec un fonds solidaire « 90/10 » ?</h3>
      <p>
        Oui. Environ 90 % de l'actif d'un fonds 90/10 est investi sur les marchés
        financiers : sa valeur fluctue et le capital n'est pas garanti. La part solidaire
        de 5 à 10 % est elle-même investie dans des entreprises non cotées, peu liquides.
        C'est un placement de moyen-long terme, pas un substitut de livret.
      </p>

      <h3>Le Livret A est-il un placement « non éthique » ?</h3>
      <p>
        Non. Une part importante de ses encours finance le logement social et la politique
        de la ville via la Caisse des dépôts — un usage social réel, encadré par la loi.
        Sa limite est ailleurs : vous ne choisissez ni les causes ni les bénéficiaires, et
        la part conservée par votre banque est moins traçable. L'épargne solidaire ajoute
        du choix et de la redevabilité, elle ne répare pas un scandale.
      </p>

      <h3>Combien faut-il pour ouvrir un livret solidaire ou de partage ?</h3>
      <p>
        Généralement très peu : les livrets bancaires s'ouvrent le plus souvent avec
        quelques dizaines d'euros, sans engagement de versements. Le montant minimal exact
        et le plafond varient d'une banque à l'autre — c'est une ligne des conditions
        générales à vérifier avant l'ouverture, comme le taux servi.
      </p>

      <h3>Où trouver la liste des produits d'épargne solidaire fiables ?</h3>
      <p>
        Sur le site de l'association FAIR, qui publie la liste complète des produits
        labellisés Finansol — livrets, fonds, contrats — avec leur mécanique solidaire.
        C'est le point de départ le plus sûr : un référentiel public, tenu par un tiers
        indépendant des distributeurs, avec des critères écrits.
      </p>

      <h2>Garder la sécurité, ajouter du sens : par où commencer</h2>
      <p>
        La réponse honnête à la question du titre : pour votre épargne de précaution,
        l'épargne solidaire bancaire est une alternative réelle au Livret A — même
        garantie de dépôt, même disponibilité, un fléchage que vous choisissez, contre un
        rendement net souvent un peu inférieur. Pour le reste de votre épargne, elle n'est
        pas une alternative au Livret A mais une porte d'entrée vers l'investissement
        solidaire et responsable, avec ses horizons et ses risques propres.
      </p>
      <p>
        Ne rien faire a aussi un coût : chaque année, l'épargne qui dort au-delà de votre
        matelas de sécurité ne travaille ni pour vous, ni pour les causes que vous auriez
        choisies — et les quelques minutes de vérification d'un label que vous remettez à
        plus tard laissent votre argent suivre des circuits que vous n'avez pas décidés.
      </p>
      <p>
        Pour la suite logique, deux lectures : notre{" "}
        <LienArticle slug="investissement-ethique-guide-complet-2026">
          guide complet de l'investissement éthique
        </LienArticle>{" "}
        replace l'épargne solidaire dans une démarche patrimoniale d'ensemble — enveloppes,
        labels, supports — si vous voulez passer du livret au portefeuille cohérent. Et si
        votre prochaine étape est le choix d'une enveloppe d'investissement, notre
        comparatif{" "}
        <LienArticle slug="quelle-enveloppe-investissement-ethique">
          assurance vie, PER, PEA ou compte-titres pour investir éthique
        </LienArticle>{" "}
        vous évitera le faux départ classique : un bon support dans la mauvaise enveloppe.
      </p>
      <p>
        Et si vous préférez en parler de vive voix, c'est notre métier : lors d'un premier
        échange offert, un conseiller du cabinet passe en revue avec vous votre matelas de
        sécurité, la part de votre épargne qui peut porter du sens, et les vérifications à
        faire avant de souscrire — sans jargon et sans engagement.
      </p>
    </>
  );
}
