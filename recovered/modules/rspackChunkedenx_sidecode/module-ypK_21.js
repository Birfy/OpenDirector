import n from "./module-r9_21.js";
import i from "./module-mS_22.js";
import o from "./module-aq_21.js";
import s from "./module-F4_22.js";
import a from "./module-I_22.js";
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
