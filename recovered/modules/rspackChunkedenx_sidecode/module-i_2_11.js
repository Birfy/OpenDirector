import n from "./module-YR_11.js";
import o from "./module-Y_12.js";
import i from "./module-e_11.js";
import a from "./module-x_2_11.js";
export default a
  ? function (r) {
      return typeof r === "symbol";
    }
  : function (r) {
      const t = n("Symbol");
      return o(t) && i(t.prototype, Object(r));
    };
