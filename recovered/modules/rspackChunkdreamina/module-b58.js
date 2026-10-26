const $ = require("wS");
const $_Buffer = $.Buffer;
function et(Z, Q) {
  for (const X in Z) {
    Q[X] = Z[X];
  }
}
function er(Z, Q, X) {
  return $_Buffer(Z, Q, X);
}
if (
  $_Buffer.from &&
  $_Buffer.alloc &&
  $_Buffer.allocUnsafe &&
  $_Buffer.allocUnsafeSlow
) {
  module.exports = $;
} else {
  et($, exports);
  exports.Buffer = er;
}
er.prototype = Object.create($_Buffer.prototype);
et($_Buffer, er);
er.from = function (Z, Q, X) {
  if (typeof Z === "number") {
    throw TypeError("Argument must not be a number");
  }
  return $_Buffer(Z, Q, X);
};
er.alloc = function (Z, Q, X) {
  if (typeof Z !== "number") {
    throw TypeError("Argument must be a number");
  }
  const $ = $_Buffer(Z);
  if (Q !== undefined) {
    if (typeof X === "string") {
      $.fill(Q, X);
    } else {
      $.fill(Q);
    }
  } else {
    $.fill(0);
  }
  return $;
};
er.allocUnsafe = function (Z) {
  if (typeof Z !== "number") {
    throw TypeError("Argument must be a number");
  }
  return $_Buffer(Z);
};
er.allocUnsafeSlow = function (Z) {
  if (typeof Z !== "number") {
    throw TypeError("Argument must be a number");
  }
  return $.SlowBuffer(Z);
};
