import n from "./module-r9_2.js";
import i from "./module-mS_3.js";
import o from "./module-aq_2.js";
import s from "./module-F4_3.js";
import a from "./module-I_3.js";
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
