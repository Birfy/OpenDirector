import n from "./module-bV.js";
import o from "./module-MY.js";
const h = (t) => {
  const r = o(t);
  const e = Math.abs(t - r);
  if (e > 0.5 || (e === 0.5 && r % 2 != 0)) {
    return r + n(t);
  }
  return r;
};
export default {
  pack: function (t, r, e) {
    let n;
    let o;
    let l;
    const v = Array(e);
    let p = 8 * e - r - 1;
    const d = (1 << p) - 1;
    const g = d >> 1;
    const y = r === 23 ? 2 ** -24 - 2 ** -77 : 0;
    const b = +(t < 0 || (t === 0 && 1 / t < 0));
    let m = 0;
    for (
      (t = Math.abs(t)) != t || Infinity === t
        ? ((o = +(t != t)), (n = d))
        : ((l = 2 ** -(n = Math.floor(Math.log(t) / Math.LN2))),
          t * l < 1 && (n--, (l *= 2)),
          n + g >= 1 ? (t += y / l) : (t += y * 2 ** (1 - g)),
          t * l >= 2 && (n++, (l /= 2)),
          n + g >= d
            ? ((o = 0), (n = d))
            : n + g >= 1
              ? ((o = h((t * l - 1) * 2 ** r)), (n += g))
              : ((o = h(t * 2 ** (g - 1) * 2 ** r)), (n = 0)));
      r >= 8;
    ) {
      v[m++] = 255 & o;
      o /= 256;
      r -= 8;
    }
    n = (n << r) | o;
    for (p += r; p > 0;) {
      v[m++] = 255 & n;
      n /= 256;
      p -= 8;
    }
    v[--m] |= 128 * b;
    return v;
  },
  unpack: function (t, r) {
    let e;
    const t_length = t.length;
    const o = 8 * t_length - r - 1;
    const i = (1 << o) - 1;
    const a = i >> 1;
    let u = o - 7;
    let c = t_length - 1;
    let f = t[c--];
    let h = 127 & f;
    for (f >>= 7; u > 0;) {
      h = 256 * h + t[c--];
      u -= 8;
    }
    e = h & ((1 << -u) - 1);
    h >>= -u;
    for (u += r; u > 0;) {
      e = 256 * e + t[c--];
      u -= 8;
    }
    if (h === 0) {
      h = 1 - a;
    } else {
      if (h === i) {
        if (e) {
          return 0 / 0;
        }
        if (f) {
          return -Infinity;
        }
        return Infinity;
      }
      e += 2 ** r;
      h -= a;
    }
    return (f ? -1 : 1) * e * 2 ** (h - r);
  },
};
