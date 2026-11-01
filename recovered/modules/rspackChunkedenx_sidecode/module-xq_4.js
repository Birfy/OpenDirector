import n from "./module-vB_6.js";
import i from "./module-O9_4.js";
import o from "./module-vo_4.js";
import s from "./module-i1_4.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const f = i(n.TypedArrayPrototype.sort);
n_exportTypedArrayMethod("toSorted", function (t) {
  if (t !== undefined) {
    o(t);
  }
  const r = n_aTypedArray(this);
  return f(s(n_getTypedArrayConstructor(r), r), t);
});
