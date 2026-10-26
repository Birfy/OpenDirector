import n from "./module-r9_5.js";
import i from "./module-mS_6.js";
import o from "./module-aq_5.js";
import s from "./module-F4_6.js";
import a from "./module-I_6.js";
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
