import n from "./module-r9_11.js";
import o from "./module-J_12.js";
import i from "./module-O9_11.js";
import a from "./module-Ze_2_11.js";
import s from "./module-JD_12.js";
import u from "./module-h_12.js";
import { f as f_1 } from "./module-vV_11.js";
import f from "./module-e_11.js";
import h from "./module-Su_11.js";
import l from "./module-ng_12.js";
import v from "./module-TK_12.js";
import p from "./module-Tc_11.js";
import d from "./module-T_2_11.js";
import g from "./module-vE_11.js";
import y from "./module-X_12.js";
import b from "./module-D_2_11.js";
import _m from "./module-b_11.js";
import A from "./module-FG_11.js";
import x from "./module-lN_11.js";
import w from "./module-e0_11.js";
import S from "./module-yZ_11.js";
const _m_enforce = _m.enforce;
const E = x("match");
const o_RegExp = o.RegExp;
const O_prototype = o_RegExp.prototype;
const o_SyntaxError = o.SyntaxError;
const I = i(O_prototype.exec);
const k = i("".charAt);
const j = i("".replace);
const T = i("".indexOf);
const N = i("".slice);
const F = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const P = /a/g;
const C = /a/g;
const D = new o_RegExp(P) !== P;
const p_MISSED_STICKY = p.MISSED_STICKY;
const p_UNSUPPORTED_Y = p.UNSUPPORTED_Y;
const V =
  n &&
  (!D ||
    p_MISSED_STICKY ||
    w ||
    S ||
    y(function () {
      C[E] = false;
      return (
        o_RegExp(P) !== P ||
        o_RegExp(C) === C ||
        String(o_RegExp(P, "i")) !== "/a/i"
      );
    }));
const Y = (r) => {
  let t;
  for (var e = r.length, n = 0, o = "", i = false; n <= e; n++) {
    if ((t = k(r, n)) === "\\") {
      o += t + k(r, ++n);
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
const B = (r) => {
  let t;
  for (
    var e = r.length,
      n = 0,
      o = "",
      i = [],
      a = {},
      s = false,
      u = false,
      c = 0,
      f = "";
    n <= e;
    n++
  ) {
    if ((t = k(r, n)) === "\\") {
      t += k(r, ++n);
    } else if (t === "]") {
      s = false;
    } else if (!s) {
      switch (true) {
        case t === "[":
          s = true;
          break;
        case t === "(":
          if (I(F, N(r, n + 1))) {
            n += 2;
            u = true;
          }
          o += t;
          c++;
          continue;
        case t === ">" && u:
          if (f === "" || b(a, f)) {
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
if (a("RegExp", V)) {
  const W = function (r, t) {
    let e;
    let n;
    let o;
    let i;
    let a;
    let c;
    const p = f(O_prototype, this);
    const d = h(r);
    const g = t === undefined;
    let y = [];
    let b = r;
    if (!p && d && g && r.constructor === W) {
      return r;
    }
    if (d || f(O_prototype, r)) {
      r = r.source;
      if (g) {
        t = v(b);
      }
    }
    r = r === undefined ? "" : l(r);
    t = t === undefined ? "" : l(t);
    b = r;
    if (w && "dotAll" in P && (n = !!t && T(t, "s") > -1)) {
      t = j(t, /s/g, "");
    }
    e = t;
    if (
      p_MISSED_STICKY &&
      "sticky" in P &&
      (o = !!t && T(t, "y") > -1) &&
      p_UNSUPPORTED_Y
    ) {
      t = j(t, /y/g, "");
    }
    if (S) {
      r = (i = B(r))[0];
      y = i[1];
    }
    a = s(o_RegExp(r, t), p ? this : O_prototype, W);
    if (n || o || y.length) {
      c = _m_enforce(a);
      if (n) {
        c.dotAll = true;
        c.raw = W(Y(r), e);
      }
      if (o) {
        c.sticky = true;
      }
      if (y.length) {
        c.groups = y;
      }
    }
    if (r !== b) {
      try {
        u(a, "source", b === "" ? "(?:)" : b);
      } catch (r) {}
    }
    return a;
  };
  for (let X = f_1(o_RegExp), G = 0; X.length > G;) {
    d(W, o_RegExp, X[G++]);
  }
  O_prototype.constructor = W;
  W.prototype = O_prototype;
  g(o, "RegExp", W, {
    constructor: true,
  });
}
A("RegExp");
