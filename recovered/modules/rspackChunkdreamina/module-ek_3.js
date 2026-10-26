import n from "./module-v.js";
import o from "./module-e.js";
const l = (e) => {
  const t = o(e);
  const r = Math.abs(e - t);
  if (r > 0.5 || (r === 0.5 && t % 2 != 0)) {
    return t + n(e);
  }
  return t;
};
export default {
  pack: function (e, t, r) {
    let n;
    let o;
    let p;
    const h = Array(r);
    let v = 8 * r - t - 1;
    const d = (1 << v) - 1;
    const g = d >> 1;
    const y = t === 23 ? 2 ** -24 - 2 ** -77 : 0;
    const m = +(e < 0 || (e === 0 && 1 / e < 0));
    let x = 0;
    for (
      (e = Math.abs(e)) != e || Infinity === e
        ? ((o = +(e != e)), (n = d))
        : ((p = 2 ** -(n = Math.floor(Math.log(e) / Math.LN2))),
          e * p < 1 && (n--, (p *= 2)),
          n + g >= 1 ? (e += y / p) : (e += y * 2 ** (1 - g)),
          e * p >= 2 && (n++, (p /= 2)),
          n + g >= d
            ? ((o = 0), (n = d))
            : n + g >= 1
              ? ((o = l((e * p - 1) * 2 ** t)), (n += g))
              : ((o = l(e * 2 ** (g - 1) * 2 ** t)), (n = 0)));
      t >= 8;
    ) {
      h[x++] = 255 & o;
      o /= 256;
      t -= 8;
    }
    n = (n << t) | o;
    for (v += t; v > 0;) {
      h[x++] = 255 & n;
      n /= 256;
      v -= 8;
    }
    h[--x] |= 128 * m;
    return h;
  },
  unpack: function (e, t) {
    let r;
    const e_length = e.length;
    const o = 8 * e_length - t - 1;
    const i = (1 << o) - 1;
    const a = i >> 1;
    let u = o - 7;
    let c = e_length - 1;
    let f = e[c--];
    let l = 127 & f;
    for (f >>= 7; u > 0;) {
      l = 256 * l + e[c--];
      u -= 8;
    }
    r = l & ((1 << -u) - 1);
    l >>= -u;
    for (u += t; u > 0;) {
      r = 256 * r + e[c--];
      u -= 8;
    }
    if (l === 0) {
      l = 1 - a;
    } else {
      if (l === i) {
        if (r) {
          return 0 / 0;
        }
        if (f) {
          return -Infinity;
        }
        return Infinity;
      }
      r += 2 ** t;
      l -= a;
    }
    return (f ? -1 : 1) * r * 2 ** (l - t);
  },
};
