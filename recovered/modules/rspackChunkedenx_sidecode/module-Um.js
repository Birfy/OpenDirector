const $ = require("./module-pH.js");
const $_Buffer = $.Buffer;
function te(J, Z) {
  for (const Q in J) {
    Z[Q] = J[Q];
  }
}
function tr(J, Z, Q) {
  return $_Buffer(J, Z, Q);
}
if (
  $_Buffer.from &&
  $_Buffer.alloc &&
  $_Buffer.allocUnsafe &&
  $_Buffer.allocUnsafeSlow
) {
  module.exports = $;
} else {
  te($, exports);
  exports.Buffer = tr;
}
te($_Buffer, tr);
tr.from = function (J, Z, Q) {
  if (typeof J === "number") {
    throw TypeError("Argument must not be a number");
  }
  return $_Buffer(J, Z, Q);
};
tr.alloc = function (J, Z, Q) {
  if (typeof J !== "number") {
    throw TypeError("Argument must be a number");
  }
  const $ = $_Buffer(J);
  if (Z !== undefined) {
    if (typeof Q === "string") {
      $.fill(Z, Q);
    } else {
      $.fill(Z);
    }
  } else {
    $.fill(0);
  }
  return $;
};
tr.allocUnsafe = function (J) {
  if (typeof J !== "number") {
    throw TypeError("Argument must be a number");
  }
  return $_Buffer(J);
};
tr.allocUnsafeSlow = function (J) {
  if (typeof J !== "number") {
    throw TypeError("Argument must be a number");
  }
  return $.SlowBuffer(J);
};
