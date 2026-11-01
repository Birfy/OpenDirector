import n from "./module-A_16.js";
import o from "./module-YR_15.js";
import i from "./module-Xy_2_15.js";
import a from "./module-M_2_15.js";
import s from "./module-O9_15.js";
import u from "./module-X_16.js";
import c from "./module-Y_16.js";
import f from "./module-i_2_15.js";
import h from "./module-E6_15.js";
import l from "./module-x9_15.js";
import v from "./module-eZ_15.js";
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
const R = function (r, t) {
  const e = h(arguments);
  const n = l(t);
  if (!(!c(n) && (r === undefined || f(r)))) {
    e[1] = function (r, t) {
      if (c(n)) {
        t = a(n, this, String(r), t);
      }
      if (!f(t)) {
        return t;
      }
    };
    return i(d, null, e);
  }
};
const M = function (r, t, e) {
  const n = y(e, t - 1);
  const o = y(e, t + 1);
  if ((g(w, r) && !g(S, o)) || (g(S, r) && !g(w, n))) {
    return "\\u" + A(b(r, 0), 16);
  }
  return r;
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
      stringify: function (r, t, e) {
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
