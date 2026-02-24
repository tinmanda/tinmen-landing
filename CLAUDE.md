# CLAUDE.md

## Project Overview

This is the **landing page / marketing website** for the Tinmen platform. It introduces what Tinmen is, links to the three apps (User, Kitchen, Delivery), and lists contributors. It is a static site — no server-side rendering needed.

**Status:** Early development. Simple static site that will grow with animations, sections, and content.

## Related Repositories

| Repo | Path | Purpose |
|------|------|---------|
| **tinmen-user** | `/Users/mukesh/Code/tinmen-user` | Buyer app — browse food, order, chat |
| **tinmen-kitchen** | `/Users/mukesh/Code/tinmen-kitchen` | Chef app — menu, listings, orders, payments |
| **tinmen-delivery** | `/Users/mukesh/Code/tinmen-delivery` | Delivery app — jobs, signup, interview |
| **tinmen-cloud** | `/Users/mukesh/Code/tinmen-cloud` | Cloud Code — shared backend (Back4App) |
| **tinmen-admin** | `/Users/mukesh/Code/tinmen-admin` | Admin app — stats, clusters, database |
| **tinmen-landing** | `/Users/mukesh/Code/tinmen-landing` | **This repo** — marketing site |

## Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Quicksand (via Google Fonts)
- **Output**: Pure static files — deploy anywhere (Vercel, Netlify, GitHub Pages)

## Commands

```bash
npm run dev        # Dev server (Vite)
npm run build      # TypeScript check + production build
npm run preview    # Preview production build locally
npm run lint       # ESLint
```

## Design Language

This landing page shares the Tinmen design system used across tinmen-user and tinmen-kitchen.

### Design Philosophy

**Aesthetic:** Sweetgreen-inspired, premium-casual design
- **Warm minimalist** palette (cream backgrounds, NOT cold whites)
- **Organic, premium feel** via deep forest green primary color
- **Depth via color layering**, not heavy shadows
- **Modern typography** with tight letter spacing on headings
- **Functional, clean UI** with generous whitespace

### Color Palette

All colors are defined as Tailwind CSS theme variables in `src/index.css`.

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#1B3D2F` | Main brand, headings, CTAs |
| `primary-dark` | `#143328` | Hover/pressed states |
| `primary-light` | `#2A5A45` | Focus states, lighter accents |
| `accent` | `#df1e10` | Brand red — sparingly for critical |
| `accent-light` | `#E84A3F` | Lighter red variant |
| `accent-muted` | `#C8E64C` | Lime/yellow-green for highlights |
| `warm-50` | `#FAF8F3` | Page background (warm cream) |
| `warm-100` | `#F5F1EA` | Secondary backgrounds |
| `warm-200` | `#EDE9E1` | Tertiary backgrounds |
| `warm-300` | `#E5E1D8` | Borders, dividers |
| `warm-400` | `#D4CFC6` | Emphasized borders |
| `warm-500` | `#A8A29E` | Muted text |
| `warm-600` | `#78716C` | Secondary text |
| `warm-700` | `#57534E` | Medium emphasis text |
| `warm-800` | `#3D3835` | High emphasis text |
| `warm-900` | `#1A1815` | Near-black text |
| `surface` | `#FFFFFF` | Cards, elevated elements |
| `surface-muted` | `#EDE9E1` | Muted surfaces |
| `text-primary` | `#1A3C34` | Primary text (dark green-black) |
| `text-secondary` | `#717171` | Secondary text |
| `text-tertiary` | `#999999` | Tertiary text |
| `success` | `#1B7A5A` | Positive status |
| `error` | `#C44B3F` | Error/negative |
| `warning` | `#D4930A` | Warning/caution |

### Typography

- **Font**: Quicksand (loaded via Google Fonts in `index.html`)
- **Headings**: Bold (700), tight negative letter-spacing for modern look
- **Body**: Regular (400), 15-16px
- **Captions/Labels**: Medium (500-600), 11-12px, sometimes uppercase

### Key Design Rules

1. **Warm backgrounds** — use `bg-warm-50` for page, never cold white
2. **Cards use `bg-surface`** (white) for elevation contrast against warm background
3. **Minimal shadows** — prefer color layering for depth
4. **Negative letter-spacing** on large headings (`tracking-tight` or `tracking-tighter`)
5. **4px grid** for spacing consistency
6. **Border colors** are warm-toned (`border-border`, `border-border-light`)

## Site Structure (Planned)

### Navigation
- Logo + brand name
- Links: About, For Chefs, For Delivery, Contributors
- No dropdowns/submenus needed initially

### Sections
1. **Hero** — Animated header with phone mockup and floating food icons (Framer Motion)
2. **About** — What is Tinmen, why it exists, free app messaging
3. **Apps** — Three app cards (User, Kitchen, Delivery) each with Play Store + App Store links
4. **Contributors** — Grid/list of people contributing to the project
5. **Footer** — Links, copyright

