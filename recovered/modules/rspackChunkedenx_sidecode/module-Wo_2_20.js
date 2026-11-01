import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import i from "./module-Yj_20.js";
import a from "./module-L7_20.js";
import s from "./module-V3_20.js";
import c from "./module-vj_21.js";
import u from "./module-dV_20.js";
import f from "./module-ng_21.js";
import l from "./module-d_21.js";
import h from "./module-Mi_20.js";
import v from "./module-Md_20.js";
import p from "./module-Su_20.js";
import d from "./module-TK_21.js";
import g from "./module-C_21.js";
import y from "./module-vE_20.js";
import m from "./module-X_21.js";
import b from "./module-lN_20.js";
import w from "./module-V0_20.js";
import A from "./module-Gl_20.js";
import x from "./module-uc_20.js";
import S from "./module-b_20.js";
import E from "./module-N_20.js";
const O = b("matchAll");
const R = "RegExp String";
const M = R + " Iterator";
const S_set = S.set;
const _ = S.getterFor(M);
const j = i("".indexOf);
const N = i("".matchAll);
const forced =
  !!N &&
  !m(function () {
    N("a", /./);
  });
const P = a(
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
    const t = _(this);
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
        t_regexp.lastIndex = A(t_string, u(t_regexp.lastIndex), t.unicode);
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
  const a = w(o, RegExp);
  const s = f(d(o));
  r = new a(a === RegExp ? o.source : o, s);
  e = !!~j(s, "g");
  n = !!~j(s, "u");
  r.lastIndex = u(o.lastIndex);
  return new P(r, i, e, n);
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
          return N(i, t);
        }
      } else {
        if (p(t) && !~j(f(c(d(t))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return N(i, t);
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
