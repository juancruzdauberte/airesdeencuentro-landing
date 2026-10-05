'use client';

import { Trees, Wine, Navigation, Clock, Plane, Car } from 'lucide-react';
import Link from 'next/link';

const poi = [
  {
    icon: Trees,
    title: 'Reserva Natural Cerro Chico',
    time: '5 min',
    description: 'Senderos de trekking de baja dificultad y mirador panorámico.',
    colorBg: 'bg-brand-olive-light',
    colorIcon: 'text-brand-olive',
    timeColorBg: 'bg-stone-100',
    timeColor: 'text-brand-olive',
  },
  {
    icon: Wine,
    title: 'Ruta de Viñedos & Cavas',
    time: '12 min',
    description:
      'Tres bodegas galardonadas con catas privadas y almuerzos en viña.',
    colorBg: 'bg-brand-terracotta-light',
    colorIcon: 'text-brand-terracotta',
    timeColorBg: 'bg-stone-100',
    timeColor: 'text-brand-terracotta',
  },
  {
    icon: Navigation,
    title: 'Lago & Club Náutico',
    time: '15 min',
    description: 'Kayak, paddle surf, navegación a vela y paradores gastronómicos.',
    colorBg: 'bg-amber-50',
    colorIcon: 'text-amber-700',
    timeColorBg: 'bg-stone-100',
    timeColor: 'text-stone-700',
  },
];

export default function LocationSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-brand-cream"
      data-purpose="surroundings-location"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left details column */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in-up">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-olive">
                Ubicación estratégica
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal">
                Aislado del ruido, cerca de todo lo que te gusta
              </h2>
            </div>
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
              El Encuentro se encuentra en un valle tranquilo con acceso
              asfaltado seguro. Combina el silencio del entorno serrano con
              proximidad inmediata a bodegas boutique, gastronomía de autor y
              senderos naturales.
            </p>

            {/* 3 Points of Interest */}
            <div className="space-y-4 pt-2">
              {poi.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-200 hover:border-brand-terracotta/40 transition-all duration-300 hover:shadow-soft animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div
                      className={`p-2.5 rounded-lg ${item.colorBg} ${item.colorIcon} shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-6`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-brand-charcoal text-sm">
                          {item.title}
                        </h4>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.timeColorBg} ${item.timeColor}`}
                        >
                          {item.time}
                        </span>
                      </div>
                      <p className="text-xs text-brand-muted mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right stylized map preview card */}
          <div className="lg:col-span-7 animate-fade-in-up [animation-delay:0.3s]">
            <div className="relative rounded-3xl p-8 bg-brand-sand border border-stone-200/80 shadow-soft overflow-hidden">
              {/* Simulated Map Visual */}
              <div className="w-full h-80 sm:h-96 rounded-2xl bg-stone-200 relative overflow-hidden flex items-center justify-center">
                {/* Subtle decorative map lines */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#7A7836_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Route SVG path */}
                <svg
                  className="absolute inset-0 w-full h-full stroke-brand-olive/40 fill-none"
                  strokeDasharray="6,6"
                  strokeWidth="2"
                >
                  <path d="M 50 150 Q 200 80 320 200 T 580 180"></path>
                </svg>

                {/* Main Landmark Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce-slow">
                  <div className="px-3 py-1.5 rounded-full bg-brand-terracotta text-white font-bold text-xs shadow-lg mb-1 flex items-center gap-1.5">
                    <Navigation size={14} />
                    El Encuentro
                  </div>
                  <div className="w-4 h-4 bg-brand-terracotta rounded-full border-2 border-white shadow-md"></div>
                </div>
              </div>

              {/* Footer info */}
              <div className="mt-6 flex flex-wrap items-center justify-between text-xs text-brand-muted gap-2">
                <span className="flex items-center gap-1.5">
                  <Car size={16} className="text-brand-olive" /> Acceso 100%
                  asfaltado
                </span>
                <span className="flex items-center gap-1.5">
                  <Plane size={16} className="text-brand-olive" /> Aeropuerto a
                  45 min
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} className="text-brand-olive" /> Self
                  Check-in
                </span>
              </div>

              {/* Overlay buttons */}
              <div className="absolute top-4 right-4">
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-stone-50 px-3.5 py-2 rounded-lg border border-stone-200 text-xs font-semibold text-brand-charcoal shadow-sm transition flex items-center gap-1.5 hover:shadow-md"
                >
                  Abrir en Google Maps
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
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
        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite;
        }
      `}</style>
    </section>
  );
}
