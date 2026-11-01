import n from "./module-WG_2_9.js";
import o from "./module-M_2_9.js";
import i from "./module-aq_9.js";
import a from "./module-Gz_9.js";
import s from "./module-se_10.js";
import u from "./module-yM_10.js";
import c from "./module-F4_10.js";
import f from "./module-er_9.js";
import l from "./module-wz_10.js";
import h from "./module-Qn_10.js";
export default function (t) {
  let e;
  let r;
  let d;
  let p;
  let g;
  let y;
  const m = i(t);
  const b = u(this);
  const arguments_length = arguments.length;
  let A = arguments_length > 1 ? arguments[1] : undefined;
  const x = A !== undefined;
  if (x) {
    A = n(A, arguments_length > 2 ? arguments[2] : undefined);
  }
  const E = h(m);
  let S = 0;
  if (E && !(this === Array && s(E))) {
    g = (p = l(m, E)).next;
    for (r = b ? new this() : []; !(d = o(g, p)).done; S++) {
      y = x ? a(p, A, [d.value, S], true) : d.value;
      f(r, S, y);
    }
  } else {
    e = c(m);
    for (r = b ? new this(e) : Array(e); e > S; S++) {
      y = x ? A(m[S], S) : m[S];
      f(r, S, y);
    }
  }
  r.length = S;
  return r;
}
