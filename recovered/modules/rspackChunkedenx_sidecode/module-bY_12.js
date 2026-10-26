import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-N_11.js";
import a from "./module-Vn_11.js";
import s from "./module-Y_12.js";
import u from "./module-L7_11.js";
import c from "./module-H_2_11.js";
import f from "./module-d4_11.js";
import h from "./module-HZ_11.js";
import l from "./module-h_12.js";
import v from "./module-vE_11.js";
import p from "./module-lN_11.js";
import d from "./module-at_11.js";
import g from "./module-A5_11.js";
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
  const j = (r) => {
    if (r === p && C) {
      return C;
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
  const T = target + " Iterator";
  let N = false;
  var r_prototype = r.prototype;
  const P =
    r_prototype[x] || r_prototype["@@iterator"] || (p && r_prototype[p]);
  var C = (!g_BUGGY_SAFARI_ITERATORS && P) || j(p);
  const D = (target === "Array" && r_prototype.entries) || P;
  if (D && (M = c(D.call(new r()))) !== Object.prototype && M.next) {
    if (!i && c(M) !== g_IteratorPrototype) {
      if (f) {
        f(M, g_IteratorPrototype);
      } else if (!s(M[x])) {
        v(M, x, O);
      }
    }
    h(M, T, true, true);
    if (i) {
      d[T] = O;
    }
  }
  if (a_PROPER && p === S && P && P.name !== S) {
    if (!i && a_CONFIGURABLE) {
      l(r_prototype, "name", S);
    } else {
      N = true;
      C = function () {
        return o(P, this);
      };
    }
  }
  if (p) {
    I = {
      values: j(S),
      keys: g ? C : j(w),
      entries: j(E),
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
  if ((!i || R) && r_prototype[x] !== C) {
    v(r_prototype, x, C, {
      name: p,
    });
  }
  d[target] = C;
  return I;
}
