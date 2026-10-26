import n from "./module-r9.js";
import o from "./module-mS.js";
import i from "./module-aq.js";
import a from "./module-F4.js";
import s from "./module-I.js";
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
