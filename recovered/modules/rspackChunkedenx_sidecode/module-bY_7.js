import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-N_6.js";
import i from "./module-Vn_6.js";
import s from "./module-Y_7.js";
import c from "./module-L7_6.js";
import u from "./module-H_2_6.js";
import f from "./module-d4_6.js";
import l from "./module-HZ_6.js";
import h from "./module-h_7.js";
import p from "./module-vE_6.js";
import v from "./module-lN_6.js";
import d from "./module-at_6.js";
import g from "./module-A5_6.js";
const i_PROPER = i.PROPER;
const i_CONFIGURABLE = i.CONFIGURABLE;
const g_IteratorPrototype = g.IteratorPrototype;
const g_BUGGY_SAFARI_ITERATORS = g.BUGGY_SAFARI_ITERATORS;
const w = v("iterator");
const x = "keys";
const E = "values";
const S = "entries";
const O = function () {
  return this;
};
export default function (t, target, e, i, v, g, R) {
  c(e, target, i);
  let M;
  let I;
  let k;
  const T = (t) => {
    if (t === v && C) {
      return C;
    }
    if (!g_BUGGY_SAFARI_ITERATORS && t && t in t_prototype) {
      return t_prototype[t];
    }
    switch (t) {
      case x:
      case E:
      case S:
        return function () {
          return new e(this, t);
        };
    }
    return function () {
      return new e(this);
    };
  };
  const j = target + " Iterator";
  let F = false;
  var t_prototype = t.prototype;
  const P =
    t_prototype[w] || t_prototype["@@iterator"] || (v && t_prototype[v]);
  var C = (!g_BUGGY_SAFARI_ITERATORS && P) || T(v);
  const D = (target === "Array" && t_prototype.entries) || P;
  if (D && (M = u(D.call(new t()))) !== Object.prototype && M.next) {
    if (!a && u(M) !== g_IteratorPrototype) {
      if (f) {
        f(M, g_IteratorPrototype);
      } else if (!s(M[w])) {
        p(M, w, O);
      }
    }
    l(M, j, true, true);
    if (a) {
      d[j] = O;
    }
  }
  if (i_PROPER && v === E && P && P.name !== E) {
    if (!a && i_CONFIGURABLE) {
      h(t_prototype, "name", E);
    } else {
      F = true;
      C = function () {
        return o(P, this);
      };
    }
  }
  if (v) {
    I = {
      values: T(E),
      keys: g ? C : T(x),
      entries: T(S),
    };
    if (R) {
      for (k in I) {
        if (!(!g_BUGGY_SAFARI_ITERATORS && !F && k in t_prototype)) {
          p(t_prototype, k, I[k]);
        }
      }
    } else {
      n(
        {
          target,
          proto: true,
          forced: g_BUGGY_SAFARI_ITERATORS || F,
        },
        I,
      );
    }
  }
  if ((!a || R) && t_prototype[w] !== C) {
    p(t_prototype, w, C, {
      name: v,
    });
  }
  d[target] = C;
  return I;
}
