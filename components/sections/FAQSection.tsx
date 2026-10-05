'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
  {
    question: '¿Cuál es la política de check-in y check-out?',
    answer:
      'El horario habitual de check-in es a partir de las 15:00 hs y el check-out es hasta las 11:00 hs. Contamos con sistema de cerradura digital para un ingreso autónomo y flexible si llegas más tarde.',
  },
  {
    question: '¿Se aceptan mascotas (pet friendly)?',
    answer:
      'Sí, aceptamos hasta dos mascotas educadas de tamaño pequeño o mediano. Solicitamos notificarnos con antelación para preparar el espacio con camitas y recipientes adecuados.',
  },
  {
    question: '¿Qué incluye la estadía respecto a blancos y limpieza?',
    answer:
      'Incluimos sábanas de percal de algodón 100%, toallas y toallones de baño, toallas para la piscina, amenidades orgánicas de cortesía y limpieza final garantizada.',
  },
  {
    question: '¿Cómo son las condiciones de reserva y cancelación?',
    answer:
      'Se abona el 50% al momento de reservar para bloquear fechas y el 50% restante al ingresar. Ofrecemos cancelación gratuita con reembolso total hasta 14 días antes de tu fecha de llegada.',
  },
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
