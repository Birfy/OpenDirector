import n from "./module-WG_2_20.js";
import o from "./module-M_2_20.js";
import i from "./module-aq_20.js";
import a from "./module-Gz_20.js";
import s from "./module-se_21.js";
import c from "./module-yM_21.js";
import u from "./module-F4_21.js";
import f from "./module-er_20.js";
import l from "./module-wz_21.js";
import h from "./module-Qn_21.js";
export default function (t) {
  let r;
  let e;
  let p;
  let d;
  let g;
  let y;
  const m = i(t);
  const b = c(this);
  const arguments_length = arguments.length;
  let A = arguments_length > 1 ? arguments[1] : undefined;
  const x = A !== undefined;
  if (x) {
    A = n(A, arguments_length > 2 ? arguments[2] : undefined);
  }
  const S = h(m);
  let E = 0;
  if (S && !(this === Array && s(S))) {
    g = (d = l(m, S)).next;
    for (e = b ? new this() : []; !(p = o(g, d)).done; E++) {
      y = x ? a(d, A, [p.value, E], true) : p.value;
      f(e, E, y);
    }
  } else {
    r = u(m);
    for (e = b ? new this(r) : Array(r); r > E; E++) {
      y = x ? A(m[E], E) : m[E];
      f(e, E, y);
    }
  }
  e.length = E;
  return e;
}
