---
feature: Casa El Encuentro Landing Page - Next.js Recreation
status: in_progress
started_at: 2024-01-19
project: elencuentro_lp
description: |
  Recreate the complete Casa El Encuentro landing page from Stitch design
  system into Next.js with React components, maintaining design fidelity.
  Source: DESIGN.md + index.html from Stitch project.

design_system:
  colors: Burgundy primary (#5f0219), secondary (#aa3343), tertiary (#312a2d)
  typography: Plus Jakarta Sans (all weights)
  spacing: Tailwind scale (gutter-sm/md/lg + margins)
  radius: 0.25-1.5rem + pill
  
---

## Tasks

### Task 1: Configure Design System in tailwind.config
- Status: pending
- Extract all colors from DESIGN.md into Tailwind theme
- Add typography scale (headline-xl, headline-lg, body-lg, etc.)
- Configure spacing tokens (gutter, margin, space-*)
- Add border radius presets
- Commit: "chore: configure tailwind design tokens from DESIGN.md"

### Task 2: Create layout components (Header, Footer, main layout)
- Status: pending
- Header with nav, logo, CTA button (glassmorphism)
- Responsive nav (hidden on mobile, drawer pattern)
- Global layout structure with next/image imports
- Commit: "feat: add header and layout components"

### Task 3: Implement Hero section
- Status: pending
- Eyebrow badge with pulse animation
- Headline + subheadline
- Two CTA buttons (primary + secondary)
- Hero image with gradient overlay
- Floating badge cards (ratings + features)
- Ambient blur glows in background
- Commit: "feat: implement hero section"

### Task 4: Build Quick Facts strip
- Status: pending
- Grid layout (2 cols mobile, 3 cols tablet, 6 cols desktop)
- Icons from Material Symbols
- 6 quick facts with icon + title + description
- Commit: "feat: add quick facts strip"

### Task 5: Create Gallery & Spaces section
- Status: pending
- 4-column grid (responsive: 1 col mobile, 2 col tablet)
- Card component with image, tag, title, description
- Hover scale animation on images
- Section header with CTA link
- Commit: "feat: build gallery and spaces section"

### Task 6: Build Amenities grid
- Status: pending
- 4-column responsive grid
- Amenity cards with icon, title, description
- Colored icon backgrounds (primary-fixed, secondary-fixed)
- Commit: "feat: add amenities section"

### Task 7: Implement Policies section
- Status: pending
- Decorative background blur element
- Section header with badge
- 4 policy cards (2x2 grid on desktop)
- Icons + titles + descriptions + highlight notes
- Commit: "feat: create policies section"

### Task 8: Build Testimonials section
- Status: pending
- 3-column grid testimonial cards
- Star ratings display
- Avatar initials + guest name
- Commit: "feat: add testimonials section"

### Task 9: Create Location section
- Status: pending
- 2-column layout (content + map placeholder)
- Location features list with icons
- Privacy note about address
- Map placeholder card
- Commit: "feat: implement location section"

### Task 10: Build FAQ Accordion component
- Status: pending
- FAQ items with click-to-expand logic
- Chevron rotation animation
- One-open-at-a-time behavior
- Commit: "feat: add FAQ accordion"

### Task 11: Implement final CTA section
- Status: pending
- Full-width dark primary background
- Large headline + subheadline
- WhatsApp + Email CTA buttons
- Decorative blur element
- Commit: "feat: create final contact CTA"

### Task 12: Add inter-page scroll navigation + smooth scrolling
- Status: pending
- Anchor link handling (smooth scroll)
- Active nav highlight
- Commit: "feat: add smooth scroll navigation"

### Task 13: Optimize images and responsive design
- Status: pending
- Convert all image URLs to use next/image
- Add srcSet for responsive images
- Test all breakpoints (mobile, tablet, desktop)
- Commit: "perf: optimize images and responsive layout"

### Task 14: Add micro-interactions and polish
- Status: pending
- Button hover states
- Card shadows and hover effects
- Icon animations
- Commit: "feat: add micro-interactions and polish"

## Success Criteria
- [ ] 1:1 fidelity with Stitch design system colors and typography
- [ ] All sections responsive across mobile/tablet/desktop
- [ ] Tailwind classes match design tokens exactly
- [ ] FAQ accordion works smoothly
- [ ] All CTAs point to correct destinations (WhatsApp, email)
- [ ] Lighthouse performance score > 90
- [ ] No console warnings

## Notes
- Use React 19 Server Components where possible
- Tailwind v4 with PostCSS
- Plus Jakarta Sans already available (import in globals.css)
- Material Symbols for icons (link in DESIGN.md)
- All colors from DESIGN.md - no arbitrary values
