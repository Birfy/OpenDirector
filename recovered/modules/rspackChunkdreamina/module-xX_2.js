import n from "./module-r.js";
import { f } from "./module-R_2.js";
import i from "./module-q_2.js";
import a from "./module-yo.js";
export default function (e, t, r, s) {
  if (!s) {
    s = {};
  }
  let s_enumerable = s.enumerable;
  const c = s.name !== undefined ? s.name : t;
  if (n(r)) {
    i(r, c, s);
  }
  if (s.global) {
    if (s_enumerable) {
      e[t] = r;
    } else {
      a(t, r);
    }
  } else {
    try {
      if (s.unsafe) {
        if (e[t]) {
          s_enumerable = true;
        }
      } else {
        delete e[t];
      }
    } catch (e) {}
    if (s_enumerable) {
      e[t] = r;
    } else {
      f(e, t, {
        value: r,
        enumerable: false,
        configurable: !s.nonConfigurable,
        writable: !s.nonWritable,
      });
    }
  }
  return e;
}
