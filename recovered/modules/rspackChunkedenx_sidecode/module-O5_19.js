import n from "./module-YR_19.js";
import o from "./module-D_2_19.js";
import i from "./module-h_20.js";
import a from "./module-e_19.js";
import s from "./module-d4_19.js";
import u from "./module-bE_20.js";
import c from "./module-T_2_19.js";
import f from "./module-JD_20.js";
import l from "./module-Yw_19.js";
import h from "./module-je_19.js";
import v from "./module-LV_19.js";
import p from "./module-r9_19.js";
import d from "./module-N_19.js";
export default function (r, t, e, g) {
  const y = "stackTraceLimit";
  const b = g ? 2 : 1;
  const m = r.split(".");
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
    var E = t(function (r, t) {
      const e = l(g ? t : r, undefined);
      const n = g ? new x(r) : new x();
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
      } catch (r) {}
    }
    return E;
  }
}
