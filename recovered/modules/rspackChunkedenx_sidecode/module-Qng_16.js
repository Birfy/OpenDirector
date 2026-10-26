import n from "./module-vB_18.js";
import o from "./module-ac_17.js";
import i from "./module-Ke_16.js";
import a from "./module-S9_16.js";
import s from "./module-M_2_16.js";
import u from "./module-O9_16.js";
import c from "./module-X_17.js";
const n_aTypedArray = n.aTypedArray;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const h = u("".slice);
n_exportTypedArrayMethod(
  "fill",
  function (t) {
    const arguments_length = arguments.length;
    n_aTypedArray(this);
    return s(
      o,
      this,
      h(a(this), 0, 3) === "Big" ? i(t) : +t,
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
