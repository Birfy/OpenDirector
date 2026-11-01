import n from "./module-eP.js";
import o from "./module-A.js";
import i from "./module-K.js";
import a from "./module-YR.js";
import s from "./module-nX.js";
import u from "./module-O9.js";
import c from "./module-Xy_2.js";
import f from "./module-d.js";
import h from "./module-aq.js";
import l from "./module-Y.js";
import v from "./module-F4.js";
import { f as f_1 } from "./module-t.js";
import d from "./module-wL.js";
import g from "./module-MA_2.js";
import y from "./module-r6.js";
import b from "./module-ri.js";
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
  const i = h(t);
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
    const l = c + 1 === a;
    r = s[c];
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
      if (l(t)) {
        return L(t);
      }
      return c(U, this, arguments);
    },
  },
);
