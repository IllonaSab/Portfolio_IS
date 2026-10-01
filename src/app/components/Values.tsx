import Image from "next/image";

interface ValueItem {
  iconSrc: string;
  alt: string;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    iconSrc: "/diamant.svg",
    alt: "Icône Développement Full Stack",
    title: "Développement Full Stack",
    description:
      "Maîtrise React, Next.js, Node.js et bases de données relationnelles pour des architectures fiables.",
  },
  {
    iconSrc: "/oeil.svg",
    alt: "Icône Sens du détail & UI/UX",
    title: "Sens du détail & UI/UX",
    description:
      "Conception d'interfaces soignées sur Figma et intégration, axée sur l'accessibilité et la fluidité visuelle.",
  },
  {
    iconSrc: "/coeur.svg",
    alt: "Icône Passion & Rigueur",
    title: "Passion & Rigueur",
    description:
      "Code propre et maintenable écrit avec passion. Architecture solide sous TypeScript et Next.js avec un vrai soin apporté à chaque composant.",
  },
  {
    iconSrc: "/public.svg",
    alt: "Icône Utilisateur & Collaboration",
    title: "Utilisateur & Collaboration",
    description:
      "À l'écoute des besoins clients et de l'expérience utilisateur finale, avec une communication claire et du travail en équipe bien documenté.",
  },
];

export function Values() {
  return (
    <section id="valeurs" className="scroll-mt-20  w-full border-t border-[#A3483E]/40">      
    <div className="max-w-[1245px] mx-auto px-[6px] py-[50px] flex flex-col items-center gap-[60px]">
        {/* En-tête de section */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A3483E]">
            Approche et valeurs ajoutée
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#5C3636] mt-3 tracking-tight">
            Ce que j’apporte à vos projets
          </h2>
        </div>

        {/* Grille des 4 piliers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center px-2"
            >
              {/* Pastille circulaire avec image SVG */}
              <div className="w-16 h-16 rounded-full bg-[#E3B89B]/30 flex items-center justify-center p-3.5 mb-6">
                <Image
                  src={item.iconSrc}
                  alt={item.alt}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Titre du pilier */}
              <h3 className="text-lg font-bold text-[#5C3636] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#7A524C] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}