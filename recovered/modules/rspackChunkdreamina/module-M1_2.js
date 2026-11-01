import i from "./module-cGB.js";
import f from "TnJ";
import n from "Ht";
export { f as assert };
export var toArray = n.toArray;
export const zero2 = n.zero2;
export const toHex = n.toHex;
export const encode = n.encode;
export const getNAF = function (t, e, r) {
  const i = Array(Math.max(t.bitLength(), r) + 1);
  for (a = 0; a < i.length; a += 1) {
    i[a] = 0;
  }
  const f = 1 << (e + 1);
  const n = t.clone();
  for (a = 0; a < i.length; a++) {
    var a;
    let s;
    const o = n.andln(f - 1);
    if (n.isOdd()) {
      s = o > (f >> 1) - 1 ? (f >> 1) - o : o;
      n.isubn(s);
    } else {
      s = 0;
    }
    i[a] = s;
    n.iushrn(1);
  }
  return i;
};
export const getJSF = function (t, e) {
  const r = [[], []];
  t = t.clone();
  e = e.clone();
  for (let i = 0, f = 0; t.cmpn(-i) > 0 || e.cmpn(-f) > 0;) {
    let n;
    let a;
    let s;
    let o = (t.andln(3) + i) & 3;
    let h = (e.andln(3) + f) & 3;
    if (o === 3) {
      o = -1;
    }
    if (h === 3) {
      h = -1;
    }
    a =
      (1 & o) == 0
        ? 0
        : ((n = (t.andln(7) + i) & 7) == 3 || n === 5) && h === 2
          ? -o
          : o;
    r[0].push(a);
    s =
      (1 & h) == 0
        ? 0
        : ((n = (e.andln(7) + f) & 7) == 3 || n === 5) && o === 2
          ? -h
          : h;
    r[1].push(s);
    if (2 * i === a + 1) {
      i = 1 - i;
    }
    if (2 * f === s + 1) {
      f = 1 - f;
    }
    t.iushrn(1);
    e.iushrn(1);
  }
  return r;
};
export const cachedProperty = function (t, e, r) {
  const i = "_" + e;
  t.prototype[e] = function () {
    if (this[i] !== undefined) {
      return this[i];
    }
    return (this[i] = r.call(this));
  };
};
export const parseBytes = function (t) {
  if (typeof t === "string") {
    return toArray(t, "hex");
  }
  return t;
};
export const intFromLE = function (t) {
  return new i(t, "hex", "le");
};
