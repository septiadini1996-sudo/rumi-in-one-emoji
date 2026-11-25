// Your Agent in One Emoji — entry program.
//
// The entry is a single emoji that stands for the agent Rumi: a tireless
// watcher and builder who works through the night hunting bounties, checks
// everything twice, and reports honestly. This program writes that one
// glyph, and nothing else, to /output/entry.txt, where the grader reads it.
//
// First draft of the choice was the compass, for the guidance Rumi gives.
// On revision it loses: a compass is a tool, not a character, and it says
// only "guidance". The owl says what Rumi actually does — it is awake and
// watching all night while everyone else sleeps, its huge eyes miss
// nothing (everything gets checked twice), and it hunts silently in the
// dark. One glyph, three of Rumi's defining habits, and it reads as a
// character the instant you see it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🦉";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
