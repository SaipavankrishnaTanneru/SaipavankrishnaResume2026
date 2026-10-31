# Sai Pavan Krishna — Resume Website

A modern, animated single-page resume/portfolio built with **React + Vite + Tailwind CSS + Framer Motion + React Icons**.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:9999

## Build for production

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys to GitHub Pages on every push to `main`/`master`.

After pushing:
1. Go to repo **Settings → Pages → Source: GitHub Actions**.
2. Push to `main`; the workflow runs and publishes.
3. Shareable link: `https://saipavankrishnatanneru.github.io/SaipavankrishnaResume2026/`

## Sections
- Hero (animated intro, stats, floating tech icons)
- About
- Skills (grouped, animated chips)
- Experience (animated timeline)
- Education
- Contact (form + social links)
- Footer

## Customize
Edit `src/data/resume.js` to update personal info, skills, experience, education.
