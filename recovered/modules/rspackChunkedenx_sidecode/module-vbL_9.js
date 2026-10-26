import n from "./module-M_2_9.js";
import o from "./module-Za_9.js";
import i from "./module-h_10.js";
import a from "./module-dFV_9.js";
import s from "./module-lN_9.js";
import u from "./module-b_9.js";
import c from "./module-C_10.js";
import _f from "./module-A5_9.js";
import l from "./module-V3_9.js";
import h from "./module-jX_10.js";
const _f_IteratorPrototype = _f.IteratorPrototype;
const v = s("toStringTag");
const d = "IteratorHelper";
const p = "WrapForValidIterator";
const u_set = u.set;
const y = (t) => {
  const e = u.getterFor(t ? p : d);
  return a(o(_f_IteratorPrototype), {
    next: function () {
      const r = e(this);
      if (t) {
        return r.nextHandler();
      }
      try {
        const n = r.done ? undefined : r.nextHandler();
        return l(n, r.done);
      } catch (error) {
        r.done = true;
        throw error;
      }
    },
    return: function () {
      const r = e(this);
      const r_iterator = r.iterator;
      r.done = true;
      if (t) {
        const i = c(r_iterator, "return");
        if (i) {
          return n(i, r_iterator);
        }
        return l(undefined, true);
      }
      if (r.inner) {
        try {
          h(r.inner.iterator, "normal");
        } catch (error) {
          return h(r_iterator, "throw", error);
        }
      }
      h(r_iterator, "normal");
      return l(undefined, true);
    },
  });
};
const m = y(true);
const b = y(false);
i(b, v, "Iterator Helper");
export default function (t, e) {
  const r = function (r, n) {
    if (n) {
      n.iterator = r.iterator;
      n.next = r.next;
    } else {
      n = r;
    }
    n.type = e ? p : d;
    n.nextHandler = t;
    n.counter = 0;
    n.done = false;
    u_set(this, n);
  };
  r.prototype = e ? m : b;
  return r;
}
