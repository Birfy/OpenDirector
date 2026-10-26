import n from "./module-ui_7.js";
import o from "./module-vB_9.js";
import i from "./module-jOn_7.js";
import a from "./module-V6_8.js";
import s from "./module-Ke_7.js";
const o_aTypedArray = o.aTypedArray;
const o_getTypedArrayConstructor = o.getTypedArrayConstructor;
o.exportTypedArrayMethod(
  "with",
  {
    with: function (r, t) {
      const e = o_aTypedArray(this);
      const o = a(r);
      const f = i(e) ? s(t) : +t;
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
