import n from "./module-vB_20.js";
import o from "./module-by_2_18.js";
const n_aTypedArrayConstructor = n.aTypedArrayConstructor;
n.exportTypedArrayStaticMethod(
  "of",
  function () {
    for (
      var r = 0,
        t = arguments.length,
        e = new (n_aTypedArrayConstructor(this))(t);
      t > r;
    ) {
      e[r] = arguments[r++];
    }
    return e;
  },
  o,
);
