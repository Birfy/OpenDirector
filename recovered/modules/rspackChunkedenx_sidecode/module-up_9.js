import n from "./module-bV_9.js";
import o from "./module-MY_10.js";
const l = (t) => {
  const e = o(t);
  const r = Math.abs(t - e);
  if (r > 0.5 || (r === 0.5 && e % 2 != 0)) {
    return e + n(t);
  }
  return e;
};
export default {
  pack: function (t, e, r) {
    let n;
    let o;
    let h;
    const v = Array(r);
    let d = 8 * r - e - 1;
    const p = (1 << d) - 1;
    const g = p >> 1;
    const y = e === 23 ? 2 ** -24 - 2 ** -77 : 0;
    const m = +(t < 0 || (t === 0 && 1 / t < 0));
    let b = 0;
    for (
      (t = Math.abs(t)) != t || Infinity === t
        ? ((o = +(t != t)), (n = p))
        : ((h = 2 ** -(n = Math.floor(Math.log(t) / Math.LN2))),
          t * h < 1 && (n--, (h *= 2)),
          n + g >= 1 ? (t += y / h) : (t += y * 2 ** (1 - g)),
          t * h >= 2 && (n++, (h /= 2)),
          n + g >= p
            ? ((o = 0), (n = p))
            : n + g >= 1
              ? ((o = l((t * h - 1) * 2 ** e)), (n += g))
              : ((o = l(t * 2 ** (g - 1) * 2 ** e)), (n = 0)));
      e >= 8;
    ) {
      v[b++] = 255 & o;
      o /= 256;
      e -= 8;
    }
    n = (n << e) | o;
    for (d += e; d > 0;) {
      v[b++] = 255 & n;
      n /= 256;
      d -= 8;
    }
    v[--b] |= 128 * m;
    return v;
  },
  unpack: function (t, e) {
    let r;
    const t_length = t.length;
    const o = 8 * t_length - e - 1;
    const i = (1 << o) - 1;
    const a = i >> 1;
    let u = o - 7;
    let c = t_length - 1;
    let f = t[c--];
    let l = 127 & f;
    for (f >>= 7; u > 0;) {
      l = 256 * l + t[c--];
      u -= 8;
    }
    r = l & ((1 << -u) - 1);
    l >>= -u;
    for (u += e; u > 0;) {
      r = 256 * r + t[c--];
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
      r += 2 ** e;
      l -= a;
    }
    return (f ? -1 : 1) * r * 2 ** (l - e);
  },
};
