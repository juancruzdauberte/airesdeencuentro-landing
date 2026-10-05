'use client';

import {
  Waves,
  Flame,
  ShieldCheck,
  Laptop,
  Thermometer,
  Utensils,
} from 'lucide-react';

const amenities = [
  {
    icon: Waves,
    title: 'Piscina & Jardín Privado',
    description:
      'Piscina infinita con borde atérmico, solárium con reposeras ergonómicas y un parque de olivos autóctonos.',
    colorBg: 'bg-brand-terracotta-light',
    colorIcon: 'text-brand-terracotta',
  },
  {
    icon: Flame,
    title: 'Parrilla / Quincho Completo',
    description:
      'Asador techado tradicional con fogonero exterior, mesa rústica para 10 comensales y set de asador premium.',
    colorBg: 'bg-brand-olive-light',
    colorIcon: 'text-brand-olive',
  },
  {
    icon: ShieldCheck,
    title: 'Estacionamiento Cubierto',
    description:
      'Cochera para dos vehículos con portón automático de acceso y seguridad perimetral monitoreada 24/7.',
    colorBg: 'bg-brand-terracotta-light',
    colorIcon: 'text-brand-terracotta',
  },
  {
    icon: Laptop,
    title: 'Wifi & Espacio Home Office',
    description:
      'Conexión de fibra simétrica de 300 Mbps con repetidores mesh en toda la propiedad y escritorio de trabajo.',
    colorBg: 'bg-brand-olive-light',
    colorIcon: 'text-brand-olive',
  },
  {
    icon: Thermometer,
    title: 'Climatización Integral',
    description:
      'Aire acondicionado frío/calor inverter en cada ambiente y hogar a leña tradicional en la sala de estar principal.',
    colorBg: 'bg-brand-terracotta-light',
    colorIcon: 'text-brand-terracotta',
  },
  {
    icon: Utensils,
    title: 'Cocina Gourmet Equipada',
    description:
      'Cafetera espresso, cava de vinos, lavavajillas, vajilla completa de cerámica de autor y especias locales básicas.',
    colorBg: 'bg-brand-olive-light',
    colorIcon: 'text-brand-olive',
  },
];

export default function AmenitiesSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-brand-cream"
      data-purpose="amenities-section"
      id="servicios"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-olive">
            Todo incluido
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mt-2 mb-4">
            Comodidades diseñadas para tu bienestar
          </h2>
          <p className="text-brand-muted text-base">
            Cada detalle en El Encuentro ha sido seleccionado para ofrecer una
            estancia tranquila, cómoda y totalmente equipada.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-soft hover:border-brand-terracotta/40 hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${amenity.colorBg} ${amenity.colorIcon} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-2">
                  {amenity.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
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
