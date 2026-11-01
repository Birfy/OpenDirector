import n from "./module-r9_19.js";
import o from "./module-O9_19.js";
import i from "./module-M_2_19.js";
import a from "./module-X_20.js";
import s from "./module-II_19.js";
import { f as f_1 } from "./module-CR_19.js";
import { f as f_2 } from "./module-P_20.js";
import f from "./module-aq_19.js";
import l from "./module-Q_20.js";
const p = o([].concat);
export default !Object.assign ||
a(function () {
  if (
    n &&
    {
      b: 1,
      ...Object.assign(
        Object.defineProperty({}, "a", {
          enumerable: true,
          get: function () {
            Object.defineProperty(this, "b", {
              value: 3,
              enumerable: false,
            });
          },
        }),
        {
          b: 2,
        },
      ),
    }.b !== 1
  ) {
    return true;
  }
  const r = {};
  const t = {};
  const e = Symbol("assign detection");
  const o = "abcdefghijklmnopqrst";
  r[e] = 7;
  o.split("").forEach((r) => {
    t[r] = r;
  });
  return (
    {
      ...r,
    }[e] !== 7 ||
    s({
      ...t,
    }).join("") !== o
  );
})
  ? function (r, t) {
      const e = f(r);
      for (let o = arguments.length, a = 1, h = f_1, v = f_2; o > a;) {
        let d;
        const g = l(arguments[a++]);
        const y = h ? p(s(g), h(g)) : s(g);
        for (let b = y.length, m = 0; b > m;) {
          d = y[m++];
          if (!n || i(v, g, d)) {
            e[d] = g[d];
          }
        }
      }
      return e;
    }
  : Object.assign;
