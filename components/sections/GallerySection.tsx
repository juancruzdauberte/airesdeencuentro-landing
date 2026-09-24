const spaces = [
  {
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1X9YNTY2LswBDOkpHjp4tivtbAPmpV-imxXKRgGkOUSp_EdNlTQ8UpSqUI6lsNAJKQrKHVJticePGiGpn1zFBYKlXzmLl-8uysgfK2ATuI73sNYsOGds94u-piJTeWtps_gEgCDqT-U7uYotcNYoTf2maEXaJf4WrAG_meUID-aDsEKBTBjKTHXUrniDIfB151jUInm4SXI29rodTlc7Tx1j6D9DdVq4jzENnfk4XRgCA",
    badge: "Luz matinal abundante",
    title: "Living & Comedor integrado",
    description:
      "Sillón de lino amplio, ventanales de piso a techo con vistas al verde y mesa de roble para 6 comensales.",
    feature: "Orientación este / sol de mañana",
    featureIcon: "wb_sunny",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1W3kr081jTGCnm4dlUEJlVTYX2-hEYFAfuxj4KoD9a-6eYR4UwN9oFPEgPExtVdQEI3gvehdWm36vwSJNyGNJ0zoD3v4G25yQH-zcDvrpAG2NjXvDdKKeV-y3K7yV-cn-vcM5mkaSaYJI6i8LgCjWFjRoXHDe6sUcnNTEGbsPh8d7U_mk--8RbvZrCxqezMs3Gecpo1QTI6FVKOiZPWYpl89MMRk30qyXWWsM7PXTID",
    badge: "Ropa de cama de algodón egipcio",
    title: "Dormitorio principal en suite",
    description:
      "Cama King size con colchón premium, cortinas translúcidas de gasa de lino, baño privado y placard vestidor.",
    feature: "Aislamiento acústico testeado",
    featureIcon: "spa",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD22fy540gqgQmjBbuXazcreRN8uUEuGcmDi77Vho2Abi-lhuMWMY9RNhW4aOLTUrKfHBqVR1FdcZ4vmFR8H2v0WrCUjMzpfLZ7qZ4IpaMULJOUFz18bCU-6R_Sdt-LqS84-QrrXJiHVNyBUkJYwNLVKA_cOYxMtvMoDuh_O6eaRQFKdEJU7X3QqopLmfeOERzf4wPM6fx2CmZ-uw1omznJb7vBlGFesMYvUqrCnnhx",
    badge: "Cocina 100% equipada",
    title: "Cocina gourmet & Isla desayunadora",
    description:
      "Anafe por inducción, horno eléctrico, cafetera espresso, vajilla completa de cerámica y lavavajillas.",
    feature: "Café de cortesía de especialidad",
    featureIcon: "coffee_maker",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwn6lRwMq79vMUDSS652SplDcQ2QKfGTQZMqNcAzeE3A0eEOWGvZa7xXbf8o-zQkGB6POLMslifTeLukCwdJZgku1Qdc58Yehu-WaPb8QSVXb3Bupvfat_0E9NG-c5GG6q7DKC8aSJ73KarHF_L2Xd7gbc4d2h6klfaIaCl53zUk5HXl0341rBNUTEedBuWNGaPrFJ2qAgxiMmOmL2MMz2J9Sc-xAa7KA54aa6WbrI",
    badge: "Espacio exterior privado",
    title: "Galería, Parrilla & Jardín",
    description:
      "Parrilla tradicional argentina, fogonero, reposeras de madera y parque arbolado sin vistas cruzadas de vecinos.",
    feature: "100% de uso exclusivo para tu grupo",
    featureIcon: "yard",
  },
];

export default function GallerySection() {
  return (
    <section className="w-full py-space-xl" id="galeria">
      <div className="max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-1">
              ESPACIOS DE LA CASA
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Cada rincón pensado para tu bienestar
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
              Luz natural, materiales nobles y ambientes amplios para disfrutar
              en calma.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-primary-container transition-colors group"
          >
            <span>Consultar tarifas por temporada</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {spaces.map((space, index) => (
            <article
              key={index}
              className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={space.image}
                />
                <div className="absolute top-3 left-3 bg-secondary-fixed/90 backdrop-blur-sm text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full font-semibold shadow-sm">
                  {space.badge}
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-1">
                <h3 className="font-title-sm text-title-sm text-on-surface font-bold group-hover:text-primary transition-colors mb-1">
                  {space.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm">
                  {space.description}
                </p>
                <div className="mt-auto pt-space-xs flex items-center gap-1.5 text-primary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    {space.featureIcon}
                  </span>
                  <span>{space.feature}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
