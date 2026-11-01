import n from "./module-r9_21.js";
import i from "./module-mS_22.js";
import o from "./module-aq_21.js";
import s from "./module-F4_22.js";
import a from "./module-I_22.js";
if (n) {
  a(Array.prototype, "lastIndex", {
    configurable: true,
    get: function () {
      const t = s(o(this));
      if (t === 0) {
        return 0;
      }
      return t - 1;
    },
  });
  i("lastIndex");
}
