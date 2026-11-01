import n from "./module-A.js";
import o from "./module-eP.js";
import i from "./module-vT.js";
import a from "./module-YR.js";
import s from "./module-M_2.js";
import u from "./module-O9.js";
import c from "./module-Y.js";
import f from "./module-wO.js";
import h from "./module-ng.js";
import l from "./module-er.js";
import v from "./module-zq_2.js";
import p from "./module-x9.js";
import d from "./module-o.js";
import _g from "./module-b.js";
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
