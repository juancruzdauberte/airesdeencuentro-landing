export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pb-space-xl" id="la-casa">
      {/* Atmospheric Ambient Glows */}
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-[420px] h-[420px] bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg pt-space-lg lg:pt-space-xl">
        {/* Eyebrow & Main Statement */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-secondary-fixed text-primary font-label-md text-label-md tracking-wide shadow-sm mb-space-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Casa boutique exclusiva · Alquiler temporario</span>
          </div>

          <h1 className="font-headline-xl text-headline-xl lg:text-headline-xl text-on-surface tracking-tight mb-space-md md:text-headline-lg">
            El Encuentro: tu refugio de calma, luz y naturaleza
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg">
            Una residencia pensada para desconectar, disfrutar en familia o
            trabajar en un entorno sereno. Espacios luminosos, jardín privado y
            diseño cálido para tu próxima estadía.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-space-sm mb-space-xl">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg shadow-md transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">
                calendar_month
              </span>
              <span>Consultar fechas disponibles</span>
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary border border-outline-variant/60 font-label-lg text-label-lg transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                photo_library
              </span>
              <span>Ver fotos de la casa</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-video max-h-[580px]">
          <img
            alt="Living room y ventanales luminosos de Casa El Encuentro"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AEtjO1X9YNTY2LswBDOkpHjp4tivtbAPmpV-imxXKRgGkOUSp_EdNlTQ8UpSqUI6lsNAJKQrKHVJticePGiGpn1zFBYKlXzmLl-8uysgfK2ATuI73sNYsOGds94u-piJTeWtps_gEgCDqT-U7uYotcNYoTf2maEXaJf4WrAG_meUID-aDsEKBTBjKTHXUrniDIfB151jUInm4SXI29rodTlc7Tx1j6D9DdVq4jzENnfk4XRgCA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-black/10" />

          {/* Floating Badges */}
          <div className="absolute bottom-space-md sm:bottom-space-lg left-space-md sm:left-space-lg right-space-md sm:right-space-lg flex flex-wrap items-end justify-between gap-space-sm">
            <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-xl p-space-md shadow-lg max-w-sm">
              <div className="flex items-center gap-1.5 text-secondary mb-1">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="font-title-sm text-title-sm font-bold text-on-surface">
                  4.98 estrellas
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  · Huéspedes felices
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface line-clamp-2">
                "El silencio del parque y el sol entrando en la galería hicieron
                de nuestras vacaciones algo inolvidable."
              </p>
            </div>

            <div className="flex items-center gap-space-xs sm:gap-space-sm flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-on-surface font-label-md text-label-md shadow-md">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  yard
                </span>
                <span>Parque &amp; Galería privada</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-on-surface font-label-md text-label-md shadow-md">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  lock
                </span>
                <span>Check-in autónomo sin esperas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
