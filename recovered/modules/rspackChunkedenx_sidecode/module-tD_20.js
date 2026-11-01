import n from "./module-YR_20.js";
import o from "./module-CP_20.js";
import i from "./module-sey_20.js";
import a from "./module-vB_22.js";
import s from "./module-i1_20.js";
const a_aTypedArrayConstructor = a.aTypedArrayConstructor;
a.exportTypedArrayStaticMethod(
  "fromAsync",
  function (t) {
    const r = this;
    const arguments_length = arguments.length;
    const a = arguments_length > 1 ? arguments[1] : undefined;
    const u = arguments_length > 2 ? arguments[2] : undefined;
    return new (n("Promise"))(function (e) {
      o(r);
      e(i(t, a, u));
    }).then((t) => s(a_aTypedArrayConstructor(r), t));
  },
  true,
);
