import n from "./module-YR_17.js";
import o from "./module-Y_18.js";
import i from "./module-e_17.js";
import a from "./module-x_2_17.js";
export default a
  ? function (r) {
      return typeof r === "symbol";
    }
  : function (r) {
      const t = n("Symbol");
      return o(t) && i(t.prototype, Object(r));
    };
