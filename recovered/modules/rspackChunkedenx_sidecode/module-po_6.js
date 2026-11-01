import n from "./module-O9_6.js";
import o from "./module-vB_8.js";
import a from "./module-i1_6.js";
import i from "./module-qV_7.js";
const o_aTypedArray = o.aTypedArray;
const o_getTypedArrayConstructor = o.getTypedArrayConstructor;
const o_exportTypedArrayMethod = o.exportTypedArrayMethod;
const f = n(i);
o_exportTypedArrayMethod(
  "uniqueBy",
  function (t) {
    o_aTypedArray(this);
    return a(o_getTypedArrayConstructor(this), f(this, t));
  },
  true,
);
