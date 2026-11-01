import n from "./module-YR_22.js";
import i from "./module-Y_23.js";
import o from "./module-e_22.js";
import s from "./module-x_2_22.js";
export default s
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return i(r) && o(r.prototype, Object(t));
    };
