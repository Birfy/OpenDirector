import n from "./module-vB_13.js";
import o from "./module-ac_12.js";
import i from "./module-Ke_11.js";
import a from "./module-S9_11.js";
import s from "./module-M_2_11.js";
import u from "./module-O9_11.js";
import c from "./module-X_12.js";
const n_aTypedArray = n.aTypedArray;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const l = u("".slice);
n_exportTypedArrayMethod(
  "fill",
  function (r) {
    const arguments_length = arguments.length;
    n_aTypedArray(this);
    return s(
      o,
      this,
      l(a(this), 0, 3) === "Big" ? i(r) : +r,
      arguments_length > 1 ? arguments[1] : undefined,
      arguments_length > 2 ? arguments[2] : undefined,
    );
  },
  c(function () {
    let r = 0;
    new Int8Array(2).fill({
      valueOf: function () {
        return r++;
      },
    });
    return r !== 1;
  }),
);
