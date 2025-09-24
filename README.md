## Krishna Prasath – Developer Portfolio

Modern personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

Live site: `https://crish.vercel.app`

### Features
- Fast, responsive UI with dark mode
- Projects and tags components
- Global SEO: titles, descriptions, Open Graph/Twitter, canonical, robots
- JSON-LD (Person, WebSite) for rich results

### Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (deployment)

### Local Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build & start
npm run build
npm start
```
App will be available at http://localhost:3000.

### Scripts
- `dev`: Start local dev server
- `build`: Type-check and build production bundle
- `start`: Run the production server
- `lint`: Run ESLint

### Project Structure
```
src/
  app/            # App Router routes, layout, pages
  components/     # Reusable UI components
  contexts/       # React context providers
public/           # Static assets (e.g., Main.webp)
```

### SEO Configuration
Global SEO lives in `src/app/layout.tsx` using Next.js `metadata`.
- Title template: "%s | Krishna Prasath"
- Description: concise summary of Krishna’s developer portfolio
- Keywords: "Krishna", "Krishna Prasath", "Developer", "Next.js", etc.
- Canonical: `https://crish.vercel.app`
- Open Graph/Twitter with preview image
- Robots/Googlebot directives
- JSON-LD scripts: `Person` and `WebSite`

To customize:
- Update titles/descriptions per page in `src/app/**/page.tsx` by exporting `metadata`
- Replace social image at `public/Main.webp` (recommended 1200×630)
- Add social links in JSON-LD `sameAs` if desired

### Deployment
1) Push to GitHub/GitLab
2) Import the repo on Vercel
3) Set Production Branch and deploy

After deployment:
- Submit sitemap/URL to Google Search Console
- Add domain verification (meta tag) if needed

### License
This repository is provided as-is for personal portfolio use.
