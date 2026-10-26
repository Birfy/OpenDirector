import n from "./module-vB_11.js";
import o from "./module-nyn_9.js";
import i from "./module-aN_2_9.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "groupBy",
  function (t) {
    const e = arguments.length > 1 ? arguments[1] : undefined;
    return o(n_aTypedArray(this), t, e, i);
  },
  true,
);
