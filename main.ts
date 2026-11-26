// Fortune Cookie Funnies for Engineers — entry program.
// Writes one fortune cookie message for a software engineer to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "You will blame the AI for the outage until the postmortem names your commit.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters.
// Written with NO trailing newline, so the judged text is exactly ENTRY.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
