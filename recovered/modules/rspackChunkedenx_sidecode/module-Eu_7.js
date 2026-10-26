import n from "./module-r9_6.js";
import o from "./module-O9_6.js";
import a from "./module-M_2_6.js";
import i from "./module-X_7.js";
import s from "./module-II_6.js";
import { f as f_1 } from "./module-CR_6.js";
import { f as f_2 } from "./module-P_7.js";
import f from "./module-aq_6.js";
import l from "./module-Q_7.js";
const v = o([].concat);
export default !Object.assign ||
i(function () {
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
  const t = {};
  const r = {};
  const e = Symbol("assign detection");
  const o = "abcdefghijklmnopqrst";
  t[e] = 7;
  o.split("").forEach((t) => {
    r[t] = t;
  });
  return (
    {
      ...t,
    }[e] !== 7 ||
    s({
      ...r,
    }).join("") !== o
  );
})
  ? function (t, r) {
      const e = f(t);
      for (let o = arguments.length, i = 1, h = f_1, p = f_2; o > i;) {
        let d;
        const g = l(arguments[i++]);
        const y = h ? v(s(g), h(g)) : s(g);
        for (let m = y.length, b = 0; m > b;) {
          d = y[b++];
          if (!n || a(p, g, d)) {
            e[d] = g[d];
          }
        }
      }
      return e;
    }
  : Object.assign;
