import n from "./module-M_2_3.js";
import i from "./module-FS_3.js";
import o from "./module-d_4.js";
import s from "./module-Za_3.js";
import a from "./module-h_4.js";
import u from "./module-dFV_3.js";
import c from "./module-lN_3.js";
import f from "./module-b_3.js";
import h from "./module-YR_3.js";
import l from "./module-C_4.js";
import v from "./module-fq_3.js";
import p from "./module-V3_3.js";
import d from "./module-jX_4.js";
const g = h("Promise");
const y = c("toStringTag");
const b = "AsyncIteratorHelper";
const m = "WrapForValidAsyncIterator";
const f_set = f.set;
const x = (t) => {
  const r = !t;
  const e = f.getterFor(t ? m : b);
  const a = (t) => {
    const n = i(function () {
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
  return u(s(v), {
    next: function () {
      const t = a(this);
      const t_value = t.value;
      if (t.exit) {
        return t_value;
      }
      const e = i(function () {
        return o(t_value.nextHandler(g));
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
      const s = a(this);
      const s_value = s.value;
      if (s.exit) {
        return s_value;
      }
      s_value.done = true;
      const u_iterator = s_value.iterator;
      let f = i(function () {
        if (s_value.inner) {
          try {
            d(s_value.inner.iterator, "normal");
          } catch (error) {
            return d(u_iterator, "throw", error);
          }
        }
        return l(u_iterator, "return");
      });
      r = e = f.value;
      if (f.error) {
        return g.reject(e);
      }
      if (r === undefined) {
        return g.resolve(p(undefined, true));
      }
      e = (f = i(function () {
        return n(r, u_iterator);
      })).value;
      if (f.error) {
        return g.reject(e);
      }
      if (t) {
        return g.resolve(e);
      }
      return g.resolve(e).then((t) => {
        o(t);
        return p(undefined, true);
      });
    },
  });
};
const w = x(true);
const S = x(false);
a(S, y, "Async Iterator Helper");
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
