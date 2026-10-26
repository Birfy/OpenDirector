import n from "./module-bV_6.js";
import o from "./module-MY_7.js";
const l = (t) => {
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
    let h;
    const p = Array(e);
    let v = 8 * e - r - 1;
    const d = (1 << v) - 1;
    const g = d >> 1;
    const y = r === 23 ? 2 ** -24 - 2 ** -77 : 0;
    const m = +(t < 0 || (t === 0 && 1 / t < 0));
    let b = 0;
    for (
      (t = Math.abs(t)) != t || Infinity === t
        ? ((o = +(t != t)), (n = d))
        : ((h = 2 ** -(n = Math.floor(Math.log(t) / Math.LN2))),
          t * h < 1 && (n--, (h *= 2)),
          n + g >= 1 ? (t += y / h) : (t += y * 2 ** (1 - g)),
          t * h >= 2 && (n++, (h /= 2)),
          n + g >= d
            ? ((o = 0), (n = d))
            : n + g >= 1
              ? ((o = l((t * h - 1) * 2 ** r)), (n += g))
              : ((o = l(t * 2 ** (g - 1) * 2 ** r)), (n = 0)));
      r >= 8;
    ) {
      p[b++] = 255 & o;
      o /= 256;
      r -= 8;
    }
    n = (n << r) | o;
    for (v += r; v > 0;) {
      p[b++] = 255 & n;
      n /= 256;
      v -= 8;
    }
    p[--b] |= 128 * m;
    return p;
  },
  unpack: function (t, r) {
    let e;
    const t_length = t.length;
    const o = 8 * t_length - r - 1;
    const a = (1 << o) - 1;
    const i = a >> 1;
    let c = o - 7;
    let u = t_length - 1;
    let f = t[u--];
    let l = 127 & f;
    for (f >>= 7; c > 0;) {
      l = 256 * l + t[u--];
      c -= 8;
    }
    e = l & ((1 << -c) - 1);
    l >>= -c;
    for (c += r; c > 0;) {
      e = 256 * e + t[u--];
      c -= 8;
    }
    if (l === 0) {
      l = 1 - i;
    } else {
      if (l === a) {
        if (e) {
          return 0 / 0;
        }
        if (f) {
          return -Infinity;
        }
        return Infinity;
      }
      e += 2 ** r;
      l -= i;
    }
    return (f ? -1 : 1) * e * 2 ** (l - r);
  },
};
