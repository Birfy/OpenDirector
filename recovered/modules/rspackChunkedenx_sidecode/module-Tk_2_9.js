import n from "./module-ui_9.js";
import o from "./module-vB_11.js";
import i from "./module-jOn_9.js";
import a from "./module-V6_10.js";
import s from "./module-Ke_9.js";
const o_aTypedArray = o.aTypedArray;
const o_getTypedArrayConstructor = o.getTypedArrayConstructor;
o.exportTypedArrayMethod(
  "with",
  {
    with: function (t, e) {
      const r = o_aTypedArray(this);
      const o = a(t);
      const f = i(r) ? s(e) : +e;
      return n(r, o_getTypedArrayConstructor(r), o, f);
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
