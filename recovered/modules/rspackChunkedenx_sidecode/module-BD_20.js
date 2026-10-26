import n from "./module-r9_20.js";
import o from "./module-J_21.js";
import i from "./module-O9_20.js";
import a from "./module-Ze_2_20.js";
import s from "./module-JD_21.js";
import c from "./module-h_21.js";
import { f as f_1 } from "./module-vV_20.js";
import f from "./module-e_20.js";
import l from "./module-Su_20.js";
import h from "./module-ng_21.js";
import v from "./module-TK_21.js";
import p from "./module-Tc_20.js";
import d from "./module-T_2_20.js";
import g from "./module-vE_20.js";
import y from "./module-X_21.js";
import m from "./module-D_2_20.js";
import _b from "./module-b_20.js";
import w from "./module-FG_20.js";
import A from "./module-lN_20.js";
import x from "./module-e0_20.js";
import S from "./module-yZ_20.js";
const _b_enforce = _b.enforce;
const E = A("match");
const o_RegExp = o.RegExp;
const O_prototype = o_RegExp.prototype;
const o_SyntaxError = o.SyntaxError;
const I = i(O_prototype.exec);
const _ = i("".charAt);
const k = i("".replace);
const T = i("".indexOf);
const j = i("".slice);
const N = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const D = /a/g;
const P = /a/g;
const C = new o_RegExp(D) !== D;
const p_MISSED_STICKY = p.MISSED_STICKY;
const p_UNSUPPORTED_Y = p.UNSUPPORTED_Y;
const U =
  n &&
  (!C ||
    p_MISSED_STICKY ||
    x ||
    S ||
    y(function () {
      P[E] = false;
      return (
        o_RegExp(D) !== D ||
        o_RegExp(P) === P ||
        String(o_RegExp(D, "i")) !== "/a/i"
      );
    }));
const V = (t) => {
  let r;
  for (var e = t.length, n = 0, o = "", i = false; n <= e; n++) {
    if ((r = _(t, n)) === "\\") {
      o += r + _(t, ++n);
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
      c = false,
      u = 0,
      f = "";
    n <= e;
    n++
  ) {
    if ((r = _(t, n)) === "\\") {
      r += _(t, ++n);
    } else if (r === "]") {
      s = false;
    } else if (!s) {
      switch (true) {
        case r === "[":
          s = true;
          break;
        case r === "(":
          if (I(N, j(t, n + 1))) {
            n += 2;
            c = true;
          }
          o += r;
          u++;
          continue;
        case r === ">" && c:
          if (f === "" || m(a, f)) {
            throw new o_SyntaxError("Invalid capture group name");
          }
          a[f] = true;
          i[i.length] = [f, u];
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
  return [o, i];
};
if (a("RegExp", U)) {
  const z = function (t, r) {
    let e;
    let n;
    let o;
    let i;
    let a;
    let u;
    const p = f(O_prototype, this);
    const d = l(t);
    const g = r === undefined;
    let y = [];
    let m = t;
    if (!p && d && g && t.constructor === z) {
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
    if (x && "dotAll" in D && (n = !!r && T(r, "s") > -1)) {
      r = k(r, /s/g, "");
    }
    e = r;
    if (
      p_MISSED_STICKY &&
      "sticky" in D &&
      (o = !!r && T(r, "y") > -1) &&
      p_UNSUPPORTED_Y
    ) {
      r = k(r, /y/g, "");
    }
    if (S) {
      t = (i = B(t))[0];
      y = i[1];
    }
    a = s(o_RegExp(t, r), p ? this : O_prototype, z);
    if (n || o || y.length) {
      u = _b_enforce(a);
      if (n) {
        u.dotAll = true;
        u.raw = z(V(t), e);
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
        c(a, "source", m === "" ? "(?:)" : m);
      } catch (t) {}
    }
    return a;
  };
  for (let Y = f_1(o_RegExp), W = 0; Y.length > W;) {
    d(z, o_RegExp, Y[W++]);
  }
  O_prototype.constructor = z;
  z.prototype = O_prototype;
  g(o, "RegExp", z, {
    constructor: true,
  });
}
w("RegExp");
