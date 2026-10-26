import n from "./module-YR_15.js";
import o from "./module-Y_16.js";
import i from "./module-e_15.js";
import a from "./module-x_2_15.js";
export default a
  ? function (r) {
      return typeof r === "symbol";
    }
  : function (r) {
      const t = n("Symbol");
      return o(t) && i(t.prototype, Object(r));
    };
