import n from "./module-YR_20.js";
import o from "./module-D_2_20.js";
import i from "./module-h_21.js";
import a from "./module-e_20.js";
import s from "./module-d4_20.js";
import c from "./module-bE_21.js";
import u from "./module-T_2_20.js";
import f from "./module-JD_21.js";
import l from "./module-Yw_20.js";
import h from "./module-je_20.js";
import v from "./module-LV_20.js";
import p from "./module-r9_20.js";
import d from "./module-N_20.js";
export default function (t, r, e, g) {
  const y = "stackTraceLimit";
  const m = g ? 2 : 1;
  const b = t.split(".");
  const w = b[b.length - 1];
  const A = n.apply(null, b);
  if (A) {
    const x = A.prototype;
    if (!d && o(x, "cause")) {
      delete x.cause;
    }
    if (!e) {
      return A;
    }
    const S = n("Error");
    var E = r(function (t, r) {
      const e = l(g ? r : t, undefined);
      const n = g ? new A(t) : new A();
      if (e !== undefined) {
        i(n, "message", e);
      }
      v(n, E, n.stack, 2);
      if (this && a(x, this)) {
        f(n, this, E);
      }
      if (arguments.length > m) {
        h(n, arguments[m]);
      }
      return n;
    });
    E.prototype = x;
    if (w !== "Error") {
      if (s) {
        s(E, S);
      } else {
        c(E, S, {
          name: true,
        });
      }
    } else if (p && y in A) {
      u(E, A, y);
      u(E, A, "prepareStackTrace");
    }
    c(E, A);
    if (!d) {
      try {
        if (x.name !== w) {
          i(x, "name", w);
        }
        x.constructor = E;
      } catch (t) {}
    }
    return E;
  }
}
