# AI Report

## 1. AI Tools Used
- **ChatGPT (GPT-5.1)**  
  Used for:  
  - Guiding setup of API, environment variables, and deployment  
  - Error fixing  
  - TMDB integration help  
  - Project explanations  
  - Tailwind/UI improvements  
  - Assignment alignment and documentation  

- **Cursor AI (GPT-5 Codex)**  
  Used for:  
  - Generating complete Next.js 14 App Router structure  
  - Writing TypeScript components  
  - Creating Tailwind styling and layouts  
  - Auto-fixing TypeScript & ESLint errors  
  - File generation and refactoring  
  - Utility functions and data fetching  

## 2. Prompts Sent to AI
1. `"Build a full Next.js 14 (App Router) app in TypeScript + Tailwind that implements a simplified streaming-dashboard (Netflix/Hulu clone) using a public movie API (TMDB preferred). Follow these mandatory constraints and deliverables exactly."`
2. `"Ensure the homepage uses server components to fetch TMDB categories, renders a hero banner, and horizontal scrolling rows with Next.js Image and Link components."`
3. Additional prompts were used for:
   - TMDB API integration  
   - Next.js routing  
   - Tailwind styling  
   - Debugging fetch and config issues  
   - Deployment steps for Vercel  
   - Creating documentation  

## 3. Files Generated or Edited With AI Help
- `app/layout.tsx`  
- `app/page.tsx`  
- `app/movie/[id]/page.tsx`  
- `app/components/Header.tsx`  
- `app/components/HeroBanner.tsx`  
- `app/components/MovieRow.tsx`  
- `app/components/MovieCard.tsx`  
- `lib/tmdb.ts`  
- `types/movie.ts`  
- `globals.css`  
- `README.md`  
- `next.config.js`  
- `tailwind.config.js`  
- `tsconfig.json`  
- `.eslintrc.json`  
- `package.json`  

## 4. Manual Edits After AI Generation
- Adjusted hero banner text  
- Fixed Tailwind classes that caused runtime errors  
- Updated TypeScript paths  
- Cleaned up layout spacing  
- Added environment variable configuration  
- Modified README instructions for accurate deployment  

## 5. Vercel Live URL
(https://satwikishankar-movies.vercel.app/)

## 6. GitHub Repository
(https://github.com/Satwikishankar/my-streaming-dashboard)
