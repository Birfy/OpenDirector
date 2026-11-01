import n from "./module-r9_7.js";
import o from "./module-mS_8.js";
import i from "./module-aq_7.js";
import a from "./module-F4_8.js";
import s from "./module-I_8.js";
if (n) {
  s(Array.prototype, "lastItem", {
    configurable: true,
    get: function () {
      const r = i(this);
      const t = a(r);
      if (t === 0) {
        return undefined;
      }
      return r[t - 1];
    },
    set: function (r) {
      const t = i(this);
      const e = a(t);
      return (t[e === 0 ? 0 : e - 1] = r);
    },
  });
  o("lastItem");
}
