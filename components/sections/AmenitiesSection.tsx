"use client";

import { Waves, Flame, Car, Laptop, Thermometer, Utensils } from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Piscina & Jardín Privado",
    description:
      "Piscina al aire libre rodeada de césped y un jardín arbolado, con espacio para disfrutar del sol y descansar a la sombra.",
    colorBg: "bg-brand-terracotta-light",
    colorIcon: "text-brand-terracotta",
  },
  {
    icon: Flame,
    title: "Parrilla & Galería",
    description:
      "Parrilla de material al aire libre, junto a una galería cubierta con mesa y bancos. Un espacio para compartir un asado con vista al parque y la piscina.",
    colorBg: "bg-brand-olive-light",
    colorIcon: "text-brand-olive",
  },
  {
    icon: Car,
    title: "Estacionamiento en el Parque",
    description:
      "Espacio para estacionar dentro del parque, con ingreso por tranquera. El estacionamiento es al aire libre y actualmente no cuenta con techo.",
    colorBg: "bg-brand-terracotta-light",
    colorIcon: "text-brand-terracotta",
  },
  {
    icon: Laptop,
    title: "Wifi & Espacio Home Office",
    description:
      "Conexión de fibra simétrica de 300 Mbps con repetidores mesh en toda la propiedad y escritorio de trabajo.",
    colorBg: "bg-brand-olive-light",
    colorIcon: "text-brand-olive",
  },
  {
    icon: Thermometer,
    title: "Climatización Integral",
    description:
      "Aire acondicionado frío/calor en living/comedor y habitación matrimonial.",
    colorBg: "bg-brand-terracotta-light",
    colorIcon: "text-brand-terracotta",
  },
  {
    icon: Utensils,
    title: "Cocina Gourmet Equipada",
    description:
      "Cafetera italiana, cava de vinos, lavavajillas, vajilla completa de cerámica de autor y especias locales básicas.",
    colorBg: "bg-brand-olive-light",
    colorIcon: "text-brand-olive",
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
            Cada detalle en Aires de Encuentro ha sido seleccionado para ofrecer
            una estancia tranquila, cómoda y totalmente equipada.
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
