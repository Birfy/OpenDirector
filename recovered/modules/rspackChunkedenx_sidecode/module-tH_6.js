import n from "./module-M_2_6.js";
import o from "./module-FS_6.js";
import a from "./module-d_7.js";
import i from "./module-Za_6.js";
import s from "./module-h_7.js";
import c from "./module-dFV_6.js";
import u from "./module-lN_6.js";
import f from "./module-b_6.js";
import l from "./module-YR_6.js";
import h from "./module-C_7.js";
import p from "./module-fq_6.js";
import v from "./module-V3_6.js";
import d from "./module-jX_7.js";
const g = l("Promise");
const y = u("toStringTag");
const m = "AsyncIteratorHelper";
const b = "WrapForValidAsyncIterator";
const f_set = f.set;
const w = (t) => {
  const r = !t;
  const e = f.getterFor(t ? b : m);
  const s = (t) => {
    const n = o(function () {
      return e(t);
    });
    const n_error = n.error;
    const n_value = n.value;
    if (n_error || (r && n_value.done)) {
      return {
        exit: true,
        value: n_error ? g.reject(n_value) : g.resolve(v(undefined, true)),
      };
    }
    return {
      exit: false,
      value: n_value,
    };
  };
  return c(i(p), {
    next: function () {
      const t = s(this);
      const t_value = t.value;
      if (t.exit) {
        return t_value;
      }
      const e = o(function () {
        return a(t_value.nextHandler(g));
      });
      const e_error = e.error;
      const e_value = e.value;
      if (e_error) {
        t_value.done = true;
      }
      if (e_error) {
        return g.reject(e_value);
      }
      return g.resolve(e_value);
    },
    return: function () {
      let r;
      let e;
      const i = s(this);
      const i_value = i.value;
      if (i.exit) {
        return i_value;
      }
      i_value.done = true;
      const c_iterator = i_value.iterator;
      let f = o(function () {
        if (i_value.inner) {
          try {
            d(i_value.inner.iterator, "normal");
          } catch (error) {
            return d(c_iterator, "throw", error);
          }
        }
        return h(c_iterator, "return");
      });
      r = e = f.value;
      if (f.error) {
        return g.reject(e);
      }
      if (r === undefined) {
        return g.resolve(v(undefined, true));
      }
      e = (f = o(function () {
        return n(r, c_iterator);
      })).value;
      if (f.error) {
        return g.reject(e);
      }
      if (t) {
        return g.resolve(e);
      }
      return g.resolve(e).then((t) => {
        a(t);
        return v(undefined, true);
      });
    },
  });
};
const x = w(true);
const E = w(false);
s(E, y, "Async Iterator Helper");
export default function (t, r) {
  const e = function (e, n) {
    if (n) {
      n.iterator = e.iterator;
      n.next = e.next;
    } else {
      n = e;
    }
    n.type = r ? b : m;
    n.nextHandler = t;
    n.counter = 0;
    n.done = false;
    f_set(this, n);
  };
  e.prototype = r ? x : E;
  return e;
}
