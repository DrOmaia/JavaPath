#!/usr/bin/env node
/*
 * JavaPath content verifier.
 *   node tools/verify-content.js <repo-dir> <content-file.js> [more files...]
 * Loads each unit file the same way the site does, checks its structure against CONTENT_SCHEMA.md,
 * then compiles and runs every Java program with the local JDK and compares the output:
 *   - code blocks with run:true (and their `out`, `stdin`)
 *   - steps blocks (whole program, `out`, `stdin`)
 *   - output exercises (complete programs only; snippets are reported as skipped)
 *   - code exercises and the lab: the solution against every test
 *   - fill exercises (blanks replaced by the first accepted answer) and order exercises,
 *     when the result is a complete program: compiled (and run if it needs no input)
 *   - bug exercises: line number in range, fix present; the fix is compiled when it is a complete program
 * Exit code 0 = everything passed.
 */
'use strict';
const fs = require('fs'), vm = require('vm'), path = require('path'), os = require('os');
const { execFile } = require('child_process');

const [repo, ...files] = process.argv.slice(2);
if (!repo || !files.length) { console.error('usage: node tools/verify-content.js <repo-dir> <content-file.js>...'); process.exit(2); }

const normalize = s => String(s || '').replace(/\r\n/g, '\n').split('\n').map(l => l.replace(/\s+$/, '')).join('\n').replace(/^\n+|\n+$/g, '');
const isProgram = c => /\bclass\s+Main\b/.test(c || '') && /static\s+void\s+main\s*\(/.test(c || '');
const usesInput = c => /Scanner\s*\(\s*System\.in|System\.in\.read|BufferedReader/.test(c || '');

// Same preparation as assets/runner.js: drop `public` from top-level types other than Main.
function prepare(src) {
  return src.replace(/(^|\n)(\s*)public\s+((?:abstract\s+|final\s+)*(?:class|interface|enum|record)\s+(?!Main\b))/g, '$1$2$3');
}

const problems = [], warnings = [];
let jobs = [], ran = 0, skipped = 0;

function loadUnits(file) {
  const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(repo, 'assets/core.js'), 'utf8'), ctx);
  const units = []; const orig = ctx.JP.unit;
  ctx.JP.unit = u => { units.push(u); orig(u); };
  try { vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); }
  catch (e) { problems.push(`${file}: does not load: ${e.message}`); }
  if (ctx.JP.errors.length) problems.push(`${file}: ${ctx.JP.errors.join('; ')}`);
  return units;
}

function job(where, code, stdin, expected, opts = {}) { jobs.push({ where, code, stdin: stdin || '', expected, opts }); }

function runJava(j) {
  return new Promise(resolve => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'jpv-'));
    fs.writeFileSync(path.join(dir, 'Main.java'), prepare(j.code));
    execFile('javac', ['-nowarn', '-encoding', 'UTF-8', 'Main.java'], { cwd: dir, timeout: 60000 }, (err, so, se) => {
      if (err) { fs.rmSync(dir, { recursive: true, force: true }); return resolve({ compileError: (se || String(err)).split('\n').filter(l => !/^Picked up/.test(l)).slice(0, 6).join('\n') }); }
      if (j.opts.compileOnly) { fs.rmSync(dir, { recursive: true, force: true }); return resolve({ stdout: '' }); }
      const p = execFile('java', ['-Xss8m', '-cp', '.', 'Main'], { cwd: dir, timeout: 15000, maxBuffer: 4 << 20 }, (err2, out, errOut) => {
        fs.rmSync(dir, { recursive: true, force: true });
        const stderr = (errOut || '').split('\n').filter(l => !/^Picked up/.test(l)).join('\n').trim();
        resolve({ stdout: out || '', stderr, exit: err2 ? (err2.code || 'timeout') : 0 });
      });
      p.stdin.on('error', () => {});
      p.stdin.end(j.stdin);
    });
  });
}

