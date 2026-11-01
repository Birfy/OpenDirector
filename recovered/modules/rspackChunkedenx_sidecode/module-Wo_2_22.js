import n from "./module-A_23.js";
import i from "./module-M_2_22.js";
import o from "./module-Yj_22.js";
import s from "./module-L7_22.js";
import a from "./module-V3_22.js";
import u from "./module-vj_23.js";
import c from "./module-dV_22.js";
import f from "./module-ng_23.js";
import h from "./module-d_23.js";
import l from "./module-Mi_22.js";
import v from "./module-Md_22.js";
import p from "./module-Su_22.js";
import d from "./module-TK_23.js";
import g from "./module-C_23.js";
import y from "./module-vE_22.js";
import b from "./module-X_23.js";
import m from "./module-lN_22.js";
import A from "./module-V0_22.js";
import x from "./module-Gl_22.js";
import w from "./module-uc_22.js";
import S from "./module-b_22.js";
import E from "./module-N_22.js";
const O = m("matchAll");
const R = "RegExp String";
const M = R + " Iterator";
const S_set = S.set;
const k = S.getterFor(M);
const N = o("".indexOf);
const F = o("".matchAll);
const forced =
  !!F &&
  !b(function () {
    F("a", /./);
  });
const C = s(
  function (regexp, string, global, unicode) {
    S_set(this, {
      type: M,
      regexp,
      string,
      global,
      unicode,
      done: false,
    });
  },
  R,
  function () {
    const t = k(this);
    if (t.done) {
      return a(undefined, true);
    }
    const t_regexp = t.regexp;
    const t_string = t.string;
    const n = w(t_regexp, t_string);
    if (n === null) {
      t.done = true;
      return a(undefined, true);
    }
    if (t.global) {
      if (f(n[0]) === "") {
        t_regexp.lastIndex = x(t_string, c(t_regexp.lastIndex), t.unicode);
      }
    } else {
      t.done = true;
    }
    return a(n, false);
  },
);
const D = function (t) {
  let r;
  let e;
  let n;
  const i = h(this);
  const o = f(t);
  const s = A(i, RegExp);
  const a = f(d(i));
  r = new s(s === RegExp ? i.source : i, a);
  e = !!~N(a, "g");
  n = !!~N(a, "u");
  r.lastIndex = c(i.lastIndex);
  return new C(r, o, e, n);
};
n(
  {
    target: "String",
    proto: true,
    forced,
  },
  {
    matchAll: function (t) {
      let r;
      let e;
      let n;
      const o = u(this);
      if (l(t)) {
        if (forced) {
          return F(o, t);
        }
      } else {
        if (p(t) && !~N(f(u(d(t))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return F(o, t);
        }
        if ((e = g(t, O)) === undefined && E && v(t) === "RegExp") {
          e = D;
        }
        if (e) {
          return i(e, t, o);
        }
      }
      r = f(o);
      n = RegExp(t, "g");
      if (E) {
        return i(D, n, r);
      }
      return n[O](r);
    },
  },
);
if (!(E || O in RegExp.prototype)) {
  y(RegExp.prototype, O, D);
}
