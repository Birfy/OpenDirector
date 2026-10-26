import n from "./module-M_2_8.js";
import i from "./module-Za_8.js";
import o from "./module-h_9.js";
import s from "./module-dFV_8.js";
import a from "./module-lN_8.js";
import u from "./module-b_8.js";
import c from "./module-C_9.js";
import _f from "./module-A5_8.js";
import h from "./module-V3_8.js";
import l from "./module-jX_9.js";
const _f_IteratorPrototype = _f.IteratorPrototype;
const v = a("toStringTag");
const p = "IteratorHelper";
const d = "WrapForValidIterator";
const u_set = u.set;
const y = (t) => {
  const r = u.getterFor(t ? d : p);
  return s(i(_f_IteratorPrototype), {
    next: function () {
      const e = r(this);
      if (t) {
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
      const e = r(this);
      const e_iterator = e.iterator;
      e.done = true;
      if (t) {
        const o = c(e_iterator, "return");
        if (o) {
          return n(o, e_iterator);
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
o(m, v, "Iterator Helper");
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
  e.prototype = r ? b : m;
  return e;
}
