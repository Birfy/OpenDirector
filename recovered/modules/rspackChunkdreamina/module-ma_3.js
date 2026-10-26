import n from "./module-F.js";
import o from "./module-u.js";
import i from "./module-o.js";
import a from "./module-I8.js";
import s from "./module-U_2.js";
import u from "./module-z3.js";
import { f as f_1 } from "./module-Fb_2.js";
import f from "./module-V8.js";
import l from "./module-hyV.js";
import p from "./module-BC_2.js";
import h from "./module-zV_3.js";
import v from "./module-wu_4.js";
import d from "./module-go_3.js";
import g from "./module-xX_2.js";
import y from "./module-VV_4.js";
import m from "./module-h.js";
import _x from "./module-G_2.js";
import b from "./module-DP_2.js";
import w from "./module-Nt_3.js";
import A from "./module-w9.js";
import E from "./module-bQ_2.js";
const _x_enforce = _x.enforce;
const j = w("match");
const o_RegExp = o.RegExp;
const I_prototype = o_RegExp.prototype;
const o_SyntaxError = o.SyntaxError;
const O = i(I_prototype.exec);
const S = i("".charAt);
const _ = i("".replace);
const T = i("".indexOf);
const k = i("".slice);
const M = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const B = /a/g;
const q = /a/g;
const N = new o_RegExp(B) !== B;
const v_MISSED_STICKY = v.MISSED_STICKY;
const v_UNSUPPORTED_Y = v.UNSUPPORTED_Y;
const C =
  n &&
  (!N ||
    v_MISSED_STICKY ||
    A ||
    E ||
    y(function () {
      q[j] = false;
      return (
        o_RegExp(B) !== B ||
        o_RegExp(q) === q ||
        String(o_RegExp(B, "i")) !== "/a/i"
      );
    }));
const V = (e) => {
  let t;
  for (var r = e.length, n = 0, o = "", i = false; n <= r; n++) {
    if ((t = S(e, n)) === "\\") {
      o += t + S(e, ++n);
      continue;
    }
    if (i || t !== ".") {
      if (t === "[") {
        i = true;
      } else if (t === "]") {
        i = false;
      }
      o += t;
    } else {
      o += "[\\s\\S]";
    }
  }
  return o;
};
const L = (e) => {
  let t;
  for (
    var r = e.length,
      n = 0,
      o = "",
      i = [],
      a = {},
      s = false,
      u = false,
      c = 0,
      f = "";
    n <= r;
    n++
  ) {
    if ((t = S(e, n)) === "\\") {
      t += S(e, ++n);
    } else if (t === "]") {
      s = false;
    } else if (!s) {
      switch (true) {
        case t === "[":
          s = true;
          break;
        case t === "(":
          if (O(M, k(e, n + 1))) {
            n += 2;
            u = true;
          }
          o += t;
          c++;
          continue;
        case t === ">" && u:
          if (f === "" || m(a, f)) {
            throw new o_SyntaxError("Invalid capture group name");
          }
          a[f] = true;
          i[i.length] = [f, c];
          u = false;
          f = "";
          continue;
      }
    }
    if (u) {
      f += t;
    } else {
      o += t;
    }
  }
  return [o, i];
};
if (a("RegExp", C)) {
  const U = function (e, t) {
    let r;
    let n;
    let o;
    let i;
    let a;
    let c;
    const v = f(I_prototype, this);
    const d = l(e);
    const g = t === undefined;
    let y = [];
    let m = e;
    if (!v && d && g && e.constructor === U) {
      return e;
    }
    if (d || f(I_prototype, e)) {
      e = e.source;
      if (g) {
        t = h(m);
      }
    }
    e = e === undefined ? "" : p(e);
    t = t === undefined ? "" : p(t);
    m = e;
    if (A && "dotAll" in B && (n = !!t && T(t, "s") > -1)) {
      t = _(t, /s/g, "");
    }
    r = t;
    if (
      v_MISSED_STICKY &&
      "sticky" in B &&
      (o = !!t && T(t, "y") > -1) &&
      v_UNSUPPORTED_Y
    ) {
      t = _(t, /y/g, "");
    }
    if (E) {
      e = (i = L(e))[0];
      y = i[1];
    }
    a = s(o_RegExp(e, t), v ? this : I_prototype, U);
    if (n || o || y.length) {
      c = _x_enforce(a);
      if (n) {
        c.dotAll = true;
        c.raw = U(V(e), r);
      }
      if (o) {
        c.sticky = true;
      }
      if (y.length) {
        c.groups = y;
      }
    }
    if (e !== m) {
      try {
        u(a, "source", m === "" ? "(?:)" : m);
      } catch (e) {}
    }
    return a;
  };
  for (let D = f_1(o_RegExp), G = 0; D.length > G;) {
    d(U, o_RegExp, D[G++]);
  }
  I_prototype.constructor = U;
  U.prototype = I_prototype;
  g(o, "RegExp", U, {
    constructor: true,
  });
}
b("RegExp");
