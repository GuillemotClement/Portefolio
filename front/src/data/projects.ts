export const projects = [
  {
    id: 1,
    title: "Ubrun",
    status: ["prod", "dev", "perso"],
    technos: ["nextjs", "postgresql", "tailwind"],
    description:
      "Application permettant de centraliser différents outils d'entraînement pour les coureurs.",
    reason:
      "Je voulais regrouper les outils que j'utilisais pour préparer mes entraînements de course à pied.",
    features: [
      "Calculs et conversions pour l'entraînement",
      "Planification et suivi des objectifs de course",
      "Suivi de performances",
    ],
    github: "https://github.com/GuillemotClement/Ubrun",
    image: "/images/ubrun.png",
    link: "",
  },
  {
    id: 2,
    title: "BlaBlaBook",
    status: ["finish", "pedagogique"],
    technos: ["react", "postgresql", "nestjs", "tailwind"],
    description:
      "Projet pédagogique réalisé durant ma formation CDA permettant la gestion d'une bibliothèque personnelle et le suivi des lectures.",
    reason:
      "Projet présenté lors de ma soutenance pour le titre professionnel CDA réalisé en équipe",
    features: [
      "Recherche et découverte de livre",
      "Organisation et suivi des lectures",
    ],
    github: "https://github.com/GuillemotClement/Blablabook",
    image: "/images/blablabook.png",
    link: "",
  },
  {
    id: 3,
    title: "Pomogo",
    status: ["dev", "perso"],
    technos: ["go"],
    description:
      "Outil CLI développé en Go pour gérer des sessions de travail de type Pomodoro.",
    reason:
      "Je cherchais un outil de concentration directement accessible depuis le terminal.",
    features: [
      "Gestion des tâches",
      "Suivi statistique des sessions de travail",
      "Lecture d'ambiances sonores pour la concentration",
    ],
    github: "https://github.com/GuillemotClement/pomogo",
    image: "/images/pomogo.png",
    link: "",
  },
  {
    id: 4,
    title: "Katbrain",
    status: ["prod", "perso"],
    technos: ["hugo"],
    description:
      "Base de connaissances personnelle construite à partir de fichiers Markdown.",
    reason:
      "Je voulais conserver mes notes dans un format simple, portable et indépendant d'une plateforme tierce.",
    features: [
      "Centralisation de notes techniques",
      "Versionnement avec Git",
      "Publication automatisée via Coolify",
    ],
    github: "https://github.com/GuillemotClement/engineering-handbook",
    image: "/images/mkdoc.png",
    link: "",
  },
];
