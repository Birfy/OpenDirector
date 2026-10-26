import n from "./module-r9_21.js";
import i from "./module-J_22.js";
import o from "./module-O9_21.js";
import s from "./module-Ze_2_21.js";
import a from "./module-JD_22.js";
import u from "./module-h_22.js";
import { f as f_1 } from "./module-vV_21.js";
import f from "./module-e_21.js";
import h from "./module-Su_21.js";
import l from "./module-ng_22.js";
import v from "./module-TK_22.js";
import p from "./module-Tc_21.js";
import d from "./module-T_2_21.js";
import g from "./module-vE_21.js";
import y from "./module-X_22.js";
import b from "./module-D_2_21.js";
import _m from "./module-b_21.js";
import A from "./module-FG_21.js";
import x from "./module-lN_21.js";
import w from "./module-e0_21.js";
import S from "./module-yZ_21.js";
const _m_enforce = _m.enforce;
const E = x("match");
const i_RegExp = i.RegExp;
const O_prototype = i_RegExp.prototype;
const i_SyntaxError = i.SyntaxError;
const I = o(O_prototype.exec);
const k = o("".charAt);
const T = o("".replace);
const j = o("".indexOf);
const N = o("".slice);
const F = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const P = /a/g;
const C = /a/g;
const D = new i_RegExp(P) !== P;
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
        i_RegExp(P) !== P ||
        i_RegExp(C) === C ||
        String(i_RegExp(P, "i")) !== "/a/i"
      );
    }));
const Y = (t) => {
  let r;
  for (var e = t.length, n = 0, i = "", o = false; n <= e; n++) {
    if ((r = k(t, n)) === "\\") {
      i += r + k(t, ++n);
      continue;
    }
    if (o || r !== ".") {
      if (r === "[") {
        o = true;
      } else if (r === "]") {
        o = false;
      }
      i += r;
    } else {
      i += "[\\s\\S]";
    }
  }
  return i;
};
const B = (t) => {
  let r;
  for (
    var e = t.length,
      n = 0,
      i = "",
      o = [],
      s = {},
      a = false,
      u = false,
      c = 0,
      f = "";
    n <= e;
    n++
  ) {
    if ((r = k(t, n)) === "\\") {
      r += k(t, ++n);
    } else if (r === "]") {
      a = false;
    } else if (!a) {
      switch (true) {
        case r === "[":
          a = true;
          break;
        case r === "(":
          if (I(F, N(t, n + 1))) {
            n += 2;
            u = true;
          }
          i += r;
          c++;
          continue;
        case r === ">" && u:
          if (f === "" || b(s, f)) {
            throw new i_SyntaxError("Invalid capture group name");
          }
          s[f] = true;
          o[o.length] = [f, c];
          u = false;
          f = "";
          continue;
      }
    }
    if (u) {
      f += r;
    } else {
      i += r;
    }
  }
  return [i, o];
};
if (s("RegExp", V)) {
  const X = function (t, r) {
    let e;
    let n;
    let i;
    let o;
    let s;
    let c;
    const p = f(O_prototype, this);
    const d = h(t);
    const g = r === undefined;
    let y = [];
    let b = t;
    if (!p && d && g && t.constructor === X) {
      return t;
    }
    if (d || f(O_prototype, t)) {
      t = t.source;
      if (g) {
        r = v(b);
      }
    }
    t = t === undefined ? "" : l(t);
    r = r === undefined ? "" : l(r);
    b = t;
    if (w && "dotAll" in P && (n = !!r && j(r, "s") > -1)) {
      r = T(r, /s/g, "");
    }
    e = r;
    if (
      p_MISSED_STICKY &&
      "sticky" in P &&
      (i = !!r && j(r, "y") > -1) &&
      p_UNSUPPORTED_Y
    ) {
      r = T(r, /y/g, "");
    }
    if (S) {
      t = (o = B(t))[0];
      y = o[1];
    }
    s = a(i_RegExp(t, r), p ? this : O_prototype, X);
    if (n || i || y.length) {
      c = _m_enforce(s);
      if (n) {
        c.dotAll = true;
        c.raw = X(Y(t), e);
      }
      if (i) {
        c.sticky = true;
      }
      if (y.length) {
        c.groups = y;
      }
    }
    if (t !== b) {
      try {
        u(s, "source", b === "" ? "(?:)" : b);
      } catch (t) {}
    }
    return s;
  };
  for (let W = f_1(i_RegExp), _ = 0; W.length > _;) {
    d(X, i_RegExp, W[_++]);
  }
  O_prototype.constructor = X;
  X.prototype = O_prototype;
  g(i, "RegExp", X, {
    constructor: true,
  });
}
A("RegExp");
