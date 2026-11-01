import n from "./module-eP_8.js";
import i from "./module-A_9.js";
import o from "./module-K_9.js";
import s from "./module-YR_8.js";
import a from "./module-nX_8.js";
import u from "./module-O9_8.js";
import c from "./module-Xy_2_8.js";
import f from "./module-d_9.js";
import h from "./module-aq_8.js";
import l from "./module-Y_9.js";
import v from "./module-F4_9.js";
import { f as f_1 } from "./module-t_9.js";
import d from "./module-wL_8.js";
import g from "./module-MA_2_8.js";
import y from "./module-r6_8.js";
import b from "./module-ri_9.js";
const m = o("GlobalDedentRegistry", new (s("WeakMap"))());
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
  const i = D(e);
  f_1(i, "raw", {
    value: w(e),
  });
  w(i);
  m.set(t_raw, i);
  return i;
};
var P = (t) => {
  let r;
  let e;
  let n;
  let i;
  const o = h(t);
  const s = v(o);
  const a = Array(s);
  const u = Array(s);
  let c = 0;
  if (!s) {
    throw TypeError(N);
  }
  for (; c < s; c++) {
    const f = o[c];
    if (typeof f === "string") {
      a[c] = M(f, k);
    } else {
      throw TypeError(N);
    }
  }
  for (c = 0; c < s; c++) {
    const l = c + 1 === s;
    r = a[c];
    if (c === 0) {
      if (r.length === 1 || r[0].length > 0) {
        throw TypeError("Invalid opening line");
      }
      r[1] = "";
    }
    if (l) {
      if (r.length === 1 || I(j, r[r.length - 1])) {
        throw TypeError("Invalid closing line");
      }
      r[r.length - 2] = "";
      r[r.length - 1] = "";
    }
    for (let p = 2; p < r.length; p += 2) {
      const d = r[p];
      const g = p + 1 === r.length && !l;
      const y = I(T, d)[0];
      if (!g && y.length === d.length) {
        r[p] = "";
        continue;
      }
      e = C(y, e);
    }
  }
  const b = e ? e.length : 0;
  for (c = 0; c < s; c++) {
    n = (r = a[c])[0];
    for (i = 1; i < r.length; i += 2) {
      n += r[i] + R(r[i + 1], b);
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
  a(function (r) {
    const e = d(arguments);
    e[0] = F(f(r));
    return c(t, this, e);
  }, "");
const U = L(g);
i(
  {
    target: "String",
    stat: true,
    forced: true,
  },
  {
    dedent: function (t) {
      f(t);
      if (l(t)) {
        return L(t);
      }
      return c(U, this, arguments);
    },
  },
);
