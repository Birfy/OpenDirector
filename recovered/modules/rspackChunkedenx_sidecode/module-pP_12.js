import $ from "./module-vB_14.js";
import tt from "./module-F4_13.js";
import te from "./module-V6_13.js";
const $_aTypedArray = $.aTypedArray;
$.exportTypedArrayMethod("at", function (J) {
  const Z = $_aTypedArray(this);
  const Q = tt(Z);
  const $ = te(J);
  const tn = $ >= 0 ? $ : Q + $;
  if (tn < 0 || tn >= Q) {
    return undefined;
  }
  return Z[tn];
});
