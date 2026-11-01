import n from "./module-A_7.js";
import o from "./module-YR_6.js";
import a from "./module-Xy_2_6.js";
import i from "./module-M_2_6.js";
import s from "./module-O9_6.js";
import c from "./module-X_7.js";
import u from "./module-Y_7.js";
import f from "./module-i_2_6.js";
import l from "./module-E6_6.js";
import h from "./module-x9_6.js";
import p from "./module-eZ_6.js";
const d = o("JSON", "stringify");
const g = s(/./.exec);
const y = s("".charAt);
const m = s("".charCodeAt);
const b = s("".replace);
const A = s((1).toString);
const w = /[\uD800-\uDFFF]/g;
const x = /^[\uD800-\uDBFF]$/;
const E = /^[\uDC00-\uDFFF]$/;
const S =
  !p ||
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
        r = i(n, this, String(t), r);
      }
      if (!f(r)) {
        return r;
      }
    };
    return a(d, null, e);
  }
};
const M = function (t, r, e) {
  const n = y(e, r - 1);
  const o = y(e, r + 1);
  if ((g(x, t) && !g(E, o)) || (g(E, t) && !g(x, n))) {
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
      forced: S || O,
    },
    {
      stringify: function (t, r, e) {
        const n = l(arguments);
        const o = a(S ? R : d, null, n);
        if (O && typeof o === "string") {
          return b(o, w, M);
        }
        return o;
      },
    },
  );
}
