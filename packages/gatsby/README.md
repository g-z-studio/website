<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  gz-studio/gatsby
</h1>

(peut-être à renommer en @gz-studio/www par souci de clarté)

## Repo

---

```
 src
  |_ components // composants custom & layout *partagés* entre les différentes pages/scènes
  |_ globals // thème
  |_ pages // les pages routées par gatsby
  |_ scenes // les sous composants construisant chaque page
  |_ static // images, icones, fonts, etc.
```

Le reste des composants primitives dans @gz-studio/components

---

## TODO

- --- Bouger les assets images + fonts dans ./static ---
- Bug animation Navigator > reset de l'anim si update du state rapide > solution ? cf https://www.react-spring.io/docs/hooks/use-spring
- placer la logique de Box dans un HOC plutot qu'un composant >> Pareil pour Grid ? spacingCase() pourra accéder au contexte du thème
