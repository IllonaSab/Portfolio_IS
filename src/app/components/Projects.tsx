import Image from "next/image";
import { projectsData } from "@/app/data/projects";

export function Projects() {
  return (
   <section id="projets" className="scroll-mt-20 w-full border-t border-[#A3483E]/40">      
   <div className="max-w-[1188px] mx-auto px-[6px] py-[50px] flex flex-col items-center gap-[60px]">
        {/* En-tête de section */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A3483E]">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#5C3636] mt-3 tracking-tight">
            Projets récents
          </h2>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-[32px] border border-[#E3B89B]/30 p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
            >
              <div>
                {/* Zone image / logo */}
                <div className="w-full h-44 flex items-center justify-center mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={280}
                    height={120}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Badges / Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1 rounded-full text-xs font-medium bg-[#E3B89B]/20 text-[#5C3636]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-[#5C3636] mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5C3636]/75 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Bouton d'action */}
              <div>
                <a
                href={project.link || "#"}
                target={project.link && project.link !== "#" ? "_blank" : undefined}
                rel={project.link && project.link !== "#" ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#5C3636] text-white text-sm font-semibold hover:bg-[#452727] transition-colors"
                >
                Voir le projet
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}