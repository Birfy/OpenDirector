import $ from "./module-r9_12.js";
import tt from "./module-mS_13.js";
import te from "./module-aq_12.js";
import tr from "./module-F4_13.js";
import tn from "./module-I_13.js";
if ($) {
  tn(Array.prototype, "lastItem", {
    configurable: true,
    get: function () {
      const J = te(this);
      const Z = tr(J);
      if (Z === 0) {
        return undefined;
      }
      return J[Z - 1];
    },
    set: function (J) {
      const Z = te(this);
      const Q = tr(Z);
      return (Z[Q === 0 ? 0 : Q - 1] = J);
    },
  });
  tt("lastItem");
}
