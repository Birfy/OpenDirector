import $ from "./module-Nk_12.js";
import {
  createCipheriv,
  createDecipheriv,
  getCiphers as getCiphers_1,
} from "./module-mL.js";
import te from "./module-EK.js";
import tr from "./module-hp_13.js";
import tn from "./module-YY_2_2.js";
export function Cipheriv(J, Z, Q) {
  if (te[(J = J.toLowerCase())]) {
    return createCipheriv(J, Z, Q);
  }
  if (tr[J]) {
    return new $({
      key: Z,
      iv: Q,
      mode: J,
    });
  }
  throw TypeError("invalid suite type");
}
export function Decipheriv(J, Z, Q) {
  if (te[(J = J.toLowerCase())]) {
    return createDecipheriv(J, Z, Q);
  }
  if (tr[J]) {
    return new $({
      key: Z,
      iv: Q,
      mode: J,
      decrypt: true,
    });
  }
  throw TypeError("invalid suite type");
}
export var Cipher = function (J, Z) {
  if (te[(J = J.toLowerCase())]) {
    Q = te[J].key;
    $ = te[J].iv;
  } else if (tr[J]) {
    Q = 8 * tr[J].key;
    $ = tr[J].iv;
  } else {
    throw TypeError("invalid suite type");
  }
  var Q;
  var $;
  const tt = tn(Z, false, Q, $);
  return Cipheriv(J, tt.key, tt.iv);
};
export { Cipher as createCipher };
export { Cipheriv as createCipheriv };
export var Decipher = function (J, Z) {
  if (te[(J = J.toLowerCase())]) {
    Q = te[J].key;
    $ = te[J].iv;
  } else if (tr[J]) {
    Q = 8 * tr[J].key;
    $ = tr[J].iv;
  } else {
    throw TypeError("invalid suite type");
  }
  var Q;
  var $;
  const tt = tn(Z, false, Q, $);
  return Decipheriv(J, tt.key, tt.iv);
};
export { Decipher as createDecipher };
export { Decipheriv as createDecipheriv };
export var getCiphers = function () {
  return Object.keys(tr).concat(getCiphers_1());
};
export { getCiphers as listCiphers };
