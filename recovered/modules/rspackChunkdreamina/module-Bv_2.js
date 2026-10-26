import n from "./module-uL_2.js";
import o from "./module-ga_2.js";
import i from "./module-Gn_3.js";
import a from "./module-Ok_2.js";
import s from "./module-wm.js";
const o_aTypedArray = o.aTypedArray;
const o_getTypedArrayConstructor = o.getTypedArrayConstructor;
o.exportTypedArrayMethod(
  "with",
  {
    with: function (e, t) {
      const r = o_aTypedArray(this);
      const o = a(e);
      const f = i(r) ? s(t) : +t;
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
