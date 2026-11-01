import n from "./module-bV_19.js";
import o from "./module-MY_20.js";
const l = (r) => {
  const t = o(r);
  const e = Math.abs(r - t);
  if (e > 0.5 || (e === 0.5 && t % 2 != 0)) {
    return t + n(r);
  }
  return t;
};
export default {
  pack: function (r, t, e) {
    let n;
    let o;
    let h;
    const v = Array(e);
    let p = 8 * e - t - 1;
    const d = (1 << p) - 1;
    const g = d >> 1;
    const y = t === 23 ? 2 ** -24 - 2 ** -77 : 0;
    const b = +(r < 0 || (r === 0 && 1 / r < 0));
    let m = 0;
    for (
      (r = Math.abs(r)) != r || Infinity === r
        ? ((o = +(r != r)), (n = d))
        : ((h = 2 ** -(n = Math.floor(Math.log(r) / Math.LN2))),
          r * h < 1 && (n--, (h *= 2)),
          n + g >= 1 ? (r += y / h) : (r += y * 2 ** (1 - g)),
          r * h >= 2 && (n++, (h /= 2)),
          n + g >= d
            ? ((o = 0), (n = d))
            : n + g >= 1
              ? ((o = l((r * h - 1) * 2 ** t)), (n += g))
              : ((o = l(r * 2 ** (g - 1) * 2 ** t)), (n = 0)));
      t >= 8;
    ) {
      v[m++] = 255 & o;
      o /= 256;
      t -= 8;
    }
    n = (n << t) | o;
    for (p += t; p > 0;) {
      v[m++] = 255 & n;
      n /= 256;
      p -= 8;
    }
    v[--m] |= 128 * b;
    return v;
  },
  unpack: function (r, t) {
    let e;
    const r_length = r.length;
    const o = 8 * r_length - t - 1;
    const i = (1 << o) - 1;
    const a = i >> 1;
    let u = o - 7;
    let c = r_length - 1;
    let f = r[c--];
    let l = 127 & f;
    for (f >>= 7; u > 0;) {
      l = 256 * l + r[c--];
      u -= 8;
    }
    e = l & ((1 << -u) - 1);
    l >>= -u;
    for (u += t; u > 0;) {
      e = 256 * e + r[c--];
      u -= 8;
    }
    if (l === 0) {
      l = 1 - a;
    } else {
      if (l === i) {
        if (e) {
          return 0 / 0;
        }
        if (f) {
          return -Infinity;
        }
        return Infinity;
      }
      e += 2 ** t;
      l -= a;
    }
    return (f ? -1 : 1) * e * 2 ** (l - t);
  },
};
