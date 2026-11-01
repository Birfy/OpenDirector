import n from "./module-M_2_16.js";
import o from "./module-Za_16.js";
import i from "./module-h_17.js";
import a from "./module-dFV_16.js";
import s from "./module-lN_16.js";
import u from "./module-b_16.js";
import c from "./module-C_17.js";
import _f from "./module-A5_16.js";
import l from "./module-V3_16.js";
import h from "./module-jX_17.js";
const _f_IteratorPrototype = _f.IteratorPrototype;
const v = s("toStringTag");
const p = "IteratorHelper";
const d = "WrapForValidIterator";
const u_set = u.set;
const y = (t) => {
  const r = u.getterFor(t ? d : p);
  return a(o(_f_IteratorPrototype), {
    next: function () {
      const e = r(this);
      if (t) {
        return e.nextHandler();
      }
      try {
        const n = e.done ? undefined : e.nextHandler();
        return l(n, e.done);
      } catch (error) {
        e.done = true;
        throw error;
      }
    },
    return: function () {
      const e = r(this);
      const e_iterator = e.iterator;
      e.done = true;
      if (t) {
        const i = c(e_iterator, "return");
        if (i) {
          return n(i, e_iterator);
        }
        return l(undefined, true);
      }
      if (e.inner) {
        try {
          h(e.inner.iterator, "normal");
        } catch (error) {
          return h(e_iterator, "throw", error);
        }
      }
      h(e_iterator, "normal");
      return l(undefined, true);
    },
  });
};
const m = y(true);
const b = y(false);
i(b, v, "Iterator Helper");
export default function (t, r) {
  const e = function (e, n) {
    if (n) {
      n.iterator = e.iterator;
      n.next = e.next;
    } else {
      n = e;
    }
    n.type = r ? d : p;
    n.nextHandler = t;
    n.counter = 0;
    n.done = false;
    u_set(this, n);
  };
  e.prototype = r ? m : b;
  return e;
}
