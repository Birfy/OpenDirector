import n from "./module-YR_14.js";
import o from "./module-Y_15.js";
import i from "./module-e_14.js";
import a from "./module-x_2_14.js";
export default a
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return o(r) && i(r.prototype, Object(t));
    };
