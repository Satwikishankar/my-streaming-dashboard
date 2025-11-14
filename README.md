# StreamSphere

StreamSphere is a simplified streaming dashboard (think Netflix/Hulu) built with Next.js 14 App Router, TypeScript, and Tailwind CSS. It showcases server-rendered hero content and horizontally scrolling carousels powered by The Movie Database (TMDB) API.

![image alt](https://github.com/Satwikishankar/my-streaming-dashboard/blob/68c84b810c639f4b4e619ff9500b9f4e651e770a/Airbrush-Collage-2025-11-14T15_00_14.png)

## Features
- **Next.js 14 App Router** with server components handling all data fetching.
- **TMDB integration** for popular, top-rated, now-playing, and upcoming movies.
- **Responsive Tailwind UI** featuring hero banner, horizontal rows, and movie detail page.
- **Accessible navigation** with keyboard-friendly carousels and semantic markup.
- **Error handling** when TMDB credentials are missing or requests fail.
- Ready for **Vercel deployment**, including image optimization via `next/image`.

## Getting Started

### Prerequisites
- Node.js 18.17 or later and npm (or pnpm/yarn).  
  ```bash
  node -v
  npm -v
  ```
- A TMDB API key: https://www.themoviedb.org/settings/api

### 1. Create the project
Use your preferred package manager; the project was scaffolded with the experimental App Router flag:
```bash
pnpm create next-app@latest -- --experimental-app -ts
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Configure environment variables
Create `.env.local` in the project root (this file is ignored by git):
```bash
TMDB_API_KEY=your_tmdb_api_key
```

### 4. Run locally
```bash
pnpm dev
# http://localhost:3000
```

### 5. Production build
```bash
pnpm build
pnpm start
```

## Deployment (Vercel)
1. Push this repository to GitHub/GitLab.
2. Import the project into Vercel.
3. In Vercel Project Settings → Environment Variables, add `TMDB_API_KEY`.
4. Deploy. Vercel will handle `next build` and `next start` automatically.

> **Note:** `next.config.js` already whitelists `image.tmdb.org` for optimized images.

## Project Structure
```
app/
  components/
    Header.tsx    # client
    HeroBanner.tsx
    MovieCard.tsx # client
    MovieRow.tsx  # client
  layout.tsx
  page.tsx
  movie/[id]/page.tsx
lib/tmdb.ts
types/movie.ts
```

## Accessibility & UX
- Horizontal rows support keyboard navigation (Arrow keys).
- Fallback UI appears when TMDB data is unavailable.
- `alt` text present for all images; `next/image` handles optimization.

## Optional Enhancements
- Run a Lighthouse audit (`pnpm lint` then Chrome Lighthouse) to monitor performance.
- Add skeleton loaders or client-side filtering for additional polish.

## Troubleshooting
- **Missing API key:** The pages render a helpful message instead of crashing.
- **TMDB rate limits:** Retry after their cooldown window or implement caching.
- **Images not loading:** Ensure `image.tmdb.org` remains in `next.config.js`.

Enjoy exploring movies with StreamSphere!


