# Yahya Houimdi Portfolio

Personal portfolio for Yahya Houimdi, focused on AI research, computer vision, machine learning, and intelligent systems.

## Technology

- Astro
- TypeScript
- GitHub Pages

## Run locally

Requirements: Node.js `>= 24.19.0` and npm.

```bash
git clone https://github.com/yahyahouimdi/portfolio.git
cd portfolio
npm install
npm run dev
```

Open `http://localhost:4321` in your browser.

## Production build

```bash
npm run build
npm run preview
```

## Content and assets

- Update personal content in `src/config.ts`.
- Add certificate PNG previews under `public/images/certifications/`.
- Add certificate PDFs under `public/certificates/`.
- Add project and leadership images under `public/images/projects/` and `public/images/associative-work/`.

The GitHub Actions workflow in `.github/workflows/main.yml` builds and deploys the site to GitHub Pages on every push to `main`.
