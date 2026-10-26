import $ from "./module-H8.js";
if (
  $ !== undefined &&
  $.version &&
  $.version.indexOf("v0.") !== 0 &&
  ($.version.indexOf("v1.") !== 0 || $.version.indexOf("v1.8.") === 0)
) {
  module.exports = $;
} else {
  module.exports = {
    nextTick: function (J, Z, Q, tt) {
      if (typeof J !== "function") {
        throw TypeError('"callback" argument must be a function');
      }
      let te;
      let tr;
      const arguments_length = arguments.length;
      switch (arguments_length) {
        case 0:
        case 1:
          return $.nextTick(J);
        case 2:
          return $.nextTick(function () {
            J.call(null, Z);
          });
        case 3:
          return $.nextTick(function () {
            J.call(null, Z, Q);
          });
        case 4:
          return $.nextTick(function () {
            J.call(null, Z, Q, tt);
          });
        default:
          te = Array(arguments_length - 1);
          for (tr = 0; tr < te.length;) {
            te[tr++] = arguments[tr];
          }
          return $.nextTick(function () {
            J.apply(null, te);
          });
      }
    },
  };
}
