import n from "./module-Y_17.js";
import { f } from "./module-t_17.js";
import i from "./module-nX_16.js";
import a from "./module-sA_16.js";
export default function (t, r, e, s) {
  if (!s) {
    s = {};
  }
  let s_enumerable = s.enumerable;
  const c = s.name !== undefined ? s.name : r;
  if (n(e)) {
    i(e, c, s);
  }
  if (s.global) {
    if (s_enumerable) {
      t[r] = e;
    } else {
      a(r, e);
    }
  } else {
    try {
      if (s.unsafe) {
        if (t[r]) {
          s_enumerable = true;
        }
      } else {
        delete t[r];
      }
    } catch (t) {}
    if (s_enumerable) {
      t[r] = e;
    } else {
      f(t, r, {
        value: e,
        enumerable: false,
        configurable: !s.nonConfigurable,
        writable: !s.nonWritable,
      });
    }
  }
  return t;
}
