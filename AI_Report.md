- **Tools used:** GPT-5 Codex (Cursor)

- **Prompts sent to AI:**
  1. `"Build a full Next.js 14 (App Router) app in TypeScript + Tailwind that implements a simplified streaming-dashboard (Netflix/Hulu clone) using a public movie API (TMDB preferred). Follow these mandatory constraints and deliverables exactly."`
  2. `"Ensure the homepage uses server components to fetch TMDB categories, renders a hero banner, and horizontal scrolling rows with Next.js Image and Link components."`

- **Files generated/edited with AI help:**
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/components/Header.tsx`
  - `app/components/HeroBanner.tsx`
  - `app/components/MovieRow.tsx`
  - `app/components/MovieCard.tsx`
  - `app/movie/[id]/page.tsx`
  - `lib/tmdb.ts`
  - `types/movie.ts`
  - `globals.css`
  - `README.md`
  - `next.config.js`
  - `tailwind.config.js`
  - `tsconfig.json`
  - `package.json`
  - `.eslintrc.json`

- **Manual edits after AI generation:**
  - Tweaked hero banner copy and removed unsupported Tailwind utilities.
  - Refined README deployment instructions.
  - Adjusted TypeScript configuration for path aliases.

- **Vercel live URL:** _Pending deployment_

- **GitHub repository:** _Pending push_


