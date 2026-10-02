# Photos produits transparentes

Les originaux sont conservés dans `src/assets/produit-img/`.
Les versions utilisées par le site sont dans `src/assets/produit-img/transparent/`.

Le détourage est effectué localement avec rembg / IS-Net : seules les valeurs
alpha sont modifiées. Les dimensions, les couleurs RGB, les logos et le cadrage
restent ceux de la photo d'origine. Les images déjà transparentes sont conservées.
Quatre prises de vue avec des personnes et le tapis utilisent U2NetP après contrôle visuel.
Deux corrections de masque conservent l'opacité du débardeur et l'avant-bras
dans la photo des gants ; elles ne modifient aucun pixel RGB.
Le modèle est téléchargé au premier lancement ; les photos ne sont pas envoyées
à un service externe. Aucun outil Python n'est nécessaire pour lancer le site.

## Reproduire le traitement

Avec Python 3.12, créer un environnement virtuel puis installer
`scripts/requirements-cutout.txt`. Exécuter :

```text
python scripts/cutout-products.py
python scripts/cutout-products.py --names nouvelle-photo.png
python scripts/cutout-products.py --review-only
```

Les sorties existantes sont ignorées, sauf avec `--force`. Le cache du modèle,
l'environnement `.venv-cutout` et les planches de contrôle sont exclus de Git.
`output/cutout-review/validation.json` contrôle les dimensions, l'identité des
pixels RGB et la présence de transparence. Les planches avant/après permettent
de vérifier les contours sur un fond contrastant avant intégration.

Pour une nouvelle photo, utiliser sa version dans `transparent/` dans les imports
du catalogue ou des composants. Ne pas ajouter de mode de fusion `multiply` :
il teinterait le produit au lieu de supprimer son fond.
