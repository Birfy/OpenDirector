import n from "./module-A_10.js";
import o from "./module-YR_9.js";
import i from "./module-Xy_2_9.js";
import a from "./module-M_2_9.js";
import s from "./module-O9_9.js";
import u from "./module-X_10.js";
import c from "./module-Y_10.js";
import f from "./module-i_2_9.js";
import l from "./module-E6_9.js";
import h from "./module-x9_9.js";
import v from "./module-eZ_9.js";
const p = o("JSON", "stringify");
const g = s(/./.exec);
const y = s("".charAt);
const m = s("".charCodeAt);
const b = s("".replace);
const w = s((1).toString);
const A = /[\uD800-\uDFFF]/g;
const x = /^[\uD800-\uDBFF]$/;
const E = /^[\uDC00-\uDFFF]$/;
const S =
  !v ||
  u(function () {
    const a_1 = o("Symbol")("stringify detection");
    return (
      p([a_1]) !== "[null]" ||
      p({
        a: a_1,
      }) !== "{}" ||
      p(Object(a_1)) !== "{}"
    );
  });
const O = u(function () {
  return (
    p("\uDF06\uD834") !== '"\\udf06\\ud834"' || p("\uDEAD") !== '"\\udead"'
  );
});
const _ = function (t, e) {
  const r = l(arguments);
  const n = h(e);
  if (!(!c(n) && (t === undefined || f(t)))) {
    r[1] = function (t, e) {
      if (c(n)) {
        e = a(n, this, String(t), e);
      }
      if (!f(e)) {
        return e;
      }
    };
    return i(p, null, r);
  }
};
const R = function (t, e, r) {
  const n = y(r, e - 1);
  const o = y(r, e + 1);
  if ((g(x, t) && !g(E, o)) || (g(E, t) && !g(x, n))) {
    return "\\u" + w(m(t, 0), 16);
  }
  return t;
};
if (p) {
  n(
    {
      target: "JSON",
      stat: true,
      arity: 3,
      forced: S || O,
    },
    {
      stringify: function (t, e, r) {
        const n = l(arguments);
        const o = i(S ? _ : p, null, n);
        if (O && typeof o === "string") {
          return b(o, A, R);
        }
        return o;
      },
    },
  );
}
