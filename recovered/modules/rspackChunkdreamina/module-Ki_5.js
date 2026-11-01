import n from "o";
import i from "ga";
import a from "z1";
import o from "Vzu";
const i_aTypedArray = i.aTypedArray;
const i_getTypedArrayConstructor = i.getTypedArrayConstructor;
const i_exportTypedArrayMethod = i.exportTypedArrayMethod;
const u = n(o);
i_exportTypedArrayMethod(
  "uniqueBy",
  function (t) {
    i_aTypedArray(this);
    return a(i_getTypedArrayConstructor(this), u(this, t));
  },
  true,
);
