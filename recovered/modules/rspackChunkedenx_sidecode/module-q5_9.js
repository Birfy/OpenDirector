import n from "./module-vB_11.js";
import _o from "./module-JY_9.js";
import i from "./module-Av_9.js";
const _o_filterReject = _o.filterReject;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "filterReject",
  function (t) {
    const e = _o_filterReject(
      n_aTypedArray(this),
      t,
      arguments.length > 1 ? arguments[1] : undefined,
    );
    return i(this, e);
  },
  true,
);
