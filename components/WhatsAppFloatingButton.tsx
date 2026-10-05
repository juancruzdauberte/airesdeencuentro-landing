"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
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
        <MessageCircle size={24} className="fill-current" />
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
