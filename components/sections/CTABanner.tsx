"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import BookingBar from "../BookingBar";

export default function CTABanner() {
  return (
    <section
      className="py-16 lg:py-24 bg-brand-terracotta text-white relative overflow-hidden"
      data-purpose="cta-banner"
      id="reservar"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-4 mb-4 text-xs font-bold tracking-wider uppercase bg-white/15 rounded-full text-white/90">
            Disponibilidad Limitada por Temporada
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            ¿Listo para tu próxima escapada?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Reserva directamente con nosotros para obtener las mejores tarifas
            garantizadas, atención personalizada y horarios de check-out
            extendidos.
          </p>

          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookingBar />
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
    </section>
  );
}
