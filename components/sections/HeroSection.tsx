'use client';

import Link from 'next/link';
import * as React from 'react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
      data-purpose="hero-section"
      id="inicio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text & Headline Area */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block py-1.5 px-4 mb-4 text-xs font-semibold tracking-wider uppercase text-brand-olive bg-brand-olive-light rounded-full animate-fade-in">
            Exclusiva Casa de Descanso
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-brand-charcoal tracking-tight leading-[1.15] animate-fade-in [animation-delay:0.1s]">
            Tu refugio ideal para{' '}
            <span className="text-brand-terracotta italic font-normal">
              desconectar
            </span>{' '}
            y volver a conectar.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-brand-muted leading-relaxed font-light animate-fade-in [animation-delay:0.2s]">
            Descubre El Encuentro: una experiencia de alquiler temporal diseñada
            para el confort, la naturaleza y momentos inolvidables.
          </p>

          {/* Dual CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:0.3s]">
            <Link
              href="#disponibilidad"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold text-white bg-brand-terracotta hover:bg-brand-terracotta-dark shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            >
              Consultar Disponibilidad
            </Link>
            <Link
              href="#la-casa"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold text-brand-olive border-2 border-brand-olive hover:bg-brand-olive hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            >
              Explorar la Casa
            </Link>
          </div>
        </div>

        {/* Hero Visual Display */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-6xl aspect-[16/9] md:aspect-[21/9] transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}
        >
          <img
            alt="Stunning modern architectural holiday home exterior at golden hour with swimming pool"
            className="w-full h-full object-cover animate-scale-up"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3MOj8Q720PGwgwKSOC3pLc5El0Fd0krA36qN0LSmovC-IzI1v-x39jHZ3j4hO_smo5I1_mbBaHP6sFhO_NB15YB5J7rtLr-xg3X5X6u68O9LOt3lS6ArsxrLOYH8YUGM1ipsWp8_owiLQpqu6paMHA5eOqBWU12bx_D1kQVNGSFs-BKUob2JNHI3mg1JY_uU7NM1RrFIcuWAk0QqMqt-E22BK4F-T_7OfDVvRpz3UGB2IdvKomXX7"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
