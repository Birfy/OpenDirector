import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-N_14.js";
import a from "./module-Vn_14.js";
import s from "./module-Y_15.js";
import c from "./module-L7_14.js";
import u from "./module-H_2_14.js";
import f from "./module-d4_14.js";
import l from "./module-HZ_14.js";
import h from "./module-h_15.js";
import v from "./module-vE_14.js";
import p from "./module-lN_14.js";
import d from "./module-at_14.js";
import g from "./module-A5_14.js";
const a_PROPER = a.PROPER;
const a_CONFIGURABLE = a.CONFIGURABLE;
const g_IteratorPrototype = g.IteratorPrototype;
const g_BUGGY_SAFARI_ITERATORS = g.BUGGY_SAFARI_ITERATORS;
const x = p("iterator");
const w = "keys";
const S = "values";
const E = "entries";
const O = function () {
  return this;
};
export default function (t, target, e, a, p, g, R) {
  c(e, target, a);
  let M;
  let I;
  let k;
  const j = (t) => {
    if (t === p && D) {
      return D;
    }
    if (!g_BUGGY_SAFARI_ITERATORS && t && t in t_prototype) {
      return t_prototype[t];
    }
    switch (t) {
      case w:
      case S:
      case E:
        return function () {
          return new e(this, t);
        };
    }
    return function () {
      return new e(this);
    };
  };
  const T = target + " Iterator";
  let N = false;
  var t_prototype = t.prototype;
  const F =
    t_prototype[x] || t_prototype["@@iterator"] || (p && t_prototype[p]);
  var D = (!g_BUGGY_SAFARI_ITERATORS && F) || j(p);
  const C = (target === "Array" && t_prototype.entries) || F;
  if (C && (M = u(C.call(new t()))) !== Object.prototype && M.next) {
    if (!i && u(M) !== g_IteratorPrototype) {
      if (f) {
        f(M, g_IteratorPrototype);
      } else if (!s(M[x])) {
        v(M, x, O);
      }
    }
    l(M, T, true, true);
    if (i) {
      d[T] = O;
    }
  }
  if (a_PROPER && p === S && F && F.name !== S) {
    if (!i && a_CONFIGURABLE) {
      h(t_prototype, "name", S);
    } else {
      N = true;
      D = function () {
        return o(F, this);
      };
    }
  }
  if (p) {
    I = {
      values: j(S),
      keys: g ? D : j(w),
      entries: j(E),
    };
    if (R) {
      for (k in I) {
        if (!(!g_BUGGY_SAFARI_ITERATORS && !N && k in t_prototype)) {
          v(t_prototype, k, I[k]);
        }
      }
    } else {
      n(
        {
          target,
          proto: true,
          forced: g_BUGGY_SAFARI_ITERATORS || N,
        },
        I,
      );
    }
  }
  if ((!i || R) && t_prototype[x] !== D) {
    v(t_prototype, x, D, {
      name: p,
    });
  }
  d[target] = D;
  return I;
}
