import n from "./module-YR_7.js";
import o from "./module-O9_7.js";
const a = n("String", "fromCodePoint");
const s = o("".charAt);
const u = o("".charCodeAt);
const c = o("".indexOf);
const f = o("".slice);
const l = (r, t) => {
  const e = u(r, t);
  return e >= 48 && e <= 57;
};
const h = (r, t, e) => {
  if (e >= r.length) {
    return -1;
  }
  let n = 0;
  for (; t < e; t++) {
    const o = v(u(r, t));
    if (o === -1) {
      return -1;
    }
    n = 16 * n + o;
  }
  return n;
};
var v = (r) => {
  if (r >= 48 && r <= 57) {
    return r - 48;
  }
  if (r >= 97 && r <= 102) {
    return r - 97 + 10;
  }
  if (r >= 65 && r <= 70) {
    return r - 65 + 10;
  }
  return -1;
};
export default function (r) {
  let t;
  let e = "";
  let n = 0;
  for (let o = 0; (o = c(r, "\\", o)) > -1;) {
    e += f(r, n, o);
    if (++o === r.length) {
      return;
    }
    const u = s(r, o++);
    switch (u) {
      case "b":
        e += "\b";
        break;
      case "t":
        e += "	";
        break;
      case "n":
        e += "\n";
        break;
      case "v":
        e += "\v";
        break;
      case "f":
        e += "\f";
        break;
      case "r":
        e += "\r";
        break;
      case "\r":
        if (o < r.length && s(r, o) === "\n") {
          ++o;
        }
      case "\n":
      case "\u2028":
      case "\u2029":
        break;
      case "0":
        if (l(r, o)) {
          return;
        }
        e += "\0";
        break;
      case "x":
        if ((t = h(r, o, o + 2)) === -1) {
          return;
        }
        o += 2;
        e += String.fromCharCode(t);
        break;
      case "u":
        if (o < r.length && s(r, o) === "{") {
          const v = c(r, "}", ++o);
          if (v === -1) {
            return;
          }
          t = h(r, o, v);
          o = v + 1;
        } else {
          t = h(r, o, o + 4);
          o += 4;
        }
        if (t === -1 || t > 1114111) {
          return;
        }
        e += a(t);
        break;
      default:
        if (l(u, 0)) {
          return;
        }
        e += u;
    }
    n = o;
  }
  return e + f(r, n);
}
