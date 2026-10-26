import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import o from "./module-N_21.js";
import s from "./module-Vn_21.js";
import a from "./module-Y_22.js";
import u from "./module-L7_21.js";
import c from "./module-H_2_21.js";
import f from "./module-d4_21.js";
import h from "./module-HZ_21.js";
import l from "./module-h_22.js";
import v from "./module-vE_21.js";
import p from "./module-lN_21.js";
import d from "./module-at_21.js";
import g from "./module-A5_21.js";
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
    if (t === p && C) {
      return C;
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
  var C = (!g_BUGGY_SAFARI_ITERATORS && P) || T(p);
  const D = (target === "Array" && t_prototype.entries) || P;
  if (D && (M = c(D.call(new t()))) !== Object.prototype && M.next) {
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
      C = function () {
        return i(P, this);
      };
    }
  }
  if (p) {
    I = {
      values: T(S),
      keys: g ? C : T(w),
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
  if ((!o || R) && t_prototype[x] !== C) {
    v(t_prototype, x, C, {
      name: p,
    });
  }
  d[target] = C;
  return I;
}
