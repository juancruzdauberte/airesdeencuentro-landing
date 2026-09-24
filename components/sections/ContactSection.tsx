export default function ContactSection() {
  return (
    <section className="w-full pb-space-xl" id="contacto">
      <div className="max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg">
        <div className="relative rounded-3xl bg-primary text-on-primary overflow-hidden p-space-lg sm:p-space-xl shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest block mb-2 font-bold">
              CONTACTO DIRECTO SIN INTERMEDIARIOS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-space-sm tracking-tight">
              ¿Querés conocer la casa o consultar por tus fechas?
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-space-lg leading-relaxed">
              Respondemos de forma inmediata. Contanos qué fechas tenés en mente
              y cuántas personas viajarían para enviarte la propuesta
              personalizada con tarifa final y fotos detalladas.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
              <a
                href="https://wa.me/?text=Hola!%20Quisiera%20consultar%20disponibilidad%20para%20Casa%20El%20Encuentro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-surface-container-lowest text-primary hover:bg-primary-fixed font-label-lg text-label-lg font-bold shadow-md transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                <span>Escribir por WhatsApp</span>
              </a>
              <a
                href="mailto:hola@casaelencuentro.com?subject=Consulta%20de%20estad%C3%ADa"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-primary-container text-on-primary hover:bg-primary border border-outline-variant/30 font-label-lg text-label-lg transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
                <span>Enviar consulta por Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
