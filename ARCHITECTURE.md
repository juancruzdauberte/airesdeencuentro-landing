# Estructura de Carpetas del Proyecto

```
elencuentro_lp/
├── app/
│   ├── layout.tsx              # Layout root con metadata
│   ├── page.tsx                # Page principal (home)
│   └── globals.css             # Estilos globales + animaciones
│
├── components/
│   ├── Header.tsx              # Navbar fija con glassmorphism
│   ├── Footer.tsx              # Footer con 4 columnas
│   ├── BookingBar.tsx          # Floating booking form
│   ├── OptimizedImage.tsx      # Image component optimizado
│   │
│   └── sections/
│       ├── HeroSection.tsx     # Hero con headline + CTA
│       ├── AmenitiesSection.tsx # Grid de 6 amenities
│       ├── GallerySection.tsx  # Bento gallery (4 imágenes)
│       ├── LocationSection.tsx # Ubicación + 3 POI
│       ├── FAQSection.tsx      # Accordion FAQ
│       └── CTABanner.tsx       # CTA banner terracotta
│
├── lib/
│   └── design-tokens.ts        # Constantes de colores, tipografía
│
├── public/
│   ├── favicon.ico
│   └── fonts/                  # Plus Jakarta Sans + Playfair (opcional)
│
├── tailwind.config.ts          # Config Tailwind con brand colors
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config
├── postcss.config.mjs          # PostCSS config
├── package.json                # Dependencies
│
├── COMPONENT_DOCS.md           # Documentación de componentes
├── ARCHITECTURE.md             # Este archivo
└── README.md                   # README del proyecto
```

## Convenciones

### 📁 Carpetas

- `app/` - App router pages y layouts (Next.js 14+)
- `components/` - React components
  - Components globales en raíz
  - Secciones en `sections/` subfolder
- `lib/` - Utilidades, constantes, helpers
- `public/` - Archivos estáticos

### 📄 Archivos

- Componentes: `PascalCase.tsx`
- Utilidades: `camelCase.ts`
- Estilos: `globals.css` (central)

### 🎨 Componentes

- Todos son `'use client'` si tienen interactividad
- Props tipados con TypeScript
- Animaciones inline o en globals.css
- Accesibilidad considerada (aria labels, etc)

## Estados

✅ Completados:
- ✅ Header con navegación
- ✅ Hero section
- ✅ Booking bar
- ✅ Amenities grid
- ✅ Gallery bento
- ✅ Location section
- ✅ FAQ accordion
- ✅ CTA banner
- ✅ Footer
- ✅ Design tokens
- ✅ Tailwind config
- ✅ Animaciones globales
- ✅ Documentación

⏳ Por verificar:
- Instalación de lucide-react
- Funcionalidad de formulario
- Responsive testing
- Performance optimization

## Variables de Entorno

Actualmente no se requieren. Si necesitas integración:

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_CONTACT_EMAIL=airesdeencuentrobaradero@gmail.com
NEXT_PUBLIC_PHONE=+54 (9) 351 892-4112
```

## Performance Tips

1. **Imágenes**: Usar componente Image de Next.js
2. **Fonts**: Pre-load en layout.tsx
3. **CSS**: Utilizar clases utility de Tailwind
4. **Animaciones**: Respetar `prefers-reduced-motion`
5. **Bundle**: Code splitting automático en routes

## Deploy

Para deploy en Vercel:

```bash
npm run build
vercel deploy
```

Recomendaciones:
- Usar imagen optimizada
- CDN para assets
- Cache headers configurados
