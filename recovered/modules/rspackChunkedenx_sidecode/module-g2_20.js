import n from "./module-A_21.js";
import o from "./module-eP_20.js";
import i from "./module-vT_22.js";
import a from "./module-YR_20.js";
import s from "./module-M_2_20.js";
import c from "./module-O9_20.js";
import u from "./module-Y_21.js";
import f from "./module-wO_21.js";
import l from "./module-ng_21.js";
import h from "./module-er_20.js";
import v from "./module-zq_2_20.js";
import p from "./module-x9_20.js";
import d from "./module-o_20.js";
import _g from "./module-b_20.js";
const _g_set = _g.set;
const b = a("JSON", "parse");
const w = a("JSON", "stringify");
const A = a("Object", "create");
const x = a("Object", "freeze");
const S = c("".charAt);
const E = c("".slice);
const O = c(/./.exec);
const R = c([].push);
const M = d();
const M_length = M.length;
const _ = "Unacceptable as raw JSON";
const k = /^[\t\n\r ]$/;
n(
  {
    target: "JSON",
    stat: true,
    forced: !i,
  },
  {
    rawJSON: function (t) {
      const r = l(t);
      if (r === "" || O(k, S(r, 0)) || O(k, S(r, r.length - 1))) {
        throw SyntaxError(_);
      }
      const e = b(r);
      if (typeof e === "object" && e !== null) {
        throw SyntaxError(_);
      }
      const n = A(null);
      _g_set(n, {
        type: "RawJSON",
      });
      h(n, "rawJSON", r);
      if (o) {
        return x(n);
      }
      return n;
    },
  },
);
if (w) {
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
        const i = w(
          t,
          function (t, r) {
            const e = u(n) ? s(n, this, String(t), r) : r;
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
        for (let c = i.length, l = 0; l < c; l++) {
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
