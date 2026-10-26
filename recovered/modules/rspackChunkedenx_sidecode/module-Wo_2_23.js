import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-Yj_23.js";
import a from "./module-L7_23.js";
import s from "./module-V3_23.js";
import c from "./module-vj_24.js";
import u from "./module-dV_23.js";
import f from "./module-ng_24.js";
import l from "./module-d_24.js";
import h from "./module-Mi_23.js";
import v from "./module-Md_23.js";
import p from "./module-Su_23.js";
import d from "./module-TK_24.js";
import g from "./module-C_24.js";
import y from "./module-vE_23.js";
import b from "./module-X_24.js";
import m from "./module-lN_23.js";
import A from "./module-V0_23.js";
import x from "./module-Gl_23.js";
import w from "./module-uc_23.js";
import S from "./module-b_23.js";
import E from "./module-N_23.js";
const O = m("matchAll");
const R = "RegExp String";
const M = R + " Iterator";
const S_set = S.set;
const k = S.getterFor(M);
const N = i("".indexOf);
const P = i("".matchAll);
const forced =
  !!P &&
  !b(function () {
    P("a", /./);
  });
const D = a(
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
      return s(undefined, true);
    }
    const t_regexp = t.regexp;
    const t_string = t.string;
    const n = w(t_regexp, t_string);
    if (n === null) {
      t.done = true;
      return s(undefined, true);
    }
    if (t.global) {
      if (f(n[0]) === "") {
        t_regexp.lastIndex = x(t_string, u(t_regexp.lastIndex), t.unicode);
      }
    } else {
      t.done = true;
    }
    return s(n, false);
  },
);
const C = function (t) {
  let r;
  let e;
  let n;
  const o = l(this);
  const i = f(t);
  const a = A(o, RegExp);
  const s = f(d(o));
  r = new a(a === RegExp ? o.source : o, s);
  e = !!~N(s, "g");
  n = !!~N(s, "u");
  r.lastIndex = u(o.lastIndex);
  return new D(r, i, e, n);
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
      const i = c(this);
      if (h(t)) {
        if (forced) {
          return P(i, t);
        }
      } else {
        if (p(t) && !~N(f(c(d(t))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return P(i, t);
        }
        if ((e = g(t, O)) === undefined && E && v(t) === "RegExp") {
          e = C;
        }
        if (e) {
          return o(e, t, i);
        }
      }
      r = f(i);
      n = RegExp(t, "g");
      if (E) {
        return o(C, n, r);
      }
      return n[O](r);
    },
  },
);
if (!(E || O in RegExp.prototype)) {
  y(RegExp.prototype, O, C);
}
