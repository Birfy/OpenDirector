import n from "./module-eP_10.js";
import o from "./module-A_11.js";
import i from "./module-K_11.js";
import a from "./module-YR_10.js";
import s from "./module-nX_10.js";
import u from "./module-O9_10.js";
import c from "./module-Xy_2_10.js";
import f from "./module-d_11.js";
import l from "./module-aq_10.js";
import h from "./module-Y_11.js";
import v from "./module-F4_11.js";
import { f as f_1 } from "./module-t_11.js";
import d from "./module-wL_10.js";
import g from "./module-MA_2_10.js";
import y from "./module-r6_10.js";
import b from "./module-ri_11.js";
const m = i("GlobalDedentRegistry", new (a("WeakMap"))());
m.has = m.has;
m.get = m.get;
m.set = m.set;
const w = Object.freeze || Object;
const O = u("".charAt);
const R = u("".slice);
const M = u("".split);
const I = u(/./.exec);
const k = /([\n\u2028\u2029]|\r\n?)/g;
const T = RegExp("^[" + b + "]*");
const j = RegExp("[^" + b + "]");
const N = "Invalid tag";
const F = (t) => {
  const t_raw = t.raw;
  if (n && !Object.isFrozen(t_raw)) {
    throw TypeError("Raw template should be frozen");
  }
  if (m.has(t_raw)) {
    return m.get(t_raw);
  }
  const e = P(t_raw);
  const o = D(e);
  f_1(o, "raw", {
    value: w(e),
  });
  w(o);
  m.set(t_raw, o);
  return o;
};
var P = (t) => {
  let r;
  let e;
  let n;
  let o;
  const i = l(t);
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
    r = s[c];
    if (c === 0) {
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
    for (let p = 2; p < r.length; p += 2) {
      const d = r[p];
      const g = p + 1 === r.length && !h;
      const y = I(T, d)[0];
      if (!g && y.length === d.length) {
        r[p] = "";
        continue;
      }
      e = C(y, e);
    }
  }
  const b = e ? e.length : 0;
  for (c = 0; c < a; c++) {
    n = (r = s[c])[0];
    for (o = 1; o < r.length; o += 2) {
      n += r[o] + R(r[o + 1], b);
    }
    u[c] = n;
  }
  return u;
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
    e[0] = F(f(r));
    return c(t, this, e);
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
      return c(U, this, arguments);
    },
  },
);
