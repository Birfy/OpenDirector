import n from "./module-M_2_6.js";
import o from "./module-Za_6.js";
import a from "./module-h_7.js";
import i from "./module-dFV_6.js";
import s from "./module-lN_6.js";
import c from "./module-b_6.js";
import u from "./module-C_7.js";
import _f from "./module-A5_6.js";
import l from "./module-V3_6.js";
import h from "./module-jX_7.js";
const _f_IteratorPrototype = _f.IteratorPrototype;
const p = s("toStringTag");
const v = "IteratorHelper";
const d = "WrapForValidIterator";
const c_set = c.set;
const y = (t) => {
  const r = c.getterFor(t ? d : v);
  return i(o(_f_IteratorPrototype), {
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
        const a = u(e_iterator, "return");
        if (a) {
          return n(a, e_iterator);
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
a(b, p, "Iterator Helper");
export default function (t, r) {
  const e = function (e, n) {
    if (n) {
      n.iterator = e.iterator;
      n.next = e.next;
    } else {
      n = e;
    }
    n.type = r ? d : v;
    n.nextHandler = t;
    n.counter = 0;
    n.done = false;
    c_set(this, n);
  };
  e.prototype = r ? m : b;
  return e;
}
