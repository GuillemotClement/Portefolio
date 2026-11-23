import type { SkillGroup } from "@/types/types";

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}`;

// Recentré sur les technos les plus utilisées.
// Ajoute `isLearning: true` sur une techno pour l'afficher « en cours »
export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    skills: [
      { title: "React", logo: devicon("react/react-original.svg") },
      {
        title: "TypeScript",
        logo: devicon("typescript/typescript-original.svg"),
      },
      {
        title: "Tailwind CSS",
        logo: devicon("tailwindcss/tailwindcss-original.svg"),
      },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { title: "PHP", logo: devicon("php/php-original.svg") },
      { title: "NestJS", logo: devicon("nestjs/nestjs-original.svg") },
      {
        title: "PostgreSQL",
        logo: devicon("postgresql/postgresql-original.svg"),
      },
    ],
  },
  {
    title: "Outils",
    skills: [
      { title: "Git", logo: devicon("git/git-original.svg") },
      { title: "Docker", logo: devicon("docker/docker-original.svg") },
      {
        title: "GitHub Actions",
        logo: devicon("githubactions/githubactions-original.svg"),
      },
    ],
  },
];
