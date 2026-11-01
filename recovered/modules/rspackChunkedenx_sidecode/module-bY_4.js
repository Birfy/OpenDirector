import n from "./module-A_4.js";
import i from "./module-M_2_3.js";
import o from "./module-N_3.js";
import s from "./module-Vn_3.js";
import a from "./module-Y_4.js";
import u from "./module-L7_3.js";
import c from "./module-H_2_3.js";
import f from "./module-d4_3.js";
import h from "./module-HZ_3.js";
import l from "./module-h_4.js";
import v from "./module-vE_3.js";
import p from "./module-lN_3.js";
import d from "./module-at_3.js";
import g from "./module-A5_3.js";
const s_PROPER = s.PROPER;
const s_CONFIGURABLE = s.CONFIGURABLE;
const g_IteratorPrototype = g.IteratorPrototype;
const g_BUGGY_SAFARI_ITERATORS = g.BUGGY_SAFARI_ITERATORS;
const x = p("iterator");
const w = "keys";
const S = "values";
const E = "entries";
const O = function () {
  return this;
};
export default function (t, target, e, s, p, g, R) {
  u(e, target, s);
  let M;
  let I;
  let k;
  const T = (t) => {
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
  const j = target + " Iterator";
  let N = false;
  var t_prototype = t.prototype;
  const P =
    t_prototype[x] || t_prototype["@@iterator"] || (p && t_prototype[p]);
  var D = (!g_BUGGY_SAFARI_ITERATORS && P) || T(p);
  const C = (target === "Array" && t_prototype.entries) || P;
  if (C && (M = c(C.call(new t()))) !== Object.prototype && M.next) {
    if (!o && c(M) !== g_IteratorPrototype) {
      if (f) {
        f(M, g_IteratorPrototype);
      } else if (!a(M[x])) {
        v(M, x, O);
      }
    }
    h(M, j, true, true);
    if (o) {
      d[j] = O;
    }
  }
  if (s_PROPER && p === S && P && P.name !== S) {
    if (!o && s_CONFIGURABLE) {
      l(t_prototype, "name", S);
    } else {
      N = true;
      D = function () {
        return i(P, this);
      };
    }
  }
  if (p) {
    I = {
      values: T(S),
      keys: g ? D : T(w),
      entries: T(E),
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
  if ((!o || R) && t_prototype[x] !== D) {
    v(t_prototype, x, D, {
      name: p,
    });
  }
  d[target] = D;
  return I;
}
