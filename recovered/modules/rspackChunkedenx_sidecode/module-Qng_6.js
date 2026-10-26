import n from "./module-vB_8.js";
import o from "./module-ac_7.js";
import a from "./module-Ke_6.js";
import i from "./module-S9_6.js";
import s from "./module-M_2_6.js";
import c from "./module-O9_6.js";
import u from "./module-X_7.js";
const n_aTypedArray = n.aTypedArray;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const h = c("".slice);
n_exportTypedArrayMethod(
  "fill",
  function (t) {
    const arguments_length = arguments.length;
    n_aTypedArray(this);
    return s(
      o,
      this,
      h(i(this), 0, 3) === "Big" ? a(t) : +t,
      arguments_length > 1 ? arguments[1] : undefined,
      arguments_length > 2 ? arguments[2] : undefined,
    );
  },
  u(function () {
    let t = 0;
    new Int8Array(2).fill({
      valueOf: function () {
        return t++;
      },
    });
    return t !== 1;
  }),
);
