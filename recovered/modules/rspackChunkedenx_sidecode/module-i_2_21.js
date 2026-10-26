import n from "./module-YR_21.js";
import i from "./module-Y_22.js";
import o from "./module-e_21.js";
import s from "./module-x_2_21.js";
export default s
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return i(r) && o(r.prototype, Object(t));
    };
