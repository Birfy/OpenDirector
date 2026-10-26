import n from "./module-YR_7.js";
import o from "./module-D_2_7.js";
import i from "./module-h_8.js";
import a from "./module-e_7.js";
import s from "./module-d4_7.js";
import u from "./module-bE_8.js";
import c from "./module-T_2_7.js";
import f from "./module-JD_8.js";
import l from "./module-Yw_7.js";
import h from "./module-je_7.js";
import v from "./module-LV_7.js";
import p from "./module-r9_7.js";
import d from "./module-N_7.js";
export default function (r, t, e, g) {
  const y = "stackTraceLimit";
  const m = g ? 2 : 1;
  const b = r.split(".");
  const A = b[b.length - 1];
  const w = n.apply(null, b);
  if (w) {
    const x = w.prototype;
    if (!d && o(x, "cause")) {
      delete x.cause;
    }
    if (!e) {
      return w;
    }
    const E = n("Error");
    var S = t(function (r, t) {
      const e = l(g ? t : r, undefined);
      const n = g ? new w(r) : new w();
      if (e !== undefined) {
        i(n, "message", e);
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
    if (A !== "Error") {
      if (s) {
        s(S, E);
      } else {
        u(S, E, {
          name: true,
        });
      }
    } else if (p && y in w) {
      c(S, w, y);
      c(S, w, "prepareStackTrace");
    }
    u(S, w);
    if (!d) {
      try {
        if (x.name !== A) {
          i(x, "name", A);
        }
        x.constructor = S;
      } catch (r) {}
    }
    return S;
  }
}
