const policies = [
  {
    icon: "payments",
    number: "1",
    title: "Reserva directa y señas",
    description:
      'La confirmación de las fechas se realiza mediante un 50% de seña por transferencia bancaria (pesos o dólares) o tarjeta de crédito. El 50% restante se cancela al momento del check-in.',
    highlight: "Emisión de factura y comprobante oficial inmediato",
    highlightIcon: "check_circle",
  },
  {
    icon: "event_repeat",
    number: "2",
    title: "Política de cancelación flexible",
    description:
      "Cancelación flexible: Reembolso del 100% de la seña avisando hasta 14 días antes del ingreso. Para cancelaciones entre 7 y 14 días previos, se reintegra el 50% o se traslada el saldo para futuras fechas en el año.",
    highlight: "Flexibilidad ante imprevistos de fuerza mayor",
    highlightIcon: "check_circle",
  },
  {
    icon: "schedule",
    number: "3",
    title: "Horarios & Check-in autónomo",
    description:
      "Check-in: Desde las 15:00 hs. Recibirás tu clave digital única para la cerradura inteligente 24 hs antes. Podés llegar en cualquier momento sin esperar a nadie. Check-out: Hasta las 11:00 hs (late check-out sujeto a disponibilidad previa).",
    highlight: "Clave personal y encriptada por estadía",
    highlightIcon: "lock",
  },
  {
    icon: "gavel",
    number: "4",
    title: "Normas de la casa y convivencia",
    description:
      "100% libre de humo en interiores. Mascotas educadas son bienvenidas previa consulta. Prohibidas fiestas o eventos ruidosos para resguardar la serenidad del entorno. Solicitamos un depósito en garantía reembolsable al finalizar la estadía.",
    highlight: "Pet-friendly coordinado · Cuidado mutuo",
    highlightIcon: "pets",
  },
];

export default function PoliciesSection() {
  return (
    <section className="w-full py-space-xl" id="politicas">
      <div className="max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg">
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-space-md sm:p-space-xl shadow-lg relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mb-space-lg relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-primary font-label-sm text-label-sm font-semibold mb-2">
              <span className="material-symbols-outlined text-[16px]">
                verified_user
              </span>
              <span>TRANSPARENCIA Y SEGURIDAD GARANTIZADA</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">
              Políticas de reserva claras y transparentes
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Queremos que planifiques tu estadía con total tranquilidad y
              previsibilidad. Sin sorpresas al ingresar ni cargos ocultos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter relative z-10">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-surface-container-low/70 border border-outline-variant/30 rounded-2xl p-space-lg flex flex-col justify-between hover:bg-surface-container-low transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-title-sm mb-space-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      {policy.icon}
                    </span>
                  </div>
                  <h3 className="font-title-sm text-title-sm text-on-surface font-bold mb-space-xs">
                    {policy.number}. {policy.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {policy.description}
                  </p>
                </div>
                <div className="pt-space-sm mt-space-sm border-t border-outline-variant/20 flex items-center gap-1.5 text-primary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    {policy.highlightIcon}
                  </span>
                  <span>{policy.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
