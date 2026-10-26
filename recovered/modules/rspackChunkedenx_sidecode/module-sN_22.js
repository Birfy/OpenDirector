import n from "./module-A_23.js";
import i from "./module-YR_22.js";
import o from "./module-Xy_2_22.js";
import s from "./module-M_2_22.js";
import a from "./module-O9_22.js";
import u from "./module-X_23.js";
import c from "./module-Y_23.js";
import f from "./module-i_2_22.js";
import h from "./module-E6_22.js";
import l from "./module-x9_22.js";
import v from "./module-eZ_22.js";
const d = i("JSON", "stringify");
const g = a(/./.exec);
const y = a("".charAt);
const b = a("".charCodeAt);
const m = a("".replace);
const A = a((1).toString);
const x = /[\uD800-\uDFFF]/g;
const w = /^[\uD800-\uDBFF]$/;
const S = /^[\uDC00-\uDFFF]$/;
const E =
  !v ||
  u(function () {
    const a_1 = i("Symbol")("stringify detection");
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
        r = s(n, this, String(t), r);
      }
      if (!f(r)) {
        return r;
      }
    };
    return o(d, null, e);
  }
};
const M = function (t, r, e) {
  const n = y(e, r - 1);
  const i = y(e, r + 1);
  if ((g(w, t) && !g(S, i)) || (g(S, t) && !g(w, n))) {
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
        const i = o(E ? R : d, null, n);
        if (O && typeof i === "string") {
          return m(i, x, M);
        }
        return i;
      },
    },
  );
}
