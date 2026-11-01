import n from "./module-vB_18.js";
import o from "./module-by_2_16.js";
const n_aTypedArrayConstructor = n.aTypedArrayConstructor;
n.exportTypedArrayStaticMethod(
  "of",
  function () {
    for (
      var t = 0,
        r = arguments.length,
        e = new (n_aTypedArrayConstructor(this))(r);
      r > t;
    ) {
      e[t] = arguments[t++];
    }
    return e;
  },
  o,
);
