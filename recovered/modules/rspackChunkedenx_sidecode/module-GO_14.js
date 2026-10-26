import $ from "./module-vB_14.js";
import _tt from "./module-yk_12.js";
const _tt_findLastIndex = _tt.findLastIndex;
const $_aTypedArray = $.aTypedArray;
$.exportTypedArrayMethod("findLastIndex", function (J) {
  return _tt_findLastIndex(
    $_aTypedArray(this),
    J,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
