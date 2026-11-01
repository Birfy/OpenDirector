import n from "./module-O9_13.js";
import o from "./module-vB_15.js";
import i from "./module-i1_13.js";
import a from "./module-qV_14.js";
const o_aTypedArray = o.aTypedArray;
const o_getTypedArrayConstructor = o.getTypedArrayConstructor;
const o_exportTypedArrayMethod = o.exportTypedArrayMethod;
const f = n(a);
o_exportTypedArrayMethod(
  "uniqueBy",
  function (r) {
    o_aTypedArray(this);
    return i(o_getTypedArrayConstructor(this), f(this, r));
  },
  true,
);
