import n from "./module-WG_2_19.js";
import o from "./module-M_2_19.js";
import i from "./module-aq_19.js";
import a from "./module-Gz_19.js";
import s from "./module-se_20.js";
import u from "./module-yM_20.js";
import c from "./module-F4_20.js";
import f from "./module-er_19.js";
import l from "./module-wz_20.js";
import h from "./module-Qn_20.js";
export default function (r) {
  let t;
  let e;
  let p;
  let d;
  let g;
  let y;
  const b = i(r);
  const m = u(this);
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
    t = c(b);
    for (e = m ? new this(t) : Array(t); t > E; E++) {
      y = w ? x(b[E], E) : b[E];
      f(e, E, y);
    }
  }
  e.length = E;
  return e;
}
