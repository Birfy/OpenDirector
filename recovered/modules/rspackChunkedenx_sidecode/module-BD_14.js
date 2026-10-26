import n from "./module-r9_14.js";
import o from "./module-J_15.js";
import i from "./module-O9_14.js";
import a from "./module-Ze_2_14.js";
import s from "./module-JD_15.js";
import c from "./module-h_15.js";
import { f as f_1 } from "./module-vV_14.js";
import f from "./module-e_14.js";
import l from "./module-Su_14.js";
import h from "./module-ng_15.js";
import v from "./module-TK_15.js";
import p from "./module-Tc_14.js";
import d from "./module-T_2_14.js";
import g from "./module-vE_14.js";
import y from "./module-X_15.js";
import b from "./module-D_2_14.js";
import _m from "./module-b_14.js";
import A from "./module-FG_14.js";
import x from "./module-lN_14.js";
import w from "./module-e0_14.js";
import S from "./module-yZ_14.js";
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
const P = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const F = /a/g;
const D = /a/g;
const C = new o_RegExp(F) !== F;
const p_MISSED_STICKY = p.MISSED_STICKY;
const p_UNSUPPORTED_Y = p.UNSUPPORTED_Y;
const _ =
  n &&
  (!C ||
    p_MISSED_STICKY ||
    w ||
    S ||
    y(function () {
      D[E] = false;
      return (
        o_RegExp(F) !== F ||
        o_RegExp(D) === D ||
        String(o_RegExp(F, "i")) !== "/a/i"
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
          if (I(P, N(t, n + 1))) {
            n += 2;
            c = true;
          }
          o += r;
          u++;
          continue;
        case r === ">" && c:
          if (f === "" || b(a, f)) {
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
if (a("RegExp", _)) {
  const B = function (t, r) {
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
    let b = t;
    if (!p && d && g && t.constructor === B) {
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
    if (w && "dotAll" in F && (n = !!r && T(r, "s") > -1)) {
      r = j(r, /s/g, "");
    }
    e = r;
    if (
      p_MISSED_STICKY &&
      "sticky" in F &&
      (o = !!r && T(r, "y") > -1) &&
      p_UNSUPPORTED_Y
    ) {
      r = j(r, /y/g, "");
    }
    if (S) {
      t = (i = Y(t))[0];
      y = i[1];
    }
    a = s(o_RegExp(t, r), p ? this : O_prototype, B);
    if (n || o || y.length) {
      u = _m_enforce(a);
      if (n) {
        u.dotAll = true;
        u.raw = B(V(t), e);
      }
      if (o) {
        u.sticky = true;
      }
      if (y.length) {
        u.groups = y;
      }
    }
    if (t !== b) {
      try {
        c(a, "source", b === "" ? "(?:)" : b);
      } catch (t) {}
    }
    return a;
  };
  for (let z = f_1(o_RegExp), W = 0; z.length > W;) {
    d(B, o_RegExp, z[W++]);
  }
  O_prototype.constructor = B;
  B.prototype = O_prototype;
  g(o, "RegExp", B, {
    constructor: true,
  });
}
A("RegExp");
