import n from "./module-YR_21.js";
import i from "./module-D_2_21.js";
import o from "./module-h_22.js";
import s from "./module-e_21.js";
import a from "./module-d4_21.js";
import u from "./module-bE_22.js";
import c from "./module-T_2_21.js";
import f from "./module-JD_22.js";
import h from "./module-Yw_21.js";
import l from "./module-je_21.js";
import v from "./module-LV_21.js";
import p from "./module-r9_21.js";
import d from "./module-N_21.js";
export default function (t, r, e, g) {
  const y = "stackTraceLimit";
  const b = g ? 2 : 1;
  const m = t.split(".");
  const A = m[m.length - 1];
  const x = n.apply(null, m);
  if (x) {
    const w = x.prototype;
    if (!d && i(w, "cause")) {
      delete w.cause;
    }
    if (!e) {
      return x;
    }
    const S = n("Error");
    var E = r(function (t, r) {
      const e = h(g ? r : t, undefined);
      const n = g ? new x(t) : new x();
      if (e !== undefined) {
        o(n, "message", e);
      }
      v(n, E, n.stack, 2);
      if (this && s(w, this)) {
        f(n, this, E);
      }
      if (arguments.length > b) {
        l(n, arguments[b]);
      }
      return n;
    });
    E.prototype = w;
    if (A !== "Error") {
      if (a) {
        a(E, S);
      } else {
        u(E, S, {
          name: true,
        });
      }
    } else if (p && y in x) {
      c(E, x, y);
      c(E, x, "prepareStackTrace");
    }
    u(E, x);
    if (!d) {
      try {
        if (w.name !== A) {
          o(w, "name", A);
        }
        w.constructor = E;
      } catch (t) {}
    }
    return E;
  }
}
