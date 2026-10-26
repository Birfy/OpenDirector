import n from "ga";
import { filterReject } from "GK";
import a from "iJ";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod(
  "filterReject",
  function (t) {
    const e = filterReject(
      n_aTypedArray(this),
      t,
      arguments.length > 1 ? arguments[1] : undefined,
    );
    return a(this, e);
  },
  true,
);
