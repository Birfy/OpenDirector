import n from "./module-ga_2.js";
import o from "./module-WE_2.js";
import i from "./module-wm.js";
import a from "./module-xE_3.js";
import s from "./module-p3.js";
import u from "./module-o.js";
import c from "./module-VV_4.js";
const n_aTypedArray = n.aTypedArray;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
const p = u("".slice);
n_exportTypedArrayMethod(
  "fill",
  function (e) {
    const arguments_length = arguments.length;
    n_aTypedArray(this);
    return s(
      o,
      this,
      p(a(this), 0, 3) === "Big" ? i(e) : +e,
      arguments_length > 1 ? arguments[1] : undefined,
      arguments_length > 2 ? arguments[2] : undefined,
    );
  },
  c(function () {
    let e = 0;
    new Int8Array(2).fill({
      valueOf: function () {
        return e++;
      },
    });
    return e !== 1;
  }),
);
