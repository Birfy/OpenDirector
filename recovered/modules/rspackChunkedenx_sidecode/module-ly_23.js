import n from "./module-r9_22.js";
import i from "./module-e0_22.js";
import o from "./module-Md_22.js";
import s from "./module-I_23.js";
import _a from "./module-b_22.js";
const _a_get = _a.get;
if (n && i) {
  s(RegExp.prototype, "dotAll", {
    configurable: true,
    get: function () {
      if (this !== RegExp.prototype) {
        if (o(this) === "RegExp") {
          return !!_a_get(this).dotAll;
        }
        throw TypeError("Incompatible receiver, RegExp required");
      }
    },
  });
}
