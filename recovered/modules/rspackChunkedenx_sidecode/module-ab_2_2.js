import $ from "./module-r9_12.js";
import tt from "./module-X_13.js";
import te from "./module-d_13.js";
import tr from "./module-Za_12.js";
import tn from "./module-Yw_12.js";
const toString = Error.prototype.toString;
export default tt(function () {
  if ($) {
    var J = tr(
      Object.defineProperty({}, "name", {
        get: function () {
          return this === J;
        },
      }),
    );
    if (toString.call(J) !== "true") {
      return true;
    }
  }
  return (
    toString.call({
      message: 1,
      name: 2,
    }) !== "2: 1" || toString.call({}) !== "Error"
  );
})
  ? function () {
      const J = te(this);
      const Z = tn(J.name, "Error");
      const Q = tn(J.message);
      if (Z) {
        if (Q) {
          return Z + ": " + Q;
        }
        return Z;
      }
      return Q;
    }
  : toString;
