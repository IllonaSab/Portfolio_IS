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
      "PostgreSQL",
      "Prisma ORM",
      "Mistral AI API",
      "Stripe",
      "OAuth",
      "GitHub Actions",
    ],
    link: "https://github.com/IllonaSab/Healis.git",
  },
  {
    id: "marketium",
    title: "Marketium",
    description: "Site web connecté à un CMS headless.",
    image: "/marketium.svg",
    tags: ["Angular", "GraphQL", "Strapi"],
    link: "https://github.com/IllonaSab/Marketium.git",
  },
  {
    id: "ticketingtool",
    title: "Ticketing Tool",
    description: "Application de gestion de tickets",
    image: "/ticketingtool.svg",
    tags: ["Next.js", "React", "TypeScript", "Strapi", "SQLite", "JWT"],
    link: "https://github.com/IllonaSab/TicketingTool.git",
  },
  {
    id: "streaming",
    title: "StreamingDashboard",
    description:
      "Dashboard analytique affichant 4 blocs de données indépendants : (utilisateurs, posts, todos, commentaires)",
    image: "streamingdashboard.svg",
    tags: [
      "Next.js",
      "Next.js ",
      "TypeScript",
      "JSONPlaceholder",
      "Tailwind CSS",
    ],
    link: "https://github.com/IllonaSab/StreamingDashboard.git",
  },
];
