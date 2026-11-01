import n from "./module-M_2_9.js";
import o from "./module-FS_9.js";
import i from "./module-d_10.js";
import a from "./module-Za_9.js";
import s from "./module-h_10.js";
import u from "./module-dFV_9.js";
import c from "./module-lN_9.js";
import f from "./module-b_9.js";
import l from "./module-YR_9.js";
import h from "./module-C_10.js";
import v from "./module-fq_9.js";
import d from "./module-V3_9.js";
import p from "./module-jX_10.js";
const g = l("Promise");
const y = c("toStringTag");
const m = "AsyncIteratorHelper";
const b = "WrapForValidAsyncIterator";
const f_set = f.set;
const A = (t) => {
  const e = !t;
  const r = f.getterFor(t ? b : m);
  const s = (t) => {
    const n = o(function () {
      return r(t);
    });
    const n_error = n.error;
    const n_value = n.value;
    if (n_error || (e && n_value.done)) {
      return {
        exit: true,
        value: n_error ? g.reject(n_value) : g.resolve(d(undefined, true)),
      };
    }
    return {
      exit: false,
      value: n_value,
    };
  };
  return u(a(v), {
    next: function () {
      const t = s(this);
      const t_value = t.value;
      if (t.exit) {
        return t_value;
      }
      const r = o(function () {
        return i(t_value.nextHandler(g));
      });
      const r_error = r.error;
      const r_value = r.value;
      if (r_error) {
        t_value.done = true;
      }
      if (r_error) {
        return g.reject(r_value);
      }
      return g.resolve(r_value);
    },
    return: function () {
      let e;
      let r;
      const a = s(this);
      const a_value = a.value;
      if (a.exit) {
        return a_value;
      }
      a_value.done = true;
      const u_iterator = a_value.iterator;
      let f = o(function () {
        if (a_value.inner) {
          try {
            p(a_value.inner.iterator, "normal");
          } catch (error) {
            return p(u_iterator, "throw", error);
          }
        }
        return h(u_iterator, "return");
      });
      e = r = f.value;
      if (f.error) {
        return g.reject(r);
      }
      if (e === undefined) {
        return g.resolve(d(undefined, true));
      }
      r = (f = o(function () {
        return n(e, u_iterator);
      })).value;
      if (f.error) {
        return g.reject(r);
      }
      if (t) {
        return g.resolve(r);
      }
      return g.resolve(r).then((t) => {
        i(t);
        return d(undefined, true);
      });
    },
  });
};
const x = A(true);
const E = A(false);
s(E, y, "Async Iterator Helper");
export default function (t, e) {
  const r = function (r, n) {
    if (n) {
      n.iterator = r.iterator;
      n.next = r.next;
    } else {
      n = r;
    }
    n.type = e ? b : m;
    n.nextHandler = t;
    n.counter = 0;
    n.done = false;
    f_set(this, n);
  };
  r.prototype = e ? x : E;
  return r;
}
