import n from "./module-r9_6.js";
import o from "./module-J_7.js";
import a from "./module-O9_6.js";
import i from "./module-Ze_2_6.js";
import s from "./module-JD_7.js";
import c from "./module-h_7.js";
import { f as f_1 } from "./module-vV_6.js";
import f from "./module-e_6.js";
import l from "./module-Su_6.js";
import h from "./module-ng_7.js";
import p from "./module-TK_7.js";
import v from "./module-Tc_6.js";
import d from "./module-T_2_6.js";
import g from "./module-vE_6.js";
import y from "./module-X_7.js";
import m from "./module-D_2_6.js";
import _b from "./module-b_6.js";
import A from "./module-FG_6.js";
import w from "./module-lN_6.js";
import x from "./module-e0_6.js";
import E from "./module-yZ_6.js";
const _b_enforce = _b.enforce;
const S = w("match");
const o_RegExp = o.RegExp;
const O_prototype = o_RegExp.prototype;
const o_SyntaxError = o.SyntaxError;
const I = a(O_prototype.exec);
const k = a("".charAt);
const T = a("".replace);
const j = a("".indexOf);
const F = a("".slice);
const N = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const P = /a/g;
const C = /a/g;
const D = new o_RegExp(P) !== P;
const v_MISSED_STICKY = v.MISSED_STICKY;
const v_UNSUPPORTED_Y = v.UNSUPPORTED_Y;
const U =
  n &&
  (!D ||
    v_MISSED_STICKY ||
    x ||
    E ||
    y(function () {
      C[S] = false;
      return (
        o_RegExp(P) !== P ||
        o_RegExp(C) === C ||
        String(o_RegExp(P, "i")) !== "/a/i"
      );
    }));
const V = (t) => {
  let r;
  for (var e = t.length, n = 0, o = "", a = false; n <= e; n++) {
    if ((r = k(t, n)) === "\\") {
      o += r + k(t, ++n);
      continue;
    }
    if (a || r !== ".") {
      if (r === "[") {
        a = true;
      } else if (r === "]") {
        a = false;
      }
      o += r;
    } else {
      o += "[\\s\\S]";
    }
  }
  return o;
};
const W = (t) => {
  let r;
  for (
    var e = t.length,
      n = 0,
      o = "",
      a = [],
      i = {},
      s = false,
      c = false,
      u = 0,
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
          if (I(N, F(t, n + 1))) {
            n += 2;
            c = true;
          }
          o += r;
          u++;
          continue;
        case r === ">" && c:
          if (f === "" || m(i, f)) {
            throw new o_SyntaxError("Invalid capture group name");
          }
          i[f] = true;
          a[a.length] = [f, u];
          c = false;
          f = "";
          continue;
      }
    }
    if (c) {
      f += r;
    } else {
      o += r;
    }
  }
  return [o, a];
};
if (i("RegExp", U)) {
  const Y = function (t, r) {
    let e;
    let n;
    let o;
    let a;
    let i;
    let u;
    const v = f(O_prototype, this);
    const d = l(t);
    const g = r === undefined;
    let y = [];
    let m = t;
    if (!v && d && g && t.constructor === Y) {
      return t;
    }
    if (d || f(O_prototype, t)) {
      t = t.source;
      if (g) {
        r = p(m);
      }
    }
    t = t === undefined ? "" : h(t);
    r = r === undefined ? "" : h(r);
    m = t;
    if (x && "dotAll" in P && (n = !!r && j(r, "s") > -1)) {
      r = T(r, /s/g, "");
    }
    e = r;
    if (
      v_MISSED_STICKY &&
      "sticky" in P &&
      (o = !!r && j(r, "y") > -1) &&
      v_UNSUPPORTED_Y
    ) {
      r = T(r, /y/g, "");
    }
    if (E) {
      t = (a = W(t))[0];
      y = a[1];
    }
    i = s(o_RegExp(t, r), v ? this : O_prototype, Y);
    if (n || o || y.length) {
      u = _b_enforce(i);
      if (n) {
        u.dotAll = true;
        u.raw = Y(V(t), e);
      }
      if (o) {
        u.sticky = true;
      }
      if (y.length) {
        u.groups = y;
      }
    }
    if (t !== m) {
      try {
        c(i, "source", m === "" ? "(?:)" : m);
      } catch (t) {}
    }
    return i;
  };
  for (let B = f_1(o_RegExp), z = 0; B.length > z;) {
    d(Y, o_RegExp, B[z++]);
  }
  O_prototype.constructor = Y;
  Y.prototype = O_prototype;
  g(o, "RegExp", Y, {
    constructor: true,
  });
}
A("RegExp");
