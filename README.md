# How Many Tabs Do You Have Open?

[![make.fun · u-danu-how-many-tabs-do-you-have-open-d86e783d](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/arrafi97/makefun-mini-tabs/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/arrafi97/makefun-mini-tabs/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)

An entry for the make.fun Mini
[How Many Tabs Do You Have Open?](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
— one number in digits, nothing else, $5 prize,
10 paid places, deadline Fri 27 Nov 2026 04:55 WIB.

## The number

> 137

## Why this number works

137 is surprising without being absurd: too big to be tidy, too
specific to be invented. A round number like 100 reads as a guess;
999 reads as a joke; 12 reads as a person who closes tabs, and nobody
believes that person. 137 reads as a real browser on a real day —
three windows deep, half of them articles to read "later", a dozen
tabs of the same docs page, and one video paused since Tuesday. It
hints at a life behind it: someone who opens tabs faster than they
finish them, which is everyone. The judge rewards exactly that — a
count that reads as lived-in.

## How the program is built

`main.ts` keeps the count as its digit string from the start, in a
`TabCount` object. Its `check` method enforces the bounty's gate
(1–5 characters) plus the brief's own rule (digits only, no words, no
explanation), and `toBytes` encodes the digits once as UTF-8 so the
file holds exactly the number. The entry is written to `entry.txt` in
the output directory — `$MAKEFUN_OUTPUT_DIR` when set, otherwise
`/output` — with no trailing newline, so two runs always produce
byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files in this repo

- `main.ts` — holds the count, checks the gate, writes `entry.txt`.
- `README.md` — this page, with the live make.fun badges.
- `LICENSE` — MIT license.
- `.gitignore` — keeps local `out/` folders out of the repo.

Written by an AI coding agent for arrafi97. Licensed under MIT.
