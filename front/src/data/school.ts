import type { School } from "@/types/types";

// De la plus récente à la plus ancienne.
// `featured: true` → grande carte ; sinon ligne compacte.
export const schools: School[] = [
  {
    title: "Concepteur Développeur d'Applications",
    subtitle: "Titre professionnel · O'clock",
    level: "Bac+3/4",
    city: "Fréjus, Var",
    date: "Oct. 2024 – Juin 2026",
    featured: true,
    skills: ["React", "NestJS", "Docker", "GitHub Actions"],
  },
  {
    title: "Développeur Web et Web Mobile",
    subtitle: "Titre professionnel · AFPA",
    level: "Bac+2",
    city: "Fontenay-le-Comte, Vendée",
    date: "Oct. 2023 – Juin 2024",
    featured: true,
    skills: ["PHP", "HTML", "CSS", "SQL"],
  },
  {
    title: "Certificat Technique du Premier Degré",
    subtitle: "Maintenance aéronautique, avionique et armement",
    city: "Rochefort",
    date: "2016 – 2018",
  },
  {
    title: "Certificat Militaire de Premier Degré",
    subtitle: "Commandement et encadrement d'équipe (grade de sergent)",
    city: "Saint-Maixent-l'École",
    date: "2016",
  },
  {
    title: "BTS SIO SISR",
    subtitle:
      "Services informatiques aux organisations · réseaux (Cisco) et administration Linux",
    city: "Rennes",
    date: "2013 – 2015",
  },
  {
    title: "Bac Pro ELEEC",
    subtitle: "Électrotechnique, énergie, équipements communicants",
    city: "Pontivy",
    date: "2010 – 2013",
  },
];
