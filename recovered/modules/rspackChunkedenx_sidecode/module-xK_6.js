import n from "./module-WG_2_6.js";
import o from "./module-M_2_6.js";
import a from "./module-d_7.js";
import i from "./module-Z_2_6.js";
import s from "./module-se_7.js";
import c from "./module-F4_7.js";
import u from "./module-e_6.js";
import f from "./module-wz_7.js";
import l from "./module-Qn_7.js";
import h from "./module-jX_7.js";
const v = function (t, r) {
  this.stopped = t;
  this.result = r;
};
const v_prototype = v.prototype;
export default function (t, r, e) {
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
  const I = n(r, E);
  const k = function (t) {
    if (g) {
      h(g, "normal", t);
    }
    return new v(true, t);
  };
  const T = (t) => {
    if (S) {
      a(t);
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
      throw TypeError(i(t) + " is not iterable");
    }
    if (s(y)) {
      m = 0;
      for (b = c(t); b > m; m++) {
        if ((A = T(t[m])) && u(v_prototype, A)) {
          return A;
        }
      }
      return new v(false);
    }
    g = f(t, y);
  }
  for (w = O ? t.next : g.next; !(x = o(w, g)).done;) {
    try {
      A = T(x.value);
    } catch (error) {
      h(g, "throw", error);
    }
    if (typeof A === "object" && A && u(v_prototype, A)) {
      return A;
    }
  }
  return new v(false);
}
