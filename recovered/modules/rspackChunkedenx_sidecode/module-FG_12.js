import $ from "./module-YR_12.js";
import tt from "./module-I_13.js";
import te from "./module-lN_12.js";
import tr from "./module-r9_12.js";
const tn = te("species");
export default function (J) {
  const Z = $(J);
  if (tr && Z && !Z[tn]) {
    tt(Z, tn, {
      configurable: true,
      get: function () {
        return this;
      },
    });
  }
}
