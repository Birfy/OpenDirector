import n from "./module-vB_10.js";
import _i from "./module-JY_8.js";
import o from "./module-Av_8.js";
const _i_filterReject = _i.filterReject;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "filterReject",
  function (t) {
    const r = _i_filterReject(
      n_aTypedArray(this),
      t,
      arguments.length > 1 ? arguments[1] : undefined,
    );
    return o(this, r);
  },
  true,
);
