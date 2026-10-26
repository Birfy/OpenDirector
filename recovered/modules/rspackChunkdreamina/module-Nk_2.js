export const read = function (t, e, r, n, i) {
  let a;
  let o;
  const s = 8 * i - n - 1;
  const A = (1 << s) - 1;
  const c = A >> 1;
  let u = -7;
  let l = r ? i - 1 : 0;
  const h = r ? -1 : 1;
  let f = t[e + l];
  l += h;
  a = f & ((1 << -u) - 1);
  f >>= -u;
  for (u += s; u > 0; a = 256 * a + t[e + l], l += h, u -= 8);
  o = a & ((1 << -u) - 1);
  a >>= -u;
  for (u += n; u > 0; o = 256 * o + t[e + l], l += h, u -= 8);
  if (a === 0) {
    a = 1 - c;
  } else {
    if (a === A) {
      if (o) {
        return 0 / 0;
      }
      return (f ? -1 : 1) * 2e308;
    }
    o += 2 ** n;
    a -= c;
  }
  return (f ? -1 : 1) * o * 2 ** (a - n);
};
export const write = function (t, e, r, n, i, a) {
  let o;
  let s;
  let A;
  let c = 8 * a - i - 1;
  const u = (1 << c) - 1;
  const l = u >> 1;
  const h = 5.960464477539062e-8 * (i === 23);
  let f = n ? 0 : a - 1;
  const g = n ? 1 : -1;
  const d = +(e < 0 || (e === 0 && 1 / e < 0));
  for (
    isNaN((e = Math.abs(e))) || Infinity === e
      ? ((s = +!!isNaN(e)), (o = u))
      : ((o = Math.floor(Math.log(e) / Math.LN2)),
        e * (A = 2 ** -o) < 1 && (o--, (A *= 2)),
        o + l >= 1 ? (e += h / A) : (e += h * 2 ** (1 - l)),
        e * A >= 2 && (o++, (A /= 2)),
        o + l >= u
          ? ((s = 0), (o = u))
          : o + l >= 1
            ? ((s = (e * A - 1) * 2 ** i), (o += l))
            : ((s = e * 2 ** (l - 1) * 2 ** i), (o = 0)));
    i >= 8;
    t[r + f] = 255 & s, f += g, s /= 256, i -= 8
  );
  o = (o << i) | s;
  for (c += i; c > 0; t[r + f] = 255 & o, f += g, o /= 256, c -= 8);
  t[r + f - g] |= 128 * d;
};
