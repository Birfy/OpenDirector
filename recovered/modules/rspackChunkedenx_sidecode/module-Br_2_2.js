export const read = function (J, Z, Q, $, tt) {
  let te;
  let tr;
  const tn = 8 * tt - $ - 1;
  const ti = (1 << tn) - 1;
  const to = ti >> 1;
  let ta = -7;
  let ts = Q ? tt - 1 : 0;
  const tf = Q ? -1 : 1;
  let tu = J[Z + ts];
  ts += tf;
  te = tu & ((1 << -ta) - 1);
  tu >>= -ta;
  for (ta += tn; ta > 0; te = 256 * te + J[Z + ts], ts += tf, ta -= 8);
  tr = te & ((1 << -ta) - 1);
  te >>= -ta;
  for (ta += $; ta > 0; tr = 256 * tr + J[Z + ts], ts += tf, ta -= 8);
  if (te === 0) {
    te = 1 - to;
  } else {
    if (te === ti) {
      if (tr) {
        return 0 / 0;
      }
      return (tu ? -1 : 1) * 2e308;
    }
    tr += 2 ** $;
    te -= to;
  }
  return (tu ? -1 : 1) * tr * 2 ** (te - $);
};
export const write = function (J, Z, Q, $, tt, te) {
  let tr;
  let tn;
  let ti;
  let to = 8 * te - tt - 1;
  const ta = (1 << to) - 1;
  const ts = ta >> 1;
  const tf = 5.960464477539062e-8 * (tt === 23);
  let tu = $ ? 0 : te - 1;
  const tc = $ ? 1 : -1;
  const th = +(Z < 0 || (Z === 0 && 1 / Z < 0));
  for (
    isNaN((Z = Math.abs(Z))) || Infinity === Z
      ? ((tn = +!!isNaN(Z)), (tr = ta))
      : ((tr = Math.floor(Math.log(Z) / Math.LN2)),
        Z * (ti = 2 ** -tr) < 1 && (tr--, (ti *= 2)),
        tr + ts >= 1 ? (Z += tf / ti) : (Z += tf * 2 ** (1 - ts)),
        Z * ti >= 2 && (tr++, (ti /= 2)),
        tr + ts >= ta
          ? ((tn = 0), (tr = ta))
          : tr + ts >= 1
            ? ((tn = (Z * ti - 1) * 2 ** tt), (tr += ts))
            : ((tn = Z * 2 ** (ts - 1) * 2 ** tt), (tr = 0)));
    tt >= 8;
    J[Q + tu] = 255 & tn, tu += tc, tn /= 256, tt -= 8
  );
  tr = (tr << tt) | tn;
  for (to += tt; to > 0; J[Q + tu] = 255 & tr, tu += tc, tr /= 256, to -= 8);
  J[Q + tu - tc] |= 128 * th;
};
