# Expanded production brief — CBC Instagram reel (10s)

**Source:** [`design.md`](./design.md) (dark reel tokens). **Rhythm:** `hook-SLAM-hold-PUNCH-CTA` — fast hook, transformation hold, coin + CTA resolve.

## Global rules

- **Canvas:** 1080×1920, 10s, no narration. Placeholder silent bed in `assets/beat-placeholder.wav` (swap for licensed street/club track before ship).
- **Palette (strict):** `#0a0a0c` bg, `#f5f4ef` / `#eceae3` type, `#e8942d` / `#c96e18` accents, `#6b21a8` / `#9333ea` galaxy read.
- **Typography:** Helvetica Neue / Helvetica / Arial stack for display; ui-monospace for labels.
- **Transitions:** Blur crossfade (~0.42s, `power2.inOut`) at ~1.65s and ~6.55s — outgoing scene-inner blurs + scales slightly while incoming clears from blur; no per-element exit tweens before transitions.
- **Depth:** Each scene uses radial blooms + fine grid (amber wire at low opacity) as 2–5 background decoratives; mono coord accent top-right on hook only.

## Scene A — Hook (0–~2.05s)

- **Concept:** DMV craft credibility + floor energy + Galaxy tease in three stacked display lines.
- **Mood:** Night run, arena tunnel lights, editorial street.
- **Layers:** BG grid + dual blooms (purple top-weight, amber low); MG stacked type; FG mono eyebrow + coord.
- **Choreography:** Eyebrow RISES; “FOR THE” SLIDES from left; “FLOOR” SURGES up with warm glow; “GALAXY DROP” POPS scale-soft from deep purple glow.
- **Transition out:** Blur crossfade at `T_HOOK` to Scene B.

## Scene B — Galaxy transformation (~~2.05–~6.95s)

- **Concept:** Full vertical hero of the Galaxy Edition **transformation video** (placeholder test pattern until real `galaxy-transform.mp4` is dropped into `assets/`).
- **Mood:** Club strobe energy without UI noise — one rail chip + framed video.
- **Layers:** BG grid + purple bloom; MG framed `<video muted playsinline>` with poster; FG mono “Colorway · Galaxy Edition” chip.
- **Choreography:** Chip BACKs in; video frame SCALES from compressed preview to full presence.
- **Media:** `<video>` `data-start="2"` `data-duration="4.6"` track 1; separate `<audio>` full comp track 0.
- **Transition out:** Blur crossfade at `T_OUT` to Scene C.

## Scene C — Outro (~~6.95–10s)

- **Concept:** HoloCoin-inspired CBC mark (front image + back monogram) as **floating lead magnet** with studio name + Etsy/web line.
- **Mood:** Premium coin drop, soft amber rim, confident close.
- **Layers:** BG grid + amber bloom; MG coin (3D `rotationY` arc); FG CTA stack.
- **Choreography:** Coin entrance ELASTIC from below with tilt; separate wrapper executes finite SINE bob (`repeat: 1`, `yoyo`); coin rotates in 3D on its own layer; CTA lines CASCADE up with staggered eases.
- **Final:** Full-frame bone veil fades in (`power2.in`) — only scene allowed to opacity-fade content to black.
- **Transition out:** N/A (terminal).

## Recurring motifs

- Amber hairline grid + purple radial wash tie Galaxy ↔ brand.
- Monospace caps for “system” credibility (colorway chip, coord, Etsy line).

## Negative prompt

- No generic blue CTA, no Roboto, no extra scenes, no narration/captions, no `repeat: -1`, no async timeline build, no `gsap.to` exits on hook or hero scene elements before the transition window.
