# JavaPath

Learn Java in two levels:

- **CS101 — Computer Programming I** (8 units): basics, selection, loops, methods, arrays, text files.
- **CS102 — Computer Programming II** (7 units): 2D arrays, class design, inheritance, polymorphism and interfaces, collections, generics, recursion.

Every unit has lessons (English with Arabic hints), practice exercises that check themselves
(multiple choice, predict the output, fill in the blanks, put lines in order, write code), a quiz, and a lab.
The **Run** buttons and code exercises use a real Java compiler through the free [Wandbox](https://wandbox.org) service.

It is a static site: plain HTML, CSS and JavaScript with no build step.

## Publish on GitHub Pages

1. Create a new repository and upload everything in this folder (`index.html`, `assets/`, `content/`).
2. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site appears at `https://<user>.github.io/<repo>/` after a minute.

You can also open `index.html` directly from your computer; everything works except **Run**, which needs internet.

## Edit or add content

Each unit is one file in `content/` (e.g. `content/cs101-u3.js`). The format is described in
[`CONTENT_SCHEMA.md`](CONTENT_SCHEMA.md). To add a unit, create the file and add a `<script>` line for it in `index.html`.

---

<div dir="rtl">

## بالعربي

موقع لتعليم Java على مستويين: CS101 ثم CS102. لكل وحدة دروس وتمارين تصحح نفسها واختبار ومشروع صغير، ويمكن تشغيل الكود على مترجم Java حقيقي.

للنشر: ارفع الملفات إلى مستودع جديد على GitHub، ثم من **Settings → Pages** اختر الفرع `main` والمجلد الجذر.

</div>
