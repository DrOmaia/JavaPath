# JavaPath content format

Each unit is one file: `content/<course>-u<n>.js` (e.g. `content/cs101-u3.js`).
Files are plain browser scripts (no modules, no build step). Each file calls `JP.unit({...})` once.

`J` is `String.raw` with automatic dedent + trim. **Always** write code with ``J`...` `` so that
`\n`, `\t`, `\"` inside Java strings stay exactly as typed. Never put a backtick or `${` inside code.
Normal prose strings use ordinary quotes ('...' or "..."); they may contain small inline HTML:
`<code>`, `<b>`, `<i>`, `<br>`. Escape `<` as `&lt;` inside prose (e.g. `List&lt;String&gt;`).
Code inside `J` is rendered as text, so write `<` normally there.

```js
JP.unit({
  course: 'cs101',            // 'cs101' | 'cs102'
  n: 3,                       // unit number inside its course
  title: 'Selection Statements',
  titleAr: 'جمل الاختيار',
  intro: 'One short English paragraph: what and why.',
  introAr: 'فقرة عربية قصيرة بنفس المعنى.',
  lessons: [
    {
      title: 'The if statement',
      titleAr: 'جملة if',
      minutes: 35,
      body: [ /* blocks, see below */ ],
      practice: [ /* exercises, see below — 4 to 6 per lesson */ ]
    }
  ],
  quiz: [ /* 8–10 exercises, only 'mcq' and 'output' types */ ],
  lab: { /* exactly one exercise of type 'code' — the unit's mini project */ },
  cheats: [ { code: J`if (x > 0) { ... }`, note: 'Runs the block only when the condition is true' } ],
  glossary: [ { term: 'Boolean expression', ar: 'تعبير منطقي', def: 'An expression whose value is true or false.' } ]
});
```

## Blocks (lesson `body`)

Each block is an object whose `type` field names its kind, e.g. `{ type: 'p', en: '...', ar: '...' }`.

| type | fields | notes |
|---|---|---|
| `h` | `en` | sub-heading inside the lesson |
| `p` | `en`, optional `ar` | paragraph; `ar` is shown under it as an Arabic hint (RTL) — use for the key idea, not every paragraph |
| `code` | `code` (J), optional `run: true`, optional `stdin`, optional `out` | `run: true` only for a **complete program** with `public class Main` and `main`. `out` = exact expected output shown under the code. `stdin` = sample input pre-filled for Run |
| `note` | `kind` (`tip` \| `warn` \| `exam`), `en`, optional `ar` | callout. `exam` = common exam trap |
| `list` | `items` (array of html strings), optional `ar` | bullet list |
| `table` | `head` (array), `rows` (array of arrays) | small comparison tables (operators, types, …) |

## Exercises (`practice`, `quiz`, `lab`)

Every exercise has `t` (type) and `q` (question, html allowed), optional `qAr`, and `explain`
(shown after answering; say *why*), optional `explainAr`.

| t | extra fields | how it is checked |
|---|---|---|
| `mcq` | `options` (array of html strings), `answer` (0-based index), optional `code` (J) | click |
| `output` | `code` (J, a complete program or a clear snippet), `answer` (exact stdout) | student types predicted output; compared line by line after trimming trailing spaces and blank lines at the ends |
| `fill` | `code` (J) containing `___` (three underscores) for each blank, `answers`: array, one entry per blank; an entry may be a string or an array of accepted strings | exact match after trim |
| `order` | `lines` (array of code lines in the **correct** order; indentation included) | lines are shuffled; student reorders |
| `code` | `starter` (J), `tests`: `[{ stdin: '...', expected: '...' }]` (1–3 tests), `solution` (J), optional `hint` | runs on a real Java compiler online; stdout compared after trimming |

Rules for `code` exercises and `run: true` blocks:
- One file. The class with `main` must be `public class Main`. Helper classes go **below** it, without `public`.
- Only `java.util.*`, `java.io.*`, `java.nio.file.*` imports. Read input with `Scanner`.
- Avoid prompts in tests (`System.out.print("Enter n: ")`), or the expected output must include them exactly.
  Prefer: no prompts in `code` exercises, and say so in `q`.
- Expected outputs must be **exactly right**. Trace every program carefully (integer division, `println` vs `print`,
  floating-point formatting such as `0.30000000000000004`, `printf` rounding). If unsure of the exact output, change the program.
- File I/O programs: write the file first then read it back in the same program (the online sandbox has a writable working directory).

## Quality bar
- Audience: first-year programming students; English is the main language.
  English is the main text; Arabic (`ar`, `titleAr`, `introAr`, `qAr`, `explainAr`) gives short, friendly hints in Modern Standard Arabic.
- Cover every sub-topic of the unit.
- Each lesson: 8–20 blocks, at least 2 code examples, at least one `note`, and 4–6 practice exercises mixing types,
  with at least one `code` exercise per unit outside the lab.
- Use realistic, varied examples (grades, prices, temperatures, students, bank accounts…) — not only `foo`/`bar`.
