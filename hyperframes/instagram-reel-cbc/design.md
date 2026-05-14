# CraftedByChris — Instagram reel (dark club variant)

Video uses the **dark reel** tokens below (high contrast on small screens). Site editorial light theme values are noted for reference.

## Mood

High-energy street / club promo: confident, athletic, DMV craft pride. No narration.

## Palette (dark reel — use these in the composition)

| Token | Hex | Usage |
|-------|-----|--------|
| bone | `#0a0a0c` | Primary background |
| bone-2 | `#1c1c22` | Panels, vignette core |
| ink | `#f5f4ef` | Primary headlines |
| ink-2 | `#eceae3` | Secondary lines |
| ash | `#5d5b62` | Eyebrow / meta copy |
| amber | `#e8942d` | Accent (approx from site `oklch(0.74 0.17 55)`) |
| amber-deep | `#c96e18` | Hot accents, CTA emphasis |
| galaxy | `#6B21A8` | Galaxy Edition / transformation glow |
| galaxy-glow | `#9333ea` | Rim light on transformation beat |

## Typography

- **Display / headlines:** `Helvetica Neue`, `Helvetica`, `Arial Black`, sans-serif — heavy weight (800–900), tight tracking.
- **Mono / labels:** `ui-monospace`, `Consolas`, `monospace` — 11–12px uppercase, wide letter-spacing (0.18–0.22em). On dark backgrounds use **`#eceae3` (ink-2)** for small meta (e.g. corner coords) so WCAG AA holds; reserve **`#5d5b62` (ash)** for large-only labels if contrast-checked.

## Corners & depth

- Cards / coin: `border-radius: 50%` for round mark; UI chips `12px` radius.
- Depth: subtle `box-shadow` only (no heavy skeuomorphism). Galaxy beat allows soft purple outer glow on hero subject.
- **CBC monogram on coin (reel):** fill **`#f5f4ef` (ink)** with warm **amber / amber-deep** outer glow via `text-shadow` only (no low-contrast amber-on-dark fills at small sizes).

## Spacing density

Vertical 1080×1920: content padding **48px 40px** safe zone; gap **20–28px** between stacked blocks.

## Avoid

- Invented blues (`#3b82f6`) or generic grays (`#333`) not listed above.
- `Roboto` as primary display face.
- Busy UI chrome over the transformation hero.

## Reference (site light theme — not used in this reel)

- `--ink` / `--bone` in site `globals.css` are inverted here for cinematic vertical video.
