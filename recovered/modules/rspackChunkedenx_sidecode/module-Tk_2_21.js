import n from "./module-ui_21.js";
import i from "./module-vB_23.js";
import o from "./module-jOn_21.js";
import s from "./module-V6_22.js";
import a from "./module-Ke_21.js";
const i_aTypedArray = i.aTypedArray;
const i_getTypedArrayConstructor = i.getTypedArrayConstructor;
i.exportTypedArrayMethod(
  "with",
  {
    with: function (t, r) {
      const e = i_aTypedArray(this);
      const i = s(t);
      const f = o(e) ? a(r) : +r;
      return n(e, i_getTypedArrayConstructor(e), i, f);
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
