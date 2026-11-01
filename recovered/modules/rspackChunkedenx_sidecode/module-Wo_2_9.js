import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-Yj_9.js";
import a from "./module-L7_9.js";
import s from "./module-V3_9.js";
import u from "./module-vj_10.js";
import c from "./module-dV_9.js";
import f from "./module-ng_10.js";
import l from "./module-d_10.js";
import h from "./module-Mi_9.js";
import v from "./module-Md_9.js";
import d from "./module-Su_9.js";
import p from "./module-TK_10.js";
import g from "./module-C_10.js";
import y from "./module-vE_9.js";
import m from "./module-X_10.js";
import b from "./module-lN_9.js";
import w from "./module-V0_9.js";
import A from "./module-Gl_9.js";
import x from "./module-uc_9.js";
import E from "./module-b_9.js";
import S from "./module-N_9.js";
const O = b("matchAll");
const _ = "RegExp String";
const R = _ + " Iterator";
const E_set = E.set;
const I = E.getterFor(R);
const N = i("".indexOf);
const j = i("".matchAll);
const forced =
  !!j &&
  !m(function () {
    j("a", /./);
  });
const D = a(
  function (regexp, string, global, unicode) {
    E_set(this, {
      type: R,
      regexp,
      string,
      global,
      unicode,
      done: false,
    });
  },
  _,
  function () {
    const t = I(this);
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
        t_regexp.lastIndex = A(t_string, c(t_regexp.lastIndex), t.unicode);
      }
    } else {
      t.done = true;
    }
    return s(n, false);
  },
);
const F = function (t) {
  let e;
  let r;
  let n;
  const o = l(this);
  const i = f(t);
  const a = w(o, RegExp);
  const s = f(p(o));
  e = new a(a === RegExp ? o.source : o, s);
  r = !!~N(s, "g");
  n = !!~N(s, "u");
  e.lastIndex = c(o.lastIndex);
  return new D(e, i, r, n);
};
n(
  {
    target: "String",
    proto: true,
    forced,
  },
  {
    matchAll: function (t) {
      let e;
      let r;
      let n;
      const i = u(this);
      if (h(t)) {
        if (forced) {
          return j(i, t);
        }
      } else {
        if (d(t) && !~N(f(u(p(t))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return j(i, t);
        }
        if ((r = g(t, O)) === undefined && S && v(t) === "RegExp") {
          r = F;
        }
        if (r) {
          return o(r, t, i);
        }
      }
      e = f(i);
      n = RegExp(t, "g");
      if (S) {
        return o(F, n, e);
      }
      return n[O](e);
    },
  },
);
if (!(S || O in RegExp.prototype)) {
  y(RegExp.prototype, O, F);
}
