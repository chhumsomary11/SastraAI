# Sastra AI — React + Vite Landing Page

## Project Overview
A multi-language (English/Khmer) landing page for "Sastra AI", an AI tutor for Cambodian students (grades 1–12) doing English math & science homework. Built with React 19, Vite 6, and TailwindCSS v4. Most UI interactions are demo/conceptual; the live chatbot and image recognition are noted as "in development".

## Key Developer Commands
- `npm run dev` — Starts Vite at `:3000`, `--host=0.0.0.0`. HMR disabled if `DISABLE_HMR=true`.
- `npm run build` — `vite build`, outputs to `dist/`.
- `npm run preview` — Preview the production build.
- `npm run clean` — `rm -rf dist server.js` (removes build artifacts).
- `npm run lint` — Runs `tsc --noEmit` only; **no ESLLint is configured**.

## Environment
- Copy `.env.example` to `.env` and set:
  - `GEMINI_API_KEY` — Required for Gemini AI API calls. Currently not used in source code ( `@google/genai` is a dep but unused).
  - `APP_URL` — The hosted URL for self-referential links, OAuth callbacks, and API endpoints.
- `DISABLE_HMR=true` — Disables HMR and file watching in Vite to save CPU during agent edits (per vite.config.ts comment).
- `.env*` are git-ignored (except `.env.example`).

## Language Support
- Two languages are supported: `en` and `km` (Khmer).
- Language is stored in `localStorage` under key `sastra_language`.
- The `LanguageSwitcher` component toggles between EN/ខ្មែរ.
- All UI text is in the `translations` record keyed by `Language`.
- When `currentLang === 'km'`, the `<html lang="km">` attribute and `body.lang-km` class are set.

## Dependency Quirks
- `@google/genai` and `express` are listed as dependencies but **not imported** anywhere in `src/`. They may be intended for future use.
- `motion` is a dependency but not imported in the source examined; verify before removing.
- TailwindCSS v4 is used (config is minimal; most config is in utility classes).

## No Test Suite Configured
- No `vitest`, `jest`, or other test runner config found in the repo.
- `npm test` does not run anything by default.

## Architecture Notes
- Single-page app with server-entry via `main.tsx` → `App.tsx`.
- Route-like navigation is handled by scroll-to anchors (IDs: `demo`, `how-it-works`, `why-sastra`, `mvp-status`, `early-access`).
- The `VideoModal` component simulates a multi-step lesson walkthrough with step timers; it can also accept a `customVideoUrl` prop (YouTube/Vimeo/MP4) for replacement.
- AI functionality (Gemini) is not wired up in the current client code.