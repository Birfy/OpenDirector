if (typeof Object.create === "function") {
  module.exports = function (J, Z) {
    if (Z) {
      J.super_ = Z;
      J.prototype = Object.create(Z.prototype, {
        constructor: {
          value: J,
          enumerable: false,
          writable: true,
          configurable: true,
        },
      });
    }
  };
} else {
  module.exports = function (J, Z) {
    if (Z) {
      J.super_ = Z;
      const Q = function () {};
      Q.prototype = Z.prototype;
      J.prototype = new Q();
      J.prototype.constructor = J;
    }
  };
}
