import n from "./module-M_2_10.js";
import o from "./module-FS_10.js";
import i from "./module-d_11.js";
import a from "./module-Za_10.js";
import s from "./module-h_11.js";
import u from "./module-dFV_10.js";
import c from "./module-lN_10.js";
import f from "./module-b_10.js";
import l from "./module-YR_10.js";
import h from "./module-C_11.js";
import v from "./module-fq_10.js";
import p from "./module-V3_10.js";
import d from "./module-jX_11.js";
const g = l("Promise");
const y = c("toStringTag");
const b = "AsyncIteratorHelper";
const m = "WrapForValidAsyncIterator";
const f_set = f.set;
const x = (t) => {
  const r = !t;
  const e = f.getterFor(t ? m : b);
  const s = (t) => {
    const n = o(function () {
      return e(t);
    });
    const n_error = n.error;
    const n_value = n.value;
    if (n_error || (r && n_value.done)) {
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
      const t = s(this);
      const t_value = t.value;
      if (t.exit) {
        return t_value;
      }
      const e = o(function () {
        return i(t_value.nextHandler(g));
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
      r = e = f.value;
      if (f.error) {
        return g.reject(e);
      }
      if (r === undefined) {
        return g.resolve(p(undefined, true));
      }
      e = (f = o(function () {
        return n(r, u_iterator);
      })).value;
      if (f.error) {
        return g.reject(e);
      }
      if (t) {
        return g.resolve(e);
      }
      return g.resolve(e).then((t) => {
        i(t);
        return p(undefined, true);
      });
    },
  });
};
const w = x(true);
const S = x(false);
s(S, y, "Async Iterator Helper");
export default function (t, r) {
  const e = function (e, n) {
    if (n) {
      n.iterator = e.iterator;
      n.next = e.next;
    } else {
      n = e;
    }
    n.type = r ? m : b;
    n.nextHandler = t;
    n.counter = 0;
    n.done = false;
    f_set(this, n);
  };
  e.prototype = r ? w : S;
  return e;
}
