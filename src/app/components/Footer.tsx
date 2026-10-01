import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#A3483E]/40">
      <div className="max-w-[1188px] mx-auto px-[6px] py-[50px] flex flex-col items-center gap-6 text-center">
        {/* Mention Copyright */}
        <p className="text-sm font-medium text-[#5C3636]">
          © 2026 Illona Saboundjian. Développeuse Full Stack/IA.
        </p>

        {/* Liens réseaux et contact */}
        <div className="flex items-center justify-center gap-8 text-sm font-medium text-[#A3483E]">
          <a
            href="https://www.linkedin.com/in/illona-saboundjian/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/IllonaSab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}