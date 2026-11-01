import n from "./module-wG.js";
import o from "./module-vB.js";
const o_aTypedArray = o.aTypedArray;
const o_exportTypedArrayMethod = o.exportTypedArrayMethod;
const o_getTypedArrayConstructor = o.getTypedArrayConstructor;
o_exportTypedArrayMethod("toReversed", function () {
  return n(o_aTypedArray(this), o_getTypedArrayConstructor(this));
});
