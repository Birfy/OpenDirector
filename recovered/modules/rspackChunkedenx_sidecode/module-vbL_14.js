import n from "./module-M_2_14.js";
import o from "./module-Za_14.js";
import i from "./module-h_15.js";
import a from "./module-dFV_14.js";
import s from "./module-lN_14.js";
import c from "./module-b_14.js";
import u from "./module-C_15.js";
import _f from "./module-A5_14.js";
import l from "./module-V3_14.js";
import h from "./module-jX_15.js";
const _f_IteratorPrototype = _f.IteratorPrototype;
const v = s("toStringTag");
const p = "IteratorHelper";
const d = "WrapForValidIterator";
const c_set = c.set;
const y = (t) => {
  const r = c.getterFor(t ? d : p);
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
        const i = u(e_iterator, "return");
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
const b = y(true);
const m = y(false);
i(m, v, "Iterator Helper");
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
    c_set(this, n);
  };
  e.prototype = r ? b : m;
  return e;
}
