import n from "./module-WG_2_14.js";
import o from "./module-M_2_14.js";
import i from "./module-aq_14.js";
import a from "./module-Gz_14.js";
import s from "./module-se_15.js";
import c from "./module-yM_15.js";
import u from "./module-F4_15.js";
import f from "./module-er_14.js";
import l from "./module-wz_15.js";
import h from "./module-Qn_15.js";
export default function (t) {
  let r;
  let e;
  let p;
  let d;
  let g;
  let y;
  const b = i(t);
  const m = c(this);
  const arguments_length = arguments.length;
  let x = arguments_length > 1 ? arguments[1] : undefined;
  const w = x !== undefined;
  if (w) {
    x = n(x, arguments_length > 2 ? arguments[2] : undefined);
  }
  const S = h(b);
  let E = 0;
  if (S && !(this === Array && s(S))) {
    g = (d = l(b, S)).next;
    for (e = m ? new this() : []; !(p = o(g, d)).done; E++) {
      y = w ? a(d, x, [p.value, E], true) : p.value;
      f(e, E, y);
    }
  } else {
    r = u(b);
    for (e = m ? new this(r) : Array(r); r > E; E++) {
      y = w ? x(b[E], E) : b[E];
      f(e, E, y);
    }
  }
  e.length = E;
  return e;
}
