import n from "./module-YR_14.js";
import o from "./module-D_2_14.js";
import i from "./module-h_15.js";
import a from "./module-e_14.js";
import s from "./module-d4_14.js";
import c from "./module-bE_15.js";
import u from "./module-T_2_14.js";
import f from "./module-JD_15.js";
import l from "./module-Yw_14.js";
import h from "./module-je_14.js";
import v from "./module-LV_14.js";
import p from "./module-r9_14.js";
import d from "./module-N_14.js";
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
