import n from "./module-ga_2.js";
import o from "./module-o.js";
import i from "./module-B.js";
import a from "./module-z1_2.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const f = o(n.TypedArrayPrototype.sort);
n_exportTypedArrayMethod("toSorted", function (e) {
  if (e !== undefined) {
    i(e);
  }
  const t = n_aTypedArray(this);
  return f(a(n_getTypedArrayConstructor(t), t), e);
});
