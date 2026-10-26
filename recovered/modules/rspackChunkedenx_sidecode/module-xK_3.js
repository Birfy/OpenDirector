import n from "./module-WG_2_3.js";
import i from "./module-M_2_3.js";
import o from "./module-d_4.js";
import s from "./module-Z_2_3.js";
import a from "./module-se_4.js";
import u from "./module-F4_4.js";
import c from "./module-e_3.js";
import f from "./module-wz_4.js";
import h from "./module-Qn_4.js";
import l from "./module-jX_4.js";
const p = function (t, r) {
  this.stopped = t;
  this.result = r;
};
const p_prototype = p.prototype;
export default function (t, r, e) {
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
  const I = n(r, S);
  const k = function (t) {
    if (g) {
      l(g, "normal", t);
    }
    return new p(true, t);
  };
  const T = (t) => {
    if (E) {
      o(t);
      if (M) {
        return I(t[0], t[1], k);
      }
      return I(t[0], t[1]);
    }
    if (M) {
      return I(t, k);
    }
    return I(t);
  };
  if (O) {
    g = t.iterator;
  } else if (R) {
    g = t;
  } else {
    if (!(y = h(t))) {
      throw TypeError(s(t) + " is not iterable");
    }
    if (a(y)) {
      b = 0;
      for (m = u(t); m > b; b++) {
        if ((A = T(t[b])) && c(p_prototype, A)) {
          return A;
        }
      }
      return new p(false);
    }
    g = f(t, y);
  }
  for (x = O ? t.next : g.next; !(w = i(x, g)).done;) {
    try {
      A = T(w.value);
    } catch (error) {
      l(g, "throw", error);
    }
    if (typeof A === "object" && A && c(p_prototype, A)) {
      return A;
    }
  }
  return new p(false);
}
