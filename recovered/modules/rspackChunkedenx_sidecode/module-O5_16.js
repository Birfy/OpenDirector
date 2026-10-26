import n from "./module-YR_16.js";
import o from "./module-D_2_16.js";
import i from "./module-h_17.js";
import a from "./module-e_16.js";
import s from "./module-d4_16.js";
import u from "./module-bE_17.js";
import c from "./module-T_2_16.js";
import f from "./module-JD_17.js";
import l from "./module-Yw_16.js";
import h from "./module-je_16.js";
import v from "./module-LV_16.js";
import p from "./module-r9_16.js";
import d from "./module-N_16.js";
export default function (t, r, e, g) {
  const y = "stackTraceLimit";
  const m = g ? 2 : 1;
  const b = t.split(".");
  const A = b[b.length - 1];
  const x = n.apply(null, b);
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
      if (arguments.length > m) {
        h(n, arguments[m]);
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