### App Store Links (Placeholder)
- **Tinmen (User App)**: Play Store + App Store
- **Tinmen Kitchen**: Play Store + App Store
- **Tinmen Delivery**: Play Store + App Store

## Animation Reference

Inspired by [wisprflow.ai](https://wisprflow.ai/):
- **Hero**: Phone mockup with floating food/cooking icons moving along curved paths (Framer Motion `motion.div` with CSS path animations or offset-path)
- **Scroll reveals**: Sections fade/slide in on scroll (`whileInView`)
- **Subtle hover effects** on cards and buttons
- Keep animations tasteful — enhance, don't overwhelm

## File Structure

```
src/
├── App.tsx          # Main app with all sections
├── App.css          # App-specific styles (minimal)
├── index.css        # Tailwind theme + base styles
├── main.tsx         # React entry point
├── components/      # (future) Reusable components
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Apps.tsx
│   ├── Contributors.tsx
│   └── Footer.tsx
└── assets/          # Images, icons
```

## Path Aliases

`@/` maps to `src/` (configured in `vite.config.ts`).

```typescript
import { Something } from '@/components/Something'
```

## Roadmap / TODO

### Visual Reference
The target look & feel is inspired by [wisprflow.ai](https://wisprflow.ai/). Key takeaways:
- Clean, modern marketing site with warm cream + dark section contrast
- Sticky top nav with logo, links, and CTA buttons (rounded pill style)
- Large serif/display headings with tight letter-spacing
- Generous whitespace between sections
- Mobile-responsive with hamburger menu on small screens

### Hero Section (Priority)
- [ ] Phone mockup in the center/right showing the Tinmen app
- [ ] Floating food/cooking icons (dal, biryani, samosa, etc.) moving along curved paths behind/around the phone — similar to the Wispr app icon carousel animation
- [ ] The icons should gently orbit/drift in a curved arc, creating a sense of motion
- [ ] Bold headline + subtitle text on the left
- [ ] CTA buttons linking to app stores
- [ ] Consider making this the "main event" of the landing page — the animation should be the showpiece

### Navigation
- [ ] Sticky top nav with frosted glass effect (backdrop blur)
- [ ] Logo + "Tinmen" brand name on the left
- [ ] Nav links: About, For Chefs, For Delivery, Contributors
- [ ] No dropdown/submenus needed initially
- [ ] Mobile: hamburger menu
- [ ] Style similar to Wispr's rounded nav bar (pill-shaped container)

### App Download Links
- [ ] Three app sections — one for each app:
  - **Tinmen** (User App) — Play Store + App Store links
  - **Tinmen Kitchen** (Chef App) — Play Store + App Store links
  - **Tinmen Delivery** — Play Store + App Store links
- [ ] Each with a brief description and app icon/screenshot
- [ ] Use standard Play Store / App Store badge buttons

### About / Mission Section
- [ ] What is Tinmen — connecting home chefs with neighbors
- [ ] Why we're doing this — community, sustainability, homemade food
- [ ] Free app messaging — no commission, no middlemen
- [ ] Content TBD — placeholder for now

### Contributors Section
- [ ] Grid or list of people contributing to the project
- [ ] Each contributor card: photo/avatar, name, role/contribution
- [ ] Data can be hardcoded initially, moved to API later if needed

### Animations (Framer Motion)
- [ ] **Hero icon carousel**: Food icons floating along a curved SVG path (Wispr-style)
  - Icons are slightly rotated and spaced along the curve
  - Continuous gentle looping animation
  - Two screenshots show the icons at different positions — they're moving along the arc
- [ ] **Scroll-triggered reveals**: Sections fade/slide in as you scroll (`whileInView`)
- [ ] **Hover effects**: Subtle scale/shadow on cards and buttons
- [ ] **Page load**: Staggered entrance animation for hero elements
- [ ] Don't overdo it — animations should enhance, not distract

### Dark Section Contrast
- [ ] Wispr uses a dark section (near-black) for the hero/feature area, contrasted with cream sections
- [ ] Consider using `primary` (#1B3D2F deep green) or `warm-900` for a dark hero section
- [ ] Light text on dark background for hero, warm cream for other sections

### Mobile Responsiveness
- [ ] Fully responsive — mobile-first approach
- [ ] Hero animation scales down gracefully or simplifies on mobile
- [ ] Nav collapses to hamburger
- [ ] Stack columns on small screens

### Future Considerations
- [ ] SEO meta tags and Open Graph images
- [ ] Analytics integration
- [ ] Deployment pipeline (Vercel or similar)
- [ ] Custom domain setup
