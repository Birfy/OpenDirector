import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-Yj_6.js";
import i from "./module-L7_6.js";
import s from "./module-V3_6.js";
import c from "./module-vj_7.js";
import u from "./module-dV_6.js";
import f from "./module-ng_7.js";
import l from "./module-d_7.js";
import h from "./module-Mi_6.js";
import p from "./module-Md_6.js";
import v from "./module-Su_6.js";
import d from "./module-TK_7.js";
import g from "./module-C_7.js";
import y from "./module-vE_6.js";
import m from "./module-X_7.js";
import b from "./module-lN_6.js";
import A from "./module-V0_6.js";
import w from "./module-Gl_6.js";
import x from "./module-uc_6.js";
import E from "./module-b_6.js";
import S from "./module-N_6.js";
const O = b("matchAll");
const R = "RegExp String";
const M = R + " Iterator";
const E_set = E.set;
const k = E.getterFor(M);
const F = a("".indexOf);
const N = a("".matchAll);
const forced =
  !!N &&
  !m(function () {
    N("a", /./);
  });
const C = i(
  function (regexp, string, global, unicode) {
    E_set(this, {
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
    const n = x(t_regexp, t_string);
    if (n === null) {
      t.done = true;
      return s(undefined, true);
    }
    if (t.global) {
      if (f(n[0]) === "") {
        t_regexp.lastIndex = w(t_string, u(t_regexp.lastIndex), t.unicode);
      }
    } else {
      t.done = true;
    }
    return s(n, false);
  },
);
const D = function (t) {
  let r;
  let e;
  let n;
  const o = l(this);
  const a = f(t);
  const i = A(o, RegExp);
  const s = f(d(o));
  r = new i(i === RegExp ? o.source : o, s);
  e = !!~F(s, "g");
  n = !!~F(s, "u");
  r.lastIndex = u(o.lastIndex);
  return new C(r, a, e, n);
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
      const a = c(this);
      if (h(t)) {
        if (forced) {
          return N(a, t);
        }
      } else {
        if (v(t) && !~F(f(c(d(t))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return N(a, t);
        }
        if ((e = g(t, O)) === undefined && S && p(t) === "RegExp") {
          e = D;
        }
        if (e) {
          return o(e, t, a);
        }
      }
      r = f(a);
      n = RegExp(t, "g");
      if (S) {
        return o(D, n, r);
      }
      return n[O](r);
    },
  },
);
if (!(S || O in RegExp.prototype)) {
  y(RegExp.prototype, O, D);
}
