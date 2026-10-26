import n from "./module-YR_8.js";
import i from "./module-Y_9.js";
import o from "./module-e_8.js";
import s from "./module-x_2_8.js";
export default s
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return i(r) && o(r.prototype, Object(t));
    };
