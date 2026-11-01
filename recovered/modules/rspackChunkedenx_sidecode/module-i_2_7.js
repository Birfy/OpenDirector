import n from "./module-YR_7.js";
import o from "./module-Y_8.js";
import i from "./module-e_7.js";
import a from "./module-x_2_7.js";
export default a
  ? function (r) {
      return typeof r === "symbol";
    }
  : function (r) {
      const t = n("Symbol");
      return o(t) && i(t.prototype, Object(r));
    };
