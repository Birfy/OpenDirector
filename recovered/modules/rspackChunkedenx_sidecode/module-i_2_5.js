import n from "./module-YR_5.js";
import i from "./module-Y_6.js";
import o from "./module-e_5.js";
import s from "./module-x_2_5.js";
export default s
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return i(r) && o(r.prototype, Object(t));
    };
