import Image from "next/image";

export function Hero() {
  return (
    <section id="a-propos" className="scroll-mt-20 max-w-[1343px] mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-[36px]">      {/* Colonne Gauche : Texte & Actions */}
      <div className="flex-1 max-w-[720px] flex flex-col items-start">
        {/* Badge Disponibilité */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3B89B]/20 text-[#5C3636] text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-[#A3483E]" />
          <span>  Disponible immédiatement pour un CDI, CDD ou une mission en Île-de-France ou mobile. </span>
        </div>

        {/* Titre Principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#2A1810] leading-[1.15] tracking-tight">
          Illona SABOUNDJIAN, DÉVELOPPEUSE FULL STACK{" "}
          <span className="text-[#A3483E]">REACT.JS • NODE.JS • POSTGRESQL</span>.
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-[#5C3636]/80 leading-relaxed max-w-[620px]">
         Développeuse Full Stack (React.js, Node.js, PostgreSQL), diplômée d`un Master Expert Développement Full Stack avec 3 ans d`expérience en alternance.
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
            href="/CV_SABOUNDJIAN.pdf"
            download="CV_SABOUNDJIAN_Illona.pdf"
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