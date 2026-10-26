import n from "./module-r9_22.js";
import i from "./module-mS_23.js";
import o from "./module-aq_22.js";
import s from "./module-F4_23.js";
import a from "./module-I_23.js";
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
