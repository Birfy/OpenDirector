import n from "./module-YR.js";
import o from "./module-D_2.js";
import i from "./module-h.js";
import a from "./module-e.js";
import s from "./module-d4.js";
import u from "./module-bE.js";
import c from "./module-T_2.js";
import f from "./module-JD.js";
import h from "./module-Yw.js";
import l from "./module-je.js";
import v from "./module-LV.js";
import p from "./module-r9.js";
import d from "./module-N.js";
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
      const e = h(g ? r : t, undefined);
      const n = g ? new x(t) : new x();
      if (e !== undefined) {
        i(n, "message", e);
      }
      v(n, E, n.stack, 2);
      if (this && a(w, this)) {
        f(n, this, E);
      }
      if (arguments.length > b) {
        l(n, arguments[b]);
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
