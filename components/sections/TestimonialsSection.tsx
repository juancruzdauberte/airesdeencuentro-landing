const testimonials = [
  {
    rating: 5,
    text: "Buscábamos un lugar tranquilo para trabajar y pasar días en familia. El parque y la galería con parrilla fueron nuestro lugar favorito. Volveremos sin dudarlo.",
    name: "Facundo Gómez",
    avatarInitials: "FG",
    avatarBg: "bg-secondary-fixed",
    detail: "Estadía de 2 semanas con familia",
  },
  {
    rating: 5,
    text: "Llegar de noche y poder ingresar con el código sin demoras ni coordinación pesada fue un alivio inmenso. La cama King es comodísima y la limpieza impecable.",
    name: "Carolina & Sofía",
    avatarInitials: "CS",
    avatarBg: "bg-primary-fixed",
    detail: "Estadía de fin de semana largo",
  },
  {
    rating: 5,
    text: "El Wi-Fi jamás cayó de los 300 Mbps y pude hacer reuniones internacionales mientras mis hijos disfrutaban del jardín. Todo pensado con excelente gusto.",
    name: "Tomás Lazzari",
    avatarInitials: "TL",
    avatarBg: "bg-surface-container-highest",
    avatarTextColor: "text-on-surface",
    detail: "Estadía mensual · Trabajo remoto",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-1">
              EXPERIENCIAS REALES
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              La voz de quienes vivieron la casa
            </h2>
          </div>
          <div className="flex items-center gap-space-xs mt-space-sm sm:mt-0">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Valoración promedio
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-primary font-bold text-label-md">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              4.98 / 5
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-secondary mb-space-sm">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface mb-space-md italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-sm border-t border-outline-variant/20">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.avatarBg} flex items-center justify-center font-bold text-primary ${testimonial.avatarTextColor || ""}`}
                >
                  {testimonial.avatarInitials}
                </div>
                <div>
                  <span className="font-title-sm text-title-sm font-bold text-on-surface block">
                    {testimonial.name}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {testimonial.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
