import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-Yj_7.js";
import a from "./module-L7_7.js";
import s from "./module-V3_7.js";
import u from "./module-vj_8.js";
import c from "./module-dV_7.js";
import f from "./module-ng_8.js";
import l from "./module-d_8.js";
import h from "./module-Mi_7.js";
import v from "./module-Md_7.js";
import p from "./module-Su_7.js";
import d from "./module-TK_8.js";
import g from "./module-C_8.js";
import y from "./module-vE_7.js";
import m from "./module-X_8.js";
import b from "./module-lN_7.js";
import A from "./module-V0_7.js";
import w from "./module-Gl_7.js";
import x from "./module-uc_7.js";
import E from "./module-b_7.js";
import S from "./module-N_7.js";
const O = b("matchAll");
const R = "RegExp String";
const M = R + " Iterator";
const E_set = E.set;
const k = E.getterFor(M);
const N = i("".indexOf);
const P = i("".matchAll);
const forced =
  !!P &&
  !m(function () {
    P("a", /./);
  });
const C = a(
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
    const r = k(this);
    if (r.done) {
      return s(undefined, true);
    }
    const r_regexp = r.regexp;
    const r_string = r.string;
    const n = x(r_regexp, r_string);
    if (n === null) {
      r.done = true;
      return s(undefined, true);
    }
    if (r.global) {
      if (f(n[0]) === "") {
        r_regexp.lastIndex = w(r_string, c(r_regexp.lastIndex), r.unicode);
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
  const o = l(this);
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
      if (h(r)) {
        if (forced) {
          return P(i, r);
        }
      } else {
        if (p(r) && !~N(f(u(d(r))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return P(i, r);
        }
        if ((e = g(r, O)) === undefined && S && v(r) === "RegExp") {
          e = D;
        }
        if (e) {
          return o(e, r, i);
        }
      }
      t = f(i);
      n = RegExp(r, "g");
      if (S) {
        return o(D, n, t);
      }
      return n[O](t);
    },
  },
);
if (!(S || O in RegExp.prototype)) {
  y(RegExp.prototype, O, D);
}
