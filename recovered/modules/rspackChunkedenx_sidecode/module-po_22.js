import n from "./module-O9_22.js";
import i from "./module-vB_24.js";
import o from "./module-i1_22.js";
import s from "./module-qV_23.js";
const i_aTypedArray = i.aTypedArray;
const i_getTypedArrayConstructor = i.getTypedArrayConstructor;
const i_exportTypedArrayMethod = i.exportTypedArrayMethod;
const f = n(s);
i_exportTypedArrayMethod(
  "uniqueBy",
  function (t) {
    i_aTypedArray(this);
    return o(i_getTypedArrayConstructor(this), f(this, t));
  },
  true,
);
