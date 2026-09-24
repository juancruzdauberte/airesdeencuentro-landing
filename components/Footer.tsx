export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 py-space-lg">
      <div className="max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg mb-space-xl">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-space-sm mb-space-md">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-on-primary font-bold text-headline-sm">
                E
              </div>
              <span className="font-headline-sm text-headline-sm text-primary">
                Casa El Encuentro
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              Tu refugio de calma, luz y naturaleza. Alquiler temporario exclusivo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-title-sm text-title-sm text-on-surface font-bold mb-space-md">
              Enlaces
            </h3>
            <nav className="flex flex-col gap-space-sm">
              <a
                href="#la-casa"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                La Casa
              </a>
              <a
                href="#galeria"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                Galería
              </a>
              <a
                href="#comodidades"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                Comodidades
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-title-sm text-title-sm text-on-surface font-bold mb-space-md">
              Contacto
            </h3>
            <div className="flex flex-col gap-space-sm">
              <a
                href="https://wa.me/?text=Hola!%20Quisiera%20consultar%20disponibilidad%20para%20Casa%20El%20Encuentro"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-md text-body-md text-primary hover:text-primary-container transition-colors inline-flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                WhatsApp
              </a>
              <a
                href="mailto:hola@casaelencuentro.com"
                className="font-body-md text-body-md text-primary hover:text-primary-container transition-colors inline-flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-outline-variant/30 pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © {currentYear} Casa El Encuentro. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-space-lg">
            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
