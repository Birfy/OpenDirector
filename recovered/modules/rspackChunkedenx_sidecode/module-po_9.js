import n from "./module-O9_9.js";
import o from "./module-vB_11.js";
import i from "./module-i1_9.js";
import a from "./module-qV_10.js";
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
