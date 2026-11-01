import n from "./module-Y_12.js";
import { f } from "./module-t_12.js";
import i from "./module-nX_11.js";
import a from "./module-sA_11.js";
export default function (r, t, e, s) {
  if (!s) {
    s = {};
  }
  let s_enumerable = s.enumerable;
  const c = s.name !== undefined ? s.name : t;
  if (n(e)) {
    i(e, c, s);
  }
  if (s.global) {
    if (s_enumerable) {
      r[t] = e;
    } else {
      a(t, e);
    }
  } else {
    try {
      if (s.unsafe) {
        if (r[t]) {
          s_enumerable = true;
        }
      } else {
        delete r[t];
      }
    } catch (r) {}
    if (s_enumerable) {
      r[t] = e;
    } else {
      f(r, t, {
        value: e,
        enumerable: false,
        configurable: !s.nonConfigurable,
        writable: !s.nonWritable,
      });
    }
  }
  return r;
}
