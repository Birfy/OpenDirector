import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-Yj_11.js";
import a from "./module-L7_11.js";
import s from "./module-V3_11.js";
import u from "./module-vj_12.js";
import c from "./module-dV_11.js";
import f from "./module-ng_12.js";
import h from "./module-d_12.js";
import l from "./module-Mi_11.js";
import v from "./module-Md_11.js";
import p from "./module-Su_11.js";
import d from "./module-TK_12.js";
import g from "./module-C_12.js";
import y from "./module-vE_11.js";
import b from "./module-X_12.js";
import m from "./module-lN_11.js";
import A from "./module-V0_11.js";
import x from "./module-Gl_11.js";
import w from "./module-uc_11.js";
import S from "./module-b_11.js";
import E from "./module-N_11.js";
const O = m("matchAll");
const R = "RegExp String";
const M = R + " Iterator";
const S_set = S.set;
const k = S.getterFor(M);
const N = i("".indexOf);
const F = i("".matchAll);
const forced =
  !!F &&
  !b(function () {
    F("a", /./);
  });
const C = a(
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
    const r = k(this);
    if (r.done) {
      return s(undefined, true);
    }
    const r_regexp = r.regexp;
    const r_string = r.string;
    const n = w(r_regexp, r_string);
    if (n === null) {
      r.done = true;
      return s(undefined, true);
    }
    if (r.global) {
      if (f(n[0]) === "") {
        r_regexp.lastIndex = x(r_string, c(r_regexp.lastIndex), r.unicode);
      }
    } else {
      r.done = true;
    }
    return s(n, false);
  },
);
const D = function (r) {
  let t;
  let e;
  let n;
  const o = h(this);
  const i = f(r);
  const a = A(o, RegExp);
  const s = f(d(o));
  t = new a(a === RegExp ? o.source : o, s);
  e = !!~N(s, "g");
  n = !!~N(s, "u");
  t.lastIndex = c(o.lastIndex);
  return new C(t, i, e, n);
};
n(
  {
    target: "String",
    proto: true,
    forced,
  },
  {
    matchAll: function (r) {
      let t;
      let e;
      let n;
      const i = u(this);
      if (l(r)) {
        if (forced) {
          return F(i, r);
        }
      } else {
        if (p(r) && !~N(f(u(d(r))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return F(i, r);
        }
        if ((e = g(r, O)) === undefined && E && v(r) === "RegExp") {
          e = D;
        }
        if (e) {
          return o(e, r, i);
        }
      }
      t = f(i);
      n = RegExp(r, "g");
      if (E) {
        return o(D, n, t);
      }
      return n[O](t);
    },
  },
);
if (!(E || O in RegExp.prototype)) {
  y(RegExp.prototype, O, D);
}
