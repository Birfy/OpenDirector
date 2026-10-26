import n from "./module-YR_10.js";
import o from "./module-D_2_10.js";
import i from "./module-h_11.js";
import a from "./module-e_10.js";
import s from "./module-d4_10.js";
import u from "./module-bE_11.js";
import c from "./module-T_2_10.js";
import f from "./module-JD_11.js";
import l from "./module-Yw_10.js";
import h from "./module-je_10.js";
import v from "./module-LV_10.js";
import p from "./module-r9_10.js";
import d from "./module-N_10.js";
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
          i(w, "name", A);
        }
        w.constructor = E;
      } catch (t) {}
    }
    return E;
  }
}
