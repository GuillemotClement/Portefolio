# Maquettes du portfolio

Direction : ivoire #f6f5f1, texte #181923, indigo #4f5fe0. Titres Space Grotesk, texte Hanken Grotesk, repères JetBrains Mono. Les polices et les couleurs principales existent déjà dans le projet.

Les sept JPG sont des propositions desktop, pas des captures du site implémenté. Les textes se basent sur les composants et les fichiers front/src/data ; les données réellement affichées viennent de PocketBase et doivent être vérifiées lors de l’intégration. Les aperçus des projets sont illustratifs : utiliser les véritables captures du projet pour la version publiée.

## Code à implémenter

Aucun code applicatif n’a été modifié.

- global.css : harmoniser les conteneurs avec max-w-[1200px] mx-auto px-6 lg:px-10 ; sections py-20 lg:py-28 ; titres text-4xl lg:text-6xl ; texte confortable et bordures discrètes. Éviter de cumuler my-15 et les espacements verticaux de section.
- Header.astro et Hero.astro : navigation compacte avec menu mobile accessible ; grille lg:grid-cols-2, titre text-5xl lg:text-7xl, deux liens d’action. Prévoir une illustration décorative séparée de la maquette, avec texte HTML et alt vide si elle ne porte aucune information essentielle.
- About.astro : grille md:grid-cols-3, titre sur une colonne, récit sur deux ; trois qualités présentées sous le texte. Conserver la distinction entre expérience acquise et apprentissage.
- Experience.astro / ExperienceCard.astro : liste chronologique, grille md:grid-cols-[180px_1fr], dates à gauche et contenu à droite ; filet vertical et points décoratifs. Sur mobile, dates au-dessus du contenu.
- School.astro / SchoolCard.astro : mettre les deux formations récentes en avant dans une grille md:grid-cols-2, puis afficher les quatre précédentes en lignes compactes. Conserver tous les éléments accessibles sur mobile.
- Skill.astro / SkillCol.astro / SkillItem.astro : conserver les groupes PocketBase et isVisible ; cartes md:grid-cols-3, technologies sous forme de badges. Pour distinguer l’apprentissage, prévoir un champ explicite dans les données plutôt que de déduire un niveau de maîtrise.
- Project.astro / ProjectCard.astro : grille md:grid-cols-2, image aspect-video object-cover, titre, courte description, technologies et lien GitHub. Réutiliser les images existantes ou celles stockées dans PocketBase. Conserver les détails utiles via un développement accessible si la carte devient trop longue.
- Contact.astro / Footer.astro : deux colonnes lg:grid-cols-2, champs et labels visibles, bouton principal clair ; footer sombre. Prévoir les états envoi, succès et erreur avec annonce aria-live et restauration du bouton après erreur. Corriger le honeypot existant : display: node est invalide et le sélecteur input[name="website" doit être fermé ; ces points sont observés dans le code actuel, sans correction effectuée.

## Comportement responsive et accessibilité

Sous 768px : une seule colonne, titre réduit, cartes empilées, liens et boutons faciles à toucher. Vérifier la navigation clavier, les focus visibles, les contrastes et prefers-reduced-motion. Les légendes et contenus doivent rester du vrai HTML ; ne pas afficher les JPG comme interface du site.

## Génération

Outil intégré imagegen, sept générations distinctes de type ui-mockup. Prompts : voir prompts.json. Les PNG originaux restent dans le dossier de génération ; les JPG de livraison se trouvent ici.
