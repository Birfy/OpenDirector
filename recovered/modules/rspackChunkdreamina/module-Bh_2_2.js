import n from "./module-Y.js";
import o from "./module-h.js";
import i from "./module-z3.js";
import a from "./module-V8.js";
import s from "./module-P.js";
import u from "./module-cg.js";
import c from "./module-go_3.js";
import f from "./module-U_2.js";
import l from "./module-Gq_3.js";
import p from "./module-RC.js";
import h from "./module-JM_2.js";
import v from "./module-F.js";
import d from "./module-K.js";
export default function (e, t, r, g) {
  const y = "stackTraceLimit";
  const m = g ? 2 : 1;
  const x = e.split(".");
  const b = x[x.length - 1];
  const w = n.apply(null, x);
  if (w) {
    const A = w.prototype;
    if (!d && o(A, "cause")) {
      delete A.cause;
    }
    if (!r) {
      return w;
    }
    const E = n("Error");
    var j = t(function (e, t) {
      const r = l(g ? t : e, undefined);
      const n = g ? new w(e) : new w();
      if (r !== undefined) {
        i(n, "message", r);
      }
      h(n, j, n.stack, 2);
      if (this && a(A, this)) {
        f(n, this, j);
      }
      if (arguments.length > m) {
        p(n, arguments[m]);
      }
      return n;
    });
    j.prototype = A;
    if (b !== "Error") {
      if (s) {
        s(j, E);
      } else {
        u(j, E, {
          name: true,
        });
      }
    } else if (v && y in w) {
      c(j, w, y);
      c(j, w, "prepareStackTrace");
    }
    u(j, w);
    if (!d) {
      try {
        if (A.name !== b) {
          i(A, "name", b);
        }
        A.constructor = j;
      } catch (e) {}
    }
    return j;
  }
}
