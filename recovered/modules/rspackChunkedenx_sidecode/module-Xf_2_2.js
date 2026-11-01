import $ from "./module-H8.js";
import te from "./module-s6_2_2.js";
import tr from "./module-qs_2_2.js";
export var randomFill;
export var randomFillSync;
function tt() {
  throw Error(
    "secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11",
  );
}
const te_Buffer = te.Buffer;
const te_kMaxLength = te.kMaxLength;
const to = global.crypto || global.msCrypto;
function ta(J, Z) {
  if (typeof J !== "number" || J != J) {
    throw TypeError("offset must be a number");
  }
  if (J > 4294967295 || J < 0) {
    throw TypeError("offset must be a uint32");
  }
  if (J > te_kMaxLength || J > Z) {
    throw RangeError("offset out of range");
  }
}
function ts(J, Z, Q) {
  if (typeof J !== "number" || J != J) {
    throw TypeError("size must be a number");
  }
  if (J > 4294967295 || J < 0) {
    throw TypeError("size must be a uint32");
  }
  if (J + Z > Q || J > te_kMaxLength) {
    throw RangeError("buffer too small");
  }
}
function tf(J, Z, Q, tt) {
  if ($.browser) {
    const te = new Uint8Array(J.buffer, Z, Q);
    to.getRandomValues(te);
    if (tt) {
      return void $.nextTick(function () {
        tt(null, J);
      });
    }
    return J;
  }
  if (tt) {
    return void tr(Q, function (Q, $) {
      if (Q) {
        return tt(Q);
      }
      $.copy(J, Z);
      tt(null, J);
    });
  }
  tr(Q).copy(J, Z);
  return J;
}
if ((to && to.getRandomValues) || !$.browser) {
  randomFill = function (J, Z, $, tt) {
    if (!te_Buffer.isBuffer(J) && !(J instanceof global.Uint8Array)) {
      throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    }
    if (typeof Z === "function") {
      tt = Z;
      Z = 0;
      $ = J.length;
    } else if (typeof $ === "function") {
      tt = $;
      $ = J.length - Z;
    } else if (typeof tt !== "function") {
      throw TypeError('"cb" argument must be a function');
    }
    ta(Z, J.length);
    ts($, Z, J.length);
    return tf(J, Z, $, tt);
  };
  randomFillSync = function (J, Z = 0, $) {
    if (!te_Buffer.isBuffer(J) && !(J instanceof global.Uint8Array)) {
      throw TypeError('"buf" argument must be a Buffer or Uint8Array');
    }
    ta(Z, J.length);
    if ($ === undefined) {
      $ = J.length - Z;
    }
    ts($, Z, J.length);
    return tf(J, Z, $);
  };
} else {
  randomFill = tt;
  randomFillSync = tt;
}
