import n from "./module-r9_9.js";
import o from "./module-mS_10.js";
import i from "./module-aq_9.js";
import a from "./module-F4_10.js";
import s from "./module-I_10.js";
if (n) {
  s(Array.prototype, "lastIndex", {
    configurable: true,
    get: function () {
      const t = a(i(this));
      if (t === 0) {
        return 0;
      }
      return t - 1;
    },
  });
  o("lastIndex");
}
