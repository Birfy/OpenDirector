import n from "./module-r9_21.js";
import i from "./module-e0_21.js";
import o from "./module-Md_21.js";
import s from "./module-I_22.js";
import _a from "./module-b_21.js";
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
