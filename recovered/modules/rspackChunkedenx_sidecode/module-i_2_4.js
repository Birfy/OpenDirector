import n from "./module-YR_4.js";
import i from "./module-Y_5.js";
import o from "./module-e_4.js";
import s from "./module-x_2_4.js";
export default s
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return i(r) && o(r.prototype, Object(t));
    };
