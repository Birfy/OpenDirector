import n from "./module-r9_13.js";
import o from "./module-O9_13.js";
import i from "./module-M_2_13.js";
import a from "./module-X_14.js";
import s from "./module-II_13.js";
import { f as f_1 } from "./module-CR_13.js";
import { f as f_2 } from "./module-P_14.js";
import f from "./module-aq_13.js";
import h from "./module-Q_14.js";
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
      for (let o = arguments.length, a = 1, l = f_1, v = f_2; o > a;) {
        let d;
        const g = h(arguments[a++]);
        const y = l ? p(s(g), l(g)) : s(g);
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
