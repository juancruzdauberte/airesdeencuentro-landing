const amenities = [
  {
    icon: "ac_unit",
    iconBg: "bg-primary-fixed",
    title: "Climatización central",
    description:
      "Aire acondicionado frío/calor inverter en todos los ambientes y losa radiante para días invernales de confort.",
  },
  {
    icon: "countertops",
    iconBg: "bg-secondary-fixed",
    title: "Cocina 100% equipada",
    description:
      "Horno, microondas, cafetera Nespresso, tostadora, batería de cocina completa y copas de cristal de vino.",
  },
  {
    icon: "outdoor_grill",
    iconBg: "bg-primary-fixed",
    title: "Parrilla & Fogonero",
    description:
      "Sector de asador en galería techada con atizador, tabla de corte de algarrobo y fogonero exterior para las noches.",
  },
  {
    icon: "laptop_mac",
    iconBg: "bg-secondary-fixed",
    title: "Espacio de teletrabajo",
    description:
      "Escritorio de madera ergonómico, silla regulable, tomas múltiples y Wi-Fi simétrico 300 Mbps con cobertura en el parque.",
  },
  {
    icon: "bed",
    iconBg: "bg-primary-fixed",
    title: "Ropa blanca & Toallas",
    description:
      "Sábanas de puro algodón de 400 hilos, toallones de gramaje hotelero, batas y amenities de formulación orgánica.",
  },
  {
    icon: "garage",
    iconBg: "bg-secondary-fixed",
    title: "Estacionamiento cubierto",
    description:
      "Cochera techada dentro del predio privado para 2 vehículos con portón automático de acceso seguro.",
  },
  {
    icon: "local_laundry_service",
    iconBg: "bg-primary-fixed",
    title: "Lavarropas & Planchado",
    description:
      "Lavadero independiente con lavarropas automático, tender, plancha a vapor y productos de limpieza ecológicos.",
  },
  {
    icon: "child_care",
    iconBg: "bg-secondary-fixed",
    title: "Kit infantil a pedido",
    description:
      "Cuna de viaje con colchón firme, sillita de comer alta, bañera para bebés y protección en tomas de corriente.",
  },
];

export default function AmenitiesSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl" id="comodidades">
      <div className="max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-1">
            TODO LO QUE INCLUYE TU ESTADÍA
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
            Comodidades pensadas para una experiencia serena
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Desde tu llegada autónoma hasta los detalles diarios de cocina y
            descanso, la casa está totalmente equipada sin costos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl ${amenity.iconBg} flex items-center justify-center text-primary mb-space-md`}
              >
                <span className="material-symbols-outlined text-[26px]">
                  {amenity.icon}
                </span>
              </div>
              <h3 className="font-title-sm text-title-sm text-on-surface mb-space-xs font-bold">
                {amenity.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
