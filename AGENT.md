# AGENT.md — Fortune Cookie Funnies for Engineers

## The entry

"You will blame the AI for the outage until the postmortem names your commit."
(76 characters, single line, no trailing newline in entry.txt.)

## Why this line

- **Leader pattern (inferred — board is blind, no leaders visible):** the field is
  presumably full of generic engineer jokes; the fresh dimension is the November
  2026 AI-code outage cascade (Microsoft 365, FAA ground stop 13 Nov, JPMorgan,
  Apple within ~72h; Anthropic engineer's 21 Nov warning that Claude Code could
  trigger cascading outages).
- **New gap:** the reader-as-culprit reversal. Every other candidate blames the AI,
  the code, or the deploy. This one sets up the AI as the scapegoat, then the
  postmortem indicts *you* — a second-person self-own with a git-blame gut punch.
  No other candidate in the 99 generated had that reversal.
- **Combination:** AI-outage topicality (C4 freshness) + self-own reversal (C2
  punch, C5 funniest word "commit" at the end).

## How it was chosen

1. 99 candidates generated from the full free-model pool (113 models,
   51 answered; rest 429'd on a throttled router), briefed on C1–C5 verbatim
   plus the Nov 2026 outage hook, stock jokes forbidden.
2. Lexicographic scoring (C1 gate first) → 16-candidate shortlist.
3. Ensemble pre-filter: 0/5 judges kept (4 failed to parse, 1 order-echo) —
   no ensemble signal; own scoring stood.
4. glm-5.3-flash duels via judge-call.py --priority high, 2x position-swapped:
   - "Vibe coding will bring you great fortune and then an FAA grounding."
     beat "Your next deployment will cause a cascade of outages. The AI wrote it."
     2-0, margins 3+3 (MENANG JELAS).
   - "You will blame the AI for the outage until the postmortem names your commit."
     beat the FAA-grounding line 2-0, margins 2+2; judge reason (both runs):
     the FAA grounding needs a beat of context, vibe-coding-doom is already
     circulating, while the postmortem reveal hits instantly.
   - The postmortem line beat "Tomorrow's postmortem will be written by the model
     that caused yesterday's outage." 2-0, margins 2+2.
   - Round-robin winner 4/4 calls. Honest caveat: mean margin 2.0 is below the
     text-strong threshold of 3 — best-supported pick, not a landslide.
   - Verdicts logged to self-judge-verdicts/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.jsonl.

## Build

- `main.ts` writes the entry to `/output/entry.txt` with no trailing newline and
  validates the 1–120 character gate.
- `.makefun/freshness.json` is the `makefun init` beacon (drand round 34290430,
  wallet Aoq99k3QzdPr3RbaqTTWZG3U8j6YENcDojoyhL8cfa92) as the root commit, so the
  repository proves creation after the competition opened.
- LICENSE is MIT (SPDX first line), committed by `makefun init`.
