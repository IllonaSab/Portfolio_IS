interface TechCategory {
  title: string;
  skills: string[];
}

const techStack: TechCategory[] = [
  {
    title: "Front-end",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Next.js",
      "Figma",
      "Sass",
    ],
  },
  {
    title: "Back-end et Données",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "API REST",
    ],
  },
  {
    title: "DevOps et Outils",
    skills: ["GitHub", "Vercel", "Render", "Postman"],
  },
  {
    title: "Intégrations",
    skills: ["API Mistral", "OAuth", "Stripe"],
  },
];

export function TechStack() {
  return (
    <section id="techniques" className="scroll-mt-20 w-full border-t border-[#A3483E]/40">
      <div className="max-w-[1188px] mx-auto px-[6px] py-[50px] flex flex-col items-center gap-[60px]">
        {/* En-tête */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A3483E]">
            Stack technique
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#5C3636] mt-3 tracking-tight">
            Technologies et Écosystème
          </h2>
        </div>

        {/* Liste des catégories */}
        <div className="flex flex-col gap-6 w-full">
          {techStack.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl border border-[#E3B89B]/40 p-6 sm:p-7 shadow-[0_2px_15px_rgba(0,0,0,0.02)]"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#5C3636] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#E3B89B]/20 text-[#5C3636]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}