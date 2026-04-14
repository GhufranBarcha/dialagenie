# DialaGenie Website Theme

## Overall Theme
DialaGenie uses a modern B2B SaaS landing-page style focused on trust, speed, and conversion. The visual language combines clean white surfaces with indigo/sky highlights to communicate an "AI + productivity" brand. Sections are arranged as a conversion narrative (value proposition -> proof -> pricing -> contact/demo).

## Brand Personality in UI
- Confident, business-first, and direct
- Premium but approachable
- Tech-forward without feeling overly technical
- Conversion-oriented (strong CTAs, social proof, comparison framing)

## Core Color System (from globals.css)
Defined in `src/app/globals.css`:

- `--color-primary: #111827` (deep slate/navy, primary dark brand tone)
- `--color-accent: #4F46E5` (indigo, primary action color)
- `--color-accent-hover: #4338CA` (darker indigo for interaction states)
- `--color-accent-light: #38BDF8` (sky/cyan accent for highlights)
- `--color-text-body: #475569` (muted slate text)
- `--background: #ffffff`
- `--foreground: #111827`

## Supporting Utility Palette (Tailwind classes used across sections)
The UI repeatedly uses:

- Neutrals: `white`, `gray-50/100/200/400/500/600/900`, `slate-50/900/950`
- Primary family: `indigo-50/100/200/400/500/600/700`
- Secondary highlights: `sky-50/100/200/300/500/600`
- Semantic accents: `emerald-*` (positive/confirmation), `rose-*` and `red-*` (warning/negative), `amber-*` (attention), `violet-*` (secondary feature differentiation), `blue-*` in hero gradients

## Where Colors Are Applied
- **Primary dark surfaces**: Demos section background and footer (`bg-[var(--color-primary)]`, slate footer)
- **Primary CTA/actions**: Buttons and important links use accent indigo
- **Hover/active states**: Accent hover indigo, shadowed emphasis
- **Feature segmentation**: Feature/step cards use tinted backgrounds (indigo/sky/emerald/violet/amber/rose) for scanability
- **Trust and readability**: Light neutral backgrounds with high-contrast typography

## Typography and Spacing Feel
- Strong heading hierarchy (`font-extrabold`, large responsive headings)
- Body text in muted slate for readability (`text-gray-500` / `--color-text-body` style)
- Generous whitespace (`py-24`, `py-28`, `max-w-7xl`) for premium layout rhythm

## Component Shape Language
- Rounded, friendly geometry: `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
- Soft depth: subtle borders, light shadows, glow overlays
- Button style: pill-like radii and pronounced hover affordance

## Motion and Interaction Theme
- Scroll-reveal + staggered entrance patterns via Framer Motion
- Gentle directional movement (`up/left/right`) with opacity transitions
- Smooth interaction states: hover lift (`hover:-translate-y-*`), scale nudges, shadow transitions
- Mobile-first interaction support via Swiper for feature/testimonial/pricing/steps carousels

## Practical Theme Summary
DialaGenie’s theme is a high-conversion SaaS aesthetic: **indigo-led brand actions + sky highlights + clean neutral base**, expressed through rounded modern components, premium spacing, and subtle motion to present an always-on AI receptionist product as trustworthy and enterprise-capable.
