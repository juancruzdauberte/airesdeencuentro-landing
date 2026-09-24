"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cómo consulto y reservo la casa sin registrarme?",
    answer:
      "No necesitas crearte cuentas ni recordar contraseñas. Nos contactás de forma directa por WhatsApp o a través de nuestro formulario de contacto. Te confirmamos disponibilidad de calendario en minutos y coordinamos la reserva de forma personalizada y segura.",
  },
  {
    question: "¿Cuáles son las comodidades incluidas para niños o bebés?",
    answer:
      "Disponemos de cuna plegable tipo practicuna con colchón firme y sábanas limpias, sillita alta para comer, vajilla infantil libre de BPA y bañera para bebés. Sólo requerimos que nos avises al momento de la consulta para tenerla lista antes de tu llegada.",
  },
  {
    question: "¿Cómo se realiza el pago y qué medios aceptan?",
    answer:
      "Aceptamos transferencia bancaria en pesos argentinos (al tipo de cambio pactado) o en dólares estadounidenses, además de tarjetas de crédito mediante link de pago seguro. Para estadías mensuales ofrecemos planes de pago desdoblados.",
  },
  {
    question: "¿Se permiten mascotas (pet-friendly)?",
    answer:
      "Sí, aceptamos perritos o gatos educados previa consulta. Contamos con un parque completamente cerrado y seguro. Solicitamos cuidar la ropa de cama y sillones, y aplicamos una tarifa mínima de sanitización final para mascotas.",
  },
  {
    question: "¿Qué incluye la provisión de ropa blanca e higiene?",
    answer:
      "Entregamos la casa con juegos completos de sábanas de percal de algodón, toallones de cuerpo y mano por huésped, repasadores y un set inicial de amenities biodegradables (jabón vegetal, shampoo, acondicionador, papel higiénico y cápsulas de café). Para estadías mayores a 7 días, incluimos recambio semanal sin costo.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full pb-space-xl" id="faqs">
      <div className="max-w-[840px] mx-auto px-margin-sm lg:px-margin-lg">
        <div className="text-center mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-1">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Respuestas directas para tu estadía
          </h2>
        </div>

        <div className="space-y-space-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface-container-low rounded-xl p-space-md transition-all cursor-pointer hover:bg-surface-container focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              onClick={() => toggleFAQ(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFAQ(index);
                }
              }}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-title-sm text-title-sm text-on-surface font-bold">
                  {faq.question}
                </h3>
                <span
                  className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </div>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="pt-space-sm text-on-surface-variant font-body-md text-body-md leading-relaxed animate-fade-in-up"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
