import n from "./module-g.js";
import o from "./module-Y.js";
import i from "./module-l.js";
import a from "./module-p3.js";
import s from "./module-o.js";
import u from "./module-VV_4.js";
import c from "./module-r.js";
import f from "./module-n_2.js";
import l from "./module-Vz_2.js";
import p from "./module-lX_3.js";
import h from "./module-rz_2.js";
const d = o("JSON", "stringify");
const g = s(/./.exec);
const y = s("".charAt);
const m = s("".charCodeAt);
const x = s("".replace);
const b = s((1).toString);
const w = /[\uD800-\uDFFF]/g;
const A = /^[\uD800-\uDBFF]$/;
const E = /^[\uDC00-\uDFFF]$/;
const j =
  !h ||
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
const I = u(function () {
  return (
    d("\uDF06\uD834") !== '"\\udf06\\ud834"' || d("\uDEAD") !== '"\\udead"'
  );
});
const R = function (e, t) {
  const r = l(arguments);
  const n = p(t);
  if (!(!c(n) && (e === undefined || f(e)))) {
    r[1] = function (e, t) {
      if (c(n)) {
        t = a(n, this, String(e), t);
      }
      if (!f(t)) {
        return t;
      }
    };
    return i(d, null, r);
  }
};
const z = function (e, t, r) {
  const n = y(r, t - 1);
  const o = y(r, t + 1);
  if ((g(A, e) && !g(E, o)) || (g(E, e) && !g(A, n))) {
    return "\\u" + b(m(e, 0), 16);
  }
  return e;
};
if (d) {
  n(
    {
      target: "JSON",
      stat: true,
      arity: 3,
      forced: j || I,
    },
    {
      stringify: function (e, t, r) {
        const n = l(arguments);
        const o = i(j ? R : d, null, n);
        if (I && typeof o === "string") {
          return x(o, w, z);
        }
        return o;
      },
    },
  );
}
