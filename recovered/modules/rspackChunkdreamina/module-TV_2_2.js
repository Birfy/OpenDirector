"use strict";
function t(t, e) {
  return function (r) {
    let n;
    let i = 0;
    let a = "";
    while ((n = t.exec(r))) {
      if (i !== n.index) {
        a += r.substring(i, n.index);
      }
      a += e.get(n[0].charCodeAt(0));
      i = n.index + 1;
    }
    return a + r.substring(i);
  };
}
String.prototype.codePointAt;
t(
  /["&\u00A0]/g,
  new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"],
  ]),
);
t(
  /[&<>\u00A0]/g,
  new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"],
  ]),
);
