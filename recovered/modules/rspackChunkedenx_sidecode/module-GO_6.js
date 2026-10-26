import n from "./module-vB_6.js";
import _i from "./module-yk_4.js";
const _i_findLastIndex = _i.findLastIndex;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("findLastIndex", function (t) {
  return _i_findLastIndex(
    n_aTypedArray(this),
    t,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
