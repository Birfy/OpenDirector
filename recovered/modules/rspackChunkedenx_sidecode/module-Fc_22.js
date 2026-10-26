import n from "./module-vB_23.js";
import _i from "./module-yk_21.js";
const _i_findLast = _i.findLast;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("findLast", function (t) {
  return _i_findLast(
    n_aTypedArray(this),
    t,
    arguments.length > 1 ? arguments[1] : undefined,
  );
});
