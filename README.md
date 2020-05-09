# gz monorepo

### Faire tourner la librairie @gz-studio/components

TL;DR : après un yarn add ou yarn remove - pas encore décelé lequel des deux perturbe le hoisting

exécuter `yarn clean && yarn` depuis la racine

---

@gz-studio/components est la librarie de composants primitives : rien n'est hardcodé - ou presque - afin de pouvoir la réutiliser dans des sous-domaines et autres projets.

Elle a donc des dépendences, en l'occurence react, styled-components, etc. qui sont fournies par le consommateur de @gz-studio/components.

styled-components est la librairie CSS-in-JS qui facilite l'intégration des styles de façon générale, et dans le cas qui nous intéresse, du thème de l'app consommatrice.

Afin d'opérer correctement, styled-components a besoin que sa version consommée soit la même pour @gz-studio/components et l'app consommatrice (@gz-studio/gatsby).

En temps normal, pas de problème : styled-components est listée en peerDependencies de @gz-studio/components, ce qui indique à yarn/npm "utilise la version de @gz-studio/gatsby"

Or, strapi utilise aussi styled-components et ses versions sont hoistées au plus haut niveau selon le schéma suivant :

```
# root/node_modules
|_@gz-studio/gatsby
    |_ styled-components@la version qu'on veut pour le front-end
|_styled-components@la version pas cool de strapi
```

Ainsi lors du bundle et la résolution des modules, @gz-studio/gatsby utilise sa propre version bien listée et @gz-studio/components utilise la version hoistée au plus haut niveau : celle de strapi !

<b>Solution : indiquer styled-components@laBonneVersionFrontEnd dans le root package afin qu'elle soit hoistée au plus haut niveau - chose qui est faite
</b>

On force ainsi le hoisting des dépendences de strapi dans son propre package :

```
# root/node_modules
|_@gz-studio/gatsby
    |_ styled-components@la version qu'on veut pour le front-end
  strapi
    |_styled-components@strapi n'étale pas ses dép partout
|_styled-components@la version qu'on veut pour le front-end
```

<b>Caveat</b>

Un yarn add ou yarn remove perturbe le hoisting, et on revient au bug de départ : 2 versions différentes de styled-components qui tournent en front-end, et le thème n'est ansi pas transmis a @gz-studio/components qui en a besoin pour rendre ses composants dans le bundle de @gz-studio/gatsby

Pas encore décelé laquelle des deux commandes est coupable

exécuter `yarn clean && yarn` ou `yarn clean && yarn --force` depuis la racine résout le problème

---
