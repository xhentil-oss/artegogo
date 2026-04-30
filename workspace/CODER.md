<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
# Project: Harmonizim Kuantik — Coaching Website

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS (tailwind.config.js — custom colors use HSL vars + named colors)
- React Router DOM v6 (BrowserRouter + Routes in src/App.tsx)
- lucide-react for icons
- Path alias `@` → `./src` (set in vite.config.ts + package.json alias)

## File Structure
- `src/App.tsx` — router root, Layout wrapper
- `src/pages/` — all route-level page components
- `src/sections/` — reusable layout sections (Navbar, Footer, HeroSection, etc.)
- `src/components/` — shared UI components (PagePlaceholder, etc.)

## Route Map
/ → MainContent (homepage)
/rreth-nesh → RrethNeshPage
/eventet → EventetPage
/eventet/retreat → RetreatPage
/eventet/trajnime-online → TrajnimeOnlinePage
/eventet/workshope → WorkshopePage
/live → LivePage
/rezultatet → RezultatetPage
/blog → BlogPage
/meditime → MeditimePage
/shop → ShopPage
/kontakt → KontaktPage
/faq → FAQPage

## Design Tokens
- Primary: purple-600 / violet-600 gradient
- Bg light: purple-50
- Text: zinc-800 / zinc-700 / zinc-500
- Navbar: white/95 + backdrop-blur, sticky top-0 z-50
- Footer: bg-gradient from-purple-700 via-violet-800 to-purple-900
</coder>
