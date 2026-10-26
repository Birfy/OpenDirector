import n from "./module-r9_6.js";
import o from "./module-mS_7.js";
import a from "./module-aq_6.js";
import i from "./module-F4_7.js";
import s from "./module-I_7.js";
if (n) {
  s(Array.prototype, "lastIndex", {
    configurable: true,
    get: function () {
      const t = i(a(this));
      if (t === 0) {
        return 0;
      }
      return t - 1;
    },
  });
  o("lastIndex");
}
