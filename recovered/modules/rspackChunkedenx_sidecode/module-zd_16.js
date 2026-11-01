import n from "./module-WG_2_16.js";
import o from "./module-M_2_16.js";
import i from "./module-aq_16.js";
import a from "./module-Gz_16.js";
import s from "./module-se_17.js";
import u from "./module-yM_17.js";
import c from "./module-F4_17.js";
import f from "./module-er_16.js";
import l from "./module-wz_17.js";
import h from "./module-Qn_17.js";
export default function (t) {
  let r;
  let e;
  let p;
  let d;
  let g;
  let y;
  const m = i(t);
  const b = u(this);
  const arguments_length = arguments.length;
  let x = arguments_length > 1 ? arguments[1] : undefined;
  const w = x !== undefined;
  if (w) {
    x = n(x, arguments_length > 2 ? arguments[2] : undefined);
  }
  const S = h(m);
  let E = 0;
  if (S && !(this === Array && s(S))) {
    g = (d = l(m, S)).next;
    for (e = b ? new this() : []; !(p = o(g, d)).done; E++) {
      y = w ? a(d, x, [p.value, E], true) : p.value;
      f(e, E, y);
    }
  } else {
    r = c(m);
    for (e = b ? new this(r) : Array(r); r > E; E++) {
      y = w ? x(m[E], E) : m[E];
      f(e, E, y);
    }
  }
  e.length = E;
  return e;
}
