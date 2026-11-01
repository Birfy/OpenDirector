import n from "./module-YR_23.js";
import o from "./module-D_2_23.js";
import i from "./module-h_24.js";
import a from "./module-e_23.js";
import s from "./module-d4_23.js";
import c from "./module-bE_24.js";
import u from "./module-T_2_23.js";
import f from "./module-JD_24.js";
import l from "./module-Yw_23.js";
import h from "./module-je_23.js";
import v from "./module-LV_23.js";
import p from "./module-r9_23.js";
import d from "./module-N_23.js";
export default function (t, r, e, g) {
  const y = "stackTraceLimit";
  const b = g ? 2 : 1;
  const m = t.split(".");
  const A = m[m.length - 1];
  const x = n.apply(null, m);
  if (x) {
    const w = x.prototype;
    if (!d && o(w, "cause")) {
      delete w.cause;
    }
    if (!e) {
      return x;
    }
    const S = n("Error");
    var E = r(function (t, r) {
      const e = l(g ? r : t, undefined);
      const n = g ? new x(t) : new x();
      if (e !== undefined) {
        i(n, "message", e);
      }
      v(n, E, n.stack, 2);
      if (this && a(w, this)) {
        f(n, this, E);
      }
      if (arguments.length > b) {
        h(n, arguments[b]);
      }
      return n;
    });
    E.prototype = w;
    if (A !== "Error") {
      if (s) {
        s(E, S);
      } else {
        c(E, S, {
          name: true,
        });
      }
    } else if (p && y in x) {
      u(E, x, y);
      u(E, x, "prepareStackTrace");
    }
    c(E, x);
    if (!d) {
      try {
        if (w.name !== A) {
          i(w, "name", A);
        }
        w.constructor = E;
      } catch (t) {}
    }
    return E;
  }
}
