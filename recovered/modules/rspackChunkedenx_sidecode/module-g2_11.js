import n from "./module-A_12.js";
import o from "./module-eP_11.js";
import i from "./module-vT_13.js";
import a from "./module-YR_11.js";
import s from "./module-M_2_11.js";
import u from "./module-O9_11.js";
import c from "./module-Y_12.js";
import f from "./module-wO_12.js";
import h from "./module-ng_12.js";
import l from "./module-er_11.js";
import v from "./module-zq_2_11.js";
import p from "./module-x9_11.js";
import d from "./module-o_11.js";
import _g from "./module-b_11.js";
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
const j = /^[\t\n\r ]$/;
n(
  {
    target: "JSON",
    stat: true,
    forced: !i,
  },
  {
    rawJSON: function (r) {
      const t = h(r);
      if (t === "" || O(j, S(t, 0)) || O(j, S(t, t.length - 1))) {
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
