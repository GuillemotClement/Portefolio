// Types des données du portfolio (fichiers de src/data)

export type ProjectStatus =
  | "prod"
  | "dev"
  | "finish"
  | "perso"
  | "pedagogique"
  | "prive"
  | "alternance";

export type Project = {
  title: string;
  status: ProjectStatus[];
  technos: string[];
  description: string;
  reason?: string;
  features?: string[];
  // Grands sujets traités, affichés en clair (à la place des fonctionnalités)
  themes?: string[];
  github?: string;
  url?: string;
  // Texte affiché à la place des liens quand il n'y a ni site ni dépôt
  linkNote?: string;
  illustration: ProjectIllustrationKind;
};

export type ProjectIllustrationKind =
  | "books"
  | "running"
  | "home"
  | "radio"
  | "dashboard"
  | "erp";

export type Experience = {
  title: string;
  enterprise: string;
  date: string;
  city: string;
  tasks: string[];
  // Affiche le badge « Reconversion »
  isPivot?: boolean;
};

export type School = {
  title: string;
  subtitle: string;
  city: string;
  date: string;
  // Badge affiché sur les formations mises en avant (ex. « Bac+3/4 »)
  level?: string;
  // Formation affichée en grande carte plutôt qu'en ligne compacte
  featured?: boolean;
  // Technologies apprises pendant la formation (affichées sur les grandes cartes)
  skills?: string[];
};

export type Skill = {
  title: string;
  logo?: string;
  // Affiche le badge « en cours » et le contour citron
  isLearning?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};
