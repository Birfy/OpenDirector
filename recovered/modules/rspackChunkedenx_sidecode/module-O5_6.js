import n from "./module-YR_6.js";
import o from "./module-D_2_6.js";
import a from "./module-h_7.js";
import i from "./module-e_6.js";
import s from "./module-d4_6.js";
import c from "./module-bE_7.js";
import u from "./module-T_2_6.js";
import f from "./module-JD_7.js";
import l from "./module-Yw_6.js";
import h from "./module-je_6.js";
import p from "./module-LV_6.js";
import v from "./module-r9_6.js";
import d from "./module-N_6.js";
export default function (t, r, e, g) {
  const y = "stackTraceLimit";
  const m = g ? 2 : 1;
  const b = t.split(".");
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
    var S = r(function (t, r) {
      const e = l(g ? r : t, undefined);
      const n = g ? new w(t) : new w();
      if (e !== undefined) {
        a(n, "message", e);
      }
      p(n, S, n.stack, 2);
      if (this && i(x, this)) {
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
        c(S, E, {
          name: true,
        });
      }
    } else if (v && y in w) {
      u(S, w, y);
      u(S, w, "prepareStackTrace");
    }
    c(S, w);
    if (!d) {
      try {
        if (x.name !== A) {
          a(x, "name", A);
        }
        x.constructor = S;
      } catch (t) {}
    }
    return S;
  }
}
