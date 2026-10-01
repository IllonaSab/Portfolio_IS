export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 w-full border-t border-[#A3483E]/40">
      <div className="max-w-[1188px] mx-auto px-[6px] py-[50px] flex flex-col items-center gap-[60px] text-center">
        {/* En-tête */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A3483E]">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#5C3636] mt-3 tracking-tight">
            Un projet ou une opportunité en tête ?
          </h2>
          <p className="text-sm sm:text-base text-[#5C3636]/80 max-w-2xl mt-6 leading-relaxed">
            Disponible début octobre pour relever de nouveaux défis en tant que Développeuse Full Stack/IA. N hésitez pas à m écrire pour échanger sur vos besoins.
          </p>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:sabouillona@gmail.com"
            className="px-6 py-3 rounded-lg bg-[#5C3636] text-white text-sm font-semibold hover:bg-[#452727] transition-colors shadow-sm"
          >
            M’envoyer un message
          </a>

          <a
            href="https://www.linkedin.com/in/illona-saboundjian/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#A3483E]/60 bg-white text-[#A3483E] text-sm font-semibold hover:bg-[#E3B89B]/10 transition-colors shadow-sm"
          >
            Voir mon LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}