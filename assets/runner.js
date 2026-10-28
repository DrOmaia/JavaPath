/* JavaPath runner: compiles and runs Java on the free Wandbox service (https://wandbox.org). */
(function () {
  'use strict';

  var API = 'https://wandbox.org/api/';
  var FALLBACK_COMPILER = 'openjdk-jdk-22+36';
  var compilerPromise = null;

  function getCompiler() {
    if (compilerPromise) return compilerPromise;
    compilerPromise = fetch(API + 'list.json')
      .then(function (r) { return r.json(); })
      .then(function (list) {
        var java = list.filter(function (c) { return c.language === 'Java'; });
        return java.length ? java[0].name : FALLBACK_COMPILER;
      })
      .catch(function () { return FALLBACK_COMPILER; });
    return compilerPromise;
  }

  // Split source into header (imports) and top-level type blocks, skipping strings and comments.
  function splitTopLevel(src) {
    var chunks = [], depth = 0, start = 0, i = 0, n = src.length, opened = false;
    while (i < n) {
      var c = src[i], d = src[i + 1];
      if (c === '/' && d === '/') { i = src.indexOf('\n', i); if (i < 0) i = n; continue; }
      if (c === '/' && d === '*') { i = src.indexOf('*/', i + 2); i = i < 0 ? n : i + 2; continue; }
      if (c === '"' && src.substr(i, 3) === '"""') { i = src.indexOf('"""', i + 3); i = i < 0 ? n : i + 3; continue; }
      if (c === '"' || c === "'") {
        i++;
        while (i < n && src[i] !== c) { if (src[i] === '\\') i++; i++; }
        i++; continue;
      }
      if (c === '{') { depth++; opened = true; }
      else if (c === '}') {
        depth--;
        if (depth === 0 && opened) { chunks.push(src.slice(start, i + 1)); start = i + 1; opened = false; }
      }
      i++;
    }
    var tail = src.slice(start);
    return { chunks: chunks, tail: tail };
  }

  var DECL = /\bpublic\s+((?:abstract\s+|final\s+|sealed\s+)*(?:class|interface|enum|record)\b)/;
  var MAIN = /\bstatic\s+void\s+main\s*\(/;

  // Make any single-file program runnable: no public top-level types, and the class with main first.
  function prepare(src) {
    var parts = splitTopLevel(src);
    if (!parts.chunks.length) return src;
    var chunks = parts.chunks.slice();
    // Pull the import/package header off the first chunk so it stays on top.
    var header = '';
    var m = chunks[0].match(/^(\s*(?:(?:\/\/[^\n]*|\/\*[\s\S]*?\*\/|(?:package|import)\s[^;]*;)\s*)*)/);
    if (m && m[1]) { header = m[1]; chunks[0] = chunks[0].slice(header.length); }
    chunks = chunks.map(function (c) { return c.replace(DECL, '$1'); });
    var mainIdx = -1;
    chunks.forEach(function (c, k) { if (mainIdx < 0 && MAIN.test(c)) mainIdx = k; });
    if (mainIdx > 0) {
      var mainChunk = chunks.splice(mainIdx, 1)[0].replace(/^\s*\n/, '');
      chunks.unshift(mainChunk.replace(/^\s+/, '') + '\n');
    }
    return header + chunks.join('') + parts.tail;
  }

  function run(code, stdin) {
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 45000) : null;
    return getCompiler().then(function (compiler) {
      return fetch(API + 'compile.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ compiler: compiler, code: prepare(code), stdin: stdin || '', save: false }),
        signal: ctrl ? ctrl.signal : undefined
      });
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (res) {
      if (timer) clearTimeout(timer);
      var compileError = (res.compiler_error || '').trim();
      var status = res.status == null ? '' : String(res.status);
      return {
        ok: !compileError && status === '0' && !res.signal,
        compileError: compileError,
        stdout: res.program_output || '',
        stderr: res.program_error || '',
        status: status,
        signal: res.signal || ''
      };
    }).catch(function (e) {
      if (timer) clearTimeout(timer);
      return { ok: false, networkError: e && e.name === 'AbortError' ? 'timeout' : String(e && e.message || e) };
    });
  }

  // Compare program output with an expected answer: ignore trailing spaces and blank lines at the ends.
  function normalize(s) {
    return String(s || '').replace(/\r\n/g, '\n').split('\n')
      .map(function (l) { return l.replace(/\s+$/, ''); })
      .join('\n').replace(/^\n+|\n+$/g, '');
  }

  window.JPRunner = { run: run, prepare: prepare, normalize: normalize };
})();
