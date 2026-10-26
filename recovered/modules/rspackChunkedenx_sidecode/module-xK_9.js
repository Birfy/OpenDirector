import n from "./module-WG_2_9.js";
import o from "./module-M_2_9.js";
import i from "./module-d_10.js";
import a from "./module-Z_2_9.js";
import s from "./module-se_10.js";
import u from "./module-F4_10.js";
import c from "./module-e_9.js";
import f from "./module-wz_10.js";
import l from "./module-Qn_10.js";
import h from "./module-jX_10.js";
const d = function (t, e) {
  this.stopped = t;
  this.result = e;
};
const d_prototype = d.prototype;
export default function (t, e, r) {
  let g;
  let y;
  let m;
  let b;
  let w;
  let A;
  let x;
  const E = r && r.that;
  const S = !!(r && r.AS_ENTRIES);
  const O = !!(r && r.IS_RECORD);
  const _ = !!(r && r.IS_ITERATOR);
  const R = !!(r && r.INTERRUPTED);
  const M = n(e, E);
  const I = function (t) {
    if (g) {
      h(g, "normal", t);
    }
    return new d(true, t);
  };
  const T = (t) => {
    if (S) {
      i(t);
      if (R) {
        return M(t[0], t[1], I);
      }
      return M(t[0], t[1]);
    }
    if (R) {
      return M(t, I);
    }
    return M(t);
  };
  if (O) {
    g = t.iterator;
  } else if (_) {
    g = t;
  } else {
    if (!(y = l(t))) {
      throw TypeError(a(t) + " is not iterable");
    }
    if (s(y)) {
      m = 0;
      for (b = u(t); b > m; m++) {
        if ((w = T(t[m])) && c(d_prototype, w)) {
          return w;
        }
      }
      return new d(false);
    }
    g = f(t, y);
  }
  for (A = O ? t.next : g.next; !(x = o(A, g)).done;) {
    try {
      w = T(x.value);
    } catch (error) {
      h(g, "throw", error);
    }
    if (typeof w === "object" && w && c(d_prototype, w)) {
      return w;
    }
  }
  return new d(false);
}
