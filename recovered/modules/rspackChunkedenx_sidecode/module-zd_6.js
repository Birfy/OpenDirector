import n from "./module-WG_2_6.js";
import o from "./module-M_2_6.js";
import a from "./module-aq_6.js";
import i from "./module-Gz_6.js";
import s from "./module-se_7.js";
import c from "./module-yM_7.js";
import u from "./module-F4_7.js";
import f from "./module-er_6.js";
import l from "./module-wz_7.js";
import h from "./module-Qn_7.js";
export default function (t) {
  let r;
  let e;
  let v;
  let d;
  let g;
  let y;
  const m = a(t);
  const b = c(this);
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
    for (e = b ? new this() : []; !(v = o(g, d)).done; S++) {
      y = x ? i(d, w, [v.value, S], true) : v.value;
      f(e, S, y);
    }
  } else {
    r = u(m);
    for (e = b ? new this(r) : Array(r); r > S; S++) {
      y = x ? w(m[S], S) : m[S];
      f(e, S, y);
    }
  }
  e.length = S;
  return e;
}
