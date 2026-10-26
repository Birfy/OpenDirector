import n from "./module-YR_6.js";
import o from "./module-CP_6.js";
import a from "./module-sey_6.js";
import i from "./module-vB_8.js";
import s from "./module-i1_6.js";
const i_aTypedArrayConstructor = i.aTypedArrayConstructor;
i.exportTypedArrayStaticMethod(
  "fromAsync",
  function (t) {
    const r = this;
    const arguments_length = arguments.length;
    const i = arguments_length > 1 ? arguments[1] : undefined;
    const u = arguments_length > 2 ? arguments[2] : undefined;
    return new (n("Promise"))(function (e) {
      o(r);
      e(a(t, i, u));
    }).then((t) => s(i_aTypedArrayConstructor(r), t));
  },
  true,
);
