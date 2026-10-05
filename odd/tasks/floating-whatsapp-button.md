# Botón Flotante de WhatsApp con BookingBar Compacto

## Objetivo
Implementar un botón flotante de WhatsApp en la esquina inferior derecha que muestre un BookingBar compacto adaptado a mobile cuando se presione.

## Componentes
1. **WhatsAppFloatingButton.tsx** - Botón flotante reutilizable
2. **BookingBar.tsx** - Ajustar para aceptar modo compacto
3. **app/layout.tsx** - Integrar el botón flotante

## Requisitos
- Botón flotante posicionado abajo a la derecha
- Animación suave al abrir/cerrar
- BookingBar compacto y responsivo
- Adaptado a mobile (pantallas pequeñas)
- Estado sincronizado entre el botón y el modal

---

## Tareas

### 1. Crear componente WhatsAppFloatingButton.tsx
- [ ] Crear archivo `components/WhatsAppFloatingButton.tsx`
- [ ] Icono de WhatsApp flotante
- [ ] Estado para mostrar/ocultar modal
- [ ] Modal con el BookingBar compacto
- [ ] Animaciones suaves (fade, scale)

### 2. Actualizar BookingBar.tsx
- [ ] Agregar prop `compact?: boolean` para modo compacto
- [ ] Ajustar estilos para mobile en modo compacto
- [ ] Reducir padding y gap en mobile
- [ ] Cambiar grid a single column en mobile

### 3. Integrar en layout
- [ ] Agregar WhatsAppFloatingButton al RootLayout
- [ ] Verificar z-index y stacking context
- [ ] Probar en mobile y desktop

---

## Notas técnicas
- Usar Tailwind para estilos responsivos
- WhatsApp número: 543329305210 (del BookingBar existente)
- Icono: lucide-react `MessageCircle` o `Send` para WhatsApp
