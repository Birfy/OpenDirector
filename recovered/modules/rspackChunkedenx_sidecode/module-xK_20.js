import n from "./module-WG_2_20.js";
import o from "./module-M_2_20.js";
import i from "./module-d_21.js";
import a from "./module-Z_2_20.js";
import s from "./module-se_21.js";
import c from "./module-F4_21.js";
import u from "./module-e_20.js";
import f from "./module-wz_21.js";
import l from "./module-Qn_21.js";
import h from "./module-jX_21.js";
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
  let w;
  let A;
  let x;
  const S = e && e.that;
  const E = !!(e && e.AS_ENTRIES);
  const O = !!(e && e.IS_RECORD);
  const R = !!(e && e.IS_ITERATOR);
  const M = !!(e && e.INTERRUPTED);
  const I = n(r, S);
  const _ = function (t) {
    if (g) {
      h(g, "normal", t);
    }
    return new p(true, t);
  };
  const k = (t) => {
    if (E) {
      i(t);
      if (M) {
        return I(t[0], t[1], _);
      }
      return I(t[0], t[1]);
    }
    if (M) {
      return I(t, _);
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
      for (b = c(t); b > m; m++) {
        if ((w = k(t[m])) && u(p_prototype, w)) {
          return w;
        }
      }
      return new p(false);
    }
    g = f(t, y);
  }
  for (A = O ? t.next : g.next; !(x = o(A, g)).done;) {
    try {
      w = k(x.value);
    } catch (error) {
      h(g, "throw", error);
    }
    if (typeof w === "object" && w && u(p_prototype, w)) {
      return w;
    }
  }
  return new p(false);
}
