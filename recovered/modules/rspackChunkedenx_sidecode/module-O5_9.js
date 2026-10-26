import n from "./module-YR_9.js";
import o from "./module-D_2_9.js";
import i from "./module-h_10.js";
import a from "./module-e_9.js";
import s from "./module-d4_9.js";
import u from "./module-bE_10.js";
import c from "./module-T_2_9.js";
import f from "./module-JD_10.js";
import l from "./module-Yw_9.js";
import h from "./module-je_9.js";
import v from "./module-LV_9.js";
import d from "./module-r9_9.js";
import p from "./module-N_9.js";
export default function (t, e, r, g) {
  const y = "stackTraceLimit";
  const m = g ? 2 : 1;
  const b = t.split(".");
  const w = b[b.length - 1];
  const A = n.apply(null, b);
  if (A) {
    const x = A.prototype;
    if (!p && o(x, "cause")) {
      delete x.cause;
    }
    if (!r) {
      return A;
    }
    const E = n("Error");
    var S = e(function (t, e) {
      const r = l(g ? e : t, undefined);
      const n = g ? new A(t) : new A();
      if (r !== undefined) {
        i(n, "message", r);
      }
      v(n, S, n.stack, 2);
      if (this && a(x, this)) {
        f(n, this, S);
      }
      if (arguments.length > m) {
        h(n, arguments[m]);
      }
      return n;
    });
    S.prototype = x;
    if (w !== "Error") {
      if (s) {
        s(S, E);
      } else {
        u(S, E, {
          name: true,
        });
      }
    } else if (d && y in A) {
      c(S, A, y);
      c(S, A, "prepareStackTrace");
    }
    u(S, A);
    if (!p) {
      try {
        if (x.name !== w) {
          i(x, "name", w);
        }
        x.constructor = S;
      } catch (t) {}
    }
    return S;
  }
}
