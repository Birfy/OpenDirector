import n from "./module-vB_6.js";
import i from "./module-ac_5.js";
import o from "./module-Ke_4.js";
import s from "./module-S9_4.js";
import a from "./module-M_2_4.js";
import u from "./module-O9_4.js";
import c from "./module-X_5.js";
const n_aTypedArray = n.aTypedArray;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const l = u("".slice);
n_exportTypedArrayMethod(
  "fill",
  function (t) {
    const arguments_length = arguments.length;
    n_aTypedArray(this);
    return a(
      i,
      this,
      l(s(this), 0, 3) === "Big" ? o(t) : +t,
      arguments_length > 1 ? arguments[1] : undefined,
      arguments_length > 2 ? arguments[2] : undefined,
    );
  },
  c(function () {
    let t = 0;
    new Int8Array(2).fill({
      valueOf: function () {
        return t++;
      },
    });
    return t !== 1;
  }),
);
