import $ from "./module-H8.js";
import { Buffer } from "./module-s6_2_2.js";
const te = global.crypto || global.msCrypto;
if (te && te.getRandomValues) {
  module.exports = function (J, Z) {
    if (J > 4294967295) {
      throw RangeError("requested too many random bytes");
    }
    const Q = Buffer.allocUnsafe(J);
    if (J > 0) {
      if (J > 65536) {
        for (let tr = 0; tr < J; tr += 65536) {
          te.getRandomValues(Q.slice(tr, tr + 65536));
        }
      } else {
        te.getRandomValues(Q);
      }
    }
    if (typeof Z === "function") {
      return $.nextTick(function () {
        Z(null, Q);
      });
    }
    return Q;
  };
} else {
  module.exports = function () {
    throw Error(
      "Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11",
    );
  };
}
