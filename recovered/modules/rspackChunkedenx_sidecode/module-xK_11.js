import n from "./module-WG_2_11.js";
import o from "./module-M_2_11.js";
import i from "./module-d_12.js";
import a from "./module-Z_2_11.js";
import s from "./module-se_12.js";
import u from "./module-F4_12.js";
import c from "./module-e_11.js";
import f from "./module-wz_12.js";
import h from "./module-Qn_12.js";
import l from "./module-jX_12.js";
const p = function (r, t) {
  this.stopped = r;
  this.result = t;
};
const p_prototype = p.prototype;
export default function (r, t, e) {
  let g;
  let y;
  let b;
  let m;
  let A;
  let x;
  let w;
  const S = e && e.that;
  const E = !!(e && e.AS_ENTRIES);
  const O = !!(e && e.IS_RECORD);
  const R = !!(e && e.IS_ITERATOR);
  const M = !!(e && e.INTERRUPTED);
  const I = n(t, S);
  const k = function (r) {
    if (g) {
      l(g, "normal", r);
    }
    return new p(true, r);
  };
  const j = (r) => {
    if (E) {
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
    if (!(y = h(r))) {
      throw TypeError(a(r) + " is not iterable");
    }
    if (s(y)) {
      b = 0;
      for (m = u(r); m > b; b++) {
        if ((A = j(r[b])) && c(p_prototype, A)) {
          return A;
        }
      }
      return new p(false);
    }
    g = f(r, y);
  }
  for (x = O ? r.next : g.next; !(w = o(x, g)).done;) {
    try {
      A = j(w.value);
    } catch (error) {
      l(g, "throw", error);
    }
    if (typeof A === "object" && A && c(p_prototype, A)) {
      return A;
    }
  }
  return new p(false);
}
