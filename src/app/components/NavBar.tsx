"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full border-b border-[#A3483E]/30 bg-[#FFFDFB]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1188px] mx-auto px-5 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Logo + Titre */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          onClick={closeMenu}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="h-7 w-auto object-contain"
          />
          <span className="font-bold text-xs sm:text-sm tracking-wider text-[#5C3636] uppercase">
            Portfolio
          </span>
        </Link>

        {/* Liens de navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C3636]">
          <a href="#a-propos" className="hover:text-[#A3483E] transition-colors">
            À propos
          </a>
          <a href="#valeurs" className="hover:text-[#A3483E] transition-colors">
            Valeurs
          </a>
          <a href="#techniques" className="hover:text-[#A3483E] transition-colors">
            Techniques
          </a>
          <a href="#projets" className="hover:text-[#A3483E] transition-colors">
            Projets
          </a>
        </nav>

        {/* Bouton Contact Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[#5C3636] text-white text-sm font-semibold hover:bg-[#452727] transition-colors shadow-sm"
          >
            Me contacter
          </a>
        </div>

        {/* Bouton Burger Mobile (à droite) */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu de navigation"
          className="md:hidden p-2 rounded-lg text-[#5C3636] hover:bg-[#E3B89B]/20 transition-colors"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile déroulant élégant */}
      {isOpen && (
        <div className="md:hidden border-t border-[#A3483E]/20 bg-[#FFFDFB] px-6 py-6 flex flex-col gap-5 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#5C3636]">
            <a
              href="#a-propos"
              onClick={closeMenu}
              className="py-1 hover:text-[#A3483E] transition-colors"
            >
              À propos
            </a>
            <a
              href="#valeurs"
              onClick={closeMenu}
              className="py-1 hover:text-[#A3483E] transition-colors"
            >
              Valeurs
            </a>
             <a
              href="#projets"
              onClick={closeMenu}
              className="py-1 hover:text-[#A3483E] transition-colors"
            >
              Projets
            </a>
            <a
              href="#techniques"
              onClick={closeMenu}
              className="py-1 hover:text-[#A3483E] transition-colors"
            >
              Techniques
            </a>
          </nav>

          <div className="pt-3 border-t border-[#A3483E]/20">
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center py-3 rounded-lg bg-[#5C3636] text-white text-sm font-semibold hover:bg-[#452727] transition-colors shadow-sm"
            >
              Me contacter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}