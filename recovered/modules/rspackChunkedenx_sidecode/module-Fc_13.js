import $ from "./module-vB_14.js";
import _tt from "./module-yk_12.js";
const _tt_findLast = _tt.findLast;
const $_aTypedArray = $.aTypedArray;
$.exportTypedArrayMethod("findLast", function (J) {
  return _tt_findLast(
    $_aTypedArray(this),
    J,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
