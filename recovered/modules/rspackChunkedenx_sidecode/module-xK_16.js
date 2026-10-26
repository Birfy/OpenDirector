import n from "./module-WG_2_16.js";
import o from "./module-M_2_16.js";
import i from "./module-d_17.js";
import a from "./module-Z_2_16.js";
import s from "./module-se_17.js";
import u from "./module-F4_17.js";
import c from "./module-e_16.js";
import f from "./module-wz_17.js";
import l from "./module-Qn_17.js";
import h from "./module-jX_17.js";
const p = function (t, r) {
  this.stopped = t;
  this.result = r;
};
const p_prototype = p.prototype;
export default function (t, r, e) {
  let g;
  let y;
  let m;
  let b;
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
      h(g, "normal", t);
    }
    return new p(true, t);
  };
  const T = (t) => {
    if (E) {
      i(t);
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
    if (!(y = l(t))) {
      throw TypeError(a(t) + " is not iterable");
    }
    if (s(y)) {
      m = 0;
      for (b = u(t); b > m; m++) {
        if ((A = T(t[m])) && c(p_prototype, A)) {
          return A;
        }
      }
      return new p(false);
    }
    g = f(t, y);
  }
  for (x = O ? t.next : g.next; !(w = o(x, g)).done;) {
    try {
      A = T(w.value);
    } catch (error) {
      h(g, "throw", error);
    }
    if (typeof A === "object" && A && c(p_prototype, A)) {
      return A;
    }
  }
  return new p(false);
}
