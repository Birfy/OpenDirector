import n from "./module-vB_16.js";
import o from "./module-nyn_14.js";
import i from "./module-aN_2_14.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "groupBy",
  function (t) {
    const r = arguments.length > 1 ? arguments[1] : undefined;
    return o(n_aTypedArray(this), t, r, i);
  },
  true,
);
