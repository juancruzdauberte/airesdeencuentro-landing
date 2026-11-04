'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
  {
    "question": "¿Cuál es la capacidad máxima de la propiedad?",
    "answer": "Aires de Encuentro puede alojar hasta 9 personas y cuenta con 3 dormitorios. Incluimos ropa de cama, pero no toallas."
  },
  {
    "question": "¿Cómo puedo reservar en Aires de Encuentro?",
    "answer": "Para reservar, debes contactarte con nosotros. La reserva se confirma abonando una seña del 30% de la estadía."
  },
  {
    "question": "¿Se puede abonar en pesos o en dólares?",
    "answer": "Puedes abonar en dólares o en pesos al tipo de cambio del dólar blue."
  },
  {
    "question": "¿Cuál es la política de check-in y check-out?",
    "answer": "El check-in es a partir de las 12:00 hs y el check-out es a las 10:00 hs. El late check-out tiene un costo adicional; consulta su disponibilidad antes de tu estadía."
  },
  {
    "question": "¿Se aceptan mascotas (pet friendly)?",
    "answer": "Sí, aceptamos mascotas. Para conocer la cantidad permitida, consulta con nosotros antes de confirmar tu reserva."
  },
  {
    "question": "¿Qué incluye el alquiler?",
    "answer": "El alquiler incluye acceso completo a la propiedad, WiFi, uso de la piscina, parrilla, cocina totalmente equipada, ropa de cama, aire acondicionado, Smart TV con Netflix y estacionamiento. No ofrecemos toallas; recuerda traer las tuyas."
  },
  {
    "question": "¿Cómo son las condiciones de reserva y cancelación?",
    "answer": "Una vez abonada la seña del 30%, no se realiza reembolso del dinero en caso de cancelación. Puedes reprogramar la fecha; el precio puede variar según la fecha elegida."
  },
  {
    "question": "¿Qué actividades hay cerca de la propiedad?",
    "answer": "Baradero ofrece navegación por el río Baradero y el Paraná, visitas a estancias históricas, pesca deportiva, espacios verdes y restaurantes históricos."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="py-20 lg:py-24 bg-brand-sand/60"
      data-purpose="faq-section"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-olive">
            Dudas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mt-1">
            Preguntas Frecuentes
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-2">
            Todo lo que necesitas saber antes de confirmar tu reserva.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border border-stone-200/80 p-6 transition-all duration-300 shadow-sm hover:shadow-soft cursor-pointer overflow-hidden animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              open={index === openIndex}
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === index ? -1 : index);
              }}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-base sm:text-lg font-bold text-brand-charcoal pr-4">
                  {item.question}
                </h3>
                <span className="p-1 rounded-full text-brand-terracotta transition-transform duration-300 group-open:rotate-180 shrink-0">
                  <ChevronDown size={20} />
                </span>
              </summary>

              <div className="mt-4 text-sm text-brand-muted leading-relaxed border-t border-stone-100 pt-3 animate-scale-up">
                {item.answer}
              </div>
            </details>
          ))}
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
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
