import n from "./module-vB_8.js";
import o from "./module-nyn_6.js";
import a from "./module-aN_2_6.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "groupBy",
  function (t) {
    const r = arguments.length > 1 ? arguments[1] : undefined;
    return o(n_aTypedArray(this), t, r, a);
  },
  true,
);
