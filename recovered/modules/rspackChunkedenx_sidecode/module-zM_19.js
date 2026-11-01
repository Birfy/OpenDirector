import n from "./module-vB_21.js";
import o from "./module-nyn_19.js";
import i from "./module-aN_2_19.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "groupBy",
  function (r) {
    const t = arguments.length > 1 ? arguments[1] : undefined;
    return o(n_aTypedArray(this), r, t, i);
  },
  true,
);
