# Vikash — Premium Personal Portfolio

A minimal black-and-white personal portfolio with controlled RGB accents, built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons. Feels like a **premium developer portfolio + interactive 3D digital workspace**.

## ✨ Highlights

- **Black & white** base with subtle **RGB accents** (🔴 Red · 🟢 Green · 🔵 Blue)
- **3D solid-material UI** — cards feel like physical objects (tilt, bevel, press states)
- Fully **responsive** (mobile → large screens)
- **Accessible** — semantic HTML, keyboard nav, focus states, ARIA, reduced-motion support
- **SEO-ready** — meta tags, Open Graph, Twitter/X, JSON-LD Person schema
- **Editable content** — everything lives in `src/data/*`

## 🚀 Getting Started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## 📁 Architecture

```
src/
├── components/       # Navbar, modal, UI primitives (Button, Reveal, Logo…)
│   └── ui/
├── sections/         # Hero, About, WhatIDo, Skills, Projects, Journey, …
├── data/             # ✏️ ALL editable content lives here
│   ├── profile.ts    #   name, bio, contact links, stats, availability
│   ├── skills.ts     #   skill categories + levels
│   ├── projects.ts   #   projects + detail content
│   ├── hobbies.ts    #   hobbies / "Beyond Code"
│   ├── journey.ts    #   timeline, services, currently-exploring
│   └── theme.ts      #   RGB accent system
├── hooks/            # useTilt, useActiveSection, useReducedMotion
├── App.tsx
└── main.tsx
```

## ✏️ How to customize content

All personal information lives in `src/data/`. Edit those files to update the site
— **no UI components need to change**.

| File | What it controls |
| --- | --- |
| `profile.ts` | Name, brand, bio, email, social links, availability, stats |
| `skills.ts` | Skill categories & honest levels (Beginner / Learning / Comfortable / Advanced) |
| `projects.ts` | Project cards + full detail-view content |
| `hobbies.ts` | "Beyond Code" cards |
| `journey.ts` | Timeline milestones, "What I Do" services, "Currently Exploring" |

> ⚠️ **Integrity:** this portfolio never invents jobs, clients, degrees, revenue,
> or fake stats. Unavailable info uses editable placeholders (e.g. `—`, empty URLs).

## 📬 Contact form backend

The contact form is **provider-independent**. Configure it in `src/data/profile.ts`:

```ts
export const contactConfig = {
  provider: "YOUR_PROVIDER", // "formspree" | "web3forms" | "emailjs" | "custom" | "serverless"
  endpoint: "",               // your endpoint URL
  enabled: false,             // set true once configured
};
```

- With `enabled: false` (no backend), the form safely falls back to opening the
  user's email client — no API keys are ever exposed.
- Includes a **honeypot** anti-spam field, client-side validation, and loading /
  success / error states.

## 🌐 Deploy to GitHub Pages

This project builds to a single static `dist/index.html`, so it works almost anywhere.

```bash
npm run build
```

Then either:

1. **GitHub Pages** — push the repo, enable Pages via the `Settings → Pages` menu,
   and point it at your `dist/` output (or use a `gh-pages` branch).
2. **Netlify / Vercel** — connect the repo, build command `npm run build`,
   publish directory `dist`.

### Publish the repo to your GitHub

```bash
git init
git add .
git commit -m "Initial commit: premium portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

> Replace `yourusername` / `your-repo` with your own GitHub details. Then visit
> **Settings → Pages → Source = branch / main → folder = /docs or / (root)**,
> or use the `gh-pages` package for simplified deploys.

## 🎨 Design system

- **Accents:** Red `#FF3B30` (identity/actions) · Green `#22C55E` (live/active) · Blue `#3B82F6` (tech/learning)
- **Surface:** solid white cards, 1px borders, bottom bevel, layered shadows
- **Type:** Space Grotesk (display) · Inter (body) · JetBrains Mono (code)
- **Motion:** tasteful — honors `prefers-reduced-motion`

Built by Vikash with curiosity & code.
