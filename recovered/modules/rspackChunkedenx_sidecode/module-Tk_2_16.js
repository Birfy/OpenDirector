import n from "./module-ui_16.js";
import o from "./module-vB_18.js";
import i from "./module-jOn_16.js";
import a from "./module-V6_17.js";
import s from "./module-Ke_16.js";
const o_aTypedArray = o.aTypedArray;
const o_getTypedArrayConstructor = o.getTypedArrayConstructor;
o.exportTypedArrayMethod(
  "with",
  {
    with: function (t, r) {
      const e = o_aTypedArray(this);
      const o = a(t);
      const f = i(e) ? s(r) : +r;
      return n(e, o_getTypedArrayConstructor(e), o, f);
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