function need(cond, where, msg) { if (!cond) problems.push(`${where}: ${msg}`); }

function checkExercise(ex, where, inQuiz) {
  const t = ex.t;
  need(ex.q, where, 'missing q');
  need(ex.explain, where, 'missing explain');
  if (inQuiz) need(t === 'mcq' || t === 'output' || t === 'bug', where, `quiz may only use mcq, output or bug (found ${t})`);
  if (t === 'mcq') {
    need(Array.isArray(ex.options) && ex.options.length >= 2, where, 'mcq needs options');
    need(Number.isInteger(ex.answer) && ex.answer >= 0 && ex.answer < (ex.options || []).length, where, 'mcq answer index out of range');
  } else if (t === 'output') {
    need(typeof ex.answer === 'string', where, 'output needs answer string');
    if (isProgram(ex.code)) job(where + ' [output]', ex.code, ex.stdin, ex.answer);
    else { skipped++; warnings.push(`${where}: output exercise is a snippet (not verified)`); }
  } else if (t === 'fill') {
    const parts = String(ex.code || '').split('___');
    need(parts.length > 1, where, 'fill has no ___ blanks');
    need(Array.isArray(ex.answers) && ex.answers.length === parts.length - 1, where, `fill has ${parts.length - 1} blanks but ${(ex.answers || []).length} answers`);
    if (parts.length > 1 && Array.isArray(ex.answers)) {
      let full = parts[0]; ex.answers.forEach((a, i) => { full += [].concat(a)[0] + (parts[i + 1] || ''); });
      if (isProgram(full)) job(where + ' [fill solved]', full, '', null, { compileOnly: usesInput(full) });
    }
  } else if (t === 'order') {
    need(Array.isArray(ex.lines) && ex.lines.length >= 3, where, 'order needs at least 3 lines');
    const full = (ex.lines || []).join('\n');
    if (isProgram(full)) job(where + ' [order solved]', full, '', null, { compileOnly: usesInput(full) });
  } else if (t === 'code') {
    need(ex.starter != null, where, 'code needs starter');
    need(ex.solution, where, 'code needs solution');
    need(Array.isArray(ex.tests) && ex.tests.length >= 1, where, 'code needs tests');
    need(isProgram(ex.solution), where, 'solution must be a complete program with public class Main');
    (ex.tests || []).forEach((tc, i) => job(`${where} [test ${i + 1}]`, ex.solution, tc.stdin, tc.expected));
  } else if (t === 'bug') {
    const n = String(ex.code || '').split('\n').length;
    const bugs = [].concat(ex.bug);
    need(bugs.length && bugs.every(b => Number.isInteger(b) && b >= 1 && b <= n), where, `bug line(s) ${bugs} out of range 1..${n}`);
    need(ex.fix, where, 'bug needs fix');
    if (isProgram(ex.fix)) job(where + ' [fix compiles]', ex.fix, '', null, { compileOnly: true });
  } else problems.push(`${where}: unknown exercise type ${t}`);
}

function checkBlock(b, where) {
  const type = b.type || b.t;
  if (type === 'code') {
    need(b.code, where, 'code block is empty');
    if (b.run) {
      need(isProgram(b.code), where, 'run:true needs a complete program with public class Main');
      job(where + ' [run]', b.code, b.stdin, b.out != null ? b.out : null);
      if (b.out == null) warnings.push(`${where}: runnable block has no out`);
    }
  } else if (type === 'steps') {
    need(b.problem && (b.steps || []).length, where, 'steps needs problem and steps');
    need(isProgram(b.code), where, 'steps code must be a complete program');
    job(where + ' [steps]', b.code, b.stdin, b.out != null ? b.out : null);
  } else if (type === 'check') {
    need(Array.isArray(b.options) && Number.isInteger(b.answer) && b.answer >= 0 && b.answer < b.options.length, where, 'check answer out of range');
  } else if (type === 'memory') {
    const frames = b.frames && b.frames.length ? b.frames : [b];
    frames.forEach((f, k) => {
      const ids = new Set((f.objects || []).map(o => String(o.id)));
      const refs = [];
      (f.vars || []).forEach(v => { if (v.ref != null) refs.push(String(v.ref)); });
      (f.objects || []).forEach(o => (o.fields || []).forEach(fl => { if (fl.ref != null) refs.push(String(fl.ref)); }));
      refs.forEach(r => need(ids.has(r), `${where} frame ${k + 1}`, `reference to object ${r} that is not in this frame`));
    });
  } else if (!['h', 'p', 'analogy', 'lines', 'note', 'list', 'table'].includes(type)) {
    problems.push(`${where}: unknown block type ${type}`);
  }
}

