import $ from "rCO";
if (
  $ !== undefined &&
  $.version &&
  $.version.indexOf("v0.") !== 0 &&
  ($.version.indexOf("v1.") !== 0 || $.version.indexOf("v1.8.") === 0)
) {
  module.exports = $;
} else {
  module.exports = {
    nextTick: function (Z, Q, X, ee) {
      if (typeof Z !== "function") {
        throw TypeError('"callback" argument must be a function');
      }
      let et;
      let er;
      const arguments_length = arguments.length;
      switch (arguments_length) {
        case 0:
        case 1:
          return $.nextTick(Z);
        case 2:
          return $.nextTick(function () {
            Z.call(null, Q);
          });
        case 3:
          return $.nextTick(function () {
            Z.call(null, Q, X);
          });
        case 4:
          return $.nextTick(function () {
            Z.call(null, Q, X, ee);
          });
        default:
          et = Array(arguments_length - 1);
          for (er = 0; er < et.length;) {
            et[er++] = arguments[er];
          }
          return $.nextTick(function () {
            Z.apply(null, et);
          });
      }
    },
  };
}
