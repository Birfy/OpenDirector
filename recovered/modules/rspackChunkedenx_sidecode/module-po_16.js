import n from "./module-O9_16.js";
import o from "./module-vB_18.js";
import i from "./module-i1_16.js";
import a from "./module-qV_17.js";
const o_aTypedArray = o.aTypedArray;
const o_getTypedArrayConstructor = o.getTypedArrayConstructor;
const o_exportTypedArrayMethod = o.exportTypedArrayMethod;
const f = n(a);
o_exportTypedArrayMethod(
  "uniqueBy",
  function (t) {
    o_aTypedArray(this);
    return i(o_getTypedArrayConstructor(this), f(this, t));
  },
  true,
);
