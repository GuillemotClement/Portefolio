import type { SkillGroup } from "@/types/types";

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}`;

// Technos maîtrisées, alignées sur les stacks PHP / JS recherchées.
// `logo` est facultatif (ex. SQL n'a pas d'icône Devicon dédiée).
// Ajoute `isLearning: true` sur une techno pour l'afficher « en cours »
export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    skills: [
      {
        title: "JavaScript",
        logo: devicon("javascript/javascript-original.svg"),
      },
      {
        title: "TypeScript",
        logo: devicon("typescript/typescript-original.svg"),
      },
      { title: "React", logo: devicon("react/react-original.svg") },
      { title: "HTML / CSS", logo: devicon("html5/html5-original.svg") },
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
      { title: "Symfony", logo: devicon("symfony/symfony-original.svg") },
      { title: "Node.js", logo: devicon("nodejs/nodejs-original.svg") },
      { title: "NestJS", logo: devicon("nestjs/nestjs-original.svg") },
      { title: "SQL" },
      { title: "MySQL", logo: devicon("mysql/mysql-original.svg") },
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
      { title: "Linux", logo: devicon("linux/linux-original.svg") },
      { title: "Docker", logo: devicon("docker/docker-original.svg") },
      {
        title: "GitHub Actions",
        logo: devicon("githubactions/githubactions-original.svg"),
      },
      { title: "Jest / Vitest", logo: devicon("jest/jest-plain.svg") },
    ],
  },
];
