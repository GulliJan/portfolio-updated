# Gul Afroz Akbari — Portfolio

A full-stack developer portfolio built with **React · TypeScript · Vite · Tailwind CSS**. Light, modern teal/blue palette, mobile-first, accessible, with dark-mode support.

---

## Quick start

Requires Node 18.18+ or Node 20+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to /dist
npm run preview    # serves the production build
npm run lint       # type-check only
```

---

## Customizing

All content is **data-driven** — edit these four files, never touch JSX:

| File                      | Owns                                                   |
| ------------------------- | ------------------------------------------------------ |
| `src/data/site.ts`        | Name, role, bio, email, phone, socials, hero stats     |
| `src/data/projects.ts`    | Featured + additional projects, images, award badges   |
| `src/data/skills.ts`      | Grouped skills                                         |
| `src/data/experience.ts`  | Work history, certifications, leadership & community   |

Types for every data shape live in `src/types/index.ts` — your IDE will flag any break.

### Assets

- **Résumé:** already at `/public/Gul_Afroz_Akbari_Resume.docx`. Swap with an updated PDF/DOCX and update `resumeUrl` in `site.ts` if you rename it.
- **Project images:** `/public/images/`. The Ideas to Impact 2026 photo is already placed. Add more and reference them as `/images/filename.jpg` in `projects.ts`.
- **Add a profile photo:** drop into `/public/images/` and the About section can be updated to include it.
- **Favicon:** `/public/favicon.svg` — gradient "g" monogram. Replace if you want.

---

## Visual system

The palette is driven by CSS variables in `src/styles/globals.css`. Light mode is a warm off-white (`slate-50`) with a teal-to-blue gradient accent (`#0ea5b5 → #2563eb`). Dark mode switches to a deep slate navy with brighter teal accents.

Signature moments:
- **Gradient text headline** in the Hero (`.text-gradient` utility)
- **Stats strip** under the hero with real numbers (Dean's Honour, 1,500+ images, 138 wagons, Audience Choice award)
- **Gradient CTA panel** for the résumé download
- **Category-coded community cards** (Research = teal, Leadership = blue, Volunteer = green, Recognition = gold)
- **Soft card shadows** and alternating section backgrounds for rhythm

Everything else is restraint — color shows up in accents, never everywhere.

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Auto-detects Vite. No config needed.

### Netlify

Build command: `npm run build` · Publish directory: `dist`

### GitHub Pages

```bash
npm i -D gh-pages
```

Add to `package.json`:

```json
"homepage": "https://<username>.github.io/<repo>",
"scripts": { "deploy": "npm run build && gh-pages -d dist" }
```

Set `base: '/<repo>/'` in `vite.config.ts`, then `npm run deploy`.

### Cloudflare Pages

Framework preset: Vite · Build command: `npm run build` · Output: `dist`

### Netlify (for the existing `gulli-portfolio.netlify.app`)

Drag-and-drop the `dist/` folder into Netlify's UI, or connect the Git repo and it will auto-deploy on push.

---

## Project structure

```
portfolio/
├── index.html
├── public/
│   ├── favicon.svg
│   ├── Gul_Afroz_Akbari_Resume.docx
│   └── images/
│       └── ideas-to-impact-2026.jpeg
├── src/
│   ├── main.tsx                React entry
│   ├── App.tsx                 Section composition + background rhythm
│   ├── components/
│   │   ├── ui/                 Primitives (Button, Section, Tag, Reveal)
│   │   ├── layout/             Navbar, Footer, ThemeToggle
│   │   └── sections/           Hero, About, Skills, FeaturedProjects,
│   │                           AdditionalProjects, Experience,
│   │                           Certifications, Leadership, ResumeCTA, Contact
│   ├── data/                   All content (single source of truth)
│   ├── hooks/                  useTheme, useReveal
│   ├── lib/                    cn() class joiner
│   ├── styles/globals.css      Tokens, base, utilities
│   └── types/index.ts          Shared interfaces
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.*.json
```

---

## Sections

1. **Hero** — availability chip, gradient headline, stats strip (real numbers)
2. **About** — bio + education card (Mohawk College Dean's List + Ishraq University)
3. **Skills** — four-card toolkit grid
4. **Featured Projects** — Ziefah Health + Train Wagon OCR (with photo + award badge)
5. **More** — Nail Salon freelance site
6. **Experience** — Freelance Web Developer + Fortinos
7. **Certifications** — Docker courses + Dean's Honour + Audience Choice Award
8. **Leadership & Community** — PERC, Orientation Ambassador, MoCrew, RightToLearn, Global Shapers, Model UN, Indian Embassy prize
9. **Résumé CTA** — gradient download panel
10. **Contact** — email, phone, GitHub, LinkedIn as cards

---

## Architecture — why it's built this way

**`data/` is the source of truth.** Every piece of content is a typed TypeScript object. Swapping a project, adding a volunteer role, or tweaking the bio is a one-file edit. No JSX surgery.

**Three-tier component split.**
- `ui/` — dumb reusable primitives (`Button`, `Section`, `Tag`, `Reveal`)
- `layout/` — persistent page chrome (`Navbar`, `Footer`, `ThemeToggle`)
- `sections/` — one file per top-level section, each 80–160 lines

**Design tokens in CSS variables.** Dark mode is a single class toggle on `<html>` — no duplicated `dark:bg-*` utilities everywhere. Rebranding the whole site is nine RGB values.

**Zero runtime deps beyond React.** No Framer Motion, no lucide-react, no clsx. Motion is CSS keyframes triggered by one tiny `IntersectionObserver` hook. Icons are inline SVG. Classes are joined by a 3-line `cn()` helper.

**Accessibility baked in.**
- Skip link (visible on focus)
- Focus ring system driven by one `:focus-visible` rule in `globals.css`
- `prefers-reduced-motion` honored in both `useReveal` and global CSS
- Semantic `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<ol>`
- Mobile menu traps body scroll, closes on Escape, correct `aria-expanded` / `aria-controls`
- Theme toggle uses `aria-pressed` and a descriptive `aria-label`
- Every card and image has proper alt text / labeled headings

**Performance.**
- Theme class applied inline in `index.html` before React mounts → no flash of wrong theme
- Fonts preconnected with `display=swap`
- `IntersectionObserver` with `once: true` — disconnects after firing
- `loading="lazy"` + `decoding="async"` on project images
- Tailwind JIT → only used utilities hit the CSS bundle

**TypeScript strict mode** with `noUnusedLocals`, `noUnusedParameters`, `strict: true`. The build fails before deploy if you break a type.

---

## Current production build metrics

- JS: **187 kB (58 kB gzipped)**
- CSS: **28 kB (6 kB gzipped)**
- Build time: **~4s**

Ship it.
