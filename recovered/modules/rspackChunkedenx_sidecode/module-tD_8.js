import n from "./module-YR_8.js";
import i from "./module-CP_8.js";
import o from "./module-sey_8.js";
import s from "./module-vB_10.js";
import a from "./module-i1_8.js";
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
