import $ from "./module-r9_12.js";
import tt from "./module-mS_13.js";
import te from "./module-aq_12.js";
import tr from "./module-F4_13.js";
import tn from "./module-I_13.js";
if ($) {
  tn(Array.prototype, "lastIndex", {
    configurable: true,
    get: function () {
      const J = tr(te(this));
      if (J === 0) {
        return 0;
      }
      return J - 1;
    },
  });
  tt("lastIndex");
}
