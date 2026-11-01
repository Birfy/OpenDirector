import n from "./module-A_18.js";
import o from "./module-M_2_17.js";
import i from "./module-N_17.js";
import a from "./module-Vn_17.js";
import s from "./module-Y_18.js";
import u from "./module-L7_17.js";
import c from "./module-H_2_17.js";
import f from "./module-d4_17.js";
import h from "./module-HZ_17.js";
import l from "./module-h_18.js";
import v from "./module-vE_17.js";
import p from "./module-lN_17.js";
import d from "./module-at_17.js";
import g from "./module-A5_17.js";
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
export default function (r, target, e, a, p, g, R) {
  u(e, target, a);
  let M;
  let I;
  let k;
  const T = (r) => {
    if (r === p && D) {
      return D;
    }
    if (!g_BUGGY_SAFARI_ITERATORS && r && r in r_prototype) {
      return r_prototype[r];
    }
    switch (r) {
      case w:
      case S:
      case E:
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
  const P =
    r_prototype[x] || r_prototype["@@iterator"] || (p && r_prototype[p]);
  var D = (!g_BUGGY_SAFARI_ITERATORS && P) || T(p);
  const C = (target === "Array" && r_prototype.entries) || P;
  if (C && (M = c(C.call(new r()))) !== Object.prototype && M.next) {
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
      l(r_prototype, "name", S);
    } else {
      N = true;
      D = function () {
        return o(P, this);
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
  if ((!i || R) && r_prototype[x] !== D) {
    v(r_prototype, x, D, {
      name: p,
    });
  }
  d[target] = D;
  return I;
}
