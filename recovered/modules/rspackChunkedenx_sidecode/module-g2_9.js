import n from "./module-A_10.js";
import o from "./module-eP_9.js";
import i from "./module-vT_11.js";
import a from "./module-YR_9.js";
import s from "./module-M_2_9.js";
import u from "./module-O9_9.js";
import c from "./module-Y_10.js";
import f from "./module-wO_10.js";
import l from "./module-ng_10.js";
import h from "./module-er_9.js";
import v from "./module-zq_2_9.js";
import d from "./module-x9_9.js";
import p from "./module-o_9.js";
import _g from "./module-b_9.js";
const _g_set = _g.set;
const b = a("JSON", "parse");
const w = a("JSON", "stringify");
const A = a("Object", "create");
const x = a("Object", "freeze");
const E = u("".charAt);
const S = u("".slice);
const O = u(/./.exec);
const _ = u([].push);
const R = p();
const R_length = R.length;
const I = "Unacceptable as raw JSON";
const T = /^[\t\n\r ]$/;
n(
  {
    target: "JSON",
    stat: true,
    forced: !i,
  },
  {
    rawJSON: function (t) {
      const e = l(t);
      if (e === "" || O(T, E(e, 0)) || O(T, E(e, e.length - 1))) {
        throw SyntaxError(I);
      }
      const r = b(e);
      if (typeof r === "object" && r !== null) {
        throw SyntaxError(I);
      }
      const n = A(null);
      _g_set(n, {
        type: "RawJSON",
      });
      h(n, "rawJSON", e);
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
      stringify: function (t, e, r) {
        const n = d(e);
        const o = [];
        const i = w(
          t,
          function (t, e) {
            const r = c(n) ? s(n, this, String(t), e) : e;
            if (f(r)) {
              return R + (_(o, r.rawJSON) - 1);
            }
            return r;
          },
          r,
        );
        if (typeof i !== "string") {
          return i;
        }
        let a = "";
        for (let u = i.length, l = 0; l < u; l++) {
          const h = E(i, l);
          if (h === '"') {
            const p = v(i, ++l).end - 1;
            const g = S(i, l, p);
            a += S(g, 0, R_length) === R ? o[S(g, R_length)] : '"' + g + '"';
            l = p;
          } else {
            a += h;
          }
        }
        return a;
      },
    },
  );
}
