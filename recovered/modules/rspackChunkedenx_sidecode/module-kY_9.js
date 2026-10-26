import n from "./module-eP_9.js";
import o from "./module-A_10.js";
import i from "./module-K_10.js";
import a from "./module-YR_9.js";
import s from "./module-nX_9.js";
import u from "./module-O9_9.js";
import c from "./module-Xy_2_9.js";
import f from "./module-d_10.js";
import l from "./module-aq_9.js";
import h from "./module-Y_10.js";
import v from "./module-F4_10.js";
import { f as f_1 } from "./module-t_10.js";
import p from "./module-wL_9.js";
import g from "./module-MA_2_9.js";
import y from "./module-r6_9.js";
import m from "./module-ri_10.js";
const b = i("GlobalDedentRegistry", new (a("WeakMap"))());
b.has = b.has;
b.get = b.get;
b.set = b.set;
const x = Object.freeze || Object;
const O = u("".charAt);
const _ = u("".slice);
const R = u("".split);
const M = u(/./.exec);
const I = /([\n\u2028\u2029]|\r\n?)/g;
const T = RegExp("^[" + m + "]*");
const k = RegExp("[^" + m + "]");
const N = "Invalid tag";
const j = (t) => {
  const t_raw = t.raw;
  if (n && !Object.isFrozen(t_raw)) {
    throw TypeError("Raw template should be frozen");
  }
  if (b.has(t_raw)) {
    return b.get(t_raw);
  }
  const r = P(t_raw);
  const o = F(r);
  f_1(o, "raw", {
    value: x(r),
  });
  x(o);
  b.set(t_raw, o);
  return o;
};
var P = (t) => {
  let e;
  let r;
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
      s[c] = R(f, I);
    } else {
      throw TypeError(N);
    }
  }
  for (c = 0; c < a; c++) {
    const h = c + 1 === a;
    e = s[c];
    if (c === 0) {
      if (e.length === 1 || e[0].length > 0) {
        throw TypeError("Invalid opening line");
      }
      e[1] = "";
    }
    if (h) {
      if (e.length === 1 || M(k, e[e.length - 1])) {
        throw TypeError("Invalid closing line");
      }
      e[e.length - 2] = "";
      e[e.length - 1] = "";
    }
    for (let d = 2; d < e.length; d += 2) {
      const p = e[d];
      const g = d + 1 === e.length && !h;
      const y = M(T, p)[0];
      if (!g && y.length === p.length) {
        e[d] = "";
        continue;
      }
      r = D(y, r);
    }
  }
  const m = r ? r.length : 0;
  for (c = 0; c < a; c++) {
    n = (e = s[c])[0];
    for (o = 1; o < e.length; o += 2) {
      n += e[o] + _(e[o + 1], m);
    }
    u[c] = n;
  }
  return u;
};
var D = (t, e) => {
  if (e === undefined || t === e) {
    return t;
  }
  for (
    var r = 0, n = Math.min(t.length, e.length);
    r < n && O(t, r) === O(e, r);
    r++
  );
  return _(t, 0, r);
};
var F = (t) => {
  for (var e = 0, r = t.length, n = Array(r); e < r; e++) {
    n[e] = y(t[e]);
  }
  return n;
};
const C = (t) =>
  s(function (e) {
    const r = p(arguments);
    r[0] = j(f(e));
    return c(t, this, r);
  }, "");
const L = C(g);
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
        return C(t);
      }
      return c(L, this, arguments);
    },
  },
);
