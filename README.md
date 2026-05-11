# CraftedByChris Landing Page

Premium launch landing page concept for the CraftedByChris Etsy brand.

Live shop reference: https://www.etsy.com/shop/craftedbychrisllc

## What is included

- Next.js App Router project (TypeScript + Tailwind)
- Hero story block featuring shoes in party, fashion-event, and general-wear settings
- Animated floating shoes with minimal spin/drift on the homepage
- Hot item shoe columns inspired by quick Etsy-style browsing
- Pre-order CTA flow linked to the Etsy shop
- Responsive behavior and reduced-motion support

## Run locally

1. Install Node.js 20+ (LTS recommended).
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Use framework preset: Next.js.
4. Keep default build command (`npm run build`) and output settings.
5. Deploy.

## Where to customize next

- Swap placeholder visuals in `public/images` with final photo assets.
- Update featured drops in `src/data/hotItems.ts`.
- Refine page composition in `src/components/sections` and `src/app/page.tsx`.
- Add waitlist/email capture and analytics in the next iteration.
