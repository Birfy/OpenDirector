import n from "./module-A_14.js";
import o from "./module-M_2_13.js";
import i from "./module-Yj_13.js";
import a from "./module-L7_13.js";
import s from "./module-V3_13.js";
import u from "./module-vj_14.js";
import c from "./module-dV_13.js";
import f from "./module-ng_14.js";
import h from "./module-d_14.js";
import l from "./module-Mi_13.js";
import v from "./module-Md_13.js";
import p from "./module-Su_13.js";
import d from "./module-TK_14.js";
import g from "./module-C_14.js";
import y from "./module-vE_13.js";
import b from "./module-X_14.js";
import m from "./module-lN_13.js";
import A from "./module-V0_13.js";
import x from "./module-Gl_13.js";
import w from "./module-uc_13.js";
import S from "./module-b_13.js";
import E from "./module-N_13.js";
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
