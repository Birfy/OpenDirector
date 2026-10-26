import n from "g";
import i from "BQ";
import a from "Wy";
import o from "Y";
import s from "p3";
import A from "o";
import c from "r";
import u from "EY";
import l from "BC";
import h from "Id";
import f from "T8";
import g from "lX";
import d from "I";
import { set } from "G";
const b = o("JSON", "parse");
const v = o("JSON", "stringify");
const I = o("Object", "create");
const w = o("Object", "freeze");
const C = A("".charAt);
const B = A("".slice);
const S = A(/./.exec);
const E = A([].push);
const k = d();
const k_length = k.length;
const x = "Unacceptable as raw JSON";
const F = /^[\t\n\r ]$/;
n(
  {
    target: "JSON",
    stat: true,
    forced: !a,
  },
  {
    rawJSON: function (t) {
      const e = l(t);
      if (e === "" || S(F, C(e, 0)) || S(F, C(e, e.length - 1))) {
        throw SyntaxError(x);
      }
      const r = b(e);
      if (typeof r === "object" && r !== null) {
        throw SyntaxError(x);
      }
      const n = I(null);
      set(n, {
        type: "RawJSON",
      });
      h(n, "rawJSON", e);
      if (i) {
        return w(n);
      }
      return n;
    },
  },
);
if (v) {
  n(
    {
      target: "JSON",
      stat: true,
      arity: 3,
      forced: !a,
    },
    {
      stringify: function (t, e, r) {
        const n = g(e);
        const i = [];
        const a = v(
          t,
          function (t, e) {
            const r = c(n) ? s(n, this, String(t), e) : e;
            if (u(r)) {
              return k + (E(i, r.rawJSON) - 1);
            }
            return r;
          },
          r,
        );
        if (typeof a !== "string") {
          return a;
        }
        let o = "";
        for (let A = a.length, l = 0; l < A; l++) {
          const h = C(a, l);
          if (h === '"') {
            const d = f(a, ++l).end - 1;
            const p = B(a, l, d);
            o += B(p, 0, k_length) === k ? i[B(p, k_length)] : '"' + p + '"';
            l = d;
          } else {
            o += h;
          }
        }
        return o;
      },
    },
  );
}
