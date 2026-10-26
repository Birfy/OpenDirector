import n from "./module-vB_11.js";
import o from "./module-O9_9.js";
import i from "./module-vo_9.js";
import a from "./module-i1_9.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const f = o(n.TypedArrayPrototype.sort);
n_exportTypedArrayMethod("toSorted", function (t) {
  if (t !== undefined) {
    i(t);
  }
  const e = n_aTypedArray(this);
  return f(a(n_getTypedArrayConstructor(e), e), t);
});
