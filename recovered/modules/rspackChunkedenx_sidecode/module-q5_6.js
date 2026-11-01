import n from "./module-vB_8.js";
import _o from "./module-JY_6.js";
import a from "./module-Av_6.js";
const _o_filterReject = _o.filterReject;
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "filterReject",
  function (t) {
    const r = _o_filterReject(
      n_aTypedArray(this),
      t,
      arguments.length > 1 ? arguments[1] : undefined,
    );
    return a(this, r);
  },
  true,
);
