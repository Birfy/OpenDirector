import n from "./module-WG_2_7.js";
import o from "./module-M_2_7.js";
import i from "./module-d_8.js";
import a from "./module-Z_2_7.js";
import s from "./module-se_8.js";
import u from "./module-F4_8.js";
import c from "./module-e_7.js";
import f from "./module-wz_8.js";
import l from "./module-Qn_8.js";
import h from "./module-jX_8.js";
const p = function (r, t) {
  this.stopped = r;
  this.result = t;
};
const p_prototype = p.prototype;
export default function (r, t, e) {
  let g;
  let y;
  let m;
  let b;
  let A;
  let w;
  let x;
  const E = e && e.that;
  const S = !!(e && e.AS_ENTRIES);
  const O = !!(e && e.IS_RECORD);
  const R = !!(e && e.IS_ITERATOR);
  const M = !!(e && e.INTERRUPTED);
  const I = n(t, E);
  const k = function (r) {
    if (g) {
      h(g, "normal", r);
    }
    return new p(true, r);
  };
  const T = (r) => {
    if (S) {
      i(r);
      if (M) {
        return I(r[0], r[1], k);
      }
      return I(r[0], r[1]);
    }
    if (M) {
      return I(r, k);
    }
    return I(r);
  };
  if (O) {
    g = r.iterator;
  } else if (R) {
    g = r;
  } else {
    if (!(y = l(r))) {
      throw TypeError(a(r) + " is not iterable");
    }
    if (s(y)) {
      m = 0;
      for (b = u(r); b > m; m++) {
        if ((A = T(r[m])) && c(p_prototype, A)) {
          return A;
        }
      }
      return new p(false);
    }
    g = f(r, y);
  }
  for (w = O ? r.next : g.next; !(x = o(w, g)).done;) {
    try {
      A = T(x.value);
    } catch (error) {
      h(g, "throw", error);
    }
    if (typeof A === "object" && A && c(p_prototype, A)) {
      return A;
    }
  }
  return new p(false);
}
