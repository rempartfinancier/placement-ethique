import type { ArticleMeta } from "../article-types";
import { LienArticle } from "./lien";
import { FaqArticle } from "./faq";

export const meta: ArticleMeta = {
  slug: "assurance-vie-isr-frais-reels-combien-ca-coute",
  title: "Assurance vie ISR : combien coûtent vraiment les frais ?",
  excerpt:
    "Versement, gestion, fonds : les frais d'une assurance vie ISR, moyennes publiques 2025 et effet cumulé chiffré sur 15 ans pour 50 000 € investis.",
  readingTime: "11 min",
  category: "Enveloppes",
  date: "2026-09-28",
  tags: ["assurance vie", "ISR", "frais", "unités de compte", "coût", "enveloppes"],
  author: "Sébastien Petrisot",
  faq: [
    {
      q: "Une assurance vie ISR est-elle plus chère qu'une assurance vie classique ?",
      a: "Pas par nature. Le Label ISR est attribué à des fonds, pas à des contrats, et il n'ajoute pas de ligne de frais au contrat. Les comparaisons publiques (ESMA, Observatoire des produits d'épargne financière, AMF) ne montrent pas de surcoût systématique des fonds ESG ou labellisés : le prix dépend surtout du contrat, du mode de gestion et du type de fonds (indiciel ou géré activement).",
    },
    {
      q: "Quels sont les frais maximum d'une assurance vie ?",
      a: "Selon service-public.gouv.fr, le montant annuel des frais à l'entrée et sur versement ne peut pas excéder 5 % des primes versées sur l'année. La fiche ne mentionne pas de plafond équivalent pour les frais de gestion : comparez-les donc aux moyennes publiées avant de souscrire.",
    },
    {
      q: "Les frais sont-ils prélevés même quand mon contrat perd de l'argent ?",
      a: "Oui. Les frais de gestion du contrat sont calculés sur l'encours et non sur le gain, et les frais courants des fonds sont prélevés sur leur performance : ils s'appliquent que les marchés montent ou baissent. C'est ce qui rend leur cumul si sensible sur longue durée.",
    },
    {
      q: "Où trouver les frais de mon contrat actuel ?",
      a: "Dans le projet de contrat, qui doit regrouper l'ensemble des frais dans une même rubrique, dans la note d'information, dans le document d'informations clés de chaque fonds et dans le relevé annuel, qui doit indiquer les frais prélevés sur chaque unité de compte et les éventuelles rétrocessions. L'assureur doit aussi afficher les frais de ses contrats sur son site, dans un tableau standard.",
    },
    {
      q: "Puis-je faire baisser les frais d'un contrat que je détiens déjà ?",
      a: "En partie, sur les supports : arbitrer vers des fonds aux frais courants plus bas réduit la couche la plus lourde en moyenne. Les frais du contrat lui-même sont fixés par ses conditions, et changer de contrat suppose de vérifier d'abord l'ancienneté fiscale que vous perdriez. Pour un futur versement, ABE Infoservice indique que certains frais, comme les frais d'entrée, se négocient.",
    },
    {
      q: "Puis-je renoncer si je découvre des frais trop élevés après la signature ?",
      a: "Oui : vous disposez de 30 jours calendaires à partir du moment où vous êtes informé de la conclusion du contrat, par lettre recommandée avec accusé de réception ou envoi recommandé électronique. L'assureur doit ensuite vous restituer l'intégralité des sommes versées dans un délai maximum de 30 jours calendaires.",
    },
  ],
};

