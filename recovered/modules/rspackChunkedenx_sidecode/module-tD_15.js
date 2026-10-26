import n from "./module-YR_15.js";
import o from "./module-CP_15.js";
import i from "./module-sey_15.js";
import a from "./module-vB_17.js";
import s from "./module-i1_15.js";
const a_aTypedArrayConstructor = a.aTypedArrayConstructor;
a.exportTypedArrayStaticMethod(
  "fromAsync",
  function (r) {
    const t = this;
    const arguments_length = arguments.length;
    const a = arguments_length > 1 ? arguments[1] : undefined;
    const c = arguments_length > 2 ? arguments[2] : undefined;
    return new (n("Promise"))(function (e) {
      o(t);
      e(i(r, a, c));
    }).then((r) => s(a_aTypedArrayConstructor(t), r));
  },
  true,
);
