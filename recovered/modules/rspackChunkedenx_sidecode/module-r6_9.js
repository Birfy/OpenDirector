import n from "./module-YR_9.js";
import o from "./module-O9_9.js";
const a = n("String", "fromCodePoint");
const s = o("".charAt);
const u = o("".charCodeAt);
const c = o("".indexOf);
const f = o("".slice);
const l = (t, e) => {
  const r = u(t, e);
  return r >= 48 && r <= 57;
};
const h = (t, e, r) => {
  if (r >= t.length) {
    return -1;
  }
  let n = 0;
  for (; e < r; e++) {
    const o = v(u(t, e));
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
  let e;
  let r = "";
  let n = 0;
  for (let o = 0; (o = c(t, "\\", o)) > -1;) {
    r += f(t, n, o);
    if (++o === t.length) {
      return;
    }
    const u = s(t, o++);
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
        if (o < t.length && s(t, o) === "\n") {
          ++o;
        }
      case "\n":
      case "\u2028":
      case "\u2029":
        break;
      case "0":
        if (l(t, o)) {
          return;
        }
        r += "\0";
        break;
      case "x":
        if ((e = h(t, o, o + 2)) === -1) {
          return;
        }
        o += 2;
        r += String.fromCharCode(e);
        break;
      case "u":
        if (o < t.length && s(t, o) === "{") {
          const v = c(t, "}", ++o);
          if (v === -1) {
            return;
          }
          e = h(t, o, v);
          o = v + 1;
        } else {
          e = h(t, o, o + 4);
          o += 4;
        }
        if (e === -1 || e > 1114111) {
          return;
        }
        r += a(e);
        break;
      default:
        if (l(u, 0)) {
          return;
        }
        r += u;
    }
    n = o;
  }
  return r + f(t, n);
}
