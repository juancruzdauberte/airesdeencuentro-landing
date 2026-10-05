"use client";

import { Calendar, Users, MessageCircle } from "lucide-react";
import { useState } from "react";

interface BookingBarProps {
  compact?: boolean;
}

// Función para convertir fecha de yyyy-mm-dd a dd/mm/yyyy
const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

export default function BookingBar({ compact = false }: BookingBarProps) {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("6");

  // Formatea las fechas para WhatsApp
  const formattedCheckin = formatDate(checkin);
  const formattedCheckout = formatDate(checkout);

  // URL de WhatsApp con fechas formateadas
  const whatsappUrl =
    "https://wa.me/543329305210?text=" +
    encodeURIComponent(
      `Hola! Estoy interesado en reservar una estadía.\n\nFechas de llegada: ${formattedCheckin}\nFechas de salida: ${formattedCheckout}\nHuéspedes: ${guests} personas`,
    );

  if (compact) {
    // Modo compacto para el modal flotante
    return (
      <div className="w-full">
        <div
          className="bg-white rounded-lg border border-stone-200 p-3 space-y-3"
          style={{
            background: "rgba(255, 255, 255, 1)",
          }}
        >
          {/* Grid compacto - 2 columnas en mobile, 4 en desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Check-in */}
            <div className="flex flex-col text-left group">
              <label
                className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-1 flex items-center gap-1 transition-colors group-focus-within:text-brand-terracotta line-clamp-1"
                htmlFor="check-in-date"
              >
                <Calendar size={12} className="text-brand-terracotta flex-shrink-0" />
                <span className="hidden sm:inline">Check-in</span>
                <span className="sm:hidden">Llegada</span>
              </label>
              <input
                aria-label="Fecha de llegada"
                className="border-0 p-0 text-xs sm:text-sm font-medium text-brand-charcoal focus:ring-0 cursor-pointer bg-transparent outline-none"
                id="check-in-date"
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>

            {/* Check-out */}
            <div className="flex flex-col text-left group">
              <label
                className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-1 flex items-center gap-1 transition-colors group-focus-within:text-brand-terracotta line-clamp-1"
                htmlFor="check-out-date"
              >
                <Calendar size={12} className="text-brand-terracotta flex-shrink-0" />
                <span className="hidden sm:inline">Check-out</span>
                <span className="sm:hidden">Salida</span>
              </label>
              <input
                aria-label="Fecha de salida"
                className="border-0 p-0 text-xs sm:text-sm font-medium text-brand-charcoal focus:ring-0 cursor-pointer bg-transparent outline-none"
                id="check-out-date"
                type="date"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col text-left group">
              <label
                className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-1 flex items-center gap-1 transition-colors group-focus-within:text-brand-terracotta line-clamp-1"
                htmlFor="guests-select"
              >
                <Users size={12} className="text-brand-terracotta flex-shrink-0" />
                <span className="hidden sm:inline">Huéspedes</span>
                <span className="sm:hidden">Personas</span>
              </label>
              <select
                className="border-0 p-0 text-xs sm:text-sm font-medium text-brand-charcoal focus:ring-0 cursor-pointer bg-transparent outline-none"
                id="guests-select"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="+6">+6</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-2 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold text-xs sm:text-sm rounded-lg transition duration-200 flex items-center justify-center gap-1 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:scale-95 h-10 whitespace-nowrap"
              >
                <MessageCircle size={14} className="hidden sm:block" />
                <span>Consultar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Modo normal (desktop)
  return (
    <div
      className="relative max-w-4xl mx-auto -mt-10 sm:-mt-14 z-20 px-4"
      data-purpose="booking-bar"
      id="disponibilidad"
    >
      <div
        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-floating p-4 sm:p-5 border border-stone-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end animate-fade-in-up"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Check-in */}
        <div className="flex flex-col text-left px-2 group">
          <label
            className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-1 flex items-center gap-1.5 transition-colors group-focus-within:text-brand-terracotta"
            htmlFor="check-in-date"
          >
            <Calendar size={14} className="text-brand-terracotta" />
            Check-in
          </label>
          <input
            aria-label="Fecha de llegada"
            className="border-0 p-0 text-sm font-medium text-brand-charcoal focus:ring-0 cursor-pointer bg-transparent outline-none"
            id="check-in-date"
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col text-left px-2 sm:border-l sm:border-stone-200 group">
          <label
            className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-1 flex items-center gap-1.5 transition-colors group-focus-within:text-brand-terracotta"
            htmlFor="check-out-date"
          >
            <Calendar size={14} className="text-brand-terracotta" />
            Check-out
          </label>
          <input
            aria-label="Fecha de salida"
            className="border-0 p-0 text-sm font-medium text-brand-charcoal focus:ring-0 cursor-pointer bg-transparent outline-none"
            id="check-out-date"
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col text-left px-2 lg:border-l lg:border-stone-200 group">
          <label
            className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-1 flex items-center gap-1.5 transition-colors group-focus-within:text-brand-terracotta"
            htmlFor="guests-select"
          >
            <Users size={14} className="text-brand-terracotta" />
            Huéspedes
          </label>
          <select
            className="border-0 p-0 text-sm font-medium text-brand-charcoal focus:ring-0 cursor-pointer bg-transparent outline-none"
            id="guests-select"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="2">2 personas</option>
            <option value="3">3 personas</option>
            <option value="4">4 personas</option>
            <option value="5">5 personas</option>
            <option value="6">6 personas</option>
            <option value="+6">+6 personas</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 px-4 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold text-sm rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle size={18} />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
