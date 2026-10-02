import Image from "next/image";

export function Hero() {
  return (
    <section id="a-propos" className="scroll-mt-20 max-w-[1343px] mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-[36px]">      {/* Colonne Gauche : Texte & Actions */}
      <div className="flex-1 max-w-[720px] flex flex-col items-start">
        {/* Badge Disponibilité */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3B89B]/20 text-[#5C3636] text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-[#A3483E]" />
          <span> À la recherche d’un CDI, disponible immédiatement pour de nouveaux projets</span>
        </div>

        {/* Titre Principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#2A1810] leading-[1.15] tracking-tight">
          Bonjour, je suis Illona SABOUNDJIAN, Développeuse{" "}
          <span className="text-[#A3483E]">Full Stack/IA</span>.
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-[#5C3636]/80 leading-relaxed max-w-[620px]">
          Je conçois des interfaces engageantes, élégantes et centrées sur les
          besoins utilisateurs. Passionnée par le design system et l’artisanat
          visuel.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a
            href="#projets"
            className="px-6 py-3 rounded-lg bg-[#5C3636] text-white text-sm font-semibold hover:bg-[#452727] transition-colors shadow-sm"
          >
            Voir mes projets
          </a>

          <a
            href="/cv.pdf"
            download="CV_Illona_Saboundjian.pdf"
            className="px-6 py-3 rounded-lg border border-[#A3483E]/50 text-[#A3483E] text-sm font-semibold hover:bg-[#E3B89B]/10 transition-colors"
            >
            Télécharger mon CV
            </a>
        </div>
      </div>

      {/* Colonne Droite : Visuel / Logo Hero */}
      <div className="shrink-0 w-full sm:w-[420px] lg:w-[470px] aspect-square rounded-[40px] border border-[#A3483E]/40 bg-[#FAF4EF] p-8 flex items-center justify-center relative shadow-sm">
        <Image
          src="/logo.svg"
          alt="Illustration Illona Saboundjian"
          width={340}
          height={340}
          priority
          className="w-full h-full object-contain drop-shadow-sm"
        />
      </div>
    </section>
  );
}