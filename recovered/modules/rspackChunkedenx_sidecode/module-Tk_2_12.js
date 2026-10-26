import $ from "./module-ui_12.js";
import tt from "./module-vB_14.js";
import te from "./module-jOn_12.js";
import tr from "./module-V6_13.js";
import tn from "./module-Ke_12.js";
const tt_aTypedArray = tt.aTypedArray;
const tt_getTypedArrayConstructor = tt.getTypedArrayConstructor;
tt.exportTypedArrayMethod(
  "with",
  {
    with: function (J, Z) {
      const Q = tt_aTypedArray(this);
      const tt = tr(J);
      const ta = te(Q) ? tn(Z) : +Z;
      return $(Q, tt_getTypedArrayConstructor(Q), tt, ta);
    },
  }.with,
  !(() => {
    try {
      new Int8Array(1).with(2, {
        valueOf: function () {
          throw 8;
        },
      });
    } catch (error) {
      return error === 8;
    }
  })(),
);
