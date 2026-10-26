import n from "./module-YR_10.js";
import o from "./module-Y_11.js";
import i from "./module-e_10.js";
import a from "./module-x_2_10.js";
export default a
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return o(r) && i(r.prototype, Object(t));
    };
