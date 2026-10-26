import n from "./module-A_16.js";
import o from "./module-M_2_15.js";
import i from "./module-Yj_15.js";
import a from "./module-L7_15.js";
import s from "./module-V3_15.js";
import u from "./module-vj_16.js";
import c from "./module-dV_15.js";
import f from "./module-ng_16.js";
import h from "./module-d_16.js";
import l from "./module-Mi_15.js";
import v from "./module-Md_15.js";
import p from "./module-Su_15.js";
import d from "./module-TK_16.js";
import g from "./module-C_16.js";
import y from "./module-vE_15.js";
import b from "./module-X_16.js";
import m from "./module-lN_15.js";
import A from "./module-V0_15.js";
import x from "./module-Gl_15.js";
import w from "./module-uc_15.js";
import S from "./module-b_15.js";
import E from "./module-N_15.js";
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
const C = function (r) {
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
  return new D(t, i, e, n);
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
          e = C;
        }
        if (e) {
          return o(e, r, i);
        }
      }
      t = f(i);
      n = RegExp(r, "g");
      if (E) {
        return o(C, n, t);
      }
      return n[O](t);
    },
  },
);
if (!(E || O in RegExp.prototype)) {
  y(RegExp.prototype, O, C);
}
