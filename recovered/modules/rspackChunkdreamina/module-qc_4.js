import n from "./module-g.js";
import o from "./module-p3.js";
import i from "./module-K.js";
import a from "./module-A.js";
import s from "./module-r.js";
import u from "./module-ib_3.js";
import c from "./module-jA_2.js";
import f from "./module-P.js";
import l from "./module-Ii_2_2.js";
import p from "./module-z3.js";
import h from "./module-xX_2.js";
import v from "./module-Nt_3.js";
import d from "./module-uK_4.js";
import g from "./module-ii_2.js";
const a_PROPER = a.PROPER;
const a_CONFIGURABLE = a.CONFIGURABLE;
const g_IteratorPrototype = g.IteratorPrototype;
const g_BUGGY_SAFARI_ITERATORS = g.BUGGY_SAFARI_ITERATORS;
const w = v("iterator");
const A = "keys";
const E = "values";
const j = "entries";
const I = function () {
  return this;
};
export default function (e, target, r, a, v, g, R) {
  u(r, target, a);
  let z;
  let O;
  let S;
  const _ = (e) => {
    if (e === v && q) {
      return q;
    }
    if (!g_BUGGY_SAFARI_ITERATORS && e && e in e_prototype) {
      return e_prototype[e];
    }
    switch (e) {
      case A:
      case E:
      case j:
        return function () {
          return new r(this, e);
        };
    }
    return function () {
      return new r(this);
    };
  };
  const T = target + " Iterator";
  let k = false;
  var e_prototype = e.prototype;
  const B =
    e_prototype[w] || e_prototype["@@iterator"] || (v && e_prototype[v]);
  var q = (!g_BUGGY_SAFARI_ITERATORS && B) || _(v);
  const N = (target === "Array" && e_prototype.entries) || B;
  if (N && (z = c(N.call(new e()))) !== Object.prototype && z.next) {
    if (!i && c(z) !== g_IteratorPrototype) {
      if (f) {
        f(z, g_IteratorPrototype);
      } else if (!s(z[w])) {
        h(z, w, I);
      }
    }
    l(z, T, true, true);
    if (i) {
      d[T] = I;
    }
  }
  if (a_PROPER && v === E && B && B.name !== E) {
    if (!i && a_CONFIGURABLE) {
      p(e_prototype, "name", E);
    } else {
      k = true;
      q = function () {
        return o(B, this);
      };
    }
  }
  if (v) {
    O = {
      values: _(E),
      keys: g ? q : _(A),
      entries: _(j),
    };
    if (R) {
      for (S in O) {
        if (!(!g_BUGGY_SAFARI_ITERATORS && !k && S in e_prototype)) {
          h(e_prototype, S, O[S]);
        }
      }
    } else {
      n(
        {
          target,
          proto: true,
          forced: g_BUGGY_SAFARI_ITERATORS || k,
        },
        O,
      );
    }
  }
  if ((!i || R) && e_prototype[w] !== q) {
    h(e_prototype, w, q, {
      name: v,
    });
  }
  d[target] = q;
  return O;
}
