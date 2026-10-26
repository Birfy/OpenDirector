import n from "./module-r9_3.js";
import i from "./module-e0_3.js";
import o from "./module-Md_3.js";
import s from "./module-I_4.js";
import _a from "./module-b_3.js";
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
