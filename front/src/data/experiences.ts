import type { Experience } from "@/types/types";

// De la plus récente à la plus ancienne
export const experiences: Experience[] = [
  {
    title: "Développeur full-stack (alternance)",
    enterprise: "Evode",
    date: "Sept. 2024 – Juin 2026",
    city: "Lorgues, Var",
    tasks: [
      "Développement et maintenance d'applications métier de type ERP pour plusieurs clients, en PHP avec le framework interne de l'entreprise (SQL, jQuery)",
      "Travail sur les API de facturation électronique et le traitement des factures, en vue de leur intégration",
      "Conception de modèles de données, dont la gestion de contrôles périodiques récurrents",
      "Évolutions sur la facturation, la location de matériel et la planification d'interventions",
      "Traitement des demandes clients par tickets, de l'analyse à la mise en production",
    ],
  },
  {
    title: "Développeur full-stack (stage)",
    enterprise: "Creamania Communication",
    date: "Mars 2024 – Mai 2024",
    city: "Fréjus, Var",
    isPivot: true,
    tasks: [
      "Réalisation de sites vitrines pour plusieurs clients avec la solution no-code interne de l'agence",
      "Développement du site d'une association entièrement en Symfony (PHP), un choix technique appuyé sur ma formation",
      "Recueil des besoins directement auprès des clients et proposition de solutions",
      "Gestion des projets confiés en autonomie",
    ],
  },
  {
    title: "Technicien de maintenance aéronautique",
    enterprise: "Armée de Terre",
    date: "Mars 2016 – Août 2023",
    city: "Le Cannet-des-Maures, Var",
    tasks: [
      "Diagnostic et maintenance des systèmes avioniques et d'armement de l'hélicoptère Tigre (EC665)",
      "Analyse et résolution de pannes sur des systèmes complexes, où la fiabilité est critique",
      "Application stricte des procédures et tenue de la documentation technique",
      "Encadrement d'équipe (sergent), coordination et priorisation des opérations de maintenance",
    ],
  },
];
