import n from "./module-r9_5.js";
import i from "./module-e0_5.js";
import o from "./module-Md_5.js";
import s from "./module-I_6.js";
import _a from "./module-b_5.js";
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
