"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#la-casa", label: "La Propiedad" },
  { href: "#servicios", label: "Comodidades" },
  { href: "#galeria", label: "Galería Fotográfica" },
];

const socialLinks = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    label: "Instagram de El Encuentro",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-brand-charcoal text-stone-300 py-16"
      data-purpose="primary-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center gap-3 bg-white/10 p-2.5 rounded-xl w-fit">
              <Image
                alt="El Encuentro Logo"
                className="h-9 w-auto brightness-0 invert"
                src="/en_logo.png"
                width={50}
                height={50}
                loading="eager"
              />
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Una casa de descanso diseñada para vivir en sintonía con la
              naturaleza, con el confort y la exclusividad que mereces.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="animate-fade-in-up [animation-delay:0.1s]">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-sun transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="animate-fade-in-up [animation-delay:0.2s]">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-terracotta" />
                <span>reservas@elencuentro.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-terracotta" />
                <a
                  href="https://wa.me/5493329305210?text=Hola!%20Quisiera%20consultar%20sobre%20la%20disponibilidad%20y%20tarifas%20de%20El%20Encuentro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-terracotta transition-colors"
                >
                  +54 (9) 332 930-5210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="text-brand-terracotta shrink-0 mt-0.5"
                />
                <span>Baradero, Provincia de Buenos Aires</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Badges */}
          <div className="animate-fade-in-up [animation-delay:0.3s]">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Síguenos
            </h4>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => {
                return (
                  <Link
                    key={social.label}
                    aria-label={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-stone-800 hover:bg-brand-terracotta text-stone-300 hover:text-white flex items-center justify-center transition duration-300"
                  >
                    <Image
                      alt={social.label}
                      height={20}
                      width={20}
                      src={social.icon}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-xs text-stone-400">
              <p className="font-medium text-white mb-1">
                Superhost Certificado
              </p>
              <p>
                Reconocimiento a hospitalidad constante y valoraciones
                sobresalientes.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4 animate-fade-in-up [animation-delay:0.4s]">
          <p>
            ©{new Date().getFullYear()} El Encuentro Casa de Descanso. Todos los
            derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-stone-300 transition">
              Términos & Condiciones
            </Link>
            <Link href="#" className="hover:text-stone-300 transition">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-stone-300 transition">
              Reglamento de Convivencia
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
}
