// The Moon Finally Answers Back — make.fun entry
// A single line, spoken by the Moon, answering four billion years of
// wishes, howls and late-night promises. Deterministic by design: no
// randomness, no clock, no network, no input — the same line every run,
// so the grader's two runs produce byte-identical output.
//
// The line answers all three things the brief names — the wishes, the
// howls, and the 2 a.m. promises to change — in the Moon's own voice:
// wry, old, and a little tired of being wished upon. The turn lands at
// the end: everyone wishes ON the Moon, and nobody has ever wished the
// Moon itself a good night.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Four billion years of wishes, howls, and 2 a.m. promises to change — and not one of you has ever wished me a good night.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1 to 240
// characters, not only white space. Fail loudly instead of shipping a
// line the gate would refuse.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-240`);
}
if (!LINE.trim()) {
  throw new Error("entry line must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
