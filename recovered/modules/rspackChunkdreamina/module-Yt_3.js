import n from "./module-p3.js";
import o from "./module-lY_4.js";
import i from "./module-z3.js";
import a from "./module-IG_3.js";
import s from "./module-Nt_3.js";
import u from "./module-G_2.js";
import c from "./module-T_2.js";
import _f from "./module-ii_2.js";
import l from "./module-SM_4.js";
import p from "./module-tU.js";
const _f_IteratorPrototype = _f.IteratorPrototype;
const h = s("toStringTag");
const v = "IteratorHelper";
const d = "WrapForValidIterator";
const u_set = u.set;
const y = (e) => {
  const t = u.getterFor(e ? d : v);
  return a(o(_f_IteratorPrototype), {
    next: function () {
      const r = t(this);
      if (e) {
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
      const r = t(this);
      const r_iterator = r.iterator;
      r.done = true;
      if (e) {
        const i = c(r_iterator, "return");
        if (i) {
          return n(i, r_iterator);
        }
        return l(undefined, true);
      }
      if (r.inner) {
        try {
          p(r.inner.iterator, "normal");
        } catch (error) {
          return p(r_iterator, "throw", error);
        }
      }
      p(r_iterator, "normal");
      return l(undefined, true);
    },
  });
};
const m = y(true);
const x = y(false);
i(x, h, "Iterator Helper");
export default function (e, t) {
  const r = function (r, n) {
    if (n) {
      n.iterator = r.iterator;
      n.next = r.next;
    } else {
      n = r;
    }
    n.type = t ? d : v;
    n.nextHandler = e;
    n.counter = 0;
    n.done = false;
    u_set(this, n);
  };
  r.prototype = t ? m : x;
  return r;
}
