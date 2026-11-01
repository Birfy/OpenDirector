import n from "./module-YR.js";
import o from "./module-O9.js";
const a = n("String", "fromCodePoint");
const s = o("".charAt);
const u = o("".charCodeAt);
const c = o("".indexOf);
const f = o("".slice);
const h = (t, r) => {
  const e = u(t, r);
  return e >= 48 && e <= 57;
};
const l = (t, r, e) => {
  if (e >= t.length) {
    return -1;
  }
  let n = 0;
  for (; r < e; r++) {
    const o = v(u(t, r));
    if (o === -1) {
      return -1;
    }
    n = 16 * n + o;
  }
  return n;
};
var v = (t) => {
  if (t >= 48 && t <= 57) {
    return t - 48;
  }
  if (t >= 97 && t <= 102) {
    return t - 97 + 10;
  }
  if (t >= 65 && t <= 70) {
    return t - 65 + 10;
  }
  return -1;
};
export default function (t) {
  let r;
  let e = "";
  let n = 0;
  for (let o = 0; (o = c(t, "\\", o)) > -1;) {
    e += f(t, n, o);
    if (++o === t.length) {
      return;
    }
    const u = s(t, o++);
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
        if (o < t.length && s(t, o) === "\n") {
          ++o;
        }
      case "\n":
      case "\u2028":
      case "\u2029":
        break;
      case "0":
        if (h(t, o)) {
          return;
        }
        e += "\0";
        break;
      case "x":
        if ((r = l(t, o, o + 2)) === -1) {
          return;
        }
        o += 2;
        e += String.fromCharCode(r);
        break;
      case "u":
        if (o < t.length && s(t, o) === "{") {
          const v = c(t, "}", ++o);
          if (v === -1) {
            return;
          }
          r = l(t, o, v);
          o = v + 1;
        } else {
          r = l(t, o, o + 4);
          o += 4;
        }
        if (r === -1 || r > 1114111) {
          return;
        }
        e += a(r);
        break;
      default:
        if (h(u, 0)) {
          return;
        }
        e += u;
    }
    n = o;
  }
  return e + f(t, n);
}
