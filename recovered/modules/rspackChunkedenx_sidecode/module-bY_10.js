import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-N_9.js";
import a from "./module-Vn_9.js";
import s from "./module-Y_10.js";
import u from "./module-L7_9.js";
import c from "./module-H_2_9.js";
import f from "./module-d4_9.js";
import l from "./module-HZ_9.js";
import h from "./module-h_10.js";
import v from "./module-vE_9.js";
import d from "./module-lN_9.js";
import p from "./module-at_9.js";
import g from "./module-A5_9.js";
const a_PROPER = a.PROPER;
const a_CONFIGURABLE = a.CONFIGURABLE;
const g_IteratorPrototype = g.IteratorPrototype;
const g_BUGGY_SAFARI_ITERATORS = g.BUGGY_SAFARI_ITERATORS;
const A = d("iterator");
const x = "keys";
const E = "values";
const S = "entries";
const O = function () {
  return this;
};
export default function (t, target, r, a, d, g, _) {
  u(r, target, a);
  let R;
  let M;
  let I;
  const T = (t) => {
    if (t === d && D) {
      return D;
    }
    if (!g_BUGGY_SAFARI_ITERATORS && t && t in t_prototype) {
      return t_prototype[t];
    }
    switch (t) {
      case x:
      case E:
      case S:
        return function () {
          return new r(this, t);
        };
    }
    return function () {
      return new r(this);
    };
  };
  const k = target + " Iterator";
  let N = false;
  var t_prototype = t.prototype;
  const P =
    t_prototype[A] || t_prototype["@@iterator"] || (d && t_prototype[d]);
  var D = (!g_BUGGY_SAFARI_ITERATORS && P) || T(d);
  const F = (target === "Array" && t_prototype.entries) || P;
  if (F && (R = c(F.call(new t()))) !== Object.prototype && R.next) {
    if (!i && c(R) !== g_IteratorPrototype) {
      if (f) {
        f(R, g_IteratorPrototype);
      } else if (!s(R[A])) {
        v(R, A, O);
      }
    }
    l(R, k, true, true);
    if (i) {
      p[k] = O;
    }
  }
  if (a_PROPER && d === E && P && P.name !== E) {
    if (!i && a_CONFIGURABLE) {
      h(t_prototype, "name", E);
    } else {
      N = true;
      D = function () {
        return o(P, this);
      };
    }
  }
  if (d) {
    M = {
      values: T(E),
      keys: g ? D : T(x),
      entries: T(S),
    };
    if (_) {
      for (I in M) {
        if (!(!g_BUGGY_SAFARI_ITERATORS && !N && I in t_prototype)) {
          v(t_prototype, I, M[I]);
        }
      }
    } else {
      n(
        {
          target,
          proto: true,
          forced: g_BUGGY_SAFARI_ITERATORS || N,
        },
        M,
      );
    }
  }
  if ((!i || _) && t_prototype[A] !== D) {
    v(t_prototype, A, D, {
      name: d,
    });
  }
  p[target] = D;
  return M;
}
