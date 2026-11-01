import n from "./module-eP_14.js";
import o from "./module-A_15.js";
import i from "./module-K_15.js";
import a from "./module-YR_14.js";
import s from "./module-nX_14.js";
import c from "./module-O9_14.js";
import u from "./module-Xy_2_14.js";
import f from "./module-d_15.js";
import l from "./module-aq_14.js";
import h from "./module-Y_15.js";
import v from "./module-F4_15.js";
import { f as f_1 } from "./module-t_15.js";
import d from "./module-wL_14.js";
import g from "./module-MA_2_14.js";
import y from "./module-r6_14.js";
import b from "./module-ri_15.js";
const m = i("GlobalDedentRegistry", new (a("WeakMap"))());
m.has = m.has;
m.get = m.get;
m.set = m.set;
const w = Object.freeze || Object;
const O = c("".charAt);
const R = c("".slice);
const M = c("".split);
const I = c(/./.exec);
const k = /([\n\u2028\u2029]|\r\n?)/g;
const j = RegExp("^[" + b + "]*");
const T = RegExp("[^" + b + "]");
const N = "Invalid tag";
const P = (t) => {
  const t_raw = t.raw;
  if (n && !Object.isFrozen(t_raw)) {
    throw TypeError("Raw template should be frozen");
  }
  if (m.has(t_raw)) {
    return m.get(t_raw);
  }
  const e = F(t_raw);
  const o = C(e);
  f_1(o, "raw", {
    value: w(e),
  });
  w(o);
  m.set(t_raw, o);
  return o;
};
var F = (t) => {
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
    throw TypeError(N);
  }
  for (; u < a; u++) {
    const f = i[u];
    if (typeof f === "string") {
      s[u] = M(f, k);
    } else {
      throw TypeError(N);
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
      const y = I(j, d)[0];
      if (!g && y.length === d.length) {
        r[p] = "";
        continue;
      }
      e = D(y, e);
    }
  }
  const b = e ? e.length : 0;
  for (u = 0; u < a; u++) {
    n = (r = s[u])[0];
    for (o = 1; o < r.length; o += 2) {
      n += r[o] + R(r[o + 1], b);
    }
    c[u] = n;
  }
  return c;
};
var D = (t, r) => {
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
const L = (t) =>
  s(function (r) {
    const e = d(arguments);
    e[0] = P(f(r));
    return u(t, this, e);
  }, "");
const U = L(g);
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
      return u(U, this, arguments);
    },
  },
);
