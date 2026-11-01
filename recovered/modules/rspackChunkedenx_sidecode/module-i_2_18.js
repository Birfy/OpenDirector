import n from "./module-YR_18.js";
import o from "./module-Y_19.js";
import i from "./module-e_18.js";
import a from "./module-x_2_18.js";
export default a
  ? function (r) {
      return typeof r === "symbol";
    }
  : function (r) {
      const t = n("Symbol");
      return o(t) && i(t.prototype, Object(r));
    };
