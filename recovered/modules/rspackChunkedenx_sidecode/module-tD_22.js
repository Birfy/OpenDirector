import n from "./module-YR_22.js";
import i from "./module-CP_22.js";
import o from "./module-sey_22.js";
import s from "./module-vB_24.js";
import a from "./module-i1_22.js";
const s_aTypedArrayConstructor = s.aTypedArrayConstructor;
s.exportTypedArrayStaticMethod(
  "fromAsync",
  function (t) {
    const r = this;
    const arguments_length = arguments.length;
    const s = arguments_length > 1 ? arguments[1] : undefined;
    const c = arguments_length > 2 ? arguments[2] : undefined;
    return new (n("Promise"))(function (e) {
      i(r);
      e(o(t, s, c));
    }).then((t) => a(s_aTypedArrayConstructor(r), t));
  },
  true,
);
