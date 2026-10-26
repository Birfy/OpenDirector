import n from "./module-r9_7.js";
import o from "./module-J_8.js";
import i from "./module-O9_7.js";
import a from "./module-Ze_2_7.js";
import s from "./module-JD_8.js";
import u from "./module-h_8.js";
import { f as f_1 } from "./module-vV_7.js";
import f from "./module-e_7.js";
import l from "./module-Su_7.js";
import h from "./module-ng_8.js";
import v from "./module-TK_8.js";
import p from "./module-Tc_7.js";
import d from "./module-T_2_7.js";
import g from "./module-vE_7.js";
import y from "./module-X_8.js";
import m from "./module-D_2_7.js";
import _b from "./module-b_7.js";
import A from "./module-FG_7.js";
import w from "./module-lN_7.js";
import x from "./module-e0_7.js";
import E from "./module-yZ_7.js";
const _b_enforce = _b.enforce;
const S = w("match");
const o_RegExp = o.RegExp;
const O_prototype = o_RegExp.prototype;
const o_SyntaxError = o.SyntaxError;
const I = i(O_prototype.exec);
const k = i("".charAt);
const T = i("".replace);
const j = i("".indexOf);
const N = i("".slice);
const P = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const F = /a/g;
const C = /a/g;
const D = new o_RegExp(F) !== F;
const p_MISSED_STICKY = p.MISSED_STICKY;
const p_UNSUPPORTED_Y = p.UNSUPPORTED_Y;
const W =
  n &&
  (!D ||
    p_MISSED_STICKY ||
    x ||
    E ||
    y(function () {
      C[S] = false;
      return (
        o_RegExp(F) !== F ||
        o_RegExp(C) === C ||
        String(o_RegExp(F, "i")) !== "/a/i"
      );
    }));
const V = (r) => {
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
const Y = (r) => {
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
          if (I(P, N(r, n + 1))) {
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
if (a("RegExp", W)) {
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
    let m = r;
    if (!p && d && g && r.constructor === _) {
      return r;
    }
    if (d || f(O_prototype, r)) {
      r = r.source;
      if (g) {
        t = v(m);
      }
    }
    r = r === undefined ? "" : h(r);
    t = t === undefined ? "" : h(t);
    m = r;
    if (x && "dotAll" in F && (n = !!t && j(t, "s") > -1)) {
      t = T(t, /s/g, "");
    }
    e = t;
    if (
      p_MISSED_STICKY &&
      "sticky" in F &&
      (o = !!t && j(t, "y") > -1) &&
      p_UNSUPPORTED_Y
    ) {
      t = T(t, /y/g, "");
    }
    if (E) {
      r = (i = Y(r))[0];
      y = i[1];
    }
    a = s(o_RegExp(r, t), p ? this : O_prototype, _);
    if (n || o || y.length) {
      c = _b_enforce(a);
      if (n) {
        c.dotAll = true;
        c.raw = _(V(r), e);
      }
      if (o) {
        c.sticky = true;
      }
      if (y.length) {
        c.groups = y;
      }
    }
    if (r !== m) {
      try {
        u(a, "source", m === "" ? "(?:)" : m);
      } catch (r) {}
    }
    return a;
  };
  for (let B = f_1(o_RegExp), X = 0; B.length > X;) {
    d(_, o_RegExp, B[X++]);
  }
  O_prototype.constructor = _;
  _.prototype = O_prototype;
  g(o, "RegExp", _, {
    constructor: true,
  });
}
A("RegExp");
