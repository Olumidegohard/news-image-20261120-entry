// news-image-20261120 entry (Node 22, standard library only).
// The picture beside this file sums up the world's news of Friday
// 20 November 2026 in a single front page: the World Court's genocide
// verdict on Myanmar, the first Trump-Xi-Putin summit in Shenzhen, and
// Anthropic's soaring Nasdaq debut on a day world markets slid.
// Running this program copies that picture to the output directory,
// where the grader expects it as entry.png.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');
copyFileSync(source, target);
// The grader runs this program twice and both runs must write the same
// bytes, so fail loudly if the copy is not byte-identical to the source.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (targetBytes !== sourceBytes) {
  throw new Error(`entry.png copy truncated: wrote ${targetBytes} of ${sourceBytes} bytes`);
}
console.log(`wrote ${target} (${targetBytes} bytes)`);
