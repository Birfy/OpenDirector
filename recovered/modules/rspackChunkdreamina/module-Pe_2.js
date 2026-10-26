import n from "./module-ga_2.js";
import _o from "./module-BH_3.js";
const _o_findLast = _o.findLast;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("findLast", function (e) {
  return _o_findLast(
    n_aTypedArray(this),
    e,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
