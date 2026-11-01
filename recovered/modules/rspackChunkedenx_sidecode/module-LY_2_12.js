import $ from "./module-vB_14.js";
import _tt from "./module-JY_12.js";
import te from "./module-Av_12.js";
const _tt_filterReject = _tt.filterReject;
const $_aTypedArray = $.aTypedArray;
$.exportTypedArrayMethod(
  "filterOut",
  function (J) {
    const Z = _tt_filterReject(
      $_aTypedArray(this),
      J,
      arguments.length > 1 ? arguments[1] : undefined,
    );
    return te(this, Z);
  },
  true,
);
