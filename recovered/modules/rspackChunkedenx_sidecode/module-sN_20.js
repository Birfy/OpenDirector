import n from "./module-A_21.js";
import o from "./module-YR_20.js";
import i from "./module-Xy_2_20.js";
import a from "./module-M_2_20.js";
import s from "./module-O9_20.js";
import c from "./module-X_21.js";
import u from "./module-Y_21.js";
import f from "./module-i_2_20.js";
import l from "./module-E6_20.js";
import h from "./module-x9_20.js";
import v from "./module-eZ_20.js";
const d = o("JSON", "stringify");
const g = s(/./.exec);
const y = s("".charAt);
const m = s("".charCodeAt);
const b = s("".replace);
const w = s((1).toString);
const A = /[\uD800-\uDFFF]/g;
const x = /^[\uD800-\uDBFF]$/;
const S = /^[\uDC00-\uDFFF]$/;
const E =
  !v ||
  c(function () {
    const a_1 = o("Symbol")("stringify detection");
    return (
      d([a_1]) !== "[null]" ||
      d({
        a: a_1,
      }) !== "{}" ||
      d(Object(a_1)) !== "{}"
    );
  });
const O = c(function () {
  return (
    d("\uDF06\uD834") !== '"\\udf06\\ud834"' || d("\uDEAD") !== '"\\udead"'
  );
});
const R = function (t, r) {
  const e = l(arguments);
  const n = h(r);
  if (!(!u(n) && (t === undefined || f(t)))) {
    e[1] = function (t, r) {
      if (u(n)) {
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
  if ((g(x, t) && !g(S, o)) || (g(S, t) && !g(x, n))) {
    return "\\u" + w(m(t, 0), 16);
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
          return b(o, A, M);
        }
        return o;
      },
    },
  );
}
