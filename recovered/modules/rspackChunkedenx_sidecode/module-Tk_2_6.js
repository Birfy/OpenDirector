import n from "./module-ui_6.js";
import o from "./module-vB_8.js";
import a from "./module-jOn_6.js";
import i from "./module-V6_7.js";
import s from "./module-Ke_6.js";
const o_aTypedArray = o.aTypedArray;
const o_getTypedArrayConstructor = o.getTypedArrayConstructor;
o.exportTypedArrayMethod(
  "with",
  {
    with: function (t, r) {
      const e = o_aTypedArray(this);
      const o = i(t);
      const f = a(e) ? s(r) : +r;
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
