import n from "./module-ga_2.js";
import o from "./module-RR_2.js";
const n_aTypedArrayConstructor = n.aTypedArrayConstructor;
n.exportTypedArrayStaticMethod(
  "of",
  function () {
    for (
      var e = 0,
        t = arguments.length,
        r = new (n_aTypedArrayConstructor(this))(t);
      t > e;
    ) {
      r[e] = arguments[e++];
    }
    return r;
  },
  o,
);
