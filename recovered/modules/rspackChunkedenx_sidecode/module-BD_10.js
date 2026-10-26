import n from "./module-r9_10.js";
import o from "./module-J_11.js";
import i from "./module-O9_10.js";
import a from "./module-Ze_2_10.js";
import s from "./module-JD_11.js";
import u from "./module-h_11.js";
import { f as f_1 } from "./module-vV_10.js";
import f from "./module-e_10.js";
import l from "./module-Su_10.js";
import h from "./module-ng_11.js";
import v from "./module-TK_11.js";
import p from "./module-Tc_10.js";
import d from "./module-T_2_10.js";
import g from "./module-vE_10.js";
import y from "./module-X_11.js";
import b from "./module-D_2_10.js";
import _m from "./module-b_10.js";
import A from "./module-FG_10.js";
import x from "./module-lN_10.js";
import w from "./module-e0_10.js";
import S from "./module-yZ_10.js";
const _m_enforce = _m.enforce;
const E = x("match");
const o_RegExp = o.RegExp;
const O_prototype = o_RegExp.prototype;
const o_SyntaxError = o.SyntaxError;
const I = i(O_prototype.exec);
const k = i("".charAt);
const T = i("".replace);
const j = i("".indexOf);
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
const Y = (t) => {
  let r;
  for (var e = t.length, n = 0, o = "", i = false; n <= e; n++) {
    if ((r = k(t, n)) === "\\") {
      o += r + k(t, ++n);
      continue;
    }
    if (i || r !== ".") {
      if (r === "[") {
        i = true;
      } else if (r === "]") {
        i = false;
      }
      o += r;
    } else {
      o += "[\\s\\S]";
    }
  }
  return o;
};
const B = (t) => {
  let r;
  for (
    var e = t.length,
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
    if ((r = k(t, n)) === "\\") {
      r += k(t, ++n);
    } else if (r === "]") {
      s = false;
    } else if (!s) {
      switch (true) {
        case r === "[":
          s = true;
          break;
        case r === "(":
          if (I(F, N(t, n + 1))) {
            n += 2;
            u = true;
          }
          o += r;
          c++;
          continue;
        case r === ">" && u:
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
      f += r;
    } else {
      o += r;
    }
  }
  return [o, i];
};
if (a("RegExp", V)) {
  const _ = function (t, r) {
    let e;
    let n;
    let o;
    let i;
    let a;
    let c;
    const p = f(O_prototype, this);
    const d = l(t);
    const g = r === undefined;
    let y = [];
    let b = t;
    if (!p && d && g && t.constructor === _) {
      return t;
    }
    if (d || f(O_prototype, t)) {
      t = t.source;
      if (g) {
        r = v(b);
      }
    }
    t = t === undefined ? "" : h(t);
    r = r === undefined ? "" : h(r);
    b = t;
    if (w && "dotAll" in P && (n = !!r && j(r, "s") > -1)) {
      r = T(r, /s/g, "");
    }
    e = r;
    if (
      p_MISSED_STICKY &&
      "sticky" in P &&
      (o = !!r && j(r, "y") > -1) &&
      p_UNSUPPORTED_Y
    ) {
      r = T(r, /y/g, "");
    }
    if (S) {
      t = (i = B(t))[0];
      y = i[1];
    }
    a = s(o_RegExp(t, r), p ? this : O_prototype, _);
    if (n || o || y.length) {
      c = _m_enforce(a);
      if (n) {
        c.dotAll = true;
        c.raw = _(Y(t), e);
      }
      if (o) {
        c.sticky = true;
      }
      if (y.length) {
        c.groups = y;
      }
    }
    if (t !== b) {
      try {
        u(a, "source", b === "" ? "(?:)" : b);
      } catch (t) {}
    }
    return a;
  };
  for (let X = f_1(o_RegExp), W = 0; X.length > W;) {
    d(_, o_RegExp, X[W++]);
  }
  O_prototype.constructor = _;
  _.prototype = O_prototype;
  g(o, "RegExp", _, {
    constructor: true,
  });
}
A("RegExp");
