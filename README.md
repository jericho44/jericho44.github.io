# jericho44.github.io

Personal portfolio website for Rico Wahyu Yudana Putra (Fullstack Engineer).

Built with Vue 3, TypeScript, and Vite. Hosted on GitHub Pages.

## Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Bundler**: Vite
- **Icons**: Lucide Vue Next
- **Styling**: Modern CSS (Custom Design System with Dark/Light mode)
- **Deployment**: GitHub Pages via GitHub Actions

## Development Setup

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```

## Portfolio Content

Data is organized in `src/data/portfolioData.ts`. Update this file to modify projects, work experience, bio, or contact information.

## Deployment

Pushes to the `main` branch automatically trigger the GitHub Actions workflow in `.github/workflows/deploy.yml` which builds and deploys the site to GitHub Pages:

👉 https://jericho44.github.io
