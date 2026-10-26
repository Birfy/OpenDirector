import n from "./module-r9_19.js";
import o from "./module-J_20.js";
import i from "./module-O9_19.js";
import a from "./module-Ze_2_19.js";
import s from "./module-JD_20.js";
import u from "./module-h_20.js";
import { f as f_1 } from "./module-vV_19.js";
import f from "./module-e_19.js";
import l from "./module-Su_19.js";
import h from "./module-ng_20.js";
import v from "./module-TK_20.js";
import p from "./module-Tc_19.js";
import d from "./module-T_2_19.js";
import g from "./module-vE_19.js";
import y from "./module-X_20.js";
import b from "./module-D_2_19.js";
import _m from "./module-b_19.js";
import A from "./module-FG_19.js";
import x from "./module-lN_19.js";
import w from "./module-e0_19.js";
import S from "./module-yZ_19.js";
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
  const _ = function (r, t) {
    let e;
    let n;
    let o;
    let i;
    let a;
    let c;
    const p = f(O_prototype, this);
    const d = l(r);
    const g = t === undefined;
    let y = [];
    let b = r;
    if (!p && d && g && r.constructor === _) {
      return r;
    }
    if (d || f(O_prototype, r)) {
      r = r.source;
      if (g) {
        t = v(b);
      }
    }
    r = r === undefined ? "" : h(r);
    t = t === undefined ? "" : h(t);
    b = r;
    if (w && "dotAll" in P && (n = !!t && j(t, "s") > -1)) {
      t = T(t, /s/g, "");
    }
    e = t;
    if (
      p_MISSED_STICKY &&
      "sticky" in P &&
      (o = !!t && j(t, "y") > -1) &&
      p_UNSUPPORTED_Y
    ) {
      t = T(t, /y/g, "");
    }
    if (S) {
      r = (i = B(r))[0];
      y = i[1];
    }
    a = s(o_RegExp(r, t), p ? this : O_prototype, _);
    if (n || o || y.length) {
      c = _m_enforce(a);
      if (n) {
        c.dotAll = true;
        c.raw = _(Y(r), e);
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
