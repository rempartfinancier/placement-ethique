# Brief de conception et de construction autonome — placement-ethique.fr

> **Mode d'emploi de ce document.** Ceci est un prompt-brief complet, à copier-coller
> tel quel comme instruction de départ dans une session Claude (Fable) dédiée,
> disposant d'un accès outils complet (fichiers, shell, git, gestionnaire de paquets,
> recherche web) et démarrant dans un **répertoire de projet vide et indépendant**
> (proposition : `Documents/Sites Github Desktop/placement-ethique`, sibling du repo
> `placement-halal`, mais n'importe quel repo vide convient).
>
> Ce document se suffit à lui-même : toutes les données réelles nécessaires (mentions
> légales, grille de frais, bios, design tokens à éviter, etc.) sont recopiées ici,
> pas seulement référencées, pour qu'aucune étape ne dépende d'un accès à un autre
> dépôt. **Aucune interruption n'est prévue** : l'agent dispose de l'autorité et des
> heuristiques nécessaires (section 11) pour trancher seul chaque décision, y compris
> les décisions de marque, de design et de contenu. Les seules exceptions sont les
> actions qu'aucun agent ne peut physiquement accomplir (payer un nom de domaine,
> créer un compte bancaire/SaaS tiers) — elles sont listées explicitement en section 10
> pour ne jamais bloquer le reste du travail.

**En une phrase (Executive Summary — on applique à ce document sa propre doctrine
éditoriale) :** construire, seul et de bout en bout, un site marketing + conseil
patrimonial `placement-ethique.fr`, aussi complet que sa référence `placement-halal.fr`
(au moins ~30 articles, ~10 outils interactifs, pages de conformité, simulateur de
projection) mais avec une identité visuelle et un storytelling entièrement repensés
autour d'un positionnement de **transparence radicale anti-greenwashing**, porté par
les deux mêmes conseillers réels, sous la même entité juridique EXP Capital, avec le
même modèle économique d'apporteur d'affaires.

---

## Sommaire

