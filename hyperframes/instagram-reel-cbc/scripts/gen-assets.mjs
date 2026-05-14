import { execFileSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpeg from "ffmpeg-static";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const assets = join(root, "assets");

mkdirSync(assets, { recursive: true });

if (!ffmpeg || !existsSync(ffmpeg)) {
  console.error("ffmpeg-static binary missing; run npm install");
  process.exit(1);
}

const run = (args) => {
  execFileSync(ffmpeg, args, { stdio: "inherit" });
};

// 10s stereo silence (placeholder beat — swap for licensed MP3/WAV before ship)
run([
  "-y",
  "-f",
  "lavfi",
  "-i",
  "anullsrc=r=44100:cl=stereo",
  "-t",
  "10",
  "-c:a",
  "pcm_s16le",
  join(assets, "beat-placeholder.wav"),
]);

// Vertical placeholder clip (replace file with real `galaxy-transform.mp4` from the site)
run([
  "-y",
  "-f",
  "lavfi",
  "-i",
  "testsrc2=size=1080x1920:rate=30",
  "-t",
  "4.9",
  "-pix_fmt",
  "yuv420p",
  join(assets, "galaxy-transform.mp4"),
]);

// Poster frame
run([
  "-y",
  "-i",
  join(assets, "galaxy-transform.mp4"),
  "-frames:v",
  "1",
  "-update",
  "1",
  join(assets, "shoe-galaxy-af1.png"),
]);

// Placeholder coin face (swap for CreationsByChris.png from the site repo)
run([
  "-y",
  "-f",
  "lavfi",
  "-i",
  "color=0x1c1c22:s=512x512",
  "-frames:v",
  "1",
  "-update",
  "1",
  join(assets, "cbc-coin-front.png"),
]);

console.log(
  "Wrote assets/beat-placeholder.wav, galaxy-transform.mp4, shoe-galaxy-af1.png, cbc-coin-front.png",
);
