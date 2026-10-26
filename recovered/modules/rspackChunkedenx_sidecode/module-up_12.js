import $ from "./module-bV_12.js";
import tt from "./module-MY_13.js";
const ts = (J) => {
  const Z = tt(J);
  const Q = Math.abs(J - Z);
  if (Q > 0.5 || (Q === 0.5 && Z % 2 != 0)) {
    return Z + $(J);
  }
  return Z;
};
export default {
  pack: function (J, Z, Q) {
    let $;
    let tt;
    let tf;
    const tu = Array(Q);
    let tc = 8 * Q - Z - 1;
    const th = (1 << tc) - 1;
    const td = th >> 1;
    const tl = Z === 23 ? 2 ** -24 - 2 ** -77 : 0;
    const tp = +(J < 0 || (J === 0 && 1 / J < 0));
    let tb = 0;
    for (
      (J = Math.abs(J)) != J || Infinity === J
        ? ((tt = +(J != J)), ($ = th))
        : ((tf = 2 ** -($ = Math.floor(Math.log(J) / Math.LN2))),
          J * tf < 1 && ($--, (tf *= 2)),
          $ + td >= 1 ? (J += tl / tf) : (J += tl * 2 ** (1 - td)),
          J * tf >= 2 && ($++, (tf /= 2)),
          $ + td >= th
            ? ((tt = 0), ($ = th))
            : $ + td >= 1
              ? ((tt = ts((J * tf - 1) * 2 ** Z)), ($ += td))
              : ((tt = ts(J * 2 ** (td - 1) * 2 ** Z)), ($ = 0)));
      Z >= 8;
    ) {
      tu[tb++] = 255 & tt;
      tt /= 256;
      Z -= 8;
    }
    $ = ($ << Z) | tt;
    for (tc += Z; tc > 0;) {
      tu[tb++] = 255 & $;
      $ /= 256;
      tc -= 8;
    }
    tu[--tb] |= 128 * tp;
    return tu;
  },
  unpack: function (J, Z) {
    let Q;
    const J_length = J.length;
    const tt = 8 * J_length - Z - 1;
    const te = (1 << tt) - 1;
    const tr = te >> 1;
    let ti = tt - 7;
    let to = J_length - 1;
    let ta = J[to--];
    let ts = 127 & ta;
    for (ta >>= 7; ti > 0;) {
      ts = 256 * ts + J[to--];
      ti -= 8;
    }
    Q = ts & ((1 << -ti) - 1);
    ts >>= -ti;
    for (ti += Z; ti > 0;) {
      Q = 256 * Q + J[to--];
      ti -= 8;
    }
    if (ts === 0) {
      ts = 1 - tr;
    } else {
      if (ts === te) {
        if (Q) {
          return 0 / 0;
        }
        if (ta) {
          return -Infinity;
        }
        return Infinity;
      }
      Q += 2 ** Z;
      ts -= tr;
    }
    return (ta ? -1 : 1) * Q * 2 ** (ts - Z);
  },
};
