export default function LocationSection() {
  return (
    <section className="w-full py-space-xl" id="ubicacion">
      <div className="max-w-[1280px] mx-auto px-margin-sm lg:px-margin-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          <div className="lg:col-span-6">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-1">
              UBICACIÓN Y ENTORNO
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
              En un barrio residencial arbolado y sereno
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-md">
              Ubicada en una calle cortada sin tránsito vehicular pesado, Casa
              El Encuentro te brinda total silencio sin alejarte de los mejores
              cafés de especialidad, almacenes orgánicos y accesos rápidos.
            </p>
            <div className="space-y-space-xs mb-space-md">
              <div className="flex items-center gap-space-xs text-body-md text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  local_cafe
                </span>
                <span>A 4 minutos de cafeterías, panaderías artesanales y bistrós</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-md text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  local_pharmacy
                </span>
                <span>Farmacia, minimercado y cajero automático a 300 metros</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-md text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  shield
                </span>
                <span>Zona con seguridad vecinal permanente y alumbrado LED</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic">
              * Por razones de privacidad de nuestros huéspedes y propietarios,
              la dirección exacta con mapa interactivo y coordenadas GPS se envía
              automáticamente junto con la confirmación de la reserva.
            </p>
          </div>

          <div className="lg:col-span-6 bg-surface-container-low rounded-2xl p-space-lg border border-outline-variant/40 flex flex-col justify-between">
            <div className="flex items-center gap-space-sm mb-space-md">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[26px]">
                  pin_drop
                </span>
              </div>
              <div>
                <h3 className="font-title-sm text-title-sm font-bold text-on-surface">
                  Zona Norte Residencial
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Acceso directo por autopista, a 25 min de CABA
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-surface-container-high h-56 flex items-center justify-center relative border border-outline-variant/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              <div className="text-center p-space-md relative z-10">
                <span className="material-symbols-outlined text-primary text-[42px] mb-1 block">
                  map
                </span>
                <p className="font-title-sm text-title-sm font-bold text-on-surface">
                  Ubicación discreta & protegida
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1 mx-auto">
                  Te compartimos la ubicación exacta al confirmar tu fecha para
                  resguardar la tranquilidad de la propiedad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
