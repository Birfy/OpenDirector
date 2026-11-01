import n from "./module-YR_9.js";
import o from "./module-CP_9.js";
import i from "./module-sey_9.js";
import a from "./module-vB_11.js";
import s from "./module-i1_9.js";
const a_aTypedArrayConstructor = a.aTypedArrayConstructor;
a.exportTypedArrayStaticMethod(
  "fromAsync",
  function (t) {
    const e = this;
    const arguments_length = arguments.length;
    const a = arguments_length > 1 ? arguments[1] : undefined;
    const c = arguments_length > 2 ? arguments[2] : undefined;
    return new (n("Promise"))(function (r) {
      o(e);
      r(i(t, a, c));
    }).then((t) => s(a_aTypedArrayConstructor(e), t));
  },
  true,
);
