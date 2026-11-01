import n from "./module-vB.js";
import _o from "./module-JY.js";
import i from "./module-Av.js";
const _o_filterReject = _o.filterReject;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "filterOut",
  function (t) {
    const r = _o_filterReject(
      n_aTypedArray(this),
      t,
      arguments.length > 1 ? arguments[1] : undefined,
    );
    return i(this, r);
  },
  true,
);
