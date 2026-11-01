import n from "./module-eP_6.js";
import o from "./module-A_7.js";
import a from "./module-K_7.js";
import i from "./module-YR_6.js";
import s from "./module-nX_6.js";
import c from "./module-O9_6.js";
import u from "./module-Xy_2_6.js";
import f from "./module-d_7.js";
import l from "./module-aq_6.js";
import h from "./module-Y_7.js";
import p from "./module-F4_7.js";
import { f as f_1 } from "./module-t_7.js";
import d from "./module-wL_6.js";
import g from "./module-MA_2_6.js";
import y from "./module-r6_6.js";
import m from "./module-ri_7.js";
const b = a("GlobalDedentRegistry", new (i("WeakMap"))());
b.has = b.has;
b.get = b.get;
b.set = b.set;
const x = Object.freeze || Object;
const O = c("".charAt);
const R = c("".slice);
const M = c("".split);
const I = c(/./.exec);
const k = /([\n\u2028\u2029]|\r\n?)/g;
const T = RegExp("^[" + m + "]*");
const j = RegExp("[^" + m + "]");
const F = "Invalid tag";
const N = (t) => {
  const t_raw = t.raw;
  if (n && !Object.isFrozen(t_raw)) {
    throw TypeError("Raw template should be frozen");
  }
  if (b.has(t_raw)) {
    return b.get(t_raw);
  }
  const e = P(t_raw);
  const o = D(e);
  f_1(o, "raw", {
    value: x(e),
  });
  x(o);
  b.set(t_raw, o);
  return o;
};
var P = (t) => {
  let r;
  let e;
  let n;
  let o;
  const a = l(t);
  const i = p(a);
  const s = Array(i);
  const c = Array(i);
  let u = 0;
  if (!i) {
    throw TypeError(F);
  }
  for (; u < i; u++) {
    const f = a[u];
    if (typeof f === "string") {
      s[u] = M(f, k);
    } else {
      throw TypeError(F);
    }
  }
  for (u = 0; u < i; u++) {
    const h = u + 1 === i;
    r = s[u];
    if (u === 0) {
      if (r.length === 1 || r[0].length > 0) {
        throw TypeError("Invalid opening line");
      }
      r[1] = "";
    }
    if (h) {
      if (r.length === 1 || I(j, r[r.length - 1])) {
        throw TypeError("Invalid closing line");
      }
      r[r.length - 2] = "";
      r[r.length - 1] = "";
    }
    for (let v = 2; v < r.length; v += 2) {
      const d = r[v];
      const g = v + 1 === r.length && !h;
      const y = I(T, d)[0];
      if (!g && y.length === d.length) {
        r[v] = "";
        continue;
      }
      e = C(y, e);
    }
  }
  const m = e ? e.length : 0;
  for (u = 0; u < i; u++) {
    n = (r = s[u])[0];
    for (o = 1; o < r.length; o += 2) {
      n += r[o] + R(r[o + 1], m);
    }
    c[u] = n;
  }
  return c;
};
var C = (t, r) => {
  if (r === undefined || t === r) {
    return t;
  }
  for (
    var e = 0, n = Math.min(t.length, r.length);
    e < n && O(t, e) === O(r, e);
    e++
  );
  return R(t, 0, e);
};
var D = (t) => {
  for (var r = 0, e = t.length, n = Array(e); r < e; r++) {
    n[r] = y(t[r]);
  }
  return n;
};
const L = (t) =>
  s(function (r) {
    const e = d(arguments);
    e[0] = N(f(r));
    return u(t, this, e);
  }, "");
const _ = L(g);
o(
  {
    target: "String",
    stat: true,
    forced: true,
  },
  {
    dedent: function (t) {
      f(t);
      if (h(t)) {
        return L(t);
      }
      return u(_, this, arguments);
    },
  },
);
