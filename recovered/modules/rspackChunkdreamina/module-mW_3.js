import n from "./module-F.js";
import o from "./module-o.js";
import i from "./module-p3.js";
import a from "./module-VV_4.js";
import s from "./module-W_2.js";
import { f as f_1 } from "./module-mi_2.js";
import { f as f_2 } from "./module-FC_2.js";
import f from "./module-O_2.js";
import l from "./module-x.js";
const v = o([].concat);
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
  const e = {};
  const t = {};
  const r = Symbol("assign detection");
  const o = "abcdefghijklmnopqrst";
  e[r] = 7;
  o.split("").forEach((e) => {
    t[e] = e;
  });
  return (
    {
      ...e,
    }[r] !== 7 ||
    s({
      ...t,
    }).join("") !== o
  );
})
  ? function (e, t) {
      const r = f(e);
      for (let o = arguments.length, a = 1, p = f_1, h = f_2; o > a;) {
        let d;
        const g = l(arguments[a++]);
        const y = p ? v(s(g), p(g)) : s(g);
        for (let m = y.length, x = 0; m > x;) {
          d = y[x++];
          if (!n || i(h, g, d)) {
            r[d] = g[d];
          }
        }
      }
      return r;
    }
  : Object.assign;
