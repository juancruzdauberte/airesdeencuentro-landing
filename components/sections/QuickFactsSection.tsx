const facts = [
  {
    icon: "groups",
    title: "Hasta 6 huéspedes",
    description: "Capacidad ideal",
  },
  {
    icon: "bed",
    title: "3 dormitorios",
    description: "Luminosos y serenos",
  },
  {
    icon: "bathtub",
    title: "2 baños completos",
    description: "1 en suite principal",
  },
  {
    icon: "outdoor_grill",
    title: "Jardín & Parrilla",
    description: "Galería techada",
  },
  {
    icon: "wifi",
    title: "Wi-Fi 300 Mbps",
    description: "Fibra simétrica",
  },
  {
    icon: "key",
    title: "Check-in presencial",
    description: "Contacto en persona",
  },
];

export default function QuickFactsSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-lg border-y border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md text-center">
          {facts.map((fact, index) => (
            <div key={index} className="flex flex-col items-center p-space-xs">
              <span className="material-symbols-outlined text-primary text-[28px] mb-1">
                {fact.icon}
              </span>
              <span className="font-title-sm text-title-sm font-bold text-on-surface">
                {fact.title}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {fact.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
