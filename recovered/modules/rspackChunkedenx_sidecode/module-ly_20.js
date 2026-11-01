import n from "./module-r9_19.js";
import o from "./module-e0_19.js";
import i from "./module-Md_19.js";
import a from "./module-I_20.js";
import _s from "./module-b_19.js";
const _s_get = _s.get;
if (n && o) {
  a(RegExp.prototype, "dotAll", {
    configurable: true,
    get: function () {
      if (this !== RegExp.prototype) {
        if (i(this) === "RegExp") {
          return !!_s_get(this).dotAll;
        }
        throw TypeError("Incompatible receiver, RegExp required");
      }
    },
  });
}
