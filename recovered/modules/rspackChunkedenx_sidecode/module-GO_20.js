import n from "./module-vB_20.js";
import _o from "./module-yk_18.js";
const _o_findLastIndex = _o.findLastIndex;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("findLastIndex", function (r) {
  return _o_findLastIndex(
    n_aTypedArray(this),
    r,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
