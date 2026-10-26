import n from "./module-YR_9.js";
import o from "./module-Y_10.js";
import i from "./module-e_9.js";
import a from "./module-x_2_9.js";
export default a
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const e = n("Symbol");
      return o(e) && i(e.prototype, Object(t));
    };
