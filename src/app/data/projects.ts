export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "healis",
    title: "Healis",
    description: "Application mobile de suivi santé TCA.",
    image: "/healis.svg",
    tags: [
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "API Mistral",
    ],
    link: "https://github.com/IllonaSab/Healis.git",
  },
  {
    id: "marketium",
    title: "Marketium",
    description: "Site web connecté à un CMS headless.",
    image: "/marketium.svg",
    tags: ["Angular", "GraphQL", "Strapi V5"],
    link: "https://github.com/IllonaSab/Marketium.git",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Conception UI sur Figma et développement complet sous Next.js & Tailwind CSS avec design system sur-mesure.",
    image: "/logo.svg",
    tags: ["React", "Next", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://github.com/IllonaSab/Portfolio_IS.git",
  },
  {
    id: "streaming",
    title: "StreamingDashboard",
    description:
      "Dashboard analytique affichant 4 blocs de données indépendants : (utilisateurs, posts, todos, commentaires)",
    image: "streamingdashboard.svg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/IllonaSab/StreamingDashboard.git",
  },
];
