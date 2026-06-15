# Riyazkhan Pathan — Portfolio

Production-ready personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
cd portfolio-frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build
```

## Project Structure

```
portfolio-frontend/           # React frontend (Vite + TypeScript + Tailwind)
│
├── src/
│   ├── components/
│   │   ├── layout/           # Navbar, Footer
│   │   ├── sections/         # Hero, About, Experience, Skills,
│   │   │                     # FeaturedProject, GitHubSection,
│   │   │                     # AIJourney, Contact
│   │   └── ui/               # SectionHeading, AnimatedCounter
│   ├── data/
│   │   └── portfolioData.ts  # All resume data — single source of truth
│   ├── hooks/
│   │   └── useTypewriter.ts  # Typewriter animation hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── public/                   # Add your resume PDF here
├── vercel.json               # Vercel deployment config
├── Dockerfile                # Docker + nginx build
└── nginx.conf
```

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Full-screen intro with typewriter, CTAs, stats |
| 2 | About | Bio, core expertise, education, certifications |
| 3 | Experience | Timeline — Centralogic / VFS Global / Centra Job |
| 4 | Skills | Categorized skills with filter tabs |
| 5 | Featured Project | VFS Global eVisa Platform case study |
| 6 | GitHub | Repos, language stats, contributions |
| 7 | AI Journey | AI projects, integrations, learning roadmap |
| 8 | Contact | Form + contact info |

## Customization

Edit `src/data/portfolioData.ts` to update all content — experience, skills, projects, social links.

Add your real profile photo to `public/avatar.jpg` and update the Hero component image path.

Add your resume PDF to `public/Riyazkhan_Pathan_Resume.pdf`.

## Deployment

**Vercel (recommended):**
```bash
npm i -g vercel
vercel --prod
```

**Docker:**
```bash
docker build -t portfolio-frontend .
docker run -p 3000:80 portfolio-frontend
```

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- React Icons 5

## Design System

- Background: `#09090B`
- Primary: `#00D4FF`
- Secondary: `#7C3AED`
- Accent: `#00FFB2`
- Font: Inter + Space Grotesk