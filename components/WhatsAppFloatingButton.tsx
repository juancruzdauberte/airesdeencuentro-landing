"use client";

import { useState } from "react";
import { X } from "lucide-react";
import BookingBar from "./BookingBar";

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón Flotante */}
      <button
        onClick={toggleModal}
        aria-label="Abrir chat de WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={30}
          height={30}
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.84 1.49h.01c6.6 0 11.97-5.37 11.98-11.97a11.9 11.9 0 0 0-3.51-8.41ZM12.05 21.84a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.68.97.98-3.59-.24-.37a9.9 9.9 0 0 1-1.52-5.28c0-5.49 4.47-9.96 9.97-9.96a9.89 9.89 0 0 1 7.04 2.92 9.89 9.89 0 0 1 2.91 7.05c0 5.49-4.47 9.96-9.96 9.96Zm5.46-7.46c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.77-.73 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </button>

      {/* Overlay - Click para cerrar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={toggleModal}
        />
      )}

      {/* Modal Compacto */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 max-w-sm w-[calc(100vw-2rem)] md:max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header del Modal */}
          <div className="bg-[#25D366] rounded-t-2xl p-3 flex items-center justify-between mb-0">
            <h3 className="text-white font-semibold text-sm">
              Consultar Disponibilidad
            </h3>
            <button
              onClick={toggleModal}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
          </div>

          {/* Contenedor del BookingBar Compacto */}
          <div className="bg-white rounded-b-2xl shadow-2xl overflow-hidden">
            <div className="p-3 md:p-4">
              <BookingBar compact={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
