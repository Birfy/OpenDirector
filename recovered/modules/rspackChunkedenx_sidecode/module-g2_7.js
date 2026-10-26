import n from "./module-A_8.js";
import o from "./module-eP_7.js";
import i from "./module-vT_9.js";
import a from "./module-YR_7.js";
import s from "./module-M_2_7.js";
import u from "./module-O9_7.js";
import c from "./module-Y_8.js";
import f from "./module-wO_8.js";
import l from "./module-ng_8.js";
import h from "./module-er_7.js";
import v from "./module-zq_2_7.js";
import p from "./module-x9_7.js";
import d from "./module-o_7.js";
import _g from "./module-b_7.js";
const _g_set = _g.set;
const b = a("JSON", "parse");
const A = a("JSON", "stringify");
const w = a("Object", "create");
const x = a("Object", "freeze");
const E = u("".charAt);
const S = u("".slice);
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
    rawJSON: function (r) {
      const t = l(r);
      if (t === "" || O(T, E(t, 0)) || O(T, E(t, t.length - 1))) {
        throw SyntaxError(k);
      }
      const e = b(t);
      if (typeof e === "object" && e !== null) {
        throw SyntaxError(k);
      }
      const n = w(null);
      _g_set(n, {
        type: "RawJSON",
      });
      h(n, "rawJSON", t);
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
      forced: !i,
    },
    {
      stringify: function (r, t, e) {
        const n = p(t);
        const o = [];
        const i = A(
          r,
          function (r, t) {
            const e = c(n) ? s(n, this, String(r), t) : t;
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
          const h = E(i, l);
          if (h === '"') {
            const d = v(i, ++l).end - 1;
            const g = S(i, l, d);
            a += S(g, 0, M_length) === M ? o[S(g, M_length)] : '"' + g + '"';
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
