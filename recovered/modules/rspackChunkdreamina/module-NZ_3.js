import n from "./module-p3.js";
import o from "./module-wG.js";
import i from "./module-IF_2.js";
import a from "./module-lY_4.js";
import s from "./module-z3.js";
import u from "./module-IG_3.js";
import c from "./module-Nt_3.js";
import f from "./module-G_2.js";
import l from "./module-Y.js";
import p from "./module-T_2.js";
import h from "./module-lZ_2.js";
import v from "./module-SM_4.js";
import d from "./module-tU.js";
const g = l("Promise");
const y = c("toStringTag");
const m = "AsyncIteratorHelper";
const x = "WrapForValidAsyncIterator";
const f_set = f.set;
const w = (e) => {
  const t = !e;
  const r = f.getterFor(e ? x : m);
  const s = (e) => {
    const n = o(function () {
      return r(e);
    });
    const n_error = n.error;
    const n_value = n.value;
    if (n_error || (t && n_value.done)) {
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
  return u(a(h), {
    next: function () {
      const e = s(this);
      const e_value = e.value;
      if (e.exit) {
        return e_value;
      }
      const r = o(function () {
        return i(e_value.nextHandler(g));
      });
      const r_error = r.error;
      const r_value = r.value;
      if (r_error) {
        e_value.done = true;
      }
      if (r_error) {
        return g.reject(r_value);
      }
      return g.resolve(r_value);
    },
    return: function () {
      let t;
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
            d(a_value.inner.iterator, "normal");
          } catch (error) {
            return d(u_iterator, "throw", error);
          }
        }
        return p(u_iterator, "return");
      });
      t = r = f.value;
      if (f.error) {
        return g.reject(r);
      }
      if (t === undefined) {
        return g.resolve(v(undefined, true));
      }
      r = (f = o(function () {
        return n(t, u_iterator);
      })).value;
      if (f.error) {
        return g.reject(r);
      }
      if (e) {
        return g.resolve(r);
      }
      return g.resolve(r).then((e) => {
        i(e);
        return v(undefined, true);
      });
    },
  });
};
const A = w(true);
const E = w(false);
s(E, y, "Async Iterator Helper");
export default function (e, t) {
  const r = function (r, n) {
    if (n) {
      n.iterator = r.iterator;
      n.next = r.next;
    } else {
      n = r;
    }
    n.type = t ? x : m;
    n.nextHandler = e;
    n.counter = 0;
    n.done = false;
    f_set(this, n);
  };
  r.prototype = t ? A : E;
  return r;
}
