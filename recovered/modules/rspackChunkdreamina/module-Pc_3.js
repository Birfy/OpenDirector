import n from "./module-Y.js";
import o from "./module-o.js";
const a = n("String", "fromCodePoint");
const s = o("".charAt);
const u = o("".charCodeAt);
const c = o("".indexOf);
const f = o("".slice);
const l = (e, t) => {
  const r = u(e, t);
  return r >= 48 && r <= 57;
};
const p = (e, t, r) => {
  if (r >= e.length) {
    return -1;
  }
  let n = 0;
  for (; t < r; t++) {
    const o = h(u(e, t));
    if (o === -1) {
      return -1;
    }
    n = 16 * n + o;
  }
  return n;
};
var h = (e) => {
  if (e >= 48 && e <= 57) {
    return e - 48;
  }
  if (e >= 97 && e <= 102) {
    return e - 97 + 10;
  }
  if (e >= 65 && e <= 70) {
    return e - 65 + 10;
  }
  return -1;
};
export default function (e) {
  let t;
  let r = "";
  let n = 0;
  for (let o = 0; (o = c(e, "\\", o)) > -1;) {
    r += f(e, n, o);
    if (++o === e.length) {
      return;
    }
    const u = s(e, o++);
    switch (u) {
      case "b":
        r += "\b";
        break;
      case "t":
        r += "	";
        break;
      case "n":
        r += "\n";
        break;
      case "v":
        r += "\v";
        break;
      case "f":
        r += "\f";
        break;
      case "r":
        r += "\r";
        break;
      case "\r":
        if (o < e.length && s(e, o) === "\n") {
          ++o;
        }
      case "\n":
      case "\u2028":
      case "\u2029":
        break;
      case "0":
        if (l(e, o)) {
          return;
        }
        r += "\0";
        break;
      case "x":
        if ((t = p(e, o, o + 2)) === -1) {
          return;
        }
        o += 2;
        r += String.fromCharCode(t);
        break;
      case "u":
        if (o < e.length && s(e, o) === "{") {
          const h = c(e, "}", ++o);
          if (h === -1) {
            return;
          }
          t = p(e, o, h);
          o = h + 1;
        } else {
          t = p(e, o, o + 4);
          o += 4;
        }
        if (t === -1 || t > 1114111) {
          return;
        }
        r += a(t);
        break;
      default:
        if (l(u, 0)) {
          return;
        }
        r += u;
    }
    n = o;
  }
  return r + f(e, n);
}
