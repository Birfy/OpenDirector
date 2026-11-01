import n from "./module-WG_2_18.js";
import o from "./module-M_2_18.js";
import i from "./module-aq_18.js";
import a from "./module-Gz_18.js";
import s from "./module-se_19.js";
import u from "./module-yM_19.js";
import c from "./module-F4_19.js";
import f from "./module-er_18.js";
import h from "./module-wz_19.js";
import l from "./module-Qn_19.js";
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
  const S = l(b);
  let E = 0;
  if (S && !(this === Array && s(S))) {
    g = (d = h(b, S)).next;
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
