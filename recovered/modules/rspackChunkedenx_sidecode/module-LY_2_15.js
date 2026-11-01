import n from "./module-vB_17.js";
import _o from "./module-JY_15.js";
import i from "./module-Av_15.js";
const _o_filterReject = _o.filterReject;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "filterOut",
  function (r) {
    const t = _o_filterReject(
      n_aTypedArray(this),
      r,
      arguments.length > 1 ? arguments[1] : undefined,
    );
    return i(this, t);
  },
  true,
);
