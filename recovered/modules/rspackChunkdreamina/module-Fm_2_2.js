import n from "./module-fM_3.js";
import o from "./module-p3.js";
import i from "./module-IF_2.js";
import a from "./module-j_2.js";
import s from "./module-Ow_3.js";
import u from "./module-OG_2.js";
import c from "./module-V8.js";
import f from "./module-jn_2.js";
import l from "./module-UZ_3.js";
import p from "./module-tU.js";
const v = function (e, t) {
  this.stopped = e;
  this.result = t;
};
const v_prototype = v.prototype;
export default function (e, t, r) {
  let g;
  let y;
  let m;
  let x;
  let b;
  let w;
  let A;
  const E = r && r.that;
  const j = !!(r && r.AS_ENTRIES);
  const I = !!(r && r.IS_RECORD);
  const R = !!(r && r.IS_ITERATOR);
  const z = !!(r && r.INTERRUPTED);
  const O = n(t, E);
  const S = function (e) {
    if (g) {
      p(g, "normal", e);
    }
    return new v(true, e);
  };
  const _ = (e) => {
    if (j) {
      i(e);
      if (z) {
        return O(e[0], e[1], S);
      }
      return O(e[0], e[1]);
    }
    if (z) {
      return O(e, S);
    }
    return O(e);
  };
  if (I) {
    g = e.iterator;
  } else if (R) {
    g = e;
  } else {
    if (!(y = l(e))) {
      throw TypeError(a(e) + " is not iterable");
    }
    if (s(y)) {
      m = 0;
      for (x = u(e); x > m; m++) {
        if ((b = _(e[m])) && c(v_prototype, b)) {
          return b;
        }
      }
      return new v(false);
    }
    g = f(e, y);
  }
  for (w = I ? e.next : g.next; !(A = o(w, g)).done;) {
    try {
      b = _(A.value);
    } catch (error) {
      p(g, "throw", error);
    }
    if (typeof b === "object" && b && c(v_prototype, b)) {
      return b;
    }
  }
  return new v(false);
}
