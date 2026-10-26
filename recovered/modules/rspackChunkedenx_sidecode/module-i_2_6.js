import n from "./module-YR_6.js";
import o from "./module-Y_7.js";
import a from "./module-e_6.js";
import i from "./module-x_2_6.js";
export default i
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return o(r) && a(r.prototype, Object(t));
    };
