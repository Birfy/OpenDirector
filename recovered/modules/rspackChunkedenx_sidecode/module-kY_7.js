import n from "./module-eP_7.js";
import o from "./module-A_8.js";
import i from "./module-K_8.js";
import a from "./module-YR_7.js";
import s from "./module-nX_7.js";
import u from "./module-O9_7.js";
import c from "./module-Xy_2_7.js";
import f from "./module-d_8.js";
import l from "./module-aq_7.js";
import h from "./module-Y_8.js";
import v from "./module-F4_8.js";
import { f as f_1 } from "./module-t_8.js";
import d from "./module-wL_7.js";
import g from "./module-MA_2_7.js";
import y from "./module-r6_7.js";
import m from "./module-ri_8.js";
const b = i("GlobalDedentRegistry", new (a("WeakMap"))());
b.has = b.has;
b.get = b.get;
b.set = b.set;
const x = Object.freeze || Object;
const O = u("".charAt);
const R = u("".slice);
const M = u("".split);
const I = u(/./.exec);
const k = /([\n\u2028\u2029]|\r\n?)/g;
const T = RegExp("^[" + m + "]*");
const j = RegExp("[^" + m + "]");
const N = "Invalid tag";
const P = (r) => {
  const r_raw = r.raw;
  if (n && !Object.isFrozen(r_raw)) {
    throw TypeError("Raw template should be frozen");
  }
  if (b.has(r_raw)) {
    return b.get(r_raw);
  }
  const e = F(r_raw);
  const o = D(e);
  f_1(o, "raw", {
    value: x(e),
  });
  x(o);
  b.set(r_raw, o);
  return o;
};
var F = (r) => {
  let t;
  let e;
  let n;
  let o;
  const i = l(r);
  const a = v(i);
  const s = Array(a);
  const u = Array(a);
  let c = 0;
  if (!a) {
    throw TypeError(N);
  }
  for (; c < a; c++) {
    const f = i[c];
    if (typeof f === "string") {
      s[c] = M(f, k);
    } else {
      throw TypeError(N);
    }
  }
  for (c = 0; c < a; c++) {
    const h = c + 1 === a;
    t = s[c];
    if (c === 0) {
      if (t.length === 1 || t[0].length > 0) {
        throw TypeError("Invalid opening line");
      }
      t[1] = "";
    }
    if (h) {
      if (t.length === 1 || I(j, t[t.length - 1])) {
        throw TypeError("Invalid closing line");
      }
      t[t.length - 2] = "";
      t[t.length - 1] = "";
    }
    for (let p = 2; p < t.length; p += 2) {
      const d = t[p];
      const g = p + 1 === t.length && !h;
      const y = I(T, d)[0];
      if (!g && y.length === d.length) {
        t[p] = "";
        continue;
      }
      e = C(y, e);
    }
  }
  const m = e ? e.length : 0;
  for (c = 0; c < a; c++) {
    n = (t = s[c])[0];
    for (o = 1; o < t.length; o += 2) {
      n += t[o] + R(t[o + 1], m);
    }
    u[c] = n;
  }
  return u;
};
var C = (r, t) => {
  if (t === undefined || r === t) {
    return r;
  }
  for (
    var e = 0, n = Math.min(r.length, t.length);
    e < n && O(r, e) === O(t, e);
    e++
  );
  return R(r, 0, e);
};
var D = (r) => {
  for (var t = 0, e = r.length, n = Array(e); t < e; t++) {
    n[t] = y(r[t]);
  }
  return n;
};
const L = (r) =>
  s(function (t) {
    const e = d(arguments);
    e[0] = P(f(t));
    return c(r, this, e);
  }, "");
const U = L(g);
o(
  {
    target: "String",
    stat: true,
    forced: true,
  },
  {
    dedent: function (r) {
      f(r);
      if (h(r)) {
        return L(r);
      }
      return c(U, this, arguments);
    },
  },
);
