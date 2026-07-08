import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";

export const meta: ArticleMeta = {
  slug: "transmettre-patrimoine-engage-fonds-partage",
  title: "Transmettre un patrimoine engagé : succession, legs et fonds de partage",
  excerpt:
    "Réserve héréditaire, quotité disponible, legs à une association, clause bénéficiaire, fonds de partage : ce que le droit permet réellement de transmettre à une cause.",
  readingTime: "10 min",
  category: "Transmission",
  date: "2026-07-01",
  tags: [
    "succession",
    "legs",
    "fonds de partage",
    "assurance vie",
    "quotité disponible",
    "testament",
  ],
  author: "Alexandre Pollet",
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> transmettre un patrimoine « engagé » se joue sur trois
          leviers distincts. D&rsquo;abord la part réellement disponible : vos enfants sont des
          héritiers réservataires que la loi protège, et seule la{" "}
          <strong>quotité disponible</strong> — de la moitié au quart de votre patrimoine selon leur
          nombre — peut aller librement à une cause. Ensuite l&rsquo;outil qui achemine ces sommes
          après votre décès : un <strong>legs testamentaire</strong> (dont la fiscalité va de
          l&rsquo;exonération totale à 60 % selon le statut de l&rsquo;organisme) ou une{" "}
          <strong>clause bénéficiaire d&rsquo;assurance vie</strong>. Enfin un mécanisme qui agit de
          votre vivant et peut s&rsquo;articuler aux deux premiers : le{" "}
          <strong>fonds de partage</strong>, qui reverse une part de son rendement en dons sans
          jamais entamer votre capital. Trois outils, trois moments — la cohérence tient à leur
          articulation, pas au choix d&rsquo;un seul.
        </p>
      </div>

      <p>
        Vous avez construit une épargne qui vous ressemble : supports triés, labels vérifiés,
        exclusions assumées. Et une question plus large finit par se poser, souvent à
        l&rsquo;occasion d&rsquo;un événement familial : cette cohérence peut-elle se prolonger
        au-delà de vos enfants ? Pouvez-vous laisser une trace concrète — un legs à une fondation,
        une part de votre patrimoine fléchée vers une cause — sans pour autant priver vos héritiers
        de ce qui leur revient de droit ?
      </p>
      <p>
        Notre article sur{" "}
        <LienArticle slug="donation-transmission-coherence-valeurs">
          la donation en cohérence avec ses valeurs
        </LienArticle>{" "}
        a détaillé ce que vous pouvez organiser de votre vivant : abattements, pacte adjoint,
        premiers pas vers une association. Celui-ci prend le relais sur ce qui se joue au moment du
        décès et au-delà — ce que le droit vous permet réellement de léguer à une cause, dans
        quelles formes, avec quelle fiscalité, et comment un mécanisme vivant comme le fonds de
        partage s&rsquo;articule avec cette transmission.
      </p>
      <p>
        Au programme : la mécanique de la réserve héréditaire et de la quotité disponible, les
        formes de testament reconnues, ce qu&rsquo;un legs à une association coûte réellement selon
        son statut, la comparaison entre clause bénéficiaire et legs, et une méthode en cinq étapes
        pour structurer l&rsquo;ensemble sans mauvaise surprise pour vos proches.
      </p>

      <h2>Transmettre un patrimoine engagé : de quoi parle-t-on exactement ?</h2>
      <p>
        Trois mécaniques distinctes portent ce qu&rsquo;on regroupe sous l&rsquo;expression «
        transmission engagée », et elles ne se déclenchent ni au même moment ni de la même façon. La{" "}
        <strong>réserve héréditaire</strong> détermine ce qui revient obligatoirement à vos enfants
        — vous ne pouvez pas y toucher, quelle que soit votre cause. La{" "}
        <strong>quotité disponible</strong>, le reste, est la seule part que vous pouvez orienter
        librement, par testament, vers une association, une fondation ou toute autre personne de
        votre choix. Et le <strong>fonds de partage</strong> n&rsquo;est ni l&rsquo;un ni
        l&rsquo;autre : c&rsquo;est un mécanisme qui agit pendant que vous êtes en vie, en reversant
        une part du rendement de votre épargne en dons, sans toucher au capital ni à la question
        successorale.
      </p>
      <p>
        Comprendre ces trois plans évite l&rsquo;erreur la plus fréquente : croire qu&rsquo;on peut
        « tout » léguer à une cause parce qu&rsquo;on en a l&rsquo;intention, ou à l&rsquo;inverse
        renoncer à structurer quoi que ce soit faute de savoir par où commencer. La suite de cet
        article détaille chacun des trois plans, puis la façon de les combiner.
      </p>

      <h2>Combien pouvez-vous léguer à une cause sans léser vos héritiers ?</h2>
      <p>
        Le principe s&rsquo;appelle la réserve héréditaire : en France, vous ne pouvez pas
        déshériter vos enfants, quel que soit le nombre de causes qui vous tiennent à cœur. La part
        qui leur est réservée dépend de leur nombre, et la part restante — la quotité disponible —
        est celle que vous pouvez transmettre librement, par donation ou par testament, à qui vous
        voulez, y compris une association, comme le précise{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1270"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        .
      </p>
      <table>
        <thead>
          <tr>
            <th>Votre situation familiale</th>
            <th>Réserve des héritiers</th>
            <th>Quotité disponible (librement transmissible)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 enfant</td>
            <td>La moitié du patrimoine</td>
            <td>1/2</td>
          </tr>
          <tr>
            <td>2 enfants</td>
            <td>Les deux tiers du patrimoine</td>
            <td>1/3</td>
          </tr>
          <tr>
            <td>3 enfants ou plus</td>
            <td>Les trois quarts du patrimoine</td>
            <td>1/4</td>
          </tr>
          <tr>
            <td>Pas d&rsquo;enfant, un conjoint survivant non divorcé</td>
            <td>1/4 du patrimoine, réservé au conjoint</td>
            <td>3/4</td>
          </tr>
          <tr>
            <td>Ni enfant ni conjoint survivant</td>
            <td>Aucune réserve légale</td>
            <td>La totalité, sous réserve d&rsquo;un droit de retour limité des parents</td>
          </tr>
        </tbody>
      </table>
      <p>
        Le cas « sans conjoint ni descendant » mérite une précision : depuis la loi du 23 juin 2006,
        les parents ne sont plus des héritiers réservataires — ils conservent seulement un{" "}
        <strong>droit de retour légal</strong>, limité aux biens qu&rsquo;ils vous avaient eux-mêmes
        donnés et qui se retrouvent en nature dans votre succession, comme le prévoit le{" "}
        <a
          href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006136335/"
          target="_blank"
          rel="noreferrer"
        >
          code civil
        </a>{" "}
        (articles 738-2 et 914-1). Pour un exemple concret : avec un patrimoine de 600 000 € et deux
        enfants, la quotité disponible représente 200 000 € — c&rsquo;est le plafond, pas un
        objectif, de ce que vous pouvez léguer à une cause sans que vos enfants puissent contester
        le testament.
      </p>

      <h2>Quelles formes de testament pour organiser un legs à une association ?</h2>
      <p>
        Le droit français reconnaît trois formes, décrites par{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F770"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        . Le <strong>testament olographe</strong> est écrit en entier de votre main, daté avec
        précision (jour, mois, année) et signé — gratuit, rapide, mais fragile s&rsquo;il est mal
        rédigé ou égaré. Le <strong>testament authentique</strong> est dicté à un notaire, en
        présence de deux témoins ou d&rsquo;un second notaire, puis relu et signé devant eux : il
        offre la sécurité juridique la plus élevée. Le <strong>testament mystique</strong>, plus
        rare, est rédigé puis remis cacheté à un notaire — il préserve la confidentialité du
        contenu, au prix d&rsquo;une procédure plus lourde et peu utilisée en pratique.
      </p>
      <p>
        Dès qu&rsquo;un legs vise un tiers — une association plutôt qu&rsquo;un enfant — le
        testament authentique est la forme la plus prudente : un notaire vérifie la cohérence avec
        la réserve héréditaire au moment de la rédaction, ce qui réduit sensiblement le risque de
        contestation ultérieure par les héritiers. Quelle que soit la forme choisie,
        l&rsquo;enregistrement au fichier central des dispositions de dernières volontés (FCDDV)
        garantit que le testament sera retrouvé au moment du décès.
      </p>
      <div className="callout">
        <p>
          <strong>Révocable, pas irrévocable :</strong> contrairement à une donation, un testament
          peut être modifié ou annulé à tout moment de votre vivant, sans justification ni frais
          obligatoires. C&rsquo;est un avantage pour ajuster vos intentions au fil du temps — à
          condition de le relire réellement, ce qui n&rsquo;est pas la pratique la plus répandue.
        </p>
      </div>

      <h2>Quels legs à une association échappent aux droits de succession — et lesquels non ?</h2>
      <p>
        Un legs, comme un héritage, est en principe soumis aux droits de mutation à titre gratuit.
        Mais certaines catégories d&rsquo;organismes en sont exonérées, selon les précisions
        publiées sur{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2722"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        : les établissements reconnus d&rsquo;utilité publique dont l&rsquo;objet est
        philanthropique, éducatif, scientifique, social, humanitaire, sportif, familial, culturel ou
        tourné vers la défense de l&rsquo;environnement ; les établissements charitables publics,
        mutuelles et organismes d&rsquo;assistance ou de bienfaisance ; les associations cultuelles
        ; et les organismes participant à la construction de monuments aux morts.
      </p>
      <p>
        Toutes les associations reconnues d&rsquo;utilité publique (RUP) ne rentrent pas
        automatiquement dans ces catégories exonérées : celles qui n&rsquo;y figurent pas restent
        taxées, mais à un taux réduit de 35 à 45 % selon le montant. Une association simple, sans
        reconnaissance d&rsquo;utilité publique ni statut particulier, est quant à elle taxée au
        taux applicable aux tiers : 60 %. Trois issues très différentes pour le même mot «
        association » — d&rsquo;où l&rsquo;importance de vérifier le statut exact de
        l&rsquo;organisme visé, sur{" "}
        <a
          href="https://www.data.gouv.fr/datasets/associations-reconnues-d-utilite-publique"
          target="_blank"
          rel="noreferrer"
        >
          data.gouv.fr
        </a>{" "}
        ou directement auprès de lui, avant de rédiger le testament — et de le revérifier
        périodiquement, un statut pouvant évoluer.
      </p>

      <h2>Un fonds de partage continue-t-il d&rsquo;agir après votre décès ?</h2>
      <p>
        Le fonds de partage — ou produit de partage — est un mécanisme que nous avons détaillé dans
        notre analyse du{" "}
        <LienArticle slug="label-finansol-finance-solidaire">label Finansol</LienArticle> : votre
        épargne reste investie normalement, mais au moins 25 % de son rendement est reversé en dons
        à des organismes d&rsquo;intérêt général, pendant que le capital vous appartient toujours.
        C&rsquo;est un outil vivant, pas un outil de succession — et c&rsquo;est précisément là
        qu&rsquo;il faut être honnête sur ses limites.
      </p>
      <p>
        Si ce fonds est logé dans une assurance vie, rappelons ce que nous avons établi dans notre
        article sur la donation : à votre décès, le contrat est dénoué et les bénéficiaires
        reçoivent des liquidités, pas votre allocation. Le mécanisme de partage s&rsquo;arrête avec
        le contrat — il ne se transmet pas automatiquement à vos héritiers. Deux leviers permettent
        malgré tout de prolonger la démarche. Le premier : désigner une association comme
        bénéficiaire, seule ou aux côtés de vos proches, dans la clause bénéficiaire de ce même
        contrat — la solidarité continue alors sous une autre forme, au moment du décès. Le second :
        transmettre la pratique de votre vivant, par une donation assortie d&rsquo;un pacte adjoint
        imposant le remploi sur un support labellisé équivalent — la mécanique que nous décrivons
        dans l&rsquo;article évoqué plus haut.
      </p>
      <p>
        Aucun outil juridique ne peut en revanche obliger un héritier majeur à réinvestir un capital
        reçu dans un fonds de partage après votre décès. La continuité de la démarche solidaire, à
        ce stade, tient à la pédagogie que vous aurez transmise — pas à une clause.
      </p>

      <h2>
        Clause bénéficiaire d&rsquo;assurance vie ou legs testamentaire : lequel choisir pour une
        cause ?
      </h2>
      <p>
        Les deux outils agissent à votre décès, mais ni au même rythme, ni avec la même fiscalité,
        ni avec la même portée sur votre patrimoine.
      </p>
      <table>
        <thead>
          <tr>
            <th>Outil</th>
            <th>Quand il agit</th>
            <th>Fiscalité pour l&rsquo;association</th>
            <th>Limite principale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Clause bénéficiaire d&rsquo;assurance vie</strong>
            </td>
            <td>Immédiatement au décès, hors succession</td>
            <td>Dépend du statut de l&rsquo;organisme — à vérifier avec l&rsquo;assureur</td>
            <td>
              Ne porte que sur les sommes de ce contrat précis, pas sur l&rsquo;ensemble du
              patrimoine
            </td>
          </tr>
          <tr>
            <td>
              <strong>Legs testamentaire</strong>
            </td>
            <td>Après règlement de la succession</td>
            <td>Exonération totale, 35-45 % ou 60 % selon le statut de l&rsquo;organisme</td>
            <td>
              Limité à la quotité disponible ; contestable si la réserve héréditaire n&rsquo;est pas
              respectée
            </td>
          </tr>
          <tr>
            <td>
              <strong>Donation de votre vivant</strong> (pour mémoire)
            </td>
            <td>Immédiate</td>
            <td>Réduction d&rsquo;impôt sur le revenu, pas d&rsquo;exonération de droits</td>
            <td>Sort définitivement de votre patrimoine dès le versement</td>
          </tr>
        </tbody>
      </table>
      <p>
        Les deux outils se combinent sans difficulté : une clause bénéficiaire sur un contrat
        d&rsquo;assurance vie pour un geste immédiat et hors succession, un legs testamentaire pour
        le reste de votre quotité disponible. Pour situer l&rsquo;assurance vie plus largement dans
        votre stratégie de transmission, notre{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">
          guide de l&rsquo;assurance vie ISR
        </LienArticle>{" "}
        détaille le choix du contrat et des supports en amont de cette question.
      </p>

      <h2>Comment structurer une transmission engagée en 5 étapes ?</h2>
      <p>
        Une méthode simple pour avancer dans l&rsquo;ordre —{" "}
        <strong>Chiffrer, Vérifier, Choisir, Rédiger, Relire</strong> :
      </p>
      <ol>
        <li>
          <strong>Chiffrer</strong> votre quotité disponible selon votre situation familiale : le
          tableau plus haut donne le calcul de base ; un professionnel affine si votre patrimoine
          comprend de l&rsquo;immobilier ou des titres peu liquides.
        </li>
        <li>
          <strong>Vérifier</strong> le statut fiscal exact de l&rsquo;organisme visé — reconnu
          d&rsquo;utilité publique ou non, catégorie exonérée ou non — sur data.gouv.fr et
          directement auprès de lui, à la date de rédaction et à revérifier ensuite.
        </li>
        <li>
          <strong>Choisir</strong> le ou les bons outils selon le calendrier voulu : donation
          encadrée de votre vivant, fonds de partage pour un effet continu pendant que vous êtes en
          vie, clause bénéficiaire et legs pour l&rsquo;après.
        </li>
        <li>
          <strong>Rédiger</strong> dans les formes : testament authentique recommandé dès
          qu&rsquo;une association est concernée, enregistrement systématique au FCDDV.
        </li>
        <li>
          <strong>Relire</strong> à chaque événement marquant — naissance, décès, changement de
          statut ou disparition de l&rsquo;association, revalorisation du patrimoine. Un testament
          rédigé une fois pour toutes vieillit mal.
        </li>
      </ol>

      <h2>Vos questions sur la transmission d&rsquo;un patrimoine engagé</h2>

      <h3>Puis-je déshériter mes enfants au profit d&rsquo;une association ?</h3>
      <p>
        Non. La réserve héréditaire protège vos enfants quelle que soit votre intention : seule la
        quotité disponible — de la moitié à un quart de votre patrimoine selon leur nombre — peut
        être léguée librement à une cause. Un testament qui dépasse cette limite est réductible :
        les héritiers peuvent en demander la réduction en justice.
      </p>

      <h3>Une association peut-elle refuser un legs ?</h3>
      <p>
        Oui. Une association peut accepter, refuser, ou accepter « à concurrence de l&rsquo;actif
        net » un legs dont le passif ou les charges (un bien immobilier à rénover, par exemple)
        dépasseraient son intérêt. Il est recommandé de prendre contact avec l&rsquo;organisme
        envisagé avant de rédiger le testament, pour vérifier qu&rsquo;il est en mesure de recevoir
        ce type de legs.
      </p>

      <h3>Que se passe-t-il si l&rsquo;association désignée a disparu avant mon décès ?</h3>
      <p>
        Le legs devient caduc, sauf si votre testament prévoit un bénéficiaire de repli. C&rsquo;est
        l&rsquo;une des raisons pour lesquelles un testament se relit périodiquement — une
        association peut fusionner, changer de nom ou cesser son activité sans que vous en soyez
        informé.
      </p>

      <h3>
        Puis-je léguer tout mon patrimoine à une association si je n&rsquo;ai pas d&rsquo;enfants ?
      </h3>
      <p>
        Cela dépend de votre situation conjugale. Si vous êtes marié et sans descendant, votre
        conjoint survivant reste réservataire à hauteur d&rsquo;un quart du patrimoine : vous pouvez
        léguer librement les trois quarts restants. Si vous n&rsquo;avez ni enfant ni conjoint, la
        liberté testamentaire est totale, sous réserve du droit de retour limité des parents sur les
        biens qu&rsquo;ils vous avaient eux-mêmes donnés.
      </p>

      <h3>Le fonds de partage réduit-il mes droits de succession ?</h3>
      <p>
        Non. C&rsquo;est un mécanisme de partage de revenu qui agit de votre vivant — il ne modifie
        ni l&rsquo;assiette taxable de votre succession, ni les règles de réserve héréditaire ou de
        quotité disponible qui s&rsquo;appliquent à votre décès.
      </p>

      <h3>
        Une assurance vie avec une association comme bénéficiaire passe-t-elle par la succession ?
      </h3>
      <p>
        En principe non : les capitaux d&rsquo;assurance vie suivent un régime fiscal propre,
        distinct des droits de succession, comme nous le détaillons dans notre article sur{" "}
        <LienArticle slug="donation-transmission-coherence-valeurs">
          la donation et la transmission alignées sur vos valeurs
        </LienArticle>
        . Le traitement fiscal exact des sommes reçues par l&rsquo;association dépend cependant de
        son statut : à vérifier avec l&rsquo;assureur avant de rédiger la clause.
      </p>

      <h3>Faut-il un notaire pour léguer à une association ?</h3>
      <p>
        Pas obligatoirement : un testament olographe, entièrement manuscrit, daté et signé, est
        juridiquement valable. Le passage par un notaire — testament authentique — est cependant
        fortement conseillé dès qu&rsquo;un tiers est concerné, car il réduit le risque de
        contestation ultérieure ; et un notaire interviendra de toute façon pour régler la
        succession.
      </p>

      <h2>Un patrimoine qui continue d&rsquo;agir après vous</h2>
      <p>
        La réponse à la question de départ est donc oui, dans un cadre précis : vous pouvez
        transmettre un patrimoine engagé sans léser vos héritiers, en respectant leur réserve, en
        orientant votre quotité disponible par testament ou clause bénéficiaire, et en laissant le
        fonds de partage jouer son rôle propre pendant votre vivant. Les trois outils ne se
        remplacent pas — ils se complètent.
      </p>
      <p>
        Ne rien organiser a un coût précis : un testament jamais rédigé laisse la loi décider seule
        de votre succession, sans place pour une cause ; une clause bénéficiaire jamais relue peut
        désigner une association qui n&rsquo;existe plus ; et une quotité disponible non affectée
        retourne, par défaut, à vos héritiers — ce qui n&rsquo;a rien d&rsquo;anormal, mais
        n&rsquo;était peut-être pas votre intention.
      </p>
      <p>
        Pour prolonger, notre analyse du{" "}
        <LienArticle slug="label-finansol-finance-solidaire">label Finansol</LienArticle> détaille
        précisément la mécanique et les garanties d&rsquo;un fonds de partage si vous souhaitez
        l&rsquo;intégrer de votre vivant. Et pour voir concrètement comment ces sujets se traitent
        en pratique,{" "}
        <LienArticle slug="bilan-patrimonial-investissement-ethique-rendez-vous">
          notre article sur le déroulé d&rsquo;un rendez-vous de conseil
        </LienArticle>{" "}
        décrit ce à quoi ressemble un premier échange sur ces questions.
      </p>
      <p>
        Et si vous préférez poser votre situation sur la table — quotité disponible, statut des
        organismes envisagés, articulation avec votre contrat d&rsquo;assurance vie —, un conseiller
        du cabinet passe régulièrement en revue ces sujets lors d&rsquo;un premier échange offert :
        des pistes concrètes, à valider ensuite avec votre notaire pour la rédaction des actes.
      </p>
    </>
  );
}
