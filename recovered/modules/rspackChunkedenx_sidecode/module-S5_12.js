import $ from "./module-O9_12.js";
import tt from "./module-aq_12.js";
const tr = $("".charAt);
const tn = $("".replace);
const ti = $("".slice);
const to = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
const ta = /\$([$&'`]|\d{1,2})/g;
export default function (J, Z, Q, $, ts, tf) {
  const tu = Q + J.length;
  const $_length = $.length;
  let th = ta;
  if (ts !== undefined) {
    ts = tt(ts);
    th = to;
  }
  return tn(tf, th, function (tt, tn) {
    let to;
    switch (tr(tn, 0)) {
      case "$":
        return "$";
      case "&":
        return J;
      case "`":
        return ti(Z, 0, Q);
      case "'":
        return ti(Z, tu);
      case "<":
        to = ts[ti(tn, 1, -1)];
        break;
      default:
        const ta = +tn;
        if (ta === 0) {
          return tt;
        }
        if (ta > $_length) {
          const tf = Math.floor(ta / 10);
          if (tf === 0) {
            return tt;
          }
          if (tf <= $_length) {
            if ($[tf - 1] === undefined) {
              return tr(tn, 1);
            }
            return $[tf - 1] + tr(tn, 1);
          }
          return tt;
        }
        to = $[ta - 1];
    }
    if (to === undefined) {
      return "";
    }
    return to;
  });
}
