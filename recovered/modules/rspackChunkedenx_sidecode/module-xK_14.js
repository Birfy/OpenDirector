import n from "./module-WG_2_14.js";
import o from "./module-M_2_14.js";
import i from "./module-d_15.js";
import a from "./module-Z_2_14.js";
import s from "./module-se_15.js";
import c from "./module-F4_15.js";
import u from "./module-e_14.js";
import f from "./module-wz_15.js";
import l from "./module-Qn_15.js";
import h from "./module-jX_15.js";
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
      h(g, "normal", t);
    }
    return new p(true, t);
  };
  const j = (t) => {
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
      b = 0;
      for (m = c(t); m > b; b++) {
        if ((A = j(t[b])) && u(p_prototype, A)) {
          return A;
        }
      }
      return new p(false);
    }
    g = f(t, y);
  }
  for (x = O ? t.next : g.next; !(w = o(x, g)).done;) {
    try {
      A = j(w.value);
    } catch (error) {
      h(g, "throw", error);
    }
    if (typeof A === "object" && A && u(p_prototype, A)) {
      return A;
    }
  }
  return new p(false);
}
