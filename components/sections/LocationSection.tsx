'use client';

import Link from 'next/link';

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
                Ubicación
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal">
                Encuéntranos en Baradero
              </h2>
            </div>
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
              Estamos en Che Guevara 711, Baradero, Buenos Aires, CP 2942.
              Consulta el mapa para ubicar la casa y planificar tu llegada.
            </p>


          </div>

          {/* Right stylized map preview card */}
          <div className="lg:col-span-7 animate-fade-in-up [animation-delay:0.3s]">
            <div className="relative rounded-3xl p-8 bg-brand-sand border border-stone-200/80 shadow-soft overflow-hidden">
              <iframe
                title="Ubicación de El Encuentro: Che Guevara 711, Baradero, Buenos Aires, CP 2942"
                src="https://www.google.com/maps?q=Che%20Guevara%20711%2C%20Baradero%2C%20Buenos%20Aires%2C%20CP%202942%2C%20Argentina&output=embed"
                className="w-full h-80 sm:h-96 rounded-2xl border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="mt-4 text-sm text-brand-charcoal">
                Che Guevara 711, Baradero, Buenos Aires, CP 2942
              </p>

              {/* Overlay buttons */}
              <div className="absolute top-4 right-4">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Che%20Guevara%20711%2C%20Baradero%2C%20Buenos%20Aires%2C%20CP%202942%2C%20Argentina"
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