export function Corps() {
  return (
    <>
      <div className="callout callout-grenat">
        <p>
          <strong>En résumé :</strong> une assurance vie ISR coûte ce que coûte n'importe quel
          contrat multisupport : l'étiquette ISR n'ajoute pas de ligne de frais au contrat. Deux
          postes pèsent lourd : les frais de gestion du contrat (0,88 % par an en moyenne sur les
          unités de compte en 2025) et les frais courants des fonds (1,60 %), soit près de 2,5 % par
          an contre un peu plus de 1 % pour un montage sobre. Dans notre calcul illustratif sur 50
          000 € et 15 ans, cet écart pèse environ 15 000 € de capital final. Ce qui vous protège
          n'est donc pas le label, mais le chiffre « frais annuels totaux » que vous ferez écrire
          avant de signer.
        </p>
      </div>

      <p>
        Le contrat que vous regardez met en avant ses supports « ISR », ses fonds « labellisés »,
        parfois le mot « engagé ». Vous avez lu le rendement du fonds en euros, la liste des
        thématiques, et vous ne trouvez nulle part le prix de l'ensemble. Le doute est légitime : en
        assurance vie, le coût n'est jamais une ligne unique, il se répartit entre l'assureur, les
        sociétés de gestion et, souvent, le distributeur.
      </p>
      <p>
        Précisons ce que recouvre l'expression. L'« assurance vie ISR » n'est pas une catégorie
        juridique : c'est un contrat multisupport dans lequel vous choisissez des unités de compte
        (UC) ISR. Le Label ISR est attribué à des{" "}
        <a href="https://www.lelabelisr.fr/label-isr/" target="_blank" rel="noreferrer">
          fonds d'investissement, après audit
        </a>
        , pas à des contrats : le label ne porte pas sur un niveau de frais. Cet article détaille
        les couches de frais, les moyennes publiques les plus récentes, le surcoût éventuel des
        fonds ISR, puis chiffre l'effet cumulé sur quinze ans et vous donne la liste à faire écrire
        avant de signer. Aucun contrat ni fonds n'y est nommé : nous parlons de mécanismes et
        d'ordres de grandeur officiels.
      </p>

      <h2>Quels frais paie-t-on dans une assurance vie ISR ?</h2>
      <p>Quatre couches s'additionnent. Chacune a un bénéficiaire et un document où la lire.</p>
      <table>
        <thead>
          <tr>
            <th>Poste</th>
            <th>Comment il est prélevé</th>
            <th>Qui le perçoit</th>
            <th>Où le lire</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Frais sur versement</strong> (d'entrée)
            </td>
            <td>Un pourcentage retenu sur chaque versement, avant investissement</td>
            <td>L'assureur, et le distributeur pour une part</td>
            <td>Projet de contrat, rubrique regroupant les frais</td>
          </tr>
          <tr>
            <td>
              <strong>Frais de gestion du contrat</strong>
            </td>
            <td>Un pourcentage de l'encours, chaque année (par trimestre, semestre ou an)</td>
            <td>L'assureur, et le distributeur pour une part</td>
            <td>Note d'information, relevé annuel</td>
          </tr>
          <tr>
            <td>
              <strong>Frais courants des fonds</strong> (UC)
            </td>
            <td>Déduits de la valeur du fonds : jamais facturés à part, donc peu visibles</td>
            <td>La société de gestion, avec d'éventuelles rétrocessions</td>
            <td>Document d'informations clés (DIC) de chaque fonds</td>
          </tr>
          <tr>
            <td>
              <strong>Arbitrage ou mode de gestion</strong>
            </td>
            <td>
              Frais à chaque arbitrage en gestion libre ; frais de contrat plus élevés en gestion
              pilotée ou sous mandat
            </td>
            <td>L'assureur ou le gestionnaire délégué</td>
            <td>Conditions générales du contrat</td>
          </tr>
        </tbody>
      </table>
      <p>
        Le fonds en euros est plus simple : pas de frais de fonds, seulement ceux du contrat, et le
        taux annoncé est déjà net. Quant au distributeur (banque, courtier, conseiller),
        l'Observatoire des produits d'épargne financière précise que sa rémunération est prélevée
        sur les frais du produit, sans paiement séparé : nous avons détaillé ce mécanisme dans{" "}
        <LienArticle slug="frais-conseiller-gestion-patrimoine-independant">
          combien coûte un conseiller en gestion de patrimoine
        </LienArticle>
        , utile si vous passez par un intermédiaire.
      </p>
      <p>
        Un poste au moins est plafonné : selon{" "}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15268"
          target="_blank"
          rel="noreferrer"
        >
          service-public.gouv.fr
        </a>
        , les frais à l'entrée et sur versement ne peuvent pas excéder 5 % des primes versées sur
        l'année. La fiche ne cite aucun plafond pour les frais de gestion.
      </p>

      <h2>Combien coûtent en moyenne les frais d'une assurance vie ?</h2>
      <p>
        Les chiffres les plus récents viennent du{" "}
        <a
          href="https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-annuel-2026-de-lobservatoire-des-produits-depargne-financiere-opef"
          target="_blank"
          rel="noreferrer"
        >
          rapport 2026 de l'Observatoire des produits d'épargne financière
        </a>{" "}
        (Banque de France, juin 2026) : frais réellement perçus par les assureurs en 2025 (données
        ACPR) et coûts des fonds (données France Assureurs). Ce sont des moyennes pondérées par les
        encours, gestes commerciaux inclus, pour tous les contrats et non les seuls contrats ISR.
      </p>
      <table>
        <thead>
          <tr>
            <th>Poste (moyenne 2025)</th>
            <th>Niveau moyen</th>
            <th>Ce qui fait varier le chiffre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frais sur versement, vers des UC</td>
            <td>0,57 % du versement</td>
            <td>0,54 % en gestion libre, 0,65 % dans les autres modes de gestion</td>
          </tr>
          <tr>
            <td>Frais de gestion du contrat, sur les UC</td>
            <td>0,88 % par an</td>
            <td>0,79 % en gestion libre, 1,08 % en gestion pilotée, profilée ou sous mandat</td>
          </tr>
          <tr>
            <td>Frais de gestion du contrat, fonds en euros</td>
            <td>0,67 % par an</td>
            <td>Déjà déduits du taux annoncé</td>
          </tr>
          <tr>
            <td>Frais d'arbitrage, gestion libre</td>
            <td>0,13 % du montant arbitré</td>
            <td>Généralement pas de supplément en gestion déléguée</td>
          </tr>
          <tr>
            <td>Frais courants des fonds en UC</td>
            <td>1,60 % par an</td>
            <td>
              1,80 % pour les fonds actions, 1,16 % pour les obligataires, 0,29 % pour les ETF
              actions et les fonds monétaires
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Additionner contrat (0,88 %) et fonds (1,60 %) donne environ 2,5 % par an. C'est la somme de
        deux moyennes, pas le prix d'un contrat précis : un contrat sobre avec des ETF sera
        nettement en dessous, une gestion pilotée en fonds actions nettement au-dessus. Pour le seul
        fonds en euros, l'étude annuelle de l'ACPR sur la{" "}
        <a
          href="https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/ndeg-180-revalorisation-2025-des-contrats-dassurance-vie-et-de-capitalisation"
          target="_blank"
          rel="noreferrer"
        >
          revalorisation 2025 des contrats
        </a>{" "}
        retient 0,63 % de chargement de gestion moyen, du même ordre.
      </p>

      <h2>Un fonds ISR coûte-t-il plus cher qu'un fonds classique ?</h2>
      <p>
        Pas de façon systématique. Trois sources publiques le montrent, à lire avec leurs
        définitions : elles ne parlent pas toutes du Label ISR.
      </p>
      <table>
        <thead>
          <tr>
            <th>Source</th>
            <th>Périmètre</th>
            <th>Frais courants observés</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="https://www.esma.europa.eu/sites/default/files/2026-03/ESMA50-1949966494-4065_Market_Report_-_Costs_and_Performance_of_EU_Retail_Investment_Products.pdf"
                target="_blank"
                rel="noreferrer"
              >
                ESMA, mars 2026
              </a>
            </td>
            <td>OPCVM européens, données 2024 ; « ESG » au sens de Morningstar</td>
            <td>
              ESG contre non-ESG, horizon un an : 1,0 % contre 1,0 % pour l'ensemble ; actions hors
              ETF 1,2 % contre 1,4 % ; obligations 0,5 % contre 0,7 % ; mixtes 1,5 % contre 1,4 % ;
              ETF actions 0,2 % des deux côtés. Sur cinq ans, l'ESMA relève 1,1 % contre 1,0 % pour
              l'ensemble
            </td>
          </tr>
          <tr>
            <td>Observatoire des produits d'épargne financière, 2026</td>
            <td>Fonds actions hors ETF, classement SFDR, fin 2025</td>
            <td>Article 6 : 1,93 % ; Article 8 : 1,92 % ; Article 9 : 2,02 %</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.amf-france.org/sites/institutionnel/files/private/2024-05/etude-analyse-des-frais_fr_0.pdf"
                target="_blank"
                rel="noreferrer"
              >
                AMF, étude de mai 2024
              </a>
            </td>
            <td>Fonds de droit français, données 2017 à 2022</td>
            <td>
              Fonds labellisés ou à approche extra-financière moins chers d'environ 0,15 point,
              toutes choses égales par ailleurs
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Premier enseignement : aucune « prime ISR » nette n'apparaît. Second enseignement : le coût
        se joue dans le mode de gestion. Un ETF actions coûte en moyenne 0,29 % dans les UC, contre
        1,80 % pour l'ensemble des fonds actions, ISR ou non. Une réserve toutefois : rien
        n'autorise à dire que l'ISR est toujours moins cher. Les fonds mixtes ESG sont un peu plus
        chers chez l'ESMA, les fonds Article 9 aussi chez l'Observatoire, et l'ESMA relève des frais
        ponctuels moyens légèrement supérieurs pour les fonds ESG (2,2 % contre 2,0 %). Le DIC de
        chaque fonds reste le seul juge.
      </p>

      <h2>Quel est l'effet cumulé des frais d'une assurance vie sur 15 ans ?</h2>
      <p>
        Un demi-point de frais paraît anodin. Voyons ce qu'il devient une fois composé. Le cas
        suivant n'a qu'un but : montrer le calcul, que vous pourrez refaire avec vos chiffres.
      </p>
      <div className="callout">
        <p>
          <strong>
            Situation type construite pour illustrer le calcul, à partir de paramètres réalistes.
          </strong>{" "}
          Camille verse 50 000 € en une fois sur un contrat multisupport, sans versement
          complémentaire ni arbitrage, et laisse l'épargne investie 15 ans.
        </p>
      </div>
      <h3>Les hypothèses, et pourquoi elles ont été retenues</h3>
      <ul>
        <li>
          <strong>Rendement brut de 4 % par an, constant.</strong> Un chiffre rond et modeste :
          l'ACPR mesure un rendement moyen des UC de l'ordre de 2,0 % par an net de tous frais
          depuis 2020 (
          <a
            href="https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/ndeg-180-revalorisation-2025-des-contrats-dassurance-vie-et-de-capitalisation"
            target="_blank"
            rel="noreferrer"
          >
            étude ACPR n° 180
          </a>
          ), soit, en ajoutant environ 2,5 points de frais moyens, un brut de l'ordre de 4,5 %. Un
          rendement constant n'existe pas : il isole l'effet des frais, il ne prévoit rien.
        </li>
        <li>
          <strong>Frais retirés du rendement</strong> : rendement net = 4 % moins les frais annuels
          totaux (contrat plus fonds), avant impôts et prélèvements sociaux. Approximation standard.
        </li>
        <li>
          <strong>15 ans</strong> : un horizon de long terme (retraite, transmission) ; le troisième
          tableau montre d'autres durées.
        </li>
        <li>
          <strong>Même rendement brut pour tous les profils</strong> : c'est ce qui isole les frais.
          En réalité, un fonds plus cher peut faire mieux ou moins bien, l'Observatoire rappelant
          qu'il n'existe pas de corrélation systématique entre frais et performance.
        </li>
      </ul>

      <h3>Tableau 1 : combien pèse chaque niveau de frais annuels ?</h3>
      <table>
        <thead>
          <tr>
            <th>Frais annuels totaux</th>
            <th>Rendement net</th>
            <th>Capital après 15 ans</th>
            <th>Écart avec la ligne 1,0 %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,0 %</td>
            <td>3,0 %</td>
            <td>77 898 €</td>
            <td>Référence</td>
          </tr>
          <tr>
            <td>1,5 %</td>
            <td>2,5 %</td>
            <td>72 415 €</td>
            <td>- 5 483 €</td>
          </tr>
          <tr>
            <td>2,0 %</td>
            <td>2,0 %</td>
            <td>67 293 €</td>
            <td>- 10 605 €</td>
          </tr>
          <tr>
            <td>2,5 %</td>
            <td>1,5 %</td>
            <td>62 512 €</td>
            <td>- 15 386 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pour repère, à 4 % sans aucun frais, le capital atteindrait 90 047 € : à 2,5 % de frais, il
        en reste 62 512 €, soit environ 69 %. Chaque demi-point supplémentaire retire entre 4 800 €
        et 5 500 €.
      </p>

      <h3>Tableau 2 : trois montages construits sur les moyennes publiques</h3>
      <table>
        <thead>
          <tr>
            <th>Profil</th>
            <th>Entrée</th>
            <th>Contrat</th>
            <th>Fonds</th>
            <th>Total annuel</th>
            <th>Capital final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>A, sobre</strong> : gestion libre, ETF actions
            </td>
            <td>0 %</td>
            <td>0,79 %</td>
            <td>0,29 %</td>
            <td>1,08 %</td>
            <td>76 996 €</td>
          </tr>
          <tr>
            <td>
              <strong>B, repère</strong> : moyennes 2025 des UC
            </td>
            <td>0,57 %</td>
            <td>0,88 %</td>
            <td>1,60 %</td>
            <td>2,48 %</td>
            <td>62 339 €</td>
          </tr>
          <tr>
            <td>
              <strong>C, chargé</strong> : gestion pilotée, fonds actions
            </td>
            <td>3 %</td>
            <td>1,08 %</td>
            <td>1,80 %</td>
            <td>2,88 %</td>
            <td>57 319 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        Les frais de contrat et de fonds sont les moyennes 2025 vues plus haut ; seuls les 0 % du
        profil A et les 3 % du profil C sont des hypothèses, ces derniers restant sous le plafond
        légal de 5 %. Le capital net investi est de 50 000 € en A, 49 715 € en B et 48 500 € en C.
        Le profil B finit 14 657 € sous le profil A (environ 19 % de capital en moins), le profil C
        19 677 € sous A. À lui seul, un frais d'entrée de 3 % équivaut à environ 0,2 point de frais
        annuels supplémentaires sur 15 ans.
      </p>
      <p>
        Attention à la lecture : A n'est pas « meilleur » pour autant. Un portefeuille d'ETF actions
        n'a pas le profil de risque d'une allocation mixte ; le calcul isole les frais, il ne
        compare pas des risques. Et les 0,29 % du profil A sont la moyenne des ETF actions en UC,
        tous ETF confondus et pas seulement ISR : selon l'Observatoire, les fonds indiciels actions
        autres que les ETF coûtent 0,77 % en moyenne.
      </p>

      <h3>Tableau 3 : le même demi-point selon la durée</h3>
      <p>Passer de 1,5 % à 2,0 % de frais annuels (rendement brut de 4 %, 50 000 €) coûte :</p>
      <table>
        <thead>
          <tr>
            <th>Durée</th>
            <th>Capital perdu (en %)</th>
            <th>Capital perdu (en euros)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 ans</td>
            <td>2,4 %</td>
            <td>1 366 €</td>
          </tr>
          <tr>
            <td>10 ans</td>
            <td>4,8 %</td>
            <td>3 055 €</td>
          </tr>
          <tr>
            <td>15 ans</td>
            <td>7,1 %</td>
            <td>5 121 €</td>
          </tr>
          <tr>
            <td>20 ans</td>
            <td>9,3 %</td>
            <td>7 633 €</td>
          </tr>
          <tr>
            <td>30 ans</td>
            <td>13,6 %</td>
            <td>14 310 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        <em>
          Hypothèses illustratives, sans valeur de prévision. Les performances passées ne préjugent
          pas des performances futures, et les unités de compte comportent un risque de perte en
          capital.
        </em>{" "}
        Pour tester vos montants, durées et niveaux de frais, le{" "}
        <a href="/outils/simulateur">simulateur de projection</a> intègre les couches de frais et
        vous donne des pistes chiffrées, sur hypothèses illustratives.
      </p>

      <h2>Faut-il toujours choisir le contrat le moins cher ?</h2>
      <p>
        Non, et un comparatif honnête cite les inconvénients des deux côtés. L'Observatoire rappelle
        que les frais rémunèrent des services, comme le conseil dans le choix des supports ou leur
        gestion, et qu'ils se lisent à côté du risque et du potentiel de performance.
      </p>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Ce qu'elle apporte</th>
            <th>Ses inconvénients</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Montage sobre</strong> (gestion libre, ETF actions)
            </td>
            <td>Davantage de capital net toutes choses égales ; coûts faciles à lire</td>
            <td>
              Vous arbitrez seul (0,13 % du montant arbitré en moyenne) ; un indice suit sa méthode,
              pas vos valeurs ; la profondeur de l'offre ISR reste à contrôler
            </td>
          </tr>
          <tr>
            <td>
              <strong>Montage plus chargé</strong> (gestion pilotée ou sous mandat, fonds actifs)
            </td>
            <td>Gestion déléguée ; certains fonds actifs peuvent faire mieux que leur indice</td>
            <td>
              0,29 point de frais de contrat en plus en moyenne (1,08 % contre 0,79 %), fonds plus
              chers, aucune performance n'est garantie en contrepartie
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Le bon critère n'est pas « le moins cher » mais « le moins cher pour le service dont j'ai
        besoin ». Si vous ne voulez pas arbitrer, la gestion déléguée a un prix légitime ; si vous
        savez ce que vous voulez détenir, la payer est difficile à justifier. Pour juger l'univers
        ISR lui-même, voyez notre guide{" "}
        <LienArticle slug="assurance-vie-isr-guide-2026">
          comment choisir une assurance vie ISR en 2026
        </LienArticle>
        , qui traite des supports, des labels et du fonds en euros.
      </p>

      <h2>Comment repérer les frais mal lisibles et que demander avant de signer ?</h2>
      <h3>Où les frais se dispersent-ils ?</h3>
      <p>
        Rarement cachés, puisque la réglementation impose de les publier : plutôt dispersés. Les
        frais des fonds ne sont pas une ligne facturée, ils sont prélevés dans la performance du
        support et se lisent dans le DIC, sous les coûts récurrents. Le contrat doit indiquer, pour
        chaque unité de compte, le pourcentage des éventuelles rétrocessions que l'assureur perçoit,
        et le relevé annuel doit détailler les frais prélevés. Enfin, l'Observatoire attire
        l'attention sur la complexité des produits structurés, présents dans certains contrats :
        leurs frais demandent une lecture à part.
      </p>
      <h3>Les frais d'une assurance vie sont-ils négociables ?</h3>
      <p>
        Selon{" "}
        <a
          href="https://www.abe-infoservice.fr/fr/epargne/se-preparer-epargner/quels-sont-les-frais-lorsque-jinvestis-dans-des-placements-financiers"
          target="_blank"
          rel="noreferrer"
        >
          ABE Infoservice
        </a>{" "}
        (service édité par la Banque de France), on peut négocier certains frais, comme les frais
        d'entrée ou ceux des versements programmés. Rien ne dit que tous les postes le soient.
        Demandez le taux applicable et faites-le figurer par écrit.
      </p>
      <h3>La méthode des cinq lignes à faire écrire</h3>
      <ol>
        <li>
          <strong>Le taux sur versement,</strong> versements programmés compris, à comparer au
          plafond légal de 5 % et à la moyenne de 0,57 %.
        </li>
        <li>
          <strong>Les frais de gestion annuels du contrat sur UC,</strong> avec leur fréquence de
          prélèvement.
        </li>
        <li>
          <strong>Les frais courants de chaque fonds ISR retenu,</strong> lus un par un dans son DIC
          : la couche la plus lourde en moyenne, et la moins visible.
        </li>
        <li>
          <strong>Le mode de gestion :</strong> frais d'arbitrage en gestion libre, supplément de
          frais de contrat en gestion pilotée, profilée ou sous mandat.
        </li>
        <li>
          <strong>Les rétrocessions,</strong> en pourcentage par unité de compte. Additionnez
          ensuite les lignes 2 et 3 : c'est votre « frais annuels totaux », le chiffre à mettre dans
          le calcul ci-dessus.
        </li>
      </ol>
      <p>
        Dites aussi vos préférences de durabilité : l'assureur doit les prendre en compte et établir
        un compte rendu écrit de vos exigences. Et si le total vous déplaît à la lecture, vous avez
        30 jours calendaires après la signature pour renoncer.
      </p>

      <h2>Vos questions sur les frais d'une assurance vie ISR</h2>
      <FaqArticle items={meta.faq!} />

      <h2>Combien coûte votre assurance vie ISR : ce qu'il faut retenir</h2>
      <p>
        <strong>La réponse.</strong> Une assurance vie ISR coûte le prix d'une assurance vie
        multisupport : environ 0,9 % par an de frais de contrat et 1,6 % de frais de fonds sur les
        UC en moyenne, soit près de 2,5 %, avec un montage sobre possible autour de 1 %. L'ISR n'est
        pas, en soi, un facteur de surcoût.
      </p>
      <p>
        <strong>Le coût de l'inaction.</strong> Signer sans avoir fait écrire les cinq lignes, c'est
        accepter un total inconnu qui, composé sur quinze ans, pèse plusieurs milliers d'euros par
        demi-point de frais, quel que soit le label.
      </p>
      <p>
        <strong>La prochaine étape.</strong> Si vous partez d'un petit budget, les frais
        proportionnels pèsent différemment : notre article{" "}
        <LienArticle slug="investir-ethique-petit-budget">
          investir éthique avec un petit budget
        </LienArticle>{" "}
        détaille comment les arbitrer. Sinon, refaites le calcul avec vos propres chiffres dans le{" "}
        <a href="/outils/simulateur">simulateur</a>.
      </p>
      <p>
        <strong>Et si vous préférez en parler.</strong> Vous pouvez échanger avec un conseiller du
        cabinet pour obtenir des pistes sur la lecture de vos frais : le premier échange est offert
        et sans engagement. Découvrez{" "}
        <a href="/cgp-investissement-responsable">l'accompagnement proposé</a> ; la grille de
        rémunération du cabinet est publiée sur la page <a href="/tarifs">tarifs</a>.
      </p>
    </>
  );
}
