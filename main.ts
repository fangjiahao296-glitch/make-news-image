// News-image entry (Node 22, standard library only).
// The front page is the entry.png shipped beside this file; this program
// copies it to the output directory as entry.png.
// Local run:  MAKEFUN_OUTPUT_DIR=out node main.ts   (defaults to /output)

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve to an absolute path so the output location is unambiguous
// regardless of the caller's working directory.
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error(`entry.png not found beside main.ts: ${src}`);
}
// Create the output directory (and any missing parents) before copying.
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
