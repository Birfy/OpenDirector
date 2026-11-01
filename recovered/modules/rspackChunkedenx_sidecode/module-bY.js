import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-N.js";
import a from "./module-Vn.js";
import s from "./module-Y.js";
import u from "./module-L7.js";
import c from "./module-H_2.js";
import f from "./module-d4.js";
import h from "./module-HZ.js";
import l from "./module-h.js";
import v from "./module-vE.js";
import p from "./module-lN.js";
import d from "./module-at.js";
import g from "./module-A5.js";
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
  u(e, target, a);
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
    if (!i && c(M) !== g_IteratorPrototype) {
      if (f) {
        f(M, g_IteratorPrototype);
      } else if (!s(M[x])) {
        v(M, x, O);
      }
    }
    h(M, j, true, true);
    if (i) {
      d[j] = O;
    }
  }
  if (a_PROPER && p === S && P && P.name !== S) {
    if (!i && a_CONFIGURABLE) {
      l(t_prototype, "name", S);
    } else {
      N = true;
      C = function () {
        return o(P, this);
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
  if ((!i || R) && t_prototype[x] !== C) {
    v(t_prototype, x, C, {
      name: p,
    });
  }
  d[target] = C;
  return I;
}
