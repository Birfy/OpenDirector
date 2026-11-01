import n from "./module-r9_9.js";
import o from "./module-O9_9.js";
import i from "./module-M_2_9.js";
import a from "./module-X_10.js";
import s from "./module-II_9.js";
import { f as f_1 } from "./module-CR_9.js";
import { f as f_2 } from "./module-P_10.js";
import f from "./module-aq_9.js";
import l from "./module-Q_10.js";
const d = o([].concat);
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
  const t = {};
  const e = {};
  const r = Symbol("assign detection");
  const o = "abcdefghijklmnopqrst";
  t[r] = 7;
  o.split("").forEach((t) => {
    e[t] = t;
  });
  return (
    {
      ...t,
    }[r] !== 7 ||
    s({
      ...e,
    }).join("") !== o
  );
})
  ? function (t, e) {
      const r = f(t);
      for (let o = arguments.length, a = 1, h = f_1, v = f_2; o > a;) {
        let p;
        const g = l(arguments[a++]);
        const y = h ? d(s(g), h(g)) : s(g);
        for (let m = y.length, b = 0; m > b;) {
          p = y[b++];
          if (!n || i(v, g, p)) {
            r[p] = g[p];
          }
        }
      }
      return r;
    }
  : Object.assign;
