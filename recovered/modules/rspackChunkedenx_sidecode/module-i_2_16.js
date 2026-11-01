import n from "./module-YR_16.js";
import o from "./module-Y_17.js";
import i from "./module-e_16.js";
import a from "./module-x_2_16.js";
export default a
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return o(r) && i(r.prototype, Object(t));
    };
