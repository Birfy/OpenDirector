import n from "./module-A_5.js";
import i from "./module-eP_4.js";
import o from "./module-vT_6.js";
import s from "./module-YR_4.js";
import a from "./module-M_2_4.js";
import u from "./module-O9_4.js";
import c from "./module-Y_5.js";
import f from "./module-wO_5.js";
import h from "./module-ng_5.js";
import l from "./module-er_4.js";
import v from "./module-zq_2_4.js";
import p from "./module-x9_4.js";
import d from "./module-o_4.js";
import _g from "./module-b_4.js";
const _g_set = _g.set;
const m = s("JSON", "parse");
const A = s("JSON", "stringify");
const x = s("Object", "create");
const w = s("Object", "freeze");
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
    forced: !o,
  },
  {
    rawJSON: function (t) {
      const r = h(t);
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
      l(n, "rawJSON", r);
      if (i) {
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
      forced: !o,
    },
    {
      stringify: function (t, r, e) {
        const n = p(r);
        const i = [];
        const o = A(
          t,
          function (t, r) {
            const e = c(n) ? a(n, this, String(t), r) : r;
            if (f(e)) {
              return M + (R(i, e.rawJSON) - 1);
            }
            return e;
          },
          e,
        );
        if (typeof o !== "string") {
          return o;
        }
        let s = "";
        for (let u = o.length, h = 0; h < u; h++) {
          const l = S(o, h);
          if (l === '"') {
            const d = v(o, ++h).end - 1;
            const g = E(o, h, d);
            s += E(g, 0, M_length) === M ? i[E(g, M_length)] : '"' + g + '"';
            h = d;
          } else {
            s += l;
          }
        }
        return s;
      },
    },
  );
}
