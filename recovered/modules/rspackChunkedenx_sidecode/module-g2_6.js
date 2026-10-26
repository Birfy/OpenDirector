import n from "./module-A_7.js";
import o from "./module-eP_6.js";
import a from "./module-vT_8.js";
import i from "./module-YR_6.js";
import s from "./module-M_2_6.js";
import c from "./module-O9_6.js";
import u from "./module-Y_7.js";
import f from "./module-wO_7.js";
import l from "./module-ng_7.js";
import h from "./module-er_6.js";
import p from "./module-zq_2_6.js";
import v from "./module-x9_6.js";
import d from "./module-o_6.js";
import _g from "./module-b_6.js";
const _g_set = _g.set;
const b = i("JSON", "parse");
const A = i("JSON", "stringify");
const w = i("Object", "create");
const x = i("Object", "freeze");
const E = c("".charAt);
const S = c("".slice);
const O = c(/./.exec);
const R = c([].push);
const M = d();
const M_length = M.length;
const k = "Unacceptable as raw JSON";
const T = /^[\t\n\r ]$/;
n(
  {
    target: "JSON",
    stat: true,
    forced: !a,
  },
  {
    rawJSON: function (t) {
      const r = l(t);
      if (r === "" || O(T, E(r, 0)) || O(T, E(r, r.length - 1))) {
        throw SyntaxError(k);
      }
      const e = b(r);
      if (typeof e === "object" && e !== null) {
        throw SyntaxError(k);
      }
      const n = w(null);
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
if (A) {
  n(
    {
      target: "JSON",
      stat: true,
      arity: 3,
      forced: !a,
    },
    {
      stringify: function (t, r, e) {
        const n = v(r);
        const o = [];
        const a = A(
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
        if (typeof a !== "string") {
          return a;
        }
        let i = "";
        for (let c = a.length, l = 0; l < c; l++) {
          const h = E(a, l);
          if (h === '"') {
            const d = p(a, ++l).end - 1;
            const g = S(a, l, d);
            i += S(g, 0, M_length) === M ? o[S(g, M_length)] : '"' + g + '"';
            l = d;
          } else {
            i += h;
          }
        }
        return i;
      },
    },
  );
}
