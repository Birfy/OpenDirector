import n from "./module-M_2_15.js";
import o from "./module-Za_15.js";
import i from "./module-h_16.js";
import a from "./module-dFV_15.js";
import s from "./module-lN_15.js";
import u from "./module-b_15.js";
import c from "./module-C_16.js";
import _f from "./module-A5_15.js";
import h from "./module-V3_15.js";
import l from "./module-jX_16.js";
const _f_IteratorPrototype = _f.IteratorPrototype;
const v = s("toStringTag");
const p = "IteratorHelper";
const d = "WrapForValidIterator";
const u_set = u.set;
const y = (r) => {
  const t = u.getterFor(r ? d : p);
  return a(o(_f_IteratorPrototype), {
    next: function () {
      const e = t(this);
      if (r) {
        return e.nextHandler();
      }
      try {
        const n = e.done ? undefined : e.nextHandler();
        return h(n, e.done);
      } catch (error) {
        e.done = true;
        throw error;
      }
    },
    return: function () {
      const e = t(this);
      const e_iterator = e.iterator;
      e.done = true;
      if (r) {
        const i = c(e_iterator, "return");
        if (i) {
          return n(i, e_iterator);
        }
        return h(undefined, true);
      }
      if (e.inner) {
        try {
          l(e.inner.iterator, "normal");
        } catch (error) {
          return l(e_iterator, "throw", error);
        }
      }
      l(e_iterator, "normal");
      return h(undefined, true);
    },
  });
};
const b = y(true);
const m = y(false);
i(m, v, "Iterator Helper");
export default function (r, t) {
  const e = function (e, n) {
    if (n) {
      n.iterator = e.iterator;
      n.next = e.next;
    } else {
      n = e;
    }
    n.type = t ? d : p;
    n.nextHandler = r;
    n.counter = 0;
    n.done = false;
    u_set(this, n);
  };
  e.prototype = t ? b : m;
  return e;
}
