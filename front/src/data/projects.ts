import type { Project } from "@/types/types";

// Les projets s'affichent dans l'ordre de ce tableau.
// `illustration` : dessin SVG défini dans components/Project/ProjectIllustration.astro
export const projects: Project[] = [
  {
    title: "Ubrun",
    status: ["prod", "perso"],
    technos: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    description:
      "Application qui centralise différents outils d'entraînement pour les coureurs.",
    reason:
      "Je voulais regrouper les outils que j'utilisais pour préparer mes entraînements de course à pied.",
    features: ["Calculs et conversions pour l'entraînement"],
    github: "https://github.com/GuillemotClement/Ubrun",
    url: "https://ubrun.fr/",
    illustration: "running",
  },
  {
    title: "Projets clients Evode",
    status: ["alternance"],
    technos: ["PHP", "Framework interne", "SQL", "MySQL", "jQuery"],
    description:
      "Évolution et maintenance d'applications métier de type ERP pour plusieurs clients d'Evode, pendant mes deux ans d'alternance.",
    reason:
      "Passer d'un projet client à l'autre, comprendre chaque métier avec ses utilisateurs et livrer des évolutions en production sans casser l'existant.",
    themes: [
      "Facturation électronique : intégration d'API et traitement des factures",
      "Facturation, relances et encaissements",
      "Location et suivi de matériel",
      "Modélisation des contrôles périodiques récurrents",
      "Planification des interventions et suivi de chantier",
    ],
    linkNote: "Projet d'entreprise : code privé et confidentiel",
    illustration: "erp",
  },
  {
    title: "BlaBlaBook",
    status: ["finish", "pedagogique"],
    technos: ["React", "NestJS", "PostgreSQL", "Tailwind CSS", "Jest", "Vitest"],
    description:
      "Gestion d'une bibliothèque personnelle et suivi des lectures, réalisé en équipe pendant ma formation CDA.",
    reason:
      "Projet présenté lors de ma soutenance pour le titre professionnel CDA.",
    features: [
      "Recherche et découverte de livres",
      "Organisation et suivi des lectures",
      "Tests unitaires et e2e : Jest côté API, Vitest et Testing Library côté front",
      "Tests lancés automatiquement en CI avec GitHub Actions",
    ],
    github: "https://github.com/GuillemotClement/Blablabook",
    url: "https://blablabook.clementguillemot.fr/",
    illustration: "books",
  },
  {
    title: "Korrweb Dashboard",
    status: ["dev", "prive"],
    technos: ["React", "NestJS", "Express", "PostgreSQL", "Drizzle"],
    description:
      "ERP pour mon activité Korrweb : gestion des tâches par projet, facturation et administration d'un relais d'emails.",
    reason:
      "Un outil métier découpé en services : le dashboard d'un côté, et un micro-service d'envoi d'emails partagé par mes différentes applications.",
    features: [
      "Front React (Vite, TanStack Query, shadcn/ui) et API NestJS",
      "Micro-service Express d'envoi d'emails via l'API Brevo, utilisé par mes sites",
      "Accès au micro-service sécurisé par clé d'API, une clé par application, stockées en PostgreSQL avec Drizzle",
      "Tâches par projet et factures (à venir)",
    ],
    illustration: "dashboard",
  },
  {
    title: "Alfred",
    status: ["dev", "perso"],
    technos: ["Angular", "Spring Boot", "Java", "Tailwind CSS"],
    description:
      "Application de gestion de foyer : inventaire, dépenses, événements, projets et budgets, partagés entre les membres d'un même foyer.",
    reason:
      "Un projet pour apprendre Angular et Spring Boot en construisant une application complète, avec une architecture organisée par domaine métier.",
    features: [
      "Foyer partagé entre plusieurs utilisateurs",
      "Inventaire des articles, suivi des dépenses et des événements",
      "API Spring Boot avec Spring Security, JPA et migrations Flyway",
    ],
    github: "https://codeberg.org/ClementGuillemot/Alfred",
    illustration: "home",
  },
  {
    title: "Resonance",
    status: ["dev", "perso"],
    technos: ["ESP32", "C++", "Arduino", "PlatformIO"],
    description:
      "Rénovation d'un ancien poste radio TSF : son électronique est remplacée par un ESP32, en gardant son apparence et son haut-parleur d'origine.",
    reason:
      "Redonner vie à un objet ancien, et sortir du web pour toucher à l'embarqué.",
    features: [
      "Écoute de musique en Bluetooth",
      "Réception de la radio FM (à venir)",
      "Réutilisation des composants d'origine du poste",
    ],
    github: "https://codeberg.org/ClementGuillemot/Resonance",
    illustration: "radio",
  },
];
