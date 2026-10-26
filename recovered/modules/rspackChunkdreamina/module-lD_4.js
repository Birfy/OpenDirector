import n from "./module-ga_2.js";
import _o from "./module-BH_3.js";
const _o_findLastIndex = _o.findLastIndex;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("findLastIndex", function (e) {
  return _o_findLastIndex(
    n_aTypedArray(this),
    e,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
