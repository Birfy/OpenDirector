import n from "./module-vB_13.js";
import _o from "./module-yk_11.js";
const _o_findLast = _o.findLast;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("findLast", function (r) {
  return _o_findLast(
    n_aTypedArray(this),
    r,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
