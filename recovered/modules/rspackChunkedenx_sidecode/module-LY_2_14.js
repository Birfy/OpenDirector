import n from "./module-vB_16.js";
import _o from "./module-JY_14.js";
import i from "./module-Av_14.js";
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
