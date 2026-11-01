import n from "./module-bV_11.js";
import o from "./module-MY_12.js";
const h = (r) => {
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
    let l;
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
        : ((l = 2 ** -(n = Math.floor(Math.log(r) / Math.LN2))),
          r * l < 1 && (n--, (l *= 2)),
          n + g >= 1 ? (r += y / l) : (r += y * 2 ** (1 - g)),
          r * l >= 2 && (n++, (l /= 2)),
          n + g >= d
            ? ((o = 0), (n = d))
            : n + g >= 1
              ? ((o = h((r * l - 1) * 2 ** t)), (n += g))
              : ((o = h(r * 2 ** (g - 1) * 2 ** t)), (n = 0)));
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
    let h = 127 & f;
    for (f >>= 7; u > 0;) {
      h = 256 * h + r[c--];
      u -= 8;
    }
    e = h & ((1 << -u) - 1);
    h >>= -u;
    for (u += t; u > 0;) {
      e = 256 * e + r[c--];
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
      e += 2 ** t;
      h -= a;
    }
    return (f ? -1 : 1) * e * 2 ** (h - t);
  },
};
