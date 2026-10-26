import n from "./module-vB_15.js";
import o from "./module-O9_13.js";
import i from "./module-vo_13.js";
import a from "./module-i1_13.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const f = o(n.TypedArrayPrototype.sort);
n_exportTypedArrayMethod("toSorted", function (r) {
  if (r !== undefined) {
    i(r);
  }
  const t = n_aTypedArray(this);
  return f(a(n_getTypedArrayConstructor(t), t), r);
});
