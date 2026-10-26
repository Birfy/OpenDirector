import n from "./module-vB_21.js";
import _o from "./module-JY_19.js";
import i from "./module-Av_19.js";
const _o_filterReject = _o.filterReject;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "filterReject",
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
