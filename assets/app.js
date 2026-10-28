/* JavaPath app: routing, progress, rendering of lessons and exercises. */
(function () {
  'use strict';

  var JP = window.JP, Runner = window.JPRunner;
  var app = document.getElementById('app');

  /* ---------- Levels ---------- */
  var COURSES = {
    cs101: {
      code: 'CS101', title: 'Computer Programming I', titleAr: 'البرمجة ١',
      level: 'Level 1', levelAr: 'المستوى الأول',
      desc: 'Programming concepts through Java: variables and constants, data types, selection, repetition, methods, arrays and files — learned hands-on.',
      descAr: 'مفاهيم البرمجة بلغة Java: المتغيرات وأنواع البيانات، الاختيار، التكرار، الدوال، المصفوفات والملفات — بالتطبيق العملي.'
    },
    cs102: {
      code: 'CS102', title: 'Computer Programming II', titleAr: 'البرمجة ٢',
      level: 'Level 2', levelAr: 'المستوى الثاني',
      desc: 'Intermediate object-oriented programming: 2D arrays, class design, inheritance, polymorphism, interfaces, the Java Collections Framework, generics and recursion.',
      descAr: 'البرمجة كائنية التوجه: المصفوفات الثنائية، تصميم الأصناف، الوراثة، تعدد الأشكال، الواجهات، المجموعات، الأنواع العامة والاستدعاء الذاتي.'
    }
  };
  var COURSE_IDS = ['cs101', 'cs102'];
  var PASS = 0.7;

  /* ---------- State ---------- */
  var KEY = 'javapath.v1';
  var S = load();
  function blank() { return { name: '', lessons: {}, ex: {}, quiz: {}, lab: {}, notes: {}, days: [], theme: '' }; }
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (s && typeof s === 'object') return Object.assign(blank(), s);
    } catch (e) { /* storage unavailable */ }
    return blank();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }
  function today() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function touch() { var t = today(); if (S.days.indexOf(t) < 0) { S.days.push(t); if (S.days.length > 400) S.days.shift(); } save(); }
  function streak() {
    var set = {}, n = 0, d = new Date();
    S.days.forEach(function (x) { set[x] = 1; });
    if (!set[today()]) d.setDate(d.getDate() - 1);
    for (;;) {
      var k = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
      if (!set[k]) break;
      n++; d.setDate(d.getDate() - 1);
    }
    return n;
  }

  /* ---------- Content lookups ---------- */
  function unitsOf(c) { return JP.units.filter(function (u) { return u.course === c; }).sort(function (a, b) { return a.n - b.n; }); }
  function unitById(id) { return JP.units.filter(function (u) { return u.id === id; })[0]; }
  function lessonById(id) {
    for (var i = 0; i < JP.units.length; i++) {
      var ls = JP.units[i].lessons || [];
      for (var j = 0; j < ls.length; j++) if (ls[j].id === id) return { unit: JP.units[i], lesson: ls[j] };
    }
    return null;
  }
  function unitDone(u) {
    var ls = u.lessons || [];
    var allL = ls.every(function (l) { return S.lessons[l.id]; });
    var q = S.quiz[u.id];
    return ls.length > 0 && allL && (!(u.quiz || []).length || (q && q.best >= PASS));
  }
  function unitProgress(u) {
    var total = (u.lessons || []).length + ((u.quiz || []).length ? 1 : 0) + (u.lab ? 1 : 0), got = 0;
    (u.lessons || []).forEach(function (l) { if (S.lessons[l.id]) got++; });
    if ((u.quiz || []).length && S.quiz[u.id] && S.quiz[u.id].best >= PASS) got++;
    if (u.lab && S.lab[u.id]) got++;
    return total ? got / total : 0;
  }
  function courseProgress(c) {
    var us = unitsOf(c); if (!us.length) return 0;
    return us.reduce(function (a, u) { return a + unitProgress(u); }, 0) / us.length;
  }
  function nextStep(c) {
    var us = unitsOf(c);
    for (var i = 0; i < us.length; i++) {
      var u = us[i], ls = u.lessons || [];
      for (var j = 0; j < ls.length; j++) if (!S.lessons[ls[j].id]) return { href: '#/l/' + ls[j].id, label: ls[j].title, unit: u };
      if ((u.quiz || []).length && !(S.quiz[u.id] && S.quiz[u.id].best >= PASS)) return { href: '#/quiz/' + u.id, label: 'Unit ' + u.n + ' quiz', unit: u };
    }
    return null;
  }

  /* ---------- Helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function ar(t, tag) { return t ? '<' + (tag || 'p') + ' class="ar" lang="ar" dir="rtl">' + t + '</' + (tag || 'p') + '>' : ''; }
  function h(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; }
  function pct(x) { return Math.round(x * 100) + '%'; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function copy(text, btn) {
    var done = function () { if (btn) { var o = btn.textContent; btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = o; }, 1200); } };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    else { fallbackCopy(text); done(); }
  }
  function fallbackCopy(text) { var t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) { /* ignore */ } t.remove(); }

  var KW = 'abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try var void volatile while true false null record yield';
  var KWS = {}; KW.split(' ').forEach(function (k) { KWS[k] = 1; });
  function highlight(code) {
    var re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(@[A-Za-z]+)|\b(\d+(?:\.\d+)?[dDfFlL]?)\b|\b([A-Za-z_]\w*)\b/g;
    var out = '', last = 0, m;
    while ((m = re.exec(code))) {
      out += esc(code.slice(last, m.index));
      var cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'a' : m[4] ? 'n' : KWS[m[5]] ? 'k' : /^[A-Z]/.test(m[5]) ? 't' : '';
      out += cls ? '<span class="tk-' + cls + '">' + esc(m[0]) + '</span>' : esc(m[0]);
      last = re.lastIndex;
    }
    return out + esc(code.slice(last));
  }
  function usesInput(code) { return /Scanner\s*\(\s*System\.in|System\.in\.read|BufferedReader/.test(code); }

  /* ---------- Code editor + runner widgets ---------- */
  function wireEditor(ta) {
    ta.addEventListener('keydown', function (e) {
      var s = ta.selectionStart, en = ta.selectionEnd, v = ta.value;
      if (e.key === 'Tab') {
        e.preventDefault();
        ta.value = v.slice(0, s) + '    ' + v.slice(en);
        ta.selectionStart = ta.selectionEnd = s + 4;
      } else if (e.key === 'Enter') {
        var lineStart = v.lastIndexOf('\n', s - 1) + 1;
        var indent = v.slice(lineStart, s).match(/^\s*/)[0];
        if (v[s - 1] === '{') indent += '    ';
        e.preventDefault();
        ta.value = v.slice(0, s) + '\n' + indent + v.slice(en);
        ta.selectionStart = ta.selectionEnd = s + 1 + indent.length;
      } else if (e.key === '}') {
        var ls = v.lastIndexOf('\n', s - 1) + 1;
        if (/^\s+$/.test(v.slice(ls, s)) && s - ls >= 4) {
          e.preventDefault();
          ta.value = v.slice(0, s - 4) + '}' + v.slice(en);
          ta.selectionStart = ta.selectionEnd = s - 3;
        }
      }
    });
  }

  function outputHtml(res) {
    if (res.networkError) {
      return '<div class="code-out err"><span class="lbl">Could not reach the online compiler</span>' +
        esc(res.networkError === 'timeout' ? 'The compiler took too long to answer. Try again.' : 'Check your internet connection and try again. You can always copy the code into NetBeans.') +
        '</div>';
    }
    if (res.compileError) {
      return '<div class="code-out err"><span class="lbl">Compilation error</span>' + esc(res.compileError) + '</div>';
    }
    var html = '<div class="code-out"><span class="lbl">Output</span>' + (res.stdout ? esc(res.stdout) : '<span style="opacity:.6">(no output)</span>') + '</div>';
    if (res.stderr || (res.status && res.status !== '0') || res.signal) {
      html += '<div class="code-out err"><span class="lbl">Runtime error' + (res.signal ? ' · ' + esc(res.signal) : '') + '</span>' + esc(res.stderr || 'Program exited with status ' + res.status) + '</div>';
    }
    return html;
  }

  // Read-only code block, with optional Run + Edit actions.
  function codeBlock(b) {
    var el = h('<div class="block"><div class="code"><pre>' + highlight(b.code) + '</pre></div></div>');
    var box = el.querySelector('.code');
    var bar = h('<div class="code-bar"></div>');
    var copyBtn = h('<button class="btn sm" type="button">Copy</button>');
    copyBtn.onclick = function () { copy(b.code, copyBtn); };
    if (b.run) {
      var runBtn = h('<button class="btn sm run" type="button">▶ Run</button>');
      var editBtn = h('<button class="btn sm" type="button">Edit in playground</button>');
      var stdin = null;
      if (b.stdin != null || usesInput(b.code)) {
        box.appendChild(h('<div class="stdin-lbl">Input (stdin) — one value per line</div>'));
        stdin = h('<textarea class="stdin-box" spellcheck="false" aria-label="Program input"></textarea>');
        stdin.value = b.stdin || '';
        box.appendChild(stdin);
      }
      var out = h('<div></div>');
      runBtn.onclick = function () {
        runBtn.disabled = true; runBtn.textContent = 'Running…';
        out.innerHTML = '<div class="code-out"><span class="lbl">Output</span>Compiling…</div>';
        Runner.run(b.code, stdin ? stdin.value : '').then(function (res) {
          out.innerHTML = outputHtml(res); runBtn.disabled = false; runBtn.textContent = '▶ Run';
        });
      };
      editBtn.onclick = function () {
        try { sessionStorage.setItem('jp.play', JSON.stringify({ code: b.code, stdin: stdin ? stdin.value : '' })); } catch (e) { /* ignore */ }
        location.hash = '#/play';
      };
      bar.appendChild(runBtn); bar.appendChild(editBtn);
      bar.appendChild(h('<span class="spacer"></span>')); bar.appendChild(copyBtn);
      box.appendChild(bar); box.appendChild(out);
    } else {
      bar.appendChild(h('<span class="spacer"></span>')); bar.appendChild(copyBtn);
      box.appendChild(bar);
    }
    if (b.out != null) el.appendChild(h('<div class="expected"><b>Expected output</b>' + esc(b.out) + '</div>'));
    return el;
  }

  // Editable editor with stdin and Run. Returns {el, getCode, getStdin, setOutput}.
  function editorWidget(code, stdin, opts) {
    opts = opts || {};
    var el = h('<div class="code editor"></div>');
    var ta = h('<textarea class="code-input" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Java code editor"></textarea>');
    ta.value = code || '';
    ta.style.minHeight = Math.max(200, Math.min(520, (ta.value.split('\n').length + 2) * 22)) + 'px';
    wireEditor(ta);
    el.appendChild(ta);
    var sin = null;
    if (opts.stdin !== false) {
      el.appendChild(h('<div class="stdin-lbl">Input (stdin) — one value per line</div>'));
      sin = h('<textarea class="stdin-box" spellcheck="false" aria-label="Program input"></textarea>');
      sin.value = stdin || '';
      el.appendChild(sin);
    }
    var bar = h('<div class="code-bar"></div>');
    el.appendChild(bar);
    var out = h('<div></div>');
    el.appendChild(out);
    return {
      el: el, bar: bar, ta: ta,
      getCode: function () { return ta.value; },
      getStdin: function () { return sin ? sin.value : ''; },
      setOutput: function (html) { out.innerHTML = html; }
    };
  }

  /* ---------- Exercises ---------- */
  var KIND = { mcq: 'Choose', output: 'Predict the output', fill: 'Fill in the blanks', order: 'Put in order', code: 'Write code' };

  function reveal(ex, answerHtml) {
    return '<div class="feedback bad"><b>Answer:</b>' + (answerHtml || '') + (ex.explain ? '<div>' + ex.explain + '</div>' : '') + ar(ex.explainAr) + '</div>';
  }

  // Render one exercise. key = unique id for progress; onResult(firstTryCorrect) is called once.
  function exercise(ex, key, onResult) {
    if (!ex.t && ex.type) ex = Object.assign({ t: ex.type }, ex);
    var solvedBefore = key && S.ex[key];
    var card = h('<div class="card ex' + (solvedBefore ? ' solved' : '') + '"><div class="ex-head"><span class="ex-kind">' + (KIND[ex.t] || ex.t) + '</span>' +
      (solvedBefore ? '<span class="pill ok">solved</span>' : '') + '</div><div class="ex-q">' + (ex.q || '') + '</div>' + ar(ex.qAr) + '</div>');
    var reported = false;
    function result(ok) {
      if (!reported) { reported = true; if (onResult) onResult(ok); }
      if (ok && key && !S.ex[key]) { S.ex[key] = 1; touch(); card.classList.add('solved'); }
    }
    var fb = h('<div></div>');
    var t = ex.t;

    if (t === 'mcq') {
      if (ex.code) card.appendChild(codeBlock({ code: ex.code }));
      var opts = h('<div class="opts"></div>');
      (ex.options || []).forEach(function (o, i) {
        var b = h('<button type="button" class="opt">' + o + '</button>');
        b.onclick = function () {
          var ok = i === ex.answer;
          opts.querySelectorAll('.opt').forEach(function (x, k) { x.disabled = true; if (k === ex.answer) x.classList.add('right'); });
          if (!ok) b.classList.add('wrong');
          fb.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><b>' + (ok ? 'Correct!' : 'Not quite.') + '</b> ' + (ex.explain || '') + ar(ex.explainAr) + '</div>';
          result(ok);
          var retry = h('<button type="button" class="btn sm ghost" style="margin-top:6px">Try again</button>');
          if (!ok) { retry.onclick = function () { opts.querySelectorAll('.opt').forEach(function (x) { x.disabled = false; x.classList.remove('right', 'wrong'); }); fb.innerHTML = ''; }; fb.appendChild(retry); }
        };
        opts.appendChild(b);
      });
      card.appendChild(opts);
    }

    else if (t === 'output') {
      card.appendChild(codeBlock({ code: ex.code }));
      var box = h('<textarea class="answer-box" spellcheck="false" placeholder="Type the exact output, one line per line…" aria-label="Your predicted output"></textarea>');
      var row = h('<div class="row" style="margin-top:8px"></div>');
      var chk = h('<button class="btn primary sm" type="button">Check</button>');
      var show = h('<button class="btn sm ghost" type="button">Show answer</button>');
      var tries = 0;
      chk.onclick = function () {
        tries++;
        var ok = Runner.normalize(box.value) === Runner.normalize(ex.answer);
        fb.innerHTML = ok ? '<div class="feedback ok"><b>Correct!</b> ' + (ex.explain || '') + ar(ex.explainAr) + '</div>'
          : '<div class="feedback bad"><b>Not quite.</b> Check spaces, line breaks and every value carefully' + (tries > 1 ? ', or show the answer.' : '.') + '</div>';
        result(ok);
      };
      show.onclick = function () { fb.innerHTML = reveal(ex, '<pre>' + esc(ex.answer) + '</pre>'); result(false); };
      row.appendChild(chk); row.appendChild(show);
      card.appendChild(box); card.appendChild(row);
    }

    else if (t === 'fill') {
      var parts = String(ex.code || '').split('___');
      var pre = '';
      parts.forEach(function (p, i) {
        pre += highlight(p);
        if (i < parts.length - 1) pre += '<input class="blank" data-i="' + i + '" spellcheck="false" autocapitalize="off" aria-label="Blank ' + (i + 1) + '">';
      });
      var code = h('<div class="block"><div class="code"><pre>' + pre + '</pre></div></div>');
      card.appendChild(code);
      code.querySelectorAll('.blank').forEach(function (inp) {
        var ans = [].concat((ex.answers || [])[+inp.dataset.i] || '');
        var w = Math.max.apply(null, ans.map(function (a) { return String(a).length; }));
        inp.style.width = Math.max(4, w + 2) + 'ch';
      });
      var row2 = h('<div class="row"></div>');
      var chk2 = h('<button class="btn primary sm" type="button">Check</button>');
      var show2 = h('<button class="btn sm ghost" type="button">Show answer</button>');
      chk2.onclick = function () {
        var all = true;
        code.querySelectorAll('.blank').forEach(function (inp) {
          var acc = [].concat((ex.answers || [])[+inp.dataset.i]).map(function (a) { return String(a).replace(/\s+/g, ' ').trim(); });
          var ok = acc.indexOf(inp.value.replace(/\s+/g, ' ').trim()) >= 0;
          inp.classList.toggle('right', ok); inp.classList.toggle('wrong', !ok);
          if (!ok) all = false;
        });
        fb.innerHTML = all ? '<div class="feedback ok"><b>Correct!</b> ' + (ex.explain || '') + ar(ex.explainAr) + '</div>' : '<div class="feedback bad"><b>Not quite.</b> The red blanks need another look.</div>';
        result(all);
      };
      show2.onclick = function () {
        code.querySelectorAll('.blank').forEach(function (inp) { inp.value = [].concat((ex.answers || [])[+inp.dataset.i])[0]; inp.classList.remove('wrong'); });
        fb.innerHTML = reveal(ex, ''); result(false);
      };
      row2.appendChild(chk2); row2.appendChild(show2);
      card.appendChild(row2);
    }

    else if (t === 'order') {
      var correct = ex.lines || [];
      var cur = shuffle(correct.map(function (l, i) { return i; }));
      if (cur.length > 1 && cur.every(function (v, i) { return v === i; })) cur.reverse();
      var list = h('<ol class="order-list"></ol>');
      var draw = function () {
        list.innerHTML = '';
        cur.forEach(function (idx, pos) {
          var li = h('<li><pre>' + highlight(correct[idx]) + '</pre></li>');
          var up = h('<button type="button" aria-label="Move up">↑</button>');
          var dn = h('<button type="button" aria-label="Move down">↓</button>');
          up.disabled = pos === 0; dn.disabled = pos === cur.length - 1;
          up.onclick = function () { var t2 = cur[pos - 1]; cur[pos - 1] = cur[pos]; cur[pos] = t2; draw(); };
          dn.onclick = function () { var t2 = cur[pos + 1]; cur[pos + 1] = cur[pos]; cur[pos] = t2; draw(); };
          li.appendChild(up); li.appendChild(dn); list.appendChild(li);
        });
      };
      draw();
      var row3 = h('<div class="row"></div>');
      var chk3 = h('<button class="btn primary sm" type="button">Check</button>');
      var show3 = h('<button class="btn sm ghost" type="button">Show answer</button>');
      chk3.onclick = function () {
        // Accept any arrangement whose text equals the correct one (handles duplicate lines like "}").
        var ok = cur.map(function (i) { return correct[i]; }).join('\n') === correct.join('\n');
        fb.innerHTML = ok ? '<div class="feedback ok"><b>Correct!</b> ' + (ex.explain || '') + ar(ex.explainAr) + '</div>' : '<div class="feedback bad"><b>Not quite.</b> Think about what must exist before each line runs.</div>';
        result(ok);
      };
      show3.onclick = function () { cur = correct.map(function (l, i) { return i; }); draw(); fb.innerHTML = reveal(ex, ''); result(false); };
      row3.appendChild(chk3); row3.appendChild(show3);
      card.appendChild(list); card.appendChild(row3);
    }

    else if (t === 'code') {
      var draftKey = key ? 'jp.draft.' + key : null;
      var draft = null;
      try { draft = draftKey && localStorage.getItem(draftKey); } catch (e) { /* ignore */ }
      var ed = editorWidget(draft || ex.starter || '', (ex.tests && ex.tests[0] && ex.tests[0].stdin) || '');
      var runB = h('<button class="btn sm run" type="button">▶ Run</button>');
      var testB = h('<button class="btn sm" type="button" style="background:#2b7a3b;color:#fff">✓ Check with tests</button>');
      var hintB = ex.hint ? h('<button class="btn sm" type="button">Hint</button>') : null;
      var solB = h('<button class="btn sm" type="button">Solution</button>');
      var resetB = h('<button class="btn sm" type="button">Reset</button>');
      var attempts = 0;
      ed.ta.addEventListener('input', function () { try { if (draftKey) localStorage.setItem(draftKey, ed.getCode()); } catch (e) { /* ignore */ } });
      runB.onclick = function () {
        runB.disabled = true; ed.setOutput('<div class="code-out"><span class="lbl">Output</span>Compiling…</div>');
        Runner.run(ed.getCode(), ed.getStdin()).then(function (res) { runB.disabled = false; ed.setOutput(outputHtml(res)); });
      };
      testB.onclick = function () {
        attempts++;
        testB.disabled = true; fb.innerHTML = '<div class="feedback">Running ' + (ex.tests || []).length + ' test(s)…</div>';
        var tests = ex.tests || [];
        Promise.all(tests.map(function (tc) { return Runner.run(ed.getCode(), tc.stdin || ''); })).then(function (rs) {
          testB.disabled = false;
          if (rs.some(function (r) { return r.networkError; })) { fb.innerHTML = outputHtml(rs.filter(function (r) { return r.networkError; })[0]).replace('code-out err', 'feedback bad'); return; }
          if (rs[0] && rs[0].compileError) { fb.innerHTML = ''; ed.setOutput(outputHtml(rs[0])); return; }
          var allOk = true, html = '<div class="tests">';
          rs.forEach(function (r, i) {
            var ok = !r.compileError && Runner.normalize(r.stdout) === Runner.normalize(tests[i].expected);
            if (!ok) allOk = false;
            html += '<div class="test ' + (ok ? 'ok' : 'bad') + '"><b>Test ' + (i + 1) + (ok ? ' passed' : ' failed') + '</b>' +
              (tests[i].stdin ? '<pre>Input:\n' + esc(tests[i].stdin) + '</pre>' : '') +
              (ok ? '' : '<pre>Expected:\n' + esc(tests[i].expected) + '\n\nYour output:\n' + esc(r.stdout || r.stderr || '(nothing)') + '</pre>') + '</div>';
          });
          html += '</div>';
          if (allOk) html += '<div class="feedback ok"><b>All tests passed!</b> ' + (ex.explain || '') + ar(ex.explainAr) + '</div>';
          fb.innerHTML = html;
          result(allOk);
          if (allOk && key && key.indexOf('lab:') === 0) { S.lab[key.slice(4)] = 1; save(); }
        });
      };
      if (hintB) hintB.onclick = function () { fb.innerHTML = '<div class="feedback"><b>Hint:</b> ' + ex.hint + '</div>'; };
      solB.onclick = function () {
        if (!attempts && !confirm('Try at least once before looking. Show the solution anyway?')) return;
        fb.innerHTML = '';
        var sol = codeBlock({ code: ex.solution || '' });
        fb.appendChild(h('<div class="feedback"><b>One possible solution</b>' + (ex.explain ? '<div>' + ex.explain + '</div>' : '') + '</div>'));
        fb.appendChild(sol);
      };
      resetB.onclick = function () { if (confirm('Reset your code to the starter?')) { ed.ta.value = ex.starter || ''; try { localStorage.removeItem(draftKey); } catch (e) { /* ignore */ } } };
      ed.bar.appendChild(runB); ed.bar.appendChild(testB);
      ed.bar.appendChild(h('<span class="spacer"></span>'));
      if (hintB) ed.bar.appendChild(hintB);
      ed.bar.appendChild(solB); ed.bar.appendChild(resetB);
      card.appendChild(h('<div style="margin-top:10px"></div>'));
      card.appendChild(ed.el);
    }

    card.appendChild(fb);
    return card;
  }

  /* ---------- Blocks ---------- */
  function block(b) {
    switch (b.type || b.t) {
      case 'h': return h('<h3>' + b.en + '</h3>');
      case 'p': return h('<div class="block"><p style="margin:0">' + b.en + '</p>' + ar(b.ar) + '</div>');
      case 'code': return codeBlock(b);
      case 'note': {
        var lbl = { tip: 'Tip', warn: 'Watch out', exam: 'Exam trap' }[b.kind] || 'Note';
        return h('<div class="block note ' + esc(b.kind || 'tip') + '"><span class="lbl">' + lbl + '</span>' + b.en + ar(b.ar) + '</div>');
      }
      case 'list': return h('<div class="block"><ul>' + (b.items || []).map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>' + ar(b.ar) + '</div>');
      case 'table': return h('<div class="block tbl-wrap"><table class="tbl"><thead><tr>' + (b.head || []).map(function (c) { return '<th>' + c + '</th>'; }).join('') +
        '</tr></thead><tbody>' + (b.rows || []).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
      default: return h('<div></div>');
    }
  }

  /* ---------- Views ---------- */
  function setTitle(t) { document.title = t ? t + ' · JavaPath' : 'JavaPath — Learn Java, CS101 & CS102'; }
  function view(html) { app.innerHTML = html; window.scrollTo(0, 0); return app; }
  function crumbs(items) { return '<div class="crumbs">' + items.map(function (i) { return i[1] ? '<a href="' + i[1] + '">' + esc(i[0]) + '</a>' : esc(i[0]); }).join(' / ') + '</div>'; }

  function greeting() {
    var hr = new Date().getHours();
    return (hr < 12 ? 'Good morning' : hr < 18 ? 'Good afternoon' : 'Good evening') + (S.name ? ', ' + esc(S.name) : '');
  }

  function viewHome() {
    setTitle('');
    var lessonsDone = Object.keys(S.lessons).length, exDone = Object.keys(S.ex).length;
    var nx = nextStep('cs101') || nextStep('cs102');
    var html = '<div class="hero"><div><h1>' + greeting() + '.</h1>' +
      '<p>Java from zero to object-oriented programming in two levels, <b>CS101</b> and <b>CS102</b>: lessons, exercises that check themselves, and a real Java compiler in your browser.</p>' +
      ar('مستويان: البرمجة ١ ثم البرمجة ٢. اقرأ الدرس، جرّب الكود، حل التمارين، ثم اختبر نفسك في نهاية كل وحدة.') +
      (nx ? '<div class="row" style="margin-top:12px"><a class="btn primary" href="' + nx.href + '">' + (lessonsDone ? 'Continue' : 'Start') + ': ' + esc(nx.label) + '</a><span class="muted small">' + esc(COURSES[nx.unit.course].code) + ' · Unit ' + nx.unit.n + '</span></div>' : '') +
      '</div><div class="hero-code">' + highlight('public class Main {\n    public static void main(String[] args) {\n        String name = "' + (S.name || 'Student').replace(/["\\]/g, '') + '";\n        System.out.println("Ready, " + name + "!");\n    }\n}') +
      '<div style="color:#9ece6a;margin-top:10px">&gt; Ready, ' + esc(S.name || 'Student') + '!</div></div></div>';
    html += '<div class="stats"><div class="stat"><b>' + lessonsDone + '</b><span>lessons done</span></div><div class="stat"><b>' + exDone + '</b><span>exercises solved</span></div><div class="stat"><b>' + streak() + '</b><span>day streak</span></div></div>';
    html += '<h2>Choose your level</h2><div class="grid g2">';
    COURSE_IDS.forEach(function (c) {
      var C = COURSES[c], us = unitsOf(c), p = courseProgress(c);
      html += '<a class="card level" href="#/c/' + c + '" style="text-decoration:none;color:inherit">' +
        '<div class="row"><span class="tag">' + C.code + '</span><span class="pill">' + C.level + '</span><span class="spacer"></span><span class="muted small">' + us.length + ' units</span></div>' +
        '<h3>' + C.title + '</h3>' + ar(C.titleAr + ' — ' + C.levelAr) +
        '<p class="muted small" style="margin:0 0 12px">' + C.desc + '</p>' +
        '<div class="bar"><i style="width:' + pct(p) + '"></i></div><div class="muted small" style="margin-top:4px">' + pct(p) + ' complete</div></a>';
    });
    html += '</div>';
    html += '<h2>Your toolbox</h2><div class="grid g3 tools">' +
      tool('#/play', 'Playground', 'Write and run any Java program.', 'محرر حر لتجربة أي كود') +
      tool('#/review', 'Review', 'Mixed questions from units you studied.', 'مراجعة سريعة من الوحدات التي درستها') +
      tool('#/glossary', 'Glossary', 'Every term with an Arabic explanation.', 'كل المصطلحات مع شرح عربي') +
      tool('#/cheats/cs101', 'Cheat sheets', 'One printable page per course.', 'ملخص قابل للطباعة') +
      tool('#/notes', 'My notes', 'What you wrote in each lesson.', 'ملاحظاتك في كل درس') +
      tool('#/help', 'Setup & help', 'Install Java and NetBeans, back up progress.', 'تثبيت Java وNetBeans وحفظ التقدم') +
      '</div>';
    view(html);
  }
  function tool(href, t, d, a) { return '<a href="' + href + '"><div class="card"><b>' + t + '</b><div class="muted small">' + d + '</div>' + ar(a) + '</div></a>'; }

  function viewCourse(c) {
    var C = COURSES[c]; if (!C) return notFound();
    setTitle(C.code);
    var us = unitsOf(c), nx = nextStep(c);
    var html = crumbs([['Home', '#/'], [C.code]]) +
      '<div class="row"><span class="pill accent">' + C.level + '</span></div>' +
      '<h1 style="margin-top:8px">' + C.code + ' — ' + C.title + '</h1>' + ar(C.titleAr + ' · ' + C.descAr) +
      '<p>' + C.desc + '</p>' +
      (c === 'cs102' && courseProgress('cs101') < 0.5 ? '<div class="note warn block"><span class="lbl">Prerequisite</span>CS102 builds on CS101. If methods and arrays are not solid yet, start with <a href="#/c/cs101">CS101</a>.' + ar('هذا المستوى يعتمد على البرمجة ١.') + '</div>' : '') +
      '<div class="row" style="margin:14px 0 6px">' + (nx ? '<a class="btn primary" href="' + nx.href + '">Next: ' + esc(nx.label) + '</a>' : (us.length ? '<a class="btn primary" href="#/cert/' + c + '">View certificate</a>' : '')) +
      '<a class="btn" href="#/cheats/' + c + '">Cheat sheet</a><span class="spacer"></span><span class="muted small">' + pct(courseProgress(c)) + ' complete</span></div>' +
      '<div class="bar" style="margin-bottom:22px"><i style="width:' + pct(courseProgress(c)) + '"></i></div>';
    html += '<div class="unit-list">';
    if (!us.length) html += '<div class="card empty">Units for this level are being prepared.</div>';
    us.forEach(function (u) {
      var p = unitProgress(u), done = unitDone(u);
      html += '<a class="card unit-row' + (done ? ' done' : '') + '" href="#/u/' + u.id + '"><div class="unit-num">' + (done ? '✓' : u.n) + '</div>' +
        '<div><h3>' + esc(u.title) + '</h3>' + ar(u.titleAr) + '<div class="muted small">' + (u.lessons || []).length + ' lessons · quiz · lab</div></div>' +
        '<div style="width:70px;text-align:right"><div class="muted small">' + pct(p) + '</div><div class="bar"><i style="width:' + pct(p) + '"></i></div></div></a>';
    });
    html += '</div>';
    view(html);
  }

  function viewUnit(id) {
    var u = unitById(id); if (!u) return notFound();
    var C = COURSES[u.course];
    setTitle(C.code + ' Unit ' + u.n);
    var q = S.quiz[u.id];
    var html = crumbs([['Home', '#/'], [C.code, '#/c/' + u.course], ['Unit ' + u.n]]) +
      '<div class="narrow"><div class="row"><span class="pill accent">' + C.code + ' · Unit ' + u.n + '</span></div>' +
      '<h1 style="margin-top:8px">' + esc(u.title) + '</h1>' + ar(u.titleAr, 'p') + '<p>' + (u.intro || '') + '</p>' + ar(u.introAr) +
      '<h2>Lessons</h2><div class="step-list">';
    (u.lessons || []).forEach(function (l) {
      html += '<a class="step' + (S.lessons[l.id] ? ' done' : '') + '" href="#/l/' + l.id + '"><span class="check">✓</span><div><b>' + l.n + '. ' + esc(l.title) + '</b>' +
        '<div class="muted small">' + esc(l.titleAr || '') + (l.minutes ? ' · ' + l.minutes + ' min' : '') + ' · ' + (l.practice || []).length + ' exercises</div></div></a>';
    });
    if ((u.quiz || []).length) html += '<a class="step' + (q && q.best >= PASS ? ' done' : '') + '" href="#/quiz/' + u.id + '"><span class="check">✓</span><div><b>Unit quiz</b><div class="muted small">' + u.quiz.length + ' questions · pass with ' + pct(PASS) + (q ? ' · best ' + pct(q.best) : '') + '</div></div></a>';
    if (u.lab) html += '<a class="step' + (S.lab[u.id] ? ' done' : '') + '" href="#/lab/' + u.id + '"><span class="check">✓</span><div><b>Lab' + (u.lab.title ? ': ' + esc(u.lab.title) : ' — mini project') + '</b><div class="muted small">Write a full program, checked by tests</div></div></a>';
    html += '</div>';
    var us = unitsOf(u.course), i = us.indexOf(u);
    html += '<div class="lesson-foot">' + (i > 0 ? '<a class="btn" href="#/u/' + us[i - 1].id + '">← Unit ' + us[i - 1].n + '</a>' : '<span></span>') +
      (i < us.length - 1 ? '<a class="btn" href="#/u/' + us[i + 1].id + '">Unit ' + us[i + 1].n + ' →</a>' : '') + '</div></div>';
    view(html);
  }

  function viewLesson(id) {
    var f = lessonById(id); if (!f) return notFound();
    var u = f.unit, l = f.lesson, C = COURSES[u.course];
    setTitle(l.title);
    var root = view(crumbs([['Home', '#/'], [C.code, '#/c/' + u.course], ['Unit ' + u.n, '#/u/' + u.id], ['Lesson ' + l.n]]) +
      '<article class="narrow lesson"><div class="lesson-head"><span class="pill accent">' + C.code + ' · Unit ' + u.n + ' · Lesson ' + l.n + '</span>' +
      '<h1 style="margin-top:8px">' + esc(l.title) + '</h1>' + ar(l.titleAr) + '</div><div id="body"></div>' +
      '<h2>Practice</h2><p class="muted small">Solve these to lock in the idea. Code exercises run on a real Java compiler.</p>' + ar('حل التمارين لتثبيت الفكرة.') +
      '<div id="practice"></div><h2>My notes</h2><textarea class="notes-box" id="notes" placeholder="Write what you want to remember… / اكتب ملاحظاتك هنا"></textarea>' +
      '<div class="lesson-foot" id="foot"></div></article>');
    var body = root.querySelector('#body');
    (l.body || []).forEach(function (b) { body.appendChild(block(b)); });
    var pr = root.querySelector('#practice');
    (l.practice || []).forEach(function (ex, i) { pr.appendChild(exercise(ex, l.id + '-p' + i)); });
    if (!(l.practice || []).length) pr.innerHTML = '<p class="muted">No exercises for this lesson.</p>';
    var notes = root.querySelector('#notes');
    notes.value = S.notes[l.id] || '';
    notes.addEventListener('input', function () { if (notes.value.trim()) S.notes[l.id] = notes.value; else delete S.notes[l.id]; save(); });

    var all = [];
    unitsOf(u.course).forEach(function (uu) { (uu.lessons || []).forEach(function (ll) { all.push({ u: uu, l: ll }); }); });
    var idx = -1; all.forEach(function (x, k) { if (x.l.id === l.id) idx = k; });
    var prev = all[idx - 1], next = all[idx + 1];
    var lastInUnit = !next || next.u.id !== u.id;
    var foot = root.querySelector('#foot');
    foot.appendChild(h(prev ? '<a class="btn" href="#/l/' + prev.l.id + '">← ' + esc(prev.l.title) + '</a>' : '<span></span>'));
    var doneBtn = h('<button class="btn primary" type="button"></button>');
    var paint = function () { doneBtn.textContent = S.lessons[l.id] ? '✓ Completed — continue' : 'Mark complete & continue'; };
    paint();
    doneBtn.onclick = function () {
      S.lessons[l.id] = 1; touch(); paint();
      location.hash = lastInUnit ? ((u.quiz || []).length ? '#/quiz/' + u.id : '#/u/' + u.id) : '#/l/' + next.l.id;
    };
    foot.appendChild(doneBtn);
  }

  function viewQuiz(id) {
    var u = unitById(id); if (!u) return notFound();
    var C = COURSES[u.course], qs = u.quiz || [];
    setTitle('Quiz · Unit ' + u.n);
    var root = view(crumbs([['Home', '#/'], [C.code, '#/c/' + u.course], ['Unit ' + u.n, '#/u/' + u.id], ['Quiz']]) +
      '<div class="narrow"><h1>Unit ' + u.n + ' quiz</h1>' + ar('اختبار قصير: أجب عن كل الأسئلة، والنجاح من ' + pct(PASS)) +
      '<p class="muted">' + qs.length + ' questions on <b>' + esc(u.title) + '</b>. Your score counts first attempts only. Score at least ' + pct(PASS) + ' to complete the unit.</p>' +
      '<div class="card" id="scorebox" style="margin-bottom:16px"><div class="row"><span class="score" id="score">0 / ' + qs.length + '</span><span class="muted" id="answered">0 answered</span><span class="spacer"></span><button class="btn sm" id="restart" type="button">Restart</button></div></div>' +
      '<div id="qs"></div><div id="end"></div></div>');
    var correct = 0, answered = 0;
    var box = root.querySelector('#qs');
    qs.forEach(function (ex, i) {
      var card = exercise(ex, null, function (ok) {
        answered++; if (ok) correct++;
        root.querySelector('#score').textContent = correct + ' / ' + qs.length;
        root.querySelector('#answered').textContent = answered + ' answered';
        if (answered === qs.length) finish();
      });
      card.querySelector('.ex-kind').textContent = 'Q' + (i + 1) + ' · ' + (KIND[ex.t] || ex.t);
      box.appendChild(card);
    });
    root.querySelector('#restart').onclick = function () { viewQuiz(id); };
    function finish() {
      var r = correct / qs.length, prev = S.quiz[u.id] || { best: 0, tries: 0 };
      S.quiz[u.id] = { best: Math.max(prev.best, r), tries: prev.tries + 1 }; touch();
      var pass = r >= PASS;
      var us = unitsOf(u.course), i = us.indexOf(u), nextU = us[i + 1];
      root.querySelector('#end').innerHTML = '<div class="card" style="margin-top:16px;text-align:center"><div class="score">' + pct(r) + '</div>' +
        '<p>' + (pass ? 'Unit passed. Well done!' : 'Not yet — review the lessons and try again.') + '</p>' + ar(pass ? 'أحسنت! أكملت الوحدة.' : 'راجع الدروس وحاول مرة أخرى.') +
        '<div class="row" style="justify-content:center">' + (u.lab && !S.lab[u.id] ? '<a class="btn primary" href="#/lab/' + u.id + '">Do the lab</a>' : '') +
        (pass && nextU ? '<a class="btn' + (u.lab && !S.lab[u.id] ? '' : ' primary') + '" href="#/u/' + nextU.id + '">Unit ' + nextU.n + ' →</a>' : '') +
        (pass && !nextU ? '<a class="btn primary" href="#/cert/' + u.course + '">Certificate</a>' : '') +
        '<a class="btn" href="#/u/' + u.id + '">Back to unit</a></div></div>';
      root.querySelector('#scorebox').scrollIntoView({ behavior: 'smooth' });
    }
  }

  function viewLab(id) {
    var u = unitById(id); if (!u || !u.lab) return notFound();
    var C = COURSES[u.course];
    setTitle('Lab · Unit ' + u.n);
    var root = view(crumbs([['Home', '#/'], [C.code, '#/c/' + u.course], ['Unit ' + u.n, '#/u/' + u.id], ['Lab']]) +
      '<div class="narrow"><span class="pill accent">' + C.code + ' · Unit ' + u.n + ' lab</span><h1 style="margin-top:8px">' + esc(u.lab.title || 'Lab: ' + u.title) + '</h1>' + ar(u.lab.titleAr) +
      '<p class="muted small">Write the program, press <b>Run</b> to try it with your own input, then <b>Check with tests</b>. Your code is saved in this browser.</p><div id="lab"></div>' +
      '<div class="lesson-foot"><a class="btn" href="#/u/' + u.id + '">← Back to unit</a></div></div>');
    var lab = Object.assign({ t: 'code' }, u.lab);
    root.querySelector('#lab').appendChild(exercise(lab, 'lab:' + u.id));
  }

  function viewPlay() {
    setTitle('Playground');
    var saved = null;
    try { saved = JSON.parse(sessionStorage.getItem('jp.play') || 'null'); sessionStorage.removeItem('jp.play'); } catch (e) { /* ignore */ }
    var stored = '';
    try { stored = localStorage.getItem('jp.playground') || ''; } catch (e) { /* ignore */ }
    var start = saved ? saved.code : stored || 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        String name = in.nextLine();\n        System.out.println("Hello, " + name + "!");\n    }\n}';
    var root = view(crumbs([['Home', '#/'], ['Playground']]) + '<h1>Playground</h1>' + ar('اكتب أي برنامج Java وشغّله. اسم الصنف الرئيسي Main.') +
      '<p class="muted small">Runs on a real Java compiler (OpenJDK, via the free Wandbox service — needs internet). Put input for <code>Scanner</code> in the box under the code.</p><div id="ed"></div>');
    var ed = editorWidget(start, saved ? saved.stdin : 'Sara');
    ed.ta.style.minHeight = '380px';
    var runB = h('<button class="btn sm run" type="button">▶ Run</button>');
    var copyB = h('<button class="btn sm" type="button">Copy</button>');
    var clearB = h('<button class="btn sm" type="button">New</button>');
    runB.onclick = function () {
      runB.disabled = true; ed.setOutput('<div class="code-out"><span class="lbl">Output</span>Compiling…</div>');
      Runner.run(ed.getCode(), ed.getStdin()).then(function (res) { runB.disabled = false; ed.setOutput(outputHtml(res)); });
    };
    ed.ta.addEventListener('keydown', function (e) { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runB.click(); } });
    ed.ta.addEventListener('input', function () { try { localStorage.setItem('jp.playground', ed.getCode()); } catch (e) { /* ignore */ } });
    copyB.onclick = function () { copy(ed.getCode(), copyB); };
    clearB.onclick = function () { ed.ta.value = 'public class Main {\n    public static void main(String[] args) {\n        \n    }\n}'; };
    ed.bar.appendChild(runB); ed.bar.appendChild(h('<span class="small" style="color:#9c94a8">Ctrl+Enter</span>'));
    ed.bar.appendChild(h('<span class="spacer"></span>')); ed.bar.appendChild(copyB); ed.bar.appendChild(clearB);
    root.querySelector('#ed').appendChild(ed.el);
  }

  function viewReview() {
    setTitle('Review');
    var pool = [];
    JP.units.forEach(function (u) {
      var started = (u.lessons || []).some(function (l) { return S.lessons[l.id]; });
      if (!started) return;
      (u.quiz || []).forEach(function (q) { pool.push({ u: u, q: q }); });
      (u.lessons || []).forEach(function (l) { if (S.lessons[l.id]) (l.practice || []).forEach(function (q) { if (q.t === 'mcq' || q.t === 'output') pool.push({ u: u, q: q }); }); });
    });
    var root = view(crumbs([['Home', '#/'], ['Review']]) + '<div class="narrow"><h1>Review</h1>' + ar('أسئلة عشوائية من الوحدات التي بدأتها.') + '<div id="rv"></div></div>');
    var box = root.querySelector('#rv');
    if (!pool.length) { box.innerHTML = '<div class="card empty">Complete at least one lesson, then come back for mixed review questions.<br><a class="btn primary" style="margin-top:10px" href="#/c/cs101">Go to CS101</a></div>'; return; }
    var pick = shuffle(pool).slice(0, 10);
    var intro = h('<div class="row" style="margin-bottom:12px"><span class="muted">' + Math.min(10, pool.length) + ' random questions from ' + pool.length + ' in the units you have started.</span><button class="btn sm" type="button">New set</button></div>');
    intro.querySelector('button').onclick = viewReview;
    box.appendChild(intro);
    pick.forEach(function (x) {
      var card = exercise(x.q, null);
      card.querySelector('.ex-head').appendChild(h('<span class="pill">' + COURSES[x.u.course].code + ' · U' + x.u.n + '</span>'));
      box.appendChild(card);
    });
  }

  function viewGlossary() {
    setTitle('Glossary');
    var items = [];
    COURSE_IDS.forEach(function (c) { unitsOf(c).forEach(function (u) { (u.glossary || []).forEach(function (g) { items.push({ g: g, u: u }); }); }); });
    items.sort(function (a, b) { return a.g.term.toLowerCase() < b.g.term.toLowerCase() ? -1 : 1; });
    var root = view(crumbs([['Home', '#/'], ['Glossary']]) + '<div class="narrow"><h1>Glossary</h1>' + ar('المصطلحات بالإنجليزية مع شرح عربي قصير.') +
      '<input class="search" id="q" placeholder="Search terms… / ابحث" aria-label="Search glossary"><div id="list"></div></div>');
    var list = root.querySelector('#list'), q = root.querySelector('#q');
    function draw() {
      var s = q.value.trim().toLowerCase();
      var f = items.filter(function (x) { return !s || (x.g.term + ' ' + x.g.ar + ' ' + x.g.def).toLowerCase().indexOf(s) >= 0; });
      list.innerHTML = f.length ? f.map(function (x) {
        return '<div class="gl-item"><div class="row"><b>' + esc(x.g.term) + '</b><span class="pill">' + COURSES[x.u.course].code + ' · U' + x.u.n + '</span></div>' +
          '<div>' + x.g.def + '</div>' + ar(x.g.ar) + '</div>';
      }).join('') : '<div class="empty">No terms found.</div>';
    }
    q.oninput = draw; draw();
  }

  function viewCheats(c) {
    var C = COURSES[c]; if (!C) return notFound();
    setTitle(C.code + ' cheat sheet');
    var root = view(crumbs([['Home', '#/'], [C.code, '#/c/' + c], ['Cheat sheet']]) +
      '<div class="row no-print">' + COURSE_IDS.map(function (x) { return '<a class="btn' + (x === c ? ' primary' : '') + '" href="#/cheats/' + x + '">' + COURSES[x].code + '</a>'; }).join('') +
      '<span class="spacer"></span><button class="btn" type="button" onclick="window.print()">Print</button></div>' +
      '<h1 style="margin-top:14px">' + C.code + ' cheat sheet</h1><div id="cs"></div>');
    var box = root.querySelector('#cs');
    unitsOf(c).forEach(function (u) {
      if (!(u.cheats || []).length) return;
      var sec = h('<section><h2>Unit ' + u.n + ' · ' + esc(u.title) + '</h2><div class="cheat-cols"></div></section>');
      u.cheats.forEach(function (ch) {
        var d = h('<div class="cheat"></div>');
        d.appendChild(h('<div class="code"><pre>' + highlight(ch.code) + '</pre></div>'));
        d.appendChild(h('<div class="small muted" style="margin-top:4px">' + ch.note + '</div>'));
        sec.querySelector('.cheat-cols').appendChild(d);
      });
      box.appendChild(sec);
    });
    if (!box.children.length) box.innerHTML = '<div class="card empty">No cheat sheet entries yet.</div>';
  }

  function viewNotes() {
    setTitle('My notes');
    var html = crumbs([['Home', '#/'], ['My notes']]) + '<div class="narrow"><h1>My notes</h1>';
    var any = false;
    COURSE_IDS.forEach(function (c) {
      unitsOf(c).forEach(function (u) {
        (u.lessons || []).forEach(function (l) {
          if (!S.notes[l.id]) return;
          any = true;
          html += '<div class="card" style="margin-bottom:12px"><a href="#/l/' + l.id + '"><b>' + COURSES[c].code + ' · U' + u.n + ' · ' + esc(l.title) + '</b></a><p style="white-space:pre-wrap;margin:6px 0 0">' + esc(S.notes[l.id]) + '</p></div>';
        });
      });
    });
    if (!any) html += '<div class="card empty">You have not written any notes yet. Every lesson has a notes box at the bottom.</div>';
    view(html + '</div>');
  }

  function viewCert(c) {
    var C = COURSES[c]; if (!C) return notFound();
    setTitle(C.code + ' certificate');
    var us = unitsOf(c), done = us.length && us.every(unitDone);
    if (!done) {
      var left = us.filter(function (u) { return !unitDone(u); });
      view(crumbs([['Home', '#/'], [C.code, '#/c/' + c], ['Certificate']]) + '<div class="narrow card empty"><h2>Certificate locked</h2><p>Finish every lesson and pass every unit quiz in ' + C.code + '.</p>' +
        ar('أكمل كل الدروس واجتز اختبارات الوحدات لفتح الشهادة.') + '<p class="muted">Remaining: ' + left.map(function (u) { return 'Unit ' + u.n; }).join(', ') + '</p><a class="btn primary" href="#/c/' + c + '">Back to ' + C.code + '</a></div>');
      return;
    }
    var root = view('<div class="narrow"><div class="row no-print" style="margin-bottom:12px"><label class="small">Name on certificate <input id="cn" class="search" style="margin:0;width:auto"></label><span class="spacer"></span><button class="btn primary" type="button" onclick="window.print()">Print / save PDF</button></div>' +
      '<div class="cert"><div class="muted">JavaPath certifies that</div><div class="name" id="nm"></div><div>has completed all units of</div><h2 style="margin:.4em 0">' + C.code + ' — ' + C.title + '</h2>' +
      '<div class="muted">' + us.length + ' units · ' + us.reduce(function (a, u) { return a + (u.lessons || []).length; }, 0) + ' lessons · on ' + today() + '</div>' +
      '<p class="ar" style="text-align:center;margin-top:16px">مبروك! أكملت ' + C.titleAr + '</p></div></div>');
    var cn = root.querySelector('#cn'), nm = root.querySelector('#nm');
    cn.value = S.name || ''; nm.textContent = S.name || 'Student';
    cn.oninput = function () { nm.textContent = cn.value || 'Student'; };
  }

  function viewHelp() {
    setTitle('Setup & help');
    var root = view(crumbs([['Home', '#/'], ['Setup & help']]) + '<div class="narrow"><h1>Setup & help</h1>' +
      '<h2>Run Java on your own computer</h2><ol><li>Install a JDK (Java Development Kit), for example <a href="https://adoptium.net" target="_blank" rel="noopener">Eclipse Temurin</a> — choose the latest LTS version.</li>' +
      '<li>Install <a href="https://netbeans.apache.org" target="_blank" rel="noopener">Apache NetBeans</a>, the IDE used in CS101 and CS102.</li>' +
      '<li>In NetBeans: <b>File → New Project → Java with Ant → Java Application</b>. Paste the code inside the generated class, or name your class to match the file.</li>' +
      '<li>Press <b>F6</b> (Run Project). Input for <code>Scanner</code> is typed in the Output window.</li></ol>' +
      ar('ثبّت JDK ثم NetBeans. أنشئ مشروعًا جديدًا والصق الكود، ثم اضغط F6 للتشغيل.') +
      '<h2>About the online compiler</h2><p>The <b>Run</b> buttons send your code to <a href="https://wandbox.org" target="_blank" rel="noopener">Wandbox</a>, a free public compiler service, and show the result. Your code is not stored by JavaPath. It needs an internet connection; if it is down, copy the code into NetBeans.</p>' +
      '<h2>Your progress</h2><p>Progress, notes and drafts are saved in this browser only. Use backup to move them to another device.</p>' +
      '<div class="row"><button class="btn" id="exp" type="button">Download backup</button><label class="btn">Restore backup<input type="file" id="imp" accept="application/json" hidden></label>' +
      '<button class="btn" id="nm" type="button">Change name</button><button class="btn" id="rst" type="button" style="color:var(--bad)">Reset all progress</button></div>' +
      ar('التقدم محفوظ في هذا المتصفح فقط. نزّل نسخة احتياطية لنقله لجهاز آخر.') + '</div>');
    root.querySelector('#exp').onclick = function () {
      var blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'javapath-progress-' + today() + '.json'; a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    };
    root.querySelector('#imp').onchange = function (e) {
      var f = e.target.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try { var d = JSON.parse(r.result); if (!d || typeof d !== 'object' || !d.lessons) throw 0; S = Object.assign(blank(), d); save(); alert('Progress restored.'); location.hash = '#/'; }
        catch (err) { alert('That file is not a JavaPath backup.'); }
      };
      r.readAsText(f);
    };
    root.querySelector('#nm').onclick = onboarding;
    root.querySelector('#rst').onclick = function () { if (confirm('Delete all progress, notes and drafts in this browser?')) { var n = S.name; S = blank(); S.name = n; save(); location.hash = '#/'; } };
  }

  function notFound() { setTitle('Not found'); view('<div class="card empty"><h2>Page not found</h2><a class="btn primary" href="#/">Home</a></div>'); }

  /* ---------- Onboarding, theme, router ---------- */
  function onboarding() {
    var bg = h('<div class="modal-bg"><form class="modal"><h2 style="margin-top:0">Welcome to JavaPath</h2>' +
      '<p class="muted">Two levels of Java — CS101 then CS102 — with lessons, self-checking exercises and a real compiler.</p>' +
      ar('أهلًا بك! اكتب اسمك ليظهر في الصفحة الرئيسية وعلى الشهادة.') +
      '<label for="nm"><b>Your first name</b></label><input id="nm" maxlength="40" autocomplete="given-name" placeholder="e.g. Sara">' +
      '<div class="row"><button class="btn primary" type="submit">Start learning</button><button class="btn ghost" type="button" id="skip">Skip</button></div></form></div>');
    var inp = bg.querySelector('#nm'); inp.value = S.name || '';
    var close = function () { S.onboarded = 1; save(); bg.remove(); route(); };
    bg.querySelector('form').onsubmit = function (e) { e.preventDefault(); S.name = inp.value.trim(); close(); };
    bg.querySelector('#skip').onclick = close;
    document.body.appendChild(bg);
    setTimeout(function () { inp.focus(); }, 30);
  }

  function applyTheme() {
    if (S.theme) document.documentElement.setAttribute('data-theme', S.theme);
    else document.documentElement.removeAttribute('data-theme');
  }
  document.getElementById('theme').onclick = function () {
    var dark = S.theme ? S.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    S.theme = dark ? 'light' : 'dark'; save(); applyTheme();
  };
  document.getElementById('menu').onclick = function () { document.getElementById('nav').classList.toggle('open'); };

  function route() {
    var p = (location.hash.replace(/^#\/?/, '') || '').split('/');
    document.getElementById('nav').classList.remove('open');
    document.querySelectorAll('#nav a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#/' + p.slice(0, 2).join('/') || a.getAttribute('href') === '#/' + p[0]); });
    switch (p[0]) {
      case '': return viewHome();
      case 'c': return viewCourse(p[1]);
      case 'u': return viewUnit(p[1]);
      case 'l': return viewLesson(p[1]);
      case 'quiz': return viewQuiz(p[1]);
      case 'lab': return viewLab(p[1]);
      case 'play': return viewPlay();
      case 'review': return viewReview();
      case 'glossary': return viewGlossary();
      case 'cheats': return viewCheats(p[1] || 'cs101');
      case 'notes': return viewNotes();
      case 'cert': return viewCert(p[1]);
      case 'help': return viewHelp();
      default: return notFound();
    }
  }

  applyTheme();
  window.addEventListener('hashchange', route);
  route();
  if (!S.onboarded) onboarding();
  if (JP.errors.length && window.console) console.warn('JavaPath content errors:', JP.errors);
})();
