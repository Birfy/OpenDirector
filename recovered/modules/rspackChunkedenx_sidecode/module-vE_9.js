import n from "./module-Y_10.js";
import { f } from "./module-t_10.js";
import i from "./module-nX_9.js";
import a from "./module-sA_9.js";
export default function (t, e, r, s) {
  if (!s) {
    s = {};
  }
  let s_enumerable = s.enumerable;
  const c = s.name !== undefined ? s.name : e;
  if (n(r)) {
    i(r, c, s);
  }
  if (s.global) {
    if (s_enumerable) {
      t[e] = r;
    } else {
      a(e, r);
    }
  } else {
    try {
      if (s.unsafe) {
        if (t[e]) {
          s_enumerable = true;
        }
      } else {
        delete t[e];
      }
    } catch (t) {}
    if (s_enumerable) {
      t[e] = r;
    } else {
      f(t, e, {
        value: r,
        enumerable: false,
        configurable: !s.nonConfigurable,
        writable: !s.nonWritable,
      });
    }
  }
  return t;
}
