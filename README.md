# CraftedByChris Landing Page

Premium launch landing page for the CraftedByChris Etsy brand.

Live shop: https://www.etsy.com/shop/craftedbychrisllc

## Files

### `index.html` — Standalone build (no dependencies)
Self-contained single-file version with no build step required. Open directly in a browser.

- Cinematic bone-canvas editorial design
- 360° floating shoe hero with drag-to-spin, 8 photo frame slots (drop your Nikon shots in)
- Drops grid, craft/material story, live countdown pre-order band, footer
- Tweaks panel: accent color, canvas theme, spin speed

### Next.js App Router project
Full Next.js + TypeScript + Tailwind project for Vercel deployment.

**Run locally:**
```bash
npm install
npm run dev
```
Open http://localhost:3000

**Deploy on Vercel:**
1. Push to GitHub
2. Import in Vercel → framework: Next.js → Deploy

## Customization
- Drop product photos onto the image-slot placeholders in index.html
- Swap placeholder visuals in public/images with final photo assets
- Update featured drops in src/data/hotItems.ts
