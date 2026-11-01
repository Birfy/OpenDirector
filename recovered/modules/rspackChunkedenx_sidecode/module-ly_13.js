import $ from "./module-r9_12.js";
import tt from "./module-e0_12.js";
import te from "./module-Md_12.js";
import tr from "./module-I_13.js";
import _tn from "./module-b_12.js";
const _tn_get = _tn.get;
if ($ && tt) {
  tr(RegExp.prototype, "dotAll", {
    configurable: true,
    get: function () {
      if (this !== RegExp.prototype) {
        if (te(this) === "RegExp") {
          return !!_tn_get(this).dotAll;
        }
        throw TypeError("Incompatible receiver, RegExp required");
      }
    },
  });
}