1. [Préambule — mandat et environnement d'exécution](#1-préambule)
2. [Faits non négociables](#2-faits-non-négociables)
3. [Positionnement et storytelling](#3-positionnement-et-storytelling)
4. [Identité de marque et direction créative](#4-identité-de-marque-et-direction-créative)
5. [Architecture du site](#5-architecture-du-site)
6. [Stratégie de contenu — méthode Endless Customers](#6-stratégie-de-contenu)
7. [Outils interactifs](#7-outils-interactifs)
8. [Stack technique](#8-stack-technique)
9. [Réutilisation d'actifs réels](#9-réutilisation-dactifs-réels)
10. [Ce que l'agent ne peut pas faire seul + checklist de mise en production](#10-ce-que-lagent-ne-peut-pas-faire-seul)
11. [Protocole d'autonomie totale](#11-protocole-dautonomie-totale)
12. [Plan d'exécution en phases + définition du "terminé"](#12-plan-dexécution)

---

## 1. Préambule

Tu es une équipe produit autonome complète : stratège de marque, copywriter,
designer et ingénieur full-stack, réunis dans un seul agent. Ta mission est de
livrer un site **de production, complet, déployable**, sans repasser par
l'utilisateur humain pour la moindre validation intermédiaire — y compris sur des
sujets habituellement jugés « sensibles » (nom de marque définitif, palette de
couleurs, structure de rémunération affichée, formulations réglementaires). Tu as
l'autorité pour trancher. Documente tes décisions non triviales dans un fichier
`DECISIONS.md` à la racine du repo (une ligne par décision, avec la raison) plutôt
que de demander — voir section 11 pour la méthode exacte.

Tu démarres dans un **nouveau dépôt git indépendant**, sans lien technique avec
`placement-halal.fr`. Tu ne dois jamais modifier, lire ou dépendre du dépôt
placement-halal — tout ce dont tu as besoin de lui est déjà recopié dans ce document.

Environnement présumé disponible : lecture/écriture fichiers, shell (`bun` de
préférence, voir section 8), git, recherche web (utilise-la pour vérifier tout
paramètre réglementaire précis — montants Éco-PTZ, critères actuels des labels
ISR/Greenfin/Finansol, seuils SFDR — avant de le publier ; ne récite jamais un
chiffre réglementaire de mémoire sans vérification).

---

## 2. Faits non négociables

Ces faits sont fixes. Ils ne sont **pas** des sujets sur lesquels improviser — ce
sont des données d'entrée, au même titre qu'une contrainte d'API.

### 2.1 Qui

- Deux conseillers réels, les mêmes que sur placement-halal.fr :
  **Sébastien Petrisot** et **Alexandre Pollet**.
- Ce sont des **conseillers en gestion de patrimoine (CGP)**, pas des économistes
  extra-financiers, pas une agence de notation ESG, pas une ONG.

### 2.2 Cadre juridique — à reproduire exactement, jamais à réinventer

- **EXP Capital est la SEULE entité mentionnée.** SASU au capital de 1 000 €,
  immatriculée au RCS de Versailles sous le n° 987 986 247, inscrite à l'ORIAS sous
  le n° 25005915 (vérifiable sur www.orias.fr). **EXP Capital N'EST PAS CIF**
  (conseiller en investissements financiers au sens réglementaire).
- **Ne jamais** mentionner « Épargne Plurielle », « Uptimi Conseil », un statut CIF,
  un mandat, ou toute référence à un conseil réglementé qui n'est pas celui-ci. Ce
  sont des noms d'entités *sœurs* du même réseau, utilisées sur d'autres sites — ne
  jamais les faire apparaître ici, même par erreur de copier-coller.
- Placement-ethique.fr est un site **purement informatif et éducatif**. Les CTA ne
  doivent **jamais** utiliser « conseil personnalisé », « recommandation
  personnalisée » ou « étude de votre situation » — préférer « échanger avec un
  conseiller », « prendre rendez-vous », « obtenir des pistes ».
- Vocabulaire verrouillé : **« recommandation »** est réservé exclusivement à l'avis
  écrit d'un conseiller humain, après échange. Toute sortie d'algorithme, de
  simulateur ou de quiz s'appelle une **« piste »**, jamais une recommandation.
- Le siège social d'EXP Capital est, à la date de rédaction, **toujours en attente
  de communication** même dans la documentation interne du réseau. Ne jamais
  inventer d'adresse : afficher `[Siège social EXP Capital — à compléter]` comme
  placeholder visible et assumé.
- Le libellé exact de catégorie ORIAS n'est pas confirmé — citer uniquement le
  numéro (25005915) et renvoyer vers orias.fr, sans qualifier la catégorie
  d'intermédiation de façon plus précise que ce qui est vérifié.
- **Aucune fabrication** : toute donnée non fournie dans ce document et non
  vérifiable publiquement doit être affichée comme un placeholder explicite
  (`[À COMPLÉTER : ...]` ou statut `"À VALIDER"` dans le code, voir section 7) —
  jamais comblée par une valeur plausible inventée. C'est vrai pour une adresse,
  un numéro de téléphone, un ISIN de fonds, une date, un chiffre de performance.

### 2.3 Modèle économique — identique à toute la structure

Les deux conseillers sont rémunérés **en tant qu'apporteurs d'affaires** par leurs
partenaires (compagnies d'assurance, sociétés de gestion, plateformes), pas en
honoraires facturés au client par défaut. C'est le modèle courtage classique :

- Premier rendez-vous et bilan patrimonial : **gratuits**, sans engagement.
- Rémunération versée par les partenaires (rétrocessions sur frais d'entrée/gestion,
  commissions), jamais par un supplément facturé au client.
- Exception : lettres de mission tarifées, uniquement à la demande du client, pour
  des audits ponctuels (transmission, bilan retraite chiffré, optimisation fiscale).
- Ce modèle doit être expliqué avec la **même transparence radicale** que sur
  placement-halal.fr (voir la page `/tarifs` de référence, section 9.4) — c'est un
  pilier du positionnement, pas un détail légal à minimiser.

### 2.4 Grille de frais réelle — à reprendre telle quelle sauf indication contraire du cabinet

| Enveloppe | Poste | Taux |
|---|---|---|
| Assurance vie / capitalisation | Frais d'entrée jusqu'à 200 000 € | 1,00 % |
| Assurance vie / capitalisation | Frais d'entrée de 200 000 € à 400 000 € | 0,50 % |
| Assurance vie / capitalisation | Frais d'entrée au-delà de 400 000 € | 0 % |
| AV — Patrimoine Vie Plus (Suravenir / Crédit Mutuel Arkéa) | Frais de gestion | 1,08 %/an |
| AV — UAF Life Patrimoine, contrat *Version Absolue 2* (Spirica / Crédit Agricole) | Frais de gestion | 1,00 %/an |
| PER (les deux contrats) | Frais d'entrée | identiques à l'AV |
| PER (les deux contrats) | Frais de gestion | 1,00 %/an |
| SCPI | Frais d'entrée totaux (identiques en direct) | ~12 % |
| SCPI | Part rétrocédée au cabinet | ~6 % |
| SCPI | Cashback client au-delà de 100 000 € investis | 2 % |
| Girardin industriel (Lodeom) | Commission totale, intégrée au montage | ~6 % |
| Immobilier direct | Commission incluse dans le prix | 0 à 10 % |

Ce sont des faits réels sur le cabinet, indépendants de la thématique halal ou
éthique du site — à reprendre sans modification sauf si une donnée différente est
fournie explicitement pour ce site. Ne jamais inventer une grille différente pour
« faire plus vert ».

---

## 3. Positionnement et storytelling

C'est ici que placement-ethique.fr doit **diverger fondamentalement** de
placement-halal.fr dans le récit, tout en gardant la même exigence.

### 3.1 Le changement de tension centrale

Sur placement-halal.fr, la tension à résoudre est : *« Comment investir en accord
avec des règles religieuses claires, sans sacrifier la performance, avec un
interlocuteur qui parle les deux langages ? »* — un problème de **conformité à un
référentiel plutôt stable** (fiqh, AAOIFI), résolu par la pédagogie et l'humilité.

Sur placement-ethique.fr, la tension centrale doit être différente et plus dure :
**« L'investissement éthique est-il réel, ou n'est-ce qu'un argument marketing ? »**
C'est un problème de **confiance dans un référentiel flou, contesté et saturé de
marketing** (multiplication des labels, fonds reclassés SFDR Article 9 → 8 en masse
en 2022-2023, promesses d'impact rarement vérifiées). C'est un terrain bien plus
propice à la doctrine Marcus Sheridan : répondre aux questions inconfortables que
l'industrie évite (*« Ce label vaut-il vraiment quelque chose ? »*, *« L'investissement
éthique rapporte-t-il moins ? »*, *« Ce fonds "vert" est-il vraiment vert ? »*).

### 3.2 Positionnement retenu

**Le cabinet qui dit stop au greenwashing dans l'épargne.** Posture d'enquête
rigoureuse plutôt que de militantisme : le site ne prétend jamais juger
moralement une entreprise ou clamer qu'un placement est « 100 % éthique » (l'ESG
n'a pas d'équivalent des règles fiqh vérifiables noir sur blanc) — il vérifie,
source, explique la méthodologie derrière chaque label, et assume de dire quand un
label ne garantit pas grand-chose. Voir section 6.2 pour la posture éditoriale
complète (« CGP rigoureux, pas agence de notation ni militant »).

Pistes de manifeste (page `/a-propos`, section « qui sommes-nous ») — à affiner,
pas à recopier mot pour mot :

> « Placement-éthique.fr est né d'un autre constat : l'investissement responsable
> est devenu un argument marketing avant d'être une méthode. Labels multipliés,
> fonds reclassés du jour au lendemain, promesses d'impact rarement vérifiées —
> beaucoup d'épargnants qui veulent que leur argent serve leurs valeurs finissent
> par renoncer, faute de savoir à qui faire confiance. Nous avons construit un
> cabinet qui répond à cette question avec la même rigueur qu'un gestionnaire de
> patrimoine applique à la fiscalité ou à l'allocation d'actifs : vérifier avant
> d'affirmer, sourcer avant de recommander, et dire clairement ce qui est solide
> et ce qui ne l'est pas. »

Pistes de tagline (choisir, adapter ou en générer une meilleure — mais rester dans
ce registre, éviter tout cliché "planète/feuille/main dans la terre") :

- *« L'investissement éthique, sans le vernis. »* (double sens assumé : vernis =
  léger, superficiel — et évoque le vernis qui masque)
- *« Vos convictions, sans compromis ni compromissions. »*
- *« Investir selon ses valeurs, pas selon un logo vert. »*

Quatre valeurs à incarner (thèmes imposés, formulation finale libre — s'inspirer du
rythme de la page `/a-propos` de référence qui utilise « Pédagogie / Précision /
Patience / Probité ») :

1. **Vérification** — nous sourçons avant d'affirmer, jamais l'inverse.
2. **Transparence sur la rémunération** — identique à l'engagement du réseau,
   voir section 2.3/9.4.
3. **Exigence sans dogmatisme** — pas de posture absolutiste sur un label ou une
   stratégie (exclusion vs engagement), la nuance est assumée.
4. **Constance dans la durée** — l'accompagnement ne s'arrête pas à la signature
   (suivi annuel, vérification que les critères ESG tiennent dans le temps).

### 3.3 Ce que ce positionnement change concrètement dans le contenu

- Le site doit avoir un **pilier « Labels & Greenwashing »** qui n'a pas
  d'équivalent sur placement-halal.fr (voir 6.3) — c'est le nouveau cœur
  différenciant.
- Le ton peut être légèrement plus incisif/enquête que le halal (qui est plus
  apaisant/rassurant face à une angoisse religieuse) — mais reste un CGP, jamais un
  militant ou un lanceur d'alerte (voir garde-fous en 6.2, notamment le risque de
  diffamation si un fonds précis est nommé sans source publique vérifiable).
- Le mot « éthique » est le terme grand public à utiliser dans les titres/SEO
  (aligné avec le nom de domaine) ; « ISR », « ESG », « investissement responsable »
  sont les synonymes techniques à utiliser avec précision dans le corps des
  articles — même logique que « halal » (terme public) vs « riba/sukuk/gharar »
  (vocabulaire technique précis) sur le site de référence.

---

## 4. Identité de marque et direction créative

### 4.1 Ce qu'il ne faut PAS faire

- Ne **pas** reprendre la palette de placement-halal.fr : fond crème
  `oklch(0.972 0.014 85)`, primaire vert forêt `oklch(0.32 0.06 160)`, accent or
  `oklch(0.72 0.12 80)`, accent terracotta `oklch(0.62 0.13 38)`, typo display
  *Cormorant Garamond* + texte *Inter*. Même système de tokens (oklch, classes
  `.btn-primary/.btn-gold/.btn-ghost/.card-paper/.eyebrow/.display-*`,
  `color-mix` pour les alphas) mais **palette et polices différentes**.
- Ne **pas** céder au cliché visuel « finance verte » : pas de feuilles, pas de
  globe terrestre, pas de dégradé vert-startup, pas de photos de mains dans la
  terre ou de jeunes pousses. Le site combat le greenwashing — son identité
  visuelle ne doit pas ressembler à celle qu'il critique. C'est un choix de marque
  assumé : l'absence de vert dominant *est* un message.

### 4.2 Direction recommandée (point de départ, à affiner)

- **Fond** : un ivoire chaud, légèrement plus neutre/frais que le crème du site
  halal (moins jaune).
- **Couleur primaire** : un bleu-nuit encré, profond (« ardoise »/« encre »)
  plutôt qu'un vert — évoque la sérieux, la profondeur d'analyse, l'enquête —
  sans tomber dans le bleu-fintech générique en le gardant très sombre et désaturé.
- **Accent signature** : un rouge grenat/bordeaux profond plutôt que l'or —
  distinctif, premium, jamais vu sur un site « vert ». Nom de token suggéré :
  `--grenat` (écho au `--gold`/`--clay` du réseau, vocabulaire minéral).
- **Vert** : autorisé uniquement comme indicateur fonctionnel mineur (ex. badge
  « vérifié »/statut positif dans un outil), jamais comme couleur de marque
  dominante.
- **Typo display** : une serif éditoriale différente de Cormorant Garamond —
  *Newsreader* (pensée pour la lecture longue/le journalisme, cohérent avec la
  posture d'enquête) ou *Fraunces* (caractère fort, très différenciant). Choisir
  l'une des deux, ou une alternative de qualité équivalente disponible librement
  (Google Fonts ou auto-hébergeable), en vérifiant le support des accents français.
- **Typo texte** : *Inter* peut être conservé (lisibilité éprouvée, cohérence de
  famille avec le réseau) ou remplacé par *Public Sans*/*IBM Plex Sans* — au choix.
- Conserver la discipline technique du réseau : tokens en oklch, `color-mix()`
  pour les variantes alpha, jamais de couleur brute en dur dans un composant,
  classes utilitaires nommées sur le même modèle (`.btn-primary`, `.btn-ghost`,
  `.card-paper`, `.eyebrow`, `.display-1/2/3`, `.section`, `.prose-article`).

### 4.3 Ton rédactionnel

Vouvoiement, « email » (jamais « e-mail ») — conventions identiques au réseau.
Registre : rigoureux, pédagogique, une pointe d'enquête/mythbusting assumée
(différent du ton plus apaisant du site halal), jamais moralisateur envers le
lecteur, jamais accusateur envers une entreprise nommée sans source publique.

---

## 5. Architecture du site

Sitemap cible, au moins aussi large que la référence (elle compte ~20 routes
marketing + ~11 outils + 5 routes espace client) :

```
/                              Accueil
/a-propos                      Le cabinet, les deux conseillers, "Réseau EXP Capital"
/contact
/tarifs                        Pilier "coût" — rémunération, grille de frais (§2.4, §9.4)
/questions                     FAQ générale du site
/placements                    Pilier : panorama des classes d'actifs ISR/ESG
/enveloppes                    Comparatif des enveloppes fiscales (AV, PER, PEA, CTO — ISR)
/objectifs                     Navigation par objectif (retraite, transmission, enfants, achat)
/articles, /articles/$slug     Hub + détail des guides (§6.3)
/mentions-legales               §9.1 — texte fourni
/confidentialite                §9.2 — texte fourni
/outils, /outils/*              §7 — hub + 10-12 outils
/espace/*                       Portail client (V1+V2, réplique l'architecture de
                                 référence — voir §8.4) — dépend de Supabase (§10)
```

Conserver le motif de guidage en 2 questions de la page `/outils` de référence
(« Qu'est-ce qui vous amène aujourd'hui ? » → question de suivi → outil
recommandé) — c'est un excellent mécanisme de réduction de friction, réutilisable
tel quel avec des intentions adaptées (voir §7).

---

## 6. Stratégie de contenu

### 6.1 Cadre général — inchangé

Le skill personnel `endless-customers-article` (méthode Marcus Sheridan / They Ask
You Answer, Big 5 : coût, problèmes, comparaisons, "best of", avis) s'applique sans
aucune modification — structure obligatoire de chaque article : Résumé Exécutif en
ouverture, intro PEP/QQPP (douleur du lecteur → histoire/persona → définition →
promesse), H2 rédigés comme de vraies requêtes de recherche, tableaux comparatifs,
hypothèses chiffrées justifiées et assorties d'un disclaimer d'illustration, FAQ de
5 à 8 questions, conclusion en 4R (Résolution, Rappel, prochaine étape pertinente,
Réintroduction du service), liens internes commentés, liens externes à côté de
toute affirmation factuelle/légale/fiscale, byline + date de mise à jour.

Si ce skill n'est pas disponible dans l'environnement d'exécution, applique ces
règles directement — elles sont rappelées ici en intégralité, ce n'est pas une
simple référence externe à retrouver.

### 6.2 Garde-fous spécifiques au sujet éthique/ESG — à créer comme skill dédié

Crée le fichier `~/.claude/skills/finance-ethique-article/SKILL.md` (au même
niveau que `finance-islamique-article`, sur le même modèle) avec exactement ce
contenu, et applique-le à chaque article dès sa rédaction :

```markdown
---
name: finance-ethique-article
description: Domain-specific voice and accuracy guidelines for placement-ethique.fr content — articles, comparatifs, et pages touchant l'investissement éthique/ESG/ISR, les labels (Label ISR, Greenfin, Finansol), la classification SFDR, et le greenwashing. Use this ALONGSIDE endless-customers-article, never instead of it — this skill overlays the CGP-not-rating-agency posture, technical vocabulary discipline, and factual-hedging rules specific to this site; endless-customers-article still governs structure. Trigger whenever writing or reviewing content for placement-ethique.fr, or any content discussing ESG/ISR compliance, named labels or funds, or greenwashing claims.
---

# Finance Éthique — Guidelines éditoriales (placement-ethique.fr)

**Document vivant.** S'affine à chaque correction reçue sur un article publié.

Ce skill ne remplace pas `endless-customers-article` — il le complète. Pour tout
ce qui touche à la structure, suivre `endless-customers-article` sans changement.
Les règles ci-dessous ne s'appliquent qu'au sujet et au positionnement du cabinet.

## 1. Posture : CGP rigoureux, pas agence de notation ni militant

Nous sommes des conseillers en gestion de patrimoine, pas une agence de notation
extra-financière, pas une ONG environnementale, pas un régulateur. Le site ne
certifie jamais lui-même qu'un fonds est « vraiment éthique » — il explique la
méthodologie et les faits vérifiables pour que le lecteur juge par lui-même.

- Ne pas mettre en avant un « comité RSE interne » ou une légitimité militante
  comme argument d'autorité. Dire « fonds classé SFDR Article 9 » ou « labellisé
  Greenfin » (fait vérifiable, sourcé, daté) suffit — sans prétendre auditer
  nous-mêmes la réalité de l'impact, sauf si l'article traite explicitement de
  méthodologie (ex. « comment lire un rapport d'impact »).
- Ne jamais se poser en juge moral d'une entreprise ou d'un secteur nommément,
  sauf controverse publique et sourcée (sanction AMF/ACPR, contentieux public,
  enquête journalistique documentée et datée). Décrire des mécanismes et des
  signaux d'alerte génériques plutôt que d'accuser nommément sans source
  vérifiable — risque de diffamation réel et à prendre au sérieux.
- Expliquer la solidité d'un placement par des faits structurels vérifiables
  (méthodologie d'exclusion réelle, seuil de revenus verts, taux de rotation du
  portefeuille, reporting d'impact publié) plutôt que par la confiance aveugle
  dans un label.

## 2. Vocabulaire technique : à conserver précisément

Ne pas édulcorer ni paraphraser vaguement — définir au premier usage si le
lecteur peut être débutant, mais utiliser avec précision : ISR, ESG
(Environnement/Social/Gouvernance), SFDR (Article 6/8/9), taxonomie verte
européenne, Label ISR, Label Greenfin, Label Finansol, empreinte carbone,
scope 1/2/3, best-in-class, best-in-universe, exclusion sectorielle/normative,
engagement actionnarial, obligations vertes (green bonds), greenwashing, impact
investing, additionnalité.

## 3. Désaccords et débats contemporains

Sujets qui font légitimement débat : rigueur réelle du Label ISR (critiqué par
certaines ONG comme trop permissif après sa réforme), SFDR Article 8 vs 9
(reclassements massifs 2022-2023, nombreux fonds redescendus d'Article 9 à 8),
exclusion sectorielle vs engagement actionnarial (lequel change vraiment les
pratiques d'une entreprise ?), performance ISR vs conventionnelle (études
contradictoires selon la méthodologie et la période). Exposer les deux lectures
factuellement, décrire le raisonnement structurel de chaque position, éviter les
hiérarchies implicites (pas de mépris envers « les pragmatiques » ni sacralisation
des « puristes »), conclure sur la grille de lecture assumée du cabinet sans
prétendre trancher le débat à la place du lecteur.

## 4. Ton neutre, jamais commercial dans un article de fond

- Aucun avantage propre au cabinet (frais négociés, conditions spéciales) mis en
  avant dans un article éditorial/comparatif — réservé à `/tarifs` ou à un
  échange direct.
- Ne jamais affirmer une absence de lien commercial si c'est faux. Décrire la
  pratique actuelle sans absolu.
- Un comparatif « meilleur fonds/label » doit toujours inclure de vrais
  inconvénients, sinon il se lit comme une brochure déguisée.

## 5. Discipline factuelle — anti-conjecture, renforcée pour l'ESG

- Ne jamais affirmer qu'un fonds « n'est pas du greenwashing » ou « est
  vraiment vert » sans source vérifiable et datée (rapport SFDR officiel,
  factsheet de la société de gestion, notation de durabilité datée).
- Ne jamais nommer une société de gestion ou un fonds précis comme exemple de
  greenwashing sans source publique et vérifiable — pas de suspicion non sourcée.
- Toute statistique de performance ISR vs conventionnelle doit être sourcée
  précisément (indice, période, méthodologie exacte) — ne jamais présenter un
  chiffre isolé comme un consensus alors que le champ est traversé d'études
  contradictoires.
- Pour tout produit nommé, vérifier sur la fiche officielle (SFDR, DIC,
  factsheet société de gestion) avant d'affirmer une classification ou un
  critère d'exclusion — pas seulement sur un résumé d'outil de recherche, qui
  peut halluciner un détail absent de la source réelle.
- Ne jamais inventer une précision pour combler un manque d'information (date,
  chiffre, critère exact d'un label) : dire « à vérifier directement auprès de
  X » plutôt que de fabriquer un détail plausible.

## Auto-vérification avant publication

- [ ] Aucune mention d'un « comité RSE interne » comme argument d'autorité
      (sauf si le sujet de l'article est justement la méthodologie)
- [ ] Aucune accusation nommée de greenwashing sans source publique vérifiable
- [ ] Aucun avantage commercial propre au cabinet mis en avant dans le corps
      de l'article
- [ ] Aucune affirmation absolue non vérifiée
- [ ] Vocabulaire ESG/ISR conservé et précis, pas édulcoré
- [ ] Débats (labels, exclusion vs engagement, performance) exposés sans
      cliché ni hiérarchie implicite
- [ ] Tout le reste (structure, FAQ, ton Endless Customers) conforme à
      `endless-customers-article`
```

### 6.3 Backlog d'articles de lancement

La référence compte environ 25-30 articles. Objectif : **au moins autant, viser
30 à 35**, rédigés en intégralité (pas d'ébauches) dès le lancement, répartis sur
les mêmes catégories Big 5. Liste de départ (titres à affiner, structure de
répartition à respecter) :

**Fondamentaux / Éducation**
1. Investissement éthique : le guide complet pour débuter en 2026 (page pilier)
2. ISR, ESG, développement durable, impact investing : quelles différences ?
3. Apprendre à lire un ETF ISR quand on débute
4. Foncières cotées ISR et SCPI environnementales : l'immobilier durable en bourse
5. Budgétiser son investissement éthique quand on démarre avec un petit capital
6. Livrets Finansol et épargne solidaire : une vraie alternative au Livret A ?

**Labels & Greenwashing (pilier différenciant, cœur du positionnement)**
7. Label ISR : que garantit-il vraiment, et où sont ses limites ?
8. Label Greenfin vs Label ISR : lequel choisir, et pourquoi ce n'est pas la même promesse
9. SFDR Article 8 ou Article 9 : ce que ces classifications signifient (et ne garantissent pas)
10. Comment repérer le greenwashing dans un fonds « vert » : notre méthode en 6 points
11. Label Finansol : la finance solidaire expliquée simplement
12. Taxonomie verte européenne : ce qu'elle change concrètement pour votre épargne

**Performance / Mythbusting**
13. Investir éthique fait-il vraiment baisser la performance ? Ce que disent les chiffres
14. Obligations vertes (green bonds) vs obligations classiques : rendement, risque, impact réel
15. Engagement actionnarial vs exclusion sectorielle : deux stratégies ISR, comment les comparer

**Enveloppes / Produits**
16. Assurance vie ISR : le guide complet 2026
17. Assurance vie luxembourgeoise et investissement responsable
18. PER vs Assurance vie ISR : lequel choisir selon votre objectif
19. PER et protection familiale : au-delà de l'avantage fiscal
20. PER éthique : optimiser sa retraite tout en respectant ses valeurs
21. Quelle enveloppe choisir pour un investissement éthique ?
22. Assurance vie pour ses enfants : transmettre aussi ses valeurs
23. SCPI ISR/environnementales en France : le panorama
24. SCPI ISR vs SCPI classique : quelles différences réelles ?
25. Investissement immobilier responsable : par où commencer ?

**Fiscalité / Dispositifs**
26. Éco-PTZ, Denormandie, Girardin industriel : les dispositifs fiscaux compatibles avec une démarche éthique
27. Préparer sa retraite avec une épargne alignée sur ses valeurs
28. Retraite : capital ou rente sur un PER éthique ?

**Transmission / Famille**
29. Donation et transmission en cohérence avec ses valeurs
30. Transmettre un patrimoine engagé : succession et fonds de partage

**Conseil / Cabinet**
31. Bilan patrimonial et investissement éthique : à quoi ressemble un vrai rendez-vous conseil
32. Métaux précieux et investissement éthique : diversification ou incohérence ?
33. Empreinte carbone de votre épargne : pourquoi (et comment) la mesurer

Respecter le schéma de données déjà utilisé côté référence (`slug, title, excerpt,
readingTime, category, date, updated?, tags?, featured?, image, imageAlt,
imageWidth, imageHeight`) — reproduire un type `Article` équivalent.

### 6.4 Page `/tarifs` — calibrage de profondeur

La page de référence fait ~1400 lignes : 4 principes, un tableau de frais par
solution, un tableau « qui paie / qui touche quoi », une timeline en 8 étapes du
parcours client, une section « à qui nous ne convenons pas » (5 items), un guide
long-form en 13 sections, et **30+ FAQ**. Reproduire une profondeur équivalente
pour placement-ethique.fr, adaptée au sujet. Exemples de FAQ à adapter (liste non
exhaustive, à compléter jusqu'à 30+) :

- « Est-ce que vous gagnez plus si vous me recommandez un fonds labellisé plus cher ? »
- « Un fonds ISR coûte-t-il structurellement plus cher qu'un fonds classique ? »
- « Êtes-vous rémunérés différemment selon le fonds ISR que je choisis ? »
- « Une commission peut-elle rendre un placement "moins éthique" ? »
- « Êtes-vous un cabinet indépendant au sens réglementaire ? »
- « Qu'est-ce que le SFDR et pourquoi cela devrait m'intéresser ? »
- « Vos partenaires vous imposent-ils des objectifs de vente sur les fonds labellisés ? »
- « Que faire si je pense qu'une recommandation ne servait pas mon intérêt ? »

Section « à qui nous ne convenons pas » — thèmes à couvrir (reprendre la logique,
adapter le contenu) : recherche de performance maximale sans aucune contrainte de
valeurs ; attente d'un verdict absolu « 100 % éthique » sans nuance ; absence
d'épargne de précaution ; recherche d'un produit sans conseil ; besoin d'une
réponse en 24h ; conviction figée que l'éthique coûte forcément plus cher sans
vouloir regarder les chiffres.

---

## 7. Outils interactifs

Cible : 10 à 12 outils (la référence en a 11), conservant le moteur de simulation
existant (voir §8.3) et remplaçant les outils spécifiquement religieux par des
équivalents pertinents pour l'investissement éthique.

| Outil de référence (halal) | Équivalent placement-ethique.fr | Traitement |
|---|---|---|
| `/outils/diagnostic` | `/outils/diagnostic` | Reprendre tel quel, remplacer les points de contrôle "conformité charia" par "cohérence valeurs" |
| `/outils/profil-investisseur` | `/outils/profil-investisseur` | Structure identique (tolérance/capacité au risque) + 2-3 questions optionnelles sur priorités E/S/G et exclusions souhaitées |
| `/outils/type-investissement` | `/outils/type-investissement` | Logique générique reprise, aucun fonds nommé (règle produit inchangée, voir §8.3) |
| `/outils/simulateur` | `/outils/simulateur` | **Réutiliser le moteur tel quel** (fiscalité française, indépendante du sujet éthique/halal) |
| `/outils/portefeuilles-types` | `/outils/portefeuilles-types` | Même discipline `AVERTISSEMENT_PROFIL_TYPE` (§8.3), fonds ISR "À VALIDER" tant que non confirmés |
| `/outils/retraite` | `/outils/retraite` | Générique, reprise quasi telle quelle |
| `/outils/per-halal` | `/outils/per-isr` | Même moteur fiscal PER, habillage ISR |
| `/outils/conformite-etf` | `/outils/decodeur-label` | **Nouvel outil différenciant** — voir spec ci-dessous |
| `/outils/comparateur-ptz-murabaha` | `/outils/comparateur-eco-ptz` | **Nouvel outil** — voir spec ci-dessous |
| `/outils/zakat` | `/outils/empreinte-carbone-epargne` | **Nouvel outil différenciant** — voir spec ci-dessous |
| `/outils/comparateur-enveloppes` | `/outils/comparateur-enveloppes` | Reprendre tel quel |

**Spécification — Décodeur de label** (`/outils/decodeur-label`) : l'utilisateur
sélectionne un label/classification (Label ISR, Label Greenfin, Label Finansol,
SFDR Article 6/8/9, Taxonomie verte). La page affiche : ce que le label garantit
réellement, ce qu'il ne garantit PAS, qui le délivre/contrôle, comment vérifier
qu'un fonds l'a vraiment (où trouver l'info officielle), signaux d'alerte de
greenwashing associés. Contenu éditorial structuré (accordéon/onglets) — **pas**
de connexion à une base de données de fonds réels en V1 : c'est un outil
pédagogique de décodage, pas un moteur de vérification automatisée.

**Spécification — Calculateur d'empreinte carbone de l'épargne**
(`/outils/empreinte-carbone-epargne`) : formulaire simple (montant épargné,
répartition indicative actions/obligations/immobilier/monétaire) → estimation
pédagogique d'ordre de grandeur, comparée à une épargne bas-carbone/ISR, avec
méthodologie citée explicitement et disclaimer d'illustration (même discipline
que le simulateur de projection — jamais un chiffre présenté comme un audit
certifié).

**Spécification — Comparateur Éco-PTZ** (`/outils/comparateur-eco-ptz`) :
compare l'éco-prêt à taux zéro (financement travaux de rénovation énergétique) à
un prêt travaux classique. Vérifier les paramètres actuels (plafonds, conditions
d'éligibilité) par recherche web avant publication — ce sont des montants légaux
qui évoluent, ne pas les citer de mémoire.

---

## 8. Stack technique

### 8.1 Reprendre le stack du réseau à l'identique

Le réseau EXP Capital / Rempart Financier construit ses sites sur : **TanStack
Start** (React 19, TanStack Router avec routing par fichiers, Vite 7),
**Tailwind CSS 4**, **shadcn/ui** sur base **Radix UI**, **Supabase** (auth +
DB), **Zod** + **react-hook-form**, **recharts** pour les graphiques, **bun**
comme runtime/gestionnaire de paquets (pas npm/yarn/node en direct), déploiement
**Vercel**. Reprendre ce stack pour la cohérence de maintenance du réseau, sauf
raison technique impérieuse de s'en écarter (documenter alors la décision dans
`DECISIONS.md`).

### 8.2 Conventions de routage (TanStack Start — fichiers dans `src/routes/`)

Ne pas créer `src/pages/`, `src/routes/_app/index.tsx` ou `app/layout.tsx`
(conventions Next.js/Remix, invalides ici). `index.tsx` → `/`, `users/$id.tsx` →
route dynamique, `_layout.tsx` → route de layout avec `<Outlet />`,
`__root.tsx` → coquille de l'application. `routeTree.gen.ts` est
auto-généré, ne jamais l'éditer à la main.

**Piège connu à éviter absolument** : dans tout `validateSearch` (search params
d'URL typés), ne jamais convertir un nombre en chaîne (`String(v)`) — le
sérialiseur canonique de TanStack Router ré-encode une chaîne numérique en JSON
quoté, ce qui déclenche une redirection 307 sur chaque URL partagée. Garder le
passthrough `string | number`, convertir en chaîne uniquement dans le composant,
juste avant la désérialisation.

### 8.3 Moteur du simulateur — réutilisation architecturale

Porter l'architecture `src/lib/simulateur-placements/` telle quelle
(`hypotheses.ts`, `contrats.ts`, `fonds.ts`, `profils.ts`, `fiscalite.ts`,
`engine.ts`, `share.ts` + tests `bun test`) — c'est un moteur de calcul
fiscal/financier français, **indépendant** du filtre halal ou éthique appliqué
aux fonds. Seuls `fonds.ts` (registre des supports) et `profils.ts`
(portefeuilles types) doivent changer de contenu : des supports labellisés
ISR/SFDR Article 8-9 plutôt que des supports halal-screenés.

Règles produit à reproduire à l'identique (non négociables, elles protègent le
cabinet d'un risque réglementaire réel) :

- **Deux couches jamais confondues** : le calculateur générique
  (`/outils/simulateur`) n'affiche jamais de fonds nommé, hypothèses librement
  éditables ("couche information"). La fiche allocation
  (`/outils/portefeuilles-types`) présente des fonds réels **toujours** comme un
  « exemple de portefeuille type », jamais comme une recommandation
  personnalisée — même si le visiteur a répondu à un quiz de profil.
- Reprendre l'esprit exact de l'avertissement verrouillé (adapter le texte, garder
  la fonction) :

  > « Exemple de portefeuille type, présenté à titre d'illustration : ce n'est
  > pas une recommandation personnalisée. L'allocation adaptée à votre situation
  > ne peut être établie qu'avec un conseiller, après étude de votre profil.
  > Performances issues d'un backtest de l'allocation, non contractuelles : les
  > performances passées ne préjugent pas des performances futures. Le document
  > d'informations clés (DIC) de chaque support prime sur les informations
  > affichées ici. »

- Tant qu'un fonds ISR réel n'est pas confirmé par le cabinet, le champ reste
  `null`/statut `"À VALIDER"` — ne jamais inventer un ISIN, une performance ou un
  SRI plausible. Créer un fichier `docs/donnees-fonds-mise-a-jour.md` listant
  précisément ce qui manque (liste des fonds ISR disponibles dans les contrats
  Vie Plus/Version Absolue 2, fiche de backtest des portefeuilles types,
  confirmation de la grille de frais si elle diffère du §2.4).
- Hypothèses fiscales (`hypotheses.ts`) : le droit fiscal français (PS
  17,2 %/18,6 %, PFU 12,8 %, abattements 4 600/9 200 €, seuil 150 000 €
  apprécié par assuré) est identique quel que soit le filtre halal/éthique —
  reprendre ces valeurs, les vérifier par recherche web pour le millésime en
  cours avant publication.

### 8.4 Espace client (`/espace/*`) — répliquer l'architecture, pas l'échec

La référence a une architecture solide (machine à états, trigger SQL
`enforce_dossier_transition` interdisant d'atteindre `signature_en_cours` ou
`finalise` sans recommandation humaine préalable, wizard avec esquisse
d'allocation) — réplique-la fidèlement dans le nouveau schéma Supabase. En
revanche, **ne réplique pas** l'erreur connue du site de référence : son projet
Supabase (`dhfxqtwhyavvwwxmiknc.supabase.co`) n'existe plus (NXDOMAIN confirmé
en production), ce qui bloque tout l'espace client depuis des semaines. Voir
§10 : tu ne peux pas provisionner de projet Supabase toi-même — écris tout le
code, le schéma et les migrations, mais ne présente jamais cette fonctionnalité
comme opérationnelle tant que la connectivité n'est pas vérifiée. Séquence le
travail pour que le site marketing + outils soit 100 % complet et démontrable
indépendamment de cette fonctionnalité (voir plan de phases, §12).

### 8.5 Hygiène technique

Contrairement au dépôt de référence (qui porte une dette `tsc`/lint
préexistante), ce dépôt démarre neuf : garder `tsc --noEmit` et le lint propres
dès le premier commit. Pages avec `head: () => ({ meta: [...], links: [{ rel:
"canonical", ... }] })` sur chaque route (SEO), `sitemap.xml` et `robots.txt`,
JSON-LD `FAQPage` sur les pages à forte densité de questions (`/tarifs`,
`/questions`), attributs d'accessibilité (`role`, `aria-label`) sur les
composants interactifs (bannière cookies, accordéons).

---

## 9. Réutilisation d'actifs réels

### 9.1 Mentions légales — texte canonique à adapter (changer uniquement le nom de domaine et le contexte thématique, jamais les faits juridiques)

```
Éditeur du site
Placement-ethique.fr est édité par EXP Capital, SASU au capital de 1 000 €,
immatriculée au RCS de Versailles sous le n° 987 986 247, inscrite à l'ORIAS
sous le n° 25005915 (www.orias.fr).

Directeur de la publication : Alexandre Pollet.
Contact : contact@placement-ethique.fr · [téléphone — cf. §10, à confirmer avec le cabinet]

Détail de notre rémunération (rétrocessions, grille par produit) : page Tarifs & transparence.

Réclamations et médiation
Toute réclamation peut être adressée à contact@placement-ethique.fr. Nous en
accusons réception sous 10 jours ouvrables et y répondons sous 2 mois au plus.
En l'absence de résolution amiable, vous pouvez saisir le médiateur compétent
selon la nature du produit concerné : La Médiation de l'Assurance
(www.mediation-assurance.org) ou le médiateur de l'AMF (www.amf-france.org,
rubrique « Le médiateur »).

Hébergement
Site hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA
94104, États-Unis (vercel.com). Données applicatives et espace client hébergés
par Supabase (projet localisé dans l'Union européenne).

Avertissement et propriété intellectuelle
Les contenus publiés sur ce site ont une vocation exclusivement informative et
éducative. Ils ne constituent pas un conseil en investissement financier au
sens de la réglementation AMF. Tout investissement comporte un risque de perte
en capital. Les performances passées ne préjugent pas des performances futures.
L'ensemble des contenus de ce site (textes, simulateurs, identité visuelle) est
la propriété de son éditeur. Le traitement de vos données personnelles est
décrit dans notre politique de confidentialité.
```

Siège social : afficher `[Siège social EXP Capital — à compléter]` (voir §2.2).

### 9.2 Footer canonique — identique sur les 14 sites du réseau, ne pas modifier le fond

```
© {année} Placement-ethique.fr · Mentions légales · Confidentialité · Gérer les cookies

Site édité par EXP Capital (SASU, RCS Versailles 987 986 247, ORIAS n° 25005915 —
www.orias.fr). Les contenus de ce site sont fournis à titre informatif et
éducatif uniquement. Ils ne constituent pas un conseil en investissement. Tout
investissement comporte un risque de perte en capital.
```

### 9.3 Politique de confidentialité et cookies — structure à reprendre

Trois circuits de données distincts (reprendre la structure, adapter les
libellés) : (1) simulateurs/formulaires avant tout compte — email, résultats,
série pédagogique de 3 emails, newsletter opt-in jamais pré-cochée ; (2) espace
client — coordonnées, projet, situation patrimoniale déclarée par tranches,
pistes de placement et esquisse d'allocation ; (3) pièces justificatives — sur
consentement dédié uniquement. Durées de conservation : 3 ans pour les
prospects après dernier contact, 5 ans minimum après la fin de relation pour les
dossiers ayant conduit à souscription (obligations d'intermédiaire financier).
Sous-traitants à citer si le stack est repris à l'identique : Supabase (UE),
Brevo (emails), iClosed (prise de rendez-vous), Vercel (hébergement), Google Tag
Manager (mesure d'audience). Clause obligatoire : aucune décision entièrement
automatisée (art. 22 RGPD) — les simulateurs sont indicatifs, toute proposition
est formalisée par un conseiller après échange de vive voix.

**Bannière cookies** : reproduire exactement le comportement CNIL-compliant de
référence — bannière affichée dès la première visite, **avant** tout chargement
de Google Tag Manager, bouton « Continuer sans accepter » aussi visible et
simple que « Accepter », choix conservé 13 mois (localStorage) puis redemandé,
modifiable à tout moment via un lien « Gérer les cookies » au footer. Nouveau
conteneur GTM à créer (voir §10 — dépendance humaine), nouvelle clé de stockage
(ex. `pe-consent-traceurs` sur le modèle de `ph-consent-traceurs`).

### 9.4 Page `/a-propos` — trame à reprendre, contenu à adapter

Structure de référence à répliquer : (1) section « Qui sommes-nous » avec les
deux photos/bios ; (2) section origine du cabinet + encadré d'humilité assumée
(adapter le texte religieux en équivalent ESG : *« nous ne prétendons pas
détenir une vérité définitive sur ce qui est "vraiment" éthique »*) ; (3)
section « Nos valeurs » (§3.2) ; (4) section « Éclairer d'abord, vendre jamais »
; (5) section rémunération (reprendre quasiment mot pour mot, c'est un fait
identique — voir §2.3) ; (6) section « Réseau EXP Capital » expliquant la
structure juridique, sur ce modèle exact (adapter uniquement le nom du site) :

> « [Placement-ethique.fr] est notre identité et notre philosophie de conseil.
> EXP Capital (SASU au capital de 1 000 €, RCS Versailles 987 986 247) est
> l'entité qui édite ce site : elle est inscrite à l'ORIAS sous le n° 25005915
> (www.orias.fr) et nous fournit le cadre et les outils sécurisés pour exercer
> notre métier. Les contenus de ce site sont informatifs et éducatifs : ils ne
> constituent pas un conseil en investissement. Tout ce qui touche à votre
> situation personnelle se décide de vive voix, avec votre conseiller — jamais
> depuis une page web. »

Bios réelles à conserver (noms, rôles, LinkedIn — faits réels, ne pas altérer ;
reformuler uniquement la phrase de motivation pour refléter le sujet éthique
plutôt que halal) :

- **Sébastien Petrisot** — Responsable relations investisseurs.
  LinkedIn : `linkedin.com/in/sébastien-pétrisot-a94832111`
- **Alexandre Pollet** — Communication, contenu et partenariats.
  LinkedIn : `linkedin.com/in/alexandre-pollet-98704ba1`

Photos : le site de référence utilise `/sebastien.jpeg` et `/alexandre.jpg`
avec repli automatique sur `ui-avatars.com` si l'image est absente
(`onError`). Ce sont les **mêmes personnes réelles** : demander à l'humain de
copier ces deux fichiers depuis le dépôt placement-halal (voir §10). En
attendant, reproduire exactement le même mécanisme de repli gracieux — ne
jamais laisser une image cassée, ne jamais générer de fausse photo.

### 9.5 Page `/tarifs` — voir §6.4 pour le contenu, §2.3/2.4 pour les chiffres

---

## 10. Ce que l'agent ne peut pas faire seul

Liste exhaustive des actions qui nécessitent une identité humaine, un moyen de
paiement, ou une autorité de signature — **aucune ne doit bloquer le reste du
travail**. Construis tout ce qui en dépend comme si ces éléments allaient être
fournis (variables d'environnement, points d'intégration documentés), et liste
clairement ce qui reste dans un fichier `GO-LIVE-CHECKLIST.md` à la racine :

1. **Nom de domaine et DNS** — achat de `placement-ethique.fr` et configuration
   DNS. Déployer vers une URL de preview (Vercel) et documenter les
   enregistrements DNS exacts nécessaires.
2. **Projet Supabase** — création du projet, configuration de l'auth email
   OTP/magic link, ajout des Redirect URLs, application des migrations SQL déjà
   écrites. Tu ne peux pas créer de compte/projet Supabase à la place de
   l'utilisateur (règle de sécurité identique à celle qui s'applique à Claude
   Code). Écris le schéma et les migrations, documente les variables d'environnement
   attendues (`SUPABASE_URL`, `SUPABASE_PROJECT_ID`, `SUPABASE_PUBLISHABLE_KEY`
   et leurs équivalents `VITE_*`), mais ne prétends jamais que l'espace client
   fonctionne avant vérification.
3. **Conteneur Google Tag Manager** dédié à ce site (nouvel ID GTM-XXXXXXX).
4. **Compte Brevo** (ou équivalent) pour l'envoi d'emails transactionnels/newsletter.
5. **Compte/sous-compte iClosed** (ou équivalent) pour la prise de rendez-vous —
   générer un lien de réservation dédié à ce site (ne pas réutiliser tel quel
   l'URL `EpargnePlurielleAJ` de la référence, qui pointe vers un autre compte du
   réseau).
6. **Boîte email** `contact@placement-ethique.fr` fonctionnelle.
7. **Numéro de téléphone** — confirmer avec le cabinet s'il faut mutualiser
   l'accueil téléphonique existant du réseau ou provisionner une ligne dédiée.
8. **Photos réelles** de Sébastien Petrisot et Alexandre Pollet (copie des
   fichiers existants ou nouvelles photos) — repli `ui-avatars.com` en attendant.
9. **Relecture légale finale** — par convention du réseau (mentions légales
   validées par « Fabienne » avant toute mise en production sur les 14 sites du
   réseau EXP Capital). Non bloquant pour terminer la construction : les
   mentions de ce document reprennent des faits juridiques déjà validés
   ailleurs dans le réseau, mais une relecture finale reste recommandée avant
   l'ouverture au public.
10. **Adresse du siège social EXP Capital** — inconnue y compris de la source
    interne du réseau à ce jour ; ne pas inventer, laisser le placeholder.

---

## 11. Protocole d'autonomie totale

Quand tu rencontres une décision ambiguë (nom exact, formulation, choix créatif,
arbitrage technique), applique cette hiérarchie, dans l'ordre, puis tranche et
continue — ne t'arrête jamais pour demander :

1. **Le conservatisme réglementaire l'emporte sur l'audace marketing.** En cas
   de doute sur une formulation, choisis la plus prudente/conforme.
2. **Un fait sourcé et vérifiable l'emporte sur un détail inventé.** Si une
   donnée ne peut être vérifiée (adresse, ISIN, chiffre, date), affiche un
   placeholder explicite plutôt qu'une valeur plausible.
3. **La cohérence avec les faits fixes (section 2) l'emporte sur toute
   invention créative.** Les personnes, l'entité juridique, le modèle
   économique ne se réinventent pas.
4. **Entre deux directions créatives également valables, choisis celle qui
   renforce le positionnement de transparence radicale anti-greenwashing**
   (section 3).
5. **Livrer complet plutôt que bloqué.** Si une fonctionnalité dépend d'une
   ressource listée en section 10, construis-la entièrement, documente la
   dépendance, et continue — ne laisse jamais le reste du travail en attente
   d'une hypothétique réponse humaine.

Documente chaque décision non triviale dans `DECISIONS.md` (une ligne : quoi,
pourquoi) — c'est la façon dont un humain pourra suivre ton raisonnement a
posteriori, pas une invitation à t'arrêter pour validation.

---

## 12. Plan d'exécution

Ordre suggéré (adapte librement si un ordre différent est plus efficace, mais ne
saute aucune étape) :

- **Phase 0 — Fondations** : nouveau dépôt git, scaffold TanStack Start + bun +
  Tailwind 4, structure de dossiers miroir de la référence (`src/routes`,
  `src/components`, `src/lib`, `src/content`), `DECISIONS.md` et
  `GO-LIVE-CHECKLIST.md` initialisés.
- **Phase 1 — Marque & design system** : palette, typographies, tokens oklch,
  classes utilitaires, logo/mark simple (SVG), `styles.css`.
- **Phase 2 — Architecture & pages cœur** : layout (`SiteHeader`, `SiteFooter`,
  `SiteLayout`, `PageHero`, `CTA`, `CookieConsent`), toutes les pages marketing
  (accueil, à-propos, contact, tarifs, questions, placements, enveloppes,
  objectifs), mentions légales/confidentialité.
- **Phase 3 — Contenu** : les 30-35 articles en intégralité, hub + détail.
- **Phase 4 — Outils interactifs** : port du moteur `simulateur-placements`,
  les 10-12 outils, le hub `/outils` avec guidage en 2 questions.
- **Phase 5 — Espace client** : schéma Supabase, migrations, wizard, machine à
  états — code complet mais explicitement non branché en production tant que
  la Phase 10 (dépendances humaines) n'est pas résolue.
- **Phase 6 — QA finale** : `tsc --noEmit` propre, lint propre, tests
  `bun test` sur le moteur de simulation, vérification SEO (sitemap, meta,
  canonical, JSON-LD), vérification accessibilité, build de production qui
  passe, déploiement sur une URL de preview.

**Définition du "terminé"** : un visiteur peut parcourir l'intégralité du site,
utiliser chaque outil jusqu'à un résultat cohérent, lire chaque article dans sa
version finale (pas d'ébauche), le build de production réussit sans erreur, et
`GO-LIVE-CHECKLIST.md` liste précisément et uniquement les actions humaines
listées en section 10 — rien d'autre ne doit y figurer.
