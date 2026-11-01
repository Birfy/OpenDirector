import $ from "./module-vB_14.js";
import tt from "./module-by_2_12.js";
const $_aTypedArrayConstructor = $.aTypedArrayConstructor;
$.exportTypedArrayStaticMethod(
  "of",
  function () {
    for (
      var J = 0,
        Z = arguments.length,
        Q = new ($_aTypedArrayConstructor(this))(Z);
      Z > J;
    ) {
      Q[J] = arguments[J++];
    }
    return Q;
  },
  tt,
);
