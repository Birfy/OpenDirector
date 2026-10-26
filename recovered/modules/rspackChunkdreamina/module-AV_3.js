import n from "./module-F.js";
import o from "./module-w9.js";
import i from "./module-C.js";
import a from "./module-Tg_2.js";
import _s from "./module-G_2.js";
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
