import n from "./module-r9_6.js";
import o from "./module-mS_7.js";
import a from "./module-aq_6.js";
import i from "./module-F4_7.js";
import s from "./module-I_7.js";
if (n) {
  s(Array.prototype, "lastItem", {
    configurable: true,
    get: function () {
      const t = a(this);
      const r = i(t);
      if (r === 0) {
        return undefined;
      }
      return t[r - 1];
    },
    set: function (t) {
      const r = a(this);
      const e = i(r);
      return (r[e === 0 ? 0 : e - 1] = t);
    },
  });
  o("lastItem");
}
