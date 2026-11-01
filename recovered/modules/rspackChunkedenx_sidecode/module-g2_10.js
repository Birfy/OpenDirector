import n from "./module-A_11.js";
import o from "./module-eP_10.js";
import i from "./module-vT_12.js";
import a from "./module-YR_10.js";
import s from "./module-M_2_10.js";
import u from "./module-O9_10.js";
import c from "./module-Y_11.js";
import f from "./module-wO_11.js";
import l from "./module-ng_11.js";
import h from "./module-er_10.js";
import v from "./module-zq_2_10.js";
import p from "./module-x9_10.js";
import d from "./module-o_10.js";
import _g from "./module-b_10.js";
const _g_set = _g.set;
const m = a("JSON", "parse");
const A = a("JSON", "stringify");
const x = a("Object", "create");
const w = a("Object", "freeze");
const S = u("".charAt);
const E = u("".slice);
const O = u(/./.exec);
const R = u([].push);
const M = d();
const M_length = M.length;
const k = "Unacceptable as raw JSON";
const T = /^[\t\n\r ]$/;
n(
  {
    target: "JSON",
    stat: true,
    forced: !i,
  },
  {
    rawJSON: function (t) {
      const r = l(t);
      if (r === "" || O(T, S(r, 0)) || O(T, S(r, r.length - 1))) {
        throw SyntaxError(k);
      }
      const e = m(r);
      if (typeof e === "object" && e !== null) {
        throw SyntaxError(k);
      }
      const n = x(null);
      _g_set(n, {
        type: "RawJSON",
      });
      h(n, "rawJSON", r);
      if (o) {
        return w(n);
      }
      return n;
    },
  },
);
if (A) {
  n(
    {
      target: "JSON",
      stat: true,
      arity: 3,
      forced: !i,
    },
    {
      stringify: function (t, r, e) {
        const n = p(r);
        const o = [];
        const i = A(
          t,
          function (t, r) {
            const e = c(n) ? s(n, this, String(t), r) : r;
            if (f(e)) {
              return M + (R(o, e.rawJSON) - 1);
            }
            return e;
          },
          e,
        );
        if (typeof i !== "string") {
          return i;
        }
        let a = "";
        for (let u = i.length, l = 0; l < u; l++) {
          const h = S(i, l);
          if (h === '"') {
            const d = v(i, ++l).end - 1;
            const g = E(i, l, d);
            a += E(g, 0, M_length) === M ? o[E(g, M_length)] : '"' + g + '"';
            l = d;
          } else {
            a += h;
          }
        }
        return a;
      },
    },
  );
}
