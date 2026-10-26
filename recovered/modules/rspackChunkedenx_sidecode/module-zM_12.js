import $ from "./module-vB_14.js";
import tt from "./module-nyn_12.js";
import te from "./module-aN_2_12.js";
const $_aTypedArray = $.aTypedArray;
$.exportTypedArrayMethod(
  "groupBy",
  function (J) {
    const Z = arguments.length > 1 ? arguments[1] : undefined;
    return tt($_aTypedArray(this), J, Z, te);
  },
  true,
);
