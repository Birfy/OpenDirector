import n from "./module-YR_19.js";
import o from "./module-Y_20.js";
import i from "./module-e_19.js";
import a from "./module-x_2_19.js";
export default a
  ? function (r) {
      return typeof r === "symbol";
    }
  : function (r) {
      const t = n("Symbol");
      return o(t) && i(t.prototype, Object(r));
    };
