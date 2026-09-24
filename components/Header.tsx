"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#la-casa", label: "La Casa" },
    { href: "#galeria", label: "Espacios & Galería" },
    { href: "#comodidades", label: "Comodidades" },
    { href: "#politicas", label: "Políticas & Reserva" },
    { href: "#faqs", label: "Preguntas Frecuentes" },
    { href: "#ubicacion", label: "Ubicación" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg flex items-center justify-between gap-space-md">
        {/* Logo */}
        <div className="flex items-center gap-space-sm shrink-0">
          <Link
            href="#la-casa"
            className="flex items-center gap-space-sm transition-opacity hover:opacity-80"
          >
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-on-primary font-bold text-headline-sm transition-transform hover:scale-110">
              E
            </div>
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight hidden sm:inline-block">
              Casa El Encuentro
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-md xl:gap-space-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-space-sm shrink-0">
          <a
            href="#contacto"
            className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg shadow-sm transition-all active:scale-95 hover:shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden sm:inline">Consultar disponibilidad</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-on-surface hover:text-primary transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface-container-lowest/95 backdrop-blur-md animate-fade-in-up">
          <nav className="flex flex-col p-space-lg gap-space-md max-w-[1280px] mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-title-sm text-title-sm text-on-surface hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
