---
name: El Encuentro
colors:
  surface: '#f8f9ff'
  surface-dim: '#d6dae4'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4fd'
  surface-container: '#eaeef8'
  surface-container-high: '#e4e8f2'
  surface-container-highest: '#dee2ec'
  on-surface: '#171c23'
  on-surface-variant: '#564242'
  inverse-surface: '#2c3138'
  inverse-on-surface: '#edf1fb'
  outline: '#897172'
  outline-variant: '#ddc0c0'
  surface-tint: '#a33947'
  primary: '#5f0219'
  on-primary: '#ffffff'
  primary-container: '#7e1d2d'
  on-primary-container: '#ff8e97'
  inverse-primary: '#ffb2b7'
  secondary: '#aa3343'
  on-secondary: '#ffffff'
  secondary-container: '#fc717e'
  on-secondary-container: '#70021d'
  tertiary: '#312a2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#484043'
  on-tertiary-container: '#b7acb0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b7'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#842231'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b6'
  on-secondary-fixed: '#40000d'
  on-secondary-fixed-variant: '#891a2d'
  tertiary-fixed: '#ecdfe3'
  tertiary-fixed-dim: '#cfc3c7'
  on-tertiary-fixed: '#201a1d'
  on-tertiary-fixed-variant: '#4d4548'
  background: '#f8f9ff'
  on-background: '#171c23'
  surface-variant: '#dee2ec'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the warmth, clarity, and sophistication of high-touch hospitality. Built for an elevated vacation and temporary rental platform, the aesthetic balances modern architectural minimalism with welcoming residential intimacy. The visual atmosphere is sunlit, uncluttered, and orderly—evoking peace of mind, trustworthiness, and effortless retreat.

The audience consists of intentional travelers, remote professionals, and discerning vacationers who value seamless usability, transparency, and curated aesthetics over overwhelming choice.

The visual style merges luminous warm minimalism with delicate physical tactile cues:
- Generous breathing space and natural illumination principles.
- Low-friction, quiet layouts that elevate photography and spatial clarity.
- Grounded, deeply confident burgundy accents functioning as deliberate focal points rather than decorative noise.

## Colors

The palette is engineered around luminous light fields and deep architectural contrast. The canvas relies on three distinct layers of white and warm tone:
- **Canvas Base:** `#FDFCFB` (subtle porcelain tint for natural daylight warmth).
- **Surface Level 1:** `#FFFFFF` (pure crisp white for elevated cards and distinct modules).
- **Surface Level 2 (Recessed/Muted):** `#F4F4F6` (clean light neutral for inactive tabs, input foundations, and dividers).

### Hierarchy & Role Assignment
- **Primary Burgundy (`#7E1D2D`):** Reserved for core high-intent actions (primary booking triggers, key active navigation anchors, verification highlights).
- **Secondary Bordó (`#9E2A3B`):** Interactive hover states, secondary highlights, and refined textual emphasis.
- **Tertiary Tint (`#F8EBEF`):** Subtle backdrops for badges, category chips, selected date spans, and promotional callouts.
- **Text & Foundations (`#1E232A` & `#4B5563`):** High-contrast primary charcoal for legibility without the harshness of pure black; muted slate for metadata, labels, and auxiliary descriptions.

## Typography

The type scale is executed entirely through **Plus Jakarta Sans**, harnessing its clean geometric proportions, humanized curves, and crisp screen rendering across dense data points and expansive display statements.

### Editorial Logic
- **Headlines:** Set with deliberate negative letter-spacing (`-0.02em` on `headline-xl` and `headline-lg`) for a high-end editorial rhythm that conveys calm assurance.
- **Body:** Open line-heights (1.6x) are maintained across long property narratives and review flows to maximize legibility and leisure reading.
- **Labels & Microcopy:** Used for tags, pricing sub-labels, and host status badges; these take slightly expanded tracking (`+0.01em` to `+0.02em`) with medium to semi-bold weights for rapid parsing.

## Layout & Spacing

The layout philosophy uses a flexible, bounded fluid grid architecture that honors whitespace as an active structural element:

