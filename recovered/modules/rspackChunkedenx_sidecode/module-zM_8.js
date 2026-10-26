import n from "./module-vB_10.js";
import i from "./module-nyn_8.js";
import o from "./module-aN_2_8.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "groupBy",
  function (t) {
    const r = arguments.length > 1 ? arguments[1] : undefined;
    return i(n_aTypedArray(this), t, r, o);
  },
  true,
);
