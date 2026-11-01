import n from "./module-YR_21.js";
import i from "./module-O9_21.js";
const s = n("String", "fromCodePoint");
const a = i("".charAt);
const u = i("".charCodeAt);
const c = i("".indexOf);
const f = i("".slice);
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
    const i = v(u(t, r));
    if (i === -1) {
      return -1;
    }
    n = 16 * n + i;
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
  for (let i = 0; (i = c(t, "\\", i)) > -1;) {
    e += f(t, n, i);
    if (++i === t.length) {
      return;
    }
    const u = a(t, i++);
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
        if (i < t.length && a(t, i) === "\n") {
          ++i;
        }
      case "\n":
      case "\u2028":
      case "\u2029":
        break;
      case "0":
        if (h(t, i)) {
          return;
        }
        e += "\0";
        break;
      case "x":
        if ((r = l(t, i, i + 2)) === -1) {
          return;
        }
        i += 2;
        e += String.fromCharCode(r);
        break;
      case "u":
        if (i < t.length && a(t, i) === "{") {
          const v = c(t, "}", ++i);
          if (v === -1) {
            return;
          }
          r = l(t, i, v);
          i = v + 1;
        } else {
          r = l(t, i, i + 4);
          i += 4;
        }
        if (r === -1 || r > 1114111) {
          return;
        }
        e += s(r);
        break;
      default:
        if (h(u, 0)) {
          return;
        }
        e += u;
    }
    n = i;
  }
  return e + f(t, n);
}
