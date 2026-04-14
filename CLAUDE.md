@AGENTS.md

## Project Context: DialaGenie Website

DialaGenie is a marketing website for an AI receptionist product. The current codebase is a Next.js 16 + React 19 single-page landing experience focused on conversion (demo requests), not a backend voice-agent runtime.

### Product and Content Theme
- Positioning: "24/7 AI Receptionist" for businesses
- Core message: never miss calls, automate FAQs, book appointments, capture leads
- Conversion flow: hero -> feature proof -> demos -> how-it-works -> comparison -> testimonials -> pricing -> FAQ -> contact form

### Design Theme and Visual Direction
- Visual style: modern SaaS, high-contrast, premium but approachable
- Core palette: indigo + sky accents, slate/gray neutrals, white surfaces
- Interaction style: rounded components, subtle gradients/glows, strong hover states, smooth reveal/stagger motion
- Tone in UI copy: confident, conversion-focused, simple business language

### Architectural Reality to Keep in Mind
- This repo is frontend-focused marketing UI (App Router page composition and reusable UI components)
- AI/voice capabilities are represented as product content and mock/demo UI in this codebase
- Do not assume telephony/LLM backend code exists here unless you first confirm it in files

### Editing Guidance for Future Work
- Preserve section order and conversion-oriented storytelling unless explicitly asked to restructure
- Keep color and motion system consistent with existing tokens in `src/app/globals.css` and button variants in `src/components/ui/Button.tsx`
- Prefer targeted updates inside existing section/layout components over introducing new architecture
- If asked for compliance/security claims, ensure copy changes stay aligned with what is actually implemented in this repo