function checkUnit(u, file) {
  const U = `${path.basename(file)}`;
  need(u.title && u.titleAr && u.intro && u.introAr, U, 'unit needs title, titleAr, intro, introAr');
  need((u.lessons || []).length, U, 'no lessons');
  const ids = new Set();
  (u.lessons || []).forEach((l, li) => {
    const L = `${U} L${li + 1} "${l.title}"`;
    need(!ids.has(l.id), L, `duplicate lesson id ${l.id}`); ids.add(l.id);
    need(l.title && l.titleAr && l.minutes, L, 'lesson needs title, titleAr, minutes');
    (l.body || []).forEach((b, bi) => checkBlock(b, `${L} block ${bi + 1} (${b.type})`));
    (l.practice || []).forEach((ex, ei) => checkExercise(ex, `${L} practice ${ei + 1} (${ex.t})`, false));
    need((l.practice || []).length >= 4, L, 'fewer than 4 practice exercises');
    need((l.mistakes || []).length >= 2, L, 'needs mistakes');
    need((l.remember || []).length >= 3, L, 'needs remember');
  });
  (u.quiz || []).forEach((ex, i) => checkExercise(ex, `${U} quiz ${i + 1} (${ex.t})`, true));
  need((u.quiz || []).length >= 8, U, 'quiz needs at least 8 questions');
  need(u.lab, U, 'missing lab');
  if (u.lab) checkExercise(Object.assign({ t: 'code' }, u.lab), `${U} lab`, false);
  need((u.cheats || []).length >= 5, U, 'needs cheats');
  need((u.glossary || []).length >= 6, U, 'needs glossary');
}

(async () => {
  for (const f of files) loadUnits(f).forEach(u => checkUnit(u, f));
  const pool = Math.max(2, Math.min(6, os.cpus().length));
  let idx = 0;
  async function worker() {
    while (idx < jobs.length) {
      const j = jobs[idx++];
      const r = await runJava(j); ran++;
      const report = j.opts.warnOnly ? warnings : problems;
      if (r.compileError) { report.push(`${j.where}: COMPILE ERROR\n    ${r.compileError.replace(/\n/g, '\n    ')}`); continue; }
      if (j.opts.compileOnly) continue;
      if (r.exit !== 0 && r.exit !== 1) report.push(`${j.where}: program did not finish normally (exit ${r.exit}) ${r.stderr.slice(0, 300)}`);
      if (j.expected != null && normalize(r.stdout) !== normalize(j.expected)) {
        problems.push(`${j.where}: OUTPUT MISMATCH\n  --- expected ---\n${normalize(j.expected)}\n  --- actual ---\n${normalize(r.stdout)}${r.stderr ? '\n  --- stderr ---\n' + r.stderr.slice(0, 400) : ''}`);
      }
    }
  }
  await Promise.all(Array.from({ length: pool }, worker));
  warnings.forEach(w => console.log('warn  ' + w));
  problems.forEach(p => console.log('FAIL  ' + p));
  console.log(`\n${ran} programs run, ${skipped} snippets skipped, ${warnings.length} warnings, ${problems.length} problems.`);
  process.exit(problems.length ? 1 : 0);
})();
