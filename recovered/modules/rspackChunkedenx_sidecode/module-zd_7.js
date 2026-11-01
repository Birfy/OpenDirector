import n from "./module-WG_2_7.js";
import o from "./module-M_2_7.js";
import i from "./module-aq_7.js";
import a from "./module-Gz_7.js";
import s from "./module-se_8.js";
import u from "./module-yM_8.js";
import c from "./module-F4_8.js";
import f from "./module-er_7.js";
import l from "./module-wz_8.js";
import h from "./module-Qn_8.js";
export default function (r) {
  let t;
  let e;
  let p;
  let d;
  let g;
  let y;
  const m = i(r);
  const b = u(this);
  const arguments_length = arguments.length;
  let w = arguments_length > 1 ? arguments[1] : undefined;
  const x = w !== undefined;
  if (x) {
    w = n(w, arguments_length > 2 ? arguments[2] : undefined);
  }
  const E = h(m);
  let S = 0;
  if (E && !(this === Array && s(E))) {
    g = (d = l(m, E)).next;
    for (e = b ? new this() : []; !(p = o(g, d)).done; S++) {
      y = x ? a(d, w, [p.value, S], true) : p.value;
      f(e, S, y);
    }
  } else {
    t = c(m);
    for (e = b ? new this(t) : Array(t); t > S; S++) {
      y = x ? w(m[S], S) : m[S];
      f(e, S, y);
    }
  }
  e.length = S;
  return e;
}
