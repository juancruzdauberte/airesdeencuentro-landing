'use client';

const galleryItems = [
  {
    id: 1,
    title: 'Suite Principal con Vista al Bosque',
    subtitle: 'Espacio de descanso',
    description:
      'Sommier King Size, ropa de cama de lino puro, vigas de madera noble y ventanales al parque.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSjom_MgaxGkGIKbnau4NiyC9cB9d6Da7TEJzX8IJagYh1pjKOS95SFa9uFzwX5Gudokx6kHdj379ctjxByNtXxsQrhAMXnBy_u2gLbnj_vq2NZRhHnwQqfDgFaIPR5qaELiqH5s5xP5JVgQZd0lkE1SSDM9TxXC8VVZE67l9FsEVgbm3F_9UZGEz1rwrlqUdI--ZjvW1nSRJYXDocAyu0sR0fmcrFfANDvqN7SVMaIRzPkaqa95oS',
    colSpan: 'md:col-span-7',
    rowHeight: 'h-[380px] sm:h-[460px]',
  },
  {
    id: 2,
    title: 'Piscina & Terraza Panorámica',
    subtitle: 'Atardeceres Únicos',
    description:
      'Espejo de agua con orientación oeste para disfrutar la puesta de sol en las sierras.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3MOj8Q720PGwgwKSOC3pLc5El0Fd0krA36qN0LSmovC-IzI1v-x39jHZ3j4hO_smo5I1_mbBaHP6sFhO_NB15YB5J7rtLr-xg3X5X6u68O9LOt3lS6ArsxrLOYH8YUGM1ipsWp8_owiLQpqu6paMHA5eOqBWU12bx_D1kQVNGSFs-BKUob2JNHI3mg1JY_uU7NM1RrFIcuWAk0QqMqt-E22BK4F-T_7OfDVvRpz3UGB2IdvKomXX7',
    colSpan: 'md:col-span-5',
    rowHeight: 'h-[380px] sm:h-[460px]',
  },
  {
    id: 3,
    title: 'Living con Chimenea a Leña',
    subtitle: 'Cálido & Acogedor',
    description:
      'Sillones de lino profundo, biblioteca seleccionada y calor de hogar.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3MOj8Q720PGwgwKSOC3pLc5El0Fd0krA36qN0LSmovC-IzI1v-x39jHZ3j4hO_smo5I1_mbBaHP6sFhO_NB15YB5J7rtLr-xg3X5X6u68O9LOt3lS6ArsxrLOYH8YUGM1ipsWp8_owiLQpqu6paMHA5eOqBWU12bx_D1kQVNGSFs-BKUob2JNHI3mg1JY_uU7NM1RrFIcuWAk0QqMqt-E22BK4F-T_7OfDVvRpz3UGB2IdvKomXX7',
    colSpan: 'md:col-span-6',
    rowHeight: 'h-[300px]',
  },
  {
    id: 4,
    title: 'Galería Semicubierta & Rincón de Lectura',
    subtitle: 'Paz Total',
    description:
      'Disfruta del canto de los pájaros y la brisa serrana con total privacidad.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSjom_MgaxGkGIKbnau4NiyC9cB9d6Da7TEJzX8IJagYh1pjKOS95SFa9uFzwX5Gudokx6kHdj379ctjxByNtXxsQrhAMXnBy_u2gLbnj_vq2NZRhHnwQqfDgFaIPR5qaELiqH5s5xP5JVgQZd0lkE1SSDM9TxXC8VVZE67l9FsEVgbm3F_9UZGEz1rwrlqUdI--ZjvW1nSRJYXDocAyu0sR0fmcrFfANDvqN7SVMaIRzPkaqa95oS',
    colSpan: 'md:col-span-6',
    rowHeight: 'h-[300px]',
  },
];

export default function GallerySection() {
  return (
    <section
      className="py-20 lg:py-28 bg-brand-sand/50"
      data-purpose="photo-gallery"
      id="galeria"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
              Galería visual
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mt-1">
              Conoce cada rincón
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-brand-muted text-sm sm:text-base max-w-md">
            Arquitectura bioclimática, materiales nobles y grandes aberturas
            que integran el interior con el paisaje.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5" id="la-casa">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`${item.colSpan} ${item.rowHeight} group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 animate-fade-in-up`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs uppercase font-semibold text-brand-sun tracking-wider">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl font-serif font-medium mt-1">
                  {item.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>
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
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
