'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import galleryImages from './gallery-images.json';

export default function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (!modal) return;
    const restoreScroll = () => {
      document.body.style.overflow = previousOverflow;
      opener.current?.focus();
    };
    const previousOverflow = document.body.style.overflow;
    modal.addEventListener('close', restoreScroll);
    return () => {
      modal.removeEventListener('close', restoreScroll);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function navigate(direction: number) {
    setActive((current) => (current + direction + galleryImages.length) % galleryImages.length);
  }

  function openPhoto(index: number, button: HTMLButtonElement) {
    opener.current = button;
    setActive(index);
    dialog.current?.showModal();
    document.body.style.overflow = 'hidden';
  }

  return (
    <section className="py-20 lg:py-28 bg-brand-sand/50" data-purpose="photo-gallery" id="galeria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">Galería visual</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mt-1">Conoce cada rincón</h2>
          </div>
          <p className="text-brand-muted text-sm sm:text-base max-w-md">
            Un recorrido por Aires de Encuentro, en imágenes. Abre una fotografía y descubre los espacios de tu próxima escapada.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5" id="la-casa">
          {galleryImages.slice(0, visibleCount).map((src, index) => (
            <button
              type="button"
              key={src}
              onClick={(event) => openPhoto(index, event.currentTarget)}
              aria-label={`Ampliar fotografía ${index + 1} de Aires de Encuentro`}
              aria-haspopup="dialog"
              className={`gallery-card group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-sand shadow-soft focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-terracotta ${index === 0 ? 'col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto' : 'aspect-[4/3]'}`}
              style={{ animationDelay: `${(index % 6) * 60}ms` }}
            >
              <Image src={src} alt={`La casa Aires de Encuentro, fotografía ${index + 1}`} fill sizes={index === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'} className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-sm">{String(index + 1).padStart(2, '0')} <span className="sr-only">de {galleryImages.length}</span></span>
              <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-full bg-black/50 text-white w-10 h-10 flex items-center justify-center text-2xl">＋</span>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-sm text-brand-muted" role="status">{Math.min(visibleCount, galleryImages.length)} de {galleryImages.length} fotografías</p>
          {visibleCount < galleryImages.length && (
            <button type="button" onClick={() => setVisibleCount((count) => Math.min(count + 9, galleryImages.length))} className="rounded-full border border-brand-terracotta px-7 py-3 text-brand-terracotta font-semibold hover:bg-brand-terracotta hover:text-white transition-colors focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-brand-terracotta">Ver más fotografías <span aria-hidden="true">↓</span></button>
          )}
        </div>
      </div>

      <dialog
        ref={dialog}
        aria-labelledby="gallery-dialog-title"
        className="gallery-dialog fixed inset-0 m-auto w-[96vw] max-w-6xl max-h-[95dvh] rounded-2xl bg-brand-charcoal text-white p-3 sm:p-5 backdrop:bg-black/85"
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1); }
          if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1); }
        }}
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 id="gallery-dialog-title" className="font-serif text-lg">Aires de Encuentro · La casa</h3>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Cerrar galería" className="gallery-control text-2xl">×</button>
        </div>
        <div
          className="relative h-[60dvh] sm:h-[70dvh] touch-pan-y"
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const distance = touchStart.current - event.changedTouches[0].clientX;
            if (Math.abs(distance) > 50) navigate(distance > 0 ? 1 : -1);
            touchStart.current = null;
          }}
          onTouchCancel={() => { touchStart.current = null; }}
        >
          <Image key={active} src={galleryImages[active]} alt={`La casa Aires de Encuentro, fotografía ${active + 1} de ${galleryImages.length}`} fill sizes="96vw" className="gallery-photo object-contain" />
        </div>
        <div className="flex items-center justify-between mt-3 gap-3">
          <button type="button" onClick={() => navigate(-1)} aria-label="Fotografía anterior" className="gallery-control">←</button>
          <p aria-live="polite" aria-atomic="true" className="text-sm">{active + 1} / {galleryImages.length}</p>
          <button type="button" onClick={() => navigate(1)} aria-label="Fotografía siguiente" className="gallery-control">→</button>
        </div>
      </dialog>

      <style jsx>{`
        .gallery-card { animation: gallery-reveal 0.5s ease-out both; }
        .gallery-photo { animation: gallery-reveal 0.25s ease-out both; }
        .gallery-control { display: flex; align-items: center; justify-content: center; min-width: 44px; min-height: 44px; border: 1px solid currentColor; border-radius: 999px; }
        .gallery-control:hover { background: #ffffff20; }
        .gallery-control:focus-visible { outline: 3px solid white; outline-offset: 3px; }
        @keyframes gallery-reveal { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .gallery-card, .gallery-photo { animation: none; } }
      `}</style>
    </section>
  );
}
