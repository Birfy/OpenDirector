import n from "./module-vB_11.js";
import o from "./module-by_2_9.js";
const n_aTypedArrayConstructor = n.aTypedArrayConstructor;
n.exportTypedArrayStaticMethod(
  "of",
  function () {
    for (
      var t = 0,
        e = arguments.length,
        r = new (n_aTypedArrayConstructor(this))(e);
      e > t;
    ) {
      r[t] = arguments[t++];
    }
    return r;
  },
  o,
);
