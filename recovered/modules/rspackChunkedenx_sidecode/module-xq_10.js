import n from "./module-vB_12.js";
import o from "./module-O9_10.js";
import i from "./module-vo_10.js";
import a from "./module-i1_10.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const f = o(n.TypedArrayPrototype.sort);
n_exportTypedArrayMethod("toSorted", function (t) {
  if (t !== undefined) {
    i(t);
  }
  const r = n_aTypedArray(this);
  return f(a(n_getTypedArrayConstructor(r), r), t);
});
