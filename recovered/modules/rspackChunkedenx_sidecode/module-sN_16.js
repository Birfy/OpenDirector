import n from "./module-A_17.js";
import o from "./module-YR_16.js";
import i from "./module-Xy_2_16.js";
import a from "./module-M_2_16.js";
import s from "./module-O9_16.js";
import u from "./module-X_17.js";
import c from "./module-Y_17.js";
import f from "./module-i_2_16.js";
import l from "./module-E6_16.js";
import h from "./module-x9_16.js";
import v from "./module-eZ_16.js";
const d = o("JSON", "stringify");
const g = s(/./.exec);
const y = s("".charAt);
const m = s("".charCodeAt);
const b = s("".replace);
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
  const e = l(arguments);
  const n = h(r);
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
    return "\\u" + A(m(t, 0), 16);
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
        const n = l(arguments);
        const o = i(E ? R : d, null, n);
        if (O && typeof o === "string") {
          return b(o, x, M);
        }
        return o;
      },
    },
  );
}
