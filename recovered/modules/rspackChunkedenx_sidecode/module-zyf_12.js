import $ from "./module-O9_12.js";
const tt = /[^\0-\u007E]/;
const te = /[.\u3002\uFF0E\uFF61]/g;
const tr = "Overflow: input needs wider integers to process";
const ti = $(te.exec);
const ts = $("".charCodeAt);
const tf = $([].join);
const tu = $([].push);
const tc = $("".replace);
const th = $("".split);
const td = $("".toLowerCase);
const tl = (J) => {
  const Z = [];
  for (let Q = 0, $ = J.length; Q < $;) {
    const tt = ts(J, Q++);
    if (tt >= 55296 && tt <= 56319 && Q < $) {
      const te = ts(J, Q++);
      if ((64512 & te) == 56320) {
        tu(Z, ((1023 & tt) << 10) + (1023 & te) + 65536);
      } else {
        tu(Z, tt);
        Q--;
      }
    } else {
      tu(Z, tt);
    }
  }
  return Z;
};
const tp = (J) => J + 22 + 75 * (J < 26);
const tb = (J, Z, Q) => {
  let $ = 0;
  J = Q ? Math.floor(J / 700) : J >> 1;
  for (J += Math.floor(J / Z); J > 455;) {
    J = Math.floor(J / 35);
    $ += 36;
  }
  return Math.floor($ + (36 * J) / (J + 38));
};
const tv = (J) => {
  let Z;
  let Q;
  const $ = [];
  const length = (J = tl(J)).length;
  let te = 128;
  let ti = 0;
  let ts = 72;
  for (Z = 0; Z < J.length; Z++) {
    if ((Q = J[Z]) < 128) {
      tu($, String.fromCharCode(Q));
    }
  }
  const $_length = $.length;
  let th = $_length;
  for ($_length && tu($, "-"); th < length;) {
    let td = 2147483647;
    for (Z = 0; Z < J.length; Z++) {
      if ((Q = J[Z]) >= te && Q < td) {
        td = Q;
      }
    }
    const tv = th + 1;
    if (td - te > Math.floor((2147483647 - ti) / tv)) {
      throw RangeError(tr);
    }
    ti += (td - te) * tv;
    te = td;
    for (Z = 0; Z < J.length; Z++) {
      if ((Q = J[Z]) < te && ++ti > 2147483647) {
        throw RangeError(tr);
      }
      if (Q === te) {
        let tg = ti;
        let ty = 36;
        while (true) {
          const tm = ty <= ts ? 1 : ty >= ts + 26 ? 26 : ty - ts;
          if (tg < tm) {
            break;
          }
          const tw = tg - tm;
          const tx = 36 - tm;
          tu($, String.fromCharCode(tp(tm + (tw % tx))));
          tg = Math.floor(tw / tx);
          ty += 36;
        }
        tu($, String.fromCharCode(tp(tg)));
        ts = tb(ti, tv, th === $_length);
        ti = 0;
        th++;
      }
    }
    ti++;
    te++;
  }
  return tf($, "");
};
export default function (J) {
  let Z;
  let Q;
  const $ = [];
  const tr = th(tc(td(J), te, "."), ".");
  for (Z = 0; Z < tr.length; Z++) {
    tu($, ti(tt, (Q = tr[Z])) ? "xn--" + tv(Q) : Q);
  }
  return tf($, ".");
}
