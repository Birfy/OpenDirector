import n from "./module-WG_2.js";
import o from "./module-M_2.js";
import i from "./module-aq.js";
import a from "./module-Gz.js";
import s from "./module-se.js";
import u from "./module-yM.js";
import c from "./module-F4.js";
import f from "./module-er.js";
import h from "./module-wz.js";
import l from "./module-Qn.js";
export default function (t) {
  let r;
  let e;
  let p;
  let d;
  let g;
  let y;
  const b = i(t);
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
    r = c(b);
    for (e = m ? new this(r) : Array(r); r > E; E++) {
      y = w ? x(b[E], E) : b[E];
      f(e, E, y);
    }
  }
  e.length = E;
  return e;
}
