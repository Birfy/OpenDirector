import n from "./module-vB_8.js";
import o from "./module-O9_6.js";
import a from "./module-vo_6.js";
import i from "./module-i1_6.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const f = o(n.TypedArrayPrototype.sort);
n_exportTypedArrayMethod("toSorted", function (t) {
  if (t !== undefined) {
    a(t);
  }
  const r = n_aTypedArray(this);
  return f(i(n_getTypedArrayConstructor(r), r), t);
});
