import n from "Y";
import i from "Z";
import a from "NJ";
import o from "ga";
import s from "z1";
const o_aTypedArrayConstructor = o.aTypedArrayConstructor;
o.exportTypedArrayStaticMethod(
  "fromAsync",
  function (t) {
    const e = this;
    const arguments_length = arguments.length;
    const o = arguments_length > 1 ? arguments[1] : undefined;
    const c = arguments_length > 2 ? arguments[2] : undefined;
    return new (n("Promise"))(function (r) {
      i(e);
      r(a(t, o, c));
    }).then((t) => s(o_aTypedArrayConstructor(e), t));
  },
  true,
);
