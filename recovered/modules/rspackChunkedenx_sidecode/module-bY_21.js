import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import i from "./module-N_20.js";
import a from "./module-Vn_20.js";
import s from "./module-Y_21.js";
import c from "./module-L7_20.js";
import u from "./module-H_2_20.js";
import f from "./module-d4_20.js";
import l from "./module-HZ_20.js";
import h from "./module-h_21.js";
import v from "./module-vE_20.js";
import p from "./module-lN_20.js";
import d from "./module-at_20.js";
import g from "./module-A5_20.js";
const a_PROPER = a.PROPER;
const a_CONFIGURABLE = a.CONFIGURABLE;
const g_IteratorPrototype = g.IteratorPrototype;
const g_BUGGY_SAFARI_ITERATORS = g.BUGGY_SAFARI_ITERATORS;
const A = p("iterator");
const x = "keys";
const S = "values";
const E = "entries";
const O = function () {
  return this;
};
export default function (t, target, e, a, p, g, R) {
  c(e, target, a);
  let M;
  let I;
  let _;
  const k = (t) => {
    if (t === p && P) {
      return P;
    }
    if (!g_BUGGY_SAFARI_ITERATORS && t && t in t_prototype) {
      return t_prototype[t];
    }
    switch (t) {
      case x:
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
  let j = false;
  var t_prototype = t.prototype;
  const D =
    t_prototype[A] || t_prototype["@@iterator"] || (p && t_prototype[p]);
  var P = (!g_BUGGY_SAFARI_ITERATORS && D) || k(p);
  const C = (target === "Array" && t_prototype.entries) || D;
  if (C && (M = u(C.call(new t()))) !== Object.prototype && M.next) {
    if (!i && u(M) !== g_IteratorPrototype) {
      if (f) {
        f(M, g_IteratorPrototype);
      } else if (!s(M[A])) {
        v(M, A, O);
      }
    }
    l(M, T, true, true);
    if (i) {
      d[T] = O;
    }
  }
  if (a_PROPER && p === S && D && D.name !== S) {
    if (!i && a_CONFIGURABLE) {
      h(t_prototype, "name", S);
    } else {
      j = true;
      P = function () {
        return o(D, this);
      };
    }
  }
  if (p) {
    I = {
      values: k(S),
      keys: g ? P : k(x),
      entries: k(E),
    };
    if (R) {
      for (_ in I) {
        if (!(!g_BUGGY_SAFARI_ITERATORS && !j && _ in t_prototype)) {
          v(t_prototype, _, I[_]);
        }
      }
    } else {
      n(
        {
          target,
          proto: true,
          forced: g_BUGGY_SAFARI_ITERATORS || j,
        },
        I,
      );
    }
  }
  if ((!i || R) && t_prototype[A] !== P) {
    v(t_prototype, A, P, {
      name: p,
    });
  }
  d[target] = P;
  return I;
}
