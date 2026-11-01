import $ from "rCO";
import et from "./module-b58.js";
import er from "./module-Wt.js";
export var randomFill;
export var randomFillSync;
function ee() {
  throw Error(
    "secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11",
  );
}
const et_Buffer = et.Buffer;
const et_kMaxLength = et.kMaxLength;
const ea = global.crypto || global.msCrypto;
function eo(Z, Q) {
  if (typeof Z !== "number" || Z != Z) {
    throw TypeError("offset must be a number");
  }
  if (Z > 4294967295 || Z < 0) {
    throw TypeError("offset must be a uint32");
  }
  if (Z > et_kMaxLength || Z > Q) {
    throw RangeError("offset out of range");
  }
}
function es(Z, Q, X) {
  if (typeof Z !== "number" || Z != Z) {
    throw TypeError("size must be a number");
  }
  if (Z > 4294967295 || Z < 0) {
    throw TypeError("size must be a uint32");
  }
  if (Z + Q > X || Z > et_kMaxLength) {
    throw RangeError("buffer too small");
  }
}
function ef(Z, Q, X, ee) {
  if ($.browser) {
    const et = new Uint8Array(Z.buffer, Q, X);
    ea.getRandomValues(et);
    if (ee) {
      return void $.nextTick(function () {
        ee(null, Z);
      });
    }
    return Z;
  }
  if (ee) {
    return void er(X, function (X, $) {
      if (X) {
        return ee(X);
      }
      $.copy(Z, Q);
      ee(null, Z);
    });
  }
  er(X).copy(Z, Q);
  return Z;
}
if ((ea && ea.getRandomValues) || !$.browser) {
  randomFill = function (Z, Q, $, ee) {
    if (!et_Buffer.isBuffer(Z) && !(Z instanceof global.Uint8Array)) {
      throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    }
    if (typeof Q === "function") {
      ee = Q;
      Q = 0;
      $ = Z.length;
    } else if (typeof $ === "function") {
      ee = $;
      $ = Z.length - Q;
    } else if (typeof ee !== "function") {
      throw TypeError('"cb" argument must be a function');
    }
    eo(Q, Z.length);
    es($, Q, Z.length);
    return ef(Z, Q, $, ee);
  };
  randomFillSync = function (Z, Q = 0, $) {
    if (!et_Buffer.isBuffer(Z) && !(Z instanceof global.Uint8Array)) {
      throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    }
    eo(Q, Z.length);
    if ($ === undefined) {
      $ = Z.length - Q;
    }
    es($, Q, Z.length);
    return ef(Z, Q, $);
  };
} else {
  randomFill = ee;
  randomFillSync = ee;
}
