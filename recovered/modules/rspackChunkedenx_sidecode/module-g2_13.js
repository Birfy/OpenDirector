import n from "./module-A_14.js";
import o from "./module-eP_13.js";
import i from "./module-vT_15.js";
import a from "./module-YR_13.js";
import s from "./module-M_2_13.js";
import u from "./module-O9_13.js";
import c from "./module-Y_14.js";
import f from "./module-wO_14.js";
import h from "./module-ng_14.js";
import l from "./module-er_13.js";
import v from "./module-zq_2_13.js";
import p from "./module-x9_13.js";
import d from "./module-o_13.js";
import _g from "./module-b_13.js";
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
    rawJSON: function (r) {
      const t = h(r);
      if (t === "" || O(T, S(t, 0)) || O(T, S(t, t.length - 1))) {
        throw SyntaxError(k);
      }
      const e = m(t);
      if (typeof e === "object" && e !== null) {
        throw SyntaxError(k);
      }
      const n = x(null);
      _g_set(n, {
        type: "RawJSON",
      });
      l(n, "rawJSON", t);
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
        for (let u = i.length, h = 0; h < u; h++) {
          const l = S(i, h);
          if (l === '"') {
            const d = v(i, ++h).end - 1;
            const g = E(i, h, d);
            a += E(g, 0, M_length) === M ? o[E(g, M_length)] : '"' + g + '"';
            h = d;
          } else {
            a += l;
          }
        }
        return a;
      },
    },
  );
}
