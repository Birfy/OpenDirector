import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-Yj.js";
import a from "./module-L7.js";
import s from "./module-V3.js";
import u from "./module-vj.js";
import c from "./module-dV.js";
import f from "./module-ng.js";
import h from "./module-d.js";
import l from "./module-Mi.js";
import v from "./module-Md.js";
import p from "./module-Su.js";
import d from "./module-TK.js";
import g from "./module-C.js";
import y from "./module-vE.js";
import b from "./module-X.js";
import m from "./module-lN.js";
import A from "./module-V0.js";
import x from "./module-Gl.js";
import w from "./module-uc.js";
import S from "./module-b.js";
import E from "./module-N.js";
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
        t_regexp.lastIndex = x(t_string, c(t_regexp.lastIndex), t.unicode);
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
  const o = h(this);
  const i = f(t);
  const a = A(o, RegExp);
  const s = f(d(o));
  r = new a(a === RegExp ? o.source : o, s);
  e = !!~N(s, "g");
  n = !!~N(s, "u");
  r.lastIndex = c(o.lastIndex);
  return new C(r, i, e, n);
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
      const i = u(this);
      if (l(t)) {
        if (forced) {
          return F(i, t);
        }
      } else {
        if (p(t) && !~N(f(u(d(t))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return F(i, t);
        }
        if ((e = g(t, O)) === undefined && E && v(t) === "RegExp") {
          e = D;
        }
        if (e) {
          return o(e, t, i);
        }
      }
      r = f(i);
      n = RegExp(t, "g");
      if (E) {
        return o(D, n, r);
      }
      return n[O](r);
    },
  },
);
if (!(E || O in RegExp.prototype)) {
  y(RegExp.prototype, O, D);
}
