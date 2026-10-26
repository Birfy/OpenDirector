import n from "./module-YR_19.js";
import o from "./module-CP_19.js";
import i from "./module-sey_19.js";
import a from "./module-vB_21.js";
import s from "./module-i1_19.js";
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
