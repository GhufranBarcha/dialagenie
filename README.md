# Dial a Genie Website

Marketing website for **Dial a Genie**, a 24/7 AI receptionist product.

This repository is a **frontend landing page** (Next.js App Router), focused on product positioning and demo conversion. It does not include backend telephony/LLM runtime services.

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- Swiper
- Lucide Icons

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev    # start development server
npm run build  # production build
npm run start  # run production server
npm run lint   # run ESLint
```

## Page Structure

Homepage composition lives in `src/app/page.tsx` and currently follows this order:

1. Hero
2. About
3. Enterprise Capabilities (Features)
4. Demos
5. How It Works
6. Comparison
7. Testimonials
8. Pricing
9. FAQ
10. Contact

## Key Content Areas

- **Enterprise Capabilities:** `src/components/sections/Features.tsx`
  - Includes call transfer, multilingual support, SMS automations, calendar sync, setup, **call logs & transcripts**, and security.
- **Feature Comparison:** `src/components/sections/Comparison.tsx`
  - Includes a row for **Call Logs & Transcripts**.
- **FAQ:** `src/components/sections/FAQ.tsx`
  - Includes question: **“Can I review the call logs/transcripts?”**

Most section content is array-driven (objects mapped into cards/rows), so copy and feature updates should typically be made in those arrays.

## Design Notes

- Brand name: **Dial a Genie**
- Core palette is defined in `src/app/globals.css` via CSS variables:
  - `--color-primary`
  - `--color-accent`
  - `--color-accent-hover`
  - `--color-accent-light`
- Reusable button variants are in `src/components/ui/Button.tsx`.

## Project Layout

```text
src/
  app/                  # App Router entry, metadata, global styles
  components/
    layout/             # Navbar, Footer
    sections/           # Landing page sections
    ui/                 # Shared UI primitives and animations
public/                 # Static assets
```

## Deployment

Build and run with standard Next.js workflow:

```bash
npm run build
npm run start
```

This project can be deployed to any platform that supports Next.js 16.