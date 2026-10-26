import n from "./module-YR_13.js";
import o from "./module-Y_14.js";
import i from "./module-e_13.js";
import a from "./module-x_2_13.js";
export default a
  ? function (r) {
      return typeof r === "symbol";
    }
  : function (r) {
      const t = n("Symbol");
      return o(t) && i(t.prototype, Object(r));
    };
