import n from "./module-r9_22.js";
import i from "./module-mS_23.js";
import o from "./module-aq_22.js";
import s from "./module-F4_23.js";
import a from "./module-I_23.js";
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
