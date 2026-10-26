import n from "ga";
import i from "aa";
import a from "zf";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "groupBy",
  function (t) {
    const e = arguments.length > 1 ? arguments[1] : undefined;
    return i(n_aTypedArray(this), t, e, a);
  },
  true,
);
