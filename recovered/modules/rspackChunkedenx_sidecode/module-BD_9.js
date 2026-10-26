import n from "./module-r9_9.js";
import o from "./module-J_10.js";
import i from "./module-O9_9.js";
import a from "./module-Ze_2_9.js";
import s from "./module-JD_10.js";
import u from "./module-h_10.js";
import { f as f_1 } from "./module-vV_9.js";
import f from "./module-e_9.js";
import l from "./module-Su_9.js";
import h from "./module-ng_10.js";
import v from "./module-TK_10.js";
import d from "./module-Tc_9.js";
import p from "./module-T_2_9.js";
import g from "./module-vE_9.js";
import y from "./module-X_10.js";
import m from "./module-D_2_9.js";
import _b from "./module-b_9.js";
import w from "./module-FG_9.js";
import A from "./module-lN_9.js";
import x from "./module-e0_9.js";
import E from "./module-yZ_9.js";
const _b_enforce = _b.enforce;
const S = A("match");
const o_RegExp = o.RegExp;
const O_prototype = o_RegExp.prototype;
const o_SyntaxError = o.SyntaxError;
const M = i(O_prototype.exec);
const I = i("".charAt);
const T = i("".replace);
const k = i("".indexOf);
const N = i("".slice);
const j = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const P = /a/g;
const D = /a/g;
const F = new o_RegExp(P) !== P;
const d_MISSED_STICKY = d.MISSED_STICKY;
const d_UNSUPPORTED_Y = d.UNSUPPORTED_Y;
const U =
  n &&
  (!F ||
    d_MISSED_STICKY ||
    x ||
    E ||
    y(function () {
      D[S] = false;
      return (
        o_RegExp(P) !== P ||
        o_RegExp(D) === D ||
        String(o_RegExp(P, "i")) !== "/a/i"
      );
    }));
const B = (t) => {
  let e;
  for (var r = t.length, n = 0, o = "", i = false; n <= r; n++) {
    if ((e = I(t, n)) === "\\") {
      o += e + I(t, ++n);
      continue;
    }
    if (i || e !== ".") {
      if (e === "[") {
        i = true;
      } else if (e === "]") {
        i = false;
      }
      o += e;
    } else {
      o += "[\\s\\S]";
    }
  }
  return o;
};
const V = (t) => {
  let e;
  for (
    var r = t.length,
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
    if ((e = I(t, n)) === "\\") {
      e += I(t, ++n);
    } else if (e === "]") {
      s = false;
    } else if (!s) {
      switch (true) {
        case e === "[":
          s = true;
          break;
        case e === "(":
          if (M(j, N(t, n + 1))) {
            n += 2;
            u = true;
          }
          o += e;
          c++;
          continue;
        case e === ">" && u:
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
      f += e;
    } else {
      o += e;
    }
  }
  return [o, i];
};
if (a("RegExp", U)) {
  const Y = function (t, e) {
    let r;
    let n;
    let o;
    let i;
    let a;
    let c;
    const d = f(O_prototype, this);
    const p = l(t);
    const g = e === undefined;
    let y = [];
    let m = t;
    if (!d && p && g && t.constructor === Y) {
      return t;
    }
    if (p || f(O_prototype, t)) {
      t = t.source;
      if (g) {
        e = v(m);
      }
    }
    t = t === undefined ? "" : h(t);
    e = e === undefined ? "" : h(e);
    m = t;
    if (x && "dotAll" in P && (n = !!e && k(e, "s") > -1)) {
      e = T(e, /s/g, "");
    }
    r = e;
    if (
      d_MISSED_STICKY &&
      "sticky" in P &&
      (o = !!e && k(e, "y") > -1) &&
      d_UNSUPPORTED_Y
    ) {
      e = T(e, /y/g, "");
    }
    if (E) {
      t = (i = V(t))[0];
      y = i[1];
    }
    a = s(o_RegExp(t, e), d ? this : O_prototype, Y);
    if (n || o || y.length) {
      c = _b_enforce(a);
      if (n) {
        c.dotAll = true;
        c.raw = Y(B(t), r);
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
  for (let W = f_1(o_RegExp), X = 0; W.length > X;) {
    p(Y, o_RegExp, W[X++]);
  }
  O_prototype.constructor = Y;
  Y.prototype = O_prototype;
  g(o, "RegExp", Y, {
    constructor: true,
  });
}
w("RegExp");
