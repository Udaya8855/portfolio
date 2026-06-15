# 🖥️ Alex Chen — Backend Developer Portfolio

A production-quality, fully responsive portfolio built with **React 18**, **TypeScript**, and **Tailwind CSS v3**. Designed for a backend developer with 1 year of experience in Spring Boot, microservices, PostgreSQL, Docker, and AWS.

---

## ✨ Features

- **Dark mode toggle** (persisted in localStorage, respects system preference)
- **Responsive** across mobile, tablet, and desktop
- **Accessible** — semantic HTML, ARIA roles/labels, skip-to-content, keyboard focus management
- **Active nav highlighting** via IntersectionObserver
- **Animated rotating roles** on the hero
- **Filterable skills grid** by category (Backend, Database, DevOps, Cloud, Tools)
- **Expandable project cards** with tech stack chips
- **Interactive experience timeline** with expandable accordion entries
- **Mock contact form** with client-side validation and success state
- **Photo placeholder** in About & Contact, ready for a real image
- **SEO-friendly** — semantic tags, meta description, OG tags in index.html

---

## 🗂️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.tsx        # Primary / ghost / outline variants
│   ├── Footer.tsx
│   ├── Header.tsx        # Sticky nav with mobile hamburger + dark toggle
│   ├── ImagePlaceholder.tsx
│   ├── ProjectCard.tsx   # Expandable project card
│   ├── Section.tsx       # Section wrapper + SectionHeader
│   └── Tag.tsx           # Tech chip/badge
├── data/
│   └── index.ts          # All dummy data — edit this file to personalise
├── hooks/
│   └── useDarkMode.ts    # Dark mode with localStorage persistence
├── sections/             # Page sections (one file per section)
│   ├── HomeSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── TimelineSection.tsx
│   └── ContactSection.tsx
├── types/
│   └── index.ts          # TypeScript interfaces: Project, Skill, TimelineEntry, etc.
├── App.tsx
├── main.tsx
└── index.css             # Tailwind directives + global base styles
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

Opens at **http://localhost:5173** with HMR.

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

---

## 🎨 Personalising the Portfolio

### 1. Update your info — edit `src/data/index.ts`
All content lives here: skills, projects, timeline entries, and nav links. Change names, dates, tech stacks, and descriptions.

### 2. Add your photo
Replace the `<ImagePlaceholder />` components in `AboutSection` and `ContactSection` with a real `<img>` tag:

```tsx
<img
  src="/your-photo.jpg"
  alt="Your name — profile photo"
  className="w-48 h-48 rounded-2xl object-cover border border-cyan-500/20"
/>
```

Place the image in the `public/` directory.

### 3. Add your resume PDF
Place `resume-alex-chen.pdf` in the `public/` directory — the Download CV button links to it automatically.

### 4. Wire up the contact form
Replace the mock submit in `ContactSection.tsx` with a real integration (Resend, EmailJS, Formspree, etc.):

```tsx
// Replace the setTimeout mock:
const res = await fetch('https://formspree.io/f/your-id', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
});
if (res.ok) setSubmitted(true);
```

### 5. Update SEO meta tags
Edit `index.html` — update `<title>`, `<meta name="description">`, and the OG tags.

---

## 🧱 Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Icons | lucide-react |
| Build tool | Vite 5 |
| Routing | Single-page scroll (no React Router needed) |
| Fonts | Inter, Space Grotesk, JetBrains Mono (Google Fonts) |

---

## 🌐 Deploying

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
Drag and drop the `dist/` folder at app.netlify.com, or:
```bash
netlify deploy --prod --dir=dist
```

### GitHub Pages
Use `vite-plugin-gh-pages` or set `base` in `vite.config.ts`:
```ts
base: '/your-repo-name/',
```

---

## 📝 Answering Your Clarifications

| Question | Decision |
|---|---|
| CSS approach | Plain Tailwind utility classes only — no CSS modules |
| Routing | Single-page scroll navigation — no React Router (adds complexity without benefit for a portfolio) |
| Hosting | Deployment-agnostic; instructions for Vercel, Netlify, GitHub Pages above |

---

## License

MIT — use and modify freely.
