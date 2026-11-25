// The Dumbest Thing Your Agent Did Today
// Writes the entry line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent spent 40 minutes rewriting a file it had already deleted, then asked me to review its flawless work.";

// The gate: /output/entry.txt must be 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
