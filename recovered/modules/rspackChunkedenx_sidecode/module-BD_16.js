import n from "./module-r9_16.js";
import o from "./module-J_17.js";
import i from "./module-O9_16.js";
import a from "./module-Ze_2_16.js";
import s from "./module-JD_17.js";
import u from "./module-h_17.js";
import { f as f_1 } from "./module-vV_16.js";
import f from "./module-e_16.js";
import l from "./module-Su_16.js";
import h from "./module-ng_17.js";
import v from "./module-TK_17.js";
import p from "./module-Tc_16.js";
import d from "./module-T_2_16.js";
import g from "./module-vE_16.js";
import y from "./module-X_17.js";
import m from "./module-D_2_16.js";
import _b from "./module-b_16.js";
import A from "./module-FG_16.js";
import x from "./module-lN_16.js";
import w from "./module-e0_16.js";
import S from "./module-yZ_16.js";
const _b_enforce = _b.enforce;
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
const D = /a/g;
const C = new o_RegExp(P) !== P;
const p_MISSED_STICKY = p.MISSED_STICKY;
const p_UNSUPPORTED_Y = p.UNSUPPORTED_Y;
const U =
  n &&
  (!C ||
    p_MISSED_STICKY ||
    w ||
    S ||
    y(function () {
      D[E] = false;
      return (
        o_RegExp(P) !== P ||
        o_RegExp(D) === D ||
        String(o_RegExp(P, "i")) !== "/a/i"
      );
    }));
const V = (t) => {
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
const Y = (t) => {
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
      f += r;
    } else {
      o += r;
    }
  }
  return [o, i];
};
if (a("RegExp", U)) {
  const B = function (t, r) {
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
    let m = t;
    if (!p && d && g && t.constructor === B) {
      return t;
    }
    if (d || f(O_prototype, t)) {
      t = t.source;
      if (g) {
        r = v(m);
      }
    }
    t = t === undefined ? "" : h(t);
    r = r === undefined ? "" : h(r);
    m = t;
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
      t = (i = Y(t))[0];
      y = i[1];
    }
    a = s(o_RegExp(t, r), p ? this : O_prototype, B);
    if (n || o || y.length) {
      c = _b_enforce(a);
      if (n) {
        c.dotAll = true;
        c.raw = B(V(t), e);
      }
      if (o) {
        c.sticky = true;
      }
      if (y.length) {
        c.groups = y;
      }
    }
    if (t !== m) {
      try {
        u(a, "source", m === "" ? "(?:)" : m);
      } catch (t) {}
    }
    return a;
  };
  for (let X = f_1(o_RegExp), W = 0; X.length > W;) {
    d(B, o_RegExp, X[W++]);
  }
  O_prototype.constructor = B;
  B.prototype = O_prototype;
  g(o, "RegExp", B, {
    constructor: true,
  });
}
A("RegExp");
