import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpeg from "ffmpeg-static";
import ffprobe from "ffprobe-static";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const dirs = new Set([
  dirname(ffmpeg),
  dirname(ffprobe.path),
]);
const sep = process.platform === "win32" ? ";" : ":";
const prefix = [...dirs].join(sep);
process.env.PATH = `${prefix}${sep}${process.env.PATH}`;
process.env.Path = `${prefix}${sep}${process.env.Path ?? ""}`;

const args = ["--yes", "hyperframes@0.6.6", "render", ...process.argv.slice(2)];
const r = spawnSync("npx", args, { stdio: "inherit", shell: true, cwd: root });
process.exit(r.status === null ? 1 : r.status);
