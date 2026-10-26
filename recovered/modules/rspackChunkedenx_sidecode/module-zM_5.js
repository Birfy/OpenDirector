import n from "./module-vB_7.js";
import i from "./module-nyn_5.js";
import o from "./module-aN_2_5.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "groupBy",
  function (t) {
    const r = arguments.length > 1 ? arguments[1] : undefined;
    return i(n_aTypedArray(this), t, r, o);
  },
  true,
);
