import n from "./module-r9_2.js";
import i from "./module-O9_2.js";
import o from "./module-M_2_2.js";
import s from "./module-X_3.js";
import a from "./module-II_2.js";
import { f as f_1 } from "./module-CR_2.js";
import { f as f_2 } from "./module-P_3.js";
import f from "./module-aq_2.js";
import h from "./module-Q_3.js";
const p = i([].concat);
export default !Object.assign ||
s(function () {
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
  const i = "abcdefghijklmnopqrst";
  t[e] = 7;
  i.split("").forEach((t) => {
    r[t] = t;
  });
  return (
    {
      ...t,
    }[e] !== 7 ||
    a({
      ...r,
    }).join("") !== i
  );
})
  ? function (t, r) {
      const e = f(t);
      for (let i = arguments.length, s = 1, l = f_1, v = f_2; i > s;) {
        let d;
        const g = h(arguments[s++]);
        const y = l ? p(a(g), l(g)) : a(g);
        for (let b = y.length, m = 0; b > m;) {
          d = y[m++];
          if (!n || o(v, g, d)) {
            e[d] = g[d];
          }
        }
      }
      return e;
    }
  : Object.assign;
