import $ from "./module-YR_12.js";
import tt from "./module-O9_12.js";
const tr = $("String", "fromCodePoint");
const tn = tt("".charAt);
const ti = tt("".charCodeAt);
const to = tt("".indexOf);
const ta = tt("".slice);
const ts = (J, Z) => {
  const Q = ti(J, Z);
  return Q >= 48 && Q <= 57;
};
const tf = (J, Z, Q) => {
  if (Q >= J.length) {
    return -1;
  }
  let $ = 0;
  for (; Z < Q; Z++) {
    const tt = tu(ti(J, Z));
    if (tt === -1) {
      return -1;
    }
    $ = 16 * $ + tt;
  }
  return $;
};
var tu = (J) => {
  if (J >= 48 && J <= 57) {
    return J - 48;
  }
  if (J >= 97 && J <= 102) {
    return J - 97 + 10;
  }
  if (J >= 65 && J <= 70) {
    return J - 65 + 10;
  }
  return -1;
};
export default function (J) {
  let Z;
  let Q = "";
  let $ = 0;
  for (let tt = 0; (tt = to(J, "\\", tt)) > -1;) {
    Q += ta(J, $, tt);
    if (++tt === J.length) {
      return;
    }
    const ti = tn(J, tt++);
    switch (ti) {
      case "b":
        Q += "\b";
        break;
      case "t":
        Q += "	";
        break;
      case "n":
        Q += "\n";
        break;
      case "v":
        Q += "\v";
        break;
      case "f":
        Q += "\f";
        break;
      case "r":
        Q += "\r";
        break;
      case "\r":
        if (tt < J.length && tn(J, tt) === "\n") {
          ++tt;
        }
      case "\n":
      case "\u2028":
      case "\u2029":
        break;
      case "0":
        if (ts(J, tt)) {
          return;
        }
        Q += "\0";
        break;
      case "x":
        if ((Z = tf(J, tt, tt + 2)) === -1) {
          return;
        }
        tt += 2;
        Q += String.fromCharCode(Z);
        break;
      case "u":
        if (tt < J.length && tn(J, tt) === "{") {
          const tu = to(J, "}", ++tt);
          if (tu === -1) {
            return;
          }
          Z = tf(J, tt, tu);
          tt = tu + 1;
        } else {
          Z = tf(J, tt, tt + 4);
          tt += 4;
        }
        if (Z === -1 || Z > 1114111) {
          return;
        }
        Q += tr(Z);
        break;
      default:
        if (ts(ti, 0)) {
          return;
        }
        Q += ti;
    }
    $ = tt;
  }
  return Q + ta(J, $);
}
