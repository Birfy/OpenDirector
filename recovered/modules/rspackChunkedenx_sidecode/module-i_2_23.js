import n from "./module-YR_23.js";
import o from "./module-Y_24.js";
import i from "./module-e_23.js";
import a from "./module-x_2_23.js";
export default a
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return o(r) && i(r.prototype, Object(t));
    };
