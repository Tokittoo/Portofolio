## Krishna Prasath — Developer Portfolio

Elegant, developer-centric portfolio showcasing projects, skills, and experience. Built for performance, accessibility, and SEO.

`https://crish.vercel.app`

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss) ![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

---

### Highlights
- Accessible, responsive UI with dark mode
- Clean project cards with tech tags and animations
- First-class SEO (Open Graph, Twitter, canonical, robots)
- Structured data (JSON-LD: Person, WebSite) for rich results

### Tech
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel (hosting)

### Architecture
- App Router with `layout.tsx` providing global theme, navigation, footer, and SEO metadata
- Component-driven design: `Card`, `Projects`, `Intro`, `Tags`, etc.
- Context for theme toggling via `ThemeContextProvider`
- Static assets served from `public/`

### Quickstart
```bash
npm install
npm run dev
# production
npm run build && npm start
```
Local: http://localhost:3000

### Scripts
- `dev` – Start dev server
- `build` – Type-check and build
- `start` – Run production server
- `lint` – Lint codebase

### Structure
```
src/
  app/          # App Router pages and layout
  components/   # UI components (Cards, Projects, etc.)
  contexts/     # Theme and shared state
public/         # Static assets (Main.webp, icons)
```

### Performance & Quality
- Targets Core Web Vitals thresholds (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- Font optimization via `next/font` (Geist)
- Image optimization via Next Image-ready assets
- Strict TypeScript, ESLint configured via project rules

### SEO & Social
SEO is configured in `src/app/layout.tsx` using Next.js `metadata`.
- Title template: "%s | Krishna Prasath"
- Canonical: `https://crish.vercel.app`
- Open Graph/Twitter: uses `public/Main.webp`
- Robots/Googlebot: indexing enabled with rich previews
- JSON-LD: `Person` and `WebSite` via inline scripts

Customize per page by exporting `metadata` from each `page.tsx`. Replace the preview image by updating `public/Main.webp` (recommended 1200×630).

### Deployment
1. Push to your repository
2. Import on Vercel and deploy the `main` branch
3. Submit the site to Google Search Console (optional but recommended)

### Conventions
- Components use PascalCase, props are typed
- Avoid deep nesting; prefer early returns and small components
- No inline commentary; prefer self-documenting code and short docstrings

### Roadmap
- Add `sitemap.xml` and `robots.txt` via `next-sitemap`
- Add JSON-LD `sameAs` with social profiles
- Per-page metadata overrides (e.g., `/dashboard`)
- Project analytics and engagement tracking

### Customization
- Update copy in `src/components/Intro.tsx` and project data in `src/components/Projects.tsx`
- Add social links to JSON-LD `sameAs` in `layout.tsx`
- Tweak theme and transitions in component styles

### License
Personal portfolio — feel free to reference for learning and inspiration.
