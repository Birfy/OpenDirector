import n from "./module-r9_4.js";
import i from "./module-mS_5.js";
import o from "./module-aq_4.js";
import s from "./module-F4_5.js";
import a from "./module-I_5.js";
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
