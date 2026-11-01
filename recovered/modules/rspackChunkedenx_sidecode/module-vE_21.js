import n from "./module-Y_22.js";
import { f } from "./module-t_22.js";
import o from "./module-nX_21.js";
import s from "./module-sA_21.js";
export default function (t, r, e, a) {
  if (!a) {
    a = {};
  }
  let a_enumerable = a.enumerable;
  const c = a.name !== undefined ? a.name : r;
  if (n(e)) {
    o(e, c, a);
  }
  if (a.global) {
    if (a_enumerable) {
      t[r] = e;
    } else {
      s(r, e);
    }
  } else {
    try {
      if (a.unsafe) {
        if (t[r]) {
          a_enumerable = true;
        }
      } else {
        delete t[r];
      }
    } catch (t) {}
    if (a_enumerable) {
      t[r] = e;
    } else {
      f(t, r, {
        value: e,
        enumerable: false,
        configurable: !a.nonConfigurable,
        writable: !a.nonWritable,
      });
    }
  }
  return t;
}
