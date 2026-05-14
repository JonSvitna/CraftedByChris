# Instagram reel — CraftedByChris (HyperFrames)

Vertical **1080×1920**, **10 seconds**, optimized for Reels / Stories.

## Commands

```bash
npm install          # once (includes ffmpeg-static for asset generation)
npm run gen-assets   # regenerates placeholder WAV + MP4 + PNGs in assets/
npm run dev          # preview in browser (HyperFrames Studio)
npm run check        # lint + validate + inspect
npm run render       # MP4 export (prepends bundled ffmpeg-static to PATH on Windows/macOS/Linux)
```

## Swap these assets before launch

| File | Purpose |
|------|---------|
| `assets/galaxy-transform.mp4` | Real Galaxy colorway transformation clip from the site (`public/videos/galaxy-transform.mp4`). |
| `assets/shoe-galaxy-af1.png` | Poster still (auto-regenerated from video if you re-run `gen-assets`; replace with marketing still if preferred). |
| `assets/cbc-coin-front.png` | Coin face art — replace with `CreationsByChris.png` from the repo when available. |
| `assets/beat-placeholder.wav` | Silent 10s stub — replace with a **licensed** upbeat MP3/WAV and update `src` on the `<audio>` element if the filename changes. |

## Design

Brand tokens for this reel live in [`design.md`](./design.md).
