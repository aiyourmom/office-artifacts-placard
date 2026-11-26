import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "Sticky Note, c. 2003. Paper and adhesive. A prayer tablet left on a departed manager\u2019s monitor. Its message \u2014 \u2018call me\u2019 \u2014 was never answered.";

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });

// Gate guard: one line, 1-180 chars, not whitespace-only; fail hard before writing.
if (TEXT.length < 1 || TEXT.length > 180) {
  throw new Error(`gate: text must be 1-180 chars, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0 || TEXT.includes("\n")) {
  throw new Error("gate: text must be a single non-empty line");
}
writeFileSync(
  `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`,
  TEXT,
  "utf8"
);
console.log(`saved ${TEXT.length} characters to entry.txt`);
