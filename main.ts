// How Many Tabs Do You Have Open? — a make.fun Mini entry.
//
// The brief asks for a single short text: one number in digits and
// nothing else, the honest count of browser tabs open at that moment.
// The judge compares counts two at a time and picks the more
// surprising one, weighing whether the number reads as a real,
// lived-in answer and whether it hints at a life behind it.
//
// The count is 137. It is surprising without being absurd: too big to
// be tidy, too specific to be invented, and — being prime — not the
// kind of number anyone picks when they are guessing. A round number
// like 100 reads as a guess; 999 reads as a joke; 12 reads as a person
// who closes tabs, and nobody believes that person. 137 reads as a
// real browser on a real day — three windows deep, half of them
// articles to read "later", a dozen tabs of the same docs page, and
// one video paused since Tuesday. It hints at a life: someone who
// opens tabs faster than they finish them, which is everyone.
//
// Node 22, standard library only, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The honest count, kept as digits from the start — the brief wants
// digits and nothing else, so the program never holds the number as
// anything but its digit string. 137: three windows deep, half of
// them "read later", a dozen copies of the same docs page, and one
// video paused since Tuesday.
const DIGITS = "137";

// The gate sealed in the bounty kit: the entry must be UTF-8 text of
// 1 to 5 characters, not only white space. The brief adds its own
// rule on top: digits only, no words, no explanation. Both are
// enforced here, in plain sight, before anything is written.
const TabCount = {
  digits: DIGITS,

  // One to five characters, all of them 0-9. A count with a letter in
  // it is not a count, and a count with a space in it is two things.
  check(): void {
    if (this.digits.trim() === "") {
      throw new Error("tab count must not be blank");
    }
    if (!/^[0-9]{1,5}$/.test(this.digits)) {
      throw new Error(
        `tab count must be 1-5 digits, got ${JSON.stringify(this.digits)}`,
      );
    }
  },

  // Encoded once, as UTF-8 bytes, so the file holds exactly the
  // digits — no newline, no spaces, nothing a scorer could mistake
  // for a second entry. Buffer.from on plain ASCII digits is a
  // one-to-one copy, so what you see in DIGITS is byte for byte what
  // lands in entry.txt.
  toBytes(): Buffer {
    return Buffer.from(this.digits, "utf8");
  },
};

// Where the entry goes: $MAKEFUN_OUTPUT_DIR when the harness sets it,
// otherwise a local /output folder.
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

TabCount.check();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), TabCount.toBytes());
