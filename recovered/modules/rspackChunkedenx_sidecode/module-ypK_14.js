import n from "./module-r9_14.js";
import o from "./module-mS_15.js";
import i from "./module-aq_14.js";
import a from "./module-F4_15.js";
import s from "./module-I_15.js";
if (n) {
  s(Array.prototype, "lastItem", {
    configurable: true,
    get: function () {
      const t = i(this);
      const r = a(t);
      if (r === 0) {
        return undefined;
      }
      return t[r - 1];
    },
    set: function (t) {
      const r = i(this);
      const e = a(r);
      return (r[e === 0 ? 0 : e - 1] = t);
    },
  });
  o("lastItem");
}
