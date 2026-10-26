import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-N_7.js";
import a from "./module-Vn_7.js";
import s from "./module-Y_8.js";
import u from "./module-L7_7.js";
import c from "./module-H_2_7.js";
import f from "./module-d4_7.js";
import l from "./module-HZ_7.js";
import h from "./module-h_8.js";
import v from "./module-vE_7.js";
import p from "./module-lN_7.js";
import d from "./module-at_7.js";
import g from "./module-A5_7.js";
const a_PROPER = a.PROPER;
const a_CONFIGURABLE = a.CONFIGURABLE;
const g_IteratorPrototype = g.IteratorPrototype;
const g_BUGGY_SAFARI_ITERATORS = g.BUGGY_SAFARI_ITERATORS;
const w = p("iterator");
const x = "keys";
const E = "values";
const S = "entries";
const O = function () {
  return this;
};
export default function (r, target, e, a, p, g, R) {
  u(e, target, a);
  let M;
  let I;
  let k;
  const T = (r) => {
    if (r === p && C) {
      return C;
    }
    if (!g_BUGGY_SAFARI_ITERATORS && r && r in r_prototype) {
      return r_prototype[r];
    }
    switch (r) {
      case x:
      case E:
      case S:
        return function () {
          return new e(this, r);
        };
    }
    return function () {
      return new e(this);
    };
  };
  const j = target + " Iterator";
  let N = false;
  var r_prototype = r.prototype;
  const F =
    r_prototype[w] || r_prototype["@@iterator"] || (p && r_prototype[p]);
  var C = (!g_BUGGY_SAFARI_ITERATORS && F) || T(p);
  const D = (target === "Array" && r_prototype.entries) || F;
  if (D && (M = c(D.call(new r()))) !== Object.prototype && M.next) {
    if (!i && c(M) !== g_IteratorPrototype) {
      if (f) {
        f(M, g_IteratorPrototype);
      } else if (!s(M[w])) {
        v(M, w, O);
      }
    }
    l(M, j, true, true);
    if (i) {
      d[j] = O;
    }
  }
  if (a_PROPER && p === E && F && F.name !== E) {
    if (!i && a_CONFIGURABLE) {
      h(r_prototype, "name", E);
    } else {
      N = true;
      C = function () {
        return o(F, this);
      };
    }
  }
  if (p) {
    I = {
      values: T(E),
      keys: g ? C : T(x),
      entries: T(S),
    };
    if (R) {
      for (k in I) {
        if (!(!g_BUGGY_SAFARI_ITERATORS && !N && k in r_prototype)) {
          v(r_prototype, k, I[k]);
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
  if ((!i || R) && r_prototype[w] !== C) {
    v(r_prototype, w, C, {
      name: p,
    });
  }
  d[target] = C;
  return I;
}
