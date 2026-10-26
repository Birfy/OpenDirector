import n from "./module-A.js";
import o from "./module-YR.js";
import i from "./module-Xy_2.js";
import a from "./module-M_2.js";
import s from "./module-O9.js";
import u from "./module-X.js";
import c from "./module-Y.js";
import f from "./module-i_2.js";
import h from "./module-E6.js";
import l from "./module-x9.js";
import v from "./module-eZ.js";
const d = o("JSON", "stringify");
const g = s(/./.exec);
const y = s("".charAt);
const b = s("".charCodeAt);
const m = s("".replace);
const A = s((1).toString);
const x = /[\uD800-\uDFFF]/g;
const w = /^[\uD800-\uDBFF]$/;
const S = /^[\uDC00-\uDFFF]$/;
const E =
  !v ||
  u(function () {
    const a_1 = o("Symbol")("stringify detection");
    return (
      d([a_1]) !== "[null]" ||
      d({
        a: a_1,
      }) !== "{}" ||
      d(Object(a_1)) !== "{}"
    );
  });
const O = u(function () {
  return (
    d("\uDF06\uD834") !== '"\\udf06\\ud834"' || d("\uDEAD") !== '"\\udead"'
  );
});
const R = function (t, r) {
  const e = h(arguments);
  const n = l(r);
  if (!(!c(n) && (t === undefined || f(t)))) {
    e[1] = function (t, r) {
      if (c(n)) {
        r = a(n, this, String(t), r);
      }
      if (!f(r)) {
        return r;
      }
    };
    return i(d, null, e);
  }
};
const M = function (t, r, e) {
  const n = y(e, r - 1);
  const o = y(e, r + 1);
  if ((g(w, t) && !g(S, o)) || (g(S, t) && !g(w, n))) {
    return "\\u" + A(b(t, 0), 16);
  }
  return t;
};
if (d) {
  n(
    {
      target: "JSON",
      stat: true,
      arity: 3,
      forced: E || O,
    },
    {
      stringify: function (t, r, e) {
        const n = h(arguments);
        const o = i(E ? R : d, null, n);
        if (O && typeof o === "string") {
          return m(o, x, M);
        }
        return o;
      },
    },
  );
}
