import n from "./module-YR_20.js";
import o from "./module-Y_21.js";
import i from "./module-e_20.js";
import a from "./module-x_2_20.js";
export default a
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return o(r) && i(r.prototype, Object(t));
    };
