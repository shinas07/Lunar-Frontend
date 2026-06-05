<div align="center">

# Lunar — Company Website

**Software for the next frontier.**

A premium, dark, futuristic marketing site for Lunar — a product-focused technology
company engineering mission-critical software for governments, enterprises, and telecom
operators.

Built with Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Three.js

</div>

---

## ✦ Overview

This is a production-ready, fully responsive, SEO-optimized website with five pages
(Home, About, Services, Projects, Contact), custom animations, an interactive 3D globe,
and a working contact form. Every page is statically prerendered for speed; only the
contact API is server-rendered on demand.

### Highlights

- **Immersive hero** — custom canvas starfield (parallax + shooting stars), a CSS-rendered
  luminous moon, scroll-driven parallax, and masked word-reveal typography.
- **Interactive 3D globe** — built with React Three Fiber, lazy-loaded below the fold so it
  never blocks the initial render.
- **Premium motion** — Framer Motion reveals/stagger, Lenis smooth scrolling, magnetic
  buttons, cursor-following spotlight cards, animated counters, and infinite marquees.
- **Design system** — a token-driven dark theme (deep black → midnight navy, electric blue
  + purple accents) defined in Tailwind v4 `@theme`.
- **Accessibility** — semantic landmarks, skip-to-content link, focus-visible styles, full
  `prefers-reduced-motion` support, and labelled controls.
- **SEO** — per-page metadata, Open Graph + Twitter cards, a generated OG image, JSON-LD
  structured data, `sitemap.xml`, `robots.txt`, and a web manifest.

---

## ✦ Tech Stack

| Concern            | Choice                                              |
| ------------------ | --------------------------------------------------- |
| Framework          | [Next.js 16](https://nextjs.org) (App Router)       |
| Language           | TypeScript                                          |
| Styling            | [Tailwind CSS v4](https://tailwindcss.com)          |
| Animation          | [Framer Motion](https://www.framer.com/motion/)     |
| Smooth scroll      | [Lenis](https://github.com/darkroomengineering/lenis) |
| 3D                 | [Three.js](https://threejs.org) + React Three Fiber + drei |
| Icons              | [lucide-react](https://lucide.dev)                  |
| Fonts              | Space Grotesk (display), Inter (body), JetBrains Mono |

---

## ✦ Getting Started

**Requirements:** Node.js ≥ 20 and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:3000

# 3. Production build + run
npm run build
npm start

# 4. Lint
npm run lint
```

> No environment variables are required to run the site. See
> [`.env.example`](./.env.example) for optional configuration.

---

## ✦ Project Structure

```
src/
├─ app/
│  ├─ layout.tsx            # Root layout: fonts, metadata, nav/footer, smooth scroll
│  ├─ page.tsx              # Home
│  ├─ about/                # About page
│  ├─ services/             # Services page
│  ├─ projects/             # Projects page
│  ├─ contact/              # Contact page
│  ├─ api/contact/route.ts  # Contact form endpoint (validation + delivery hook)
│  ├─ globals.css           # Design system: tokens, base styles, custom utilities
│  ├─ opengraph-image.tsx   # Generated social share image
│  ├─ sitemap.ts            # sitemap.xml
│  ├─ robots.ts             # robots.txt
│  ├─ manifest.ts           # PWA manifest
│  └─ not-found.tsx         # Custom 404
├─ components/
│  ├─ layout/               # Navbar, Footer, SmoothScroll, ScrollProgress
│  ├─ ui/                   # Reusable primitives (Reveal, Starfield, Moon, Globe, …)
│  ├─ cards/                # ServiceCard, ProjectCard
│  ├─ sections/             # Page sections (home/, contact/, shared/)
│  └─ seo/                  # JSON-LD structured data
└─ lib/
   ├─ site.ts               # Central site config (name, URL, contact, nav)
   ├─ data.ts               # Content: services, projects, values, process, FAQs…
   └─ utils.ts              # cn() class-merge helper
```

### Editing content

Almost all copy lives in **[`src/lib/data.ts`](./src/lib/data.ts)** (services, projects,
values, process, principles, FAQs) and **[`src/lib/site.ts`](./src/lib/site.ts)**
(company name, email, location, nav, social links). Update these to rebrand or refresh
content without touching the components.

---

## ✦ Contact Form

The form posts to `POST /api/contact`, which validates input (with a honeypot for bots)
and currently **logs** the submission server-side, returning `{ ok: true }`.

To actually deliver inquiries, open
[`src/app/api/contact/route.ts`](./src/app/api/contact/route.ts) and add your provider in
the marked `TODO` block. Example with [Resend](https://resend.com):

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: process.env.CONTACT_FROM_EMAIL!,
  to: process.env.CONTACT_TO_EMAIL!,
  subject: `New inquiry from ${data.name}`,
  replyTo: data.email,
  text: data.message,
});
```

Then add the credentials to your environment (see `.env.example`).

---

## ✦ Deployment

The site is production-ready and deploys with zero extra configuration.

### Option A — Vercel (recommended)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repository.
3. Vercel auto-detects Next.js — keep the defaults and click **Deploy**.
4. (Optional) Add env vars from `.env.example` under **Settings → Environment Variables**.
5. Add your custom domain under **Settings → Domains**.

### Option B — Netlify

1. Push this repository to your Git provider.
2. In Netlify, **Add new site → Import an existing project**.
3. The included [`netlify.toml`](./netlify.toml) sets the build command, publish dir, and
   the official Next.js runtime plugin. Click **Deploy**.
4. (Optional) Add env vars under **Site settings → Environment variables**.

### Pushing to GitHub

```bash
git add -A
git commit -m "Lunar website"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

> Set `NEXT_PUBLIC_SITE_URL` to your production URL so canonical links, the sitemap, and
> social metadata point at the right domain.

---

## ✦ Performance & Accessibility

- All marketing pages are **statically prerendered** (SSG).
- Three.js is **code-split and lazy-loaded**, keeping the initial bundle lean.
- Fonts use `next/font` with `display: swap` (no layout shift, no render-blocking).
- The canvas starfield is DPR-aware, pauses when off-screen, and disables on
  `prefers-reduced-motion`.
- Built to target **Lighthouse 90+** across Performance, Accessibility, Best Practices,
  and SEO.

---

## ✦ Scripts

| Script          | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Create an optimized production build |
| `npm start`     | Run the production server         |
| `npm run lint`  | Run ESLint                        |

---

<div align="center">
<sub>© Lunar Technologies · Software for the next frontier.</sub>
</div>
