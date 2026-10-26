import n from "./module-WG_2_2.js";
import i from "./module-M_2_2.js";
import o from "./module-aq_2.js";
import s from "./module-Gz_2.js";
import a from "./module-se_3.js";
import u from "./module-yM_3.js";
import c from "./module-F4_3.js";
import f from "./module-er_2.js";
import h from "./module-wz_3.js";
import l from "./module-Qn_3.js";
export default function (t) {
  let r;
  let e;
  let p;
  let d;
  let g;
  let y;
  const b = o(t);
  const m = u(this);
  const arguments_length = arguments.length;
  let x = arguments_length > 1 ? arguments[1] : undefined;
  const w = x !== undefined;
  if (w) {
    x = n(x, arguments_length > 2 ? arguments[2] : undefined);
  }
  const S = l(b);
  let E = 0;
  if (S && !(this === Array && a(S))) {
    g = (d = h(b, S)).next;
    for (e = m ? new this() : []; !(p = i(g, d)).done; E++) {
      y = w ? s(d, x, [p.value, E], true) : p.value;
      f(e, E, y);
    }
  } else {
    r = c(b);
    for (e = m ? new this(r) : Array(r); r > E; E++) {
      y = w ? x(b[E], E) : b[E];
      f(e, E, y);
    }
  }
  e.length = E;
  return e;
}
