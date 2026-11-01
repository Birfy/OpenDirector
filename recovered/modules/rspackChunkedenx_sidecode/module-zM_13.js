import n from "./module-vB_15.js";
import o from "./module-nyn_13.js";
import i from "./module-aN_2_13.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "groupBy",
  function (r) {
    const t = arguments.length > 1 ? arguments[1] : undefined;
    return o(n_aTypedArray(this), r, t, i);
  },
  true,
);
