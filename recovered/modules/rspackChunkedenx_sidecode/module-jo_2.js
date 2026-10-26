import n from "./module-r9.js";
import o from "./module-mS.js";
import i from "./module-aq.js";
import a from "./module-F4.js";
import s from "./module-I.js";
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
