# Easy Pay — Landing Demo

Easy Pay is a responsive Next.js + TypeScript landing page demo for a fintech product. The repository contains a modular component set built with Tailwind CSS and enhanced with subtle Framer Motion animations for improved affordance and polish.

This README provides quick setup instructions, an overview of the project structure, notes about the animation system and responsiveness changes made, and recommended next steps for production hardening.

---

## Quick start

Requirements
- Node.js 18+ (or a Node LTS compatible release)
- npm (or yarn/pnpm)

Install dependencies and run the dev server:

```bash
# from project root
npm install
npm run dev
```

Common scripts (from `package.json`)
- `npm run dev` — start the Next.js development server
- `npm run build` — production build
- `npm run start` — start the production server after build
- `npm run lint` — run linters (ESLint / Tailwind canonicalization)

---

## What I changed / added
This project was updated to improve responsiveness across the landing site and to add consistent, subtle Framer Motion animations.

Key highlights
- Centralized animation variants in `src/lib/animations.ts` (fadeUp, fadeIn, stagger, hoverScale, fadeDown).
- Motion wrappers added to many components for entrance + micro-interactions:
  - `src/components/Banner.tsx`, `Navbar.tsx`, `HowItWorks.tsx`, `Security.tsx`, `Testimonial.tsx`, `Pricing.tsx`, `CTA.tsx`, `FAQ.tsx`, `Newsletter.tsx`, `Features.tsx`, `Footer.tsx`.
- Responsive tweaks across components (grid breakpoints, font sizes, stacked actions on mobile, clipped decorative elements).
- Fixed JSX nesting issues encountered while integrating motion wrappers.

Design intent: preserve original look and feel. All changes are intended to be non-destructive (only responsive Tailwind utilities and motion wrappers were added/adjusted).

---

## Project structure (important files)

- `src/app` — Next.js app router files. Main entry points for pages/layout.
- `src/components` — Reusable UI components (Banner, Navbar, CTA, FAQ, Features, Testimonial, Pricing, Footer, Newsletter, Security, etc.).
- `src/lib/animations.ts` — Centralized Framer Motion variants used across components.
- `public/assets` — Static assets (logos, images). Replace missing/placeholder assets as needed.

---

## Animations: how they work
- Animations are centralized in `src/lib/animations.ts`. Tuning durations/offsets in that single file will update the site consistently.
- Most content uses `whileInView` (enter the viewport) with `viewport: { once: true }` to avoid repetitive motion.
- Buttons and interactive cards use a small hover scale for micro-interaction.
- Recommendation: add `prefers-reduced-motion` handling in the animation helper so users who opt out of motion are respected.

---

## Accessibility & performance notes
- Use `prefers-reduced-motion` to disable or reduce motion for users who request it.
- Decorative blurred shapes use heavy CSS blur; consider converting to optimized pre-blurred images (PNG/SVG) for mobile/low-end devices to reduce paint cost.
- Ensure all images in `public/assets` have meaningful `alt` text; some placeholders exist and should be replaced with real assets.

---

## Developer checklist before production
- Replace Newsletter `alert()` placeholder with a real API integration and inline success/failure UI (aria-live).
- Replace or add missing images in `public/assets` (logos, badges) to avoid 404s.
- Run a full lint/type-check/build and fix issues:

```bash
npm run lint
npm run build
```

- Add tests for critical components (Newsletter form, CTA, and key layout components). Consider Playwright or Storybook visual snapshots for regression testing.

---

## Troubleshooting
- If the dev server crashes after merging changes, run:

```bash
# clean and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

- If Tailwind canonicalization warnings appear, run `npm run lint` and follow the suggestions to convert bracket utilities into canonical forms.

---

## Next suggested steps (prioritized)
1. Run build + lint and fix any remaining warnings/errors.
2. Implement `prefers-reduced-motion` and wire Framer Motion to respect it.
3. Replace Newsletter alert with an API-backed flow and add inline accessible success messages.
4. Replace or optimize large blurred decorations for performance on low-end devices.
5. Run an accessibility (axe) audit and address the most critical findings.

---

## Limitations and assumptions
- I could not run the dev server in this environment; changes are made in code and local verification is required.
- I assumed design tokens (colors/radii) are stable and that we should avoid global style changes.
- Newsletter behavior is still a placeholder (alert); I assumed you want to keep it until you provide an API endpoint.

---

If you'd like, I can run the lint/build next and fix any errors, or implement `prefers-reduced-motion` handling in the animation helper and propagate it across the components.

License: MIT (please change to your preferred license)

---

Thank you — tell me which follow-up you'd like me to do next (build & lint, reduced-motion support, newsletter integration, or optimize assets).
