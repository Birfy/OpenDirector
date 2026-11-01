import n from "./module-vB_22.js";
import _o from "./module-yk_20.js";
const _o_findLast = _o.findLast;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("findLast", function (t) {
  return _o_findLast(
    n_aTypedArray(this),
    t,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
