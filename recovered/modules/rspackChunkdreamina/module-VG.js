import i from "./module-Wj.js";
import {
  createCipheriv,
  createDecipheriv,
  getCiphers as getCiphers_1,
} from "./module-qP_2.js";
import n from "./module-by_3.js";
import a from "./module-hG_2.js";
import s from "./module-psp.js";
export function Cipheriv(t, e, r) {
  if (n[(t = t.toLowerCase())]) {
    return createCipheriv(t, e, r);
  }
  if (a[t]) {
    return new i({
      key: e,
      iv: r,
      mode: t,
    });
  }
  throw TypeError("invalid suite type");
}
export function Decipheriv(t, e, r) {
  if (n[(t = t.toLowerCase())]) {
    return createDecipheriv(t, e, r);
  }
  if (a[t]) {
    return new i({
      key: e,
      iv: r,
      mode: t,
      decrypt: true,
    });
  }
  throw TypeError("invalid suite type");
}
export var Cipher = function (t, e) {
  if (n[(t = t.toLowerCase())]) {
    r = n[t].key;
    i = n[t].iv;
  } else if (a[t]) {
    r = 8 * a[t].key;
    i = a[t].iv;
  } else {
    throw TypeError("invalid suite type");
  }
  var r;
  var i;
  const f = s(e, false, r, i);
  return Cipheriv(t, f.key, f.iv);
};
export { Cipher as createCipher };
export { Cipheriv as createCipheriv };
export var Decipher = function (t, e) {
  if (n[(t = t.toLowerCase())]) {
    r = n[t].key;
    i = n[t].iv;
  } else if (a[t]) {
    r = 8 * a[t].key;
    i = a[t].iv;
  } else {
    throw TypeError("invalid suite type");
  }
  var r;
  var i;
  const f = s(e, false, r, i);
  return Decipheriv(t, f.key, f.iv);
};
export { Decipher as createDecipher };
export { Decipheriv as createDecipheriv };
export var getCiphers = function () {
  return Object.keys(a).concat(getCiphers_1());
};
export { getCiphers as listCiphers };
