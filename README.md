# Pompelo — Brand Portfolio Website

A premium, editorial, storytelling-focused website for the children's fashion
brand **Pompelo**. Built as a corporate brand portfolio — no shop, no cart, no
prices — just brand, collections and craft.

> _Growing with Style — designing comfortable, playful fashion for every
> childhood adventure._

## Tech Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS 3** with a bespoke design system
- **Framer Motion** for elegant reveal / float / lightbox animations
- **Lucide** icons
- Fonts: **Poppins** (display) + **DM Sans** (body) via `next/font`
- Mobile-first, responsive, SEO metadata, WCAG-minded (skip link, focus rings,
  reduced-motion support, semantic landmarks)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Folder Structure

```
app/
  layout.tsx                # fonts, metadata, nav + footer, skip link
  page.tsx                  # Home
  about/                    # About + Our Story + Mission/Vision
  collections/              # Collections index
  collections/[slug]/       # Individual collection template (static params)
  lookbook/                 # Editorial gallery + fullscreen lightbox
  craftsmanship/            # Process timeline
  sustainability/           # Values + stats storytelling
  retail-partners/          # Global map + regions + inquiry
  media/                    # Downloads + press
  contact/                  # Form + info + map + FAQ
  privacy/                  # Privacy policy
  not-found.tsx             # Branded 404
components/
  brand/                    # Logo mark + lockup (SVG, currentColor)
  layout/                   # Navbar (client), Footer
  ui/                       # Button, Reveal, SectionHeader, Accordion,
                            #   EditorialImage, Blobs
  cards/                    # CollectionCard
  sections/                 # HomeHero, Philosophy, Stats, Testimonials,
                            #   Instagram, Marquee, Newsletter, ContactForm,
                            #   LightboxGallery, PageHero
lib/
  data.ts                   # All content: collections, philosophy, stats,
                            #   testimonials, regions, media, FAQ
  utils.ts                  # cn() class helper
tailwind.config.ts          # Design tokens (see below)
```

## Design System

Extracted from the Pompelo logo — rounded geometry, warm orange, generous white.

| Token            | Value                          |
| ---------------- | ------------------------------ |
| Primary brand    | `#F93609`                      |
| Primary gradient | `#F93609 → #FF6A3D`            |
| Background        | `#FFF7F4` (`cream`)           |
| Surface           | `#FFFFFF`                     |
| Light accent      | `#FFE4DB` (`accent`)         |
| Border            | `#F2D4CC` (`line`)           |
| Primary text      | `#1E1E1E` (`ink`)            |
| Secondary text    | `#6B7280` (`muted`)          |
| Success           | `#34A853`                     |

- **Spacing:** 8px system · **Radius:** `card` 16 / `xl2` 20 / `blob` 24 / `pill`
- **Shadows:** `soft`, `card`, `lift` · **Animations:** float, marquee, reveal
- Colour usage: ~85% white/cream, orange reserved for highlights and CTAs.

## Editorial Imagery

`components/ui/editorial-image.tsx` renders refined gradient "moodboard" panels
styled like a fashion lookbook — designed as drop-in **slots for real
photography**. Swap the component internals for `next/image` when brand photos
are available (`next.config.mjs` already allow-lists `images.unsplash.com`).

## Notes

- Forms (newsletter, contact) validate and confirm client-side; wire to your
  email/CRM provider for production.
- The Google Maps embed uses the keyless embed endpoint — replace with an API
  key + branded map style for production.
- Media Center download buttons are placeholders — point them at your asset URLs.
