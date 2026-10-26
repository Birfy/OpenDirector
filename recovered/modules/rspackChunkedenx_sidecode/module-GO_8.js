import n from "./module-vB_8.js";
import _o from "./module-yk_6.js";
const _o_findLastIndex = _o.findLastIndex;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("findLastIndex", function (t) {
  return _o_findLastIndex(
    n_aTypedArray(this),
    t,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
