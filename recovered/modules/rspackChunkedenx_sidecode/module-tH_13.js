import n from "./module-M_2_13.js";
import o from "./module-FS_13.js";
import i from "./module-d_14.js";
import a from "./module-Za_13.js";
import s from "./module-h_14.js";
import u from "./module-dFV_13.js";
import c from "./module-lN_13.js";
import f from "./module-b_13.js";
import h from "./module-YR_13.js";
import l from "./module-C_14.js";
import v from "./module-fq_13.js";
import p from "./module-V3_13.js";
import d from "./module-jX_14.js";
const g = h("Promise");
const y = c("toStringTag");
const b = "AsyncIteratorHelper";
const m = "WrapForValidAsyncIterator";
const f_set = f.set;
const x = (r) => {
  const t = !r;
  const e = f.getterFor(r ? m : b);
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
        return l(u_iterator, "return");
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
const w = x(true);
const S = x(false);
s(S, y, "Async Iterator Helper");
export default function (r, t) {
  const e = function (e, n) {
    if (n) {
      n.iterator = e.iterator;
      n.next = e.next;
    } else {
      n = e;
    }
    n.type = t ? m : b;
    n.nextHandler = r;
    n.counter = 0;
    n.done = false;
    f_set(this, n);
  };
  e.prototype = t ? w : S;
  return e;
}
