import n from "./module-M_2_7.js";
import o from "./module-FS_7.js";
import i from "./module-d_8.js";
import a from "./module-Za_7.js";
import s from "./module-h_8.js";
import u from "./module-dFV_7.js";
import c from "./module-lN_7.js";
import f from "./module-b_7.js";
import l from "./module-YR_7.js";
import h from "./module-C_8.js";
import v from "./module-fq_7.js";
import p from "./module-V3_7.js";
import d from "./module-jX_8.js";
const g = l("Promise");
const y = c("toStringTag");
const m = "AsyncIteratorHelper";
const b = "WrapForValidAsyncIterator";
const f_set = f.set;
const w = (r) => {
  const t = !r;
  const e = f.getterFor(r ? b : m);
  const s = (r) => {
    const n = o(function () {
      return e(r);
    });
    const n_error = n.error;
    const n_value = n.value;
    if (n_error || (t && n_value.done)) {
      return {
        exit: true,
        value: n_error ? g.reject(n_value) : g.resolve(p(undefined, true)),
      };
    }
    return {
      exit: false,
      value: n_value,
    };
  };
  return u(a(v), {
    next: function () {
      const r = s(this);
      const r_value = r.value;
      if (r.exit) {
        return r_value;
      }
      const e = o(function () {
        return i(r_value.nextHandler(g));
      });
      const e_error = e.error;
      const e_value = e.value;
      if (e_error) {
        r_value.done = true;
      }
      if (e_error) {
        return g.reject(e_value);
      }
      return g.resolve(e_value);
    },
    return: function () {
      let t;
      let e;
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
            d(a_value.inner.iterator, "normal");
          } catch (error) {
            return d(u_iterator, "throw", error);
          }
        }
        return h(u_iterator, "return");
      });
      t = e = f.value;
      if (f.error) {
        return g.reject(e);
      }
      if (t === undefined) {
        return g.resolve(p(undefined, true));
      }
      e = (f = o(function () {
        return n(t, u_iterator);
      })).value;
      if (f.error) {
        return g.reject(e);
      }
      if (r) {
        return g.resolve(e);
      }
      return g.resolve(e).then((r) => {
        i(r);
        return p(undefined, true);
      });
    },
  });
};
const x = w(true);
const E = w(false);
s(E, y, "Async Iterator Helper");
export default function (r, t) {
  const e = function (e, n) {
    if (n) {
      n.iterator = e.iterator;
      n.next = e.next;
    } else {
      n = e;
    }
    n.type = t ? b : m;
    n.nextHandler = r;
    n.counter = 0;
    n.done = false;
    f_set(this, n);
  };
  e.prototype = t ? x : E;
  return e;
}
