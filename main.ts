// News-image entry (Node 22, standard library only).
// The front page is the entry.png shipped beside this file; this program
// copies it to the output directory as entry.png.
// Local run:  MAKEFUN_OUTPUT_DIR=out node main.ts   (defaults to /output)

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
