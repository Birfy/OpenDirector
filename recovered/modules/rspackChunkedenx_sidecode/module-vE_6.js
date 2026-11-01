import n from "./module-Y_7.js";
import { f } from "./module-t_7.js";
import a from "./module-nX_6.js";
import i from "./module-sA_6.js";
export default function (t, r, e, s) {
  if (!s) {
    s = {};
  }
  let s_enumerable = s.enumerable;
  const u = s.name !== undefined ? s.name : r;
  if (n(e)) {
    a(e, u, s);
  }
  if (s.global) {
    if (s_enumerable) {
      t[r] = e;
    } else {
      i(r, e);
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
