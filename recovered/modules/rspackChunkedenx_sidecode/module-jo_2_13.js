import n from "./module-r9_13.js";
import o from "./module-mS_14.js";
import i from "./module-aq_13.js";
import a from "./module-F4_14.js";
import s from "./module-I_14.js";
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
