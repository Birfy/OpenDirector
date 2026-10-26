import n from "./module-eP_20.js";
import o from "./module-A_21.js";
import i from "./module-K_21.js";
import a from "./module-YR_20.js";
import s from "./module-nX_20.js";
import c from "./module-O9_20.js";
import u from "./module-Xy_2_20.js";
import f from "./module-d_21.js";
import l from "./module-aq_20.js";
import h from "./module-Y_21.js";
import v from "./module-F4_21.js";
import { f as f_1 } from "./module-t_21.js";
import d from "./module-wL_20.js";
import g from "./module-MA_2_20.js";
import y from "./module-r6_20.js";
import m from "./module-ri_21.js";
const b = i("GlobalDedentRegistry", new (a("WeakMap"))());
b.has = b.has;
b.get = b.get;
b.set = b.set;
const x = Object.freeze || Object;
const O = c("".charAt);
const R = c("".slice);
const M = c("".split);
const I = c(/./.exec);
const _ = /([\n\u2028\u2029]|\r\n?)/g;
const k = RegExp("^[" + m + "]*");
const T = RegExp("[^" + m + "]");
const j = "Invalid tag";
const N = (t) => {
  const t_raw = t.raw;
  if (n && !Object.isFrozen(t_raw)) {
    throw TypeError("Raw template should be frozen");
  }
  if (b.has(t_raw)) {
    return b.get(t_raw);
  }
  const e = D(t_raw);
  const o = C(e);
  f_1(o, "raw", {
    value: x(e),
  });
  x(o);
  b.set(t_raw, o);
  return o;
};
var D = (t) => {
  let r;
  let e;
  let n;
  let o;
  const i = l(t);
  const a = v(i);
  const s = Array(a);
  const c = Array(a);
  let u = 0;
  if (!a) {
    throw TypeError(j);
  }
  for (; u < a; u++) {
    const f = i[u];
    if (typeof f === "string") {
      s[u] = M(f, _);
    } else {
      throw TypeError(j);
    }
  }
  for (u = 0; u < a; u++) {
    const h = u + 1 === a;
    r = s[u];
    if (u === 0) {
      if (r.length === 1 || r[0].length > 0) {
        throw TypeError("Invalid opening line");
      }
      r[1] = "";
    }
    if (h) {
      if (r.length === 1 || I(T, r[r.length - 1])) {
        throw TypeError("Invalid closing line");
      }
      r[r.length - 2] = "";
      r[r.length - 1] = "";
    }
    for (let p = 2; p < r.length; p += 2) {
      const d = r[p];
      const g = p + 1 === r.length && !h;
      const y = I(k, d)[0];
      if (!g && y.length === d.length) {
        r[p] = "";
        continue;
      }
      e = P(y, e);
    }
  }
  const m = e ? e.length : 0;
  for (u = 0; u < a; u++) {
    n = (r = s[u])[0];
    for (o = 1; o < r.length; o += 2) {
      n += r[o] + R(r[o + 1], m);
    }
    c[u] = n;
  }
  return c;
};
var P = (t, r) => {
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
var C = (t) => {
  for (var r = 0, e = t.length, n = Array(e); r < e; r++) {
    n[r] = y(t[r]);
  }
  return n;
};
const F = (t) =>
  s(function (r) {
    const e = d(arguments);
    e[0] = N(f(r));
    return u(t, this, e);
  }, "");
const L = F(g);
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
        return F(t);
      }
      return u(L, this, arguments);
    },
  },
);
