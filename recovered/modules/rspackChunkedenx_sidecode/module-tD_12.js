import $ from "./module-YR_12.js";
import tt from "./module-CP_12.js";
import te from "./module-sey_12.js";
import tr from "./module-vB_14.js";
import tn from "./module-i1_12.js";
const tr_aTypedArrayConstructor = tr.aTypedArrayConstructor;
tr.exportTypedArrayStaticMethod(
  "fromAsync",
  function (J) {
    const Z = this;
    const arguments_length = arguments.length;
    const tr = arguments_length > 1 ? arguments[1] : undefined;
    const to = arguments_length > 2 ? arguments[2] : undefined;
    return new ($("Promise"))(function (Q) {
      tt(Z);
      Q(te(J, tr, to));
    }).then((J) => tn(tr_aTypedArrayConstructor(Z), J));
  },
  true,
);
