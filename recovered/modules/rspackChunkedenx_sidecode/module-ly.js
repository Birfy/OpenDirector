import n from "./module-r9.js";
import o from "./module-e0.js";
import i from "./module-Md.js";
import a from "./module-I.js";
import _s from "./module-b.js";
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
