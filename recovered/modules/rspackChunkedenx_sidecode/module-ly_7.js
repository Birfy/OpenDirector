import n from "./module-r9_6.js";
import o from "./module-e0_6.js";
import a from "./module-Md_6.js";
import i from "./module-I_7.js";
import _s from "./module-b_6.js";
const _s_get = _s.get;
if (n && o) {
  i(RegExp.prototype, "dotAll", {
    configurable: true,
    get: function () {
      if (this !== RegExp.prototype) {
        if (a(this) === "RegExp") {
          return !!_s_get(this).dotAll;
        }
        throw TypeError("Incompatible receiver, RegExp required");
      }
    },
  });
}
