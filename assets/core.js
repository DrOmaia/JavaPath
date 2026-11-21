/* JavaPath core: global registry + J`` helper. Loaded before every content file. */
(function () {
  'use strict';

  // String.raw with dedent + trim, so code blocks can be indented naturally in content files.
  function J(strings) {
    var subs = Array.prototype.slice.call(arguments, 1);
    var raw = String.raw.apply(null, [strings].concat(subs));
    var lines = raw.replace(/\r\n/g, '\n').split('\n');
    while (lines.length && !lines[0].trim()) lines.shift();
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
    var min = Infinity;
    lines.forEach(function (l) {
      if (l.trim()) min = Math.min(min, l.match(/^[ \t]*/)[0].length);
    });
    if (!isFinite(min)) min = 0;
    return lines.map(function (l) { return l.slice(min); }).join('\n');
  }

  var JP = window.JP = window.JP || {};
  JP.units = JP.units || [];
  JP.errors = JP.errors || [];

  JP.unit = function (u) {
    try {
      if (!u || !u.course || !u.n) throw new Error('unit needs course and n');
      // n = position shown to the student ("Unit 4") and used for ordering.
      // key = permanent storage id (file name, progress). Defaults to n. Keeping key fixed lets
      // units and lessons be re-ordered without losing anyone's saved progress.
      u.id = u.course + '-u' + (u.key || u.n);
      (u.lessons || []).forEach(function (l, i) { l.id = u.id + '-l' + (l.key || i + 1); l.n = i + 1; });
      JP.units.push(u);
    } catch (e) {
      JP.errors.push(String(e));
    }
  };

  window.J = J;
})();
