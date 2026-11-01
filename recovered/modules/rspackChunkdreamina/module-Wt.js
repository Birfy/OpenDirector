import $ from "rCO";
import { Buffer } from "./module-b58.js";
const et = global.crypto || global.msCrypto;
if (et && et.getRandomValues) {
  module.exports = function (Z, Q) {
    if (Z > 4294967295) {
      throw RangeError("requested too many random bytes");
    }
    const X = Buffer.allocUnsafe(Z);
    if (Z > 0) {
      if (Z > 65536) {
        for (let er = 0; er < Z; er += 65536) {
          et.getRandomValues(X.slice(er, er + 65536));
        }
      } else {
        et.getRandomValues(X);
      }
    }
    if (typeof Q === "function") {
      return $.nextTick(function () {
        Q(null, X);
      });
    }
    return X;
  };
} else {
  module.exports = function () {
    throw Error(
      "Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11",
    );
  };
}
