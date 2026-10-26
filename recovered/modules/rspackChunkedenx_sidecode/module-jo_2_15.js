import n from "./module-r9_15.js";
import o from "./module-mS_16.js";
import i from "./module-aq_15.js";
import a from "./module-F4_16.js";
import s from "./module-I_16.js";
if (n) {
  s(Array.prototype, "lastIndex", {
    configurable: true,
    get: function () {
      const r = a(i(this));
      if (r === 0) {
        return 0;
      }
      return r - 1;
    },
  });
  o("lastIndex");
}
