import n from "./module-ui_17.js";
import o from "./module-vB_19.js";
import i from "./module-jOn_17.js";
import a from "./module-V6_18.js";
import s from "./module-Ke_17.js";
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
