import n from "./module-r9_8.js";
import i from "./module-mS_9.js";
import o from "./module-aq_8.js";
import s from "./module-F4_9.js";
import a from "./module-I_9.js";
if (n) {
  a(Array.prototype, "lastItem", {
    configurable: true,
    get: function () {
      const t = o(this);
      const r = s(t);
      if (r === 0) {
        return undefined;
      }
      return t[r - 1];
    },
    set: function (t) {
      const r = o(this);
      const e = s(r);
      return (r[e === 0 ? 0 : e - 1] = t);
    },
  });
  i("lastItem");
}
