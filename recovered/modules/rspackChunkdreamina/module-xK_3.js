import n from "BQ";
import i from "g";
import a from "Mz";
import o from "Y";
import s from "q";
import A from "o";
import c from "l";
import u from "IF";
import l from "O";
import h from "r";
import f from "OG";
import { f as f_1 } from "R";
import d from "us";
import p from "KX";
import m from "Pc";
import y from "nl";
const b = a("GlobalDedentRegistry", new (o("WeakMap"))());
b.has = b.has;
b.get = b.get;
b.set = b.set;
const w = Object.freeze || Object;
const S = A("".charAt);
const E = A("".slice);
const k = A("".split);
const D = A(/./.exec);
const x = /([\n\u2028\u2029]|\r\n?)/g;
const F = RegExp("^[" + y + "]*");
const Q = RegExp("[^" + y + "]");
const N = "Invalid tag";
const R = (t) => {
  const t_raw = t.raw;
  if (n && !Object.isFrozen(t_raw)) {
    throw TypeError("Raw template should be frozen");
  }
  if (b.has(t_raw)) {
    return b.get(t_raw);
  }
  const r = K(t_raw);
  const i = O(r);
  f_1(i, "raw", {
    value: w(r),
  });
  w(i);
  b.set(t_raw, i);
  return i;
};
var K = (t) => {
  let e;
  let r;
  let n;
  let i;
  const a = l(t);
  const o = f(a);
  const s = Array(o);
  const A = Array(o);
  let c = 0;
  if (!o) {
    throw TypeError(N);
  }
  for (; c < o; c++) {
    const u = a[c];
    if (typeof u === "string") {
      s[c] = k(u, x);
    } else {
      throw TypeError(N);
    }
  }
  for (c = 0; c < o; c++) {
    const h = c + 1 === o;
    e = s[c];
    if (c === 0) {
      if (e.length === 1 || e[0].length > 0) {
        throw TypeError("Invalid opening line");
      }
      e[1] = "";
    }
    if (h) {
      if (e.length === 1 || D(Q, e[e.length - 1])) {
        throw TypeError("Invalid closing line");
      }
      e[e.length - 2] = "";
      e[e.length - 1] = "";
    }
    for (let g = 2; g < e.length; g += 2) {
      const d = e[g];
      const p = g + 1 === e.length && !h;
      const m = D(F, d)[0];
      if (!p && m.length === d.length) {
        e[g] = "";
        continue;
      }
      r = G(m, r);
    }
  }
  const y = r ? r.length : 0;
  for (c = 0; c < o; c++) {
    n = (e = s[c])[0];
    for (i = 1; i < e.length; i += 2) {
      n += e[i] + E(e[i + 1], y);
    }
    A[c] = n;
  }
  return A;
};
var G = (t, e) => {
  if (e === undefined || t === e) {
    return t;
  }
  for (
    var r = 0, n = Math.min(t.length, e.length);
    r < n && S(t, r) === S(e, r);
    r++
  );
  return E(t, 0, r);
};
var O = (t) => {
  for (var e = 0, r = t.length, n = Array(r); e < r; e++) {
    n[e] = m(t[e]);
  }
  return n;
};
const T = (t) =>
  s(function (e) {
    const r = d(arguments);
    r[0] = R(u(e));
    return c(t, this, r);
  }, "");
const Y = T(p);
i(
  {
    target: "String",
    stat: true,
    forced: true,
  },
  {
    dedent: function (t) {
      u(t);
      if (h(t)) {
        return T(t);
      }
      return c(Y, this, arguments);
    },
  },
);