- **Desktop (12 Columns, Max Width 1280px):** 2rem gutters (`gutter-lg`) with 4rem outer margins (`margin-lg`). Property grids map across 3 or 4 columns, preserving spacious photographic aspect ratios.
- **Tablet (8 Columns, 768px - 1024px):** 1.5rem gutters (`gutter`), 2rem margins (`margin`). Property listings switch to a balanced 2-column flow.
- **Mobile (4 Columns, <768px):** 1rem gutters (`gutter-sm`), 1rem margins (`margin-sm`). Edge-to-edge full-bleed card treatment with internal gutters.

Spacing enforces clear hierarchy: tight couplings between labels and values use `space-xs` and `space-sm`, component internals use `space-md` and `space-lg`, and major structural groupings divide on `space-xl`.

## Elevation & Depth

Visual hierarchy is maintained via luminous ambient layering rather than hard artificial drops:

- **Surface Tiers:**
  - *Floor Base:* `#FDFCFB`
  - *Resting Cards & Panels:* Pure white `#FFFFFF` paired with an ultra-soft ambient shadow: `0 4px 20px -2px rgba(30, 35, 42, 0.04), 0 1px 3px 0 rgba(30, 35, 42, 0.02)`.
  - *Hover & Floating Modules:* Search pill overlays, date picker flyouts, and active cards float with an elevated, wide-dispersion shadow: `0 16px 36px -4px rgba(30, 35, 42, 0.06), 0 4px 12px -2px rgba(30, 35, 42, 0.03)`.
- **Translucent Overlays (Glassmorphism Light):** Header navigation bars and floating mobile booking dockers utilize frosted translucency: `background: rgba(253, 252, 251, 0.82)` with `backdrop-filter: blur(12px)` and a whisper-thin outline `rgba(30, 35, 42, 0.05)`.
- **Ghost Borders:** Outlines are kept whisper-light (`1px solid #ECECEC` or `rgba(30, 35, 42, 0.06)`) to ground elements without severing visual flow.

## Shapes

The geometric identity relies on soft, welcoming corner radii that soften strict architectural photography.

- **Base Radius (`0.5rem` / 8px):** Applied to form fields, individual date selector cells, and small metadata chips.
- **Container Radius (`1rem` / 16px):** Standard across property preview cards, host profile cards, and modal dialogs.
- **Hero & Module Radius (`1.5rem` / 24px):** Used for large imagery hero headers, search docks, and featured booking trays.
- **Pill / Circular:** Strictly reserved for status badges, search trigger buttons, counter increments, and floating icon buttons.

## Components

### Buttons
- **Primary:** Filled in `#7E1D2D` with white text. Roundedness follows pill or 12px depending on context. Micro-transition to `#9E2A3B` on hover.
- **Secondary / Ghost:** Transparent base with a subtle border (`1px solid rgba(30, 35, 42, 0.12)`) and `#1E232A` text; shifts to `#F8EBEF` background on interaction with burgundy text.
- **Tertiary / Subdued:** Pure text in `#7E1D2D` with no border; underline appears strictly on focus/hover.

### Search & Date-Picker Bar
- Compact pill-shaped composite bar with distinct segments (Location, Dates, Guests).
- Segments feature subtle vertical divider lines (`#E5E7EB`) that disappear on hover.
- Active segment illuminates with a `#FFFFFF` backdrop elevated by an ambient shadow.
- Unified burgundy circle search trigger button embedded directly inside the trailing edge.

### Property Showcase Cards
- Aspect ratio of image container locked to 4:3 with `border-radius: 16px`.
- Image contains an intrinsic favorite heart toggle in the top right (circular translucent white backing with gentle blur).
- Minimalist caption hierarchy: Location (bold `#1E232A`), proximity/distance (muted `#4B5563`), price per night (prominent `#1E232A`), and rating badge (subtle star with single decimal score).

### Chips & Badges
- **Category Chips:** Subtle `#F4F4F6` background with `#4B5563` text; switches to solid `#1E232A` or `#7E1D2D` with crisp white text when selected.
- **Host Credibility Badge:** Soft tinted background (`#F8EBEF`), deep burgundy text (`#7E1D2D`), accompanied by a micro shield or star icon.

### Form Inputs & Checkboxes
- **Input Fields:** `#FFFFFF` background, `1px solid #E5E7EB`, 10px corner radius. Focus triggers a refined `1.5px solid #7E1D2D` ring with a diffuse `#F8EBEF` outer halo.
- **Checkboxes & Radios:** Minimalist geometry; when checked, smoothly filled with `#7E1D2D` displaying a crisp white indicator mark.