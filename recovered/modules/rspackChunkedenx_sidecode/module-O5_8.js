import n from "./module-YR_8.js";
import i from "./module-D_2_8.js";
import o from "./module-h_9.js";
import s from "./module-e_8.js";
import a from "./module-d4_8.js";
import u from "./module-bE_9.js";
import c from "./module-T_2_8.js";
import f from "./module-JD_9.js";
import h from "./module-Yw_8.js";
import l from "./module-je_8.js";
import v from "./module-LV_8.js";
import p from "./module-r9_8.js";
import d from "./module-N_8.js";
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
