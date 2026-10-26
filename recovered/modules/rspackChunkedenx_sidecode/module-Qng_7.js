import n from "./module-vB_9.js";
import o from "./module-ac_8.js";
import i from "./module-Ke_7.js";
import a from "./module-S9_7.js";
import s from "./module-M_2_7.js";
import u from "./module-O9_7.js";
import c from "./module-X_8.js";
const n_aTypedArray = n.aTypedArray;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const h = u("".slice);
n_exportTypedArrayMethod(
  "fill",
  function (r) {
    const arguments_length = arguments.length;
    n_aTypedArray(this);
    return s(
      o,
      this,
      h(a(this), 0, 3) === "Big" ? i(r) : +r,
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
