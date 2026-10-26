import n from "./module-g.js";
import o from "./module-p3.js";
import i from "./module-Kp.js";
import a from "./module-ib_3.js";
import s from "./module-SM_4.js";
import u from "./module-H_2.js";
import c from "./module-L_2.js";
import f from "./module-BC_2.js";
import l from "./module-IF_2.js";
import p from "./module-D.js";
import h from "./module-C.js";
import v from "./module-hyV.js";
import d from "./module-zV_3.js";
import g from "./module-T_2.js";
import y from "./module-xX_2.js";
import m from "./module-VV_4.js";
import x from "./module-Nt_3.js";
import b from "./module-MV_4.js";
import w from "./module-n4.js";
import A from "./module-Ct_3.js";
import E from "./module-G_2.js";
import j from "./module-K.js";
const I = x("matchAll");
const R = "RegExp String";
const z = R + " Iterator";
const E_set = E.set;
const S = E.getterFor(z);
const k = i("".indexOf);
const M = i("".matchAll);
const forced =
  !!M &&
  !m(function () {
    M("a", /./);
  });
const q = a(
  function (regexp, string, global, unicode) {
    E_set(this, {
      type: z,
      regexp,
      string,
      global,
      unicode,
      done: false,
    });
  },
  R,
  function () {
    const e = S(this);
    if (e.done) {
      return s(undefined, true);
    }
    const e_regexp = e.regexp;
    const e_string = e.string;
    const n = A(e_regexp, e_string);
    if (n === null) {
      e.done = true;
      return s(undefined, true);
    }
    if (e.global) {
      if (f(n[0]) === "") {
        e_regexp.lastIndex = w(e_string, c(e_regexp.lastIndex), e.unicode);
      }
    } else {
      e.done = true;
    }
    return s(n, false);
  },
);
const N = function (e) {
  let t;
  let r;
  let n;
  const o = l(this);
  const i = f(e);
  const a = b(o, RegExp);
  const s = f(d(o));
  t = new a(a === RegExp ? o.source : o, s);
  r = !!~k(s, "g");
  n = !!~k(s, "u");
  t.lastIndex = c(o.lastIndex);
  return new q(t, i, r, n);
};
n(
  {
    target: "String",
    proto: true,
    forced,
  },
  {
    matchAll: function (e) {
      let t;
      let r;
      let n;
      const i = u(this);
      if (p(e)) {
        if (forced) {
          return M(i, e);
        }
      } else {
        if (v(e) && !~k(f(u(d(e))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return M(i, e);
        }
        if ((r = g(e, I)) === undefined && j && h(e) === "RegExp") {
          r = N;
        }
        if (r) {
          return o(r, e, i);
        }
      }
      t = f(i);
      n = RegExp(e, "g");
      if (j) {
        return o(N, n, t);
      }
      return n[I](t);
    },
  },
);
if (!(j || I in RegExp.prototype)) {
  y(RegExp.prototype, I, N);
}
