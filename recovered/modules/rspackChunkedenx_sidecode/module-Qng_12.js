import $ from "./module-vB_14.js";
import tt from "./module-ac_13.js";
import te from "./module-Ke_12.js";
import tr from "./module-S9_12.js";
import tn from "./module-M_2_12.js";
import ti from "./module-O9_12.js";
import to from "./module-X_13.js";
const $_aTypedArray = $.aTypedArray;
const $_exportTypedArrayMethod = $.exportTypedArrayMethod;
const tf = ti("".slice);
$_exportTypedArrayMethod(
  "fill",
  function (J) {
    const arguments_length = arguments.length;
    $_aTypedArray(this);
    return tn(
      tt,
      this,
      tf(tr(this), 0, 3) === "Big" ? te(J) : +J,
      arguments_length > 1 ? arguments[1] : undefined,
      arguments_length > 2 ? arguments[2] : undefined,
    );
  },
  to(function () {
    let J = 0;
    new Int8Array(2).fill({
      valueOf: function () {
        return J++;
      },
    });
    return J !== 1;
  }),
);
