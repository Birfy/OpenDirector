import n from "./module-r9_9.js";
import o from "./module-mS_10.js";
import i from "./module-aq_9.js";
import a from "./module-F4_10.js";
import s from "./module-I_10.js";
if (n) {
  s(Array.prototype, "lastItem", {
    configurable: true,
    get: function () {
      const t = i(this);
      const e = a(t);
      if (e === 0) {
        return undefined;
      }
      return t[e - 1];
    },
    set: function (t) {
      const e = i(this);
      const r = a(e);
      return (e[r === 0 ? 0 : r - 1] = t);
    },
  });
  o("lastItem");
}
